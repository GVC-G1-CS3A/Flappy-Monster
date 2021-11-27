// Initial Screen
// Game Playing Screen
// Game Over Screen

var INITIAL = 1;
var GAME_PLAYING = 2;
var GAME_OVER = 3;

var KEY_CODE = {
    R: 82
};

function FlappyMonster(canvas) {
    //base
    var game = this;

    //Global Attributes
    game.canvas = canvas;
    game.context = game.canvas.getContext('2d');

    // Game State
    game.currentState = INITIAL;

    // Bind Events
    game.bindEvents();

    // Create Game Objects
    game.createObjects();
}

FlappyMonster.prototype.createObjects = function () {
    //base
    var game = this;
    
}

FlappyMonster.prototype.bindEvents = function () {
    //base
    var game = this;

    //Mouse Listeners
    game.canvas.addEventListener('click', function(event) {
        console.log(game.currentState);
        // Game State
        switch (game.currentState) {
            case INITIAL:
                game.currentState = GAME_PLAYING;
                break;
            case GAME_PLAYING:
                //DRAW GAME_PLAYING SCREEN
                break;
        }
    });
    //Key Listener
    window.addEventListener('keydown', function(event) {
        switch (game.currentState) {
            case GAME_OVER:
                if(event.keyCode === KEY_CODE.R) {
                    console.log(event.keyCode);
                    game.currentState = GAME_PLAYING;
                }
                break;
        }
    })
}

FlappyMonster.prototype.start = function () {
    // Base
    var game = this;

    // Start Game
    window.requestAnimationFrame(function () {
        game.runGameLoop();

    });
};

FlappyMonster.prototype.runGameLoop = function () {
    // Base
    var game = this;

    // Game State
    switch (game.currentState) {
        case INITIAL:
            //DRAW INITIAL SCREEN
            game.drawInitialScreen();
            break;
        case GAME_PLAYING:
            //DRAW GAME_PLAYING SCREEN
            game.drawGamePlayingScreen();
            break;
        case GAME_OVER:
            //DRAW GAME_OVER SCREEN
            game.drawGameOverScreen();
            break;
    }

    window.requestAnimationFrame(function () {
        game.runGameLoop();
    });
};

FlappyMonster.prototype.drawInitialScreen = function () {
    // Base
    var game = this;

    // Draw
    // Background
    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText('Click to Start!', game.canvas.width / 2 - 100, game.canvas.height / 2)
}

FlappyMonster.prototype.drawGamePlayingScreen = function () {
    // Base
    var game = this;

    // Draw
    // Background
    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText('GAME PLAYING', game.canvas.width / 2 - 100, game.canvas.height / 2);
}

FlappyMonster.prototype.drawGameOverScreen = function () {
    // Base
    var game = this;

    // Draw
    // Background
    game.context.fillStyle = "black";
    game.context.fillRect(0, 0, game.canvas.width, game.canvas.height);

    // Text
    game.context.fillStyle = 'white';
    game.context.font = '36px Arial';
    game.context.fillText('GAME OVER', game.canvas.width / 2 - 100, game.canvas.height / 2);

    game.context.font = '24px Arial';
    game.context.fillText('Press R to Restart!', game.canvas.width / 2 - 100, game.canvas.height / 2 + 50);
};
