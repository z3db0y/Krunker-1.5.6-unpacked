module.exports = function () {
  var cTO;
  this.divs = [];
  this.update = function (cTP) {
    for (var cTS = this.divs.length - 1; cTS >= 0; --cTS) {
      if ((cTO = this.divs[cTS]).delay > 0) {
        cTO.delay -= cTP;
        if (cTO.delay <= 0) {
          cTO.style.display = "inline-block";
        }
      } else {
        if (cTO.scale > cTO.minScale) {
          cTO.scale -= cTO.scaleSpeed * cTP;
          if (cTO.scale <= cTO.minScale) {
            cTO.scale = cTO.minScale;
          }
          cTO.style.fontSize = cTO.scale + "px";
        }
        if (cTO.scaleSpd) {
          cTO.startS += cTO.scaleSpd * cTP;
          cTO.style.width = cTO.startS + "px";
          cTO.style.height = cTO.startS + "px";
        }
        cTO.life -= cTP;
        if (cTO.life <= 0) {
          cTO.style.display = "none";
          var cTT = cTO.callback;
          this.divs.splice(cTS, 1);
          if (cTT) {
            cTT();
          }
        }
        if (cTO.fade && cTO.life <= cTO.fade) {
          cTO.style.opacity = cTO.life / cTO.fade;
        }
        if (cTO.srcA && cTO.srcA.cnt && cTO.maxLife - cTO.life <= cTO.srcA.tim) {
          var cTU = Math.floor(cTO.srcA.cnt * ((cTO.maxLife - cTO.life) / cTO.srcA.tim));
          cTO.src = "./textures/" + cTO.srcA.src + "_" + cTU + ".png";
        }
      }
    }
  };
  this.animateText = function (cTO, cTP, cTX, cTY, cTZ, cU0, cU1, cU2) {
    if (this.divs.indexOf(cTO) < 0) {
      this.divs.push(cTO);
    }
    cTO.delay = cU1;
    if (!cU1) {
      cTO.style.display = "inline-block";
    }
    cTO.style.fontSize = cTX + "px";
    cTO.scale = cTX;
    cTO.minScale = cTY ? cTX * 0.4 : cTX;
    cTO.innerHTML = cTP;
    cTO.scaleSpeed = cTY;
    cTO.life = cTZ;
    cTO.fade = cU0;
    cTO.style.opacity = 1;
    cTO.callback = cU2;
  };
  this.animateDiv = function (cTO, cTP, cU5, cU6, cU7, cU8) {
    if (this.divs.indexOf(cTO) < 0) {
      this.divs.push(cTO);
    }
    cTO.style.display = "block";
    cTO.life = cTP;
    cTO.maxLife = cTP;
    cTO.srcA = cU8;
    if (cU8) {
      cTO.src = "./textures/" + cU8.src + "_0.png";
    }
    cTO.style.opacity = 1;
    cTO.fade = cU5;
    if (cU6) {
      cTO.style.width = cU6 + "px";
      cTO.style.height = cU6 + "px";
      cTO.startS = cU6;
      cTO.scaleSpd = cU7;
    }
  };
  this.reset = function () {
    for (var cTO = 0; cTO < this.divs.length; ++cTO) {
      this.divs[cTO].style.display = "none";
    }
    this.divs.length = 0;
  };
};