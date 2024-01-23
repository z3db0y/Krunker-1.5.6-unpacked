var cwC = require("./36.js");
var cwD = require("./117.js");
var cwE = require("./119.js");
var cwF = require("./120.js");
var cwG = require("./121.js");
var cwH = require("./95.js");
module.exports = function (cwz) {
  return new Promise(function (cwA, cwK) {
    var cwL = cwz.data;
    var cwM = cwz.headers;
    if (cwC.isFormData(cwL)) {
      delete cwM["Content-Type"];
    }
    var cwN = new XMLHttpRequest();
    if (cwz.auth) {
      var cwO = cwz.auth.username || "";
      var cwP = cwz.auth.password || "";
      cwM.Authorization = "Basic " + btoa(cwO + ":" + cwP);
    }
    cwN.open(cwz.method.toUpperCase(), cwE(cwz.url, cwz.params, cwz.paramsSerializer), true);
    cwN.timeout = cwz.timeout;
    cwN.onreadystatechange = function () {
      if (cwN && cwN.readyState === 4 && (cwN.status !== 0 || cwN.responseURL && cwN.responseURL.indexOf("file:") === 0)) {
        var cwB = "getAllResponseHeaders" in cwN ? cwF(cwN.getAllResponseHeaders()) : null;
        var cwC = {
          data: cwz.responseType && cwz.responseType !== "text" ? cwN.response : cwN.responseText,
          status: cwN.status,
          statusText: cwN.statusText,
          headers: cwB,
          config: cwz,
          request: cwN
        };
        cwD(cwA, cwK, cwC);
        cwN = null;
      }
    };
    cwN.onerror = function () {
      cwK(cwH("Network Error", cwz, null, cwN));
      cwN = null;
    };
    cwN.ontimeout = function () {
      cwK(cwH("timeout of " + cwz.timeout + "ms exceeded", cwz, "ECONNABORTED", cwN));
      cwN = null;
    };
    if (cwC.isStandardBrowserEnv()) {
      var cwS = require("./122.js");
      var cwT = (cwz.withCredentials || cwG(cwz.url)) && cwz.xsrfCookieName ? cwS.read(cwz.xsrfCookieName) : undefined;
      if (cwT) {
        cwM[cwz.xsrfHeaderName] = cwT;
      }
    }
    if ("setRequestHeader" in cwN) {
      cwC.forEach(cwM, function (cwz, cwA) {
        if (cwL === undefined && cwA.toLowerCase() === "content-type") {
          delete cwM[cwA];
        } else {
          cwN.setRequestHeader(cwA, cwz);
        }
      });
    }
    if (cwz.withCredentials) {
      cwN.withCredentials = true;
    }
    if (cwz.responseType) {
      try {
        cwN.responseType = cwz.responseType;
      } catch (cwW) {
        if (cwz.responseType !== "json") {
          throw cwW;
        }
      }
    }
    if (typeof cwz.onDownloadProgress == "function") {
      cwN.addEventListener("progress", cwz.onDownloadProgress);
    }
    if (typeof cwz.onUploadProgress == "function" && cwN.upload) {
      cwN.upload.addEventListener("progress", cwz.onUploadProgress);
    }
    if (cwz.cancelToken) {
      cwz.cancelToken.promise.then(function (cwz) {
        if (cwN) {
          cwN.abort();
          cwK(cwz);
          cwN = null;
        }
      });
    }
    if (cwL === undefined) {
      cwL = null;
    }
    cwN.send(cwL);
  });
};