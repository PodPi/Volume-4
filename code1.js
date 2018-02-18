var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var clock = new five.Led('A0');
  var up = new five.Led('A4');
  up.on();
  
  clock.blink(1000);
  
});
