from java.util.function import Consumer, BiConsumer
import time

def test(btn, screen):
    chat.log("clicked")

def init(screen):
    screen.addButton(int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 - 10), 200, 20, "yeet", consumer.toBiConsumer(test));
    screen.addText("lol", int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 - 40), 0xFFFFFF, False);
    screen.addTextInput(int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 + 30), 200, 20, "test", consumer.toBiConsumer(lambda change, screen: chat.log(change)))

s = hud.createScreen("test title", False)
s.onInit = consumer.toConsumer(init)

hud.openScreen(s)