var socket = io();
socket.emit('new-player');
socket.on('objects',(objects)=>{
    updateObject(objects);
    //console.log(object);
});

document.addEventListener('keypress',(event)=>{
    const keyName = event.key;
    let myMove = {
        up: false,
        down: false,
        left: false,
        right: false
    };
    if(keyName == 'w'){
        myMove.up = true;
        socket.emit('move',myMove);
    }else if(keyName == 's'){
        myMove.down = true;
        socket.emit('move',myMove);
    }else if(keyName == 'a'){
        myMove.left = true;
        socket.emit('move',myMove);
    }else if(keyName == 'd'){
        myMove.right = true;
        socket.emit('move',myMove);
    }
});