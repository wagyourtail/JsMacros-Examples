// works with: "1.1.8-beta titled jsmacros.open" or later
// put this on the JOIN_SERVER event

function createOutdatedScreen(currentVersion, newVersion, url) {
	screen = hud.createScreen("JsMacros Version Outdated", false);
	screen.onInit = (scr) => {
		const w = scr.getWidth();
		const h = scr.getHeight();
		const t1 = scr.addText(`Current Version:`, 100, 100, 0xFFFFFF, true)
		const t2 = scr.addText(`New Version:`, 100, 100, 0xFFFFFF, true)
		t1.setPos(Math.floor(w / 2 - (t1.getWidth() + 5)), Math.floor(h / 3 - 5))
		t2.setPos(Math.floor(w / 2 - (t1.getWidth() + 5)), Math.floor(h / 3 + 5))
		scr.addText(currentVersion, Math.floor(w / 2 + 20), Math.floor(h / 3 - 5), 0xFFFFFF, true)
		scr.addText(newVersion, Math.floor(w / 2 + 20), Math.floor(h / 3 + 5), 0xFFFFFF, true)
		scr.addButton(Math.floor(w / 2 + 10), Math.floor(h / 2 + 20), 100, 20, "close", () => {
			hud.openScreen(null);
		});
		scr.addButton(Math.floor(w / 2 - 110), Math.floor(h / 2 + 20), 100, 20, "download", () => {
			jsmacros.open(url);
		});
	}
	
	screen.catchInit = (e) => {chat.log(e)};
	
	hud.openScreen(screen);
}

while (hud.getOpenScreen() != null) time.sleep(100); //sleeps java thread running this script for 100ms

const FabricLoader = Java.type("net.fabricmc.loader.api.FabricLoader");
const loader = FabricLoader.getInstance();
const versionString = loader.getModContainer("jsmacros").get().getMetadata().getVersion().toString();
let [branch, version, beta, sha] = versionString.split("-");

//this will need to be changed when I update to a new mc version.
if (branch == "1.16.1") branch = "master";
else branch = `backport-${branch}`
if (beta) {
	workflow_runs = JSON.parse(request.get(`https://api.github.com/repos/wagyourtail/JsMacros/actions/workflows/beta.yml/runs`).text()).workflow_runs
	let run = workflow_runs.shift()
	while (run && run.head_branch != branch) run = workflow_runs.shift();
	if (run.head_sha.slice(0, 7) != sha) {
		newVer = JSON.parse(request.get(run.artifacts_url).text()).artifacts[0]?.name.split("-").slice(2).join("-");
		if (newVer)
			createOutdatedScreen(`${version}-${beta}${sha ? `-${sha}` : ""}`, newVer, run.html_url);
	}
} else {
	gitVer = JSON.parse(request.get(`https://api.github.com/repos/wagyourtail/JsMacros/releases/latest`).text());
	if (gitVer.tag_name != version) {
		createOutdatedScreen(version, gitVer.tag_name, "https://github.com/wagyourtail/JsMacros/releases/latest");
	}
}
