var bo2 = require("./27.js").Buffer;
(function (bo3) {
  function bo4(bo2, bo4, boa) {
    function bob(bo2, bo3, bo4, bof) {
      if (this instanceof bob) {
        return function (bo2, bo3, bo4, bof, bok) {
          if (bpQ && bpR) {
            if (bo3 instanceof bpR) {
              bo3 = new bpQ(bo3);
            }
            if (bof instanceof bpR) {
              bof = new bpQ(bof);
            }
          }
          if (!bo3 && !bo4 && !bof && !bpO) {
            bo2.buffer = bpr(bpS, 0);
            return;
          }
          if (!bph(bo3, bo4)) {
            var bol = bpO || Array;
            bok = bo4;
            bof = bo3;
            bo4 = 0;
            bo3 = new bol(8);
          }
          bo2.buffer = bo3;
          bo2.offset = bo4 |= 0;
          if (bof !== undefined) {
            if (typeof bof == "string") {
              (function (bo2, bo3, bo4, bof) {
                var bok = 0;
                var bol = bo4.length;
                var bos = 0;
                var bot = 0;
                if (bo4[0] === "-") {
                  bok++;
                }
                for (var bou, bov = bok; bok < bol && (bou = parseInt(bo4[bok++], bof)) >= 0;) {
                  bot = bot * bof + bou;
                  bos = bos * bof + Math.floor(bot / 4294967296);
                  bot %= 4294967296;
                }
                if (bov) {
                  bos = ~bos;
                  if (bot) {
                    bot = 4294967296 - bot;
                  } else {
                    bos++;
                  }
                }
                boB(bo2, bo3 + boI, bos);
                boB(bo2, bo3 + boJ, bot);
              })(bo3, bo4, bof, bok || 10);
            } else if (bph(bof, bok)) {
              bpl(bo3, bo4, bof, bok);
            } else if (typeof bok == "number") {
              boB(bo3, bo4 + boI, bof);
              boB(bo3, bo4 + boJ, bok);
            } else if (bof > 0) {
              boO(bo3, bo4, bof);
            } else if (bof < 0) {
              boP(bo3, bo4, bof);
            } else {
              bpl(bo3, bo4, bpS, 0);
            }
          }
        }(this, bo2, bo3, bo4, bof);
      } else {
        return new bob(bo2, bo3, bo4, bof);
      }
    }
    function bow() {
      var bo2 = this.buffer;
      var bo3 = this.offset;
      var bo4 = boF(bo2, bo3 + boI);
      var boA = boF(bo2, bo3 + boJ);
      if (!boa) {
        bo4 |= 0;
      }
      if (bo4) {
        return bo4 * 4294967296 + boA;
      } else {
        return boA;
      }
    }
    function boB(bo2, bo3, bo4) {
      bo2[bo3 + boN] = bo4 & 255;
      bo4 >>= 8;
      bo2[bo3 + boM] = bo4 & 255;
      bo4 >>= 8;
      bo2[bo3 + boL] = bo4 & 255;
      bo4 >>= 8;
      bo2[bo3 + boK] = bo4 & 255;
    }
    function boF(bo2, bo3) {
      return bo2[bo3 + boK] * 16777216 + (bo2[bo3 + boL] << 16) + (bo2[bo3 + boM] << 8) + bo2[bo3 + boN];
    }
    var boI = bo4 ? 0 : 4;
    var boJ = bo4 ? 4 : 0;
    var boK = bo4 ? 0 : 3;
    var boL = bo4 ? 1 : 2;
    var boM = bo4 ? 2 : 1;
    var boN = bo4 ? 3 : 0;
    var boO = bo4 ? bpu : bpE;
    var boP = bo4 ? bpz : bpJ;
    var boQ = bob.prototype;
    var boR = "is" + bo2;
    var boS = "_" + boR;
    boQ.buffer = undefined;
    boQ.offset = 0;
    boQ[boS] = true;
    boQ.toNumber = bow;
    boQ.toString = function (bo2) {
      var bo3 = this.buffer;
      var bo4 = this.offset;
      var boW = boF(bo3, bo4 + boI);
      var boX = boF(bo3, bo4 + boJ);
      var boY = "";
      var boZ = !boa && boW & 2147483648;
      if (boZ) {
        boW = ~boW;
        boX = 4294967296 - boX;
      }
      bo2 = bo2 || 10;
      while (true) {
        var bp0 = boW % bo2 * 4294967296 + boX;
        boW = Math.floor(boW / bo2);
        boX = Math.floor(bp0 / bo2);
        boY = (bp0 % bo2).toString(bo2) + boY;
        if (!boW && !boX) {
          break;
        }
      }
      if (boZ) {
        boY = "-" + boY;
      }
      return boY;
    };
    boQ.toJSON = bow;
    boQ.toArray = bp2;
    if (bpP) {
      boQ.toBuffer = bp6;
    }
    if (bpQ) {
      boQ.toArrayBuffer = bpb;
    }
    bob[boR] = function (bo2) {
      return !!bo2 && !!bo2[boS];
    };
    bo3[bo2] = bob;
    return bob;
  }
  function bp2(bo2) {
    var bo3 = this.buffer;
    var bo4 = this.offset;
    bpO = null;
    if (bo2 !== false && bo4 === 0 && bo3.length === 8 && bpT(bo3)) {
      return bo3;
    } else {
      return bpr(bo3, bo4);
    }
  }
  function bp6(bo3) {
    var bo4 = this.buffer;
    var bp2 = this.offset;
    bpO = bpP;
    if (bo3 !== false && bp2 === 0 && bo4.length === 8 && bo2.isBuffer(bo4)) {
      return bo4;
    }
    var bp6 = new bpP(8);
    bpl(bp6, 0, bo4, bp2);
    return bp6;
  }
  function bpb(bo2) {
    var bo3 = this.buffer;
    var bo4 = this.offset;
    var bp2 = bo3.buffer;
    bpO = bpQ;
    if (bo2 !== false && bo4 === 0 && bp2 instanceof bpR && bp2.byteLength === 8) {
      return bp2;
    }
    var bp6 = new bpQ(8);
    bpl(bp6, 0, bo3, bo4);
    return bp6.buffer;
  }
  function bph(bo2, bo3) {
    var bo4 = bo2 && bo2.length;
    bo3 |= 0;
    return bo4 && bo3 + 8 <= bo4 && typeof bo2[bo3] != "string";
  }
  function bpl(bo2, bo3, bo4, bp2) {
    bo3 |= 0;
    bp2 |= 0;
    for (var bp6 = 0; bp6 < 8; bp6++) {
      bo2[bo3++] = bo4[bp2++] & 255;
    }
  }
  function bpr(bo2, bo3) {
    return Array.prototype.slice.call(bo2, bo3, bo3 + 8);
  }
  function bpu(bo2, bo3, bo4) {
    for (var bp2 = bo3 + 8; bp2 > bo3;) {
      bo2[--bp2] = bo4 & 255;
      bo4 /= 256;
    }
  }
  function bpz(bo2, bo3, bo4) {
    var bp2 = bo3 + 8;
    for (bo4++; bp2 > bo3;) {
      bo2[--bp2] = -bo4 & 255 ^ 255;
      bo4 /= 256;
    }
  }
  function bpE(bo2, bo3, bo4) {
    for (var bp2 = bo3 + 8; bo3 < bp2;) {
      bo2[bo3++] = bo4 & 255;
      bo4 /= 256;
    }
  }
  function bpJ(bo2, bo3, bo4) {
    var bp2 = bo3 + 8;
    for (bo4++; bo3 < bp2;) {
      bo2[bo3++] = -bo4 & 255 ^ 255;
      bo4 /= 256;
    }
  }
  var bpO;
  var bpP = bo2 !== undefined && bo2;
  var bpQ = typeof Uint8Array != "undefined" && Uint8Array;
  var bpR = typeof ArrayBuffer != "undefined" && ArrayBuffer;
  var bpS = [0, 0, 0, 0, 0, 0, 0, 0];
  var bpT = Array.isArray || function (bo2) {
    return !!bo2 && Object.prototype.toString.call(bo2) == "[object Array]";
  };
  bo4("Uint64BE", true, true);
  bo4("Int64BE", true, false);
  bo4("Uint64LE", false, true);
  bo4("Int64LE", false, false);
})(typeof exports.nodeName != "string" ? exports : this || {});