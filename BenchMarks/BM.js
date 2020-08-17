chat.log(`js start time: ${Date.now()}`)
const prStart = Date.now()
chat.log(`  Prime (2000) - Start: ${prStart}`)
{
	const primes = []
	let num = 2
	while (primes.length < 2000) {
		let flag = true
		for (const prime of primes) {
			if (!(num % prime)) {
				flag = false
				break
			}
		}
		if (flag) {
			primes.push(num)
		}
		++num
	}
}
const prEnd = Date.now()
chat.log(`  Prime (2000) - End: ${prEnd}, duration: ${prEnd-prStart}`)
const gbStart = Date.now()
chat.log(`  getBlock (4 full chunk) - Start: ${gbStart}`)
{
	const blocks = []
	const pla = player.getPlayer()
	const chunk = [pla.getX() >> 4, pla.getZ() >> 4]
	const start = [chunk[0] << 4, chunk[1] << 4]
	const end = [start[0] + 32, start[1] + 32]
	for (let x = start[0]; x < end[0]; ++x) {
		for (let z = start[1]; z < end[1]; ++z) {
			for (let y = 0; y < 256; ++y) {
				blocks.push(world.getBlock(x,y,z).getId())
			}
		}
	}
}
const gbEnd = Date.now()
chat.log(`  getBlock (4 full chunk) - End: ${gbEnd}, duration: ${gbEnd-gbStart}`)