var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {

  var clock = new five.Led('A0'); // clock signal
  var ce = new five.Led('A1');    // chip enabled state
  var clr = new five.Led('A2');   // clear/reset the counter
  var b_d = new five.Led('A3');   // binary or decimal selection
  var u_d = new five.Led('A4');   // up or down selection
  
  clock.blink(1000);  // send a clock signal every second
  ce.off();    // Chip enabled set o 0 (Enabled)
  clr.off();   // Don't clear the counter
  b_d.on();    // Set Binary mode (1 = Binary, 0 = Decimal)
  u_d.on();    // Set Count mode up (1 = Up, 0 = Down)
  
});
