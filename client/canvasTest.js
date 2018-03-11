var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = '#AAAAAA';
ctx.fillRect(0,0,800,600);

function updateObjects(tanks,bullets) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,800);
    for(var i=0;i<tanks.length;i++){
        ctx.fillStyle = tanks[i].color;
        ctx.fillRect(tanks[i].x, tanks[i].y, 60, 60);
        if(tanks[i].dir === 0){
            ctx.fillRect(tanks[i].x+20, tanks[i].y-10, 20, 10);
            ctx.fillStyle = 'white';
            ctx.fillRect(tanks[i].x+20, tanks[i].y+50, 20, 10);
        }else if(tanks[i].dir === 1){
            ctx.fillRect(tanks[i].x+60, tanks[i].y+20, 10, 20);
            ctx.fillStyle = 'white';
            ctx.fillRect(tanks[i].x, tanks[i].y+20, 10, 20);
        }else if(tanks[i].dir === 2){
            ctx.fillRect(tanks[i].x+20, tanks[i].y+60, 20, 10);
            ctx.fillStyle = 'white';
            ctx.fillRect(tanks[i].x+20, tanks[i].y, 20, 10);
        }else if(tanks[i].dir === 3){
            ctx.fillRect(tanks[i].x-10, tanks[i].y+20, 10, 20);
            ctx.fillStyle = 'white';
            ctx.fillRect(tanks[i].x+50, tanks[i].y+20, 10, 20);
        }
    }
    for(var i=0;i<bullets.length;i++){
        ctx.fillStyle = bullets[i].color;
        ctx.fillRect(bullets[i].x, bullets[i].y, 20,20);
    }
}