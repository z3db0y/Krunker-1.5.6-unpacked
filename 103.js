var cyZ = require("./34.js");
var cz0 = require("./141.js");
var cz1 = require("./100.js");
var cz2 = require("./143.js");
var cz3 = require("./144.js");
var cz4 = require("./104.js");
module.exports = function (cyW) {
  return new Promise(function (cyX, cz7) {
    var cz8 = cyW.data;
    var cz9 = cyW.headers;
    if (cyZ.isFormData(cz8)) {
      delete cz9["Content-Type"];
    }
    var cza = new XMLHttpRequest();
    if (cyW.auth) {
      var czb = cyW.auth.username || "";
      var czc = cyW.auth.password || "";
      cz9.Authorization = "Basic " + btoa(czb + ":" + czc);
    }
    cza.open(cyW.method.toUpperCase(), cz1(cyW.url, cyW.params, cyW.paramsSerializer), true);
    cza.timeout = cyW.timeout;
    cza.onreadystatechange = function () {
      if (cza && cza.readyState === 4 && (cza.status !== 0 || cza.responseURL && cza.responseURL.indexOf("file:") === 0)) {
        var cyY = "getAllResponseHeaders" in cza ? cz2(cza.getAllResponseHeaders()) : null;
        var cyZ = {
          data: cyW.responseType && cyW.responseType !== "text" ? cza.response : cza.responseText,
          status: cza.status,
          statusText: cza.statusText,
          headers: cyY,
          config: cyW,
          request: cza
        };
        cz0(cyX, cz7, cyZ);
        cza = null;
      }
    };
    cza.onabort = function () {
      if (cza) {
        cz7(cz4("Request aborted", cyW, "ECONNABORTED", cza));
        cza = null;
      }
    };
    cza.onerror = function () {
      cz7(cz4("Network Error", cyW, null, cza));
      cza = null;
    };
    cza.ontimeout = function () {
      cz7(cz4("timeout of " + cyW.timeout + "ms exceeded", cyW, "ECONNABORTED", cza));
      cza = null;
    };
    if (cyZ.isStandardBrowserEnv()) {
      var czf = require("./145.js");
      var czg = (cyW.withCredentials || cz3(cyW.url)) && cyW.xsrfCookieName ? czf.read(cyW.xsrfCookieName) : undefined;
      if (czg) {
        cz9[cyW.xsrfHeaderName] = czg;
      }
    }
    if ("setRequestHeader" in cza) {
      cyZ.forEach(cz9, function (cyW, cyX) {
        if (cz8 === undefined && cyX.toLowerCase() === "content-type") {
          delete cz9[cyX];
        } else {
          cza.setRequestHeader(cyX, cyW);
        }
      });
    }
    if (cyW.withCredentials) {
      cza.withCredentials = true;
    }
    if (cyW.responseType) {
      try {
        cza.responseType = cyW.responseType;
      } catch (czj) {
        if (cyW.responseType !== "json") {
          throw czj;
        }
      }
    }
    if (typeof cyW.onDownloadProgress == "function") {
      cza.addEventListener("progress", cyW.onDownloadProgress);
    }
    if (typeof cyW.onUploadProgress == "function" && cza.upload) {
      cza.upload.addEventListener("progress", cyW.onUploadProgress);
    }
    if (cyW.cancelToken) {
      cyW.cancelToken.promise.then(function (cyW) {
        if (cza) {
          cza.abort();
          cz7(cyW);
          cza = null;
        }
      });
    }
    if (cz8 === undefined) {
      cz8 = null;
    }
    cza.send(cz8);
  });
};