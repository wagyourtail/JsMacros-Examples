// works with: "1.8.5  or later
// put this on the JOIN_SERVER event
const screen = Hud.createScreen("JsMacros Version Check", false);
let textcolor = 0xa;
let textcolorno = 0xb;
let textcolorclick = 0x6;

function createOutdatedScreen(text1, text2, tcolor, currentVersion, newVersion, branch, url) {
    const textout1 = Chat.createTextBuilder().append(text1)
        .withColor(tcolor)
        .withFormatting(false, true, false, false, false);

    const textout2 = Chat.createTextBuilder().append(text2)
        .withColor(textcolorclick)
        .withFormatting(false, true, false, false, false)
        .withCustomClickEvent(JavaWrapper.methodToJava(() => {
            screen.setOnInit(JavaWrapper.methodToJava((scr) => {
                World.playSound("ui.button.click", 1, 1);

                const w = scr.getWidth();
                const h = scr.getHeight();

                const t1 = scr.addText(`Current Version:`, 100, 100, 0xFFFFFF, true);
                const t2 = scr.addText(`New Version:`, 100, 100, 0xFFFFFF, true);
                const t3 = scr.addText(`Branch:`, 100, 100, 0xFFFFFF, true);

                t1.setPos(Math.floor(w / 2 - (t1.getWidth() + 5)), Math.floor(h / 3 - 20));
                t2.setPos(Math.floor(w / 2 - (t1.getWidth() + 5)), Math.floor(h / 3));
                t3.setPos(Math.floor(w / 2 - (t1.getWidth() + 5)), Math.floor(h / 3 + 20));

                scr.addText(currentVersion, Math.floor(w / 2 + 20), Math.floor(h / 3 - 20), 0xFFFFFF, true);
                scr.addText(newVersion, Math.floor(w / 2 + 20), Math.floor(h / 3), 0xFFFFFF, true);
                scr.addText(branch, Math.floor(w / 2 + 20), Math.floor(h / 3 + 20), 0xFFFFFF, true);

                scr.addButton(Math.floor(w / 2 + 10), Math.floor(h / 2 + 20), 100, 20, "Close", JavaWrapper.methodToJava(() => {
                    Hud.openScreen(null);
                }));
                scr.addButton(Math.floor(w / 2 - 110), Math.floor(h / 2 + 20), 100, 20, "Download", JavaWrapper.methodToJava(() => {
                    Utils.openUrl(url);
                }));

            }));

            screen.catchInit = JavaWrapper.methodToJava((e) => { Chat.log(e) });

            Hud.openScreen(screen);
        }))
        .withShowTextHover(Chat.createTextBuilder().append(`Click here.`).build());

    Chat.log(textout1.build());
    Chat.log(textout2.build());

}

while (Hud.getOpenScreen() != null) Time.sleep(100); //sleeps java thread running this script for 100ms

const FabricLoader = Java.type("net.fabricmc.loader.api.FabricLoader");
const loader = FabricLoader.getInstance();
let versionString = loader.getModContainer("jsmacros").get().getMetadata().getVersion().toString();

let data = versionString.split("-");

let version = "1.0.0"
let branch = "main";
let beta = versionString.includes("beta");
let sha = "";

if (versionString.includes("-") && data.length >= 3) {
    version = data[0];
    sha = data[2]
} else {
    version = versionString;
}

let stringsToCheck = [version, Client.mcVersion(), Client.getModLoader()];


let branches = JSON.parse(getResText(`https://api.github.com/repos/wagyourtail/JsMacros/branches`));

branch = branches.find(branch => branch.name.includes(`/${Client.mcVersion()}`))?.name ?? "main";

if (beta) {
    let workflow_runs = JSON.parse(getResText(`https://api.github.com/repos/wagyourtail/JsMacros/actions/workflows/betabuild.yml/runs`)).workflow_runs
    let run = workflow_runs.shift()

    while (run && run.head_branch != branch) run = workflow_runs.shift();
    if (run.head_sha.slice(0, 7) != sha) {
        newVer = JSON.parse(request.get(run.artifacts_url).text()).artifacts[0]?.name.split("-").slice(2).join("-");
        if (newVer) {
            createOutdatedScreen(`Update version ${newVer} avilable!`, `Click here to download update.`, textcolor, `${version}-${beta}${sha ? `-${sha}` : ""}`, newVer, branch, run.html_url);
        } else {
            createOutdatedScreen(`No update!`, `Click here to open the GUI.`, textcolorno, `${version}-${beta}${sha ? `-${sha}` : ""}`, newVer, branch, "https://github.com/wagyourtail/JsMacros/releases/latest");
        }
    }

} else {
    let gitVer = JSON.parse(getResText(`https://api.github.com/repos/wagyourtail/JsMacros/releases/latest`));
    let asset_avilable = gitVer.assets.find(asset => stringsToCheck.some(str => asset.name.includes(str)));

    if (gitVer.tag_name != version && asset_avilable) {
        createOutdatedScreen(`Update version ${gitVer.tag_name} avilable!`, `Click here to download update.`, textcolorno, version, gitVer.tag_name, branch, "https://github.com/wagyourtail/JsMacros/releases/latest");
    }
    else {
        createOutdatedScreen(`No update!`, `Click here to open the GUI.`, textcolorno, version, gitVer.tag_name, branch, "https://github.com/wagyourtail/JsMacros/releases/latest");
    }
}

function getResText(url) {
    try {
        const response = Request.get(url);
        return response.text();
    } catch (err) {
        if (err.toString().includes("FileNotFoundException")) {
            printResponseCode(url, "404");
        } else if (err.toString().includes(" 403 ")) {
            printResponseCode(url, "403 API rate limit exceeded");
        } else {
            throw err;
        }
    }
}

function getUrlText(url) {
    let parts = url.split('/', 4);
    let trimmedUrl = parts.length < 4 ? url : parts.slice(0, 3).join('/') + "/...";
    let text = Chat.createTextBuilder().append(trimmedUrl)
        .withColor(0xb)
        .withFormatting(false, true, false, false, false)
        .withShowTextHover(Chat.createTextBuilder().append(url).withColor(0xb).build());

    return text.build();
}

function printResponseCode(url, message) {
    Chat.getLogger().info(`URL: ${url}`);
    Chat.log(Chat.createTextBuilder().append(`URL: `).withColor(0x6).append(getUrlText(url)).build());
    throw new ResponseCode(message);
}

function ResponseCode(responseCode) {
    this.name = "ResponseCode";
    this.message = `${responseCode}`;
}