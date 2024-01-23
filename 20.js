var bpY = require("./16.js").ExtBuffer;
var bpZ = require("./50.js");
var bq0 = require("./32.js").readUint8;
var bq1 = require("./51.js");
var bq2 = require("./12.js");
function bq3() {
  var bpV = this.options;
  this.decode = function (bpV) {
    var bpW = bq1.getReadToken(bpV);
    return function (bpV) {
      var bpX = bq0(bpV);
      var bpY = bpW[bpX];
      if (!bpY) {
        throw new Error("Invalid type: " + (bpX ? "0x" + bpX.toString(16) : bpX));
      }
      return bpY(bpV);
    };
  }(bpV);
  if (bpV && bpV.preset) {
    bpZ.setExtUnpackers(this);
  }
  return this;
}
bq2.install({
  addExtUnpacker: function (bpV, bpW) {
    (this.extUnpackers ||= [])[bpV] = bq2.filter(bpW);
  },
  getExtUnpacker: function (bpV) {
    return (this.extUnpackers ||= [])[bpV] || function (bpW) {
      return new bpY(bpW, bpV);
    };
  },
  init: bq3
});
exports.preset = bq3.call(bq2.preset);