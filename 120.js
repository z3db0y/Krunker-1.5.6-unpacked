var cS1 = require("./36.js");
var cS2 = ["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"];
module.exports = function (cRY) {
  var cRZ;
  var cS0;
  var cS6;
  var cS7 = {};
  if (cRY) {
    cS1.forEach(cRY.split("\n"), function (cRY) {
      cS6 = cRY.indexOf(":");
      cRZ = cS1.trim(cRY.substr(0, cS6)).toLowerCase();
      cS0 = cS1.trim(cRY.substr(cS6 + 1));
      if (cRZ) {
        if (cS7[cRZ] && cS2.indexOf(cRZ) >= 0) {
          return;
        }
        cS7[cRZ] = cRZ === "set-cookie" ? (cS7[cRZ] ? cS7[cRZ] : []).concat([cS0]) : cS7[cRZ] ? cS7[cRZ] + ", " + cS0 : cS0;
      }
    });
    return cS7;
  } else {
    return cS7;
  }
};