require("./4.js");
var cXh = require("./151.js");
module.exports = function (cXe, cXf, cXg, cXl, cXm, cXn, cXo) {
  function cXp(cXe, cXf) {
    window.idleTimer = 0;
    if (cXC.keys) {
      if (cXf && cXC.keys[cXe] !== cXf && cXC.inputChanger != null) {
        if (cXC.moveKeys[cXC.inputChanger]) {
          cXC.moveKeys[cXC.inputChanger] = cXe;
        } else {
          cXC[cXC.inputChanger] = cXe;
        }
        saveVal("cont_" + cXC.inputChanger, cXe);
        showWindow(7, true);
        cXC.inputChanger = null;
      } else {
        if (cXC.keys[cXe] !== cXf && cXe == cXC.voiceKey) {
          toggleRecord(cXf);
        }
        if (!cXC.enabled) {
          return;
        }
        if (cXC.keys[cXe] !== cXf) {
          cXC.keys[cXe] = cXf;
          if (cXC.moveKeys.indexOf(cXe) >= 0) {
            cXC.updateMoveDir();
          }
          if (cXf) {
            if (cXe == cXC.swapKey) {
              cXC.wSwap = 1;
            } else if (cXe == cXC.meleeKey) {
              cXC.wSwap = 2;
            } else if (cXe == cXC.primKey) {
              cXC.wSwap = 3;
            } else {
              window.pressButton(cXe);
            }
          }
        }
      }
    }
  }
  function cXs(cXe, cXf) {
    var cXg = cXe.which;
    var cXh = cXe.keyCode;
    if (cXf) {
      cXe.preventDefault();
      cXg = cXh = 10000 + cXe.which;
    }
    if ((cXg || cXh) == cXC.chatKey) {
      window.pressButton(cXg || cXh);
    } else if (document.activeElement != chatInput) {
      if (cXC.enabled) {
        cXe.preventDefault();
      }
      cXp(cXg || cXh || 0, 1);
    }
  }
  function cXx(cXe, cXf) {
    var cXg = cXe.which;
    var cXh = cXe.keyCode;
    if (cXf) {
      cXe.preventDefault();
      cXg = cXh = 10000 + cXe.which;
    }
    if (cXC.enabled) {
      cXe.preventDefault();
    }
    cXp(cXg || cXh || 0, 0);
  }
  var cXC = this;
  this.gamepad = new cXh();
  this.gamepad.connected = false;
  var cXD = cXe.renderer.domElement;
  this.hasPointerlock = "pointerLockElement" in document || "mozPointerLockElement" in document || "webkitPointerLockElement" in document;
  if (this.hasPointerlock) {
    cXD.requestPointerLock = cXD.requestPointerLock || cXD.mozRequestPointerLock || cXD.webkitRequestPointerLock;
    function cXE() {
      cXC.enabled = document.pointerLockElement === cXD || document.mozPointerLockElement === cXD || document.webkitPointerLockElement === cXD;
      if (cXo.connected || cXm.singlePlayer) {
        if (cXC.enabled) {
          enterGame();
        }
        cXg.toggleControlUI(cXC.enabled);
      }
    }
    document.addEventListener("pointerlockchange", cXE, false);
    document.addEventListener("mozpointerlockchange", cXE, false);
    document.addEventListener("webkitpointerlockchange", cXE, false);
  }
  this.isn = 0;
  this.tmpInputs = [];
  this.getISN = function () {
    return this.isn++;
  };
  this.masterLock = true;
  this.sensMlt = 1;
  this.sensAimMlt = 1;
  this.locked = false;
  this.enabled = false;
  cXe.camera.rotation.set(0, 0, 0);
  this.pitchObject = new cXf.Object3D();
  this.pitchObject.add(cXe.camera);
  this.object = new cXf.Object3D();
  this.object.add(this.pitchObject);
  var cXF = Math.PI / 2;
  function cXG(cXf) {
    if (cXC.enabled && !window.locked) {
      cXf.preventDefault();
      window.idleTimer = 0;
      var cXg = cXf.movementX || cXf.mozMovementX || cXf.webkitMovementX || 0;
      var cXh = cXf.movementY || cXf.mozMovementY || cXf.webkitMovementY || 0;
      var cXl = cXC.mouseDownR ? cXC.sensAimMlt : cXC.sensMlt;
      var cXm = cXn.mouseSens * cXl * (cXC.target ? cXn.camChaseSen : 1) * (cXe.camera.fov / cXe.fov);
      cXC.pitchObject.rotation.x -= cXh * cXm * (cXC.invertY ? -1 : 1);
      if (!cXC.unlockView) {
        cXC.pitchObject.rotation.x = Math.max(-cXF, Math.min(cXF, cXC.pitchObject.rotation.x));
      }
      var cXo = Math.abs(cXC.pitchObject.rotation.x % (Math.PI * 2));
      dirFlip = cXo > Math.PI / 2 && cXo < Math.PI + Math.PI / 2 ? -1 : 1;
      cXC.object.rotation.y -= cXg * cXm * dirFlip;
      cXC.yDr = (cXC.pitchObject.rotation.x % Math.PI2).round(3);
      cXC.xDr = (cXC.object.rotation.y % Math.PI2).round(3);
    }
  }
  cXD.addEventListener("mousemove", cXG, false);
  function cXN(cXe) {
    if (!cXC.masterLock) {
      if (!cXC.enabled) {
        cXC.toggle(true);
      }
      if (document.activeElement == chatInput) {
        chatInput.blur();
      }
      switch (cXe.which) {
        case 3:
          cXC.mouseDownR = 1;
          if (window.spectating) {
            window.spectMode(1);
          }
          break;
        default:
          if (cXe.which > 3 || cXe.which == 2) {
            cXe.preventDefault();
            cXs(cXe, true);
          } else {
            cXC.mouseDownL = 1;
            if (window.spectating) {
              window.spectMode(-1);
            }
          }
      }
    }
  }
  cXD.addEventListener("mousedown", cXN, false);
  window.addEventListener("mousedown", function (cXe) {
    if (!cXC.enabled) {
      if (cXe.which > 3 || cXe.which == 2) {
        cXe.preventDefault();
        cXs(cXe, true);
      }
    }
  }, false);
  function cXQ(cXe) {
    if (!cXC.locked) {
      switch (cXe.which) {
        case 3:
          cXC.mouseDownR = 0;
          break;
        default:
          if (cXe.which > 3 || cXe.which == 2) {
            cXe.preventDefault();
            cXx(cXe, true);
          } else {
            cXC.mouseDownL = 0;
          }
      }
    }
  }
  cXD.addEventListener("mouseup", cXQ, false);
  window.addEventListener("mouseup", function (cXe) {
    if (!cXC.enabled) {
      if (cXe.which > 3 || cXe.which == 2) {
        cXe.preventDefault();
        cXx(cXe, true);
      }
    }
  }, false);
  this.specSpeed = 1;
  function cXT(cXe) {
    cXe = window.event || cXe;
    var cXf = -Math.max(-1, Math.min(1, cXe.wheelDelta || -cXe.detail));
    if (cXC.skipScroll) {
      cXC.skipScroll = false;
    } else {
      cXC.scrollDelta = cXf;
    }
    if (window.spectating) {
      var cXg = cXf > 0 ? -1 : 1;
      if (window.spectTarget) {
        cXC.followCamD -= cXg * 3;
        if (cXC.followCamD < cXn.specMinD) {
          cXC.followCamD = cXn.specMinD;
        }
        if (cXC.followCamD > cXn.specMaxD) {
          cXC.followCamD = cXn.specMaxD;
        }
      } else {
        cXC.specSpeed += cXg;
        if (cXC.specSpeed < 1) {
          cXC.specSpeed = 1;
        }
        if (cXC.specSpeed > 10) {
          cXC.specSpeed = 10;
        }
      }
    }
    return false;
  }
  if (cXD.addEventListener) {
    cXD.addEventListener("mousewheel", cXT, false);
    cXD.addEventListener("DOMMouseScroll", cXT, false);
  } else {
    myitem.attachEvent("onmousewheel", cXT);
  }
  this.xVel = 0;
  this.yVel = 0;
  this.zVel = 0;
  var cXX = new cXf.Vector3(0, 0, 0);
  this.freeCam = function (cXf) {
    cXX.set(0, 0, 0);
    if (this.keys[this.moveKeys[0]]) {
      cXX.z -= 1;
    }
    if (this.keys[this.moveKeys[1]]) {
      cXX.z += 1;
    }
    if (this.keys[this.moveKeys[2]]) {
      cXX.x -= 1;
    }
    if (this.keys[this.moveKeys[3]]) {
      cXX.x += 1;
    }
    if (this.keys[81]) {
      cXX.y -= 1;
    }
    if (this.keys[69]) {
      cXX.y += 1;
    }
    cXX.applyQuaternion(cXe.camera.getWorldQuaternion());
    var cXg = (this.keys[this.crouchKey] ? 0.08 : 0.04) * this.specSpeed * cXf;
    cXC.object.position.add(cXX.multiplyScalar(cXg));
    cXe.camera.position.set(0, 0, 0);
    cXe.updateFrustum();
  };
  this.followCamD = cXn.specMinD;
  this.followCam = function (cXf) {
    cXX.set(cXf.x, cXf.y + cXf.height, cXf.z);
    cXC.object.position.lerp(cXX, 0.9);
    cXe.camera.position.set(0, 0, this.followCamD);
    cXe.camera.updateProjectionMatrix();
    cXe.updateFrustum();
  };
  this.setCamPosOff = function () {
    cXe.camera.updateMatrixWorld();
    cXC.object.position.setFromMatrixPosition(cXe.camera.matrixWorld);
    cXe.camera.position.set(0, 0, 0);
  };
  this.update = function (cXf) {
    if (this.target) {
      var cXg = cXl.getAngleDst(this.object.rotation.y, this.target.yD);
      this.object.rotation.y += cXg * cXf * cXn.camChaseTrn;
      cXg = cXl.getAngleDst(cXC.pitchObject.rotation.x, this.target.xD);
      this.pitchObject.rotation.x += cXg * cXf * cXn.camChaseTrn;
      cXg = cXl.getDistance3D(this.object.position.x, this.object.position.y, this.object.position.z, this.target.x, this.target.y, this.target.z) * cXf * cXn.camChaseSpd;
      var cXh = cXl.getDirection(this.object.position.z, this.object.position.x, this.target.z, this.target.x);
      var cXm = cXl.getXDir(this.object.position.x, this.object.position.y, this.object.position.z, this.target.x, this.target.y, this.target.z);
      this.object.position.x -= cXg * Math.sin(cXh) * Math.cos(cXm);
      this.object.position.y += cXg * Math.sin(cXm);
      this.object.position.z -= cXg * Math.cos(cXh) * Math.cos(cXm);
      cXe.updateFrustum();
    }
  };
  this.dkKfR = function (cXe, cXf, cXg) {
    var cXh = cXl.getXDir(this.object.position.x, this.object.position.y, this.object.position.z, cXe, cXf, cXg);
    var cXm = cXl.getDirection(this.object.position.z, this.object.position.x, cXg, cXe);
    this.target = {
      xD: cXh,
      yD: cXm,
      x: cXe + cXn.camChaseDst * Math.sin(cXm) * Math.cos(cXh),
      y: cXf - cXn.camChaseDst * Math.sin(cXh),
      z: cXg + cXn.camChaseDst * Math.cos(cXm) * Math.cos(cXh)
    };
  };
  this.cUfuVal = function (cXf, cXg, cXh) {
    cXC.object.position.set(cXf, cXg, cXh);
    cXe.camera.updateProjectionMatrix();
    cXe.updateFrustum();
  };
  this.RBJgj = function (cXf, cXg, cXh) {
    cXe.camera.rotation.y = cXf;
    cXe.camera.rotation.x = cXg;
    cXe.camera.rotation.z = cXh;
  };
  this.jumpKey = parseInt(getSavedVal("cont_jumpKey") || 32);
  this.crouchKey = parseInt(getSavedVal("cont_crouchKey") || 16);
  this.meleeKey = parseInt(getSavedVal("cont_meleeKey") || 81);
  this.swapKey = parseInt(getSavedVal("cont_swapKey") || 69);
  this.primKey = parseInt(getSavedVal("cont_primKey") || 84);
  this.reloadKey = parseInt(getSavedVal("cont_reloadKey") || 82);
  this.sprayKey = parseInt(getSavedVal("cont_sprayKey") || 70);
  this.inspKey = parseInt(getSavedVal("cont_inspKey") || 88);
  this.aimKey = parseInt(getSavedVal("cont_aimKey") || 67);
  this.chatKey = parseInt(getSavedVal("cont_chatKey") || 13);
  this.voiceKey = parseInt(getSavedVal("cont_voiceKey") || 86);
  this.listKey = parseInt(getSavedVal("cont_listKey") || 9);
  this.interactKey = parseInt(getSavedVal("cont_interactKey") || 71);
  this.dropKey = parseInt(getSavedVal("cont_dropKey") || 90);
  this.moveKeys = [parseInt(getSavedVal("cont_0") || 87), parseInt(getSavedVal("cont_1") || 83), parseInt(getSavedVal("cont_2") || 65), parseInt(getSavedVal("cont_3") || 68)];
  this.moveDirs = [[0, -1], [0, 1], [-1, 0], [1, 0]];
  this.updateMoveDir = function () {
    for (var cXe = 0, cXf = 0, cXg = 0; cXg < cXC.moveKeys.length; ++cXg) {
      if (cXC.keys[cXC.moveKeys[cXg]]) {
        cXe += cXC.moveDirs[cXg][0];
        cXf += cXC.moveDirs[cXg][1];
      }
    }
    this.moveDir = cXe == 0 && cXf == 0 ? null : Math.atan2(cXf, cXe);
  };
  window.addEventListener("keydown", cXs, false);
  window.addEventListener("keyup", cXx, false);
  this.gamepad.on("connect", () => {
    this.gamepad.connected = true;
  });
  this.gamepad.on("disconnect", () => {
    this.gamepad.connected = false;
  });
  this.gamepad.setCustomMapping("keyboard", {});
  this.mapping = {
    JUMP: {
      INPUT: "button_1",
      KEY: "jumpKey"
    },
    CROUCH: {
      INPUT: "button_2",
      KEY: "crouchKey"
    },
    RELOAD: {
      INPUT: "button_3",
      KEY: "reloadKey"
    },
    AIM: {
      INPUT: "shoulder_bottom_left",
      KEY: "aimKey"
    },
    SWAP: {
      INPUT: "button_4",
      KEY: "swapKey"
    },
    SWAP_SECONDARY: {
      INPUT: "shoulder_top_left",
      KEY: "swapKey"
    },
    SWAP_MELEE: {
      INPUT: "shoulder_top_right",
      KEY: "meleeKey"
    },
    SHOOT: {
      INPUT: ["shoulder_bottom_right", 0.5],
      KEY: null,
      MOUSE: true
    },
    PLAYER_LIST: {
      INPUT: "select",
      KEY: "listKey"
    },
    VOICE: {
      INPUT: "d_pad_up",
      KEY: "voiceKey"
    },
    SPRAY: {
      INPUT: "d_pad_down",
      KEY: "sprayKey"
    },
    PICKUP: {
      INPUT: "d_pad_left",
      KEY: "interactKey"
    },
    DROP: {
      INPUT: "d_pad_right",
      KEY: "dropKey"
    }
  };
  for (let cXf in this.mapping) {
    var cYk = Array.isArray(this.mapping[cXf].INPUT) ? this.mapping[cXf].INPUT[0] : this.mapping[cXf].INPUT;
    var cYl = !!Array.isArray(this.mapping[cXf].INPUT) && this.mapping[cXf].INPUT[1];
    this.gamepad.on("press", cYk, cXe => {
      if (this.mapping[cXf].MOUSE) {
        if (cXe.value >= cYl || cYl === false) {
          this.fakeMouse(0);
        }
      } else if (this.mapping[cXf].KEY) {
        this.fakeKey(this[this.mapping[cXf].KEY]);
      }
    });
    this.gamepad.on("release", cYk, () => {
      if (this.mapping[cXf].MOUSE) {
        this.fakeMouse(1);
      } else {
        this.fakeKey(this[this.mapping[cXf].KEY], 1);
      }
    });
  }
  this.gamepad.on("hold", "stick_axis_left", cXe => {
    if (cXe.value[1] < -0.3) {
      this.fakeKey(this.moveKeys[1], 1);
      this.fakeKey(this.moveKeys[0]);
    } else {
      this.fakeKey(this.moveKeys[0], 1);
    }
    if (cXe.value[1] > 0.3) {
      this.fakeKey(this.moveKeys[0], 1);
      this.fakeKey(this.moveKeys[1]);
    } else {
      this.fakeKey(this.moveKeys[1], 1);
    }
    if (cXe.value[0] < -0.3) {
      this.fakeKey(this.moveKeys[3], 1);
      this.fakeKey(this.moveKeys[2]);
    } else {
      this.fakeKey(this.moveKeys[2], 1);
    }
    if (cXe.value[0] > 0.3) {
      this.fakeKey(this.moveKeys[2], 1);
      this.fakeKey(this.moveKeys[3]);
    } else {
      this.fakeKey(this.moveKeys[3], 1);
    }
  });
  this.gamepad.on("release", "stick_axis_left", () => {
    this.fakeKey(this.moveKeys[0], 1);
    this.fakeKey(this.moveKeys[1], 1);
    this.fakeKey(this.moveKeys[2], 1);
    this.fakeKey(this.moveKeys[3], 1);
  });
  this.gamepad.on("hold", "stick_axis_right", cXe => {
    this.fakeMouse(2, this.applyDeadzone(cXe.value[0], 0.25) * 40, this.applyDeadzone(cXe.value[1], 0.25) * 22.5);
  });
  this.gamepad.on("press", "start", () => {
    cXC.toggle(!cXC.enabled);
  });
  this.applyDeadzone = function (cXe, cXf) {
    let cXg = (Math.abs(cXe) - cXf) / (1 - cXf);
    if (cXg < 0) {
      cXg = 0;
    }
    return cXg * (cXe > 0 ? 1 : -1);
  };
  this.fakeKey = function (cXe, cXf = 0) {
    var cXg = {
      preventDefault: function () {},
      keyCode: cXe,
      which: cXe
    };
    if (cXf == 0) {
      cXs(cXg);
    }
    if (cXf == 1) {
      cXx(cXg);
    }
  };
  this.fakeMouse = function (cXe = 0, cXf = 0, cXg = 0, cXh = 0) {
    var cXl = {
      preventDefault: function () {},
      movementX: cXf,
      movementY: cXg,
      which: cXh
    };
    if (cXe == 0) {
      cXN(cXl);
    }
    if (cXe == 1) {
      cXQ(cXl);
    }
    if (cXe == 2) {
      cXG(cXl);
    }
  };
  this.toggle = function (cXe) {
    if (!this.locked && !this.masterLock) {
      if (windowHolder.style.display == "block") {
        if (cXe) {
          cXg.toggleWindow(false, this.gamepad.connected);
        }
      } else if (cXe) {
        cXD.requestPointerLock();
      } else {
        document.exitPointerLock();
      }
    }
  };
  this.disable = function () {
    cXC.toggle(false);
    cXC.locked = true;
  };
  this.reset = function () {
    this.mouseDownL = 0;
    this.mouseDownR = 0;
    this.keys = {};
    this.tmpInputs.length = 0;
    this.wSwap = 0;
    this.scrollDelta = 0;
    this.xDr = 0;
    this.yDr = 0;
    this.isn = 0;
    this.moveDir = null;
    this.skipScroll = false;
    this.inputChanger = null;
    this.target = null;
    this.locked = false;
    cXC.pitchObject.rotation.x = 0;
    cXC.object.rotation.y = 0;
    cXe.camera.rotation.set(0, 0, 0);
  };
};