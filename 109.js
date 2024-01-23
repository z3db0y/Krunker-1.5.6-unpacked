var cPq = require("./21.js");
var cPt = require("./110.js");
var cPu = require("./111.js");
var cPv = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//;
var cPw = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\S\s]*)/i;
var cPx = /^[\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF]+/;
function cPy(cPp) {
  return (cPp || "").toString().replace(cPx, "");
}
var cPA = [["#", "hash"], ["?", "query"], function (cPp) {
  return cPp.replace("\\", "/");
}, ["/", "pathname"], ["@", "auth", 1], [NaN, "host", undefined, 1, 1], [/:(\d+)$/, "port", undefined, 1], [NaN, "hostname", undefined, 1, 1]];
var cPB = {
  hash: 1,
  query: 1
};
function cPD(cPp) {
  var cPr;
  var cPt = (typeof window == "undefined" ? cPq === undefined ? typeof self == "undefined" ? {} : self : cPq : window).location || {};
  var cPu = {};
  var cPw = typeof (cPp = cPp || cPt);
  if (cPp.protocol === "blob:") {
    cPu = new cPM(unescape(cPp.pathname), {});
  } else if (cPw == "string") {
    cPu = new cPM(cPp, {});
    for (cPr in cPB) {
      delete cPu[cPr];
    }
  } else if (cPw == "object") {
    for (cPr in cPp) {
      if (!(cPr in cPB)) {
        cPu[cPr] = cPp[cPr];
      }
    }
    if (cPu.slashes === undefined) {
      cPu.slashes = cPv.test(cPp.href);
    }
  }
  return cPu;
}
function cPJ(cPp) {
  cPp = cPy(cPp);
  var cPq = cPw.exec(cPp);
  return {
    protocol: cPq[1] ? cPq[1].toLowerCase() : "",
    slashes: !!cPq[2],
    rest: cPq[3]
  };
}
function cPM(cPp, cPq, cPr) {
  cPp = cPy(cPp);
  if (!(this instanceof cPM)) {
    return new cPM(cPp, cPq, cPr);
  }
  var cPv;
  var cPw;
  var cPx;
  var cPB;
  var cPU;
  var cPV;
  var cPW = cPA.slice();
  var cPX = typeof cPq;
  var cPY = this;
  var cPZ = 0;
  if (cPX != "object" && cPX != "string") {
    cPr = cPq;
    cPq = null;
  }
  if (cPr && typeof cPr != "function") {
    cPr = cPu.parse;
  }
  cPq = cPD(cPq);
  cPv = !(cPw = cPJ(cPp || "")).protocol && !cPw.slashes;
  cPY.slashes = cPw.slashes || cPv && cPq.slashes;
  cPY.protocol = cPw.protocol || cPq.protocol || "";
  cPp = cPw.rest;
  if (!cPw.slashes) {
    cPW[3] = [/(.*)/, "pathname"];
  }
  for (; cPZ < cPW.length; cPZ++) {
    if (typeof (cPB = cPW[cPZ]) != "function") {
      cPx = cPB[0];
      cPV = cPB[1];
      if (cPx == cPx) {
        if (typeof cPx == "string") {
          if (~(cPU = cPp.indexOf(cPx))) {
            if (typeof cPB[2] == "number") {
              cPY[cPV] = cPp.slice(0, cPU);
              cPp = cPp.slice(cPU + cPB[2]);
            } else {
              cPY[cPV] = cPp.slice(cPU);
              cPp = cPp.slice(0, cPU);
            }
          }
        } else if (cPU = cPx.exec(cPp)) {
          cPY[cPV] = cPU[1];
          cPp = cPp.slice(0, cPU.index);
        }
      } else {
        cPY[cPV] = cPp;
      }
      cPY[cPV] = cPY[cPV] || cPv && cPB[3] && cPq[cPV] || "";
      if (cPB[4]) {
        cPY[cPV] = cPY[cPV].toLowerCase();
      }
    } else {
      cPp = cPB(cPp);
    }
  }
  if (cPr) {
    cPY.query = cPr(cPY.query);
  }
  if (cPv && cPq.slashes && cPY.pathname.charAt(0) !== "/" && (cPY.pathname !== "" || cPq.pathname !== "")) {
    cPY.pathname = function (cPp, cPq) {
      if (cPp === "") {
        return cPq;
      }
      for (var cPr = (cPq || "/").split("/").slice(0, -1).concat(cPp.split("/")), cPt = cPr.length, cPu = cPr[cPt - 1], cPv = false, cPw = 0; cPt--;) {
        if (cPr[cPt] === ".") {
          cPr.splice(cPt, 1);
        } else if (cPr[cPt] === "..") {
          cPr.splice(cPt, 1);
          cPw++;
        } else if (cPw) {
          if (cPt === 0) {
            cPv = true;
          }
          cPr.splice(cPt, 1);
          cPw--;
        }
      }
      if (cPv) {
        cPr.unshift("");
      }
      if (cPu === "." || cPu === "..") {
        cPr.push("");
      }
      return cPr.join("/");
    }(cPY.pathname, cPq.pathname);
  }
  if (!cPt(cPY.port, cPY.protocol)) {
    cPY.host = cPY.hostname;
    cPY.port = "";
  }
  cPY.username = cPY.password = "";
  if (cPY.auth) {
    cPB = cPY.auth.split(":");
    cPY.username = cPB[0] || "";
    cPY.password = cPB[1] || "";
  }
  cPY.origin = cPY.protocol && cPY.host && cPY.protocol !== "file:" ? cPY.protocol + "//" + cPY.host : "null";
  cPY.href = cPY.toString();
}
cPM.prototype = {
  set: function (cPp, cPq, cPr) {
    var cPv = this;
    switch (cPp) {
      case "query":
        if (typeof cPq == "string" && cPq.length) {
          cPq = (cPr || cPu.parse)(cPq);
        }
        cPv[cPp] = cPq;
        break;
      case "port":
        cPv[cPp] = cPq;
        if (cPt(cPq, cPv.protocol)) {
          if (cPq) {
            cPv.host = cPv.hostname + ":" + cPq;
          }
        } else {
          cPv.host = cPv.hostname;
          cPv[cPp] = "";
        }
        break;
      case "hostname":
        cPv[cPp] = cPq;
        if (cPv.port) {
          cPq += ":" + cPv.port;
        }
        cPv.host = cPq;
        break;
      case "host":
        cPv[cPp] = cPq;
        if (/:\d+$/.test(cPq)) {
          cPq = cPq.split(":");
          cPv.port = cPq.pop();
          cPv.hostname = cPq.join(":");
        } else {
          cPv.hostname = cPq;
          cPv.port = "";
        }
        break;
      case "protocol":
        cPv.protocol = cPq.toLowerCase();
        cPv.slashes = !cPr;
        break;
      case "pathname":
      case "hash":
        if (cPq) {
          var cPw = cPp === "pathname" ? "/" : "#";
          cPv[cPp] = cPq.charAt(0) === cPw ? cPq : cPw + cPq;
        } else {
          cPv[cPp] = cPq;
        }
        break;
      default:
        cPv[cPp] = cPq;
    }
    for (var cPx, cPy = 0; cPy < cPA.length; cPy++) {
      if ((cPx = cPA[cPy])[4]) {
        cPv[cPx[1]] = cPv[cPx[1]].toLowerCase();
      }
    }
    cPv.origin = cPv.protocol && cPv.host && cPv.protocol !== "file:" ? cPv.protocol + "//" + cPv.host : "null";
    cPv.href = cPv.toString();
    return cPv;
  },
  toString: function (cPp) {
    if (!cPp || typeof cPp != "function") {
      cPp = cPu.stringify;
    }
    var cPq;
    var cPr = this;
    var cPt = cPr.protocol;
    if (cPt && cPt.charAt(cPt.length - 1) !== ":") {
      cPt += ":";
    }
    var cPv = cPt + (cPr.slashes ? "//" : "");
    if (cPr.username) {
      cPv += cPr.username;
      if (cPr.password) {
        cPv += ":" + cPr.password;
      }
      cPv += "@";
    }
    cPv += cPr.host + cPr.pathname;
    if (cPq = typeof cPr.query == "object" ? cPp(cPr.query) : cPr.query) {
      cPv += cPq.charAt(0) === "?" ? cPq : "?" + cPq;
    }
    if (cPr.hash) {
      cPv += cPr.hash;
    }
    return cPv;
  }
};
cPM.extractProtocol = cPJ;
cPM.location = cPD;
cPM.trimLeft = cPy;
cPM.qs = cPu;
module.exports = cPM;