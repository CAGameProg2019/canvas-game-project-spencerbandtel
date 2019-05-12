class Bullet extends Vector {

    constructor(x,y,radius,speed){
        super(x,y);
        this.radius = radius;
        this.speed = speed;
    }

    draw(c){
        c.fillStyle = "red";
        c.beginPath();
        c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
        c.fill();
    }

    update(player){
        if(this.y > player.y){
            let vel = new Vector(player.x,player.y);
            vel.subVector(this);
            let dist = vel.magnitude();
            if(dist > 0){
                vel.toDirVec();
                vel.scale(this.speed);
                this.addVector(vel);
            }
        }
    }

}
Object.assign(Bullet, Vector);
