exports.setExtUnpackers = function (bM9) {
  bM9.addExtUnpacker(14, [bMh, bMl(Error)]);
  bM9.addExtUnpacker(1, [bMh, bMl(EvalError)]);
  bM9.addExtUnpacker(2, [bMh, bMl(RangeError)]);
  bM9.addExtUnpacker(3, [bMh, bMl(ReferenceError)]);
  bM9.addExtUnpacker(4, [bMh, bMl(SyntaxError)]);
  bM9.addExtUnpacker(5, [bMh, bMl(TypeError)]);
  bM9.addExtUnpacker(6, [bMh, bMl(URIError)]);
  bM9.addExtUnpacker(10, [bMh, bMj]);
  bM9.addExtUnpacker(11, [bMh, bMq(Boolean)]);
  bM9.addExtUnpacker(12, [bMh, bMq(String)]);
  bM9.addExtUnpacker(13, [bMh, bMq(Date)]);
  bM9.addExtUnpacker(15, [bMh, bMq(Number)]);
  if (typeof Uint8Array != "undefined") {
    bM9.addExtUnpacker(17, bMq(Int8Array));
    bM9.addExtUnpacker(18, bMq(Uint8Array));
    bM9.addExtUnpacker(19, [bMt, bMq(Int16Array)]);
    bM9.addExtUnpacker(20, [bMt, bMq(Uint16Array)]);
    bM9.addExtUnpacker(21, [bMt, bMq(Int32Array)]);
    bM9.addExtUnpacker(22, [bMt, bMq(Uint32Array)]);
    bM9.addExtUnpacker(23, [bMt, bMq(Float32Array)]);
    if (typeof Float64Array != "undefined") {
      bM9.addExtUnpacker(24, [bMt, bMq(Float64Array)]);
    }
    if (typeof Uint8ClampedArray != "undefined") {
      bM9.addExtUnpacker(25, bMq(Uint8ClampedArray));
    }
    bM9.addExtUnpacker(26, bMt);
    bM9.addExtUnpacker(29, [bMt, bMq(DataView)]);
  }
  if (bMe.hasBuffer) {
    bM9.addExtUnpacker(27, bMq(bMf));
  }
};
var bMd;
var bMe = require("./3.js");
var bMf = bMe.global;
var bMg = {
  name: 1,
  message: 1,
  stack: 1,
  columnNumber: 1,
  fileName: 1,
  lineNumber: 1
};
function bMh(bM9) {
  bMd ||= require("./30.js").decode;
  return bMd(bM9);
}
function bMj(bM9) {
  return RegExp.apply(null, bM9);
}
function bMl(bM9) {
  return function (bMa) {
    var bMb = new bM9();
    for (var bMd in bMg) {
      bMb[bMd] = bMa[bMd];
    }
    return bMb;
  };
}
function bMq(bM9) {
  return function (bMa) {
    return new bM9(bMa);
  };
}
function bMt(bM9) {
  return new Uint8Array(bM9).buffer;
}