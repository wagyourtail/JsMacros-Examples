profile = jsmacros.getProfile()

profile.registry.addEvent("CUSTOM_PY")
# use profile.getRegistry() in 1.2.2+

profile.triggerMacro("CUSTOM_PY", {"test":1})
profile.triggerMacroJoin("CUSTOM_PY", {"test":2})
profile.triggerMacroNoAnything("CUSTOM_PY", {"test":3})

#1.2.2+
profile.triggerMacroJoinNoAnything("CUSTOM_PY", {"test":4})
