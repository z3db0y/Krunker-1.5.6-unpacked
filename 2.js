var a1 = require("./14.js");
var a5 = require("./21.js");
export function c(a1, a2) {
  return a1.require(a2);
}
var a9 = {};
export function e() {
  if (Object.prototype.toString.call(a1 === undefined ? 0 : a1) === "[object process]") {
    return a5;
  } else if (typeof window == "undefined") {
    if (typeof self == "undefined") {
      return a9;
    } else {
      return self;
    }
  } else {
    return window;
  }
}
export function g() {
  var a1 = e();
  var a2 = a1.crypto || a1.msCrypto;
  if (a2 !== undefined && a2.getRandomValues) {
    var a3 = new Uint16Array(8);
    a2.getRandomValues(a3);
    a3[3] = a3[3] & 4095 | 16384;
    a3[4] = a3[4] & 16383 | 32768;
    function a5(a1) {
      for (var a2 = a1.toString(16); a2.length < 4;) {
        a2 = "0" + a2;
      }
      return a2;
    }
    return a5(a3[0]) + a5(a3[1]) + a5(a3[2]) + a5(a3[3]) + a5(a3[4]) + a5(a3[5]) + a5(a3[6]) + a5(a3[7]);
  }
  return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (a1) {
    var a2 = Math.random() * 16 | 0;
    return (a1 === "x" ? a2 : a2 & 3 | 8).toString(16);
  });
}
export function f(a1) {
  if (!a1) {
    return {};
  }
  var a2 = a1.match(/^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/);
  if (!a2) {
    return {};
  }
  var a3 = a2[6] || "";
  var a5 = a2[8] || "";
  return {
    host: a2[4],
    path: a2[5],
    protocol: a2[2],
    relative: a2[5] + a3 + a5
  };
}
export function d(a1) {
  if (a1.message) {
    return a1.message;
  }
  if (a1.exception && a1.exception.values && a1.exception.values[0]) {
    var a2 = a1.exception.values[0];
    if (a2.type && a2.value) {
      return a2.type + ": " + a2.value;
    } else {
      return a2.type || a2.value || a1.event_id || "<unknown>";
    }
  }
  return a1.event_id || "<unknown>";
}
export function b(a1) {
  var a2 = e();
  if (!("console" in a2)) {
    return a1();
  }
  var a3 = a2.console;
  var a5 = {};
  ["debug", "info", "warn", "error", "log", "assert"].forEach(function (a1) {
    if (a1 in a2.console && a3[a1].__sentry__) {
      a5[a1] = a3[a1].__sentry_wrapped__;
      a3[a1] = a3[a1].__sentry_original__;
    }
  });
  var a6 = a1();
  Object.keys(a5).forEach(function (a1) {
    a3[a1] = a5[a1];
  });
  return a6;
}
export function a(a1, a2, a3, a5) {
  if (a5 === undefined) {
    a5 = {
      handled: true,
      type: "generic"
    };
  }
  a1.exception = a1.exception || {};
  a1.exception.values = a1.exception.values || [];
  a1.exception.values[0] = a1.exception.values[0] || {};
  a1.exception.values[0].value = a1.exception.values[0].value || a2 || "";
  a1.exception.values[0].type = a1.exception.values[0].type || a3 || "Error";
  a1.exception.values[0].mechanism = a1.exception.values[0].mechanism || a5;
}