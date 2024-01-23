var bIV = require("./3.js");
var bIW = bIV.global;
function bIX(bIS) {
  return new bIW(bIS);
}
(exports = module.exports = bIV.hasBuffer ? bIX(0) : []).alloc = bIV.hasBuffer && bIW.alloc || bIX;
exports.concat = bIV.concat;
exports.from = function (bIS) {
  if (!bIV.isBuffer(bIS) && bIV.isView(bIS)) {
    bIS = bIV.Uint8Array.from(bIS);
  } else if (bIV.isArrayBuffer(bIS)) {
    bIS = new Uint8Array(bIS);
  } else {
    if (typeof bIS == "string") {
      return bIV.from.call(exports, bIS);
    }
    if (typeof bIS == "number") {
      throw new TypeError("\"value\" argument must not be a number");
    }
  }
  if (bIW.from && bIW.from.length !== 1) {
    return bIW.from(bIS);
  } else {
    return new bIW(bIS);
  }
};