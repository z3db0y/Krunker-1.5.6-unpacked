var blp = {}.toString;
module.exports = Array.isArray || function (bln) {
  return blp.call(bln) == "[object Array]";
};