var cTi = require("./97.js");
function cTj(cTf) {
  if (typeof cTf != "function") {
    throw new TypeError("executor must be a function.");
  }
  var cTg;
  this.promise = new Promise(function (cTf) {
    cTg = cTf;
  });
  var cTh = this;
  cTf(function (cTf) {
    if (!cTh.reason) {
      cTh.reason = new cTi(cTf);
      cTg(cTh.reason);
    }
  });
}
cTj.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
cTj.source = function () {
  var cTf;
  return {
    token: new cTj(function (cTg) {
      cTf = cTg;
    }),
    cancel: cTf
  };
};
module.exports = cTj;