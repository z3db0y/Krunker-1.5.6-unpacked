var cSM = require("./36.js");
var cSN = require("./125.js");
var cSO = require("./96.js");
var cSP = require("./85.js");
var cSQ = require("./126.js");
var cSR = require("./127.js");
function cSS(cSJ) {
  if (cSJ.cancelToken) {
    cSJ.cancelToken.throwIfRequested();
  }
}
module.exports = function (cSJ) {
  cSS(cSJ);
  if (cSJ.baseURL && !cSQ(cSJ.url)) {
    cSJ.url = cSR(cSJ.baseURL, cSJ.url);
  }
  cSJ.headers = cSJ.headers || {};
  cSJ.data = cSN(cSJ.data, cSJ.headers, cSJ.transformRequest);
  cSJ.headers = cSM.merge(cSJ.headers.common || {}, cSJ.headers[cSJ.method] || {}, cSJ.headers || {});
  cSM.forEach(["delete", "get", "head", "post", "put", "patch", "common"], function (cSK) {
    delete cSJ.headers[cSK];
  });
  return (cSJ.adapter || cSP.adapter)(cSJ).then(function (cSK) {
    cSS(cSJ);
    cSK.data = cSN(cSK.data, cSK.headers, cSJ.transformResponse);
    return cSK;
  }, function (cSK) {
    if (!cSO(cSK)) {
      cSS(cSJ);
      if (cSK && cSK.response) {
        cSK.response.data = cSN(cSK.response.data, cSK.response.headers, cSJ.transformResponse);
      }
    }
    return Promise.reject(cSK);
  });
};