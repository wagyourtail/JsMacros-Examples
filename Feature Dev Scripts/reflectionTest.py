## this is a test to grab chat.title via reflection in JEP

from java.lang import Integer

cf = reflection.getClass("xyz.wagyourtail.jsmacros.runscript.functions.chatFunctions")
obj = reflection.getClass("java.lang.Object")
intt = reflection.getClass("int")

f = reflection.getDeclaredMethod(cf, "title", [obj, obj, intt, intt, intt])

reflection.invokeMethod(f, chat, ["wasd", "", 20, 20, 20])