exports.decode = function (bzZ, bA0) {
  var bA1 = new bA5(bA0);
  bA1.write(bzZ);
  return bA1.read();
};
var bA5 = require("./31.js").DecodeBuffer;