def get_tl_br(grid, words):
    arr = []
    hei = get_hei(grid)
    wid = get_wid(grid)
    for y in range(hei):
        string = ""
        for x in range(wid):
            if x < wid and y + x < hei:
                string += read_cell(grid, x, y + x)
            else:
                break
        for word in words:
            if word in string and word not in arr:
                arr.append(word)
    for x in range(1, wid):
        string = ""
        for y in range(hei):
            if y < hei and x + y < wid:
                string += read_cell(grid, x + y, y)
            else:
                break
        for word in words:
            if word in string and word not in arr:
                arr.append(word)
    return sorted(arr)