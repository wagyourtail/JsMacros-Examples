jsmacros.runScript(".lua", "chat:log(\"hi\")", consumer.toConsumer((e) => {
	chat.log(e ? e : "success")
}))
jsmacros.runScript(".lua", "chat:log('hi')", consumer.toConsumer((e) => {
	chat.log(e ? e : "success")
}))
jsmacros.runScript(".lua", "chat:log('hi')", consumer.toConsumer((e) => {
	chat.log(e ? e : "success")
}))