var co8 = require("./4.js");
var co9 = require("./8.js");
var coa = require("./23.js");
var cob = new co8.Vector3();
var coc = coa.generateCube(null, 1, 1, 1, {});
function cod(co5) {
  this.mesh = new co8.Mesh(coc);
  this.init = function (co6) {
    this.dst = co6.dst;
    this.spd = co6.spd;
    this.xS = co6.xS;
    this.zS = co6.zS;
    this.yS = co6.yS;
    this.scale = 0.45;
    this.len = 0;
    this.mesh.material = co5.getMat("default", {
      mat: co8.MeshBasicMaterial,
      color: 15592941,
      transparent: true,
      opacity: 0.21
    });
    var co7 = co6.mesh.position.x;
    var co9 = co6.mesh.position.y;
    var coa = co6.mesh.position.z;
    co5.moveMesh(this.mesh, co7, co9, coa);
    this.mesh.lookAt(co7 + this.xS, co9 + this.yS, coa + this.zS);
    this.mesh.rotateX(Math.PI / 2);
    co5.scaleMesh(this.mesh, this.scale, this.len, this.scale);
    this.mesh.visible = true;
  };
  this.update = function (co6) {
    if (this.mesh.visible) {
      if (this.len < this.dst) {
        this.len += this.spd * co6;
        if (this.len >= this.dst) {
          this.len = this.dst;
        }
      }
      this.scale -= co6 * 0.00036;
      co5.scaleMesh(this.mesh, this.scale, this.len, this.scale);
      if (this.scale <= 0) {
        this.scale = 0;
        this.mesh.visible = false;
      }
    }
  };
}
function cok() {
  co8.Object3D.call(this);
  this.largeSpawnCount = 8;
  this.smallSpawnCount = 15;
  this.emissiveness = 0.55;
  this.velocityDamping = 3;
  this.lifeSpeedMin = 2.2;
  this.lifeSpeedRange = 3;
  var co5 = new co8.Geometry({
    dynamic: true
  });
  var co6 = new co8.Color(12303291);
  this.mesh = new co8.Mesh(co5, new co8.StrippedLambertMaterial({
    color: co6,
    emissive: co6.multiplyScalar(this.emissiveness),
    smoothShading: true
  }));
  this.mesh.castShadow = true;
  this.mesh.receiveShadow = true;
  this.add(this.mesh);
  this.cubeTemplate = new co8.BoxGeometry(1, 1, 1);
  for (var co7 = 0; co7 < this.cubeTemplate.faces.length; co7++) {
    this.cubeTemplate.faces[co7].materialIndex = 0;
  }
  this.cubeTemplate.faceVertexUvs = [[]];
  this.entities = [];
}
cok.staticMatrix = new co8.Matrix4();
cok.prototype = Object.create(co8.Object3D.prototype);
Object.defineProperty(cok, "finished", function () {
  return this.entities.length === 0;
});
cok.prototype.explodeAt = function (co5, co6, co7, co8) {
  this.sizeMin = co8 * 0.35;
  this.sizeRange = co8 * 2.2;
  this.velocityMin = co8 * 30;
  this.velocityRange = co8 * 17;
  cob.set(co5, co6, co7);
  for (var co9 = 0; co9 < this.largeSpawnCount; co9++) {
    this.spawnEntity(Math.random() * 0.1 + 0.9, cob, false);
  }
  for (co9 = 0; co9 < this.smallSpawnCount; co9++) {
    this.spawnEntity(Math.random() * 0.9, cob, false);
  }
};
cok.prototype.spawnEntity = function (co5, co6) {
  var co7 = Math.pow(co5, 2.5);
  var co8 = co7 * this.sizeRange + this.sizeMin;
  var co9 = (1 - co7) * this.velocityRange + this.velocityMin;
  var coa = this._randomVector().normalize().multiplyScalar(co9);
  var cob = co7 * this.lifeSpeedRange + this.lifeSpeedMin;
  var coc = 0;
  while (true) {
    for (var cod = true, coC = 0; coC < this.entities.length; coC++) {
      if (this.entities[coC].index === coc) {
        cod = false;
        break;
      }
    }
    if (cod) {
      break;
    }
    coc++;
  }
  if (coc * 8 > this.mesh.geometry.vertices.length - 1) {
    this.mesh.geometry.merge(this.cubeTemplate, cok.emptyMatrix);
  }
  this.entities.push({
    index: coc,
    rank: co7,
    rankSeed: co5,
    life: 0,
    lifeSpeed: cob,
    size: co8,
    position: co6.clone(),
    velocity: coa
  });
};
cok.prototype.destroyEntity = function (co5) {
  this.entities.splice(this.entities.indexOf(co5), 1);
  for (var co6 = co5.index * 8; co6 < (co5.index + 1) * 8; co6++) {
    this.mesh.geometry.vertices[co6].set(0, 0, 0);
  }
  this.mesh.geometry.verticesNeedUpdate = true;
  this.mesh.geometry.elementsNeedUpdate = true;
  this._cleanGeometry();
};
cok.prototype.update = function (co5) {
  co5 /= 1000;
  for (var co6, co7 = 0; co7 < this.entities.length; co7++) {
    (co6 = this.entities[co7]).life += co5 * co6.lifeSpeed;
    co6.velocity.multiplyScalar(1 - this.velocityDamping * co5);
    co6.position.add(co6.velocity.clone().multiplyScalar(co5));
    var co8 = 2 - Math.pow(co6.life / Math.sqrt(2), 2);
    co8 *= co6.size;
    for (var co9 = co6.index * 8; co9 < (co6.index + 1) * 8; co9++) {
      var coa = this.mesh.geometry.vertices[co9];
      var cob = this.cubeTemplate.vertices[co9 % 8];
      coa.set(co6.position.x, co6.position.y, co6.position.z).addScaledVector(cob, co8);
    }
    if (co8 <= 0) {
      this.destroyEntity(co6);
    }
  }
  this.mesh.geometry.verticesNeedUpdate = true;
  this.mesh.geometry.elementsNeedUpdate = true;
  this.mesh.geometry.computeBoundingSphere();
};
cok.prototype._cleanGeometry = function () {
  for (var co5, co6 = this.mesh.geometry.vertices, co7 = this.mesh.geometry.faces, co8 = -1, co9 = 0; co9 < this.entities.length; co9++) {
    if ((co5 = this.entities[co9]).index > co8) {
      co8 = co5.index;
    }
  }
  var coa = co8 + 1;
  co6.splice(coa * 8, co6.length - coa * 8);
  co7.splice(coa * 12, co7.length - coa * 12);
};
cok.prototype._randomVector = function () {
  return new co8.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5);
};
var coS = [{
  mat: co8.MeshBasicMaterial,
  snd: {
    rng: 26,
    src: ["whizz_0", "whizz_1"],
    vol: 0.12
  },
  spd: 1.7,
  scale: 1,
  length: 13,
  color: 16777179
}, {
  spd: [0.03, 0.031],
  rand: true,
  carryV: true,
  grav: 0.0003,
  spn: [0.04, 0.05],
  scale: 0.15,
  length: 0.5,
  color: 10124094
}, {
  spd: [0.03, 0.031],
  rand: true,
  carryV: true,
  grav: 0.0003,
  spn: [0.03, 0.05],
  scale: 0.1,
  length: 0.4,
  color: 10124094
}];
function coT(co5) {
  this.mesh = new co8.Mesh(co5.cubeGeo);
  this.init = function (co6, co7, coa, cob, coc, cod, cok, coS) {
    this.dst = cod;
    this.scale = cok.scale;
    this.spd = cok.spd[1] ? co9.randFloat(cok.spd[0], cok.spd[1]) : cok.spd;
    var coT = cok && cok.carryV && coS;
    cob -= Math.PI;
    this.xS = this.spd * Math.sin(cob) * Math.cos(coc) + (coT ? coS.xVel : 0);
    this.zS = this.spd * Math.cos(cob) * Math.cos(coc) + (coT ? coS.zVel : 0);
    this.yS = this.spd * Math.sin(coc) + (coT ? coS.yVel : 0);
    this.grav = cok.grav;
    this.spin = cok.spn ? cok.spn[1] ? co9.randFloat(cok.spn[0], cok.spn[1]) : cok.spn : 0;
    this.mesh.receiveShadow = cok.mat != co8.MeshBasicMaterial;
    this.mesh.material = co5.getMat("default", {
      fog: cok.mat != co8.MeshBasicMaterial,
      color: cok.color,
      emissive: cok.emis,
      mat: cok.mat
    });
    this.layer = coS && coS.isYou ? 1 : 0;
    this.sound = coS && coS.isYou ? null : cok.snd;
    this.soundPlayed = false;
    this.mesh.layers.set(this.layer);
    co5.moveMesh(this.mesh, co6, co7, coa);
    this.mesh.lookAt(co6 + this.xS, co7 + this.yS, coa + this.zS);
    if (cok && cok.rand) {
      this.mesh.rotateX(co9.randFloat(-Math.PI, Math.PI));
    }
    co5.scaleMesh(this.mesh, cok.scale, cok.scale, cok.length);
  };
  this.checkSound = function () {
    if (this.sound && !this.soundPlayed) {
      var co5 = Howler.pos();
      if (co9.getDistance3D(co5[0], co5[1], co5[2], this.mesh.position.x, this.mesh.position.y, this.mesh.position.z) <= this.sound.rng) {
        SOUND.play(this.sound.src[co9.randInt(0, this.sound.src.length - 1)], this.sound.vol, false, co9.randFloat(0.8, 1.2));
        this.soundPlayed = true;
      }
    }
  };
  this.update = function (co5) {
    if (this.mesh.visible) {
      this.mesh.position.x += this.xS * co5;
      this.mesh.position.z += this.zS * co5;
      this.mesh.position.y += this.yS * co5;
      if (this.spin) {
        this.mesh.rotateX(this.spin * co5);
      }
      this.yS -= (this.grav || 0) * co5;
      this.dst -= this.spd * co5;
      this.checkSound();
      if (this.dst <= 0) {
        this.mesh.visible = false;
      }
    }
  };
}
co8.Sprite.prototype.init = function (co5, co6, co7, co8, co9, coa, cob, coc, cod, cok) {
  this.position.x = co5;
  this.position.y = co6;
  this.position.z = co7;
  this.xVel = co8;
  this.yVel = co9;
  this.zVel = coa;
  this.scale.x = this.scale.y = cob;
  this.life = coc || 0;
  this.grav = cod || 0;
  this.area = cok;
  this.updC = 0;
};
co8.Sprite.prototype.update = function (co5) {
  if (this.visible) {
    this.position.x += this.xVel * co5;
    this.position.y += this.yVel * co5;
    this.yVel -= this.grav * co5;
    this.position.z += this.zVel * co5;
    if (this.area) {
      var co6 = this.scale.x / 2;
      if (this.position.x - co6 >= this.area.x + this.area.w) {
        this.position.x = this.area.x - this.area.w - co6;
      } else if (this.position.x + co6 <= this.area.x - this.area.w) {
        this.position.x = this.area.x + this.area.w + co6;
      }
      if (this.position.z - co6 >= this.area.z + this.area.l) {
        this.position.z = this.area.z - this.area.l - co6;
      } else if (this.position.z + co6 <= this.area.z - this.area.l) {
        this.position.z = this.area.z + this.area.l + co6;
      }
      if (this.position.y - co6 >= this.area.y + this.area.h) {
        this.position.y = this.area.y - co6;
      } else if (this.position.y + co6 <= this.area.y) {
        this.position.y = this.area.y + this.area.h + co6;
      }
    }
    if (this.life > 0) {
      this.life -= co5;
      if (this.life <= 0 && this.updC) {
        this.visible = false;
      }
      this.updC++;
    } else if (this.life <= 0 && this.updC) {
      this.visible = false;
    }
  }
};
var cpi = [Math.PI / 3, -Math.PI / 3];
var cpj = [{
  hole: true,
  count: 2,
  grav: -0.00002,
  scale: [5, 9],
  speed: [0, 0.025],
  spread: [-0.4, 0.4],
  life: [300, 500]
}, {}, {
  count: 1,
  blending: 2,
  scale: [5, 7],
  speed: [0, 0],
  spread: [0, 0],
  life: [30, 35]
}, {
  count: 1,
  blending: 2,
  scale: [2000, 2000],
  speed: [0, 0],
  spread: [0, 0]
}, {
  count: 4,
  src: "0",
  scale: [5, 6],
  speed: [0, 0.01],
  spread: [-1, 1],
  life: [600, 800]
}];
module.exports = function (co5) {
  var co6;
  var co7;
  var coa;
  this.particles = [];
  this.trails = [];
  this.physObjs = [];
  this.areas = [];
  this.active = true;
  this.ExplosionManager = new cok();
  this.prefabs = [{
    src: "glow_0",
    blending: 2,
    spd: 0.008,
    cnt: 2.2,
    grav: [-0.015, -0.005],
    scl: [0.7, 1],
    dir: 0
  }, {
    src: "glow_1",
    blending: 1,
    spd: 0.003,
    cnt: 8,
    grav: [-0.2, -0.22],
    scl: [1, 1.5],
    dir: 0
  }, {
    src: "fog_0",
    blending: 1,
    spd: 0.002,
    cnt: 6,
    grav: [0, 0],
    scl: [25, 30],
    dir: 0
  }];
  this.addTrail = function (co6) {
    coa = null;
    for (var co7 = 0; co7 < this.trails.length; ++co7) {
      if (!this.trails[co7].mesh.visible) {
        coa = this.trails[co7];
        break;
      }
    }
    if (!coa) {
      coa = new cod(co5);
      this.trails.push(coa);
      co5.scene.add(coa.mesh);
    }
    coa.init(co6);
  };
  this.area = function (co5, co6, co7, co8, coa, cob, coc, cod) {
    co8 /= 2;
    cob /= 2;
    this.areas.push({
      f: cod,
      x: co5,
      y: co6,
      z: co7,
      w: co8,
      h: coa,
      l: cob
    });
    for (var cok = 0; cok < coc.count; ++cok) {
      this.add(coc.src, co5 + co9.randInt(-co8, co8), co6 + co9.randInt(0, coa), co7 + co9.randInt(-cob, cob), coc.spd * Math.sin(coc.dir), coc.grav ? co9.randFloat(coc.grav[0], coc.grav[1]) : 0, coc.spd * Math.cos(coc.dir), co9.randFloat(coc.scl[0], coc.scl[1]), 0, 0, coc.blending, this.areas[this.areas.length - 1]);
    }
  };
  this.effect = function (co7, coa, cob, coc, cod, cok) {
    if (this.active && (co5.useDepthMap == 0 || co5.useDepthMap == "0")) {
      co6 = cpj[cok];
      for (var coS = 0; coS < co6.count; ++coS) {
        var coT = co9.randFloat(co6.speed[0], co6.speed[1]);
        var cpi = coc + co9.randFloat(co6.spread[0], co6.spread[1]);
        var cpI = cod + co9.randFloat(co6.spread[0], co6.spread[1]);
        this.add(cok, co7, coa, cob, coT * Math.sin(cpi) * Math.cos(cpI), coT * Math.sin(cpI), coT * Math.cos(cpi) * Math.cos(cpI), co9.randFloat(co6.scale[0], co6.scale[1]), co6.life ? co9.randInt(co6.life[0], co6.life[1]) : 0, co6.grav, co6.blending, null, co6.src);
      }
      if (co6.hole) {
        this.add(1, co7, coa, cob, 0, 0, 0, co9.randFloat(0.4, 1), 5000, 0, co8.SubtractiveBlending);
      }
    }
  };
  this.add = function (co6, co9, coa, cob, coc, cod, cok, coS, coT, cpi, cpj, cpU, cpV) {
    co7 = null;
    for (var cpW = 0; cpW < this.particles.length; ++cpW) {
      if (!this.particles[cpW].visible && !this.particles[cpW].static) {
        co7 = this.particles[cpW];
        break;
      }
    }
    if (!co7) {
      co7 = new co8.Sprite();
      this.particles.push(co7);
      co5.scene.add(co7);
    }
    this.setMaterial(co7, cpV || co6, cpj, true);
    co7.visible = true;
    co7.init(co9, coa, cob, coc, cod, cok, coS, coT, cpi, cpU);
  };
  this.setMaterial = function (co6, co7, coa, cob) {
    co6.material = co5.getMat("particles/" + co7, {
      mat: co8.SpriteMaterial,
      depthWrite: false,
      blending: coa || co8.NormalBlending,
      rotation: cob ? cpi[co9.randInt(0, 2)] : 0
    });
  };
  this.physObj = function (co6, co8, co9, coa, cob, coc, cod, cok, cpi, cpj, cqb) {
    if (co5.useDepthMap == 0 || co5.useDepthMap == "0") {
      co7 = null;
      for (var cqc = 0; cqc < this.physObjs.length; ++cqc) {
        if (!this.physObjs[cqc].mesh.visible) {
          co7 = this.physObjs[cqc];
          break;
        }
      }
      if (!co7) {
        co7 = new coT(co5);
        this.physObjs.push(co7);
        co5.scene.add(co7.mesh);
      }
      co7.sid = cqb == null ? null : cqb;
      co7.mesh.visible = true;
      co7.init(co6, co8, co9, coa, cob, coc, cpj || coS[cok], cpi);
      if (cod && this.showTrails) {
        this.addTrail(co7);
      }
    }
  };
  this.disablePhys = function (co5) {
    for (var co6 = 0; co6 < this.physObjs.length; ++co6) {
      if (this.physObjs[co6].sid == co5) {
        this.physObjs[co6].mesh.visible = false;
      }
    }
  };
  this.update = function (co5, co6) {
    if (co6 && co6.active) {
      for (var co7 = 0; co7 < this.areas.length; ++co7) {
        if (this.areas[co7].f) {
          this.areas[co7].x = co6.x;
          this.areas[co7].y = co6.y;
          this.areas[co7].z = co6.z;
        }
      }
    }
    for (co7 = 0; co7 < this.trails.length; ++co7) {
      this.trails[co7].update(co5);
    }
    for (co7 = 0; co7 < this.particles.length; ++co7) {
      this.particles[co7].update(co5);
    }
    for (co7 = 0; co7 < this.physObjs.length; ++co7) {
      this.physObjs[co7].update(co5);
    }
    this.ExplosionManager.update(co5);
  };
  this.reset = function () {
    this.particles.length = 0;
    this.trails.length = 0;
    this.physObjs.length = 0;
    this.areas.length = 0;
  };
};