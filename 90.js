function cwh(cwf) {
  var cwg = new Error("Cannot find module '" + cwf + "'");
  cwg.code = "MODULE_NOT_FOUND";
  throw cwg;
}
cwh.keys = function () {
  return [];
};
cwh.resolve = cwh;
module.exports = cwh;
cwh.id = 90;