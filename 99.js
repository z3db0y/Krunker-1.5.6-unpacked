module.exports = function (cyd, cye) {
  return function () {
    for (var cyf = Array(arguments.length), cyj = 0; cyj < cyf.length; cyj++) {
      cyf[cyj] = arguments[cyj];
    }
    return cyd.apply(cye, cyf);
  };
};