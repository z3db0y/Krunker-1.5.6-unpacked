var bj3 = require("./62.js")(module);
var bj7 = require("./0.js");
var bj8 = require("./2.js");
var bj9 = require("./24.js");
var bja = require("./10.js");
var bjb = 3;
export var a = function () {
  function bj3(bj3, bj4, bj5) {
    if (bj4 === undefined) {
      bj4 = new bja.a();
    }
    if (bj5 === undefined) {
      bj5 = bjb;
    }
    this._version = bj5;
    this._stack = [];
    this._stack.push({
      client: bj3,
      scope: bj4
    });
  }
  bj3.prototype._invokeClient = function (bj3) {
    for (var bj4, bj5 = [], bj8 = 1; bj8 < arguments.length; bj8++) {
      bj5[bj8 - 1] = arguments[bj8];
    }
    var bj9 = this.getStackTop();
    if (bj9 && bj9.client && bj9.client[bj3]) {
      (bj4 = bj9.client)[bj3].apply(bj4, bj7.d(bj5, [bj9.scope]));
    }
  };
  bj3.prototype.isOlderThan = function (bj3) {
    return this._version < bj3;
  };
  bj3.prototype.bindClient = function (bj3) {
    this.getStackTop().client = bj3;
  };
  bj3.prototype.pushScope = function () {
    var bj3 = this.getStack();
    var bj4 = bj3.length > 0 ? bj3[bj3.length - 1].scope : undefined;
    var bj5 = bja.a.clone(bj4);
    this.getStack().push({
      client: this.getClient(),
      scope: bj5
    });
    return bj5;
  };
  bj3.prototype.popScope = function () {
    return this.getStack().pop() !== undefined;
  };
  bj3.prototype.withScope = function (bj3) {
    var bj4 = this.pushScope();
    try {
      bj3(bj4);
    } finally {
      this.popScope();
    }
  };
  bj3.prototype.getClient = function () {
    return this.getStackTop().client;
  };
  bj3.prototype.getScope = function () {
    return this.getStackTop().scope;
  };
  bj3.prototype.getStack = function () {
    return this._stack;
  };
  bj3.prototype.getStackTop = function () {
    return this._stack[this._stack.length - 1];
  };
  bj3.prototype.captureException = function (bj3, bj4) {
    var bj5 = this._lastEventId = Object(bj8.g)();
    this._invokeClient("captureException", bj3, bj7.a({}, bj4, {
      event_id: bj5
    }));
    return bj5;
  };
  bj3.prototype.captureMessage = function (bj3, bj4, bj5) {
    var bj9 = this._lastEventId = Object(bj8.g)();
    this._invokeClient("captureMessage", bj3, bj4, bj7.a({}, bj5, {
      event_id: bj9
    }));
    return bj9;
  };
  bj3.prototype.captureEvent = function (bj3, bj4) {
    var bj5 = this._lastEventId = Object(bj8.g)();
    this._invokeClient("captureEvent", bj3, bj7.a({}, bj4, {
      event_id: bj5
    }));
    return bj5;
  };
  bj3.prototype.lastEventId = function () {
    return this._lastEventId;
  };
  bj3.prototype.addBreadcrumb = function (bj3, bj4) {
    var bj5 = this.getStackTop();
    if (bj5.scope && bj5.client) {
      var bj9 = bj5.client.getOptions && bj5.client.getOptions() || {};
      var bja = bj9.beforeBreadcrumb;
      var bjb = bja === undefined ? null : bja;
      var bjc = bj9.maxBreadcrumbs;
      var bjK = bjc === undefined ? 30 : bjc;
      if (bjK > 0) {
        var bjL = new Date().getTime() / 1000;
        var bjM = bj7.a({
          timestamp: bjL
        }, bj3);
        var bjN = bjb ? Object(bj8.b)(function () {
          return bjb(bjM, bj4);
        }) : bjM;
        if (bjN !== null) {
          bj5.scope.addBreadcrumb(bjN, Math.min(bjK, 100));
        }
      }
    }
  };
  bj3.prototype.setUser = function (bj3) {
    var bj4 = this.getStackTop();
    if (bj4.scope) {
      bj4.scope.setUser(bj3);
    }
  };
  bj3.prototype.setTags = function (bj3) {
    var bj4 = this.getStackTop();
    if (bj4.scope) {
      bj4.scope.setTags(bj3);
    }
  };
  bj3.prototype.setExtras = function (bj3) {
    var bj4 = this.getStackTop();
    if (bj4.scope) {
      bj4.scope.setExtras(bj3);
    }
  };
  bj3.prototype.setTag = function (bj3, bj4) {
    var bj5 = this.getStackTop();
    if (bj5.scope) {
      bj5.scope.setTag(bj3, bj4);
    }
  };
  bj3.prototype.setExtra = function (bj3, bj4) {
    var bj5 = this.getStackTop();
    if (bj5.scope) {
      bj5.scope.setExtra(bj3, bj4);
    }
  };
  bj3.prototype.setContext = function (bj3, bj4) {
    var bj5 = this.getStackTop();
    if (bj5.scope) {
      bj5.scope.setContext(bj3, bj4);
    }
  };
  bj3.prototype.configureScope = function (bj3) {
    var bj4 = this.getStackTop();
    if (bj4.scope && bj4.client) {
      bj3(bj4.scope);
    }
  };
  bj3.prototype.run = function (bj3) {
    var bj4 = bke(this);
    try {
      bj3(this);
    } finally {
      bke(bj4);
    }
  };
  bj3.prototype.getIntegration = function (bj3) {
    var bj4 = this.getClient();
    if (!bj4) {
      return null;
    }
    try {
      return bj4.getIntegration(bj3);
    } catch (bk9) {
      bj9.a.warn("Cannot retrieve integration " + bj3.id + " from the current Hub");
      return null;
    }
  };
  bj3.prototype.traceHeaders = function () {
    var bj3 = this.getStackTop();
    if (bj3.scope && bj3.client) {
      var bj4 = bj3.scope.getSpan();
      if (bj4) {
        return {
          "sentry-trace": bj4.toTraceparent()
        };
      }
    }
    return {};
  };
  return bj3;
}();
function bkc() {
  var bj3 = Object(bj8.e)();
  bj3.__SENTRY__ = bj3.__SENTRY__ || {
    hub: undefined
  };
  return bj3;
}
function bke(bj3) {
  var bj4 = bkc();
  var bj5 = c(bj4);
  bkr(bj4, bj3);
  return bj5;
}
export function b() {
  var bj4 = bkc();
  if (!bkn(bj4) || c(bj4).isOlderThan(bjb)) {
    bkr(bj4, new a());
  }
  try {
    var bj5 = Object(bj8.c)(bj3, "domain").active;
    if (!bj5) {
      return c(bj4);
    }
    if (!bkn(bj5) || c(bj5).isOlderThan(bjb)) {
      var bj7 = c(bj4).getStackTop();
      bkr(bj5, new a(bj7.client, bja.a.clone(bj7.scope)));
    }
    return c(bj5);
  } catch (bkm) {
    return c(bj4);
  }
}
function bkn(bj3) {
  return !!bj3 && !!bj3.__SENTRY__ && !!bj3.__SENTRY__.hub;
}
export function c(bj3) {
  if (bj3 && bj3.__SENTRY__ && bj3.__SENTRY__.hub) {
    return bj3.__SENTRY__.hub;
  } else {
    bj3.__SENTRY__ = bj3.__SENTRY__ || {};
    bj3.__SENTRY__.hub = new a();
    return bj3.__SENTRY__.hub;
  }
}
function bkr(bj3, bj4) {
  return !!bj3 && (bj3.__SENTRY__ = bj3.__SENTRY__ || {}, bj3.__SENTRY__.hub = bj4, true);
}