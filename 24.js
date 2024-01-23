var brA = require("./2.js");
var brB = Object(brA.e)();
var brC = "Sentry Logger ";
var brD = function () {
  function brx() {
    this._enabled = false;
  }
  brx.prototype.disable = function () {
    this._enabled = false;
  };
  brx.prototype.enable = function () {
    this._enabled = true;
  };
  brx.prototype.log = function () {
    for (var brx = [], bry = 0; bry < arguments.length; bry++) {
      brx[bry] = arguments[bry];
    }
    if (this._enabled) {
      Object(brA.b)(function () {
        brB.console.log(brC + "[Log]: " + brx.join(" "));
      });
    }
  };
  brx.prototype.warn = function () {
    for (var brx = [], bry = 0; bry < arguments.length; bry++) {
      brx[bry] = arguments[bry];
    }
    if (this._enabled) {
      Object(brA.b)(function () {
        brB.console.warn(brC + "[Warn]: " + brx.join(" "));
      });
    }
  };
  brx.prototype.error = function () {
    for (var brx = [], bry = 0; bry < arguments.length; bry++) {
      brx[bry] = arguments[bry];
    }
    if (this._enabled) {
      Object(brA.b)(function () {
        brB.console.error(brC + "[Error]: " + brx.join(" "));
      });
    }
  };
  return brx;
}();
brB.__SENTRY__ = brB.__SENTRY__ || {};
export var a = brB.__SENTRY__.logger ||= new brD();