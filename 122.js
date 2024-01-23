var cSo = require("./36.js");
module.exports = cSo.isStandardBrowserEnv() ? {
  write: function (cSl, cSm, cSn, cSs, cSt, cSu) {
    var cSv = [];
    cSv.push(cSl + "=" + encodeURIComponent(cSm));
    if (cSo.isNumber(cSn)) {
      cSv.push("expires=" + new Date(cSn).toGMTString());
    }
    if (cSo.isString(cSs)) {
      cSv.push("path=" + cSs);
    }
    if (cSo.isString(cSt)) {
      cSv.push("domain=" + cSt);
    }
    if (cSu === true) {
      cSv.push("secure");
    }
    document.cookie = cSv.join("; ");
  },
  read: function (cSl) {
    var cSm = document.cookie.match(new RegExp("(^|;\\s*)(" + cSl + ")=([^;]*)"));
    if (cSm) {
      return decodeURIComponent(cSm[3]);
    } else {
      return null;
    }
  },
  remove: function (cSl) {
    this.write(cSl, "", Date.now() - 86400000);
  }
} : {
  write: function () {},
  read: function () {
    return null;
  },
  remove: function () {}
};