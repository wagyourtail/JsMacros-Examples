const pos = player.getPlayer().getPos()
const x = pos.get("x")
const y = pos.get("y")
const z = pos.get("z")

chat.log(`${x}, ${y}, ${z}`);

hud.clearDraw3Ds();

const d = hud.createDraw3D();
d.addBox(x, y, z, x + 1, y + 2, z + 1, 0x2FFFFFFF, 0x7FFFFFFF, true);
d.addLine(x,y,z,x+6,y+1,z, -1)
hud.registerDraw3D(d);