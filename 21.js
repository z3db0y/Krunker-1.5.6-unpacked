var bqg = function () {
  return this;
}();
try {
  bqg = bqg || new Function("return this")();
} catch (bqh) {
  if (typeof window == "object") {
    bqg = window;
  }
}
module.exports = bqg;