function x(u, v) {
  return (x = Object.setPrototypeOf || {
    "__proto__": []
  } instanceof Array && function (u, v) {
    u.__proto__ = v;
  } || function (u, v) {
    for (var w in v) {
      if (v.hasOwnProperty(w)) {
        u[w] = v[w];
      }
    }
  })(u, v);
}
export function b(u, v) {
  function w() {
    this.constructor = u;
  }
  x(u, v);
  u.prototype = v === null ? Object.create(v) : (w.prototype = v.prototype, new w());
}
export function a() {
  return (a = Object.assign || function (u) {
    for (var v, w = 1, x = arguments.length; w < x; w++) {
      for (var F in v = arguments[w]) {
        if (Object.prototype.hasOwnProperty.call(v, F)) {
          u[F] = v[F];
        }
      }
    }
    return u;
  }).apply(this, arguments);
}
export function c(u, v) {
  var w = typeof Symbol == "function" && u[Symbol.iterator];
  if (!w) {
    return u;
  }
  var x;
  var F;
  var J = w.call(u);
  var P = [];
  try {
    while ((v === undefined || v-- > 0) && !(x = J.next()).done) {
      P.push(x.value);
    }
  } catch (X) {
    F = {
      error: X
    };
  } finally {
    try {
      if (x && !x.done && (w = J.return)) {
        w.call(J);
      }
    } finally {
      if (F) {
        throw F.error;
      }
    }
  }
  return P;
}
export function d() {
  for (var u = [], v = 0; v < arguments.length; v++) {
    u = u.concat(c(arguments[v]));
  }
  return u;
}