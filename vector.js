class Vector {

    constructor(x,y) {
        this.x = x;
        this.y = y;
    }

    addVector(vec){
        this.x += vec.x;
        this.y += vec.y;
        return this;
    }

    // For hw
    subVector(vec){
        // subtract instead of addvector
        this.x -= vec.x;
        this.y -= vec.y;
        return this;
    }

    scale(s){
        // change size of vector
        this.x *= s;
        this.y *= s;
        return this;
    }

    dist(vec){
        let x = vec.x-this.x;
        let y = vec.y-this.y
        return Math.sqrt((x*x)+(y*y));
    }

    magnitude(){
        return Math.sqrt((this.x*this.x)+(this.y*this.y));
    }

    toDirVec(){
        this.scale(1/this.magnitude());
    }

    toString() {
        return '<'+this.x+','+this.y+'>'
    }
    print(){
        console.log(this.toString());
    }

}
