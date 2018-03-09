module.exports = class Block {
    constructor(width,height,size) {
        this.x = 0;
        this.y = 0;
        this.vx = Math.round(Math.random()*6+2);
        this.vy = Math.round(Math.random()*6+2);
        this.top = 0;
        this.left = 0;
        this.right = width;
        this.bottom = height;
        this.size = size;
    }
    update() {
        this.checkCollisions();
        this.x+=this.vx;
        this.y+=this.vy;
        //console.log('=====================> movement');
    }
    checkCollisions() {
        if(this.x<this.left){
            this.vx=this.vx*-1;
            this.x=this.left;
        }
        if(this.x>this.right-this.size){
            this.vx=this.vx*-1;
            this.x=this.right-this.size;
        }
        if(this.y<this.top){
            this.vy=this.vy*-1;
            this.y=this.top;
        }
        if(this.y>this.bottom-this.size){
            this.vy=this.vy*-1;
            this.y=this.bottom-this.size;
        }
    }
};