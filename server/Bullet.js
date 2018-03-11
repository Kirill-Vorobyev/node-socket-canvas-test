module.exports = class Bullet {
    constructor(x,y,vx,vy,width,height,size,color) {
        this.x = x,this.y = y,this.vx = vx,this.vy=vy;
        this.top = 0;
        this.left = 0;
        this.right = width;
        this.bottom = height;
        this.size = size;
        this.RGBcolor = color;
        this.bounces = 0,this.maxBounces = 1;
        this.delete = false;
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
            this.bounces++;
        }
        if(this.x>this.right-this.size){
            this.vx=this.vx*-1;
            this.x=this.right-this.size;
            this.bounces++;
        }
        if(this.y<this.top){
            this.vy=this.vy*-1;
            this.y=this.top;
            this.bounces++;
        }
        if(this.y>this.bottom-this.size){
            this.vy=this.vy*-1;
            this.y=this.bottom-this.size;
            this.bounces++;
        }
        if(this.bounces>this.maxBounces){
            this.delete = true;
        }
    }
    getPositionData(){
        const myBlock = {
            x: this.x,
            y: this.y,
            size: this.size,
        };
        return myBlock;
    }
    getObjectInfo(){
        return {
            color: this.RGBcolor,
            x: this.x,
            y: this.y
        };
    }
};