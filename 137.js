var cVl = require("./34.js");
function cVm() {
  this.handlers = [];
}
cVm.prototype.use = function (cVi, cVj) {
  this.handlers.push({
    fulfilled: cVi,
    rejected: cVj
  });
  return this.handlers.length - 1;
};
cVm.prototype.eject = function (cVi) {
  this.handlers[cVi] &&= null;
};
cVm.prototype.forEach = function (cVi) {
  cVl.forEach(this.handlers, function (cVj) {
    if (cVj !== null) {
      cVi(cVj);
    }
  });
};
module.exports = cVm;