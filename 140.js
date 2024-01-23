var cVS = require("./34.js");
module.exports = function (cVP, cVQ) {
  cVS.forEach(cVP, function (cVR, cVS) {
    if (cVS !== cVQ && cVS.toUpperCase() === cVQ.toUpperCase()) {
      cVP[cVQ] = cVR;
      delete cVP[cVS];
    }
  });
};