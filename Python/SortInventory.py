# put this on: Middle Mouse Click UP
# un-check the disable when screen open in Profile
# middle mouse click on an inventory
# profit

import time
DELAY = .05

# globals
inv = player.openInventory()
slotStacks = None

# fun
def updateSlots(map):
    global inv, slotStacks
    slotStacks = []
    for slot in map:
        slotStacks.append((inv.getSlot(slot), slot))

# helpers for condense
def getSlotIdentifierNoCount(slot):
    return (slot.getCreativeTab(), slot.getItemID(), slot.getDamage(), slot.getNBT())

def removeFullStackIndexes(indexes):
    global slotStacks
    for i in indexes[:]:
        itemstack = slotStacks[i][0]
        if not itemstack.getCount() < itemstack.getMaxCount():
            indexes.remove(i)
        if itemstack.isEmpty():
            indexes.remove(i)

def condenseStacks(map):
    global inv, slotStacks
    updateSlots(map)
    slotIdentifiers = [getSlotIdentifierNoCount(slot[0]) for slot in slotStacks]

    slots = list(range(len(slotIdentifiers)))
    while len(slots):
        # these contain the same item
        indexes = [i for i, v in enumerate(slotIdentifiers) if slotIdentifiers[slots[0]] == v]
        # remove for next loop
        for i in indexes:
            slots.remove(i)

        if not slotStacks[indexes[0]][0].isEmpty():
            # filter to only non-full stacks
            removeFullStackIndexes(indexes)
            # while items can be condensed
            while len(indexes) >= 2:
                inv.click(slotStacks[indexes[-1]][1], 0) # click high
                i = 0
                # click slots with same stack from low to high untill no longer holding items.
                while not inv.getHeld().isEmpty():
                    time.sleep(DELAY)
                    inv.click(slotStacks[indexes[i]][1], 0)
                    i += 1
                # filter to only non-full stacks
                removeFullStackIndexes(indexes)
    chat.log("condense done")

# helpers for sort
def getSlotIdentifier(slot):
    return (slot.getCreativeTab(), slot.getItemID(), -slot.getCount(), slot.getDamage(), slot.getNBT())

def getDestItem(slotIdentifiers, slot, nowEmpty):
    ds = [dsc for dsc in slotIdentifiers if slot not in nowEmpty and dsc[1] == slot]
    return ds[0] if len(ds) else None

def sortSlots(map):
    global inv, slotStacks
    updateSlots(map)
    # generate identifiers
    slotIdentifiers = [(getSlotIdentifier(slot[0]), slot[1]-map[0]) for slot in slotStacks if not slot[0].isEmpty()]
    #sort them
    sortedSlotIdentifiers = sorted(slotIdentifiers)

    slotsLeft = list(range(len(sortedSlotIdentifiers)))
    #remove if already in right place
    for i in range(len(sortedSlotIdentifiers)):
        if sortedSlotIdentifiers[i][1] == i:
            slotsLeft.remove(i)
    #while sorting
    clicks = []
    nowEmpty = []
    while len(slotsLeft):
        clicks.append([])
        i = slotsLeft[0]
        clicks[-1].append(sortedSlotIdentifiers[i][1]) #grab start slot
        nowEmpty.append(sortedSlotIdentifiers[i][1])
        destItem = getDestItem(sortedSlotIdentifiers, i, nowEmpty) # get destination item
        clicks[-1].append(i)
        if i in slotsLeft:
            slotsLeft.remove(i)
        # while t   he slot we're clicking on has an item in it.
        while destItem:
            i = sortedSlotIdentifiers.index(destItem)
            clicks[-1].append(i)
            if i in slotsLeft:
                slotsLeft.remove(i)
            destItem = getDestItem(sortedSlotIdentifiers, i, nowEmpty) # new dest

    for route in clicks:
        for click in route:
            inv.click(click+map[0], 0) # click
            time.sleep(DELAY)
    chat.log("sort done")

if __name__ == "__main__":
    chat.log("start")
    part = inv.getLocation(inv.getSlotUnderMouse())
    map = inv.getMap()
    if part in ["container", "main", "hotbar"]:
        sort_part = None
        if part == "hotbar":
            sort_part = list(map.get("main")) + list(map.get("hotbar"))
        else:
            sort_part = map.get(part)

        condenseStacks(sort_part)
        sortSlots(sort_part)
