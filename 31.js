exports.DecodeBuffer = bAa;
var bA9 = require("./20.js").preset;
function bAa(bA6) {
  if (!(this instanceof bAa)) {
    return new bAa(bA6);
  }
  if (bA6 && (this.options = bA6, bA6.codec)) {
    var bA7 = this.codec = bA6.codec;
    if (bA7.bufferish) {
      this.bufferish = bA7.bufferish;
    }
  }
}
require("./29.js").FlexDecoder.mixin(bAa.prototype);
bAa.prototype.codec = bA9;
bAa.prototype.fetch = function () {
  return this.codec.decode(this);
};