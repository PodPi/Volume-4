var five = require('johnny-five');
var board = new five.Board();

board.on('ready', function() {
  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: 'HT16K33',
    rotation: 1,
  });
  var secret = [ "01010100"
               , "01101000"
               , "01101001"
               , "01110011"
               , "00100000"
               , "01101001"
               , "01110011"
               , "00100000"
               , "01000110"
               , "01010101"
               , "01001110"
               , "00100001"
               , "00100000" ];
               
  function display() {
    var decimal = parseInt(secret.shift(),2);
    var char    = String.fromCharCode(decimal);
    matrix.draw( 0, char );
    if ( secret.length == 0 ) { return; }
    setTimeout( display, 800 );
  }
  display();
});
