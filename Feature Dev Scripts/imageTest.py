import tkinter as tk


class window(tk.Tk):
    def __init__(this):
        super().__init__()
        this.geometry("200x100")
        this.resizable(0, 0)
        this.text = tk.StringVar()
        this.text.set("0")
        this.textLbl = tk.Label(this, textvariable=this.text, font=("Helvetica", 24))
        this.addBtn = tk.Button(this, text="add", command=this.add)
        this.remBtn = tk.Button(this, text="sub", command=this.sub)

    def draw(this):
        this.grid_columnconfigure(0, minsize=100)
        this.grid_columnconfigure(1, minsize=100) 
        this.textLbl.grid(row=0, column=0, columnspan=2, pady=(10, 0))
        this.remBtn.grid(row=1, column=0, pady=(10, 0))
        this.addBtn.grid(row=1, column=1, pady=(10, 0))

    def add(this):
        chat.log(this.text.get())
        this.text.set(str(int(this.text.get()) + 1))

    def sub(this):
        chat.log(this.text.get())
        this.text.set(str(int(this.text.get()) - 1))
        
if __name__ == "__main__":
    root = window()
    root.call('wm', 'attributes', '.', '-topmost', True)
    root.draw()
    root.mainloop()