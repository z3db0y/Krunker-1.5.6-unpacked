exports.Decoder = bN7;
var bN5 = require("./33.js");
var bN6 = require("./31.js").DecodeBuffer;
function bN7(bN2) {
  if (this instanceof bN7) {
    bN6.call(this, bN2);
    return;
  } else {
    return new bN7(bN2);
  }
}
bN7.prototype = new bN6();
bN5.mixin(bN7.prototype);
bN7.prototype.decode = function (bN2) {
  if (arguments.length) {
    this.write(bN2);
  }
  this.flush();
};
bN7.prototype.push = function (bN2) {
  this.emit("data", bN2);
};
bN7.prototype.end = function (bN2) {
  this.decode(bN2);
  this.emit("end");
};