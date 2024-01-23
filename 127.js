module.exports = function (cTa, cTb) {
  if (cTb) {
    return cTa.replace(/\/+$/, "") + "/" + cTb.replace(/^\/+/, "");
  } else {
    return cTa;
  }
};