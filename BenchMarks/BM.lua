chat:log("lua start time: " .. time:time())
local prStart = time:time()
chat:log("  Prime (2000) - Start: " .. prStart)
do
	local primes = {}
	local num = 2
	while #primes < 2000 do
		local flag = true
		for _,prime in pairs(primes) do
			if (num % prime) == 0 then
				flag = false
				break
			end
		end
		if flag then
			table.insert(primes, num)
		end
		num = num + 1
	end
end
local prEnd = time:time()
chat:log("  Prime (2000) - End: " .. prEnd .. ", duration: ".. (prEnd-prStart))
local gbStart = time:time()
chat:log("  getBlock (4 full chunk) - Start: " .. gbStart)
do
	local blocks = {}
	local pla = player:getPlayer()
	local chunk = {pla:getX() - (pla:getX() % 16), pla:getZ() - (pla:getZ() % 16)}
	for x = chunk[1], chunk[1]+31 do
		for z = chunk[2], chunk[2]+31 do
			for y = 0, 255 do
				table.insert(blocks, world:getBlock(x,y,z):getId())
			end
		end
	end
end
local gbEnd = time:time()
chat:log("  Prime (2000) - End: " .. gbEnd .. ", duration: ".. (gbEnd-gbStart))