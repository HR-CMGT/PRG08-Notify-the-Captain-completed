class GameObject extends HTMLElement{
    
    protected _position       : Vector = new Vector(0, 0)
    protected rotation        : number = 0
    // Properties
    public get position()   : Vector    { return this._position }

    constructor() {
        super()

        let game = document.getElementsByTagName("game")[0]
        game.appendChild(this)
    }

    protected draw() {
        this.style.transform = `translate(${this._position.x}px, ${this._position.y}px) rotate(${this.rotation}deg)`
    }
}