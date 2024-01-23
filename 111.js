var cQr;
var cQs = Object.prototype.hasOwnProperty;
function cQt(cQo) {
  try {
    return decodeURIComponent(cQo.replace(/\+/g, " "));
  } catch (cQv) {
    return null;
  }
}
exports.stringify = function (cQo, cQp) {
  cQp = cQp || "";
  var cQq;
  var cQt;
  var cQA = [];
  if (typeof cQp != "string") {
    cQp = "?";
  }
  for (cQt in cQo) {
    if (cQs.call(cQo, cQt)) {
      if (!(cQq = cQo[cQt]) && (cQq === null || cQq === cQr || isNaN(cQq))) {
        cQq = "";
      }
      cQt = encodeURIComponent(cQt);
      cQq = encodeURIComponent(cQq);
      if (cQt === null || cQq === null) {
        continue;
      }
      cQA.push(cQt + "=" + cQq);
    }
  }
  if (cQA.length) {
    return cQp + cQA.join("&");
  } else {
    return "";
  }
};
exports.parse = function (cQo) {
  for (var cQp, cQq = /([^=?&]+)=?([^&]*)/g, cQr = {}; cQp = cQq.exec(cQo);) {
    var cQs = cQt(cQp[1]);
    var cQG = cQt(cQp[2]);
    if (cQs !== null && cQG !== null && !(cQs in cQr)) {
      cQr[cQs] = cQG;
    }
  }
  return cQr;
};