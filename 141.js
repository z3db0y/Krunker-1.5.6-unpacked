var cW0 = require("./104.js");
module.exports = function (cVX, cVY, cVZ) {
  var cW4 = cVZ.config.validateStatus;
  if (!cW4 || cW4(cVZ.status)) {
    cVX(cVZ);
  } else {
    cVY(cW0("Request failed with status code " + cVZ.status, cVZ.config, null, cVZ.request, cVZ));
  }
};