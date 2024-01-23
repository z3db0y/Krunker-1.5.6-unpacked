var cRx = require("./95.js");
module.exports = function (cRu, cRv, cRw) {
  var cRB = cRw.config.validateStatus;
  if (cRw.status && cRB && !cRB(cRw.status)) {
    cRv(cRx("Request failed with status code " + cRw.status, cRw.config, null, cRw.request, cRw));
  } else {
    cRu(cRw);
  }
};