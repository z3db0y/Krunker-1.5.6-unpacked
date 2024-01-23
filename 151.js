var cYE;
(function () {
  'use strict';

  function cYF(cYB, cYC) {
    var cYD = [];
    Object.keys(cYC).forEach(function (cYE) {
      if (cYC[cYE] === cYB) {
        cYD.push(cYE);
      } else if (Array.isArray(cYC[cYE]) && cYC[cYE].indexOf(cYB) !== -1) {
        cYD.push(cYE);
      }
    });
    return cYD;
  }
  function cYK() {
    this._events = {
      gamepad: [],
      axes: [],
      keyboard: {}
    };
    this._handlers = {
      gamepad: {
        connect: null,
        disconnect: null
      }
    };
    this._keyMapping = {
      gamepad: {
        button_1: 0,
        button_2: 1,
        button_3: 2,
        button_4: 3,
        shoulder_top_left: 4,
        shoulder_top_right: 5,
        shoulder_bottom_left: 6,
        shoulder_bottom_right: 7,
        select: 8,
        start: 9,
        stick_button_left: 10,
        stick_button_right: 11,
        d_pad_up: 12,
        d_pad_down: 13,
        d_pad_left: 14,
        d_pad_right: 15,
        vendor: 16
      },
      axes: {
        stick_axis_left: [0, 2],
        stick_axis_right: [2, 4]
      },
      keyboard: {
        button_1: 32,
        start: 27,
        d_pad_up: [38, 87],
        d_pad_down: [40, 83],
        d_pad_left: [37, 65],
        d_pad_right: [39, 68]
      }
    };
    this._threshold = 0.3;
    this._listeners = [];
    this._handleKeyboardEventListener = this._handleKeyboardEventListener.bind(this);
    this.resume();
  }
  var cYL;
  var cYM;
  var cYN = window.navigator.getGamepads !== undefined || window.navigator.webkitGetGamepads !== undefined;
  if (typeof window != "undefined") {
    ["webkit", "moz"].forEach(function (cYB) {
      cYL = cYL || window.requestAnimationFrame || window[cYB + "RequestAnimationFrame"] || null;
      cYM = cYM || window.cancelAnimationFrame || window[cYB + "CancelAnimationFrame"] || null;
    });
  }
  cYK.prototype._handleGamepadConnected = function (cYB) {
    if (this._handlers.gamepad.connect) {
      this._handlers.gamepad.connect({
        index: cYB
      });
    }
  };
  cYK.prototype._handleGamepadDisconnected = function (cYB) {
    if (this._handlers.gamepad.disconnect) {
      this._handlers.gamepad.disconnect({
        index: cYB
      });
    }
  };
  cYK.prototype._handleGamepadEventListener = function (cYB) {
    var cYC = this;
    if (cYB && cYB.connected) {
      cYB.buttons.forEach(function (cYD, cYE) {
        var cYK = cYF(cYE, cYC._keyMapping.gamepad);
        if (cYK) {
          cYK.forEach(function (cYE) {
            if (cYD.pressed) {
              if (!cYC._events.gamepad[cYB.index][cYE]) {
                cYC._events.gamepad[cYB.index][cYE] = {
                  pressed: true,
                  hold: false,
                  released: false,
                  player: cYB.index
                };
              }
              cYC._events.gamepad[cYB.index][cYE].value = cYD.value;
            } else if (!cYD.pressed && cYC._events.gamepad[cYB.index][cYE]) {
              cYC._events.gamepad[cYB.index][cYE].released = true;
              cYC._events.gamepad[cYB.index][cYE].hold = false;
            }
          });
        }
      });
    }
  };
  cYK.prototype._handleGamepadAxisEventListener = function (cYB) {
    var cYC = this;
    if (cYB && cYB.connected) {
      Object.keys(cYC._keyMapping.axes).forEach(function (cYD) {
        var cYE = Array.prototype.slice.apply(cYB.axes, cYC._keyMapping.axes[cYD]);
        if (Math.abs(cYE[0]) > cYC._threshold || Math.abs(cYE[1]) > cYC._threshold) {
          cYC._events.axes[cYB.index][cYD] = {
            pressed: !cYC._events.axes[cYB.index][cYD],
            hold: !!cYC._events.axes[cYB.index][cYD],
            released: false,
            value: cYE
          };
        } else {
          cYC._events.axes[cYB.index][cYD] &&= {
            pressed: false,
            hold: false,
            released: true,
            value: cYE
          };
        }
      });
    }
  };
  cYK.prototype._handleKeyboardEventListener = function (cYB) {
    var cYC = this;
    var cYD = cYF(cYB.keyCode, cYC._keyMapping.keyboard);
    if (cYD) {
      cYD.forEach(function (cYD) {
        if (cYB.type !== "keydown" || cYC._events.keyboard[cYD]) {
          if (cYB.type === "keyup" && cYC._events.keyboard[cYD]) {
            cYC._events.keyboard[cYD].released = true;
            cYC._events.keyboard[cYD].hold = false;
          }
        } else {
          cYC._events.keyboard[cYD] = {
            pressed: true,
            hold: false,
            released: false
          };
        }
      });
    }
  };
  cYK.prototype._handleEvent = function (cYB, cYC, cYD) {
    if (cYC[cYB].pressed) {
      this.trigger("press", cYB, cYC[cYB].value, cYD);
      cYC[cYB].pressed = false;
      cYC[cYB].hold = true;
    } else if (cYC[cYB].hold) {
      this.trigger("hold", cYB, cYC[cYB].value, cYD);
    } else if (cYC[cYB].released) {
      this.trigger("release", cYB, cYC[cYB].value, cYD);
      delete cYC[cYB];
    }
  };
  cYK.prototype._loop = function () {
    var cYB;
    var cYC = this;
    var cYD = !!cYN && (window.navigator.getGamepads() || navigator.webkitGetGamepads());
    if (cYD) {
      for (cYB = 0; cYB < 4; ++cYB) {
        if (cYD[cYB]) {
          if (!cYC._events.gamepad[cYB]) {
            cYC._handleGamepadConnected(cYB);
            cYC._events.gamepad[cYB] = {};
            cYC._events.axes[cYB] = {};
          }
          cYC._handleGamepadEventListener(cYD[cYB]);
          cYC._handleGamepadAxisEventListener(cYD[cYB]);
        } else if (cYC._events.gamepad[cYB]) {
          cYC._handleGamepadDisconnected(cYB);
          cYC._events.gamepad[cYB] = null;
          cYC._events.axes[cYB] = null;
        }
      }
      cYC._events.gamepad.forEach(function (cYB, cYD) {
        if (cYB) {
          Object.keys(cYB).forEach(function (cYE) {
            cYC._handleEvent(cYE, cYB, cYD);
          });
        }
      });
      cYC._events.axes.forEach(function (cYB, cYD) {
        if (cYB) {
          Object.keys(cYB).forEach(function (cYE) {
            cYC._handleEvent(cYE, cYB, cYD);
          });
        }
      });
    }
    Object.keys(cYC._events.keyboard).forEach(function (cYB) {
      cYC._handleEvent(cYB, cYC._events.keyboard, "keyboard");
    });
    cYC._requestAnimation &&= cYL(cYC._loop.bind(cYC));
  };
  cYK.prototype.on = function (cYB, cYC, cYD, cYE) {
    var cYF = this;
    if (Object.keys(this._handlers.gamepad).indexOf(cYB) !== -1 && typeof cYC == "function") {
      this._handlers.gamepad[cYB] = cYC;
      this._events.gamepad = [];
    } else {
      if (typeof cYB == "string" && cYB.match(/\s+/)) {
        cYB = cYB.split(/\s+/g);
      }
      if (typeof cYC == "string" && cYC.match(/\s+/)) {
        cYC = cYC.split(/\s+/g);
      }
      if (Array.isArray(cYB)) {
        cYB.forEach(function (cYB) {
          cYF.on(cYB, cYC, cYD, cYE);
        });
      } else if (Array.isArray(cYC)) {
        cYC.forEach(function (cYC) {
          cYF.on(cYB, cYC, cYD, cYE);
        });
      } else {
        this._listeners.push({
          type: cYB,
          button: cYC,
          callback: cYD,
          options: cYE,
          rumble: this.rumble
        });
      }
    }
  };
  cYK.prototype.off = function (cYB, cYC) {
    var cYD = this;
    if (typeof cYB == "string" && cYB.match(/\s+/)) {
      cYB = cYB.split(/\s+/g);
    }
    if (typeof cYC == "string" && cYC.match(/\s+/)) {
      cYC = cYC.split(/\s+/g);
    }
    if (Array.isArray(cYB)) {
      cYB.forEach(function (cYB) {
        cYD.off(cYB, cYC);
      });
    } else if (Array.isArray(cYC)) {
      cYC.forEach(function (cYC) {
        cYD.off(cYB, cYC);
      });
    } else {
      this._listeners = this._listeners.filter(function (cYD) {
        return cYD.type !== cYB && cYD.button !== cYC;
      });
    }
  };
  cYK.prototype.setCustomMapping = function (cYB, cYC) {
    if (this._keyMapping[cYB] === undefined) {
      throw new Error("The device \"" + cYB + "\" is not supported through gamepad.js");
    }
    this._keyMapping[cYB] = cYC;
  };
  cYK.prototype.setGlobalThreshold = function (cYB) {
    this._threshold = parseFloat(cYB);
  };
  cYK.prototype.trigger = function (cYB, cYC, cYD, cYE) {
    if (this._listeners) {
      this._listeners.forEach(function (cYF) {
        if (cYF.type === cYB && cYF.button === cYC) {
          cYF.callback({
            type: cYF.type,
            button: cYF.button,
            value: cYD,
            player: cYE,
            event: cYF,
            timestamp: Date.now()
          });
        }
      });
    }
  };
  cYK.prototype.pause = function () {
    cYM(this._requestAnimation);
    this._requestAnimation = null;
    document.removeEventListener("keydown", this._handleKeyboardEventListener);
    document.removeEventListener("keyup", this._handleKeyboardEventListener);
  };
  cYK.prototype.resume = function () {
    this._requestAnimation = cYL(this._loop.bind(this));
    document.addEventListener("keydown", this._handleKeyboardEventListener);
    document.addEventListener("keyup", this._handleKeyboardEventListener);
  };
  cYK.prototype.destroy = function () {
    this.pause();
    delete this._listeners;
  };
  cYK.prototype.rumble = function (cYB, cYC, cYD) {
    var cYE = !!cYN && (window.navigator.getGamepads() || navigator.webkitGetGamepads());
    cYB = cYB || 0;
    if (cYE && cYE[cYB]) {
      var cYF = cYE[cYB];
      if (cYF.vibrationActuator && cYF.vibrationActuator.type == "dual-rumble" && cYF.vibrationActuator.playEffect) {
        cYF.vibrationActuator.playEffect("dual-rumble", {
          startDelay: 0,
          duration: cYC || 200,
          weakMagnitude: (cYD || 0.5) * 0.5,
          strongMagnitude: cYD || 0.5
        });
      }
    }
  };
  if (require("./152.js") !== undefined) {
    if ((cYE = function () {
      return cYK;
    }.apply(exports, [])) !== undefined) {
      module.exports = cYE;
    }
  } else if (module.exports !== undefined) {
    module.exports = cYK;
  } else {
    window.Gamepad = cYK;
  }
})();