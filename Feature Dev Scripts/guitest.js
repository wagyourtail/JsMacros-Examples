const mc = jsmacros.getMinecraft();
const screen = hud.createScreen("fuck", false);

screen.onInit = () => {
	screen.addButton(Math.floor(screen.getWidth() / 2 - 100), Math.floor(screen.getHeight() / 2 - 10), 200, 20, "yeet", (btn) => {
		chat.log("yeet");
	});
	
	screen.addText("lol", Math.floor(screen.getWidth() / 2 - 100), Math.floor(screen.getHeight() / 2 - 40), 0xFFFFFF, false);
	screen.addTextInput(Math.floor(screen.getWidth() / 2 - 100), Math.floor(screen.getHeight() / 2 + 30), 200, 20, "test", (change) => {
		chat.log(change);
	})
}


hud.openScreen(screen);
