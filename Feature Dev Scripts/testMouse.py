import time
for x in range(0, 3):
    keybind.key("key.mouse.left", True)
    time.sleep(0.25)
    keybind.key("key.mouse.left", False)
    time.sleep(0.25)