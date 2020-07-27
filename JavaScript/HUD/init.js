const key = "wagyourhud";
globalvars.putBoolean(`${key}.loading`, true);

const draw2d = hud.createDraw2D();
const inventory = player.openInventory();

function getCount(itemStack) {
	if (itemStack.isDamageable()) {
		const count = itemStack.getMaxDamage()-itemStack.getDamage();
		return `§${count < 50 ? "c" : "f"}${count}`;
	}
	const map = inventory.getMap();
	const slots = Array.from(map.get("main")).concat(Array.from(map.get("hotbar")), (map.containsKey("offhand") ? map.get("offhand") : []));
	let count = 0;
	for (const slot of slots) {
		const is = inventory.getSlot(slot);
		if (is.isItemEqualIgnoreDamage(itemStack)) count += is.getCount();
	}
	return count.toString();
}

draw2d.onInit = (d2d) => {
	const w = d2d.getWidth();
	const h = d2d.getHeight();
	const pl = player.getPlayer();
	
	const mainhand = pl.getMainHand();
	let count = getCount(mainhand);
	globalvars.putObject(`${key}.main`, d2d.addItem(Math.floor(50-16), Math.floor(h-20), mainhand.copy().setDamage(0), true).setOverlayText(count));
	
	const offhand = pl.getOffHand();
	count = getCount(offhand);
	globalvars.putObject(`${key}.off`, d2d.addItem(Math.floor(50+16), Math.floor(h-20), offhand.copy().setDamage(0), true).setOverlayText(count));
	
	const head = pl.getHeadArmor();
	count = getCount(head);
	globalvars.putObject(`${key}.HEAD`, d2d.addItem(Math.floor(w-20), Math.floor(h/2-32), head.copy().setDamage(0), true).setOverlayText(count));
	
	const chest = pl.getChestArmor();
	count = getCount(chest);
	globalvars.putObject(`${key}.CHEST`, d2d.addItem(Math.floor(w-20), Math.floor(h/2-16), chest.copy().setDamage(0), true).setOverlayText(count));
	
	const legs = pl.getLegArmor();
	count = getCount(legs);
	globalvars.putObject(`${key}.LEGS`, d2d.addItem(Math.floor(w-20), Math.floor(h/2), legs.copy().setDamage(0), true).setOverlayText(count));
	
	const feet = pl.getFootArmor();
	count = getCount(feet);
	globalvars.putObject(`${key}.FEET`, d2d.addItem(Math.floor(w-20), Math.floor(h/2+16), feet.copy().setDamage(0), true).setOverlayText(count));
}




hud.registerDraw2D(draw2d);
globalvars.putObject(key, draw2d);
globalvars.putBoolean(`${key}.loading`, false);