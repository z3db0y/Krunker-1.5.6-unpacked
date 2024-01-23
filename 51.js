var bMy = require("./32.js");
function bMz(bMv) {
  var bMw;
  var bMx = Array(256);
  for (bMw = 0; bMw <= 127; bMw++) {
    bMx[bMw] = bMD(bMw);
  }
  for (bMw = 128; bMw <= 143; bMw++) {
    bMx[bMw] = bMK(bMw - 128, bMv.map);
  }
  for (bMw = 144; bMw <= 159; bMw++) {
    bMx[bMw] = bMK(bMw - 144, bMv.array);
  }
  for (bMw = 160; bMw <= 191; bMw++) {
    bMx[bMw] = bMK(bMw - 160, bMv.str);
  }
  bMx[192] = bMD(null);
  bMx[193] = null;
  bMx[194] = bMD(false);
  bMx[195] = bMD(true);
  bMx[196] = bMF(bMv.uint8, bMv.bin);
  bMx[197] = bMF(bMv.uint16, bMv.bin);
  bMx[198] = bMF(bMv.uint32, bMv.bin);
  bMx[199] = bMF(bMv.uint8, bMv.ext);
  bMx[200] = bMF(bMv.uint16, bMv.ext);
  bMx[201] = bMF(bMv.uint32, bMv.ext);
  bMx[202] = bMv.float32;
  bMx[203] = bMv.float64;
  bMx[204] = bMv.uint8;
  bMx[205] = bMv.uint16;
  bMx[206] = bMv.uint32;
  bMx[207] = bMv.uint64;
  bMx[208] = bMv.int8;
  bMx[209] = bMv.int16;
  bMx[210] = bMv.int32;
  bMx[211] = bMv.int64;
  bMx[212] = bMK(1, bMv.ext);
  bMx[213] = bMK(2, bMv.ext);
  bMx[214] = bMK(4, bMv.ext);
  bMx[215] = bMK(8, bMv.ext);
  bMx[216] = bMK(16, bMv.ext);
  bMx[217] = bMF(bMv.uint8, bMv.str);
  bMx[218] = bMF(bMv.uint16, bMv.str);
  bMx[219] = bMF(bMv.uint32, bMv.str);
  bMx[220] = bMF(bMv.uint16, bMv.array);
  bMx[221] = bMF(bMv.uint32, bMv.array);
  bMx[222] = bMF(bMv.uint16, bMv.map);
  bMx[223] = bMF(bMv.uint32, bMv.map);
  bMw = 224;
  for (; bMw <= 255; bMw++) {
    bMx[bMw] = bMD(bMw - 256);
  }
  return bMx;
}
function bMD(bMv) {
  return function () {
    return bMv;
  };
}
function bMF(bMv, bMw) {
  return function (bMx) {
    var bMy = bMv(bMx);
    return bMw(bMx, bMy);
  };
}
function bMK(bMv, bMw) {
  return function (bMx) {
    return bMw(bMx, bMv);
  };
}
exports.getReadToken = function (bMv) {
  var bMw = bMy.getReadFormat(bMv);
  if (bMv && bMv.useraw) {
    return function (bMv) {
      var bMw;
      var bMx = bMz(bMv).slice();
      bMx[217] = bMx[196];
      bMx[218] = bMx[197];
      bMx[219] = bMx[198];
      bMw = 160;
      for (; bMw <= 191; bMw++) {
        bMx[bMw] = bMK(bMw - 160, bMv.bin);
      }
      return bMx;
    }(bMw);
  } else {
    return bMz(bMw);
  }
};