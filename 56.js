var bNl;
var bNm = require("./7.js");
var THREE = require("./4.js");
var bNo = require("./57.js");
module.exports = function (THREE, bNm, bNn, bNs) {
  this.newGeo = function (bNi) {
    return bNi.stack.match(bNm.picSize) || !bNi.stack.match(bNm.picSize2);
  };
  THREE.ImageUtils.crossOrigin = "";
  var bNu = require("./23.js");
  var bNv = new THREE.LoadingManager();
  var bNw = new THREE.OBJLoader(bNv);
  this.cubeGeo = new THREE.BoxGeometry(1, 1, 1);
  this.getCubeMesh = function () {
    return new THREE.Mesh(this.cubeGeo);
  };
  var bNx = new THREE.PlaneGeometry(1, 1);
  new THREE.CylinderGeometry(0.1, 1, 1, 4, 1, false, Math.PI / 4).computeFlatVertexNormals();
  var bNy = new THREE.TextureLoader();
  var bNz = new THREE.MeshBasicMaterial({
    color: 16777215
  });
  var bNA = new THREE.MeshBasicMaterial({
    color: 65280
  });
  var bNB = {};
  var bNC = {};
  var bND = {};
  this.movTextures = [];
  var bNE;
  var bNF = this;
  var bNG = {};
  this.frustum = new THREE.Frustum();
  var bNH = new THREE.Matrix4();
  this.camera = new THREE.PerspectiveCamera(0, window.innerWidth / window.innerHeight, 0.1, 6000);
  this.fpsCamera = new THREE.PerspectiveCamera(bNn.fov, window.innerWidth / window.innerHeight, 0.1, 300);
  this.fpsCamera.layers.set(1);
  this.camera.add(this.fpsCamera);
  this.weaponLean = 1;
  this.init = function (bNk) {
    this.clearPendingMeshes();
    this.scene = new THREE.Scene();
    this.backgroundScene = new THREE.Scene();
    if (bNk.skyDome) {
      this.skyDome = bNo.fromConfig(bNk);
      this.backgroundScene.add(this.skyDome);
    }
    module.exports.initScene.call(this, bNk);
  };
  var bNJ = 0;
  this.flash = function (bNi, bNj) {
    bNs.showFlash = true;
    bNs.flashX = bNi;
    bNs.flashY = 1 - bNj;
    bNJ = 1;
  };
  this.updateLightMap = function (bNi) {
    if (this.skyLight) {
      this.skyLight.shadow.camera.right = bNi.shadWidth;
      this.skyLight.shadow.camera.left = -bNi.shadWidth;
      this.skyLight.shadow.camera.top = bNi.shadLength;
      this.skyLight.shadow.camera.bottom = -bNi.shadLength;
    }
  };
  this.useDepthMap = 0;
  this.toggleDepthMap = function (bNk) {
    this.useDepthMap = bNk;
    if (this.scene) {
      var bNm = bNk && bNk != "0";
      this.scene.overrideMaterial = bNm ? bNz : null;
      if (bNm) {
        this.scene.fog = new THREE.Fog(0, 0, bNk);
        this.renderer.setClearColor(0);
      } else {
        module.exports.initScene.call(this, bNl);
      }
    }
  };
  this.greenScreen = false;
  this.updateGreenScreen = function (bNi) {
    if (bNF.greenScreen && !bNi.noGreen) {
      bNi.realMat = bNi.material;
      bNi.material = bNA;
    } else {
      bNi.material = bNi.realMat || bNi.material;
    }
  };
  this.toggleGreenscreen = function (bNi) {
    this.greenScreen = bNi;
    if (this.scene) {
      if (bNi) {
        this.renderer.setClearColor(65280);
        this.scene.fog.near = 0.1;
        this.scene.fog.far = 0;
      } else {
        this.scene.fog.near = 1;
        this.scene.fog.far = bNl.fogD;
        this.renderer.setClearColor(bNl.sky);
      }
      this.scene.traverse(function (bNi) {
        bNF.updateGreenScreen(bNi);
      });
    }
  };
  this.renderer = new THREE.WebGLRenderer({
    precision: "mediump",
    powerPreference: "high-performance",
    antialias: false
  });
  this.renderer.shadowMap.enabled = true;
  this.renderer.shadowMap.autoUpdate = false;
  this.renderer.shadowMap.type = THREE.BasicShadowMap;
  this.renderer.setPixelRatio(window.devicePixelRatio);
  this.renderer.setSize(window.innerWidth, window.innerHeight);
  this.renderer.autoClear = false;
  document.body.appendChild(this.renderer.domElement);
  this.updateShadowMap = function () {
    this.renderer.shadowMap.needsUpdate = true;
  };
  window.effectComposer;
  this.bloomPass;
  this.postprocessing = {
    enabled: false
  };
  this.initShaders = function () {
    var bNi = new THREE.RenderPass(this.scene, this.camera);
    this.bloomPass = new THREE.UnrealBloomPass(new THREE.Vector2(window.innerWidth, window.innerHeight), 1.5, 0.4, 0.85);
    this.bloomPass.renderToScreen = true;
    this.bloomPass.strength = this.postprocessing.bloomStrength;
    this.bloomPass.radius = this.postprocessing.bloomRadius;
    this.bloomPass.threshold = this.postprocessing.bloomTresh;
    window.effectComposer = new THREE.EffectComposer(this.renderer);
    window.effectComposer.addPass(bNi);
    window.effectComposer.addPass(this.bloomPass);
    this.resizeShaders();
  };
  this.resizeShaders = function () {
    if (this.bloomPass) {
      this.bloomPass.setSize(window.innerWidth, window.innerHeight);
    }
    if (window.effectComposer) {
      var bNi = this.renderer.getPixelRatio();
      var bNj = Math.floor(window.innerWidth / bNi) || 1;
      var bNk = Math.floor(window.innerHeight / bNi) || 1;
      window.effectComposer.setSize(bNj, bNk);
    }
  };
  this.zoomVal = 1;
  this.zoom = function (bNi) {
    this.zoomVal = bNi;
    this.updateCamFOV();
    this.fpsCamera.fov = this.fpsFov / bNi;
    this.fpsCamera.updateProjectionMatrix();
  };
  this.setFPSFov = function (bNi) {
    this.fpsFov = bNi;
    this.fpsCamera.fov = bNi;
    this.fpsCamera.updateProjectionMatrix();
  };
  this.setFPSFov(bNn.fov);
  this.fovMult = function (bNi) {
    if (this.fovMlt != bNi) {
      this.fovMlt = bNi;
      this.updateCamFOV();
    }
  };
  this.fovMlt = 1;
  this.updateCamFOV = function () {
    this.camera.fov = this.fov / this.zoomVal * this.fovMlt;
    this.camera.updateProjectionMatrix();
  };
  this.setFov = function (bNi) {
    this.fov = bNi;
    this.updateCamFOV();
  };
  this.setFov(bNn.fov);
  this.resize = function () {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.fpsCamera.aspect = window.innerWidth / window.innerHeight;
    this.fpsCamera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.resizeShaders();
  };
  this.resMltV = 1;
  this.setResMlt = function (bNi) {
    this.resMltV = bNi;
    this.renderer.setPixelRatio(window.devicePixelRatio * this.resMltV);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
  };
  this.updateFrustum = function () {
    this.frustum.setFromMatrix(bNH.multiplyMatrices(this.camera.projectionMatrix, this.camera.matrixWorldInverse));
  };
  var bO1 = 0;
  var bO2 = 0;
  this.shakeX = 0;
  this.shakeY = 0;
  this.updateShake = function (bNi) {
    if (bO1) {
      bO1 *= Math.pow(0.99, bNi);
      bO2 += bNm.randFloat(-Math.PI, Math.PI);
      this.shakeX = Math.cos(bO2) * bO1;
      this.shakeY = Math.sin(bO2) * bO1;
      if (bO1 <= 0.01) {
        bO1 = 0;
        this.shakeX = this.shakeY = 0;
      }
    }
  };
  this.shake = function (bNi) {
    bO1 = bNi;
  };
  this.render = function (bNi) {
    if (this.scene) {
      for (var bNj = 0; bNj < this.movTextures.length; ++bNj) {
        if ((bNE = this.movTextures[bNj]).tex.offset) {
          bNE.tex.offset[bNE.movD == 0 ? "x" : "y"] += bNE.mov * bNi;
        }
      }
      if (!this.postprocessing.enabled) {
        this.renderer.clear();
        this.camera.layers.set(0);
        if (this.skyDome) {
          this.camera.getWorldPosition(this.skyDome.position);
          this.renderer.render(this.backgroundScene, this.camera);
          this.renderer.clearDepth();
        }
        this.renderer.render(this.scene, this.camera);
        this.camera.layers.set(2);
        this.renderer.clearDepth();
        this.renderer.render(this.scene, this.camera);
        this.renderer.clearDepth();
        this.renderer.render(this.scene, this.fpsCamera);
      }
      if (bNs.showFlash) {
        if (bNJ <= 0) {
          bNJ = 0;
          bNs.showFlash = false;
        }
        bNJ -= bNi;
      }
      this.updateShake(bNi);
    }
  };
  this.updateTexture = function (bNi, bNk, bNl) {
    bNl = bNl || {};
    var bNm = 0;
    for (var bNn in bND) {
      if (bNn.substring(0, bNi.length) == bNi) {
        bNm++;
        bND[bNn].image = bNk;
        bND[bNn].needsUpdate = true;
      }
    }
    if (!bNm) {
      var bNo = bNi + (bNl.movT == null ? "mt" : bNl.movT) + (bNl.movD == null ? "md" : bNl.movD);
      var bNs = bND[bNo];
      bNs = new THREE.Texture(bNk);
      bND[bNo] = bNs;
      bND[bNo].needsUpdate = true;
    }
  };
  this.loadTexture = function (bNi, bNk, bNl, bNn) {
    var bNo = bNk + ((bNl = bNl || {}).movT == null ? "mt" : bNl.movT) + (bNl.movD == null ? "md" : bNl.movD);
    if (bND[bNo]) {
      if (bND[bNo].mats) {
        bND[bNo].mats.push({
          t: bNn,
          m: bNi
        });
      } else {
        bNi[bNn || "map"] = bND[bNo];
        bNi.needsUpdate = true;
      }
    } else {
      bND[bNo] = {
        mats: [{
          t: bNn,
          m: bNi
        }]
      };
      bNy.load(bNm.versionifyUrl("/textures/" + bNk + ".png"), bNi => {
        bNi.wrapS = THREE.RepeatWrapping;
        bNi.wrapT = THREE.RepeatWrapping;
        bNi.repeat.set(bNl.repeatX || 1, bNl.repeatY || 1);
        bNi.minFilter = bNl.tFilter || THREE.NearestFilter;
        bNi.magFilter = bNl.tFilter || THREE.NearestFilter;
        bNi.needsUpdate = true;
        for (var bNk = 0; bNk < bND[bNo].mats.length; ++bNk) {
          bND[bNo].mats[bNk].m[bND[bNo].mats[bNk].t || "map"] = bNi;
          bND[bNo].mats[bNk].m.needsUpdate = true;
        }
        bND[bNo] = bNi;
        if (bNl.movT) {
          this.movTextures.push({
            tex: bNi,
            mov: bNl.movT,
            movD: bNl.movD || 0
          });
        }
      });
    }
    return bNi;
  };
  this.getMat = function (bNi, bNk) {
    var bNl = (bNk && bNk.texSrc || bNi) + (bNk ? (bNk.rotation || "x") + (bNk.noFog || "y") + (bNk.opacity || "z") + (bNk.color || "b") + (bNk.mat ? "ma" : "nm") + (bNk.ao || "a") + (bNk.emissive || "e") + (bNk.glowText || "g") + (bNk.movT == null ? "mt" : bNk.movT) + (bNk.movD == null ? "md" : bNk.movD) + (bNk.depthWrite == null ? "d" : bNk.depthWrite) : "");
    var bNm = bNC[bNl];
    if (!bNm) {
      bNm = new ((bNk = bNk || {}).mat ? bNk.mat : THREE.StrippedLambertMaterial)(bNk);
      if (bNi && bNi != "default") {
        this.loadTexture(bNm, bNk.texSrc || bNi, bNk);
      }
      if (bNk && bNk.emissive) {
        this.loadTexture(bNm, (bNk.glowText && bNk.texSrc || bNi) + (bNk.sameGlow ? "" : "_e"), bNk, "emissiveMap");
      }
      if (bNk && bNk.ao) {
        this.loadTexture(bNm, bNi + "_ao", bNk, "aoMap");
        bNm.aoMapIntensity = 1.3;
      }
      if (bNk && bNk.normal) {
        this.loadTexture(bNm, bNi + "_n", bNk, "normalMap");
      }
      if (bNi == "default") {
        bNm.vertexColors = THREE.VertexColors;
      }
      if (bNk && bNk.noFog) {
        bNm.fog = false;
      }
      bNm.shading = THREE.SmoothShading;
      bNC[bNl] = bNm;
    }
    return bNm;
  };
  this.offsetMesh = function (bNi, bNj) {
    bNi.translateZ(bNj);
  };
  this.genColorCube = function (bNi, bNk, bNl, bNm, bNn, bNo) {
    for (var bNs = (bNo = bNo || {}).us ? "us" : "ns", bNv = 0; bNv < bNm.length; ++bNv) {
      for (var bNw = 0; bNw < bNm[bNv].length; ++bNw) {
        bNs += bNm[bNv][bNw] + "_";
      }
      bNs += "|";
    }
    var bNx = bNB[bNs];
    if (!bNx) {
      bNx = new THREE.Geometry();
      var bNy = 0.5 + (bNn || 0);
      for (bNv = 0; bNv < bNm.length; ++bNv) {
        var bNz = bNm[bNv][1];
        var bNA = bNm[bNv][2] || 1;
        if (bNo.us) {
          bNC = bNu.generateCube([1, 1, 1, 1, 1, 1], 1, 1, 1, {
            colr: bNm[bNv][0],
            fAmb: bNm[bNv][4],
            amb: bNm[bNv][3]
          });
          (bND = new THREE.Mesh(bNC)).scale.set(bNA, bNz, bNA);
          this.moveMesh(bND, 0, bNy - bNz, 0);
        } else {
          var bNC = new THREE.BoxGeometry(bNA, bNz, bNA);
          bNu.colorize(bNC, bNm[bNv][0]);
          bND = new THREE.Mesh(bNC);
          this.moveMesh(bND, 0, bNy - bNz / 2, 0);
        }
        this.merge(bNx, bND);
        bNy -= bNz;
      }
      bNB[bNs] = bNx;
    }
    var bND = new THREE.Mesh(bNx, this.getMat("default"));
    this.scaleMesh(bND, bNi, bNk, bNl);
    return bND;
  };
  var bOG = {};
  this.genBody = function (bNi, bNk, bNl, bNm, bNo) {
    var bNs = bNi + "-" + bNk + "-" + bNl + "-" + bNm;
    var bNu = bOG[bNs];
    if (!bNu) {
      bNu = new THREE.Geometry();
      var bNv = bNn.playerHeight - bNn.headScale - bNn.legHeight;
      var bNw = this.genColorCube(bNn.chestWidth, bNv, bNn.chestScale, [[bNi, 0.8, 1, 0.8], [bNk, 0.2, 1.05]], 0, {
        us: bNo
      });
      this.moveMesh(bNw, 0, bNv / 2, 0);
      this.merge(bNu, bNw);
      var bNx = this.genColorCube(bNn.headScale, bNn.headScale, bNn.headScale, [[bNl, 0.2, 1, 0.6], [bNm, 0.8]], 0, {
        us: bNo
      });
      this.moveMesh(bNx, 0, bNn.playerHeight - bNn.headScale / 2 - bNn.legHeight, 0);
      this.merge(bNu, bNx);
      bNu = new THREE.BufferGeometry().fromGeometry(bNu);
      bOG[bNs] = bNu;
    }
    var bNy = new THREE.Mesh(bNu, this.getMat("default"));
    bNy.receiveShadow = true;
    bNy.noGreen = true;
    return bNy;
  };
  var bOS = {};
  this.genLeg = function (bNi, bNk, bNl, bNm, bNo) {
    var bNs = bNn.legScale;
    var bNu = null;
    if (bNm) {
      var bNv = bNk + "-" + (bNm || "");
      if (!(bNu = bOS[bNv])) {
        var bNw = bNn.legHeight / 2;
        var bNx = bNs / 2;
        var bNy = [0.5, 2];
        var bNz = this.genColorCube(bNs, bNw, bNs, [[bNk, 1]], 0, {
          us: bNo
        });
        this.moveMesh(bNz, 0, -bNw / 2 * Math.cos(bNy[1]), -bNw / 2 * Math.sin(bNy[1]));
        this.rotateMesh(bNz, 0, bNy[1], 0);
        var bNA = Math.sqrt(bNx * bNx + bNx * bNx - bNx * 2 * bNx * Math.cos(bNy[0] - bNy[1]));
        var bNB = Math.sqrt(bNx * bNx - bNA / 2 * (bNA / 2)) * 2;
        var bNC = this.genColorCube(bNs, bNA, bNB, [[bNk, 1]], 0, {
          us: bNo
        });
        this.moveMesh(bNC, 0, -bNw * Math.cos(bNy[1]), -bNw * Math.sin(bNy[1]));
        this.rotateMesh(bNC, 0, (bNy[1] + bNy[0]) / 2, 0);
        var bND = this.genColorCube(bNs, bNw, bNs, [[bNk, 0.5, 1, 0.8], [bNl, 0.5]], 0, {
          us: bNo
        });
        this.moveMesh(bND, 0, -bNw * Math.cos(bNy[1]) - bNw / 2 * Math.cos(bNy[0]), -bNw * Math.sin(bNy[1]) - bNw / 2 * Math.sin(bNy[0]));
        this.rotateMesh(bND, 0, bNy[0], 0);
        bNu = new THREE.Geometry();
        this.merge(bNu, bNz);
        this.merge(bNu, bNC);
        this.merge(bNu, bND);
        bOS[bNv] = bNu;
      }
      bNu = new THREE.BufferGeometry().fromGeometry(bNu);
      bNu = new THREE.Mesh(bNu, this.getMat("default"));
      this.moveMesh(bNu, bNn.legScale / 2 * (bNi ? -1 : 1), bNn.legHeight - bNn.crouchDst + 0.5, 0);
    } else {
      bNu = this.genColorCube(bNs, bNn.legHeight, bNs, [[bNk, 0.75, 1], [bNl, 0.25]], -0.5, {
        us: bNo
      });
      this.moveMesh(bNu, bNn.legScale / 2 * (bNi ? -1 : 1), bNn.legHeight, 0);
    }
    bNu.receiveShadow = true;
    bNu.noGreen = true;
    return bNu;
  };
  var bP9 = {};
  this.genArms = function (bNi, bNk, bNl, bNm, bNo, bNs) {
    var bNu = bP9[bNi.name + "-" + bNl + "-" + bNm + "-" + bNs + "-" + (bNo || 0)];
    if (!bNu) {
      bNu = new THREE.Geometry();
      var bNv = (-bNn.chestWidth + bNn.armScale / 2 - bNn.armInset) * (bNs ? bNi.holdW || 0.4 : 1);
      if (!bNo || bNo == 1) {
        this.merge(bNu, this.genArm(bNv, bNn.armOff, bNi, true, bNk, bNl, bNm, bNs));
      }
      if (!bNo || bNo == 2) {
        this.merge(bNu, this.genArm(-bNv, bNn.armOff, bNi, false, bNk, bNl, bNm, bNs));
      }
      bNu = new THREE.BufferGeometry().fromGeometry(bNu);
      bP9[bNi.name + "-" + bNl + "-" + bNs + "-" + (bNo || 0)] = bNu;
    }
    (bNu = new THREE.Mesh(bNu, this.getMat("default"))).noGreen = true;
    bNu.receiveShadow = true;
    return bNu;
  };
  this.genArm = function (bNi, bNk, bNl, bNo, bNs, bNu, bNv, bNw) {
    var bNx = bNo ? bNl.leftHoldY : bNl.rightHoldY;
    var bNy = bNo ? bNl.leftHoldZ : bNl.rightHoldZ;
    var bNz = bNo ? bNl.leftHoldX || 0 : bNl.rightHoldX || 0;
    var bNA = bNn.armScale * (bNw ? 0.7 : 1);
    var bNB = Math.min(bNn.uArmLength + bNn.lArmLength - 0.01, bNm.getDistance3D(bNi, bNk, 0, (bNl.xOff - bNz) * (bNo && bNl.akimbo ? -1 : 1), bNl.yOff + bNx, bNl.zOff - bNy));
    var bNC = bNm.getAnglesSSS(bNB, bNn.uArmLength, bNn.lArmLength);
    var bND = Math.PI / 2;
    if (!bNw) {
      var bNE = this.genColorCube(bNA, bNn.uArmLength, bNA, [[bNs, 1]], 0, {
        us: bNw
      });
      this.moveMesh(bNE, 0, -bNn.uArmLength / 2 * Math.cos(bND), -bNn.uArmLength / 2 * Math.sin(bND));
      this.rotateMesh(bNE, 0, bND, 0);
      var bNF = bNA / 2;
      var bNG = Math.sqrt(bNF * bNF + bNF * bNF - bNF * 2 * bNF * Math.cos(Math.PI + bNC[0] + Math.PI / 2));
      var bNH = Math.sqrt(bNF * bNF - bNG / 2 * (bNG / 2)) * 2;
      var bNJ = this.genColorCube(bNA, bNG, bNH, [[bNs, 1]], 0, {
        us: bNw
      });
      this.moveMesh(bNJ, 0, -bNn.uArmLength * Math.cos(bND), -bNn.uArmLength * Math.sin(bND));
      this.rotateMesh(bNJ, 0, (bND + bNC[0]) / 2, 0);
    }
    var bO1 = this.genColorCube(bNA, bNn.lArmLength, bNA, [[bNs, 0.65, 1, 0.6], [bNu, 0.15, 1.1], [bNv, 0.2, 1, 0.5, true]], 0, {
      us: bNw
    });
    var bO2 = bNn.lArmLength / 2;
    this.moveMesh(bO1, 0, -bNn.uArmLength * Math.cos(bND) - bO2 * Math.cos(bNC[0]), -bNn.uArmLength * Math.sin(bND) - bO2 * Math.sin(bNC[0]));
    this.rotateMesh(bO1, 0, bNC[0], 0);
    var bOG = new THREE.Geometry();
    if (bNw) {
      var bOS = this.genColorCube(bNA, 20, bNA, [[bNs, 1]], 0, {
        us: bNw
      });
      this.moveMesh(bOS, 0, -bNn.uArmLength * Math.cos(bND) - Math.cos(bNC[0]) * -10, -bNn.uArmLength * Math.sin(bND) - Math.sin(bNC[0]) * -10);
      this.rotateMesh(bOS, 0, bNC[0], 0);
      this.merge(bOG, bOS);
    } else {
      this.merge(bOG, bNE);
      this.merge(bOG, bNJ);
    }
    this.merge(bOG, bO1);
    bOG = new THREE.Mesh(bOG);
    this.moveMesh(bOG, bNi - bNl.xOff, bNk - bNl.yOff, -bNl.zOff);
    bOG.rotation.order = "YXZ";
    bOG.rotation.x = -bNC[1] - bNm.getDirection(0, bNk, bNl.zOff - bNy, bNl.yOff + bNx);
    bOG.rotation.y = bNm.getDirection(-bNi, 0, (bNo && bNl.akimbo ? 1 : -1) * (bNl.xOff - bNz), bNl.zOff - bNy) - Math.PI / 2;
    return bOG;
  };
  this.addCube = function (bNi, bNk, bNl, bNm, bNn, bNo, bNs, bNv) {
    bNv = bNv || {};
    var bNw = new THREE.Mesh(bNu.generateCube(bNs, bNm, bNn, bNo, bNv));
    this.moveMesh(bNw, bNi, bNk, bNl);
    bNw.rotation.set(bNv.yR || 0, bNv.xR || 0, bNv.zR || 0);
    bNw.scale.set(bNm, bNn, bNo);
    if (bNv.src && !bNv.noGroup) {
      this.meshGroup(bNw, bNv);
    } else {
      this.add(bNw, bNv);
    }
    return bNw;
  };
  var bPP = [];
  this.addSpray = function (bNi, bNk, bNl, bNo, bNs, bNu, bNv, bNw) {
    bNE = null;
    for (var bNy = 0; bNy < bPP.length; ++bNy) {
      if (bPP[bNy].sid == bNi) {
        bNE = bPP[bNy];
        break;
      }
    }
    if (!bNE) {
      (bNE = new THREE.Mesh(bNx)).sid = bNi;
      bNE.scale.set(bNn.sprayScale, bNn.sprayScale, 1);
      bNE.receiveShadow = true;
      bPP.push(bNE);
      this.add(bNE);
    }
    this.moveMesh(bNE, bNl, bNo, bNs);
    bNE.rotation.y = bNm.toRad(bNu);
    bNE.rotation.x = bNm.toRad(bNv);
    bNE.material = this.getMat("sprays/" + bNk, {
      depthWrite: false,
      opacity: bNw,
      transparent: true
    });
  };
  this.clearSprays = function () {
    for (var bNi = 0; bNi < bPP.length; ++bNi) {
      if (bPP[bNi] && bPP[bNi].material.map) {
        bPP[bNi].material.map.dispose();
      }
      this.scene.remove(bPP[bNi]);
    }
    bPP.length = 0;
  };
  this.addPlane = function (bNi, bNk, bNl, bNm, bNn, bNo, bNs, bNv, bNw) {
    (bNo = bNo || {}).premultipliedAlpha = true;
    var bNx = new THREE.Mesh(bNu.generatePlane(bNn, bNm, bNo, bNi, bNk, bNl));
    if (bNo.euler) {
      bNx.rotation.order = bNo.euler;
    }
    this.moveMesh(bNx, bNi, bNk, bNl);
    bNx.rotateY(bNs || 0);
    bNx.rotateX((bNv || 0) - Math.PI / 2);
    bNx.rotateZ(bNw || 0);
    bNx.scale.set(bNm * 2, bNn * 2, 1);
    if (bNo.dontAdd) {
      if (bNo.src) {
        bNx.material = this.getMat(bNo.src, bNo);
      }
    } else if (bNo.src && !bNo.noGroup) {
      this.meshGroup(bNx, bNo, 1);
    } else {
      this.add(bNx, bNo);
    }
    return bNx;
  };
  this.addRamp = function (bNi, bNk, bNl, bNm, bNn, bNo, bNs, bNv, bNw) {
    bNv = bNv || {};
    var bNx = new THREE.Mesh(bNu.generatePlane(bNo * 2, bNm, bNv));
    this.moveMesh(bNx, bNi, bNk + bNn / 2, bNl);
    bNo *= 2;
    var bNy = Math.sqrt(bNn * bNn + bNo * bNo);
    bNx.scale.set(bNm, bNy, 2);
    bNx.rotateY(-Math.PI / 2 - bNs);
    bNx.rotateX(Math.asin(bNn / bNy) - Math.PI / 2);
    bNx.rotateZ(bNw || 0);
    if (bNv.src) {
      this.meshGroup(bNx, bNv, 1);
    } else {
      this.add(bNx, bNv);
    }
    return bNx;
  };
  this.addGrass = function (bNi, bNk, bNl, bNm, bNn, bNo, bNs) {
    bNs = bNs || {};
    let bNv = new THREE.Geometry();
    let bNw = Math.PI * 2 * Math.random();
    let bNx = new THREE.Mesh(bNu.generatePlane(bNm, bNn, bNs));
    bNx.rotateY(bNw * (Math.PI / 2));
    this.merge(bNv, bNx);
    let bNy = new THREE.Mesh(bNu.generatePlane(bNm, bNn, bNs));
    bNy.rotateY((bNw + 1) * (Math.PI / 2));
    this.merge(bNv, bNy);
    let bNz = new THREE.Mesh(bNv);
    this.moveMesh(bNz, bNi, bNk + bNn / 2, bNl);
    bNz.rotation.set(bNs.yR || 0, bNs.xR || 0, bNs.zR || 0);
    bNz.scale.set(bNm, bNn, bNo);
    if (bNs.src && !bNs.noGroup) {
      this.meshGroup(bNz, bNs);
    } else {
      this.add(bNz, bNs);
    }
    return bNz;
  };
  var bQx = [];
  var bQy = [];
  this.loadMesh = function (bNi, bNk, bNl, bNn, bNo, bNs, bNu, bNv) {
    var bNx = this.getMat(bNi.src, bNi);
    var bNy = bQx[bNi.src];
    if (bNy) {
      if (bNi.centerZ) {
        bNy.computeBoundingBox();
        var bNz = bNy.boundingBox.getCenter();
        bNu.translateZ(bNz.x * bNs);
      }
    } else {
      bNy = bNv ? new THREE.Geometry() : new THREE.BufferGeometry();
      bQx[bNi.src] = bNy;
      bNw.load(bNm.versionifyUrl("/models/" + bNi.src + ".obj"), function (bNk) {
        bNy.copy(bNv ? new THREE.Geometry().fromBufferGeometry(bNk.children[0].geometry) : bNk.children[0].geometry);
        if (bNi.uv2) {
          bNy.addAttribute("uv2", new THREE.BufferAttribute(bNy.attributes.uv.array, 2));
        }
        if (bNv) {
          for (var bNl = new THREE.Geometry(), bNm = 0; bNm < bQy[bNi.src].length; ++bNm) {
            bNF.merge(bNl, bQy[bNi.src][bNm]);
          }
          bNF.add(new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(bNl), bNx), bNi);
          bQy[bNi.src].length = 0;
          bQy[bNi.src].loaded = true;
        }
        if (bNi.centerZ) {
          bNy.computeBoundingBox();
          var bNn = bNy.boundingBox.getCenter();
          bNu.translateZ(bNn.x * bNs);
        }
      });
    }
    var bNA = new THREE.Mesh(bNy, bNx);
    bNA.receiveShadow = !bNi.noShadow;
    bNA.noGreen = bNi.noGreen;
    bNA.castShadow = bNi.shadows;
    if (typeof bNo == "object") {
      bNA.rotation.x = bNA.xR = bNo[0] || 0;
      bNA.rotation.y = bNA.yR = bNo[1] || 0;
      bNA.rotation.z = bNA.zR = bNo[2] || 0;
    } else {
      bNA.rotation.y = bNo || 0;
    }
    bNA.xP = bNk;
    bNA.yP = bNl;
    bNA.zP = bNn;
    bNF.moveMesh(bNA, bNk, bNl, bNn);
    bNF.scaleMesh(bNA, bNs || 1, bNs || 1, bNs || 1);
    if (bNv) {
      if (bQy[bNi.src]) {
        if (bQy[bNi.src].loaded) {
          this.meshGroup(bNA, bNi);
        } else {
          bQy[bNi.src].push(bNA);
        }
      } else {
        bQy[bNi.src] = [bNA];
      }
    } else {
      bNu.add(bNA);
    }
    return bNA;
  };
  this.clearPendingMeshes = function () {
    for (var bNi in bQy) {
      if (bQy.hasOwnProperty(bNi) && bQy[bNi]) {
        bQy[bNi].length = 0;
      }
    }
  };
  this.updateMesh = function (bNi, bNk) {
    var bNl = bNw.parse(bNk);
    var bNm = new THREE.BufferGeometry();
    bQx[bNi] = bNm;
    bNm.copy(bNl.children[0].geometry);
    bNm.needsUpdate = true;
  };
  this.genObj3D = function (bNi, bNk, bNl) {
    var bNm = new THREE.Object3D();
    this.moveMesh(bNm, bNi || 0, bNk || 0, bNl || 0);
    return bNm;
  };
  this.merge = function (bNi, bNj, bNk) {
    bNj.updateMatrix();
    bNi.merge(bNj.geometry, bNj.matrix, bNk);
  };
  this.meshGroup = function (bNi, bNk) {
    var bNl = bNk.src + "-" + (bNk.shadowsR || "a") + (bNk.emissive || "e") + (bNk.opacity || "o") + (bNk.movT == null ? "mt" : bNk.movT) + (bNk.movD == null ? "md" : bNk.movD);
    if (!bNG[bNl]) {
      bNG[bNl] = new THREE.Geometry();
      bNG[bNl].data = bNk;
    }
    bNi.updateMatrix();
    bNG[bNl].merge(bNi.geometry, bNi.matrix);
  };
  this.addMeshGroups = function () {
    for (var bNi in bNG) {
      if (bNG.hasOwnProperty(bNi)) {
        var bNk = new THREE.Mesh(new THREE.BufferGeometry().fromGeometry(bNG[bNi]));
        bNk.groupSrc = bNG[bNi].data.src;
        bNk.visible = !bR6[bNk.groupSrc];
        bNk.matrixAutoUpdate = false;
        this.add(bNk, bNG[bNi].data);
      }
    }
    bNG = {};
  };
  var bR6 = {};
  this.toggleMeshGroup = function (bNi, bNk) {
    bR6[bNi] = !bNk;
    if (this.scene) {
      this.scene.traverse(function (bNl) {
        if (bNl instanceof THREE.Mesh && bNl.groupSrc == bNi) {
          bNl.visible = bNk;
        }
      });
    }
  };
  this.add = function (bNi, bNj) {
    if (bNj) {
      bNi.castShadow = bNj.shadows;
      bNi.receiveShadow = bNj.shadows || bNj.shadowsR;
      bNi.material = this.getMat(bNj.src, bNj);
    }
    this.updateGreenScreen(bNi);
    this.scene.add(bNi);
    this.updateShadowMap();
  };
  this.remove = function (bNi) {
    this.scene.remove(bNi);
  };
  this.moveMesh = function (bNi, bNj, bNk, bNl) {
    if (bNj != null) {
      bNi.position.x = bNj;
    }
    if (bNk != null) {
      bNi.position.y = bNk;
    }
    if (bNl != null) {
      bNi.position.z = bNl;
    }
  };
  this.scaleMesh = function (bNi, bNj, bNk, bNl) {
    bNi.scale.set(bNj, bNk, bNl);
  };
  this.rotateMesh = function (bNi, bNj, bNk, bNl) {
    if (bNj || bNj == 0) {
      bNi.rotation.y = bNj;
    }
    if (bNk || bNk == 0) {
      bNi.rotation.x = bNk;
    }
    if (bNl || bNl == 0) {
      bNi.rotation.z = bNl;
    }
  };
  this.reset = function () {
    bQx = [];
    bQy = [];
    bNG = {};
    bNC = {};
    bND = {};
    this.movTextures = [];
  };
};
module.exports.initScene = function (bNi) {
  bNl = bNi;
  if (bNi.ambient) {
    this.ambientLight = new THREE.AmbientLight(bNi.ambient);
    this.ambientLight.layers.enable(1);
    this.ambientLight.layers.enable(2);
    this.ambientLight.name = "ambLight";
    if (!this.scene.getObjectByName("ambLight")) {
      this.scene.add(this.ambientLight);
    }
  }
  if (bNi.light) {
    this.skyLight = new THREE.DirectionalLight(bNi.light, 1.3);
    this.skyLight.name = "skyLight";
    this.skyLight.layers.enable(1);
    this.skyLight.layers.enable(2);
    if (!this.scene.getObjectByName("skyLight")) {
      this.scene.add(this.skyLight);
    }
    var bNj = Math.PI * -0.3;
    var bNk = Math.PI * 2 * -0.25;
    this.skyLight.position.x = bNm.lightDistance * Math.cos(bNk);
    this.skyLight.position.y = bNm.lightDistance * Math.sin(bNk) * Math.sin(bNj);
    this.skyLight.position.z = bNm.lightDistance * Math.sin(bNk) * Math.cos(bNj);
    this.skyLight.castShadow = true;
    this.skyLight.shadow.mapSize.width = bNi.shadowR || bNm.shadowRes;
    this.skyLight.shadow.mapSize.height = bNi.shadowR || bNm.shadowRes;
    this.skyLight.shadow.camera.far = bNm.shadowDst;
  }
  this.scene.fog = new THREE.Fog(bNi.fog, 1, bNi.fogD);
  this.renderer.setClearColor(bNi.sky);
  if (this.useDepthMap && this.useDepthMap != "0") {
    this.toggleDepthMap(this.useDepthMap);
  }
  if (this.greenScreen) {
    this.toggleGreenscreen(this.greenScreen);
  }
};