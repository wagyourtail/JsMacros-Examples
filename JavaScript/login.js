// this file is not using the obfuscated fabric mappings and will only work with
// minecraft in the dev environment

const mc = jsmacros.getMinecraft();
const mcProxy = mc.getNetworkProxy();
const YggAuthServ = Java.type("com.mojang.authlib.yggdrasil.YggdrasilAuthenticationService")
const UUID = Java.type("java.util.UUID")
const Agent = Java.type("com.mojang.authlib.Agent")
const uuid = UUID.randomUUID().toString()
const UUIDType = Java.type("com.mojang.util.UUIDTypeAdapter")
const Session = Java.type("net.minecraft.client.util.Session")
const yas = new YggAuthServ(mcProxy, uuid);
const yua = yas.createUserAuthentication(Agent.MINECRAFT);
const ymss = yas.createMinecraftSessionService();

function setSession(s) {
	const SessionField = mc.getClass().getDeclaredField("session");
	SessionField.setAccessible(true);
	SessionField.set(mc, s);
}

function loginOnline(user, pass) {
	yua.setUsername(user);
	yua.setPassword(pass);
	pass = null;
	yua.logIn();
	setSession(new Session(yua.getSelectedProfile().getName(), UUIDType
			.fromUUID(yua.getSelectedProfile().getId()), yua
			.getAuthenticatedToken(), yua.getUserType().getName()));
	chat.log("logged in as: " + yua.getSelectedProfile().getName());
}

if (args.get("message")?.startsWith("!login")) {
	const message = args.get("message").match(/^!login ([^\s]+) (.+)/);
	try {
		loginOnline(message[1], message[2]);
	} catch (e) {
		chat.log(e);
	}
	args.put("message", null);
}

if (args.get("message")?.startsWith("!connect")) {
	const message = args.get("message").match(/^!connect (.+)/);
	const d2d = hud.createDraw2D();
	d2d.onInit = () => {
		chat.log(args);
		try {
			jsmacros.disconnect();
			//jsmacros.connect(message[1]);
		} catch (e) {
			chat.log(e);
		}
	};
	hud.registerDraw2D(d2d)
	args.put("message", null);
}
