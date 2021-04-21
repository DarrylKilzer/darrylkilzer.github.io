import Printer from "./models/Printer.js";

let printer
let timer

function start() {
    printer = new Printer()
    printer.file = 'index.txt'
    printer.init()
    timer = setInterval(runner, 30)
}

function runner() {
    printer.addText()
    if (printer.index > printer.text.length) {
        clearInterval(timer)
        setInterval(() => printer.printPrompt(), 400)
    }
}
window['start'] = start
start()