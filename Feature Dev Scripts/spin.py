import time

for i in range(0, 360):
    player.getPlayer().lookAt(0, i)
    chat.log(player.getPlayer().getYaw())
    time.sleep(.1)