var cWg = require("./34.js");
var cWh = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (cWd) {
  var cWe;
  var cWf;
  var cWl;
  var cWm = {};
  if (cWd) {
    cWg.forEach(cWd.split("\n"), function (cWd) {
      cWl = cWd.indexOf(":");
      cWe = cWg.trim(cWd.substr(0, cWl)).toLowerCase();
      cWf = cWg.trim(cWd.substr(cWl + 1));
      if (cWe) {
        if (cWm[cWe] && cWh.indexOf(cWe) >= 0) {
          return;
        }
        cWm[cWe] = cWe === "set-cookie" ? (cWm[cWe] ? cWm[cWe] : []).concat([cWf]) : cWm[cWe] ? cWm[cWe] + ", " + cWf : cWf;
      }
    });
    return cWm;
  } else {
    return cWm;
  }
};