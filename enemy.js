class Enemy{
    constructor(x,y,radius,color,speed,health){
        this.x = x;
        this.y = y;
        this.color = color;
        this.radius = radius;
        this.speed = speed;
        this.health = health;
    }

    draw(c){
        c.fillStyle = this.color;
        c.lineWidth = Math.round(this.radius*.02);;
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.strokeStyle = "black";
        c.fill();

        c.beginPath();
        c.fillStyle = "white";
        c.fillRect(this.x - (this.radius*.4), this.y -(this.radius*.4), (this.radius*.3), (this.radius*.3));
        c.fillRect(this.x + (this.radius*.2), this.y -(this.radius*.4), (this.radius*.3), (this.radius*.3));
        c.fillStyle = "black";
        c.fillRect(this.x - (this.radius*.3), this.y -(this.radius*.3), (this.radius*.1), (this.radius*.1));
        c.fillRect(this.x + (this.radius*.3), this.y -(this.radius*.3), (this.radius*.1), (this.radius*.1));


        c.beginPath();
        c.lineTo(this.x - (this.radius*.3), this.y + (this.radius*.2));
        c.lineTo(this.x + (this.radius*.2), this.y + (this.radius*.3));
        c.lineTo(this.x + (this.radius*.4), this.y + (this.radius*.2));
        c.stroke();
        c.closePath();

        c.beginPath();
        c.lineTo(this.x - (this.radius*.5), this.y - (this.radius*.6));
        c.lineTo(this.x, this.y - (this.radius*.4));
        c.stroke();
        c.closePath();

        c.beginPath();
        c.lineTo(this.x + (this.radius*.5), this.y - (this.radius*.6));
        c.lineTo(this.x + (this.radius*.1), this.y - (this.radius*.4));
        c.stroke();
        c.closePath();


        c.fillStyle = 'white';
        c.textAlign = 'center';
        c.textBaseline='middle';
        c.lineWidth = Math.round(this.radius*.005);
        let fontSize = Math.round(this.radius*.3);
        c.font = fontSize + 'px Arial';
        c.fillText(this.health,this.x,this.y-this.radius-this.radius*.3);

    }

    update(){
            this.radius += this.speed;
    }
}
