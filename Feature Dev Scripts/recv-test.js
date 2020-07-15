const msg = args.get("message")
const reg = new RegExp(`"hoverEvent":{"action":"show_text","contents":{"extra":\\[{"text":"(.+?)"`, 'g');
const reg2 = new RegExp(`"hoverEvent":{"action":"show_text","contents":{"extra":\\[{"text":"(.+?)"`);
let str = [...msg.matchAll(reg)];
str = str.map(e => e[1]);
//chat.log(msg);
chat.say(str[0]);