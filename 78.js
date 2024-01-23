var cqs = ["Double Kill", "Triple Kill", "Quad Kill", "Multi Kill", "Mega Kill", "Ultra Kill", "Super Kill"];
var cqt = [];
module.exports.reward = function (cqq, cqr, cqw, cqx, cqy) {
  cqt.length = 0;
  if (cqr.weapon.melee) {
    cqt.push("Execution", 150);
  } else {
    if (cqr.weapon.kill) {
      cqt.push(cqr.weapon.kill[0], cqr.weapon.kill[1]);
    } else if (cqr.weapon.scope && cqr.aimVal == 1) {
      cqt.push("No Scope", 100);
    } else if (!cqr.weapon.scope || cqr.aimVal == 0 && cqr.aimTime > 180 || cqr.aimDir == 1) {
      cqt.push("", 50);
    } else {
      cqt.push("Quick Scope", 75);
    }
    if (cqy.kills <= 1) {
      cqt.push("First Blood", 25);
    }
    var cqz = cqq.getSpin(cqr);
    if (!cqr.weapon.nSkill && cqz >= 360) {
      cqt.push("360!", 150);
    }
    if (cqx.headShot) {
      cqt.push("Headshot", 50);
    }
    if (!cqr.weapon.scope && cqx.dst * cqr.weapon.range > 200) {
      cqt.push("Longshot", 25);
    }
  }
  if (cqw.flag) {
    cqt.push("Snatched", 50);
  }
  if (cqr.health <= cqr.maxHealth * 0.2 && cqr.active) {
    cqt.push("Close Call", 20);
  }
  if (cqr.deathStreak >= 3) {
    cqt.push("Comeback", 25);
  }
  if (cqw.killStreak >= 10) {
    cqt.push("Buzzkill", 25);
  } else if (cqw.killStreak >= 5) {
    cqt.push("Buzzkill", 10);
  }
  if (cqr.slideTimer > 0) {
    cqt.push("Driftkill", 50);
  }
  if (cqr.airTime >= 400) {
    cqt.push("Mid Air", 25);
  }
  for (var cqA = cqs.length - 1; cqA >= 0; --cqA) {
    if (cqr.streak > cqA) {
      cqt.push(cqs[cqA], (cqA + 1) * 50);
      break;
    }
  }
  if (cqt.length) {
    return cqt;
  } else {
    return null;
  }
};
module.exports.getScore = function (cqq) {
  var cqr = 0;
  if (cqq) {
    for (var cqs = 1; cqs < cqq.length; cqs += 2) {
      cqr += cqq[cqs];
    }
  }
  return cqr;
};