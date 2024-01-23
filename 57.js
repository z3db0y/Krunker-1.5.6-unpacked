const bRv = require("./4.js");
const bRw = new bRv.MeshBasicMaterial({
  color: 16777215,
  flatShading: false,
  vertexColors: bRv.VertexColors,
  side: bRv.BackSide
});
const bRx = 32;
const bRy = true;
const bRz = "y";
const bRA = [{
  stp: 0,
  col: null
}, {
  stp: 0.5,
  col: null
}, {
  stp: 1,
  col: null
}];
class bRB extends bRv.Object3D {
  static fromConfig(bRs) {
    return new bRB(bRs.skyDomeCol0, bRs.skyDomeCol1, bRs.skyDomeCol2);
  }
  constructor(bRs, bRt, bRu) {
    super();
    bRA[0].col = new bRv.Color(bRs || "#3FB1B7");
    bRA[1].col = new bRv.Color(bRt || "#6FE1CD");
    bRA[2].col = new bRv.Color(bRu || "#FFFFFF");
    let bRB = new bRv.SphereGeometry(50, bRx, bRx);
    bRB.computeBoundingBox();
    let bRH = bRB.boundingBox;
    let bRI = new bRv.Vector3().subVectors(bRH.max, bRH.min);
    let bRJ = ["a", "b", "c"];
    let bRK = new bRv.Vector3();
    let bRL = 0;
    for (let bRs, bRt = 0; bRt < bRA.length - 1; bRt++) {
      bRs = bRA[bRt + 1].stp - bRA[bRt].stp;
      for (let bRu, bRv = 0; bRv < bRB.faces.length; bRv++) {
        bRu = bRB.faces[bRv];
        for (var bRQ = 0; bRQ < 3; bRQ++) {
          bRL = bRK.subVectors(bRB.vertices[bRu[bRJ[bRQ]]], bRH.min).divide(bRI)[bRz];
          if (bRy) {
            bRL = 1 - bRL;
          }
          if (bRL >= bRA[bRt].stp && bRL <= bRA[bRt + 1].stp) {
            bRu.vertexColors[bRQ] = bRA[bRt].col.clone().lerp(bRA[bRt + 1].col, (bRL - bRA[bRt].stp) / bRs);
          }
        }
      }
    }
    bRB.computeVertexNormals(true);
    bRB.computeFaceNormals();
    this.baseMesh = new bRv.Mesh(bRB, bRw);
    this.baseMesh.doubleSided = false;
    this.add(this.baseMesh);
  }
}
module.exports = bRB;