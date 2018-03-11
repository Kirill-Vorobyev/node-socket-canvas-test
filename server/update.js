exports.update = (io,players,bullets) => {
    let myTanksToSend = [];
    let myBulletsToSend = [];
    
    if(players.length>0){
        for(let i=0;i<players.length;i++){
            //console.log(players[i].block);
            players[i].tank.update();
            const myTank = players[i].tank.getNewPlayer();
            myTanksToSend = myTanksToSend.concat(myTank);
        }
        for(let i=0;i<bullets.length;i++){
            //console.log(players[i].block);
            if(!bullets[i].bullet.delete){
                bullets[i].bullet.update();
                const myBullet = bullets[i].bullet.getObjectInfo();
                myBulletsToSend = myBulletsToSend.concat(myBullet);
            }else{
                bullets = bullets.splice(i,1);
            }
            
        }
        io.emit('objects',myTanksToSend,myBulletsToSend);
    }
    
};
