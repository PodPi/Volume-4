var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {

  var clock = [
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000",
    "00000000"
  ];

  var matrix = new five.Led.Matrix({
    addresses: [0x70],
    controller: "HT16K33",
    rotation: 1,
  });

function dec2bin(dec) {
  var pad = "00000000";
  var bin = (dec >>> 0).toString(2);
  return pad.substring(0, pad.length - bin.length ) + bin;
}

  setInterval(function() {
    var d = new Date();
    var yy = d.getYear()-100;
    var mm = d.getMonth()+1;
    var dd = d.getDate();
    var hh = d.getHours();
    var mi = d.getMinutes();
    var ss = d.getSeconds();

    console.log(d + ", yy=" + yy + ", mm=" + mm + ", dd=" + dd + " " + hh + ":" + mi + ":" + ss);

    clock[0] = dec2bin(yy);
    clock[1] = dec2bin(mm);
    clock[2] = dec2bin(dd);
    clock[4] = dec2bin(hh);
    clock[5] = dec2bin(mi);
    clock[6] = dec2bin(ss);

    matrix.draw(clock);
  },1000)
  
});
