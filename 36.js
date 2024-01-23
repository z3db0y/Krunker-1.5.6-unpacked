var bDa = require("./93.js");
var bDb = require("./114.js");
var bDc = Object.prototype.toString;
function bDd(bD7) {
  return bDc.call(bD7) === "[object Array]";
}
function bDf(bD7) {
  return bD7 !== null && typeof bD7 == "object";
}
function bDh(bD7) {
  return bDc.call(bD7) === "[object Function]";
}
function bDj(bD7, bD8) {
  if (bD7 != null) {
    if (typeof bD7 != "object") {
      bD7 = [bD7];
    }
    if (bDd(bD7)) {
      for (var bD9 = 0, bDa = bD7.length; bD9 < bDa; bD9++) {
        bD8.call(null, bD7[bD9], bD9, bD7);
      }
    } else {
      for (var bDb in bD7) {
        if (Object.prototype.hasOwnProperty.call(bD7, bDb)) {
          bD8.call(null, bD7[bDb], bDb, bD7);
        }
      }
    }
  }
}
module.exports = {
  isArray: bDd,
  isArrayBuffer: function (bD7) {
    return bDc.call(bD7) === "[object ArrayBuffer]";
  },
  isBuffer: bDb,
  isFormData: function (bD7) {
    return typeof FormData != "undefined" && bD7 instanceof FormData;
  },
  isArrayBufferView: function (bD7) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(bD7);
    } else {
      return bD7 && bD7.buffer && bD7.buffer instanceof ArrayBuffer;
    }
  },
  isString: function (bD7) {
    return typeof bD7 == "string";
  },
  isNumber: function (bD7) {
    return typeof bD7 == "number";
  },
  isObject: bDf,
  isUndefined: function (bD7) {
    return bD7 === undefined;
  },
  isDate: function (bD7) {
    return bDc.call(bD7) === "[object Date]";
  },
  isFile: function (bD7) {
    return bDc.call(bD7) === "[object File]";
  },
  isBlob: function (bD7) {
    return bDc.call(bD7) === "[object Blob]";
  },
  isFunction: bDh,
  isStream: function (bD7) {
    return bDf(bD7) && bDh(bD7.pipe);
  },
  isURLSearchParams: function (bD7) {
    return typeof URLSearchParams != "undefined" && bD7 instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: bDj,
  merge: function bD7() {
    function bD8(bD8, bDa) {
      bD9[bDa] = typeof bD9[bDa] == "object" && typeof bD8 == "object" ? bD7(bD9[bDa], bD8) : bD8;
    }
    for (var bD9 = {}, bDa = 0, bDb = arguments.length; bDa < bDb; bDa++) {
      bDj(arguments[bDa], bD8);
    }
    return bD9;
  },
  extend: function (bD7, bD8, bD9) {
    bDj(bD8, function (bD8, bDb) {
      bD7[bDb] = bD9 && typeof bD8 == "function" ? bDa(bD8, bD9) : bD8;
    });
    return bD7;
  },
  trim: function (bD7) {
    return bD7.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};