var bm6;
var bm7;
var bm8 = module.exports = {};
function bm9() {
  throw new Error("setTimeout has not been defined");
}
function bma() {
  throw new Error("clearTimeout has not been defined");
}
function bmb(bm4) {
  if (bm6 === setTimeout) {
    return setTimeout(bm4, 0);
  }
  if ((bm6 === bm9 || !bm6) && setTimeout) {
    bm6 = setTimeout;
    return setTimeout(bm4, 0);
  }
  try {
    return bm6(bm4, 0);
  } catch (bmd) {
    try {
      return bm6.call(null, bm4, 0);
    } catch (bme) {
      return bm6.call(this, bm4, 0);
    }
  }
}
(function () {
  try {
    bm6 = typeof setTimeout == "function" ? setTimeout : bm9;
  } catch (bmf) {
    bm6 = bm9;
  }
  try {
    bm7 = typeof clearTimeout == "function" ? clearTimeout : bma;
  } catch (bmg) {
    bm7 = bma;
  }
})();
var bmh;
var bmi = [];
var bmj = false;
var bmk = -1;
function bml() {
  if (bmj && bmh) {
    bmj = false;
    if (bmh.length) {
      bmi = bmh.concat(bmi);
    } else {
      bmk = -1;
    }
    if (bmi.length) {
      bmm();
    }
  }
}
function bmm() {
  if (!bmj) {
    var bm4 = bmb(bml);
    bmj = true;
    for (var bm5 = bmi.length; bm5;) {
      bmh = bmi;
      bmi = [];
      while (++bmk < bm5) {
        if (bmh) {
          bmh[bmk].run();
        }
      }
      bmk = -1;
      bm5 = bmi.length;
    }
    bmh = null;
    bmj = false;
    (function (bm4) {
      if (bm7 === clearTimeout) {
        return clearTimeout(bm4);
      }
      if ((bm7 === bma || !bm7) && clearTimeout) {
        bm7 = clearTimeout;
        return clearTimeout(bm4);
      }
      try {
        bm7(bm4);
      } catch (bmq) {
        try {
          return bm7.call(null, bm4);
        } catch (bmr) {
          return bm7.call(this, bm4);
        }
      }
    })(bm4);
  }
}
function bms(bm4, bm5) {
  this.fun = bm4;
  this.array = bm5;
}
function bmv() {}
bm8.nextTick = function (bm4) {
  var bm5 = Array(arguments.length - 1);
  if (arguments.length > 1) {
    for (var bm6 = 1; bm6 < arguments.length; bm6++) {
      bm5[bm6 - 1] = arguments[bm6];
    }
  }
  bmi.push(new bms(bm4, bm5));
  if (bmi.length === 1 && !bmj) {
    bmb(bmm);
  }
};
bms.prototype.run = function () {
  this.fun.apply(null, this.array);
};
bm8.title = "browser";
bm8.browser = true;
bm8.env = {};
bm8.argv = [];
bm8.version = "";
bm8.versions = {};
bm8.on = bmv;
bm8.addListener = bmv;
bm8.once = bmv;
bm8.off = bmv;
bm8.removeListener = bmv;
bm8.removeAllListeners = bmv;
bm8.emit = bmv;
bm8.prependListener = bmv;
bm8.prependOnceListener = bmv;
bm8.listeners = function () {
  return [];
};
bm8.binding = function () {
  throw new Error("process.binding is not supported");
};
bm8.cwd = function () {
  return "/";
};
bm8.chdir = function () {
  throw new Error("process.chdir is not supported");
};
bm8.umask = function () {
  return 0;
};