var bJS = require("./11.js");
var bJT = require("./19.js");
var bJU = bJT.Uint64BE;
var bJV = bJT.Int64BE;
var bJW = require("./3.js");
var bJX = require("./18.js");
var bJY = require("./49.js");
var bJZ = require("./28.js").uint8;
var bK0 = require("./16.js").ExtBuffer;
var bK1 = typeof Uint8Array != "undefined";
var bK2 = typeof Map != "undefined";
var bK3 = [];
bK3[1] = 212;
bK3[2] = 213;
bK3[4] = 214;
bK3[8] = 215;
bK3[16] = 216;
exports.getWriteType = function (bJP) {
  function bJQ(bJP, bJQ) {
    if (bJQ === null) {
      return bJR(bJP, bJQ);
    }
    if (bKG(bJQ)) {
      return bKH(bJP, bJQ);
    }
    if (bJS(bJQ)) {
      return function (bJP, bJQ) {
        var bJR = bJQ.length;
        bKD[bJR < 16 ? 144 + bJR : bJR <= 65535 ? 220 : 221](bJP, bJR);
        for (var bJS = bJP.codec.encode, bJT = 0; bJT < bJR; bJT++) {
          bJS(bJP, bJQ[bJT]);
        }
      }(bJP, bJQ);
    }
    if (bJU.isUint64BE(bJQ)) {
      return function (bJP, bJQ) {
        bKD[207](bJP, bJQ.toArray());
      }(bJP, bJQ);
    }
    if (bJV.isInt64BE(bJQ)) {
      return function (bJP, bJQ) {
        bKD[211](bJP, bJQ.toArray());
      }(bJP, bJQ);
    }
    var bJT = bJP.codec.getExtPacker(bJQ);
    if (bJT) {
      bJQ = bJT(bJQ);
    }
    if (bJQ instanceof bK0) {
      return function (bJP, bJQ) {
        var bJR = bJQ.buffer;
        var bJS = bJR.length;
        var bJT = bK3[bJS] || (bJS < 255 ? 199 : bJS <= 65535 ? 200 : 201);
        bKD[bJT](bJP, bJS);
        bJZ[bJQ.type](bJP);
        bJP.send(bJR);
      }(bJP, bJQ);
    } else {
      bKI(bJP, bJQ);
      return;
    }
  }
  function bJR(bJP, bJQ) {
    bKD[192](bJP, bJQ);
  }
  function bJT(bJP, bJQ) {
    var bJR = bJQ.length;
    var bJS = bJR < 255 ? 196 : bJR <= 65535 ? 197 : 198;
    bKD[bJS](bJP, bJR);
    bJP.send(bJQ);
  }
  function bKv(bJP, bJQ) {
    var bJR = Object.keys(bJQ);
    var bJS = bJR.length;
    var bJT = bJS < 16 ? 128 + bJS : bJS <= 65535 ? 222 : 223;
    bKD[bJT](bJP, bJS);
    var bJU = bJP.codec.encode;
    bJR.forEach(function (bJR) {
      bJU(bJP, bJR);
      bJU(bJP, bJQ[bJR]);
    });
  }
  var bKD = bJY.getWriteToken(bJP);
  var bKE = bJP && bJP.useraw;
  var bKF = bK1 && bJP && bJP.binarraybuffer;
  var bKG = bKF ? bJW.isArrayBuffer : bJW.isBuffer;
  var bKH = bKF ? function (bJP, bJQ) {
    bJT(bJP, new Uint8Array(bJQ));
  } : bJT;
  var bKI = bK2 && bJP && bJP.usemap ? function (bJP, bJQ) {
    if (!(bJQ instanceof Map)) {
      return bKv(bJP, bJQ);
    }
    var bJR = bJQ.size;
    var bJS = bJR < 16 ? 128 + bJR : bJR <= 65535 ? 222 : 223;
    bKD[bJS](bJP, bJR);
    var bJT = bJP.codec.encode;
    bJQ.forEach(function (bJQ, bJR) {
      bJT(bJP, bJR);
      bJT(bJP, bJQ);
    });
  } : bKv;
  return {
    boolean: function (bJP, bJQ) {
      var bJR = bJQ ? 195 : 194;
      bKD[bJR](bJP, bJQ);
    },
    function: bJR,
    number: function (bJP, bJQ) {
      var bJR = bJQ | 0;
      if (bJQ === bJR) {
        bKD[bJR >= -32 && bJR <= 127 ? bJR & 255 : bJR >= 0 ? bJR <= 255 ? 204 : bJR <= 65535 ? 205 : 206 : bJR >= -128 ? 208 : bJR >= -32768 ? 209 : 210](bJP, bJR);
      } else {
        bKD[203](bJP, bJQ);
      }
    },
    object: bKE ? function (bJP, bJR) {
      if (bKG(bJR)) {
        return function (bJP, bJQ) {
          var bJR = bJQ.length;
          bKD[bJR < 32 ? 160 + bJR : bJR <= 65535 ? 218 : 219](bJP, bJR);
          bJP.send(bJQ);
        }(bJP, bJR);
      } else {
        bJQ(bJP, bJR);
        return;
      }
    } : bJQ,
    string: function (bJP) {
      return function (bJQ, bJR) {
        var bJS = bJR.length;
        var bJT = 5 + bJS * 3;
        bJQ.offset = bJQ.reserve(bJT);
        var bJU = bJQ.buffer;
        var bJV = bJP(bJS);
        var bJW = bJQ.offset + bJV;
        bJS = bJX.write.call(bJU, bJR, bJW);
        var bJY = bJP(bJS);
        if (bJV !== bJY) {
          var bJZ = bJW + bJS;
          bJX.copy.call(bJU, bJU, bJW + bJY - bJV, bJW, bJZ);
        }
        var bK0 = bJY === 1 ? 160 + bJS : bJY <= 3 ? 215 + bJY : 219;
        bKD[bK0](bJQ, bJS);
        bJQ.offset += bJS;
      };
    }(bKE ? function (bJP) {
      if (bJP < 32) {
        return 1;
      } else if (bJP <= 65535) {
        return 3;
      } else {
        return 5;
      }
    } : function (bJP) {
      if (bJP < 32) {
        return 1;
      } else if (bJP <= 255) {
        return 2;
      } else if (bJP <= 65535) {
        return 3;
      } else {
        return 5;
      }
    }),
    symbol: bJR,
    undefined: bJR
  };
};