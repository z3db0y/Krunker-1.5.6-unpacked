var bmC = require("./16.js").ExtBuffer;
var bmD = require("./47.js");
var bmE = require("./48.js");
var bmF = require("./12.js");
function bmG() {
  var bmz = this.options;
  this.encode = function (bmz) {
    var bmA = bmE.getWriteType(bmz);
    return function (bmz, bmB) {
      var bmC = bmA[typeof bmB];
      if (!bmC) {
        throw new Error("Unsupported type \"" + typeof bmB + "\": " + bmB);
      }
      bmC(bmz, bmB);
    };
  }(bmz);
  if (bmz && bmz.preset) {
    bmD.setExtPackers(this);
  }
  return this;
}
bmF.install({
  addExtPacker: function (bmz, bmA, bmB) {
    function bmD(bmA) {
      if (bmB) {
        bmA = bmB(bmA);
      }
      return new bmC(bmA, bmz);
    }
    bmB = bmF.filter(bmB);
    var bmE = bmA.name;
    if (bmE && bmE !== "Object") {
      var bmG = this.extPackers ||= {};
      bmG[bmE] = bmD;
    } else {
      var bmU = this.extEncoderList ||= [];
      bmU.unshift([bmA, bmD]);
    }
  },
  getExtPacker: function (bmz) {
    var bmA = this.extPackers ||= {};
    var bmB = bmz.constructor;
    var bmC = bmB && bmB.name && bmA[bmB.name];
    if (bmC) {
      return bmC;
    }
    for (var bmD, bmE = this.extEncoderList ||= [], bmF = bmE.length, bmG = 0; bmG < bmF; bmG++) {
      bmD = bmE[bmG];
      if (bmB === bmD[0]) {
        return bmD[1];
      }
    }
  },
  init: bmG
});
exports.preset = bmG.call(bmF.preset);