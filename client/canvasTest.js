var canvas = document.getElementById('my-canvas');
var ctx = canvas.getContext("2d");
ctx.fillStyle = '#AAAAAA';
ctx.fillRect(0,0,800,600);

function updateObject(objects) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0,0,800,800);
    for(var i=0;i<objects.length;i++){
        ctx.fillStyle = objects[i].color;
        ctx.fillRect(objects[i].x, objects[i].y, objects[i].size, objects[i].size);
    }
}