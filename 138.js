var cVv = require("./34.js");
var cVw = require("./139.js");
var cVx = require("./101.js");
var cVy = require("./102.js");
var cVz = require("./146.js");
var cVA = require("./147.js");
function cVB(cVs) {
  if (cVs.cancelToken) {
    cVs.cancelToken.throwIfRequested();
  }
}
module.exports = function (cVs) {
  cVB(cVs);
  if (cVs.baseURL && !cVz(cVs.url)) {
    cVs.url = cVA(cVs.baseURL, cVs.url);
  }
  cVs.headers = cVs.headers || {};
  cVs.data = cVw(cVs.data, cVs.headers, cVs.transformRequest);
  cVs.headers = cVv.merge(cVs.headers.common || {}, cVs.headers[cVs.method] || {}, cVs.headers || {});
  cVv.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (cVt) {
    delete cVs.headers[cVt];
  });
  return (cVs.adapter || cVy.adapter)(cVs).then(function (cVt) {
    cVB(cVs);
    cVt.data = cVw(cVt.data, cVt.headers, cVs.transformResponse);
    return cVt;
  }, function (cVt) {
    if (!cVx(cVt)) {
      cVB(cVs);
      if (cVt && cVt.response) {
        cVt.response.data = cVw(cVt.response.data, cVt.response.headers, cVs.transformResponse);
      }
    }
    return Promise.reject(cVt);
  });
};