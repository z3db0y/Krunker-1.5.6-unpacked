var bqx = require("./4.js");
const bqy = require("./7.js");
require("./8.js");
var bqz = {};
module.exports.getColor = function (bqu, bqv) {
  var bqw = bqu + "-" + (bqv || "");
  var bqy = bqz[bqw];
  if (!bqy) {
    bqy = new bqx.Color(bqu);
    if (bqv) {
      bqy.multiplyScalar(bqv);
    }
    bqz[bqw] = bqy;
  }
  return bqy;
};
module.exports.colorize = function (bqv, bqw, bqx) {
  bqw = bqx || module.exports.getColor(bqw);
  for (var bqy = 0; bqy < bqv.faces.length; ++bqy) {
    bqv.faces[bqy].vertexColors[0] = bqw;
    bqv.faces[bqy].vertexColors[1] = bqw;
    bqv.faces[bqy].vertexColors[2] = bqw;
  }
};
var bqI;
function bqJ(bqu, bqv, bqw, bqy) {
  for (var bqz, bqI = new bqx.Vector2(bqv, bqw).multiplyScalar(bqy || 1), bqJ = 0; bqJ < bqu.faceVertexUvs.length; bqJ++) {
    bqz = bqu.faceVertexUvs[bqJ];
    for (var bqK = 0; bqK < bqz.length; bqK++) {
      for (var bqL, bqM = 0; bqM < 3; bqM++) {
        (bqL = bqz[bqK][bqM].multiply(bqI)).x = 0.5 + bqL.x - bqI.x / 2;
      }
    }
  }
}
function bqK(bqu, bqv, bqw, bqx, bqy, bqz) {
  return bqu >= bqw - bqy && bqu <= bqw + bqy && bqv >= bqx - bqz && bqv <= bqx + bqz;
}
var bqL = [];
var bqM = ["a", "b", "c", "d"];
module.exports.generatePlane = function (bqv, bqw, bqz, br6, br7, br8) {
  bqv *= bqz.ratio || 1;
  var br9 = (bqz.scale ? bqv + "_" + bqw + "_" : "") + (bqz.scale || "") + (bqz.tilesX || "") + (bqz.tilesZ || "") + (bqz.noise ? br6 + "_" + br7 + "_" + br8 : "") + (bqz.colr == null ? "" : bqz.colr) + (bqz.dark || "");
  if (!(bqI = bqL[br9])) {
    bqI = new bqx.PlaneGeometry(1, 1, bqz.tilesX || 1, bqz.tilesZ || 1);
    if (bqz.noise) {
      for (var bra = {}, brb = bqz.margin || 0, brc = 0; brc < bqI.vertices.length; ++brc) {
        var brd = bqI.vertices[brc].x;
        var bre = bqI.vertices[brc].y;
        if (!bqz.pinEdges || brd != -0.5 && brd != 0.5 && bre != -0.5 && bre != 0.5) {
          if (bqz.objects) {
            for (var brf = 0; brf < bqz.objects.length; ++brf) {
              if (bqz.objects[brf].y - bqz.objects[brf].height <= br7 + 0.1 && bqz.objects[brf].y + bqz.objects[brf].height > br7 + bqz.noise && bqK(br8 + -bre * bqv * 2, br6 + brd * bqw * 2, bqz.objects[brf].z, bqz.objects[brf].x, bqz.objects[brf].length + brb, bqz.objects[brf].width + brb)) {
                bqI.vertices[brc].z = Math.random() * bqz.noise + 1;
                bra[brc] = module.exports.getColor(bqz.colr, 0.6);
                break;
              }
            }
          } else {
            bqI.vertices[brc].z = Math.random() * bqz.noise;
          }
        }
        bra[brc] ||= module.exports.getColor(bqz.colr);
      }
      for (brc = 0; brc < bqI.faces.length; brc++) {
        for (var brg = bqI.faces[brc], brh = 0, bri = 0; bri < 3; bri++) {
          brg.vertexColors[bri] = bra[brg[bqM[bri]]];
          if (bqI.vertices[brg[bqM[bri]]].z <= 0) {
            brh++;
          }
        }
        if (brh >= 3) {
          delete bqI.faces[brc];
        }
      }
      bqI.faces = bqI.faces.filter(function (bqu) {
        return bqu;
      });
      bqI.elementsNeedUpdate = true;
    } else {
      module.exports.colorize(bqI, null, module.exports.getColor(bqz.colr || 16777215, bqz.dark || 1));
    }
    if (bqz.scale) {
      bqJ(bqI, bqw / bqy.worldUV, bqv / bqy.worldUV, bqz.scale);
    }
    bqI.computeVertexNormals();
    bqL[br9] = bqI;
  }
  return bqI;
};
var brk = [];
module.exports.generateCube = function (bqv, bqw, bqz, bqK, bqL) {
  bqv = bqv || [1, 1, 1, 1, 1, 1];
  bqL.flipp = (bqw > bqz || bqK > bqz) && bqL.src == "floor_0";
  bqL.flippW = bqw > bqK && bqL.src == "floor_0";
  for (var bqM = (bqL.scale ? bqw + "_" + bqz + "_" + bqK + "_" : "") + (bqL.colr == null ? "" : bqL.colr) + (bqL.scale || "") + (bqL.flippW ? "flw" : "fnw") + (bqL.flipp ? "fl" : "fn") + (bqL.amb || "") + (bqL.fAmb || "") + (bqL.useScale || ""), brr = 0; brr < bqv.length; ++brr) {
    bqM += "_" + bqv[brr];
  }
  if (!(bqI = brk[bqM])) {
    bqL.colr = bqL.colr == null ? 16777215 : bqL.colr;
    var brs = module.exports.getColor(bqL.colr);
    var brt = bqL.amb ? module.exports.getColor(bqL.colr, bqL.amb) : brs;
    if (bqL.fAmb) {
      var bru = brs;
      brs = brt;
      brt = bru;
    }
    bqI = new bqx.Geometry();
    var brv;
    var brw = [];
    if (bqv[0]) {
      (brv = new bqx.PlaneGeometry(1, 1)).rotateY(Math.PI / 2);
      if (bqL.flipp) {
        brv.rotateX(Math.PI / 2);
      }
      brv.translate(0.5, 0.5, 0);
      brv.faces[0].vertexColors = [brs, brt, brs];
      brv.faces[1].vertexColors = [brt, brt, brs];
      if (bqL.scale) {
        bqJ(brv, (bqL.flipp ? bqz : bqK) / bqy.worldUV, (bqL.flipp ? bqK : bqz) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    if (bqv[1]) {
      (brv = new bqx.PlaneGeometry(1, 1)).rotateY(-Math.PI / 2);
      if (bqL.flipp) {
        brv.rotateX(Math.PI / 2);
      }
      brv.translate(-0.5, 0.5, 0);
      brv.faces[0].vertexColors = [brs, brt, brs];
      brv.faces[1].vertexColors = [brt, brt, brs];
      if (bqL.scale) {
        bqJ(brv, (bqL.flipp ? bqz : bqK) / bqy.worldUV, (bqL.flipp ? bqK : bqz) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    if (bqv[2]) {
      (brv = new bqx.PlaneGeometry(1, 1)).rotateX(-Math.PI / 2);
      if (bqL.flippW) {
        brv.rotateY(Math.PI / 2);
      }
      brv.translate(0, 1, 0);
      brv.faces[0].vertexColors = [brs, brs, brs];
      brv.faces[1].vertexColors = [brs, brs, brs];
      if (bqL.scale) {
        bqJ(brv, (bqL.flippW ? bqK : bqw) / bqy.worldUV, (bqL.flippW ? bqw : bqK) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    if (bqv[3]) {
      (brv = new bqx.PlaneGeometry(1, 1)).rotateX(Math.PI / 2);
      if (bqL.flippW) {
        brv.rotateY(Math.PI / 2);
      }
      brv.translate(0, 0, 0);
      brv.faces[0].vertexColors = [brt, brt, brt];
      brv.faces[1].vertexColors = [brt, brt, brt];
      if (bqL.scale) {
        bqJ(brv, (bqL.flippW ? bqK : bqw) / bqy.worldUV, (bqL.flippW ? bqw : bqK) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    if (bqv[4]) {
      brv = new bqx.PlaneGeometry(1, 1);
      if (bqL.flipp) {
        brv.rotateZ(Math.PI / 2);
      }
      brv.translate(0, 0.5, 0.5);
      brv.faces[0].vertexColors = [brs, brt, brs];
      brv.faces[1].vertexColors = [brt, brt, brs];
      if (bqL.scale) {
        bqJ(brv, (bqL.flipp ? bqz : bqw) / bqy.worldUV, (bqL.flipp ? bqw : bqz) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    if (bqv[5]) {
      (brv = new bqx.PlaneGeometry(1, 1)).rotateY(Math.PI);
      if (bqL.flipp) {
        brv.rotateZ(Math.PI / 2);
      }
      brv.translate(0, 0.5, -0.5);
      brv.faces[0].vertexColors = [brs, brt, brs];
      brv.faces[1].vertexColors = [brt, brt, brs];
      if (bqL.scale) {
        bqJ(brv, (bqL.flipp ? bqz : bqw) / bqy.worldUV, (bqL.flipp ? bqw : bqz) / bqy.worldUV, bqL.scale);
      }
      brw.push(brv);
    }
    for (brr = 0; brr < brw.length; brr++) {
      bqI.merge(brw[brr], new bqx.Matrix4());
    }
    if (bqL && bqL.useScale) {
      bqI.scale(bqw, bqz, bqK);
      bqI.translate(0, -bqz / 2, 0);
    }
    brk[bqM] = bqI;
  }
  return bqI;
};