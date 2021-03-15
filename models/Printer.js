import { sleep } from "../utils/Sleep.js"

const terminalElem = document.getElementById('terminal')

export default class Printer {
    constructor() {
        this.text = '',
            this.accessCountTimer = null,
            this.index = 0,
            this.speed = 3,
            this.file = '',
            this.hidden = true
    }

    init() {
        this.accessCountTimer = setInterval(() => {
            this.updateLastChar()
        }, 500)
        // @ts-ignore
        $.get(this.file, data => {
            this.text = data.slice(0, data.length - 1)
        })
    }

    updateLastChar() {
        const content = this.TerminalContent
        content.substring(content.length - 1, content.length) == '|' ? terminalElem.innerHTML = terminalElem.innerHTML.substring(0, content.length - 1) : this.index > this.text.length ? '' : this.print('|')
    }

    print(str) {
        $('#terminal').append(str)
        return false
    }

    printPrompt() {
        this.hidden = !this.hidden
        if (this.hidden) {
            $('#prompt').html('<br>')
        } else {
            $('#prompt').html('|')
        }
        return false
    }

    addText() {
        if (!this.text) { return }
        const content = this.TerminalContent
        content.substring(content.length - 1, content.length) == '|' ? terminalElem.innerHTML = terminalElem.innerHTML.substring(0, content.length - 1) : ''
        this.index += this.speed
        const text = this.text.substring(0, this.index)
        terminalElem.innerHTML = text.replace(new RegExp('\n', 'g'), '<br/>')
        window.scrollBy(0, 50)
    }


    get TerminalContent() {
        return terminalElem.innerHTML
    }
}
