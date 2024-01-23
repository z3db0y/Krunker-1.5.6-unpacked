var bHW = require("./27.js").Buffer;
function bHX(bHV) {
  return bHV && bHV.isBuffer && bHV;
}
module.exports = bHX(bHW !== undefined && bHW) || bHX(this.Buffer) || bHX(typeof window != "undefined" && window.Buffer) || this.Buffer;