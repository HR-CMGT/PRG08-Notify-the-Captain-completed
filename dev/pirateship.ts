/// <reference path="ship.ts" />

class PirateShip extends Ship {
    // Fields
    private captain : Captain
    private subject : Subject 
    private registered : boolean = false
    

    constructor(subject : Subject) {
        super()

        this.subject = subject
        this.captain = new Captain(this)

        this.addEventListener("click", () => this.toggleRegistration())

        this.draw()
    }

    private toggleRegistration() {
        if(!this.registered) {
            
            this.subject.register(this.captain)
            this.style.backgroundImage = this.activeImage
        } else {
            this.subject.unregister(this.captain)
            this.style.backgroundImage = "url(images/ship-unregistered.png)"
        }
        
        this.registered = !this.registered
    }

    
}

window.customElements.define("ship-component", PirateShip as any)