const profile_class = Java.type("xyz.wagyourtail.jsmacros.profile.Profile"); // js doesn't do static references from the instance...
const profile_instance = jsmacros.getProfile()
const HashMap = Java.type("java.util.HashMap"); // need to use a java `Map` for args.

// register the event so we can bind macros to it in the events tab
profile_class.registry.addEvent("CUSTOM_JS");

// 1.2.2+
// use this instead of the `profile_class` stuff
// profile_instance.getRegistry().addEvent("CUSTOM_JS");


// set args
let args = new HashMap();
// key must be a string and values must be java types or things will break...
// if it's complaining about a value, Java.to might be useful. (https://github.com/graalvm/graaljs/blob/master/docs/user/JavaScriptCompatibility.md#javatojsdata-totype)
args.put("test", 1);

// trigger macros and run them async
profile_instance.triggerMacro("CUSTOM_JS", args);


args = new HashMap();
args.put("test", 2);

// trigger macros and wait for them to complete
profile_instance.triggerMacroJoin("CUSTOM_JS", args);


args = new HashMap();
args.put("test", 3);

// trigger macro don't also trigger the "ANYTHING" event
profile_instance.triggerMacroNoAnything("CUSTOM_JS", args);


// 1.2.2+
// trigger macros and wait for them to complete without the "ANYTHING" event
args = new HashMap();
args.put("test", 4);

profile_instance.triggerMacroNoAnything("CUSTOM_JS", args)