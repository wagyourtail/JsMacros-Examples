const lines = args.get("lines");
lines.set(0, "test");
chat.log(args)
args.put("close", true);