const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const gameLoop = require('node-gameloop');
const port = process.env.PORT || 31313;

const upd = require('./server/update');
const Block = require('./server/Block.js');

const FPS = 50;
const FRAME_TIME = 1000/FPS;

app.use(express.static(__dirname+'/client'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html');
});

let lastPlayerID = 0;
let playerObjects = [];

io.on('connection',(socket)=>{
    console.log('New Connection: ',socket.client.conn.remoteAddress);
    socket.player = {id: lastPlayerID};
    const player = {
        id: lastPlayerID,
        block: new Block(800,600,50)
    };
    playerObjects.push(player);
    //console.log(player);
    //socket.emit('all-players',playerObjects);
    //socket.broadcast.emit('new-player',player.block.getNewPlayer());
    lastPlayerID++;
    socket.on('disconnect', ()=>{
        const indexToRemove = playerObjects.findIndex((el)=>{
            return el.id == socket.player.id;
        });
        playerObjects.splice(indexToRemove,1);
        console.log('Disconnect: ',socket.client.conn.remoteAddress);
    });
});

getAllPlayers = () => {
    var players = [];
    Object.keys(io.sockets.connected).forEach(socketID=>{
        var player = io.sockets.connected[socketID].player;
        if(player) players.push(player);
    });
    return players;
}

http.listen(port,() => {
    console.log(`Server listening on port ${port}`);
});

let frameCount=0;
const id = gameLoop.setGameLoop(delta=>{
    const playersConnected = Object.keys(io.sockets.connected).length;
    //console.log('Loop (Frame:%s, delta=%s)',frameCount++,delta);
    //console.log(playersConnected);
    if(playersConnected>0){
        upd.update(io,playerObjects);//the update step;
    }
},FRAME_TIME);