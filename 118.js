module.exports = function (cRC, cRD, cRE, cRI, cRJ) {
  cRC.config = cRD;
  if (cRE) {
    cRC.code = cRE;
  }
  cRC.request = cRI;
  cRC.response = cRJ;
  return cRC;
};