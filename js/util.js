/** 
 * 
 * 
 * Global Functions
 * 
 * 
*/

// https://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
window.requestAnimFrame = (function(){
    return  window.requestAnimationFrame       ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame    ||
            function( callback ){
              window.setTimeout(callback, 1000 / 60);
            };
  })();

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
window.getRandomInt = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

window.getRandomColor = function() {
    var red = getRandomInt(0 , 257);
    var green = getRandomInt(0 , 257);
    var blue = getRandomInt(0 , 257);
    return 'rgb(' + red + ',' + green + ',' + blue + ')';
};