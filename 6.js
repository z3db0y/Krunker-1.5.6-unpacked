var bda = require("./21.js");
var bde = require("./5.js");
var bdf = require("./38.js");
export function a(bda, bdb, bdc) {
  if (bdb in bda) {
    var bde = bda[bdb];
    var bdf = bdc(bde);
    if (typeof bdf == "function") {
      try {
        bdf.prototype = bdf.prototype || {};
        Object.defineProperties(bdf, {
          __sentry__: {
            enumerable: false,
            value: true
          },
          __sentry_original__: {
            enumerable: false,
            value: bde
          },
          __sentry_wrapped__: {
            enumerable: false,
            value: bdf
          }
        });
      } catch (bdm) {}
    }
    bda[bdb] = bdf;
  }
}
export function d(bda) {
  return Object.keys(bda).map(function (bdb) {
    return encodeURIComponent(bdb) + "=" + encodeURIComponent(bda[bdb]);
  }).join("&");
}
function bdq(bda) {
  return function (bda) {
    return ~-encodeURI(bda).split(/%..|./).length;
  }(JSON.stringify(bda));
}
export function c(bda, bdb, bdc) {
  if (bdb === undefined) {
    bdb = 3;
  }
  if (bdc === undefined) {
    bdc = 102400;
  }
  var bde = b(bda, bdb);
  if (bdq(bde) > bdc) {
    return c(bda, bdb - 1, bdc);
  } else {
    return bde;
  }
}
function bdy(bdb, bdc) {
  if (bdc === "domain" && typeof bdb == "object" && bdb._events) {
    return "[Domain]";
  } else if (bdc === "domainEmitter") {
    return "[DomainEmitter]";
  } else if (bda !== undefined && bdb === bda) {
    return "[Global]";
  } else if (typeof window != "undefined" && bdb === window) {
    return "[Window]";
  } else if (typeof document != "undefined" && bdb === document) {
    return "[Document]";
  } else if (typeof Event != "undefined" && bdb instanceof Event) {
    if (Object.getPrototypeOf(bdb)) {
      return bdb.constructor.name;
    } else {
      return "Event";
    }
  } else if (Object(bde.i)(bdb)) {
    return "[SyntheticEvent]";
  } else if (Number.isNaN(bdb)) {
    return "[NaN]";
  } else if (bdb === undefined) {
    return "[undefined]";
  } else if (typeof bdb == "function") {
    return "[Function: " + (bdb.name || "<unknown-function-name>") + "]";
  } else {
    return bdb;
  }
}
function bdB(bda, bdb, bdc, bdg) {
  if (bdc === undefined) {
    bdc = Infinity;
  }
  if (bdg === undefined) {
    bdg = new bdf.a();
  }
  if (bdc === 0) {
    return function (bda) {
      var bdb = Object.prototype.toString.call(bda);
      if (typeof bda == "string") {
        return bda;
      }
      if (bdb === "[object Object]") {
        return "[Object]";
      }
      if (bdb === "[object Array]") {
        return "[Array]";
      }
      var bdc = bdy(bda);
      if (Object(bde.f)(bdc)) {
        return bdc;
      } else {
        return bdb;
      }
    }(bdb);
  }
  if (bdb != null && typeof bdb.toJSON == "function") {
    return bdb.toJSON();
  }
  var bdn = bdy(bdb, bda);
  if (Object(bde.f)(bdn)) {
    return bdn;
  }
  var bdq = Object(bde.c)(bdb) ? function (bda) {
    var bdb = {
      message: bda.message,
      name: bda.name,
      stack: bda.stack
    };
    for (var bdc in bda) {
      if (Object.prototype.hasOwnProperty.call(bda, bdc)) {
        bdb[bdc] = bda[bdc];
      }
    }
    return bdb;
  }(bdb) : bdb;
  var bdt = Array.isArray(bdb) ? [] : {};
  if (bdg.memoize(bdb)) {
    return "[Circular ~]";
  }
  for (var bdP in bdq) {
    if (Object.prototype.hasOwnProperty.call(bdq, bdP)) {
      bdt[bdP] = bdB(bdP, bdq[bdP], bdc - 1, bdg);
    }
  }
  bdg.unmemoize(bdb);
  return bdt;
}
export function b(bda, bdb) {
  try {
    return JSON.parse(JSON.stringify(bda, function (bda, bdc) {
      return bdB(bda, bdc, bdb);
    }));
  } catch (bdV) {
    return "**non-serializable**";
  }
}