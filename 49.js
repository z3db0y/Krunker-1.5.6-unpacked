var bLj = require("./17.js");
var bLk = require("./19.js");
var bLl = bLk.Uint64BE;
var bLm = bLk.Int64BE;
var bLn = require("./28.js").uint8;
var bLo = require("./3.js");
var bLp = bLo.global;
var bLq = bLo.hasBuffer && "TYPED_ARRAY_SUPPORT" in bLp && !bLp.TYPED_ARRAY_SUPPORT;
var bLr = bLo.hasBuffer && bLp.prototype || {};
function bLs() {
  var bLg = bLn.slice();
  bLg[196] = bLu(196);
  bLg[197] = bLA(197);
  bLg[198] = bLG(198);
  bLg[199] = bLu(199);
  bLg[200] = bLA(200);
  bLg[201] = bLG(201);
  bLg[202] = bLM(202, 4, bLr.writeFloatBE || bM0, true);
  bLg[203] = bLM(203, 8, bLr.writeDoubleBE || bM3, true);
  bLg[204] = bLu(204);
  bLg[205] = bLA(205);
  bLg[206] = bLG(206);
  bLg[207] = bLM(207, 8, bLU);
  bLg[208] = bLu(208);
  bLg[209] = bLA(209);
  bLg[210] = bLG(210);
  bLg[211] = bLM(211, 8, bLX);
  bLg[217] = bLu(217);
  bLg[218] = bLA(218);
  bLg[219] = bLG(219);
  bLg[220] = bLA(220);
  bLg[221] = bLG(221);
  bLg[222] = bLA(222);
  bLg[223] = bLG(223);
  return bLg;
}
function bLu(bLg) {
  return function (bLh, bLi) {
    var bLj = bLh.reserve(2);
    var bLk = bLh.buffer;
    bLk[bLj++] = bLg;
    bLk[bLj] = bLi;
  };
}
function bLA(bLg) {
  return function (bLh, bLi) {
    var bLj = bLh.reserve(3);
    var bLk = bLh.buffer;
    bLk[bLj++] = bLg;
    bLk[bLj++] = bLi >>> 8;
    bLk[bLj] = bLi;
  };
}
function bLG(bLg) {
  return function (bLh, bLi) {
    var bLj = bLh.reserve(5);
    var bLk = bLh.buffer;
    bLk[bLj++] = bLg;
    bLk[bLj++] = bLi >>> 24;
    bLk[bLj++] = bLi >>> 16;
    bLk[bLj++] = bLi >>> 8;
    bLk[bLj] = bLi;
  };
}
function bLM(bLg, bLh, bLi, bLj) {
  return function (bLk, bLl) {
    var bLm = bLk.reserve(bLh + 1);
    bLk.buffer[bLm++] = bLg;
    bLi.call(bLk.buffer, bLl, bLm, bLj);
  };
}
function bLU(bLg, bLh) {
  new bLl(this, bLh, bLg);
}
function bLX(bLg, bLh) {
  new bLm(this, bLh, bLg);
}
function bM0(bLg, bLh) {
  bLj.write(this, bLg, bLh, false, 23, 4);
}
function bM3(bLg, bLh) {
  bLj.write(this, bLg, bLh, false, 52, 8);
}
exports.getWriteToken = function (bLg) {
  if (bLg && bLg.uint8array) {
    return function () {
      var bLg = bLs();
      bLg[202] = bLM(202, 4, bM0);
      bLg[203] = bLM(203, 8, bM3);
      return bLg;
    }();
  } else if (bLq || bLo.hasBuffer && bLg && bLg.safe) {
    return function () {
      var bLg = bLn.slice();
      bLg[196] = bLM(196, 1, bLp.prototype.writeUInt8);
      bLg[197] = bLM(197, 2, bLp.prototype.writeUInt16BE);
      bLg[198] = bLM(198, 4, bLp.prototype.writeUInt32BE);
      bLg[199] = bLM(199, 1, bLp.prototype.writeUInt8);
      bLg[200] = bLM(200, 2, bLp.prototype.writeUInt16BE);
      bLg[201] = bLM(201, 4, bLp.prototype.writeUInt32BE);
      bLg[202] = bLM(202, 4, bLp.prototype.writeFloatBE);
      bLg[203] = bLM(203, 8, bLp.prototype.writeDoubleBE);
      bLg[204] = bLM(204, 1, bLp.prototype.writeUInt8);
      bLg[205] = bLM(205, 2, bLp.prototype.writeUInt16BE);
      bLg[206] = bLM(206, 4, bLp.prototype.writeUInt32BE);
      bLg[207] = bLM(207, 8, bLU);
      bLg[208] = bLM(208, 1, bLp.prototype.writeInt8);
      bLg[209] = bLM(209, 2, bLp.prototype.writeInt16BE);
      bLg[210] = bLM(210, 4, bLp.prototype.writeInt32BE);
      bLg[211] = bLM(211, 8, bLX);
      bLg[217] = bLM(217, 1, bLp.prototype.writeUInt8);
      bLg[218] = bLM(218, 2, bLp.prototype.writeUInt16BE);
      bLg[219] = bLM(219, 4, bLp.prototype.writeUInt32BE);
      bLg[220] = bLM(220, 2, bLp.prototype.writeUInt16BE);
      bLg[221] = bLM(221, 4, bLp.prototype.writeUInt32BE);
      bLg[222] = bLM(222, 2, bLp.prototype.writeUInt16BE);
      bLg[223] = bLM(223, 4, bLp.prototype.writeUInt32BE);
      return bLg;
    }();
  } else {
    return bLs();
  }
};