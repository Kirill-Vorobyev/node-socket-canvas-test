var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = '#AAAAAA';
ctx.fillRect(0,0,800,600);

function updateObjects(tanks,bullets) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,800);
    for(var i=0;i<tanks.length;i++){
        ctx.fillStyle = tanks[i].color;
        ctx.fillRect(tanks[i].x, tanks[i].y, tanks[i].size, tanks[i].size);
    }
    for(var i=0;i<bullets.length;i++){
        ctx.fillStyle = bullets[i].color;
        ctx.fillRect(bullets[i].x, bullets[i].y, bullets[i].size, bullets[i].size);
    }
}