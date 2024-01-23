var cT1 = require("./36.js");
module.exports = function (cSY, cSZ, cT0) {
  cT1.forEach(cT0, function (cT0) {
    cSY = cT0(cSY, cSZ);
  });
  return cSY;
};