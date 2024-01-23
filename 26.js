exports.EncodeBuffer = brX;
var brW = require("./15.js").preset;
function brX(brT) {
  if (!(this instanceof brX)) {
    return new brX(brT);
  }
  if (brT && (this.options = brT, brT.codec)) {
    var brU = this.codec = brT.codec;
    if (brU.bufferish) {
      this.bufferish = brU.bufferish;
    }
  }
}
require("./29.js").FlexEncoder.mixin(brX.prototype);
brX.prototype.codec = brW;
brX.prototype.write = function (brT) {
  this.codec.encode(this, brT);
};