import Printer from "./models/Printer.js";

const printer = new Printer()

printer.file = 'index.txt'
printer.init()
const timer = setInterval(runner, 3)

function runner() {
    printer.addText()
    if (printer.index > printer.text.length) {
        clearInterval(timer)
        setInterval(() => printer.printPrompt(), 400)
    }
}