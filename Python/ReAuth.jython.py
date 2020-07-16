minecraft = jsmacros.getMinecraft()
networkProxy = hasattr(minecraft.getClass(), "getNetworkProxy") and minecraft.getNetworkProxy() or minecraft.method_1487()

import sys

if not hud.getOpenScreen():

    from java.lang import Class
    from java.lang import NoSuchFieldException
    from java.util import UUID
    from java.util.function import Consumer, BiConsumer

    class jc(Consumer):
        def __init__(self, fn):
            self.accept=fn

    class jbc(BiConsumer):
        def __init__(self, fn):
            self.accept=fn

    try:
        from net.minecraft.client.util import Session
    except ImportError:
        from net.minecraft import class_320 as Session

    #from com.mojang.authlib import Agent
    Agent = Class.forName("com.mojang.authlib.Agent")
    #from com.mojang.authlib.yggdrasil import YggdrasilAuthenticationService
    YggAuthService = Class.forName("com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService")
    #from com.mojang.util import UUIDTypeAdapter
    UUIDTypeAdapter = Class.forName("com.mojang.util.UUIDTypeAdapter")

    MCAgent = Agent.getField("MINECRAFT").get(Agent)

    uuid = UUID.randomUUID().toString()
    yas = YggAuthService.getConstructor(networkProxy.getClass(), Class.forName("java.lang.String")).newInstance(networkProxy, uuid)
    yua = yas.createUserAuthentication(MCAgent)
    minecraftSessionService = yas.createMinecraftSessionService()

    username = ""
    password = ""

    loginScreen = hud.createScreen("Login", False)

    def setSession(s):
        try:
            sessionField = minecraft.getClass().getDeclaredField("session")
        except NoSuchFieldException:
            sessionField = minecraft.getClass().getDeclaredField("field_1726")

        sessionField.setAccessible(True)
        sessionField.set(minecraft, s)

    def onSubmit(b,s):
        global username, password
        yua.setUsername(username)
        yua.setPassword(password)
        password = None
        yua.logIn()
        login = UUIDTypeAdapter.getDeclaredMethod("fromUUID", yua.getSelectedProfile().getId().getClass()).invoke(None, yua.getSelectedProfile().getId())

        session = Session(yua.getSelectedProfile().getName(), login, yua.getAuthenticatedToken(), yua.getUserType().getName())

        setSession(session)

        hud.openScreen(None)

        chat.log("logged in as: " + yua.getSelectedProfile().getName());

    def setU(e,s):
        global username
        username = e

    def setP(e,s):
        global password
        password = e

    def initScreen(screen):
        w = screen.getWidth()
        h = screen.getHeight()
        textX = w / 6
        uname = screen.addText("Login:", textX, h / 4, 0xFFFFFF, True)
        pword = screen.addText("Password:", textX, h / 4 + 25, 0xFFFFFF, True)
        inputX = textX + pword.getWidth() + 15
        screen.addTextInput(inputX, h / 4 - 5, 200, 19, "", jbc(setU))
        screen.addTextInput(inputX, h / 4 + 20, 200, 19, "", jbc(setP))
        screen.addButton(inputX + 50, h / 4 + 50, 100, 20, "login", jbc(onSubmit))

    loginScreen.onInit = jc(initScreen)

    hud.openScreen(loginScreen)