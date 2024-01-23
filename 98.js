let config = require("./7.js");
let utils = require("./8.js");
let THREE = require("./4.js");
let overlay = {};
let cxo = overlay.canvas = document.getElementById("game-overlay");
function resizeOverlay() {
  cxo.width = window.innerWidth;
  cxo.height = window.innerHeight;
}
window.addEventListener("resize", resizeOverlay);
resizeOverlay();
let cxq = new Image();
let cxr = false;
cxq.onload = () => cxr = true;
cxq.src = "./img/muzflash.png";
let cxs = new Image();
let cxt = false;
cxs.onload = () => cxt = true;
cxs.src = "./textures/objective_1.png";
overlay.showFlash = false;
overlay.flashX = 0;
overlay.flashY = 0;
overlay.crosshairType = 1;
overlay.crosshairColor = "white";
overlay.crosshairShadow = "black";
overlay.crosshairOpacity = 0;
overlay.crosshairScale = 0;
overlay.crosshairAlways = false;
overlay.dynamicHP = true;
overlay.crosshairStyle = 1;
overlay.crosshairThick = 2;
overlay.crosshairLen = 16;
overlay.crosshairImage = new Image();
var cxu = new THREE.Vector3();
function cxv(cxh, cxi, cxj, cxk, cxl, cxm = 1, cxo = false, cxp = true, cxq = true) {
  if (cxp) {
    cxh.save();
    if (cxq) {
      cxh.fillStyle = overlay.crosshairShadow;
    } else {
      cxh.strokeStyle = overlay.crosshairShadow;
    }
    cxh.lineWidth = cxm;
    cxh.globalAlpha *= 0.5;
    cxh.beginPath();
    if (cxo) {
      cxh.ellipse(cxi + cxk / 2, cxj + cxl / 2, cxk / 2 + 2, cxl / 2 + 2, 0, 0, Math.PI * 2);
    } else {
      cxh.rect(cxi - 2, cxj - 2, cxk + 4, cxl + 4);
    }
    if (cxq) {
      cxh.fill();
    } else {
      cxh.stroke();
    }
    cxh.restore();
  }
  if (cxq) {
    cxh.fillStyle = overlay.crosshairColor;
  } else {
    cxh.strokeStyle = overlay.crosshairColor;
  }
  cxh.lineWidth = cxm;
  cxh.beginPath();
  if (cxo) {
    cxh.ellipse(cxi + cxk / 2, cxj + cxl / 2, cxk / 2, cxl / 2, 0, 0, Math.PI * 2);
  } else {
    cxh.rect(cxi, cxj, cxk, cxl);
  }
  if (cxq) {
    cxh.fill();
  } else {
    cxh.stroke();
  }
}
overlay.render = function (cxh, cxi, cxj, cxm) {
  let cxp = cxo.getContext("2d");
  let cxK = overlay;
  let cxL = cxo.width / cxh;
  let cxM = cxo.height / cxh;
  let cxN = menuHolder.style.display == "none" && endUI.style.display == "none" && killCardHolder.style.display == "none";
  cxp.save();
  cxp.scale(cxh, cxh);
  cxp.clearRect(0, 0, cxL, cxM);
  var cxO = cxj.camera.getWorldPosition();
  if (menuHolder.style.display == "none" && endUI.style.display == "none") {
    for (var cxP = 0; cxP < cxi.players.list.length; ++cxP) {
      tmpObj = cxi.players.list[cxP];
      if (!tmpObj.active) {
        continue;
      }
      if (tmpObj.isYou || !tmpObj.objInstances) {
        continue;
      }
      if (!tmpObj.inView) {
        continue;
      }
      (cxY = tmpObj.objInstances.position.clone()).y += config.playerHeight + config.nameOffset - tmpObj.crouchVal * config.crouchDst;
      if (tmpObj.hatIndex >= 0) {
        cxY.y += config.nameOffsetHat;
      }
      if ((cxZ = Math.max(0.3, 1 - utils.getDistance3D(cxO.x, cxO.y, cxO.z, cxY.x, cxY.y, cxY.z) / 600)) * 20 < 1 || !cxj.frustum.containsPoint(cxY)) {
        continue;
      }
      cxp.save();
      cxY.project(cxj.camera);
      cxY.x = (cxY.x + 1) / 2;
      cxY.y = (cxY.y + 1) / 2;
      cxp.translate(cxL * cxY.x, cxM * (1 - cxY.y));
      cxp.scale(cxZ, cxZ);
      cxp.fillStyle = "rgba(0, 0, 0, 0.4)";
      cxp.fillRect(-60, -16, 120, 16);
      if (cxK.dynamicHP && tmpObj.hpChase > tmpObj.health) {
        cxp.fillStyle = "#FFFFFF";
        cxp.fillRect(-60, -16, tmpObj.hpChase / tmpObj.maxHealth * 120, 16);
      }
      var cxQ = cxm && cxm.team ? cxm.team : window.spectating ? 1 : 0;
      cxp.fillStyle = cxQ == tmpObj.team ? "#9eeb56" : "#eb5656";
      cxp.fillRect(-60, -16, tmpObj.health / tmpObj.maxHealth * 120, 16);
      let cxh = tmpObj.name;
      let cxn = tmpObj.clan ? "[" + tmpObj.clan + "]" : null;
      let cxo = tmpObj.level;
      cxp.font = "30px GameFont";
      let cxq = cxo ? cxp.measureText(cxo).width + 10 : 0;
      cxp.font = "20px GameFont";
      let cxr = cxp.measureText(cxh).width + (cxn ? 5 : 0);
      let cxs = cxq + cxr + (cxn ? cxp.measureText(cxn).width : 0);
      cxp.translate(0, -26);
      cxp.fillStyle = "white";
      cxp.font = "30px GameFont";
      if (cxo) {
        cxp.fillText(cxo, -cxs / 2, 0);
      }
      cxp.font = "20px GameFont";
      cxp.globalAlpha = 1;
      cxp.fillText(cxh, -cxs / 2 + cxq, 0);
      cxp.globalAlpha = config.verClans.indexOf(tmpObj.clan) >= 0 ? 1 : 0.4;
      cxp.fillStyle = config.verClans.indexOf(tmpObj.clan) >= 0 ? "#fbc02d" : "white";
      if (cxn) {
        cxp.fillText(cxn, -cxs / 2 + cxq + cxr, 0);
      }
      cxp.restore();
    }
  }
  if (cxi.mode && cxi.mode.objective && cxN && cxi.map.manager.objectives.length > 0) {
    var cxX = true;
    var cxY = cxi.map.manager.objectives[cxi.activeObjective];
    for (cxP = 0; cxP < cxi.map.manager.objectives.length; ++cxP) {
      tmpObj = cxi.map.manager.objectives[cxP];
      if (cxP == cxi.activeObjective && utils.pointInBox3D(cxO.x, cxO.y, cxO.z, tmpObj)) {
        cxX = false;
        break;
      }
    }
    if (cxY && cxX) {
      cxu.set(cxY.x, cxY.y + 7, cxY.z);
      var cxZ;
      var cy0 = (cxZ = Math.max(0.3, 1 - utils.getDistance3D(cxO.x, cxO.y, cxO.z, cxu.x, cxu.y, cxu.z) / 600)) * 70;
      if (cy0 >= 1 && cxj.frustum.containsPoint(cxu) && cxt) {
        cxu.project(cxj.camera);
        cxu.x = (cxu.x + 1) / 2;
        cxu.y = (cxu.y + 1) / 2;
        let cxh = cy0 / cxs.width;
        cxp.save();
        cxp.translate(cxu.x * cxL, (1 - cxu.y) * cxM);
        cxp.scale(cxh, cxh);
        cxp.drawImage(cxs, -cxs.width / 2, -cxs.height / 2);
        cxp.restore();
      }
    }
  }
  if (cxK.showFlash && cxr) {
    let cxh = cxL * 1.6;
    cxp.drawImage(cxq, cxL * cxK.flashX - cxh / 2, cxM * cxK.flashY - cxh / 2, cxh, cxh);
  }
  if (cxN && cxK.crosshairType > 0 && !window.spectating) {
    let cxh = cxK.crosshairScale;
    let cxi = cxL / 2;
    let cxj = cxM / 2;
    let cxk = cxi - cxh / 2;
    let cxl = cxj - cxh / 2;
    let cxm = 4;
    let cxn = 21;
    let cxo = cxK.crosshairThick;
    let cxq = cxK.crosshairLen;
    let cxr = cxK.crosshairAlways;
    cxp.save();
    cxp.globalAlpha = cxK.crosshairType > 1 && cxr ? 1 : cxK.crosshairOpacity;
    if (cxK.crosshairType == 4) {
      cxp.translate(0, 0);
      cxp.beginPath();
      cxp.drawImage(cxK.crosshairImage, cxi - cxK.crosshairImage.width / 2, cxj - cxK.crosshairImage.height / 2);
    }
    if (cxK.crosshairType == 2 || cxK.crosshairType == 3) {
      if (cxK.crosshairStyle == 0) {
        cxv(cxp, cxi - cxo * 0.5, cxj - cxq, cxo, cxq * 2);
        cxv(cxp, cxi - cxq, cxj - cxo / 2, cxq * 2, cxo);
        cxv(cxp, cxi - cxo * 0.5, cxj - cxq, cxo, cxq * 2, 1, false, false);
      } else if (cxK.crosshairStyle == 1 || cxK.crosshairStyle == 2) {
        cxv(cxp, cxk + cxh / 2 - cxq * 2 / 2, cxl + cxh / 2 - cxq * 2 / 2, cxq * 2, cxq * 2, cxo / 2, true, true, cxK.crosshairStyle == 2);
      } else if (cxK.crosshairStyle == 3 || cxK.crosshairStyle == 4) {
        cxv(cxp, cxk + cxh / 2 - cxq * 2 / 2, cxl + cxh / 2 - cxq * 2 / 2, cxq * 2, cxq * 2, cxo / 2, false, true, cxK.crosshairStyle == 4);
      }
    }
    cxp.globalAlpha = cxK.crosshairOpacity;
    if (cxK.crosshairType == 1 || cxK.crosshairType == 3) {
      cxv(cxp, cxk, cxl + cxh / 2 - cxm / 2, cxn, cxm);
      cxv(cxp, cxk + cxh - cxn, cxl + cxh / 2 - cxm / 2, cxn, cxm);
      cxv(cxp, cxk + cxh / 2 - cxm / 2, cxl, cxm, cxn);
      cxv(cxp, cxk + cxh / 2 - cxm / 2, cxl + cxh - cxn, cxm, cxn);
    }
    cxp.restore();
  }
  cxp.restore();
};
module.exports = overlay;