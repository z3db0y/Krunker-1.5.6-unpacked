let bDP = require("./4.js");
const bDQ = require("./7.js");
const bDR = require("./23.js");
const bDS = require("./8.js");
const bDT = require("./22.js");
let bDU = new bDP.TextureLoader();
let bDV = new bDP.LoadingManager();
let bDW = new bDP.OBJLoader(bDV);
function bDX(bDM, bDN, bDO, bDQ, bDR, bDT = 0, bDV = 0, bDX = 0, bE6 = null) {
  return new Promise(bE7 => {
    bDW.load(bDS.versionifyUrl(bDN), bDN => {
      let bDW;
      if (bDO) {
        bDW = bDU.load(bDS.versionifyUrl(bDO), bDM => {
          bDM.wrapS = bDP.RepeatWrapping;
          bDM.wrapT = bDP.RepeatWrapping;
          bDM.repeat.set(1, 1);
          bDM.minFilter = bDP.NearestFilter;
          bDM.magFilter = bDP.NearestFilter;
          bDM.needsUpdate = true;
        });
      }
      let bEb = new bDP.StrippedLambertMaterial({
        map: bDW
      });
      let bEc = new bDP.Geometry();
      bDN.traverse(bDM => {
        if (bDM instanceof bDP.Mesh) {
          if (bDM.geometry.isBufferGeometry) {
            bEc.fromBufferGeometry(bDM.geometry);
            bEc.computeFlatVertexNormals();
            bDM.geometry.fromGeometry(bEc);
          } else {
            bDM.geometry.computeFlatVertexNormals();
          }
          bDM.material = bEb;
        }
      });
      bEb.vertexColors = bDP.VertexColors;
      bEb.color.set(bDR || 16777215);
      bDN.scale.setScalar(bDQ || 1);
      bDN.position.y += bDT;
      bDN.rotateX(bDV || 0);
      bDN.rotateY(bDX || 0);
      if (bE6) {
        if (bDM[bE6]) {
          bDM.remove(bDM[bE6]);
          bDM[bE6] = null;
        }
        bDM[bE6] = bDN;
        bDM.add(bDM[bE6]);
      } else {
        bDM.add(bDN);
      }
      bE7(bDN);
    });
  });
}
new bDP.BoxBufferGeometry(1, 1, 1);
new bDP.PlaneBufferGeometry(1, 1).rotateX(-Math.PI / 2);
new bDP.StrippedLambertMaterial({
  color: 65280
});
new bDP.StrippedLambertMaterial({
  color: 5592405
});
function bEe(bDM, bDN, bDO, bDQ) {
  var bDS = bDR.generateCube([1, 1, 1, 1, 1, 1], bDM, bDN, bDO, {
    scale: 1,
    amb: bDQ,
    useScale: true
  });
  return bDS = new bDP.BufferGeometry().fromGeometry(bDS);
}
let bEk = (bDM, bDN, bDO, bDQ, bDS, bDT, bDU, bDV, bDW, bDX) => {
  (bDU = bDU || {}).premultipliedAlpha = true;
  var bEe = new bDP.Mesh(bDR.generatePlane(bDT, bDS, bDU, bDN, bDO, bDQ));
  bEe.position.set(bDN, bDO, bDQ);
  bEe.rotateY(bDV || 0);
  bEe.rotateX((bDW || 0) - Math.PI / 2);
  bEe.rotateZ(bDX || 0);
  bEe.scale.set(bDS * 2, bDT * 2, 1);
  bEe.updateMatrix();
  bDM.merge(bEe.geometry, bEe.matrix);
};
let bEl = (bDM, bDN, bDO, bDQ, bDS, bDT, bDU, bDV, bDW) => {
  bDW = bDW || {};
  var bDX = new bDP.Mesh(bDR.generateCube(bDV, bDS, bDT, bDU, bDW));
  bDX.position.set(bDN, bDO, bDQ);
  bDX.rotation.set(bDW.yR || 0, bDW.xR || 0, bDW.zR || 0);
  bDX.scale.set(bDS, bDT, bDU);
  if (bDM instanceof bDP.Geometry) {
    bDX.updateMatrix();
    bDM.merge(bDX.geometry, bDX.matrix);
  } else {
    bDM.add(bDX);
  }
  return bDX;
};
module.exports.prefabs = {
  CRATE: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/crate_0.obj", "textures/crate_0.png", bDQ.crateScale, bDM.color),
    dummy: false,
    castShadow: true,
    receiveShadow: true
  },
  STACK: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/stack_0.obj", "textures/stack_0.png", bDQ.crateScale, bDM.color),
    dummy: false,
    castShadow: true,
    receiveShadow: true
  },
  BARREL: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/barrel_0.obj", "textures/barrel_0.png", bDQ.barrelScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  ACIDBARREL: {
    editColor: true,
    dontRound: true,
    emiss: true,
    gen: bDM => bDX(bDM, "models/acidbarrel_0.obj", "textures/acidbarrel_0.png", bDQ.acidbarrelScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  TREE: {
    editColor: true,
    dontRound: true,
    complex: true,
    gen: bDM => bDX(bDM, "models/tree_0.obj", "textures/tree_0.png", bDQ.treeScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  CONE: {
    editColor: true,
    dontRound: true,
    complex: true,
    gen: bDM => bDX(bDM, "models/cone_0.obj", "textures/cone_0.png", bDQ.coneScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  CONTAINER: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/container_0.obj", "textures/container_0.png", bDQ.containerScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  CONTAINERR: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/containerr_0.obj", "textures/containerr_0.png", bDQ.containerScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  DOOR: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/door_0.obj", "textures/door_0.png", bDQ.doorScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  WINDOW: {
    editColor: true,
    dontRound: true,
    gen: bDM => bDX(bDM, "models/window_0.obj", "textures/window_0.png", bDQ.windowScale, bDM.color),
    castShadow: true,
    transparent: true,
    receiveShadow: true
  },
  GRASS: {
    editColor: true,
    complex: true,
    doubleSide: true,
    transparent: true,
    gen: bDM => bDX(bDM, "models/grass_0.obj", "textures/grass_0.png", bDQ.grassScale, bDM.color),
    receiveShadow: true
  },
  WEAPON_PICKUP: {
    defaultSize: [bDQ.pickupZoneX, bDQ.pickupZoneH, bDQ.pickupZoneZ],
    scalable: false,
    tool: true,
    scaleWithSize: false,
    lineCol: 3595263,
    noTexture: true,
    texturable: false,
    opacity: 0.1,
    genGeo: async (bDM, bDN) => function (bDM, bDN) {
      let bDO = bDR.generateCube([1, 1, 1, 1, 1, 1], ...bDM.size, {
        scale: 1,
        amb: bDN,
        useScale: true
      });
      bDO = new bDP.BufferGeometry().fromGeometry(bDO);
      bDX(bDM, "models/weapons/" + bDT[bDM.weaponId].src + ".obj", "textures/weapons/" + bDT[bDM.weaponId].src + ".png", bDT[bDM.weaponId].scale, 16777215, -0.5, -1.6, 0, "wepMesh");
      return bDO;
    }(bDM, bDN),
    stepSrc: "a"
  },
  VEHICLE: {
    editColor: true,
    dontRound: true,
    complex: true,
    emiss: true,
    gen: bDM => bDX(bDM, "models/vehicle_0.obj", "textures/vehicle_0.png", bDQ.vehicleScale, bDM.color),
    castShadow: true,
    receiveShadow: true
  },
  LADDER: {
    defaultSize: [2, 10, 4],
    scalable: true,
    scaleWithSize: false,
    editColor: true,
    hideBoundingBox: false,
    texturable: true,
    genGeo: async bDM => function (bDM, bDN, bDO, bDR) {
      var bDT = new bDP.Geometry();
      bDR = bDR * Math.PI / 2;
      let bDU = {
        x: 0 + bDQ.ladderScale * Math.cos(bDR),
        z: 0 + bDQ.ladderScale * Math.sin(bDR),
        y: 0 - bDN / 2
      };
      bEl(bDT, bDU.x + bDQ.ladderWidth * Math.sin(bDR), bDU.y, bDU.z + bDQ.ladderWidth * Math.cos(bDR), bDQ.ladderScale * 2, bDN + 2, bDQ.ladderScale * 2, [1, 1, 1, 1, 1, 1], {
        scale: 0.02
      });
      bEl(bDT, bDU.x - bDQ.ladderWidth * Math.sin(bDR), bDU.y, bDU.z - bDQ.ladderWidth * Math.cos(bDR), bDQ.ladderScale * 2, bDN + 2, bDQ.ladderScale * 2, [1, 1, 1, 1, 1, 1], {
        scale: 0.02
      });
      for (var bDV = Math.floor(bDN / 6), bDW = 0; bDW < bDV; ++bDW) {
        bEk(bDT, bDU.x, bDU.y + (bDW + 1) * 6 + bDS.randFloat(-1, 1), bDU.z, bDQ.ladderWidth, bDQ.ladderScale, {
          scale: 0.02
        }, -bDR + Math.PI / 2, Math.PI / 2, bDS.randFloat(-0.1, 0.1));
      }
      return bDT;
    }(...bDM.size, bDM.direction),
    customDirection: true,
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true
  },
  CUBE: {
    canTrigger: true,
    movingTexture: true,
    defaultSize: [10, 10, 10],
    hasHealth: true,
    scalable: true,
    editAmb: true,
    scaleWithSize: false,
    editColor: true,
    editEmissive: true,
    editOpac: true,
    hideBoundingBox: false,
    editPen: true,
    texturable: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true,
    hasBorder: true
  },
  RAMP: {
    defaultSize: [10, 5, 10],
    movingTexture: true,
    scalable: true,
    scaleWithSize: false,
    hideBoundingBox: false,
    boostable: true,
    editColor: true,
    texturable: true,
    genGeo: async bDM => function (bDM, bDN, bDO, bDQ, bDS, bDT, bDU) {
      var bDV = new bDP.Geometry();
      bDN = 0 - bDS / 2;
      var bDW = (bDU = bDU * Math.PI / 2) != 0 && bDU != Math.PI;
      ((bDM, bDN, bDO, bDQ, bDS, bDT, bDU, bDW, bDX) => {
        bDW = bDW || {};
        var bEe = new bDP.Mesh(bDR.generatePlane(bDT * 2, bDQ, bDW));
        bEe.position.set(bDM, bDN + bDS / 2, bDO);
        bDT *= 2;
        var bEk = Math.sqrt(bDS * bDS + bDT * bDT);
        bEe.scale.set(bDQ, bEk, 2);
        bEe.rotateY(-Math.PI / 2 - bDU);
        bEe.rotateX(Math.asin(bDS / bEk) - Math.PI / 2);
        bEe.rotateZ(bDX || 0);
        bEe.updateMatrix();
        bDV.merge(bEe.geometry, bEe.matrix);
      })(bDM, bDN, bDO, bDW ? bDQ : bDT, bDS, (bDW ? bDT : bDQ) / 2, bDU, {
        scale: 1
      });
      return bDV;
    }(0, 0, 0, ...bDM.size, bDM.direction),
    shootable: true,
    customDirection: true,
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true,
    doubleSide: true
  },
  PLANE: {
    defaultSize: [4, 0.01, 4],
    movingTexture: true,
    dontRound: true,
    scalable: true,
    canTerrain: true,
    edgeNoise: true,
    scaleWithSize: true,
    editColor: true,
    editPen: true,
    editEmissive: true,
    editOpac: true,
    hideBoundingBox: false,
    texturable: true,
    genGeo: async bDM => function (bDM, bDN) {
      let bDO = new bDP.PlaneGeometry(bDM, bDN);
      bDO.rotateX(-Math.PI / 2);
      return bDO;
    }(bDM.size[0], bDM.size[2]),
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true,
    doubleSide: true
  },
  OBJECTIVE: {
    defaultSize: [50, 50, 50],
    scalable: true,
    noTexture: true,
    opacity: 0.2,
    lineCol: 13107455,
    tool: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  PARTICLES: {
    defaultSize: [20, 20, 20],
    hasParticles: true,
    scalable: true,
    noTexture: true,
    opacity: 0.3,
    lineCol: 3080191,
    tool: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  BILLBOARD: {
    defaultSize: [40, 0.01, 10],
    lineCol: 16776960,
    dontRound: true,
    scalable: true,
    canTerrain: true,
    scaleWithSize: true,
    hideBoundingBox: false,
    genGeo: async bDM => function (bDM, bDN, bDO, bDQ, bDR, bDS) {
      var bDT = new bDP.Geometry();
      bEk(bDT, bDM, bDN, bDO, bDQ / 2, bDS / 2);
      return bDT;
    }(0, 0, 0, ...bDM.size),
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true,
    doubleSide: true
  },
  SCORE_ZONE: {
    customScore: true,
    defaultSize: [10, 10, 10],
    scalable: true,
    noTexture: true,
    opacity: 0.3,
    lineCol: 16776960,
    tool: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  DEATH_ZONE: {
    defaultSize: [10, 10, 10],
    scalable: true,
    noTexture: true,
    opacity: 0.3,
    lineCol: 16711680,
    tool: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  SPAWN_POINT: {
    scalable: false,
    alwaysSee: true,
    tool: true,
    scaleWithSize: false,
    teamable: true,
    noTexture: true,
    opacity: 0.00001,
    stepSrc: "a",
    customDirection: true,
    dontRound: true,
    genGeo: async (bDM, bDN) => function (bDM, bDN) {
      bDX(bDM, "models/spawn_0.obj", "textures/spawn_0.png", 1, 16777215, -5.5, 0, -((bDM.direction || 0) + 1) * Math.PI / 2, "spwnMesh");
      let bDO = bDR.generateCube([1, 1, 1, 1, 1, 1], 7, 11, 7, {
        scale: 1,
        amb: bDN,
        transparent: true,
        useScale: true,
        depthWrite: false,
        side: 2
      });
      return bDO = new bDP.BufferGeometry().fromGeometry(bDO);
    }(bDM, bDN),
    dummy: false,
    castShadow: false,
    receiveShadow: false
  },
  CHECK_POINT: {
    defaultSize: [10, 10, 10],
    scalable: true,
    noTexture: true,
    opacity: 0.3,
    lineCol: 252613,
    tool: true,
    customDirection: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  TELEPORTER: {
    hasSignals: true,
    defaultSize: [10, 10, 10],
    scalable: true,
    noTexture: true,
    opacity: 0.3,
    lineCol: 11665392,
    tool: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  },
  CAMERA_POSITION: {
    defaultSize: [2, 2, 2],
    scalable: false,
    alwaysSee: true,
    tool: true,
    scaleWithSize: false,
    hideBoundingBox: true,
    editorGen: bDM => function (bDM, bDN, bDO) {
      let bDQ = new bDP.TextureLoader().load(bDS.versionifyUrl(bDN));
      bDQ.magFilter = bDP.NearestFilter;
      let bDR = new bDP.SpriteMaterial({
        map: bDQ,
        color: 16777215
      });
      let bDT = new bDP.Sprite(bDR);
      if (bDO) {
        bDT.scale.set(bDO, bDO, 1);
      }
      bDM.add(bDT);
    }(bDM, "img/crosshair.png", 5),
    stepSrc: "a",
    dummy: false,
    castShadow: false,
    receiveShadow: false
  },
  FLAG: {
    defaultSize: [bDQ.flagZoneS, bDQ.flagZoneH, bDQ.flagZoneS],
    scalable: false,
    tool: true,
    scaleWithSize: false,
    lineCol: 13107455,
    teamable: true,
    noDefault: true,
    genGeo: async (bDM, bDN) => function (bDM, bDN) {
      bDX(bDM, "models/crystal_0.obj", "textures/crystal_0.png", bDQ.flagScale, 16777215, bDQ.flagOff / 2);
      var bDO = bDR.generateCube([1, 1, 0, 0, 1, 1], ...bDM.size, {
        scale: 1,
        amb: bDN,
        useScale: true,
        transparent: true,
        depthWrite: false,
        side: 2
      });
      return bDO = new bDP.BufferGeometry().fromGeometry(bDO);
    }(bDM, bDN),
    stepSrc: "a",
    dummy: false,
    castShadow: false,
    receiveShadow: false
  },
  POINT_GATE: {
    interact: true,
    customScore: true,
    movingTexture: true,
    defaultSize: [10, 10, 10],
    scalable: true,
    forceCollision: true,
    editAmb: true,
    scaleWithSize: false,
    editColor: true,
    editEmissive: true,
    editOpac: true,
    lineCol: 16711935,
    texturable: true,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a",
    dummy: false,
    castShadow: true,
    receiveShadow: true,
    complex: true,
    hasBorder: true
  },
  PLACEHOLDER: {
    defaultSize: [10, 10, 10],
    scalable: true,
    noTexture: true,
    noExport: true,
    tool: true,
    opacity: 0.1,
    lineCol: 0,
    genGeo: async (bDM, bDN) => bEe(...bDM.size, bDN),
    stepSrc: "a"
  }
};
module.exports.texturePrefabs = {
  WALL: {
    src: "wall_0",
    filter: bDP.NearestFilter
  },
  DIRT: {
    src: "dirt_0",
    filter: bDP.NearestFilter
  },
  FLOOR: {
    src: "floor_0",
    filter: bDP.NearestFilter
  },
  GRID: {
    src: "grid_0",
    filter: bDP.NearestFilter
  },
  GREY: {
    src: "grey_0",
    filter: bDP.NearestFilter
  },
  DEFAULT: {
    src: "default",
    filter: bDP.NearestFilter
  },
  ROOF: {
    src: "roof_0",
    filter: bDP.NearestFilter
  },
  FLAG: {
    src: "flag_0",
    filter: bDP.NearestFilter
  },
  CHECK: {
    src: "check_0",
    filter: bDP.NearestFilter
  },
  GRASS: {
    src: "grass_1",
    filter: bDP.NearestFilter
  },
  LINES: {
    src: "lines_0",
    filter: bDP.NearestFilter
  },
  BRICK: {
    src: "brick_0",
    filter: bDP.NearestFilter
  },
  LINK: {
    src: "link_0",
    trans: true,
    filter: bDP.NearestFilter
  }
};
let bGd = bDM => ({
  src: bDM,
  filter: bDP.NearestFilter
});
module.exports.loadTexturePrefab = function (bDN, bDO = null) {
  let bDR = bDO.objType == "BILLBOARD" ? bGd("pubs/b_" + (bDO.poster || bDS.randInt(1, bDQ.billboardCnt))) : module.exports.texturePrefabs[bDN];
  if ((bDR = bDO.objType == "FLAG" ? bGd("zone_r") : bDR).src == "default") {
    return undefined;
  } else {
    return bDU.load(bDS.versionifyUrl("/textures/" + bDR.src + ".png"), bDM => {
      bDM.wrapS = bDP.RepeatWrapping;
      bDM.wrapT = bDP.RepeatWrapping;
      bDM.minFilter = bDR.filter;
      bDM.magFilter = bDR.filter;
      bDM.needsUpdate = true;
    });
  }
};