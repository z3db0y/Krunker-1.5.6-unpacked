var cRp = require("./36.js");
module.exports = function (cRm, cRn) {
  cRp.forEach(cRm, function (cRo, cRp) {
    if (cRp !== cRn && cRp.toUpperCase() === cRn.toUpperCase()) {
      cRm[cRn] = cRo;
      delete cRm[cRp];
    }
  });
};