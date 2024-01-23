var cWr = require("./34.js");
module.exports = cWr.isStandardBrowserEnv() ? function () {
  function cWo(cWo) {
    var cWp = cWo;
    if (cWq) {
      cWx.setAttribute("href", cWp);
      cWp = cWx.href;
    }
    cWx.setAttribute("href", cWp);
    return {
      href: cWx.href,
      protocol: cWx.protocol ? cWx.protocol.replace(/:$/, "") : "",
      host: cWx.host,
      search: cWx.search ? cWx.search.replace(/^\?/, "") : "",
      hash: cWx.hash ? cWx.hash.replace(/^#/, "") : "",
      hostname: cWx.hostname,
      port: cWx.port,
      pathname: cWx.pathname.charAt(0) === "/" ? cWx.pathname : "/" + cWx.pathname
    };
  }
  var cWp;
  var cWq = /(msie|trident)/i.test(navigator.userAgent);
  var cWx = document.createElement("a");
  cWp = cWo(window.location.href);
  return function (cWq) {
    var cWx = cWr.isString(cWq) ? cWo(cWq) : cWq;
    return cWx.protocol === cWp.protocol && cWx.host === cWp.host;
  };
}() : function () {
  return true;
};