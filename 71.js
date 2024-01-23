var cc1 = {};
var cc2 = {};
export var Transports = {};
export var Severity;
var cc5;
export var Status;
import * as cc7 from "./0.js";
(cc5 = Severity ||= {}).Fatal = "fatal";
cc5.Error = "error";
cc5.Warning = "warning";
cc5.Log = "log";
cc5.Info = "info";
cc5.Debug = "debug";
cc5.Critical = "critical";
(function (cbY) {
  cbY.fromString = function (cbZ) {
    switch (cbZ) {
      case "debug":
        return cbY.Debug;
      case "info":
        return cbY.Info;
      case "warn":
      case "warning":
        return cbY.Warning;
      case "error":
        return cbY.Error;
      case "fatal":
        return cbY.Fatal;
      case "critical":
        return cbY.Critical;
      case "log":
      default:
        return cbY.Log;
    }
  };
})(Severity ||= {});
(function (cbY) {
  cbY.Unknown = "unknown";
  cbY.Skipped = "skipped";
  cbY.Success = "success";
  cbY.RateLimit = "rate_limit";
  cbY.Invalid = "invalid";
  cbY.Failed = "failed";
})(Status ||= {});
(function (cbY) {
  cbY.fromHttpCode = function (cbZ) {
    if (cbZ >= 200 && cbZ < 300) {
      return cbY.Success;
    } else if (cbZ === 429) {
      return cbY.RateLimit;
    } else if (cbZ >= 400 && cbZ < 500) {
      return cbY.Invalid;
    } else if (cbZ >= 500) {
      return cbY.Failed;
    } else {
      return cbY.Unknown;
    }
  };
})(Status ||= {});
import * as ccd from "./9.js";
function cce(cbY) {
  for (var cbZ = [], cc0 = 1; cc0 < arguments.length; cc0++) {
    cbZ[cc0 - 1] = arguments[cc0];
  }
  var cc1 = Object(ccd.b)();
  if (cc1 && cc1[cbY]) {
    return cc1[cbY].apply(cc1, cc7.d(cbZ));
  }
  throw new Error("No hub defined or " + cbY + " was not found on the hub, please open a bug report.");
}
export function captureException(cbY) {
  var cbZ;
  try {
    throw new Error("Sentry syntheticException");
  } catch (ccm) {
    cbZ = ccm;
  }
  return cce("captureException", cbY, {
    originalException: cbY,
    syntheticException: cbZ
  });
}
export function captureMessage(cbY, cbZ) {
  var cc0;
  try {
    throw new Error(cbY);
  } catch (ccr) {
    cc0 = ccr;
  }
  return cce("captureMessage", cbY, cbZ, {
    originalException: cbY,
    syntheticException: cc0
  });
}
export function captureEvent(cbY) {
  return cce("captureEvent", cbY);
}
export function configureScope(cbY) {
  cce("configureScope", cbY);
}
export function addBreadcrumb(cbY) {
  cce("addBreadcrumb", cbY);
}
export function setContext(cbY, cbZ) {
  cce("setContext", cbY, cbZ);
}
export function setExtras(cbY) {
  cce("setExtras", cbY);
}
export function setTags(cbY) {
  cce("setTags", cbY);
}
export function setExtra(cbY, cbZ) {
  cce("setExtra", cbY, cbZ);
}
export function setTag(cbY, cbZ) {
  cce("setTag", cbY, cbZ);
}
export function setUser(cbY) {
  cce("setUser", cbY);
}
export function withScope(cbY) {
  cce("withScope", cbY);
}
var ccP;
import * as ccQ from "./10.js";
import * as ccR from "./13.js";
export var FunctionToString = function () {
  function cbY() {
    this.name = cbY.id;
  }
  cbY.prototype.setupOnce = function () {
    ccP = Function.prototype.toString;
    Function.prototype.toString = function () {
      for (var cbY = [], cbZ = 0; cbZ < arguments.length; cbZ++) {
        cbY[cbZ] = arguments[cbZ];
      }
      var cc0 = this.__sentry__ ? this.__sentry_original__ : this;
      return ccP.apply(cc0, cbY);
    };
  };
  cbY.id = "FunctionToString";
  return cbY;
}();
import * as ccT from "./24.js";
import * as ccU from "./2.js";
import * as ccV from "./5.js";
function cd0(cbY, cbZ) {
  if (cbZ === undefined) {
    cbZ = 0;
  }
  if (typeof cbY != "string" || cbZ === 0) {
    return cbY;
  } else if (cbY.length <= cbZ) {
    return cbY;
  } else {
    return cbY.substr(0, cbZ) + "...";
  }
}
function cd3(cbY, cbZ) {
  if (!Array.isArray(cbY)) {
    return "";
  }
  for (var cc0, cc1 = [], cc2 = 0; cc2 < cbY.length; cc2++) {
    cc0 = cbY[cc2];
    try {
      cc1.push(cc0 + "");
    } catch (cd9) {
      cc1.push("[value cannot be serialized]");
    }
  }
  return cc1.join(cbZ);
}
function cda(cbY, cbZ) {
  if (cbZ === undefined) {
    cbZ = 40;
  }
  if (!cbY.length) {
    return "[object has no keys]";
  }
  if (cbY[0].length >= cbZ) {
    return cd0(cbY[0], cbZ);
  }
  for (var cc0, cc1 = cbY.length; cc1 > 0; cc1--) {
    if ((cc0 = cbY.slice(0, cc1).join(", ")).length <= cbZ) {
      if (cc1 === cbY.length) {
        return cc0;
      } else {
        return cd0(cc0, cbZ);
      }
    }
  }
  return "";
}
function cdf(cbY, cbZ) {
  if (Object(ccV.g)(cbZ)) {
    return cbZ.test(cbY);
  } else {
    return typeof cbZ == "string" && cbY.includes(cbZ);
  }
}
var cdi = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/];
export var InboundFilters = function () {
  function cbY(cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    this._options = cbZ;
    this.name = cbY.id;
  }
  cbY.prototype.setupOnce = function () {
    Object(ccQ.b)(function (cbZ) {
      var cc0 = Object(ccd.b)();
      if (!cc0) {
        return cbZ;
      }
      var cc1 = cc0.getIntegration(cbY);
      if (cc1) {
        var cc2 = cc0.getClient();
        var cc3 = cc2 ? cc2.getOptions() : {};
        var cc4 = cc1._mergeOptions(cc3);
        if (cc1._shouldDropEvent(cbZ, cc4)) {
          return null;
        }
      }
      return cbZ;
    });
  };
  cbY.prototype._shouldDropEvent = function (cbY, cbZ) {
    if (this._isSentryError(cbY, cbZ)) {
      ccT.a.warn("Event dropped due to being internal Sentry Error.\nEvent: " + Object(ccU.d)(cbY));
      return true;
    } else if (this._isIgnoredError(cbY, cbZ)) {
      ccT.a.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + Object(ccU.d)(cbY));
      return true;
    } else if (this._isBlacklistedUrl(cbY, cbZ)) {
      ccT.a.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + Object(ccU.d)(cbY) + ".\nUrl: " + this._getEventFilterUrl(cbY));
      return true;
    } else {
      return !this._isWhitelistedUrl(cbY, cbZ) && (ccT.a.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + Object(ccU.d)(cbY) + ".\nUrl: " + this._getEventFilterUrl(cbY)), true);
    }
  };
  cbY.prototype._isSentryError = function (cbY, cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    if (!cbZ.ignoreInternal) {
      return false;
    }
    try {
      return cbY.exception.values[0].type === "SentryError";
    } catch (cdD) {
      return false;
    }
  };
  cbY.prototype._isIgnoredError = function (cbY, cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    return !!cbZ.ignoreErrors && !!cbZ.ignoreErrors.length && this._getPossibleEventMessages(cbY).some(function (cbY) {
      return cbZ.ignoreErrors.some(function (cbZ) {
        return cdf(cbY, cbZ);
      });
    });
  };
  cbY.prototype._isBlacklistedUrl = function (cbY, cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    if (!cbZ.blacklistUrls || !cbZ.blacklistUrls.length) {
      return false;
    }
    var cc0 = this._getEventFilterUrl(cbY);
    return !!cc0 && cbZ.blacklistUrls.some(function (cbY) {
      return cdf(cc0, cbY);
    });
  };
  cbY.prototype._isWhitelistedUrl = function (cbY, cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    if (!cbZ.whitelistUrls || !cbZ.whitelistUrls.length) {
      return true;
    }
    var cc0 = this._getEventFilterUrl(cbY);
    return !cc0 || cbZ.whitelistUrls.some(function (cbY) {
      return cdf(cc0, cbY);
    });
  };
  cbY.prototype._mergeOptions = function (cbY) {
    if (cbY === undefined) {
      cbY = {};
    }
    return {
      blacklistUrls: cc7.d(this._options.blacklistUrls || [], cbY.blacklistUrls || []),
      ignoreErrors: cc7.d(this._options.ignoreErrors || [], cbY.ignoreErrors || [], cdi),
      ignoreInternal: this._options.ignoreInternal === undefined || this._options.ignoreInternal,
      whitelistUrls: cc7.d(this._options.whitelistUrls || [], cbY.whitelistUrls || [])
    };
  };
  cbY.prototype._getPossibleEventMessages = function (cbY) {
    if (cbY.message) {
      return [cbY.message];
    }
    if (cbY.exception) {
      try {
        var cbZ = cbY.exception.values[0];
        var cc0 = cbZ.type;
        var cc1 = cbZ.value;
        return ["" + cc1, cc0 + ": " + cc1];
      } catch (cdV) {
        ccT.a.error("Cannot extract message for event " + Object(ccU.d)(cbY));
        return [];
      }
    }
    return [];
  };
  cbY.prototype._getEventFilterUrl = function (cbY) {
    try {
      if (cbY.stacktrace) {
        var cbZ = cbY.stacktrace.frames;
        return cbZ[cbZ.length - 1].filename;
      }
      if (cbY.exception) {
        var cc0 = cbY.exception.values[0].stacktrace.frames;
        return cc0[cc0.length - 1].filename;
      }
      return null;
    } catch (cdZ) {
      ccT.a.error("Cannot extract url for event " + Object(ccU.d)(cbY));
      return null;
    }
  };
  cbY.id = "InboundFilters";
  return cbY;
}();
import * as cdk from "./6.js";
var cdl = function (cbY) {
  function cbZ(cbZ) {
    var cc0 = this.constructor;
    var cc1 = cbY.call(this, cbZ) || this;
    cc1.message = cbZ;
    cc1.name = cc0.prototype.constructor.name;
    Object.setPrototypeOf(cc1, cc0.prototype);
    return cc1;
  }
  cc7.b(cbZ, cbY);
  return cbZ;
}(Error);
var cdm = /^(?:(\w+):)\/\/(?:(\w+)(?::(\w+))?@)([\w\.-]+)(?::(\d+))?\/(.+)/;
var cdn = function () {
  function cbY(cbY) {
    if (typeof cbY == "string") {
      this._fromString(cbY);
    } else {
      this._fromComponents(cbY);
    }
    this._validate();
  }
  cbY.prototype.toString = function (cbY) {
    if (cbY === undefined) {
      cbY = false;
    }
    var cbZ = this;
    var cc0 = cbZ.host;
    var cc1 = cbZ.path;
    var cc2 = cbZ.pass;
    var cc3 = cbZ.port;
    var cc4 = cbZ.projectId;
    return cbZ.protocol + "://" + cbZ.user + (cbY && cc2 ? ":" + cc2 : "") + "@" + cc0 + (cc3 ? ":" + cc3 : "") + "/" + (cc1 ? cc1 + "/" : cc1) + cc4;
  };
  cbY.prototype._fromString = function (cbY) {
    var cbZ = cdm.exec(cbY);
    if (!cbZ) {
      throw new cdl("Invalid Dsn");
    }
    var cc0 = cc7.c(cbZ.slice(1), 6);
    var cc1 = cc0[0];
    var cc2 = cc0[1];
    var cc3 = cc0[2];
    var cc4 = cc3 === undefined ? "" : cc3;
    var cc5 = cc0[3];
    var cc6 = cc0[4];
    var ccd = cc6 === undefined ? "" : cc6;
    var cce = "";
    var ccj = cc0[5];
    var ccn = ccj.split("/");
    if (ccn.length > 1) {
      cce = ccn.slice(0, -1).join("/");
      ccj = ccn.pop();
    }
    Object.assign(this, {
      host: cc5,
      pass: cc4,
      path: cce,
      projectId: ccj,
      port: ccd,
      protocol: cc1,
      user: cc2
    });
  };
  cbY.prototype._fromComponents = function (cbY) {
    this.protocol = cbY.protocol;
    this.user = cbY.user;
    this.pass = cbY.pass || "";
    this.host = cbY.host;
    this.port = cbY.port || "";
    this.path = cbY.path || "";
    this.projectId = cbY.projectId;
  };
  cbY.prototype._validate = function () {
    var cbY = this;
    ["protocol", "user", "host", "projectId"].forEach(function (cbZ) {
      if (!cbY[cbZ]) {
        throw new cdl("Invalid Dsn");
      }
    });
    if (this.protocol !== "http" && this.protocol !== "https") {
      throw new cdl("Invalid Dsn");
    }
    if (this.port && Number.isNaN(parseInt(this.port, 10))) {
      throw new cdl("Invalid Dsn");
    }
  };
  return cbY;
}();
var cdo = function () {
  function cbY(cbY) {
    this.dsn = cbY;
    this._dsnObject = new cdn(cbY);
  }
  cbY.prototype.getDsn = function () {
    return this._dsnObject;
  };
  cbY.prototype.getStoreEndpoint = function () {
    return "" + this._getBaseUrl() + this.getStoreEndpointPath();
  };
  cbY.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
    var cbY = {
      sentry_key: this._dsnObject.user,
      sentry_version: "7"
    };
    return this.getStoreEndpoint() + "?" + Object(cdk.d)(cbY);
  };
  cbY.prototype._getBaseUrl = function () {
    var cbY = this._dsnObject;
    var cbZ = cbY.protocol ? cbY.protocol + ":" : "";
    var cc0 = cbY.port ? ":" + cbY.port : "";
    return cbZ + "//" + cbY.host + cc0;
  };
  cbY.prototype.getStoreEndpointPath = function () {
    var cbY = this._dsnObject;
    return (cbY.path ? "/" + cbY.path : "") + "/api/" + cbY.projectId + "/store/";
  };
  cbY.prototype.getRequestHeaders = function (cbY, cbZ) {
    var cc0 = this._dsnObject;
    var cc1 = ["Sentry sentry_version=7"];
    cc1.push("sentry_timestamp=" + new Date().getTime());
    cc1.push("sentry_client=" + cbY + "/" + cbZ);
    cc1.push("sentry_key=" + cc0.user);
    if (cc0.pass) {
      cc1.push("sentry_secret=" + cc0.pass);
    }
    return {
      "Content-Type": "application/json",
      "X-Sentry-Auth": cc1.join(", ")
    };
  };
  cbY.prototype.getReportDialogEndpoint = function (cbY) {
    if (cbY === undefined) {
      cbY = {};
    }
    var cbZ = this._dsnObject;
    var cc0 = this._getBaseUrl() + (cbZ.path ? "/" + cbZ.path : "") + "/api/embed/error-page/";
    var cc1 = [];
    cc1.push("dsn=" + cbZ.toString());
    for (var cc2 in cbY) {
      if (cc2 == "user") {
        if (!cbY.user) {
          continue;
        }
        if (cbY.user.name) {
          cc1.push("name=" + encodeURIComponent(cbY.user.name));
        }
        if (cbY.user.email) {
          cc1.push("email=" + encodeURIComponent(cbY.user.email));
        }
      } else {
        cc1.push(encodeURIComponent(cc2) + "=" + encodeURIComponent(cbY[cc2]));
      }
    }
    if (cc1.length) {
      return cc0 + "?" + cc1.join("&");
    } else {
      return cc0;
    }
  };
  return cbY;
}();
import * as cdp from "./72.js";
var cdq = [];
function ceK(cbY) {
  var cbZ = {};
  (function (cbY) {
    var cbZ = cbY.defaultIntegrations && cc7.d(cbY.defaultIntegrations) || [];
    var cc0 = cbY.integrations;
    var cc1 = [];
    if (Array.isArray(cc0)) {
      var cc2 = cc0.map(function (cbY) {
        return cbY.name;
      });
      var cc3 = [];
      cbZ.forEach(function (cbY) {
        if (cc2.indexOf(cbY.name) === -1 && cc3.indexOf(cbY.name) === -1) {
          cc1.push(cbY);
          cc3.push(cbY.name);
        }
      });
      cc0.forEach(function (cbY) {
        if (cc3.indexOf(cbY.name) === -1) {
          cc1.push(cbY);
          cc3.push(cbY.name);
        }
      });
    } else {
      if (typeof cc0 != "function") {
        return cc7.d(cbZ);
      }
      cc1 = cc0(cbZ);
      cc1 = Array.isArray(cc1) ? cc1 : [cc1];
    }
    return cc1;
  })(cbY).forEach(function (cbY) {
    cbZ[cbY.name] = cbY;
    (function (cbY) {
      if (cdq.indexOf(cbY.name) === -1) {
        cbY.setupOnce(ccQ.b, ccd.b);
        cdq.push(cbY.name);
        ccT.a.log("Integration installed: " + cbY.name);
      }
    })(cbY);
  });
  return cbZ;
}
var ceY = function () {
  function cbY(cbY, cbZ) {
    this._processing = false;
    this._backend = new cbY(cbZ);
    this._options = cbZ;
    if (cbZ.dsn) {
      this._dsn = new cdn(cbZ.dsn);
    }
    this._integrations = ceK(this._options);
  }
  cbY.prototype.captureException = function (cbY, cbZ, cc0) {
    var cc1 = this;
    var cc2 = cbZ && cbZ.event_id;
    this._processing = true;
    this._getBackend().eventFromException(cbY, cbZ).then(function (cbY) {
      return cc1._processEvent(cbY, cbZ, cc0);
    }).then(function (cbY) {
      cc2 = cbY && cbY.event_id;
      cc1._processing = false;
    }).catch(function (cbY) {
      ccT.a.error(cbY);
      cc1._processing = false;
    });
    return cc2;
  };
  cbY.prototype.captureMessage = function (cbY, cbZ, cc0, cc1) {
    var cc2 = this;
    var cc3 = cc0 && cc0.event_id;
    this._processing = true;
    (Object(ccV.f)(cbY) ? this._getBackend().eventFromMessage("" + cbY, cbZ, cc0) : this._getBackend().eventFromException(cbY, cc0)).then(function (cbY) {
      return cc2._processEvent(cbY, cc0, cc1);
    }).then(function (cbY) {
      cc3 = cbY && cbY.event_id;
      cc2._processing = false;
    }).catch(function (cbY) {
      ccT.a.error(cbY);
      cc2._processing = false;
    });
    return cc3;
  };
  cbY.prototype.captureEvent = function (cbY, cbZ, cc0) {
    var cc1 = this;
    var cc2 = cbZ && cbZ.event_id;
    this._processing = true;
    this._processEvent(cbY, cbZ, cc0).then(function (cbY) {
      cc2 = cbY && cbY.event_id;
      cc1._processing = false;
    }).catch(function (cbY) {
      ccT.a.error(cbY);
      cc1._processing = false;
    });
    return cc2;
  };
  cbY.prototype.getDsn = function () {
    return this._dsn;
  };
  cbY.prototype.getOptions = function () {
    return this._options;
  };
  cbY.prototype.flush = function (cbY) {
    var cbZ = this;
    return this._isClientProcessing(cbY).then(function (cc0) {
      if (cbZ._processingInterval) {
        clearInterval(cbZ._processingInterval);
      }
      return cbZ._getBackend().getTransport().close(cbY).then(function (cbY) {
        return cc0 && cbY;
      });
    });
  };
  cbY.prototype.close = function (cbY) {
    var cbZ = this;
    return this.flush(cbY).then(function (cbY) {
      cbZ.getOptions().enabled = false;
      return cbY;
    });
  };
  cbY.prototype.getIntegrations = function () {
    return this._integrations || {};
  };
  cbY.prototype.getIntegration = function (cbY) {
    try {
      return this._integrations[cbY.id] || null;
    } catch (cfA) {
      ccT.a.warn("Cannot retrieve integration " + cbY.id + " from the current Client");
      return null;
    }
  };
  cbY.prototype._isClientProcessing = function (cbY) {
    var cbZ = this;
    return new Promise(function (cc0) {
      var cc1 = 0;
      if (cbZ._processingInterval) {
        clearInterval(cbZ._processingInterval);
      }
      cbZ._processingInterval = setInterval(function () {
        if (cbZ._processing) {
          cc1 += 1;
          if (cbY && cc1 >= cbY) {
            cc0(false);
          }
        } else {
          cc0(true);
        }
      }, 1);
    });
  };
  cbY.prototype._getBackend = function () {
    return this._backend;
  };
  cbY.prototype._isEnabled = function () {
    return this.getOptions().enabled !== false && this._dsn !== undefined;
  };
  cbY.prototype._prepareEvent = function (cbY, cbZ, cc0) {
    var cc1 = this.getOptions();
    var cc2 = cc1.environment;
    var cc3 = cc1.release;
    var cc4 = cc1.dist;
    var cc5 = cc1.maxValueLength;
    var cc6 = cc5 === undefined ? 250 : cc5;
    var ccd = cc7.a({}, cbY);
    if (ccd.environment === undefined && cc2 !== undefined) {
      ccd.environment = cc2;
    }
    if (ccd.release === undefined && cc3 !== undefined) {
      ccd.release = cc3;
    }
    if (ccd.dist === undefined && cc4 !== undefined) {
      ccd.dist = cc4;
    }
    ccd.message &&= cd0(ccd.message, cc6);
    var cce = ccd.exception && ccd.exception.values && ccd.exception.values[0];
    if (cce && cce.value) {
      cce.value = cd0(cce.value, cc6);
    }
    var ccj = ccd.request;
    if (ccj && ccj.url) {
      ccj.url = cd0(ccj.url, cc6);
    }
    if (ccd.event_id === undefined) {
      ccd.event_id = Object(ccU.g)();
    }
    this._addIntegrations(ccd.sdk);
    var ccn = cdp.a.resolve(ccd);
    if (cbZ) {
      ccn = cbZ.applyToEvent(ccd, cc0);
    }
    return ccn;
  };
  cbY.prototype._addIntegrations = function (cbY) {
    var cbZ = Object.keys(this._integrations);
    if (cbY && cbZ.length > 0) {
      cbY.integrations = cbZ;
    }
  };
  cbY.prototype._processEvent = function (cbY, cbZ, cc0) {
    var cc1 = this;
    var cc2 = this.getOptions();
    var cc3 = cc2.beforeSend;
    var cc4 = cc2.sampleRate;
    if (this._isEnabled()) {
      if (typeof cc4 == "number" && Math.random() > cc4) {
        return cdp.a.reject("This event has been sampled, will not send event.");
      } else {
        return new cdp.a(function (cc2, cc4) {
          cc1._prepareEvent(cbY, cc0, cbZ).then(function (cbY) {
            if (cbY !== null) {
              var cc0 = cbY;
              try {
                if (cbZ && cbZ.data && cbZ.data.__sentry__ === true || !cc3) {
                  cc1._getBackend().sendEvent(cc0);
                  cc2(cc0);
                  return;
                }
                var cc5 = cc3(cbY, cbZ);
                if (cc5 === undefined) {
                  ccT.a.error("`beforeSend` method has to return `null` or a valid event.");
                } else if (Object(ccV.j)(cc5)) {
                  cc1._handleAsyncBeforeSend(cc5, cc2, cc4);
                } else {
                  if ((cc0 = cc5) === null) {
                    ccT.a.log("`beforeSend` returned `null`, will not send event.");
                    cc2(null);
                    return;
                  }
                  cc1._getBackend().sendEvent(cc0);
                  cc2(cc0);
                }
              } catch (cg6) {
                cc1.captureException(cg6, {
                  data: {
                    __sentry__: true
                  },
                  originalException: cg6
                });
                cc4("`beforeSend` throw an error, will not send event.");
              }
            } else {
              cc4("An event processor returned null, will not send event.");
            }
          });
        });
      }
    } else {
      return cdp.a.reject("SDK not enabled, will not send event.");
    }
  };
  cbY.prototype._handleAsyncBeforeSend = function (cbY, cbZ, cc0) {
    var cc1 = this;
    cbY.then(function (cbY) {
      if (cbY === null) {
        cc0("`beforeSend` returned `null`, will not send event.");
        return;
      } else {
        cc1._getBackend().sendEvent(cbY);
        cbZ(cbY);
        return;
      }
    }).catch(function (cbY) {
      cc0("beforeSend rejected with " + cbY);
    });
  };
  return cbY;
}();
var ceZ = function () {
  function cbY() {}
  cbY.prototype.sendEvent = function () {
    return Promise.resolve({
      reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
      status: Status.Skipped
    });
  };
  cbY.prototype.close = function () {
    return Promise.resolve(true);
  };
  return cbY;
}();
var cf0 = function () {
  function cbY(cbY) {
    this._options = cbY;
    if (!this._options.dsn) {
      ccT.a.warn("No DSN provided, backend will not do anything.");
    }
    this._transport = this._setupTransport();
  }
  cbY.prototype._setupTransport = function () {
    return new ceZ();
  };
  cbY.prototype.eventFromException = function () {
    throw new cdl("Backend has to implement `eventFromException` method");
  };
  cbY.prototype.eventFromMessage = function () {
    throw new cdl("Backend has to implement `eventFromMessage` method");
  };
  cbY.prototype.sendEvent = function (cbY) {
    this._transport.sendEvent(cbY).catch(function (cbY) {
      ccT.a.error("Error while sending event: " + cbY);
    });
  };
  cbY.prototype.getTransport = function () {
    return this._transport;
  };
  return cbY;
}();
function cgi() {
  if (!("fetch" in Object(ccU.e)())) {
    return false;
  }
  try {
    new Headers();
    new Request("");
    new Response();
    return true;
  } catch (cgj) {
    return false;
  }
}
function cgk() {
  if (!cgi()) {
    return false;
  }
  try {
    new Request("_", {
      referrerPolicy: "origin"
    });
    return true;
  } catch (cgl) {
    return false;
  }
}
/**
* TraceKit - Cross brower stack traces
*
* This was originally forked from github.com/occ/TraceKit, but has since been
* largely modified and is now maintained as part of Sentry JS SDK.
*
* NOTE: Last merge with upstream repository
* Jul 11,2018 - #f03357c
*
* https://github.com/csnover/TraceKit
* @license MIT
* @namespace TraceKit
*/
/**
* TraceKit - Cross brower stack traces
*
* This was originally forked from github.com/occ/TraceKit, but has since been
* largely modified and is now maintained as part of Sentry JS SDK.
*
* NOTE: Last merge with upstream repository
* Jul 11,2018 - #f03357c
*
* https://github.com/csnover/TraceKit
* @license MIT
* @namespace TraceKit
*/
var cgm = Object(ccU.e)();
var cgn = {
  _report: false,
  _collectWindowErrors: false,
  _computeStackTrace: false,
  _linesOfContext: false
};
var cgo = "?";
var cgp = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/;
function cgq(cbY, cbZ) {
  return Object.prototype.hasOwnProperty.call(cbY, cbZ);
}
function cgt() {
  if (typeof document == "undefined" || document.location == null) {
    return "";
  } else {
    return document.location.href;
  }
}
cgn._report = function () {
  function cbY(cbY, cbZ, cc0) {
    var cc1 = null;
    if (!cbZ || cgn._collectWindowErrors) {
      for (var cc2 in cc5) {
        if (cgq(cc5, cc2)) {
          try {
            cc5[cc2](cbY, cbZ, cc0);
          } catch (cgA) {
            cc1 = cgA;
          }
        }
      }
      if (cc1) {
        throw cc1;
      }
    }
  }
  function cbZ(cbZ, cc0, cc2, cc4, cc5) {
    var cc6 = null;
    cc5 = Object(ccV.d)(cc5) ? cc5.error : cc5;
    cbZ = Object(ccV.d)(cbZ) ? cbZ.message : cbZ;
    if (ccd) {
      cgn._computeStackTrace._augmentStackTraceWithInitialElement(ccd, cc0, cc2, cbZ);
      cc1();
    } else if (cc5 && Object(ccV.c)(cc5)) {
      (cc6 = cgn._computeStackTrace(cc5)).mechanism = "onerror";
      cbY(cc6, true, cc5);
    } else {
      var cce;
      var ccj = {
        url: cc0,
        line: cc2,
        column: cc4
      };
      var ccn = cbZ;
      if ({}.toString.call(cbZ) === "[object String]") {
        var ccs = cbZ.match(cgp);
        if (ccs) {
          cce = ccs[1];
          ccn = ccs[2];
        }
      }
      ccj.func = cgo;
      ccj.context = null;
      cbY(cc6 = {
        name: cce,
        message: ccn,
        mode: "onerror",
        mechanism: "onerror",
        stack: [cc7.a({}, ccj, {
          url: ccj.url || cgt()
        })]
      }, true, null);
    }
    return !!cc3 && cc3.apply(this, arguments);
  }
  function cc0(cbZ) {
    var cc0 = cbZ && (cbZ.detail ? cbZ.detail.reason : cbZ.reason) || cbZ;
    var cc1 = cgn._computeStackTrace(cc0);
    cc1.mechanism = "onunhandledrejection";
    cc1.message ||= JSON.stringify(Object(cdk.b)(cc0));
    cbY(cc1, true, cc0);
  }
  function cc1() {
    var cbZ = ccd;
    var cc0 = cc6;
    ccd = null;
    cc6 = null;
    cbY(cbZ, false, cc0);
  }
  function cc2(cbY) {
    if (ccd) {
      if (cc6 === cbY) {
        return;
      }
      cc1();
    }
    var cbZ = cgn._computeStackTrace(cbY);
    ccd = cbZ;
    cc6 = cbY;
    setTimeout(function () {
      if (cc6 === cbY) {
        cc1();
      }
    }, cbZ.incomplete ? 2000 : 0);
    throw cbY;
  }
  var cc3;
  var cc4;
  var cc5 = [];
  var cc6 = null;
  var ccd = null;
  cc2._subscribe = function (cbY) {
    cc5.push(cbY);
  };
  cc2._installGlobalHandler = function () {
    if (cc4 !== true) {
      cc3 = cgm.onerror;
      cgm.onerror = cbZ;
      cc4 = true;
    }
  };
  cc2._installGlobalUnhandledRejectionHandler = function () {
    cgm.onunhandledrejection = cc0;
  };
  return cc2;
}();
cgn._computeStackTrace = function () {
  function cbY(cbY) {
    if (!cbY || !cbY.stack) {
      return null;
    }
    for (var cbZ, cc0, cc1, cc2 = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, cc3 = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, cc4 = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, cc5 = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, cc6 = /\((\S*)(?::(\d+))(?::(\d+))\)/, cc7 = cbY.stack.split("\n"), ccd = [], cce = /^(.*) is undefined$/.exec(cbY.message), ccj = 0, ccn = cc7.length; ccj < ccn; ++ccj) {
      if (cc0 = cc2.exec(cc7[ccj])) {
        var ccs = cc0[2] && cc0[2].indexOf("native") === 0;
        if (cc0[2] && cc0[2].indexOf("eval") === 0 && (cbZ = cc6.exec(cc0[2]))) {
          cc0[2] = cbZ[1];
          cc0[3] = cbZ[2];
          cc0[4] = cbZ[3];
        }
        cc1 = {
          url: cc0[2],
          func: cc0[1] || cgo,
          args: ccs ? [cc0[2]] : [],
          line: cc0[3] ? +cc0[3] : null,
          column: cc0[4] ? +cc0[4] : null
        };
      } else if (cc0 = cc4.exec(cc7[ccj])) {
        cc1 = {
          url: cc0[2],
          func: cc0[1] || cgo,
          args: [],
          line: +cc0[3],
          column: cc0[4] ? +cc0[4] : null
        };
      } else {
        if (!(cc0 = cc3.exec(cc7[ccj]))) {
          continue;
        }
        if (cc0[3] && cc0[3].indexOf(" > eval") > -1 && (cbZ = cc5.exec(cc0[3]))) {
          cc0[1] = cc0[1] || "eval";
          cc0[3] = cbZ[1];
          cc0[4] = cbZ[2];
          cc0[5] = "";
        } else if (ccj == 0 && !cc0[5] && cbY.columnNumber !== undefined) {
          ccd[0].column = cbY.columnNumber + 1;
        }
        cc1 = {
          url: cc0[3],
          func: cc0[1] || cgo,
          args: cc0[2] ? cc0[2].split(",") : [],
          line: cc0[4] ? +cc0[4] : null,
          column: cc0[5] ? +cc0[5] : null
        };
      }
      if (!cc1.func && cc1.line) {
        cc1.func = cgo;
      }
      cc1.context = null;
      ccd.push(cc1);
    }
    if (ccd.length) {
      if (ccd[0] && ccd[0].line && !ccd[0].column && cce) {
        ccd[0].column = null;
      }
      return {
        mode: "stack",
        name: cbY.name,
        message: cbY.message,
        stack: ccd
      };
    } else {
      return null;
    }
  }
  function cbZ(cbY, cbZ, cc0, cc1) {
    var cc2 = {
      url: cbZ,
      line: cc0
    };
    if (cc2.url && cc2.line) {
      cbY.incomplete = false;
      cc2.func ||= cgo;
      cc2.context ||= null;
      if (/ '([^']+)' /.exec(cc1)) {
        cc2.column = null;
      }
      if (cbY.stack.length > 0 && cbY.stack[0].url === cc2.url) {
        if (cbY.stack[0].line === cc2.line) {
          return false;
        }
        if (!cbY.stack[0].line && cbY.stack[0].func === cc2.func) {
          cbY.stack[0].line = cc2.line;
          cbY.stack[0].context = cc2.context;
          return false;
        }
      }
      cbY.stack.unshift(cc2);
      cbY.partial = true;
      return true;
    }
    cbY.incomplete = true;
    return false;
  }
  function cc0(cbY, cc1) {
    for (var cc2, cc3, cc4 = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, cc5 = [], cc6 = {}, cc7 = false, ccd = cc0.caller; ccd && !cc7; ccd = ccd.caller) {
      if (ccd !== ci6 && ccd !== cgn._report) {
        cc3 = {
          url: null,
          func: cgo,
          args: [],
          line: null,
          column: null
        };
        if (ccd.name) {
          cc3.func = ccd.name;
        } else if (cc2 = cc4.exec(ccd.toString())) {
          cc3.func = cc2[1];
        }
        if (cc3.func === undefined) {
          try {
            cc3.func = cc2.input.substring(0, cc2.input.indexOf("{"));
          } catch (chy) {}
        }
        if (cc6["" + ccd]) {
          cc7 = true;
        } else {
          cc6["" + ccd] = true;
        }
        cc5.push(cc3);
      }
    }
    if (cc1) {
      cc5.splice(0, cc1);
    }
    var cce = {
      mode: "callers",
      name: cbY.name,
      message: cbY.message,
      stack: cc5
    };
    cbZ(cce, cbY.sourceURL || cbY.fileName, cbY.line || cbY.lineNumber, cbY.message || cbY.description);
    return cce;
  }
  function cc1(cbZ, cc1) {
    var cc2 = null;
    cc1 = cc1 == null ? 0 : +cc1;
    try {
      if (cc2 = function (cbY) {
        var cbZ = cbY.stacktrace;
        if (cbZ) {
          for (var cc0, cc1, cc2 = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, cc3 = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, cc4 = cbZ.split("\n"), cc5 = [], cc6 = 0; cc6 < cc4.length; cc6 += 2) {
            cc1 = null;
            if (cc0 = cc2.exec(cc4[cc6])) {
              cc1 = {
                url: cc0[2],
                line: +cc0[1],
                column: null,
                func: cc0[3],
                args: []
              };
            } else if (cc0 = cc3.exec(cc4[cc6])) {
              cc1 = {
                url: cc0[6],
                line: +cc0[1],
                column: +cc0[2],
                func: cc0[3] || cc0[4],
                args: cc0[5] ? cc0[5].split(",") : []
              };
            }
            if (cc1) {
              if (!cc1.func && cc1.line) {
                cc1.func = cgo;
              }
              if (cc1.line) {
                cc1.context = null;
              }
              if (!cc1.context) {
                cc1.context = [cc4[cc6 + 1]];
              }
              cc5.push(cc1);
            }
          }
          if (cc5.length) {
            return {
              mode: "stacktrace",
              name: cbY.name,
              message: cbY.message,
              stack: cc5
            };
          } else {
            return null;
          }
        }
      }(cbZ)) {
        return cc2;
      }
    } catch (chN) {}
    try {
      if (cc2 = cbY(cbZ)) {
        return cc2;
      }
    } catch (chO) {}
    try {
      if (cc2 = function (cbY) {
        var cbZ = cbY.message.split("\n");
        if (cbZ.length < 4) {
          return null;
        }
        var cc0;
        var cc1 = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
        var cc2 = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i;
        var cc3 = /^\s*Line (\d+) of function script\s*$/i;
        var cc4 = [];
        var cc5 = cgm && cgm.document && cgm.document.getElementsByTagName("script");
        var cc6 = [];
        for (var cc7 in cc5) {
          if (cgq(cc5, cc7) && !cc5[cc7].src) {
            cc6.push(cc5[cc7]);
          }
        }
        for (var ccd, cce = 2; cce < cbZ.length; cce += 2) {
          ccd = null;
          if (cc0 = cc1.exec(cbZ[cce])) {
            ccd = {
              url: cc0[2],
              func: cc0[3],
              args: [],
              line: +cc0[1],
              column: null
            };
          } else if (cc0 = cc2.exec(cbZ[cce])) {
            ccd = {
              url: cc0[3],
              func: cc0[4],
              args: [],
              line: +cc0[1],
              column: null
            };
          } else if (cc0 = cc3.exec(cbZ[cce])) {
            ccd = {
              url: cgt().replace(/#.*$/, ""),
              func: "",
              args: [],
              line: cc0[1],
              column: null
            };
          }
          if (ccd) {
            if (!ccd.func) {
              ccd.func = cgo;
            }
            ccd.context = [cbZ[cce + 1]];
            cc4.push(ccd);
          }
        }
        if (cc4.length) {
          return {
            mode: "multiline",
            name: cbY.name,
            message: cbZ[0],
            stack: cc4
          };
        } else {
          return null;
        }
      }(cbZ)) {
        return cc2;
      }
    } catch (ci1) {}
    try {
      if (cc2 = cc0(cbZ, cc1 + 1)) {
        return cc2;
      }
    } catch (ci2) {}
    return {
      original: cbZ,
      name: cbZ.name,
      message: cbZ.message,
      mode: "failed"
    };
  }
  cc1._augmentStackTraceWithInitialElement = cbZ;
  cc1._computeStackTraceFromStackProp = cbY;
  return cc1;
}();
cgn._collectWindowErrors = true;
cgn._linesOfContext = 11;
var ci3 = cgn._report._subscribe;
var ci4 = cgn._report._installGlobalHandler;
var ci5 = cgn._report._installGlobalUnhandledRejectionHandler;
var ci6 = cgn._computeStackTrace;
var ci7 = 50;
function ci8(cbY) {
  var cbZ = cie(cbY.stack);
  var cc0 = {
    type: cbY.name,
    value: cbY.message
  };
  if (cbZ && cbZ.length) {
    cc0.stacktrace = {
      frames: cbZ
    };
  }
  if (cc0.type === undefined && cc0.value === "") {
    cc0.value = "Unrecoverable error caught";
  }
  return cc0;
}
function cic(cbY) {
  return {
    exception: {
      values: [ci8(cbY)]
    }
  };
}
function cie(cbY) {
  if (!cbY || !cbY.length) {
    return [];
  }
  var cbZ = cbY;
  var cc0 = cbZ[0].func || "";
  var cc1 = cbZ[cbZ.length - 1].func || "";
  if (cc0.includes("captureMessage") || cc0.includes("captureException")) {
    cbZ = cbZ.slice(1);
  }
  if (cc1.includes("sentryWrapped")) {
    cbZ = cbZ.slice(0, -1);
  }
  return cbZ.map(function (cbY) {
    return {
      colno: cbY.column,
      filename: cbY.url || cbZ[0].url,
      function: cbY.func || "?",
      in_app: true,
      lineno: cbY.line
    };
  }).slice(0, ci7).reverse();
}
var cik = function () {
  function cbY(cbY) {
    this._limit = cbY;
    this._buffer = [];
  }
  cbY.prototype.isReady = function () {
    return this._limit === undefined || this.length() < this._limit;
  };
  cbY.prototype.add = function (cbY) {
    var cbZ = this;
    if (this.isReady()) {
      if (this._buffer.indexOf(cbY) === -1) {
        this._buffer.push(cbY);
      }
      cbY.then(function () {
        return cbZ.remove(cbY);
      }).catch(function () {
        return cbZ.remove(cbY).catch(function () {});
      });
      return cbY;
    } else {
      return Promise.reject(new cdl("Not adding Promise due to buffer limit reached."));
    }
  };
  cbY.prototype.remove = function (cbY) {
    return this._buffer.splice(this._buffer.indexOf(cbY), 1)[0];
  };
  cbY.prototype.length = function () {
    return this._buffer.length;
  };
  cbY.prototype.drain = function (cbY) {
    var cbZ = this;
    return new Promise(function (cc0) {
      var cc1 = setTimeout(function () {
        if (cbY && cbY > 0) {
          cc0(false);
        }
      }, cbY);
      Promise.all(cbZ._buffer).then(function () {
        clearTimeout(cc1);
        cc0(true);
      }).catch(function () {
        cc0(true);
      });
    });
  };
  return cbY;
}();
export var BaseTransport = function () {
  function cbY(cbY) {
    this.options = cbY;
    this._buffer = new cik(30);
    this.url = new cdo(this.options.dsn).getStoreEndpointWithUrlEncodedAuth();
  }
  cbY.prototype.sendEvent = function () {
    throw new cdl("Transport Class has to implement `sendEvent` method");
  };
  cbY.prototype.close = function (cbY) {
    return this._buffer.drain(cbY);
  };
  return cbY;
}();
var cim = Object(ccU.e)();
export var FetchTransport = function (cbY) {
  function cbZ() {
    return cbY !== null && cbY.apply(this, arguments) || this;
  }
  cc7.b(cbZ, cbY);
  cbZ.prototype.sendEvent = function (cbY) {
    var cbZ = {
      body: JSON.stringify(cbY),
      method: "POST",
      referrerPolicy: cgk() ? "origin" : ""
    };
    return this._buffer.add(cim.fetch(this.url, cbZ).then(function (cbY) {
      return {
        status: Status.fromHttpCode(cbY.status)
      };
    }));
  };
  return cbZ;
}(BaseTransport);
export var XHRTransport = function (cbY) {
  function cbZ() {
    return cbY !== null && cbY.apply(this, arguments) || this;
  }
  cc7.b(cbZ, cbY);
  cbZ.prototype.sendEvent = function (cbY) {
    var cbZ = this;
    return this._buffer.add(new Promise(function (cc0, cc1) {
      var cc2 = new XMLHttpRequest();
      cc2.onreadystatechange = function () {
        if (cc2.readyState === 4) {
          if (cc2.status === 200) {
            cc0({
              status: Status.fromHttpCode(cc2.status)
            });
          }
          cc1(cc2);
        }
      };
      cc2.open("POST", cbZ.url);
      cc2.send(JSON.stringify(cbY));
    }));
  };
  return cbZ;
}(BaseTransport);
var cip = function (cbY) {
  function cbZ() {
    return cbY !== null && cbY.apply(this, arguments) || this;
  }
  cc7.b(cbZ, cbY);
  cbZ.prototype._setupTransport = function () {
    if (!this._options.dsn) {
      return cbY.prototype._setupTransport.call(this);
    }
    var cbZ = this._options.transportOptions ? this._options.transportOptions : {
      dsn: this._options.dsn
    };
    if (this._options.transport) {
      return new this._options.transport(cbZ);
    } else if (cgi()) {
      return new FetchTransport(cbZ);
    } else {
      return new XHRTransport(cbZ);
    }
  };
  cbZ.prototype.eventFromException = function (cbY, cbZ) {
    var cc0;
    var cc1 = this;
    if (Object(ccV.d)(cbY) && cbY.error) {
      cbY = cbY.error;
      cc0 = cic(ci6(cbY));
      return cdp.a.resolve(this._buildEvent(cc0, cbZ));
    }
    if (Object(ccV.a)(cbY) || Object(ccV.b)(cbY)) {
      var cc2 = cbY;
      var cc3 = cc2.name || (Object(ccV.a)(cc2) ? "DOMError" : "DOMException");
      var cc5 = cc2.message ? cc3 + ": " + cc2.message : cc3;
      return this.eventFromMessage(cc5, Severity.Error, cbZ).then(function (cbY) {
        Object(ccU.a)(cbY, cc5);
        return cdp.a.resolve(cc1._buildEvent(cbY, cbZ));
      });
    }
    if (Object(ccV.c)(cbY)) {
      cc0 = cic(ci6(cbY));
      return cdp.a.resolve(this._buildEvent(cc0, cbZ));
    }
    if (Object(ccV.e)(cbY) && cbZ && cbZ.syntheticException) {
      cc0 = function (cbY, cbZ) {
        var cc0 = Object.keys(cbY).sort();
        var cc1 = {
          extra: {
            __serialized__: Object(cdk.c)(cbY)
          },
          message: "Non-Error exception captured with keys: " + cda(cc0)
        };
        if (cbZ) {
          var cc2 = cie(ci6(cbZ).stack);
          cc1.stacktrace = {
            frames: cc2
          };
        }
        return cc1;
      }(cbY, cbZ.syntheticException);
      Object(ccU.a)(cc0, "Custom Object", undefined, {
        handled: true,
        synthetic: true,
        type: "generic"
      });
      cc0.level = Severity.Error;
      return cdp.a.resolve(this._buildEvent(cc0, cbZ));
    }
    var cc6 = cbY;
    return this.eventFromMessage(cc6, undefined, cbZ).then(function (cbY) {
      Object(ccU.a)(cbY, "" + cc6, undefined, {
        handled: true,
        synthetic: true,
        type: "generic"
      });
      cbY.level = Severity.Error;
      return cdp.a.resolve(cc1._buildEvent(cbY, cbZ));
    });
  };
  cbZ.prototype._buildEvent = function (cbY, cbZ) {
    return cc7.a({}, cbY, {
      event_id: cbZ && cbZ.event_id
    });
  };
  cbZ.prototype.eventFromMessage = function (cbY, cbZ, cc0) {
    if (cbZ === undefined) {
      cbZ = Severity.Info;
    }
    var cc1 = {
      event_id: cc0 && cc0.event_id,
      level: cbZ,
      message: cbY
    };
    if (this._options.attachStacktrace && cc0 && cc0.syntheticException) {
      var cc2 = cie(ci6(cc0.syntheticException).stack);
      cc1.stacktrace = {
        frames: cc2
      };
    }
    return cdp.a.resolve(cc1);
  };
  return cbZ;
}(cf0);
export var SDK_NAME = "sentry.javascript.browser";
export var BrowserClient = function (cbY) {
  function cbZ(cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    return cbY.call(this, cip, cbZ) || this;
  }
  cc7.b(cbZ, cbY);
  cbZ.prototype._prepareEvent = function (cbZ, cc0, cc1) {
    cbZ.platform = cbZ.platform || "javascript";
    cbZ.sdk = cc7.a({}, cbZ.sdk, {
      name: SDK_NAME,
      packages: cc7.d(cbZ.sdk && cbZ.sdk.packages || [], [{
        name: "npm:@sentry/browser",
        version: "5.4.3"
      }]),
      version: "5.4.3"
    });
    return cbY.prototype._prepareEvent.call(this, cbZ, cc0, cc1);
  };
  cbZ.prototype.showReportDialog = function (cbY) {
    if (cbY === undefined) {
      cbY = {};
    }
    var cbZ = Object(ccU.e)().document;
    if (cbZ) {
      if (!this._isEnabled()) {
        ccT.a.error("Trying to call showReportDialog with Sentry Client is disabled");
        return;
      }
      var cc0 = cbY.dsn || this.getDsn();
      if (!cbY.eventId) {
        ccT.a.error("Missing `eventId` option in showReportDialog call");
        return;
      }
      if (!cc0) {
        ccT.a.error("Missing `Dsn` option in showReportDialog call");
        return;
      }
      var cc1 = cbZ.createElement("script");
      cc1.async = true;
      cc1.src = new cdo(cc0).getReportDialogEndpoint(cbY);
      if (cbY.onLoad) {
        cc1.onload = cbY.onLoad;
      }
      (cbZ.head || cbZ.body).appendChild(cc1);
    }
  };
  return cbZ;
}(ceY);
var cjp;
var cjq;
var cjr = 1000;
var cjs = 0;
function cjt(cbY, cbZ, cc0) {
  if (cbZ === undefined) {
    cbZ = {};
  }
  if (typeof cbY != "function") {
    return cbY;
  }
  try {
    if (cbY.__sentry__) {
      return cbY;
    }
    if (cbY.__sentry_wrapped__) {
      return cbY.__sentry_wrapped__;
    }
  } catch (cjx) {
    return cbY;
  }
  function cc1() {
    if (cc0 && typeof cc0 == "function") {
      cc0.apply(this, arguments);
    }
    var cc1 = Array.prototype.slice.call(arguments);
    try {
      var cc2 = cc1.map(function (cbY) {
        return cjt(cbY, cbZ);
      });
      if (cbY.handleEvent) {
        return cbY.handleEvent.apply(this, cc2);
      } else {
        return cbY.apply(this, cc2);
      }
    } catch (cjC) {
      cjs += 1;
      setTimeout(function () {
        cjs -= 1;
      });
      withScope(function (cc0) {
        cc0.addEventProcessor(function (cjC) {
          var cc0 = cc7.a({}, cjC);
          if (cbZ.mechanism) {
            Object(ccU.a)(cc0, undefined, undefined, cbZ.mechanism);
          }
          cc0.extra = cc7.a({}, cc0.extra, {
            arguments: Object(cdk.b)(cc1, 3)
          });
          return cc0;
        });
        captureException(cjC);
      });
      throw cjC;
    }
  }
  try {
    for (var cc2 in cbY) {
      if (Object.prototype.hasOwnProperty.call(cbY, cc2)) {
        cc1[cc2] = cbY[cc2];
      }
    }
  } catch (cjH) {}
  cbY.prototype = cbY.prototype || {};
  cc1.prototype = cbY.prototype;
  Object.defineProperty(cbY, "__sentry_wrapped__", {
    enumerable: false,
    value: cc1
  });
  Object.defineProperties(cc1, {
    __sentry__: {
      enumerable: false,
      value: true
    },
    __sentry_original__: {
      enumerable: false,
      value: cbY
    }
  });
  try {
    if (Object.getOwnPropertyDescriptor(cc1, "name").configurable) {
      Object.defineProperty(cc1, "name", {
        get: function () {
          return cbY.name;
        }
      });
    }
  } catch (cjI) {}
  return cc1;
}
var cjJ = 0;
function cjK(cbY, cbZ) {
  if (cbZ === undefined) {
    cbZ = false;
  }
  return function (cc0) {
    cjp = undefined;
    if (cc0 && cjq !== cc0) {
      cjq = cc0;
      function cc1() {
        var cbZ;
        try {
          cbZ = cc0.target ? cjW(cc0.target) : cjW(cc0);
        } catch (cjQ) {
          cbZ = "<unknown>";
        }
        if (cbZ.length !== 0) {
          Object(ccd.b)().addBreadcrumb({
            category: "ui." + cbY,
            message: cbZ
          }, {
            event: cc0,
            name: cbY
          });
        }
      }
      if (cjJ) {
        clearTimeout(cjJ);
      }
      if (cbZ) {
        cjJ = setTimeout(cc1);
      } else {
        cc1();
      }
    }
  };
}
function cjR() {
  return function (cbY) {
    var cbZ;
    try {
      cbZ = cbY.target;
    } catch (cjU) {
      return;
    }
    var cc0 = cbZ && cbZ.tagName;
    if (cc0 && (cc0 === "INPUT" || cc0 === "TEXTAREA" || cbZ.isContentEditable)) {
      if (!cjp) {
        cjK("input")(cbY);
      }
      clearTimeout(cjp);
      cjp = setTimeout(function () {
        cjp = undefined;
      }, cjr);
    }
  };
}
function cjW(cbY) {
  for (var cbZ, cc0 = cbY, cc1 = [], cc2 = 0, cc3 = 0, cc4 = " > ".length; cc0 && cc2++ < 5 && (cbZ = ck4(cc0)) !== "html" && (cc2 <= 1 || cc3 + cc1.length * cc4 + cbZ.length < 80);) {
    cc1.push(cbZ);
    cc3 += cbZ.length;
    cc0 = cc0.parentNode;
  }
  return cc1.reverse().join(" > ");
}
function ck4(cbY) {
  var cbZ;
  var cc0;
  var cc1;
  var cc2;
  var cc3;
  var cc4 = [];
  if (!cbY || !cbY.tagName) {
    return "";
  }
  cc4.push(cbY.tagName.toLowerCase());
  if (cbY.id) {
    cc4.push("#" + cbY.id);
  }
  if ((cbZ = cbY.className) && Object(ccV.h)(cbZ)) {
    cc0 = cbZ.split(/\s+/);
    cc3 = 0;
    cc0 = cbZ.split(/\s+/);
    cc3 = 0;
    for (; cc3 < cc0.length; cc3++) {
      cc4.push("." + cc0[cc3]);
    }
  }
  var cc5 = ["type", "name", "title", "alt"];
  for (cc3 = 0; cc3 < cc5.length; cc3++) {
    cc1 = cc5[cc3];
    if (cc2 = cbY.getAttribute(cc1)) {
      cc4.push("[" + cc1 + "=\"" + cc2 + "\"]");
    }
  }
  return cc4.join("");
}
export var TryCatch = function () {
  function cbY() {
    this._ignoreOnError = 0;
    this.name = cbY.id;
  }
  cbY.prototype._wrapTimeFunction = function (cbY) {
    return function () {
      for (var cbZ = [], cc0 = 0; cc0 < arguments.length; cc0++) {
        cbZ[cc0] = arguments[cc0];
      }
      var cc1 = cbZ[0];
      cbZ[0] = cjt(cc1, {
        mechanism: {
          data: {
            function: ckA(cbY)
          },
          handled: true,
          type: "instrument"
        }
      });
      return cbY.apply(this, cbZ);
    };
  };
  cbY.prototype._wrapRAF = function (cbY) {
    return function (cbZ) {
      return cbY(cjt(cbZ, {
        mechanism: {
          data: {
            function: "requestAnimationFrame",
            handler: ckA(cbY)
          },
          handled: true,
          type: "instrument"
        }
      }));
    };
  };
  cbY.prototype._wrapEventTarget = function (cbY) {
    var cbZ = Object(ccU.e)();
    var cc0 = cbZ[cbY] && cbZ[cbY].prototype;
    if (cc0 && cc0.hasOwnProperty && cc0.hasOwnProperty("addEventListener")) {
      Object(cdk.a)(cc0, "addEventListener", function (cbZ) {
        return function (cc0, cc1, cc2) {
          try {
            cc1.handleEvent = cjt(cc1.handleEvent.bind(cc1), {
              mechanism: {
                data: {
                  function: "handleEvent",
                  handler: ckA(cc1),
                  target: cbY
                },
                handled: true,
                type: "instrument"
              }
            });
          } catch (cks) {}
          return cbZ.call(this, cc0, cjt(cc1, {
            mechanism: {
              data: {
                function: "addEventListener",
                handler: ckA(cc1),
                target: cbY
              },
              handled: true,
              type: "instrument"
            }
          }), cc2);
        };
      });
      Object(cdk.a)(cc0, "removeEventListener", function (cbY) {
        return function (cbZ, cc0, cc1) {
          var cc2 = cc0;
          try {
            cc2 = cc2 && (cc2.__sentry_wrapped__ || cc2);
          } catch (cky) {}
          return cbY.call(this, cbZ, cc2, cc1);
        };
      });
    }
  };
  cbY.prototype.setupOnce = function () {
    this._ignoreOnError = this._ignoreOnError;
    var cbY = Object(ccU.e)();
    Object(cdk.a)(cbY, "setTimeout", this._wrapTimeFunction.bind(this));
    Object(cdk.a)(cbY, "setInterval", this._wrapTimeFunction.bind(this));
    Object(cdk.a)(cbY, "requestAnimationFrame", this._wrapRAF.bind(this));
    ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this._wrapEventTarget.bind(this));
  };
  cbY.id = "TryCatch";
  return cbY;
}();
function ckA(cbY) {
  try {
    return cbY && cbY.name || "<anonymous>";
  } catch (ckC) {
    return "<anonymous>";
  }
}
var ckD;
var ckE = Object(ccU.e)();
export var Breadcrumbs = function () {
  function cbY(cbZ) {
    this.name = cbY.id;
    this._options = cc7.a({
      console: true,
      dom: true,
      fetch: true,
      history: true,
      sentry: true,
      xhr: true
    }, cbZ);
  }
  cbY.prototype._instrumentConsole = function () {
    if ("console" in ckE) {
      ["debug", "info", "warn", "error", "log", "assert"].forEach(function (cbZ) {
        if (cbZ in ckE.console) {
          Object(cdk.a)(ckE.console, cbZ, function (cc0) {
            return function () {
              for (var cc1 = [], cc2 = 0; cc2 < arguments.length; cc2++) {
                cc1[cc2] = arguments[cc2];
              }
              var cc3 = {
                category: "console",
                data: {
                  extra: {
                    arguments: Object(cdk.b)(cc1, 3)
                  },
                  logger: "console"
                },
                level: Severity.fromString(cbZ),
                message: cd3(cc1, " ")
              };
              if (cbZ === "assert" && cc1[0] === false) {
                cc3.message = "Assertion failed: " + (cd3(cc1.slice(1), " ") || "console.assert");
                cc3.data.extra.arguments = Object(cdk.b)(cc1.slice(1), 3);
              }
              cbY.addBreadcrumb(cc3, {
                input: cc1,
                level: cbZ
              });
              if (cc0) {
                Function.prototype.apply.call(cc0, ckE.console, cc1);
              }
            };
          });
        }
      });
    }
  };
  cbY.prototype._instrumentDOM = function () {
    if ("document" in ckE) {
      ckE.document.addEventListener("click", cjK("click"), false);
      ckE.document.addEventListener("keypress", cjR(), false);
      ["EventTarget", "Node"].forEach(function (cbY) {
        var cbZ = ckE[cbY] && ckE[cbY].prototype;
        if (cbZ && cbZ.hasOwnProperty && cbZ.hasOwnProperty("addEventListener")) {
          Object(cdk.a)(cbZ, "addEventListener", function (cbY) {
            return function (cbZ, cc0, cc1) {
              if (cc0 && cc0.handleEvent) {
                if (cbZ === "click") {
                  Object(cdk.a)(cc0, "handleEvent", function (cbY) {
                    return function (cbZ) {
                      cjK("click")(cbZ);
                      return cbY.call(this, cbZ);
                    };
                  });
                }
                if (cbZ === "keypress") {
                  Object(cdk.a)(cc0, "handleEvent", cjR());
                }
              } else {
                if (cbZ === "click") {
                  cjK("click", true)(this);
                }
                if (cbZ === "keypress") {
                  cjR()(this);
                }
              }
              return cbY.call(this, cbZ, cc0, cc1);
            };
          });
          Object(cdk.a)(cbZ, "removeEventListener", function (cbY) {
            return function (cbZ, cc0, cc1) {
              var cc2 = cc0;
              try {
                cc2 = cc2 && (cc2.__sentry_wrapped__ || cc2);
              } catch (cl0) {}
              return cbY.call(this, cbZ, cc2, cc1);
            };
          });
        }
      });
    }
  };
  cbY.prototype._instrumentFetch = function () {
    if (function () {
      if (!cgi()) {
        return false;
      }
      function cbY(cbY) {
        return cbY.toString().indexOf("native") !== -1;
      }
      var cbZ = Object(ccU.e)();
      var cc0 = null;
      var cc1 = cbZ.document;
      if (cc1) {
        var cc2 = cc1.createElement("iframe");
        cc2.hidden = true;
        try {
          cc1.head.appendChild(cc2);
          if (cc2.contentWindow && cc2.contentWindow.fetch) {
            cc0 = cbY(cc2.contentWindow.fetch);
          }
          cc1.head.removeChild(cc2);
        } catch (cl7) {
          ccT.a.warn("Could not create sandbox iframe for pure fetch check, bailing to window.fetch: ", cl7);
        }
      }
      if (cc0 === null) {
        cc0 = cbY(cbZ.fetch);
      }
      return cc0;
    }()) {
      Object(cdk.a)(ckE, "fetch", function (cbZ) {
        return function () {
          for (var cc0 = [], cc1 = 0; cc1 < arguments.length; cc1++) {
            cc0[cc1] = arguments[cc1];
          }
          var cc2;
          var cc3 = cc0[0];
          var cc5 = "GET";
          if (typeof cc3 == "string") {
            cc2 = cc3;
          } else if ("Request" in ckE && cc3 instanceof Request) {
            cc2 = cc3.url;
            if (cc3.method) {
              cc5 = cc3.method;
            }
          } else {
            cc2 = cc3 + "";
          }
          if (cc0[1] && cc0[1].method) {
            cc5 = cc0[1].method;
          }
          var cc6 = Object(ccd.b)().getClient();
          var cc7 = cc6 && cc6.getDsn();
          if (cc7) {
            var cce = new cdo(cc7).getStoreEndpoint();
            if (cce && cc2.includes(cce)) {
              if (cc5 === "POST" && cc0[1] && cc0[1].body) {
                clZ(cc0[1].body);
              }
              return cbZ.apply(ckE, cc0);
            }
          }
          var ccj = {
            method: cc5,
            url: cc2
          };
          return cbZ.apply(ckE, cc0).then(function (cbZ) {
            ccj.status_code = cbZ.status;
            cbY.addBreadcrumb({
              category: "fetch",
              data: ccj,
              type: "http"
            }, {
              input: cc0,
              response: cbZ
            });
            return cbZ;
          }).catch(function (cbZ) {
            cbY.addBreadcrumb({
              category: "fetch",
              data: ccj,
              level: Severity.Error,
              type: "http"
            }, {
              error: cbZ,
              input: cc0
            });
            throw cbZ;
          });
        };
      });
    }
  };
  cbY.prototype._instrumentHistory = function () {
    function cbZ(cbY) {
      return function () {
        for (var cbZ = [], cc0 = 0; cc0 < arguments.length; cc0++) {
          cbZ[cc0] = arguments[cc0];
        }
        var cc2 = cbZ.length > 2 ? cbZ[2] : undefined;
        if (cc2) {
          cc1(ckD, cc2 + "");
        }
        return cbY.apply(this, cbZ);
      };
    }
    var cc0 = this;
    if (function () {
      var cbY = Object(ccU.e)();
      var cbZ = cbY.chrome;
      var cc0 = cbZ && cbZ.app && cbZ.app.runtime;
      var cc1 = "history" in cbY && !!cbY.history.pushState && !!cbY.history.replaceState;
      return !cc0 && cc1;
    }()) {
      function cc1(cbZ, cc0) {
        var cc1 = Object(ccU.f)(ckE.location.href);
        var cc2 = Object(ccU.f)(cc0);
        var cc3 = Object(ccU.f)(cbZ);
        if (!cc3.path) {
          cc3 = cc1;
        }
        ckD = cc0;
        if (cc1.protocol === cc2.protocol && cc1.host === cc2.host) {
          cc0 = cc2.relative;
        }
        if (cc1.protocol === cc3.protocol && cc1.host === cc3.host) {
          cbZ = cc3.relative;
        }
        cbY.addBreadcrumb({
          category: "navigation",
          data: {
            from: cbZ,
            to: cc0
          }
        });
      }
      var cc2 = ckE.onpopstate;
      ckE.onpopstate = function () {
        for (var cbY = [], cbZ = 0; cbZ < arguments.length; cbZ++) {
          cbY[cbZ] = arguments[cbZ];
        }
        var cc3 = ckE.location.href;
        cc1(ckD, cc3);
        if (cc2) {
          return cc2.apply(cc0, cbY);
        }
      };
      Object(cdk.a)(ckE.history, "pushState", cbZ);
      Object(cdk.a)(ckE.history, "replaceState", cbZ);
    }
  };
  cbY.prototype._instrumentXHR = function () {
    if ("XMLHttpRequest" in ckE) {
      var cbZ = XMLHttpRequest.prototype;
      Object(cdk.a)(cbZ, "open", function (cbY) {
        return function () {
          for (var cbZ = [], cc0 = 0; cc0 < arguments.length; cc0++) {
            cbZ[cc0] = arguments[cc0];
          }
          var cc1 = cbZ[1];
          this.__sentry_xhr__ = {
            method: cbZ[0],
            url: cbZ[1]
          };
          var cc2 = Object(ccd.b)().getClient();
          var cc3 = cc2 && cc2.getDsn();
          if (cc3) {
            var cc4 = new cdo(cc3).getStoreEndpoint();
            if (Object(ccV.h)(cc1) && cc4 && cc1.includes(cc4)) {
              this.__sentry_own_request__ = true;
            }
          }
          return cbY.apply(this, cbZ);
        };
      });
      Object(cdk.a)(cbZ, "send", function (cbZ) {
        return function () {
          function cc0() {
            if (cc3.readyState === 4) {
              if (cc3.__sentry_own_request__) {
                return;
              }
              try {
                if (cc3.__sentry_xhr__) {
                  cc3.__sentry_xhr__.status_code = cc3.status;
                }
              } catch (clO) {}
              cbY.addBreadcrumb({
                category: "xhr",
                data: cc3.__sentry_xhr__,
                type: "http"
              }, {
                xhr: cc3
              });
            }
          }
          for (var cc1 = [], cc2 = 0; cc2 < arguments.length; cc2++) {
            cc1[cc2] = arguments[cc2];
          }
          var cc3 = this;
          if (cc3.__sentry_own_request__) {
            clZ(cc1[0]);
          }
          ["onload", "onerror", "onprogress"].forEach(function (cbY) {
            (function (cbY, cbZ) {
              if (cbY in cbZ && typeof cbZ[cbY] == "function") {
                Object(cdk.a)(cbZ, cbY, function (cbZ) {
                  return cjt(cbZ, {
                    mechanism: {
                      data: {
                        function: cbY,
                        handler: cbZ && cbZ.name || "<anonymous>"
                      },
                      handled: true,
                      type: "instrument"
                    }
                  });
                });
              }
            })(cbY, cc3);
          });
          if ("onreadystatechange" in cc3 && typeof cc3.onreadystatechange == "function") {
            Object(cdk.a)(cc3, "onreadystatechange", function (cbY) {
              return cjt(cbY, {
                mechanism: {
                  data: {
                    function: "onreadystatechange",
                    handler: cbY && cbY.name || "<anonymous>"
                  },
                  handled: true,
                  type: "instrument"
                }
              }, cc0);
            });
          } else {
            cc3.onreadystatechange = cc0;
          }
          return cbZ.apply(this, cc1);
        };
      });
    }
  };
  cbY.addBreadcrumb = function (cbZ, cc0) {
    if (Object(ccd.b)().getIntegration(cbY)) {
      Object(ccd.b)().addBreadcrumb(cbZ, cc0);
    }
  };
  cbY.prototype.setupOnce = function () {
    if (this._options.console) {
      this._instrumentConsole();
    }
    if (this._options.dom) {
      this._instrumentDOM();
    }
    if (this._options.xhr) {
      this._instrumentXHR();
    }
    if (this._options.fetch) {
      this._instrumentFetch();
    }
    if (this._options.history) {
      this._instrumentHistory();
    }
  };
  cbY.id = "Breadcrumbs";
  return cbY;
}();
function clZ(cbY) {
  try {
    var cbZ = JSON.parse(cbY);
    Breadcrumbs.addBreadcrumb({
      category: "sentry",
      event_id: cbZ.event_id,
      level: cbZ.level || Severity.fromString("error"),
      message: Object(ccU.d)(cbZ)
    }, {
      event: cbZ
    });
  } catch (cm2) {
    ccT.a.error("Error while adding sentry type breadcrumb");
  }
}
export var GlobalHandlers = function () {
  function cbY(cbZ) {
    this.name = cbY.id;
    this._options = cc7.a({
      onerror: true,
      onunhandledrejection: true
    }, cbZ);
  }
  cbY.prototype.setupOnce = function () {
    Error.stackTraceLimit = 50;
    ci3(function (cbZ, cc0, cc1) {
      if (cjs <= 0) {
        var cc2 = Object(ccd.b)().getIntegration(cbY);
        if (cc2) {
          Object(ccd.b)().captureEvent(cc2._eventFromGlobalHandler(cbZ), {
            data: {
              stack: cbZ
            },
            originalException: cc1
          });
        }
      }
    });
    if (this._options.onerror) {
      ccT.a.log("Global Handler attached: onerror");
      ci4();
    }
    if (this._options.onunhandledrejection) {
      ccT.a.log("Global Handler attached: onunhandledrejection");
      ci5();
    }
  };
  cbY.prototype._eventFromGlobalHandler = function (cbY) {
    if (!Object(ccV.h)(cbY.message) && cbY.mechanism !== "onunhandledrejection") {
      var cbZ = cbY.message;
      cbY.message = cbZ.error && Object(ccV.h)(cbZ.error.message) ? cbZ.error.message : "No error message";
    }
    var cc0 = cic(cbY);
    var cc1 = {
      mode: cbY.mode
    };
    if (cbY.message) {
      cc1.message = cbY.message;
    }
    if (cbY.name) {
      cc1.name = cbY.name;
    }
    var cc2 = Object(ccd.b)().getClient();
    var cc3 = cc2 && cc2.getOptions().maxValueLength || 250;
    var cc4 = cbY.original ? cd0(JSON.stringify(Object(cdk.b)(cbY.original)), cc3) : "";
    var cc5 = cbY.mechanism === "onunhandledrejection" ? "UnhandledRejection" : "Error";
    Object(ccU.a)(cc0, cc4, cc5, {
      data: cc1,
      handled: false,
      type: cbY.mechanism
    });
    return cc0;
  };
  cbY.id = "GlobalHandlers";
  return cbY;
}();
var cm4 = "cause";
var cm5 = 5;
export var LinkedErrors = function () {
  function cbY(cbZ) {
    if (cbZ === undefined) {
      cbZ = {};
    }
    this.name = cbY.id;
    this._key = cbZ.key || cm4;
    this._limit = cbZ.limit || cm5;
  }
  cbY.prototype.setupOnce = function () {
    Object(ccQ.b)(function (cbZ, cc0) {
      var cc1 = Object(ccd.b)().getIntegration(cbY);
      if (cc1) {
        return cc1._handler(cbZ, cc0);
      } else {
        return cbZ;
      }
    });
  };
  cbY.prototype._handler = function (cbY, cbZ) {
    if (!cbY.exception || !cbY.exception.values || !cbZ || !(cbZ.originalException instanceof Error)) {
      return cbY;
    }
    var cc0 = this._walkErrorTree(cbZ.originalException, this._key);
    cbY.exception.values = cc7.d(cc0, cbY.exception.values);
    return cbY;
  };
  cbY.prototype._walkErrorTree = function (cbY, cbZ, cc0) {
    if (cc0 === undefined) {
      cc0 = [];
    }
    if (!(cbY[cbZ] instanceof Error) || cc0.length + 1 >= this._limit) {
      return cc0;
    }
    var cc1 = ci8(ci6(cbY[cbZ]));
    return this._walkErrorTree(cbY[cbZ], cbZ, cc7.d([cc1], cc0));
  };
  cbY.id = "LinkedErrors";
  return cbY;
}();
var cm7 = Object(ccU.e)();
export var UserAgent = function () {
  function cbY() {
    this.name = cbY.id;
  }
  cbY.prototype.setupOnce = function () {
    Object(ccQ.b)(function (cbZ) {
      if (Object(ccd.b)().getIntegration(cbY)) {
        if (!cm7.navigator || !cm7.location) {
          return cbZ;
        }
        var cc0 = cbZ.request || {};
        cc0.url = cc0.url || cm7.location.href;
        cc0.headers = cc0.headers || {};
        cc0.headers["User-Agent"] = cm7.navigator.userAgent;
        return cc7.a({}, cbZ, {
          request: cc0
        });
      }
      return cbZ;
    });
  };
  cbY.id = "UserAgent";
  return cbY;
}();
export var defaultIntegrations = [new cc1.InboundFilters(), new cc1.FunctionToString(), new TryCatch(), new Breadcrumbs(), new GlobalHandlers(), new LinkedErrors(), new UserAgent()];
export function init(cbY) {
  if (cbY === undefined) {
    cbY = {};
  }
  if (cbY.defaultIntegrations === undefined) {
    cbY.defaultIntegrations = defaultIntegrations;
  }
  (function (cbY, cbZ) {
    if (cbZ.debug === true) {
      ccT.a.enable();
    }
    Object(ccd.b)().bindClient(new cbY(cbZ));
  })(BrowserClient, cbY);
}
export function showReportDialog(cbY) {
  if (cbY === undefined) {
    cbY = {};
  }
  cbY.eventId ||= Object(ccd.b)().lastEventId();
  var cbZ = Object(ccd.b)().getClient();
  if (cbZ) {
    cbZ.showReportDialog(cbY);
  }
}
export function lastEventId() {
  return Object(ccd.b)().lastEventId();
}
export function forceLoad() {}
export function onLoad(cbY) {
  cbY();
}
export function flush(cbY) {
  var cbZ = Object(ccd.b)().getClient();
  if (cbZ) {
    return cbZ.flush(cbY);
  } else {
    return Promise.reject(false);
  }
}
export function close(cbY) {
  var cbZ = Object(ccd.b)().getClient();
  if (cbZ) {
    return cbZ.close(cbY);
  } else {
    return Promise.reject(false);
  }
}
export function wrap(cbY) {
  cjt(cbY)();
}
export let addGlobalEventProcessor = ccQ.b;
export let getHubFromCarrier = ccd.c;
export let getCurrentHub = ccd.b;
export let Hub = ccd.a;
export let Scope = ccQ.a;
export let Span = ccR.a;
export let SDK_VERSION = "5.4.3";
var cmW = {};
var cmX = Object(ccU.e)();
if (cmX.Sentry && cmX.Sentry.Integrations) {
  cmW = cmX.Sentry.Integrations;
}
export var Integrations = cc7.a({}, cmW, cc1, cc2);