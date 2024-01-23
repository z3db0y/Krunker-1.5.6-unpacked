module.exports = function (cTr) {
  return function (cTs) {
    return cTr.apply(null, cTs);
  };
};