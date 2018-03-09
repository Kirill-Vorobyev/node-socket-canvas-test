exports.update = (io,blocks) => {
    let myBlocksToSend = [];
    if(blocks.length>0){
        for(let i=0;i<blocks.length;i++){        
            const r = Math.round(Math.random()*255);
            const g = Math.round(Math.random()*255);
            const b = Math.round(Math.random()*255);
            const RGBcolor = `rgb(${r},${g},${b})`;
            blocks[i].update();
            const myBlock = {
                color: RGBcolor,
                x: blocks[i].x,
                y: blocks[i].y,
                size: blocks[i].size,
            };
            myBlocksToSend = myBlocksToSend.concat(myBlock);
        }
        io.emit('object',myBlocksToSend);
    }
};
