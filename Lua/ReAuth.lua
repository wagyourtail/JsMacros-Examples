--LUA 1.0.2 for JsMacros 1.2.3

minecraft = jsmacros:getMinecraft()
networkProxy = (minecraft.getNetworkProxy or minecraft.method_1487)(minecraft)

if not hud:getOpenScreen() then

    local UUID = luajava.bindClass("java.util.UUID")

	local Session = reflection:getClass("net.minecraft.class_320", "net.minecraft.client.util.Session")
	
    --from com.mojang.authlib import Agent
    local Agent = luajava.bindClass("com.mojang.authlib.Agent")
    --from com.mojang.authlib.yggdrasil import YggdrasilAuthenticationService
    local YggAuthService = luajava.bindClass("com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService")
    --from com.mojang.util import UUIDTypeAdapter
    local UUIDTypeAdapter = luajava.bindClass("com.mojang.util.UUIDTypeAdapter")

    local MCAgent = Agent.MINECRAFT

    local uuidd = UUID:randomUUID():toString()
    local yas = luajava.new(YggAuthService, networkProxy, uuidd)
    local yua = yas:createUserAuthentication(MCAgent)
    local minecraftSessionService = yas:createMinecraftSessionService()

    username = ""
    password = ""

    loginScreen = hud:createScreen("Login", False)

    function setSession(s)
        local sessionField = reflection:getDeclaredField(minecraft:getClass(), "session", "field_1726")

        sessionField:setAccessible(true)
        sessionField:set(minecraft, s)
	end
	
    function onSubmit(b,s)
        yua:setUsername(username)
        yua:setPassword(password)
        password = nil
        yua:logIn()
        local login = UUIDTypeAdapter:fromUUID(yua:getSelectedProfile():getId())

        local session = luajava.new(Session, yua:getSelectedProfile():getName(), login, yua:getAuthenticatedToken(), yua:getUserType():getName())

        setSession(session)

        hud:openScreen(nil)

        chat:log("logged in as: " .. yua:getSelectedProfile():getName())
	end
	
    function setU(e,s)
        username = e
	end
	
    function setP(e,s)
        password = e
	end
	
    function initScreen(screen)
        local w = screen:getWidth()
        local h = screen:getHeight()
        local textX = w / 6
        local uname = screen:addText("Login:", textX, h / 4, 0xFFFFFF, True)
        local pword = screen:addText("Password:", textX, h / 4 + 25, 0xFFFFFF, True)
        local inputX = textX + pword:getWidth() + 15
        screen:addTextInput(inputX, h / 4 - 5, 200, 19, "", consumer:toBiConsumer(setU))
        screen:addTextInput(inputX, h / 4 + 20, 200, 19, "", consumer:toBiConsumer(setP))
		screen:addButton(inputX + 50, h / 4 + 50, 100, 20, "login", consumer:toBiConsumer(onSubmit))
	end
	
    loginScreen.onInit = consumer:toConsumer(initScreen)

    hud:openScreen(loginScreen)
end