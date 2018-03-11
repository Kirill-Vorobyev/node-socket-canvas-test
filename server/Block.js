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
        const r = Math.round(Math.random()*255);
        const g = Math.round(Math.random()*255);
        const b = Math.round(Math.random()*255);
        this.RGBcolor = `rgb(${r},${g},${b})`;
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
    getPositionData(){
        const myBlock = {
            x: this.x,
            y: this.y,
            size: this.size,
        };
        return myBlock;
    }
    getNewPlayer(){
        const myBlock = {
            color: this.RGBcolor,
            x: this.x,
            y: this.y,
            size: this.size,
        };
        return myBlock;
    }
};