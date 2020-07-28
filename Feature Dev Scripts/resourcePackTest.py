rp = jsmacros.getGameOptions().getEnabledResourcePacks()

chat.log(jsmacros.getGameOptions().getResourcePacks())

jsmacros.getGameOptions().setEnabledResourcePacks(["file/1.15.2-r1.zip"] + list(rp))