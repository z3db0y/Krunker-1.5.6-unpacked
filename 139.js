var cVK = require("./34.js");
module.exports = function (cVH, cVI, cVJ) {
  cVK.forEach(cVJ, function (cVJ) {
    cVH = cVJ(cVH, cVI);
  });
  return cVH;
};