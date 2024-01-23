const bRU = require("./4.js");
require("./8.js");
const bRV = require("./65.js");
const bRW = require("./66.js").easing;
let bRX;
let bRY = typeof location != "undefined";
if (bRY) {
  bRX = new bRU.StrippedLambertMaterial({
    color: 9211020,
    flatShading: false,
    vertexColors: bRU.VertexColors
  });
}
const bRZ = {
  GRASS: 0,
  MOUNTAIN: 1
};
const bS0 = Object.keys(bRZ).length;
const bS1 = {
  [bRZ.GRASS]: [56, 226, 102],
  [bRZ.MOUNTAIN]: [160, 160, 160]
};
const bS2 = {
  DIRT: [140, 104, 53],
  GRASS: [155, 186, 46],
  MOUNTAIN: [160, 160, 160]
};
const bS3 = bRR => bRR.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (bRR, bRS, bRT, bRU) => "#" + bRS + bRS + bRT + bRT + bRU + bRU).substring(1).match(/.{2}/g).map(bRR => parseInt(bRR, 16));
const bS4 = 60;
const bS5 = 3;
class bSc extends bRU.Object3D {
  static fromConfig(bRR) {
    return new bSc(bRR.terrainSeed, bRR.terrainWidth, bRR.terrainHeight, bRR.sizeMlt, bRR.terrainMntMlt, bRR.terrainDrtCol, bRR.terrainGrsCol, bRR.terrainMntCol);
  }
  constructor(bRR, bRS, bRT, bRW, bRZ, bS1, bSc, bSl) {
    super();
    bRW = bS5;
    this.sizeMlt = bRW;
    this.sizeX = bRS;
    this.sizeY = bRT;
    this.edgeSize = 500;
    this.mntMlt = bRZ;
    bS2.DIRT = bS3(bS1);
    bS2.MOUNTAIN = bS3(bSl);
    bS2.GRASS = bS3(bSc);
    this.simplex = new bRV(bRR);
    let bSm = Math.floor(bRS / bS4);
    let bSn = Math.floor(bRT / bS4);
    this.xSegmentCount = bSm;
    this.ySegmentCount = bSn;
    let bSo = bRS / bSm;
    let bSp = bRT / bSn;
    this.xSegmentSize = bSo;
    this.ySegmentSize = bSp;
    let bSq = new bRU.BufferGeometry();
    let bSr = bSm * bSn * 6;
    let bSs = new bRU.BufferAttribute(new Float32Array(bSr * 3), 3);
    bSq.addAttribute("position", bSs);
    let bSt = new bRU.BufferAttribute(new Uint8Array(bSr * 3), 3, true);
    bSq.addAttribute("color", bSt);
    this.vertPositions = bSs;
    this.terrainPoints = (bSm + 1) * (bSn + 1);
    this.terrainHeights = new Float32Array(this.terrainPoints);
    this.terrainBiomes = new Float32Array(this.terrainPoints * bS0);
    for (let bRR = 0; bRR < bSm + 1; bRR++) {
      for (let bRU = 0; bRU < bSn + 1; bRU++) {
        let bRV = bRR + bRU * (bSm + 1);
        let bRW = this._vertPos(bRR, bSo, bRS);
        let bRX = this._vertPos(bRU, bSp, bRT);
        let [bRY, bRZ] = this.evaluate(bRW, bRX);
        this.terrainHeights[bRV] = bRY;
        this.terrainBiomes.set(bRZ, bRV * bS0);
      }
    }
    for (let bRR = 0; bRR < bSm; bRR++) {
      for (let bRU = 0; bRU < bSn; bRU++) {
        let bRV = (bRR + bRU * bSm) * 6;
        let bRW = this._vertPos(bRR, bSo, bRS);
        let bRX = this._vertPos(bRU, bSp, bRT);
        let bRY = [bRW, bRX, this.terrainHeight(bRR, bRU)];
        let bRZ = [bRW + bSo, bRX, this.terrainHeight(bRR + 1, bRU)];
        let bS0 = [bRW + bSo, bRX + bSp, this.terrainHeight(bRR + 1, bRU + 1)];
        let bS1 = [bRW, bRX + bSp, this.terrainHeight(bRR, bRU + 1)];
        let bS2 = this.calcAOWeight(bRR, bRU);
        let bS3 = this.calcAOWeight(bRR + 1, bRU);
        let bS4 = this.calcAOWeight(bRR + 1, bRU + 1);
        let bS5 = this.calcAOWeight(bRR, bRU + 1);
        bSs.setXYZ(bRV, ...bRY);
        bSs.setXYZ(bRV + 1, ...bRZ);
        bSs.setXYZ(bRV + 2, ...bS0);
        bSs.setXYZ(bRV + 3, ...bS0);
        bSs.setXYZ(bRV + 4, ...bS1);
        bSs.setXYZ(bRV + 5, ...bRY);
        let bSc = this._centroid3D(bRY, bRZ, bS0);
        let bSl = this._centroid3D(bS0, bS1, bRY);
        let bSn = this._normal3D(bRY, bRZ, bS0);
        let bSq = this._normal3D(bS0, bS1, bRY);
        let bSr = this.terrainBiomeAt(bSc);
        let bST = this.terrainBiomeAt(bSl);
        let bSU = this.evaluateColor(bSc, bSn, bSr);
        let bSV = this.evaluateColor(bSl, bSq, bST);
        bSt.setXYZ(bRV, ...this._weightColor(bSU, bS2));
        bSt.setXYZ(bRV + 1, ...this._weightColor(bSU, bS3));
        bSt.setXYZ(bRV + 2, ...this._weightColor(bSU, bS4));
        bSt.setXYZ(bRV + 3, ...this._weightColor(bSV, bS4));
        bSt.setXYZ(bRV + 4, ...this._weightColor(bSV, bS5));
        bSt.setXYZ(bRV + 5, ...this._weightColor(bSV, bS2));
      }
    }
    if (bRY) {
      bSq.computeVertexNormals(true);
      bSq.computeFaceNormals();
      this.baseMesh = new bRU.Mesh(bSq, bRX);
      this.baseMesh.receiveShadow = true;
      this.baseMesh.scale.set(bRW, bRW, 1);
      this.add(this.baseMesh);
    }
    this._raycastRay = new bRU.Ray();
    this._raycastTriA = new bRU.Vector3();
    this._raycastTriB = new bRU.Vector3();
    this._raycastTriC = new bRU.Vector3();
    this._raycastTriangle = new bRU.Triangle();
    this._raycastNormal = new bRU.Vector3();
    this._raycastTarget = new bRU.Vector3();
    this._raycastClosestTarget = new bRU.Vector3();
  }
  terrainIndex(bRR, bRS) {
    let bRT = bRR + bRS * (this.xSegmentCount + 1);
    if (bRT < 0 || bRT >= this.terrainHeights.length) {
      return 0;
    } else {
      return bRT;
    }
  }
  terrainHeight(bRR, bRS) {
    return this.terrainHeights[this.terrainIndex(bRR, bRS)];
  }
  terrainBiome(bRR, bRS) {
    let bRT = this.terrainIndex(bRR, bRS) * bS0;
    return this.terrainBiomes.slice(bRT, bRT + bS0);
  }
  terrainBiomeAt(bRR, bRS) {
    let bRT = Math.floor(bRR / this.xSegmentSize);
    let bRU = Math.ceil(bRR / this.xSegmentSize);
    let bRV = Math.floor(bRS / this.ySegmentSize);
    let bRW = Math.ceil(bRS / this.ySegmentSize);
    return (this.terrainBiome(bRT, bRV) + this.terrainBiome(bRU, bRV) + this.terrainBiome(bRT, bRW) + this.terrainBiome(bRU, bRW)) / 4;
  }
  calcAOWeight(bRR, bRS) {
    let bRT = this._vertPos(bRR, this.xSegmentSize, this.sizeX);
    let bRU = this._vertPos(bRS, this.ySegmentSize, this.sizeY);
    let bRV = this._topAngleOnTerrain(bRT - this.xSegmentSize, this.terrainHeight(bRR - 1, bRS), bRT, this.terrainHeight(bRR, bRS), bRT + this.xSegmentSize, this.terrainHeight(bRR + 1, bRS));
    let bRW = this._topAngleOnTerrain(bRU - this.xSegmentSize, this.terrainHeight(bRR, bRS - 1), bRU, this.terrainHeight(bRR, bRS), bRU + this.ySegmentSize, this.terrainHeight(bRR, bRS + 1));
    let bRX = Math.PI;
    let bRY = 1 - (1 - Math.max(bRX - bRV, 0) / bRX) * (1 - Math.max(bRX - bRW, 0) / bRX);
    if (bRY >= 0.5) {
      bRY = 0.65;
    } else if (bRY >= 0.2) {
      bRY = 0.3;
    } else if (bRY >= 0.1) {
      bRY = 0.25;
    }
    return bRY;
  }
  _worldToLocal(bRR, bRS, bRT) {
    return (bRR + bRS / 2) / bRT;
  }
  raycast(bRR, bRS, bRT, bRU, bRV, bRW, bRX = false) {
    bRR /= this.sizeMlt;
    bRS /= this.sizeMlt;
    bRU /= this.sizeMlt;
    bRV /= this.sizeMlt;
    let bRY = Math.sqrt(bRU * bRU + bRV * bRV + bRW * bRW);
    this._raycastRay.origin.set(bRR, bRS, bRT);
    this._raycastRay.direction.set(bRU, bRV, bRW);
    let bRZ;
    let bS0;
    let bS1;
    let bS2 = this._worldToLocal(bRR, this.sizeX, this.xSegmentSize);
    let bS3 = this._worldToLocal(bRS, this.sizeY, this.ySegmentSize);
    let bS4 = bS2 + bRU / this.xSegmentSize;
    let bS5 = bS3 + bRV / this.ySegmentSize;
    let bSc = Math.abs(bS4 - bS2);
    let bTB = Math.abs(bS5 - bS3);
    let bTC = Math.floor(bS2);
    let bTD = Math.floor(bS3);
    let bTE = 1;
    if (bSc == 0) {
      bRZ = 0;
      bS1 = Number.POSITIVE_INFINITY;
    } else if (bS4 > bS2) {
      bRZ = 1;
      bTE += Math.floor(bS4) - bTC;
      bS1 = (Math.floor(bS2) + 1 - bS2) * bTB;
    } else {
      bRZ = -1;
      bTE += bTC - Math.floor(bS4);
      bS1 = (bS2 - Math.floor(bS2)) * bTB;
    }
    if (bTB == 0) {
      bS0 = 0;
      bS1 -= Number.POSITIVE_INFINITY;
    } else if (bS5 > bS3) {
      bS0 = 1;
      bTE += Math.floor(bS5) - bTD;
      bS1 -= (Math.floor(bS3) + 1 - bS3) * bSc;
    } else {
      bS0 = -1;
      bTE += bTD - Math.floor(bS5);
      bS1 -= (bS3 - Math.floor(bS3)) * bSc;
    }
    for (; bTE > 0; bTE--) {
      if (this._raycastVisit(bTC, bTD, bRR, bRS, bRT, bRU, bRV, bRW, bRY, bRX)) {
        let bRR = this._raycastClosestTarget;
        bRR.x *= this.sizeMlt;
        bRR.y *= this.sizeMlt;
        return bRR;
      }
      if (bS1 > 0) {
        bTD += bS0;
        bS1 -= bSc;
      } else {
        bTC += bRZ;
        bS1 += bTB;
      }
    }
  }
  _raycastVisit(bRR, bRS, bRT, bRU, bRV, bRW, bRX, bRY, bRZ, bS0) {
    let bS1 = bRR + bRS * this.xSegmentCount;
    let bS2 = Number.POSITIVE_INFINITY;
    let bS3 = false;
    for (let bRR, bRS = 0; bRS < 2; bRS++) {
      bRR = bS1 * 6 + bRS * 3;
      this._raycastTriA.set(this.vertPositions.getX(bRR), this.vertPositions.getY(bRR), this.vertPositions.getZ(bRR));
      this._raycastTriB.set(this.vertPositions.getX(bRR + 1), this.vertPositions.getY(bRR + 1), this.vertPositions.getZ(bRR + 1));
      this._raycastTriC.set(this.vertPositions.getX(bRR + 2), this.vertPositions.getY(bRR + 2), this.vertPositions.getZ(bRR + 2));
      let bRT = this._raycastRay.intersectTriangle(this._raycastTriA, this._raycastTriB, this._raycastTriC, true, this._raycastTarget);
      if (bRT) {
        let bRR = bRT.distanceTo(this._raycastRay.origin);
        if (bRR < bS2 && bRR < bRZ) {
          bS2 = bRR;
          bS3 = true;
          this._raycastClosestTarget.copy(bRT);
          this._raycastTriangle.set(this._raycastTriA, this._raycastTriB, this._raycastTriC);
        }
      }
    }
    if (bS0 && bS3) {
      this._raycastTriangle.getNormal(this._raycastNormal);
    }
    return bS3;
  }
  evaluate(bRR, bRS) {
    let bRT = 0;
    this.sampleIndex = 0;
    let bRU = [];
    for (let bRT = 0; bRT < bS0; bRT++) {
      bRU.push(this._sample(bRR, bRS, 1300));
    }
    let bRV = bRU.reduce((bRR, bRS) => bRR + bRS, 0);
    bRU = (bRU = bRU.map((bRR, bRS) => [bRS, bRR / bRV])).sort((bRR, bRS) => bRS[1] - bRR[1]);
    let bRW = {};
    let [bRX, bRY] = bRU[0];
    bRW[bRX] = this._easeTerrain(bRY / (bRY + bRU[1][1]));
    for (let bRR = 1; bRR < bRU.length; bRR++) {
      let [bRS, bRT] = bRU[bRR];
      bRW[bRS] = this._easeTerrain(bRT / (bRY + bRT));
    }
    let bS1 = this._sample(bRR, bRS, 300);
    bRT += (bS1 = Math.floor(bS1 * 3) / 3) * 25 * bRW[bRZ.GRASS] * this.sizeMlt;
    let bS2 = 0.4 + this._sample(bRR, bRS, 200) * 0.3;
    bRT += (1 - Math.abs(bS2 - this._sample(bRR, bRS, 500)) * 2) * (0.4 + this._sample(bRR, bRS, 400) * 1.4) * (this.mntMlt * 220) * bRW[bRZ.MOUNTAIN] * this.sizeMlt;
    let bS3 = this._calcEdgeFade(bRR, this.sizeX) * this._calcEdgeFade(bRS, this.sizeY);
    bRT *= bS3;
    bRT += (bS3 - 1) * 2000;
    if (Math.abs(bRR) >= this.sizeX / 2 || Math.abs(bRS) >= this.sizeY / 2) {
      bRT = -1000;
    }
    return [bRT, bRW];
  }
  evaluateColor(bRR, bRS, bRT) {
    let bRU;
    let bRV = bRR[2];
    let bRW = Math.atan2(Math.abs(bRS[0]), Math.abs(bRS[2]));
    let bRX = Math.atan2(Math.abs(bRS[1]), Math.abs(bRS[2]));
    return bRU = (1 - bRW / (Math.PI * 2)) * (1 - bRX / (Math.PI * 2)) <= 0.85 ? bS2.MOUNTAIN : bRV > 100 ? bS2.MOUNTAIN : bRV > 5 ? bS2.GRASS : bS2.DIRT;
  }
  _sample(bRR, bRS, bRT) {
    this.sampleIndex++;
    return this.simplex.noise3D(bRR / bRT, bRS / bRT, this.sampleIndex * 10000) / 2 + 0.5;
  }
  _easeTerrain(bRR) {
    return bRW.easeInOutQuint(bRW.easeInOutQuint(bRR));
  }
  _calcEdgeFade(bRR, bRS) {
    if (Math.abs(bRR) >= bRS / 2) {
      return 0;
    }
    let bRT = (Math.abs(bRR) - bRS / 2 + this.edgeSize) / this.edgeSize;
    bRT = 1 - Math.max(bRT, 0);
    return bRW.easeOutQuint(bRT);
  }
  _blendColors(bRR) {
    let bRS = Object.values(bRR).reduce((bRR, bRS) => bRR + bRS, 0);
    let bRT = [0, 0, 0];
    for (let bRU in bRR) {
      let bRV = bS1[bRU];
      let bRW = bRR[bRU] / bRS;
      for (let bRR = 0; bRR < 3; bRR++) {
        bRT[bRR] += bRV[bRR] * bRW;
      }
    }
    return bRT;
  }
  _vertPos(bRR, bRS, bRT) {
    return bRR * bRS - bRT / 2;
  }
  _avgPos(bRR, bRS) {
    return [(bRR[0] + bRS[0]) / 2, (bRR[1] + bRS[1]) / 2, (bRR[2] + bRS[2]) / 2];
  }
  _centroid3D(bRR, bRS, bRT) {
    return [(bRR[0] + bRS[0] + bRT[0]) / 3, (bRR[1] + bRS[1] + bRT[1]) / 3, (bRR[2] + bRS[2] + bRT[2]) / 3];
  }
  _normal3D(bRR, bRS, bRT) {
    let bRU = bRT[0] - bRS[0];
    let bRV = bRT[1] - bRS[1];
    let bRW = bRT[2] - bRS[2];
    let bRX = bRR[0] - bRS[0];
    let bRY = bRR[1] - bRS[1];
    let bRZ = bRR[2] - bRS[2];
    let bS0 = bRV * bRZ - bRW * bRY;
    let bS1 = bRW * bRX - bRU * bRZ;
    let bS2 = bRU * bRY - bRV * bRX;
    let bS3 = Math.sqrt(bS0 * bS0 + bS1 * bS1 + bS2 + bS2);
    return [bS0 / bS3, bS1 / bS3, bS2 / bS3];
  }
  _topAngleOnTerrain(bRR, bRS, bRT, bRU, bRV, bRW) {
    let bRX = Math.atan2(bRS - bRU, bRR - bRT);
    let bRY = Math.atan2(bRW - bRU, bRV - bRT);
    if (bRX < 0) {
      bRX += Math.PI * 2;
    }
    return bRX - bRY;
  }
  _weightColor(bRR, bRS) {
    return bRR.map(bRR => bRR * (1 - bRS));
  }
}
module.exports = bSc;