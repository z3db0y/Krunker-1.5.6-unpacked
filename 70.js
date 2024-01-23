var c6a;
try {
  if (window) {
    c6a = require("./4.js");
  }
} catch (c6b) {}
function c6c(c67, c68, c69, c6a, c6c) {
  var c6i;
  this.id = c67;
  this.sentTo = [];
  this.inputs = [];
  this.spins = [];
  this.stateHistory = [];
  this.weaponMeshes = [];
  this.weaponGeos = {};
  this.legMeshes = [];
  this.armMeshes = [];
  this.lastInput = [];
  this.lastDeltas = [];
  this.reloads = [];
  this.ammos = [];
  this.ping = 0;
  this.pings = [];
  this.avgSpn = 0;
  this.score = 0;
  this.scoreObjs = {};
  this.checkPoint = null;
  this.checkPointList = [];
  this.killList = [];
  this.lstDrs = [];
  this.convs = 0;
  this.timer = null;
  this.gameTimer = null;
  this.kills = 0;
  this.deaths = 0;
  this.assists = 0;
  this.melees = 0;
  this.setbacks = 0;
  this.caps = 0;
  this.deathStreak = 0;
  this.level = 0;
  this.lives = c6c.waitTimers && c6c.config && c6c.config.lives || 0;
  this.deltaAdd = 0;
  this.deltaDiv = 1;
  this.sprayIndex = 0;
  this.hatIndex = -1;
  this.backIndex = -1;
  this.meleeIndex = -1;
  this.skinColIndex = -1;
  this.lastSpray = 0;
  this.lastInteract = 0;
  this.lastPicked = [];
  this.playTime = 0;
  this.lastCheck = 0;
  this.sCount = 0;
  this.streaks = {};
  this.init = function (c67, c68, c69, c6i, c6n, c6o) {
    this.x = c67;
    this.y = c68;
    this.z = c69;
    this.stepSrc = null;
    this.name = c6i || "unknown";
    this.xVel = 0;
    this.yVel = 0;
    this.zVel = 0;
    this.renderMinimal = false;
    this.spins.length = 0;
    this.noMovTimer = 0;
    this.xDire = 0;
    this.yDire = 0;
    this.hitTimer = 0;
    this.ticker = 0;
    this.spread = 0;
    this.spreadPlus = 0;
    this.aimVal = 1;
    this.aimDir = 0;
    this.aimTime = 0;
    this.streak = 0;
    this.killStreak = 0;
    this.lastKill = 0;
    this.stateHistory.length = 0;
    this.lastInput.length = 0;
    this.swapTweenA = 0;
    this.dmgReceived = {};
    this.landBobY = 0;
    this.landBobYR = 0;
    this.jumpBobY = 0;
    this.slideTimer = 0;
    this.canSlide = true;
    this.leanAnimX = 0;
    this.leanAnimY = 0;
    this.leanAnimZ = 0;
    this.bobAnimZ = 0;
    this.bobAnimY = 0;
    this.idleAnim = 0;
    this.inspecting = false;
    this.inspectX = false;
    this.stepVal = 0;
    this.stepChase = 0;
    this.stepDir = 1;
    this.stepDirR = 1;
    this.reward = 0;
    this.recoilAnim = 0;
    this.recoilAnimY = 0;
    this.recoilForce = 0;
    this.recoilTweenY = 0;
    this.recoilTweenYM = 0;
    this.recoilTweenZ = 0;
    this.burstCount = 0;
    this.jumpRot = 0;
    this.jumpRotM = 0;
    this.recoilX = 0;
    this.recoilZ = 0;
    this.crouchVal = 0;
    this.onGround = true;
    this.onLadder = false;
    this.terrainSlipping = false;
    this.rampFix = null;
    this.didJump = false;
    this.jumpCooldown = 0;
    this.didShoot = false;
    this.lodActive = false;
    this.locked = false;
    this.latestData = false;
    this.airTime = 0;
    this.height = c6a.playerHeight;
    this.headScale = c6a.cameraHeight;
    this.scale = c6a.playerScale;
    this.active = true;
    this.interpolate = false;
    this.isYou = c6n;
    this.sentTo.length = 0;
    this.inputSN = 0;
    this.inputs.length = 0;
    this.weaponIndex = 0;
    this.swapTime = 0;
    this.recon = false;
    this.inView = false;
    this.meleeAnim = {};
    this.isHacker = c6o;
    this.customLoadout = null;
    this.lastCheck = c6c.now;
    this.lastPicked.length = 0;
  };
  this.setClass = function (c67, c68, c6c, c6i) {
    if (!c6i) {
      if (c67.config && c67.config.classes.indexOf(c68) < 0) {
        if (c68 != c67.config.classes[0]) {
          this.skins = [-1, -1];
        }
        c68 = c67.config.classes[0];
      }
      if (c67.mode) {
        if (c67.mode.noWeap) {
          c68 = 9;
        }
        if (c67.mode.teamClass && c67.mode.teamClass[this.team]) {
          c68 = c67.mode.teamClass[this.team];
          this.skins = [-1, -1];
        }
      }
    }
    if (c68 == null || c68 == null) {
      c68 = c67.classes.length - 1;
    }
    this.classIndex = c68;
    this.reloads.length = 0;
    this.ammos.length = 0;
    this.loadout = [c67.classes[c68].loadout[0]];
    if (c67.classes[c68].secondary) {
      if (c69.isNumber(c6c)) {
        this.loadout.push(c6c);
      }
    } else {
      this.secIndex = null;
    }
    if (this.loadout.indexOf(12) < 0) {
      this.loadout.push(12);
    }
    this.speed = c67.classes[c68].speed || 1;
    for (var c6t = 0; c6t < this.loadout.length; ++c6t) {
      this.reloads.push(0);
      this.ammos.push(c67.weapons[this.loadout[c6t]].ammo);
    }
    this.reloadTimer = 0;
    this.regenDelay = c67.classes[c68].regenDelay || c6a.regenDelay;
    this.maxHealth = c67.classes[c68].health * (c67.config && c67.config.healthMlt || 1);
    this.health = this.maxHealth;
    this.hpChase = this.health;
    this.regen = c67.mode && c67.mode.noRegen ? 0 : c67.classes[c68].regen || c6a.regenVal;
  };
  this.updateLoadout = function (c67, c6a, c6c = true, c6i, c6y) {
    this.weaponIndex = c6a;
    this.reloads.length = 0;
    this.ammos.length = 0;
    this.loadout = [c6i];
    this.skins = [-1, -1];
    if (c69.isNumber(c6y)) {
      this.loadout.push(c6y);
    }
    if (c69.isNumber(c6y)) {
      this.secIndex = c6y;
    }
    if (this.loadout.indexOf(12) < 0) {
      this.loadout.push(12);
    }
    for (var c6z = 0; c6z < this.loadout.length; ++c6z) {
      this.reloads.push(0);
      this.ammos.push(c67.weapons[this.loadout[c6z]].ammo);
    }
    this.customLoadout = [...this.loadout];
    if (c6c && this.active) {
      c68.regenMeshes(this);
    }
  };
  this.resetInputs = function () {
    this.inputs.length = 0;
  };
  this.procInputs = function (c67, c6c, c6C) {
    this.recon = c6C;
    var c6D = Math.min(c67[1], c6a.dltMx) / this.deltaDiv;
    this.inputSN = c67[0];
    var c6E = c69.getAngleDst(c67[2], this.xDire);
    c68.saveSpin(this, c6E);
    var c6F = !c6C && this.isYou;
    if (c6F) {
      this.leanAnimX -= c6E * c6a.leanSens;
      this.leanAnimX = c69.limit(this.leanAnimX, c6a.leanMax);
      this.leanAnimY -= c69.getAngleDst(c67[3], this.yDire) * c6a.leanSens;
      this.leanAnimY = c69.limit(this.leanAnimY, c6a.leanMax);
      if (this.leanAnimX) {
        this.leanAnimX *= Math.pow(c6a.leanPull, c6D);
      }
      if (this.leanAnimY) {
        this.leanAnimY *= Math.pow(c6a.leanPull, c6D);
      }
      if (this.leanAnimZ) {
        this.leanAnimZ *= Math.pow(c6a.leanPullZ, c6D);
      }
      if (this.bobAnimZ) {
        this.bobAnimZ *= Math.pow(c6a.bobPullZ, c6D);
      }
      if (this.bobAnimY) {
        this.bobAnimY *= Math.pow(c6a.bobPullY, c6D);
      }
      if (this.recoilX) {
        this.recoilX *= Math.pow(c6a.leanPull, c6D);
      }
      if (this.recoilZ) {
        this.recoilZ *= Math.pow(c6a.leanPull, c6D);
      }
      if (this.inspecting && this.inspectX < Math.PI / 2.8) {
        this.inspectX += (Math.PI / 2.8 - this.inspectX) * 0.1;
      }
    }
    if (c67[11] == 2) {
      c68.swapMelee(this, c6C);
    } else if (c67[11] == 1) {
      c68.swapSecondary(this, c6C);
    } else if (c67[11] == 3) {
      c68.swapWeapon(this, null, null, undefined, 0, c6C);
    } else if (c67[10]) {
      c68.swapWeapon(this, c67[10], false, undefined, undefined, c6C);
    }
    if (!c6C) {
      if (this.recoilForce) {
        this.recoilAnim += this.recoilForce * c6D;
        this.recoilAnimY += this.recoilForce * (this.weapon.recoilY || 1) * (1 - this.crouchVal * 0.3) * c6D;
        this.recoilForce *= Math.pow(this.weapon.recoverF, c6D);
      }
      if (this.recoilAnim) {
        this.recoilAnim *= Math.pow(this.weapon.recover, c6D);
      }
      if (this.recoilAnimY) {
        this.recoilAnimY *= Math.pow(this.weapon.recoverY || this.weapon.recover, c6D);
      }
    }
    this.xDire = (c67[2] || 0).round(3);
    this.yDire = (c67[3] || 0).round(3);
    if (this.yDire > Math.PI / 2) {
      this.yDire = Math.PI / 2;
    } else if (this.yDire < -Math.PI / 2) {
      this.yDire = -Math.PI / 2;
    }
    this.oldX = this.x;
    this.oldY = this.y;
    this.oldZ = this.z;
    if (this.weapon.zoom && (!this.weapon.noAim || this.swapTime > 0)) {
      var c6G = this.reloadTimer <= 0 && this.swapTime <= 0;
      if (c67[6] && this.aimVal > 0 && c6G) {
        c68.cancelInspect(this);
        this.aimDir = 0;
        this.aimVal -= 1 / (this.weapon.aimSpeed / c6D);
        if (this.aimVal <= 0) {
          this.aimVal = 0;
          if (this.isYou && !c6C) {
            c68.toggleAim(this, 1);
          }
        }
        if (this.isYou && !c6C && !this.weapon.scope) {
          c68.updateAim(this, 1 - this.aimVal);
        }
      } else if (!c6G || !c67[6] && this.aimVal < 1) {
        this.aimDir = 1;
        if (!this.aimVal && this.isYou && !c6C) {
          c68.toggleAim(this, 0);
        }
        this.aimVal += 1 / (this.weapon.aimSpeed / c6D);
        if (this.aimVal >= 1) {
          this.aimVal = 1;
        }
        if (this.isYou && !c6C && !this.weapon.scope) {
          c68.updateAim(this, 1 - this.aimVal);
        }
      }
      if (this.aimVal == 0) {
        this.aimTime += c6D;
      } else {
        this.aimTime = 0;
      }
    }
    if (c67[8] && this.crouchVal < 1 && !this.onLadder) {
      this.crouchVal += c6a.crouchSpeed * c6D;
      if (this.crouchVal >= 1) {
        this.crouchVal = 1;
      }
      if (this.onGround) {
        if (c6F) {
          this.bobAnimY -= c6a.crouchAnim * 1.4 * c6D;
        }
      } else {
        this.y += c6a.crouchSpeed * c6D;
      }
    } else if (!c67[8] && this.crouchVal > 0) {
      this.crouchVal -= c6a.crouchSpeed * c6D;
      if (this.crouchVal <= 0) {
        this.crouchVal = 0;
      }
      if (this.onGround) {
        if (c6F) {
          this.bobAnimY += c6a.crouchAnim * c6D;
        }
      } else {
        this.y -= c6a.crouchSpeed * c6D;
      }
    }
    this.crouchVal &&= this.crouchVal.round(3);
    c68.updateHeight(this);
    var c6H;
    var c6I = this.onGround || this.onLadder;
    c6H = c6I ? (this.terrainSlipping ? c6a.slippingSpeed : c6a.playerSpeed) * this.speed : c6a.airSpeed;
    c6H *= this.aimVal ? 1 : c6a.aimSlow;
    c6H *= c6c.mode.spdMlt && c6c.mode.spdMlt[this.team] || 1;
    c6H *= this.crouchVal ? c6a.crouchSlow : 1;
    c6H *= this.weapon.spdMlt * c6D;
    var c6J = 0;
    c6J = this.onLadder ? c6a.ladderDecel : this.terrainSlipping ? c6a.terrainSlipDecel : this.onTerrain ? c6a.terrainDecel : this.onGround ? c6a.groundDecel : c6a.airDecel;
    if (this.crouchVal <= 0.5) {
      this.canSlide = true;
    }
    if (!this.onGround || !this.crouchVal) {
      this.slideTimer = 0;
    }
    if (this.slideTimer) {
      this.slideTimer -= c6D;
      if (this.slideTimer <= 0) {
        this.slideTimer = 0;
      } else {
        c6H *= 0.25;
        c6J = this.onTerrain ? c6a.terrainSlideDecel : c6a.slideDecel;
        var c6K = c69.getDistance(this.xVel, this.zVel, 0, 0);
        var c6L = c69.getDirection(0, 0, this.xVel, this.zVel);
        var c6M = c69.getDirection(Math.sin(this.xDire), Math.cos(this.xDire), 0, 0);
        var c6N = c69.getAngleDst(c6M, c6L) * 0.03;
        this.xVel = c6K * Math.cos(c6L + Math.PI - c6N);
        this.zVel = c6K * Math.sin(c6L + Math.PI - c6N);
      }
    }
    if (c6c.lockMove) {
      c6H *= 0;
    }
    this.jumpCooldown = Math.max(this.jumpCooldown - c6D, 0);
    if (this.onGround && this.jumpCooldown <= 0) {
      c68.tryJump(this, c67[7]);
    }
    if (!c6I) {
      this.yVel -= c6D * (c6a.gravity * (c6c.config ? c6c.config.gravMlt : 1));
    }
    var c6O = c6a.movDirs[c67[4]];
    if (c6O != Math.PI && c6O != 0 && c6O != Math.PI / 2 && c6O != -Math.PI / 2) {
      c6H *= c6c.config ? c6c.config.strafeSpd : 1;
    }
    if (c6O !== undefined) {
      this.xVel += c6H * Math.cos(c6O - this.xDire);
      this.zVel += c6H * Math.sin(c6O - this.xDire);
    }
    if (this.xVel) {
      this.x += this.xVel * c6D;
      this.xVel *= Math.pow(c6J, c6D);
      this.xVel = c69.cropVal(this.xVel, c6a.decelMin);
    }
    if (this.yVel) {
      this.y += this.yVel * c6D;
      this.yVel *= Math.pow(c6J, c6D);
    }
    if (this.zVel) {
      this.z += this.zVel * c6D;
      this.zVel *= Math.pow(c6J, c6D);
      this.zVel = c69.cropVal(this.zVel, c6a.decelMin);
    }
    var c6P = this.onGround && !this.didJump;
    var c6Q = false;
    this.onGround = false;
    this.onLadder = false;
    for (var c6R = false, c6S = "pickup", c6T = 0; c6T < c6c.map.manager.objects.length; ++c6T) {
      if ((c6i = c6c.map.manager.objects[c6T]).active && c6i.tRadius && this.collides(c6i, c6i.tRadius) && c6i.gate && !c6i.noMsg) {
        c6R = true;
        c6S = " open" + (c6i.scoreP == 0 ? "" : " <span style='color:" + (this.score >= c6i.scoreP ? "#fbc02d" : "#eb5656") + "'>[" + (c6i.method ? "Req" : "Cost") + " " + (c6i.scoreP || 0) + "]</span>");
      }
      if (c6i.active && this.collides(c6i)) {
        if (c6i.score) {
          if (!this.scoreObjs[c6i.sid]) {
            this.scoreObjs[c6i.sid] = 1;
            c68.score(this, c6i.scoreP);
          }
        } else if (c6i.teleporter) {
          c6c.checkTeleport(this, c6i);
        } else if (c6i.checkpoint) {
          c6c.setCheckPoint(this, c6i);
        } else if (c69.isNumber(c6i.pickup)) {
          c6R = true;
        } else if (c6i.flag) {
          c6c.pickupFlag(this, c6i);
        } else if (c6i.trigger) {
          if (this.flag && c6i.team == this.team && c6i.flagObj && !c6i.flagObj.carrier && c6i.flagObj.x == c6i.flagObj.orgX && c6i.flagObj.y == c6i.flagObj.orgY && c6i.flagObj.z == c6i.flagObj.orgZ) {
            c6c.capFlag(this, this.flag);
          }
        } else if (c6i.kill) {
          if (this.flag) {
            c6c.resetFlag(this.flag);
            this.flag = null;
          }
          if (c68.hasServer) {
            c68.kill(this);
          }
        } else if (c6i.ladder) {
          if (this.y < c6i.y + c6i.height && this.crouchVal == 0 && (this.yVel = 0, this.onLadder = true, this.onTerrain = false, this.stepSrc = null, c6O !== undefined)) {
            var c6U = (Math.abs(c69.getAngleDst(c6i.dir, c6O - this.xDire)) - Math.PI / 2) / (Math.PI / 2);
            if (c6U > 0) {
              this.y += c6a.ladderSpeed * this.weapon.spdMlt * c6D * c6U;
              if (this.y <= c6i.y - c6i.height) {
                this.y = c6i.y - c6i.height;
              } else if (this.y >= c6i.y + c6i.height) {
                this.y = c6i.y + c6i.height;
              }
            }
          }
        } else if (c6i.ramp) {
          if (this.y < c6i.y + c6i.height) {
            var c6V = Math.max(0, Math.min(1, c69.progressOnLine(c6i.ramp.sX, c6i.ramp.sZ, c6i.ramp.eX, c6i.ramp.eZ, this.x + this.scale * Math.cos(c6i.dir), this.z + this.scale * Math.sin(c6i.dir))));
            var c6W = c6i.y - c6i.height + c6i.height * 2 * c6V;
            if (this.y <= c6W || c6P) {
              if (c6i.boost) {
                this.y = c6W;
                var c6X = c6i.boost * c6a.boosterSpd * c6D;
                this.xVel += c6X * Math.sin(-c6i.dir + Math.PI / 2) * Math.cos(c6i.boostDr);
                this.zVel += c6X * Math.cos(-c6i.dir + Math.PI / 2) * Math.cos(c6i.boostDr);
                this.yVel += c6X * Math.sin(c6i.boostDr);
              } else {
                if (this.oldY > this.y) {
                  c68.resetStep(this, c6C);
                }
                this.y = c6W;
                this.yVel = 0;
                this.onGround = true;
                this.onTerrain = false;
                c6Q = true;
                this.rampFix = c6i.y - c6i.height + c6i.height * 2 * Math.round(c6V);
              }
            }
          }
        } else if (!c6i.isBorder && this.y < c6i.y + c6i.height && c6i.y + c6i.height - this.y <= c6a.climbHeight && this.oldY < c6i.y + c6i.height && c6P) {
          this.y += (c6i.y + c6i.height - this.y) * 0.3;
          this.onGround = true;
          this.onTerrain = false;
        } else if (this.oldY >= c6i.y + c6i.height + (c6i.isBorder ? c6a.borderH : 0)) {
          this.stepSrc = c6i.stepSrc;
          if (this.oldY > this.y) {
            c68.resetStep(this, c6C);
          }
          this.y = c6i.y + c6i.height + (c6i.isBorder ? c6a.borderH : 0);
          this.yVel = 0;
          this.onGround = true;
          this.onTerrain = false;
        } else if (this.oldX - this.scale >= c6i.x + c6i.width - 0.00001) {
          this.x = c6i.x + c6i.width + this.scale;
          this.xVel = 0;
        } else if (this.oldX + this.scale <= c6i.x - c6i.width + 0.00001) {
          this.x = c6i.x - c6i.width - this.scale;
          this.xVel = 0;
        } else if (this.oldZ - this.scale >= c6i.z + c6i.length - 0.00001) {
          this.z = c6i.z + c6i.length + this.scale;
          this.zVel = 0;
        } else if (this.oldZ + this.scale <= c6i.z - c6i.length + 0.00001) {
          this.z = c6i.z - c6i.length - this.scale;
          this.zVel = 0;
        } else if (this.oldY + this.height <= c6i.y - c6i.height) {
          this.y = c6i.y - c6i.height - this.height;
          this.yVel = 0;
        }
      }
    }
    if (!this.didJump && this.rampFix != null && Math.abs(this.y - this.rampFix) <= c6a.climbHeight) {
      if (!c6Q) {
        this.y = this.rampFix;
        this.onGround = true;
        this.yVel = 0;
        this.rampFix = null;
      }
    } else {
      this.rampFix = null;
    }
    var c6Y = c6c.map.terrain;
    if (c6Y) {
      var c6Z = c6Y.raycast(this.x, -this.z, 10000, 0, 0, -20000, true);
      if (c6Z) {
        var c70 = c6Z.z;
        if (this.y <= c70) {
          if (this.oldY > this.y) {
            c68.resetStep(this, c6C);
          }
          this.onTerrain = true;
        }
        if (this.onTerrain) {
          this.onGround = true;
          var c71 = c6Y._raycastNormal;
          c71.set(c71.x, c71.z, -c71.y);
          this.y = c70;
          var c72 = c71.x;
          var c73 = -1 + c71.y;
          var c74 = c71.z;
          var c75 = Math.sqrt(c72 * c72 + c73 * c73 + c74 * c74);
          this.terrainSlipping = c75 > c6a.terrainSlideThreshold;
          this.terrainSlipping = false;
          if (this.terrainSlipping) {
            c75 *= c6a.gravity * (c6c.config ? c6c.config.gravMlt : 1) * c6a.terrainGravityMlt * c6D;
            this.xVel += c72 * c75;
            this.yVel += c73 * c75;
            this.zVel += c74 * c75;
          } else {
            this.yVel = 0;
            this.jumpCooldown = 0;
          }
        }
      }
      if (!this.onTerrain) {
        this.terrainSlipping = false;
      }
    }
    if (this.onGround) {
      this.airTime = 0;
    } else {
      this.airTime += c6D;
    }
    if (!c6C) {
      var c76 = c69.getDistance3D(this.oldX, this.oldY, this.oldZ, this.x, this.y, this.z);
      if (this.isYou) {
        if (this.onLadder) {
          c76 *= 1.4;
        }
        c69.getDirection(this.oldX, this.oldZ, this.x, this.z);
        this.bobAnimZ += c69.getDistance(this.oldX, this.oldZ, this.x, this.z) * c6a.bobMltZ;
        this.bobAnimY -= (this.oldY - this.y) * c6a.bobMltY;
        if (c6I && c6O !== undefined) {
          c68.playerStep(this, c76);
          this.leanAnimZ -= c76 * c6a.leanMltZ * (this.weapon.zLnM || 1) * Math.cos(c6O);
        } else {
          this.stepVal *= Math.pow(c6a.stepPull, c6D);
        }
        if (this.stepChase != this.stepVal) {
          this.stepChase += (this.stepVal - this.stepChase) * 0.15;
        }
      }
      this.spreadPlus += c76 * c6a.spreadMove + Math.abs(this.oldY - this.y) * c6a.spreadFall;
      this.spreadPlus *= Math.pow(c6a.spreadRecover, c6D);
      this.spread = Math.max(this.weapon.minSpread || 0, (this.weapon.spread - this.weapon.spread * c6a.crouchSpread * this.crouchVal + this.recoilAnim * (this.weapon.spreadInc || 1) * c6a.spreadMlt + this.spreadPlus) * this.aimVal);
      if (c67[9]) {
        c68.reload(this);
      }
      if (this.reloadTimer > 0) {
        var c77 = this.reloadTimer;
        this.reloadTimer -= c6D;
        if (this.isYou && c77 >= this.weapon.reload / 2 && this.reloadTimer < this.weapon.reload / 2) {
          c68.endReload(this.weapon);
        }
        if (this.reloadTimer <= 0) {
          this.reloadTimer = 0;
          this.didShoot = false;
          this.ammos[this.weaponIndex] = this.weapon.ammo;
          c68.updatePlayerAmmo(this);
        }
      }
      if (this.swapTime > 0) {
        this.swapTime -= c6D;
        if (this.swapTime < 0) {
          this.swapTime = 0;
        }
      }
      for (c6T = 0; c6T < this.reloads.length; ++c6T) {
        if (this.reloads[c6T] > 0) {
          this.reloads[c6T] -= c6D;
          if (this.reloads[c6T] < 0) {
            this.reloads[c6T] = 0;
          }
        }
      }
      if (this.weapon) {
        var c78 = this.burstCount || !this.weapon.nAuto && c67[5];
        if (this.didShoot && !c67[5]) {
          this.didShoot = false;
        }
        if (!this.didShoot && c67[5]) {
          c78 = true;
        }
        if (c78 && this.reloads[this.weaponIndex] <= 0 && this.swapTime <= 0 && this.reloadTimer <= 0) {
          this.noMovTimer = 0;
          if (this.weapon.melee) {
            c68.melee(this);
          } else if (this.ammos[this.weaponIndex] > 0) {
            c68.shoot(this, c67);
          } else {
            c68.reload(this);
          }
        }
      }
    }
    if (c6C && c67.velObj) {
      this.xVel -= c67.velObj.x;
      this.zVel -= c67.velObj.y;
      this.yVel -= c67.velObj.z;
      this.onGround = false;
    }
    c68.playerCollisions(this);
    c68.updateInteract(this, c6R, c6S);
  };
  this.collides = function (c67, c68) {
    return this.x - this.scale < c67.x + (c67.width + (c68 || 0)) && this.x + this.scale > c67.x - (c67.width + (c68 || 0)) && this.z - this.scale < c67.z + (c67.length + (c68 || 0)) && this.z + this.scale > c67.z - (c67.length + (c68 || 0)) && this.y <= c67.y + c67.height + (c67.isBorder ? c6a.borderH : 0) && this.y + this.height >= c67.y - c67.height;
  };
  this.update = function (c67, c6c) {
    if (this.active) {
      if (this.inputs.length) {
        for (var c6i = 0; c6i < this.inputs.length; ++c6i) {
          this.procInputs(this.inputs[c6i], c67);
        }
        this.resetInputs();
      }
      this.idleAnim += c6a.idleAnimS * c6c;
      if (this.hpChase > this.health) {
        this.hpChase -= c6c * 0.035;
        if (this.hpChase <= this.health) {
          this.hpChase = this.health;
        }
      } else {
        this.hpChase = this.health;
      }
      if (this.interpolate) {
        this.dt += c6c;
        var c7e = Math.min(1.6, this.dt / (c6a.serverSendRate * c6a.interpolation));
        c7e /= c67.config ? c67.config.deltaMlt : 1;
        this.oldX = this.x;
        this.oldY = this.y;
        this.oldZ = this.z;
        this.x = this.x1 + (this.x2 - this.x1) * c7e;
        this.y = this.y1 + (this.y2 - this.y1) * c7e;
        this.z = this.z1 + (this.z2 - this.z1) * c7e;
        if (this.onGround) {
          c68.playerStep(this, c69.getDistance(this.oldX, this.oldZ, this.x, this.z));
        }
        this.xDire = Math.lerpAngle(this.xDir2, this.xDir1, Math.min(1, c7e));
        this.yDire = Math.lerpAngle(this.yDir2, this.yDir1, Math.min(1, c7e));
      }
    }
  };
  this.resetMeleeAnim = function () {
    this.meleeAnim.armT = 0;
    this.meleeAnim.armM = 0;
    this.meleeAnim.armE = 0;
    this.meleeAnim.weaR = 0;
    this.meleeAnim.weaM = 0;
    this.meleeAnim.armY = 0;
    this.meleeAnim.armR = 0;
    this.meleeAnim.lArm = 0;
    this.meleeAnim.flipW = 0;
  };
  this.reset = function () {
    this.checkPoint = null;
    this.checkPointList.length = 0;
    this.killList.length = 0;
    this.customLoadout = null;
    this.lastPicked.length = 0;
  };
}
module.exports.Player = c6c;
module.exports.manager = function (c67, c68, c7h, c7i, c7j, c7k, c7l) {
  this.list = [];
  var c7m;
  var c7n;
  var c7o;
  var c7p = require("./78.js");
  this.hasServer = c7l ? 1 : 0;
  this.setTeam = function (c68) {
    if (!c67.waitTimers && c67.mode.convTeam) {
      c68.team = c67.mode.convTeam;
    } else if (c67.mode.startTeam) {
      c68.team = c67.mode.startTeam;
    } else if (c67.mode.friendly) {
      c68.team = 1;
    } else if (c67.mode.clanWar) {
      c68.team = c68.account && c68.account.clan ? c68.account.clan : 1;
    } else if (!c68.team && c67.mode.teams && !c68.spectating) {
      for (var c69 = 0, c6a = 0, c6c = 0; c6c < this.list.length; ++c6c) {
        if (!this.list[c6c].spectating) {
          if (this.list[c6c].team == 1) {
            c69++;
          }
          if (this.list[c6c].team == 2) {
            c6a++;
          }
        }
      }
      c68.team = c69 >= c6a ? 2 : 1;
    }
  };
  this.update = function (c69) {
    for (var c6a = 0; c6a < this.list.length; ++c6a) {
      if ((c7m = this.list[c6a]).active) {
        c7m.update(c67, c69);
        if (c7l) {
          this.tickPlayer(c7m, c69);
          this.storeState(c7m);
          if (c7m.y <= c67.map.deathY) {
            if (c7m.flag) {
              c67.resetFlag(c7m.flag);
              c7m.flag = null;
            }
            this.kill(c7m);
          }
        }
        if (c68) {
          this.updateMesh(c7m);
          this.updateHeight(c7m);
        }
      }
    }
  };
  this.playerCollisions = function (c68) {
    if (c7l && c67.mode.convTeam && !c67.waitTimers) {
      for (var c69 = 0; c69 < this.list.length; ++c69) {
        if (c68.active && this.list[c69].active && c68.team == c67.mode.convTeam && c68.team != this.list[c69].team) {
          var c6a = c7k.playerHeight / 2;
          if (c7j.getDistance3D(c68.x, c68.y + c6a, c68.z, this.list[c69].x, this.list[c69].y + c6a, this.list[c69].z) <= c6a * 2.4) {
            c7l.broadcast("game" + c67.sid, "ac", c68.sid, this.list[c69].sid, c67.mode.convWord);
            this.score(c68, 100);
            c68.convs++;
            c67.updateTeam(this.list[c69], c68.team);
            if (c67.mode.killConv) {
              this.kill(this.list[c69], null, null, true);
            }
            if (c67.gameTimer) {
              c67.gameTimer += 10000;
            }
          }
        }
      }
    }
  };
  this.activeCount = function () {
    for (var c67 = 0, c68 = 0; c68 < this.list.length; ++c68) {
      if (this.list[c68].active) {
        c67++;
      }
    }
    return c67;
  };
  this.forcePos = function () {
    for (var c67 = 0; c67 < this.list.length; ++c67) {
      this.list[c67].forcePos = true;
      if (this.list[c67].objInstances) {
        this.list[c67].objInstances.visible = false;
        this.list[c67].inView = false;
      }
    }
  };
  this.saveSpin = function (c67, c68) {
    if (c7l) {
      c67.spins.unshift(c68);
      if (c67.spins.length > c7k.spinTimer / c7k.serverTickRate) {
        c67.spins.length = Math.round(c7k.spinTimer / c7k.serverTickRate);
      }
    }
  };
  this.getSpin = function (c67) {
    for (var c68 = 0, c69 = 0; c69 < c67.spins.length; ++c69) {
      c68 += c67.spins[c69];
    }
    return Math.abs(c68 * (180 / Math.PI));
  };
  this.storeState = function (c68) {
    c68.stateHistory.unshift({
      time: c67.now,
      x: c68.x,
      y: c68.y,
      z: c68.z
    });
    for (var c69 = c68.stateHistory.length - 1; c69 >= 0; --c69) {
      if (c67.now - c68.stateHistory[c69].time >= c7k.stateHistory) {
        c68.stateHistory.splice(c69, 1);
      }
    }
  };
  this.fetchState = function (c68, c69) {
    for (var c6a = c67.now - (c69 + c7k.serverSendRate * c7k.interpolation), c6c = 0; c6c < c68.stateHistory.length; ++c6c) {
      if (c68.stateHistory[c6c].time <= c6a) {
        return c68.stateHistory[c6c];
      }
    }
    return c68.stateHistory[c68.stateHistory.length - 1];
  };
  this.updateMesh = function (c69, c6a) {
    if (c69.objInstances) {
      var c6c = c69.weapon.animWhileAim ? 1 : c69.aimVal;
      var c7h = (1 - (1 - c7k.aimAnimMlt) * (1 - c69.aimVal)) * c7k.animMult * c68.weaponLean;
      var c7i = 1 - c69.crouchVal * 0.8;
      var c7j = (1 - (1 - c69.aimVal)) * c7k.animMult;
      if (!c69.isYou) {
        c7j = 0;
      }
      var c7l = 1 - (c69.weapon.recoilZM || 0.5) * (1 - c6c);
      var c7m = (1 - (c69.weapon.zRot || 0.3) * (1 - c6c)) * (c69.weapon.zRM || 1) * c68.weaponLean;
      var c7n = 1 - (c69.weapon.jYMlt || 1) * (1 - c6c);
      var c7o = 1 - (1 - c6c) * 0.45;
      var c7p = c69.bobAnimY * 0.9 * c7n * c68.weaponLean * c7j;
      var c7Y = c69.landBobY * (c69.weapon.landBob || 1) * 0.6 * (1 - (1 - c6c) * 0.75) * c68.weaponLean;
      if (c69.landBobYR != c7Y) {
        c69.landBobYR += (c7Y - c69.landBobYR) * 0.1;
      }
      var c7Z = c69.landBobY * (c69.weapon.landBob || 1) * 0.1;
      var c80 = 1 - c69.crouchVal * 0.5;
      c69.crouchVal;
      var c81 = c69.jumpRot * c80 * c7j * c68.weaponLean;
      if (c69.jumpRotM != c81) {
        c69.jumpRotM += (c81 - c69.jumpRotM) * 0.08;
      }
      var c82 = c69.jumpBobY * (c69.weapon.jumpYM || 1) * c7j * c80 * c68.weaponLean;
      var c83 = 1 - (1 - c6c) * 0.89;
      var c84 = 1 - (c69.weapon.aimRecMlt || 1) * (1 - c6c);
      var c85 = c6a ? 0.05 : c7k.stepAnim;
      var c86 = Math.sin(c69.stepVal) * c85;
      var c87 = Math.cos(c69.stepVal * 2) / 2 * c85;
      var c88 = -Math.sin(c69.stepChase) * c85;
      var c89 = -Math.cos(c69.stepChase * 2) / 2 * c85;
      var c8a = c67.config.thirdPerson ? 0 : 1 - c69.aimVal;
      var c8b = (c8a <= 0.5 ? c8a : 0.5 - (c8a - 0.5)) * 0.5;
      var c8c = c69.swapTime / c69.weapon.swapTime;
      var c8d = c69.weapon.xOff;
      var c8e = 0;
      if (c69.reloadTimer > 0) {
        c8e = (c8e = 1 - c69.reloadTimer / c69.weapon.reload) > 0.5 ? 0.5 - (c8e - 0.5) : c8e;
      }
      var c8f = (1 - (1 - c69.aimVal) * 0.88) * 1.5 * c68.weaponLean;
      c68.moveMesh(c69.objInstances, c69.x, c69.y + (c69.isYou && !c67.config.thirdPerson ? 0 : Math.abs(c86 * 3.5)), c69.z);
      c68.rotateMesh(c69.objInstances, c69.xDire + (c69.isYou ? c67.config.thirdPerson ? -c86 * 0.5 : 0 : -c86 * 2));
      c87 -= c87 * (c69.crouchVal * c7k.crouchAnimMlt);
      c86 -= c86 * (c69.crouchVal * c7k.crouchAnimMlt);
      for (var c8g = 0; c8g < c69.legMeshes.length; ++c8g) {
        c69.legMeshes[c8g].rotation.x = c86 * (c8g == 1 || c8g == 3 ? 1 : -1) * 7 + (c8g > 1 ? -0.6 : 0);
      }
      for (c8g = 0; c8g < c69.armMeshes.length; ++c8g) {
        -(c69[(c8g == 0 ? "l" : "r") + "HndTweenA"] || 0);
        c69.armMeshes[c8g].position.z = c86 * (c8g ? -1 : 1);
        c69.armMeshes[c8g].rotation.x = c69.armMeshes[c8g].xR || 0;
        c69.armMeshes[c8g].rotation.y = c69.armMeshes[c8g].yR || 0;
        c69.armMeshes[c8g].position.x = c69.armMeshes[c8g].xP || 0;
        c69.armMeshes[c8g].position.y = c69.armMeshes[c8g].yP || 0;
        if (c8g == 1) {
          c69.armMeshes[1].rotation.z = c69.armMeshes[c8g].zR + c69.crouchVal * 0.12 + c89 * -1 + c69.jumpBobY * 0.2;
          if (c69.meleeAnim && c69.weaponGeos[c69.weaponIndex]) {
            c69.armMeshes[1].rotation.z += (c69.meleeAnim.armR || 0) * c7j;
            c69.armMeshes[1].rotation.y += (c69.meleeAnim.armT || 0) * c7j;
            c69.armMeshes[1].position.x += (c69.meleeAnim.armM || 0) * c7j;
            c69.armMeshes[1].position.z += (c69.meleeAnim.armE || 0) * c7j;
            c69.armMeshes[1].position.y += (c69.meleeAnim.armY || 0) * c7j;
            if (c69.weaponGeos[c69.weaponIndex]) {
              c69.weaponGeos[c69.weaponIndex].rotation.z = c69.weaponGeos[c69.weaponIndex].zR + (c69.meleeAnim.weaR || 0);
              c69.weaponGeos[c69.weaponIndex].position.x = c69.weaponGeos[c69.weaponIndex].xP + (c69.meleeAnim.weaM || 0);
              c69.weaponGeos[c69.weaponIndex].rotation.y = c69.weaponGeos[c69.weaponIndex].yR + (c69.meleeAnim.flipW || 0);
            }
          }
        } else if (c69.meleeAnim && c69.weaponGeos[c69.weaponIndex]) {
          c69.armMeshes[0].position.z += c69.meleeAnim.lArm || 0;
          c69.armMeshes[0].rotation.y += (c69.meleeAnim.lArm || 0) * 0.1;
          c69.armMeshes[0].position.x -= (c69.meleeAnim.lArm || 0) * 0.3;
        }
      }
      var c8h = c67.attach[c69.weapon.attach];
      var c8i = c8h && c8h.aimOffY || 0;
      if (c69.weaponMeshes[c69.weaponIndex].flapMesh && c69.weapon.flap) {
        fRot = c89 * 3 + c69.recoilAnim * 2.8 - c69.leanAnimZ - c69.leanAnimX * 3 - c69.landBobYR * 1.8 + c7p + c69.crouchVal * 0.1;
        c68.rotateMesh(c69.weaponMeshes[c69.weaponIndex].flapMesh, c69.weapon.flap.rot * c69.swapTweenA + fRot, null, null);
      }
      var c8j = c67.config.thirdPerson ? 0.4 : 1;
      c68.rotateMesh(c69.upperBody, c8e * (c8j * -1), c7p * -0.2 + +c7Z + c8e * (c8j * -2.8) + c69.yDire * (c69.isYou && !c67.config.thirdPerson ? 1 : 0.5) + (-Math.PI / 4 * c8c + c69.recoilAnimY * c7k.recoilMlt) + (c69.weapon.yRot || 0));
      c68.moveMesh(c69.upperBody, 0, c69.recoilAnimY * (c69.weapon.recoilYM || 0.3) * c7j + (c69.height - c7k.cameraHeight - c7k.legHeight), 0);
      c68.rotateMesh(c69.weaponMeshes[c69.weaponIndex], c69.inspectX + c69.jumpRotM * 0.2 + c69.recoilX * c83 + c69.leanAnimX * c7o * c68.weaponLean * (c69.weapon.leanMlt || 1) + (-c88 * 0.16 * c7j * c7i + c69.leanAnimZ * 0.2) * c7h, -Math.cos(c69.idleAnim) * c80 * 0.01 * c8f - (c69.swapTweenR || 0) * 0.25 * c7j + -c69.landBobYR * 0.6 + c69.recoilTweenY * c84 + c69.leanAnimY * c7o * c68.weaponLean * (c69.weapon.leanMlt || 1) + c89 * -0.9 * c7h, c81 + c8b + c69.recoilX * c83 + (c69.swapTweenR || 0) * c7j * 0.1 + c69.leanAnimZ * c7m + -c69.inspectX * (c69.weapon.inspectR || 0) + ((c69.weapon.cLean || 0) * c69.crouchVal * c7j + -c88 * 0) * c7h);
      c68.moveMesh(c69.weaponMeshes[c69.weaponIndex], -c69.jumpRotM * c7j * 1.3 + -c69.inspectX * (c69.weapon.inspectM || 0) + (c69.leanAnimZ * 0.35 - (c69.weapon.cRot || 0) * c69.crouchVal * c7j + c86 * 0.5 * c7i * c7j) * c69.aimVal * c7h + c8d - (c8d - c69.weapon.xOrg) * c8a, Math.sin(c69.idleAnim) * 0.02 * c8f + c69.recoilTweenYM * c84 + c82 + c7Y * 0.7 - c7p * 1.5 + (c87 * 0.85 - (c69.weapon.cDrop || 0) * c69.crouchVal * c7j) * c7h + c69.weapon.yOff - (c69.weapon.yOff - c69.weapon.yOrg + c8i) * c8a, c69.weapon.zOff - (c69.weapon.zOff - c69.weapon.zOrg) * c8a + c69.bobAnimZ * c7h + c69.recoilAnim * (c69.weapon.recoilZ || 0) * c7l);
    }
  };
  this.updateHeight = function (c69) {
    var c6a = c7k.crouchDst * c69.crouchVal;
    if (!c68 || c69.isYou && !c67.config.thirdPerson) {
      c69.height = c7k.playerHeight - c6a;
    } else {
      var c6c = c7k.crouchLean * c69.crouchVal;
      c68.rotateMesh(c69.lowerBody, 0, c6c + c69.yDire * 0.5, 0);
      c69.upperBody.rotation.x -= c6c;
      c68.moveMesh(c69.lowerBody, 0, c7k.legHeight - c6a, 0);
      for (var c7h = 0; c7h < 4; ++c7h) {
        if (c69.legMeshes[c7h]) {
          c69.legMeshes[c7h].visible = c7h <= 1 ? !c69.crouchVal : !!c69.crouchVal;
        }
      }
    }
  };
  this.generateMeshes = function (c69, c6c, c7h = false) {
    var c7j = c67.classes[c69.classIndex].colors;
    var c7l = c7j[0];
    if (c69.skinColIndex >= 0) {
      c7l = c7k.skinColors[c69.skinColIndex];
    }
    if (c69.team == "inf") {
      c7l = 10083229;
      c69.hatIndex = 122;
    }
    var c7m = c67.config.thirdPerson || !c6c;
    c69.objInstances = c68.genObj3D(c69.x, c69.y, c69.z);
    c69.lowerBody = c68.genObj3D(0, c7k.legHeight, 0);
    if (c7m) {
      c69.lowerBody.add(c68.genBody(c7j[1], c7j[2], c7j[4], c7l, c69.isPreview || c69.isYou));
    }
    c69.upperBody = c68.genObj3D(0, 0, 0);
    c69.lowerBody.add(c69.upperBody);
    if (c69.backIndex >= 0 && c7m) {
      c69.backMesh = c68.genObj3D(0, (c7k.playerHeight - c7k.legHeight - c7k.headScale) / 2 - (c67.store.skins[c69.backIndex].sitOff || 0), -(c67.store.skins[c69.backIndex].sitOffZ || 0));
      c69.lowerBody.add(c69.backMesh);
      c68.loadMesh({
        src: "body/body_" + c67.store.skins[c69.backIndex].id,
        texSrc: c67.store.skins[c69.backIndex].tex ? "body/body_" + c67.store.skins[c69.backIndex].id + "_" + c67.store.skins[c69.backIndex].tex : null,
        glowText: c67.store.skins[c69.backIndex].glow,
        emissive: c67.store.skins[c69.backIndex].glow ? 16777215 : null,
        noGreen: true
      }, 0, 0, 0, Math.PI / 2, (c67.store.skins[c69.backIndex].sclMlt || 1) * 2.1, c69.backMesh);
    }
    if (c69.hatIndex >= 0 && c7m) {
      c69.hatMesh = c68.genObj3D(0, c7k.playerHeight - c7k.legHeight - (c67.store.skins[c69.hatIndex].sitOff || 0), -(c67.store.skins[c69.hatIndex].sitOffZ || 0));
      c69.lowerBody.add(c69.hatMesh);
      c68.loadMesh({
        src: "hats/hat_" + c67.store.skins[c69.hatIndex].id,
        texSrc: c67.store.skins[c69.hatIndex].tex ? "hats/hat_" + c67.store.skins[c69.hatIndex].id + "_" + c67.store.skins[c69.hatIndex].tex : null,
        glowText: c67.store.skins[c69.hatIndex].glow,
        emissive: c67.store.skins[c69.hatIndex].glow ? 16777215 : null,
        noGreen: true
      }, 0, 0, 0, Math.PI / 2, (c67.store.skins[c69.hatIndex].sclMlt || 1) * 2.1, c69.hatMesh);
    }
    if (c7m) {
      for (var c7n = 0; c7n < 4; ++c7n) {
        c69.legMeshes.push(c68.genLeg(c7n == 1 || c7n == 3, c7j[2], c7j[3], c7n > 1));
        if (c7n >= 2) {
          c68.rotateMesh(c69.legMeshes[c7n], c7n == 2 ? -Math.PI / 6 : Math.PI / 8, 0, 0);
        }
        c69.legMeshes[c7n].visible = c7n <= 1;
        c69.objInstances.add(c69.legMeshes[c7n]);
      }
    }
    for (c7n = 0; c7n < c69.ammos.length; ++c7n) {
      var c7o = c68.genObj3D(0, 0, 0);
      var c7p = c67.weapons[c69.loadout[c7n]];
      var c8x = c7p.attach == null ? null : c67.attach[c7p.attach];
      if (c6c && c7p.ammo) {
        c7o.muzzles = [];
        c7o.casings = [];
        for (var c8y = 0; c8y < 2; ++c8y) {
          if (!c8y || c7p.akimbo) {
            c7o.muzzles.push(new c6a.Sprite());
            c7o.muzzles[c8y].visible = false;
            c7o.muzzles[c8y].static = true;
            c7i.particles.push(c7o.muzzles[c8y]);
            c7o.add(c7o.muzzles[c8y]);
            c7o.casings.push(c68.genObj3D(c8y ? -c7p.xOff * 2 : 0, c7p.caseYOff || 0, c7p.caseZOff || 0));
            c7o.add(c7o.casings[c8y]);
          }
        }
        c7o.muzzleFlash = c68.genObj3D(0, 0.4, 0);
        c7o.muzzles[0].add(c7o.muzzleFlash);
      }
      if (c7p.src || !c69.isYou) {
        c7o.add(c68.genArms(c7p, c7j[1], c7j[5], c7l, null, c69.isPreview || c69.isYou));
      } else {
        var c8z;
        for (c8y = 0; c8y < 2; ++c8y) {
          c8z = c68.genArms(c7p, c7j[1], c7j[5], c7l, c8y + 1, c69.isPreview || c69.isYou);
          c7o.add(c8z);
          c69.armMeshes.push(c8z);
        }
      }
      c69.weaponMeshes.push(c7o);
      c69.weaponMeshes[c7n].visible = false;
      c69.upperBody.add(c69.weaponMeshes[c7n]);
      if (c7p.melee && (c69.isYou || c69.team != "inf")) {
        var c8A = c67.store.skins[c69.meleeIndex] || {};
        c69.weaponGeos[c7n] = c68.loadMesh({
          src: "melee/melee_" + (c8A.id || 0),
          texSrc: c8A.tex ? "melee/melee_" + (c8A.id || 0) + "_" + c8A.tex : "",
          glowText: c8A.glow,
          emissive: c8A.glow ? 16777215 : null,
          tFilter: c6a.LinearFilter,
          mat: c7h || c69.isYou ? c6a.MeshPhongMaterial : null,
          noGreen: true,
          uv2: true,
          specular: 2697513,
          shininess: 100
        }, c69.isYou ? 0.9 : 1.7, c69.isYou ? -0.95 : -0.4, c69.isYou ? 0.72 : 1.2, [-Math.PI / 3.5, c69.isYou ? 0.3 : Math.PI / 2, Math.PI * -0.9], c8A.sclMlt || 0.9, c69.armMeshes[1] ? c69.armMeshes[1] : c69.weaponMeshes[c7n]);
        if (c69.armMeshes[1]) {
          c69.armMeshes[1].yR = c69.armMeshes[1].rotation.y;
          if (c69.isYou) {
            c69.armMeshes[1].zR = c69.armMeshes[1].rotation.z = -0.3;
            c69.armMeshes[1].xR = c69.armMeshes[1].rotation.x = -0.4;
            c69.armMeshes[1].xP = c69.armMeshes[1].position.x = 0.4;
            c69.armMeshes[1].yP = c69.armMeshes[1].position.y = 0.3;
          } else {
            c69.armMeshes[1].zR = c69.armMeshes[1].rotation.z = 0.3;
            c69.armMeshes[1].yP = c69.armMeshes[1].position.y = -0.4;
            c69.armMeshes[1].xR = c69.armMeshes[1].rotation.x;
            c69.armMeshes[1].xP = c69.armMeshes[1].position.x = -0.2;
          }
          c69.armMeshes[0].xP = c69.armMeshes[0].position.x = 0.3;
          c69.armMeshes[0].yP = c69.armMeshes[0].position.y = -0.5;
          c69.armMeshes[0].zR = c69.armMeshes[0].rotation.z = -0.4;
          c69.armMeshes[0].yR = c69.armMeshes[0].rotation.y;
        }
      }
      if (c7p.src) {
        var c8B = c67.store.skins[c69.skins[c7n]] || {};
        var c8C = c69.skins[c7n] >= 0 && (c8B.glow || c8B.sameGlow);
        for (c8y = 0; c8y < 2; ++c8y) {
          if (!c8y || c7p.akimbo) {
            c68.loadMesh({
              src: "weapons/" + c7p.src,
              texSrc: c8B.tex ? c8B.tex : c69.skins[c7n] >= 0 ? "weapons/skins/" + c7p.src + "_" + c8B.id : null,
              tFilter: c6a.LinearFilter,
              mat: c7h || c69.isYou ? c6a.MeshPhongMaterial : null,
              movT: c8B.movT,
              movD: c8B.movD || 0,
              sameGlow: c8B.sameGlow,
              glowText: c8C,
              noGreen: true,
              uv2: true,
              ao: c6c && !c7p.noAo,
              shininess: c8B.shine || c7p.shine || 60,
              specular: 2697513,
              transparent: c7p.seeThrough,
              emissive: c7p.transp || c8C ? 16777215 : null
            }, c8y == 1 ? c7p.xOff * -2 : 0, 0, 0, Math.PI / 2, c7p.scale, c69.weaponMeshes[c7n]);
          }
        }
      }
      if (c6c && c7p.flap && c68.sniperFlap) {
        c69.weaponMeshes[c7n].flapMesh = c68.loadMesh({
          src: "attach/" + c7p.flap.src,
          tFilter: c6a.LinearFilter,
          noGreen: true,
          mat: c6a.MeshPhongMaterial,
          shininess: 60,
          transparent: true
        }, c7p.flap.xOff, c7p.flap.yOff, c7p.flap.zOff, Math.PI / 2, c7p.flap.scl, c69.weaponMeshes[c7n]);
      }
      if (c8x && (c6c || c7h)) {
        c68.loadMesh({
          src: "attach/" + c8x.src,
          tFilter: c6a.LinearFilter,
          noGreen: true,
          mat: c69.isYou ? c6a.MeshPhongMaterial : null,
          specular: 2697513,
          shininess: 60,
          transparent: true
        }, 0, -(c7p.yOrg || 0) + (c7p.attachYOff || 0), -(c7p.attachZOff || 0), Math.PI / 2, c8x.scale, c69.weaponMeshes[c7n]);
      }
    }
    c69.objInstances.add(c69.lowerBody);
    if (c6c) {
      c69.objInstances.traverse(function (c67) {
        c67.layers.set(1);
      });
    }
    return c69.objInstances;
  };
  this.regenMeshes = function (c67) {
    if (c67.objInstances) {
      this.disposeMesh(c67, true);
    }
    if (c68) {
      c68.add(this.generateMeshes(c67, c67.isYou));
    }
    this.swapWeapon(c67, 0, true);
  };
  this.hideAll = function () {
    for (var c67 = 0; c67 < this.list.length; ++c67) {
      if (this.list[c67].active && this.list[c67].objInstances) {
        this.list[c67].forcePos = !this.list[c67].latestData;
        this.list[c67].latestData = false;
        if (!this.list[c67].isYou) {
          this.list[c67].objInstances.visible = false;
        }
      }
    }
  };
  this.clear = function () {
    if (c68) {
      for (var c67 = 0; c67 < this.list.length; ++c67) {
        this.disposeMesh(this.list[c67]);
      }
    }
    this.list.length = 0;
  };
  this.toggleLOD = function (c67, c68) {
    if (c67.objInstances) {
      c67.objInstances.visible = c68;
    }
    c67.lodActive = !c68;
  };
  this.disposeMesh = function (c67) {
    c68.remove(c67.objInstances);
    c67.objInstances = null;
    c67.hatMesh = null;
    c67.backMesh = null;
    c67.weaponMeshes.length = 0;
    c67.weaponGeos = {};
    c67.armMeshes.length = 0;
    c67.legMeshes.length = 0;
  };
  this.add = function (c69, c6a, c7h, c7i, c7m, c7n, c7o, c7p, c8S, c8T, c8U, c8V, c8W, c8X, c8Y, c8Z) {
    for (var c90, c91 = 0; c91 < this.list.length; ++c91) {
      if (this.list[c91].id == c69) {
        c90 = this.list[c91];
        break;
      }
    }
    if (c90) {
      c90.weaponMeshes.length = 0;
      c90.weaponGeos = {};
      c90.legMeshes.length = 0;
      c90.armMeshes.length = 0;
    } else {
      (c90 = new c6c(c69, this, c7j, c7k, c67)).sid = c6a || c7j.generateSID(this.list);
      this.list.push(c90);
    }
    c7n ||= "Guest_" + c90.sid;
    c90.init(c7h, c7i, c7m, c7n, c8X, c8Y);
    if (c7l && c67.mode != null) {
      this.setTeam(c90);
    }
    c90.skins = c7p || [-1, -1];
    c90.hatIndex = c8S;
    c90.backIndex = c8T;
    c90.meleeIndex = c8U;
    c90.skinColIndex = c8V;
    c90.secIndex = c8W;
    c90.setClass(c67, c7o, c8W, !!c68);
    if (!c8Z && c67.mode.startingLoadout) {
      c8Z = c67.mode.startingLoadout;
    }
    if (c8Z) {
      c90.updateLoadout(c67, c90.weaponIndex, false, ...c8Z);
    }
    if (c68) {
      c68.add(this.generateMeshes(c90, c8X));
    }
    this.swapWeapon(c90, 0, true);
    if (typeof window != "undefined" && "updateWindow" in window) {
      window.updateWindow(23);
    }
    return c90;
  };
  this.remove = function (c68) {
    var c69 = this.indexBySid(c68);
    if (c69 >= 0) {
      if (c7l && this.list[c69]) {
        c67.dropFlag(this.list[c69].flag);
        this.dropWeapon(this.list[c69], true);
      }
      this.list[c69].room;
      var c6a = this.list[c69].id;
      if (this.list[c69].objInstances) {
        this.disposeMesh(this.list[c69]);
      }
      this.list.splice(c69, 1);
      if (c7l) {
        for (var c6c = this.list.length - 1; c6c >= 0; --c6c) {
          if ((c69 = this.list[c6c].sentTo.indexOf(c6a)) >= 0) {
            this.list[c6c].sentTo.splice(c69, 1);
          }
        }
        c7l.broadcast("game" + c67.sid, "2", c68);
        this.syncLeaders();
      }
      if (typeof window != "undefined" && "updateWindow" in window) {
        window.updateWindow(23);
      }
    }
  };
  var c96 = [0, 1, 2];
  this.getStepSound = function () {
    var c67 = c7j.randInt(0, c96.length - 1);
    var c68 = c96[c67];
    c96.splice(c67, 1);
    if (c96.length <= 0) {
      c96.push(0, 1, 2);
    }
    return c68;
  };
  this.playerStep = function (c68, c69, c6a) {
    if (c69 && (!c68.isYou && c68.crouchVal && (c69 *= 1.6), c68.stepVal += c69 * c7k.stepMlt * c68.stepDir, c68.stepVal >= Math.PI / 2 && c68.stepDir == 1 || c68.stepVal <= -Math.PI / 2 && c68.stepDir == -1)) {
      if (c7h && !c6a) {
        var c6c = c7j.randFloat(0.15, 0.25) * (c68.crouchVal < 1 ? 1 : c68.isYou ? 0.5 : 0);
        var c7i = (c68.crouchVal < 1 ? 1 : 0.8) * c7j.randFloat(0.8, 1.2);
        var c7l = c68.stepSrc ? "_" + c68.stepSrc : "";
        if (c68.isYou) {
          c7h.play("step_" + this.getStepSound() + c7l, c6c, false, c7i);
        } else if (c6c) {
          c67.playerSound("step_" + c7j.randInt(0, 2) + c7l, 0, c6c, c68, c7i, 180);
        }
      }
      c68.stepDir *= -1;
    }
  };
  this.resetStep = function (c68, c69) {
    if (!c69 && c68.isYou && c68.yVel) {
      if (c68.jumpTween) {
        c68.jumpTween.stop();
      }
      if (c68.landTween) {
        c68.landTween.stop();
      }
      c68.landTween = new TWEEN.Tween(c68).to({
        landBobY: c68.yVel * 6,
        jumpBobY: 0
      }, 100).easing(TWEEN.Easing.Linear.None).onComplete(function () {
        c68.landTween = new TWEEN.Tween(c68).to({
          landBobY: 0
        }, 1100).easing(TWEEN.Easing.Elastic.Out).start();
      }).start();
    }
    if (c7h && !c69 && c68.yVel) {
      if (c68.stepSrc) {
        c68.stepSrc;
      }
      c7h.play("step_" + this.getStepSound(), 0.7, false, c7j.randFloat(0.9, 1.2));
      if (c68.isYou && c68.crouchVal && c67.config.canSlide && c68.canSlide) {
        c7h.play("slide_0", 0.35, false, c7j.randFloat(0.9, 1.1));
      }
    }
    if (c67.config.canSlide && c68.crouchVal && c68.canSlide) {
      c68.canSlide = false;
      c68.slideTimer = c7k.slideTime * c68.crouchVal;
      var c6a = this.onTerrain ? c7k.playerTerrainSlideVelMlt : c7k.playerSlideVelMlt;
      c68.xVel *= c6a;
      c68.zVel *= c6a;
    }
  };
  this.tryJump = function (c68, c69) {
    if (c67.config && c67.config.autoJump && c69) {
      this.jump(c68);
    } else {
      if (c68.didJump && !c69) {
        c68.didJump = false;
      }
      if (!c68.didJump && c69) {
        this.jump(c68);
      }
    }
  };
  this.jump = function (c68) {
    c68.jumpCooldown = c68.terrainSlipping ? c7k.playerSlippingJumpCooldown : 0;
    c68.didJump = true;
    c68.onTerrain = false;
    var c69 = c7k.jumpVel * (c67.config ? c67.config.jumpMlt : 1);
    var c6a = c7k.jumpPush * (c67.config ? c67.config.jumpMlt : 1);
    c68.yVel += (c69 - c69 * (c7k.crouchJump * c68.crouchVal)) * c68.weapon.spdMlt * (c68.aimVal ? 1 : c7k.aimJumpSlow);
    var c6c = c7j.getDistance(0, 0, c68.xVel, c68.zVel);
    c68.xVel -= c6a * c6c * Math.sin(c68.xDire);
    c68.zVel -= c6a * c6c * Math.cos(c68.xDire);
    if (c7h && !c68.recon && c68.isYou) {
      if (c68.landTween) {
        c68.landTween.stop();
      }
      c68.landTween = new TWEEN.Tween(c68).to({
        landBobY: 0
      }, 100).easing(TWEEN.Easing.Linear.None).start();
      if (c68.jumpTween) {
        c68.jumpTween.stop();
      }
      c68.jumpTween = new TWEEN.Tween(c68).to({
        jumpBobY: 0.22
      }, 500).easing(TWEEN.Easing.Back.Out).start();
      var c7i = c7j.randFloat(0.12, 0.15);
      new TWEEN.Tween(c68).to({
        jumpRot: [c7i, 0]
      }, 900).easing(TWEEN.Easing.Back.Out).start();
      c7h.play("jump_" + c7j.randInt(0, 1), 0.04, false, c7j.randFloat(0.9, 1));
    }
  };
  this.updateAim = function (c67, c69) {
    c68.zoom(1 + (c67.weapon.zoom - 1) * c69);
  };
  this.toggleAim = function (c69, c6a) {
    if (c7h && !c69.recon) {
      c7h.play("aim_" + c6a, 0.1);
    }
    if (!c6a) {
      this.resetAim();
    }
    if (c69.weapon.scope) {
      c68.zoom(c6a ? c69.weapon.zoom : 1);
      c69.weaponMeshes[c69.weaponIndex].visible = !this.isWeaponHidden(c69, c69.weaponIndex) && !c6a;
      aimRecticle.style.opacity = c6a ? 1 : 0;
    }
    if (c67.attach[c69.weapon.attach]) {
      aimDot.style.opacity = c6a ? 1 : 0;
      var c6c = c67.store.skins[c69.skins[c69.weaponIndex]];
      var c7i = "./textures/dots/" + (c6c && c6c.dot || "dot_0") + ".png";
      if (aimDot.src != c7i) {
        aimDot.src = c7i;
      }
    }
  };
  this.resetAim = function () {
    c68.zoom(1);
    aimRecticle.style.opacity = 0;
    aimDot.style.opacity = 0;
  };
  this.isWeaponHidden = function (c68, c69) {
    var c6a = c68.loadout[c69];
    return !!c67.weapons[c6a].melee && !!c67.hideWeapon[2] || !!c67.weapons[c6a].secondary && !!c67.hideWeapon[1] || !c67.weapons[c6a].melee && !c67.weapons[c6a].secondary && !!c67.hideWeapon[0];
  };
  this.reload = function (c67) {
    if (!c67.reloadTimer && c67.ammos[c67.weaponIndex] < c67.weapon.ammo) {
      if (c7h) {
        c7h.play("reload_1", 0.25);
      }
      c67.reloadTimer = c67.weapon.reload;
      c67.burstCount = 0;
      if (c67.isYou) {
        this.cancelInspect(c67);
      }
    }
  };
  this.endReload = function (c67) {
    if (c7h) {
      c7h.play("reload_2" + (c67.custReload || ""), 0.25);
    }
  };
  this.updatePlayerAmmo = function (c67) {
    if (c67.isYou) {
      ammoDisplay.style.display = "inline-block";
      ammoVal.innerHTML = (c67.ammos[c67.weaponIndex] || (c67.weapon.melee ? "-" : 0)) + " <span id='ammoMax'> | " + (c67.weapon.ammo || "-") + "</span>";
      if (c67.ammos[c67.weaponIndex] <= 0) {
        reloadMsg.innerHTML = "[R] Reload";
        reloadMsg.style.display = "block";
      } else {
        reloadMsg.style.display = "none";
      }
    }
  };
  this.cancelInspect = function (c67) {
    c67.inspecting = false;
    c67.inspectX = 0;
  };
  this.wInspect = function (c67) {
    if (c67.inspecting) {
      this.cancelInspect(c67);
    } else if (!c67.weapon.nInsp && !c67.inspecting && c67.aimVal == 1 && !c67.reloadTimer) {
      c67.inspecting = true;
    }
  };
  this.melee = function (c68) {
    c68.reloads[c68.weaponIndex] = c68.weapon.rate;
    c68.didShoot = true;
    if (c68.isYou) {
      if (c68.weapon.anim) {
        var c69 = c67.store.skins[c68.meleeIndex] || {};
        c68.weapon.anim(c68, TWEEN, c69.animInd || 1);
      }
      if (c68.weapon.sounds) {
        c7h.play(c68.weapon.sounds[c7j.randInt(0, c68.weapon.sounds.length - 1)], 0.1, false, c7j.randFloat(0.9, 1.1));
      }
    }
    var c6a = c68.xDire;
    var c6c = c68.yDire;
    c9O.length = 0;
    for (var c7i = 0, c7m = 1 / (c68.weapon.range * Math.sin(c6a + Math.PI) * Math.cos(c6c)), c7o = 1 / (c68.weapon.range * Math.cos(c6a + Math.PI) * Math.cos(c6c)), c7p = 1 / (c68.weapon.range * Math.sin(c6c)), c96 = c68.y + c68.height - c7k.cameraHeight, c9M = 0; c9M < c67.map.manager.objects.length; ++c9M) {
      if ((c7n = c67.map.manager.objects[c9M]).active && !c7n.noShoot) {
        if ((c7i = c7j.lineInRect(c68.x, c68.z, c96, c7m, c7o, c7p, c7n.x - c7n.width, c7n.z - c7n.length, c7n.y - c7n.height, c7n.x + c7n.width, c7n.z + c7n.length, c7n.y + c7n.height)) && c7i <= 1) {
          c9O.push({
            obj: c7n,
            dst: c7i
          });
        }
      }
    }
    if (c7l) {
      for (c9M = 0; c9M < this.list.length; ++c9M) {
        if (this.list[c9M].active && c68 != this.list[c9M] && (!c68.team || c68.team != this.list[c9M].team)) {
          if (c7n = this.fetchState(this.list[c9M], c68.ping)) {
            if ((c7i = c7j.lineInRect(c68.x, c68.z, c96, c7m, c7o, c7p, c7n.x - this.list[c9M].scale - c7k.hitBoxPad, c7n.z - this.list[c9M].scale - c7k.hitBoxPad, c7n.y, c7n.x + this.list[c9M].scale + c7k.hitBoxPad, c7n.z + this.list[c9M].scale + c7k.hitBoxPad, c7n.y + this.list[c9M].height + c7k.hitBoxPad)) && c7i <= 1) {
              c9O.push({
                player: true,
                obj: this.list[c9M],
                dst: c7i
              });
            }
          }
        }
      }
    }
    c68.weapon.range;
    if (c9O.length) {
      c9O.sort(c7j.orderByDst);
      var c9N = c68.weapon.dmg;
      for (c9M = 0; c9M < c9O.length && (c7n = c9O[c9M], c68.weapon.range * c7n.dst, c7l) && (c7l && !c67.waitTimers && c7n.obj && c7n.obj.health && !c7n.player && (c7l.send(c68.id, "4"), c7n.obj.health -= c9N, c7n.obj.health <= 0 && (c7n.obj.active = false, c7n.obj.health = 0, c67.destObjs.push(c7n.obj.uid), c7l.broadcast("game" + c67.sid, "do", c7n.obj.uid))), c7n.player || c7n.obj && c7n.obj.dummy) && (this.changeHealth(c7n.obj, c68, c9N) && (c68 && (c68.melees++, c7l && c67.incStat("mk", c68)), this.kill(c7n.obj, c68, {})), (c9N -= c68.weapon.pierce == null ? c9N : c68.weapon.dmg * c7k.materialDens.flesh * c68.weapon.pierce) > 0); ++c9M);
    }
  };
  var c9O = [];
  this.shoot = function (c69, c6a) {
    var c6c = false;
    if (c7l) {
      c67.incStat("s", c69);
    }
    c69.ammos[c69.weaponIndex]--;
    c69.didShoot = true;
    if (c69.burstCount) {
      c69.burstCount--;
    } else {
      c69.burstCount = c69.weapon.burst ? c69.weapon.burst.c - 1 : 0;
    }
    c69.reloads[c69.weaponIndex] = c69.burstCount && c69.weapon.burst ? c69.weapon.burst.r : c69.weapon.rate;
    this.updatePlayerAmmo(c69);
    if (c67.playSound) {
      var c7m = c69.ammos[c69.weaponIndex] / c67.weapons[c69.loadout[c69.weaponIndex]].ammo;
      if (c69.isYou && c7m <= 0.25 && !c69.weapon.nRing) {
        c67.playSound(c69.weapon.sound, 0.85, c69, false, c7j.randFloat(0.9, 1) + (1 - c7m / 0.25) * 0.15);
      } else {
        c67.playSound(c69.weapon.sound, 0.85, c69, false, c7j.randFloat(0.9, 1));
      }
    }
    c69.recoilForce += c69.weapon.recoil;
    if (c69.isYou) {
      if (c67.controls && c67.controls.gamepad.connected) {
        c67.controls.gamepad.rumble(0, c69.weapon.rumbleDur || 200, c69.weapon.rumble || 0.5);
      }
      var c7o = c7j.randInt(0, 1) ? -c69.weapon.recoilR : c69.weapon.recoilR;
      c69.recoilX += c7o;
      c69.recoilZ += c7o;
      if (c69.recoilTween) {
        c69.recoilTween.stop();
      }
      var c7p = c69.weapon.recoilAnim && c69.weapon.recoilAnim.time || c69.weapon.rate;
      if (c69.aimVal == 0 && c69.weapon.recoilAnim && c69.weapon.recoilAnim.aimTime) {
        c7p = c69.weapon.recoilAnim.aimTime;
      }
      c69.recoilTween = new TWEEN.Tween(c69).to(c69.weapon.recoilAnim || {}, c7p * 0.15).easing(TWEEN.Easing.Linear.None).onComplete(function () {
        c69.recoilTween = new TWEEN.Tween(c69).to({
          recoilTweenY: 0,
          recoilTweenYM: 0,
          recoilTweenZ: 0
        }, c7p * 0.95).easing(TWEEN.Easing.Back.Out).start();
      }).start();
      this.cancelInspect(c69);
    }
    if (c69.isYou && !this.isWeaponHidden(c69, c69.weaponIndex)) {
      var c96 = c69.weaponMeshes[c69.weaponIndex];
      var c9W = c69.aimVal == 0 && c69.weapon.scope;
      if (c7i.showMuzzle && !c69.weapon.nMuz && (c68.useDepthMap == 0 || c68.useDepthMap == "0")) {
        for (var c9X = 0; c9X < c96.muzzles.length; ++c9X) {
          c96.muzzles[c9X].visible = true;
          c7i.setMaterial(c96.muzzles[c9X], c69.weapon.muzID || 2, 1, true);
          c96.muzzles[c9X].init(c9X ? c69.weapon.xOff * -2 : 0, c69.weapon.muzOffY || 0, -c69.weapon.muzOff, 0, 0, 0, (c69.weapon.muzMlt || 1) * 4, 1);
        }
        if (!c9W) {
          (caw = c69.weaponMeshes[c69.weaponIndex].muzzles[0].getWorldPosition().clone()).project(c68.camera);
          caw.x = (caw.x + 1) / 2;
          caw.y = (caw.y + 1) / 2;
          c68.flash(caw.x, caw.y);
        }
      }
      if (!c69.weapon.nCase && c7i.active) {
        for (c9X = 0; c9X < c69.weaponMeshes[c69.weaponIndex].casings.length; ++c9X) {
          caw = c69.weaponMeshes[c69.weaponIndex].casings[c9X].getWorldPosition();
          if (c7h && c67.now - (c69.lastShell || 0) > 400) {
            c69.lastShell = c67.now;
            c7h.play3D("case_" + c7j.randInt(0, 1), caw.x, caw.y, caw.z, 0.65, c7j.randFloat(0.8, 1.3));
          }
          if (!c9W) {
            var c9Y = c7j.randInt(0, 1) ? 1.4 : 0.8;
            c7i.physObj(caw.x, caw.y, caw.z, c69.xDire - Math.PI / 2 * (c9X ? -1 : 1), Math.PI / 5 * c7j.randFloat(0.75, 1.2) * c9Y, 25, false, c69.weapon.caseInd || 1, c69);
          }
        }
      }
    }
    if (c69.weapon.projectile == null) {
      for (var c9Z = c69.weapon.physPow ? -1 : 0; c9Z < (c69.weapon.shots || 1); ++c9Z) {
        var ca0 = c9Z >= 0 ? (c69.spread + (c69.weapon.innac || 0)) * c7k.spreadAdj : 0;
        var ca1 = c69.xDire + c7j.randFloat(-ca0, ca0);
        var ca2 = c69.yDire + c69.recoilAnimY * c7k.recoilMlt + c7j.randFloat(-ca0, ca0);
        var ca3 = c69.weapon.range;
        if (c9Z < 0) {
          ca3 = c69.weapon.physRang;
        }
        c9O.length = 0;
        for (var ca4 = 0, ca5 = 1 / (ca3 * Math.sin(ca1 + Math.PI) * Math.cos(ca2)), ca6 = 1 / (ca3 * Math.cos(ca1 + Math.PI) * Math.cos(ca2)), ca7 = 1 / (ca3 * Math.sin(ca2)), ca8 = c69.y + c69.height - c7k.cameraHeight, ca9 = 0; ca9 < c67.map.manager.objects.length; ++ca9) {
          if ((c7n = c67.map.manager.objects[ca9]).active && !c7n.noShoot) {
            if ((ca4 = c7j.lineInRect(c69.x, c69.z, ca8, ca5, ca6, ca7, c7n.x - c7n.width, c7n.z - c7n.length, c7n.y - c7n.height, c7n.x + c7n.width, c7n.z + c7n.length, c7n.y + c7n.height)) && ca4 <= 1) {
              c9O.push({
                obj: c7n,
                dst: ca4
              });
            }
          }
        }
        if (c7l && c9Z >= 0) {
          for (ca9 = 0; ca9 < this.list.length; ++ca9) {
            if (this.list[ca9].active && c69 != this.list[ca9] && (!c69.team || c69.team != this.list[ca9].team)) {
              if (c7n = this.fetchState(this.list[ca9], c69.ping)) {
                if ((ca4 = c7j.lineInRect(c69.x, c69.z, ca8, ca5, ca6, ca7, c7n.x - this.list[ca9].scale - c7k.hitBoxPad, c7n.z - this.list[ca9].scale - c7k.hitBoxPad, c7n.y, c7n.x + this.list[ca9].scale + c7k.hitBoxPad, c7n.z + this.list[ca9].scale + c7k.hitBoxPad, c7n.y + this.list[ca9].height + c7k.hitBoxPad)) && ca4 <= 1) {
                  c9O.push({
                    player: true,
                    obj: this.list[ca9],
                    dst: ca4
                  });
                }
              }
            }
          }
        }
        var caa = c67.map.terrain;
        if (caa) {
          var cab = caa.raycast(c69.x, -c69.z, ca8, 1 / ca5, -1 / ca6, 1 / ca7);
          if (cab) {
            let c67 = c7j.getDistance3D(c69.x, ca8, c69.z, cab.x, cab.z, -cab.y);
            c9O.push({
              terrain: true,
              dst: c67 / ca3
            });
          }
        }
        var cad = ca3;
        if (c9O.length) {
          c9O.sort(c7j.orderByDst);
          var cae = c69.weapon.dmg;
          for (ca9 = 0; ca9 < c9O.length; ++ca9) {
            cad = ca3 * (c7n = c9O[ca9]).dst;
            if (c9Z < 0) {
              var caf = (1 - c7n.dst) * (c69.weapon.physPow * (c67.config ? c67.config.impulseMlt : 1));
              var cag = caf * Math.sin(ca1 + Math.PI) * Math.cos(ca2);
              c69.xVel -= cag;
              var cah = caf * Math.cos(ca1 + Math.PI) * Math.cos(ca2);
              c69.zVel -= cah;
              var cai = caf * Math.sin(ca2);
              c69.yVel -= cai;
              c69.onGround = false;
              if (!c7l) {
                c6a.velObj = {
                  x: cag,
                  y: cah,
                  z: cai
                };
              }
              break;
            }
            if (!c7l) {
              break;
            }
            var caj = c69.weapon.dropStart || 0;
            var cak = Math.min(1, 1 - (1 - c7n.dst) * ca3 / (ca3 - caj));
            var cal = cae - c69.weapon.dmgDrop * cak;
            var cam = false;
            var can = false;
            if (c7n.player) {
              var cao = ca8 + cad * Math.sin(ca2);
              cam = c7n.obj.y + c7n.obj.height - cao < c7k.headScale;
              can = c7n.obj.y + c7k.legHeight > cao;
              cal *= cam && !c69.weapon.noHeadShot ? 1.5 : 1;
              cal *= can ? 0.5 : 1;
              if (!cam && !!c67.config && !!c67.config.headshotOnly) {
                cal = 0;
              }
            }
            if (c7l && !c67.waitTimers && c7n.obj && c7n.obj.health && !c7n.player) {
              c7n.obj.health -= cal;
              c7l.send(c69.id, "4");
              if (c7n.obj.health <= 0) {
                c7n.obj.active = false;
                c7n.obj.health = 0;
                c67.destObjs.push(c7n.obj.uid);
                c7l.broadcast("game" + c67.sid, "do", c7n.obj.uid);
              }
            }
            if (c7n.player || c7n.obj && c7n.obj.dummy) {
              if (c7n.player) {
                c6c = true;
              }
              if (this.changeHealth(c7n.obj, c69, cal)) {
                var cap = {
                  dst: c7n.dst,
                  headShot: cam
                };
                this.kill(c7n.obj, c69, cap);
              }
              cae -= c69.weapon.pierce == null ? cae : c69.weapon.dmg * c7k.materialDens.flesh * c69.weapon.pierce;
            } else {
              if (!c7n.obj || !c7n.obj.penetrable) {
                break;
              }
              cae -= c69.weapon.pierce == null ? cae : c69.weapon.dmg * c7k.materialDens.default * c69.weapon.pierce;
            }
            if (cae <= 0) {
              break;
            }
          }
        }
        cad -= 0.12;
        var caq = c69.x + cad * Math.sin(ca1 + Math.PI) * Math.cos(ca2);
        cao = ca8 + cad * Math.sin(ca2);
        var car = c69.z + cad * Math.cos(ca1 + Math.PI) * Math.cos(ca2);
        var cas = 0;
        var cat = 0;
        if (c9O.length) {
          if (c7n.terrain) {
            cat = Math.PI / 2;
          } else if (cao >= c7n.obj.y + c7n.obj.height) {
            cat = Math.PI / 2;
          } else if (cao <= c7n.obj.y - c7n.obj.height) {
            cat = -Math.PI / 2;
          } else if (caq <= c7n.obj.x - c7n.obj.width) {
            cas = -Math.PI / 2;
          } else if (caq >= c7n.obj.x + c7n.obj.width) {
            cas = Math.PI / 2;
          } else if (car <= c7n.obj.z - c7n.obj.length) {
            cas = Math.PI;
          }
          if (!c7l) {
            c7i.effect(caq, cao, car, cas, cat, 0);
          }
        }
        if (c7l) {
          var cau = c69.weapon && c69.weapon.trail ? 1 : 0;
          for (ca9 = 0; ca9 < this.list.length; ++ca9) {
            if ((this.list[ca9].active || this.list[ca9].spectating) && this.list[ca9] != c69) {
              if (c9O.length && !c7n.player) {
                c7l.send(this.list[ca9].id, "9", c69.sid, Math.round(caq), Math.round(cao), Math.round(car), cas.round(1), cat.round(1), cau);
              } else {
                c7l.send(this.list[ca9].id, "9", c69.sid, Math.round(caq), Math.round(cao), Math.round(car), undefined, undefined, cau);
              }
            }
          }
        }
        if (c69.isYou && cad >= c7k.tracerMinDst) {
          var cav = c7j.randInt(0, c69.weaponMeshes[c69.weaponIndex].muzzles.length - 1);
          var caw = c69.weaponMeshes[c69.weaponIndex].muzzles[cav].getWorldPosition();
          var cax = c69.weapon && c69.weapon.scope && c69.aimVal == 0 ? 7 : 0;
          var cay = caw.x - cax * Math.sin(ca1 + Math.PI) * Math.cos(ca2);
          var caz = caw.y - cax * Math.sin(ca2);
          var caA = caw.z - cax * Math.cos(ca1 + Math.PI) * Math.cos(ca2);
          c7j.getDistance3D(cay, caz, caA, caq, cao, car);
          cas = c7j.getDirection(caA, cay, car, caq);
          cat = c7j.getDirection(c7j.getDistance(cay, caA, caq, car), cao, 0, caz);
          c7i.physObj(cay, caz, caA, cas, cat, Math.min(cad + cax, c7k.tracerMaxDst), c69.weapon && c69.weapon.trail, 0, c69);
        }
      }
    } else if (c7l) {
      ca0 = (c69.spread + (c69.weapon.innac || 0)) * c7k.spreadAdj;
      ca1 = c69.xDire + c7j.randFloat(-ca0, ca0);
      ca2 = c69.yDire + c69.recoilAnimY * c7k.recoilMlt + c7j.randFloat(-ca0, ca0);
      c67.projectiles.init(c69.x, c69.y + c69.height - c7k.cameraHeight, c69.z, ca1, ca2, c69.weapon.projectile, c69);
    }
    if (c6c && c7l) {
      c67.incStat("h", c69);
    }
  };
  this.spray = function (c68) {
    if (c67.now - c68.lastSpray >= c7k.sprayTimer) {
      c9O.length = 0;
      for (var c69 = 0, c6a = 1 / (c7k.sprayRange * Math.sin(c68.xDire + Math.PI) * Math.cos(c68.yDire)), c6c = 1 / (c7k.sprayRange * Math.cos(c68.xDire + Math.PI) * Math.cos(c68.yDire)), c7h = 1 / (c7k.sprayRange * Math.sin(c68.yDire)), c7i = 0; c7i < c67.map.manager.objects.length; ++c7i) {
        if (!(c7n = c67.map.manager.objects[c7i]).noShoot && !c7n.noVis) {
          if ((c69 = c7j.lineInRect(c68.x, c68.z, c68.y + c68.height - c7k.cameraHeight, c6a, c6c, c7h, c7n.x - c7n.width, c7n.z - c7n.length, c7n.y - c7n.height, c7n.x + c7n.width, c7n.z + c7n.length, c7n.y + c7n.height)) && c69 <= 1) {
            c9O.push({
              obj: c7n,
              dst: c69
            });
          }
        }
      }
      if (c9O.length && (c9O.sort(c7j.orderByDst), c7n = c9O[0].obj)) {
        var c7m = c7k.sprayRange * c9O[0].dst - 0.1;
        var c7o = c68.y + c68.height - c7k.cameraHeight + c7m * Math.sin(c68.yDire);
        var c7p = c68.x + c7m * Math.sin(c68.xDire + Math.PI) * Math.cos(c68.yDire);
        var c96 = c68.z + c7m * Math.cos(c68.xDire + Math.PI) * Math.cos(c68.yDire);
        var caL = 0;
        var caM = 0;
        if (c7o >= c7n.y + c7n.height) {
          caM = -90;
        } else if (c7o <= c7n.y - c7n.height) {
          caM = 90;
        } else if (c7p <= c7n.x - c7n.width) {
          caL = -90;
        } else if (c7p >= c7n.x + c7n.width) {
          caL = 90;
        } else if (c96 <= c7n.z - c7n.length) {
          caL = 180;
        }
        var caN = c7k.sprayScale / 2;
        if (caM) {
          if (c7n.width < caN || c7n.length < caN) {
            return;
          }
          if (c96 - caN < c7n.z - c7n.length) {
            c96 = c7n.z - c7n.length + caN;
          } else if (c96 + caN > c7n.z + c7n.length) {
            c96 = c7n.z + c7n.length - caN;
          }
          if (c7p - caN < c7n.x - c7n.width) {
            c7p = c7n.x - c7n.width + caN;
          } else if (c7p + caN > c7n.x + c7n.width) {
            c7p = c7n.x + c7n.width - caN;
          }
        } else {
          if (c7n.height < caN) {
            return;
          }
          if (caL == 90 || caL == -90) {
            if (c7n.length < caN) {
              return;
            }
            if (c96 - caN < c7n.z - c7n.length) {
              c96 = c7n.z - c7n.length + caN;
            } else if (c96 + caN > c7n.z + c7n.length) {
              c96 = c7n.z + c7n.length - caN;
            }
          } else {
            if (c7n.width < caN) {
              return;
            }
            if (c7p - caN < c7n.x - c7n.width) {
              c7p = c7n.x - c7n.width + caN;
            } else if (c7p + caN > c7n.x + c7n.width) {
              c7p = c7n.x + c7n.width - caN;
            }
          }
          if (c7o + caN > c7n.y + c7n.height) {
            c7o = c7n.y + c7n.height - caN;
          }
        }
        c68.lastSpray = c67.now;
        if (c67.playSound) {
          c67.playSound("spray", 0.4, c68, true);
        }
        c7l.broadcast("game" + c67.sid, "sp", c68.sid, c68.sprayIndex, c7p.round(2), c7o.round(2), c96.round(2), caL, caM);
      }
    }
  };
  this.interact = function (c68) {
    if (c67.now - c68.lastInteract >= c7k.interactTimer && c68.team != "inf") {
      c68.lastInteract = c67.now;
      for (var c69 = 0; c69 < c67.map.manager.pickups.length; ++c69) {
        if ((c7m = c67.map.manager.pickups[c69]).pickup != null && c68.collides(c7m) && c68.loadout.indexOf(c7m.pickup) == -1) {
          if (c67.weapons[c68.loadout[0]] && c67.weapons[c68.loadout[0]].melee && c68.loadout.length == 1) {
            c7n = undefined;
            c68.loadout[0] = c7m.pickup;
            c68.weaponIndex = 0;
            if (c7m.pickupRep && c7n == null) {
              this.addPicked(c68, c7m.pickup);
            }
          } else if (c67.weapons[c7m.pickup].type) {
            if (c67.weapons[c68.loadout[0]].type) {
              c7n = c68.loadout[0];
              c68.loadout[0] = c7m.pickup;
              c68.weaponIndex = 0;
            } else if (!c67.weapons[c68.loadout[0]].type) {
              c7n = c67.weapons[c68.loadout[1]] && c67.weapons[c68.loadout[1]].melee ? undefined : c68.loadout[1];
              c68.loadout[1] = c7m.pickup;
              c68.weaponIndex = 1;
            }
            this.removePicked(c68, c7n);
            if (c7m.pickupRep && c7n == null) {
              this.addPicked(c68, c7m.pickup);
            }
          } else if (!c67.weapons[c7m.pickup].type) {
            c7n = c67.weapons[c68.loadout[0]] && c67.weapons[c68.loadout[0]].melee ? undefined : c68.loadout[0];
            var c6a = false;
            if (c67.weapons[c68.loadout[0]].type) {
              c68.loadout.splice(0, 0, c7m.pickup);
              if (c67.weapons[c68.loadout[1]] && c67.weapons[c68.loadout[1]].melee) {
                c68.loadout.length = 1;
              }
              c7n = undefined;
            } else if (!c67.weapons[c68.loadout[0]].type) {
              if (!c67.weapons[c68.loadout[0]] || !c67.weapons[c68.loadout[0]].melee) {
                c6a = this.removePicked(c68, c68.loadout[0]);
              }
              c68.loadout[0] = c7m.pickup;
            }
            if (c7m.pickupRep && (c7n == null || c6a)) {
              this.addPicked(c68, c7m.pickup);
            }
            c68.weaponIndex = 0;
          }
          if (c7m.pickupRep) {
            c7m.pickup = c7n;
          }
          c7l.broadcast("game" + c67.sid, "inat", c68.sid, c68.loadout, c68.weaponIndex, c7m.uid, c7m.pickupRep ? c7n : c7m.pickup);
          c68.updateLoadout(c67, c68.weaponIndex, true, ...c68.loadout);
          break;
        }
      }
      for (c69 = 0; c69 < c67.map.manager.gates.length; ++c69) {
        if ((c7m = c67.map.manager.gates[c69]).active && c68.collides(c7m, c7m.tRadius) && c68.score >= c7m.scoreP) {
          if (c7m.scoreP != 0 && !c7m.method) {
            this.score(c68, -c7m.scoreP);
          }
          c7l.broadcast("game" + c67.sid, "gte", c7m.uid, false);
          c7m.active = false;
          break;
        }
      }
    }
  };
  this.findEmptyPickup = function () {
    for (var c68, c69 = 0; c69 < c67.map.manager.pickups.length; ++c69) {
      if ((c68 = c67.map.manager.pickups[c69]).pickupRep && c68.pickup == null) {
        return c68.uid;
      }
    }
    return null;
  };
  this.addPicked = function (c67, c68) {
    if (c67.lastPicked.indexOf(c68) == -1) {
      c67.lastPicked.push(c68);
    }
  };
  this.removePicked = function (c67, c68) {
    var c69 = c67.lastPicked.indexOf(c68);
    if (c69 > -1) {
      c67.lastPicked.splice(c69, 1);
    }
    return c69 > -1;
  };
  this.dropWeapon = function (c68, c69) {
    if (c67.map.manager.pickups.length) {
      var c6a;
      var c6c = c68.weaponIndex;
      var c7h = c68.loadout[c6c];
      var c7i = [c68.x + c7j.randInt(-5, 5), c68.y + 1, c68.z + c7j.randInt(-5, 5)];
      if (c69) {
        for (var c7k = 0; c7k < c68.loadout.length; c7k++) {
          c7h = c68.loadout[c7k];
          if ((c6a = this.findEmptyPickup()) && c68.lastPicked.indexOf(c7h) > -1 && !c67.weapons[c7h].melee) {
            c7i = [c68.x + c7j.randInt(-5, 5), c68.y + 1, c68.z + c7j.randInt(-5, 5)];
            c67.updatePickup(c6a, c7h, null, c7i);
            c7l.broadcast("game" + c67.sid, "inat", null, null, null, c6a, c7h, true, c7i);
          }
        }
        c68.lastPicked.length = 0;
      } else if (!c67.weapons[c7h].melee) {
        var c7m = (c6a = this.findEmptyPickup()) && c68.lastPicked.indexOf(c7h) > -1;
        if (c7m) {
          this.removePicked(c68, c7h);
          c67.updatePickup(c6a, c7h, null, c7i);
        }
        c68.loadout = c68.loadout.length == 1 ? [] : [c68.loadout[c6c ? 0 : 1]];
        c68.weaponIndex = 0;
        c7l.broadcast("game" + c67.sid, "inat", c68.sid, c68.loadout, c68.weaponIndex, c6a, c7h, c7m, c7i);
        c68.updateLoadout(c67, c68.weaponIndex, true, ...c68.loadout);
      }
    }
  };
  this.updateInteract = function (c67, c68, c69 = "pickup") {
    if (c67.isYou) {
      var c6a = "Press [" + c7j.getKeyName(parseInt(getSavedVal("cont_interactKey") || 71)) + "] to " + c69;
      var c6c = c68 ? "block" : "none";
      if (interactMsg.innerHTML != c6a) {
        interactMsg.innerHTML = c6a;
      }
      if (interactMsg.style.display != c6c) {
        interactMsg.style.display = c6c;
      }
    }
  };
  var cbb = [];
  this.syncLeaders = function () {
    c7o = c67.mode.killSort ? this.list.slice().sort(c7j.orderByKills) : this.list.slice().sort(c7j.orderByScore);
    cbb.length = 0;
    for (var c68 = 0, c69 = 0, c6a = 0; c6a < c7o.length; ++c6a) {
      if (c7o[c6a].spectating) {
        c69++;
      } else if (c68 < 10) {
        c68++;
        cbb.push(c7o[c6a].sid, c7o[c6a].account ? c7o[c6a].account.name : c7o[c6a].name, c7o[c6a].team, c67.mode.killSort ? c7o[c6a].kills : c7o[c6a].score, c7o[c6a].account ? c7o[c6a].account.clan : 0, c7o[c6a].account ? c7o[c6a].account.featured : 0);
      }
    }
    c7l.broadcast("game" + c67.sid, "7", cbb, c69);
  };
  this.score = function (c68, c69, c6a) {
    if (c7l) {
      c68.score += c69;
      c7l.send(c68.id, "5", c69);
      this.syncLeaders();
      if (c67.mode.teams && c68.team && c67.teams && !c67.mode.noScoreC && (!c6a || !c67.mode.objective)) {
        if (c67.teams[c68.team]) {
          c67.teams[c68.team] += c69;
        } else {
          c67.teams[c68.team] = c69;
        }
        c7l.broadcast("game" + c67.sid, "ts", c68.team, c67.teams[c68.team]);
      }
    }
  };
  this.tickPlayer = function (c67, c68) {
    c67.playTime += c68;
    if (c67.hitTimer > 0) {
      c67.hitTimer -= c68;
    }
    c67.ticker -= c68;
    if (c67.ticker <= 0) {
      c67.ticker = 500;
      if (c67.hitTimer <= 0 && !c67.challMode) {
        this.changeHealth(c67, null, -c67.maxHealth * (c67.regen || 0));
      }
    }
  };
  this.changeHealth = function (c68, c69, c6a, c6c) {
    if ((!c67.waitTimers || c67.waitTimers[0].canDMG) && (c6a >= 0 || c68.health != c68.maxHealth) && (c69 && c69.account && c69.account.hack && c6a && (c6a *= 0.2), c69 && c69.avgSpn >= 0.1 && (c6a *= 0.2), c69 && c69.isHacker && (c6a *= 0.1), c69 && c69.lastHack && c67.now - c69.lastHack <= 400 && (c6a *= 0.2), !!c6c || !c68.team || !c69 || c68.team != c69.team || c6a <= 0)) {
      if (c69 && c69 != c68 && c6a > 0) {
        c7l.send(c69.id, "4");
      }
      if (c68.dummy) {
        return true;
      }
      if (c6a > 0) {
        c68.hitTimer = c68.regenDelay || 0;
      }
      c68.health -= c6a;
      c68.health = Math.max(Math.min(c68.maxHealth, c68.health), 0);
      if (c69) {
        c7l.send(c68.id, "h", Math.ceil(c68.health), null, Math.round(c69.x), Math.round(c69.z));
        if (c69 != c68) {
          if (c68.dmgReceived[c69.id]) {
            c68.dmgReceived[c69.id].val += c6a;
            c68.dmgReceived[c69.id].time = c67.now;
          } else {
            c68.dmgReceived[c69.id] = {
              time: c67.now,
              val: c6a
            };
          }
        }
      } else {
        c7l.send(c68.id, "h", Math.ceil(c68.health));
      }
      for (var c7h = 0; c7h < this.list.length; ++c7h) {
        if (this.list[c7h] != c68) {
          c7l.send(this.list[c7h].id, "h", Math.ceil(c68.health), c68.sid);
        }
      }
      return c68.health <= 0;
    }
  };
  this.swapMelee = function (c67, c68) {
    if (c67.ammos.length > 1) {
      if (c67.weaponIndex == c67.ammos.length - 1) {
        this.swapWeapon(c67, 1, false, undefined, undefined, c68);
      } else {
        this.swapWeapon(c67, null, null, undefined, c67.ammos.length - 1, c68);
      }
    }
  };
  this.swapSecondary = function (c68, c69) {
    if (c68.ammos.length > 1) {
      for (var c6a, c6c = 0; c6c < c68.ammos.length; ++c6c) {
        c6a = c68.loadout[c6c];
        if (c67.weapons[c6a] && c67.weapons[c6a].secondary) {
          if (c68.weaponIndex == c6c) {
            this.swapWeapon(c68, null, null, undefined, 0, c69);
          } else {
            this.swapWeapon(c68, null, null, undefined, c6c, c69);
          }
        }
      }
    }
  };
  this.swapWeapon = function (c69, c6a, c6c, c7h, c7i, c7k) {
    if ((c69.ammos.length > 1 || !c6a) && c7h <= c69.ammos.length) {
      var c7l = c69.weaponIndex;
      if (c6a) {
        if (c6a != 1 && c6a != -1) {
          c6a = 0;
        }
        c69.weaponIndex += c6a;
        if (c6a == 1) {
          if (c69.weaponIndex > c69.ammos.length - 2) {
            c69.weaponIndex = 0;
          }
        } else if (c69.weaponIndex < 0) {
          c69.weaponIndex = Math.min(c69.ammos.length - 1, 2);
        } else {
          c69.weaponIndex = 0;
        }
      }
      if (c7h != null) {
        c69.weaponIndex = c7h;
      }
      if (c7i != null) {
        c69.weaponIndex = c7i;
      }
      if ((c6a != null || c7i != null) && (c7l != c69.weaponIndex || c6c)) {
        c69.reloadTimer = 0;
        c69.didShoot = false;
        c69.burstCount = 0;
      }
      c69.weapon = c67.weapons[c69.loadout[c69.weaponIndex]];
      if (!c69.weapon) {
        c69.weapon = c67.weapons[c69.loadout[0]];
        if (c69.weapon) {
          c69.weaponIndex = 0;
        }
      }
      if (c68 && (c7l != c69.weaponIndex || c6c)) {
        this.cancelInspect(c69);
        for (var c7m = 0; c7m < c69.weaponMeshes.length; ++c7m) {
          c69.weaponMeshes[c7m].visible = false;
        }
        if (c69.weaponMeshes[c69.weaponIndex]) {
          c69.weaponMeshes[c69.weaponIndex].visible = !this.isWeaponHidden(c69, c69.weaponIndex) || !c69.isYou;
        }
      }
      if (c7h == null && c69.weapon && (!c68 || c69.isYou) && (c69.isYou && c7l == c69.weaponIndex || c7k || (c69.swapTime = c69.weapon.swapTime), c69.isYou && (c7l != c69.weaponIndex || c6c))) {
        var c7n;
        var c7o = "";
        for (c7m = 0; c7m < c69.ammos.length; ++c7m) {
          c7n = c7m == c69.weaponIndex;
          if (c67.weapons[c69.loadout[c7m]].icon) {
            c7o += "<div class='weaponItem'>" + (c7m > 0 ? "<div class='weapKey'>" + (c67.weapons[c69.loadout[c7m]].melee ? "[" + c7j.getKeyName(c67.controls.meleeKey) + "]" : "[" + c7j.getKeyName(c67.controls.swapKey) + "]") + "</div>" : "") + "<img style='opacity:" + (c7n ? 1 : 0.7) + (c7m ? ";margin-right:25px" : "") + "' class='weaponIcon' src='" + (c67.weapons[c69.loadout[c7m]].melee ? "./textures/melee/icon_" + (c67.store.skins[c69.meleeIndex] && c67.store.skins[c69.meleeIndex].id || 0) : "./textures/weapons/" + c67.weapons[c69.loadout[c7m]].icon) + ".png' /></div>";
          }
        }
        if (!c7k) {
          if (c69.swapTween) {
            c69.swapTween.stop();
          }
          c69.swapTweenA = 0.5;
          c69.swapTween = new TWEEN.Tween(c69).to({
            swapTweenA: 1
          }, 1200).easing(TWEEN.Easing.Elastic.Out).start();
          if (c7l != c69.weaponIndex && c69.aimVal == 1) {
            if (c69.swapTweenAnim) {
              c69.swapTweenAnim.stop();
            }
            c69.swapTweenR = c69.weapon.swapWiggle || 0.6;
            c69.swapTweenAnim = new TWEEN.Tween(c69).to({
              swapTweenR: 0
            }, c69.weapon.swapTime + 220).easing(TWEEN.Easing.Back.InOut).start();
          }
          if (c7l != c69.weaponIndex && c69.aimVal == 1) {
            if (c69.meleeAnim.anim) {
              c69.meleeAnim.anim.stop();
            }
            c69.resetMeleeAnim();
            c69.meleeAnim.armR = 0.15;
            if (c69.weapon.melee) {
              c69.meleeAnim.anim = new TWEEN.Tween(c69.meleeAnim).to({
                armR: 0
              }, 700).easing(TWEEN.Easing.Back.InOut).start();
            }
          }
        }
        weaponDisplay.innerHTML = c7o;
        this.updatePlayerAmmo(c69);
      }
    }
  };
  this.checkStreak = function (c68) {
    for (var c69 = 0; c69 < c67.streaks.length; ++c69) {
      if (c68.killStreak == c67.streaks[c69].kills) {
        this.addStreak(c68, c69);
      }
    }
  };
  this.useStreak = function (c68, c69) {
    if (c68.streaks[c69] && c68.streaks[c69].activate(c67, c68)) {
      c68.streaks[c69] = null;
      c7l.send(c68.id, "st", c69, 1);
    }
  };
  this.addStreak = function (c68, c69) {
    if (!c68.streaks[c69]) {
      c68.streaks[c69] = c67.streaks[c69];
      c7l.send(c68.id, "st", c69);
    }
  };
  this.kill = function (c68, c69, c6a, c6c, c7h) {
    if (c68.dummy || c68.active) {
      var c7i = false;
      if (!c68.dummy) {
        c68.active = false;
        if (c68.isYou) {
          this.toggleAim(c68, 0);
        }
        if (c68.objInstances) {
          this.disposeMesh(c68);
        }
      }
      if (c7l) {
        var c7j;
        var c7m = 0;
        c68.deaths++;
        if (!c67.mode.noStreaks) {
          c68.deathStreak++;
        }
        if (c68.lives && !c67.waitTimers) {
          c68.lives--;
          c7l.send(c68.id, "lv", c68.lives);
        }
        c67.kills++;
        if (c69 && c69 != c68) {
          if (!c68.dummy) {
            c69.kills++;
          }
          if (!c67.mode.noStreaks) {
            c69.streak++;
            c69.killStreak++;
            c69.deathStreak = 0;
            this.checkStreak(c69);
            if (c69.killStreak == 5) {
              c7m = 5;
            } else if (c69.killStreak == 10) {
              c7m = 10;
            } else if (c69.killStreak == 15) {
              c7m = 15;
            } else if (c69.killStreak == 20) {
              c7m = 20;
            } else if (c69.killStreak == 25) {
              c7m = 25;
            } else if (c69.killStreak == 30) {
              c7m = 30;
            }
            if (c67.now - c69.lastKill >= c7k.feedTimer) {
              c69.streak = 0;
            }
          }
          c69.lastKill = c67.now;
          if (!c7h && c67.config.killRewards && !c67.mode.noKillRewards) {
            if (c7j = c7p.reward(this, c69, c68, c6a, c67)) {
              c7l.send(c69.id, "6", c7j, c6a.headShot ? 1 : 0, c69.kills);
            }
            this.score(c69, c7p.getScore(c7j), true);
            c7i = true;
          }
          c67.players.dropWeapon(c68, true);
        }
        if (c67.mode.onKill) {
          c67.mode.onKill(c67, c68, c69);
        }
        if (!c68.dummy) {
          for (var c7n = 0; c7n < this.list.length; ++c7n) {
            if (!c67.mode.noAssists && c68.dmgReceived[this.list[c7n].id] && c69 != this.list[c7n] && c68.dmgReceived[this.list[c7n].id].val >= c7k.assistMin && c67.now - c68.dmgReceived[this.list[c7n].id].time <= c7k.assistTime) {
              this.list[c7n].assists++;
              this.score(this.list[c7n], c7k.assistScore, true);
              c7l.send(this.list[c7n].id, "10");
              c7i = true;
            }
            if (this.list[c7n] == c68) {
              c7l.send(c68.id, "3", c68.sid, c68.deaths, c69 ? c69.sid : 0, c67.mode.killRes ? c67.mode.killRes(c69) : [c69 ? c69.loadout[c69.weaponIndex] : -1, c7j ? c7p.getScore(c7j) : 0], c6c);
            } else {
              c7l.send(this.list[c7n].id, "3", c68.sid, c68.deaths, c69 ? c69.sid : 0, null, c6c);
            }
          }
        }
        if (c7m) {
          c7l.broadcast("game" + c67.sid, "kst", c69.sid, c7m);
        }
      }
      if (c7l && !c7i) {
        this.syncLeaders();
      }
    }
  };
  this.indexBySid = function (c67) {
    for (var c68 = 0; c68 < this.list.length; ++c68) {
      if (this.list[c68].sid == c67) {
        return c68;
      }
    }
    return -1;
  };
  this.findBySid = function (c67) {
    for (var c68 = 0; c68 < this.list.length; ++c68) {
      if (this.list[c68].sid === c67) {
        return this.list[c68];
      }
    }
    return null;
  };
};