var socket = io();
socket.emit('new-player');
socket.on('objects',(objects)=>{
    updateObject(objects);
    //console.log(object);
});
