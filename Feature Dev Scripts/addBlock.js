(function() {
    const Block = Java.type("net.minecraft.block.Block");

    const Item = Java.type("net.minecraft.item.Item");
    const ItemGroup = Java.type("net.minecraft.item.ItemGroup");
    const BlockItem = Java.type("net.minecraft.item.BlockItem");
    const Identifier = Java.type("net.minecraft.util.Identifier");
    const fuck = new Block(Block.Settings.copy(Java
            .type("net.minecraft.block.Blocks").STONE));
    const fuckItem = new BlockItem(fuck, new Item.Settings()
            .group(ItemGroup.BUILDING_BLOCKS));
    const registry = Java.type("net.minecraft.util.registry.Registry");

    if (args.get("message") != null) {
        if (args.get("message").split(" ")[0] == "!addblock") {
            console.log(args.get("message").split(" ")[0]);
            console.log("this is a test to see if, you're gay");
            registry.register(registry.BLOCK, new Identifier(args
                    .get("message").split(" ")[1], args.get("message").split(
                    " ")[2]), fuck);
            registry.register(registry.ITEM, new Identifier(args.get("message")
                    .split(" ")[1], args.get("message").split(" ")[2]),
                    fuckItem);
            args.put("message", "");
        }
    }

    if (global.get("testingffff") == null) {
        global.put("testingffff", true);
        registry.register(registry.BLOCK, new Identifier("test", "sexblock"),
                fuck);
        registry.register(registry.ITEM, new Identifier("test", "sexblock"),
                fuckItem);
    }
})();