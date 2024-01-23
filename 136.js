var cUY = require("./34.js");
var cUZ = require("./100.js");
var cV0 = require("./137.js");
var cV1 = require("./138.js");
var cV2 = require("./105.js");
function cV3(cUV) {
  this.defaults = cUV;
  this.interceptors = {
    request: new cV0(),
    response: new cV0()
  };
}
cV3.prototype.request = function (cUV) {
  if (typeof cUV == "string") {
    (cUV = arguments[1] || {}).url = arguments[0];
  } else {
    cUV = cUV || {};
  }
  (cUV = cV2(this.defaults, cUV)).method = cUV.method ? cUV.method.toLowerCase() : "get";
  var cUW = [cV1, undefined];
  var cUX = Promise.resolve(cUV);
  this.interceptors.request.forEach(function (cUV) {
    cUW.unshift(cUV.fulfilled, cUV.rejected);
  });
  this.interceptors.response.forEach(function (cUV) {
    cUW.push(cUV.fulfilled, cUV.rejected);
  });
  while (cUW.length) {
    cUX = cUX.then(cUW.shift(), cUW.shift());
  }
  return cUX;
};
cV3.prototype.getUri = function (cUV) {
  cUV = cV2(this.defaults, cUV);
  return cUZ(cUV.url, cUV.params, cUV.paramsSerializer).replace(/^\?/, "");
};
cUY.forEach(["delete", "get", "head", "options"], function (cUV) {
  cV3.prototype[cUV] = function (cUW, cUX) {
    return this.request(cUY.merge(cUX || {}, {
      method: cUV,
      url: cUW
    }));
  };
});
cUY.forEach(["post", "put", "patch"], function (cUV) {
  cV3.prototype[cUV] = function (cUW, cUX, cUZ) {
    return this.request(cUY.merge(cUZ || {}, {
      method: cUV,
      url: cUW,
      data: cUX
    }));
  };
});
module.exports = cV3;