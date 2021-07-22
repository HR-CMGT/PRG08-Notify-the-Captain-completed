/// <reference path="gameobject.ts" />


class MessageBoard extends GameObject implements Observer{
    // Fields
    // private messages : HTMLElement[] = []

    public constructor() {
        super()
    }
    
    notify(): void {
        this.addMessage("Horn was pressed!")
    }

    public addMessage(text : string) {
        let message = document.createElement("message")
        message.innerHTML = text
        this.appendChild(message) 
        
    }
}

window.customElements.define("messageboard-component", MessageBoard as any)