var c2F;
var c2G;
var c2H = 0;
function c2I(c2C) {
  this.sid = c2H++;
  this.uid = c2C.uid;
  this.width = c2C.w;
  this.length = c2C.l;
  this.height = c2C.h;
  this.active = true;
  this.x = c2C.x;
  this.orgX = this.x;
  this.y = c2C.y;
  this.orgY = this.y;
  this.z = c2C.z;
  this.orgZ = this.z;
  this.dir = c2C.d;
  this.src = c2C.src;
  this.ramp = c2C.ramp;
  this.ladder = c2C.ladder;
  this.jumpPad = c2C.jumpPad;
  this.noShoot = c2C.noShoot;
  this.stepSrc = c2C.s;
  this.score = c2C.score;
  this.scoreP = c2C.scoreP;
  this.kill = c2C.kill;
  this.dummy = c2C.dummy;
  this.noVis = c2C.noVis;
  this.complexMesh = c2C.complexMesh;
  this.penetrable = c2C.penetrable;
  this.health = c2C.health;
  this.startHealth = c2C.health;
  this.transparent = c2C.transparent;
  this.boost = c2C.boost;
  this.boostDr = c2C.boostDr;
  this.aoMlt = c2C.aoM;
  this.team = c2C.team;
  this.flag = c2C.flag;
  this.trigger = c2C.trigger;
  this.pickup = c2C.pickup;
  this.orgPickup = c2C.orgPickup;
  this.pickupRep = c2C.pickupRep;
  this.meshRef = c2C.meshRef;
  this.checkpoint = c2C.checkpoint;
  this.singleUse = c2C.singleUse;
  this.isBorder = c2C.isBorder;
  this.node = c2C.node;
  this.channel = c2C.channel;
  this.teleporter = c2C.teleporter;
  this.telCooldown = 0;
  this.telStopMo = c2C.momentum;
  this.noAmb = c2C.noAmb;
  this.tRadius = c2C.tRadius;
  this.gate = c2C.gate;
  this.noMsg = c2C.noMsg;
  this.method = c2C.method;
}
module.exports.manager = function (c2C, c2D, c2H) {
  var c2N;
  var c2O;
  if (c2C) {
    c2F = require("./37.js").prefabs;
    c2G = require("./4.js");
  }
  this.aoOpac = 0;
  this.objects = [];
  this.objectives = [];
  this.flags = [];
  this.pickups = [];
  this.gates = [];
  this.teleporters = [];
  this.collision = function (c2C, c2D, c2E) {
    return c2C.x - c2C.width - c2E <= c2D.x + c2D.width && c2C.x + c2C.width + c2E >= c2D.x - c2D.width && c2C.z - c2C.length - c2E <= c2D.z + c2D.length && c2C.z + c2C.length + c2E >= c2D.z - c2D.length && c2C.y - c2C.height - c2E <= c2D.y + c2D.height && c2C.y + c2C.height + c2E >= c2D.y - c2D.height;
  };
  this.checkPos = function (c2C, c2E, c2F, c2G, c2H) {
    for (var c2I = 0; c2I < this.objects.length; ++c2I) {
      if (this.objects[c2I] != c2G && this.objects[c2I] != c2H && !this.objects[c2I].ramp && c2D.pointInBox3D(c2C, c2E, c2F, this.objects[c2I])) {
        return false;
      }
    }
    return true;
  };
  this.addCylinder = function (c2D, c2E, c2F, c2G, c2H, c2I) {
    if (c2C) {
      c2I.shadows = true;
      c2C.addCylinder(c2D, c2E, c2F, c2G, c2H, c2I);
    }
  };
  this.getZoneDat = function (c2C, c2D) {
    return {
      src: "zone_r",
      texSrc: "zone_" + (c2D && c2C == c2D.team ? "b" : "r"),
      noGroup: true,
      mat: c2G.MeshBasicMaterial,
      transparent: true,
      depthWrite: false,
      side: 2
    };
  };
  this.getFlagDat = function (c2C, c2D) {
    var c2E = c2D && c2C == c2D.team ? "1" : "0";
    return {
      src: "crystal_0",
      texSrc: "crystal_" + c2E,
      noGroup: true,
      noShadow: true,
      noFog: true,
      emissive: c2E == "0" ? 8729652 : 4360861
    };
  };
  this.addFlag = function (c2D, c2E, c2F, c2G) {
    var c2N = null;
    if (c2C) {
      (c2N = c2C.loadMesh(this.getFlagDat(c2G), c2D, c2E + c2H.flagOff, c2F, 0, c2H.flagScale, c2C.scene)).layers.set(2);
      c2N.zoneMesh = c2C.addCube(c2D, c2E, c2F, c2H.flagZoneS, c2H.flagZoneH, c2H.flagZoneS, [1, 1, 0, 0, 1, 1], this.getZoneDat(c2G));
    }
    var c2O = new c2I({
      uid: this.objects.length,
      meshRef: c2N,
      x: c2D,
      z: c2F,
      y: c2E + c2H.flagScale / 2 + c2H.flagOff,
      w: c2H.flagScale,
      l: c2H.flagScale,
      h: c2H.flagScale / 2,
      team: c2G,
      flag: true,
      noShoot: true,
      complexMesh: true
    });
    this.flags.push(c2O);
    this.objects.push(c2O);
    var c3f = new c2I({
      x: c2D,
      z: c2F,
      y: c2E + c2H.flagZoneH / 2,
      w: c2H.flagZoneS / 2,
      l: c2H.flagZoneS / 2,
      h: c2H.flagZoneH / 2,
      team: c2G,
      trigger: true,
      noShoot: true,
      complexMesh: true
    });
    c3f.flagObj = c2O;
    this.objects.push(c3f);
  };
  this.addWeapon = function (c2D, c2E, c2F, c2G, c2N, c2O, c3m, c3n, c3o) {
    var c3p = null;
    if (c2C) {
      (c3p = c2C.loadMesh({
        src: "weapons/" + c3n.src,
        texSrc: "weapons/" + c3n.src,
        noGroup: true,
        noShadow: true,
        transparent: true,
        noFog: true
      }, c2D, c2E + c2H.pickupOff, c2F, 0, c3n.scale, c2C.scene)).rotateY(c2G || 0);
      c3p.rotateX((c2N || 0) - Math.PI / 2);
      c3p.rotateZ(c2O || 0);
    }
    var c3q = new c2I({
      uid: this.objects.length,
      meshRef: c3p,
      x: c2D,
      z: c2F,
      y: c2E + c2H.pickupZoneH / 2,
      w: c2H.pickupZoneX,
      l: c2H.pickupZoneZ,
      h: c2H.pickupZoneH * 2,
      pickup: c3m,
      pickupRep: !c3o,
      orgPickup: c3m,
      trigger: true,
      noShoot: true,
      complexMesh: true
    });
    this.pickups.push(c3q);
    this.objects.push(c3q);
  };
  this.addObjective = function (c2D, c2E, c2F, c2H, c2I, c2N) {
    var c2O;
    if (c2C) {
      (c2O = c2C.addCube(c2D, c2E, c2F, c2H, c2N, c2I, [1, 1, 0, 0, 1, 1], {
        src: "objective_0",
        noGroup: true,
        mat: c2G.MeshBasicMaterial,
        transparent: true,
        depthWrite: false,
        side: 2
      })).visible = false;
    }
    this.objectives.push({
      x: c2D,
      z: c2F,
      y: c2E + c2N / 2,
      mesh: c2O,
      width: c2H / 2,
      length: c2I / 2,
      height: c2N / 2
    });
  };
  this.addDeathZone = function (c2C, c2D, c2E, c2F, c2G, c2H) {
    this.objects.push(new c2I({
      x: c2C,
      z: c2E,
      y: c2D + c2H / 2,
      w: c2F / 2,
      l: c2G / 2,
      h: c2H / 2,
      kill: true,
      noShoot: true,
      complexMesh: true
    }));
  };
  this.addScoreZone = function (c2C, c2D, c2E, c2F, c2G, c2H, c2N) {
    this.objects.push(new c2I({
      x: c2C,
      z: c2E,
      y: c2D + c2H / 2,
      w: c2F / 2,
      l: c2G / 2,
      h: c2H / 2,
      score: true,
      scoreP: c2N,
      noShoot: true,
      complexMesh: true
    }));
  };
  this.addCheckPoint = function (c2C, c2D, c2E, c2F, c2G, c2H, c2N, c2O) {
    this.objects.push(new c2I({
      x: c2C,
      z: c2E,
      y: c2D + c2H / 2,
      w: c2F / 2,
      l: c2G / 2,
      h: c2H / 2,
      d: parseInt(c2O) || 0,
      checkpoint: true,
      singleUse: c2N,
      noShoot: true,
      complexMesh: true
    }));
  };
  this.addTeleporter = function (c2C, c2D, c2E, c2F, c2G, c2H, c2N, c2O, c41) {
    var c42 = new c2I({
      uid: this.objects.length,
      x: c2C,
      z: c2E,
      y: c2D + c2H / 2,
      w: c2F / 2,
      l: c2G / 2,
      h: c2H / 2,
      teleporter: true,
      channel: c2N || 0,
      node: c2O || 0,
      momentum: c41,
      noShoot: true,
      complexMesh: true
    });
    this.objects.push(c42);
    this.teleporters.push(c42);
  };
  this.addGrass = function (c2D, c2E, c2F, c2H, c2I, c2N, c2O) {
    c2O = c2O || {};
    if (c2C && !c2O.noVis) {
      c2O.side = c2G.DoubleSide;
      c2O.transparent = true;
      c2O.alphaTest = 0.2;
      c2O.vertexColors = c2G.VertexColors;
      c2O.shadowsR = true;
      c2O.noGroup = !!c2O.health;
      c2C.addGrass(c2D, c2E, c2F, c2H, c2I, c2N, c2O);
    }
  };
  this.addLadder = function (c2E, c2F, c2O, c4d, c4e, c4f, c4g, c4h) {
    var c4i = c2H.ladderScale;
    var c4j = c2H.ladderScale;
    if (c4e == 0 || c4e == Math.PI) {
      c4j = c2H.ladderWidth;
    } else {
      c4i = c2H.ladderWidth;
    }
    c2N = new c2I({
      ladder: true,
      complexMesh: true,
      noShoot: true,
      d: c4e,
      x: c2E + c2H.ladderScale * Math.cos(c4e),
      z: c2O + c2H.ladderScale * Math.sin(c4e),
      y: c2F,
      w: c4i,
      l: c4j,
      h: c4d
    });
    this.objects.push(c2N);
    if (c2C && !c4f) {
      var c4k = {
        src: c4g || "floor_0",
        vertexColors: c2G.VertexColors,
        colr: c4h,
        scale: 0.02,
        amb: c2H.ambientVal,
        shadows: true
      };
      c2C.addCube(c2N.x + c2H.ladderWidth * Math.sin(c4e), c2N.y, c2N.z + c2H.ladderWidth * Math.cos(c4e), c2H.ladderScale * 2, c4d + 2, c2H.ladderScale * 2, [1, 1, 1, 1, 1, 1], c4k);
      c2C.addCube(c2N.x - c2H.ladderWidth * Math.sin(c4e), c2N.y, c2N.z - c2H.ladderWidth * Math.cos(c4e), c2H.ladderScale * 2, c4d + 2, c2H.ladderScale * 2, [1, 1, 1, 1, 1, 1], c4k);
      for (var c4l = Math.floor(c4d / 6), c4m = 0; c4m < c4l; ++c4m) {
        c4k.dark = 0.6 + c4m / c4l * 0.4;
        c2C.addPlane(c2N.x, c2F + (c4m + 1) * 6 + c2D.randFloat(-1, 1), c2N.z, c2H.ladderWidth, c2H.ladderScale, c4k, -c4e + Math.PI / 2, Math.PI / 2, c2D.randFloat(-0.1, 0.1));
      }
    }
  };
  this.addRamp = function (c2D, c2E, c2F, c2N, c2O, c4s, c4t, c4u, c4v, c4w, c4x, c4y, c4z, c4A, c4B) {
    var c4C = c4t != 0 && c4t != Math.PI;
    var c4D = (c4C ? c4s : c2N) / 2;
    var c4E = Math.sqrt(c2O * c2O + c4s * c4s);
    var c4F = Math.asin(c2O / c4E);
    this.objects.push(new c2I({
      x: c2D,
      z: c2F,
      y: c2E + c2O / 2,
      w: c2N / 2,
      l: c4s / 2,
      h: c2O / 2,
      d: c4t,
      noShoot: true,
      complexMesh: true,
      boostDr: c4u ? c4F : null,
      boost: c4u || null,
      ramp: {
        sX: c2D - c4D * Math.cos(c4t),
        sZ: c2F - c4D * Math.sin(c4t),
        eX: c2D + c4D * Math.cos(c4t),
        eZ: c2F + c4D * Math.sin(c4t)
      },
      noAmb: c4B
    }));
    if (c2C && !c4w) {
      var c4G = {
        src: c4v || "default",
        vertexColors: c2G.VertexColors,
        colr: c4x,
        scale: 1,
        shadowsR: true,
        side: c2G.DoubleSide,
        movT: c4z,
        movD: c4A
      };
      c4G.transparent = c4G.src == "link_0";
      if (c4G.src == "link_0") {
        c4G.depthWrite = true;
        c4G.alphaTest = c4G.transparent ? 0.02 : 0;
      }
      c2C.addRamp(c2D, c2E, c2F, c4C ? c2N : c4s, c2O, (c4C ? c4s : c2N) / 2, c4t, c4G);
      if (!c4B) {
        c2E += c2H.ambOff;
        var c4H = (c4C ? c2N : c4s) / 2 - c4y;
        if (c4C) {
          c2N = c4y * 2;
        } else {
          c4s = c4y * 2;
        }
        for (var c4I, c4J = 0; c4J < 2; ++c4J) {
          c4I = c4J ? 1 : -1;
          c2C.addRamp(c2D + c4H * c4I * Math.cos(c4t + Math.PI / 2), c2E, c2F + c4H * c4I * Math.sin(c4t + Math.PI / 2), c4C ? c2N : c4s, c2O, (c4C ? c4s : c2N) / 2, c4t, {
            src: "ambient_1",
            euler: "ZYX",
            depthWrite: false,
            transparent: true,
            side: c2G.DoubleSide
          }, c4J ? 0 : Math.PI);
        }
      }
    }
  };
  this.addGate = function (c2D, c2E, c2F, c2H, c2N, c2O, c4Q) {
    (c4Q = c4Q || {}).src = c4Q.src || "wall_0";
    var c4R = new c2I({
      x: c2D,
      z: c2F,
      y: c2E + c2O / 2,
      w: c2H / 2,
      l: c2N / 2,
      h: c2O / 2,
      uid: this.objects.length,
      src: c4Q.src,
      noVis: c4Q.noVis,
      noAmb: c4Q.noAmb,
      transparent: c4Q.transparent,
      penetrable: c4Q.penetrable,
      isBorder: c4Q.isBorder,
      complexMesh: c4Q.xR || c4Q.yR || c4Q.zR || c4Q.src == "link_0",
      ter: true,
      tRadius: 10,
      gate: true,
      scoreP: c4Q.scoreP,
      noMsg: c4Q.noMsg,
      method: c4Q.method
    });
    if (c2C && !c4Q.noVis) {
      c4Q.transparent = c4Q.src == "link_0" || c4Q.opacity != 1;
      if (c4Q.src == "link_0") {
        c4Q.depthWrite = c4Q.opacity == 1;
        c4Q.alphaTest = c4Q.transparent ? 0.02 : 0;
      }
      c4Q.vertexColors = c2G.VertexColors;
      c4Q.scale = c4Q.scale == null ? 1 : c4Q.scale;
      c4Q.shadows = !c4Q.shadowsR && c4Q.opacity == 1;
      c4Q.noFog = !!c4Q.emissive;
      c4Q.noGroup = true;
      var c4S = c2C.addCube(c2D, c2E, c2F, c2H, c2O, c2N, [1, 1, 1, 1, 1, 1], c4Q);
      c4R.meshRef = c4S;
    }
    this.objects.push(c4R);
    this.gates.push(c4R);
  };
  this.addBlock = function (c2D, c2E, c2F, c2H, c2N, c2O, c4Z, c50) {
    (c50 = c50 || {}).src = c50.src || "wall_0";
    if (!c50.noCol) {
      this.objects.push(new c2I({
        x: c2D,
        z: c2F,
        y: c2E + c2O / 2,
        w: c2H / 2,
        l: c2N / 2,
        h: c2O / 2,
        uid: this.objects.length,
        s: c50.sound,
        src: c50.src,
        noVis: c50.noVis,
        noAmb: c50.noAmb,
        health: c50.health,
        transparent: c50.transparent,
        penetrable: c50.penetrable,
        isBorder: c50.isBorder,
        complexMesh: c50.xR || c50.yR || c50.zR || c50.src == "link_0",
        ter: true,
        trigger: c50.trig
      }));
    }
    if (c2C && !c50.noVis) {
      c50.transparent = c50.src == "link_0" || c50.opacity != 1;
      if (c50.src == "link_0") {
        c50.depthWrite = c50.opacity == 1;
        c50.alphaTest = c50.transparent ? 0.02 : 0;
      }
      c50.vertexColors = c2G.VertexColors;
      c50.scale = c50.scale == null ? 1 : c50.scale;
      c50.shadows = !c50.shadowsR && c50.opacity == 1;
      c50.noFog = !!c50.emissive;
      c50.noGroup = !!c50.health;
      var c51 = c2C.addCube(c2D, c2E, c2F, c2H, c2O, c2N, c4Z, c50);
      if (c50.health && !c50.noCol) {
        this.objects[this.objects.length - 1].meshRef = c51;
      }
    }
  };
  this.addMesh = function (c2E, c2N, c2O, c55, c56, c57, c58, c59, c5a, c5b, c5c) {
    c2N += c57;
    if (!c5a) {
      this.objects.push(new c2I({
        complexMesh: !!c2F && c2F[c59.toUpperCase()].complex,
        aoM: c2F && c2F[c59.toUpperCase()].aoMlt || 0,
        x: c2E,
        z: c2O,
        y: c2N,
        w: c56,
        l: c58,
        h: c57,
        ter: true,
        noAmb: c5c
      }));
    }
    if (c2F && c2F[c59.toUpperCase()].transparent) {
      c2N += c2D.randFloat(-0.01, 0.01);
    }
    if (c2C) {
      c2C.loadMesh({
        src: c59 + "_0",
        emissive: c2F[c59.toUpperCase()].emiss ? 16777215 : null,
        side: c2F[c59.toUpperCase()].doubleSide ? c2G.DoubleSide : c2G.FrontSide,
        transparent: c2F[c59.toUpperCase()].transparent,
        shadows: c2F[c59.toUpperCase()].castShadow,
        shadowsR: c2F[c59.toUpperCase()].receiveShadow,
        vertexColors: c2G.VertexColors,
        color: c5b || 16777215
      }, c2E, c2N, c2O, c55, c2H[c59 + "Scale"], c2C.scene, true);
    }
  };
  var c5d = [];
  this.addNoisePlanes = function () {
    for (var c2D = 0; c2D < c5d.length; ++c2D) {
      c5d[c2D][5].objects = this.objects;
      c2C.addPlane(...c5d[c2D]);
    }
    c5d.length = 0;
  };
  this.addPlane = function (c2D, c2E, c2F, c2H, c2N, c2O, c5l, c5m, c5n) {
    if ((c2O = c2O || {}).col) {
      this.objects.push(new c2I({
        x: c2D,
        z: c2F,
        y: c2E,
        w: c2N,
        l: c2H,
        h: 0,
        s: c2O.sound,
        health: c2O.health,
        transparent: c2O.transparent,
        penetrable: c2O.penetrable,
        noVis: c2O.noVis,
        noAmb: c2O.noAmb
      }));
    }
    if (c2C && !c2O.noVis) {
      c2O.transparent = true;
      c2O.side = c2G.DoubleSide;
      c2O.vertexColors = c2G.VertexColors;
      if (c2O.noise) {
        c2O.pinEdges = true;
        c2O.margin = 1;
        c2O.tilesX = Math.round(c2N / 5);
        c2O.tilesZ = Math.round(c2H / 5);
      }
      var c5o = [c2D, c2E, c2F, c2N, c2H, c2O, c5l, (c5m || 0) + Math.PI / 2, c5n];
      if (!c2O.noise) {
        return c2C.addPlane(...c5o);
      }
      c5d.push(c5o);
    }
  };
  this.pointInObjs = function (c2C, c2E, c2F) {
    for (var c2G = 0; c2G < this.objects.length; ++c2G) {
      if (!(c2N = this.objects[c2G]).noVis && !c2N.complexMesh && !c2N.health && c2E.indexOf(c2N.sid) < 0 && c2D.pointInBox3D(c2C[0], c2C[1], c2C[2], c2N, c2F || 0)) {
        return true;
      }
    }
    return false;
  };
  this.setMaxAO = function (c2C, c2D, c2E) {
    c2C.maxAOS = c2C.maxAOS || {};
    c2C.maxAOS[c2D.sid] = Math.max(c2E, c2C.maxAOS[c2D.sid] || 0);
    c2D.maxAOS = c2D.maxAOS || {};
    c2D.maxAOS[c2C.sid] = Math.max(c2E, c2D.maxAOS[c2C.sid] || 0);
  };
  this.aosToAdd = {};
  this.addAmbient = function (c2C, c2E, c2F, c2G, c2I, c2N, c2O, c5d, c5E, c5F, c5G) {
    var c5H = !c5F;
    if (c5F) {
      for (var c5I = 0; c5I < c5F.length; ++c5I) {
        if (c2D.pointInBox3D(c2C, c2E, c2F, c5F[c5I], c2H.ambOff * 2)) {
          c5H = true;
          break;
        }
      }
    }
    if (c5H) {
      if (c5F) {
        var c5J = c5F[0].sid + "-" + c5F[1].sid;
        this.aosToAdd[c5J] ||= [];
        this.aosToAdd[c5J].push({
          vals: [c2C, c2E, c2F, c2G, c2I, c2N, c2O + c2H.ambOff, c5d + c2H.ambOff, c5E],
          group: c5G
        });
      } else {
        this.addPlane(c2C, c2E, c2F, c2O, c5d, {
          src: "ambient_" + (c5E || 0),
          euler: "ZYX",
          depthWrite: false
        }, c2G, c2I, c2N);
      }
    }
  };
  var c5K = [["g6-1-2", "g4-1-2"], ["g5-1-2", "g4-0-1"], ["g6-0-1", "g3-1-2"], ["g5-0-1", "g3-0-1"], ["g6-0-3", "g2-0-3"], ["g5-0-3", "g2-1-1"], ["g6-1-1", "g1-0-3"], ["g5-1-1", "g1-1-1"], ["g6-0-2", "g1-1-0"], ["g5-0-2", "g1-0-2"], ["g6-1-0", "g2-1-0"], ["g5-1-0", "g2-0-2"], ["g4-0-2", "g1-0-0"], ["g3-0-2", "g1-1-3"], ["g4-1-0", "g2-0-0"], ["g3-1-0", "g2-1-3"], ["g4-0-3", "g2-1-2"], ["g3-0-3", "g2-0-1"], ["g4-1-1", "g1-1-2"], ["g3-1-1", "g1-0-1"], ["g6-1-3", "g3-0-0"], ["g5-1-3", "g3-1-3"], ["g6-0-0", "g4-0-0"], ["g5-0-0", "g4-1-3"]];
  this.groupsMatch = function (c2C, c2D) {
    for (var c2E = 0; c2E < c5K.length; ++c2E) {
      if (c5K[c2E].indexOf(c2C) >= 0 && c5K[c2E].indexOf(c2D) >= 0) {
        return true;
      }
    }
    return false;
  };
  this.clearAOGroup = function (c2C) {
    for (var c2D = c2C.length - 1; c2D >= 0; --c2D) {
      c2N = c2C[c2D];
      for (var c2E = c2C.length - 1; c2E >= 0; --c2E) {
        c2O = c2C[c2E];
        if (!c2N.dontAdd && !c2O.dontAdd && c2N != c2O && this.groupsMatch(c2N.group, c2O.group)) {
          if (c2N.vals[6] + c2N.vals[7] >= c2O.vals[6] + c2O.vals[7]) {
            c2O.dontAdd = true;
          } else {
            c2N.dontAdd = true;
          }
          break;
        }
      }
    }
  };
  this.addPendingAOs = function () {
    for (var c2C in this.aosToAdd) {
      if (this.aosToAdd.hasOwnProperty(c2C)) {
        this.clearAOGroup(this.aosToAdd[c2C]);
        for (var c2D = 0; c2D < this.aosToAdd[c2C].length; ++c2D) {
          if (!this.aosToAdd[c2C][c2D].dontAdd) {
            this.addAmbient(...this.aosToAdd[c2C][c2D].vals);
          }
        }
      }
    }
    this.aosToAdd = {};
  };
  this.limitAmb = function (c2C, c2E, c2F, c2G, c2H, c2I, c2N) {
    var c2O = [c2D.cdv[c2G]];
    var c5d = [c2D.cdv[c2H]];
    return c2C = c2F == -Math.PI / 2 || c2F == Math.PI + Math.PI / 2 ? Math.min(c2C, (c2E[c2H] - Math.min(c2I[c2H] - c2I[c5d], c2N[c2H] - c2N[c5d])) / 2) : c2F == Math.PI / 2 ? Math.min(c2C, (Math.max(c2I[c2H] + c2I[c5d], c2N[c2H] + c2N[c5d]) - c2E[c2H]) / 2) : c2F == 0 ? Math.min(c2C, (Math.max(c2I[c2G] + c2I[c2O], c2N[c2G] + c2N[c2O]) - c2E[c2G]) / 2) : Math.min(c2C, (c2E[c2G] - Math.min(c2I[c2G] - c2I[c2O], c2N[c2G] - c2N[c2O])) / 2);
  };
  this.resetAll = function () {
    this.aosToAdd = {};
    for (var c2D = 0; c2D < this.objects.length; ++c2D) {
      this.objects[c2D].active = true;
      if (this.objects[c2D].startHealth) {
        this.objects[c2D].health = this.objects[c2D].startHealth;
      }
      if (this.objects[c2D].meshRef) {
        this.objects[c2D].meshRef.visible = true;
      }
    }
    if (c2C) {
      c2C.updateShadowMap();
    }
  };
  this.removeAll = function () {
    this.objects.length = 0;
    this.objectives.length = 0;
    this.flags.length = 0;
    this.pickups.length = 0;
    this.teleporters.length = 0;
  };
};