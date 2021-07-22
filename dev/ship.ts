class Ship extends GameObject{
    // Fields
    private static numberOfShips : number = 0
    
    protected activeImage   : string    = ""

    private colors          : string[] = ["Green", "Blue", "Orange", "White", "Black", "Red"]
    private _color          : string   = ""
    
    public get color()      : string    { return this._color    }

    constructor() {
        super()

        this.rotation   = Math.random() * 360
        this._position  = new Vector(
                            Math.random() * window.innerWidth   - this.clientWidth, 
                            Math.random() * window.innerHeight  - this.clientHeight)
        
        this.createShip()
    }

    private createShip() {
        Ship.numberOfShips++
        if(Ship.numberOfShips > 6) Ship.numberOfShips = 1
        this.activeImage            = `url(images/ship${Ship.numberOfShips + 3}.png)`
        
        this.style.backgroundImage  = "url(images/ship-unregistered.png)"
        this._color = this.colors[Ship.numberOfShips - 1]
    }
}