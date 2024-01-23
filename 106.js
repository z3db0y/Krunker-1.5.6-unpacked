function czI(czF) {
  this.message = czF;
}
czI.prototype.toString = function () {
  return "Cancel" + (this.message ? ": " + this.message : "");
};
czI.prototype.__CANCEL__ = true;
module.exports = czI;