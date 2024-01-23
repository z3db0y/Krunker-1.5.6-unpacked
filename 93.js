module.exports = function (cws, cwt) {
  return function () {
    for (var cwu = Array(arguments.length), cwy = 0; cwy < cwu.length; cwy++) {
      cwu[cwy] = arguments[cwy];
    }
    return cws.apply(cwt, cwu);
  };
};