p = player.getPlayer()

a = world.getBiome()
b = world.getBiomeAt(int(p.getX()), int(p.getZ()))

chat.log(a)
chat.log(b)