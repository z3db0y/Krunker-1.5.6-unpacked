(function (bBO) {
  function bBP(bBN) {
    for (var bBO in bC5) {
      bBN[bBO] = bC5[bBO];
    }
    return bBN;
  }
  function bBU(bBN, bBO) {
    var bBP;
    var bBY = this;
    if (arguments.length) {
      if (bBO) {
        if (bBP = bC0(bBY, bBN, true)) {
          if (!(bBP = bBP.filter(function (bBN) {
            return bBN !== bBO && bBN.originalListener !== bBO;
          })).length) {
            return bBU.call(bBY, bBN);
          }
          bBY.listeners[bBN] = bBP;
        }
      } else if ((bBP = bBY.listeners) && (delete bBP[bBN], !Object.keys(bBP).length)) {
        return bBU.call(bBY);
      }
    } else {
      delete bBY.listeners;
    }
    return bBY;
  }
  function bC0(bBN, bBO, bBP) {
    if (!bBP || bBN.listeners) {
      var bBU = bBN.listeners ||= {};
      return bBU[bBO] ||= [];
    }
  }
  module.exports = bBO;
  var bC5 = {
    on: function (bBN, bBO) {
      bC0(this, bBN).push(bBO);
      return this;
    },
    once: function (bBN, bBO) {
      function bBP() {
        bBU.call(bC5, bBN, bBP);
        bBO.apply(this, arguments);
      }
      var bC5 = this;
      bBP.originalListener = bBO;
      bC0(bC5, bBN).push(bBP);
      return bC5;
    },
    off: bBU,
    emit: function (bBN, bBO) {
      var bBP = this;
      var bBU = bC0(bBP, bBN, true);
      if (!bBU) {
        return false;
      }
      var bC5 = arguments.length;
      if (bC5 === 1) {
        bBU.forEach(function (bBN) {
          bBN.call(bBP);
        });
      } else if (bC5 === 2) {
        bBU.forEach(function (bBN) {
          bBN.call(bBP, bBO);
        });
      } else {
        var bCj = Array.prototype.slice.call(arguments, 1);
        bBU.forEach(function (bBN) {
          bBN.apply(bBP, bCj);
        });
      }
      return !!bBU.length;
    }
  };
  bBP(bBO.prototype);
  bBO.mixin = bBP;
})(
/**
* event-lite.js - Light-weight EventEmitter (less than 1KB when gzipped)
*
* @copyright Yusuke Kawasaki
* @license MIT
* @constructor
* @see https://github.com/kawanet/event-lite
* @see http://kawanet.github.io/event-lite/EventLite.html
* @example
* var EventLite = require("event-lite");
*
* function MyClass() {...}             // your class
*
* EventLite.mixin(MyClass.prototype);  // import event methods
*
* var obj = new MyClass();
* obj.on("foo", function() {...});     // add event listener
* obj.once("bar", function() {...});   // add one-time event listener
* obj.emit("foo");                     // dispatch event
* obj.emit("bar");                     // dispatch another event
* obj.off("foo");                      // remove event listener
*/
function bBN() {
  if (!(this instanceof bBN)) {
    return new bBN();
  }
});