exports.update = (io,players) => {
    let myTanksToSend = [];
    if(players.length>0){
        for(let i=0;i<players.length;i++){
            //console.log(players[i].block);
            players[i].tank.update();
            const myTank = players[i].tank.getNewPlayer();
            myTanksToSend = myTanksToSend.concat(myTank);
        }
        io.emit('objects',myTanksToSend);
    }
};
