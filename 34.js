var bCo = require("./99.js");
var bCp = require("./135.js");
var bCq = Object.prototype.toString;
function bCr(bCl) {
  return bCq.call(bCl) === "[object Array]";
}
function bCt(bCl) {
  return bCl !== null && typeof bCl == "object";
}
function bCv(bCl) {
  return bCq.call(bCl) === "[object Function]";
}
function bCx(bCl, bCm) {
  if (bCl != null) {
    if (typeof bCl != "object") {
      bCl = [bCl];
    }
    if (bCr(bCl)) {
      for (var bCn = 0, bCo = bCl.length; bCn < bCo; bCn++) {
        bCm.call(null, bCl[bCn], bCn, bCl);
      }
    } else {
      for (var bCp in bCl) {
        if (Object.prototype.hasOwnProperty.call(bCl, bCp)) {
          bCm.call(null, bCl[bCp], bCp, bCl);
        }
      }
    }
  }
}
module.exports = {
  isArray: bCr,
  isArrayBuffer: function (bCl) {
    return bCq.call(bCl) === "[object ArrayBuffer]";
  },
  isBuffer: bCp,
  isFormData: function (bCl) {
    return typeof FormData != "undefined" && bCl instanceof FormData;
  },
  isArrayBufferView: function (bCl) {
    if (typeof ArrayBuffer != "undefined" && ArrayBuffer.isView) {
      return ArrayBuffer.isView(bCl);
    } else {
      return bCl && bCl.buffer && bCl.buffer instanceof ArrayBuffer;
    }
  },
  isString: function (bCl) {
    return typeof bCl == "string";
  },
  isNumber: function (bCl) {
    return typeof bCl == "number";
  },
  isObject: bCt,
  isUndefined: function (bCl) {
    return bCl === undefined;
  },
  isDate: function (bCl) {
    return bCq.call(bCl) === "[object Date]";
  },
  isFile: function (bCl) {
    return bCq.call(bCl) === "[object File]";
  },
  isBlob: function (bCl) {
    return bCq.call(bCl) === "[object Blob]";
  },
  isFunction: bCv,
  isStream: function (bCl) {
    return bCt(bCl) && bCv(bCl.pipe);
  },
  isURLSearchParams: function (bCl) {
    return typeof URLSearchParams != "undefined" && bCl instanceof URLSearchParams;
  },
  isStandardBrowserEnv: function () {
    return (typeof navigator == "undefined" || navigator.product !== "ReactNative" && navigator.product !== "NativeScript" && navigator.product !== "NS") && typeof window != "undefined" && typeof document != "undefined";
  },
  forEach: bCx,
  merge: function bCl() {
    function bCm(bCm, bCo) {
      bCn[bCo] = typeof bCn[bCo] == "object" && typeof bCm == "object" ? bCl(bCn[bCo], bCm) : bCm;
    }
    for (var bCn = {}, bCo = 0, bCp = arguments.length; bCo < bCp; bCo++) {
      bCx(arguments[bCo], bCm);
    }
    return bCn;
  },
  deepMerge: function bCl() {
    function bCm(bCm, bCo) {
      bCn[bCo] = typeof bCn[bCo] == "object" && typeof bCm == "object" ? bCl(bCn[bCo], bCm) : typeof bCm == "object" ? bCl({}, bCm) : bCm;
    }
    for (var bCn = {}, bCo = 0, bCp = arguments.length; bCo < bCp; bCo++) {
      bCx(arguments[bCo], bCm);
    }
    return bCn;
  },
  extend: function (bCl, bCm, bCn) {
    bCx(bCm, function (bCm, bCp) {
      bCl[bCp] = bCn && typeof bCm == "function" ? bCo(bCm, bCn) : bCm;
    });
    return bCl;
  },
  trim: function (bCl) {
    return bCl.replace(/^\s*/, "").replace(/\s*$/, "");
  }
};