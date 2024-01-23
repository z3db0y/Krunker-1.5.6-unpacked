var cr5 = require("./14.js");
var cr8 = require("./36.js");
var cr9 = require("./116.js");
var cra = {
  "Content-Type": "application/x-www-form-urlencoded"
};
function crb(cr4, cr5) {
  if (!cr8.isUndefined(cr4) && cr8.isUndefined(cr4["Content-Type"])) {
    cr4["Content-Type"] = cr5;
  }
}
var cre;
var crf = {
  adapter: (typeof XMLHttpRequest == "undefined" ? cr5 !== undefined && (cre = require("./94.js")) : cre = require("./94.js"), cre),
  transformRequest: [function (cr4, cr5) {
    cr9(cr5, "Content-Type");
    if (cr8.isFormData(cr4) || cr8.isArrayBuffer(cr4) || cr8.isBuffer(cr4) || cr8.isStream(cr4) || cr8.isFile(cr4) || cr8.isBlob(cr4)) {
      return cr4;
    } else if (cr8.isArrayBufferView(cr4)) {
      return cr4.buffer;
    } else if (cr8.isURLSearchParams(cr4)) {
      crb(cr5, "application/x-www-form-urlencoded;charset=utf-8");
      return cr4.toString();
    } else if (cr8.isObject(cr4)) {
      crb(cr5, "application/json;charset=utf-8");
      return JSON.stringify(cr4);
    } else {
      return cr4;
    }
  }],
  transformResponse: [function (cr4) {
    if (typeof cr4 == "string") {
      try {
        cr4 = JSON.parse(cr4);
      } catch (crj) {}
    }
    return cr4;
  }],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  validateStatus: function (cr4) {
    return cr4 >= 200 && cr4 < 300;
  }
};
crf.headers = {
  common: {
    Accept: "application/json, text/plain, */*"
  }
};
cr8.forEach(["delete", "get", "head"], function (cr4) {
  crf.headers[cr4] = {};
});
cr8.forEach(["post", "put", "patch"], function (cr4) {
  crf.headers[cr4] = cr8.merge(cra);
});
module.exports = crf;