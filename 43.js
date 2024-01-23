var bIO = require("./3.js");
function bIP(bIL) {
  return Array(bIL);
}
(exports = module.exports = bIP(0)).alloc = bIP;
exports.concat = bIO.concat;
exports.from = function (bIL) {
  if (!bIO.isBuffer(bIL) && bIO.isView(bIL)) {
    bIL = bIO.Uint8Array.from(bIL);
  } else if (bIO.isArrayBuffer(bIL)) {
    bIL = new Uint8Array(bIL);
  } else {
    if (typeof bIL == "string") {
      return bIO.from.call(exports, bIL);
    }
    if (typeof bIL == "number") {
      throw new TypeError("\"value\" argument must not be a number");
    }
  }
  return Array.prototype.slice.call(bIL);
};