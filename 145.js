var cWD = require("./34.js");
module.exports = cWD.isStandardBrowserEnv() ? {
  write: function (cWA, cWB, cWC, cWH, cWI, cWJ) {
    var cWK = [];
    cWK.push(cWA + "=" + encodeURIComponent(cWB));
    if (cWD.isNumber(cWC)) {
      cWK.push("expires=" + new Date(cWC).toGMTString());
    }
    if (cWD.isString(cWH)) {
      cWK.push("path=" + cWH);
    }
    if (cWD.isString(cWI)) {
      cWK.push("domain=" + cWI);
    }
    if (cWJ === true) {
      cWK.push("secure");
    }
    document.cookie = cWK.join("; ");
  },
  read: function (cWA) {
    var cWB = document.cookie.match(new RegExp("(^|;\\s*)(" + cWA + ")=([^;]*)"));
    if (cWB) {
      return decodeURIComponent(cWB[3]);
    } else {
      return null;
    }
  },
  remove: function (cWA) {
    this.write(cWA, "", Date.now() - 86400000);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
};