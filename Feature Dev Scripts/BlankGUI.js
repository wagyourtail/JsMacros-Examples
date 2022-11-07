//       BLANK GUI for JS Macros

World.playSound("block.ender_chest.open", 1, 1.2)

///////////////// INITIALIZER /////////////////////////

const screen = Hud.createScreen(" ", false) 
screen.setOnInit(JavaWrapper.methodToJava((s) => {

/////////////////////////////////////////////////
//////////    MODIFY VARIABLES TO     ///////////
/////////     CUSTOMIZE YOUR PANEL   ////////////
//////////////////////////////////////////////////

var ABOUT = 'https://github.com/serainox420/Blank-GUI-Docs/edit/main/README.md'

// ROW 1     
var CMD1 = '/spawn'
var CMD2 = '/kill @e[type=!player]'
var CMD3 = '/kill'
// ROW 2
var R2CMD0 = 'command'
var R2CMD0 = 'other command'
var R2CMD0 = 'more commands'
var R2CMD0 = 'yet another command'

// OTHER VARS & EXAMPLE USAGE

var KILL = '/kill'
var NICK = 'Serainox420'

// Multiple Variables can be called simultanously, for example:
//  Chat.say(KILL+" "+NICK)  
//  Will produce output:  " /kill Serainox420 "

///////////////// VARIABLE ARRAY  /////////////////////////

let arrVar = [VAR1='xxx', VAR2='yyy', VAR3='zzz']

////////////////////// INFO SIGN /////////////////////////

let arrX = [x=500, y=0, mx=115+x, my=y+100, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-47, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-48, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+10, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+10, color, true);
s.addText("BLANK GUI [1.0]", x+7, y+20, 0xFFE50A, true);
s.addText("Silverainox#9452", x+7, y+30, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+40, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+40, color, true);

/////////// HELP & ABOUT //////////////////

const xxx0 = () => Chat.open(CMD0);
const xxx1 = () => Chat.open(ABOUT);
const xxx2 = () => Chat.say(CMD0);
const xxx3 = () => Chat.say(CMD0);

let arrXB = [x=500, y=55, mx=115+x, my=y+200, color=0xFFFFFF, color2=0xc676]
s.addRect(x-1, y+4, mx+1, my-100, 0xc666, 200);
s.addRect(x, y+5, mx=mx, my-101, 0xC, 200);
s.addText(" - - - - - - - - - - - ", x, y+5, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+5, color, true);
s.addText("HELP / ABOUT / DOCS", x+5, y+15, 0xFFE50A, true);
s.addText(" - - - - - - - - - - - ", x, y+25, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+25, color, true);

s.addButton(x+3, y+35, 25, 15, "XX",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+28, y+35, 40, 15, "XXXX",  JavaWrapper.methodToJava(xxx1));
s.addButton(x+69, y+35, 45, 15, "XXXXXX",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+50, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+50, color, true);

s.addButton(x+5, y+55, 35, 15, "XXX",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+40, y+55, 35, 15, "ABOUT",  JavaWrapper.methodToJava(xxx1));
s.addButton(x+75, y+55, 35, 15, "XXXXX",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+70, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+70, color, true);

s.addButton(x+3, y+75, 35, 15, "XXXX",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+38, y+75, 45, 15, "xxx",  JavaWrapper.methodToJava(xxx0));
s.addButton(x+83, y+75, 30, 15, "XXXX",  JavaWrapper.methodToJava(xxx0));

s.addText(" - - - - - - - - - - - ", x, y+90, color2, true);
s.addText(" - - - - - - - - - -  ", x+5, y+90, color, true);

///////////////////// ROW 1 ///////////////////////////

let arr1 = [x=5, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[ROW 1]", x+7, y+5, color2, true); 
const cmd0 = () => Chat.say(CMD0);
const cmd1 = () => Chat.say(CMD1);
const cmd2 = () => Chat.say(CMD2); 
const cmd3 = () => Chat.say(CMD3);
s.addButton(x+5, y+20, 60, 12, "CMD 0",  JavaWrapper.methodToJava(cmd0))
s.addButton(x+5, y+35, 60, 12, "CMD 1",  JavaWrapper.methodToJava(cmd1))
s.addButton(x+5, y+50, 60, 12, "CMD 2",  JavaWrapper.methodToJava(cmd2))
s.addButton(x+5, y+65, 60, 12, "CMD 3",  JavaWrapper.methodToJava(cmd3))

/////////////////// ROW 2 ////////////////////////////

let arr2 = [x=80, y=5, mx=100+x, my=y+85, color=0xFFFFFF, color2=0xc666]
s.addRect(x, y, mx=mx-30, my, 0xC, 200);
s.addText("[ROW 2]", x+7, y+5, color2, true); 

const r2cmd0 = () => Chat.say(R2CMD0);
const r2cmd1 = () => Chat.say(R2CMD1);
const r2cmd2 = () => Chat.say(R2CMD2); 
const r2cmd3 = () => Chat.say(R2CMD3);
s.addButton(x+5, y+20, 30, 12, "CMD 0",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+35, 30, 12, "CMD 1",  JavaWrapper.methodToJava(r2cmd1))
s.addButton(x+5, y+50, 30, 12, "CMD 2",  JavaWrapper.methodToJava(r2cmd2))
s.addButton(x+5, y+65, 30, 12, "CMD 3",  JavaWrapper.methodToJava(r2cmd3))

const r2cmd4 = () => Chat.say(R2CMD0);
const r2cmd5 = () => Chat.say(R2CMD1);
const r2cmd6 = () => Chat.say(R2CMD2); 
const r2cmd7 = () => Chat.say(R2CMD3);
s.addButton(x+35, y+20, 30, 12, "CMD 4",  JavaWrapper.methodToJava(r2cmd4))
s.addButton(x+35, y+35, 30, 12, "CMD 5",  JavaWrapper.methodToJava(r2cmd5))
s.addButton(x+35, y+50, 30, 12, "CMD 6",  JavaWrapper.methodToJava(r2cmd6))
s.addButton(x+35, y+65, 30, 12, "CMD 7",  JavaWrapper.methodToJava(r2cmd7))


///////////////// WIDE ROW //////////////////////////
let arr3 = [x=5, y=95, mx=175+x, my=y+85]+
s.addRect(x-1, y-1, mx-29, my+6, 0xFF000, 66);
s.addRect(x,y,mx-30,my+5,0xC,999);

s.addText("WIDE ROW", x+45, y+3, 0xFF0000, true);
s.addText("WIDE ROW", x+46, y+4, 0xFF000, true);

//// BUTTONS /////

s.addButton(x+5, y+15, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+30, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+45, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+60, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+5, y+75, 35, 10, "CMD 1",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+40, y+15, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+30, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+45, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+60, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+40, y+75, 35, 10, "CMD 2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+75, y+15, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+30, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+45, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+60, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+75, y+75, 35, 10, "CMD 3",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+15, 15, 10, "X1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+130, y+15, 10, 10, "X2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+30, 10, 10, "Y1",  JavaWrapper.methodToJava(r2cmd0))
s.addButton(x+125, y+30, 15, 10, "Y2",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+45, 25, 15, "XX",  JavaWrapper.methodToJava(r2cmd0))

s.addButton(x+115, y+65, 25, 20, "YY",  JavaWrapper.methodToJava(r2cmd0))

////////////////////////////////////////////////////

let arrR = [x=5,y=190,mx=mx+x,my=y+35]
s.addRect(x-1,y-1,mx-34,my+1,0xFF000,66);
s.addRect(x,y,mx-35,my,0xC,2000);
s.addText(" SPECIAL / MISC / XXX?", x+7, y+6, color2, true);
s.addText(" SPECIAL / MISC / XXX?|", x+8, y+5, 0xFF00, true); 
const redirect = () => JsMacros.runScript("redirected.js");
const execute = () => JsMacros.runScript("execute.js");
const draw = () => JsMacros.runScript("DRAW.js");
s.addButton(x+5, y+15, 55, 15, "REDIRECT", JavaWrapper.methodToJava(redirect));
s.addButton(x+60, y+15, 50, 15, "EXECUTE", JavaWrapper.methodToJava(execute));
s.addButton(x+110, y+15, 30, 15, "DRAW", JavaWrapper.methodToJava(draw));

//////////////////////////////////////////////////

}))
Hud.openScreen(screen)
