local c = reflection:getClass("net.minecraft.network.packet.c2s.play.ClientCommandC2SPacket")
local mode = c.Mode.START_FALL_FLYING
local p = player:getPlayer()
local rawP = p:getRaw()
p:getAbilities():setFlying(true)

function fuck()
	rawP.networkHandler:sendPacket(luajava.new(c, rawP, mode))
end

fuck()