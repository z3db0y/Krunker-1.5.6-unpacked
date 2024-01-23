var crK = "/";
var crN = require("./39.js");
var crO = require("./8.js");
var crP = require("./7.js");
var crQ = require("./68.js");
var crR = require("./35.js");
var crS = 0;
module.exports.validConfig = function (crJ) {
  if (crJ.modes) {
    for (var crK = 0; crK < crJ.modes.length; ++crK) {
      if (!crN.modes[crJ.modes[crK]]) {
        return "Invalid Mode in Config.";
      }
    }
  }
  if (crJ.classes) {
    for (crK = 0; crK < crJ.classes.length; ++crK) {
      if (!crQ[crJ.classes[crK]]) {
        return "Invalid Class in Config.";
      }
    }
  }
  if (crJ.settings) {
    var crL = 0;
    for (var crR in crJ.settings) {
      if (crJ.settings.hasOwnProperty(crR)) {
        var crS = crJ.settings[crR];
        var crY = -1;
        for (crK = 0; crK < crP.serverConfig.length; ++crK) {
          if (crP.serverConfig[crK].varN == crR) {
            crY = crK;
            break;
          }
        }
        if (crY < 0) {
          return "Invalid Setting in Config.";
        }
        var crZ = crP.serverConfig[crY];
        if (!crZ.input && !crZ.bool) {
          if (!crO.isNumber(crS)) {
            return "Invalid Config Value.";
          }
          if (crS > (crZ.maxF || crZ.max) || crS < crZ.min) {
            return "Config Value out of Range.";
          }
        }
        if (++crL > crP.serverConfig.length + 1) {
          return "Settings Mismatch.";
        }
      }
    }
  }
  return null;
};
module.exports.validMap = function (crJ, crK) {
  if (!crO.isString(crJ.name) || !crJ.name.replace(/\s/g, "").length) {
    return "Missing map name.";
  }
  if (crJ.name.indexOf("<") !== -1 || crJ.name.indexOf(">") !== -1) {
    return "Illegal characters in map name.";
  }
  if (crJ.name.length > 16) {
    return "Map name too long.";
  }
  if (!crO.isArray(crJ.spawns) || !crJ.spawns.length) {
    return "Missing spawn points.";
  }
  if (crJ.spawns.length > crP.spawnLimit) {
    return "Too many spawn points.";
  }
  for (var crL, crN = 0; crN < crJ.spawns.length; ++crN) {
    crL = crJ.spawns[crN];
    if (!crO.isArray(crL) || !crL.length || crL.length < 3 || crL.length > 5) {
      return "Spawn point error.";
    }
    for (var crQ = 0; crQ < crL.length; ++crQ) {
      if (crQ < 3 && !crO.isNumber(crL[crQ])) {
        return "Spawn point error.";
      }
      if (crQ == 3 && crL[crQ] == null && crL[crQ] == 1 && crL[crQ] == 2) {
        return "Spawn team error.";
      }
    }
  }
  if (!crO.isArray(crJ.objects) || !crJ.objects.length) {
    return "Missing objects.";
  }
  if (crJ.objects.length > (crK ? crP.objectLimitF : crP.objectLimit)) {
    return "Map exceeds object limit.";
  }
  var crR;
  for (crN = 0; crN < crJ.objects.length; ++crN) {
    crR = crJ.objects[crN];
    if (!crO.isArray(crR.s) || crR.s.length != 3 || !crO.arrayInts(crR.s)) {
      return "Object scale error.";
    }
    if (!crO.isArray(crR.p) || crR.p.length != 3 || !crO.arrayInts(crR.p)) {
      return "Object position error.";
    }
    if (crO.isArray(crR.r)) {
      if (crR.r.length != 3 || !crO.arrayInts(crR.r)) {
        return "Object rotation value error.";
      }
    } else if (crR.r != null) {
      return "Object rotation error.";
    }
    if (crR.d != null && !crO.isNumber(crR.d)) {
      return "Object direction error.";
    }
    crR.col = !!crR.col;
  }
  return null;
};
module.exports.obj = function (cs6, cs7, cs8, cs9, csa, csb, csc, csd, cse) {
  window.game = this;
  this.isCustom = cs6;
  this.isPrimary = cs7 == 0;
  this.sid = crS++;
  this.gameInstance = null;
  this.connectedClients = 0;
  this.password = undefined;
  this.pendingGameId = null;
  this.gameClosed = false;
  this.map = new crN.manager(cs9, csb, crO, crP);
  this.store = require("./69.js");
  this.attach = require("./75.js");
  this.weapons = require("./22.js");
  this.classes = crQ;
  this.streaks = require("./76.js");
  this.sprays = require("./77.js");
  this.projectiles = new (require("./89.js"))(this, csc);
  this.controls = null;
  this.players = new (require("./70.js").manager)(this, cs9, csa, csb, crO, crP, csc);
  this.endData = {
    ed: [],
    vo: null
  };
  this.endTimer = 0;
  this.banList = [];
  this.destObjs = [];
  this.hideWeapon = [false, false, false];
  var csf;
  var csg;
  var csh;
  var csi = this;
  this.applyConfig = function (crJ, crK, crL, crN) {
    crJ = crJ || {};
    this.config = {};
    for (var crQ, crR = 0; crR < crP.serverConfig.length; ++crR) {
      if ((crQ = crP.serverConfig[crR]).bool) {
        this.config[crQ.varN] = crJ[crQ.varN] == null ? crQ.def : !!crJ[crQ.varN];
      } else if (crQ.input) {
        var crS = crJ[crQ.varN];
        if (!crO.isString(crS)) {
          crS = crQ.def;
        }
        this.config[crQ.varN] = crO.sanitizeStr(crS);
        if (crS.length > 16) {
          crS = crS.substring(0, 16);
        }
      } else {
        crS = crJ[crQ.varN];
        if (!crO.isNumber(crS)) {
          crS = crQ.def;
        }
        this.config[crQ.varN] = crO.limitMM(crS, crQ.min, crK && crQ.maxF || crQ.max);
      }
    }
    this.config.maps = crJ.maps;
    if (!crO.isArray(this.config.maps) || !this.config.maps.length || this.config.maps.length > this.map.maps.length) {
      this.config.maps = [];
      for (crR = 0; crR < this.map.maps.length; crR++) {
        this.config.maps.push(crR);
      }
    } else {
      for (crR = 0; crR < this.config.maps.length; crR++) {
        if (!this.map.maps[this.config.maps[crR]]) {
          this.config.maps = [0];
          break;
        }
      }
    }
    this.config.modes = crJ.modes;
    if (!crO.isArray(this.config.modes) || !this.config.modes.length || this.config.modes.length > this.map.modes.length) {
      this.config.modes = null;
    } else {
      for (crR = 0; crR < this.config.modes.length; crR++) {
        if (!this.map.modes[this.config.modes[crR]]) {
          this.config.modes = null;
          break;
        }
      }
    }
    var cs6 = false;
    this.config.classes = crJ.classes;
    if (!crO.isArray(this.config.classes) || !this.config.classes.length || this.config.classes.length > this.classes.length) {
      cs6 = true;
    } else {
      for (crR = 0; crR < this.config.classes.length; crR++) {
        if (!this.classes[this.config.classes[crR]]) {
          cs6 = true;
          break;
        }
      }
    }
    if (cs6) {
      this.config.classes = [];
      for (crR = 0; crR < this.classes.length; crR++) {
        this.config.classes.push(crR);
      }
    }
    this.config.isFromQueue = crN;
  };
  this.applyConfig();
  this.getInfo = function () {
    return this.mode.alias + "_" + this.map.maps[this.mapIndex].name;
  };
  this.customMap = function (crK, crL, crN, crO, crQ) {
    if (crK) {
      try {
        var crR = JSON.parse(crK);
        if (csc) {
          this.customMapData = {
            data: crK,
            id: crL,
            featured: crO,
            creator: crN
          };
        }
        if (!crQ) {
          var crS = module.exports.validMap(crR, crO);
          if (crS) {
            return crS;
          }
        }
        for (var cs6 = 0; cs6 < crR.objects.length; ++cs6) {
          crR.objects[cs6].i = crP.prefabIDS[crR.objects[cs6].i || crR.objects[cs6].id || 0];
          if (!crR.objects[cs6].i) {
            return "Object ID error.";
          }
          crR.objects[cs6].t = crP.textureIDS[crR.objects[cs6].t || 0];
          if (!crR.objects[cs6].t) {
            return "Object Texture error.";
          }
        }
        crR.creator = crN;
        this.map.setMaps([crR]);
        this.config.maps = [0];
      } catch (csz) {
        return "Map error occured.";
      }
    }
  };
  this.playSound = function (crJ, crK, crL, crN, crO) {
    if (crK) {
      if (csa) {
        csa.play(crJ, crK, false, crO);
      } else {
        for (var crP = 0; crP < this.players.list.length; ++crP) {
          if (((csf = this.players.list[crP]).active || csf.spectating) && (crL != csf || crN)) {
            csc.send(csf.id, "s", crJ, crL.sid, crK);
          }
        }
      }
    }
  };
  this.playerSound = function (crJ, crK, crL, crN, crP, crQ) {
    csf = crN || this.players.findBySid(crK);
    var crR = Howler.pos();
    if (csf && (!crQ || crQ >= crO.getDistance3D(csf.x, csf.y, csf.z, crR[0], crR[1], crR[2]))) {
      csa.play3D(crJ, csf.x, csf.y, csf.z, crL || 1, crP);
    }
  };
  this.moveObj = function (crJ, crK, crL, crN) {
    crJ.x = crK;
    crJ.y = crL;
    crJ.z = crN;
    if (crJ.meshRef) {
      crJ.meshRef.position.set(crK, crL, crN);
    }
  };
  this.explosion = function (crJ, crK, crL, crN, crP, crQ) {
    for (var crR = 0; crR < this.players.list.length; ++crR) {
      if (((csf = this.players.list[crR]).active || csf.spectating) && (csc.send(csf.id, "ex", Math.round(crJ), Math.round(crK), Math.round(crL), Math.round(crN)), csf.active)) {
        var crS = crO.getDistance3D(crJ, crK, crL, csf.x, csf.y, csf.z);
        var cs6 = 1 - crS / crN;
        if (cs6 > 0 && this.players.changeHealth(csf, crQ, crP * cs6, crQ == csf)) {
          this.players.kill(csf, crQ, {
            dst: crS
          });
        }
      }
    }
  };
  var ct0 = [];
  this.getSpawnPoint = function (crJ, crK, crL) {
    if (crL) {
      return this.map.spawns[0];
    }
    ct0.length = 0;
    for (var crN, crQ = 0; crQ < this.map.spawns.length; ++crQ) {
      this.map.spawns[crQ].dst = 0;
      for (var crR = 0; crR < this.players.list.length; ++crR) {
        if ((csf = this.players.list[crR]) && csf.active && csf != crK && (!crJ || csf.team != crJ) && !this.canSee(csf, this.map.spawns[crQ].x, this.map.spawns[crQ].y + crP.playerHeight, this.map.spawns[crQ].z)) {
          this.map.spawns[crQ].dst++;
          0;
        }
      }
    }
    this.map.spawns.sort(crO.orderByDst);
    crN = this.map.spawns[0].dst;
    for (crQ = 0; crQ < this.map.spawns.length; ++crQ) {
      if (this.map.spawns[crQ].dst == crN) {
        this.map.spawns[crQ].dst = 0;
        for (crR = 0; crR < this.players.list.length; ++crR) {
          if ((csf = this.players.list[crR]).active && csf != crK && (!crJ || csf.team != crJ)) {
            this.map.spawns[crQ].dst += crO.getDistance3D(this.map.spawns[crQ].x, this.map.spawns[crQ].y, this.map.spawns[crQ].z, csf.x, csf.y, csf.z);
          }
        }
        if (this.mode && this.mode.flags) {
          for (var crS = 0; crS < this.map.manager.flags.length; ++crS) {
            csf = this.map.manager.flags[crS];
            this.map.spawns[crQ].dst += crO.getDistance3D(this.map.spawns[crQ].x, this.map.spawns[crQ].y, this.map.spawns[crQ].z, csf.x, csf.y, csf.z) * (csf.team == crJ ? -1 : 1);
          }
        }
        if (crJ && this.map.spawns[crQ].team == crJ || !this.map.spawns[crQ].team) {
          ct0.push(this.map.spawns[crQ]);
        }
      }
    }
    ct0.sort(crO.orderByDst);
    ct0.reverse();
    return ct0[0] || this.map.spawns[0];
  };
  this.canSee = function (crJ, crK, crL, crN, crQ) {
    if (!crJ) {
      return false;
    }
    crQ = crQ || 0;
    for (var crR, crS = crO.getDistance3D(crJ.x, crJ.y, crJ.z, crK, crL, crN), cs6 = crO.getDirection(crJ.z, crJ.x, crN, crK), cs7 = crO.getDirection(crO.getDistance(crJ.x, crJ.z, crK, crN), crL, 0, crJ.y), cs8 = 1 / (crS * Math.sin(cs6 - Math.PI) * Math.cos(cs7)), cs9 = 1 / (crS * Math.cos(cs6 - Math.PI) * Math.cos(cs7)), csa = 1 / (crS * Math.sin(cs7)), csb = crJ.y + crJ.height - crP.cameraHeight, csc = 0; csc < this.map.manager.objects.length; ++csc) {
      if (!(crR = this.map.manager.objects[csc]).noShoot && crR.active && !crR.transparent) {
        var csd = crO.lineInRect(crJ.x, crJ.z, csb, cs8, cs9, csa, crR.x - Math.max(0, crR.width - crQ), crR.z - Math.max(0, crR.length - crQ), crR.y - Math.max(0, crR.height - crQ), crR.x + Math.max(0, crR.width - crQ), crR.z + Math.max(0, crR.length - crQ), crR.y + Math.max(0, crR.height - crQ));
        if (csd && csd < 1) {
          return csd;
        }
      }
    }
    var cse = this.map.terrain;
    if (cse) {
      var csf = cse.raycast(crJ.x, -crJ.z, csb, 1 / cs8, -1 / cs9, 1 / csa);
      if (csf) {
        return crO.getDistance3D(crJ.x, crJ.y, crJ.z, csf.x, csf.z, -csf.y);
      }
    }
    return null;
  };
  this.updateAccounts = function () {
    for (var crJ = [], crK = 0; crK < this.players.list.length; ++crK) {
      if ((csf = this.players.list[crK]).account && !csf.account.hack) {
        csf.account.timePlayed += csf.playTime || 0;
        if (this.host == null) {
          csf.account.games++;
          csf.account.kills += csf.kills;
          csf.account.deaths += csf.deaths;
          csf.account.score += csf.score;
          if (csf.didWin) {
            csf.account.wins++;
          }
        }
        csc.send(csf.id, "ua", csf.account.getData());
        crJ.push(csf);
      }
    }
    if (crJ.length) {
      this.saveRewards(crJ);
    }
  };
  this.saveRewards = function (crJ) {
    for (var crK = "", crL = 0; crL < crJ.length; ++crL) {
      if (crJ[crL] && crJ[crL].account && crJ[crL].reward) {
        crK += (crK.length ? "," : "") + crJ[crL].account.id + "," + crJ[crL].reward;
      }
    }
    if (crK.length) {
      cs8.call(20, [crK], function (crK, crL) {
        if (crL && crL[0] && crL[0][0] && (crL = crL[0][0].result)) {
          try {
            crL = crL.split(",");
            for (var crN, crO = 0; crO < crL.length; ++crO) {
              if ((crN = parseInt(crL[crO])) && crJ[crO]) {
                crJ[crO].account.funds = crN;
                csc.send(crJ[crO].id, "uf", crN);
              }
            }
          } catch (cty) {}
        }
      });
    }
  };
  this.incStat = function (crJ, crK) {
    if (crK && crK.account && this.host == null) {
      if (!crK.account.stats[crJ]) {
        crK.account.stats[crJ] = 0;
      }
      crK.account.stats[crJ]++;
    }
  };
  this.savePlayerData = function (crJ) {
    if (cs8 && crJ.account) {
      var crK = crJ.account;
      if (crK) {
        cs8.call(2, [crK.id, crK.kills, crK.wins, crK.games, crK.deaths, crK.score, crK.clan, crK.timePlayed, JSON.stringify(crK.stats)]);
      }
    }
  };
  this.lockPlayer = function (crJ, crK) {
    crJ.locked = crK;
    csc.send(csf.id, "lock", crK);
  };
  this.updateTeam = function (crJ, crK) {
    crJ.team = crK;
    for (var crL = 0; crL < crJ.sentTo.length; ++crL) {
      csc.send(crJ.sentTo[crL], "tm", crJ.sid, crK);
    }
    this.players.syncLeaders();
  };
  this.startNuke = function (crJ) {
    this.nukeTimer = 10000;
    this.nukePlayer = crJ;
    csc.broadcast("game" + this.sid, "n", 0);
  };
  var ctJ = [];
  this.infectRandom = function () {
    ctJ.length = 0;
    for (var crJ = 0; crJ < this.players.list.length; ++crJ) {
      if (this.players.list[crJ].active) {
        ctJ.push(crJ);
      }
    }
    var crK = 1;
    if (ctJ.length >= 14) {
      crK = 3;
    } else if (ctJ.length >= 8) {
      crK = 2;
    }
    var crL;
    for (crJ = 0; crJ < crK; ++crJ) {
      crL = crO.randInt(0, ctJ.length - 1);
      if (csf = this.players.list[ctJ[crL]]) {
        this.updateTeam(csf, "inf");
        this.players.kill(csf, null, null, true);
        csc.broadcast("game" + this.sid, "ac", csf.sid, null, "got infected");
      }
      ctJ.splice(crL, 1);
    }
  };
  this.pickSimon = function () {
    ctJ.length = 0;
    for (var crJ = null, crK = 0; crK < this.players.list.length; ++crK) {
      if (this.players.list[crK].active) {
        if (this.host == this.players.list[crK].id) {
          crJ = this.players.list[crK];
          break;
        }
        ctJ.push(crK);
      }
    }
    crJ ||= this.players.list[ctJ[crO.randInt(0, ctJ.length - 1)]];
    if (crJ) {
      this.updateTeam(crJ, "simon");
      crJ.maxHealth = 5000;
      crJ.health = crJ.maxHealth;
      csc.send(crJ.id, "h", crJ.health);
    }
  };
  this.pickBoss = function () {
    ctJ.length = 0;
    for (var crJ = 0; crJ < this.players.list.length; ++crJ) {
      if (this.players.list[crJ].active) {
        ctJ.push(crJ);
      }
    }
    if (csf = this.players.list[ctJ[crO.randInt(0, ctJ.length - 1)]]) {
      this.updateTeam(csf, "boss");
      csf.maxHealth = 5000;
      csf.health = csf.maxHealth;
      csc.send(csf.id, "h", csf.health);
    }
  };
  this.pickSeeker = function () {
    ctJ.length = 0;
    for (var crJ = 0; crJ < this.players.list.length; ++crJ) {
      if (this.players.list[crJ].active) {
        ctJ.push(crJ);
      }
    }
    if (csf = this.players.list[ctJ[crO.randInt(0, ctJ.length - 1)]]) {
      this.updateTeam(csf, "seek");
      this.lockPlayer(csf, true);
    }
  };
  this.releaseSeeker = function () {
    for (var crJ = 0; crJ < this.players.list.length; ++crJ) {
      if ((csf = this.players.list[crJ]).team == "seek") {
        this.lockPlayer(csf, false);
      }
    }
  };
  this.destroyObj = function (crJ) {
    for (var crK = 0; crK < csi.map.manager.objects.length; ++crK) {
      if ((csf = csi.map.manager.objects[crK]).uid == crJ) {
        csf.active = false;
        if (csf.meshRef) {
          csf.meshRef.visible = false;
        }
        if (cs9) {
          cs9.updateShadowMap();
        }
        break;
      }
    }
  };
  this.capFlag = function (crJ, crK) {
    if (csc) {
      crJ.caps++;
      crJ.flag = null;
      if (this.teams[crJ.team]) {
        this.teams[crJ.team]++;
      } else {
        this.teams[crJ.team] = 1;
      }
      csc.broadcast("game" + this.sid, "ts", crJ.team, this.teams[crJ.team]);
      csc.broadcast("game" + csi.sid, "ac", crJ.sid, null, "captured the Flag");
      csc.send(crJ.id, "am", ["Capture", 150]);
      this.players.score(crJ, 150);
      this.resetFlag(crK);
    }
  };
  this.updateFlagCol = function (crJ, crK) {
    if (crK && crK.team && crJ.teamCol != crK.team && crJ.meshRef) {
      crJ.teamCol = crK.team;
      crJ.meshRef.material = cs9.getMat("crystal_0", csi.map.manager.getFlagDat(crJ.team, crK));
      crJ.meshRef.zoneMesh.material = cs9.getMat("zone_r", csi.map.manager.getZoneDat(crJ.team, crK));
    }
  };
  this.updateFlags = function (crJ, crK) {
    if (csi.mode && csi.mode.flags) {
      for (var crL = false, crN = false, crO = 0; crO < csi.map.manager.flags.length; ++crO) {
        if ((csf = csi.map.manager.flags[crO]).meshRef) {
          if (crJ) {
            csi.updateFlagCol(csf, crJ);
          }
          if (csf.carrier) {
            if (crJ && csf.team == crJ.team) {
              crN = true;
            }
            if (crJ && csf.carrier == crJ.sid) {
              crL = true;
            }
            if (csg = csi.players.findBySid(csf.carrier)) {
              cs9.moveMesh(csf.meshRef, csg.x, csg.y + crP.flagHOff, csg.z);
            }
          } else {
            cs9.moveMesh(csf.meshRef, csf.x, csf.y, csf.z);
          }
          csf.bobAnimY = (csf.bobAnimY || 0) + crK * 0.003;
          csf.meshRef.position.y += Math.cos(csf.bobAnimY);
          csf.meshRef.rotation.y += crK * 0.002;
        }
      }
      if (crN && crL) {
        if (gameMessage.innerHTML != crP.flagMsgRC) {
          gameMessage.innerHTML = crP.flagMsgRC;
        }
      } else if (crN) {
        if (gameMessage.innerHTML != crP.flagMsgE) {
          gameMessage.innerHTML = crP.flagMsgE;
        }
      } else if (crL) {
        if (gameMessage.innerHTML != crP.flagMsg) {
          gameMessage.innerHTML = crP.flagMsg;
        }
      } else if (gameMessage.innerHTML != "") {
        gameMessage.innerHTML = "";
      }
      specGameMessage.innerHTML = gameMessage.innerHTML;
    }
  };
  this.updateFlag = function (crJ, crK, crL, crN, crO) {
    for (var crP = 0; crP < csi.map.manager.flags.length; ++crP) {
      if ((csf = csi.map.manager.flags[crP]).uid == crJ) {
        csf.carrier = crO;
        csi.moveObj(csf, crK, crL, crN);
        break;
      }
    }
  };
  this.dropFlag = function (crJ) {
    if (csc && crJ && crJ.carrier) {
      var crK = this.players.findBySid(crJ.carrier);
      this.updateCarrier(crJ);
      if (crK) {
        csc.broadcast("game" + csi.sid, "ac", crK.sid, null, "dropped the Flag");
        crK.flag = null;
        this.updateObjPos(crJ, crK.x, crK.y + crP.flagOff, crK.z);
      } else {
        this.updateObjPos(crJ, crJ.orgX, crJ.orgY, crJ.orgZ);
      }
    }
  };
  this.pickupFlag = function (crJ, crK) {
    if (csc && csi.mode && csi.mode.flags && !crK.carrier) {
      if (crJ.team == crK.team) {
        if (crK.x != crK.orgX || crK.y != crK.orgY || crK.z != crK.orgZ) {
          csc.broadcast("game" + csi.sid, "ac", crJ.sid, null, "returned the Flag");
          csc.send(crJ.id, "am", ["Return", 50]);
          this.players.score(crJ, 50);
          this.resetFlag(crK);
        }
      } else if (!crJ.flag) {
        csc.send(crJ.id, "am", ["Pickup", 20]);
        this.players.score(crJ, 20);
        this.updateCarrier(crK, crJ);
        csc.broadcast("game" + csi.sid, "ac", crJ.sid, null, "got the Flag");
      }
    }
  };
  this.syncFlag = function (crJ) {
    csc.broadcast("game" + csi.sid, "ufl", crJ.uid, crJ.x.round(1), crJ.y.round(1), crJ.z.round(1), crJ.carrier || 0);
  };
  this.updateCarrier = function (crJ, crK) {
    crJ.carrier = crK ? crK.sid : 0;
    if (crK) {
      crK.flag = crJ;
    }
    this.syncFlag(crJ);
  };
  this.resetFlags = function () {
    for (var crJ = 0; crJ < csi.map.manager.flags.length; ++crJ) {
      (csf = csi.map.manager.flags[crJ]).carrier = 0;
      csf.x = csf.orgX;
      csf.y = csf.orgY;
      csf.z = csf.orgZ;
      if (csf.meshRef) {
        var crK = !!csi.mode && !!csi.mode.flags;
        csf.meshRef.visible = crK;
        csf.meshRef.zoneMesh.visible = crK;
      }
    }
  };
  this.resetFlag = function (crJ) {
    this.updateObjPos(crJ, crJ.orgX, crJ.orgY, crJ.orgZ);
    this.updateCarrier(crJ);
  };
  this.updatePickup = function (crJ, crK, crL, crN) {
    for (var crO = 0; crO < this.map.manager.pickups.length; ++crO) {
      if ((csf = this.map.manager.pickups[crO]).uid == crJ) {
        if (cs9) {
          csg = csf.meshRef;
          var crP = crN || [csg.position.x, csg.position.y, csg.position.z];
          cs9.scene.remove(csf.meshRef);
          csf.meshRef = cs9.loadMesh({
            src: "weapons/" + this.weapons[crK || 0].src,
            texSrc: "weapons/" + this.weapons[crK || 0].src,
            noGroup: true,
            noShadow: true,
            transparent: true,
            noFog: true
          }, ...crP, 0, this.weapons[crK || 0].scale, cs9.scene);
          csf.meshRef.rotation.copy(csg.rotation.clone());
          csf.meshRef.visible = crK != null;
        }
        csf.x = crN ? crN[0] : csf.orgX;
        csf.y = crN ? crN[1] : csf.orgY;
        csf.z = crN ? crN[2] : csf.orgZ;
        if (crL) {
          csf.orgPickup = crL;
        }
        csf.pickup = crK;
        break;
      }
    }
  };
  this.resetPickups = function () {
    for (var crJ = 0; crJ < csi.map.manager.pickups.length; ++crJ) {
      (csf = csi.map.manager.pickups[crJ]).pickup = csf.orgPickup;
      csf.x = csf.orgX;
      csf.y = csf.orgY;
      csf.z = csf.orgZ;
      if (cs9) {
        csg = csf.meshRef;
        cs9.scene.remove(csf.meshRef);
        csf.meshRef = cs9.loadMesh({
          src: "weapons/" + csi.weapons[csf.pickup].src,
          texSrc: "weapons/" + csi.weapons[csf.pickup].src,
          noGroup: true,
          noShadow: true,
          transparent: true,
          noFog: true
        }, csf.x, csf.y - crP.pickupZoneH / 2 + crP.pickupOff, csf.z, 0, csi.weapons[csf.pickup].scale, cs9.scene);
        csf.meshRef.rotation.copy(csg.rotation.clone());
        csf.meshRef.visible = true;
      }
    }
  };
  this.increaseWeapon = function (crJ) {
    (csf = [...crJ.loadout]).length = 1;
    if (crJ.killList.indexOf(csf[0]) == -1) {
      crJ.killList.push(csf[0]);
      var crK = this.mode.weaponOrder.indexOf(csf[0]);
      if (++crK <= this.mode.weaponOrder.length - 1) {
        csf[0] = this.mode.weaponOrder[crK];
      }
      crJ.updateLoadout(this, 0, true, ...csf);
      csc.broadcast("game" + this.sid, "inat", crJ.sid, csf, 0, undefined, undefined, false);
      this.players.score(crJ, 1, true);
    }
  };
  this.decreaseWeapon = function (crJ) {
    crJ.killList.pop();
    (csf = [...crJ.loadout]).length = 1;
    var crK = this.mode.weaponOrder.indexOf(csf[0]);
    if (--crK >= 0) {
      csf[0] = this.mode.weaponOrder[crK];
    }
    crJ.updateLoadout(this, 0, true, ...csf);
    csc.broadcast("game" + this.sid, "inat", crJ.sid, csf, 0, undefined, undefined, false);
    if (crK >= 0) {
      this.players.score(crJ, -1);
      crJ.setbacks++;
    }
  };
  this.updateGate = function (crJ, crK) {
    for (var crL = 0; crL < csi.map.manager.gates.length; ++crL) {
      if ((csf = csi.map.manager.gates[crL]).uid == crJ) {
        csf.active = crK;
        if (csf.meshRef) {
          csf.meshRef.visible = crK;
        }
        if (cs9) {
          cs9.updateShadowMap();
        }
        break;
      }
    }
  };
  this.resetGates = function () {
    for (var crJ = 0; crJ < csi.map.manager.gates.length; ++crJ) {
      (csf = csi.map.manager.gates[crJ]).active = true;
      if (csf.meshRef) {
        csf.meshRef.visible = true;
      }
    }
  };
  this.updateObjPos = function (crJ, crK, crL, crN) {
    crJ.x = crK;
    crJ.y = crL;
    crJ.z = crN;
    this.syncFlag(crJ);
  };
  this.updateZone = function (crJ) {
    csi.map.zone.update(crJ);
  };
  this.resetZone = function () {
    if (csi.map.zone) {
      csi.map.zone.reset();
    }
  };
  this.setObjective = function (crJ) {
    try {
      csi.activeObjective = crJ;
      for (var crK = 0; crK < csi.map.manager.objectives.length; ++crK) {
        csi.map.manager.objectives[crK].mesh.visible = crJ == crK;
      }
    } catch (cuF) {}
  };
  this.nextObjective = function (crJ) {
    this.activeObjective++;
    if (this.activeObjective >= this.map.manager.objectives.length) {
      this.activeObjective = 0;
    }
    csc.broadcast("game" + this.sid, "obj", this.activeObjective);
    if (this.map.manager.objectives.length > 1) {
      this.waitTimers = [{
        time: 60000 - (crJ || 0),
        contTime: true,
        canDMG: true,
        msg: "next objective ",
        trigger: function (crJ, crK) {
          crJ.nextObjective(crK);
        }
      }];
    }
  };
  this.setCheckPoint = function (crJ, crK) {
    csf = {
      x: crK.x,
      y: crK.y,
      z: crK.z,
      dir: crK.dir
    };
    csg = Object.values(csf).join(",");
    if (!crJ.checkPoint || Object.entries(crJ.checkPoint).toString() !== Object.entries(csf).toString()) {
      if (crK.singleUse) {
        if (crJ.checkPointList.includes(csg)) {
          return;
        }
        crJ.checkPointList.push(csg);
      }
      crJ.checkPoint = csf;
      if (csc) {
        csc.send(crJ.id, "chp");
      }
    }
  };
  this.checkTeleport = function (crJ, crK) {
    if (crK.node != 1 && crK.telCooldown <= 0) {
      for (var crL = [], crN = 0; crN < this.map.manager.teleporters.length; ++crN) {
        if ((csf = this.map.manager.teleporters[crN]).channel == crK.channel && csf.node > 0 && crK.uid != csf.uid) {
          crL.push(csf);
        }
      }
      if (crL.length) {
        var crO = crL[0];
        if (crO) {
          if (crO.node == 2) {
            crO.telCooldown = 2000;
          }
          crJ.x = crJ.oldX = crO.x;
          crJ.y = crJ.oldY = crO.y - crO.height;
          crJ.z = crJ.oldZ = crO.z;
          if (crO.telStopMo) {
            crJ.lastX = crO.x;
            crJ.lastY = crO.y - crO.height;
            crJ.lastZ = crO.z;
            crJ.stepVal = 0;
            crJ.xVel = 0;
            crJ.yVel = 0;
            crJ.zVel = 0;
          }
        }
      }
    }
  };
  this.updateTeleporters = function (crJ) {
    if (csi.map.manager.teleporters.length) {
      for (var crK = 0; crK < csi.map.manager.teleporters.length; ++crK) {
        (csf = csi.map.manager.teleporters[crK]).telCooldown -= crJ;
        if (csf.telCooldown <= 0) {
          csf.telCooldown = 0;
        }
      }
    }
  };
  this.updateUI = function () {
    killCount.style.display = this.mode.friendly ? "none" : "inline-block";
  };
  this.instanceConfig = function () {};
  this.voteMode = function (crJ, crK) {
    if (this.endData.vo) {
      this.endData.vo[crJ] = this.endData.vo[crJ] == crK ? null : crK;
      csc.broadcast("game" + this.sid, "mv", this.endData.vo);
    }
  };
  var cuU = [];
  this.init = function (crJ, crQ, crS) {
    this.players.clear();
    this.teams = {};
    cuU.length = 0;
    for (var cs6 = 0; cs6 < this.map.modes.length; ++cs6) {
      0;
      cuU[cs6] = 0;
      if (this.endData.vo) {
        for (var cs7 in this.endData.vo) {
          if (this.endData.vo.hasOwnProperty(cs7) && cs6 == this.endData.vo[cs7]) {
            cuU[cs6]++;
          }
        }
      }
    }
    var cs8 = 0;
    var cs9 = null;
    for (cs6 = 0; cs6 < cuU.length; ++cs6) {
      if (cuU[cs6] > cs8) {
        cs8 = cuU[cs6];
        cs9 = cs6;
      }
    }
    this.modeIndex = cs9 == null ? crQ == null ? this.config.modes ? this.config.modes[crO.randInt(0, this.config.modes.length - 1)] : crO.randInt(0, 3) : crQ : cs9;
    this.mapIndex = crJ == null ? this.config.maps[crO.randInt(0, this.config.maps.length - 1)] : crJ;
    this.destObjs.length = 0;
    this.mode = crN.modes[this.modeIndex];
    this.map.generate(this.mapIndex, this.mode, crS);
    this.resetFlags();
    this.resetPickups();
    this.resetGates();
    this.resetZone();
    if (!this.config.lives && this.mode.lives) {
      this.config.lives = this.mode.lives;
    }
    this.minPlayers = this.config.minPlayers || this.mode.minPlayers;
    if (!this.minPlayers && this.config.lives) {
      this.minPlayers = 2;
    }
    this.zoneTimer = 0;
    this.nukeTimer = 0;
    this.objectiveTimer = 0;
    this.activeObjective = null;
    this.gameTimer = this.mode.gameTime == null ? this.config.gameTime * 60000 : this.mode.gameTime;
    this.lastTimer = 0;
    this.lastTimerW = 0;
    this.waitTimers = null;
    if (this.mode.waitTimers) {
      this.waitTimers = [];
      for (cs6 = 0; cs6 < this.mode.waitTimers.length; ++cs6) {
        this.waitTimers.push({
          time: this.mode.waitTimers[cs6].time,
          trigger: this.mode.waitTimers[cs6].trigger,
          msg: this.mode.waitTimers[cs6].msg
        });
      }
    } else if (this.config.lives) {
      this.waitTimers = [{
        time: 20000,
        msg: "match starts in ",
        trigger: function (crJ) {
          for (var crK = 0; crK < crJ.players.list.length; ++crK) {
            if (crJ.players.list[crK].spectating) {
              crJ.players.list[crK].lives = 0;
            }
          }
        }
      }];
    }
    this.condition = this.mode.condition;
    if (this.config.lives) {
      if (!this.condition) {
        if (this.mode.teams) {
          this.condition = function (crJ) {
            for (var crK = 0, crL = 0, crN = 0; crN < crJ.players.list.length; ++crN) {
              if (crJ.players.list[crN].lives > 0) {
                if (crJ.players.list[crN].team == 1) {
                  crK++;
                } else {
                  crL++;
                }
              }
            }
            return crK >= 1 && crL >= 1;
          };
        } else {
          this.condition = function (crJ) {
            for (var crK = 0, crL = 0; crL < crJ.players.list.length; ++crL) {
              if (crJ.players.list[crL].lives > 0) {
                crK++;
              }
            }
            return crK > 1;
          };
        }
      }
      if (!this.winCondition) {
        if (this.mode.teams) {
          this.winCondition = function (crJ) {
            for (var crK = 0; crK < crJ.players.list.length; ++crK) {
              if (crJ.players.list[crK].team && crJ.players.list[crK].lives > 0) {
                return crJ.players.list[crK].team;
              }
            }
            return 1;
          };
        } else {
          this.winCondition = function (crJ) {
            for (var crK = 0; crK < crJ.players.list.length; ++crK) {
              if (crJ.players.list[crK].lives > 0) {
                return crJ.players.list[crK];
              }
            }
            return null;
          };
        }
      }
    }
    this.kills = 0;
    if (csc && this.mode.gameStart) {
      this.mode.gameStart(this);
    }
    if (csa) {
      var csb = this.map.maps[this.mapIndex].ambInd || 1;
      csb = parseInt(csb);
      for (cs6 = 1; cs6 < 4; ++cs6) {
        csa.stop("ambient_" + cs6);
      }
      csa.play("ambient_" + csb, 0.12, true, 1);
    }
    if (csd) {
      let crJ = {
        mC: this.maxPlayers,
        pv: this.private,
        sk: !this.isCustom,
        pgi: this.pendingGameId,
        data: {
          cs: this.isCustom,
          i: this.getInfo(),
          version: crR
        }
      };
      if (this.gameInstance) {
        this.gameInstance.update(crJ);
      } else {
        this.gameInstance = csd.createGame(cse, crJ);
        if (csc && !crP.isProd) {
          function crQ(crJ) {
            return require("./90.js")(crJ);
          }
          var csf = crQ("path");
          var csg = crQ("fs");
          var csh = csf.join(crK, "..", "..", "version.json");
          csg.watchFile(csh, {
            interval: 100
          }, () => {
            crJ.data.version = crR = JSON.parse(csg.readFileSync(csh, "utf8"));
            this.gameInstance.update(crJ);
          });
        }
      }
    }
  };
  this.startQueuedGame = function () {
    this.config.isFromQueue;
  };
  this.getTeamScores = function () {
    var crJ = null;
    if (this.mode && this.mode.teams && this.teams) {
      crJ = [[1, this.teams[1] || 0], [2, this.teams[2] || 0]];
    }
    return crJ;
  };
  this.getSyncData = function () {
    for (var crJ = [], crK = [], crL = [], crN = 0; crN < this.map.manager.flags.length; ++crN) {
      csf = this.map.manager.flags[crN];
      crJ.push([csf.uid, csf.x.round(1), csf.y.round(1), csf.z.round(1), csf.carrier || 0]);
    }
    for (crN = 0; crN < this.map.manager.pickups.length; ++crN) {
      csf = this.map.manager.pickups[crN];
      crK.push([csf.uid, csf.pickup, csf.orgPickup || 0, [csf.x, csf.y, csf.z]]);
    }
    for (crN = 0; crN < this.map.manager.gates.length; ++crN) {
      csf = this.map.manager.gates[crN];
      crL.push([csf.uid, csf.active]);
    }
    return {
      dest: this.destObjs.length ? this.destObjs : 0,
      flg: crJ.length ? crJ : 0,
      pkups: crK.length ? crK : 0,
      gates: crL.length ? crL : 0,
      zone: this.map.zone ? this.map.zone.scale : 0
    };
  };
  this.endGame = function () {
    this.endTimer = this.mode.infEndTimer ? "inf" : crP.endTimer;
    this.waitTimers = null;
    if (this.mode.endSort) {
      this.players.list.sort(this.mode.endSort);
    } else {
      this.players.list.sort(crO.orderByScore);
    }
    if (this.host == null || this.earnKR) {
      for (var crJ = 0; crJ < this.players.list.length; ++crJ) {
        (csf = this.players.list[crJ]).reward = 0;
        if (csf.account) {
          csf.reward = this.earnKR ? Math.min(10, Math.floor(csf.score / 100)) : Math.min(30, Math.floor(csf.score / 100));
          if (csf.challMode) {
            csf.reward = Math.floor(csf.reward * 1.5);
          }
        }
      }
    }
    this.endData.ed.length = 0;
    var crK = this.mode.endStats || crP.endStats;
    for (crJ = 0; crJ < this.players.list.length; ++crJ) {
      for (var crL = 0; crL < crK.length; ++crL) {
        this.endData.ed.push(crP.endForm[crK[crL]] ? crP.endForm[crK[crL]](this.players.list[crJ][crK[crL]], this, this.players.list[crJ]) : this.players.list[crJ][crK[crL]]);
      }
    }
    if (this.mode.winCondition) {
      this.winner = this.mode.winCondition(this);
    } else if (this.mode.teams && this.teams) {
      var crN = 0;
      var crQ = null;
      for (var crR in this.teams) {
        if (this.teams.hasOwnProperty(crR) && this.teams[crR] >= crN) {
          crN = this.teams[crR];
          crQ = crR;
        }
      }
      this.winner = crQ;
    } else {
      this.winner = this.players.list[0];
    }
    this.endData.vo = {};
    for (crJ = 0; crJ < this.players.list.length; ++crJ) {
      (csf = this.players.list[crJ]).didWin = csf.team && csf.team == this.winner || csf == this.winner;
      csf.reset();
      csc.send(csf.id, "end", false, csf.didWin, this.endData);
    }
    this.updateAccounts();
    this.players.clear();
  };
  this.update = function (crJ, crK, crL) {
    this.now = crK;
    if (csc) {
      var crN = true;
      if (this.endTimer > 0) {
        crN = false;
        this.endTimer -= crJ;
        if (this.endTimer <= 0) {
          this.init();
          this.endTimer = 0;
          csc.broadcast("game" + this.sid, "init", this.mapIndex, this.modeIndex, this.getTeamScores(), this.activeObjective, this.host, this.config, 0, this.customMapData ? 1 : null, this.getSyncData());
          if (this.isPrimary) {
            crO.restartIfNeeded(csc);
          }
        } else if ((csh = crO.getTime(this.endTimer)) != this.lastTimer) {
          this.lastTimer = csh;
          csc.broadcast("game" + this.sid, "t", csh, 1);
        }
      } else if (this.endTimer == "inf") {
        if (this.endTimer != this.lastTimer) {
          this.lastTimer = this.endTimer;
          csc.broadcast("game" + this.sid, "t", "inf", 2);
        }
      } else if (this.waitTimers) {
        crN = false;
        if (this.minPlayers && this.players.activeCount() < this.minPlayers) {
          csc.broadcast("game" + this.sid, "gmsg", "wt");
        } else {
          this.waitTimers[0].time -= crJ;
          if (this.waitTimers[0].time <= 0) {
            if (this.waitTimers[0].trigger) {
              this.waitTimers[0].trigger(this, -this.waitTimers[0].time);
            }
            if (this.waitTimers[0].time <= 0) {
              this.waitTimers.splice(0, 1);
              if (!this.waitTimers.length) {
                this.waitTimers = null;
                csc.broadcast("game" + this.sid, "gmsg");
              }
            }
          } else if ((csh = crO.getTime(this.waitTimers[0].time)) != this.lastTimerW) {
            this.lastTimerW = csh;
            csc.broadcast("game" + this.sid, "gmsg", this.waitTimers[0].msg + csh);
          }
        }
      }
      if (this.endTimer <= 0 && (crN || this.waitTimers && this.waitTimers[0].contTime)) {
        if (this.condition && !this.condition(this)) {
          this.gameTimer = "skip";
        }
        if (this.gameTimer != "skip" && this.mode.timed) {
          this.gameTimer += crJ;
          if ((csh = crO.getTime(this.gameTimer, this.mode.showMS)) != this.lastTimer) {
            this.lastTimer = csh;
            csc.broadcast("game" + this.sid, "t", csh);
          }
        } else if (this.gameTimer > 0 || this.gameTimer == "skip") {
          if (this.gameTimer != "skip") {
            this.gameTimer -= crJ;
          }
          if (this.gameTimer == "skip" || this.gameTimer <= 0) {
            this.gameTimer = 0;
            this.endGame();
          } else if ((csh = crO.getTime(this.gameTimer, this.mode.showMS)) != this.lastTimer) {
            this.lastTimer = csh;
            csc.broadcast("game" + this.sid, "t", csh);
          }
        }
      }
      if (this.endTimer <= 0 && this.nukeTimer && (this.nukeTimer -= crJ, this.nukeTimer <= 0 && (this.nukeTimer = 0, csc.broadcast("game" + this.sid, "n", 1), this.nukePlayer))) {
        for (var crP = 0, crQ = 0; crQ < this.players.list.length; ++crQ) {
          if ((csf = this.players.list[crQ]).active && csf != this.nukePlayer && (!csf.team || this.nukePlayer.team != csf.team)) {
            crP += 50;
            this.players.kill(csf, this.nukePlayer, null, false, true);
          }
        }
        if (crP) {
          csc.send(this.nukePlayer.id, "6", ["Nuke", crP], 0, this.nukePlayer.kills);
          csc.send(this.nukePlayer.id, "4");
          this.players.score(this.nukePlayer, crP);
        }
      }
    }
    this.players.update(crJ * this.config.deltaMlt);
    this.updateTeleporters(crJ);
    if (csc && this.mode.objective && this.map.manager.objectives.length && (this.objectiveTimer -= crJ, this.objectiveTimer <= 0)) {
      this.objectiveTimer = 1500;
      for (crQ = 0; crQ < this.map.manager.objectives.length; ++crQ) {
        csf = this.map.manager.objectives[crQ];
        if (crQ == this.activeObjective) {
          for (var crR = 0; crR < this.players.list.length; ++crR) {
            if ((csg = this.players.list[crR]).active && csg.collides(csf)) {
              this.players.score(csg, 10);
            }
          }
        }
      }
    }
    if (this.map.zone) {
      if (csc) {
        this.zoneTimer -= crJ;
        if (this.zoneTimer <= 0) {
          this.zoneTimer = 1000;
          this.map.zone.shrink();
          csc.broadcast("game" + this.sid, "zn", this.map.zone.scale);
          for (crR = 0; crR < this.players.list.length; ++crR) {
            if ((csg = this.players.list[crR]).active && csg.team != "inf" && this.map.zone.isOutside(csg) && this.players.changeHealth(csg, null, 10)) {
              this.players.kill(csg, null, {});
            }
          }
        }
      } else {
        this.map.zone.animate(crJ);
      }
    }
    this.projectiles.update(crJ * this.config.deltaMlt);
    if (csb) {
      csb.update(crJ * this.config.deltaMlt, crL);
    }
    if (cs9) {
      cs9.render(crJ * this.config.deltaMlt);
    }
  };
};