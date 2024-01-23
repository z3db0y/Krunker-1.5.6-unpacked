var cSc = require("./36.js");
module.exports = cSc.isStandardBrowserEnv() ? function () {
  function cS9(cS9) {
    var cSa = cS9;
    if (cSb) {
      cSi.setAttribute("href", cSa);
      cSa = cSi.href;
    }
    cSi.setAttribute("href", cSa);
    return {
      href: cSi.href,
      protocol: cSi.protocol ? cSi.protocol.replace(/:$/, "") : "",
      host: cSi.host,
      search: cSi.search ? cSi.search.replace(/^\?/, "") : "",
      hash: cSi.hash ? cSi.hash.replace(/^#/, "") : "",
      hostname: cSi.hostname,
      port: cSi.port,
      pathname: cSi.pathname.charAt(0) === "/" ? cSi.pathname : "/" + cSi.pathname
    };
  }
  var cSa;
  var cSb = /(msie|trident)/i.test(navigator.userAgent);
  var cSi = document.createElement("a");
  cSa = cS9(window.location.href);
  return function (cSb) {
    var cSi = cSc.isString(cSb) ? cS9(cSb) : cSb;
    return cSi.protocol === cSa.protocol && cSi.host === cSa.host;
  };
}() : function () {
  return true;
};