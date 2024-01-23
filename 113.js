var cQN = require("./36.js");
var cQO = require("./93.js");
var cQP = require("./115.js");
var cQQ = require("./85.js");
function cQR(cQK) {
  var cQL = new cQP(cQK);
  var cQM = cQO(cQP.prototype.request, cQL);
  cQN.extend(cQM, cQP.prototype, cQL);
  cQN.extend(cQM, cQL);
  return cQM;
}
var cQV = cQR(cQQ);
cQV.Axios = cQP;
cQV.create = function (cQK) {
  return cQR(cQN.merge(cQQ, cQK));
};
cQV.Cancel = require("./97.js");
cQV.CancelToken = require("./128.js");
cQV.isCancel = require("./96.js");
cQV.all = function (cQK) {
  return Promise.all(cQK);
};
cQV.spread = require("./129.js");
module.exports = cQV;
module.exports.default = cQV;