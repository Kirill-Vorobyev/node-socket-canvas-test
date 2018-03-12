var socket = io();
socket.emit('new-player');
socket.on('objects',(tanks,bullets)=>{
    updateObjects(tanks,bullets);
    //console.log(object);
});

document.addEventListener('keydown',(event)=>{
    if(event.key === ' '){
        event.preventDefault();
    }
});

document.addEventListener('keyup',(event)=>{
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
    if(keyName === ' '){
        socket.emit('bullet');
    }
});