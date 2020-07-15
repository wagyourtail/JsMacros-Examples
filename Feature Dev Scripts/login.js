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

const message = args.get("message").match(/^!login ([^\s]+) (.+)/);

if (args.get("message").startsWith("!login")) {
	try {
		loginOnline(message[1], message[2]);
	} catch (e) {
		chat.log(e.toString());
	}
	args.put("message", null);
}
