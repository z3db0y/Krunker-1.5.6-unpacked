exports.copy = function (bJ9, bJa, bJd, bJe) {
  var bJf;
  bJd ||= 0;
  if (!bJe && bJe !== 0) {
    bJe = this.length;
  }
  bJa ||= 0;
  var bJg = bJe - bJd;
  if (bJ9 === this && bJd < bJa && bJa < bJe) {
    for (bJf = bJg - 1; bJf >= 0; bJf--) {
      bJ9[bJf + bJa] = this[bJf + bJd];
    }
  } else {
    for (bJf = 0; bJf < bJg; bJf++) {
      bJ9[bJf + bJa] = this[bJf + bJd];
    }
  }
  return bJg;
};
exports.toString = function (bJ9, bJa, bJj) {
  var bJk = this;
  var bJl = bJa | 0;
  bJj ||= bJk.length;
  for (var bJm = "", bJn = 0; bJl < bJj;) {
    if ((bJn = bJk[bJl++]) < 128) {
      bJm += String.fromCharCode(bJn);
    } else {
      if ((bJn & 224) == 192) {
        bJn = (bJn & 31) << 6 | bJk[bJl++] & 63;
      } else if ((bJn & 240) == 224) {
        bJn = (bJn & 15) << 12 | (bJk[bJl++] & 63) << 6 | bJk[bJl++] & 63;
      } else if ((bJn & 248) == 240) {
        bJn = (bJn & 7) << 18 | (bJk[bJl++] & 63) << 12 | (bJk[bJl++] & 63) << 6 | bJk[bJl++] & 63;
      }
      if (bJn >= 65536) {
        bJn -= 65536;
        bJm += String.fromCharCode(55296 + (bJn >>> 10), 56320 + (bJn & 1023));
      } else {
        bJm += String.fromCharCode(bJn);
      }
    }
  }
  return bJm;
};
exports.write = function (bJ9, bJa) {
  for (var bJq = this, bJr = bJa || (bJa |= 0), bJs = bJ9.length, bJt = 0, bJu = 0; bJu < bJs;) {
    if ((bJt = bJ9.charCodeAt(bJu++)) < 128) {
      bJq[bJr++] = bJt;
    } else if (bJt < 2048) {
      bJq[bJr++] = bJt >>> 6 | 192;
      bJq[bJr++] = bJt & 63 | 128;
    } else if (bJt < 55296 || bJt > 57343) {
      bJq[bJr++] = bJt >>> 12 | 224;
      bJq[bJr++] = bJt >>> 6 & 63 | 128;
      bJq[bJr++] = bJt & 63 | 128;
    } else {
      bJt = 65536 + (bJt - 55296 << 10 | bJ9.charCodeAt(bJu++) - 56320);
      bJq[bJr++] = bJt >>> 18 | 240;
      bJq[bJr++] = bJt >>> 12 & 63 | 128;
      bJq[bJr++] = bJt >>> 6 & 63 | 128;
      bJq[bJr++] = bJt & 63 | 128;
    }
  }
  return bJr - bJa;
};