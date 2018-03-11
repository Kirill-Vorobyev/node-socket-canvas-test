const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const gameLoop = require('node-gameloop');
const port = process.env.PORT || 31313;

const upd = require('./server/update');
const Tank = require('./server/Tank.js');

//Game constants
const FPS = 50;
const FRAME_TIME = 1000/FPS;
const CANVAS_W = 800;
const CANVAS_H = 800;
//Player IDS and Objects
let lastPlayerID = 0;
let playerObjects = [];
let bulletObjects = [];

app.use(express.static(__dirname+'/client'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html');
});

io.on('connection',(socket)=>{
    console.log('New Connection: ',socket.client.conn.remoteAddress);
    socket.player = {id: lastPlayerID};
    const player = {
        id: lastPlayerID,
        tank: new Tank(CANVAS_W,CANVAS_H,60)
    };
    playerObjects.push(player);//add player objects to main list
    lastPlayerID++;

    socket.on('move',(myMove)=>{
        const indexOfSocket = playerObjects.findIndex((el)=>{
            return el.id == socket.player.id;
        });
        playerObjects[indexOfSocket].tank.setMove(myMove);
    });

    socket.on('bullet',()=>{

    });

    socket.on('disconnect', ()=>{
        const indexOfSocket = playerObjects.findIndex((el)=>{
            return el.id == socket.player.id;
        });
        playerObjects.splice(indexOfSocket,1);
        console.log('Disconnect: ',socket.client.conn.remoteAddress);
    });
});

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