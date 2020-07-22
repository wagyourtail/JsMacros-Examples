const mc = jsmacros.getMinecraft();
const screen = hud.createDraw2D();

hud.clearDraw2Ds();

screen.onInit = () => {
	screen.addText("example text", Math.floor(50), Math.floor(50), 0xFFFFFF, false);
	screen.addText("example text", Math.floor(screen.getWidth() / 2), Math.floor(screen.getHeight() / 2), 0xFFFFFF, false);
	screen.addRect(20, 20, 50, 50, -5242881);
	screen.addItem(70, 70, "").setItem(player.openInventory().getSlot(35));
}

hud.registerDraw2D(screen);