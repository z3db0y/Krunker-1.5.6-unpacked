module.exports = function (cWS, cWT) {
  if (cWT) {
    return cWS.replace(/\/+$/, "") + "/" + cWT.replace(/^\/+/, "");
  } else {
    return cWS;
  }
};