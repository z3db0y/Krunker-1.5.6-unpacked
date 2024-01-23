function cxf(cxc) {
  this.message = cxc;
}
cxf.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
cxf.prototype.__CANCEL__ = true;
module.exports = cxf;