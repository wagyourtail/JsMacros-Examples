/* SHOULD BE USED WITH SEND_MESSAGE EVENT ONLY*/

let INPUT = args.get("message");
let API = "https://translate.googleapis.com/translate_a/single?client=gtx";
let SOURCE_LANG = "&sl=auto"
let TARGET_LANG = "&tl=en"
let TRANSLATE_TEXT = "&dt=t&q=" + encodeURI(INPUT)
OUTPUT = JSON.parse(request.get(API + SOURCE_LANG + TARGET_LANG + TRANSLATE_TEXT).text())[0][0][0]
args.put("message", OUTPUT)

/* this script can be radically improved, but it works :)*/
