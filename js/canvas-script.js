window.onload = function() {

    //Canvas Definition
    var canvas = this.document.getElementById('flappy-monster-game');

    //Game object
    var flappyMonster = new FlappyMonster(canvas);

    flappyMonster.start();
};