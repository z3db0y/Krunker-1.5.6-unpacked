var bkx = require("./0.js");
var bky = require("./72.js");
var bkz = require("./5.js");
var bkA = require("./6.js");
var bkB = require("./2.js");
var bkC = require("./13.js");
export var a = function () {
  function bku() {
    this._notifyingListeners = false;
    this._scopeListeners = [];
    this._eventProcessors = [];
    this._breadcrumbs = [];
    this._user = {};
    this._tags = {};
    this._extra = {};
    this._context = {};
  }
  bku.prototype.addScopeListener = function (bku) {
    this._scopeListeners.push(bku);
  };
  bku.prototype.addEventProcessor = function (bku) {
    this._eventProcessors.push(bku);
    return this;
  };
  bku.prototype._notifyScopeListeners = function () {
    var bku = this;
    if (!this._notifyingListeners) {
      this._notifyingListeners = true;
      setTimeout(function () {
        bku._scopeListeners.forEach(function (bkv) {
          bkv(bku);
        });
        bku._notifyingListeners = false;
      });
    }
  };
  bku.prototype._notifyEventProcessors = function (bku, bkv, bkw, bkA) {
    var bkB = this;
    if (bkA === undefined) {
      bkA = 0;
    }
    return new bky.a(function (bky, bkC) {
      var bkD = bku[bkA];
      if (bkv === null || typeof bkD != "function") {
        bky(bkv);
      } else {
        var bkR = bkD(bkx.a({}, bkv), bkw);
        if (Object(bkz.j)(bkR)) {
          bkR.then(function (bkv) {
            return bkB._notifyEventProcessors(bku, bkv, bkw, bkA + 1).then(bky);
          }).catch(bkC);
        } else {
          bkB._notifyEventProcessors(bku, bkR, bkw, bkA + 1).then(bky).catch(bkC);
        }
      }
    });
  };
  bku.prototype.setUser = function (bku) {
    this._user = Object(bkA.b)(bku);
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setTags = function (bku) {
    this._tags = bkx.a({}, this._tags, Object(bkA.b)(bku));
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setTag = function (bku, bkv) {
    var bkw;
    this._tags = bkx.a({}, this._tags, ((bkw = {})[bku] = Object(bkA.b)(bkv), bkw));
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setExtras = function (bku) {
    this._extra = bkx.a({}, this._extra, Object(bkA.b)(bku));
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setExtra = function (bku, bkv) {
    var bkw;
    this._extra = bkx.a({}, this._extra, ((bkw = {})[bku] = Object(bkA.b)(bkv), bkw));
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setFingerprint = function (bku) {
    this._fingerprint = Object(bkA.b)(bku);
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setLevel = function (bku) {
    this._level = Object(bkA.b)(bku);
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setTransaction = function (bku) {
    this._transaction = bku;
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setContext = function (bku, bkv) {
    this._context[bku] = bkv ? Object(bkA.b)(bkv) : undefined;
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.setSpan = function (bku) {
    this._span = bku;
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.startSpan = function (bku) {
    var bkv = new bkC.a();
    bkv.setParent(bku);
    this.setSpan(bkv);
    return bkv;
  };
  bku.prototype.getSpan = function () {
    return this._span;
  };
  bku.clone = function (bkv) {
    var bkw = new bku();
    Object.assign(bkw, bkv, {
      _scopeListeners: []
    });
    if (bkv) {
      bkw._breadcrumbs = bkx.d(bkv._breadcrumbs);
      bkw._tags = bkx.a({}, bkv._tags);
      bkw._extra = bkx.a({}, bkv._extra);
      bkw._context = bkx.a({}, bkv._context);
      bkw._user = bkv._user;
      bkw._level = bkv._level;
      bkw._span = bkv._span;
      bkw._transaction = bkv._transaction;
      bkw._fingerprint = bkv._fingerprint;
      bkw._eventProcessors = bkx.d(bkv._eventProcessors);
    }
    return bkw;
  };
  bku.prototype.clear = function () {
    this._breadcrumbs = [];
    this._tags = {};
    this._extra = {};
    this._user = {};
    this._context = {};
    this._level = undefined;
    this._transaction = undefined;
    this._fingerprint = undefined;
    this._span = undefined;
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.addBreadcrumb = function (bku, bkv) {
    var bkw = new Date().getTime() / 1000;
    var bky = bkx.a({
      timestamp: bkw
    }, bku);
    this._breadcrumbs = bkv !== undefined && bkv >= 0 ? bkx.d(this._breadcrumbs, [Object(bkA.b)(bky)]).slice(-bkv) : bkx.d(this._breadcrumbs, [Object(bkA.b)(bky)]);
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype.clearBreadcrumbs = function () {
    this._breadcrumbs = [];
    this._notifyScopeListeners();
    return this;
  };
  bku.prototype._applyFingerprint = function (bku) {
    bku.fingerprint = bku.fingerprint ? Array.isArray(bku.fingerprint) ? bku.fingerprint : [bku.fingerprint] : [];
    if (this._fingerprint) {
      bku.fingerprint = bku.fingerprint.concat(this._fingerprint);
    }
    if (bku.fingerprint && !bku.fingerprint.length) {
      delete bku.fingerprint;
    }
  };
  bku.prototype.applyToEvent = function (bku, bkv) {
    if (this._extra && Object.keys(this._extra).length) {
      bku.extra = bkx.a({}, this._extra, bku.extra);
    }
    if (this._tags && Object.keys(this._tags).length) {
      bku.tags = bkx.a({}, this._tags, bku.tags);
    }
    if (this._user && Object.keys(this._user).length) {
      bku.user = bkx.a({}, this._user, bku.user);
    }
    if (this._context && Object.keys(this._context).length) {
      bku.contexts = bkx.a({}, this._context, bku.contexts);
    }
    if (this._level) {
      bku.level = this._level;
    }
    if (this._transaction) {
      bku.transaction = this._transaction;
    }
    if (this._span) {
      bku.contexts = bku.contexts || {};
      bku.contexts.trace = this._span;
    }
    this._applyFingerprint(bku);
    bku.breadcrumbs = bkx.d(bku.breadcrumbs || [], this._breadcrumbs);
    bku.breadcrumbs = bku.breadcrumbs.length > 0 ? bku.breadcrumbs : undefined;
    return this._notifyEventProcessors(bkx.d(blj(), this._eventProcessors), bku, bkv);
  };
  return bku;
}();
function blj() {
  var bku = Object(bkB.e)();
  bku.__SENTRY__ = bku.__SENTRY__ || {};
  bku.__SENTRY__.globalEventProcessors = bku.__SENTRY__.globalEventProcessors || [];
  return bku.__SENTRY__.globalEventProcessors;
}
export function b(bku) {
  blj().push(bku);
}