declare const event: Events.BaseEvent;
declare const file: Java.java.io.File

declare namespace Events {
	export interface BaseEvent extends Java.Object {
		getEventName(): string;
	}

	export interface ProfileLoad extends BaseEvent {		
		readonly profileName: string
		
		toString():string;
		
	}

	
	/**
	 * Custom Events
	 */
	export interface Custom extends BaseEvent {		
		eventName: string
		
		
		/**
		 * Triggers the event.
		 */
		trigger():void;
		
		/**
		 * Triggers the event and waits for it to complete.
		 */
		triggerJoin():void;
		
		/**
		 * Put an Integer into the event.
		 */
		putInt(name: string, i: number):number;
		
		/**
		 * put a String into the event.
		 */
		putString(name: string, str: string):string;
		
		/**
		 * put a Float into the event.
		 */
		putFloat(name: string, f: number):number;
		
		/**
		 * put a Double into the event.
		 */
		putDouble(name: string, d: number):number;
		
		/**
		 * put a Boolean into the event.
		 */
		putBoolean(name: string, b: boolean):boolean;
		
		/**
		 * put anything else into the event.
		 */
		putObject(name: string, o: any):any;
		
		/**
		 * Returns the type of the defined item in the event as a string.
		 */
		getType(name: string):string;
		
		/**
		 * Gets an Integer from the event.
		 */
		getInt(name: string):number;
		
		/**
		 * Gets a String from the event
		 */
		getString(name: string):string;
		
		/**
		 * Gets a Float from the event.
		 */
		getFloat(name: string):number;
		
		/**
		 * Gets a Double from the event.
		 */
		getDouble(name: string):number;
		
		/**
		 * Gets a Boolean from the event.
		 */
		getBoolean(name: string):boolean;
		
		/**
		 * Gets an Object from the event.
		 */
		getObject(name: string):any;
		
		/**
		 * registers event so you can see it in the gui
		 */
		registerEvent():void;
		
	}

	export interface PlayerLeave extends BaseEvent {		
		readonly UUID: string
		readonly player: Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerListEntryHelper
		
		toString():string;
		
	}

	export interface Death extends BaseEvent {		
		
		toString():string;
		
	}

	export interface Damage extends BaseEvent {		
		readonly attacker: Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<>
		readonly source: string
		readonly health: number
		readonly change: number
		
		toString():string;
		
	}

	export interface ItemDamage extends BaseEvent {		
		readonly item: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		readonly damage: number
		
		toString():string;
		
	}

	export interface AirChange extends BaseEvent {		
		readonly air: number
		
		toString():string;
		
	}

	export interface RecvMessage extends BaseEvent {		
		text: Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper
		
		toString():string;
		
	}

	export interface Disconnect extends BaseEvent {		
		
		toString():string;
		
	}

	export interface ArmorChange extends BaseEvent {		
		readonly slot: string
		readonly item: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		readonly oldItem: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		
		toString():string;
		
	}

	export interface OpenScreen extends BaseEvent {		
		readonly screen: Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen
		readonly screenName: string
		
		toString():string;
		
	}

	export interface JoinServer extends BaseEvent {		
		readonly player: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ClientPlayerEntityHelper<>
		readonly address: string
		
		toString():string;
		
	}

	export interface EXPChange extends BaseEvent {		
		readonly progress: number
		readonly total: number
		readonly level: number
		
		toString():string;
		
	}

	export interface ChunkUnload extends BaseEvent {		
		readonly x: number
		readonly z: number
		
		toString():string;
		
	}

	export interface HeldItemChange extends BaseEvent {		
		readonly offHand: boolean
		readonly item: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		readonly oldItem: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		
		toString():string;
		
	}

	export interface SignEdit extends BaseEvent {		
		readonly pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D
		closeScreen: boolean
		signText: Java.java.util.List<string>
		
		toString():string;
		
	}

	export interface PlayerJoin extends BaseEvent {		
		readonly UUID: string
		readonly player: Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerListEntryHelper
		
		toString():string;
		
	}

	export interface Tick extends BaseEvent {		
		
		toString():string;
		
	}

	export interface BlockUpdate extends BaseEvent {		
		readonly block: Java.xyz.wagyourtail.jsmacros.client.api.helpers.BlockDataHelper
		readonly updateType: string
		
		toString():string;
		
	}

	export interface HungerChange extends BaseEvent {		
		readonly foodLevel: number
		
		toString():string;
		
	}

	export interface ChunkLoad extends BaseEvent {		
		readonly x: number
		readonly z: number
		readonly isFull: boolean
		
		toString():string;
		
	}

	export interface Sound extends BaseEvent {		
		readonly sound: string
		readonly volume: number
		readonly pitch: number
		readonly position: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D
		
		toString():string;
		
	}

	export interface Key extends BaseEvent {		
		readonly action: number
		readonly key: string
		readonly mods: string
		
		toString():string;
		
		/**
		 * turn an Integer for key modifiers into a Translation Key.
		 *
		 *static
		 */
		getKeyModifiers(mods: number):string;
		
		/**
		 * turn a Translation Key for modifiers into an Integer.
		 *
		 *static
		 */
		getModInt(mods: string):number;
		
	}

	export interface ItemPickup extends BaseEvent {		
		readonly item: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper
		
		toString():string;
		
	}

	export interface DimensionChange extends BaseEvent {		
		readonly dimension: string
		
		toString():string;
		
	}

	export interface Bossbar extends BaseEvent {		
		readonly bossBar: Java.xyz.wagyourtail.jsmacros.client.api.helpers.BossBarHelper
		readonly uuid: string
		readonly type: string
		
		toString():string;
		
	}

	export interface Title extends BaseEvent {		
		readonly type: string
		readonly message: Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper
		
		toString():string;
		
	}

	export interface SendMessage extends BaseEvent {		
		message: string
		
		toString():string;
		
	}
}


/**
 * Functions that interact directly with JsMacros or Events.
 * 
 * An instance of this class is passed to scripts as the `jsmacros` variable.
 */
declare namespace jsmacros {
	export function getProfile():Java.xyz.wagyourtail.jsmacros.core.config.BaseProfile;
	export function getConfig():Java.xyz.wagyourtail.jsmacros.core.config.ConfigManager;
	export function getRunningThreads():Java.java.util.Map<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger, Java.java.util.List<Java.xyz.wagyourtail.jsmacros.core.config.ScriptThreadWrapper>>;
	
	/**
	 * Run a script with optional callback of error.Runs a string as a script.
	 */
	export function runScript(language: string, script?: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.Throwable, any, any> | string, callback?: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<string, any, any>):Java.Thread;
	
	/**
	 * Opens a file with the default system program.
	 */
	export function open(path: string):void;
	
	/**
	 * Creates a listener for an event, this function can be more efficient that running a script file when used properly.
	 */
	export function on(event: string, callback: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Events.BaseEvent, any, any>):Java.xyz.wagyourtail.jsmacros.core.event.IEventListener;
	
	/**
	 * Creates a single-run listener for an event, this function can be more efficient that running a script file when used properly.
	 */
	export function once(event: string, callback: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Events.BaseEvent, any, any>):Java.xyz.wagyourtail.jsmacros.core.event.IEventListener;
	
	/**
	 * Removes a IEventListener from an event.
	 */
	export function off(event: Java.xyz.wagyourtail.jsmacros.core.event.IEventListener | string, listener?: Java.xyz.wagyourtail.jsmacros.core.event.IEventListener):boolean;
	export function listeners(event: string):Java.java.util.List<Java.xyz.wagyourtail.jsmacros.core.event.IEventListener>;
	
	/**
	 * create a custom event object that can trigger a event. It's recommended to use 
	 * EventCustom#registerEvent() to set up the event to be visible in the GUI.
	 */
	export function createCustomEvent(eventName: string):Events.Custom;
	
}


/**
 * Functions for getting and using raw java classes, methods and functions.
 *
 * An instance of this class is passed to scripts as the `reflection` variable.
 */
declare namespace reflection {
	
	/**
	 * Use this to specify a class with intermediary and yarn names of classes for cleaner code. also has support for
	 * java primitives by using their name in lower case.
	 */
	export function getClass(name: string, name2?: string):Java.Class<any>;
	
	/**
	 * Use this to specify a method with intermediary and yarn names of classes for cleaner code.
	 */
	export function getDeclaredMethod(c: Java.Class<any>, name: string, name2: Java.Class<any> | string, parameterTypes?: Java.Class<any>):Java.reflect.Method;
	
	/**
	 * Use this to specify a field with intermediary and yarn names of classes for cleaner code.
	 */
	export function getDeclaredField(c: Java.Class<any>, name: string, name2?: string):Java.reflect.Field;
	
	/**
	 * Invoke a method on an object with auto type coercion for numbers.
	 */
	export function invokeMethod(m: Java.reflect.Method, c: any, objects: Java.Array<any>):any;
	
	/**
	 * Attempts to create a new instance of a class. You probably don't have to use this one and can just call `new` on a Class unless you're in LUA, but then you also have the (kinda poorly
	 * doccumented, can someone find a better docs link for me)
	 * <a href= "http://luaj.sourceforge.net/api/3.2/org/luaj/vm2/lib/jse/LuajavaLib.html">LuaJava Library</a>.
	 */
	export function newInstance<T>(c: Java.Class<T>, objects: Java.Array<any>):T;
	
	/**
	 * Loads a jar file to be accessible with this library.
	 */
	export function loadJarFile(file: string):boolean;
	
}


/**
 * Functions for getting and using raw java classes, methods and functions.
 * 
 * An instance of this class is passed to scripts as the `request` variable.
 */
declare namespace request {
	
