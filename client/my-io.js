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
    if(keyName == 'ArrowUp'){
        myMove.up = true;
        socket.emit('move',myMove);
    }else if(keyName == 'ArrowDown'){
        myMove.down = true;
        socket.emit('move',myMove);
    }else if(keyName == 'ArrowLeft'){
        myMove.left = true;
        socket.emit('move',myMove);
    }else if(keyName == 'ArrowRight'){
        myMove.right = true;
        socket.emit('move',myMove);
    }
});