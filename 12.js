var blu = require("./11.js");
exports.createCodec = blJ;
exports.install = function (blr) {
  for (var bls in blr) {
    blE.prototype[bls] = blG(blE.prototype[bls], blr[bls]);
  }
};
exports.filter = function (blr) {
  if (blu(blr)) {
    return function (blr) {
      function bls(blr, bls) {
        return bls(blr);
      }
      blr = blr.slice();
      return function (blt) {
        return blr.reduce(bls, blt);
      };
    }(blr);
  } else {
    return blr;
  }
};
var blD = require("./3.js");
function blE(blr) {
  if (this instanceof blE) {
    this.options = blr;
    this.init();
    return;
  } else {
    return new blE(blr);
  }
}
function blG(blr, bls) {
  if (blr && bls) {
    return function () {
      blr.apply(this, arguments);
      return bls.apply(this, arguments);
    };
  } else {
    return blr || bls;
  }
}
function blJ(blr) {
  return new blE(blr);
}
blE.prototype.init = function () {
  var blr = this.options;
  if (blr && blr.uint8array) {
    this.bufferish = blD.Uint8Array;
  }
  return this;
};
exports.preset = blJ({
  preset: true
});