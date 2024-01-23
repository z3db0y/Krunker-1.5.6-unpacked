var cR4 = require("./85.js");
var cR5 = require("./36.js");
var cR6 = require("./123.js");
var cR7 = require("./124.js");
function cR8(cR1) {
  this.defaults = cR1;
  this.interceptors = {
    request: new cR6(),
    response: new cR6()
  };
}
cR8.prototype.request = function (cR1) {
  if (typeof cR1 == "string") {
    cR1 = cR5.merge({
      url: arguments[0]
    }, arguments[1]);
  }
  (cR1 = cR5.merge(cR4, {
    method: "get"
  }, this.defaults, cR1)).method = cR1.method.toLowerCase();
  var cR2 = [cR7, undefined];
  var cR3 = Promise.resolve(cR1);
  this.interceptors.request.forEach(function (cR1) {
    cR2.unshift(cR1.fulfilled, cR1.rejected);
  });
  this.interceptors.response.forEach(function (cR1) {
    cR2.push(cR1.fulfilled, cR1.rejected);
  });
  while (cR2.length) {
    cR3 = cR3.then(cR2.shift(), cR2.shift());
  }
  return cR3;
};
cR5.forEach(["delete", "get", "head", "options"], function (cR1) {
  cR8.prototype[cR1] = function (cR2, cR3) {
    return this.request(cR5.merge(cR3 || {}, {
      method: cR1,
      url: cR2
    }));
  };
});
cR5.forEach(["post", "put", "patch"], function (cR1) {
  cR8.prototype[cR1] = function (cR2, cR3, cR4) {
    return this.request(cR5.merge(cR4 || {}, {
      method: cR1,
      url: cR2,
      data: cR3
    }));
  };
});
module.exports = cR8;