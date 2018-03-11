exports.update = (io,players) => {
    let myBlocksToSend = [];
    if(players.length>0){
        for(let i=0;i<players.length;i++){
            //console.log(players[i].block);
            players[i].block.update();
            const myBlock = players[i].block.getNewPlayer();
            myBlocksToSend = myBlocksToSend.concat(myBlock);
        }
        io.emit('objects',myBlocksToSend);
    }
};
