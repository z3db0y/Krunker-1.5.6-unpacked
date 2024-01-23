exports.byteLength = function (bI1) {
  var bI2 = bIy(bI1);
  var bI3 = bI2[0];
  var bI7 = bI2[1];
  return (bI3 + bI7) * 3 / 4 - bI7;
};
exports.toByteArray = function (bI1) {
  for (var bI2, bI3 = bIy(bI1), bIb = bI3[0], bIc = bI3[1], bId = new bIu(function (bI1, bI2, bI3) {
      return (bI2 + bI3) * 3 / 4 - bI3;
    }(0, bIb, bIc)), bIe = 0, bIf = bIc > 0 ? bIb - 4 : bIb, bIg = 0; bIg < bIf; bIg += 4) {
    bI2 = bIt[bI1.charCodeAt(bIg)] << 18 | bIt[bI1.charCodeAt(bIg + 1)] << 12 | bIt[bI1.charCodeAt(bIg + 2)] << 6 | bIt[bI1.charCodeAt(bIg + 3)];
    bId[bIe++] = bI2 >> 16 & 255;
    bId[bIe++] = bI2 >> 8 & 255;
    bId[bIe++] = bI2 & 255;
  }
  if (bIc === 2) {
    bI2 = bIt[bI1.charCodeAt(bIg)] << 2 | bIt[bI1.charCodeAt(bIg + 1)] >> 4;
    bId[bIe++] = bI2 & 255;
  }
  if (bIc === 1) {
    bI2 = bIt[bI1.charCodeAt(bIg)] << 10 | bIt[bI1.charCodeAt(bIg + 1)] << 4 | bIt[bI1.charCodeAt(bIg + 2)] >> 2;
    bId[bIe++] = bI2 >> 8 & 255;
    bId[bIe++] = bI2 & 255;
  }
  return bId;
};
exports.fromByteArray = function (bI1) {
  for (var bI2, bI3 = bI1.length, bIn = bI3 % 3, bIo = [], bIp = 16383, bIq = 0, bIr = bI3 - bIn; bIq < bIr; bIq += bIp) {
    bIo.push(bIE(bI1, bIq, bIq + bIp > bIr ? bIr : bIq + bIp));
  }
  if (bIn === 1) {
    bI2 = bI1[bI3 - 1];
    bIo.push(bIs[bI2 >> 2] + bIs[bI2 << 4 & 63] + "==");
  } else if (bIn === 2) {
    bI2 = (bI1[bI3 - 2] << 8) + bI1[bI3 - 1];
    bIo.push(bIs[bI2 >> 10] + bIs[bI2 >> 4 & 63] + bIs[bI2 << 2 & 63] + "=");
  }
  return bIo.join("");
};
for (var bIs = [], bIt = [], bIu = typeof Uint8Array == "undefined" ? Array : Uint8Array, bIv = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bIw = 0, bIx = bIv.length; bIw < bIx; ++bIw) {
  bIs[bIw] = bIv[bIw];
  bIt[bIv.charCodeAt(bIw)] = bIw;
}
function bIy(bI1) {
  var bI2 = bI1.length;
  if (bI2 % 4 > 0) {
    throw new Error("Invalid string. Length must be a multiple of 4");
  }
  var bI3 = bI1.indexOf("=");
  if (bI3 === -1) {
    bI3 = bI2;
  }
  return [bI3, bI3 === bI2 ? 0 : 4 - bI3 % 4];
}
function bIC(bI1) {
  return bIs[bI1 >> 18 & 63] + bIs[bI1 >> 12 & 63] + bIs[bI1 >> 6 & 63] + bIs[bI1 & 63];
}
function bIE(bI1, bI2, bI3) {
  for (var bIs, bIt = [], bIu = bI2; bIu < bI3; bIu += 3) {
    bIs = (bI1[bIu] << 16 & 16711680) + (bI1[bIu + 1] << 8 & 65280) + (bI1[bIu + 2] & 255);
    bIt.push(bIC(bIs));
  }
  return bIt.join("");
}
bIt[45] = 62;
bIt[95] = 63;