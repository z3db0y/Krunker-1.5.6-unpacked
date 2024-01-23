module.exports = function (cWO) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(cWO);
};