module.exports = function (cnx, cny) {
  var cnB;
  this.sounds = [];
  this.listener = {};
  this.rate = 1;
  this.setVolume = function (cnx) {
    Howler.volume(cnx);
  };
  this.getSound = function (cnx, cny) {
    var cnF = cnx + (cny || "") + (window.activeHacker ? "hckd" : "");
    if (!(cnB = this.sounds[cnF])) {
      cnB = new Howl({
        src: ".././sound/" + (window.activeHacker ? "fart_0" : cnx) + ".mp3"
      });
      this.sounds[cnF] = cnB;
    }
  };
  this.play = function (cnx, cny, cnI, cnJ) {
    this.getSound(cnx);
    if (this.rate && (!cnI || !cnB.isPlaying)) {
      cnB.isPlaying = true;
      var cnK = cnB.play();
      cnB.volume(cny || 1, cnK);
      cnB.loop(cnI, cnK);
      cnB.rate((cnJ || 1) * this.rate, cnK);
    }
  };
  this.stop = function (cnx) {
    this.getSound(cnx);
    if (cnB) {
      cnB.isPlaying = false;
      cnB.stop();
    }
  };
  this.play3Dv = function (cnM, cnN, cnO, cnP, cnQ, cnR, cnS, cnT) {
    var cnU = 1 - cnx.getDistance3D(cnN, cnO, cnP, cnT.x, cnT.y, cnT.z) / cnQ;
    if (cnU > 0.1) {
      this.getSound(cnM, "3dv");
      var cnV = cnB.play();
      cnR = (cnR || 1) * cnU * cny.otherSoundMlt;
      cnB.volume(cnR, cnV);
      cnB.rate(cnS || 1, cnV);
    }
  };
  this.play3D = function (cnx, cnX, cnY, cnZ, co0, co1, co2, co3) {
    this.getSound(cnx, "3d");
    var co4 = cnB.play();
    if ((co0 = (co0 || 1) * cny.otherSoundMlt) > 0.05) {
      cnB.volume(co0, co4);
      cnB.rate(co1 || 1, co4);
      cnB.pos(cnX, cnY, cnZ, co4);
      cnB.pannerAttr({
        refDistance: co2 || 25,
        rolloffFactor: co3 || 1
      }, co4);
    }
  };
};