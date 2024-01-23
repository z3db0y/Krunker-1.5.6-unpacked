var cUH = require("./34.js");
var cUI = require("./99.js");
var cUJ = require("./136.js");
var cUK = require("./105.js");
function cUL(cUE) {
  var cUF = new cUJ(cUE);
  var cUG = cUI(cUJ.prototype.request, cUF);
  cUH.extend(cUG, cUJ.prototype, cUF);
  cUH.extend(cUG, cUF);
  return cUG;
}
var cUP = cUL(require("./102.js"));
cUP.Axios = cUJ;
cUP.create = function (cUE) {
  return cUL(cUK(cUP.defaults, cUE));
};
cUP.Cancel = require("./106.js");
cUP.CancelToken = require("./148.js");
cUP.isCancel = require("./101.js");
cUP.all = function (cUE) {
  return Promise.all(cUE);
};
cUP.spread = require("./149.js");
module.exports = cUP;
module.exports.default = cUP;