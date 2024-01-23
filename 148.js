var cX0 = require("./106.js");
function cX1(cWX) {
  if (typeof cWX != "function") {
    throw new TypeError("executor must be a function.");
  }
  var cWY;
  this.promise = new Promise(function (cWX) {
    cWY = cWX;
  });
  var cWZ = this;
  cWX(function (cWX) {
    if (!cWZ.reason) {
      cWZ.reason = new cX0(cWX);
      cWY(cWZ.reason);
    }
  });
}
cX1.prototype.throwIfRequested = function () {
  if (this.reason) {
    throw this.reason;
  }
};
cX1.source = function () {
  var cWX;
  return {
    token: new cX1(function (cWY) {
      cWX = cWY;
    }),
    cancel: cWX
  };
};
module.exports = cX1;