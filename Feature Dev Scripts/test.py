from java.util.function import Consumer, BiConsumer
import time

chat.log("t")
time.sleep(1)
chat.log("e")

class jbc(BiConsumer):
    def __init__(self, fn):
        self.accept=fn

class jc(Consumer):
    def __init__(self, fn):
        self.accept=fn


def test(btn, screen):
    chat.log("clicked")

def init(screen):
    screen.addButton(int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 - 10), 200, 20, "yeet", jbc(test));
    screen.addText("lol", int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 - 40), 0xFFFFFF, False);
    screen.addTextInput(int(screen.getWidth() / 2 - 100), int(screen.getHeight() / 2 + 30), 200, 20, "test", jbc(lambda change, screen: chat.log(change)))

s = hud.createScreen("test title", False)
s.onInit = jc(lambda s: init(s))

hud.openScreen(s)