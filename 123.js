var cSC = require("./36.js");
function cSD() {
  this.handlers = [];
}
cSD.prototype.use = function (cSz, cSA) {
  this.handlers.push({
    fulfilled: cSz,
    rejected: cSA
  });
  return this.handlers.length - 1;
};
cSD.prototype.eject = function (cSz) {
  this.handlers[cSz] &&= null;
};
cSD.prototype.forEach = function (cSz) {
  cSC.forEach(this.handlers, function (cSA) {
    if (cSA !== null) {
      cSz(cSA);
    }
  });
};
module.exports = cSD;