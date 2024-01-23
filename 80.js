var cqP = {
  "./de.js": 81,
  "./en.js": 82,
  "./es.js": 83,
  "./kr.js": 84
};
function cqQ(cqM) {
  var cqN = cqT(cqM);
  return require(cqN);
}
function cqT(cqM) {
  if (!require.o(cqP, cqM)) {
    var cqN = new Error("Cannot find module '" + cqM + "'");
    cqN.code = "MODULE_NOT_FOUND";
    throw cqN;
  }
  return cqP[cqM];
}
cqQ.keys = function () {
  return Object.keys(cqP);
};
cqQ.resolve = cqT;
module.exports = cqQ;
cqQ.id = 80;