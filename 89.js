var cvH = require("./8.js");
var cvI = require("./7.js");
function cvJ() {
  this.init = function (cvE, cvF, cvG, cvH, cvI, cvJ, cvQ) {
    this.x = cvE;
    this.y = cvF;
    this.z = cvG;
    cvH -= Math.PI;
    this.xD = cvH;
    this.yD = cvI;
    this.spd = cvJ.spd;
    this.range = cvJ.range;
    this.dmg = cvJ.dmg;
    this.owner = cvQ;
    this.skipMove = true;
    this.expl = cvJ.explode;
    this.xS = this.spd * Math.sin(cvH) * Math.cos(cvI);
    this.zS = this.spd * Math.cos(cvH) * Math.cos(cvI);
    this.yS = this.spd * Math.sin(cvI);
    this.active = true;
  };
  this.update = function (cvE) {
    if (this.active) {
      if (this.skipMove) {
        this.skipMove = false;
      } else {
        this.x += this.xS * cvE;
        this.z += this.zS * cvE;
        this.y += this.yS * cvE;
        this.range -= this.spd * cvE;
        if (this.range <= 0) {
          this.active = false;
        }
      }
    }
  };
}
module.exports = function (cvE, cvF) {
  var cvU;
  var cvV;
  var cvW = cvF ? {} : require("./4.js");
  var cvX = [];
  this.projectiles = [];
  this.types = [{
    mat: cvW.MeshBasicMaterial,
    color: 16777179,
    explode: 50,
    dmg: 125,
    spd: 0.5,
    scale: 1.4,
    length: 10,
    range: 600
  }, {
    mat: cvW.MeshBasicMaterial,
    color: 16777179,
    dmg: 200,
    spd: 0.68,
    scale: 0.7,
    length: 10,
    range: 1000
  }];
  this.update = function (cvG) {
    for (var cvJ = 0; cvJ < this.projectiles.length; ++cvJ) {
      if ((cvU = this.projectiles[cvJ]).active) {
        cvU.update(cvG);
        if (cvU.active) {
          cvX.length = 0;
          for (var cvW = 1 / (cvU.spd * cvG * Math.sin(cvU.xD) * Math.cos(cvU.yD)), cw1 = 1 / (cvU.spd * cvG * Math.cos(cvU.xD) * Math.cos(cvU.yD)), cw2 = 1 / (cvU.spd * cvG * Math.sin(cvU.yD)), cw3 = 0; cw3 < cvE.map.manager.objects.length; ++cw3) {
            if (!(cvV = cvE.map.manager.objects[cw3]).noShoot && cvV.active) {
              tmpDst = cvH.lineInRect(cvU.x, cvU.z, cvU.y, cvW, cw1, cw2, cvV.x - cvV.width, cvV.z - cvV.length, cvV.y - cvV.height, cvV.x + cvV.width, cvV.z + cvV.length, cvV.y + cvV.height);
              if (tmpDst && tmpDst <= 1) {
                cvX.push({
                  obj: cvV,
                  dst: tmpDst
                });
              }
            }
          }
          for (cw3 = 0; cw3 < cvE.players.list.length; ++cw3) {
            if ((cvV = cvE.players.list[cw3]).active && cvV != cvU.owner) {
              tmpDst = cvH.lineInRect(cvU.x, cvU.z, cvU.y, cvW, cw1, cw2, cvV.x - cvV.scale - cvI.hitBoxPad, cvV.z - cvV.scale - cvI.hitBoxPad, cvV.y, cvV.x + cvV.scale + cvI.hitBoxPad, cvV.z + cvV.scale + cvI.hitBoxPad, cvV.y + cvV.height + cvI.hitBoxPad);
              if (tmpDst && tmpDst <= 1) {
                cvX.push({
                  plr: true,
                  obj: cvV,
                  dst: tmpDst
                });
              }
            }
          }
          var cw4 = cvE.map.terrain;
          if (cw4) {
            var cw5 = cw4.raycast(cvU.x, -cvU.z, cvU.y, 1 / cvW, -1 / cw1, 1 / cw2);
            if (cw5) {
              let cvE = cvH.getDistance3D(cvU.x, cvU.y, cvU.z, cw5.x, cw5.z, -cw5.y);
              cvX.push({
                dst: cvE / cvU.range
              });
            }
          }
          if (cvX.length) {
            cvX.sort(cvH.orderByNum);
            if (cvX[0]) {
              if (cvX[0].obj && cvX[0].plr && cvE.players.changeHealth(cvX[0].obj, cvU.owner, cvU.dmg)) {
                cvE.players.kill(cvX[0].obj, cvU.owner, {});
              }
              cvU.x += cvX[0].dst * (cvU.xS * cvG);
              cvU.y += cvX[0].dst * (cvU.yS * cvG);
              cvU.z += cvX[0].dst * (cvU.zS * cvG);
            }
            cvU.active = false;
          }
        }
        if (!cvU.active) {
          if (cvU.expl) {
            cvE.explosion(cvU.x, cvU.y, cvU.z, cvU.expl, cvU.dmg, cvU.owner);
          }
          for (cw3 = 0; cw3 < cvE.players.list.length; ++cw3) {
            cvF.send(cvE.players.list[cw3].id, "pre", cvU.sid);
          }
        }
      }
    }
  };
  this.init = function (cvG, cvH, cvI, cvV, cvW, cvX, cwd) {
    cvG = cvG.round(1);
    cvH = cvH.round(1);
    cvI = cvI.round(1);
    cvV = cvV.round(3);
    cvW = cvW.round(3);
    cvU = null;
    for (var cwe = 0; cwe < this.projectiles.length; ++cwe) {
      if (!this.projectiles[cwe].active) {
        cvU = this.projectiles[cwe];
        break;
      }
    }
    if (!cvU) {
      (cvU = new cvJ()).sid = this.projectiles.length;
      this.projectiles.push(cvU);
    }
    cvU.init(cvG, cvH, cvI, cvV, cvW, this.types[cvX], cwd);
    if (cvF) {
      for (cwe = 0; cwe < cvE.players.list.length; ++cwe) {
        if (cvE.players.list[cwe].active || cvE.players.list[cwe].spectating) {
          cvF.send(cvE.players.list[cwe].id, "pr", cvG, cvH, cvI, cvV, cvW, cvX, cvU.sid);
        }
      }
    }
  };
};