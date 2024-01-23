var bs1 = require("./21.js");
/*!
* The buffer module from node.js, for the browser.
*
* @author   Feross Aboukhadijeh <feross@feross.org> <http://feross.org>
* @license  MIT
*/
var bs5 = require("./42.js");
var bs6 = require("./17.js");
var bs7 = require("./11.js");
function bs8() {
  if (bsc.TYPED_ARRAY_SUPPORT) {
    return 2147483647;
  } else {
    return 1073741823;
  }
}
function bs9(bs1, bs2) {
  if (bs8() < bs2) {
    throw new RangeError("Invalid typed array length");
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    (bs1 = new Uint8Array(bs2)).__proto__ = bsc.prototype;
  } else {
    if (bs1 === null) {
      bs1 = new bsc(bs2);
    }
    bs1.length = bs2;
  }
  return bs1;
}
function bsc(bs1, bs2, bs3) {
  if (!bsc.TYPED_ARRAY_SUPPORT && !(this instanceof bsc)) {
    return new bsc(bs1, bs2, bs3);
  }
  if (typeof bs1 == "number") {
    if (typeof bs2 == "string") {
      throw new Error("If encoding is specified then the first argument must be a string");
    }
    return bsA(this, bs1);
  }
  return bsg(this, bs1, bs2, bs3);
}
function bsg(bs1, bs2, bs3, bs5) {
  if (typeof bs2 == "number") {
    throw new TypeError("\"value\" argument must not be a number");
  }
  if (typeof ArrayBuffer != "undefined" && bs2 instanceof ArrayBuffer) {
    return function (bs1, bs2, bs3, bs5) {
      bs2.byteLength;
      if (bs3 < 0 || bs2.byteLength < bs3) {
        throw new RangeError("'offset' is out of bounds");
      }
      if (bs2.byteLength < bs3 + (bs5 || 0)) {
        throw new RangeError("'length' is out of bounds");
      }
      bs2 = bs3 === undefined && bs5 === undefined ? new Uint8Array(bs2) : bs5 === undefined ? new Uint8Array(bs2, bs3) : new Uint8Array(bs2, bs3, bs5);
      if (bsc.TYPED_ARRAY_SUPPORT) {
        (bs1 = bs2).__proto__ = bsc.prototype;
      } else {
        bs1 = bsE(bs1, bs2);
      }
      return bs1;
    }(bs1, bs2, bs3, bs5);
  } else if (typeof bs2 == "string") {
    return function (bs1, bs2, bs3) {
      if (typeof bs3 != "string" || bs3 === "") {
        bs3 = "utf8";
      }
      if (!bsc.isEncoding(bs3)) {
        throw new TypeError("\"encoding\" must be a valid string encoding");
      }
      var bs5 = bsL(bs2, bs3) | 0;
      var bs6 = (bs1 = bs9(bs1, bs5)).write(bs2, bs3);
      if (bs6 !== bs5) {
        bs1 = bs1.slice(0, bs6);
      }
      return bs1;
    }(bs1, bs2, bs3);
  } else {
    return function (bs1, bs2) {
      if (bsc.isBuffer(bs2)) {
        var bs3 = bsJ(bs2.length) | 0;
        if ((bs1 = bs9(bs1, bs3)).length === 0) {
          return bs1;
        } else {
          bs2.copy(bs1, 0, 0, bs3);
          return bs1;
        }
      }
      if (bs2) {
        if (typeof ArrayBuffer != "undefined" && bs2.buffer instanceof ArrayBuffer || "length" in bs2) {
          if (typeof bs2.length != "number" || function (bs1) {
            return bs1 != bs1;
          }(bs2.length)) {
            return bs9(bs1, 0);
          } else {
            return bsE(bs1, bs2);
          }
        }
        if (bs2.type === "Buffer" && bs7(bs2.data)) {
          return bsE(bs1, bs2.data);
        }
      }
      throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
    }(bs1, bs2);
  }
}
function bsy(bs1) {
  if (typeof bs1 != "number") {
    throw new TypeError("\"size\" argument must be a number");
  }
  if (bs1 < 0) {
    throw new RangeError("\"size\" argument must not be negative");
  }
}
function bsA(bs1, bs2) {
  bsy(bs2);
  bs1 = bs9(bs1, bs2 < 0 ? 0 : bsJ(bs2) | 0);
  if (!bsc.TYPED_ARRAY_SUPPORT) {
    for (var bs3 = 0; bs3 < bs2; ++bs3) {
      bs1[bs3] = 0;
    }
  }
  return bs1;
}
function bsE(bs1, bs2) {
  var bs3 = bs2.length < 0 ? 0 : bsJ(bs2.length) | 0;
  bs1 = bs9(bs1, bs3);
  for (var bs5 = 0; bs5 < bs3; bs5 += 1) {
    bs1[bs5] = bs2[bs5] & 255;
  }
  return bs1;
}
function bsJ(bs1) {
  if (bs1 >= bs8()) {
    throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + bs8().toString(16) + " bytes");
  }
  return bs1 | 0;
}
function bsL(bs1, bs2) {
  if (bsc.isBuffer(bs1)) {
    return bs1.length;
  }
  if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(bs1) || bs1 instanceof ArrayBuffer)) {
    return bs1.byteLength;
  }
  if (typeof bs1 != "string") {
    bs1 = "" + bs1;
  }
  var bs3 = bs1.length;
  if (bs3 === 0) {
    return 0;
  }
  for (var bs5 = false;;) {
    switch (bs2) {
      case "ascii":
      case "latin1":
      case "binary":
        return bs3;
      case "utf8":
      case "utf-8":
      case undefined:
        return byV(bs1).length;
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return bs3 * 2;
      case "hex":
        return bs3 >>> 1;
      case "base64":
        return bz3(bs1).length;
      default:
        if (bs5) {
          return byV(bs1).length;
        }
        bs2 = ("" + bs2).toLowerCase();
        bs5 = true;
    }
  }
}
function bsQ(bs1, bs2, bs3) {
  var bs5 = bs1[bs2];
  bs1[bs2] = bs1[bs3];
  bs1[bs3] = bs5;
}
function bsV(bs1, bs2, bs3, bs5, bs6) {
  if (bs1.length === 0) {
    return -1;
  }
  if (typeof bs3 == "string") {
    bs5 = bs3;
    bs3 = 0;
  } else if (bs3 > 2147483647) {
    bs3 = 2147483647;
  } else if (bs3 < -2147483648) {
    bs3 = -2147483648;
  }
  bs3 = +bs3;
  if (isNaN(bs3)) {
    bs3 = bs6 ? 0 : bs1.length - 1;
  }
  if (bs3 < 0) {
    bs3 = bs1.length + bs3;
  }
  if (bs3 >= bs1.length) {
    if (bs6) {
      return -1;
    }
    bs3 = bs1.length - 1;
  } else if (bs3 < 0) {
    if (!bs6) {
      return -1;
    }
    bs3 = 0;
  }
  if (typeof bs2 == "string") {
    bs2 = bsc.from(bs2, bs5);
  }
  if (bsc.isBuffer(bs2)) {
    if (bs2.length === 0) {
      return -1;
    } else {
      return bt1(bs1, bs2, bs3, bs5, bs6);
    }
  }
  if (typeof bs2 == "number") {
    bs2 &= 255;
    if (bsc.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function") {
      if (bs6) {
        return Uint8Array.prototype.indexOf.call(bs1, bs2, bs3);
      } else {
        return Uint8Array.prototype.lastIndexOf.call(bs1, bs2, bs3);
      }
    } else {
      return bt1(bs1, [bs2], bs3, bs5, bs6);
    }
  }
  throw new TypeError("val must be string, number or Buffer");
}
function bt1(bs1, bs2, bs3, bs5, bs6) {
  function bs7(bs1, bs2) {
    if (bs9 === 1) {
      return bs1[bs2];
    } else {
      return bs1.readUInt16BE(bs2 * bs9);
    }
  }
  var bs8;
  var bs9 = 1;
  var bsc = bs1.length;
  var bsg = bs2.length;
  if (bs5 !== undefined && ((bs5 = (bs5 + "").toLowerCase()) === "ucs2" || bs5 === "ucs-2" || bs5 === "utf16le" || bs5 === "utf-16le")) {
    if (bs1.length < 2 || bs2.length < 2) {
      return -1;
    }
    bs9 = 2;
    bsc /= 2;
    bsg /= 2;
    bs3 /= 2;
  }
  if (bs6) {
    var bsy = -1;
    for (bs8 = bs3; bs8 < bsc; bs8++) {
      if (bs7(bs1, bs8) !== bs7(bs2, bsy === -1 ? 0 : bs8 - bsy)) {
        if (bsy !== -1) {
          bs8 -= bs8 - bsy;
        }
        bsy = -1;
      } else {
        if (bsy === -1) {
          bsy = bs8;
        }
        if (bs8 - bsy + 1 === bsg) {
          return bsy * bs9;
        }
      }
    }
  } else {
    if (bs3 + bsg > bsc) {
      bs3 = bsc - bsg;
    }
    bs8 = bs3;
    if (bs3 + bsg > bsc) {
      bs3 = bsc - bsg;
    }
    bs8 = bs3;
    for (; bs8 >= 0; bs8--) {
      for (var bsA = true, bsE = 0; bsE < bsg; bsE++) {
        if (bs7(bs1, bs8 + bsE) !== bs7(bs2, bsE)) {
          bsA = false;
          break;
        }
      }
      if (bsA) {
        return bs8;
      }
    }
  }
  return -1;
}
function bth(bs1, bs2, bs3, bs5) {
  bs3 = +bs3 || 0;
  var bs6 = bs1.length - bs3;
  if (bs5) {
    if ((bs5 = +bs5) > bs6) {
      bs5 = bs6;
    }
  } else {
    bs5 = bs6;
  }
  var bs7 = bs2.length;
  if (bs7 % 2 != 0) {
    throw new TypeError("Invalid hex string");
  }
  if (bs5 > bs7 / 2) {
    bs5 = bs7 / 2;
  }
  for (var bs8, bs9 = 0; bs9 < bs5; ++bs9) {
    bs8 = parseInt(bs2.substr(bs9 * 2, 2), 16);
    if (isNaN(bs8)) {
      return bs9;
    }
    bs1[bs3 + bs9] = bs8;
  }
  return bs9;
}
function btq(bs1, bs2, bs3, bs5) {
  return bz7(byV(bs2, bs1.length - bs3), bs1, bs3, bs5);
}
function btv(bs1, bs2, bs3, bs5) {
  return bz7(function (bs1) {
    for (var bs2 = [], bs3 = 0; bs3 < bs1.length; ++bs3) {
      bs2.push(bs1.charCodeAt(bs3) & 255);
    }
    return bs2;
  }(bs2), bs1, bs3, bs5);
}
function btD(bs1, bs2, bs3, bs5) {
  return btv(bs1, bs2, bs3, bs5);
}
function btI(bs1, bs2, bs3, bs5) {
  return bz7(bz3(bs2), bs1, bs3, bs5);
}
function btN(bs1, bs2, bs3, bs5) {
  return bz7(function (bs1, bs2) {
    for (var bs3, bs5, bs6, bs7 = [], bs8 = 0; bs8 < bs1.length && (bs2 -= 2) >= 0; ++bs8) {
      bs3 = bs1.charCodeAt(bs8);
      bs5 = bs3 >> 8;
      bs6 = bs3 % 256;
      bs7.push(bs6);
      bs7.push(bs5);
    }
    return bs7;
  }(bs2, bs1.length - bs3), bs1, bs3, bs5);
}
function btZ(bs1, bs2, bs3) {
  if (bs2 === 0 && bs3 === bs1.length) {
    return bs5.fromByteArray(bs1);
  } else {
    return bs5.fromByteArray(bs1.slice(bs2, bs3));
  }
}
function bu3(bs1, bs2, bs3) {
  bs3 = Math.min(bs1.length, bs3);
  for (var bs5 = [], bs6 = bs2; bs6 < bs3;) {
    var bs7;
    var bs8;
    var bs9;
    var bsc;
    var bsg = bs1[bs6];
    var bsy = null;
    var bsA = bsg > 239 ? 4 : bsg > 223 ? 3 : bsg > 191 ? 2 : 1;
    if (bs6 + bsA <= bs3) {
      if (bsA === 1) {
        if (bsg < 128) {
          bsy = bsg;
        }
      } else if (bsA === 2) {
        if (((bs7 = bs1[bs6 + 1]) & 192) == 128) {
          if ((bsc = (bsg & 31) << 6 | bs7 & 63) > 127) {
            bsy = bsc;
          }
        }
      } else if (bsA === 3) {
        bs7 = bs1[bs6 + 1];
        bs8 = bs1[bs6 + 2];
        if ((bs7 & 192) == 128 && (bs8 & 192) == 128) {
          if ((bsc = (bsg & 15) << 12 | (bs7 & 63) << 6 | bs8 & 63) > 2047 && (bsc < 55296 || bsc > 57343)) {
            bsy = bsc;
          }
        }
      } else if (bsA === 4) {
        bs7 = bs1[bs6 + 1];
        bs8 = bs1[bs6 + 2];
        bs9 = bs1[bs6 + 3];
        if ((bs7 & 192) == 128 && (bs8 & 192) == 128 && (bs9 & 192) == 128) {
          if ((bsc = (bsg & 15) << 18 | (bs7 & 63) << 12 | (bs8 & 63) << 6 | bs9 & 63) > 65535 && bsc < 1114112) {
            bsy = bsc;
          }
        }
      }
    }
    if (bsy === null) {
      bsy = 65533;
      bsA = 1;
    } else if (bsy > 65535) {
      bsy -= 65536;
      bs5.push(bsy >>> 10 & 1023 | 55296);
      bsy = bsy & 1023 | 56320;
    }
    bs5.push(bsy);
    bs6 += bsA;
  }
  return function (bs1) {
    var bs2 = bs1.length;
    if (bs2 <= bvs) {
      return String.fromCharCode.apply(String, bs1);
    }
    for (var bs3 = "", bs5 = 0; bs5 < bs2;) {
      bs3 += String.fromCharCode.apply(String, bs1.slice(bs5, bs5 += bvs));
    }
    return bs3;
  }(bs5);
}
exports.Buffer = bsc;
exports.SlowBuffer = function (bs1) {
  if (+bs1 != bs1) {
    bs1 = 0;
  }
  return bsc.alloc(+bs1);
};
exports.INSPECT_MAX_BYTES = 50;
bsc.TYPED_ARRAY_SUPPORT = bs1.TYPED_ARRAY_SUPPORT === undefined ? function () {
  try {
    var bs1 = new Uint8Array(1);
    bs1.__proto__ = {
      "__proto__": Uint8Array.prototype,
      foo: function () {
        return 42;
      }
    };
    return bs1.foo() === 42 && typeof bs1.subarray == "function" && bs1.subarray(1, 1).byteLength === 0;
  } catch (bum) {
    return false;
  }
}() : bs1.TYPED_ARRAY_SUPPORT;
exports.kMaxLength = bs8();
bsc.poolSize = 8192;
bsc._augment = function (bs1) {
  bs1.__proto__ = bsc.prototype;
  return bs1;
};
bsc.from = function (bs1, bs2, bs3) {
  return bsg(null, bs1, bs2, bs3);
};
if (bsc.TYPED_ARRAY_SUPPORT) {
  bsc.prototype.__proto__ = Uint8Array.prototype;
  bsc.__proto__ = Uint8Array;
  if (typeof Symbol != "undefined" && Symbol.species && bsc[Symbol.species] === bsc) {
    Object.defineProperty(bsc, Symbol.species, {
      value: null,
      configurable: true
    });
  }
}
bsc.alloc = function (bs1, bs2, bs3) {
  return function (bs1, bs2, bs3, bs5) {
    bsy(bs2);
    if (bs2 <= 0) {
      return bs9(bs1, bs2);
    } else if (bs3 === undefined) {
      return bs9(bs1, bs2);
    } else if (typeof bs5 == "string") {
      return bs9(bs1, bs2).fill(bs3, bs5);
    } else {
      return bs9(bs1, bs2).fill(bs3);
    }
  }(null, bs1, bs2, bs3);
};
bsc.allocUnsafe = function (bs1) {
  return bsA(null, bs1);
};
bsc.allocUnsafeSlow = function (bs1) {
  return bsA(null, bs1);
};
bsc.isBuffer = function (bs1) {
  return bs1 != null && !!bs1._isBuffer;
};
bsc.compare = function (bs1, bs2) {
  if (!bsc.isBuffer(bs1) || !bsc.isBuffer(bs2)) {
    throw new TypeError("Arguments must be Buffers");
  }
  if (bs1 === bs2) {
    return 0;
  }
  for (var bs3 = bs1.length, bs5 = bs2.length, bs6 = 0, bs7 = Math.min(bs3, bs5); bs6 < bs7; ++bs6) {
    if (bs1[bs6] !== bs2[bs6]) {
      bs3 = bs1[bs6];
      bs5 = bs2[bs6];
      break;
    }
  }
  if (bs3 < bs5) {
    return -1;
  } else if (bs5 < bs3) {
    return 1;
  } else {
    return 0;
  }
};
bsc.isEncoding = function (bs1) {
  switch ((bs1 + "").toLowerCase()) {
    case "hex":
    case "utf8":
    case "utf-8":
    case "ascii":
    case "latin1":
    case "binary":
    case "base64":
    case "ucs2":
    case "ucs-2":
    case "utf16le":
    case "utf-16le":
      return true;
    default:
      return false;
  }
};
bsc.concat = function (bs1, bs2) {
  if (!bs7(bs1)) {
    throw new TypeError("\"list\" argument must be an Array of Buffers");
  }
  if (bs1.length === 0) {
    return bsc.alloc(0);
  }
  var bs3;
  if (bs2 === undefined) {
    bs2 = 0;
    bs3 = 0;
    bs2 = 0;
    bs3 = 0;
    for (; bs3 < bs1.length; ++bs3) {
      bs2 += bs1[bs3].length;
    }
  }
  var bs5 = bsc.allocUnsafe(bs2);
  var bs6 = 0;
  for (bs3 = 0; bs3 < bs1.length; ++bs3) {
    var bs8 = bs1[bs3];
    if (!bsc.isBuffer(bs8)) {
      throw new TypeError("\"list\" argument must be an Array of Buffers");
    }
    bs8.copy(bs5, bs6);
    bs6 += bs8.length;
  }
  return bs5;
};
bsc.byteLength = bsL;
bsc.prototype._isBuffer = true;
bsc.prototype.swap16 = function () {
  var bs1 = this.length;
  if (bs1 % 2 != 0) {
    throw new RangeError("Buffer size must be a multiple of 16-bits");
  }
  for (var bs2 = 0; bs2 < bs1; bs2 += 2) {
    bsQ(this, bs2, bs2 + 1);
  }
  return this;
};
bsc.prototype.swap32 = function () {
  var bs1 = this.length;
  if (bs1 % 4 != 0) {
    throw new RangeError("Buffer size must be a multiple of 32-bits");
  }
  for (var bs2 = 0; bs2 < bs1; bs2 += 4) {
    bsQ(this, bs2, bs2 + 3);
    bsQ(this, bs2 + 1, bs2 + 2);
  }
  return this;
};
bsc.prototype.swap64 = function () {
  var bs1 = this.length;
  if (bs1 % 8 != 0) {
    throw new RangeError("Buffer size must be a multiple of 64-bits");
  }
  for (var bs2 = 0; bs2 < bs1; bs2 += 8) {
    bsQ(this, bs2, bs2 + 7);
    bsQ(this, bs2 + 1, bs2 + 6);
    bsQ(this, bs2 + 2, bs2 + 5);
    bsQ(this, bs2 + 3, bs2 + 4);
  }
  return this;
};
bsc.prototype.toString = function () {
  var bs1 = this.length | 0;
  if (bs1 == 0) {
    return "";
  } else if (arguments.length === 0) {
    return bu3(this, 0, bs1);
  } else {
    return function (bs1, bs2, bs3) {
      var bs5 = false;
      if (bs2 === undefined || bs2 < 0) {
        bs2 = 0;
      }
      if (bs2 > this.length) {
        return "";
      }
      if (bs3 === undefined || bs3 > this.length) {
        bs3 = this.length;
      }
      if (bs3 <= 0) {
        return "";
      }
      if ((bs3 >>>= 0) <= (bs2 >>>= 0)) {
        return "";
      }
      for (bs1 ||= "utf8";;) {
        switch (bs1) {
          case "hex":
            return bvF(this, bs2, bs3);
          case "utf8":
          case "utf-8":
            return bu3(this, bs2, bs3);
          case "ascii":
            return bvt(this, bs2, bs3);
          case "latin1":
          case "binary":
            return bvz(this, bs2, bs3);
          case "base64":
            return btZ(this, bs2, bs3);
          case "ucs2":
          case "ucs-2":
          case "utf16le":
          case "utf-16le":
            return bvM(this, bs2, bs3);
          default:
            if (bs5) {
              throw new TypeError("Unknown encoding: " + bs1);
            }
            bs1 = (bs1 + "").toLowerCase();
            bs5 = true;
        }
      }
    }.apply(this, arguments);
  }
};
bsc.prototype.equals = function (bs1) {
  if (!bsc.isBuffer(bs1)) {
    throw new TypeError("Argument must be a Buffer");
  }
  return this === bs1 || bsc.compare(this, bs1) === 0;
};
bsc.prototype.inspect = function () {
  var bs1 = "";
  var bs3 = exports.INSPECT_MAX_BYTES;
  if (this.length > 0) {
    bs1 = this.toString("hex", 0, bs3).match(/.{2}/g).join(" ");
    if (this.length > bs3) {
      bs1 += " ... ";
    }
  }
  return "<Buffer " + bs1 + ">";
};
bsc.prototype.compare = function (bs1, bs2, bs3, bs5, bs6) {
  if (!bsc.isBuffer(bs1)) {
    throw new TypeError("Argument must be a Buffer");
  }
  if (bs2 === undefined) {
    bs2 = 0;
  }
  if (bs3 === undefined) {
    bs3 = bs1 ? bs1.length : 0;
  }
  if (bs5 === undefined) {
    bs5 = 0;
  }
  if (bs6 === undefined) {
    bs6 = this.length;
  }
  if (bs2 < 0 || bs3 > bs1.length || bs5 < 0 || bs6 > this.length) {
    throw new RangeError("out of range index");
  }
  if (bs5 >= bs6 && bs2 >= bs3) {
    return 0;
  }
  if (bs5 >= bs6) {
    return -1;
  }
  if (bs2 >= bs3) {
    return 1;
  }
  if (this === bs1) {
    return 0;
  }
  for (var bs7 = (bs6 >>>= 0) - (bs5 >>>= 0), bs8 = (bs3 >>>= 0) - (bs2 >>>= 0), bs9 = Math.min(bs7, bs8), bsg = this.slice(bs5, bs6), bsy = bs1.slice(bs2, bs3), bsA = 0; bsA < bs9; ++bsA) {
    if (bsg[bsA] !== bsy[bsA]) {
      bs7 = bsg[bsA];
      bs8 = bsy[bsA];
      break;
    }
  }
  if (bs7 < bs8) {
    return -1;
  } else if (bs8 < bs7) {
    return 1;
  } else {
    return 0;
  }
};
bsc.prototype.includes = function (bs1, bs2, bs3) {
  return this.indexOf(bs1, bs2, bs3) !== -1;
};
bsc.prototype.indexOf = function (bs1, bs2, bs3) {
  return bsV(this, bs1, bs2, bs3, true);
};
bsc.prototype.lastIndexOf = function (bs1, bs2, bs3) {
  return bsV(this, bs1, bs2, bs3, false);
};
bsc.prototype.write = function (bs1, bs2, bs3, bs5) {
  if (bs2 === undefined) {
    bs5 = "utf8";
    bs3 = this.length;
    bs2 = 0;
  } else if (bs3 === undefined && typeof bs2 == "string") {
    bs5 = bs2;
    bs3 = this.length;
    bs2 = 0;
  } else {
    if (!isFinite(bs2)) {
      throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
    }
    bs2 |= 0;
    if (isFinite(bs3)) {
      bs3 |= 0;
      if (bs5 === undefined) {
        bs5 = "utf8";
      }
    } else {
      bs5 = bs3;
      bs3 = undefined;
    }
  }
  var bs6 = this.length - bs2;
  if (bs3 === undefined || bs3 > bs6) {
    bs3 = bs6;
  }
  if (bs1.length > 0 && (bs3 < 0 || bs2 < 0) || bs2 > this.length) {
    throw new RangeError("Attempt to write outside buffer bounds");
  }
  bs5 ||= "utf8";
  for (var bs7 = false;;) {
    switch (bs5) {
      case "hex":
        return bth(this, bs1, bs2, bs3);
      case "utf8":
      case "utf-8":
        return btq(this, bs1, bs2, bs3);
      case "ascii":
        return btv(this, bs1, bs2, bs3);
      case "latin1":
      case "binary":
        return btD(this, bs1, bs2, bs3);
      case "base64":
        return btI(this, bs1, bs2, bs3);
      case "ucs2":
      case "ucs-2":
      case "utf16le":
      case "utf-16le":
        return btN(this, bs1, bs2, bs3);
      default:
        if (bs7) {
          throw new TypeError("Unknown encoding: " + bs5);
        }
        bs5 = ("" + bs5).toLowerCase();
        bs7 = true;
    }
  }
};
bsc.prototype.toJSON = function () {
  return {
    type: "Buffer",
    data: Array.prototype.slice.call(this._arr || this, 0)
  };
};
var bvs = 4096;
function bvt(bs1, bs2, bs3) {
  var bs5 = "";
  bs3 = Math.min(bs1.length, bs3);
  for (var bs6 = bs2; bs6 < bs3; ++bs6) {
    bs5 += String.fromCharCode(bs1[bs6] & 127);
  }
  return bs5;
}
function bvz(bs1, bs2, bs3) {
  var bs5 = "";
  bs3 = Math.min(bs1.length, bs3);
  for (var bs6 = bs2; bs6 < bs3; ++bs6) {
    bs5 += String.fromCharCode(bs1[bs6]);
  }
  return bs5;
}
function bvF(bs1, bs2, bs3) {
  var bs5 = bs1.length;
  if (!bs2 || bs2 < 0) {
    bs2 = 0;
  }
  if (!bs3 || bs3 < 0 || bs3 > bs5) {
    bs3 = bs5;
  }
  for (var bs6 = "", bs7 = bs2; bs7 < bs3; ++bs7) {
    bs6 += byT(bs1[bs7]);
  }
  return bs6;
}
function bvM(bs1, bs2, bs3) {
  for (var bs5 = bs1.slice(bs2, bs3), bs6 = "", bs7 = 0; bs7 < bs5.length; bs7 += 2) {
    bs6 += String.fromCharCode(bs5[bs7] + bs5[bs7 + 1] * 256);
  }
  return bs6;
}
function bvT(bs1, bs2, bs3) {
  if (bs1 % 1 != 0 || bs1 < 0) {
    throw new RangeError("offset is not uint");
  }
  if (bs1 + bs2 > bs3) {
    throw new RangeError("Trying to access beyond buffer length");
  }
}
function bvX(bs1, bs2, bs3, bs5, bs6, bs7) {
  if (!bsc.isBuffer(bs1)) {
    throw new TypeError("\"buffer\" argument must be a Buffer instance");
  }
  if (bs2 > bs6 || bs2 < bs7) {
    throw new RangeError("\"value\" argument is out of bounds");
  }
  if (bs3 + bs5 > bs1.length) {
    throw new RangeError("Index out of range");
  }
}
function bw4(bs1, bs2, bs3, bs5) {
  if (bs2 < 0) {
    bs2 = 65535 + bs2 + 1;
  }
  for (var bs6 = 0, bs7 = Math.min(bs1.length - bs3, 2); bs6 < bs7; ++bs6) {
    bs1[bs3 + bs6] = (bs2 & 255 << (bs5 ? bs6 : 1 - bs6) * 8) >>> (bs5 ? bs6 : 1 - bs6) * 8;
  }
}
function bwb(bs1, bs2, bs3, bs5) {
  if (bs2 < 0) {
    bs2 = 4294967295 + bs2 + 1;
  }
  for (var bs6 = 0, bs7 = Math.min(bs1.length - bs3, 4); bs6 < bs7; ++bs6) {
    bs1[bs3 + bs6] = bs2 >>> (bs5 ? bs6 : 3 - bs6) * 8 & 255;
  }
}
function bwi(bs1, bs2, bs3, bs5) {
  if (bs3 + bs5 > bs1.length) {
    throw new RangeError("Index out of range");
  }
  if (bs3 < 0) {
    throw new RangeError("Index out of range");
  }
}
function bwn(bs1, bs2, bs3, bs5, bs7) {
  if (!bs7) {
    bwi(bs1, 0, bs3, 4);
  }
  bs6.write(bs1, bs2, bs3, bs5, 23, 4);
  return bs3 + 4;
}
function bwt(bs1, bs2, bs3, bs5, bs7) {
  if (!bs7) {
    bwi(bs1, 0, bs3, 8);
  }
  bs6.write(bs1, bs2, bs3, bs5, 52, 8);
  return bs3 + 8;
}
bsc.prototype.slice = function (bs1, bs2) {
  var bs3;
  var bs5 = this.length;
  if ((bs1 = ~~bs1) < 0) {
    if ((bs1 += bs5) < 0) {
      bs1 = 0;
    }
  } else if (bs1 > bs5) {
    bs1 = bs5;
  }
  if ((bs2 = bs2 === undefined ? bs5 : ~~bs2) < 0) {
    if ((bs2 += bs5) < 0) {
      bs2 = 0;
    }
  } else if (bs2 > bs5) {
    bs2 = bs5;
  }
  if (bs2 < bs1) {
    bs2 = bs1;
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    (bs3 = this.subarray(bs1, bs2)).__proto__ = bsc.prototype;
  } else {
    var bs6 = bs2 - bs1;
    bs3 = new bsc(bs6, undefined);
    for (var bs7 = 0; bs7 < bs6; ++bs7) {
      bs3[bs7] = this[bs7 + bs1];
    }
  }
  return bs3;
};
bsc.prototype.readUIntLE = function (bs1, bs2, bs3) {
  bs1 |= 0;
  bs2 |= 0;
  if (!bs3) {
    bvT(bs1, bs2, this.length);
  }
  for (var bs5 = this[bs1], bs6 = 1, bs7 = 0; ++bs7 < bs2 && (bs6 *= 256);) {
    bs5 += this[bs1 + bs7] * bs6;
  }
  return bs5;
};
bsc.prototype.readUIntBE = function (bs1, bs2, bs3) {
  bs1 |= 0;
  bs2 |= 0;
  if (!bs3) {
    bvT(bs1, bs2, this.length);
  }
  for (var bs5 = this[bs1 + --bs2], bs6 = 1; bs2 > 0 && (bs6 *= 256);) {
    bs5 += this[bs1 + --bs2] * bs6;
  }
  return bs5;
};
bsc.prototype.readUInt8 = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 1, this.length);
  }
  return this[bs1];
};
bsc.prototype.readUInt16LE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 2, this.length);
  }
  return this[bs1] | this[bs1 + 1] << 8;
};
bsc.prototype.readUInt16BE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 2, this.length);
  }
  return this[bs1] << 8 | this[bs1 + 1];
};
bsc.prototype.readUInt32LE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return (this[bs1] | this[bs1 + 1] << 8 | this[bs1 + 2] << 16) + this[bs1 + 3] * 16777216;
};
bsc.prototype.readUInt32BE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return this[bs1] * 16777216 + (this[bs1 + 1] << 16 | this[bs1 + 2] << 8 | this[bs1 + 3]);
};
bsc.prototype.readIntLE = function (bs1, bs2, bs3) {
  bs1 |= 0;
  bs2 |= 0;
  if (!bs3) {
    bvT(bs1, bs2, this.length);
  }
  for (var bs5 = this[bs1], bs6 = 1, bs7 = 0; ++bs7 < bs2 && (bs6 *= 256);) {
    bs5 += this[bs1 + bs7] * bs6;
  }
  if (bs5 >= (bs6 *= 128)) {
    bs5 -= Math.pow(2, bs2 * 8);
  }
  return bs5;
};
bsc.prototype.readIntBE = function (bs1, bs2, bs3) {
  bs1 |= 0;
  bs2 |= 0;
  if (!bs3) {
    bvT(bs1, bs2, this.length);
  }
  for (var bs5 = bs2, bs6 = 1, bs7 = this[bs1 + --bs5]; bs5 > 0 && (bs6 *= 256);) {
    bs7 += this[bs1 + --bs5] * bs6;
  }
  if (bs7 >= (bs6 *= 128)) {
    bs7 -= Math.pow(2, bs2 * 8);
  }
  return bs7;
};
bsc.prototype.readInt8 = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 1, this.length);
  }
  if (this[bs1] & 128) {
    return (255 - this[bs1] + 1) * -1;
  } else {
    return this[bs1];
  }
};
bsc.prototype.readInt16LE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 2, this.length);
  }
  var bs3 = this[bs1] | this[bs1 + 1] << 8;
  if (bs3 & 32768) {
    return bs3 | 4294901760;
  } else {
    return bs3;
  }
};
bsc.prototype.readInt16BE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 2, this.length);
  }
  var bs3 = this[bs1 + 1] | this[bs1] << 8;
  if (bs3 & 32768) {
    return bs3 | 4294901760;
  } else {
    return bs3;
  }
};
bsc.prototype.readInt32LE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return this[bs1] | this[bs1 + 1] << 8 | this[bs1 + 2] << 16 | this[bs1 + 3] << 24;
};
bsc.prototype.readInt32BE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return this[bs1] << 24 | this[bs1 + 1] << 16 | this[bs1 + 2] << 8 | this[bs1 + 3];
};
bsc.prototype.readFloatLE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return bs6.read(this, bs1, true, 23, 4);
};
bsc.prototype.readFloatBE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 4, this.length);
  }
  return bs6.read(this, bs1, false, 23, 4);
};
bsc.prototype.readDoubleLE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 8, this.length);
  }
  return bs6.read(this, bs1, true, 52, 8);
};
bsc.prototype.readDoubleBE = function (bs1, bs2) {
  if (!bs2) {
    bvT(bs1, 8, this.length);
  }
  return bs6.read(this, bs1, false, 52, 8);
};
bsc.prototype.writeUIntLE = function (bs1, bs2, bs3, bs5) {
  if (!(bs1 = +bs1, bs2 |= 0, bs3 |= 0, bs5)) {
    bvX(this, bs1, bs2, bs3, Math.pow(2, bs3 * 8) - 1, 0);
  }
  var bs6 = 1;
  var bs7 = 0;
  for (this[bs2] = bs1 & 255; ++bs7 < bs3 && (bs6 *= 256);) {
    this[bs2 + bs7] = bs1 / bs6 & 255;
  }
  return bs2 + bs3;
};
bsc.prototype.writeUIntBE = function (bs1, bs2, bs3, bs5) {
  if (!(bs1 = +bs1, bs2 |= 0, bs3 |= 0, bs5)) {
    bvX(this, bs1, bs2, bs3, Math.pow(2, bs3 * 8) - 1, 0);
  }
  var bs6 = bs3 - 1;
  var bs7 = 1;
  for (this[bs2 + bs6] = bs1 & 255; --bs6 >= 0 && (bs7 *= 256);) {
    this[bs2 + bs6] = bs1 / bs7 & 255;
  }
  return bs2 + bs3;
};
bsc.prototype.writeUInt8 = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 1, 255, 0);
  }
  if (!bsc.TYPED_ARRAY_SUPPORT) {
    bs1 = Math.floor(bs1);
  }
  this[bs2] = bs1 & 255;
  return bs2 + 1;
};
bsc.prototype.writeUInt16LE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 2, 65535, 0);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 & 255;
    this[bs2 + 1] = bs1 >>> 8;
  } else {
    bw4(this, bs1, bs2, true);
  }
  return bs2 + 2;
};
bsc.prototype.writeUInt16BE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 2, 65535, 0);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 >>> 8;
    this[bs2 + 1] = bs1 & 255;
  } else {
    bw4(this, bs1, bs2, false);
  }
  return bs2 + 2;
};
bsc.prototype.writeUInt32LE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 4, 4294967295, 0);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2 + 3] = bs1 >>> 24;
    this[bs2 + 2] = bs1 >>> 16;
    this[bs2 + 1] = bs1 >>> 8;
    this[bs2] = bs1 & 255;
  } else {
    bwb(this, bs1, bs2, true);
  }
  return bs2 + 4;
};
bsc.prototype.writeUInt32BE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 4, 4294967295, 0);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 >>> 24;
    this[bs2 + 1] = bs1 >>> 16;
    this[bs2 + 2] = bs1 >>> 8;
    this[bs2 + 3] = bs1 & 255;
  } else {
    bwb(this, bs1, bs2, false);
  }
  return bs2 + 4;
};
bsc.prototype.writeIntLE = function (bs1, bs2, bs3, bs5) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs5) {
    var bs6 = Math.pow(2, bs3 * 8 - 1);
    bvX(this, bs1, bs2, bs3, bs6 - 1, -bs6);
  }
  var bs7 = 0;
  var bs8 = 1;
  var bs9 = 0;
  for (this[bs2] = bs1 & 255; ++bs7 < bs3 && (bs8 *= 256);) {
    if (bs1 < 0 && bs9 === 0 && this[bs2 + bs7 - 1] !== 0) {
      bs9 = 1;
    }
    this[bs2 + bs7] = (bs1 / bs8 >> 0) - bs9 & 255;
  }
  return bs2 + bs3;
};
bsc.prototype.writeIntBE = function (bs1, bs2, bs3, bs5) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs5) {
    var bs6 = Math.pow(2, bs3 * 8 - 1);
    bvX(this, bs1, bs2, bs3, bs6 - 1, -bs6);
  }
  var bs7 = bs3 - 1;
  var bs8 = 1;
  var bs9 = 0;
  for (this[bs2 + bs7] = bs1 & 255; --bs7 >= 0 && (bs8 *= 256);) {
    if (bs1 < 0 && bs9 === 0 && this[bs2 + bs7 + 1] !== 0) {
      bs9 = 1;
    }
    this[bs2 + bs7] = (bs1 / bs8 >> 0) - bs9 & 255;
  }
  return bs2 + bs3;
};
bsc.prototype.writeInt8 = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 1, 127, -128);
  }
  if (!bsc.TYPED_ARRAY_SUPPORT) {
    bs1 = Math.floor(bs1);
  }
  if (bs1 < 0) {
    bs1 = 255 + bs1 + 1;
  }
  this[bs2] = bs1 & 255;
  return bs2 + 1;
};
bsc.prototype.writeInt16LE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 2, 32767, -32768);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 & 255;
    this[bs2 + 1] = bs1 >>> 8;
  } else {
    bw4(this, bs1, bs2, true);
  }
  return bs2 + 2;
};
bsc.prototype.writeInt16BE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 2, 32767, -32768);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 >>> 8;
    this[bs2 + 1] = bs1 & 255;
  } else {
    bw4(this, bs1, bs2, false);
  }
  return bs2 + 2;
};
bsc.prototype.writeInt32LE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 4, 2147483647, -2147483648);
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 & 255;
    this[bs2 + 1] = bs1 >>> 8;
    this[bs2 + 2] = bs1 >>> 16;
    this[bs2 + 3] = bs1 >>> 24;
  } else {
    bwb(this, bs1, bs2, true);
  }
  return bs2 + 4;
};
bsc.prototype.writeInt32BE = function (bs1, bs2, bs3) {
  bs1 = +bs1;
  bs2 |= 0;
  if (!bs3) {
    bvX(this, bs1, bs2, 4, 2147483647, -2147483648);
  }
  if (bs1 < 0) {
    bs1 = 4294967295 + bs1 + 1;
  }
  if (bsc.TYPED_ARRAY_SUPPORT) {
    this[bs2] = bs1 >>> 24;
    this[bs2 + 1] = bs1 >>> 16;
    this[bs2 + 2] = bs1 >>> 8;
    this[bs2 + 3] = bs1 & 255;
  } else {
    bwb(this, bs1, bs2, false);
  }
  return bs2 + 4;
};
bsc.prototype.writeFloatLE = function (bs1, bs2, bs3) {
  return bwn(this, bs1, bs2, true, bs3);
};
bsc.prototype.writeFloatBE = function (bs1, bs2, bs3) {
  return bwn(this, bs1, bs2, false, bs3);
};
bsc.prototype.writeDoubleLE = function (bs1, bs2, bs3) {
  return bwt(this, bs1, bs2, true, bs3);
};
bsc.prototype.writeDoubleBE = function (bs1, bs2, bs3) {
  return bwt(this, bs1, bs2, false, bs3);
};
bsc.prototype.copy = function (bs1, bs2, bs3, bs5) {
  bs3 ||= 0;
  if (!bs5 && bs5 !== 0) {
    bs5 = this.length;
  }
  if (bs2 >= bs1.length) {
    bs2 = bs1.length;
  }
  bs2 ||= 0;
  if (bs5 > 0 && bs5 < bs3) {
    bs5 = bs3;
  }
  if (bs5 === bs3) {
    return 0;
  }
  if (bs1.length === 0 || this.length === 0) {
    return 0;
  }
  if (bs2 < 0) {
    throw new RangeError("targetStart out of bounds");
  }
  if (bs3 < 0 || bs3 >= this.length) {
    throw new RangeError("sourceStart out of bounds");
  }
  if (bs5 < 0) {
    throw new RangeError("sourceEnd out of bounds");
  }
  if (bs5 > this.length) {
    bs5 = this.length;
  }
  if (bs1.length - bs2 < bs5 - bs3) {
    bs5 = bs1.length - bs2 + bs3;
  }
  var bs6;
  var bs7 = bs5 - bs3;
  if (this === bs1 && bs3 < bs2 && bs2 < bs5) {
    for (bs6 = bs7 - 1; bs6 >= 0; --bs6) {
      bs1[bs6 + bs2] = this[bs6 + bs3];
    }
  } else if (bs7 < 1000 || !bsc.TYPED_ARRAY_SUPPORT) {
    for (bs6 = 0; bs6 < bs7; ++bs6) {
      bs1[bs6 + bs2] = this[bs6 + bs3];
    }
  } else {
    Uint8Array.prototype.set.call(bs1, this.subarray(bs3, bs3 + bs7), bs2);
  }
  return bs7;
};
bsc.prototype.fill = function (bs1, bs2, bs3, bs5) {
  if (typeof bs1 == "string") {
    if (typeof bs2 == "string") {
      bs5 = bs2;
      bs2 = 0;
      bs3 = this.length;
    } else if (typeof bs3 == "string") {
      bs5 = bs3;
      bs3 = this.length;
    }
    if (bs1.length === 1) {
      var bs6 = bs1.charCodeAt(0);
      if (bs6 < 256) {
        bs1 = bs6;
      }
    }
    if (bs5 !== undefined && typeof bs5 != "string") {
      throw new TypeError("encoding must be a string");
    }
    if (typeof bs5 == "string" && !bsc.isEncoding(bs5)) {
      throw new TypeError("Unknown encoding: " + bs5);
    }
  } else if (typeof bs1 == "number") {
    bs1 &= 255;
  }
  if (bs2 < 0 || this.length < bs2 || this.length < bs3) {
    throw new RangeError("Out of range index");
  }
  if (bs3 <= bs2) {
    return this;
  }
  var bs7;
  bs2 >>>= 0;
  bs3 = bs3 === undefined ? this.length : bs3 >>> 0;
  bs1 ||= 0;
  if (typeof bs1 == "number") {
    for (bs7 = bs2; bs7 < bs3; ++bs7) {
      this[bs7] = bs1;
    }
  } else {
    var bs8 = bsc.isBuffer(bs1) ? bs1 : byV(new bsc(bs1, bs5).toString());
    var bs9 = bs8.length;
    for (bs7 = 0; bs7 < bs3 - bs2; ++bs7) {
      this[bs7 + bs2] = bs8[bs7 % bs9];
    }
  }
  return this;
};
var byS = /[^+\/0-9A-Za-z-_]/g;
function byT(bs1) {
  if (bs1 < 16) {
    return "0" + bs1.toString(16);
  } else {
    return bs1.toString(16);
  }
}
function byV(bs1, bs2) {
  bs2 = bs2 || Infinity;
  for (var bs3, bs5 = bs1.length, bs6 = null, bs7 = [], bs8 = 0; bs8 < bs5; ++bs8) {
    if ((bs3 = bs1.charCodeAt(bs8)) > 55295 && bs3 < 57344) {
      if (!bs6) {
        if (bs3 > 56319) {
          if ((bs2 -= 3) > -1) {
            bs7.push(239, 191, 189);
          }
          continue;
        }
        if (bs8 + 1 === bs5) {
          if ((bs2 -= 3) > -1) {
            bs7.push(239, 191, 189);
          }
          continue;
        }
        bs6 = bs3;
        continue;
      }
      if (bs3 < 56320) {
        if ((bs2 -= 3) > -1) {
          bs7.push(239, 191, 189);
        }
        bs6 = bs3;
        continue;
      }
      bs3 = 65536 + (bs6 - 55296 << 10 | bs3 - 56320);
    } else if (bs6 && (bs2 -= 3) > -1) {
      bs7.push(239, 191, 189);
    }
    bs6 = null;
    if (bs3 < 128) {
      if ((bs2 -= 1) < 0) {
        break;
      }
      bs7.push(bs3);
    } else if (bs3 < 2048) {
      if ((bs2 -= 2) < 0) {
        break;
      }
      bs7.push(bs3 >> 6 | 192, bs3 & 63 | 128);
    } else if (bs3 < 65536) {
      if ((bs2 -= 3) < 0) {
        break;
      }
      bs7.push(bs3 >> 12 | 224, bs3 >> 6 & 63 | 128, bs3 & 63 | 128);
    } else {
      if (bs3 >= 1114112) {
        throw new Error("Invalid code point");
      }
      if ((bs2 -= 4) < 0) {
        break;
      }
      bs7.push(bs3 >> 18 | 240, bs3 >> 12 & 63 | 128, bs3 >> 6 & 63 | 128, bs3 & 63 | 128);
    }
  }
  return bs7;
}
function bz3(bs1) {
  return bs5.toByteArray(function (bs1) {
    if ((bs1 = function (bs1) {
      if (bs1.trim) {
        return bs1.trim();
      } else {
        return bs1.replace(/^\s+|\s+$/g, "");
      }
    }(bs1).replace(byS, "")).length < 2) {
      return "";
    }
    while (bs1.length % 4 != 0) {
      bs1 += "=";
    }
    return bs1;
  }(bs1));
}
function bz7(bs1, bs2, bs3, bs5) {
  for (var bs6 = 0; bs6 < bs5 && bs6 + bs3 < bs2.length && bs6 < bs1.length; ++bs6) {
    bs2[bs6 + bs3] = bs1[bs6];
  }
  return bs6;
}