var bnI;
var bnJ = require("./46.js");
exports.copy = bnP;
exports.slice = bnX;
exports.toString = function () {
  return (!bnN && bnL.isBuffer(this) ? this.toString : bnJ.toString).apply(this, arguments);
};
bnI = "write";
exports.write = function () {
  var bnF = this[bnI] || bnJ[bnI];
  return bnF.apply(this, arguments);
};
var bnL = require("./3.js");
var bnM = bnL.global;
var bnN = bnL.hasBuffer && "TYPED_ARRAY_SUPPORT" in bnM;
var bnO = bnN && !bnM.TYPED_ARRAY_SUPPORT;
function bnP(bnF, bnG, bnH, bnI) {
  var bnM = bnL.isBuffer(this);
  var bnN = bnL.isBuffer(bnF);
  if (bnM && bnN) {
    return this.copy(bnF, bnG, bnH, bnI);
  }
  if (!bnO && !bnM && !bnN && bnL.isView(this) && bnL.isView(bnF)) {
    var bnP = bnH || bnI != null ? bnX.call(this, bnH, bnI) : this;
    bnF.set(bnP, bnG);
    return bnP.length;
  }
  return bnJ.copy.call(this, bnF, bnG, bnH, bnI);
}
function bnX(bnF, bnG) {
  var bnH = this.slice || !bnO && this.subarray;
  if (bnH) {
    return bnH.call(this, bnF, bnG);
  }
  var bnI = bnL.alloc.call(this, bnG - bnF);
  bnP.call(this, bnI, 0, bnF, bnG);
  return bnI;
}