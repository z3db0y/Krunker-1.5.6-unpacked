exports.Encoder = bMY;
var bMW = require("./33.js");
var bMX = require("./26.js").EncodeBuffer;
function bMY(bMT) {
  if (this instanceof bMY) {
    bMX.call(this, bMT);
    return;
  } else {
    return new bMY(bMT);
  }
}
bMY.prototype = new bMX();
bMW.mixin(bMY.prototype);
bMY.prototype.encode = function (bMT) {
  this.write(bMT);
  this.emit("data", this.read());
};
bMY.prototype.end = function (bMT) {
  if (arguments.length) {
    this.encode(bMT);
  }
  this.flush();
  this.emit("end");
};