const d2d = hud.createDraw2D()
d2d.onInit = (d2d) => {
	d2d.addImage(Math.floor(d2d.getWidth() / 2), Math.floor(d2d.getHeight() / 2), 32, 32, "minecraft:textures/mob_effect/speed.png", 0, 0, 18, 18, 18, 18);

}

hud.registerDraw2D(d2d);