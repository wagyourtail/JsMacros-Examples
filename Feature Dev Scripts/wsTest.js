const ws = request.createWS2("ws://echo.websocket.org");
ws.onConnect = (wss, headers) => {
	chat.log(headers);
	ws.sendText("test");
}

ws.onTextMessage = (ws, message) => {
	chat.log(message)
}

ws.connect()