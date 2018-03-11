const Bullet = require('./Bullet');
module.exports = class Tank {
    constructor(width,height,size) {
        //this.x = 0.0,this.y = 0.0,this.vx = 0.0,this.vy = 0.0,this.ax = 0.1,this.ay = 0.1,this.vx_max = 5.0,this.vy_max = 5.0;
        this.x = 0,this.y = 0,this.vx = 20,this.vy = 20;
        this.top = 0,this.left = 0,this.right = width,this.bottom = height;
        this.size = size;
        const r = Math.round(Math.random()*225);
        const g = Math.round(Math.random()*225);
        const b = Math.round(Math.random()*225);
        this.RGBcolor = `rgb(${r},${g},${b})`;
        this.move = {
            up: false,
            down: false,
            left: false,
            right: false
        }
        this.lastMove = {
            up: false,
            down: false,
            left: false,
            right: true
        };
    }
    update() {
        this.moveMe();
        this.checkCollisions();
        //console.log(this.lastMove);
    }
    setMove(newMove) {
        this.move = newMove;
    }
    moveMe(){
        if(this.move.right){
            this.x+=this.vx;
        }
        if(this.move.left){
            this.x-=this.vx;
        }
        if(this.move.up){
            this.y-=this.vy;
        }
        if(this.move.down){
            this.y+=this.vy;
        }
        if(this.move.down || this.move.up || this.move.right || this.move.left){
            this.resetMove();
        }
    }
    // moveMe(){
    //     if(this.vx<this.vx_max && this.move.right){
    //         this.vx+=this.ax;
    //         console.log(this.vx);
    //         this.vx = parseFloat(this.vx).toFixed(1);
    //         console.log(this.vx);
    //     }
    //     if(Math.abs(this.vx)<this.vx_max && this.move.left){
    //         this.vx-=this.ax;
    //         this.vx = parseFloat(this.vx).toFixed(1);
    //     }
    //     if(this.vy<this.vy_max && this.move.down){
    //         this.vy+=this.ay;
    //         this.vy = parseFloat(this.vy).toFixed(1);
    //     }
    //     if(Math.abs(this.vy)<this.vy_max && this.move.up){
    //         this.vy-=this.ay;
    //         this.vy = parseFloat(this.vy).toFixed(1);
    //     }
    //     if(!this.move.up && !this.move.down){
    //         if(this.vy>0){
    //             this.vy-=this.ay;
    //             this.vy = parseFloat(this.vy).toFixed(1);
    //         }
    //         if(this.vy<0){
    //             this.vy+=this.ay;
    //             this.vy = parseFloat(this.vy).toFixed(1);
    //         }
    //     }
    //     if(!this.move.left && !this.move.right){
    //         if(this.vx>0){
    //             this.vx-=this.ax;
    //             this.vx = parseFloat(this.vx).toFixed(1);
    //         }
    //         if(this.vx<0){
    //             this.vx+=this.ax;
    //             this.vx = parseFloat(this.vx).toFixed(1);
    //         }
    //     }
    //     if(this.vy != 0){
    //         this.y+=this.vy;
    //     }
    //     if(this.vx != 0){
    //         this.x+=this.vx;
    //     }
    //     this.resetMove();
    // }
    resetMove(){
        this.lastMove = {
            up: this.move.up,
            down: this.move.down,
            left: this.move.left,
            right: this.move.right
        }
        this.move = {
            up: false,
            down: false,
            left: false,
            right: false
        }
    }
    checkCollisions() {
        if(this.x<this.left){
            this.x=this.left;
        }
        if(this.x>this.right-this.size){
            this.x=this.right-this.size;
        }
        if(this.y<this.top){
            this.y=this.top;
        }
        if(this.y>this.bottom-this.size){
            this.y=this.bottom-this.size;
        }
    }
    // checkCollisions() {
    //     if(this.x<this.left){
    //         this.vx=0;
    //         this.x=this.left;
    //     }
    //     if(this.x>this.right-this.size){
    //         this.vx=0;
    //         this.x=this.right-this.size;
    //     }
    //     if(this.y<this.top){
    //         this.vy=0;
    //         this.y=this.top;
    //     }
    //     if(this.y>this.bottom-this.size){
    //         this.vy=0;
    //         this.y=this.bottom-this.size;
    //     }
    // }
    makeNewBullet(){
        const velocity = 20;
        const bulletSize = 20;
        if(this.lastMove.up){
            return {
                bullet: new Bullet(this.x+this.size/2-bulletSize/2,this.y-10,0,-velocity,this.right,this.bottom,20,this.RGBcolor)
            };
        }else if(this.lastMove.down){
            return {
                bullet: new Bullet(this.x+this.size/2-bulletSize/2,this.y+this.size+10,0,velocity,this.right,this.bottom,20,this.RGBcolor)
            };
        }else if(this.lastMove.left){
            return {
                bullet: new Bullet(this.x-10,this.y+this.size/2-bulletSize/2,-velocity,0,this.right,this.bottom,20,this.RGBcolor)
            };
        }else if(this.lastMove.right){
            return {
                bullet: new Bullet(this.x+this.size+10,this.y+this.size/2-bulletSize/2,velocity,0,this.right,this.bottom,20,this.RGBcolor)
            };
        }
    }
    getPositionData(){
        return {
            x: this.x,
            y: this.y,
            size: this.size,
        };
    }
    getNewPlayer(){
        return {
            color: this.RGBcolor,
            x: this.x,
            y: this.y,
            size: this.size,
        };
    }
};