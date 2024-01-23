var bAg = require("./17.js");
var bAh = require("./19.js");
var bAi = bAh.Uint64BE;
var bAj = bAh.Int64BE;
exports.getReadFormat = function (bAd) {
  var bAe = bAn.hasArrayBuffer && bAd && bAd.binarraybuffer;
  var bAf = bAd && bAd.int64;
  return {
    map: bAp && bAd && bAd.usemap ? bAz : bAr,
    array: bAH,
    str: bAN,
    bin: bAe ? bAW : bAR,
    ext: bB1,
    uint8: bB8,
    uint16: bBf,
    uint32: bBo,
    uint64: bBw(8, bAf ? bBF : bBB),
    int8: bBb,
    int16: bBj,
    int32: bBs,
    int64: bBw(8, bAf ? bBH : bBD),
    float32: bBw(4, bBJ),
    float64: bBw(8, bBL)
  };
};
exports.readUint8 = bB8;
var bAn = require("./3.js");
var bAo = require("./18.js");
var bAp = typeof Map != "undefined";
var bAq = true;
function bAr(bAd, bAe) {
  var bAf;
  var bAg = {};
  var bAh = Array(bAe);
  var bAi = Array(bAe);
  var bAj = bAd.codec.decode;
  for (bAf = 0; bAf < bAe; bAf++) {
    bAh[bAf] = bAj(bAd);
    bAi[bAf] = bAj(bAd);
  }
  for (bAf = 0; bAf < bAe; bAf++) {
    bAg[bAh[bAf]] = bAi[bAf];
  }
  return bAg;
}
function bAz(bAd, bAe) {
  var bAf;
  var bAg = new Map();
  var bAh = Array(bAe);
  var bAi = Array(bAe);
  var bAj = bAd.codec.decode;
  for (bAf = 0; bAf < bAe; bAf++) {
    bAh[bAf] = bAj(bAd);
    bAi[bAf] = bAj(bAd);
  }
  for (bAf = 0; bAf < bAe; bAf++) {
    bAg.set(bAh[bAf], bAi[bAf]);
  }
  return bAg;
}
function bAH(bAd, bAe) {
  for (var bAf = Array(bAe), bAg = bAd.codec.decode, bAh = 0; bAh < bAe; bAh++) {
    bAf[bAh] = bAg(bAd);
  }
  return bAf;
}
function bAN(bAd, bAe) {
  var bAf = bAd.reserve(bAe);
  return bAo.toString.call(bAd.buffer, "utf-8", bAf, bAf + bAe);
}
function bAR(bAd, bAe) {
  var bAf = bAd.reserve(bAe);
  var bAg = bAo.slice.call(bAd.buffer, bAf, bAf + bAe);
  return bAn.from(bAg);
}
function bAW(bAd, bAe) {
  var bAf = bAd.reserve(bAe);
  var bAg = bAo.slice.call(bAd.buffer, bAf, bAf + bAe);
  return bAn.Uint8Array.from(bAg).buffer;
}
function bB1(bAd, bAe) {
  var bAf = bAd.reserve(bAe + 1);
  var bAg = bAd.buffer[bAf++];
  var bAh = bAf + bAe;
  var bAi = bAd.codec.getExtUnpacker(bAg);
  if (!bAi) {
    throw new Error("Invalid ext type: " + (bAg ? "0x" + bAg.toString(16) : bAg));
  }
  return bAi(bAo.slice.call(bAd.buffer, bAf, bAh));
}
function bB8(bAd) {
  var bAe = bAd.reserve(1);
  return bAd.buffer[bAe];
}
function bBb(bAd) {
  var bAe = bAd.reserve(1);
  var bAf = bAd.buffer[bAe];
  if (bAf & 128) {
    return bAf - 256;
  } else {
    return bAf;
  }
}
function bBf(bAd) {
  var bAe = bAd.reserve(2);
  var bAf = bAd.buffer;
  return bAf[bAe++] << 8 | bAf[bAe];
}
function bBj(bAd) {
  var bAe = bAd.reserve(2);
  var bAf = bAd.buffer;
  var bAg = bAf[bAe++] << 8 | bAf[bAe];
  if (bAg & 32768) {
    return bAg - 65536;
  } else {
    return bAg;
  }
}
function bBo(bAd) {
  var bAe = bAd.reserve(4);
  var bAf = bAd.buffer;
  return bAf[bAe++] * 16777216 + (bAf[bAe++] << 16) + (bAf[bAe++] << 8) + bAf[bAe];
}
function bBs(bAd) {
  var bAe = bAd.reserve(4);
  var bAf = bAd.buffer;
  return bAf[bAe++] << 24 | bAf[bAe++] << 16 | bAf[bAe++] << 8 | bAf[bAe];
}
function bBw(bAd, bAe) {
  return function (bAf) {
    var bAg = bAf.reserve(bAd);
    return bAe.call(bAf.buffer, bAg, bAq);
  };
}
function bBB(bAd) {
  return new bAi(this, bAd).toNumber();
}
function bBD(bAd) {
  return new bAj(this, bAd).toNumber();
}
function bBF(bAd) {
  return new bAi(this, bAd);
}
function bBH(bAd) {
  return new bAj(this, bAd);
}
function bBJ(bAd) {
  return bAg.read(this, bAd, false, 23, 4);
}
function bBL(bAd) {
  return bAg.read(this, bAd, false, 52, 8);
}