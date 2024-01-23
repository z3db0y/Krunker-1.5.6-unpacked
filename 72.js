var cn2;
var cn3;
var cn4 = require("./5.js");
(cn3 = cn2 ||= {}).PENDING = "PENDING";
cn3.RESOLVED = "RESOLVED";
cn3.REJECTED = "REJECTED";
export var a = function () {
  function cmZ(cmZ) {
    var cn0 = this;
    this._state = cn2.PENDING;
    this._handlers = [];
    this._resolve = function (cmZ) {
      cn0._setResult(cmZ, cn2.RESOLVED);
    };
    this._reject = function (cmZ) {
      cn0._setResult(cmZ, cn2.REJECTED);
    };
    this._setResult = function (cmZ, cn1) {
      if (cn0._state === cn2.PENDING) {
        if (Object(cn4.j)(cmZ)) {
          cmZ.then(cn0._resolve, cn0._reject);
          return;
        } else {
          cn0._value = cmZ;
          cn0._state = cn1;
          cn0._executeHandlers();
          return;
        }
      } else {
        return undefined;
      }
    };
    this._executeHandlers = function () {
      if (cn0._state !== cn2.PENDING) {
        if (cn0._state === cn2.REJECTED) {
          cn0._handlers.forEach(function (cmZ) {
            return cmZ.onFail && cmZ.onFail(cn0._value);
          });
        } else {
          cn0._handlers.forEach(function (cmZ) {
            return cmZ.onSuccess && cmZ.onSuccess(cn0._value);
          });
        }
        cn0._handlers = [];
        return;
      }
    };
    this._attachHandler = function (cmZ) {
      cn0._handlers = cn0._handlers.concat(cmZ);
      cn0._executeHandlers();
    };
    try {
      cmZ(this._resolve, this._reject);
    } catch (cng) {
      this._reject(cng);
    }
  }
  cmZ.prototype.then = function (cn0, cn1) {
    var cn2 = this;
    return new cmZ(function (cmZ, cn3) {
      cn2._attachHandler({
        onFail: function (cn0) {
          if (cn1) {
            try {
              cmZ(cn1(cn0));
              return;
            } catch (cnn) {
              cn3(cnn);
              return;
            }
          } else {
            cn3(cn0);
          }
        },
        onSuccess: function (cn1) {
          if (cn0) {
            try {
              cmZ(cn0(cn1));
              return;
            } catch (cnp) {
              cn3(cnp);
              return;
            }
          } else {
            cmZ(cn1);
          }
        }
      });
    });
  };
  cmZ.prototype.catch = function (cmZ) {
    return this.then(function (cmZ) {
      return cmZ;
    }, cmZ);
  };
  cmZ.prototype.toString = function () {
    return "[object SyncPromise]";
  };
  cmZ.resolve = function (cn0) {
    return new cmZ(function (cmZ) {
      cmZ(cn0);
    });
  };
  cmZ.reject = function (cn0) {
    return new cmZ(function (cmZ, cn1) {
      cn1(cn0);
    });
  };
  return cmZ;
}();