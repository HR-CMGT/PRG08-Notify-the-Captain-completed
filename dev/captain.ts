class Captain extends HTMLElement implements Observer{
    
    constructor(pirateShip : PirateShip) {
        super()

        pirateShip.appendChild(this)
    }

    notify(): void {
        console.log("Captain got notified")
        this.style.backgroundImage = `url(images/emote_alert.png)`
    }
}

window.customElements.define("captain-component", Captain as any)