	/**
	 * create a HTTPRequest handler to the specified URL
	 */
	export function create(url: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest;
	
	/**
	 * send a GET request to the specified URL.
	 */
	export function get(url: string, headers?: Java.java.util.Map<string, string>):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest.Response;
	
	/**
	 * send a POST request to the specified URL.
	 */
	export function post(url: string, data: string, headers?: Java.java.util.Map<string, string>):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest.Response;
	
	/**
	 * Create a Websocket handler.
	 */
	export function createWS(url: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket;
	
	/**
	 * Create a Websocket handler.
	 */
	export function createWS2(url: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket;
	
}


/**
 * Consumer implementation for wrapping consumers to match the language spec.
 *
 * An instance of this class is passed to scripts as the `consumer` variable.
 *
 * Javascript:
 * language spec requires that only one thread can hold an instance of the language at a time,
 * so this implementation uses a non-preemptive queue for the threads that call the resulting MethodWrappers.
 *
 * JEP:
 * language spec requires everything to be on the same thread, on the java end, so all calls to MethodWrappers
 * call back to JEP's starting thread and wait for the call to complete. This means that JEP can sometimes have trouble
 * closing properly, so if you use any MethodWrappers, be sure to call FConsumer#stop(), to close the process,
 * otherwise it's a memory leak.
 *
 * Jython:
 * no limitations
 *
 * LUA:
 * no limitations
 */
declare namespace consumer {
	
	/**
	 * Wraps a Consumer to match the guest language requirements.
	 */
	export function toConsumer<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	
	/**
	 * Wraps a BiConsumer to match the guest language requirements.
	 */
	export function toBiConsumer<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	
	/**
	 * Wraps a Consumer to match the guest language requirements, without halting the thread the consumer's called in.
	 */
	export function toAsyncConsumer<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	
	/**
	 * Wraps a BiConsumer to match the guest language requirements, without halting the thread the consumer's called in.
	 */
	export function toAsyncBiConsumer<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	export function autoWrap<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	export function autoWrapAsync<A, B, R>(c: (arg0?: A, arg1?: B) => R):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<A, B, R>;
	
	/**
	 * only important for JEP... stops the instance
	 */
	export function stop():void;
	
}


/**
 * "Global" variables for passing to other contexts.
 * 
 * An instance of this class is passed to scripts as the `globalvars` variable.
 */
declare namespace globalvars {
	
	/**
	 * Put an Integer into the global variable space.
	 */
	export function putInt(name: string, i: number):number;
	
	/**
	 * put a String into the global variable space.
	 */
	export function putString(name: string, str: string):string;
	
	/**
	 * put a Float into the global variable space.
	 */
	export function putFloat(name: string, f: number):number;
	
	/**
	 * put a Double into the global variable space.
	 */
	export function putDouble(name: string, d: number):number;
	
	/**
	 * put a Boolean into the global variable space.
	 */
	export function putBoolean(name: string, b: boolean):boolean;
	
	/**
	 * put anything else into the global variable space.
	 */
	export function putObject(name: string, o: any):any;
	
	/**
	 * Returns the type of the defined item in the global variable space as a string.
	 */
	export function getType(name: string):string;
	
	/**
	 * Gets an Integer from the global variable space.
	 */
	export function getInt(name: string):number;
	
	/**
	 * Gets a String from the global variable space
	 */
	export function getString(name: string):string;
	
	/**
	 * Gets a Float from the global variable space.
	 */
	export function getFloat(name: string):number;
	
	/**
	 * Gets a Double from the global variable space.
	 */
	export function getDouble(name: string):number;
	
	/**
	 * Gets a Boolean from the global variable space.
	 */
	export function getBoolean(name: string):boolean;
	
	/**
	 * Gets an Object from the global variable space.
	 */
	export function getObject(name: string):any;
	
	/**
	 * removes a key from the global varaible space.
	 */
	export function remove(key: string):void;
	export function getRaw():Java.java.util.Map<string, any>;
	
}


/**
 * Better File-System functions.
 * 
 * An instance of this class is passed to scripts as the `fs` variable.
 */
declare namespace fs {
	
	/**
	 * List files in path.
	 */
	export function list(path: string):Java.Array<string>;
	
	/**
	 * Check if a file exists.
	 */
	export function exists(path: string):boolean;
	
	/**
	 * Check if a file is a directory.
	 */
	export function isDir(path: string):boolean;
	
	/**
	 * Get the last part (name) of a file.
	 */
	export function getName(path: string):string;
	
	/**
	 * Make a directory.
	 */
	export function makeDir(path: string):boolean;
	
	/**
	 * Move a file.
	 */
	export function move(from: string, to: string):void;
	
	/**
	 * Copy a file.
	 */
	export function copy(from: string, to: string):void;
	
	/**
	 * Delete a file.
	 */
	export function unlink(path: string):boolean;
	
	/**
	 * Combine 2 paths.
	 */
	export function combine(patha: string, pathb: string):string;
	
	/**
	 * Gets the directory part of a file path, or the parent directory of a folder.
	 */
	export function getDir(path: string):string;
	
	/**
	 * Open a FileHandler for the file at the specified path.
	 */
	export function open(path: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.FileHandler;
	
}


/**
 * Functions for displaying stuff in 2 to 3 dimensions
 * 
 * An instance of this class is passed to scripts as the `hud` variable.
 */
declare namespace hud {
	export function createScreen(title: string, dirtBG: boolean):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
	
	/**
	 * Opens a IScreen Object.
	 */
	export function openScreen(s: Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen):void;
	export function getOpenScreen():Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
	export function getOpenScreenName():string;
	export function isContainer():boolean;
	export function createDraw2D():Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IDraw2D<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D>;
	export function registerDraw2D(overlay: Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IDraw2D<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D>):void;
	export function unregisterDraw2D(overlay: Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D):void;
	export function listDraw2Ds():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IDraw2D<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D>>;
	export function clearDraw2Ds():void;
	export function createDraw3D():Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D;
	export function registerDraw3D(draw: Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D):void;
	export function unregisterDraw3D(draw: Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D):void;
	export function listDraw3Ds():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D>;
	export function clearDraw3Ds():void;
	export function getMouseX():number;
	export function getMouseY():number;
	
}


/**
 * Functions for getting and using world data.
 * 
 * An instance of this class is passed to scripts as the `world` variable.
 */
declare namespace world {
	
	/**
	 * returns whether a world is currently loaded
	 */
	export function isWorldLoaded():boolean;
	export function getLoadedPlayers():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerEntityHelper</* minecraft classes, as any, because obfuscation: */ any>>;
	export function getPlayers():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerListEntryHelper>;
	export function getBlock(x: number, y: number, z: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.BlockDataHelper;
	export function getScoreboards():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ScoreboardsHelper;
	export function getEntities():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<any>>;
	export function getDimension():string;
	export function getBiome():string;
	export function getTime():number;
	
	/**
	 * This is supposed to be time of day, but it appears to be the same as FWorld#getTime() to me...
	 */
	export function getTimeOfDay():number;
	export function getRespawnPos():Java.xyz.wagyourtail.jsmacros.client.api.helpers.BlockPosHelper;
	export function getDifficulty():number;
	export function getMoonPhase():number;
	export function getSkyLight(x: number, y: number, z: number):number;
	export function getBlockLight(x: number, y: number, z: number):number;
	
	/**
	 * plays a sound file using javax's sound stuff.
	 */
	export function playSoundFile(file: string, volume: number):Java.javax.sound.sampled.Clip;
	
	/**
	 * plays a minecraft sound using the internal system.
	 */
	export function playSound(id: string, volume?: number, pitch?: number, x?: number, y?: number, z?: number):void;
	export function getBossBars():Java.java.util.Map<string, Java.xyz.wagyourtail.jsmacros.client.api.helpers.BossBarHelper>;
	
	/**
	 * Check whether a chunk is within the render distance and loaded.
	 */
	export function isChunkLoaded(chunkX: number, chunkZ: number):boolean;
	export function getCurrentServerAddress():string;
	export function getBiomeAt(x: number, z: number):string;
	export function getServerTPS():string;
	export function getServerInstantTPS():number;
	export function getServer1MAverageTPS():number;
	export function getServer5MAverageTPS():number;
	export function getServer15MAverageTPS():number;
	
}


/**
 * Functions that interact with minecraft that don't fit into their own module.
 */
declare namespace client {
	export function getMinecraft():/* minecraft classes, as any, because obfuscation: */ any;
	export function getGameOptions():Java.xyz.wagyourtail.jsmacros.client.api.helpers.OptionsHelper;
	export function mcVersion():string;
	export function getFPS():string;
	
	/**
	 * Connect to a server
	 */
	export function connect(ip: string, port?: number):void;
	
	/**
	 * Disconnect from a server with callback.
	 */
	export function disconnect(callback?: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<boolean, any, any>):void;
	
	/**
	 * waits the specified number of client ticks.
	 */
	export function waitTick(i?: number):void;
	
}


/**
 * Functions for interacting with chat.
 * 
 * An instance of this class is passed to scripts as the `chat` variable.
 */
declare namespace chat {
	
	/**
	 * Log to player chat.
	 */
	export function log(message: any):void;
	
	/**
	 * Say to server as player.
	 */
	export function say(message: string):void;
	
	/**
	 * Display a Title to the player.
	 */
	export function title(title: any, subtitle: any, fadeIn: number, remain: number, fadeOut: number):void;
	
	/**
	 * Display the smaller title that's above the actionbar.
	 */
	export function actionbar(text: any, tinted: boolean):void;
	
	/**
	 * Display a toast.
	 */
	export function toast(title: any, desc: any):void;
	
	/**
	 * Creates a TextHelper for use where you need one and not a string.
	 */
	export function createTextHelperFromString(content: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
	
	/**
	 * Create a  TextHelper for use where you need one and not a string.
	 */
	export function createTextHelperFromJSON(json: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
	export function createTextBuilder():Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
	
}


/**
 * Functions for getting and using raw java classes, methods and functions.
 * 
 * An instance of this class is passed to scripts as the `time` variable.
 */
declare namespace time {
	export function time():number;
	
	/**
	 * Sleeps the current thread for the specified time in MS.
	 */
	export function sleep(millis: number):void;
	
}


/**
 * Functions for getting and modifying key pressed states.
 * 
 * An instance of this class is passed to scripts as the `keybind` variable.
 */
declare namespace keybind {
	
	/**
	 * Dont use this one... get the raw minecraft keycode class.
	 */
	export function getKeyCode(keyName: string):/* minecraft classes, as any, because obfuscation: */ any;
	export function getKeyBindings():Java.java.util.Map<string, string>;
	
	/**
	 * Sets a minecraft keybind to the specified key.
	 */
	export function setKeyBind(bind: string, key: string):void;
	
	/**
	 * Set a key-state for a key.
	 */
	export function key(keyName: string, keyState: boolean):void;
	
	/**
	 * Set a key-state using the name of the keybind rather than the name of the key.
	 * 
	 * This is probably the one you should use.
	 */
	export function keyBind(keyBind: string, keyState: boolean):void;
	export function getPressedKeys():Java.java.util.List<string>;
	
}


/**
 * Functions for getting and modifying the player's state.
 * 
 * An instance of this class is passed to scripts as the `player` variable.
 */
declare namespace player {
	export function openInventory():Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
	export function getPlayer():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ClientPlayerEntityHelper</* minecraft classes, as any, because obfuscation: */ any>;
	export function getGameMode():string;
	export function rayTraceBlock(distance: number, fluid: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.BlockDataHelper;
	export function rayTraceEntity():Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper</* minecraft classes, as any, because obfuscation: */ any>;
	
	/**
	 * Write to a sign screen if a sign screen is currently open.
	 */
	export function writeSign(l1: string, l2: string, l3: string, l4: string):boolean;
	
	/**
	 * Take a screenshot and save to a file.
	 *
	 * `file` is the optional one, typescript doesn't like it not being the last one that's optional
	 */
	export function takeScreenshot(folder: string, file: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper, any, any> | string, callback?: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper, any, any>):void;
	
}

declare namespace Java {
	export interface Thread extends Java.Object, Java.Runnable {	
		
			/**
			 * static
			 */
		readonly MIN_PRIORITY: number
		
			/**
			 * static
			 */
		readonly NORM_PRIORITY: number
		
			/**
			 * static
			 */
		readonly MAX_PRIORITY: number
		
		
		/**
		 * static
		 */
		currentThread():Java.Thread;
		
		/**
		 * static
		 */
		yield():void;
		
		/**
		 * static
		 */
		sleep(arg0: number, arg1?: number):void;
		start():void;
		run():void;
		stop(arg0?: Java.Throwable):void;
		interrupt():void;
		
		/**
		 * static
		 */
		interrupted():boolean;
		isInterrupted():boolean;
		destroy():void;
		isAlive():boolean;
		suspend():void;
		resume():void;
		setPriority(arg0: number):void;
		getPriority():number;
		setName(arg0: string):void;
		getName():string;
		getThreadGroup():Java.ThreadGroup;
		
		/**
		 * static
		 */
		activeCount():number;
		
		/**
		 * static
		 */
		enumerate(arg0: Java.Array<Java.Thread>):number;
		countStackFrames():number;
		join(arg0?: number, arg1?: number):void;
		
		/**
		 * static
		 */
		dumpStack():void;
		setDaemon(arg0: boolean):void;
		isDaemon():boolean;
		checkAccess():void;
		toString():string;
		getContextClassLoader():Java.ClassLoader;
		setContextClassLoader(arg0: Java.ClassLoader):void;
		
		/**
		 * static
		 */
		holdsLock(arg0: any):boolean;
		getStackTrace():Java.Array<Java.StackTraceElement>;
		
		/**
		 * static
		 */
		getAllStackTraces():Java.java.util.Map<Java.Thread, Java.Array<Java.StackTraceElement>>;
		getId():number;
		getState():Java.Thread.State;
		
		/**
		 * static
		 */
		setDefaultUncaughtExceptionHandler(arg0: Java.Thread.UncaughtExceptionHandler):void;
		
		/**
		 * static
		 */
		getDefaultUncaughtExceptionHandler():Java.Thread.UncaughtExceptionHandler;
		getUncaughtExceptionHandler():Java.Thread.UncaughtExceptionHandler;
		setUncaughtExceptionHandler(arg0: Java.Thread.UncaughtExceptionHandler):void;
		
	}
	export interface Runnable extends Java.Interface {	
		
		run():void;
		
	}
	export interface ThreadGroup extends Java.Object, Java.Thread.UncaughtExceptionHandler {	
		
		getName():string;
		getParent():Java.ThreadGroup;
		getMaxPriority():number;
		isDaemon():boolean;
		isDestroyed():boolean;
		setDaemon(arg0: boolean):void;
		setMaxPriority(arg0: number):void;
		parentOf(arg0: Java.ThreadGroup):boolean;
		checkAccess():void;
		activeCount():number;
		enumerate(arg0: Java.Array<Java.Thread> | Java.Array<Java.ThreadGroup>, arg1?: boolean):number;
		activeGroupCount():number;
		stop():void;
		interrupt():void;
		suspend():void;
		resume():void;
		destroy():void;
		list():void;
		uncaughtException(arg0: Java.Thread, arg1: Java.Throwable):void;
		allowThreadSuspension(arg0: boolean):boolean;
		toString():string;
		
	}
	export interface ClassLoader extends Java.Object {	
		
		loadClass(arg0: string):Java.Class<any>;
		getResource(arg0: string):Java.java.net.URL;
		getResources(arg0: string):Java.java.util.Enumeration<Java.java.net.URL>;
		
		/**
		 * static
		 */
		getSystemResource(arg0: string):Java.java.net.URL;
		
		/**
		 * static
		 */
		getSystemResources(arg0: string):Java.java.util.Enumeration<Java.java.net.URL>;
		getResourceAsStream(arg0: string):Java.java.io.InputStream;
		
		/**
		 * static
		 */
		getSystemResourceAsStream(arg0: string):Java.java.io.InputStream;
		getParent():Java.ClassLoader;
		
		/**
		 * static
		 */
		getSystemClassLoader():Java.ClassLoader;
		setDefaultAssertionStatus(arg0: boolean):void;
		setPackageAssertionStatus(arg0: string, arg1: boolean):void;
		setClassAssertionStatus(arg0: string, arg1: boolean):void;
		clearAssertionStatus():void;
		
	}
	export interface Enum<E> extends Java.Object, Java.Comparable<E>, Java.java.io.Serializable {	
		
		name():string;
		ordinal():number;
		toString():string;
		equals(arg0: any):boolean;
		hashCode():number;
		compareTo(arg0: E):number;
		getDeclaringClass():Java.Class<E>;
		
		/**
		 * static
		 */
		valueOf<T>(arg0: Java.Class<T>, arg1: string):T;
		
	}
	export interface Comparable<T> extends Java.Interface {	
		
		compareTo(arg0: T):number;
		
	}
	export interface AutoCloseable extends Java.Interface {	
		
		close():void;
		
	}
	export interface Exception extends Java.Throwable {	
		
		
	}
	export interface Appendable extends Java.Interface {	
		
		append(arg0: string | number, arg1?: number, arg2?: number):Java.Appendable;
		
	}
	export interface Readable extends Java.Interface {	
		
		read(arg0: Java.java.nio.CharBuffer):number;
		
	}
	export namespace xyz.wagyourtail.jsmacros {
		
		export namespace client.api {
			
			export namespace helpers {
				export interface PlayerListEntryHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getUUID():string;
					getName():string;
					getDisplayText():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					toString():string;
					
				}
				export interface EntityHelper<T> extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper<T> {	
					
					getPos():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
					getX():number;
					getY():number;
					getZ():number;
					getEyeHeight():number;
					getPitch():number;
					getYaw():number;
					getName():string;
					getType():string;
					isGlowing():boolean;
					isInLava():boolean;
					isOnFire():boolean;
					getVehicle():Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<T>;
					getPassengers():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<any>>;
					getNBT():string;
					
					/**
					 * Sets whether the entity is glowing.
					 */
					setGlowing(val: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<T>;
					
					/**
					 * Checks if the entity is still alive.
					 */
					isAlive():boolean;
					toString():string;
					
					/**
					 * static
					 */
					create(e: /* minecraft classes, as any, because obfuscation: */ any):Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<any>;
					
				}
				export interface ItemStackHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					
					/**
					 * Sets the item damage value.
					 * 
					 * You may want to use ItemStackHelper#copy() first.
					 */
					setDamage(damage: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					isDamageable():boolean;
					isEnchantable():boolean;
					getDamage():number;
					getMaxDamage():number;
					getDefaultName():string;
					getName():string;
					getCount():number;
					getMaxCount():number;
					getNBT():string;
					getCreativeTab():string;
					getItemID():string;
					isEmpty():boolean;
					toString():string;
					equals(ish: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper | /* minecraft classes, as any, because obfuscation: */ any):boolean;
					isItemEqual(ish: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper | /* minecraft classes, as any, because obfuscation: */ any):boolean;
					isItemEqualIgnoreDamage(ish: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper | /* minecraft classes, as any, because obfuscation: */ any):boolean;
					isNBTEqual(ish: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper | /* minecraft classes, as any, because obfuscation: */ any):boolean;
					copy():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					
				}
				export interface TextHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					
					/**
					 * replace the text in this class with JSON data.
					 */
					replaceFromJson(json: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					
					/**
					 * replace the text in this class with String data.
					 */
					replaceFromString(content: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					getJson():string;
					getString():string;
					toJson():string;
					toString():string;
					
				}
				export interface ClientPlayerEntityHelper<T> extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerEntityHelper<T> {	
					
					
					/**
					 * look at the specified coordinates.
					 */
					lookAt(x: number, y: number, z?: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ClientPlayerEntityHelper<T>;
					getFoodLevel():number;
					toString():string;
					
				}
				export interface BlockDataHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getX():number;
					getY():number;
					getZ():number;
					getId():string;
					getName():string;
					getNBT():Java.java.util.Map<string, string>;
					getBlockState():Java.java.util.Map<string, string>;
					getBlockPos():Java.xyz.wagyourtail.jsmacros.client.api.helpers.BlockPosHelper;
					getRawBlock():/* minecraft classes, as any, because obfuscation: */ any;
					getRawBlockState():/* minecraft classes, as any, because obfuscation: */ any;
					getRawBlockEntity():/* minecraft classes, as any, because obfuscation: */ any;
					toString():string;
					
				}
				export interface BossBarHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getUUID():string;
					getPercent():number;
					getColor():string;
					getStyle():string;
					getName():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					toString():string;
					
				}
				export interface PlayerEntityHelper<T> extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.LivingEntityHelper<T> {	
					
					getAbilities():Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerAbilitiesHelper;
					getMainHand():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getOffHand():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getHeadArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getChestArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getLegArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getFootArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getXP():number;
					isSleeping():boolean;
					isSleepingLongEnough():boolean;
					toString():string;
					
				}
				export interface ScoreboardsHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getObjectiveForTeamColorIndex(index: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ScoreboardObjectiveHelper;
					
					/**
					 * `0` is tablist, `1` or `3 + getPlayerTeamColorIndex()` is sidebar, `2` should be tab list.
					 * therefore max slot number is 18.
					 */
					getObjectiveSlot(slot: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ScoreboardObjectiveHelper;
					getPlayerTeamColorIndex(entity: Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerEntityHelper</* minecraft classes, as any, because obfuscation: */ any>):number;
					getTeams():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.TeamHelper>;
					getPlayerTeam(p: Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerEntityHelper</* minecraft classes, as any, because obfuscation: */ any>):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TeamHelper;
					getCurrentScoreboard():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ScoreboardObjectiveHelper;
					
				}
				export interface BlockPosHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getX():number;
					getY():number;
					getZ():number;
					toString():string;
					
				}
				export interface OptionsHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getCloudMode():number;
					setCloudMode(mode: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.OptionsHelper;
					getGraphicsMode():number;
					setGraphicsMode(mode: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.OptionsHelper;
					getResourcePacks():Java.java.util.List<string>;
					getEnabledResourcePacks():Java.java.util.List<string>;
					
					/**
					 * Set the enabled resource packs to the provided list.
					 */
					setEnabledResourcePacks(enabled: Java.Array<string>):Java.xyz.wagyourtail.jsmacros.client.api.helpers.OptionsHelper;
					isRightHanded():boolean;
					setRightHanded(val: boolean):void;
					getFov():number;
					setFov(fov: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.OptionsHelper;
					getRenderDistance():number;
					setRenderDistance(d: number):void;
					getWidth():number;
					getHeight():number;
					setWidth(w: number):void;
					setHeight(h: number):void;
					setSize(w: number, h: number):void;
					getGamma():number;
					setGamma(gamma: number):void;
					
				}
				export interface BaseHelper<T> extends Java.Object {	
					
					getRaw():T;
					
				}
				export interface LivingEntityHelper<T> extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper<T> {	
					
					getStatusEffects():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.StatusEffectHelper>;
					getMainHand():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getOffHand():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getHeadArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getChestArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getLegArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getFootArmor():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					isSleeping():boolean;
					
				}
				export interface PlayerAbilitiesHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getInvulnerable():boolean;
					getFlying():boolean;
					getAllowFlying():boolean;
					getCreativeMode():boolean;
					
					/**
					 * set the player flying state.
					 */
					setFlying(b: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerAbilitiesHelper;
					
					/**
					 * set the player allow flying state.
					 */
					setAllowFlying(b: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerAbilitiesHelper;
					getFlySpeed():number;
					
					/**
					 * set the player fly speed multiplier.
					 */
					setFlySpeed(flySpeed: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.PlayerAbilitiesHelper;
					
				}
				export interface ScoreboardObjectiveHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getPlayerScores():Java.java.util.Map<string, number>;
					getName():string;
					getDisplayName():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					
				}
				export interface TeamHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getName():string;
					getDisplayName():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					getPlayerList():Java.java.util.List<string>;
					getColor():number;
					getPrefix():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					getSuffix():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					getCollisionRule():string;
					isFriendlyFire():boolean;
					showFriendlyInvisibles():boolean;
					nametagVisibility():string;
					deathMessageVisibility():string;
					
				}
				export interface ButtonWidgetHelper<T> extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper<T> {	
					
					getX():number;
					getY():number;
					
					/**
					 * Set the button position.
					 */
					setPos(x: number, y: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<T>;
					getWidth():number;
					
					/**
					 * change the text.
					 */
					setText(message: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<T>;
					getText():string;
					getActive():boolean;
					
					/**
					 * set the button clickable state.
					 */
					setActive(t: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<T>;
					
					/**
					 * set the button width.
					 */
					setWidth(width: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<T>;
					render(matrices: /* minecraft classes, as any, because obfuscation: */ any, mouseX: number, mouseY: number, delta: number):void;
					
				}
				
					/**
					 * F
					 */
				export interface TextFieldWidgetHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getText():string;
					
					/**
					 * set the currently entered String.
					 */
					setText(text: string):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper;
					setEditableColor(color: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper;
					setEditable(edit: boolean):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper;
					setUneditableColor(color: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper;
					
				}
				export interface StatusEffectHelper extends Java.xyz.wagyourtail.jsmacros.client.api.helpers.BaseHelper</* minecraft classes, as any, because obfuscation: */ any> {	
					
					getId():string;
					getStrength():number;
					getTime():number;
					
				}
				
			}
			export namespace sharedinterfaces {
				export interface IScreen extends Java.Interface, Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IDraw2D<Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen> {	
					
					getScreenClassName():string;
					getTitleText():string;
					getButtonWidgets():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<>>;
					getTextFields():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper>;
					addButton(x: number, y: number, width: number, height: number, text: string, callback: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<>, Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen, any>):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<>;
					removeButton(btn: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ButtonWidgetHelper<>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					addTextInput(x: number, y: number, width: number, height: number, message: string, onChange: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<string, Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen, any>):Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper;
					removeTextInput(inp: Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextFieldWidgetHelper):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnMouseDown(onMouseDown: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D, number, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnMouseDrag(onMouseDrag: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D, number, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnMouseUp(onMouseUp: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D, number, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnScroll(onScroll: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D, number, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnKeyPressed(onKeyPressed: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<number, number, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					setOnClose(onClose: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen, any, any>):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					close():void;
					addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
					removeRect(r: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					addItem(x: number, y: number, id: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper, overlay?: boolean, scale?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
					removeItem(i: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item):Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					
					/**
					 * calls the screen's init function re-loading it.
					 */
					reloadScreen():Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IScreen;
					
				}
				export interface IDraw2D<T> extends Java.Interface {	
					
					getWidth():number;
					getHeight():number;
					getTexts():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text>;
					getRects():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect>;
					getItems():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item>;
					getImages():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image>;
					getElements():Java.java.util.List</* minecraft classes, as any, because obfuscation: */ any>;
					
					/**
					 * removes any element regardless of type.
					 */
					removeElement(e: /* minecraft classes, as any, because obfuscation: */ any):T;
					
					/**
					 * re-add an element you removed with #removeElement(Drawable)
					 */
					reAddElement(e: /* minecraft classes, as any, because obfuscation: */ any):/* minecraft classes, as any, because obfuscation: */ any;
					addText(text: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper, x: number, y: number, color: number, shadow: boolean, scale?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
					removeText(t: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text):T;
					addImage(x: number, y: number, width: number, height: number, id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image;
					removeImage(i: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image):T;
					addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
					removeRect(r: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect):T;
					addItem(x: number, y: number, id: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper, overlay?: boolean, scale?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
					removeItem(i: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item):T;
					setOnInit(onInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<T, any, any>):T;
					setOnFailInit(catchInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<string, any, any>):T;
					init():void;
					render(matrixStack: /* minecraft classes, as any, because obfuscation: */ any):void;
					
				}
				
			}
			export namespace sharedclasses {
				
				export namespace PositionCommon {
					export interface Pos3D extends Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D {	
						
							/**
							 * static
							 */
						readonly ZERO: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D
						z: number
						
						getZ():number;
						add(pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
						multiply(pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
						toString():string;
						toVector():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						
					}
					export interface Pos2D extends Java.Object {	
						
							/**
							 * static
							 */
						readonly ZERO: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D
						x: number
						y: number
						
						getX():number;
						getY():number;
						add(pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D;
						multiply(pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D;
						toString():string;
						to3D():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
						toVector():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D;
						
					}
					export interface Vec2D extends Java.Object {	
						x1: number
						y1: number
						x2: number
						y2: number
						
						getX1():number;
						getY1():number;
						getX2():number;
						getY2():number;
						getDeltaX():number;
						getDeltaY():number;
						getStart():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D;
						getEnd():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos2D;
						getMagnitude():number;
						add(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D;
						multiply(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D;
						dotProduct(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D):number;
						reverse():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D;
						toString():string;
						to3D():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						
					}
					export interface Vec3D extends Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec2D {	
						z1: number
						z2: number
						
						getZ1():number;
						getZ2():number;
						getDeltaZ():number;
						getStart():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
						getEnd():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Pos3D;
						getMagnitude():number;
						add(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						multiply(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						getPitch():number;
						getYaw():number;
						dotProduct(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D):number;
						crossProduct(vec: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						reverse():Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D;
						toString():string;
						
					}
					
				}
				export namespace RenderCommon {
					export interface Rect extends Java.Object {	
						rotation: number
						x1: number
						y1: number
						x2: number
						y2: number
						color: number
						
						setColor(color: number, alpha?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
						setAlpha(alpha: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
						setPos(x1: number, y1: number, x2: number, y2: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
						setRotation(rotation: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
						render(matrices: /* minecraft classes, as any, because obfuscation: */ any, mouseX: number, mouseY: number, delta: number):void;
						
					}
					export interface Item extends Java.Object {	
						item: /* minecraft classes, as any, because obfuscation: */ any
						ovText: string
						overlay: boolean
						scale: number
						rotation: number
						x: number
						y: number
						
						setPos(x: number, y: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						setScale(scale: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						setRotation(rotation: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						setOverlay(overlay: boolean):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						setOverlayText(ovText: string):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						setItem(id: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper | string, count?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
						getItem():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
						render(matrices: /* minecraft classes, as any, because obfuscation: */ any, mouseX: number, mouseY: number, delta: number):void;
						
					}
					export interface Text extends Java.Object {	
						text: /* minecraft classes, as any, because obfuscation: */ any
						scale: number
						rotation: number
						x: number
						y: number
						color: number
						width: number
						shadow: boolean
						
						setScale(scale: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
						setRotation(rotation: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
						setPos(x: number, y: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
						setText(text: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
						getText():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
						getWidth():number;
						render(matrices: /* minecraft classes, as any, because obfuscation: */ any, mouseX: number, mouseY: number, delta: number):void;
						
					}
					export interface Image extends Java.Object {	
						rotation: number
						x: number
						y: number
						width: number
						height: number
						imageX: number
						imageY: number
						regionWidth: number
						regionHeight: number
						textureWidth: number
						textureHeight: number
						
						setPos(x: number, y: number, width: number, height: number):void;
						setRotation(rotation: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image;
						setImage(id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number):void;
						getImage():string;
						render(matrices: /* minecraft classes, as any, because obfuscation: */ any, mouseX: number, mouseY: number, delta: number):void;
						
					}
					
				}
				
			}
			export namespace classes {
				export interface Draw2D extends Java.Object, Java.xyz.wagyourtail.jsmacros.client.api.sharedinterfaces.IDraw2D<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D> {	
					onInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D, any, any>
					catchInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<string, any, any>
					
					getWidth():number;
					getHeight():number;
					getTexts():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text>;
					getRects():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect>;
					getItems():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item>;
					getImages():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image>;
					getElements():Java.java.util.List</* minecraft classes, as any, because obfuscation: */ any>;
					removeElement(e: /* minecraft classes, as any, because obfuscation: */ any):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					reAddElement(e: /* minecraft classes, as any, because obfuscation: */ any):/* minecraft classes, as any, because obfuscation: */ any;
					addText(text: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper, x: number, y: number, color: number, shadow: boolean, scale?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text;
					removeText(t: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Text):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					addImage(x: number, y: number, width: number, height: number, id: string, imageX: number, imageY: number, regionWidth: number, regionHeight: number, textureWidth: number, textureHeight: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image;
					removeImage(i: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Image):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					addRect(x1: number, y1: number, x2: number, y2: number, color: number, alpha?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect;
					removeRect(r: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Rect):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					addItem(x: number, y: number, id: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper, overlay?: boolean, scale?: number, rotation?: number):Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item;
					removeItem(i: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.RenderCommon.Item):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					init():void;
					render(matrixStack: /* minecraft classes, as any, because obfuscation: */ any):void;
					setOnInit(onInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D, any, any>):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					setOnFailInit(catchInit: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<string, any, any>):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw2D;
					
				}
				export interface Draw3D extends Java.Object {	
					
					getBoxes():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Box>;
					getLines():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Line>;
					addBox(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, alpha: number, fillColor: boolean | number, fillAlpha?: number, fill?: boolean):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Box;
					removeBox(b: Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Box):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D;
					addLine(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number, color: number, alpha?: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Line;
					removeLine(l: Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D.Line):Java.xyz.wagyourtail.jsmacros.client.api.classes.Draw3D;
					render():void;
					
				}
				
					/**
					 * usage: `builder.append("hello,").withColor(0xc).append(" World!").withColor(0x6)`
					 */
				export interface TextBuilder extends Java.Object {	
					
					
					/**
					 * move on to next section and set it's text.move on to next section and set it's text.
					 */
					append(text: string | Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * set current section's color
					 */
					withColor(color: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * set other formatting options for the current section
					 */
					withFormatting(underline: boolean, bold: boolean, italic: boolean, strikethrough: boolean, magic: boolean):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * set current section's hover event to show text
					 */
					withShowTextHover(text: Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * set current section's hover event to show an item
					 */
					withShowItemHover(item: Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * set current section's hover event to show an entity
					 */
					withShowEntityHover(entity: Java.xyz.wagyourtail.jsmacros.client.api.helpers.EntityHelper</* minecraft classes, as any, because obfuscation: */ any>):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * custom click event.
					 */
					withCustomClickEvent(action: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<any, any, any>):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * normal click events like: `open_url`, `open_file`, `run_command`, `suggest_command`, `change_page`, and `copy_to_clipboard`
					 */
					withClickEvent(action: string, value: string):Java.xyz.wagyourtail.jsmacros.client.api.classes.TextBuilder;
					
					/**
					 * Build to a TextHelper
					 */
					build():Java.xyz.wagyourtail.jsmacros.client.api.helpers.TextHelper;
					
				}
				export interface Inventory extends Java.Object {	
					
					
					/**
					 * Clicks a slot with a mouse button.
					 */
					click(slot: number, mousebutton: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					
					/**
					 * Does a drag-click with a mouse button. (the slots don't have to be in order or even adjacent, but when vanilla minecraft calls the underlying function they're always sorted...)
					 */
					dragClick(slots: Java.Array<number>, mousebutton: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					getSelectedHotbarSlotIndex():number;
					setSelectedHotbarSlotIndex(index: number):void;
					
					/**
					 * closes the inventory, (if the inventory/container is visible it will close the gui). also drops any "held on mouse" items.
					 */
					closeAndDrop():Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					
					/**
					 * Closes the inventory, and open gui if applicable.
					 */
					close():void;
					
					/**
					 * simulates a shift-click on a slot.
					 * It should be safe to chain these without FClient#waitTick() at least for a bunch of the same item.
					 */
					quick(slot: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					getHeld():Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getSlot(slot: number):Java.xyz.wagyourtail.jsmacros.client.api.helpers.ItemStackHelper;
					getTotalSlots():number;
					
					/**
					 * Splits the held stack into two slots. can be alternatively done with int) if this one has issues on some servers.
					 */
					split(slot1: number, slot2: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					
					/**
					 * Does that double click thingy to turn a incomplete stack pickup into a complete stack pickup if you have more in your inventory.
					 */
					grabAll(slot: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					
					/**
					 * swaps the items in two slots.
					 */
					swap(slot1: number, slot2: number):Java.xyz.wagyourtail.jsmacros.client.api.classes.Inventory;
					openGui():void;
					getSlotUnderMouse():number;
					getType():string;
					getMap():Java.java.util.Map<string, Java.Array<number>>;
					getLocation(slotNum: number):string;
					getContainerTitle():string;
					getRawContainer():/* minecraft classes, as any, because obfuscation: */ any;
					toString():string;
					
				}
				export namespace Draw3D {
					export interface Box extends Java.Object {	
						pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D
						color: number
						fillColor: number
						fill: boolean
						
						setPos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number):void;
						setColor(color: number, alpha?: number):void;
						setFillColor(fillColor: number, alpha?: number):void;
						setAlpha(alpha: number):void;
						setFillAlpha(alpha: number):void;
						setFill(fill: boolean):void;
						render():void;
						
					}
					export interface Line extends Java.Object {	
						pos: Java.xyz.wagyourtail.jsmacros.client.api.sharedclasses.PositionCommon.Vec3D
						color: number
						
						setPos(x1: number, y1: number, z1: number, x2: number, y2: number, z2: number):void;
						setColor(color: number, alpha?: number):void;
						setAlpha(alpha: number):void;
						render():void;
						
					}
					
				}
				
			}
			
		}
		export namespace core {
			
				/**
				 * Wraps most of the important functional interfaces.
				 */
			export interface MethodWrapper<T, U, R> extends Java.Object, Java.java.util._function.Consumer<T>, Java.java.util._function.BiConsumer<T, U>, Java.java.util._function.Function<T, R>, Java.java.util._function.BiFunction<T, U, R>, Java.java.util._function.Predicate<T>, Java.java.util._function.BiPredicate<T, U>, Java.Runnable, Java.java.util._function.Supplier<R>, Java.java.util.Comparator<T> {	
				
				accept(t: T, u?: U):void;
				apply(t: T, u?: U):R;
				test(t: T, u?: U):boolean;
				
				/**
				 * Makes Function and BiFunction work together.
				 * Extended so it's called on every type not just those 2.
				 */
				andThen<V>(after: Java.java.util._function.Function<any, any>):Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<T, U, V>;
				
				/**
				 * Makes Predicate and BiPredicate work together
				 */
				negate():Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<T, U, R>;
				
			}
			export namespace config {
				export interface BaseProfile extends Java.Object {	
					profileName: string
					
					logError(ex: Java.Throwable):void;
					getRegistry():Java.xyz.wagyourtail.jsmacros.core.event.BaseEventRegistry;
					loadOrCreateProfile(profileName: string):void;
					loadProfile(pName: string):boolean;
					saveProfile():void;
					triggerEvent(event: Events.BaseEvent):void;
					triggerEventJoin(event: Events.BaseEvent):void;
					triggerEventNoAnything(event: Events.BaseEvent):void;
					triggerEventJoinNoAnything(event: Events.BaseEvent):void;
					init(defaultProfile: string):void;
					getCurrentProfileName():string;
					renameCurrentProfile(profile: string):void;
					
				}
				export interface ConfigManager extends Java.Object {	
					options: Java.xyz.wagyourtail.jsmacros.core.config.ConfigOptions
					readonly configFolder: Java.java.io.File
					readonly macroFolder: Java.java.io.File
					readonly configFile: Java.java.io.File
					
					loadConfig():void;
					saveConfig():void;
					getSortComparator():Java.java.util.Comparator<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger>;
					setSortComparator(method: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.SortMethod):void;
					
				}
				export interface ScriptTrigger extends Java.Object {	
					triggerType: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.TriggerType
					event: string
					scriptFile: string
					enabled: boolean
					
					equals(macro: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger):boolean;
					toString():string;
					
					/**
					 * static
					 */
					copy(m?: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger):Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger;
					getTriggerType():Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.TriggerType;
					getEvent():string;
					getScriptFile():string;
					getEnabled():boolean;
					
				}
				export interface ScriptThreadWrapper extends Java.Object {	
					readonly t: Java.Thread
					readonly m: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger
					readonly startTime: number
					
					start():void;
					getThread():Java.Thread;
					getRawScript():Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger;
					getStartTime():number;
					
				}
				export interface ConfigOptions extends Java.Object {	
					defaultProfile: string
					sortMethod: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.SortMethod
					disableKeyWhenScreenOpen: boolean
					profiles: Java.java.util.Map<string, Java.java.util.List<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger>>
					extraJsOptions: Java.java.util.Map<string, string>
					lazySyntaxHighlighting: boolean
					
					
				}
				export namespace ScriptTrigger {
					export interface SortMethod extends Java.Enum<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.SortMethod> {	
						
						
						/**
						 * static
						 */
						values():Java.Array<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.SortMethod>;
						
						/**
						 * static
						 */
						valueOf(name: string):Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.SortMethod;
						
					}
					export interface TriggerType extends Java.Enum<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.TriggerType> {	
						
						
						/**
						 * static
						 */
						values():Java.Array<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.TriggerType>;
						
						/**
						 * static
						 */
						valueOf(name: string):Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger.TriggerType;
						
					}
					
				}
				
			}
			export namespace event {
				export interface IEventListener extends Java.Interface {	
					
					trigger(event: Events.BaseEvent):Java.Thread;
					
				}
				export interface BaseEventRegistry extends Java.Object {	
					readonly listeners: Java.java.util.Map<string, Java.java.util.Set<Java.xyz.wagyourtail.jsmacros.core.event.IEventListener>>
					readonly oldEvents: Java.java.util.Map<string, string>
					readonly events: Java.java.util.Set<string>
					
					clearMacros():void;
					addScriptTrigger(rawmacro: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger):void;
					addListener(event: string, listener: Java.xyz.wagyourtail.jsmacros.core.event.IEventListener):void;
					removeListener(event: string | Java.xyz.wagyourtail.jsmacros.core.event.IEventListener, listener?: Java.xyz.wagyourtail.jsmacros.core.event.IEventListener):boolean;
					removeScriptTrigger(rawmacro: Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger):boolean;
					getListeners(key?: string):Java.java.util.Map<string, Java.java.util.Set<Java.xyz.wagyourtail.jsmacros.core.event.IEventListener>>;
					getScriptTriggers():Java.java.util.List<Java.xyz.wagyourtail.jsmacros.core.config.ScriptTrigger>;
					addEvent(eventName: string | Java.Class<any>):void;
					
				}
				
			}
			export namespace library.impl.classes {
				export interface HTTPRequest extends Java.Object {	
					headers: Java.java.util.Map<string, string>
					conn: Java.java.net.URL
					
					addHeader(key: string, value: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest;
					get():Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest.Response;
					post(data: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.HTTPRequest.Response;
					
				}
				export interface Websocket extends Java.Object {	
					
						/**
						 * calls your method as a BiConsumer&lt;WebSocket, List&lt;String&gt;&gt;
						 */
					onConnect: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.com.neovisionaries.ws.client.WebSocket, Java.java.util.Map<string, Java.java.util.List<string>>, any>
					
						/**
						 * calls your method as a BiConsumer&lt;WebSocket, String&gt;
						 */
					onTextMessage: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.com.neovisionaries.ws.client.WebSocket, string, any>
					
						/**
						 * calls your method as a BiConsumer&lt;WebSocket, Disconnected&gt;
						 */
					onDisconnect: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.com.neovisionaries.ws.client.WebSocket, Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket.Disconnected, any>
					
						/**
						 * calls your method as a BiConsumer&lt;WebSocket, WebSocketException&gt;
						 */
					onError: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.com.neovisionaries.ws.client.WebSocket, Java.com.neovisionaries.ws.client.WebSocketException, any>
					
						/**
						 * calls your method as a BiConsumer&lt;WebSocket, WebSocketFrame&gt;
						 */
					onFrame: Java.xyz.wagyourtail.jsmacros.core.MethodWrapper<Java.com.neovisionaries.ws.client.WebSocket, Java.com.neovisionaries.ws.client.WebSocketFrame, any>
					
					connect():Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket;
					getWs():Java.com.neovisionaries.ws.client.WebSocket;
					sendText(text: string):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket;
					close(closeCode?: number):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.Websocket;
					
				}
				export interface FileHandler extends Java.Object {	
					
					
					/**
					 * writes a string to the file. this is a destructive operation that replaces the file contents.writes a byte array to the file. this is a destructive operation that replaces the file contents.
					 */
					write(s: string | Java.Array<number>):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.FileHandler;
					read():string;
					readBytes():Java.Array<number>;
					append(s: string | Java.Array<number>):Java.xyz.wagyourtail.jsmacros.core.library.impl.classes.FileHandler;
					getFile():Java.java.io.File;
					toString():string;
					
				}
				export namespace HTTPRequest {
					export interface Response extends Java.Object {	
						headers: Java.java.util.Map<string, Java.java.util.List<string>>
						responseCode: number
						
						text():string;
						
						/**
						 * Don't use this. Parse HTTPRequest.Response#text() in the guest language
						 */
						json():Java.java.util.Map<any, any>;
						byteArray():Java.Array<number>;
						
					}
					
				}
				export namespace Websocket {
					export interface Disconnected extends Java.Object {	
						serverFrame: Java.com.neovisionaries.ws.client.WebSocketFrame
						clientFrame: Java.com.neovisionaries.ws.client.WebSocketFrame
						isServer: boolean
						
						
					}
					
				}
				
			}
			
		}
		
	}
	export namespace java {
		
		export namespace util {
			export interface Comparator<T> extends Java.Interface {	
				
				compare(arg0: T, arg1: T):number;
				equals(arg0: any):boolean;
				reversed():Java.java.util.Comparator<T>;
				thenComparing<U>(arg0: Java.java.util.Comparator<any> | Java.java.util._function.Function<any, any>, arg1?: Java.java.util.Comparator<any>):Java.java.util.Comparator<T>;
				thenComparingInt(arg0: Java.java.util._function.ToIntFunction<any>):Java.java.util.Comparator<T>;
				thenComparingLong(arg0: Java.java.util._function.ToLongFunction<any>):Java.java.util.Comparator<T>;
				thenComparingDouble(arg0: Java.java.util._function.ToDoubleFunction<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				reverseOrder<T>():Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				naturalOrder<T>():Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				nullsFirst<T>(arg0: Java.java.util.Comparator<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				nullsLast<T>(arg0: Java.java.util.Comparator<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				comparing<T, U>(arg0: Java.java.util._function.Function<any, any>, arg1?: Java.java.util.Comparator<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				comparingInt<T>(arg0: Java.java.util._function.ToIntFunction<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				comparingLong<T>(arg0: Java.java.util._function.ToLongFunction<any>):Java.java.util.Comparator<T>;
				
				/**
				 * static
				 */
				comparingDouble<T>(arg0: Java.java.util._function.ToDoubleFunction<any>):Java.java.util.Comparator<T>;
				
			}
			export interface Enumeration<E> extends Java.Interface {	
				
				hasMoreElements():boolean;
				nextElement():E;
				
			}
			export interface EventListener extends Java.Interface {	
				
				
			}
			export interface EventObject extends Java.Object, Java.java.io.Serializable {	
				
				getSource():any;
				toString():string;
				
			}
			export interface OptionalInt extends Java.Object {	
				
				
				/**
				 * static
				 */
				empty():Java.java.util.OptionalInt;
				
				/**
				 * static
				 */
				of(arg0: number):Java.java.util.OptionalInt;
				getAsInt():number;
				isPresent():boolean;
				ifPresent(arg0: Java.java.util._function.IntConsumer):void;
				orElse(arg0: number):number;
				orElseGet(arg0: Java.java.util._function.IntSupplier):number;
				orElseThrow<X>(arg0: Java.java.util._function.Supplier<X>):number;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface OptionalDouble extends Java.Object {	
				
				
				/**
				 * static
				 */
				empty():Java.java.util.OptionalDouble;
				
				/**
				 * static
				 */
				of(arg0: number):Java.java.util.OptionalDouble;
				getAsDouble():number;
				isPresent():boolean;
				ifPresent(arg0: Java.java.util._function.DoubleConsumer):void;
				orElse(arg0: number):number;
				orElseGet(arg0: Java.java.util._function.DoubleSupplier):number;
				orElseThrow<X>(arg0: Java.java.util._function.Supplier<X>):number;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface IntSummaryStatistics extends Java.Object, Java.java.util._function.IntConsumer {	
				
				accept(arg0: number):void;
				combine(arg0: Java.java.util.IntSummaryStatistics):void;
				getCount():number;
				getSum():number;
				getMin():number;
				getMax():number;
				getAverage():number;
				toString():string;
				
			}
			export interface Iterator<E> extends Java.Interface {	
				
				hasNext():boolean;
				next():E;
				remove():void;
				forEachRemaining(arg0: Java.java.util._function.Consumer<any>):void;
				
			}
			export interface Spliterator<T> extends Java.Interface {	
				
					/**
					 * static
					 */
				readonly ORDERED: number
				
					/**
					 * static
					 */
				readonly DISTINCT: number
				
					/**
					 * static
					 */
				readonly SORTED: number
				
					/**
					 * static
					 */
				readonly SIZED: number
				
					/**
					 * static
					 */
				readonly NONNULL: number
				
					/**
					 * static
					 */
				readonly IMMUTABLE: number
				
					/**
					 * static
					 */
				readonly CONCURRENT: number
				
					/**
					 * static
					 */
				readonly SUBSIZED: number
				
				tryAdvance(arg0: Java.java.util._function.Consumer<any>):boolean;
				forEachRemaining(arg0: Java.java.util._function.Consumer<any>):void;
				trySplit():Java.java.util.Spliterator<T>;
				estimateSize():number;
				getExactSizeIfKnown():number;
				characteristics():number;
				hasCharacteristics(arg0: number):boolean;
				getComparator():Java.java.util.Comparator<any>;
				
			}
			export interface Optional<T> extends Java.Object {	
				
				
				/**
				 * static
				 */
				empty<T>():Java.java.util.Optional<T>;
				
				/**
				 * static
				 */
				of<T>(arg0: T):Java.java.util.Optional<T>;
				
				/**
				 * static
				 */
				ofNullable<T>(arg0: T):Java.java.util.Optional<T>;
				get():T;
				isPresent():boolean;
				ifPresent(arg0: Java.java.util._function.Consumer<any>):void;
				filter(arg0: Java.java.util._function.Predicate<any>):Java.java.util.Optional<T>;
				map<U>(arg0: Java.java.util._function.Function<any, any>):Java.java.util.Optional<U>;
				flatMap<U>(arg0: Java.java.util._function.Function<any, Java.java.util.Optional<U>>):Java.java.util.Optional<U>;
				orElse(arg0: T):T;
				orElseGet(arg0: Java.java.util._function.Supplier<any>):T;
				orElseThrow<X>(arg0: Java.java.util._function.Supplier<any>):T;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface OptionalLong extends Java.Object {	
				
				
				/**
				 * static
				 */
				empty():Java.java.util.OptionalLong;
				
				/**
				 * static
				 */
				of(arg0: number):Java.java.util.OptionalLong;
				getAsLong():number;
				isPresent():boolean;
				ifPresent(arg0: Java.java.util._function.LongConsumer):void;
				orElse(arg0: number):number;
				orElseGet(arg0: Java.java.util._function.LongSupplier):number;
				orElseThrow<X>(arg0: Java.java.util._function.Supplier<X>):number;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface LongSummaryStatistics extends Java.Object, Java.java.util._function.LongConsumer, Java.java.util._function.IntConsumer {	
				
				accept(arg0: number):void;
				combine(arg0: Java.java.util.LongSummaryStatistics):void;
				getCount():number;
				getSum():number;
				getMin():number;
				getMax():number;
				getAverage():number;
				toString():string;
				
			}
			export interface DoubleSummaryStatistics extends Java.Object, Java.java.util._function.DoubleConsumer {	
				
				accept(arg0: number):void;
				combine(arg0: Java.java.util.DoubleSummaryStatistics):void;
				getCount():number;
				getSum():number;
				getMin():number;
				getMax():number;
				getAverage():number;
				toString():string;
				
			}
			export interface PrimitiveIterator<T, T_CONS> extends Java.Interface, Java.java.util.Iterator<T> {	
				
				forEachRemaining(arg0: T_CONS):void;
				
			}
			export namespace _function {
				export interface Consumer<T> extends Java.Interface {	
					
					accept(arg0: T):void;
					andThen(arg0: Java.java.util._function.Consumer<any>):Java.java.util._function.Consumer<T>;
					
				}
				export interface BiConsumer<T, U> extends Java.Interface {	
					
					accept(arg0: T, arg1: U):void;
					andThen(arg0: Java.java.util._function.BiConsumer<any, any>):Java.java.util._function.BiConsumer<T, U>;
					
				}
				export interface Function<T, R> extends Java.Interface {	
					
					apply(arg0: T):R;
					compose<V>(arg0: Java.java.util._function.Function<any, any>):Java.java.util._function.Function<V, R>;
					andThen<V>(arg0: Java.java.util._function.Function<any, any>):Java.java.util._function.Function<T, V>;
					
					/**
					 * static
					 */
					identity<T>():Java.java.util._function.Function<T, T>;
					
				}
				export interface BiFunction<T, U, R> extends Java.Interface {	
					
					apply(arg0: T, arg1: U):R;
					andThen<V>(arg0: Java.java.util._function.Function<any, any>):Java.java.util._function.BiFunction<T, U, V>;
					
				}
				export interface Predicate<T> extends Java.Interface {	
					
					test(arg0: T):boolean;
					and(arg0: Java.java.util._function.Predicate<any>):Java.java.util._function.Predicate<T>;
					negate():Java.java.util._function.Predicate<T>;
					or(arg0: Java.java.util._function.Predicate<any>):Java.java.util._function.Predicate<T>;
					
					/**
					 * static
					 */
					isEqual<T>(arg0: any):Java.java.util._function.Predicate<T>;
					
				}
				export interface BiPredicate<T, U> extends Java.Interface {	
					
					test(arg0: T, arg1: U):boolean;
					and(arg0: Java.java.util._function.BiPredicate<any, any>):Java.java.util._function.BiPredicate<T, U>;
					negate():Java.java.util._function.BiPredicate<T, U>;
					or(arg0: Java.java.util._function.BiPredicate<any, any>):Java.java.util._function.BiPredicate<T, U>;
					
				}
				export interface Supplier<T> extends Java.Interface {	
					
					get():T;
					
				}
				export interface ToIntFunction<T> extends Java.Interface {	
					
					applyAsInt(arg0: T):number;
					
				}
				export interface ToLongFunction<T> extends Java.Interface {	
					
					applyAsLong(arg0: T):number;
					
				}
				export interface ToDoubleFunction<T> extends Java.Interface {	
					
					applyAsDouble(arg0: T):number;
					
				}
				export interface IntPredicate extends Java.Interface {	
					
					test(arg0: number):boolean;
					and(arg0: Java.java.util._function.IntPredicate):Java.java.util._function.IntPredicate;
					negate():Java.java.util._function.IntPredicate;
					or(arg0: Java.java.util._function.IntPredicate):Java.java.util._function.IntPredicate;
					
				}
				export interface IntUnaryOperator extends Java.Interface {	
					
					applyAsInt(arg0: number):number;
					compose(arg0: Java.java.util._function.IntUnaryOperator):Java.java.util._function.IntUnaryOperator;
					andThen(arg0: Java.java.util._function.IntUnaryOperator):Java.java.util._function.IntUnaryOperator;
					
					/**
					 * static
					 */
					identity():Java.java.util._function.IntUnaryOperator;
					
				}
				export interface IntFunction<R> extends Java.Interface {	
					
					apply(arg0: number):R;
					
				}
				export interface IntToLongFunction extends Java.Interface {	
					
					applyAsLong(arg0: number):number;
					
				}
				export interface IntToDoubleFunction extends Java.Interface {	
					
					applyAsDouble(arg0: number):number;
					
				}
				export interface IntConsumer extends Java.Interface {	
					
					accept(arg0: number):void;
					andThen(arg0: Java.java.util._function.IntConsumer):Java.java.util._function.IntConsumer;
					
				}
				export interface IntBinaryOperator extends Java.Interface {	
					
					applyAsInt(arg0: number, arg1: number):number;
					
				}
				export interface ObjIntConsumer<T> extends Java.Interface {	
					
					accept(arg0: T, arg1: number):void;
					
				}
				export interface IntSupplier extends Java.Interface {	
					
					getAsInt():number;
					
				}
				export interface DoubleConsumer extends Java.Interface {	
					
					accept(arg0: number):void;
					andThen(arg0: Java.java.util._function.DoubleConsumer):Java.java.util._function.DoubleConsumer;
					
				}
				export interface DoubleSupplier extends Java.Interface {	
					
					getAsDouble():number;
					
				}
				export interface BinaryOperator<T> extends Java.Interface, Java.java.util._function.BiFunction<T, T, T> {	
					
					
					/**
					 * static
					 */
					minBy<T>(arg0: Java.java.util.Comparator<any>):Java.java.util._function.BinaryOperator<T>;
					
					/**
					 * static
					 */
					maxBy<T>(arg0: Java.java.util.Comparator<any>):Java.java.util._function.BinaryOperator<T>;
					
				}
				export interface UnaryOperator<T> extends Java.Interface, Java.java.util._function.Function<T, T> {	
					
					
					/**
					 * static
					 */
					identity<T>():Java.java.util._function.UnaryOperator<T>;
					
				}
				export interface LongPredicate extends Java.Interface {	
					
					test(arg0: number):boolean;
					and(arg0: Java.java.util._function.LongPredicate):Java.java.util._function.LongPredicate;
					negate():Java.java.util._function.LongPredicate;
					or(arg0: Java.java.util._function.LongPredicate):Java.java.util._function.LongPredicate;
					
				}
				export interface LongUnaryOperator extends Java.Interface {	
					
					applyAsLong(arg0: number):number;
					compose(arg0: Java.java.util._function.LongUnaryOperator):Java.java.util._function.LongUnaryOperator;
					andThen(arg0: Java.java.util._function.LongUnaryOperator):Java.java.util._function.LongUnaryOperator;
					
					/**
					 * static
					 */
					identity():Java.java.util._function.LongUnaryOperator;
					
				}
				export interface LongFunction<R> extends Java.Interface {	
					
					apply(arg0: number):R;
					
				}
				export interface LongToIntFunction extends Java.Interface {	
					
					applyAsInt(arg0: number):number;
					
				}
				export interface LongToDoubleFunction extends Java.Interface {	
					
					applyAsDouble(arg0: number):number;
					
				}
				export interface LongConsumer extends Java.Interface {	
					
					accept(arg0: number):void;
					andThen(arg0: Java.java.util._function.LongConsumer):Java.java.util._function.LongConsumer;
					
				}
				export interface LongBinaryOperator extends Java.Interface {	
					
					applyAsLong(arg0: number, arg1: number):number;
					
				}
				export interface ObjLongConsumer<T> extends Java.Interface {	
					
					accept(arg0: T, arg1: number):void;
					
				}
				export interface LongSupplier extends Java.Interface {	
					
					getAsLong():number;
					
				}
				export interface DoublePredicate extends Java.Interface {	
					
					test(arg0: number):boolean;
					and(arg0: Java.java.util._function.DoublePredicate):Java.java.util._function.DoublePredicate;
					negate():Java.java.util._function.DoublePredicate;
					or(arg0: Java.java.util._function.DoublePredicate):Java.java.util._function.DoublePredicate;
					
				}
				export interface DoubleUnaryOperator extends Java.Interface {	
					
					applyAsDouble(arg0: number):number;
					compose(arg0: Java.java.util._function.DoubleUnaryOperator):Java.java.util._function.DoubleUnaryOperator;
					andThen(arg0: Java.java.util._function.DoubleUnaryOperator):Java.java.util._function.DoubleUnaryOperator;
					
					/**
					 * static
					 */
					identity():Java.java.util._function.DoubleUnaryOperator;
					
				}
				export interface DoubleFunction<R> extends Java.Interface {	
					
					apply(arg0: number):R;
					
				}
				export interface DoubleToIntFunction extends Java.Interface {	
					
					applyAsInt(arg0: number):number;
					
				}
				export interface DoubleToLongFunction extends Java.Interface {	
					
					applyAsLong(arg0: number):number;
					
				}
				export interface DoubleBinaryOperator extends Java.Interface {	
					
					applyAsDouble(arg0: number, arg1: number):number;
					
				}
				export interface ObjDoubleConsumer<T> extends Java.Interface {	
					
					accept(arg0: T, arg1: number):void;
					
				}
				
			}
			export namespace concurrent {
				export interface ExecutorService extends Java.Interface, Java.java.util.concurrent.Executor {	
					
					shutdown():void;
					shutdownNow():Java.java.util.List<Java.Runnable>;
					isShutdown():boolean;
					isTerminated():boolean;
					awaitTermination(arg0: number, arg1: Java.java.util.concurrent.TimeUnit):boolean;
					submit<T>(arg0: Java.java.util.concurrent.Callable<T> | Java.Runnable, arg1?: T):Java.java.util.concurrent.Future<T>;
					invokeAll<T>(arg0: Java.java.util.Collection<any>, arg1?: number, arg2?: Java.java.util.concurrent.TimeUnit):Java.java.util.List<Java.java.util.concurrent.Future<T>>;
					invokeAny<T>(arg0: Java.java.util.Collection<any>, arg1?: number, arg2?: Java.java.util.concurrent.TimeUnit):T;
					
				}
				export interface Callable<V> extends Java.Interface {	
					
					call():V;
					
				}
				export interface Executor extends Java.Interface {	
					
					execute(arg0: Java.Runnable):void;
					
				}
				export interface TimeUnit extends Java.Enum<Java.java.util.concurrent.TimeUnit> {	
					
					
					/**
					 * static
					 */
					values():Java.Array<Java.java.util.concurrent.TimeUnit>;
					
					/**
					 * static
					 */
					valueOf(arg0: string):Java.java.util.concurrent.TimeUnit;
					convert(arg0: number, arg1: Java.java.util.concurrent.TimeUnit):number;
					toNanos(arg0: number):number;
					toMicros(arg0: number):number;
					toMillis(arg0: number):number;
					toSeconds(arg0: number):number;
					toMinutes(arg0: number):number;
					toHours(arg0: number):number;
					toDays(arg0: number):number;
					timedWait(arg0: any, arg1: number):void;
					timedJoin(arg0: Java.Thread, arg1: number):void;
					sleep(arg0: number):void;
					
				}
				export interface Future<V> extends Java.Interface {	
					
					cancel(arg0: boolean):boolean;
					isCancelled():boolean;
					isDone():boolean;
					get(arg0?: number, arg1?: Java.java.util.concurrent.TimeUnit):V;
					
				}
				
			}
			export namespace stream {
				export interface IntStream extends Java.Interface, Java.java.util.stream.BaseStream<number, Java.java.util.stream.IntStream> {	
					
					filter(arg0: Java.java.util._function.IntPredicate):Java.java.util.stream.IntStream;
					map(arg0: Java.java.util._function.IntUnaryOperator):Java.java.util.stream.IntStream;
					mapToObj<U>(arg0: Java.java.util._function.IntFunction<any>):Java.java.util.stream.Stream<U>;
					mapToLong(arg0: Java.java.util._function.IntToLongFunction):Java.java.util.stream.LongStream;
					mapToDouble(arg0: Java.java.util._function.IntToDoubleFunction):Java.java.util.stream.DoubleStream;
					flatMap(arg0: Java.java.util._function.IntFunction<any>):Java.java.util.stream.IntStream;
					distinct():Java.java.util.stream.IntStream;
					sorted():Java.java.util.stream.IntStream;
					peek(arg0: Java.java.util._function.IntConsumer):Java.java.util.stream.IntStream;
					limit(arg0: number):Java.java.util.stream.IntStream;
					skip(arg0: number):Java.java.util.stream.IntStream;
					forEach(arg0: Java.java.util._function.IntConsumer):void;
					forEachOrdered(arg0: Java.java.util._function.IntConsumer):void;
					toArray():Java.Array<number>;
					reduce(arg0: number | Java.java.util._function.IntBinaryOperator, arg1?: Java.java.util._function.IntBinaryOperator):number;
					collect<R>(arg0: Java.java.util._function.Supplier<R>, arg1: Java.java.util._function.ObjIntConsumer<R>, arg2: Java.java.util._function.BiConsumer<R, R>):R;
					sum():number;
					min():Java.java.util.OptionalInt;
					max():Java.java.util.OptionalInt;
					count():number;
					average():Java.java.util.OptionalDouble;
					summaryStatistics():Java.java.util.IntSummaryStatistics;
					anyMatch(arg0: Java.java.util._function.IntPredicate):boolean;
					allMatch(arg0: Java.java.util._function.IntPredicate):boolean;
					noneMatch(arg0: Java.java.util._function.IntPredicate):boolean;
					findFirst():Java.java.util.OptionalInt;
					findAny():Java.java.util.OptionalInt;
					asLongStream():Java.java.util.stream.LongStream;
					asDoubleStream():Java.java.util.stream.DoubleStream;
					boxed():Java.java.util.stream.Stream<number>;
					sequential():Java.java.util.stream.IntStream;
					parallel():Java.java.util.stream.IntStream;
					iterator():Java.java.util.PrimitiveIterator.OfInt;
					spliterator():Java.java.util.Spliterator.OfInt;
					
					/**
					 * static
					 */
					builder():Java.java.util.stream.IntStream.Builder;
					
					/**
					 * static
					 */
					empty():Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					of(arg0: number | Java.Array<number>):Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					iterate(arg0: number, arg1: Java.java.util._function.IntUnaryOperator):Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					generate(arg0: Java.java.util._function.IntSupplier):Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					range(arg0: number, arg1: number):Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					rangeClosed(arg0: number, arg1: number):Java.java.util.stream.IntStream;
					
					/**
					 * static
					 */
					concat(arg0: Java.java.util.stream.IntStream, arg1: Java.java.util.stream.IntStream):Java.java.util.stream.IntStream;
					
				}
				export interface BaseStream<T, S> extends Java.Interface, Java.AutoCloseable {	
					
					iterator():Java.java.util.Iterator<T>;
					spliterator():Java.java.util.Spliterator<T>;
					isParallel():boolean;
					sequential():S;
					parallel():S;
					unordered():S;
					onClose(arg0: Java.Runnable):S;
					close():void;
					
				}
				export interface Stream<T> extends Java.Interface, Java.java.util.stream.BaseStream<T, Java.java.util.stream.Stream<T>> {	
					
					filter(arg0: Java.java.util._function.Predicate<any>):Java.java.util.stream.Stream<T>;
					map<R>(arg0: Java.java.util._function.Function<any, any>):Java.java.util.stream.Stream<R>;
					mapToInt(arg0: Java.java.util._function.ToIntFunction<any>):Java.java.util.stream.IntStream;
					mapToLong(arg0: Java.java.util._function.ToLongFunction<any>):Java.java.util.stream.LongStream;
					mapToDouble(arg0: Java.java.util._function.ToDoubleFunction<any>):Java.java.util.stream.DoubleStream;
					flatMap<R>(arg0: Java.java.util._function.Function<any, any>):Java.java.util.stream.Stream<R>;
					flatMapToInt(arg0: Java.java.util._function.Function<any, any>):Java.java.util.stream.IntStream;
					flatMapToLong(arg0: Java.java.util._function.Function<any, any>):Java.java.util.stream.LongStream;
					flatMapToDouble(arg0: Java.java.util._function.Function<any, any>):Java.java.util.stream.DoubleStream;
					distinct():Java.java.util.stream.Stream<T>;
					sorted(arg0?: Java.java.util.Comparator<any>):Java.java.util.stream.Stream<T>;
					peek(arg0: Java.java.util._function.Consumer<any>):Java.java.util.stream.Stream<T>;
					limit(arg0: number):Java.java.util.stream.Stream<T>;
					skip(arg0: number):Java.java.util.stream.Stream<T>;
					forEach(arg0: Java.java.util._function.Consumer<any>):void;
					forEachOrdered(arg0: Java.java.util._function.Consumer<any>):void;
					toArray<A>(arg0?: Java.java.util._function.IntFunction<Java.Array<A>>):Java.Array<any>;
					reduce<U>(arg0: T | Java.java.util._function.BinaryOperator<T> | U, arg1?: Java.java.util._function.BinaryOperator<T> | Java.java.util._function.BiFunction<U, any, U>, arg2?: Java.java.util._function.BinaryOperator<U>):T;
					collect<R>(arg0: Java.java.util._function.Supplier<R> | Java.java.util.stream.Collector<any, A, R>, arg1?: Java.java.util._function.BiConsumer<R, any>, arg2?: Java.java.util._function.BiConsumer<R, R>):R;
					min(arg0: Java.java.util.Comparator<any>):Java.java.util.Optional<T>;
					max(arg0: Java.java.util.Comparator<any>):Java.java.util.Optional<T>;
					count():number;
					anyMatch(arg0: Java.java.util._function.Predicate<any>):boolean;
					allMatch(arg0: Java.java.util._function.Predicate<any>):boolean;
					noneMatch(arg0: Java.java.util._function.Predicate<any>):boolean;
					findFirst():Java.java.util.Optional<T>;
					findAny():Java.java.util.Optional<T>;
					
					/**
					 * static
					 */
					builder<T>():Java.java.util.stream.Stream.Builder<T>;
					
					/**
					 * static
					 */
					empty<T>():Java.java.util.stream.Stream<T>;
					
					/**
					 * static
					 */
					of<T>(arg0: T | Java.Array<T>):Java.java.util.stream.Stream<T>;
					
					/**
					 * static
					 */
					iterate<T>(arg0: T, arg1: Java.java.util._function.UnaryOperator<T>):Java.java.util.stream.Stream<T>;
					
					/**
					 * static
					 */
					generate<T>(arg0: Java.java.util._function.Supplier<T>):Java.java.util.stream.Stream<T>;
					
					/**
					 * static
					 */
					concat<T>(arg0: Java.java.util.stream.Stream<any>, arg1: Java.java.util.stream.Stream<any>):Java.java.util.stream.Stream<T>;
					
				}
				export interface LongStream extends Java.Interface, Java.java.util.stream.BaseStream<number, Java.java.util.stream.LongStream> {	
					
					filter(arg0: Java.java.util._function.LongPredicate):Java.java.util.stream.LongStream;
					map(arg0: Java.java.util._function.LongUnaryOperator):Java.java.util.stream.LongStream;
					mapToObj<U>(arg0: Java.java.util._function.LongFunction<any>):Java.java.util.stream.Stream<U>;
					mapToInt(arg0: Java.java.util._function.LongToIntFunction):Java.java.util.stream.IntStream;
					mapToDouble(arg0: Java.java.util._function.LongToDoubleFunction):Java.java.util.stream.DoubleStream;
					flatMap(arg0: Java.java.util._function.LongFunction<any>):Java.java.util.stream.LongStream;
					distinct():Java.java.util.stream.LongStream;
					sorted():Java.java.util.stream.LongStream;
					peek(arg0: Java.java.util._function.LongConsumer):Java.java.util.stream.LongStream;
					limit(arg0: number):Java.java.util.stream.LongStream;
					skip(arg0: number):Java.java.util.stream.LongStream;
					forEach(arg0: Java.java.util._function.LongConsumer):void;
					forEachOrdered(arg0: Java.java.util._function.LongConsumer):void;
					toArray():Java.Array<number>;
					reduce(arg0: number | Java.java.util._function.LongBinaryOperator, arg1?: Java.java.util._function.LongBinaryOperator):number;
					collect<R>(arg0: Java.java.util._function.Supplier<R>, arg1: Java.java.util._function.ObjLongConsumer<R>, arg2: Java.java.util._function.BiConsumer<R, R>):R;
					sum():number;
					min():Java.java.util.OptionalLong;
					max():Java.java.util.OptionalLong;
					count():number;
					average():Java.java.util.OptionalDouble;
					summaryStatistics():Java.java.util.LongSummaryStatistics;
					anyMatch(arg0: Java.java.util._function.LongPredicate):boolean;
					allMatch(arg0: Java.java.util._function.LongPredicate):boolean;
					noneMatch(arg0: Java.java.util._function.LongPredicate):boolean;
					findFirst():Java.java.util.OptionalLong;
					findAny():Java.java.util.OptionalLong;
					asDoubleStream():Java.java.util.stream.DoubleStream;
					boxed():Java.java.util.stream.Stream<number>;
					sequential():Java.java.util.stream.LongStream;
					parallel():Java.java.util.stream.LongStream;
					iterator():Java.java.util.PrimitiveIterator.OfLong;
					spliterator():Java.java.util.Spliterator.OfLong;
					
					/**
					 * static
					 */
					builder():Java.java.util.stream.LongStream.Builder;
					
					/**
					 * static
					 */
					empty():Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					of(arg0: number | Java.Array<number>):Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					iterate(arg0: number, arg1: Java.java.util._function.LongUnaryOperator):Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					generate(arg0: Java.java.util._function.LongSupplier):Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					range(arg0: number, arg1: number):Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					rangeClosed(arg0: number, arg1: number):Java.java.util.stream.LongStream;
					
					/**
					 * static
					 */
					concat(arg0: Java.java.util.stream.LongStream, arg1: Java.java.util.stream.LongStream):Java.java.util.stream.LongStream;
					
				}
				export interface DoubleStream extends Java.Interface, Java.java.util.stream.BaseStream<number, Java.java.util.stream.DoubleStream> {	
					
					filter(arg0: Java.java.util._function.DoublePredicate):Java.java.util.stream.DoubleStream;
					map(arg0: Java.java.util._function.DoubleUnaryOperator):Java.java.util.stream.DoubleStream;
					mapToObj<U>(arg0: Java.java.util._function.DoubleFunction<any>):Java.java.util.stream.Stream<U>;
					mapToInt(arg0: Java.java.util._function.DoubleToIntFunction):Java.java.util.stream.IntStream;
					mapToLong(arg0: Java.java.util._function.DoubleToLongFunction):Java.java.util.stream.LongStream;
					flatMap(arg0: Java.java.util._function.DoubleFunction<any>):Java.java.util.stream.DoubleStream;
					distinct():Java.java.util.stream.DoubleStream;
					sorted():Java.java.util.stream.DoubleStream;
					peek(arg0: Java.java.util._function.DoubleConsumer):Java.java.util.stream.DoubleStream;
					limit(arg0: number):Java.java.util.stream.DoubleStream;
					skip(arg0: number):Java.java.util.stream.DoubleStream;
					forEach(arg0: Java.java.util._function.DoubleConsumer):void;
					forEachOrdered(arg0: Java.java.util._function.DoubleConsumer):void;
					toArray():Java.Array<number>;
					reduce(arg0: number | Java.java.util._function.DoubleBinaryOperator, arg1?: Java.java.util._function.DoubleBinaryOperator):number;
					collect<R>(arg0: Java.java.util._function.Supplier<R>, arg1: Java.java.util._function.ObjDoubleConsumer<R>, arg2: Java.java.util._function.BiConsumer<R, R>):R;
					sum():number;
					min():Java.java.util.OptionalDouble;
					max():Java.java.util.OptionalDouble;
					count():number;
					average():Java.java.util.OptionalDouble;
					summaryStatistics():Java.java.util.DoubleSummaryStatistics;
					anyMatch(arg0: Java.java.util._function.DoublePredicate):boolean;
					allMatch(arg0: Java.java.util._function.DoublePredicate):boolean;
					noneMatch(arg0: Java.java.util._function.DoublePredicate):boolean;
					findFirst():Java.java.util.OptionalDouble;
					findAny():Java.java.util.OptionalDouble;
					boxed():Java.java.util.stream.Stream<number>;
					sequential():Java.java.util.stream.DoubleStream;
					parallel():Java.java.util.stream.DoubleStream;
					iterator():Java.java.util.PrimitiveIterator.OfDouble;
					spliterator():Java.java.util.Spliterator.OfDouble;
					
					/**
					 * static
					 */
					builder():Java.java.util.stream.DoubleStream.Builder;
					
					/**
					 * static
					 */
					empty():Java.java.util.stream.DoubleStream;
					
					/**
					 * static
					 */
					of(arg0: number | Java.Array<number>):Java.java.util.stream.DoubleStream;
					
					/**
					 * static
					 */
					iterate(arg0: number, arg1: Java.java.util._function.DoubleUnaryOperator):Java.java.util.stream.DoubleStream;
					
					/**
					 * static
					 */
					generate(arg0: Java.java.util._function.DoubleSupplier):Java.java.util.stream.DoubleStream;
					
					/**
					 * static
					 */
					concat(arg0: Java.java.util.stream.DoubleStream, arg1: Java.java.util.stream.DoubleStream):Java.java.util.stream.DoubleStream;
					
				}
				export interface Collector<T, A, R> extends Java.Interface {	
					
					supplier():Java.java.util._function.Supplier<A>;
					accumulator():Java.java.util._function.BiConsumer<A, T>;
					combiner():Java.java.util._function.BinaryOperator<A>;
					finisher():Java.java.util._function.Function<A, R>;
					characteristics():Java.java.util.Set<Java.java.util.stream.Collector.Characteristics>;
					
					/**
					 * static
					 */
					of<T, R>(arg0: Java.java.util._function.Supplier<R> | Java.java.util._function.Supplier<A>, arg1: Java.java.util._function.BiConsumer<R, T> | Java.java.util._function.BiConsumer<A, T>, arg2: Java.java.util._function.BinaryOperator<R> | Java.java.util._function.BinaryOperator<A>, arg3: Java.Array<Java.java.util.stream.Collector.Characteristics> | Java.java.util._function.Function<A, R>, arg4?: Java.Array<Java.java.util.stream.Collector.Characteristics>):Java.java.util.stream.Collector<T, R, R>;
					
				}
				export namespace IntStream {
					export interface Builder extends Java.Interface, Java.java.util._function.IntConsumer {	
						
						accept(arg0: number):void;
						add(arg0: number):Java.java.util.stream.IntStream.Builder;
						build():Java.java.util.stream.IntStream;
						
					}
					
				}
				export namespace Stream {
					export interface Builder<T> extends Java.Interface, Java.java.util._function.Consumer<T> {	
						
						accept(arg0: T):void;
						add(arg0: T):Java.java.util.stream.Stream.Builder<T>;
						build():Java.java.util.stream.Stream<T>;
						
					}
					
				}
				export namespace LongStream {
					export interface Builder extends Java.Interface, Java.java.util._function.LongConsumer {	
						
						accept(arg0: number):void;
						add(arg0: number):Java.java.util.stream.LongStream.Builder;
						build():Java.java.util.stream.LongStream;
						
					}
					
				}
				export namespace DoubleStream {
					export interface Builder extends Java.Interface, Java.java.util._function.DoubleConsumer {	
						
						accept(arg0: number):void;
						add(arg0: number):Java.java.util.stream.DoubleStream.Builder;
						build():Java.java.util.stream.DoubleStream;
						
					}
					
				}
				export namespace Collector {
					export interface Characteristics extends Java.Enum<Java.java.util.stream.Collector.Characteristics> {	
						
						
						/**
						 * static
						 */
						values():Java.Array<Java.java.util.stream.Collector.Characteristics>;
						
						/**
						 * static
						 */
						valueOf(arg0: string):Java.java.util.stream.Collector.Characteristics;
						
					}
					
				}
				
			}
			export namespace PrimitiveIterator {
				export interface OfInt extends Java.Interface, Java.java.util.PrimitiveIterator<number, Java.java.util._function.IntConsumer> {	
					
					nextInt():number;
					forEachRemaining(arg0: Java.java.util._function.IntConsumer | Java.java.util._function.Consumer<any>):void;
					next():number;
					
				}
				export interface OfLong extends Java.Interface, Java.java.util.PrimitiveIterator<number, Java.java.util._function.LongConsumer> {	
					
					nextLong():number;
					forEachRemaining(arg0: Java.java.util._function.LongConsumer | Java.java.util._function.Consumer<any>):void;
					next():number;
					
				}
				export interface OfDouble extends Java.Interface, Java.java.util.PrimitiveIterator<number, Java.java.util._function.DoubleConsumer> {	
					
					nextDouble():number;
					forEachRemaining(arg0: Java.java.util._function.DoubleConsumer | Java.java.util._function.Consumer<any>):void;
					next():number;
					
				}
				
			}
			export namespace Spliterator {
				export interface OfInt extends Java.Interface, Java.java.util.Spliterator.OfPrimitive<number, Java.java.util._function.IntConsumer, Java.java.util.Spliterator.OfInt> {	
					
					trySplit():Java.java.util.Spliterator.OfInt;
					tryAdvance(arg0: Java.java.util._function.IntConsumer | Java.java.util._function.Consumer<any>):boolean;
					forEachRemaining(arg0: Java.java.util._function.IntConsumer | Java.java.util._function.Consumer<any>):void;
					
				}
				export interface OfLong extends Java.Interface, Java.java.util.Spliterator.OfPrimitive<number, Java.java.util._function.LongConsumer, Java.java.util.Spliterator.OfLong> {	
					
					trySplit():Java.java.util.Spliterator.OfLong;
					tryAdvance(arg0: Java.java.util._function.LongConsumer | Java.java.util._function.Consumer<any>):boolean;
					forEachRemaining(arg0: Java.java.util._function.LongConsumer | Java.java.util._function.Consumer<any>):void;
					
				}
				export interface OfDouble extends Java.Interface, Java.java.util.Spliterator.OfPrimitive<number, Java.java.util._function.DoubleConsumer, Java.java.util.Spliterator.OfDouble> {	
					
					trySplit():Java.java.util.Spliterator.OfDouble;
					tryAdvance(arg0: Java.java.util._function.DoubleConsumer | Java.java.util._function.Consumer<any>):boolean;
					forEachRemaining(arg0: Java.java.util._function.DoubleConsumer | Java.java.util._function.Consumer<any>):void;
					
				}
				export interface OfPrimitive<T, T_CONS, T_SPLITR> extends Java.Interface, Java.java.util.Spliterator<T> {	
					
					trySplit():T_SPLITR;
					tryAdvance(arg0: T_CONS):boolean;
					forEachRemaining(arg0: T_CONS):void;
					
				}
				
			}
			
		}
		export namespace lang {
			export interface Thread extends Java.Object, Java.Runnable {	
				
					/**
					 * static
					 */
				readonly MIN_PRIORITY: number
				
					/**
					 * static
					 */
				readonly NORM_PRIORITY: number
				
					/**
					 * static
					 */
				readonly MAX_PRIORITY: number
				
				
				/**
				 * static
				 */
				currentThread():Java.Thread;
				
				/**
				 * static
				 */
				yield():void;
				
				/**
				 * static
				 */
				sleep(arg0: number, arg1?: number):void;
				start():void;
				run():void;
				stop(arg0?: Java.Throwable):void;
				interrupt():void;
				
				/**
				 * static
				 */
				interrupted():boolean;
				isInterrupted():boolean;
				destroy():void;
				isAlive():boolean;
				suspend():void;
				resume():void;
				setPriority(arg0: number):void;
				getPriority():number;
				setName(arg0: string):void;
				getName():string;
				getThreadGroup():Java.ThreadGroup;
				
				/**
				 * static
				 */
				activeCount():number;
				
				/**
				 * static
				 */
				enumerate(arg0: Java.Array<Java.Thread>):number;
				countStackFrames():number;
				join(arg0?: number, arg1?: number):void;
				
				/**
				 * static
				 */
				dumpStack():void;
				setDaemon(arg0: boolean):void;
				isDaemon():boolean;
				checkAccess():void;
				toString():string;
				getContextClassLoader():Java.ClassLoader;
				setContextClassLoader(arg0: Java.ClassLoader):void;
				
				/**
				 * static
				 */
				holdsLock(arg0: any):boolean;
				getStackTrace():Java.Array<Java.StackTraceElement>;
				
				/**
				 * static
				 */
				getAllStackTraces():Java.java.util.Map<Java.Thread, Java.Array<Java.StackTraceElement>>;
				getId():number;
				getState():Java.Thread.State;
				
				/**
				 * static
				 */
				setDefaultUncaughtExceptionHandler(arg0: Java.Thread.UncaughtExceptionHandler):void;
				
				/**
				 * static
				 */
				getDefaultUncaughtExceptionHandler():Java.Thread.UncaughtExceptionHandler;
				getUncaughtExceptionHandler():Java.Thread.UncaughtExceptionHandler;
				setUncaughtExceptionHandler(arg0: Java.Thread.UncaughtExceptionHandler):void;
				
			}
			export interface Runnable extends Java.Interface {	
				
				run():void;
				
			}
			export interface ThreadGroup extends Java.Object, Java.Thread.UncaughtExceptionHandler {	
				
				getName():string;
				getParent():Java.ThreadGroup;
				getMaxPriority():number;
				isDaemon():boolean;
				isDestroyed():boolean;
				setDaemon(arg0: boolean):void;
				setMaxPriority(arg0: number):void;
				parentOf(arg0: Java.ThreadGroup):boolean;
				checkAccess():void;
				activeCount():number;
				enumerate(arg0: Java.Array<Java.Thread> | Java.Array<Java.ThreadGroup>, arg1?: boolean):number;
				activeGroupCount():number;
				stop():void;
				interrupt():void;
				suspend():void;
				resume():void;
				destroy():void;
				list():void;
				uncaughtException(arg0: Java.Thread, arg1: Java.Throwable):void;
				allowThreadSuspension(arg0: boolean):boolean;
				toString():string;
				
			}
			export interface ClassLoader extends Java.Object {	
				
				loadClass(arg0: string):Java.Class<any>;
				getResource(arg0: string):Java.java.net.URL;
				getResources(arg0: string):Java.java.util.Enumeration<Java.java.net.URL>;
				
				/**
				 * static
				 */
				getSystemResource(arg0: string):Java.java.net.URL;
				
				/**
				 * static
				 */
				getSystemResources(arg0: string):Java.java.util.Enumeration<Java.java.net.URL>;
				getResourceAsStream(arg0: string):Java.java.io.InputStream;
				
				/**
				 * static
				 */
				getSystemResourceAsStream(arg0: string):Java.java.io.InputStream;
				getParent():Java.ClassLoader;
				
				/**
				 * static
				 */
				getSystemClassLoader():Java.ClassLoader;
				setDefaultAssertionStatus(arg0: boolean):void;
				setPackageAssertionStatus(arg0: string, arg1: boolean):void;
				setClassAssertionStatus(arg0: string, arg1: boolean):void;
				clearAssertionStatus():void;
				
			}
			export interface Enum<E> extends Java.Object, Java.Comparable<E>, Java.java.io.Serializable {	
				
				name():string;
				ordinal():number;
				toString():string;
				equals(arg0: any):boolean;
				hashCode():number;
				compareTo(arg0: E):number;
				getDeclaringClass():Java.Class<E>;
				
				/**
				 * static
				 */
				valueOf<T>(arg0: Java.Class<T>, arg1: string):T;
				
			}
			export interface Comparable<T> extends Java.Interface {	
				
				compareTo(arg0: T):number;
				
			}
			export interface AutoCloseable extends Java.Interface {	
				
				close():void;
				
			}
			export interface Exception extends Java.Throwable {	
				
				
			}
			export interface Appendable extends Java.Interface {	
				
				append(arg0: string | number, arg1?: number, arg2?: number):Java.Appendable;
				
			}
			export interface Readable extends Java.Interface {	
				
				read(arg0: Java.java.nio.CharBuffer):number;
				
			}
			
		}
		export namespace io {
			export interface InputStream extends Java.Object, Java.java.io.Closeable {	
				
				read(arg0?: Java.Array<number>, arg1?: number, arg2?: number):number;
				skip(arg0: number):number;
				available():number;
				close():void;
				mark(arg0: number):void;
				reset():void;
				markSupported():boolean;
				
			}
			export interface Closeable extends Java.Interface, Java.AutoCloseable {	
				
				close():void;
				
			}
			export interface OutputStream extends Java.Object, Java.java.io.Closeable, Java.java.io.Flushable {	
				
				write(arg0: number | Java.Array<number>, arg1?: number, arg2?: number):void;
				flush():void;
				close():void;
				
			}
			export interface Flushable extends Java.Interface {	
				
				flush():void;
				
			}
			
		}
		export namespace net {
			export interface Socket extends Java.Object, Java.java.io.Closeable {	
				
				connect(arg0: Java.java.net.SocketAddress, arg1?: number):void;
				bind(arg0: Java.java.net.SocketAddress):void;
				getInetAddress():Java.java.net.InetAddress;
				getLocalAddress():Java.java.net.InetAddress;
				getPort():number;
				getLocalPort():number;
				getRemoteSocketAddress():Java.java.net.SocketAddress;
				getLocalSocketAddress():Java.java.net.SocketAddress;
				getChannel():Java.java.nio.channels.SocketChannel;
				getInputStream():Java.java.io.InputStream;
				getOutputStream():Java.java.io.OutputStream;
				setTcpNoDelay(arg0: boolean):void;
				getTcpNoDelay():boolean;
				setSoLinger(arg0: boolean, arg1: number):void;
				getSoLinger():number;
				sendUrgentData(arg0: number):void;
				setOOBInline(arg0: boolean):void;
				getOOBInline():boolean;
				setSoTimeout(arg0: number):void;
				getSoTimeout():number;
				setSendBufferSize(arg0: number):void;
				getSendBufferSize():number;
				setReceiveBufferSize(arg0: number):void;
				getReceiveBufferSize():number;
				setKeepAlive(arg0: boolean):void;
				getKeepAlive():boolean;
				setTrafficClass(arg0: number):void;
				getTrafficClass():number;
				setReuseAddress(arg0: boolean):void;
				getReuseAddress():boolean;
				close():void;
				shutdownInput():void;
				shutdownOutput():void;
				toString():string;
				isConnected():boolean;
				isBound():boolean;
				isClosed():boolean;
				isInputShutdown():boolean;
				isOutputShutdown():boolean;
				
				/**
				 * static
				 */
				setSocketImplFactory(arg0: Java.java.net.SocketImplFactory):void;
				setPerformancePreferences(arg0: number, arg1: number, arg2: number):void;
				
			}
			export interface SocketAddress extends Java.Object, Java.java.io.Serializable {	
				
				
			}
			export interface InetAddress extends Java.Object, Java.java.io.Serializable {	
				
				isMulticastAddress():boolean;
				isAnyLocalAddress():boolean;
				isLoopbackAddress():boolean;
				isLinkLocalAddress():boolean;
				isSiteLocalAddress():boolean;
				isMCGlobal():boolean;
				isMCNodeLocal():boolean;
				isMCLinkLocal():boolean;
				isMCSiteLocal():boolean;
				isMCOrgLocal():boolean;
				isReachable(arg0: number | Java.java.net.NetworkInterface, arg1?: number, arg2?: number):boolean;
				getHostName():string;
				getCanonicalHostName():string;
				getAddress():Java.Array<number>;
				getHostAddress():string;
				hashCode():number;
				equals(arg0: any):boolean;
				toString():string;
				
				/**
				 * static
				 */
				getByAddress(arg0: string | Java.Array<number>, arg1?: Java.Array<number>):Java.java.net.InetAddress;
				
				/**
				 * static
				 */
				getByName(arg0: string):Java.java.net.InetAddress;
				
				/**
				 * static
				 */
				getAllByName(arg0: string):Java.Array<Java.java.net.InetAddress>;
				
				/**
				 * static
				 */
				getLoopbackAddress():Java.java.net.InetAddress;
				
				/**
				 * static
				 */
				getLocalHost():Java.java.net.InetAddress;
				
			}
			export interface SocketImplFactory extends Java.Interface {	
				
				createSocketImpl():Java.java.net.SocketImpl;
				
			}
			export interface NetworkInterface extends Java.Object {	
				
				getName():string;
				getInetAddresses():Java.java.util.Enumeration<Java.java.net.InetAddress>;
				getInterfaceAddresses():Java.java.util.List<Java.java.net.InterfaceAddress>;
				getSubInterfaces():Java.java.util.Enumeration<Java.java.net.NetworkInterface>;
				getParent():Java.java.net.NetworkInterface;
				getIndex():number;
				getDisplayName():string;
				
				/**
				 * static
				 */
				getByName(arg0: string):Java.java.net.NetworkInterface;
				
				/**
				 * static
				 */
				getByIndex(arg0: number):Java.java.net.NetworkInterface;
				
				/**
				 * static
				 */
				getByInetAddress(arg0: Java.java.net.InetAddress):Java.java.net.NetworkInterface;
				
				/**
				 * static
				 */
				getNetworkInterfaces():Java.java.util.Enumeration<Java.java.net.NetworkInterface>;
				isUp():boolean;
				isLoopback():boolean;
				isPointToPoint():boolean;
				supportsMulticast():boolean;
				getHardwareAddress():Java.Array<number>;
				getMTU():number;
				isVirtual():boolean;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface SocketImpl extends Java.Object, Java.java.net.SocketOptions {	
				
				toString():string;
				
			}
			export interface SocketOption<T> extends Java.Interface {	
				
				name():string;
				type():Java.Class<T>;
				
			}
			export interface InterfaceAddress extends Java.Object {	
				
				getAddress():Java.java.net.InetAddress;
				getBroadcast():Java.java.net.InetAddress;
				getNetworkPrefixLength():number;
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			export interface SocketOptions extends Java.Interface {	
				
					/**
					 * static
					 */
				readonly TCP_NODELAY: number
				
					/**
					 * static
					 */
				readonly SO_BINDADDR: number
				
					/**
					 * static
					 */
				readonly SO_REUSEADDR: number
				
					/**
					 * static
					 */
				readonly SO_BROADCAST: number
				
					/**
					 * static
					 */
				readonly IP_MULTICAST_IF: number
				
					/**
					 * static
					 */
				readonly IP_MULTICAST_IF2: number
				
					/**
					 * static
					 */
				readonly IP_MULTICAST_LOOP: number
				
					/**
					 * static
					 */
				readonly IP_TOS: number
				
					/**
					 * static
					 */
				readonly SO_LINGER: number
				
					/**
					 * static
					 */
				readonly SO_TIMEOUT: number
				
					/**
					 * static
					 */
				readonly SO_SNDBUF: number
				
					/**
					 * static
					 */
				readonly SO_RCVBUF: number
				
					/**
					 * static
					 */
				readonly SO_KEEPALIVE: number
				
					/**
					 * static
					 */
				readonly SO_OOBINLINE: number
				
				setOption(arg0: number, arg1: any):void;
				getOption(arg0: number):any;
				
			}
			export interface ProtocolFamily extends Java.Interface {	
				
				name():string;
				
			}
			export interface DatagramSocket extends Java.Object, Java.java.io.Closeable {	
				
				bind(arg0: Java.java.net.SocketAddress):void;
				connect(arg0: Java.java.net.InetAddress | Java.java.net.SocketAddress, arg1?: number):void;
				disconnect():void;
				isBound():boolean;
				isConnected():boolean;
				getInetAddress():Java.java.net.InetAddress;
				getPort():number;
				getRemoteSocketAddress():Java.java.net.SocketAddress;
				getLocalSocketAddress():Java.java.net.SocketAddress;
				send(arg0: Java.java.net.DatagramPacket):void;
				receive(arg0: Java.java.net.DatagramPacket):void;
				getLocalAddress():Java.java.net.InetAddress;
				getLocalPort():number;
				setSoTimeout(arg0: number):void;
				getSoTimeout():number;
				setSendBufferSize(arg0: number):void;
				getSendBufferSize():number;
				setReceiveBufferSize(arg0: number):void;
				getReceiveBufferSize():number;
				setReuseAddress(arg0: boolean):void;
				getReuseAddress():boolean;
				setBroadcast(arg0: boolean):void;
				getBroadcast():boolean;
				setTrafficClass(arg0: number):void;
				getTrafficClass():number;
				close():void;
				isClosed():boolean;
				getChannel():Java.java.nio.channels.DatagramChannel;
				
				/**
				 * static
				 */
				setDatagramSocketImplFactory(arg0: Java.java.net.DatagramSocketImplFactory):void;
				
			}
			export interface ServerSocket extends Java.Object, Java.java.io.Closeable {	
				
				bind(arg0: Java.java.net.SocketAddress, arg1?: number):void;
				getInetAddress():Java.java.net.InetAddress;
				getLocalPort():number;
				getLocalSocketAddress():Java.java.net.SocketAddress;
				accept():Java.java.net.Socket;
				close():void;
				getChannel():Java.java.nio.channels.ServerSocketChannel;
				isBound():boolean;
				isClosed():boolean;
				setSoTimeout(arg0: number):void;
				getSoTimeout():number;
				setReuseAddress(arg0: boolean):void;
				getReuseAddress():boolean;
				toString():string;
				
				/**
				 * static
				 */
				setSocketFactory(arg0: Java.java.net.SocketImplFactory):void;
				setReceiveBufferSize(arg0: number):void;
				getReceiveBufferSize():number;
				setPerformancePreferences(arg0: number, arg1: number, arg2: number):void;
				
			}
			export interface DatagramPacket extends Java.Object {	
				
				getAddress():Java.java.net.InetAddress;
				getPort():number;
				getData():Java.Array<number>;
				getOffset():number;
				getLength():number;
				setData(arg0: Java.Array<number>, arg1?: number, arg2?: number):void;
				setAddress(arg0: Java.java.net.InetAddress):void;
				setPort(arg0: number):void;
				setSocketAddress(arg0: Java.java.net.SocketAddress):void;
				getSocketAddress():Java.java.net.SocketAddress;
				setLength(arg0: number):void;
				
			}
			export interface DatagramSocketImplFactory extends Java.Interface {	
				
				createDatagramSocketImpl():Java.java.net.DatagramSocketImpl;
				
			}
			export interface DatagramSocketImpl extends Java.Object, Java.java.net.SocketOptions {	
				
				
			}
			
		}
		export namespace nio {
			export interface ByteBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.ByteBuffer> {	
				
				
				/**
				 * static
				 */
				allocateDirect(arg0: number):Java.java.nio.ByteBuffer;
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.ByteBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.ByteBuffer;
				slice():Java.java.nio.ByteBuffer;
				duplicate():Java.java.nio.ByteBuffer;
				asReadOnlyBuffer():Java.java.nio.ByteBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.ByteBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.ByteBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.ByteBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.ByteBuffer):number;
				order(arg0?: Java.java.nio.ByteOrder):Java.java.nio.ByteOrder;
				getChar(arg0?: number):number;
				putChar(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asCharBuffer():Java.java.nio.CharBuffer;
				getShort(arg0?: number):number;
				putShort(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asShortBuffer():Java.java.nio.ShortBuffer;
				getInt(arg0?: number):number;
				putInt(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asIntBuffer():Java.java.nio.IntBuffer;
				getLong(arg0?: number):number;
				putLong(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asLongBuffer():Java.java.nio.LongBuffer;
				getFloat(arg0?: number):number;
				putFloat(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asFloatBuffer():Java.java.nio.FloatBuffer;
				getDouble(arg0?: number):number;
				putDouble(arg0: number, arg1?: number):Java.java.nio.ByteBuffer;
				asDoubleBuffer():Java.java.nio.DoubleBuffer;
				
			}
			export interface Buffer extends Java.Object {	
				
				capacity():number;
				position(arg0?: number):number;
				limit(arg0?: number):number;
				mark():Java.java.nio.Buffer;
				reset():Java.java.nio.Buffer;
				clear():Java.java.nio.Buffer;
				flip():Java.java.nio.Buffer;
				rewind():Java.java.nio.Buffer;
				remaining():number;
				hasRemaining():boolean;
				isReadOnly():boolean;
				hasArray():boolean;
				array():any;
				arrayOffset():number;
				isDirect():boolean;
				
			}
			export interface ByteOrder extends Java.Object {	
				
					/**
					 * static
					 */
				readonly BIG_ENDIAN: Java.java.nio.ByteOrder
				
					/**
					 * static
					 */
				readonly LITTLE_ENDIAN: Java.java.nio.ByteOrder
				
				
				/**
				 * static
				 */
				nativeOrder():Java.java.nio.ByteOrder;
				toString():string;
				
			}
			export interface CharBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.CharBuffer>, Java.Appendable, Java.Readable {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.CharBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number> | string, arg1?: number, arg2?: number):Java.java.nio.CharBuffer;
				read(arg0: Java.java.nio.CharBuffer):number;
				slice():Java.java.nio.CharBuffer;
				duplicate():Java.java.nio.CharBuffer;
				asReadOnlyBuffer():Java.java.nio.CharBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.CharBuffer | Java.Array<number> | string, arg1?: number, arg2?: number):Java.java.nio.CharBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.CharBuffer;
				isDirect():boolean;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.CharBuffer):number;
				toString():string;
				length():number;
				charAt(arg0: number):number;
				subSequence(arg0: number, arg1: number):Java.java.nio.CharBuffer;
				append(arg0: string | number, arg1?: number, arg2?: number):Java.java.nio.CharBuffer;
				order():Java.java.nio.ByteOrder;
				chars():Java.java.util.stream.IntStream;
				
			}
			export interface ShortBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.ShortBuffer> {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.ShortBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.ShortBuffer;
				slice():Java.java.nio.ShortBuffer;
				duplicate():Java.java.nio.ShortBuffer;
				asReadOnlyBuffer():Java.java.nio.ShortBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.ShortBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.ShortBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.ShortBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.ShortBuffer):number;
				order():Java.java.nio.ByteOrder;
				
			}
			export interface IntBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.IntBuffer> {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.IntBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.IntBuffer;
				slice():Java.java.nio.IntBuffer;
				duplicate():Java.java.nio.IntBuffer;
				asReadOnlyBuffer():Java.java.nio.IntBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.IntBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.IntBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.IntBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.IntBuffer):number;
				order():Java.java.nio.ByteOrder;
				
			}
			export interface LongBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.LongBuffer> {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.LongBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.LongBuffer;
				slice():Java.java.nio.LongBuffer;
				duplicate():Java.java.nio.LongBuffer;
				asReadOnlyBuffer():Java.java.nio.LongBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.LongBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.LongBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.LongBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.LongBuffer):number;
				order():Java.java.nio.ByteOrder;
				
			}
			export interface FloatBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.FloatBuffer> {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.FloatBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.FloatBuffer;
				slice():Java.java.nio.FloatBuffer;
				duplicate():Java.java.nio.FloatBuffer;
				asReadOnlyBuffer():Java.java.nio.FloatBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.FloatBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.FloatBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.FloatBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.FloatBuffer):number;
				order():Java.java.nio.ByteOrder;
				
			}
			export interface DoubleBuffer extends Java.java.nio.Buffer, Java.Comparable<Java.java.nio.DoubleBuffer> {	
				
				
				/**
				 * static
				 */
				allocate(arg0: number):Java.java.nio.DoubleBuffer;
				
				/**
				 * static
				 */
				wrap(arg0: Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.DoubleBuffer;
				slice():Java.java.nio.DoubleBuffer;
				duplicate():Java.java.nio.DoubleBuffer;
				asReadOnlyBuffer():Java.java.nio.DoubleBuffer;
				get(arg0?: number | Java.Array<number>, arg1?: number, arg2?: number):number;
				put(arg0: number | Java.java.nio.DoubleBuffer | Java.Array<number>, arg1?: number, arg2?: number):Java.java.nio.DoubleBuffer;
				hasArray():boolean;
				array():Java.Array<number>;
				arrayOffset():number;
				compact():Java.java.nio.DoubleBuffer;
				isDirect():boolean;
				toString():string;
				hashCode():number;
				equals(arg0: any):boolean;
				compareTo(arg0: Java.java.nio.DoubleBuffer):number;
				order():Java.java.nio.ByteOrder;
				
			}
			export namespace channels {
				export interface SocketChannel extends Java.java.nio.channels.spi.AbstractSelectableChannel, Java.java.nio.channels.ByteChannel, Java.java.nio.channels.ScatteringByteChannel, Java.java.nio.channels.GatheringByteChannel, Java.java.nio.channels.NetworkChannel {	
					
					
					/**
					 * static
					 */
					open(arg0?: Java.java.net.SocketAddress):Java.java.nio.channels.SocketChannel;
					validOps():number;
					bind(arg0: Java.java.net.SocketAddress):Java.java.nio.channels.SocketChannel;
					setOption<T>(arg0: Java.java.net.SocketOption<T>, arg1: T):Java.java.nio.channels.SocketChannel;
					shutdownInput():Java.java.nio.channels.SocketChannel;
					shutdownOutput():Java.java.nio.channels.SocketChannel;
					socket():Java.java.net.Socket;
					isConnected():boolean;
					isConnectionPending():boolean;
					connect(arg0: Java.java.net.SocketAddress):boolean;
					finishConnect():boolean;
					getRemoteAddress():Java.java.net.SocketAddress;
					read(arg0: Java.java.nio.ByteBuffer | Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					write(arg0: Java.java.nio.ByteBuffer | Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					getLocalAddress():Java.java.net.SocketAddress;
					
				}
				export interface ByteChannel extends Java.Interface, Java.java.nio.channels.ReadableByteChannel, Java.java.nio.channels.WritableByteChannel {	
					
					
				}
				export interface ScatteringByteChannel extends Java.Interface, Java.java.nio.channels.ReadableByteChannel {	
					
					read(arg0: Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					
				}
				export interface GatheringByteChannel extends Java.Interface, Java.java.nio.channels.WritableByteChannel {	
					
					write(arg0: Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					
				}
				export interface NetworkChannel extends Java.Interface, Java.java.nio.channels.Channel {	
					
					bind(arg0: Java.java.net.SocketAddress):Java.java.nio.channels.NetworkChannel;
					getLocalAddress():Java.java.net.SocketAddress;
					setOption<T>(arg0: Java.java.net.SocketOption<T>, arg1: T):Java.java.nio.channels.NetworkChannel;
					getOption<T>(arg0: Java.java.net.SocketOption<T>):T;
					supportedOptions():Java.java.util.Set<Java.java.net.SocketOption<any>>;
					
				}
				export interface SelectableChannel extends Java.java.nio.channels.spi.AbstractInterruptibleChannel, Java.java.nio.channels.Channel {	
					
					provider():Java.java.nio.channels.spi.SelectorProvider;
					validOps():number;
					isRegistered():boolean;
					keyFor(arg0: Java.java.nio.channels.Selector):Java.java.nio.channels.SelectionKey;
					register(arg0: Java.java.nio.channels.Selector, arg1: number, arg2?: any):Java.java.nio.channels.SelectionKey;
					configureBlocking(arg0: boolean):Java.java.nio.channels.SelectableChannel;
					isBlocking():boolean;
					blockingLock():any;
					
				}
				export interface Selector extends Java.Object, Java.java.io.Closeable {	
					
					
					/**
					 * static
					 */
					open():Java.java.nio.channels.Selector;
					isOpen():boolean;
					provider():Java.java.nio.channels.spi.SelectorProvider;
					keys():Java.java.util.Set<Java.java.nio.channels.SelectionKey>;
					selectedKeys():Java.java.util.Set<Java.java.nio.channels.SelectionKey>;
					selectNow():number;
					select(arg0?: number):number;
					wakeup():Java.java.nio.channels.Selector;
					close():void;
					
				}
				export interface SelectionKey extends Java.Object {	
					
						/**
						 * static
						 */
					readonly OP_READ: number
					
						/**
						 * static
						 */
					readonly OP_WRITE: number
					
						/**
						 * static
						 */
					readonly OP_CONNECT: number
					
						/**
						 * static
						 */
					readonly OP_ACCEPT: number
					
					channel():Java.java.nio.channels.SelectableChannel;
					selector():Java.java.nio.channels.Selector;
					isValid():boolean;
					cancel():void;
					interestOps(arg0?: number):number;
					readyOps():number;
					isReadable():boolean;
					isWritable():boolean;
					isConnectable():boolean;
					isAcceptable():boolean;
					attach(arg0: any):any;
					attachment():any;
					
				}
				export interface ReadableByteChannel extends Java.Interface, Java.java.nio.channels.Channel {	
					
					read(arg0: Java.java.nio.ByteBuffer):number;
					
				}
				export interface WritableByteChannel extends Java.Interface, Java.java.nio.channels.Channel {	
					
					write(arg0: Java.java.nio.ByteBuffer):number;
					
				}
				export interface Channel extends Java.Interface, Java.java.io.Closeable {	
					
					isOpen():boolean;
					close():void;
					
				}
				export interface DatagramChannel extends Java.java.nio.channels.spi.AbstractSelectableChannel, Java.java.nio.channels.ByteChannel, Java.java.nio.channels.ScatteringByteChannel, Java.java.nio.channels.GatheringByteChannel, Java.java.nio.channels.MulticastChannel {	
					
					
					/**
					 * static
					 */
					open(arg0?: Java.java.net.ProtocolFamily):Java.java.nio.channels.DatagramChannel;
					validOps():number;
					bind(arg0: Java.java.net.SocketAddress):Java.java.nio.channels.DatagramChannel;
					setOption<T>(arg0: Java.java.net.SocketOption<T>, arg1: T):Java.java.nio.channels.DatagramChannel;
					socket():Java.java.net.DatagramSocket;
					isConnected():boolean;
					connect(arg0: Java.java.net.SocketAddress):Java.java.nio.channels.DatagramChannel;
					disconnect():Java.java.nio.channels.DatagramChannel;
					getRemoteAddress():Java.java.net.SocketAddress;
					receive(arg0: Java.java.nio.ByteBuffer):Java.java.net.SocketAddress;
					send(arg0: Java.java.nio.ByteBuffer, arg1: Java.java.net.SocketAddress):number;
					read(arg0: Java.java.nio.ByteBuffer | Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					write(arg0: Java.java.nio.ByteBuffer | Java.Array<Java.java.nio.ByteBuffer>, arg1?: number, arg2?: number):number;
					getLocalAddress():Java.java.net.SocketAddress;
					
				}
				export interface Pipe extends Java.Object {	
					
					source():Java.java.nio.channels.Pipe.SourceChannel;
					sink():Java.java.nio.channels.Pipe.SinkChannel;
					
					/**
					 * static
					 */
					open():Java.java.nio.channels.Pipe;
					
				}
				export interface ServerSocketChannel extends Java.java.nio.channels.spi.AbstractSelectableChannel, Java.java.nio.channels.NetworkChannel {	
					
					
					/**
					 * static
					 */
					open():Java.java.nio.channels.ServerSocketChannel;
					validOps():number;
					bind(arg0: Java.java.net.SocketAddress, arg1?: number):Java.java.nio.channels.ServerSocketChannel;
					setOption<T>(arg0: Java.java.net.SocketOption<T>, arg1: T):Java.java.nio.channels.ServerSocketChannel;
					socket():Java.java.net.ServerSocket;
					accept():Java.java.nio.channels.SocketChannel;
					getLocalAddress():Java.java.net.SocketAddress;
					
				}
				export interface InterruptibleChannel extends Java.Interface, Java.java.nio.channels.Channel {	
					
					close():void;
					
				}
				export interface MulticastChannel extends Java.Interface, Java.java.nio.channels.NetworkChannel {	
					
					close():void;
					join(arg0: Java.java.net.InetAddress, arg1: Java.java.net.NetworkInterface, arg2?: Java.java.net.InetAddress):Java.java.nio.channels.MembershipKey;
					
				}
				export interface MembershipKey extends Java.Object {	
					
					isValid():boolean;
					drop():void;
					block(arg0: Java.java.net.InetAddress):Java.java.nio.channels.MembershipKey;
					unblock(arg0: Java.java.net.InetAddress):Java.java.nio.channels.MembershipKey;
					channel():Java.java.nio.channels.MulticastChannel;
					group():Java.java.net.InetAddress;
					networkInterface():Java.java.net.NetworkInterface;
					sourceAddress():Java.java.net.InetAddress;
					
				}
				export namespace spi {
					export interface AbstractSelectableChannel extends Java.java.nio.channels.SelectableChannel {	
						
						provider():Java.java.nio.channels.spi.SelectorProvider;
						isRegistered():boolean;
						keyFor(arg0: Java.java.nio.channels.Selector):Java.java.nio.channels.SelectionKey;
						register(arg0: Java.java.nio.channels.Selector, arg1: number, arg2: any):Java.java.nio.channels.SelectionKey;
						isBlocking():boolean;
						blockingLock():any;
						configureBlocking(arg0: boolean):Java.java.nio.channels.SelectableChannel;
						
					}
					export interface SelectorProvider extends Java.Object {	
						
						
						/**
						 * static
						 */
						provider():Java.java.nio.channels.spi.SelectorProvider;
						openDatagramChannel(arg0?: Java.java.net.ProtocolFamily):Java.java.nio.channels.DatagramChannel;
						openPipe():Java.java.nio.channels.Pipe;
						openSelector():Java.java.nio.channels.spi.AbstractSelector;
						openServerSocketChannel():Java.java.nio.channels.ServerSocketChannel;
						openSocketChannel():Java.java.nio.channels.SocketChannel;
						inheritedChannel():Java.java.nio.channels.Channel;
						
					}
					export interface AbstractInterruptibleChannel extends Java.Object, Java.java.nio.channels.Channel, Java.java.nio.channels.InterruptibleChannel {	
						
						close():void;
						isOpen():boolean;
						
					}
					export interface AbstractSelector extends Java.java.nio.channels.Selector {	
						
						close():void;
						isOpen():boolean;
						provider():Java.java.nio.channels.spi.SelectorProvider;
						
					}
					
				}
				export namespace Pipe {
					export interface SourceChannel extends Java.java.nio.channels.spi.AbstractSelectableChannel, Java.java.nio.channels.ReadableByteChannel, Java.java.nio.channels.ScatteringByteChannel {	
						
						validOps():number;
						
					}
					export interface SinkChannel extends Java.java.nio.channels.spi.AbstractSelectableChannel, Java.java.nio.channels.WritableByteChannel, Java.java.nio.channels.GatheringByteChannel {	
						
						validOps():number;
						
					}
					
				}
				
			}
			
		}
		
	}
	export namespace reflect {
		export interface Method extends Java.reflect.Executable {	
			
			getDeclaringClass():Java.Class<any>;
			getName():string;
			getModifiers():number;
			getTypeParameters():Java.reflect.TypeVariable<Java.reflect.Method>;
			getReturnType():Java.Class<any>;
			getGenericReturnType():Java.reflect.Type;
			getParameterTypes():Java.Class<any>;
			getParameterCount():number;
			getGenericParameterTypes():Java.Array<Java.reflect.Type>;
			getExceptionTypes():Java.Class<any>;
			getGenericExceptionTypes():Java.Array<Java.reflect.Type>;
			equals(arg0: any):boolean;
			hashCode():number;
			toString():string;
			toGenericString():string;
			invoke(arg0: any, arg1: Java.Array<any>):any;
			isBridge():boolean;
			isVarArgs():boolean;
			isSynthetic():boolean;
			isDefault():boolean;
			getDefaultValue():any;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			getParameterAnnotations():Java.Array<Java.Array<Java.annotation.Annotation>>;
			getAnnotatedReturnType():Java.reflect.AnnotatedType;
			
		}
		export interface Field extends Java.reflect.AccessibleObject, Java.reflect.Member {	
			
			getDeclaringClass():Java.Class<any>;
			getName():string;
			getModifiers():number;
			isEnumConstant():boolean;
			isSynthetic():boolean;
			getType():Java.Class<any>;
			getGenericType():Java.reflect.Type;
			equals(arg0: any):boolean;
			hashCode():number;
			toString():string;
			toGenericString():string;
			get(arg0: any):any;
			getBoolean(arg0: any):boolean;
			getByte(arg0: any):number;
			getChar(arg0: any):number;
			getShort(arg0: any):number;
			getInt(arg0: any):number;
			getLong(arg0: any):number;
			getFloat(arg0: any):number;
			getDouble(arg0: any):number;
			set(arg0: any, arg1: any):void;
			setBoolean(arg0: any, arg1: boolean):void;
			setByte(arg0: any, arg1: number):void;
			setChar(arg0: any, arg1: number):void;
			setShort(arg0: any, arg1: number):void;
			setInt(arg0: any, arg1: number):void;
			setLong(arg0: any, arg1: number):void;
			setFloat(arg0: any, arg1: number):void;
			setDouble(arg0: any, arg1: number):void;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			getAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			getAnnotatedType():Java.reflect.AnnotatedType;
			
		}
		export interface Executable extends Java.reflect.AccessibleObject, Java.reflect.Member, Java.reflect.GenericDeclaration {	
			
			getDeclaringClass():Java.Class<any>;
			getName():string;
			getModifiers():number;
			getTypeParameters():Java.reflect.TypeVariable<any>;
			getParameterTypes():Java.Class<any>;
			getParameterCount():number;
			getGenericParameterTypes():Java.Array<Java.reflect.Type>;
			getParameters():Java.Array<Java.reflect.Parameter>;
			getExceptionTypes():Java.Class<any>;
			getGenericExceptionTypes():Java.Array<Java.reflect.Type>;
			toGenericString():string;
			isVarArgs():boolean;
			isSynthetic():boolean;
			getParameterAnnotations():Java.Array<Java.Array<Java.annotation.Annotation>>;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			getAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			getAnnotatedReturnType():Java.reflect.AnnotatedType;
			getAnnotatedReceiverType():Java.reflect.AnnotatedType;
			getAnnotatedParameterTypes():Java.Array<Java.reflect.AnnotatedType>;
			getAnnotatedExceptionTypes():Java.Array<Java.reflect.AnnotatedType>;
			
		}
		export interface TypeVariable<D> extends Java.Interface, Java.reflect.Type, Java.reflect.AnnotatedElement {	
			
			getBounds():Java.Array<Java.reflect.Type>;
			getGenericDeclaration():D;
			getName():string;
			getAnnotatedBounds():Java.Array<Java.reflect.AnnotatedType>;
			
		}
		export interface Type extends Java.Interface {	
			
			getTypeName():string;
			
		}
		export interface AnnotatedType extends Java.Interface, Java.reflect.AnnotatedElement {	
			
			getType():Java.reflect.Type;
			
		}
		export interface AccessibleObject extends Java.Object, Java.reflect.AnnotatedElement {	
			
			
			/**
			 * static
			 */
			setAccessible(arg0: Java.Array<Java.reflect.AccessibleObject> | boolean, arg1?: boolean):void;
			isAccessible():boolean;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			isAnnotationPresent(arg0: Java.Class<any>):boolean;
			getAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getAnnotations():Java.Array<Java.annotation.Annotation>;
			getDeclaredAnnotation<T>(arg0: Java.Class<T>):T;
			getDeclaredAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			
		}
		export interface Member extends Java.Interface {	
			
				/**
				 * static
				 */
			readonly PUBLIC: number
			
				/**
				 * static
				 */
			readonly DECLARED: number
			
			getDeclaringClass():Java.Class<any>;
			getName():string;
			getModifiers():number;
			isSynthetic():boolean;
			
		}
		export interface GenericDeclaration extends Java.Interface, Java.reflect.AnnotatedElement {	
			
			getTypeParameters():Java.reflect.TypeVariable<any>;
			
		}
		export interface Parameter extends Java.Object, Java.reflect.AnnotatedElement {	
			
			equals(arg0: any):boolean;
			hashCode():number;
			isNamePresent():boolean;
			toString():string;
			getDeclaringExecutable():Java.reflect.Executable;
			getModifiers():number;
			getName():string;
			getParameterizedType():Java.reflect.Type;
			getType():Java.Class<any>;
			getAnnotatedType():Java.reflect.AnnotatedType;
			isImplicit():boolean;
			isSynthetic():boolean;
			isVarArgs():boolean;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			getAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			getDeclaredAnnotation<T>(arg0: Java.Class<T>):T;
			getDeclaredAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getAnnotations():Java.Array<Java.annotation.Annotation>;
			
		}
		export interface AnnotatedElement extends Java.Interface {	
			
			isAnnotationPresent(arg0: Java.Class<any>):boolean;
			getAnnotation<T>(arg0: Java.Class<T>):T;
			getAnnotations():Java.Array<Java.annotation.Annotation>;
			getAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotation<T>(arg0: Java.Class<T>):T;
			getDeclaredAnnotationsByType<T>(arg0: Java.Class<T>):Java.Array<T>;
			getDeclaredAnnotations():Java.Array<Java.annotation.Annotation>;
			
		}
		
	}
	export namespace javax.sound.sampled {
		export interface Clip extends Java.Interface, Java.javax.sound.sampled.DataLine {	
			
				/**
				 * static
				 */
			readonly LOOP_CONTINUOUSLY: number
			
			open(arg0: Java.javax.sound.sampled.AudioFormat | Java.javax.sound.sampled.AudioInputStream, arg1?: Java.Array<number>, arg2?: number, arg3?: number):void;
			getFrameLength():number;
			getMicrosecondLength():number;
			setFramePosition(arg0: number):void;
			setMicrosecondPosition(arg0: number):void;
			setLoopPoints(arg0: number, arg1: number):void;
			loop(arg0: number):void;
			
		}
		export interface DataLine extends Java.Interface, Java.javax.sound.sampled.Line {	
			
			drain():void;
			flush():void;
			start():void;
			stop():void;
			isRunning():boolean;
			isActive():boolean;
			getFormat():Java.javax.sound.sampled.AudioFormat;
			getBufferSize():number;
			available():number;
			getFramePosition():number;
			getLongFramePosition():number;
			getMicrosecondPosition():number;
			getLevel():number;
			
		}
		export interface AudioFormat extends Java.Object {	
			
			getEncoding():Java.javax.sound.sampled.AudioFormat.Encoding;
			getSampleRate():number;
			getSampleSizeInBits():number;
			getChannels():number;
			getFrameSize():number;
			getFrameRate():number;
			isBigEndian():boolean;
			properties():Java.java.util.Map<string, any>;
			getProperty(arg0: string):any;
			matches(arg0: Java.javax.sound.sampled.AudioFormat):boolean;
			toString():string;
			
		}
		export interface AudioInputStream extends Java.java.io.InputStream {	
			
			getFormat():Java.javax.sound.sampled.AudioFormat;
			getFrameLength():number;
			read(arg0?: Java.Array<number>, arg1?: number, arg2?: number):number;
			skip(arg0: number):number;
			available():number;
			close():void;
			mark(arg0: number):void;
			reset():void;
			markSupported():boolean;
			
		}
		export interface Line extends Java.Interface, Java.AutoCloseable {	
			
			getLineInfo():Java.javax.sound.sampled.Line.Info;
			open():void;
			close():void;
			isOpen():boolean;
			getControls():Java.Array<Java.javax.sound.sampled.Control>;
			isControlSupported(arg0: Java.javax.sound.sampled.Control.Type):boolean;
			getControl(arg0: Java.javax.sound.sampled.Control.Type):Java.javax.sound.sampled.Control;
			addLineListener(arg0: Java.javax.sound.sampled.LineListener):void;
			removeLineListener(arg0: Java.javax.sound.sampled.LineListener):void;
			
		}
		export interface Control extends Java.Object {	
			
			getType():Java.javax.sound.sampled.Control.Type;
			toString():string;
			
		}
		export interface LineListener extends Java.Interface, Java.java.util.EventListener {	
			
			update(arg0: Java.javax.sound.sampled.LineEvent):void;
			
		}
		export interface LineEvent extends Java.java.util.EventObject {	
			
			getLine():Java.javax.sound.sampled.Line;
			getType():Java.javax.sound.sampled.LineEvent.Type;
			getFramePosition():number;
			toString():string;
			
		}
		export namespace AudioFormat {
			export interface Encoding extends Java.Object {	
				
					/**
					 * static
					 */
				readonly PCM_SIGNED: Java.javax.sound.sampled.AudioFormat.Encoding
				
					/**
					 * static
					 */
				readonly PCM_UNSIGNED: Java.javax.sound.sampled.AudioFormat.Encoding
				
					/**
					 * static
					 */
				readonly PCM_FLOAT: Java.javax.sound.sampled.AudioFormat.Encoding
				
					/**
					 * static
					 */
				readonly ULAW: Java.javax.sound.sampled.AudioFormat.Encoding
				
					/**
					 * static
					 */
				readonly ALAW: Java.javax.sound.sampled.AudioFormat.Encoding
				
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			
		}
		export namespace Line {
			export interface Info extends Java.Object {	
				
				getLineClass():Java.Class<any>;
				matches(arg0: Java.javax.sound.sampled.Line.Info):boolean;
				toString():string;
				
			}
			
		}
		export namespace Control {
			export interface Type extends Java.Object {	
				
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			
		}
		export namespace LineEvent {
			export interface Type extends Java.Object {	
				
					/**
					 * static
					 */
				readonly OPEN: Java.javax.sound.sampled.LineEvent.Type
				
					/**
					 * static
					 */
				readonly CLOSE: Java.javax.sound.sampled.LineEvent.Type
				
					/**
					 * static
					 */
				readonly START: Java.javax.sound.sampled.LineEvent.Type
				
					/**
					 * static
					 */
				readonly STOP: Java.javax.sound.sampled.LineEvent.Type
				
				equals(arg0: any):boolean;
				hashCode():number;
				toString():string;
				
			}
			
		}
		
	}
	export namespace Thread {
		export interface State extends Java.Enum<Java.Thread.State> {	
			
			
			/**
			 * static
			 */
			values():Java.Array<Java.Thread.State>;
			
			/**
			 * static
			 */
			valueOf(arg0: string):Java.Thread.State;
			
		}
		export interface UncaughtExceptionHandler extends Java.Interface {	
			
			uncaughtException(arg0: Java.Thread, arg1: Java.Throwable):void;
			
		}
		
	}
	export namespace com.neovisionaries.ws.client {
		export interface WebSocket extends Java.Object {	
			
			recreate(arg0?: number):Java.com.neovisionaries.ws.client.WebSocket;
			getState():Java.com.neovisionaries.ws.client.WebSocketState;
			isOpen():boolean;
			addProtocol(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			removeProtocol(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			clearProtocols():Java.com.neovisionaries.ws.client.WebSocket;
			addExtension(arg0: Java.com.neovisionaries.ws.client.WebSocketExtension | string):Java.com.neovisionaries.ws.client.WebSocket;
			removeExtension(arg0: Java.com.neovisionaries.ws.client.WebSocketExtension):Java.com.neovisionaries.ws.client.WebSocket;
			removeExtensions(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			clearExtensions():Java.com.neovisionaries.ws.client.WebSocket;
			addHeader(arg0: string, arg1: string):Java.com.neovisionaries.ws.client.WebSocket;
			removeHeaders(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			clearHeaders():Java.com.neovisionaries.ws.client.WebSocket;
			setUserInfo(arg0: string, arg1?: string):Java.com.neovisionaries.ws.client.WebSocket;
			clearUserInfo():Java.com.neovisionaries.ws.client.WebSocket;
			isExtended():boolean;
			setExtended(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			isAutoFlush():boolean;
			setAutoFlush(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			isMissingCloseFrameAllowed():boolean;
			setMissingCloseFrameAllowed(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			isDirectTextMessage():boolean;
			setDirectTextMessage(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			flush():Java.com.neovisionaries.ws.client.WebSocket;
			getFrameQueueSize():number;
			setFrameQueueSize(arg0: number):Java.com.neovisionaries.ws.client.WebSocket;
			getMaxPayloadSize():number;
			setMaxPayloadSize(arg0: number):Java.com.neovisionaries.ws.client.WebSocket;
			getPingInterval():number;
			setPingInterval(arg0: number):Java.com.neovisionaries.ws.client.WebSocket;
			getPongInterval():number;
			setPongInterval(arg0: number):Java.com.neovisionaries.ws.client.WebSocket;
			getPingPayloadGenerator():Java.com.neovisionaries.ws.client.PayloadGenerator;
			setPingPayloadGenerator(arg0: Java.com.neovisionaries.ws.client.PayloadGenerator):Java.com.neovisionaries.ws.client.WebSocket;
			getPongPayloadGenerator():Java.com.neovisionaries.ws.client.PayloadGenerator;
			setPongPayloadGenerator(arg0: Java.com.neovisionaries.ws.client.PayloadGenerator):Java.com.neovisionaries.ws.client.WebSocket;
			getPingSenderName():string;
			setPingSenderName(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			getPongSenderName():string;
			setPongSenderName(arg0: string):Java.com.neovisionaries.ws.client.WebSocket;
			addListener(arg0: Java.com.neovisionaries.ws.client.WebSocketListener):Java.com.neovisionaries.ws.client.WebSocket;
			addListeners(arg0: Java.java.util.List<Java.com.neovisionaries.ws.client.WebSocketListener>):Java.com.neovisionaries.ws.client.WebSocket;
			removeListener(arg0: Java.com.neovisionaries.ws.client.WebSocketListener):Java.com.neovisionaries.ws.client.WebSocket;
			removeListeners(arg0: Java.java.util.List<Java.com.neovisionaries.ws.client.WebSocketListener>):Java.com.neovisionaries.ws.client.WebSocket;
			clearListeners():Java.com.neovisionaries.ws.client.WebSocket;
			getSocket():Java.java.net.Socket;
			getConnectedSocket():Java.java.net.Socket;
			getURI():Java.java.net.URI;
			connect(arg0?: Java.java.util.concurrent.ExecutorService):Java.com.neovisionaries.ws.client.WebSocket;
			connectable():Java.java.util.concurrent.Callable<Java.com.neovisionaries.ws.client.WebSocket>;
			connectAsynchronously():Java.com.neovisionaries.ws.client.WebSocket;
			disconnect(arg0?: number | string, arg1?: string, arg2?: number):Java.com.neovisionaries.ws.client.WebSocket;
			getAgreedExtensions():Java.java.util.List<Java.com.neovisionaries.ws.client.WebSocketExtension>;
			getAgreedProtocol():string;
			sendFrame(arg0: Java.com.neovisionaries.ws.client.WebSocketFrame):Java.com.neovisionaries.ws.client.WebSocket;
			sendContinuation(arg0?: boolean | string | Java.Array<number>, arg1?: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			sendText(arg0: string, arg1?: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			sendBinary(arg0: Java.Array<number>, arg1?: boolean):Java.com.neovisionaries.ws.client.WebSocket;
			sendClose(arg0?: number, arg1?: string):Java.com.neovisionaries.ws.client.WebSocket;
			sendPing(arg0?: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocket;
			sendPong(arg0?: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocket;
			
		}
		export interface WebSocketException extends Java.Exception {	
			
			getError():Java.com.neovisionaries.ws.client.WebSocketError;
			
		}
		export interface WebSocketFrame extends Java.Object {	
			
			getFin():boolean;
			setFin(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocketFrame;
			getRsv1():boolean;
			setRsv1(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocketFrame;
			getRsv2():boolean;
			setRsv2(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocketFrame;
			getRsv3():boolean;
			setRsv3(arg0: boolean):Java.com.neovisionaries.ws.client.WebSocketFrame;
			getOpcode():number;
			setOpcode(arg0: number):Java.com.neovisionaries.ws.client.WebSocketFrame;
			isContinuationFrame():boolean;
			isTextFrame():boolean;
			isBinaryFrame():boolean;
			isCloseFrame():boolean;
			isPingFrame():boolean;
			isPongFrame():boolean;
			isDataFrame():boolean;
			isControlFrame():boolean;
			hasPayload():boolean;
			getPayloadLength():number;
			getPayload():Java.Array<number>;
			getPayloadText():string;
			setPayload(arg0: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			setCloseFramePayload(arg0: number, arg1: string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			getCloseCode():number;
			getCloseReason():string;
			toString():string;
			
			/**
			 * static
			 */
			createContinuationFrame(arg0?: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
			/**
			 * static
			 */
			createTextFrame(arg0: string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
			/**
			 * static
			 */
			createBinaryFrame(arg0: Java.Array<number>):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
			/**
			 * static
			 */
			createCloseFrame(arg0?: number, arg1?: string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
			/**
			 * static
			 */
			createPingFrame(arg0?: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
			/**
			 * static
			 */
			createPongFrame(arg0?: Java.Array<number> | string):Java.com.neovisionaries.ws.client.WebSocketFrame;
			
		}
		export interface WebSocketState extends Java.Enum<Java.com.neovisionaries.ws.client.WebSocketState> {	
			
			
			/**
			 * static
			 */
			values():Java.Array<Java.com.neovisionaries.ws.client.WebSocketState>;
			
			/**
			 * static
			 */
			valueOf(arg0: string):Java.com.neovisionaries.ws.client.WebSocketState;
			
		}
		export interface WebSocketExtension extends Java.Object {	
			
				/**
				 * static
				 */
			readonly PERMESSAGE_DEFLATE: string
			
			getName():string;
			getParameters():Java.java.util.Map<string, string>;
			containsParameter(arg0: string):boolean;
			getParameter(arg0: string):string;
			setParameter(arg0: string, arg1: string):Java.com.neovisionaries.ws.client.WebSocketExtension;
			toString():string;
			
			/**
			 * static
			 */
			parse(arg0: string):Java.com.neovisionaries.ws.client.WebSocketExtension;
			
		}
		export interface PayloadGenerator extends Java.Interface {	
			
			generate():Java.Array<number>;
			
		}
		export interface WebSocketListener extends Java.Interface {	
			
			onStateChanged(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketState):void;
			onConnected(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.java.util.Map<string, Java.java.util.List<string>>):void;
			onConnectError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException):void;
			onDisconnected(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame, arg2: Java.com.neovisionaries.ws.client.WebSocketFrame, arg3: boolean):void;
			onFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onContinuationFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onTextFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onBinaryFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onCloseFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onPingFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onPongFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onTextMessage(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: string | Java.Array<number>):void;
			onBinaryMessage(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.Array<number>):void;
			onSendingFrame(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onFrameSent(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onFrameUnsent(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onThreadCreated(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.ThreadType, arg2: Java.Thread):void;
			onThreadStarted(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.ThreadType, arg2: Java.Thread):void;
			onThreadStopping(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.ThreadType, arg2: Java.Thread):void;
			onError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException):void;
			onFrameError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException, arg2: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onMessageError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException, arg2: Java.java.util.List<Java.com.neovisionaries.ws.client.WebSocketFrame>):void;
			onMessageDecompressionError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException, arg2: Java.Array<number>):void;
			onTextMessageError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException, arg2: Java.Array<number>):void;
			onSendError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException, arg2: Java.com.neovisionaries.ws.client.WebSocketFrame):void;
			onUnexpectedError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.com.neovisionaries.ws.client.WebSocketException):void;
			handleCallbackError(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: Java.Throwable):void;
			onSendingHandshake(arg0: Java.com.neovisionaries.ws.client.WebSocket, arg1: string, arg2: Java.java.util.List<Java.Array<string>>):void;
			
		}
		export interface WebSocketError extends Java.Enum<Java.com.neovisionaries.ws.client.WebSocketError> {	
			
			
			/**
			 * static
			 */
			values():Java.Array<Java.com.neovisionaries.ws.client.WebSocketError>;
			
			/**
			 * static
			 */
			valueOf(arg0: string):Java.com.neovisionaries.ws.client.WebSocketError;
			
		}
		export interface ThreadType extends Java.Enum<Java.com.neovisionaries.ws.client.ThreadType> {	
			
			
			/**
			 * static
			 */
			values():Java.Array<Java.com.neovisionaries.ws.client.ThreadType>;
			
			/**
			 * static
			 */
			valueOf(arg0: string):Java.com.neovisionaries.ws.client.ThreadType;
			
		}
		
	}
	export namespace annotation {
		export interface Annotation extends Java.Interface {	
			
			equals(arg0: any):boolean;
			hashCode():number;
			toString():string;
			annotationType():Java.Class<any>;
			
		}
		
	}
	
}
