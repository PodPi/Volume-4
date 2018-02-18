var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 1,
  });

  var message = [];
  message = ("Time is").split("");
  update();

  function update() {
    if (message.length) {
      matrix.clear();
      matrix.draw(0, message.shift());
      if (!message.length) { return; }
      setTimeout(update,1000);
    }
  }

  setInterval(function() {
    var d = new Date();
    var hh = d.getHours();
    var mi = d.getMinutes();
    var ss = d.getSeconds();
    message = (hh+":"+mi+":"+ss).split("");
    update();
  },9000)

});
