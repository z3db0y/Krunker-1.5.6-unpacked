var aI = exports.global = require("./41.js");
var aJ = exports.hasBuffer = aI && !!aI.isBuffer;
var aK = exports.hasArrayBuffer = typeof ArrayBuffer != "undefined";
var aL = exports.isArray = require("./11.js");
exports.isArrayBuffer = aK ? function (aF) {
  return aF instanceof ArrayBuffer || b7(aF);
} : ba;
var aN = exports.isBuffer = aJ ? aI.isBuffer : ba;
var aO = exports.isView = aK ? ArrayBuffer.isView || bb("ArrayBuffer", "buffer") : ba;
exports.alloc = b5;
exports.concat = function (aF, aH) {
  if (!aH) {
    aH = 0;
    Array.prototype.forEach.call(aF, function (aF) {
      aH += aF.length;
    });
  }
  var aI = this !== exports && this || aF[0];
  var aJ = b5.call(aI, aH);
  var aK = 0;
  Array.prototype.forEach.call(aF, function (aF) {
    aK += b4.copy.call(aF, aJ, aK);
  });
  return aJ;
};
exports.from = function (aF) {
  if (typeof aF == "string") {
    return function (aF) {
      var aG = aF.length * 3;
      var aH = b5.call(this, aG);
      var aI = b4.write.call(aH, aF);
      if (aG !== aI) {
        aH = b4.slice.call(aH, 0, aI);
      }
      return aH;
    }.call(this, aF);
  } else {
    return b8(this).from(aF);
  }
};
var b1 = exports.Array = require("./43.js");
var b2 = exports.Buffer = require("./44.js");
var b3 = exports.Uint8Array = require("./45.js");
var b4 = exports.prototype = require("./18.js");
function b5(aF) {
  return b8(this).alloc(aF);
}
var b7 = bb("ArrayBuffer");
function b8(aF) {
  if (aN(aF)) {
    return b2;
  } else if (aO(aF)) {
    return b3;
  } else if (aL(aF)) {
    return b1;
  } else if (aJ) {
    return b2;
  } else if (aK) {
    return b3;
  } else {
    return b1;
  }
}
function ba() {
  return false;
}
function bb(aF, aG) {
  aF = "[object " + aF + "]";
  return function (aH) {
    return aH != null && {}.toString.call(aG ? aH[aG] : aH) === aF;
  };
}