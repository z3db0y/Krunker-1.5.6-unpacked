var cyE = require("./14.js");
var cyH = require("./34.js");
var cyI = require("./140.js");
var cyJ = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function cyK(cyD, cyE) {
  if (!cyH.isUndefined(cyD) && cyH.isUndefined(cyD["Content-Type"])) {
    cyD["Content-Type"] = cyE;
  }
}
var cyN;
var cyO = {
  adapter: (cyE !== undefined && Object.prototype.toString.call(cyE) === "[object process]" ? cyN = require("./103.js") : typeof XMLHttpRequest != "undefined" && (cyN = require("./103.js")), cyN),
  transformRequest: [function (cyD, cyE) {
    cyI(cyE, "Accept");
    cyI(cyE, "Content-Type");
    if (cyH.isFormData(cyD) || cyH.isArrayBuffer(cyD) || cyH.isBuffer(cyD) || cyH.isStream(cyD) || cyH.isFile(cyD) || cyH.isBlob(cyD)) {
      return cyD;
    } else if (cyH.isArrayBufferView(cyD)) {
      return cyD.buffer;
    } else if (cyH.isURLSearchParams(cyD)) {
      cyK(cyE, "application/x-www-form-urlencoded;charset=utf-8");
      return cyD.toString();
    } else if (cyH.isObject(cyD)) {
      cyK(cyE, "application/json;charset=utf-8");
      return JSON.stringify(cyD);
    } else {
      return cyD;
    }
  }],
  transformResponse: [function (cyD) {
    if (typeof cyD == "string") {
      try {
        cyD = JSON.parse(cyD);
      } catch (cyS) {}
    }
    return cyD;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  validateStatus: function (cyD) {
    return cyD >= 200 && cyD < 300;
  }
};
cyO.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
cyH.forEach(["delete", "get", "head"], function (cyD) {
  cyO.headers[cyD] = {};
});
cyH.forEach(["post", "put", "patch"], function (cyD) {
  cyO.headers[cyD] = cyH.merge(cyJ);
});
module.exports = cyO;