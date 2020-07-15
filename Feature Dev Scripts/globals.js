if (!global.containsKey("getURL")) {
	global.put("getURL", function(url, options, callback) {
		const URL = Java.type("java.net.URL");
		const BufferedReader = Java.type("java.io.BufferedReader");
		const InputStreamReader = Java.type("java.io.InputStreamReader");
		const uri = new URL(url);
		const connection = uri.openConnection();
		if (options.headers) {
			for (const i in options.headers) {
				connection.setRequestProperty(i, options.headers[i]);
			}
		}
		connection.setRequestMethod("GET");
		const response = connection.getResponseCode();
		let inp = new BufferedReader(new InputStreamReader(connection.getInputStream()));
		let inputLine = "";
		let body = "";
		while (inputLine != null) {
			body += inputLine;
			inputLine = inp.readLine();
		}
		inp.close();
		if (connection != null) connection.disconnect();
		callback(null, response, body);
	});
}


if (!global.containsKey("reflectMethod")) {
	global.put("reflectMethod", function(clas, yarnName) {
		let name = clas.getName();
		if (clas.getDeclaredMethod(yarnName)) return yarnName;
		let body;
		name = name.replace(/\.java$/, "").split(".").join("/");
		getURL(`https://raw.githubusercontent.com/FabricMC/yarn/1.15.2/mappings/${name}.mapping`, {}, (err, res, bod) => {
			body = bod;
		});
		
		const methods = Array.from(body.match(/METHOD\s([^\s]+)\s([^\s]+)/g));
		const m = [];
		for (method of methods) {
			method = method.match(/METHOD\s([^\s]+)\s([^\s]+)/);
			if (method[2] == yarnName) {
				m.push(method[1]);
			}
		}
		if (m.length == 1) return m[0];
		return m;
	});
}