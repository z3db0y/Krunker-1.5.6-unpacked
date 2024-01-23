exports.encode = function (brM, brN) {
  var brO = new brS(brN);
  brO.write(brM);
  return brO.read();
};
var brS = require("./26.js").EncodeBuffer;