module.exports = function (bVP) {
  if (!bVP.webpackPolyfill) {
    var bVQ = Object.create(bVP);
    bVQ.children ||= [];
    Object.defineProperty(bVQ, "loaded", {
      enumerable: true,
      get: function () {
        return bVQ.l;
      }
    });
    Object.defineProperty(bVQ, "id", {
      enumerable: true,
      get: function () {
        return bVQ.i;
      }
    });
    Object.defineProperty(bVQ, "exports", {
      enumerable: true
    });
    bVQ.webpackPolyfill = 1;
  }
  return bVQ;
};