class Player extends Bullet{

    constructor(x,y){
        super(x,y);
    }

    draw(c){
        c.beginPath();
        c.lineWidth = 1;
        c.strokeStyle = "white";
        c.lineTo((this.x)-10, this.y);
        c.lineTo((this.x)+10, this.y);
        c.stroke();
        c.closePath();

        c.beginPath();
        c.strokeStyle = "white";
        c.lineTo((this.x), (this.y)-10);
        c.lineTo((this.x),(this.y)+10);
        c.stroke();
        c.closePath();
    }


}
Object.assign(Player, Bullet);
