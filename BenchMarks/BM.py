from time import time as t
time = lambda: int(t()*1000)
chat.log("JEP start time: " + str(time()))
prStart = time()
chat.log("  Prime (2000) - Start: " + str(prStart))

primes = []
num = 2
while len(primes) < 2000:
    for prime in primes:
        if not num % prime:
            break
    else:
        primes.append(num)
    num += 1

num = None
primes = None

prEnd = time()
chat.log("  Prime (2000) - End: " + str(prEnd) + ", duration: " + str(prEnd-prStart))
gbStart = time()
chat.log("  getBlock (4 full chunk) - Start: " + str(gbStart))


blocks = []
pla = player.getPlayer()
chunk = [int(pla.getX()) >> 4, int(pla.getZ()) >> 4]
start = [chunk[0] << 4, chunk[1] << 4]
end = [start[0] + 32, start[1] + 32]
for x in range(start[0], end[0]):
    for z in range(start[1], end[1]):
        for y in range(0, 256):
            blocks.append(world.getBlock(x,y,z).getId())

blocks = None
pla = None
chunk = None
start = None
end = None

gbEnd = time()
chat.log("  getBlock (4 full chunk) - End: " + str(gbEnd) + ", duration: " + str(gbEnd-gbStart))