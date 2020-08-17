scr = hud.createDraw3D()
hud.registerDraw3D(scr)
markers = []

class marker:
    def __init__(self, x, y, z):
        self.x = x
        self.y = y
        self.z = z
        self.box = scr.addBox(x, y, z, x + 1, y + 1, z + 1, 0x33CCCCCC, 0x33CCCCCC, True)

def filterString(name):
   if 'i' in name:
      return True
   else:
      return False

def any(iterable):
    for element in iterable:
        if element:
            return True
    return False

def updateBlock(event, args):
    block = args.get("block")
    if block.getId() == "minecraft:carrots":
        filtered_markers = [x for x in markers if x.x == block.getX() and x.y == block.getY() and x.z == block.getZ()]
        if len(filtered_markers):
            if block.getBlockState().get("age") == "7":
                for f in filtered_markers:
                    scr.removeBox(f.box)
                    markers.remove(f)
        else:
            markers.append(marker(block.getX(), block.getY(), block.getZ()))

BLOCK_UPDATE = globalvars.getObject("BLOCK_UPDATE_EVENT")
if BLOCK_UPDATE == None:
    chat.log("on")
    BLOCK_UPDATE = jsmacros.on("BLOCK_UPDATE", consumer.toBiConsumer(updateBlock))
    globalvars.putObject("BLOCK_UPDATE_EVENT", BLOCK_UPDATE)
else:
    chat.log("off")
    jsmacros.off("BLOCK_UPDATE", BLOCK_UPDATE)
    globalvars.remove("BLOCK_UPDATE_EVENT")