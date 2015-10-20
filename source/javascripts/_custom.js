   
function rand (min, max) {      
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
 

setInterval(function() {
    
    var randPosOne = rand(0,200),
        randPosTwo = rand(0,200),
        bgPosition = randPosOne + 'px ' + randPosTwo + 'px';
    
    $('#flicker').css({
        "background-position": bgPosition
    });
    $('#flicker2').css({
        "background-position": bgPosition
    });
    $('#flicker3').css({
        "background-position": bgPosition
    });    
    
}, 90);