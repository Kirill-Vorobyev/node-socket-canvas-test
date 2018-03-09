const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const gameLoop = require('node-gameloop');
const port = process.env.port || 56134;

const upd = require('./server/update');
const Block = require('./server/Block.js');

const FPS = 30;
const FRAME_TIME = 1000/FPS;

app.use(express.static(__dirname+'/client'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/client/index.html');
});

let myBlocks = [];

io.on('connection',(socket)=>{
    console.log('New Connection: ',socket.client.conn.remoteAddress);
    const myBlock = new Block(800,600,50);
    const myIndex = myBlocks.length;
    myBlocks.push(myBlock);

    socket.on('disconnect', ()=>{
        console.log('disconnect');
        myBlocks.splice(0,1);
    });
    //sockets = sockets.concat(socket);
    //console.log(sockets);
});

http.listen(port,()=>{
    console.log(`Server listening on port ${port}`);
});

let frameCount=0;
const id = gameLoop.setGameLoop(delta=>{
    //console.log('Loop (Frame:%s, delta=%s)',frameCount++,delta);
    upd.update(io,myBlocks);//the update step;
},FRAME_TIME);