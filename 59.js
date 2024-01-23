const bVe = require("./4.js");
const bVf = require("./8.js");
const bVg = 32;
var bVh;
var bVi;
const bVj = true;
const bVk = "y";
const bVl = [{
  stp: 0,
  col: null
}, {
  stp: 0.5,
  col: null
}, {
  stp: 1,
  col: null
}];
const bVm = 2.5;
const bVn = 1000;
class bVo extends bVe.Object3D {
  static fromConfig(bVb, bVc) {
    return new bVo(bVb.zoneSize, bVb.zoneSpeed, bVb.zoneCol0, bVb.zoneCol1, bVb.zoneCol2, bVc);
  }
  constructor(bVb, bVc, bVd, bVn, bVo, bVw) {
    super();
    this._size = bVb || 50;
    this._shrink = bVm * (bVc || 1);
    if (bVw) {
      bVh ||= new bVe.TextureLoader().load(bVf.versionifyUrl("/textures/zone_0.png"), bVb => {
        bVb.wrapS = bVe.RepeatWrapping;
        bVb.wrapT = bVe.RepeatWrapping;
        bVb.minFilter = bVe.NearestFilter;
        bVb.magFilter = bVe.NearestFilter;
        bVb.repeat.set(20, 20);
        bVb.needsUpdate = true;
      });
      bVi ||= new bVe.MeshBasicMaterial({
        color: 16777215,
        depthWrite: false,
        flatShading: false,
        map: bVh,
        vertexColors: bVe.VertexColors,
        side: bVe.DoubleSide,
        transparent: true,
        opacity: 0.5
      });
      bVl[0].col = new bVe.Color(bVd || "#3FB1B7");
      bVl[1].col = new bVe.Color(bVn || "#6FE1CD");
      bVl[2].col = new bVe.Color(bVo || "#FFFFFF");
      let bVb = new bVe.SphereGeometry(1, bVg, bVg);
      bVb.computeBoundingBox();
      let bVc = bVb.boundingBox;
      let bVm = new bVe.Vector3().subVectors(bVc.max, bVc.min);
      let bVw = ["a", "b", "c"];
      let bVC = new bVe.Vector3();
      let bVD = 0;
      for (let bVd, bVe = 0; bVe < bVl.length - 1; bVe++) {
        bVd = bVl[bVe + 1].stp - bVl[bVe].stp;
        for (let bVf, bVg = 0; bVg < bVb.faces.length; bVg++) {
          bVf = bVb.faces[bVg];
          for (var bVI = 0; bVI < 3; bVI++) {
            bVD = bVC.subVectors(bVb.vertices[bVf[bVw[bVI]]], bVc.min).divide(bVm)[bVk];
            if (bVj) {
              bVD = 1 - bVD;
            }
            if (bVD >= bVl[bVe].stp && bVD <= bVl[bVe + 1].stp) {
              bVf.vertexColors[bVI] = bVl[bVe].col.clone().lerp(bVl[bVe + 1].col, (bVD - bVl[bVe].stp) / bVd);
            }
          }
        }
      }
      bVb.computeVertexNormals(true);
      bVb.computeFaceNormals();
      this.baseMesh = new bVe.Mesh(bVb, bVi);
    }
    this.reset();
    if (bVw) {
      this.add(this.baseMesh);
    }
  }
  shrink() {
    if (this.scale.x <= 0) {
      this.visible = false;
    } else {
      this.scale.x -= this._shrink;
      this.scale.z -= this._shrink;
    }
  }
  animate(bVb) {
    if (this.baseMesh && this.baseMesh.material.map) {
      this.baseMesh.material.map.offset.y += bVb * 0.00003;
    }
  }
  update(bVb) {
    this.scale.set(bVb.x, bVn, bVb.z);
    if (this.scale.x <= 0) {
      this.visible = false;
    }
  }
  reset() {
    this.scale.set(this._size, bVn, this._size);
    this.visible = true;
  }
  isOutside(bVb) {
    return bVf.getDistance(bVb.x, bVb.z, this.position.x, this.position.z) > this.scale.x;
  }
}
module.exports = bVo;