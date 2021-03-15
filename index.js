import Printer from "./models/Printer.js";

const printer = new Printer()

printer.file = 'index.txt'
printer.init()
const timer = setInterval(runner, 30)

function runner() {
    printer.addText()
    if (printer.index > printer.text.length) {
        clearInterval(timer)
        // clearInterval(printer.accessCountTimer)
    }
}