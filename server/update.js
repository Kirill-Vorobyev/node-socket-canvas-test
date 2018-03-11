const Tank = require('./Tank');

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
            bullets[i].bullet.update();

            for(let p=0;p<players.length;p++){
                if( bullets[i].bullet.x<players[p].tank.x+60 && 
                    bullets[i].bullet.x>=players[p].tank.x   &&
                    bullets[i].bullet.y<players[p].tank.y+60 && 
                    bullets[i].bullet.y>=players[p].tank.y     ){
                        bullets[i].bullet.delete = true;
                        players[p].tank = new Tank(800,800,60);
                }
            }

            if(!bullets[i].bullet.delete){
                const myBullet = bullets[i].bullet.getObjectInfo();
                myBulletsToSend = myBulletsToSend.concat(myBullet);
            }else{
                bullets.splice(i,1);
            }
        }
        io.emit('objects',myTanksToSend,myBulletsToSend);
    }
    
};
