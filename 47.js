exports.setExtPackers = function (bJv) {
  bJv.addExtPacker(14, Error, [bJL, bJE]);
  bJv.addExtPacker(1, EvalError, [bJL, bJE]);
  bJv.addExtPacker(2, RangeError, [bJL, bJE]);
  bJv.addExtPacker(3, ReferenceError, [bJL, bJE]);
  bJv.addExtPacker(4, SyntaxError, [bJL, bJE]);
  bJv.addExtPacker(5, TypeError, [bJL, bJE]);
  bJv.addExtPacker(6, URIError, [bJL, bJE]);
  bJv.addExtPacker(10, RegExp, [bJI, bJE]);
  bJv.addExtPacker(11, Boolean, [bJG, bJE]);
  bJv.addExtPacker(12, String, [bJG, bJE]);
  bJv.addExtPacker(13, Date, [Number, bJE]);
  bJv.addExtPacker(15, Number, [bJG, bJE]);
  if (typeof Uint8Array != "undefined") {
    bJv.addExtPacker(17, Int8Array, bJC);
    bJv.addExtPacker(18, Uint8Array, bJC);
    bJv.addExtPacker(19, Int16Array, bJC);
    bJv.addExtPacker(20, Uint16Array, bJC);
    bJv.addExtPacker(21, Int32Array, bJC);
    bJv.addExtPacker(22, Uint32Array, bJC);
    bJv.addExtPacker(23, Float32Array, bJC);
    if (typeof Float64Array != "undefined") {
      bJv.addExtPacker(24, Float64Array, bJC);
    }
    if (typeof Uint8ClampedArray != "undefined") {
      bJv.addExtPacker(25, Uint8ClampedArray, bJC);
    }
    bJv.addExtPacker(26, ArrayBuffer, bJC);
    bJv.addExtPacker(29, DataView, bJC);
  }
  if (bJA.hasBuffer) {
    bJv.addExtPacker(27, bJB, bJA.from);
  }
};
var bJz;
var bJA = require("./3.js");
var bJB = bJA.global;
var bJC = bJA.Uint8Array.from;
var bJD = {
  name: 1,
  message: 1,
  stack: 1,
  columnNumber: 1,
  fileName: 1,
  lineNumber: 1
};
function bJE(bJv) {
  bJz ||= require("./25.js").encode;
  return bJz(bJv);
}
function bJG(bJv) {
  return bJv.valueOf();
}
function bJI(bJv) {
  (bJv = RegExp.prototype.toString.call(bJv).split("/")).shift();
  var bJw = [bJv.pop()];
  bJw.unshift(bJv.join("/"));
  return bJw;
}
function bJL(bJv) {
  var bJw = {};
  for (var bJx in bJD) {
    bJw[bJx] = bJv[bJx];
  }
  return bJw;
}