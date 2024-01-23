module.exports = function (bVT) {
  return function () {
    function bVU() {
      var bVT = {
        objects: [],
        object: {},
        vertices: [],
        normals: [],
        colors: [],
        uvs: [],
        materialLibraries: [],
        startObject: function (bVT, bVU) {
          if (this.object && this.object.fromDeclaration === false) {
            this.object.name = bVT;
            this.object.fromDeclaration = bVU !== false;
            return;
          }
          var bW0 = this.object && typeof this.object.currentMaterial == "function" ? this.object.currentMaterial() : undefined;
          if (this.object && typeof this.object._finalize == "function") {
            this.object._finalize(true);
          }
          this.object = {
            name: bVT || "",
            fromDeclaration: bVU !== false,
            geometry: {
              vertices: [],
              normals: [],
              colors: [],
              uvs: []
            },
            materials: [],
            smooth: true,
            startMaterial: function (bVT, bVU) {
              var bW0 = this._finalize(false);
              if (bW0 && (bW0.inherited || bW0.groupCount <= 0)) {
                this.materials.splice(bW0.index, 1);
              }
              var bW4 = {
                index: this.materials.length,
                name: bVT || "",
                mtllib: Array.isArray(bVU) && bVU.length > 0 ? bVU[bVU.length - 1] : "",
                smooth: bW0 === undefined ? this.smooth : bW0.smooth,
                groupStart: bW0 === undefined ? 0 : bW0.groupEnd,
                groupEnd: -1,
                groupCount: -1,
                inherited: false,
                clone: function (bVT) {
                  var bVU = {
                    index: typeof bVT == "number" ? bVT : this.index,
                    name: this.name,
                    mtllib: this.mtllib,
                    smooth: this.smooth,
                    groupStart: 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: false
                  };
                  bVU.clone = this.clone.bind(bVU);
                  return bVU;
                }
              };
              this.materials.push(bW4);
              return bW4;
            },
            currentMaterial: function () {
              if (this.materials.length > 0) {
                return this.materials[this.materials.length - 1];
              } else {
                return undefined;
              }
            },
            _finalize: function (bVT) {
              var bVU = this.currentMaterial();
              if (bVU && bVU.groupEnd === -1) {
                bVU.groupEnd = this.geometry.vertices.length / 3;
                bVU.groupCount = bVU.groupEnd - bVU.groupStart;
                bVU.inherited = false;
              }
              if (bVT && this.materials.length > 1) {
                for (var bW0 = this.materials.length - 1; bW0 >= 0; bW0--) {
                  if (this.materials[bW0].groupCount <= 0) {
                    this.materials.splice(bW0, 1);
                  }
                }
              }
              if (bVT && this.materials.length === 0) {
                this.materials.push({
                  name: "",
                  smooth: this.smooth
                });
              }
              return bVU;
            }
          };
          if (bW0 && bW0.name && typeof bW0.clone == "function") {
            var bWa = bW0.clone(0);
            bWa.inherited = true;
            this.object.materials.push(bWa);
          }
          this.objects.push(this.object);
        },
        finalize: function () {
          if (this.object && typeof this.object._finalize == "function") {
            this.object._finalize(true);
          }
        },
        parseVertexIndex: function (bVT, bVU) {
          var bWd = parseInt(bVT, 10);
          return (bWd >= 0 ? bWd - 1 : bWd + bVU / 3) * 3;
        },
        parseNormalIndex: function (bVT, bVU) {
          var bWg = parseInt(bVT, 10);
          return (bWg >= 0 ? bWg - 1 : bWg + bVU / 3) * 3;
        },
        parseUVIndex: function (bVT, bVU) {
          var bWj = parseInt(bVT, 10);
          return (bWj >= 0 ? bWj - 1 : bWj + bVU / 2) * 2;
        },
        addVertex: function (bVT, bVU, bWm) {
          var bWn = this.vertices;
          var bWo = this.object.geometry.vertices;
          bWo.push(bWn[bVT + 0], bWn[bVT + 1], bWn[bVT + 2]);
          bWo.push(bWn[bVU + 0], bWn[bVU + 1], bWn[bVU + 2]);
          bWo.push(bWn[bWm + 0], bWn[bWm + 1], bWn[bWm + 2]);
        },
        addVertexPoint: function (bVT) {
          var bVU = this.vertices;
          this.object.geometry.vertices.push(bVU[bVT + 0], bVU[bVT + 1], bVU[bVT + 2]);
        },
        addVertexLine: function (bVT) {
          var bVU = this.vertices;
          this.object.geometry.vertices.push(bVU[bVT + 0], bVU[bVT + 1], bVU[bVT + 2]);
        },
        addNormal: function (bVT, bVU, bWv) {
          var bWw = this.normals;
          var bWx = this.object.geometry.normals;
          bWx.push(bWw[bVT + 0], bWw[bVT + 1], bWw[bVT + 2]);
          bWx.push(bWw[bVU + 0], bWw[bVU + 1], bWw[bVU + 2]);
          bWx.push(bWw[bWv + 0], bWw[bWv + 1], bWw[bWv + 2]);
        },
        addColor: function (bVT, bVU, bWA) {
          var bWB = this.colors;
          var bWC = this.object.geometry.colors;
          bWC.push(bWB[bVT + 0], bWB[bVT + 1], bWB[bVT + 2]);
          bWC.push(bWB[bVU + 0], bWB[bVU + 1], bWB[bVU + 2]);
          bWC.push(bWB[bWA + 0], bWB[bWA + 1], bWB[bWA + 2]);
        },
        addUV: function (bVT, bVU, bWF) {
          var bWG = this.uvs;
          var bWH = this.object.geometry.uvs;
          bWH.push(bWG[bVT + 0], bWG[bVT + 1]);
          bWH.push(bWG[bVU + 0], bWG[bVU + 1]);
          bWH.push(bWG[bWF + 0], bWG[bWF + 1]);
        },
        addUVLine: function (bVT) {
          var bVU = this.uvs;
          this.object.geometry.uvs.push(bVU[bVT + 0], bVU[bVT + 1]);
        },
        addFace: function (bVT, bVU, bWM, bWN, bWO, bWP, bWQ, bWR, bWS) {
          var bWT = this.vertices.length;
          var bWU = this.parseVertexIndex(bVT, bWT);
          var bWV = this.parseVertexIndex(bVU, bWT);
          var bWW = this.parseVertexIndex(bWM, bWT);
          this.addVertex(bWU, bWV, bWW);
          if (bWN !== undefined && bWN !== "") {
            var bWX = this.uvs.length;
            bWU = this.parseUVIndex(bWN, bWX);
            bWV = this.parseUVIndex(bWO, bWX);
            bWW = this.parseUVIndex(bWP, bWX);
            this.addUV(bWU, bWV, bWW);
          }
          if (bWQ !== undefined && bWQ !== "") {
            var bWY = this.normals.length;
            bWU = this.parseNormalIndex(bWQ, bWY);
            bWV = bWQ === bWR ? bWU : this.parseNormalIndex(bWR, bWY);
            bWW = bWQ === bWS ? bWU : this.parseNormalIndex(bWS, bWY);
            this.addNormal(bWU, bWV, bWW);
          }
          if (this.colors.length > 0) {
            this.addColor(bWU, bWV, bWW);
          }
        },
        addPointGeometry: function (bVT) {
          this.object.geometry.type = "Points";
          for (var bVU = this.vertices.length, bX1 = 0, bX2 = bVT.length; bX1 < bX2; bX1++) {
            this.addVertexPoint(this.parseVertexIndex(bVT[bX1], bVU));
          }
        },
        addLineGeometry: function (bVT, bVU) {
          this.object.geometry.type = "Line";
          for (var bX5 = this.vertices.length, bX6 = this.uvs.length, bX7 = 0, bX8 = bVT.length; bX7 < bX8; bX7++) {
            this.addVertexLine(this.parseVertexIndex(bVT[bX7], bX5));
          }
          var bX9 = 0;
          for (bX8 = bVU.length; bX9 < bX8; bX9++) {
            this.addUVLine(this.parseUVIndex(bVU[bX9], bX6));
          }
        }
      };
      bVT.startObject("", false);
      return bVT;
    }
    function bXa(bVU) {
      this.manager = bVU === undefined ? bVT.DefaultLoadingManager : bVU;
      this.materials = null;
    }
    var bXc = /^[og]\s*(.+)?/;
    var bXd = /^mtllib /;
    var bXe = /^usemtl /;
    bXa.prototype = {
      constructor: bXa,
      load: function (bVU, bXa, bXc, bXd) {
        var bXe = this;
        var bXk = new bVT.FileLoader(bXe.manager);
        bXk.setPath(this.path);
        bXk.load(bVU, function (bVT) {
          bXa(bXe.parse(bVT));
        }, bXc, bXd);
      },
      setPath: function (bVT) {
        this.path = bVT;
        return this;
      },
      setMaterials: function (bVT) {
        this.materials = bVT;
        return this;
      },
      parse: function (bXa) {
        console.time("OBJLoader");
        var bXp = new bVU();
        if (bXa.indexOf("\r\n") !== -1) {
          bXa = bXa.replace(/\r\n/g, "\n");
        }
        if (bXa.indexOf("\\\n") !== -1) {
          bXa = bXa.replace(/\\\n/g, "");
        }
        for (var bXq = bXa.split("\n"), bXr = "", bXs = "", bXt = [], bXu = typeof "".trimLeft == "function", bXv = 0, bXw = bXq.length; bXv < bXw; bXv++) {
          bXr = bXq[bXv];
          if ((bXr = bXu ? bXr.trimLeft() : bXr.trim()).length !== 0 && (bXs = bXr.charAt(0)) !== "#") {
            if (bXs === "v") {
              var bXx = bXr.split(/\s+/);
              switch (bXx[0]) {
                case "v":
                  bXp.vertices.push(parseFloat(bXx[1]), parseFloat(bXx[2]), parseFloat(bXx[3]));
                  if (bXx.length === 8) {
                    bXp.colors.push(parseFloat(bXx[4]), parseFloat(bXx[5]), parseFloat(bXx[6]));
                  }
                  break;
                case "vn":
                  bXp.normals.push(parseFloat(bXx[1]), parseFloat(bXx[2]), parseFloat(bXx[3]));
                  break;
                case "vt":
                  bXp.uvs.push(parseFloat(bXx[1]), parseFloat(bXx[2]));
              }
            } else if (bXs === "f") {
              for (var bXy, bXz = bXr.substr(1).trim().split(/\s+/), bXA = [], bXB = 0, bXC = bXz.length; bXB < bXC; bXB++) {
                if ((bXy = bXz[bXB]).length > 0) {
                  var bXD = bXy.split("/");
                  bXA.push(bXD);
                }
              }
              var bXE = bXA[0];
              bXB = 1;
              bXC = bXA.length - 1;
              for (; bXB < bXC; bXB++) {
                var bXF = bXA[bXB];
                var bXG = bXA[bXB + 1];
                bXp.addFace(bXE[0], bXF[0], bXG[0], bXE[1], bXF[1], bXG[1], bXE[2], bXF[2], bXG[2]);
              }
            } else if (bXs === "l") {
              var bXH = bXr.substring(1).trim().split(" ");
              var bXI = [];
              var bXJ = [];
              if (bXr.indexOf("/") === -1) {
                bXI = bXH;
              } else {
                for (var bXK, bXL = 0, bXM = bXH.length; bXL < bXM; bXL++) {
                  if ((bXK = bXH[bXL].split("/"))[0] !== "") {
                    bXI.push(bXK[0]);
                  }
                  if (bXK[1] !== "") {
                    bXJ.push(bXK[1]);
                  }
                }
              }
              bXp.addLineGeometry(bXI, bXJ);
            } else if (bXs === "p") {
              var bXN = bXr.substr(1).trim().split(" ");
              bXp.addPointGeometry(bXN);
            } else if ((bXt = bXc.exec(bXr)) !== null) {
              var bXO = (" " + bXt[0].substr(1).trim()).substr(1);
              bXp.startObject(bXO);
            } else if (bXe.test(bXr)) {
              bXp.object.startMaterial(bXr.substring(7).trim(), bXp.materialLibraries);
            } else if (bXd.test(bXr)) {
              bXp.materialLibraries.push(bXr.substring(7).trim());
            } else {
              if (bXs !== "s") {
                if (bXr === "\0") {
                  continue;
                }
                throw new Error("THREE.OBJLoader: Unexpected line: \"" + bXr + "\"");
              }
              if ((bXt = bXr.split(" ")).length > 1) {
                var bXP = bXt[1].trim().toLowerCase();
                bXp.object.smooth = bXP !== "0" && bXP !== "off";
              } else {
                bXp.object.smooth = true;
              }
              if (bY3 = bXp.object.currentMaterial()) {
                bY3.smooth = bXp.object.smooth;
              }
            }
          }
        }
        bXp.finalize();
        var bXQ = new bVT.Group();
        bXQ.materialLibraries = [].concat(bXp.materialLibraries);
        bXv = 0;
        bXw = bXp.objects.length;
        for (; bXv < bXw; bXv++) {
          var bXR = bXp.objects[bXv];
          var bXS = bXR.geometry;
          var bXT = bXR.materials;
          var bXU = bXS.type === "Line";
          var bXV = bXS.type === "Points";
          var bXW = false;
          if (bXS.vertices.length !== 0) {
            var bXX;
            var bXY = new bVT.BufferGeometry();
            bXY.addAttribute("position", new bVT.Float32BufferAttribute(bXS.vertices, 3));
            if (bXS.normals.length > 0) {
              bXY.addAttribute("normal", new bVT.Float32BufferAttribute(bXS.normals, 3));
            } else {
              bXY.computeVertexNormals();
            }
            if (bXS.colors.length > 0) {
              bXW = true;
              bXY.addAttribute("color", new bVT.Float32BufferAttribute(bXS.colors, 3));
            }
            if (bXS.uvs.length > 0) {
              bXY.addAttribute("uv", new bVT.Float32BufferAttribute(bXS.uvs, 2));
            }
            for (var bXZ = [], bY0 = 0, bY1 = bXT.length; bY0 < bY1; bY0++) {
              var bY2 = bXT[bY0];
              var bY3 = undefined;
              if (this.materials !== null) {
                bY3 = this.materials.create(bY2.name);
                if (!bXU || !bY3 || bY3 instanceof bVT.LineBasicMaterial) {
                  if (bXV && bY3 && !(bY3 instanceof bVT.PointsMaterial)) {
                    var bY4 = new bVT.PointsMaterial({
                      size: 10,
                      sizeAttenuation: false
                    });
                    bY5.copy(bY3);
                    bY3 = bY4;
                  }
                } else {
                  var bY5 = new bVT.LineBasicMaterial();
                  bY5.copy(bY3);
                  bY5.lights = false;
                  bY3 = bY5;
                }
              }
              if (!bY3) {
                (bY3 = bXU ? new bVT.LineBasicMaterial() : bXV ? new bVT.PointsMaterial({
                  size: 1,
                  sizeAttenuation: false
                }) : new bVT.MeshPhongMaterial()).name = bY2.name;
              }
              bY3.flatShading = !bY2.smooth;
              bY3.vertexColors = bXW ? bVT.VertexColors : bVT.NoColors;
              bXZ.push(bY3);
            }
            if (bXZ.length > 1) {
              bY0 = 0;
              bY1 = bXT.length;
              for (; bY0 < bY1; bY0++) {
                bY2 = bXT[bY0];
                bXY.addGroup(bY2.groupStart, bY2.groupCount, bY0);
              }
              bXX = bXU ? new bVT.LineSegments(bXY, bXZ) : bXV ? new bVT.Points(bXY, bXZ) : new bVT.Mesh(bXY, bXZ);
            } else {
              bXX = bXU ? new bVT.LineSegments(bXY, bXZ[0]) : bXV ? new bVT.Points(bXY, bXZ[0]) : new bVT.Mesh(bXY, bXZ[0]);
            }
            bXX.name = bXR.name;
            bXQ.add(bXX);
          }
        }
        console.timeEnd("OBJLoader");
        return bXQ;
      }
    };
    return bXa;
  }();
};