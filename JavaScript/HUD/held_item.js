const d2d = globalvars.getObject("wagyourhud");
if (!d2d && !globalvars.getBoolean("wagyourhud.loading")) load("./init.js");

const item = args.get("item");
const offhand = args.get("offhand");

const inv = player.openInventory();

function getCount(itemStack) {
	if (itemStack.isDamageable()) {
		const count = itemStack.getMaxDamage()-itemStack.getDamage();
		return `§${count < 50 ? "c" : "f"}${count}`;
	}
	const map = inv.getMap();
	const slots = Array.from(map.get("main")).concat(Array.from(map.get("hotbar")), (map.containsKey("offhand") ? map.get("offhand") : []));
	let count = 0;
	for (const slot of slots) {
		const is = inv.getSlot(slot);
		if (is.isItemEqualIgnoreDamage(itemStack)) count += is.getCount();
	}
	return count.toString();
}
let count = "";
if (item) count = getCount(item);
globalvars.getObject(`wagyourhud.${offhand ? "off" : "main"}`).setItem(item ? item.copy().setDamage(0) : null).setOverlayText(count);