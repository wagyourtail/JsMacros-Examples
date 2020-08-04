#JEP 1.0.2 for JsMacros 1.2.3

minecraft = jsmacros.getMinecraft()
networkProxy = hasattr(minecraft.getClass(), "getNetworkProxy") and minecraft.getNetworkProxy() or minecraft.method_1487()

import sys

if not hud.getOpenScreen():

    from java.lang import Class
    from java.util import UUID
    from java.util.function import Consumer, BiConsumer

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

    MCAgent = Agent.MINECRAFT

    uuid = UUID.randomUUID().toString()
    yas = YggAuthService(networkProxy, uuid)
    yua = yas.createUserAuthentication(MCAgent)
    minecraftSessionService = yas.createMinecraftSessionService()

    username = ""
    password = ""

    loginScreen = hud.createScreen("Login", False)

    def setSession(s):
        sessionField = reflection.getDeclaredField(minecraft.getClass(), "session", "field_1726")

        sessionField.setAccessible(True)
        sessionField.set(minecraft, s)

    def onSubmit(b,s):
        global username, password
        yua.setUsername(username)
        yua.setPassword(password)
        password = None
        yua.logIn()
        login = reflection.getDeclaredMethod(UUIDTypeAdapter, "fromUUID", yua.getSelectedProfile().getId().getClass()).invoke(None, yua.getSelectedProfile().getId())

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
        textX = int(w / 6)
        uname = screen.addText("Login:", textX, int(h / 4), 0xFFFFFF, True)
        pword = screen.addText("Password:", textX, int(h / 4) + 25, 0xFFFFFF, True)
        inputX = textX + pword.getWidth() + 15
        screen.addTextInput(inputX, int(h / 4) - 5, 200, 19, "", consumer.toBiConsumer(setU))
        screen.addTextInput(inputX, int(h / 4) + 20, 200, 19, "", consumer.toBiConsumer(setP))
        screen.addButton(inputX + 50, int(h / 4) + 50, 100, 20, "login", consumer.toBiConsumer(onSubmit))

    loginScreen.onInit = consumer.toConsumer(initScreen)
    loginScreen.onClose = consumer.toConsumer(lambda s: consumer.stop())

    hud.openScreen(loginScreen)