var bJ3 = require("./3.js");
function bJ4(bJ0) {
  return new Uint8Array(bJ0);
}
(exports = module.exports = bJ3.hasArrayBuffer ? bJ4(0) : []).alloc = bJ4;
exports.concat = bJ3.concat;
exports.from = function (bJ0) {
  if (bJ3.isView(bJ0)) {
    var bJ2 = bJ0.byteOffset;
    var bJ4 = bJ0.byteLength;
    if ((bJ0 = bJ0.buffer).byteLength !== bJ4) {
      if (bJ0.slice) {
        bJ0 = bJ0.slice(bJ2, bJ2 + bJ4);
      } else if ((bJ0 = new Uint8Array(bJ0)).byteLength !== bJ4) {
        bJ0 = Array.prototype.slice.call(bJ0, bJ2, bJ2 + bJ4);
      }
    }
  } else {
    if (typeof bJ0 == "string") {
      return bJ3.from.call(exports, bJ0);
    }
    if (typeof bJ0 == "number") {
      throw new TypeError("\"value\" argument must not be a number");
    }
  }
  return new Uint8Array(bJ0);
};