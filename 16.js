exports.ExtBuffer = function bn3(bn4, bn5) {
  if (this instanceof bn3) {
    this.buffer = bn8.from(bn4);
    this.type = bn5;
    return;
  } else {
    return new bn3(bn4, bn5);
  }
};
var bn8 = require("./3.js");