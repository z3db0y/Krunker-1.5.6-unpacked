var bZG;
(function () {
  'use strict';

  function bZH(bZD) {
    var bZE;
    bZE = typeof bZD == "function" ? bZD : bZD ? bZR(bZD) : Math.random;
    this.p = bZL(bZE);
    this.perm = new Uint8Array(512);
    this.permMod12 = new Uint8Array(512);
    for (var bZF = 0; bZF < 512; bZF++) {
      this.perm[bZF] = this.p[bZF & 255];
      this.permMod12[bZF] = this.perm[bZF] % 12;
    }
  }
  function bZL(bZD) {
    var bZE;
    var bZF = new Uint8Array(256);
    for (bZE = 0; bZE < 256; bZE++) {
      bZF[bZE] = bZE;
    }
    for (bZE = 0; bZE < 255; bZE++) {
      var bZG = bZE + ~~(bZD() * (256 - bZE));
      var bZH = bZF[bZE];
      bZF[bZE] = bZF[bZG];
      bZF[bZG] = bZH;
    }
    return bZF;
  }
  function bZR() {
    var bZD = 0;
    var bZE = 0;
    var bZF = 0;
    var bZG = 1;
    var bZH = function () {
      var bZD = 4022871197;
      return function (bZE) {
        bZE = bZE.toString();
        for (var bZF = 0; bZF < bZE.length; bZF++) {
          var bZG = (bZD += bZE.charCodeAt(bZF)) * 0.02519603282416938;
          bZG -= bZD = bZG >>> 0;
          bZD = (bZG *= bZD) >>> 0;
          bZD += (bZG -= bZD) * 4294967296;
        }
        return (bZD >>> 0) * 2.3283064365386963e-10;
      };
    }();
    bZD = bZH(" ");
    bZE = bZH(" ");
    bZF = bZH(" ");
    for (var bZL = 0; bZL < arguments.length; bZL++) {
      if ((bZD -= bZH(arguments[bZL])) < 0) {
        bZD += 1;
      }
      if ((bZE -= bZH(arguments[bZL])) < 0) {
        bZE += 1;
      }
      if ((bZF -= bZH(arguments[bZL])) < 0) {
        bZF += 1;
      }
    }
    bZH = null;
    return function () {
      var bZH = bZD * 2091639 + bZG * 2.3283064365386963e-10;
      bZD = bZE;
      bZE = bZF;
      return bZF = bZH - (bZG = bZH | 0);
    };
  }
  var c03 = (Math.sqrt(3) - 1) * 0.5;
  var c04 = (3 - Math.sqrt(3)) / 6;
  var c05 = 1 / 6;
  var c06 = (Math.sqrt(5) - 1) / 4;
  var c07 = (5 - Math.sqrt(5)) / 20;
  bZH.prototype = {
    grad3: new Float32Array([1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1, 0, 1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, -1, 0, 1, 1, 0, -1, 1, 0, 1, -1, 0, -1, -1]),
    grad4: new Float32Array([0, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 1, 0, 1, 1, 1, 0, 1, -1, 1, 0, -1, 1, 1, 0, -1, -1, -1, 0, 1, 1, -1, 0, 1, -1, -1, 0, -1, 1, -1, 0, -1, -1, 1, 1, 0, 1, 1, 1, 0, -1, 1, -1, 0, 1, 1, -1, 0, -1, -1, 1, 0, 1, -1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, -1, 1, 1, 1, 0, 1, 1, -1, 0, 1, -1, 1, 0, 1, -1, -1, 0, -1, 1, 1, 0, -1, 1, -1, 0, -1, -1, 1, 0, -1, -1, -1, 0]),
    noise2D: function (bZD, bZE) {
      var bZF;
      var bZG;
      var bZH = this.permMod12;
      var bZL = this.perm;
      var bZR = this.grad3;
      var c05 = 0;
      var c06 = 0;
      var c07 = 0;
      var c0i = (bZD + bZE) * c03;
      var c0j = Math.floor(bZD + c0i);
      var c0k = Math.floor(bZE + c0i);
      var c0l = (c0j + c0k) * c04;
      var c0m = bZD - (c0j - c0l);
      var c0n = bZE - (c0k - c0l);
      if (c0m > c0n) {
        bZF = 1;
        bZG = 0;
      } else {
        bZF = 0;
        bZG = 1;
      }
      var c0o = c0m - bZF + c04;
      var c0p = c0n - bZG + c04;
      var c0q = c0m - 1 + c04 * 2;
      var c0r = c0n - 1 + c04 * 2;
      var c0s = c0j & 255;
      var c0t = c0k & 255;
      var c0u = 0.5 - c0m * c0m - c0n * c0n;
      if (c0u >= 0) {
        var c0v = bZH[c0s + bZL[c0t]] * 3;
        c05 = (c0u *= c0u) * c0u * (bZR[c0v] * c0m + bZR[c0v + 1] * c0n);
      }
      var c0w = 0.5 - c0o * c0o - c0p * c0p;
      if (c0w >= 0) {
        var c0x = bZH[c0s + bZF + bZL[c0t + bZG]] * 3;
        c06 = (c0w *= c0w) * c0w * (bZR[c0x] * c0o + bZR[c0x + 1] * c0p);
      }
      var c0y = 0.5 - c0q * c0q - c0r * c0r;
      if (c0y >= 0) {
        var c0z = bZH[c0s + 1 + bZL[c0t + 1]] * 3;
        c07 = (c0y *= c0y) * c0y * (bZR[c0z] * c0q + bZR[c0z + 1] * c0r);
      }
      return (c05 + c06 + c07) * 70;
    },
    noise3D: function (bZD, bZE, bZF) {
      var bZG;
      var bZH;
      var bZL;
      var bZR;
      var c03;
      var c04;
      var c06;
      var c07;
      var c0L;
      var c0M;
      var c0N = this.permMod12;
      var c0O = this.perm;
      var c0P = this.grad3;
      var c0Q = (bZD + bZE + bZF) * (1 / 3);
      var c0R = Math.floor(bZD + c0Q);
      var c0S = Math.floor(bZE + c0Q);
      var c0T = Math.floor(bZF + c0Q);
      var c0U = (c0R + c0S + c0T) * c05;
      var c0V = bZD - (c0R - c0U);
      var c0W = bZE - (c0S - c0U);
      var c0X = bZF - (c0T - c0U);
      if (c0V >= c0W) {
        if (c0W >= c0X) {
          c03 = 1;
          c04 = 0;
          c06 = 0;
          c07 = 1;
          c0L = 1;
          c0M = 0;
        } else if (c0V >= c0X) {
          c03 = 1;
          c04 = 0;
          c06 = 0;
          c07 = 1;
          c0L = 0;
          c0M = 1;
        } else {
          c03 = 0;
          c04 = 0;
          c06 = 1;
          c07 = 1;
          c0L = 0;
          c0M = 1;
        }
      } else if (c0W < c0X) {
        c03 = 0;
        c04 = 0;
        c06 = 1;
        c07 = 0;
        c0L = 1;
        c0M = 1;
      } else if (c0V < c0X) {
        c03 = 0;
        c04 = 1;
        c06 = 0;
        c07 = 0;
        c0L = 1;
        c0M = 1;
      } else {
        c03 = 0;
        c04 = 1;
        c06 = 0;
        c07 = 1;
        c0L = 1;
        c0M = 0;
      }
      var c0Y = c0V - c03 + c05;
      var c0Z = c0W - c04 + c05;
      var c10 = c0X - c06 + c05;
      var c11 = c0V - c07 + c05 * 2;
      var c12 = c0W - c0L + c05 * 2;
      var c13 = c0X - c0M + c05 * 2;
      var c14 = c0V - 1 + 0.5;
      var c15 = c0W - 1 + 0.5;
      var c16 = c0X - 1 + 0.5;
      var c17 = c0R & 255;
      var c18 = c0S & 255;
      var c19 = c0T & 255;
      var c1a = 0.6 - c0V * c0V - c0W * c0W - c0X * c0X;
      if (c1a < 0) {
        bZG = 0;
      } else {
        var c1b = c0N[c17 + c0O[c18 + c0O[c19]]] * 3;
        bZG = (c1a *= c1a) * c1a * (c0P[c1b] * c0V + c0P[c1b + 1] * c0W + c0P[c1b + 2] * c0X);
      }
      var c1c = 0.6 - c0Y * c0Y - c0Z * c0Z - c10 * c10;
      if (c1c < 0) {
        bZH = 0;
      } else {
        var c1d = c0N[c17 + c03 + c0O[c18 + c04 + c0O[c19 + c06]]] * 3;
        bZH = (c1c *= c1c) * c1c * (c0P[c1d] * c0Y + c0P[c1d + 1] * c0Z + c0P[c1d + 2] * c10);
      }
      var c1e = 0.6 - c11 * c11 - c12 * c12 - c13 * c13;
      if (c1e < 0) {
        bZL = 0;
      } else {
        var c1f = c0N[c17 + c07 + c0O[c18 + c0L + c0O[c19 + c0M]]] * 3;
        bZL = (c1e *= c1e) * c1e * (c0P[c1f] * c11 + c0P[c1f + 1] * c12 + c0P[c1f + 2] * c13);
      }
      var c1g = 0.6 - c14 * c14 - c15 * c15 - c16 * c16;
      if (c1g < 0) {
        bZR = 0;
      } else {
        var c1h = c0N[c17 + 1 + c0O[c18 + 1 + c0O[c19 + 1]]] * 3;
        bZR = (c1g *= c1g) * c1g * (c0P[c1h] * c14 + c0P[c1h + 1] * c15 + c0P[c1h + 2] * c16);
      }
      return (bZG + bZH + bZL + bZR) * 32;
    },
    noise4D: function (bZD, bZE, bZF, bZG) {
      var bZH;
      var bZL;
      var bZR;
      var c03;
      var c04;
      var c05;
      var c1s;
      var c1t;
      var c1u;
      var c1v;
      var c1w;
      var c1x;
      var c1y;
      var c1z;
      var c1A;
      var c1B;
      var c1C;
      var c1D = this.perm;
      var c1E = this.grad4;
      var c1F = (bZD + bZE + bZF + bZG) * c06;
      var c1G = Math.floor(bZD + c1F);
      var c1H = Math.floor(bZE + c1F);
      var c1I = Math.floor(bZF + c1F);
      var c1J = Math.floor(bZG + c1F);
      var c1K = (c1G + c1H + c1I + c1J) * c07;
      var c1L = bZD - (c1G - c1K);
      var c1M = bZE - (c1H - c1K);
      var c1N = bZF - (c1I - c1K);
      var c1O = bZG - (c1J - c1K);
      var c1P = 0;
      var c1Q = 0;
      var c1R = 0;
      var c1S = 0;
      if (c1L > c1M) {
        c1P++;
      } else {
        c1Q++;
      }
      if (c1L > c1N) {
        c1P++;
      } else {
        c1R++;
      }
      if (c1L > c1O) {
        c1P++;
      } else {
        c1S++;
      }
      if (c1M > c1N) {
        c1Q++;
      } else {
        c1R++;
      }
      if (c1M > c1O) {
        c1Q++;
      } else {
        c1S++;
      }
      if (c1N > c1O) {
        c1R++;
      } else {
        c1S++;
      }
      var c1T = c1L - (c05 = c1P >= 3 ? 1 : 0) + c07;
      var c1U = c1M - (c1s = c1Q >= 3 ? 1 : 0) + c07;
      var c1V = c1N - (c1t = c1R >= 3 ? 1 : 0) + c07;
      var c1W = c1O - (c1u = c1S >= 3 ? 1 : 0) + c07;
      var c1X = c1L - (c1v = c1P >= 2 ? 1 : 0) + c07 * 2;
      var c1Y = c1M - (c1w = c1Q >= 2 ? 1 : 0) + c07 * 2;
      var c1Z = c1N - (c1x = c1R >= 2 ? 1 : 0) + c07 * 2;
      var c20 = c1O - (c1y = c1S >= 2 ? 1 : 0) + c07 * 2;
      var c21 = c1L - (c1z = c1P >= 1 ? 1 : 0) + c07 * 3;
      var c22 = c1M - (c1A = c1Q >= 1 ? 1 : 0) + c07 * 3;
      var c23 = c1N - (c1B = c1R >= 1 ? 1 : 0) + c07 * 3;
      var c24 = c1O - (c1C = c1S >= 1 ? 1 : 0) + c07 * 3;
      var c25 = c1L - 1 + c07 * 4;
      var c26 = c1M - 1 + c07 * 4;
      var c27 = c1N - 1 + c07 * 4;
      var c28 = c1O - 1 + c07 * 4;
      var c29 = c1G & 255;
      var c2a = c1H & 255;
      var c2b = c1I & 255;
      var c2c = c1J & 255;
      var c2d = 0.6 - c1L * c1L - c1M * c1M - c1N * c1N - c1O * c1O;
      if (c2d < 0) {
        bZH = 0;
      } else {
        var c2e = c1D[c29 + c1D[c2a + c1D[c2b + c1D[c2c]]]] % 32 * 4;
        bZH = (c2d *= c2d) * c2d * (c1E[c2e] * c1L + c1E[c2e + 1] * c1M + c1E[c2e + 2] * c1N + c1E[c2e + 3] * c1O);
      }
      var c2f = 0.6 - c1T * c1T - c1U * c1U - c1V * c1V - c1W * c1W;
      if (c2f < 0) {
        bZL = 0;
      } else {
        var c2g = c1D[c29 + c05 + c1D[c2a + c1s + c1D[c2b + c1t + c1D[c2c + c1u]]]] % 32 * 4;
        bZL = (c2f *= c2f) * c2f * (c1E[c2g] * c1T + c1E[c2g + 1] * c1U + c1E[c2g + 2] * c1V + c1E[c2g + 3] * c1W);
      }
      var c2h = 0.6 - c1X * c1X - c1Y * c1Y - c1Z * c1Z - c20 * c20;
      if (c2h < 0) {
        bZR = 0;
      } else {
        var c2i = c1D[c29 + c1v + c1D[c2a + c1w + c1D[c2b + c1x + c1D[c2c + c1y]]]] % 32 * 4;
        bZR = (c2h *= c2h) * c2h * (c1E[c2i] * c1X + c1E[c2i + 1] * c1Y + c1E[c2i + 2] * c1Z + c1E[c2i + 3] * c20);
      }
      var c2j = 0.6 - c21 * c21 - c22 * c22 - c23 * c23 - c24 * c24;
      if (c2j < 0) {
        c03 = 0;
      } else {
        var c2k = c1D[c29 + c1z + c1D[c2a + c1A + c1D[c2b + c1B + c1D[c2c + c1C]]]] % 32 * 4;
        c03 = (c2j *= c2j) * c2j * (c1E[c2k] * c21 + c1E[c2k + 1] * c22 + c1E[c2k + 2] * c23 + c1E[c2k + 3] * c24);
      }
      var c2l = 0.6 - c25 * c25 - c26 * c26 - c27 * c27 - c28 * c28;
      if (c2l < 0) {
        c04 = 0;
      } else {
        var c2m = c1D[c29 + 1 + c1D[c2a + 1 + c1D[c2b + 1 + c1D[c2c + 1]]]] % 32 * 4;
        c04 = (c2l *= c2l) * c2l * (c1E[c2m] * c25 + c1E[c2m + 1] * c26 + c1E[c2m + 2] * c27 + c1E[c2m + 3] * c28);
      }
      return (bZH + bZL + bZR + c03 + c04) * 27;
    }
  };
  bZH._buildPermutationTable = bZL;
  if ((bZG = function () {
    return bZH;
  }.call(exports, require, exports, module)) !== undefined) {
    module.exports = bZG;
  }
  exports.SimplexNoise = bZH;
  module.exports = bZH;
})();