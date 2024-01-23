var blP = require("./2.js");
var blQ = /^[ \t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \t]*$/;
export var a = function () {
  function blM(blM, blN, blO, blQ) {
    if (blM === undefined) {
      blM = Object(blP.g)();
    }
    if (blN === undefined) {
      blN = Object(blP.g)().substring(16);
    }
    this._traceId = blM;
    this._spanId = blN;
    this._sampled = blO;
    this._parent = blQ;
  }
  blM.prototype.setParent = function (blM) {
    this._parent = blM;
    return this;
  };
  blM.prototype.setSampled = function (blM) {
    this._sampled = blM;
    return this;
  };
  blM.fromTraceparent = function (blN) {
    var blO = blN.match(blQ);
    if (blO) {
      var blP;
      if (blO[3] === "1") {
        blP = true;
      } else if (blO[3] === "0") {
        blP = false;
      }
      var blR = new blM(blO[1], blO[2], blP);
      return new blM(blO[1], undefined, blP, blR);
    }
  };
  blM.prototype.toTraceparent = function () {
    var blM = "";
    if (this._sampled === true) {
      blM = "-1";
    } else if (this._sampled === false) {
      blM = "-0";
    }
    return this._traceId + "-" + this._spanId + blM;
  };
  blM.prototype.toJSON = function () {
    return {
      parent: this._parent && this._parent.toJSON() || undefined,
      sampled: this._sampled,
      span_id: this._spanId,
      trace_id: this._traceId
    };
  };
  return blM;
}();