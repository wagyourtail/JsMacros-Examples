////////////// HUD DRAW EXAMPLE //////////////

const draw = Hud.createDraw2D()
draw.setOnInit(JavaWrapper.methodToJava((d) => {
// Code here...

const PITCH = Player.getPlayer().getPitch().toFixed(2) // Example value to display

let arr = [x=250, y=10, mx=x+100, my=y+100] // Array for draw objects
    d.addRect(x, y, mx, my, 0xC, 199)
    d.addText("Pitch: "+PITCH, x+10, y+20, 0xFF0000, true);     
}))
Hud.registerDraw2D(draw) // Draw code ends here

// OPTIONAL Auto-Close after 100 tick
Client.waitTick(100)
Hud.clearDraw2Ds()
