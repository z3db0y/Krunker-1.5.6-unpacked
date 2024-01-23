export function EventDispatcher() {}
if (Number.EPSILON === undefined) {
  Number.EPSILON = Math.pow(2, -52);
}
if (Number.isInteger === undefined) {
  Number.isInteger = function (bf) {
    return typeof bf == "number" && isFinite(bf) && Math.floor(bf) === bf;
  };
}
if (Math.sign === undefined) {
  Math.sign = function (bf) {
    if (bf < 0) {
      return -1;
    } else if (bf > 0) {
      return 1;
    } else {
      return +bf;
    }
  };
}
if ("name" in Function.prototype == false) {
  Object.defineProperty(Function.prototype, "name", {
    get: function () {
      return this.toString().match(/^\s*function\s*([^\(\s]*)/)[1];
    }
  });
}
if (Object.assign === undefined) {
  Object.assign = function (bf) {
    if (bf == null) {
      throw new TypeError("Cannot convert undefined or null to object");
    }
    for (var bg = Object(bf), bh = 1; bh < arguments.length; bh++) {
      var bi = arguments[bh];
      if (bi != null) {
        for (var bp in bi) {
          if (Object.prototype.hasOwnProperty.call(bi, bp)) {
            bg[bp] = bi[bp];
          }
        }
      }
    }
    return bg;
  };
}
Object.assign(EventDispatcher.prototype, {
  addEventListener: function (bf, bg) {
    if (this._listeners === undefined) {
      this._listeners = {};
    }
    var bh = this._listeners;
    if (bh[bf] === undefined) {
      bh[bf] = [];
    }
    if (bh[bf].indexOf(bg) === -1) {
      bh[bf].push(bg);
    }
  },
  hasEventListener: function (bf, bg) {
    if (this._listeners === undefined) {
      return false;
    }
    var bh = this._listeners;
    return bh[bf] !== undefined && bh[bf].indexOf(bg) !== -1;
  },
  removeEventListener: function (bf, bg) {
    if (this._listeners !== undefined) {
      var bh = this._listeners[bf];
      if (bh !== undefined) {
        var bi = bh.indexOf(bg);
        if (bi !== -1) {
          bh.splice(bi, 1);
        }
      }
    }
  },
  dispatchEvent: function (bf) {
    if (this._listeners !== undefined) {
      var bg = this._listeners[bf.type];
      if (bg !== undefined) {
        bf.target = this;
        for (var bh = bg.slice(0), bi = 0, bE = bh.length; bi < bE; bi++) {
          bh[bi].call(this, bf);
        }
      }
    }
  }
});
var bF;
var bG;
var bH;
export var REVISION = "105";
export var MOUSE = {
  LEFT: 0,
  MIDDLE: 1,
  RIGHT: 2
};
export var CullFaceNone = 0;
export var CullFaceBack = 1;
export var CullFaceFront = 2;
export var CullFaceFrontBack = 3;
export var FrontFaceDirectionCW = 0;
export var FrontFaceDirectionCCW = 1;
export var BasicShadowMap = 0;
export var PCFShadowMap = 1;
export var PCFSoftShadowMap = 2;
export var FrontSide = 0;
export var BackSide = 1;
export var DoubleSide = 2;
export var FlatShading = 1;
export var SmoothShading = 2;
export var NoColors = 0;
export var FaceColors = 1;
export var VertexColors = 2;
export var NoBlending = 0;
export var NormalBlending = 1;
export var AdditiveBlending = 2;
export var SubtractiveBlending = 3;
export var MultiplyBlending = 4;
export var CustomBlending = 5;
export var AddEquation = 100;
export var SubtractEquation = 101;
export var ReverseSubtractEquation = 102;
export var MinEquation = 103;
export var MaxEquation = 104;
export var ZeroFactor = 200;
export var OneFactor = 201;
export var SrcColorFactor = 202;
export var OneMinusSrcColorFactor = 203;
export var SrcAlphaFactor = 204;
export var OneMinusSrcAlphaFactor = 205;
export var DstAlphaFactor = 206;
export var OneMinusDstAlphaFactor = 207;
export var DstColorFactor = 208;
export var OneMinusDstColorFactor = 209;
export var SrcAlphaSaturateFactor = 210;
export var NeverDepth = 0;
export var AlwaysDepth = 1;
export var LessDepth = 2;
export var LessEqualDepth = 3;
export var EqualDepth = 4;
export var GreaterEqualDepth = 5;
export var GreaterDepth = 6;
export var NotEqualDepth = 7;
export var MultiplyOperation = 0;
export var MixOperation = 1;
export var AddOperation = 2;
export var NoToneMapping = 0;
export var LinearToneMapping = 1;
export var ReinhardToneMapping = 2;
export var Uncharted2ToneMapping = 3;
export var CineonToneMapping = 4;
export var ACESFilmicToneMapping = 5;
export var UVMapping = 300;
export var CubeReflectionMapping = 301;
export var CubeRefractionMapping = 302;
export var EquirectangularReflectionMapping = 303;
export var EquirectangularRefractionMapping = 304;
export var SphericalReflectionMapping = 305;
export var CubeUVReflectionMapping = 306;
export var CubeUVRefractionMapping = 307;
export var RepeatWrapping = 1000;
export var ClampToEdgeWrapping = 1001;
export var MirroredRepeatWrapping = 1002;
export var NearestFilter = 1003;
export var NearestMipMapNearestFilter = 1004;
export var NearestMipMapLinearFilter = 1005;
export var LinearFilter = 1006;
export var LinearMipMapNearestFilter = 1007;
export var LinearMipMapLinearFilter = 1008;
export var UnsignedByteType = 1009;
export var ByteType = 1010;
export var ShortType = 1011;
export var UnsignedShortType = 1012;
export var IntType = 1013;
export var UnsignedIntType = 1014;
export var FloatType = 1015;
export var HalfFloatType = 1016;
export var UnsignedShort4444Type = 1017;
export var UnsignedShort5551Type = 1018;
export var UnsignedShort565Type = 1019;
export var UnsignedInt248Type = 1020;
export var AlphaFormat = 1021;
export var RGBFormat = 1022;
export var RGBAFormat = 1023;
export var LuminanceFormat = 1024;
export var LuminanceAlphaFormat = 1025;
export var RGBEFormat = RGBAFormat;
export var DepthFormat = 1026;
export var DepthStencilFormat = 1027;
export var RedFormat = 1028;
export var RGB_S3TC_DXT1_Format = 33776;
export var RGBA_S3TC_DXT1_Format = 33777;
export var RGBA_S3TC_DXT3_Format = 33778;
export var RGBA_S3TC_DXT5_Format = 33779;
export var RGB_PVRTC_4BPPV1_Format = 35840;
export var RGB_PVRTC_2BPPV1_Format = 35841;
export var RGBA_PVRTC_4BPPV1_Format = 35842;
export var RGBA_PVRTC_2BPPV1_Format = 35843;
export var RGB_ETC1_Format = 36196;
export var RGBA_ASTC_4x4_Format = 37808;
export var RGBA_ASTC_5x4_Format = 37809;
export var RGBA_ASTC_5x5_Format = 37810;
export var RGBA_ASTC_6x5_Format = 37811;
export var RGBA_ASTC_6x6_Format = 37812;
export var RGBA_ASTC_8x5_Format = 37813;
export var RGBA_ASTC_8x6_Format = 37814;
export var RGBA_ASTC_8x8_Format = 37815;
export var RGBA_ASTC_10x5_Format = 37816;
export var RGBA_ASTC_10x6_Format = 37817;
export var RGBA_ASTC_10x8_Format = 37818;
export var RGBA_ASTC_10x10_Format = 37819;
export var RGBA_ASTC_12x10_Format = 37820;
export var RGBA_ASTC_12x12_Format = 37821;
export var LoopOnce = 2200;
export var LoopRepeat = 2201;
export var LoopPingPong = 2202;
export var InterpolateDiscrete = 2300;
export var InterpolateLinear = 2301;
export var InterpolateSmooth = 2302;
export var ZeroCurvatureEnding = 2400;
export var ZeroSlopeEnding = 2401;
export var WrapAroundEnding = 2402;
export var TrianglesDrawMode = 0;
export var TriangleStripDrawMode = 1;
export var TriangleFanDrawMode = 2;
export var LinearEncoding = 3000;
export var sRGBEncoding = 3001;
export var GammaEncoding = 3007;
export var RGBEEncoding = 3002;
export var LogLuvEncoding = 3003;
export var RGBM7Encoding = 3004;
export var RGBM16Encoding = 3005;
export var RGBDEncoding = 3006;
export var BasicDepthPacking = 3200;
export var RGBADepthPacking = 3201;
export var TangentSpaceNormalMap = 0;
export var ObjectSpaceNormalMap = 1;
export var Math = {
  DEG2RAD: Math.PI / 180,
  RAD2DEG: 180 / Math.PI,
  generateUUID: function () {
    for (var bf = [], bg = 0; bg < 256; bg++) {
      bf[bg] = (bg < 16 ? "0" : "") + bg.toString(16);
    }
    return function () {
      var bg = Math.random() * 4294967295 | 0;
      var bh = Math.random() * 4294967295 | 0;
      var bi = Math.random() * 4294967295 | 0;
      var bF = Math.random() * 4294967295 | 0;
      return (bf[bg & 255] + bf[bg >> 8 & 255] + bf[bg >> 16 & 255] + bf[bg >> 24 & 255] + "-" + bf[bh & 255] + bf[bh >> 8 & 255] + "-" + bf[bh >> 16 & 15 | 64] + bf[bh >> 24 & 255] + "-" + bf[bi & 63 | 128] + bf[bi >> 8 & 255] + "-" + bf[bi >> 16 & 255] + bf[bi >> 24 & 255] + bf[bF & 255] + bf[bF >> 8 & 255] + bf[bF >> 16 & 255] + bf[bF >> 24 & 255]).toUpperCase();
    };
  }(),
  clamp: function (bf, bg, bh) {
    return Math.max(bg, Math.min(bh, bf));
  },
  euclideanModulo: function (bf, bg) {
    return (bf % bg + bg) % bg;
  },
  mapLinear: function (bf, bg, bh, bi, bF) {
    return bi + (bf - bg) * (bF - bi) / (bh - bg);
  },
  lerp: function (bf, bg, bh) {
    return (1 - bh) * bf + bh * bg;
  },
  smoothstep: function (bf, bg, bh) {
    if (bf <= bg) {
      return 0;
    } else if (bf >= bh) {
      return 1;
    } else {
      return (bf = (bf - bg) / (bh - bg)) * bf * (3 - bf * 2);
    }
  },
  smootherstep: function (bf, bg, bh) {
    if (bf <= bg) {
      return 0;
    } else if (bf >= bh) {
      return 1;
    } else {
      return (bf = (bf - bg) / (bh - bg)) * bf * bf * (bf * (bf * 6 - 15) + 10);
    }
  },
  randInt: function (bf, bg) {
    return bf + Math.floor(Math.random() * (bg - bf + 1));
  },
  randFloat: function (bf, bg) {
    return bf + Math.random() * (bg - bf);
  },
  randFloatSpread: function (bf) {
    return bf * (0.5 - Math.random());
  },
  degToRad: function (bf) {
    return bf * Math.DEG2RAD;
  },
  radToDeg: function (bf) {
    return bf * Math.RAD2DEG;
  },
  isPowerOfTwo: function (bf) {
    return (bf & bf - 1) == 0 && bf !== 0;
  },
  ceilPowerOfTwo: function (bf) {
    return Math.pow(2, Math.ceil(Math.log(bf) / Math.LN2));
  },
  floorPowerOfTwo: function (bf) {
    return Math.pow(2, Math.floor(Math.log(bf) / Math.LN2));
  }
};
export function Vector2(bf, bg) {
  this.x = bf || 0;
  this.y = bg || 0;
}
export function Quaternion(bf, bg, bh, bi) {
  this._x = bf || 0;
  this._y = bg || 0;
  this._z = bh || 0;
  this._w = bi !== undefined ? bi : 1;
}
export function Vector3(bf, bg, bh) {
  this.x = bf || 0;
  this.y = bg || 0;
  this.z = bh || 0;
}
export function Matrix3() {
  this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1];
  if (arguments.length > 0) {
    console.error("THREE.Matrix3: the constructor no longer reads arguments. use .set() instead.");
  }
}
Object.defineProperties(Vector2.prototype, {
  width: {
    get: function () {
      return this.x;
    },
    set: function (bf) {
      this.x = bf;
    }
  },
  height: {
    get: function () {
      return this.y;
    },
    set: function (bf) {
      this.y = bf;
    }
  }
});
Object.assign(Vector2.prototype, {
  isVector2: true,
  set: function (bf, bg) {
    this.x = bf;
    this.y = bg;
    return this;
  },
  setScalar: function (bf) {
    this.x = bf;
    this.y = bf;
    return this;
  },
  setX: function (bf) {
    this.x = bf;
    return this;
  },
  setY: function (bf) {
    this.y = bf;
    return this;
  },
  setComponent: function (bf, bg) {
    switch (bf) {
      case 0:
        this.x = bg;
        break;
      case 1:
        this.y = bg;
        break;
      default:
        throw new Error("index is out of range: " + bf);
    }
    return this;
  },
  getComponent: function (bf) {
    switch (bf) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + bf);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y);
  },
  copy: function (bf) {
    this.x = bf.x;
    this.y = bf.y;
    return this;
  },
  add: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(bf, bg);
    } else {
      this.x += bf.x;
      this.y += bf.y;
      return this;
    }
  },
  addScalar: function (bf) {
    this.x += bf;
    this.y += bf;
    return this;
  },
  addVectors: function (bf, bg) {
    this.x = bf.x + bg.x;
    this.y = bf.y + bg.y;
    return this;
  },
  addScaledVector: function (bf, bg) {
    this.x += bf.x * bg;
    this.y += bf.y * bg;
    return this;
  },
  sub: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(bf, bg);
    } else {
      this.x -= bf.x;
      this.y -= bf.y;
      return this;
    }
  },
  subScalar: function (bf) {
    this.x -= bf;
    this.y -= bf;
    return this;
  },
  subVectors: function (bf, bg) {
    this.x = bf.x - bg.x;
    this.y = bf.y - bg.y;
    return this;
  },
  multiply: function (bf) {
    this.x *= bf.x;
    this.y *= bf.y;
    return this;
  },
  multiplyScalar: function (bf) {
    this.x *= bf;
    this.y *= bf;
    return this;
  },
  divide: function (bf) {
    this.x /= bf.x;
    this.y /= bf.y;
    return this;
  },
  divideScalar: function (bf) {
    return this.multiplyScalar(1 / bf);
  },
  applyMatrix3: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = bf.elements;
    this.x = bi[0] * bg + bi[3] * bh + bi[6];
    this.y = bi[1] * bg + bi[4] * bh + bi[7];
    return this;
  },
  min: function (bf) {
    this.x = Math.min(this.x, bf.x);
    this.y = Math.min(this.y, bf.y);
    return this;
  },
  max: function (bf) {
    this.x = Math.max(this.x, bf.x);
    this.y = Math.max(this.y, bf.y);
    return this;
  },
  clamp: function (bf, bg) {
    this.x = Math.max(bf.x, Math.min(bg.x, this.x));
    this.y = Math.max(bf.y, Math.min(bg.y, this.y));
    return this;
  },
  clampScalar: function (bf, bg) {
    this.x = Math.max(bf, Math.min(bg, this.x));
    this.y = Math.max(bf, Math.min(bg, this.y));
    return this;
  },
  clampLength: function (bf, bg) {
    var bh = this.length();
    return this.divideScalar(bh || 1).multiplyScalar(Math.max(bf, Math.min(bg, bh)));
  },
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    return this;
  },
  dot: function (bf) {
    return this.x * bf.x + this.y * bf.y;
  },
  cross: function (bf) {
    return this.x * bf.y - this.y * bf.x;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  },
  manhattanLength: function () {
    return Math.abs(this.x) + Math.abs(this.y);
  },
  normalize: function () {
    return this.divideScalar(this.length() || 1);
  },
  angle: function () {
    var bf = Math.atan2(this.y, this.x);
    if (bf < 0) {
      bf += Math.PI * 2;
    }
    return bf;
  },
  distanceTo: function (bf) {
    return Math.sqrt(this.distanceToSquared(bf));
  },
  distanceToSquared: function (bf) {
    var bg = this.x - bf.x;
    var bh = this.y - bf.y;
    return bg * bg + bh * bh;
  },
  manhattanDistanceTo: function (bf) {
    return Math.abs(this.x - bf.x) + Math.abs(this.y - bf.y);
  },
  setLength: function (bf) {
    return this.normalize().multiplyScalar(bf);
  },
  lerp: function (bf, bg) {
    this.x += (bf.x - this.x) * bg;
    this.y += (bf.y - this.y) * bg;
    return this;
  },
  lerpVectors: function (bf, bg, bh) {
    return this.subVectors(bg, bf).multiplyScalar(bh).add(bf);
  },
  equals: function (bf) {
    return bf.x === this.x && bf.y === this.y;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.x = bf[bg];
    this.y = bf[bg + 1];
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this.x;
    bf[bg + 1] = this.y;
    return bf;
  },
  fromBufferAttribute: function (bf, bg, bh) {
    if (bh !== undefined) {
      console.warn("THREE.Vector2: offset has been removed from .fromBufferAttribute().");
    }
    this.x = bf.getX(bg);
    this.y = bf.getY(bg);
    return this;
  },
  rotateAround: function (bf, bg) {
    var bh = Math.cos(bg);
    var bi = Math.sin(bg);
    var bF = this.x - bf.x;
    var bG = this.y - bf.y;
    this.x = bF * bh - bG * bi + bf.x;
    this.y = bF * bi + bG * bh + bf.y;
    return this;
  }
});
Object.assign(Quaternion, {
  slerp: function (bf, bg, bh, bi) {
    return bh.copy(bf).slerp(bg, bi);
  },
  slerpFlat: function (bf, bg, bh, bi, bF, bG, bH) {
    var bI = bh[bi + 0];
    var bJ = bh[bi + 1];
    var bK = bh[bi + 2];
    var bL = bh[bi + 3];
    var bM = bF[bG + 0];
    var bN = bF[bG + 1];
    var bO = bF[bG + 2];
    var bP = bF[bG + 3];
    if (bL !== bP || bI !== bM || bJ !== bN || bK !== bO) {
      var bQ = 1 - bH;
      var bR = bI * bM + bJ * bN + bK * bO + bL * bP;
      var bS = bR >= 0 ? 1 : -1;
      var bT = 1 - bR * bR;
      if (bT > Number.EPSILON) {
        var bU = Math.sqrt(bT);
        var bV = Math.atan2(bU, bR * bS);
        bQ = Math.sin(bQ * bV) / bU;
        bH = Math.sin(bH * bV) / bU;
      }
      var bW = bH * bS;
      bI = bI * bQ + bM * bW;
      bJ = bJ * bQ + bN * bW;
      bK = bK * bQ + bO * bW;
      bL = bL * bQ + bP * bW;
      if (bQ === 1 - bH) {
        var bX = 1 / Math.sqrt(bI * bI + bJ * bJ + bK * bK + bL * bL);
        bI *= bX;
        bJ *= bX;
        bK *= bX;
        bL *= bX;
      }
    }
    bf[bg] = bI;
    bf[bg + 1] = bJ;
    bf[bg + 2] = bK;
    bf[bg + 3] = bL;
  }
});
Object.defineProperties(Quaternion.prototype, {
  x: {
    get: function () {
      return this._x;
    },
    set: function (bf) {
      this._x = bf;
      this.onChangeCallback();
    }
  },
  y: {
    get: function () {
      return this._y;
    },
    set: function (bf) {
      this._y = bf;
      this.onChangeCallback();
    }
  },
  z: {
    get: function () {
      return this._z;
    },
    set: function (bf) {
      this._z = bf;
      this.onChangeCallback();
    }
  },
  w: {
    get: function () {
      return this._w;
    },
    set: function (bf) {
      this._w = bf;
      this.onChangeCallback();
    }
  }
});
Object.assign(Quaternion.prototype, {
  isQuaternion: true,
  set: function (bf, bg, bh, bi) {
    this._x = bf;
    this._y = bg;
    this._z = bh;
    this._w = bi;
    this.onChangeCallback();
    return this;
  },
  clone: function () {
    return new this.constructor(this._x, this._y, this._z, this._w);
  },
  copy: function (bf) {
    this._x = bf.x;
    this._y = bf.y;
    this._z = bf.z;
    this._w = bf.w;
    this.onChangeCallback();
    return this;
  },
  setFromEuler: function (bf, bg) {
    if (!bf || !bf.isEuler) {
      throw new Error("THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order.");
    }
    var bh = bf._x;
    var bi = bf._y;
    var bF = bf._z;
    var bG = bf.order;
    var bH = Math.cos;
    var bI = Math.sin;
    var bJ = bH(bh / 2);
    var bK = bH(bi / 2);
    var bL = bH(bF / 2);
    var bM = bI(bh / 2);
    var bN = bI(bi / 2);
    var bO = bI(bF / 2);
    if (bG === "XYZ") {
      this._x = bM * bK * bL + bJ * bN * bO;
      this._y = bJ * bN * bL - bM * bK * bO;
      this._z = bJ * bK * bO + bM * bN * bL;
      this._w = bJ * bK * bL - bM * bN * bO;
    } else if (bG === "YXZ") {
      this._x = bM * bK * bL + bJ * bN * bO;
      this._y = bJ * bN * bL - bM * bK * bO;
      this._z = bJ * bK * bO - bM * bN * bL;
      this._w = bJ * bK * bL + bM * bN * bO;
    } else if (bG === "ZXY") {
      this._x = bM * bK * bL - bJ * bN * bO;
      this._y = bJ * bN * bL + bM * bK * bO;
      this._z = bJ * bK * bO + bM * bN * bL;
      this._w = bJ * bK * bL - bM * bN * bO;
    } else if (bG === "ZYX") {
      this._x = bM * bK * bL - bJ * bN * bO;
      this._y = bJ * bN * bL + bM * bK * bO;
      this._z = bJ * bK * bO - bM * bN * bL;
      this._w = bJ * bK * bL + bM * bN * bO;
    } else if (bG === "YZX") {
      this._x = bM * bK * bL + bJ * bN * bO;
      this._y = bJ * bN * bL + bM * bK * bO;
      this._z = bJ * bK * bO - bM * bN * bL;
      this._w = bJ * bK * bL - bM * bN * bO;
    } else if (bG === "XZY") {
      this._x = bM * bK * bL - bJ * bN * bO;
      this._y = bJ * bN * bL - bM * bK * bO;
      this._z = bJ * bK * bO + bM * bN * bL;
      this._w = bJ * bK * bL + bM * bN * bO;
    }
    if (bg !== false) {
      this.onChangeCallback();
    }
    return this;
  },
  setFromAxisAngle: function (bf, bg) {
    var bh = bg / 2;
    var bi = Math.sin(bh);
    this._x = bf.x * bi;
    this._y = bf.y * bi;
    this._z = bf.z * bi;
    this._w = Math.cos(bh);
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function (bf) {
    var bg;
    var bh = bf.elements;
    var bi = bh[0];
    var bF = bh[4];
    var bG = bh[8];
    var bH = bh[1];
    var bI = bh[5];
    var bJ = bh[9];
    var bK = bh[2];
    var bL = bh[6];
    var bM = bh[10];
    var bN = bi + bI + bM;
    if (bN > 0) {
      bg = 0.5 / Math.sqrt(bN + 1);
      this._w = 0.25 / bg;
      this._x = (bL - bJ) * bg;
      this._y = (bG - bK) * bg;
      this._z = (bH - bF) * bg;
    } else if (bi > bI && bi > bM) {
      bg = Math.sqrt(1 + bi - bI - bM) * 2;
      this._w = (bL - bJ) / bg;
      this._x = bg * 0.25;
      this._y = (bF + bH) / bg;
      this._z = (bG + bK) / bg;
    } else if (bI > bM) {
      bg = Math.sqrt(1 + bI - bi - bM) * 2;
      this._w = (bG - bK) / bg;
      this._x = (bF + bH) / bg;
      this._y = bg * 0.25;
      this._z = (bJ + bL) / bg;
    } else {
      bg = Math.sqrt(1 + bM - bi - bI) * 2;
      this._w = (bH - bF) / bg;
      this._x = (bG + bK) / bg;
      this._y = (bJ + bL) / bg;
      this._z = bg * 0.25;
    }
    this.onChangeCallback();
    return this;
  },
  setFromUnitVectors: function (bf, bg) {
    var bh = bf.dot(bg) + 1;
    if (bh < 0.000001) {
      bh = 0;
      if (Math.abs(bf.x) > Math.abs(bf.z)) {
        this._x = -bf.y;
        this._y = bf.x;
        this._z = 0;
        this._w = bh;
      } else {
        this._x = 0;
        this._y = -bf.z;
        this._z = bf.y;
        this._w = bh;
      }
    } else {
      this._x = bf.y * bg.z - bf.z * bg.y;
      this._y = bf.z * bg.x - bf.x * bg.z;
      this._z = bf.x * bg.y - bf.y * bg.x;
      this._w = bh;
    }
    return this.normalize();
  },
  angleTo: function (bf) {
    return Math.acos(Math.abs(Math.clamp(this.dot(bf), -1, 1))) * 2;
  },
  rotateTowards: function (bf, bg) {
    var bh = this.angleTo(bf);
    if (bh === 0) {
      return this;
    }
    var bi = Math.min(1, bg / bh);
    this.slerp(bf, bi);
    return this;
  },
  inverse: function () {
    return this.conjugate();
  },
  conjugate: function () {
    this._x *= -1;
    this._y *= -1;
    this._z *= -1;
    this.onChangeCallback();
    return this;
  },
  dot: function (bf) {
    return this._x * bf._x + this._y * bf._y + this._z * bf._z + this._w * bf._w;
  },
  lengthSq: function () {
    return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w;
  },
  length: function () {
    return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w);
  },
  normalize: function () {
    var bf = this.length();
    if (bf === 0) {
      this._x = 0;
      this._y = 0;
      this._z = 0;
      this._w = 1;
    } else {
      bf = 1 / bf;
      this._x = this._x * bf;
      this._y = this._y * bf;
      this._z = this._z * bf;
      this._w = this._w * bf;
    }
    this.onChangeCallback();
    return this;
  },
  multiply: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead.");
      return this.multiplyQuaternions(bf, bg);
    } else {
      return this.multiplyQuaternions(this, bf);
    }
  },
  premultiply: function (bf) {
    return this.multiplyQuaternions(bf, this);
  },
  multiplyQuaternions: function (bf, bg) {
    var bh = bf._x;
    var bi = bf._y;
    var bF = bf._z;
    var bG = bf._w;
    var bH = bg._x;
    var bI = bg._y;
    var bJ = bg._z;
    var bK = bg._w;
    this._x = bh * bK + bG * bH + bi * bJ - bF * bI;
    this._y = bi * bK + bG * bI + bF * bH - bh * bJ;
    this._z = bF * bK + bG * bJ + bh * bI - bi * bH;
    this._w = bG * bK - bh * bH - bi * bI - bF * bJ;
    this.onChangeCallback();
    return this;
  },
  slerp: function (bf, bg) {
    if (bg === 0) {
      return this;
    }
    if (bg === 1) {
      return this.copy(bf);
    }
    var bh = this._x;
    var bi = this._y;
    var bF = this._z;
    var bG = this._w;
    var bH = bG * bf._w + bh * bf._x + bi * bf._y + bF * bf._z;
    if (bH < 0) {
      this._w = -bf._w;
      this._x = -bf._x;
      this._y = -bf._y;
      this._z = -bf._z;
      bH = -bH;
    } else {
      this.copy(bf);
    }
    if (bH >= 1) {
      this._w = bG;
      this._x = bh;
      this._y = bi;
      this._z = bF;
      return this;
    }
    var bI = 1 - bH * bH;
    if (bI <= Number.EPSILON) {
      var bJ = 1 - bg;
      this._w = bJ * bG + bg * this._w;
      this._x = bJ * bh + bg * this._x;
      this._y = bJ * bi + bg * this._y;
      this._z = bJ * bF + bg * this._z;
      return this.normalize();
    }
    var bK = Math.sqrt(bI);
    var bL = Math.atan2(bK, bH);
    var bM = Math.sin((1 - bg) * bL) / bK;
    var bN = Math.sin(bg * bL) / bK;
    this._w = bG * bM + this._w * bN;
    this._x = bh * bM + this._x * bN;
    this._y = bi * bM + this._y * bN;
    this._z = bF * bM + this._z * bN;
    this.onChangeCallback();
    return this;
  },
  equals: function (bf) {
    return bf._x === this._x && bf._y === this._y && bf._z === this._z && bf._w === this._w;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this._x = bf[bg];
    this._y = bf[bg + 1];
    this._z = bf[bg + 2];
    this._w = bf[bg + 3];
    this.onChangeCallback();
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this._x;
    bf[bg + 1] = this._y;
    bf[bg + 2] = this._z;
    bf[bg + 3] = this._w;
    return bf;
  },
  onChange: function (bf) {
    this.onChangeCallback = bf;
    return this;
  },
  onChangeCallback: function () {}
});
Object.assign(Vector3.prototype, {
  isVector3: true,
  set: function (bf, bg, bh) {
    this.x = bf;
    this.y = bg;
    this.z = bh;
    return this;
  },
  setScalar: function (bf) {
    this.x = bf;
    this.y = bf;
    this.z = bf;
    return this;
  },
  setX: function (bf) {
    this.x = bf;
    return this;
  },
  setY: function (bf) {
    this.y = bf;
    return this;
  },
  setZ: function (bf) {
    this.z = bf;
    return this;
  },
  setComponent: function (bf, bg) {
    switch (bf) {
      case 0:
        this.x = bg;
        break;
      case 1:
        this.y = bg;
        break;
      case 2:
        this.z = bg;
        break;
      default:
        throw new Error("index is out of range: " + bf);
    }
    return this;
  },
  getComponent: function (bf) {
    switch (bf) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + bf);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z);
  },
  copy: function (bf) {
    this.x = bf.x;
    this.y = bf.y;
    this.z = bf.z;
    return this;
  },
  add: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(bf, bg);
    } else {
      this.x += bf.x;
      this.y += bf.y;
      this.z += bf.z;
      return this;
    }
  },
  addScalar: function (bf) {
    this.x += bf;
    this.y += bf;
    this.z += bf;
    return this;
  },
  addVectors: function (bf, bg) {
    this.x = bf.x + bg.x;
    this.y = bf.y + bg.y;
    this.z = bf.z + bg.z;
    return this;
  },
  addScaledVector: function (bf, bg) {
    this.x += bf.x * bg;
    this.y += bf.y * bg;
    this.z += bf.z * bg;
    return this;
  },
  sub: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(bf, bg);
    } else {
      this.x -= bf.x;
      this.y -= bf.y;
      this.z -= bf.z;
      return this;
    }
  },
  subScalar: function (bf) {
    this.x -= bf;
    this.y -= bf;
    this.z -= bf;
    return this;
  },
  subVectors: function (bf, bg) {
    this.x = bf.x - bg.x;
    this.y = bf.y - bg.y;
    this.z = bf.z - bg.z;
    return this;
  },
  multiply: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead.");
      return this.multiplyVectors(bf, bg);
    } else {
      this.x *= bf.x;
      this.y *= bf.y;
      this.z *= bf.z;
      return this;
    }
  },
  multiplyScalar: function (bf) {
    this.x *= bf;
    this.y *= bf;
    this.z *= bf;
    return this;
  },
  multiplyVectors: function (bf, bg) {
    this.x = bf.x * bg.x;
    this.y = bf.y * bg.y;
    this.z = bf.z * bg.z;
    return this;
  },
  applyEuler: (bG = new Quaternion(), function (bf) {
    if (!bf || !bf.isEuler) {
      console.error("THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order.");
    }
    return this.applyQuaternion(bG.setFromEuler(bf));
  }),
  applyAxisAngle: function () {
    var bf = new Quaternion();
    return function (bg, bh) {
      return this.applyQuaternion(bf.setFromAxisAngle(bg, bh));
    };
  }(),
  applyMatrix3: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = this.z;
    var bF = bf.elements;
    this.x = bF[0] * bg + bF[3] * bh + bF[6] * bi;
    this.y = bF[1] * bg + bF[4] * bh + bF[7] * bi;
    this.z = bF[2] * bg + bF[5] * bh + bF[8] * bi;
    return this;
  },
  applyMatrix4: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = this.z;
    var bF = bf.elements;
    var bG = 1 / (bF[3] * bg + bF[7] * bh + bF[11] * bi + bF[15]);
    this.x = (bF[0] * bg + bF[4] * bh + bF[8] * bi + bF[12]) * bG;
    this.y = (bF[1] * bg + bF[5] * bh + bF[9] * bi + bF[13]) * bG;
    this.z = (bF[2] * bg + bF[6] * bh + bF[10] * bi + bF[14]) * bG;
    return this;
  },
  applyQuaternion: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = this.z;
    var bF = bf.x;
    var bG = bf.y;
    var bH = bf.z;
    var bI = bf.w;
    var bJ = bI * bg + bG * bi - bH * bh;
    var bK = bI * bh + bH * bg - bF * bi;
    var bL = bI * bi + bF * bh - bG * bg;
    var bM = -bF * bg - bG * bh - bH * bi;
    this.x = bJ * bI + bM * -bF + bK * -bH - bL * -bG;
    this.y = bK * bI + bM * -bG + bL * -bF - bJ * -bH;
    this.z = bL * bI + bM * -bH + bJ * -bG - bK * -bF;
    return this;
  },
  project: function (bf) {
    return this.applyMatrix4(bf.matrixWorldInverse).applyMatrix4(bf.projectionMatrix);
  },
  unproject: function (bf) {
    return this.applyMatrix4(bf.projectionMatrixInverse).applyMatrix4(bf.matrixWorld);
  },
  transformDirection: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = this.z;
    var bF = bf.elements;
    this.x = bF[0] * bg + bF[4] * bh + bF[8] * bi;
    this.y = bF[1] * bg + bF[5] * bh + bF[9] * bi;
    this.z = bF[2] * bg + bF[6] * bh + bF[10] * bi;
    return this.normalize();
  },
  divide: function (bf) {
    this.x /= bf.x;
    this.y /= bf.y;
    this.z /= bf.z;
    return this;
  },
  divideScalar: function (bf) {
    return this.multiplyScalar(1 / bf);
  },
  min: function (bf) {
    this.x = Math.min(this.x, bf.x);
    this.y = Math.min(this.y, bf.y);
    this.z = Math.min(this.z, bf.z);
    return this;
  },
  max: function (bf) {
    this.x = Math.max(this.x, bf.x);
    this.y = Math.max(this.y, bf.y);
    this.z = Math.max(this.z, bf.z);
    return this;
  },
  clamp: function (bf, bg) {
    this.x = Math.max(bf.x, Math.min(bg.x, this.x));
    this.y = Math.max(bf.y, Math.min(bg.y, this.y));
    this.z = Math.max(bf.z, Math.min(bg.z, this.z));
    return this;
  },
  clampScalar: function (bf, bg) {
    this.x = Math.max(bf, Math.min(bg, this.x));
    this.y = Math.max(bf, Math.min(bg, this.y));
    this.z = Math.max(bf, Math.min(bg, this.z));
    return this;
  },
  clampLength: function (bf, bg) {
    var bh = this.length();
    return this.divideScalar(bh || 1).multiplyScalar(Math.max(bf, Math.min(bg, bh)));
  },
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    return this;
  },
  dot: function (bf) {
    return this.x * bf.x + this.y * bf.y + this.z * bf.z;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  },
  manhattanLength: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  },
  normalize: function () {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function (bf) {
    return this.normalize().multiplyScalar(bf);
  },
  lerp: function (bf, bg) {
    this.x += (bf.x - this.x) * bg;
    this.y += (bf.y - this.y) * bg;
    this.z += (bf.z - this.z) * bg;
    return this;
  },
  lerpVectors: function (bf, bg, bh) {
    return this.subVectors(bg, bf).multiplyScalar(bh).add(bf);
  },
  cross: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead.");
      return this.crossVectors(bf, bg);
    } else {
      return this.crossVectors(this, bf);
    }
  },
  crossVectors: function (bf, bg) {
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    var bG = bg.x;
    var bH = bg.y;
    var bI = bg.z;
    this.x = bi * bI - bF * bH;
    this.y = bF * bG - bh * bI;
    this.z = bh * bH - bi * bG;
    return this;
  },
  projectOnVector: function (bf) {
    var bg = bf.dot(this) / bf.lengthSq();
    return this.copy(bf).multiplyScalar(bg);
  },
  projectOnPlane: (bF = new Vector3(), function (bf) {
    bF.copy(this).projectOnVector(bf);
    return this.sub(bF);
  }),
  reflect: function () {
    var bf = new Vector3();
    return function (bg) {
      return this.sub(bf.copy(bg).multiplyScalar(this.dot(bg) * 2));
    };
  }(),
  angleTo: function (bf) {
    var bg = this.dot(bf) / Math.sqrt(this.lengthSq() * bf.lengthSq());
    return Math.acos(Math.clamp(bg, -1, 1));
  },
  distanceTo: function (bf) {
    return Math.sqrt(this.distanceToSquared(bf));
  },
  distanceToSquared: function (bf) {
    var bg = this.x - bf.x;
    var bh = this.y - bf.y;
    var bi = this.z - bf.z;
    return bg * bg + bh * bh + bi * bi;
  },
  manhattanDistanceTo: function (bf) {
    return Math.abs(this.x - bf.x) + Math.abs(this.y - bf.y) + Math.abs(this.z - bf.z);
  },
  setFromSpherical: function (bf) {
    return this.setFromSphericalCoords(bf.radius, bf.phi, bf.theta);
  },
  setFromSphericalCoords: function (bf, bg, bh) {
    var bi = Math.sin(bg) * bf;
    this.x = bi * Math.sin(bh);
    this.y = Math.cos(bg) * bf;
    this.z = bi * Math.cos(bh);
    return this;
  },
  setFromCylindrical: function (bf) {
    return this.setFromCylindricalCoords(bf.radius, bf.theta, bf.y);
  },
  setFromCylindricalCoords: function (bf, bg, bh) {
    this.x = bf * Math.sin(bg);
    this.y = bh;
    this.z = bf * Math.cos(bg);
    return this;
  },
  setFromMatrixPosition: function (bf) {
    var bg = bf.elements;
    this.x = bg[12];
    this.y = bg[13];
    this.z = bg[14];
    return this;
  },
  setFromMatrixScale: function (bf) {
    var bg = this.setFromMatrixColumn(bf, 0).length();
    var bh = this.setFromMatrixColumn(bf, 1).length();
    var bi = this.setFromMatrixColumn(bf, 2).length();
    this.x = bg;
    this.y = bh;
    this.z = bi;
    return this;
  },
  setFromMatrixColumn: function (bf, bg) {
    return this.fromArray(bf.elements, bg * 4);
  },
  equals: function (bf) {
    return bf.x === this.x && bf.y === this.y && bf.z === this.z;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.x = bf[bg];
    this.y = bf[bg + 1];
    this.z = bf[bg + 2];
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this.x;
    bf[bg + 1] = this.y;
    bf[bg + 2] = this.z;
    return bf;
  },
  fromBufferAttribute: function (bf, bg, bh) {
    if (bh !== undefined) {
      console.warn("THREE.Vector3: offset has been removed from .fromBufferAttribute().");
    }
    this.x = bf.getX(bg);
    this.y = bf.getY(bg);
    this.z = bf.getZ(bg);
    return this;
  }
});
Object.assign(Matrix3.prototype, {
  isMatrix3: true,
  set: function (bf, bg, bh, bi, bF, bG, bH, bI, bJ) {
    var bK = this.elements;
    bK[0] = bf;
    bK[1] = bi;
    bK[2] = bH;
    bK[3] = bg;
    bK[4] = bF;
    bK[5] = bI;
    bK[6] = bh;
    bK[7] = bG;
    bK[8] = bJ;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 1, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new this.constructor().fromArray(this.elements);
  },
  copy: function (bf) {
    var bg = this.elements;
    var bh = bf.elements;
    bg[0] = bh[0];
    bg[1] = bh[1];
    bg[2] = bh[2];
    bg[3] = bh[3];
    bg[4] = bh[4];
    bg[5] = bh[5];
    bg[6] = bh[6];
    bg[7] = bh[7];
    bg[8] = bh[8];
    return this;
  },
  setFromMatrix4: function (bf) {
    var bg = bf.elements;
    this.set(bg[0], bg[4], bg[8], bg[1], bg[5], bg[9], bg[2], bg[6], bg[10]);
    return this;
  },
  applyToBufferAttribute: function () {
    var bf = new Vector3();
    return function (bg) {
      for (var bh = 0, bi = bg.count; bh < bi; bh++) {
        bf.x = bg.getX(bh);
        bf.y = bg.getY(bh);
        bf.z = bg.getZ(bh);
        bf.applyMatrix3(this);
        bg.setXYZ(bh, bf.x, bf.y, bf.z);
      }
      return bg;
    };
  }(),
  multiply: function (bf) {
    return this.multiplyMatrices(this, bf);
  },
  premultiply: function (bf) {
    return this.multiplyMatrices(bf, this);
  },
  multiplyMatrices: function (bf, bg) {
    var bh = bf.elements;
    var bi = bg.elements;
    var bF = this.elements;
    var bG = bh[0];
    var bH = bh[3];
    var bI = bh[6];
    var bJ = bh[1];
    var bK = bh[4];
    var bL = bh[7];
    var bM = bh[2];
    var bN = bh[5];
    var bO = bh[8];
    var bP = bi[0];
    var bQ = bi[3];
    var bR = bi[6];
    var bS = bi[1];
    var bT = bi[4];
    var bU = bi[7];
    var bV = bi[2];
    var bW = bi[5];
    var bX = bi[8];
    bF[0] = bG * bP + bH * bS + bI * bV;
    bF[3] = bG * bQ + bH * bT + bI * bW;
    bF[6] = bG * bR + bH * bU + bI * bX;
    bF[1] = bJ * bP + bK * bS + bL * bV;
    bF[4] = bJ * bQ + bK * bT + bL * bW;
    bF[7] = bJ * bR + bK * bU + bL * bX;
    bF[2] = bM * bP + bN * bS + bO * bV;
    bF[5] = bM * bQ + bN * bT + bO * bW;
    bF[8] = bM * bR + bN * bU + bO * bX;
    return this;
  },
  multiplyScalar: function (bf) {
    var bg = this.elements;
    bg[0] *= bf;
    bg[3] *= bf;
    bg[6] *= bf;
    bg[1] *= bf;
    bg[4] *= bf;
    bg[7] *= bf;
    bg[2] *= bf;
    bg[5] *= bf;
    bg[8] *= bf;
    return this;
  },
  determinant: function () {
    var bf = this.elements;
    var bg = bf[0];
    var bh = bf[1];
    var bi = bf[2];
    var bF = bf[3];
    var bG = bf[4];
    var bH = bf[5];
    var bI = bf[6];
    var bJ = bf[7];
    var bK = bf[8];
    return bg * bG * bK - bg * bH * bJ - bh * bF * bK + bh * bH * bI + bi * bF * bJ - bi * bG * bI;
  },
  getInverse: function (bf, bg) {
    if (bf && bf.isMatrix4) {
      console.error("THREE.Matrix3: .getInverse() no longer takes a Matrix4 argument.");
    }
    var bh = bf.elements;
    var bi = this.elements;
    var bF = bh[0];
    var bG = bh[1];
    var bH = bh[2];
    var bI = bh[3];
    var bJ = bh[4];
    var bK = bh[5];
    var bL = bh[6];
    var bM = bh[7];
    var bN = bh[8];
    var bO = bN * bJ - bK * bM;
    var bP = bK * bL - bN * bI;
    var bQ = bM * bI - bJ * bL;
    var bR = bF * bO + bG * bP + bH * bQ;
    if (bR === 0) {
      var bS = "THREE.Matrix3: .getInverse() can't invert matrix, determinant is 0";
      if (bg === true) {
        throw new Error(bS);
      }
      console.warn(bS);
      return this.identity();
    }
    var bT = 1 / bR;
    bi[0] = bO * bT;
    bi[1] = (bH * bM - bN * bG) * bT;
    bi[2] = (bK * bG - bH * bJ) * bT;
    bi[3] = bP * bT;
    bi[4] = (bN * bF - bH * bL) * bT;
    bi[5] = (bH * bI - bK * bF) * bT;
    bi[6] = bQ * bT;
    bi[7] = (bG * bL - bM * bF) * bT;
    bi[8] = (bJ * bF - bG * bI) * bT;
    return this;
  },
  transpose: function () {
    var bf;
    var bg = this.elements;
    bf = bg[1];
    bg[1] = bg[3];
    bg[3] = bf;
    bf = bg[2];
    bg[2] = bg[6];
    bg[6] = bf;
    bf = bg[5];
    bg[5] = bg[7];
    bg[7] = bf;
    return this;
  },
  getNormalMatrix: function (bf) {
    return this.setFromMatrix4(bf).getInverse(this).transpose();
  },
  transposeIntoArray: function (bf) {
    var bg = this.elements;
    bf[0] = bg[0];
    bf[1] = bg[3];
    bf[2] = bg[6];
    bf[3] = bg[1];
    bf[4] = bg[4];
    bf[5] = bg[7];
    bf[6] = bg[2];
    bf[7] = bg[5];
    bf[8] = bg[8];
    return this;
  },
  setUvTransform: function (bf, bg, bh, bi, bF, bG, bH) {
    var bI = Math.cos(bF);
    var bJ = Math.sin(bF);
    this.set(bh * bI, bh * bJ, -bh * (bI * bG + bJ * bH) + bG + bf, -bi * bJ, bi * bI, -bi * (-bJ * bG + bI * bH) + bH + bg, 0, 0, 1);
  },
  scale: function (bf, bg) {
    var bh = this.elements;
    bh[0] *= bf;
    bh[3] *= bf;
    bh[6] *= bf;
    bh[1] *= bg;
    bh[4] *= bg;
    bh[7] *= bg;
    return this;
  },
  rotate: function (bf) {
    var bg = Math.cos(bf);
    var bh = Math.sin(bf);
    var bi = this.elements;
    var bF = bi[0];
    var bG = bi[3];
    var bH = bi[6];
    var bI = bi[1];
    var bJ = bi[4];
    var bK = bi[7];
    bi[0] = bg * bF + bh * bI;
    bi[3] = bg * bG + bh * bJ;
    bi[6] = bg * bH + bh * bK;
    bi[1] = -bh * bF + bg * bI;
    bi[4] = -bh * bG + bg * bJ;
    bi[7] = -bh * bH + bg * bK;
    return this;
  },
  translate: function (bf, bg) {
    var bh = this.elements;
    bh[0] += bf * bh[2];
    bh[3] += bf * bh[5];
    bh[6] += bf * bh[8];
    bh[1] += bg * bh[2];
    bh[4] += bg * bh[5];
    bh[7] += bg * bh[8];
    return this;
  },
  equals: function (bf) {
    for (var bg = this.elements, bh = bf.elements, bi = 0; bi < 9; bi++) {
      if (bg[bi] !== bh[bi]) {
        return false;
      }
    }
    return true;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    for (var bh = 0; bh < 9; bh++) {
      this.elements[bh] = bf[bh + bg];
    }
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    var bh = this.elements;
    bf[bg] = bh[0];
    bf[bg + 1] = bh[1];
    bf[bg + 2] = bh[2];
    bf[bg + 3] = bh[3];
    bf[bg + 4] = bh[4];
    bf[bg + 5] = bh[5];
    bf[bg + 6] = bh[6];
    bf[bg + 7] = bh[7];
    bf[bg + 8] = bh[8];
    return bf;
  }
});
var lD;
var lE;
var lF;
var lG;
var lH;
var lI;
var lJ;
var lK;
var lL;
var lM;
var lN;
var lO;
var lP;
var lQ;
export var ImageUtils = {
  getDataURL: function (bf) {
    var bg;
    if (typeof HTMLCanvasElement == "undefined") {
      return bf.src;
    }
    if (bf instanceof HTMLCanvasElement) {
      bg = bf;
    } else {
      if (bH === undefined) {
        bH = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      }
      bH.width = bf.width;
      bH.height = bf.height;
      var bh = bH.getContext("2d");
      if (bf instanceof ImageData) {
        bh.putImageData(bf, 0, 0);
      } else {
        bh.drawImage(bf, 0, 0, bf.width, bf.height);
      }
      bg = bH;
    }
    if (bg.width > 2048 || bg.height > 2048) {
      return bg.toDataURL("image/jpeg", 0.6);
    } else {
      return bg.toDataURL("image/png");
    }
  }
};
var lS = 0;
export function Texture(bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK) {
  Object.defineProperty(this, "id", {
    value: lS++
  });
  this.uuid = Math.generateUUID();
  this.name = "";
  this.image = bf !== undefined ? bf : Texture.DEFAULT_IMAGE;
  this.mipmaps = [];
  this.mapping = bg !== undefined ? bg : Texture.DEFAULT_MAPPING;
  this.wrapS = bh !== undefined ? bh : ClampToEdgeWrapping;
  this.wrapT = bi !== undefined ? bi : ClampToEdgeWrapping;
  this.magFilter = bF !== undefined ? bF : LinearFilter;
  this.minFilter = bG !== undefined ? bG : LinearMipMapLinearFilter;
  this.anisotropy = bJ !== undefined ? bJ : 1;
  this.format = bH !== undefined ? bH : RGBAFormat;
  this.type = bI !== undefined ? bI : UnsignedByteType;
  this.offset = new Vector2(0, 0);
  this.repeat = new Vector2(1, 1);
  this.center = new Vector2(0, 0);
  this.rotation = 0;
  this.matrixAutoUpdate = true;
  this.matrix = new Matrix3();
  this.generateMipmaps = true;
  this.premultiplyAlpha = false;
  this.flipY = true;
  this.unpackAlignment = 4;
  this.encoding = bK !== undefined ? bK : LinearEncoding;
  this.version = 0;
  this.onUpdate = null;
}
export function Vector4(bf, bg, bh, bi) {
  this.x = bf || 0;
  this.y = bg || 0;
  this.z = bh || 0;
  this.w = bi !== undefined ? bi : 1;
}
export function WebGLRenderTarget(bf, bg, bh) {
  this.width = bf;
  this.height = bg;
  this.scissor = new Vector4(0, 0, bf, bg);
  this.scissorTest = false;
  this.viewport = new Vector4(0, 0, bf, bg);
  bh = bh || {};
  this.texture = new Texture(undefined, undefined, bh.wrapS, bh.wrapT, bh.magFilter, bh.minFilter, bh.format, bh.type, bh.anisotropy, bh.encoding);
  this.texture.generateMipmaps = bh.generateMipmaps !== undefined && bh.generateMipmaps;
  this.texture.minFilter = bh.minFilter !== undefined ? bh.minFilter : LinearFilter;
  this.depthBuffer = bh.depthBuffer === undefined || bh.depthBuffer;
  this.stencilBuffer = bh.stencilBuffer === undefined || bh.stencilBuffer;
  this.depthTexture = bh.depthTexture !== undefined ? bh.depthTexture : null;
}
export function WebGLMultisampleRenderTarget(bf, bg, bh) {
  WebGLRenderTarget.call(this, bf, bg, bh);
  this.samples = 4;
}
export function WebGLRenderTargetCube(bf, bg, bh) {
  WebGLRenderTarget.call(this, bf, bg, bh);
}
export function DataTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK, bL, bM) {
  Texture.call(this, null, bG, bH, bI, bJ, bK, bi, bF, bL, bM);
  this.image = {
    data: bf,
    width: bg,
    height: bh
  };
  this.magFilter = bJ !== undefined ? bJ : NearestFilter;
  this.minFilter = bK !== undefined ? bK : NearestFilter;
  this.generateMipmaps = false;
  this.flipY = false;
  this.unpackAlignment = 1;
}
export function Box3(bf, bg) {
  this.min = bf !== undefined ? bf : new Vector3(Infinity, Infinity, Infinity);
  this.max = bg !== undefined ? bg : new Vector3(-Infinity, -Infinity, -Infinity);
}
export function Sphere(bf, bg) {
  this.center = bf !== undefined ? bf : new Vector3();
  this.radius = bg !== undefined ? bg : 0;
}
export function Plane(bf, bg) {
  this.normal = bf !== undefined ? bf : new Vector3(1, 0, 0);
  this.constant = bg !== undefined ? bg : 0;
}
export function Frustum(bf, bg, bh, bi, bF, bG) {
  this.planes = [bf !== undefined ? bf : new Plane(), bg !== undefined ? bg : new Plane(), bh !== undefined ? bh : new Plane(), bi !== undefined ? bi : new Plane(), bF !== undefined ? bF : new Plane(), bG !== undefined ? bG : new Plane()];
}
export function Matrix4() {
  this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  if (arguments.length > 0) {
    console.error("THREE.Matrix4: the constructor no longer reads arguments. use .set() instead.");
  }
}
Texture.DEFAULT_IMAGE = undefined;
Texture.DEFAULT_MAPPING = UVMapping;
Texture.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Texture,
  isTexture: true,
  updateMatrix: function () {
    this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.name = bf.name;
    this.image = bf.image;
    this.mipmaps = bf.mipmaps.slice(0);
    this.mapping = bf.mapping;
    this.wrapS = bf.wrapS;
    this.wrapT = bf.wrapT;
    this.magFilter = bf.magFilter;
    this.minFilter = bf.minFilter;
    this.anisotropy = bf.anisotropy;
    this.format = bf.format;
    this.type = bf.type;
    this.offset.copy(bf.offset);
    this.repeat.copy(bf.repeat);
    this.center.copy(bf.center);
    this.rotation = bf.rotation;
    this.matrixAutoUpdate = bf.matrixAutoUpdate;
    this.matrix.copy(bf.matrix);
    this.generateMipmaps = bf.generateMipmaps;
    this.premultiplyAlpha = bf.premultiplyAlpha;
    this.flipY = bf.flipY;
    this.unpackAlignment = bf.unpackAlignment;
    this.encoding = bf.encoding;
    return this;
  },
  toJSON: function (bf) {
    var bg = bf === undefined || typeof bf == "string";
    if (!bg && bf.textures[this.uuid] !== undefined) {
      return bf.textures[this.uuid];
    }
    var bh = {
      metadata: {
        version: 4.5,
        type: "Texture",
        generator: "Texture.toJSON"
      },
      uuid: this.uuid,
      name: this.name,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment
    };
    if (this.image !== undefined) {
      var bi = this.image;
      if (bi.uuid === undefined) {
        bi.uuid = Math.generateUUID();
      }
      if (!bg && bf.images[bi.uuid] === undefined) {
        var bF;
        if (Array.isArray(bi)) {
          bF = [];
          for (var bG = 0, bH = bi.length; bG < bH; bG++) {
            bF.push(ImageUtils.getDataURL(bi[bG]));
          }
        } else {
          bF = ImageUtils.getDataURL(bi);
        }
        bf.images[bi.uuid] = {
          uuid: bi.uuid,
          url: bF
        };
      }
      bh.image = bi.uuid;
    }
    if (!bg) {
      bf.textures[this.uuid] = bh;
    }
    return bh;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  },
  transformUv: function (bf) {
    if (this.mapping !== UVMapping) {
      return bf;
    }
    bf.applyMatrix3(this.matrix);
    if (bf.x < 0 || bf.x > 1) {
      switch (this.wrapS) {
        case RepeatWrapping:
          bf.x = bf.x - Math.floor(bf.x);
          break;
        case ClampToEdgeWrapping:
          bf.x = bf.x < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(bf.x) % 2) === 1) {
            bf.x = Math.ceil(bf.x) - bf.x;
          } else {
            bf.x = bf.x - Math.floor(bf.x);
          }
      }
    }
    if (bf.y < 0 || bf.y > 1) {
      switch (this.wrapT) {
        case RepeatWrapping:
          bf.y = bf.y - Math.floor(bf.y);
          break;
        case ClampToEdgeWrapping:
          bf.y = bf.y < 0 ? 0 : 1;
          break;
        case MirroredRepeatWrapping:
          if (Math.abs(Math.floor(bf.y) % 2) === 1) {
            bf.y = Math.ceil(bf.y) - bf.y;
          } else {
            bf.y = bf.y - Math.floor(bf.y);
          }
      }
    }
    if (this.flipY) {
      bf.y = 1 - bf.y;
    }
    return bf;
  }
});
Object.defineProperty(Texture.prototype, "needsUpdate", {
  set: function (bf) {
    if (bf === true) {
      this.version++;
    }
  }
});
Object.assign(Vector4.prototype, {
  isVector4: true,
  set: function (bf, bg, bh, bi) {
    this.x = bf;
    this.y = bg;
    this.z = bh;
    this.w = bi;
    return this;
  },
  setScalar: function (bf) {
    this.x = bf;
    this.y = bf;
    this.z = bf;
    this.w = bf;
    return this;
  },
  setX: function (bf) {
    this.x = bf;
    return this;
  },
  setY: function (bf) {
    this.y = bf;
    return this;
  },
  setZ: function (bf) {
    this.z = bf;
    return this;
  },
  setW: function (bf) {
    this.w = bf;
    return this;
  },
  setComponent: function (bf, bg) {
    switch (bf) {
      case 0:
        this.x = bg;
        break;
      case 1:
        this.y = bg;
        break;
      case 2:
        this.z = bg;
        break;
      case 3:
        this.w = bg;
        break;
      default:
        throw new Error("index is out of range: " + bf);
    }
    return this;
  },
  getComponent: function (bf) {
    switch (bf) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + bf);
    }
  },
  clone: function () {
    return new this.constructor(this.x, this.y, this.z, this.w);
  },
  copy: function (bf) {
    this.x = bf.x;
    this.y = bf.y;
    this.z = bf.z;
    this.w = bf.w !== undefined ? bf.w : 1;
    return this;
  },
  add: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead.");
      return this.addVectors(bf, bg);
    } else {
      this.x += bf.x;
      this.y += bf.y;
      this.z += bf.z;
      this.w += bf.w;
      return this;
    }
  },
  addScalar: function (bf) {
    this.x += bf;
    this.y += bf;
    this.z += bf;
    this.w += bf;
    return this;
  },
  addVectors: function (bf, bg) {
    this.x = bf.x + bg.x;
    this.y = bf.y + bg.y;
    this.z = bf.z + bg.z;
    this.w = bf.w + bg.w;
    return this;
  },
  addScaledVector: function (bf, bg) {
    this.x += bf.x * bg;
    this.y += bf.y * bg;
    this.z += bf.z * bg;
    this.w += bf.w * bg;
    return this;
  },
  sub: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead.");
      return this.subVectors(bf, bg);
    } else {
      this.x -= bf.x;
      this.y -= bf.y;
      this.z -= bf.z;
      this.w -= bf.w;
      return this;
    }
  },
  subScalar: function (bf) {
    this.x -= bf;
    this.y -= bf;
    this.z -= bf;
    this.w -= bf;
    return this;
  },
  subVectors: function (bf, bg) {
    this.x = bf.x - bg.x;
    this.y = bf.y - bg.y;
    this.z = bf.z - bg.z;
    this.w = bf.w - bg.w;
    return this;
  },
  multiplyScalar: function (bf) {
    this.x *= bf;
    this.y *= bf;
    this.z *= bf;
    this.w *= bf;
    return this;
  },
  applyMatrix4: function (bf) {
    var bg = this.x;
    var bh = this.y;
    var bi = this.z;
    var bF = this.w;
    var bG = bf.elements;
    this.x = bG[0] * bg + bG[4] * bh + bG[8] * bi + bG[12] * bF;
    this.y = bG[1] * bg + bG[5] * bh + bG[9] * bi + bG[13] * bF;
    this.z = bG[2] * bg + bG[6] * bh + bG[10] * bi + bG[14] * bF;
    this.w = bG[3] * bg + bG[7] * bh + bG[11] * bi + bG[15] * bF;
    return this;
  },
  divideScalar: function (bf) {
    return this.multiplyScalar(1 / bf);
  },
  setAxisAngleFromQuaternion: function (bf) {
    this.w = Math.acos(bf.w) * 2;
    var bg = Math.sqrt(1 - bf.w * bf.w);
    if (bg < 0.0001) {
      this.x = 1;
      this.y = 0;
      this.z = 0;
    } else {
      this.x = bf.x / bg;
      this.y = bf.y / bg;
      this.z = bf.z / bg;
    }
    return this;
  },
  setAxisAngleFromRotationMatrix: function (bf) {
    var bg;
    var bh;
    var bi;
    var bF;
    var bG = bf.elements;
    var bH = bG[0];
    var bI = bG[4];
    var bJ = bG[8];
    var bK = bG[1];
    var bL = bG[5];
    var bM = bG[9];
    var bN = bG[2];
    var bO = bG[6];
    var bP = bG[10];
    if (Math.abs(bI - bK) < 0.01 && Math.abs(bJ - bN) < 0.01 && Math.abs(bM - bO) < 0.01) {
      if (Math.abs(bI + bK) < 0.1 && Math.abs(bJ + bN) < 0.1 && Math.abs(bM + bO) < 0.1 && Math.abs(bH + bL + bP - 3) < 0.1) {
        this.set(1, 0, 0, 0);
        return this;
      }
      bg = Math.PI;
      var bQ = (bH + 1) / 2;
      var bR = (bL + 1) / 2;
      var bS = (bP + 1) / 2;
      var bT = (bI + bK) / 4;
      var bU = (bJ + bN) / 4;
      var bV = (bM + bO) / 4;
      if (bQ > bR && bQ > bS) {
        if (bQ < 0.01) {
          bh = 0;
          bi = 0.707106781;
          bF = 0.707106781;
        } else {
          bi = bT / (bh = Math.sqrt(bQ));
          bF = bU / bh;
        }
      } else if (bR > bS) {
        if (bR < 0.01) {
          bh = 0.707106781;
          bi = 0;
          bF = 0.707106781;
        } else {
          bh = bT / (bi = Math.sqrt(bR));
          bF = bV / bi;
        }
      } else if (bS < 0.01) {
        bh = 0.707106781;
        bi = 0.707106781;
        bF = 0;
      } else {
        bh = bU / (bF = Math.sqrt(bS));
        bi = bV / bF;
      }
      this.set(bh, bi, bF, bg);
      return this;
    }
    var bW = Math.sqrt((bO - bM) * (bO - bM) + (bJ - bN) * (bJ - bN) + (bK - bI) * (bK - bI));
    if (Math.abs(bW) < 0.001) {
      bW = 1;
    }
    this.x = (bO - bM) / bW;
    this.y = (bJ - bN) / bW;
    this.z = (bK - bI) / bW;
    this.w = Math.acos((bH + bL + bP - 1) / 2);
    return this;
  },
  min: function (bf) {
    this.x = Math.min(this.x, bf.x);
    this.y = Math.min(this.y, bf.y);
    this.z = Math.min(this.z, bf.z);
    this.w = Math.min(this.w, bf.w);
    return this;
  },
  max: function (bf) {
    this.x = Math.max(this.x, bf.x);
    this.y = Math.max(this.y, bf.y);
    this.z = Math.max(this.z, bf.z);
    this.w = Math.max(this.w, bf.w);
    return this;
  },
  clamp: function (bf, bg) {
    this.x = Math.max(bf.x, Math.min(bg.x, this.x));
    this.y = Math.max(bf.y, Math.min(bg.y, this.y));
    this.z = Math.max(bf.z, Math.min(bg.z, this.z));
    this.w = Math.max(bf.w, Math.min(bg.w, this.w));
    return this;
  },
  clampScalar: function (bf, bg) {
    if (lD === undefined) {
      lD = new Vector4();
      lE = new Vector4();
    }
    lD.set(bf, bf, bf, bf);
    lE.set(bg, bg, bg, bg);
    return this.clamp(lD, lE);
  },
  clampLength: function (bf, bg) {
    var bh = this.length();
    return this.divideScalar(bh || 1).multiplyScalar(Math.max(bf, Math.min(bg, bh)));
  },
  floor: function () {
    this.x = Math.floor(this.x);
    this.y = Math.floor(this.y);
    this.z = Math.floor(this.z);
    this.w = Math.floor(this.w);
    return this;
  },
  ceil: function () {
    this.x = Math.ceil(this.x);
    this.y = Math.ceil(this.y);
    this.z = Math.ceil(this.z);
    this.w = Math.ceil(this.w);
    return this;
  },
  round: function () {
    this.x = Math.round(this.x);
    this.y = Math.round(this.y);
    this.z = Math.round(this.z);
    this.w = Math.round(this.w);
    return this;
  },
  roundToZero: function () {
    this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x);
    this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y);
    this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z);
    this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w);
    return this;
  },
  negate: function () {
    this.x = -this.x;
    this.y = -this.y;
    this.z = -this.z;
    this.w = -this.w;
    return this;
  },
  dot: function (bf) {
    return this.x * bf.x + this.y * bf.y + this.z * bf.z + this.w * bf.w;
  },
  lengthSq: function () {
    return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w;
  },
  length: function () {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w);
  },
  manhattanLength: function () {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w);
  },
  normalize: function () {
    return this.divideScalar(this.length() || 1);
  },
  setLength: function (bf) {
    return this.normalize().multiplyScalar(bf);
  },
  lerp: function (bf, bg) {
    this.x += (bf.x - this.x) * bg;
    this.y += (bf.y - this.y) * bg;
    this.z += (bf.z - this.z) * bg;
    this.w += (bf.w - this.w) * bg;
    return this;
  },
  lerpVectors: function (bf, bg, bh) {
    return this.subVectors(bg, bf).multiplyScalar(bh).add(bf);
  },
  equals: function (bf) {
    return bf.x === this.x && bf.y === this.y && bf.z === this.z && bf.w === this.w;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.x = bf[bg];
    this.y = bf[bg + 1];
    this.z = bf[bg + 2];
    this.w = bf[bg + 3];
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this.x;
    bf[bg + 1] = this.y;
    bf[bg + 2] = this.z;
    bf[bg + 3] = this.w;
    return bf;
  },
  fromBufferAttribute: function (bf, bg, bh) {
    if (bh !== undefined) {
      console.warn("THREE.Vector4: offset has been removed from .fromBufferAttribute().");
    }
    this.x = bf.getX(bg);
    this.y = bf.getY(bg);
    this.z = bf.getZ(bg);
    this.w = bf.getW(bg);
    return this;
  }
});
WebGLRenderTarget.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: WebGLRenderTarget,
  isWebGLRenderTarget: true,
  setSize: function (bf, bg) {
    if (this.width !== bf || this.height !== bg) {
      this.width = bf;
      this.height = bg;
      this.dispose();
    }
    this.viewport.set(0, 0, bf, bg);
    this.scissor.set(0, 0, bf, bg);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.width = bf.width;
    this.height = bf.height;
    this.viewport.copy(bf.viewport);
    this.texture = bf.texture.clone();
    this.depthBuffer = bf.depthBuffer;
    this.stencilBuffer = bf.stencilBuffer;
    this.depthTexture = bf.depthTexture;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
WebGLMultisampleRenderTarget.prototype = Object.assign(Object.create(WebGLRenderTarget.prototype), {
  constructor: WebGLMultisampleRenderTarget,
  isWebGLMultisampleRenderTarget: true,
  copy: function (bf) {
    WebGLRenderTarget.prototype.copy.call(this, bf);
    this.samples = bf.samples;
    return this;
  }
});
WebGLRenderTargetCube.prototype = Object.create(WebGLRenderTarget.prototype);
WebGLRenderTargetCube.prototype.constructor = WebGLRenderTargetCube;
WebGLRenderTargetCube.prototype.isWebGLRenderTargetCube = true;
DataTexture.prototype = Object.create(Texture.prototype);
DataTexture.prototype.constructor = DataTexture;
DataTexture.prototype.isDataTexture = true;
Object.assign(Box3.prototype, {
  isBox3: true,
  set: function (bf, bg) {
    this.min.copy(bf);
    this.max.copy(bg);
    return this;
  },
  setFromArray: function (bf) {
    for (var bg = Infinity, bh = Infinity, bi = Infinity, bF = -Infinity, bG = -Infinity, bH = -Infinity, bI = 0, bJ = bf.length; bI < bJ; bI += 3) {
      var bK = bf[bI];
      var bL = bf[bI + 1];
      var bM = bf[bI + 2];
      if (bK < bg) {
        bg = bK;
      }
      if (bL < bh) {
        bh = bL;
      }
      if (bM < bi) {
        bi = bM;
      }
      if (bK > bF) {
        bF = bK;
      }
      if (bL > bG) {
        bG = bL;
      }
      if (bM > bH) {
        bH = bM;
      }
    }
    this.min.set(bg, bh, bi);
    this.max.set(bF, bG, bH);
    return this;
  },
  setFromBufferAttribute: function (bf) {
    for (var bg = Infinity, bh = Infinity, bi = Infinity, bF = -Infinity, bG = -Infinity, bH = -Infinity, bI = 0, bJ = bf.count; bI < bJ; bI++) {
      var bK = bf.getX(bI);
      var bL = bf.getY(bI);
      var bM = bf.getZ(bI);
      if (bK < bg) {
        bg = bK;
      }
      if (bL < bh) {
        bh = bL;
      }
      if (bM < bi) {
        bi = bM;
      }
      if (bK > bF) {
        bF = bK;
      }
      if (bL > bG) {
        bG = bL;
      }
      if (bM > bH) {
        bH = bM;
      }
    }
    this.min.set(bg, bh, bi);
    this.max.set(bF, bG, bH);
    return this;
  },
  setFromPoints: function (bf) {
    this.makeEmpty();
    for (var bg = 0, bh = bf.length; bg < bh; bg++) {
      this.expandByPoint(bf[bg]);
    }
    return this;
  },
  setFromCenterAndSize: function () {
    var bf = new Vector3();
    return function (bg, bh) {
      var bi = bf.copy(bh).multiplyScalar(0.5);
      this.min.copy(bg).sub(bi);
      this.max.copy(bg).add(bi);
      return this;
    };
  }(),
  setFromObject: function (bf) {
    this.makeEmpty();
    return this.expandByObject(bf);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.min.copy(bf.min);
    this.max.copy(bf.max);
    return this;
  },
  makeEmpty: function () {
    this.min.x = this.min.y = this.min.z = Infinity;
    this.max.x = this.max.y = this.max.z = -Infinity;
    return this;
  },
  isEmpty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z;
  },
  getCenter: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Box3: .getCenter() target is now required");
      bf = new Vector3();
    }
    if (this.isEmpty()) {
      return bf.set(0, 0, 0);
    } else {
      return bf.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
  },
  getSize: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Box3: .getSize() target is now required");
      bf = new Vector3();
    }
    if (this.isEmpty()) {
      return bf.set(0, 0, 0);
    } else {
      return bf.subVectors(this.max, this.min);
    }
  },
  expandByPoint: function (bf) {
    this.min.min(bf);
    this.max.max(bf);
    return this;
  },
  expandByVector: function (bf) {
    this.min.sub(bf);
    this.max.add(bf);
    return this;
  },
  expandByScalar: function (bf) {
    this.min.addScalar(-bf);
    this.max.addScalar(bf);
    return this;
  },
  expandByObject: function () {
    var bf;
    var bg;
    var bh;
    var bi = new Vector3();
    function bF(bF) {
      var bG = bF.geometry;
      if (bG !== undefined) {
        if (bG.isGeometry) {
          var bH = bG.vertices;
          bg = 0;
          bh = bH.length;
          for (; bg < bh; bg++) {
            bi.copy(bH[bg]);
            bi.applyMatrix4(bF.matrixWorld);
            bf.expandByPoint(bi);
          }
        } else if (bG.isBufferGeometry) {
          var bI = bG.attributes.position;
          if (bI !== undefined) {
            bg = 0;
            bh = bI.count;
            bg = 0;
            bh = bI.count;
            for (; bg < bh; bg++) {
              bi.fromBufferAttribute(bI, bg).applyMatrix4(bF.matrixWorld);
              bf.expandByPoint(bi);
            }
          }
        }
      }
    }
    return function (bg) {
      bf = this;
      bg.updateMatrixWorld(true);
      bg.traverse(bF);
      return this;
    };
  }(),
  containsPoint: function (bf) {
    return bf.x >= this.min.x && bf.x <= this.max.x && bf.y >= this.min.y && bf.y <= this.max.y && bf.z >= this.min.z && bf.z <= this.max.z;
  },
  containsBox: function (bf) {
    return this.min.x <= bf.min.x && bf.max.x <= this.max.x && this.min.y <= bf.min.y && bf.max.y <= this.max.y && this.min.z <= bf.min.z && bf.max.z <= this.max.z;
  },
  getParameter: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Box3: .getParameter() target is now required");
      bg = new Vector3();
    }
    return bg.set((bf.x - this.min.x) / (this.max.x - this.min.x), (bf.y - this.min.y) / (this.max.y - this.min.y), (bf.z - this.min.z) / (this.max.z - this.min.z));
  },
  intersectsBox: function (bf) {
    return bf.max.x >= this.min.x && bf.min.x <= this.max.x && bf.max.y >= this.min.y && bf.min.y <= this.max.y && bf.max.z >= this.min.z && bf.min.z <= this.max.z;
  },
  intersectsSphere: (lG = new Vector3(), function (bf) {
    this.clampPoint(bf.center, lG);
    return lG.distanceToSquared(bf.center) <= bf.radius * bf.radius;
  }),
  intersectsPlane: function (bf) {
    var bg;
    var bh;
    if (bf.normal.x > 0) {
      bg = bf.normal.x * this.min.x;
      bh = bf.normal.x * this.max.x;
    } else {
      bg = bf.normal.x * this.max.x;
      bh = bf.normal.x * this.min.x;
    }
    if (bf.normal.y > 0) {
      bg += bf.normal.y * this.min.y;
      bh += bf.normal.y * this.max.y;
    } else {
      bg += bf.normal.y * this.max.y;
      bh += bf.normal.y * this.min.y;
    }
    if (bf.normal.z > 0) {
      bg += bf.normal.z * this.min.z;
      bh += bf.normal.z * this.max.z;
    } else {
      bg += bf.normal.z * this.max.z;
      bh += bf.normal.z * this.min.z;
    }
    return bg <= -bf.constant && bh >= -bf.constant;
  },
  intersectsTriangle: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    var bh = new Vector3();
    var bi = new Vector3();
    var bF = new Vector3();
    var bG = new Vector3();
    var bH = new Vector3();
    var bI = new Vector3();
    var bJ = new Vector3();
    var bK = new Vector3();
    function bL(bi) {
      var bF;
      var bG;
      bF = 0;
      bG = bi.length - 3;
      for (; bF <= bG; bF += 3) {
        bH.fromArray(bi, bF);
        var bI = bJ.x * Math.abs(bH.x) + bJ.y * Math.abs(bH.y) + bJ.z * Math.abs(bH.z);
        var bK = bf.dot(bH);
        var bL = bg.dot(bH);
        var bM = bh.dot(bH);
        if (Math.max(-Math.max(bK, bL, bM), Math.min(bK, bL, bM)) > bI) {
          return false;
        }
      }
      return true;
    }
    return function (bH) {
      if (this.isEmpty()) {
        return false;
      }
      this.getCenter(bI);
      bJ.subVectors(this.max, bI);
      bf.subVectors(bH.a, bI);
      bg.subVectors(bH.b, bI);
      bh.subVectors(bH.c, bI);
      bi.subVectors(bg, bf);
      bF.subVectors(bh, bg);
      bG.subVectors(bf, bh);
      var bM = [0, -bi.z, bi.y, 0, -bF.z, bF.y, 0, -bG.z, bG.y, bi.z, 0, -bi.x, bF.z, 0, -bF.x, bG.z, 0, -bG.x, -bi.y, bi.x, 0, -bF.y, bF.x, 0, -bG.y, bG.x, 0];
      return !!bL(bM) && !!bL(bM = [1, 0, 0, 0, 1, 0, 0, 0, 1]) && (bK.crossVectors(bi, bF), bL(bM = [bK.x, bK.y, bK.z]));
    };
  }(),
  clampPoint: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Box3: .clampPoint() target is now required");
      bg = new Vector3();
    }
    return bg.copy(bf).clamp(this.min, this.max);
  },
  distanceToPoint: function () {
    var bf = new Vector3();
    return function (bg) {
      return bf.copy(bg).clamp(this.min, this.max).sub(bg).length();
    };
  }(),
  getBoundingSphere: function () {
    var bf = new Vector3();
    return function (bg) {
      if (bg === undefined) {
        console.error("THREE.Box3: .getBoundingSphere() target is now required");
      }
      this.getCenter(bg.center);
      bg.radius = this.getSize(bf).length() * 0.5;
      return bg;
    };
  }(),
  intersect: function (bf) {
    this.min.max(bf.min);
    this.max.min(bf.max);
    if (this.isEmpty()) {
      this.makeEmpty();
    }
    return this;
  },
  union: function (bf) {
    this.min.min(bf.min);
    this.max.max(bf.max);
    return this;
  },
  applyMatrix4: (lF = [new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3(), new Vector3()], function (bf) {
    if (this.isEmpty()) {
      return this;
    } else {
      lF[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(bf);
      lF[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(bf);
      lF[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(bf);
      lF[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(bf);
      lF[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(bf);
      lF[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(bf);
      lF[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(bf);
      lF[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(bf);
      this.setFromPoints(lF);
      return this;
    }
  }),
  translate: function (bf) {
    this.min.add(bf);
    this.max.add(bf);
    return this;
  },
  equals: function (bf) {
    return bf.min.equals(this.min) && bf.max.equals(this.max);
  }
});
Object.assign(Sphere.prototype, {
  set: function (bf, bg) {
    this.center.copy(bf);
    this.radius = bg;
    return this;
  },
  setFromPoints: (lH = new Box3(), function (bf, bg) {
    var bh = this.center;
    if (bg !== undefined) {
      bh.copy(bg);
    } else {
      lH.setFromPoints(bf).getCenter(bh);
    }
    for (var bi = 0, bF = 0, bG = bf.length; bF < bG; bF++) {
      bi = Math.max(bi, bh.distanceToSquared(bf[bF]));
    }
    this.radius = Math.sqrt(bi);
    return this;
  }),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.center.copy(bf.center);
    this.radius = bf.radius;
    return this;
  },
  empty: function () {
    return this.radius <= 0;
  },
  containsPoint: function (bf) {
    return bf.distanceToSquared(this.center) <= this.radius * this.radius;
  },
  distanceToPoint: function (bf) {
    return bf.distanceTo(this.center) - this.radius;
  },
  intersectsSphere: function (bf) {
    var bg = this.radius + bf.radius;
    return bf.center.distanceToSquared(this.center) <= bg * bg;
  },
  intersectsBox: function (bf) {
    return bf.intersectsSphere(this);
  },
  intersectsPlane: function (bf) {
    return Math.abs(bf.distanceToPoint(this.center)) <= this.radius;
  },
  clampPoint: function (bf, bg) {
    var bh = this.center.distanceToSquared(bf);
    if (bg === undefined) {
      console.warn("THREE.Sphere: .clampPoint() target is now required");
      bg = new Vector3();
    }
    bg.copy(bf);
    if (bh > this.radius * this.radius) {
      bg.sub(this.center).normalize();
      bg.multiplyScalar(this.radius).add(this.center);
    }
    return bg;
  },
  getBoundingBox: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Sphere: .getBoundingBox() target is now required");
      bf = new Box3();
    }
    bf.set(this.center, this.center);
    bf.expandByScalar(this.radius);
    return bf;
  },
  applyMatrix4: function (bf) {
    this.center.applyMatrix4(bf);
    this.radius = this.radius * bf.getMaxScaleOnAxis();
    return this;
  },
  translate: function (bf) {
    this.center.add(bf);
    return this;
  },
  equals: function (bf) {
    return bf.center.equals(this.center) && bf.radius === this.radius;
  }
});
Object.assign(Plane.prototype, {
  set: function (bf, bg) {
    this.normal.copy(bf);
    this.constant = bg;
    return this;
  },
  setComponents: function (bf, bg, bh, bi) {
    this.normal.set(bf, bg, bh);
    this.constant = bi;
    return this;
  },
  setFromNormalAndCoplanarPoint: function (bf, bg) {
    this.normal.copy(bf);
    this.constant = -bg.dot(this.normal);
    return this;
  },
  setFromCoplanarPoints: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    return function (bh, bi, bF) {
      var bG = bf.subVectors(bF, bi).cross(bg.subVectors(bh, bi)).normalize();
      this.setFromNormalAndCoplanarPoint(bG, bh);
      return this;
    };
  }(),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.normal.copy(bf.normal);
    this.constant = bf.constant;
    return this;
  },
  normalize: function () {
    var bf = 1 / this.normal.length();
    this.normal.multiplyScalar(bf);
    this.constant *= bf;
    return this;
  },
  negate: function () {
    this.constant *= -1;
    this.normal.negate();
    return this;
  },
  distanceToPoint: function (bf) {
    return this.normal.dot(bf) + this.constant;
  },
  distanceToSphere: function (bf) {
    return this.distanceToPoint(bf.center) - bf.radius;
  },
  projectPoint: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Plane: .projectPoint() target is now required");
      bg = new Vector3();
    }
    return bg.copy(this.normal).multiplyScalar(-this.distanceToPoint(bf)).add(bf);
  },
  intersectLine: function () {
    var bf = new Vector3();
    return function (bg, bh) {
      if (bh === undefined) {
        console.warn("THREE.Plane: .intersectLine() target is now required");
        bh = new Vector3();
      }
      var bi = bg.delta(bf);
      var bF = this.normal.dot(bi);
      if (bF === 0) {
        if (this.distanceToPoint(bg.start) === 0) {
          return bh.copy(bg.start);
        } else {
          return undefined;
        }
      }
      var bG = -(bg.start.dot(this.normal) + this.constant) / bF;
      if (bG < 0 || bG > 1) {
        return undefined;
      } else {
        return bh.copy(bi).multiplyScalar(bG).add(bg.start);
      }
    };
  }(),
  intersectsLine: function (bf) {
    var bg = this.distanceToPoint(bf.start);
    var bh = this.distanceToPoint(bf.end);
    return bg < 0 && bh > 0 || bh < 0 && bg > 0;
  },
  intersectsBox: function (bf) {
    return bf.intersectsPlane(this);
  },
  intersectsSphere: function (bf) {
    return bf.intersectsPlane(this);
  },
  coplanarPoint: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Plane: .coplanarPoint() target is now required");
      bf = new Vector3();
    }
    return bf.copy(this.normal).multiplyScalar(-this.constant);
  },
  applyMatrix4: function () {
    var bf = new Vector3();
    var bg = new Matrix3();
    return function (bh, bi) {
      var bF = bi || bg.getNormalMatrix(bh);
      var bG = this.coplanarPoint(bf).applyMatrix4(bh);
      var bH = this.normal.applyMatrix3(bF).normalize();
      this.constant = -bG.dot(bH);
      return this;
    };
  }(),
  translate: function (bf) {
    this.constant -= bf.dot(this.normal);
    return this;
  },
  equals: function (bf) {
    return bf.normal.equals(this.normal) && bf.constant === this.constant;
  }
});
Object.assign(Frustum.prototype, {
  set: function (bf, bg, bh, bi, bF, bG) {
    var bH = this.planes;
    bH[0].copy(bf);
    bH[1].copy(bg);
    bH[2].copy(bh);
    bH[3].copy(bi);
    bH[4].copy(bF);
    bH[5].copy(bG);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    for (var bg = this.planes, bh = 0; bh < 6; bh++) {
      bg[bh].copy(bf.planes[bh]);
    }
    return this;
  },
  setFromMatrix: function (bf) {
    var bg = this.planes;
    var bh = bf.elements;
    var bi = bh[0];
    var bF = bh[1];
    var bG = bh[2];
    var bH = bh[3];
    var bI = bh[4];
    var bJ = bh[5];
    var bK = bh[6];
    var bL = bh[7];
    var bM = bh[8];
    var bN = bh[9];
    var bO = bh[10];
    var bP = bh[11];
    var bQ = bh[12];
    var bR = bh[13];
    var bS = bh[14];
    var bT = bh[15];
    bg[0].setComponents(bH - bi, bL - bI, bP - bM, bT - bQ).normalize();
    bg[1].setComponents(bH + bi, bL + bI, bP + bM, bT + bQ).normalize();
    bg[2].setComponents(bH + bF, bL + bJ, bP + bN, bT + bR).normalize();
    bg[3].setComponents(bH - bF, bL - bJ, bP - bN, bT - bR).normalize();
    bg[4].setComponents(bH - bG, bL - bK, bP - bO, bT - bS).normalize();
    bg[5].setComponents(bH + bG, bL + bK, bP + bO, bT + bS).normalize();
    return this;
  },
  intersectsObject: (lJ = new Sphere(), function (bf) {
    var bg = bf.geometry;
    if (bg.boundingSphere === null) {
      bg.computeBoundingSphere();
    }
    lJ.copy(bg.boundingSphere).applyMatrix4(bf.matrixWorld);
    return this.intersectsSphere(lJ);
  }),
  intersectsSprite: function () {
    var bf = new Sphere();
    return function (bg) {
      bf.center.set(0, 0, 0);
      bf.radius = 0.7071067811865476;
      bf.applyMatrix4(bg.matrixWorld);
      return this.intersectsSphere(bf);
    };
  }(),
  intersectsSphere: function (bf) {
    for (var bg = this.planes, bh = bf.center, bi = -bf.radius, bF = 0; bF < 6; bF++) {
      if (bg[bF].distanceToPoint(bh) < bi) {
        return false;
      }
    }
    return true;
  },
  intersectsBox: (lI = new Vector3(), function (bf) {
    for (var bg = this.planes, bh = 0; bh < 6; bh++) {
      var bi = bg[bh];
      lI.x = bi.normal.x > 0 ? bf.max.x : bf.min.x;
      lI.y = bi.normal.y > 0 ? bf.max.y : bf.min.y;
      lI.z = bi.normal.z > 0 ? bf.max.z : bf.min.z;
      if (bi.distanceToPoint(lI) < 0) {
        return false;
      }
    }
    return true;
  }),
  containsPoint: function (bf) {
    for (var bg = this.planes, bh = 0; bh < 6; bh++) {
      if (bg[bh].distanceToPoint(bf) < 0) {
        return false;
      }
    }
    return true;
  }
});
Object.assign(Matrix4.prototype, {
  isMatrix4: true,
  set: function (bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK, bL, bM, bN, bO, bP, bQ) {
    var bR = this.elements;
    bR[0] = bf;
    bR[4] = bg;
    bR[8] = bh;
    bR[12] = bi;
    bR[1] = bF;
    bR[5] = bG;
    bR[9] = bH;
    bR[13] = bI;
    bR[2] = bJ;
    bR[6] = bK;
    bR[10] = bL;
    bR[14] = bM;
    bR[3] = bN;
    bR[7] = bO;
    bR[11] = bP;
    bR[15] = bQ;
    return this;
  },
  identity: function () {
    this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  clone: function () {
    return new Matrix4().fromArray(this.elements);
  },
  copy: function (bf) {
    var bg = this.elements;
    var bh = bf.elements;
    bg[0] = bh[0];
    bg[1] = bh[1];
    bg[2] = bh[2];
    bg[3] = bh[3];
    bg[4] = bh[4];
    bg[5] = bh[5];
    bg[6] = bh[6];
    bg[7] = bh[7];
    bg[8] = bh[8];
    bg[9] = bh[9];
    bg[10] = bh[10];
    bg[11] = bh[11];
    bg[12] = bh[12];
    bg[13] = bh[13];
    bg[14] = bh[14];
    bg[15] = bh[15];
    return this;
  },
  copyPosition: function (bf) {
    var bg = this.elements;
    var bh = bf.elements;
    bg[12] = bh[12];
    bg[13] = bh[13];
    bg[14] = bh[14];
    return this;
  },
  extractBasis: function (bf, bg, bh) {
    bf.setFromMatrixColumn(this, 0);
    bg.setFromMatrixColumn(this, 1);
    bh.setFromMatrixColumn(this, 2);
    return this;
  },
  makeBasis: function (bf, bg, bh) {
    this.set(bf.x, bg.x, bh.x, 0, bf.y, bg.y, bh.y, 0, bf.z, bg.z, bh.z, 0, 0, 0, 0, 1);
    return this;
  },
  extractRotation: function () {
    var bf = new Vector3();
    return function (bg) {
      var bh = this.elements;
      var bi = bg.elements;
      var bF = 1 / bf.setFromMatrixColumn(bg, 0).length();
      var bG = 1 / bf.setFromMatrixColumn(bg, 1).length();
      var bH = 1 / bf.setFromMatrixColumn(bg, 2).length();
      bh[0] = bi[0] * bF;
      bh[1] = bi[1] * bF;
      bh[2] = bi[2] * bF;
      bh[3] = 0;
      bh[4] = bi[4] * bG;
      bh[5] = bi[5] * bG;
      bh[6] = bi[6] * bG;
      bh[7] = 0;
      bh[8] = bi[8] * bH;
      bh[9] = bi[9] * bH;
      bh[10] = bi[10] * bH;
      bh[11] = 0;
      bh[12] = 0;
      bh[13] = 0;
      bh[14] = 0;
      bh[15] = 1;
      return this;
    };
  }(),
  makeRotationFromEuler: function (bf) {
    if (!bf || !bf.isEuler) {
      console.error("THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order.");
    }
    var bg = this.elements;
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    var bG = Math.cos(bh);
    var bH = Math.sin(bh);
    var bI = Math.cos(bi);
    var bJ = Math.sin(bi);
    var bK = Math.cos(bF);
    var bL = Math.sin(bF);
    if (bf.order === "XYZ") {
      var bM = bG * bK;
      var bN = bG * bL;
      var bO = bH * bK;
      var bP = bH * bL;
      bg[0] = bI * bK;
      bg[4] = -bI * bL;
      bg[8] = bJ;
      bg[1] = bN + bO * bJ;
      bg[5] = bM - bP * bJ;
      bg[9] = -bH * bI;
      bg[2] = bP - bM * bJ;
      bg[6] = bO + bN * bJ;
      bg[10] = bG * bI;
    } else if (bf.order === "YXZ") {
      var bQ = bI * bK;
      var bR = bI * bL;
      var bS = bJ * bK;
      var bT = bJ * bL;
      bg[0] = bQ + bT * bH;
      bg[4] = bS * bH - bR;
      bg[8] = bG * bJ;
      bg[1] = bG * bL;
      bg[5] = bG * bK;
      bg[9] = -bH;
      bg[2] = bR * bH - bS;
      bg[6] = bT + bQ * bH;
      bg[10] = bG * bI;
    } else if (bf.order === "ZXY") {
      bQ = bI * bK;
      bR = bI * bL;
      bS = bJ * bK;
      bT = bJ * bL;
      bg[0] = bQ - bT * bH;
      bg[4] = -bG * bL;
      bg[8] = bS + bR * bH;
      bg[1] = bR + bS * bH;
      bg[5] = bG * bK;
      bg[9] = bT - bQ * bH;
      bg[2] = -bG * bJ;
      bg[6] = bH;
      bg[10] = bG * bI;
    } else if (bf.order === "ZYX") {
      bM = bG * bK;
      bN = bG * bL;
      bO = bH * bK;
      bP = bH * bL;
      bg[0] = bI * bK;
      bg[4] = bO * bJ - bN;
      bg[8] = bM * bJ + bP;
      bg[1] = bI * bL;
      bg[5] = bP * bJ + bM;
      bg[9] = bN * bJ - bO;
      bg[2] = -bJ;
      bg[6] = bH * bI;
      bg[10] = bG * bI;
    } else if (bf.order === "YZX") {
      var bU = bG * bI;
      var bV = bG * bJ;
      var bW = bH * bI;
      var bX = bH * bJ;
      bg[0] = bI * bK;
      bg[4] = bX - bU * bL;
      bg[8] = bW * bL + bV;
      bg[1] = bL;
      bg[5] = bG * bK;
      bg[9] = -bH * bK;
      bg[2] = -bJ * bK;
      bg[6] = bV * bL + bW;
      bg[10] = bU - bX * bL;
    } else if (bf.order === "XZY") {
      bU = bG * bI;
      bV = bG * bJ;
      bW = bH * bI;
      bX = bH * bJ;
      bg[0] = bI * bK;
      bg[4] = -bL;
      bg[8] = bJ * bK;
      bg[1] = bU * bL + bX;
      bg[5] = bG * bK;
      bg[9] = bV * bL - bW;
      bg[2] = bW * bL - bV;
      bg[6] = bH * bK;
      bg[10] = bX * bL + bU;
    }
    bg[3] = 0;
    bg[7] = 0;
    bg[11] = 0;
    bg[12] = 0;
    bg[13] = 0;
    bg[14] = 0;
    bg[15] = 1;
    return this;
  },
  makeRotationFromQuaternion: (lP = new Vector3(0, 0, 0), lQ = new Vector3(1, 1, 1), function (bf) {
    return this.compose(lP, bf, lQ);
  }),
  lookAt: (lM = new Vector3(), lN = new Vector3(), lO = new Vector3(), function (bf, bg, bh) {
    var bi = this.elements;
    lO.subVectors(bf, bg);
    if (lO.lengthSq() === 0) {
      lO.z = 1;
    }
    lO.normalize();
    lM.crossVectors(bh, lO);
    if (lM.lengthSq() === 0) {
      if (Math.abs(bh.z) === 1) {
        lO.x += 0.0001;
      } else {
        lO.z += 0.0001;
      }
      lO.normalize();
      lM.crossVectors(bh, lO);
    }
    lM.normalize();
    lN.crossVectors(lO, lM);
    bi[0] = lM.x;
    bi[4] = lN.x;
    bi[8] = lO.x;
    bi[1] = lM.y;
    bi[5] = lN.y;
    bi[9] = lO.y;
    bi[2] = lM.z;
    bi[6] = lN.z;
    bi[10] = lO.z;
    return this;
  }),
  multiply: function (bf, bg) {
    if (bg !== undefined) {
      console.warn("THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead.");
      return this.multiplyMatrices(bf, bg);
    } else {
      return this.multiplyMatrices(this, bf);
    }
  },
  premultiply: function (bf) {
    return this.multiplyMatrices(bf, this);
  },
  multiplyMatrices: function (bf, bg) {
    var bh = bf.elements;
    var bi = bg.elements;
    var bF = this.elements;
    var bG = bh[0];
    var bH = bh[4];
    var bI = bh[8];
    var bJ = bh[12];
    var bK = bh[1];
    var bL = bh[5];
    var bM = bh[9];
    var bN = bh[13];
    var bO = bh[2];
    var bP = bh[6];
    var bQ = bh[10];
    var bR = bh[14];
    var bS = bh[3];
    var bT = bh[7];
    var bU = bh[11];
    var bV = bh[15];
    var bW = bi[0];
    var bX = bi[4];
    var bY = bi[8];
    var bZ = bi[12];
    var c0 = bi[1];
    var c1 = bi[5];
    var c2 = bi[9];
    var c3 = bi[13];
    var c4 = bi[2];
    var c5 = bi[6];
    var c6 = bi[10];
    var c7 = bi[14];
    var c8 = bi[3];
    var c9 = bi[7];
    var ca = bi[11];
    var cb = bi[15];
    bF[0] = bG * bW + bH * c0 + bI * c4 + bJ * c8;
    bF[4] = bG * bX + bH * c1 + bI * c5 + bJ * c9;
    bF[8] = bG * bY + bH * c2 + bI * c6 + bJ * ca;
    bF[12] = bG * bZ + bH * c3 + bI * c7 + bJ * cb;
    bF[1] = bK * bW + bL * c0 + bM * c4 + bN * c8;
    bF[5] = bK * bX + bL * c1 + bM * c5 + bN * c9;
    bF[9] = bK * bY + bL * c2 + bM * c6 + bN * ca;
    bF[13] = bK * bZ + bL * c3 + bM * c7 + bN * cb;
    bF[2] = bO * bW + bP * c0 + bQ * c4 + bR * c8;
    bF[6] = bO * bX + bP * c1 + bQ * c5 + bR * c9;
    bF[10] = bO * bY + bP * c2 + bQ * c6 + bR * ca;
    bF[14] = bO * bZ + bP * c3 + bQ * c7 + bR * cb;
    bF[3] = bS * bW + bT * c0 + bU * c4 + bV * c8;
    bF[7] = bS * bX + bT * c1 + bU * c5 + bV * c9;
    bF[11] = bS * bY + bT * c2 + bU * c6 + bV * ca;
    bF[15] = bS * bZ + bT * c3 + bU * c7 + bV * cb;
    return this;
  },
  multiplyScalar: function (bf) {
    var bg = this.elements;
    bg[0] *= bf;
    bg[4] *= bf;
    bg[8] *= bf;
    bg[12] *= bf;
    bg[1] *= bf;
    bg[5] *= bf;
    bg[9] *= bf;
    bg[13] *= bf;
    bg[2] *= bf;
    bg[6] *= bf;
    bg[10] *= bf;
    bg[14] *= bf;
    bg[3] *= bf;
    bg[7] *= bf;
    bg[11] *= bf;
    bg[15] *= bf;
    return this;
  },
  applyToBufferAttribute: function () {
    var bf = new Vector3();
    return function (bg) {
      for (var bh = 0, bi = bg.count; bh < bi; bh++) {
        bf.x = bg.getX(bh);
        bf.y = bg.getY(bh);
        bf.z = bg.getZ(bh);
        bf.applyMatrix4(this);
        bg.setXYZ(bh, bf.x, bf.y, bf.z);
      }
      return bg;
    };
  }(),
  determinant: function () {
    var bf = this.elements;
    var bg = bf[0];
    var bh = bf[4];
    var bi = bf[8];
    var bF = bf[12];
    var bG = bf[1];
    var bH = bf[5];
    var bI = bf[9];
    var bJ = bf[13];
    var bK = bf[2];
    var bL = bf[6];
    var bM = bf[10];
    var bN = bf[14];
    return bf[3] * (+bF * bI * bL - bi * bJ * bL - bF * bH * bM + bh * bJ * bM + bi * bH * bN - bh * bI * bN) + bf[7] * (+bg * bI * bN - bg * bJ * bM + bF * bG * bM - bi * bG * bN + bi * bJ * bK - bF * bI * bK) + bf[11] * (+bg * bJ * bL - bg * bH * bN - bF * bG * bL + bh * bG * bN + bF * bH * bK - bh * bJ * bK) + bf[15] * (-bi * bH * bK - bg * bI * bL + bg * bH * bM + bi * bG * bL - bh * bG * bM + bh * bI * bK);
  },
  transpose: function () {
    var bf;
    var bg = this.elements;
    bf = bg[1];
    bg[1] = bg[4];
    bg[4] = bf;
    bf = bg[2];
    bg[2] = bg[8];
    bg[8] = bf;
    bf = bg[6];
    bg[6] = bg[9];
    bg[9] = bf;
    bf = bg[3];
    bg[3] = bg[12];
    bg[12] = bf;
    bf = bg[7];
    bg[7] = bg[13];
    bg[13] = bf;
    bf = bg[11];
    bg[11] = bg[14];
    bg[14] = bf;
    return this;
  },
  setPosition: function (bf, bg, bh) {
    var bi = this.elements;
    if (bf.isVector3) {
      bi[12] = bf.x;
      bi[13] = bf.y;
      bi[14] = bf.z;
    } else {
      bi[12] = bf;
      bi[13] = bg;
      bi[14] = bh;
    }
    return this;
  },
  getInverse: function (bf, bg) {
    var bh = this.elements;
    var bi = bf.elements;
    var bF = bi[0];
    var bG = bi[1];
    var bH = bi[2];
    var bI = bi[3];
    var bJ = bi[4];
    var bK = bi[5];
    var bL = bi[6];
    var bM = bi[7];
    var bN = bi[8];
    var bO = bi[9];
    var bP = bi[10];
    var bQ = bi[11];
    var bR = bi[12];
    var bS = bi[13];
    var bT = bi[14];
    var bU = bi[15];
    var bV = bO * bT * bM - bS * bP * bM + bS * bL * bQ - bK * bT * bQ - bO * bL * bU + bK * bP * bU;
    var bW = bR * bP * bM - bN * bT * bM - bR * bL * bQ + bJ * bT * bQ + bN * bL * bU - bJ * bP * bU;
    var bX = bN * bS * bM - bR * bO * bM + bR * bK * bQ - bJ * bS * bQ - bN * bK * bU + bJ * bO * bU;
    var bY = bR * bO * bL - bN * bS * bL - bR * bK * bP + bJ * bS * bP + bN * bK * bT - bJ * bO * bT;
    var bZ = bF * bV + bG * bW + bH * bX + bI * bY;
    if (bZ === 0) {
      var c0 = "THREE.Matrix4: .getInverse() can't invert matrix, determinant is 0";
      if (bg === true) {
        throw new Error(c0);
      }
      console.warn(c0);
      return this.identity();
    }
    var c1 = 1 / bZ;
    bh[0] = bV * c1;
    bh[1] = (bS * bP * bI - bO * bT * bI - bS * bH * bQ + bG * bT * bQ + bO * bH * bU - bG * bP * bU) * c1;
    bh[2] = (bK * bT * bI - bS * bL * bI + bS * bH * bM - bG * bT * bM - bK * bH * bU + bG * bL * bU) * c1;
    bh[3] = (bO * bL * bI - bK * bP * bI - bO * bH * bM + bG * bP * bM + bK * bH * bQ - bG * bL * bQ) * c1;
    bh[4] = bW * c1;
    bh[5] = (bN * bT * bI - bR * bP * bI + bR * bH * bQ - bF * bT * bQ - bN * bH * bU + bF * bP * bU) * c1;
    bh[6] = (bR * bL * bI - bJ * bT * bI - bR * bH * bM + bF * bT * bM + bJ * bH * bU - bF * bL * bU) * c1;
    bh[7] = (bJ * bP * bI - bN * bL * bI + bN * bH * bM - bF * bP * bM - bJ * bH * bQ + bF * bL * bQ) * c1;
    bh[8] = bX * c1;
    bh[9] = (bR * bO * bI - bN * bS * bI - bR * bG * bQ + bF * bS * bQ + bN * bG * bU - bF * bO * bU) * c1;
    bh[10] = (bJ * bS * bI - bR * bK * bI + bR * bG * bM - bF * bS * bM - bJ * bG * bU + bF * bK * bU) * c1;
    bh[11] = (bN * bK * bI - bJ * bO * bI - bN * bG * bM + bF * bO * bM + bJ * bG * bQ - bF * bK * bQ) * c1;
    bh[12] = bY * c1;
    bh[13] = (bN * bS * bH - bR * bO * bH + bR * bG * bP - bF * bS * bP - bN * bG * bT + bF * bO * bT) * c1;
    bh[14] = (bR * bK * bH - bJ * bS * bH - bR * bG * bL + bF * bS * bL + bJ * bG * bT - bF * bK * bT) * c1;
    bh[15] = (bJ * bO * bH - bN * bK * bH + bN * bG * bL - bF * bO * bL - bJ * bG * bP + bF * bK * bP) * c1;
    return this;
  },
  scale: function (bf) {
    var bg = this.elements;
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    bg[0] *= bh;
    bg[4] *= bi;
    bg[8] *= bF;
    bg[1] *= bh;
    bg[5] *= bi;
    bg[9] *= bF;
    bg[2] *= bh;
    bg[6] *= bi;
    bg[10] *= bF;
    bg[3] *= bh;
    bg[7] *= bi;
    bg[11] *= bF;
    return this;
  },
  getMaxScaleOnAxis: function () {
    var bf = this.elements;
    var bg = bf[0] * bf[0] + bf[1] * bf[1] + bf[2] * bf[2];
    var bh = bf[4] * bf[4] + bf[5] * bf[5] + bf[6] * bf[6];
    var bi = bf[8] * bf[8] + bf[9] * bf[9] + bf[10] * bf[10];
    return Math.sqrt(Math.max(bg, bh, bi));
  },
  makeTranslation: function (bf, bg, bh) {
    this.set(1, 0, 0, bf, 0, 1, 0, bg, 0, 0, 1, bh, 0, 0, 0, 1);
    return this;
  },
  makeRotationX: function (bf) {
    var bg = Math.cos(bf);
    var bh = Math.sin(bf);
    this.set(1, 0, 0, 0, 0, bg, -bh, 0, 0, bh, bg, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationY: function (bf) {
    var bg = Math.cos(bf);
    var bh = Math.sin(bf);
    this.set(bg, 0, bh, 0, 0, 1, 0, 0, -bh, 0, bg, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationZ: function (bf) {
    var bg = Math.cos(bf);
    var bh = Math.sin(bf);
    this.set(bg, -bh, 0, 0, bh, bg, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
    return this;
  },
  makeRotationAxis: function (bf, bg) {
    var bh = Math.cos(bg);
    var bi = Math.sin(bg);
    var bF = 1 - bh;
    var bG = bf.x;
    var bH = bf.y;
    var bI = bf.z;
    var bJ = bF * bG;
    var bK = bF * bH;
    this.set(bJ * bG + bh, bJ * bH - bi * bI, bJ * bI + bi * bH, 0, bJ * bH + bi * bI, bK * bH + bh, bK * bI - bi * bG, 0, bJ * bI - bi * bH, bK * bI + bi * bG, bF * bI * bI + bh, 0, 0, 0, 0, 1);
    return this;
  },
  makeScale: function (bf, bg, bh) {
    this.set(bf, 0, 0, 0, 0, bg, 0, 0, 0, 0, bh, 0, 0, 0, 0, 1);
    return this;
  },
  makeShear: function (bf, bg, bh) {
    this.set(1, bg, bh, 0, bf, 1, bh, 0, bf, bg, 1, 0, 0, 0, 0, 1);
    return this;
  },
  compose: function (bf, bg, bh) {
    var bi = this.elements;
    var bF = bg._x;
    var bG = bg._y;
    var bH = bg._z;
    var bI = bg._w;
    var bJ = bF + bF;
    var bK = bG + bG;
    var bL = bH + bH;
    var bM = bF * bJ;
    var bN = bF * bK;
    var bO = bF * bL;
    var bP = bG * bK;
    var bQ = bG * bL;
    var bR = bH * bL;
    var bS = bI * bJ;
    var bT = bI * bK;
    var bU = bI * bL;
    var bV = bh.x;
    var bW = bh.y;
    var bX = bh.z;
    bi[0] = (1 - (bP + bR)) * bV;
    bi[1] = (bN + bU) * bV;
    bi[2] = (bO - bT) * bV;
    bi[3] = 0;
    bi[4] = (bN - bU) * bW;
    bi[5] = (1 - (bM + bR)) * bW;
    bi[6] = (bQ + bS) * bW;
    bi[7] = 0;
    bi[8] = (bO + bT) * bX;
    bi[9] = (bQ - bS) * bX;
    bi[10] = (1 - (bM + bP)) * bX;
    bi[11] = 0;
    bi[12] = bf.x;
    bi[13] = bf.y;
    bi[14] = bf.z;
    bi[15] = 1;
    return this;
  },
  decompose: (lK = new Vector3(), lL = new Matrix4(), function (bf, bg, bh) {
    var bi = this.elements;
    var bF = lK.set(bi[0], bi[1], bi[2]).length();
    var bG = lK.set(bi[4], bi[5], bi[6]).length();
    var bH = lK.set(bi[8], bi[9], bi[10]).length();
    if (this.determinant() < 0) {
      bF = -bF;
    }
    bf.x = bi[12];
    bf.y = bi[13];
    bf.z = bi[14];
    lL.copy(this);
    var bI = 1 / bF;
    var bJ = 1 / bG;
    var bK = 1 / bH;
    lL.elements[0] *= bI;
    lL.elements[1] *= bI;
    lL.elements[2] *= bI;
    lL.elements[4] *= bJ;
    lL.elements[5] *= bJ;
    lL.elements[6] *= bJ;
    lL.elements[8] *= bK;
    lL.elements[9] *= bK;
    lL.elements[10] *= bK;
    bg.setFromRotationMatrix(lL);
    bh.x = bF;
    bh.y = bG;
    bh.z = bH;
    return this;
  }),
  makePerspective: function (bf, bg, bh, bi, bF, bG) {
    if (bG === undefined) {
      console.warn("THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs.");
    }
    var bH = this.elements;
    var bI = bF * 2 / (bg - bf);
    var bJ = bF * 2 / (bh - bi);
    var bK = (bg + bf) / (bg - bf);
    var bL = (bh + bi) / (bh - bi);
    var bM = -(bG + bF) / (bG - bF);
    var bN = bG * -2 * bF / (bG - bF);
    bH[0] = bI;
    bH[4] = 0;
    bH[8] = bK;
    bH[12] = 0;
    bH[1] = 0;
    bH[5] = bJ;
    bH[9] = bL;
    bH[13] = 0;
    bH[2] = 0;
    bH[6] = 0;
    bH[10] = bM;
    bH[14] = bN;
    bH[3] = 0;
    bH[7] = 0;
    bH[11] = -1;
    bH[15] = 0;
    return this;
  },
  makeOrthographic: function (bf, bg, bh, bi, bF, bG) {
    var bH = this.elements;
    var bI = 1 / (bg - bf);
    var bJ = 1 / (bh - bi);
    var bK = 1 / (bG - bF);
    var bL = (bg + bf) * bI;
    var bM = (bh + bi) * bJ;
    var bN = (bG + bF) * bK;
    bH[0] = bI * 2;
    bH[4] = 0;
    bH[8] = 0;
    bH[12] = -bL;
    bH[1] = 0;
    bH[5] = bJ * 2;
    bH[9] = 0;
    bH[13] = -bM;
    bH[2] = 0;
    bH[6] = 0;
    bH[10] = bK * -2;
    bH[14] = -bN;
    bH[3] = 0;
    bH[7] = 0;
    bH[11] = 0;
    bH[15] = 1;
    return this;
  },
  equals: function (bf) {
    for (var bg = this.elements, bh = bf.elements, bi = 0; bi < 16; bi++) {
      if (bg[bi] !== bh[bi]) {
        return false;
      }
    }
    return true;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    for (var bh = 0; bh < 16; bh++) {
      this.elements[bh] = bf[bh + bg];
    }
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    var bh = this.elements;
    bf[bg] = bh[0];
    bf[bg + 1] = bh[1];
    bf[bg + 2] = bh[2];
    bf[bg + 3] = bh[3];
    bf[bg + 4] = bh[4];
    bf[bg + 5] = bh[5];
    bf[bg + 6] = bh[6];
    bf[bg + 7] = bh[7];
    bf[bg + 8] = bh[8];
    bf[bg + 9] = bh[9];
    bf[bg + 10] = bh[10];
    bf[bg + 11] = bh[11];
    bf[bg + 12] = bh[12];
    bf[bg + 13] = bh[13];
    bf[bg + 14] = bh[14];
    bf[bg + 15] = bh[15];
    return bf;
  }
});
export var ShaderChunk = {
  alphamap_fragment: "#ifdef USE_ALPHAMAP\n\tdiffuseColor.a *= texture2D( alphaMap, vUv ).g;\n#endif",
  alphamap_pars_fragment: "#ifdef USE_ALPHAMAP\n\tuniform sampler2D alphaMap;\n#endif",
  alphatest_fragment: "#ifdef ALPHATEST\n\tif ( diffuseColor.a < ALPHATEST ) discard;\n#endif",
  aomap_fragment: "#ifdef USE_AOMAP\n\tfloat ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;\n\treflectedLight.indirectDiffuse *= ambientOcclusion;\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\treflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.specularRoughness );\n\t#endif\n#endif",
  aomap_pars_fragment: "#ifdef USE_AOMAP\n\tuniform sampler2D aoMap;\n\tuniform float aoMapIntensity;\n#endif",
  begin_vertex: "vec3 transformed = vec3( position );",
  beginnormal_vertex: "vec3 objectNormal = vec3( normal );\n#ifdef USE_TANGENT\n\tvec3 objectTangent = vec3( tangent.xyz );\n#endif",
  bsdfs: "vec2 integrateSpecularBRDF( const in float dotNV, const in float roughness ) {\n\tconst vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );\n\tconst vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );\n\tvec4 r = roughness * c0 + c1;\n\tfloat a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;\n\treturn vec2( -1.04, 1.04 ) * a004 + r.zw;\n}\nfloat punctualLightIntensityToIrradianceFactor( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {\n#if defined ( PHYSICALLY_CORRECT_LIGHTS )\n\tfloat distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );\n\tif( cutoffDistance > 0.0 ) {\n\t\tdistanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );\n\t}\n\treturn distanceFalloff;\n#else\n\tif( cutoffDistance > 0.0 && decayExponent > 0.0 ) {\n\t\treturn pow( saturate( -lightDistance / cutoffDistance + 1.0 ), decayExponent );\n\t}\n\treturn 1.0;\n#endif\n}\nvec3 BRDF_Diffuse_Lambert( const in vec3 diffuseColor ) {\n\treturn RECIPROCAL_PI * diffuseColor;\n}\nvec3 F_Schlick( const in vec3 specularColor, const in float dotLH ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotLH - 6.98316 ) * dotLH );\n\treturn ( 1.0 - specularColor ) * fresnel + specularColor;\n}\nvec3 F_Schlick_RoughnessDependent( const in vec3 F0, const in float dotNV, const in float roughness ) {\n\tfloat fresnel = exp2( ( -5.55473 * dotNV - 6.98316 ) * dotNV );\n\tvec3 Fr = max( vec3( 1.0 - roughness ), F0 ) - F0;\n\treturn Fr * fresnel + F0;\n}\nfloat G_GGX_Smith( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gl = dotNL + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\tfloat gv = dotNV + sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\treturn 1.0 / ( gl * gv );\n}\nfloat G_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {\n\tfloat a2 = pow2( alpha );\n\tfloat gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );\n\tfloat gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );\n\treturn 0.5 / max( gv + gl, EPSILON );\n}\nfloat D_GGX( const in float alpha, const in float dotNH ) {\n\tfloat a2 = pow2( alpha );\n\tfloat denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;\n\treturn RECIPROCAL_PI * a2 / pow2( denom );\n}\nvec3 BRDF_Specular_GGX( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat alpha = pow2( roughness );\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNL = saturate( dot( geometry.normal, incidentLight.direction ) );\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_GGX_SmithCorrelated( alpha, dotNL, dotNV );\n\tfloat D = D_GGX( alpha, dotNH );\n\treturn F * ( G * D );\n}\nvec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {\n\tconst float LUT_SIZE  = 64.0;\n\tconst float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;\n\tconst float LUT_BIAS  = 0.5 / LUT_SIZE;\n\tfloat dotNV = saturate( dot( N, V ) );\n\tvec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );\n\tuv = uv * LUT_SCALE + LUT_BIAS;\n\treturn uv;\n}\nfloat LTC_ClippedSphereFormFactor( const in vec3 f ) {\n\tfloat l = length( f );\n\treturn max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );\n}\nvec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {\n\tfloat x = dot( v1, v2 );\n\tfloat y = abs( x );\n\tfloat a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;\n\tfloat b = 3.4175940 + ( 4.1616724 + y ) * y;\n\tfloat v = a / b;\n\tfloat theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;\n\treturn cross( v1, v2 ) * theta_sintheta;\n}\nvec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {\n\tvec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];\n\tvec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];\n\tvec3 lightNormal = cross( v1, v2 );\n\tif( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );\n\tvec3 T1, T2;\n\tT1 = normalize( V - N * dot( V, N ) );\n\tT2 = - cross( N, T1 );\n\tmat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );\n\tvec3 coords[ 4 ];\n\tcoords[ 0 ] = mat * ( rectCoords[ 0 ] - P );\n\tcoords[ 1 ] = mat * ( rectCoords[ 1 ] - P );\n\tcoords[ 2 ] = mat * ( rectCoords[ 2 ] - P );\n\tcoords[ 3 ] = mat * ( rectCoords[ 3 ] - P );\n\tcoords[ 0 ] = normalize( coords[ 0 ] );\n\tcoords[ 1 ] = normalize( coords[ 1 ] );\n\tcoords[ 2 ] = normalize( coords[ 2 ] );\n\tcoords[ 3 ] = normalize( coords[ 3 ] );\n\tvec3 vectorFormFactor = vec3( 0.0 );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );\n\tvectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );\n\tfloat result = LTC_ClippedSphereFormFactor( vectorFormFactor );\n\treturn vec3( result );\n}\nvec3 BRDF_Specular_GGX_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\treturn specularColor * brdf.x + brdf.y;\n}\nvoid BRDF_Specular_Multiscattering_Environment( const in GeometricContext geometry, const in vec3 specularColor, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {\n\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\tvec3 F = F_Schlick_RoughnessDependent( specularColor, dotNV, roughness );\n\tvec2 brdf = integrateSpecularBRDF( dotNV, roughness );\n\tvec3 FssEss = F * brdf.x + brdf.y;\n\tfloat Ess = brdf.x + brdf.y;\n\tfloat Ems = 1.0 - Ess;\n\tvec3 Favg = specularColor + ( 1.0 - specularColor ) * 0.047619;\tvec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );\n\tsingleScatter += FssEss;\n\tmultiScatter += Fms * Ems;\n}\nfloat G_BlinnPhong_Implicit( ) {\n\treturn 0.25;\n}\nfloat D_BlinnPhong( const in float shininess, const in float dotNH ) {\n\treturn RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );\n}\nvec3 BRDF_Specular_BlinnPhong( const in IncidentLight incidentLight, const in GeometricContext geometry, const in vec3 specularColor, const in float shininess ) {\n\tvec3 halfDir = normalize( incidentLight.direction + geometry.viewDir );\n\tfloat dotNH = saturate( dot( geometry.normal, halfDir ) );\n\tfloat dotLH = saturate( dot( incidentLight.direction, halfDir ) );\n\tvec3 F = F_Schlick( specularColor, dotLH );\n\tfloat G = G_BlinnPhong_Implicit( );\n\tfloat D = D_BlinnPhong( shininess, dotNH );\n\treturn F * ( G * D );\n}\nfloat GGXRoughnessToBlinnExponent( const in float ggxRoughness ) {\n\treturn ( 2.0 / pow2( ggxRoughness + 0.0001 ) - 2.0 );\n}\nfloat BlinnExponentToGGXRoughness( const in float blinnExponent ) {\n\treturn sqrt( 2.0 / ( blinnExponent + 2.0 ) );\n}",
  bumpmap_pars_fragment: "#ifdef USE_BUMPMAP\n\tuniform sampler2D bumpMap;\n\tuniform float bumpScale;\n\tvec2 dHdxy_fwd() {\n\t\tvec2 dSTdx = dFdx( vUv );\n\t\tvec2 dSTdy = dFdy( vUv );\n\t\tfloat Hll = bumpScale * texture2D( bumpMap, vUv ).x;\n\t\tfloat dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;\n\t\tfloat dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;\n\t\treturn vec2( dBx, dBy );\n\t}\n\tvec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy ) {\n\t\tvec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );\n\t\tvec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );\n\t\tvec3 vN = surf_norm;\n\t\tvec3 R1 = cross( vSigmaY, vN );\n\t\tvec3 R2 = cross( vN, vSigmaX );\n\t\tfloat fDet = dot( vSigmaX, R1 );\n\t\tfDet *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\tvec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );\n\t\treturn normalize( abs( fDet ) * surf_norm - vGrad );\n\t}\n#endif",
  clipping_planes_fragment: "#if NUM_CLIPPING_PLANES > 0\n\tvec4 plane;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {\n\t\tplane = clippingPlanes[ i ];\n\t\tif ( dot( vViewPosition, plane.xyz ) > plane.w ) discard;\n\t}\n\t#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES\n\t\tbool clipped = true;\n\t\t#pragma unroll_loop\n\t\tfor ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {\n\t\t\tplane = clippingPlanes[ i ];\n\t\t\tclipped = ( dot( vViewPosition, plane.xyz ) > plane.w ) && clipped;\n\t\t}\n\t\tif ( clipped ) discard;\n\t#endif\n#endif",
  clipping_planes_pars_fragment: "#if NUM_CLIPPING_PLANES > 0\n\t#if ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\t\tvarying vec3 vViewPosition;\n\t#endif\n\tuniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];\n#endif",
  clipping_planes_pars_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvarying vec3 vViewPosition;\n#endif",
  clipping_planes_vertex: "#if NUM_CLIPPING_PLANES > 0 && ! defined( PHYSICAL ) && ! defined( PHONG ) && ! defined( MATCAP )\n\tvViewPosition = - mvPosition.xyz;\n#endif",
  color_fragment: "#ifdef USE_COLOR\n\tdiffuseColor.rgb *= vColor;\n#endif",
  color_pars_fragment: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
  color_pars_vertex: "#ifdef USE_COLOR\n\tvarying vec3 vColor;\n#endif",
  color_vertex: "#ifdef USE_COLOR\n\tvColor.xyz = color.xyz;\n#endif",
  common: "#define PI 3.14159265359\n#define PI2 6.28318530718\n#define PI_HALF 1.5707963267949\n#define RECIPROCAL_PI 0.31830988618\n#define RECIPROCAL_PI2 0.15915494\n#define LOG2 1.442695\n#define EPSILON 1e-6\n#define saturate(a) clamp( a, 0.0, 1.0 )\n#define whiteCompliment(a) ( 1.0 - saturate( a ) )\nfloat pow2( const in float x ) { return x*x; }\nfloat pow3( const in float x ) { return x*x*x; }\nfloat pow4( const in float x ) { float x2 = x*x; return x2*x2; }\nfloat average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }\nhighp float rand( const in vec2 uv ) {\n\tconst highp float a = 12.9898, b = 78.233, c = 43758.5453;\n\thighp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );\n\treturn fract(sin(sn) * c);\n}\nstruct IncidentLight {\n\tvec3 color;\n\tvec3 direction;\n\tbool visible;\n};\nstruct ReflectedLight {\n\tvec3 directDiffuse;\n\tvec3 directSpecular;\n\tvec3 indirectDiffuse;\n\tvec3 indirectSpecular;\n};\nstruct GeometricContext {\n\tvec3 position;\n\tvec3 normal;\n\tvec3 viewDir;\n};\nvec3 transformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );\n}\nvec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {\n\treturn normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );\n}\nvec3 projectOnPlane(in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\tfloat distance = dot( planeNormal, point - pointOnPlane );\n\treturn - distance * planeNormal + point;\n}\nfloat sideOfPlane( in vec3 point, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn sign( dot( point - pointOnPlane, planeNormal ) );\n}\nvec3 linePlaneIntersect( in vec3 pointOnLine, in vec3 lineDirection, in vec3 pointOnPlane, in vec3 planeNormal ) {\n\treturn lineDirection * ( dot( planeNormal, pointOnPlane - pointOnLine ) / dot( planeNormal, lineDirection ) ) + pointOnLine;\n}\nmat3 transposeMat3( const in mat3 m ) {\n\tmat3 tmp;\n\ttmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );\n\ttmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );\n\ttmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );\n\treturn tmp;\n}\nfloat linearToRelativeLuminance( const in vec3 color ) {\n\tvec3 weights = vec3( 0.2126, 0.7152, 0.0722 );\n\treturn dot( weights, color.rgb );\n}",
  cube_uv_reflection_fragment: "#ifdef ENVMAP_TYPE_CUBE_UV\n#define cubeUV_textureSize (1024.0)\nint getFaceFromDirection(vec3 direction) {\n\tvec3 absDirection = abs(direction);\n\tint face = -1;\n\tif( absDirection.x > absDirection.z ) {\n\t\tif(absDirection.x > absDirection.y )\n\t\t\tface = direction.x > 0.0 ? 0 : 3;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\telse {\n\t\tif(absDirection.z > absDirection.y )\n\t\t\tface = direction.z > 0.0 ? 2 : 5;\n\t\telse\n\t\t\tface = direction.y > 0.0 ? 1 : 4;\n\t}\n\treturn face;\n}\n#define cubeUV_maxLods1  (log2(cubeUV_textureSize*0.25) - 1.0)\n#define cubeUV_rangeClamp (exp2((6.0 - 1.0) * 2.0))\nvec2 MipLevelInfo( vec3 vec, float roughnessLevel, float roughness ) {\n\tfloat scale = exp2(cubeUV_maxLods1 - roughnessLevel);\n\tfloat dxRoughness = dFdx(roughness);\n\tfloat dyRoughness = dFdy(roughness);\n\tvec3 dx = dFdx( vec * scale * dxRoughness );\n\tvec3 dy = dFdy( vec * scale * dyRoughness );\n\tfloat d = max( dot( dx, dx ), dot( dy, dy ) );\n\td = clamp(d, 1.0, cubeUV_rangeClamp);\n\tfloat mipLevel = 0.5 * log2(d);\n\treturn vec2(floor(mipLevel), fract(mipLevel));\n}\n#define cubeUV_maxLods2 (log2(cubeUV_textureSize*0.25) - 2.0)\n#define cubeUV_rcpTextureSize (1.0 / cubeUV_textureSize)\nvec2 getCubeUV(vec3 direction, float roughnessLevel, float mipLevel) {\n\tmipLevel = roughnessLevel > cubeUV_maxLods2 - 3.0 ? 0.0 : mipLevel;\n\tfloat a = 16.0 * cubeUV_rcpTextureSize;\n\tvec2 exp2_packed = exp2( vec2( roughnessLevel, mipLevel ) );\n\tvec2 rcp_exp2_packed = vec2( 1.0 ) / exp2_packed;\n\tfloat powScale = exp2_packed.x * exp2_packed.y;\n\tfloat scale = rcp_exp2_packed.x * rcp_exp2_packed.y * 0.25;\n\tfloat mipOffset = 0.75*(1.0 - rcp_exp2_packed.y) * rcp_exp2_packed.x;\n\tbool bRes = mipLevel == 0.0;\n\tscale =  bRes && (scale < a) ? a : scale;\n\tvec3 r;\n\tvec2 offset;\n\tint face = getFaceFromDirection(direction);\n\tfloat rcpPowScale = 1.0 / powScale;\n\tif( face == 0) {\n\t\tr = vec3(direction.x, -direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 1) {\n\t\tr = vec3(direction.y, direction.x, direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 2) {\n\t\tr = vec3(direction.z, direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.75 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? a : offset.y;\n\t}\n\telse if( face == 3) {\n\t\tr = vec3(direction.x, direction.z, direction.y);\n\t\toffset = vec2(0.0+mipOffset,0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse if( face == 4) {\n\t\tr = vec3(direction.y, direction.x, -direction.z);\n\t\toffset = vec2(scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\telse {\n\t\tr = vec3(direction.z, -direction.x, direction.y);\n\t\toffset = vec2(2.0*scale+mipOffset, 0.5 * rcpPowScale);\n\t\toffset.y = bRes && (offset.y < 2.0*a) ? 0.0 : offset.y;\n\t}\n\tr = normalize(r);\n\tfloat texelOffset = 0.5 * cubeUV_rcpTextureSize;\n\tvec2 s = ( r.yz / abs( r.x ) + vec2( 1.0 ) ) * 0.5;\n\tvec2 base = offset + vec2( texelOffset );\n\treturn base + s * ( scale - 2.0 * texelOffset );\n}\n#define cubeUV_maxLods3 (log2(cubeUV_textureSize*0.25) - 3.0)\nvec4 textureCubeUV( sampler2D envMap, vec3 reflectedDirection, float roughness ) {\n\tfloat roughnessVal = roughness* cubeUV_maxLods3;\n\tfloat r1 = floor(roughnessVal);\n\tfloat r2 = r1 + 1.0;\n\tfloat t = fract(roughnessVal);\n\tvec2 mipInfo = MipLevelInfo(reflectedDirection, r1, roughness);\n\tfloat s = mipInfo.y;\n\tfloat level0 = mipInfo.x;\n\tfloat level1 = level0 + 1.0;\n\tlevel1 = level1 > 5.0 ? 5.0 : level1;\n\tlevel0 += min( floor( s + 0.5 ), 5.0 );\n\tvec2 uv_10 = getCubeUV(reflectedDirection, r1, level0);\n\tvec4 color10 = envMapTexelToLinear(texture2D(envMap, uv_10));\n\tvec2 uv_20 = getCubeUV(reflectedDirection, r2, level0);\n\tvec4 color20 = envMapTexelToLinear(texture2D(envMap, uv_20));\n\tvec4 result = mix(color10, color20, t);\n\treturn vec4(result.rgb, 1.0);\n}\n#endif",
  defaultnormal_vertex: "vec3 transformedNormal = normalMatrix * objectNormal;\n#ifdef FLIP_SIDED\n\ttransformedNormal = - transformedNormal;\n#endif\n#ifdef USE_TANGENT\n\tvec3 transformedTangent = normalMatrix * objectTangent;\n\t#ifdef FLIP_SIDED\n\t\ttransformedTangent = - transformedTangent;\n\t#endif\n#endif",
  displacementmap_pars_vertex: "#ifdef USE_DISPLACEMENTMAP\n\tuniform sampler2D displacementMap;\n\tuniform float displacementScale;\n\tuniform float displacementBias;\n#endif",
  displacementmap_vertex: "#ifdef USE_DISPLACEMENTMAP\n\ttransformed += normalize( objectNormal ) * ( texture2D( displacementMap, uv ).x * displacementScale + displacementBias );\n#endif",
  emissivemap_fragment: "#ifdef USE_EMISSIVEMAP\n\tvec4 emissiveColor = texture2D( emissiveMap, vUv );\n\temissiveColor.rgb = emissiveMapTexelToLinear( emissiveColor ).rgb;\n\ttotalEmissiveRadiance *= emissiveColor.rgb;\n#endif",
  emissivemap_pars_fragment: "#ifdef USE_EMISSIVEMAP\n\tuniform sampler2D emissiveMap;\n#endif",
  encodings_fragment: "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  encodings_pars_fragment: "\nvec4 LinearToLinear( in vec4 value ) {\n\treturn value;\n}\nvec4 GammaToLinear( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( gammaFactor ) ), value.a );\n}\nvec4 LinearToGamma( in vec4 value, in float gammaFactor ) {\n\treturn vec4( pow( value.rgb, vec3( 1.0 / gammaFactor ) ), value.a );\n}\nvec4 sRGBToLinear( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );\n}\nvec4 LinearTosRGB( in vec4 value ) {\n\treturn vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );\n}\nvec4 RGBEToLinear( in vec4 value ) {\n\treturn vec4( value.rgb * exp2( value.a * 255.0 - 128.0 ), 1.0 );\n}\nvec4 LinearToRGBE( in vec4 value ) {\n\tfloat maxComponent = max( max( value.r, value.g ), value.b );\n\tfloat fExp = clamp( ceil( log2( maxComponent ) ), -128.0, 127.0 );\n\treturn vec4( value.rgb / exp2( fExp ), ( fExp + 128.0 ) / 255.0 );\n}\nvec4 RGBMToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * value.a * maxRange, 1.0 );\n}\nvec4 LinearToRGBM( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat M = clamp( maxRGB / maxRange, 0.0, 1.0 );\n\tM = ceil( M * 255.0 ) / 255.0;\n\treturn vec4( value.rgb / ( M * maxRange ), M );\n}\nvec4 RGBDToLinear( in vec4 value, in float maxRange ) {\n\treturn vec4( value.rgb * ( ( maxRange / 255.0 ) / value.a ), 1.0 );\n}\nvec4 LinearToRGBD( in vec4 value, in float maxRange ) {\n\tfloat maxRGB = max( value.r, max( value.g, value.b ) );\n\tfloat D = max( maxRange / maxRGB, 1.0 );\n\tD = min( floor( D ) / 255.0, 1.0 );\n\treturn vec4( value.rgb * ( D * ( 255.0 / maxRange ) ), D );\n}\nconst mat3 cLogLuvM = mat3( 0.2209, 0.3390, 0.4184, 0.1138, 0.6780, 0.7319, 0.0102, 0.1130, 0.2969 );\nvec4 LinearToLogLuv( in vec4 value )  {\n\tvec3 Xp_Y_XYZp = cLogLuvM * value.rgb;\n\tXp_Y_XYZp = max( Xp_Y_XYZp, vec3( 1e-6, 1e-6, 1e-6 ) );\n\tvec4 vResult;\n\tvResult.xy = Xp_Y_XYZp.xy / Xp_Y_XYZp.z;\n\tfloat Le = 2.0 * log2(Xp_Y_XYZp.y) + 127.0;\n\tvResult.w = fract( Le );\n\tvResult.z = ( Le - ( floor( vResult.w * 255.0 ) ) / 255.0 ) / 255.0;\n\treturn vResult;\n}\nconst mat3 cLogLuvInverseM = mat3( 6.0014, -2.7008, -1.7996, -1.3320, 3.1029, -5.7721, 0.3008, -1.0882, 5.6268 );\nvec4 LogLuvToLinear( in vec4 value ) {\n\tfloat Le = value.z * 255.0 + value.w;\n\tvec3 Xp_Y_XYZp;\n\tXp_Y_XYZp.y = exp2( ( Le - 127.0 ) / 2.0 );\n\tXp_Y_XYZp.z = Xp_Y_XYZp.y / value.y;\n\tXp_Y_XYZp.x = value.x * Xp_Y_XYZp.z;\n\tvec3 vRGB = cLogLuvInverseM * Xp_Y_XYZp.rgb;\n\treturn vec4( max( vRGB, 0.0 ), 1.0 );\n}",
  envmap_fragment: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvec3 cameraToVertex = normalize( vWorldPosition - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#else\n\t\tvec3 reflectVec = vReflect;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tvec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );\n\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\tvec2 sampleUV;\n\t\treflectVec = normalize( reflectVec );\n\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\tvec4 envColor = texture2D( envMap, sampleUV );\n\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\treflectVec = normalize( reflectVec );\n\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0, 0.0, 1.0 ) );\n\t\tvec4 envColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5 );\n\t#else\n\t\tvec4 envColor = vec4( 0.0 );\n\t#endif\n\tenvColor = envMapTexelToLinear( envColor );\n\t#ifdef ENVMAP_BLENDING_MULTIPLY\n\t\toutgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_MIX )\n\t\toutgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );\n\t#elif defined( ENVMAP_BLENDING_ADD )\n\t\toutgoingLight += envColor.xyz * specularStrength * reflectivity;\n\t#endif\n#endif",
  envmap_pars_fragment: "#if defined( USE_ENVMAP ) || defined( PHYSICAL )\n\tuniform float reflectivity;\n\tuniform float envMapIntensity;\n#endif\n#ifdef USE_ENVMAP\n\t#if ! defined( PHYSICAL ) && ( defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) )\n\t\tvarying vec3 vWorldPosition;\n\t#endif\n\t#ifdef ENVMAP_TYPE_CUBE\n\t\tuniform samplerCube envMap;\n\t#else\n\t\tuniform sampler2D envMap;\n\t#endif\n\tuniform float flipEnvMap;\n\tuniform int maxMipLevel;\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( PHYSICAL )\n\t\tuniform float refractionRatio;\n\t#else\n\t\tvarying vec3 vReflect;\n\t#endif\n#endif",
  envmap_pars_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvarying vec3 vWorldPosition;\n\t#else\n\t\tvarying vec3 vReflect;\n\t\tuniform float refractionRatio;\n\t#endif\n#endif",
  envmap_physical_pars_fragment: "#if defined( USE_ENVMAP ) && defined( PHYSICAL )\n\tvec3 getLightProbeIndirectIrradiance( const in GeometricContext geometry, const in int maxMIPLevel ) {\n\t\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryVec, float( maxMIPLevel ) );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryVec = vec3( flipEnvMap * worldNormal.x, worldNormal.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryVec, 1.0 );\n\t\t#else\n\t\t\tvec4 envMapColor = vec4( 0.0 );\n\t\t#endif\n\t\treturn PI * envMapColor.rgb * envMapIntensity;\n\t}\n\tfloat getSpecularMIPLevel( const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\tfloat maxMIPLevelScalar = float( maxMIPLevel );\n\t\tfloat desiredMIPLevel = maxMIPLevelScalar + 0.79248 - 0.5 * log2( pow2( blinnShininessExponent ) + 1.0 );\n\t\treturn clamp( desiredMIPLevel, 0.0, maxMIPLevelScalar );\n\t}\n\tvec3 getLightProbeIndirectRadiance( const in GeometricContext geometry, const in float blinnShininessExponent, const in int maxMIPLevel ) {\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvec3 reflectVec = reflect( -geometry.viewDir, geometry.normal );\n\t\t#else\n\t\t\tvec3 reflectVec = refract( -geometry.viewDir, geometry.normal, refractionRatio );\n\t\t#endif\n\t\treflectVec = inverseTransformDirection( reflectVec, viewMatrix );\n\t\tfloat specularMIPLevel = getSpecularMIPLevel( blinnShininessExponent, maxMIPLevel );\n\t\t#ifdef ENVMAP_TYPE_CUBE\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = textureCubeLodEXT( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = textureCube( envMap, queryReflectVec, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_CUBE_UV )\n\t\t\tvec3 queryReflectVec = vec3( flipEnvMap * reflectVec.x, reflectVec.yz );\n\t\t\tvec4 envMapColor = textureCubeUV( envMap, queryReflectVec, BlinnExponentToGGXRoughness(blinnShininessExponent ));\n\t\t#elif defined( ENVMAP_TYPE_EQUIREC )\n\t\t\tvec2 sampleUV;\n\t\t\tsampleUV.y = asin( clamp( reflectVec.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\t\t\tsampleUV.x = atan( reflectVec.z, reflectVec.x ) * RECIPROCAL_PI2 + 0.5;\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, sampleUV, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, sampleUV, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#elif defined( ENVMAP_TYPE_SPHERE )\n\t\t\tvec3 reflectView = normalize( ( viewMatrix * vec4( reflectVec, 0.0 ) ).xyz + vec3( 0.0,0.0,1.0 ) );\n\t\t\t#ifdef TEXTURE_LOD_EXT\n\t\t\t\tvec4 envMapColor = texture2DLodEXT( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#else\n\t\t\t\tvec4 envMapColor = texture2D( envMap, reflectView.xy * 0.5 + 0.5, specularMIPLevel );\n\t\t\t#endif\n\t\t\tenvMapColor.rgb = envMapTexelToLinear( envMapColor ).rgb;\n\t\t#endif\n\t\treturn envMapColor.rgb * envMapIntensity;\n\t}\n#endif",
  envmap_vertex: "#ifdef USE_ENVMAP\n\t#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )\n\t\tvWorldPosition = worldPosition.xyz;\n\t#else\n\t\tvec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );\n\t\tvec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );\n\t\t#ifdef ENVMAP_MODE_REFLECTION\n\t\t\tvReflect = reflect( cameraToVertex, worldNormal );\n\t\t#else\n\t\t\tvReflect = refract( cameraToVertex, worldNormal, refractionRatio );\n\t\t#endif\n\t#endif\n#endif",
  fog_vertex: "#ifdef USE_FOG\n\tfogDepth = -mvPosition.z;\n#endif",
  fog_pars_vertex: "#ifdef USE_FOG\n\tvarying float fogDepth;\n#endif",
  fog_fragment: "#ifdef USE_FOG\n\t#ifdef FOG_EXP2\n\t\tfloat fogFactor = whiteCompliment( exp2( - fogDensity * fogDensity * fogDepth * fogDepth * LOG2 ) );\n\t#else\n\t\tfloat fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n\t#endif\n\tgl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n#endif",
  fog_pars_fragment: "#ifdef USE_FOG\n\tuniform vec3 fogColor;\n\tvarying float fogDepth;\n\t#ifdef FOG_EXP2\n\t\tuniform float fogDensity;\n\t#else\n\t\tuniform float fogNear;\n\t\tuniform float fogFar;\n\t#endif\n#endif",
  gradientmap_pars_fragment: "#ifdef TOON\n\tuniform sampler2D gradientMap;\n\tvec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {\n\t\tfloat dotNL = dot( normal, lightDirection );\n\t\tvec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );\n\t\t#ifdef USE_GRADIENTMAP\n\t\t\treturn texture2D( gradientMap, coord ).rgb;\n\t\t#else\n\t\t\treturn ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );\n\t\t#endif\n\t}\n#endif",
  lightmap_fragment: "#ifdef USE_LIGHTMAP\n\treflectedLight.indirectDiffuse += PI * texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n#endif",
  lightmap_pars_fragment: "#ifdef USE_LIGHTMAP\n\tuniform sampler2D lightMap;\n\tuniform float lightMapIntensity;\n#endif",
  lights_lambert_vertex: "vec3 diffuse = vec3( 1.0 );\nGeometricContext geometry;\ngeometry.position = mvPosition.xyz;\ngeometry.normal = normalize( transformedNormal );\ngeometry.viewDir = normalize( -mvPosition.xyz );\nGeometricContext backGeometry;\nbackGeometry.position = geometry.position;\nbackGeometry.normal = -geometry.normal;\nbackGeometry.viewDir = geometry.viewDir;\nvLightFront = vec3( 0.0 );\nvIndirectFront = vec3( 0.0 );\n#ifdef DOUBLE_SIDED\n\tvLightBack = vec3( 0.0 );\n\tvIndirectBack = vec3( 0.0 );\n#endif\nIncidentLight directLight;\nfloat dotNL;\nvec3 directLightColor_Diffuse;\n#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tgetPointDirectLightIrradiance( pointLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tgetSpotDirectLightIrradiance( spotLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tgetDirectionalDirectLightIrradiance( directionalLights[ i ], geometry, directLight );\n\t\tdotNL = dot( geometry.normal, directLight.direction );\n\t\tdirectLightColor_Diffuse = PI * directLight.color;\n\t\tvLightFront += saturate( dotNL ) * directLightColor_Diffuse;\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvLightBack += saturate( -dotNL ) * directLightColor_Diffuse;\n\t\t#endif\n\t}\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\tvIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tvIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry );\n\t\t#endif\n\t}\n#endif",
  lights_pars_begin: "uniform vec3 ambientLightColor;\nuniform vec3 lightProbe[ 9 ];\nvec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {\n\tfloat x = normal.x, y = normal.y, z = normal.z;\n\tvec3 result = shCoefficients[ 0 ] * 0.886227;\n\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;\n\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;\n\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;\n\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;\n\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;\n\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );\n\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;\n\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );\n\treturn result;\n}\nvec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in GeometricContext geometry ) {\n\tvec3 worldNormal = inverseTransformDirection( geometry.normal, viewMatrix );\n\tvec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );\n\treturn irradiance;\n}\nvec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {\n\tvec3 irradiance = ambientLightColor;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treturn irradiance;\n}\n#if NUM_DIR_LIGHTS > 0\n\tstruct DirectionalLight {\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];\n\tvoid getDirectionalDirectLightIrradiance( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tdirectLight.color = directionalLight.color;\n\t\tdirectLight.direction = directionalLight.direction;\n\t\tdirectLight.visible = true;\n\t}\n#endif\n#if NUM_POINT_LIGHTS > 0\n\tstruct PointLight {\n\t\tvec3 position;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t\tfloat shadowCameraNear;\n\t\tfloat shadowCameraFar;\n\t};\n\tuniform PointLight pointLights[ NUM_POINT_LIGHTS ];\n\tvoid getPointDirectLightIrradiance( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight directLight ) {\n\t\tvec3 lVector = pointLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tdirectLight.color = pointLight.color;\n\t\tdirectLight.color *= punctualLightIntensityToIrradianceFactor( lightDistance, pointLight.distance, pointLight.decay );\n\t\tdirectLight.visible = ( directLight.color != vec3( 0.0 ) );\n\t}\n#endif\n#if NUM_SPOT_LIGHTS > 0\n\tstruct SpotLight {\n\t\tvec3 position;\n\t\tvec3 direction;\n\t\tvec3 color;\n\t\tfloat distance;\n\t\tfloat decay;\n\t\tfloat coneCos;\n\t\tfloat penumbraCos;\n\t\tint shadow;\n\t\tfloat shadowBias;\n\t\tfloat shadowRadius;\n\t\tvec2 shadowMapSize;\n\t};\n\tuniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];\n\tvoid getSpotDirectLightIrradiance( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight directLight  ) {\n\t\tvec3 lVector = spotLight.position - geometry.position;\n\t\tdirectLight.direction = normalize( lVector );\n\t\tfloat lightDistance = length( lVector );\n\t\tfloat angleCos = dot( directLight.direction, spotLight.direction );\n\t\tif ( angleCos > spotLight.coneCos ) {\n\t\t\tfloat spotEffect = smoothstep( spotLight.coneCos, spotLight.penumbraCos, angleCos );\n\t\t\tdirectLight.color = spotLight.color;\n\t\t\tdirectLight.color *= spotEffect * punctualLightIntensityToIrradianceFactor( lightDistance, spotLight.distance, spotLight.decay );\n\t\t\tdirectLight.visible = true;\n\t\t} else {\n\t\t\tdirectLight.color = vec3( 0.0 );\n\t\t\tdirectLight.visible = false;\n\t\t}\n\t}\n#endif\n#if NUM_RECT_AREA_LIGHTS > 0\n\tstruct RectAreaLight {\n\t\tvec3 color;\n\t\tvec3 position;\n\t\tvec3 halfWidth;\n\t\tvec3 halfHeight;\n\t};\n\tuniform sampler2D ltc_1;\tuniform sampler2D ltc_2;\n\tuniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];\n#endif\n#if NUM_HEMI_LIGHTS > 0\n\tstruct HemisphereLight {\n\t\tvec3 direction;\n\t\tvec3 skyColor;\n\t\tvec3 groundColor;\n\t};\n\tuniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];\n\tvec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in GeometricContext geometry ) {\n\t\tfloat dotNL = dot( geometry.normal, hemiLight.direction );\n\t\tfloat hemiDiffuseWeight = 0.5 * dotNL + 0.5;\n\t\tvec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tirradiance *= PI;\n\t\t#endif\n\t\treturn irradiance;\n\t}\n#endif",
  lights_phong_fragment: "BlinnPhongMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb;\nmaterial.specularColor = specular;\nmaterial.specularShininess = shininess;\nmaterial.specularStrength = specularStrength;",
  lights_phong_pars_fragment: "varying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\nstruct BlinnPhongMaterial {\n\tvec3\tdiffuseColor;\n\tvec3\tspecularColor;\n\tfloat\tspecularShininess;\n\tfloat\tspecularStrength;\n};\nvoid RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifdef TOON\n\t\tvec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;\n\t#else\n\t\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\t\tvec3 irradiance = dotNL * directLight.color;\n\t#endif\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\treflectedLight.directDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\treflectedLight.directSpecular += irradiance * BRDF_Specular_BlinnPhong( directLight, geometry, material.specularColor, material.specularShininess ) * material.specularStrength;\n}\nvoid RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {\n\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n}\n#define RE_Direct\t\t\t\tRE_Direct_BlinnPhong\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_BlinnPhong\n#define Material_LightProbeLOD( material )\t(0)",
  lights_physical_fragment: "PhysicalMaterial material;\nmaterial.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );\nmaterial.specularRoughness = clamp( roughnessFactor, 0.04, 1.0 );\n#ifdef STANDARD\n\tmaterial.specularColor = mix( vec3( DEFAULT_SPECULAR_COEFFICIENT ), diffuseColor.rgb, metalnessFactor );\n#else\n\tmaterial.specularColor = mix( vec3( MAXIMUM_SPECULAR_COEFFICIENT * pow2( reflectivity ) ), diffuseColor.rgb, metalnessFactor );\n\tmaterial.clearCoat = saturate( clearCoat );\tmaterial.clearCoatRoughness = clamp( clearCoatRoughness, 0.04, 1.0 );\n#endif",
  lights_physical_pars_fragment: "struct PhysicalMaterial {\n\tvec3\tdiffuseColor;\n\tfloat\tspecularRoughness;\n\tvec3\tspecularColor;\n\t#ifndef STANDARD\n\t\tfloat clearCoat;\n\t\tfloat clearCoatRoughness;\n\t#endif\n};\n#define MAXIMUM_SPECULAR_COEFFICIENT 0.16\n#define DEFAULT_SPECULAR_COEFFICIENT 0.04\nfloat clearCoatDHRApprox( const in float roughness, const in float dotNL ) {\n\treturn DEFAULT_SPECULAR_COEFFICIENT + ( 1.0 - DEFAULT_SPECULAR_COEFFICIENT ) * ( pow( 1.0 - dotNL, 5.0 ) * pow( 1.0 - roughness, 2.0 ) );\n}\n#if NUM_RECT_AREA_LIGHTS > 0\n\tvoid RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t\tvec3 normal = geometry.normal;\n\t\tvec3 viewDir = geometry.viewDir;\n\t\tvec3 position = geometry.position;\n\t\tvec3 lightPos = rectAreaLight.position;\n\t\tvec3 halfWidth = rectAreaLight.halfWidth;\n\t\tvec3 halfHeight = rectAreaLight.halfHeight;\n\t\tvec3 lightColor = rectAreaLight.color;\n\t\tfloat roughness = material.specularRoughness;\n\t\tvec3 rectCoords[ 4 ];\n\t\trectCoords[ 0 ] = lightPos + halfWidth - halfHeight;\t\trectCoords[ 1 ] = lightPos - halfWidth - halfHeight;\n\t\trectCoords[ 2 ] = lightPos - halfWidth + halfHeight;\n\t\trectCoords[ 3 ] = lightPos + halfWidth + halfHeight;\n\t\tvec2 uv = LTC_Uv( normal, viewDir, roughness );\n\t\tvec4 t1 = texture2D( ltc_1, uv );\n\t\tvec4 t2 = texture2D( ltc_2, uv );\n\t\tmat3 mInv = mat3(\n\t\t\tvec3( t1.x, 0, t1.y ),\n\t\t\tvec3(    0, 1,    0 ),\n\t\t\tvec3( t1.z, 0, t1.w )\n\t\t);\n\t\tvec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );\n\t\treflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );\n\t\treflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );\n\t}\n#endif\nvoid RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\tfloat dotNL = saturate( dot( geometry.normal, directLight.direction ) );\n\tvec3 irradiance = dotNL * directLight.color;\n\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\tirradiance *= PI;\n\t#endif\n\t#ifndef STANDARD\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\treflectedLight.directSpecular += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Specular_GGX( directLight, geometry, material.specularColor, material.specularRoughness );\n\treflectedLight.directDiffuse += ( 1.0 - clearCoatDHR ) * irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#ifndef STANDARD\n\t\treflectedLight.directSpecular += irradiance * material.clearCoat * BRDF_Specular_GGX( directLight, geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\nvoid RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {\n\t#ifndef ENVMAP_TYPE_CUBE_UV\n\t\treflectedLight.indirectDiffuse += irradiance * BRDF_Diffuse_Lambert( material.diffuseColor );\n\t#endif\n}\nvoid RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearCoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {\n\t#ifndef STANDARD\n\t\tfloat dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );\n\t\tfloat dotNL = dotNV;\n\t\tfloat clearCoatDHR = material.clearCoat * clearCoatDHRApprox( material.clearCoatRoughness, dotNL );\n\t#else\n\t\tfloat clearCoatDHR = 0.0;\n\t#endif\n\tfloat clearCoatInv = 1.0 - clearCoatDHR;\n\t#if defined( ENVMAP_TYPE_CUBE_UV )\n\t\tvec3 singleScattering = vec3( 0.0 );\n\t\tvec3 multiScattering = vec3( 0.0 );\n\t\tvec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;\n\t\tBRDF_Specular_Multiscattering_Environment( geometry, material.specularColor, material.specularRoughness, singleScattering, multiScattering );\n\t\tvec3 diffuse = material.diffuseColor * ( 1.0 - ( singleScattering + multiScattering ) );\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * singleScattering;\n\t\treflectedLight.indirectDiffuse += multiScattering * cosineWeightedIrradiance;\n\t\treflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;\n\t#else\n\t\treflectedLight.indirectSpecular += clearCoatInv * radiance * BRDF_Specular_GGX_Environment( geometry, material.specularColor, material.specularRoughness );\n\t#endif\n\t#ifndef STANDARD\n\t\treflectedLight.indirectSpecular += clearCoatRadiance * material.clearCoat * BRDF_Specular_GGX_Environment( geometry, vec3( DEFAULT_SPECULAR_COEFFICIENT ), material.clearCoatRoughness );\n\t#endif\n}\n#define RE_Direct\t\t\t\tRE_Direct_Physical\n#define RE_Direct_RectArea\t\tRE_Direct_RectArea_Physical\n#define RE_IndirectDiffuse\t\tRE_IndirectDiffuse_Physical\n#define RE_IndirectSpecular\t\tRE_IndirectSpecular_Physical\n#define Material_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.specularRoughness )\n#define Material_ClearCoat_BlinnShininessExponent( material )   GGXRoughnessToBlinnExponent( material.clearCoatRoughness )\nfloat computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {\n\treturn saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );\n}",
  lights_fragment_begin: "\nGeometricContext geometry;\ngeometry.position = - vViewPosition;\ngeometry.normal = normal;\ngeometry.viewDir = normalize( vViewPosition );\nIncidentLight directLight;\n#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tgetPointDirectLightIrradiance( pointLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( pointLight.shadow, directLight.visible ) ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tgetSpotDirectLightIrradiance( spotLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( spotLight.shadow, directLight.visible ) ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tgetDirectionalDirectLightIrradiance( directionalLight, geometry, directLight );\n\t\t#ifdef USE_SHADOWMAP\n\t\tdirectLight.color *= all( bvec2( directionalLight.shadow, directLight.visible ) ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t\t#endif\n\t\tRE_Direct( directLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )\n\tRectAreaLight rectAreaLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {\n\t\trectAreaLight = rectAreaLights[ i ];\n\t\tRE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );\n\t}\n#endif\n#if defined( RE_IndirectDiffuse )\n\tvec3 irradiance = getAmbientLightIrradiance( ambientLightColor );\n\tirradiance += getLightProbeIrradiance( lightProbe, geometry );\n\t#if ( NUM_HEMI_LIGHTS > 0 )\n\t\t#pragma unroll_loop\n\t\tfor ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {\n\t\t\tirradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry );\n\t\t}\n\t#endif\n#endif\n#if defined( RE_IndirectSpecular )\n\tvec3 radiance = vec3( 0.0 );\n\tvec3 clearCoatRadiance = vec3( 0.0 );\n#endif",
  lights_fragment_maps: "#if defined( RE_IndirectDiffuse )\n\t#ifdef USE_LIGHTMAP\n\t\tvec3 lightMapIrradiance = texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t\t#ifndef PHYSICALLY_CORRECT_LIGHTS\n\t\t\tlightMapIrradiance *= PI;\n\t\t#endif\n\t\tirradiance += lightMapIrradiance;\n\t#endif\n\t#if defined( USE_ENVMAP ) && defined( PHYSICAL ) && defined( ENVMAP_TYPE_CUBE_UV )\n\t\tirradiance += getLightProbeIndirectIrradiance( geometry, maxMipLevel );\n\t#endif\n#endif\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\n\tradiance += getLightProbeIndirectRadiance( geometry, Material_BlinnShininessExponent( material ), maxMipLevel );\n\t#ifndef STANDARD\n\t\tclearCoatRadiance += getLightProbeIndirectRadiance( geometry, Material_ClearCoat_BlinnShininessExponent( material ), maxMipLevel );\n\t#endif\n#endif",
  lights_fragment_end: "#if defined( RE_IndirectDiffuse )\n\tRE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );\n#endif\n#if defined( RE_IndirectSpecular )\n\tRE_IndirectSpecular( radiance, irradiance, clearCoatRadiance, geometry, material, reflectedLight );\n#endif",
  logdepthbuf_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tgl_FragDepthEXT = log2( vFragDepth ) * logDepthBufFC * 0.5;\n#endif",
  logdepthbuf_pars_fragment: "#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )\n\tuniform float logDepthBufFC;\n\tvarying float vFragDepth;\n#endif",
  logdepthbuf_pars_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvarying float vFragDepth;\n\t#else\n\t\tuniform float logDepthBufFC;\n\t#endif\n#endif",
  logdepthbuf_vertex: "#ifdef USE_LOGDEPTHBUF\n\t#ifdef USE_LOGDEPTHBUF_EXT\n\t\tvFragDepth = 1.0 + gl_Position.w;\n\t#else\n\t\tgl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;\n\t\tgl_Position.z *= gl_Position.w;\n\t#endif\n#endif",
  map_fragment: "#ifdef USE_MAP\n\tvec4 texelColor = texture2D( map, vUv );\n\ttexelColor = mapTexelToLinear( texelColor );\n\tdiffuseColor *= texelColor;\n#endif",
  map_pars_fragment: "#ifdef USE_MAP\n\tuniform sampler2D map;\n#endif",
  map_particle_fragment: "#ifdef USE_MAP\n\tvec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;\n\tvec4 mapTexel = texture2D( map, uv );\n\tdiffuseColor *= mapTexelToLinear( mapTexel );\n#endif",
  map_particle_pars_fragment: "#ifdef USE_MAP\n\tuniform mat3 uvTransform;\n\tuniform sampler2D map;\n#endif",
  metalnessmap_fragment: "float metalnessFactor = metalness;\n#ifdef USE_METALNESSMAP\n\tvec4 texelMetalness = texture2D( metalnessMap, vUv );\n\tmetalnessFactor *= texelMetalness.b;\n#endif",
  metalnessmap_pars_fragment: "#ifdef USE_METALNESSMAP\n\tuniform sampler2D metalnessMap;\n#endif",
  morphnormal_vertex: "#ifdef USE_MORPHNORMALS\n\tobjectNormal += ( morphNormal0 - normal ) * morphTargetInfluences[ 0 ];\n\tobjectNormal += ( morphNormal1 - normal ) * morphTargetInfluences[ 1 ];\n\tobjectNormal += ( morphNormal2 - normal ) * morphTargetInfluences[ 2 ];\n\tobjectNormal += ( morphNormal3 - normal ) * morphTargetInfluences[ 3 ];\n#endif",
  morphtarget_pars_vertex: "#ifdef USE_MORPHTARGETS\n\t#ifndef USE_MORPHNORMALS\n\tuniform float morphTargetInfluences[ 8 ];\n\t#else\n\tuniform float morphTargetInfluences[ 4 ];\n\t#endif\n#endif",
  morphtarget_vertex: "#ifdef USE_MORPHTARGETS\n\ttransformed += ( morphTarget0 - position ) * morphTargetInfluences[ 0 ];\n\ttransformed += ( morphTarget1 - position ) * morphTargetInfluences[ 1 ];\n\ttransformed += ( morphTarget2 - position ) * morphTargetInfluences[ 2 ];\n\ttransformed += ( morphTarget3 - position ) * morphTargetInfluences[ 3 ];\n\t#ifndef USE_MORPHNORMALS\n\ttransformed += ( morphTarget4 - position ) * morphTargetInfluences[ 4 ];\n\ttransformed += ( morphTarget5 - position ) * morphTargetInfluences[ 5 ];\n\ttransformed += ( morphTarget6 - position ) * morphTargetInfluences[ 6 ];\n\ttransformed += ( morphTarget7 - position ) * morphTargetInfluences[ 7 ];\n\t#endif\n#endif",
  normal_fragment_begin: "#ifdef FLAT_SHADED\n\tvec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );\n\tvec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );\n\tvec3 normal = normalize( cross( fdx, fdy ) );\n#else\n\tvec3 normal = normalize( vNormal );\n\t#ifdef DOUBLE_SIDED\n\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t#endif\n\t#ifdef USE_TANGENT\n\t\tvec3 tangent = normalize( vTangent );\n\t\tvec3 bitangent = normalize( vBitangent );\n\t\t#ifdef DOUBLE_SIDED\n\t\t\ttangent = tangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\tbitangent = bitangent * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t#endif\n#endif",
  normal_fragment_maps: "#ifdef USE_NORMALMAP\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tnormal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t#ifdef FLIP_SIDED\n\t\t\tnormal = - normal;\n\t\t#endif\n\t\t#ifdef DOUBLE_SIDED\n\t\t\tnormal = normal * ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t#endif\n\t\tnormal = normalize( normalMatrix * normal );\n\t#else\n\t\t#ifdef USE_TANGENT\n\t\t\tmat3 vTBN = mat3( tangent, bitangent, normal );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy = normalScale * mapN.xy;\n\t\t\tnormal = normalize( vTBN * mapN );\n\t\t#else\n\t\t\tnormal = perturbNormal2Arb( -vViewPosition, normal );\n\t\t#endif\n\t#endif\n#elif defined( USE_BUMPMAP )\n\tnormal = perturbNormalArb( -vViewPosition, normal, dHdxy_fwd() );\n#endif",
  normalmap_pars_fragment: "#ifdef USE_NORMALMAP\n\tuniform sampler2D normalMap;\n\tuniform vec2 normalScale;\n\t#ifdef OBJECTSPACE_NORMALMAP\n\t\tuniform mat3 normalMatrix;\n\t#else\n\t\tvec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm ) {\n\t\t\tvec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );\n\t\t\tvec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );\n\t\t\tvec2 st0 = dFdx( vUv.st );\n\t\t\tvec2 st1 = dFdy( vUv.st );\n\t\t\tfloat scale = sign( st1.t * st0.s - st0.t * st1.s );\n\t\t\tvec3 S = normalize( ( q0 * st1.t - q1 * st0.t ) * scale );\n\t\t\tvec3 T = normalize( ( - q0 * st1.s + q1 * st0.s ) * scale );\n\t\t\tvec3 N = normalize( surf_norm );\n\t\t\tmat3 tsn = mat3( S, T, N );\n\t\t\tvec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;\n\t\t\tmapN.xy *= normalScale;\n\t\t\tmapN.xy *= ( float( gl_FrontFacing ) * 2.0 - 1.0 );\n\t\t\treturn normalize( tsn * mapN );\n\t\t}\n\t#endif\n#endif",
  packing: "vec3 packNormalToRGB( const in vec3 normal ) {\n\treturn normalize( normal ) * 0.5 + 0.5;\n}\nvec3 unpackRGBToNormal( const in vec3 rgb ) {\n\treturn 2.0 * rgb.xyz - 1.0;\n}\nconst float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;\nconst vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256.,  256. );\nconst vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );\nconst float ShiftRight8 = 1. / 256.;\nvec4 packDepthToRGBA( const in float v ) {\n\tvec4 r = vec4( fract( v * PackFactors ), v );\n\tr.yzw -= r.xyz * ShiftRight8;\treturn r * PackUpscale;\n}\nfloat unpackRGBAToDepth( const in vec4 v ) {\n\treturn dot( v, UnpackFactors );\n}\nfloat viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn ( viewZ + near ) / ( near - far );\n}\nfloat orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {\n\treturn linearClipZ * ( near - far ) - near;\n}\nfloat viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {\n\treturn (( near + viewZ ) * far ) / (( far - near ) * viewZ );\n}\nfloat perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {\n\treturn ( near * far ) / ( ( far - near ) * invClipZ - far );\n}",
  premultiplied_alpha_fragment: "#ifdef PREMULTIPLIED_ALPHA\n\tgl_FragColor.rgb *= gl_FragColor.a;\n#endif",
  project_vertex: "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\ngl_Position = projectionMatrix * mvPosition;",
  dithering_fragment: "#if defined( DITHERING )\n\tgl_FragColor.rgb = dithering( gl_FragColor.rgb );\n#endif",
  dithering_pars_fragment: "#if defined( DITHERING )\n\tvec3 dithering( vec3 color ) {\n\t\tfloat grid_position = rand( gl_FragCoord.xy );\n\t\tvec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );\n\t\tdither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );\n\t\treturn color + dither_shift_RGB;\n\t}\n#endif",
  roughnessmap_fragment: "float roughnessFactor = roughness;\n#ifdef USE_ROUGHNESSMAP\n\tvec4 texelRoughness = texture2D( roughnessMap, vUv );\n\troughnessFactor *= texelRoughness.g;\n#endif",
  roughnessmap_pars_fragment: "#ifdef USE_ROUGHNESSMAP\n\tuniform sampler2D roughnessMap;\n#endif",
  shadowmap_pars_fragment: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform sampler2D directionalShadowMap[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform sampler2D spotShadowMap[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform sampler2D pointShadowMap[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n\tfloat texture2DCompare( sampler2D depths, vec2 uv, float compare ) {\n\t\treturn step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );\n\t}\n\tfloat texture2DShadowLerp( sampler2D depths, vec2 size, vec2 uv, float compare ) {\n\t\tconst vec2 offset = vec2( 0.0, 1.0 );\n\t\tvec2 texelSize = vec2( 1.0 ) / size;\n\t\tvec2 centroidUV = floor( uv * size + 0.5 ) / size;\n\t\tfloat lb = texture2DCompare( depths, centroidUV + texelSize * offset.xx, compare );\n\t\tfloat lt = texture2DCompare( depths, centroidUV + texelSize * offset.xy, compare );\n\t\tfloat rb = texture2DCompare( depths, centroidUV + texelSize * offset.yx, compare );\n\t\tfloat rt = texture2DCompare( depths, centroidUV + texelSize * offset.yy, compare );\n\t\tvec2 f = fract( uv * size + 0.5 );\n\t\tfloat a = mix( lb, lt, f.y );\n\t\tfloat b = mix( rb, rt, f.y );\n\t\tfloat c = mix( a, b, f.x );\n\t\treturn c;\n\t}\n\tfloat getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {\n\t\tfloat shadow = 1.0;\n\t\tshadowCoord.xyz /= shadowCoord.w;\n\t\tshadowCoord.z += shadowBias;\n\t\tbvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );\n\t\tbool inFrustum = all( inFrustumVec );\n\t\tbvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );\n\t\tbool frustumTest = all( frustumTestVec );\n\t\tif ( frustumTest ) {\n\t\t#if defined( SHADOWMAP_TYPE_PCF )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#elif defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 texelSize = vec2( 1.0 ) / shadowMapSize;\n\t\t\tfloat dx0 = - texelSize.x * shadowRadius;\n\t\t\tfloat dy0 = - texelSize.y * shadowRadius;\n\t\t\tfloat dx1 = + texelSize.x * shadowRadius;\n\t\t\tfloat dy1 = + texelSize.y * shadowRadius;\n\t\t\tshadow = (\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy, shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +\n\t\t\t\ttexture2DShadowLerp( shadowMap, shadowMapSize, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\tshadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );\n\t\t#endif\n\t\t}\n\t\treturn shadow;\n\t}\n\tvec2 cubeToUV( vec3 v, float texelSizeY ) {\n\t\tvec3 absV = abs( v );\n\t\tfloat scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );\n\t\tabsV *= scaleToCube;\n\t\tv *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );\n\t\tvec2 planar = v.xy;\n\t\tfloat almostATexel = 1.5 * texelSizeY;\n\t\tfloat almostOne = 1.0 - almostATexel;\n\t\tif ( absV.z >= almostOne ) {\n\t\t\tif ( v.z > 0.0 )\n\t\t\t\tplanar.x = 4.0 - v.x;\n\t\t} else if ( absV.x >= almostOne ) {\n\t\t\tfloat signX = sign( v.x );\n\t\t\tplanar.x = v.z * signX + 2.0 * signX;\n\t\t} else if ( absV.y >= almostOne ) {\n\t\t\tfloat signY = sign( v.y );\n\t\t\tplanar.x = v.x + 2.0 * signY + 2.0;\n\t\t\tplanar.y = v.z * signY - 2.0;\n\t\t}\n\t\treturn vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );\n\t}\n\tfloat getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {\n\t\tvec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );\n\t\tvec3 lightToPosition = shadowCoord.xyz;\n\t\tfloat dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );\t\tdp += shadowBias;\n\t\tvec3 bd3D = normalize( lightToPosition );\n\t\t#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT )\n\t\t\tvec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;\n\t\t\treturn (\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +\n\t\t\t\ttexture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )\n\t\t\t) * ( 1.0 / 9.0 );\n\t\t#else\n\t\t\treturn texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );\n\t\t#endif\n\t}\n#endif",
  shadowmap_pars_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t\tuniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHTS ];\n\t\tvarying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHTS ];\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t\tuniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHTS ];\n\t\tvarying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHTS ];\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t\tuniform mat4 pointShadowMatrix[ NUM_POINT_LIGHTS ];\n\t\tvarying vec4 vPointShadowCoord[ NUM_POINT_LIGHTS ];\n\t#endif\n#endif",
  shadowmap_vertex: "#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tvDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tvSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tvPointShadowCoord[ i ] = pointShadowMatrix[ i ] * worldPosition;\n\t}\n\t#endif\n#endif",
  shadowmask_pars_fragment: "float getShadowMask() {\n\tfloat shadow = 1.0;\n\t#ifdef USE_SHADOWMAP\n\t#if NUM_DIR_LIGHTS > 0\n\tDirectionalLight directionalLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {\n\t\tdirectionalLight = directionalLights[ i ];\n\t\tshadow *= bool( directionalLight.shadow ) ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_SPOT_LIGHTS > 0\n\tSpotLight spotLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {\n\t\tspotLight = spotLights[ i ];\n\t\tshadow *= bool( spotLight.shadow ) ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;\n\t}\n\t#endif\n\t#if NUM_POINT_LIGHTS > 0\n\tPointLight pointLight;\n\t#pragma unroll_loop\n\tfor ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {\n\t\tpointLight = pointLights[ i ];\n\t\tshadow *= bool( pointLight.shadow ) ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;\n\t}\n\t#endif\n\t#endif\n\treturn shadow;\n}",
  skinbase_vertex: "#ifdef USE_SKINNING\n\tmat4 boneMatX = getBoneMatrix( skinIndex.x );\n\tmat4 boneMatY = getBoneMatrix( skinIndex.y );\n\tmat4 boneMatZ = getBoneMatrix( skinIndex.z );\n\tmat4 boneMatW = getBoneMatrix( skinIndex.w );\n#endif",
  skinning_pars_vertex: "#ifdef USE_SKINNING\n\tuniform mat4 bindMatrix;\n\tuniform mat4 bindMatrixInverse;\n\t#ifdef BONE_TEXTURE\n\t\tuniform sampler2D boneTexture;\n\t\tuniform int boneTextureSize;\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tfloat j = i * 4.0;\n\t\t\tfloat x = mod( j, float( boneTextureSize ) );\n\t\t\tfloat y = floor( j / float( boneTextureSize ) );\n\t\t\tfloat dx = 1.0 / float( boneTextureSize );\n\t\t\tfloat dy = 1.0 / float( boneTextureSize );\n\t\t\ty = dy * ( y + 0.5 );\n\t\t\tvec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );\n\t\t\tvec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );\n\t\t\tvec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );\n\t\t\tvec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );\n\t\t\tmat4 bone = mat4( v1, v2, v3, v4 );\n\t\t\treturn bone;\n\t\t}\n\t#else\n\t\tuniform mat4 boneMatrices[ MAX_BONES ];\n\t\tmat4 getBoneMatrix( const in float i ) {\n\t\t\tmat4 bone = boneMatrices[ int(i) ];\n\t\t\treturn bone;\n\t\t}\n\t#endif\n#endif",
  skinning_vertex: "#ifdef USE_SKINNING\n\tvec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );\n\tvec4 skinned = vec4( 0.0 );\n\tskinned += boneMatX * skinVertex * skinWeight.x;\n\tskinned += boneMatY * skinVertex * skinWeight.y;\n\tskinned += boneMatZ * skinVertex * skinWeight.z;\n\tskinned += boneMatW * skinVertex * skinWeight.w;\n\ttransformed = ( bindMatrixInverse * skinned ).xyz;\n#endif",
  skinnormal_vertex: "#ifdef USE_SKINNING\n\tmat4 skinMatrix = mat4( 0.0 );\n\tskinMatrix += skinWeight.x * boneMatX;\n\tskinMatrix += skinWeight.y * boneMatY;\n\tskinMatrix += skinWeight.z * boneMatZ;\n\tskinMatrix += skinWeight.w * boneMatW;\n\tskinMatrix  = bindMatrixInverse * skinMatrix * bindMatrix;\n\tobjectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;\n\t#ifdef USE_TANGENT\n\t\tobjectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;\n\t#endif\n#endif",
  specularmap_fragment: "float specularStrength;\n#ifdef USE_SPECULARMAP\n\tvec4 texelSpecular = texture2D( specularMap, vUv );\n\tspecularStrength = texelSpecular.r;\n#else\n\tspecularStrength = 1.0;\n#endif",
  specularmap_pars_fragment: "#ifdef USE_SPECULARMAP\n\tuniform sampler2D specularMap;\n#endif",
  tonemapping_fragment: "#if defined( TONE_MAPPING )\n\tgl_FragColor.rgb = toneMapping( gl_FragColor.rgb );\n#endif",
  tonemapping_pars_fragment: "#ifndef saturate\n\t#define saturate(a) clamp( a, 0.0, 1.0 )\n#endif\nuniform float toneMappingExposure;\nuniform float toneMappingWhitePoint;\nvec3 LinearToneMapping( vec3 color ) {\n\treturn toneMappingExposure * color;\n}\nvec3 ReinhardToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( color / ( vec3( 1.0 ) + color ) );\n}\n#define Uncharted2Helper( x ) max( ( ( x * ( 0.15 * x + 0.10 * 0.50 ) + 0.20 * 0.02 ) / ( x * ( 0.15 * x + 0.50 ) + 0.20 * 0.30 ) ) - 0.02 / 0.30, vec3( 0.0 ) )\nvec3 Uncharted2ToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( Uncharted2Helper( color ) / Uncharted2Helper( vec3( toneMappingWhitePoint ) ) );\n}\nvec3 OptimizedCineonToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\tcolor = max( vec3( 0.0 ), color - 0.004 );\n\treturn pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );\n}\nvec3 ACESFilmicToneMapping( vec3 color ) {\n\tcolor *= toneMappingExposure;\n\treturn saturate( ( color * ( 2.51 * color + 0.03 ) ) / ( color * ( 2.43 * color + 0.59 ) + 0.14 ) );\n}",
  uv_pars_fragment: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n#endif",
  uv_pars_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvarying vec2 vUv;\n\tuniform mat3 uvTransform;\n#endif",
  uv_vertex: "#if defined( USE_MAP ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( USE_SPECULARMAP ) || defined( USE_ALPHAMAP ) || defined( USE_EMISSIVEMAP ) || defined( USE_ROUGHNESSMAP ) || defined( USE_METALNESSMAP )\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n#endif",
  uv2_pars_fragment: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvarying vec2 vUv2;\n#endif",
  uv2_pars_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tattribute vec2 uv2;\n\tvarying vec2 vUv2;\n#endif",
  uv2_vertex: "#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )\n\tvUv2 = uv2;\n#endif",
  worldpos_vertex: "#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP )\n\tvec4 worldPosition = modelMatrix * vec4( transformed, 1.0 );\n#endif",
  background_frag: "uniform sampler2D t2D;\nvarying vec2 vUv;\nvoid main() {\n\tvec4 texColor = texture2D( t2D, vUv );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  background_vert: "varying vec2 vUv;\nuniform mat3 uvTransform;\nvoid main() {\n\tvUv = ( uvTransform * vec3( uv, 1 ) ).xy;\n\tgl_Position = vec4( position.xy, 1.0, 1.0 );\n}",
  cube_frag: "uniform samplerCube tCube;\nuniform float tFlip;\nuniform float opacity;\nvarying vec3 vWorldDirection;\nvoid main() {\n\tvec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\tgl_FragColor.a *= opacity;\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  cube_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\tgl_Position.z = gl_Position.w;\n}",
  depth_frag: "#if DEPTH_PACKING == 3200\n\tuniform float opacity;\n#endif\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#if DEPTH_PACKING == 3200\n\t\tdiffuseColor.a = opacity;\n\t#endif\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <logdepthbuf_fragment>\n\t#if DEPTH_PACKING == 3200\n\t\tgl_FragColor = vec4( vec3( 1.0 - gl_FragCoord.z ), opacity );\n\t#elif DEPTH_PACKING == 3201\n\t\tgl_FragColor = packDepthToRGBA( gl_FragCoord.z );\n\t#endif\n}",
  depth_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n}",
  distanceRGBA_frag: "#define DISTANCE\nuniform vec3 referencePosition;\nuniform float nearDistance;\nuniform float farDistance;\nvarying vec3 vWorldPosition;\n#include <common>\n#include <packing>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main () {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( 1.0 );\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\tfloat dist = length( vWorldPosition - referencePosition );\n\tdist = ( dist - nearDistance ) / ( farDistance - nearDistance );\n\tdist = saturate( dist );\n\tgl_FragColor = packDepthToRGBA( dist );\n}",
  distanceRGBA_vert: "#define DISTANCE\nvarying vec3 vWorldPosition;\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_DISPLACEMENTMAP\n\t\t#include <beginnormal_vertex>\n\t\t#include <morphnormal_vertex>\n\t\t#include <skinnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\tvWorldPosition = worldPosition.xyz;\n}",
  equirect_frag: "uniform sampler2D tEquirect;\nvarying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvec3 direction = normalize( vWorldDirection );\n\tvec2 sampleUV;\n\tsampleUV.y = asin( clamp( direction.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;\n\tsampleUV.x = atan( direction.z, direction.x ) * RECIPROCAL_PI2 + 0.5;\n\tvec4 texColor = texture2D( tEquirect, sampleUV );\n\tgl_FragColor = mapTexelToLinear( texColor );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n}",
  equirect_vert: "varying vec3 vWorldDirection;\n#include <common>\nvoid main() {\n\tvWorldDirection = transformDirection( position, modelMatrix );\n\t#include <begin_vertex>\n\t#include <project_vertex>\n}",
  linedashed_frag: "uniform vec3 diffuse;\nuniform float opacity;\nuniform float dashSize;\nuniform float totalSize;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tif ( mod( vLineDistance, totalSize ) > dashSize ) {\n\t\tdiscard;\n\t}\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <color_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  linedashed_vert: "uniform float scale;\nattribute float lineDistance;\nvarying float vLineDistance;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\tvLineDistance = scale * lineDistance;\n\tvec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}",
  meshbasic_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\t#ifdef USE_LIGHTMAP\n\t\treflectedLight.indirectDiffuse += texture2D( lightMap, vUv2 ).xyz * lightMapIntensity;\n\t#else\n\t\treflectedLight.indirectDiffuse += vec3( 1.0 );\n\t#endif\n\t#include <aomap_fragment>\n\treflectedLight.indirectDiffuse *= diffuseColor.rgb;\n\tvec3 outgoingLight = reflectedLight.indirectDiffuse;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  meshbasic_vert: "#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <skinbase_vertex>\n\t#ifdef USE_ENVMAP\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <worldpos_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <envmap_vertex>\n\t#include <fog_vertex>\n}",
  meshlambert_frag: "uniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float opacity;\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <fog_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <emissivemap_fragment>\n\treflectedLight.indirectDiffuse = getAmbientLightIrradiance( ambientLightColor );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;\n\t#else\n\t\treflectedLight.indirectDiffuse += vIndirectFront;\n\t#endif\n\t#include <lightmap_fragment>\n\treflectedLight.indirectDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb );\n\t#ifdef DOUBLE_SIDED\n\t\treflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;\n\t#else\n\t\treflectedLight.directDiffuse = vLightFront;\n\t#endif\n\treflectedLight.directDiffuse *= BRDF_Diffuse_Lambert( diffuseColor.rgb ) * getShadowMask();\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshlambert_vert: "#define LAMBERT\nvarying vec3 vLightFront;\nvarying vec3 vIndirectFront;\n#ifdef DOUBLE_SIDED\n\tvarying vec3 vLightBack;\n\tvarying vec3 vIndirectBack;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <envmap_pars_vertex>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <lights_lambert_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshmatcap_frag: "#define MATCAP\nuniform vec3 diffuse;\nuniform float opacity;\nuniform sampler2D matcap;\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tvec3 viewDir = normalize( vViewPosition );\n\tvec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );\n\tvec3 y = cross( viewDir, x );\n\tvec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;\n\t#ifdef USE_MATCAP\n\t\tvec4 matcapColor = texture2D( matcap, uv );\n\t\tmatcapColor = matcapTexelToLinear( matcapColor );\n\t#else\n\t\tvec4 matcapColor = vec4( 1.0 );\n\t#endif\n\tvec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  meshmatcap_vert: "#define MATCAP\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n\t#ifndef FLAT_SHADED\n\t\tvNormal = normalize( transformedNormal );\n\t#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n\tvViewPosition = - mvPosition.xyz;\n}",
  meshphong_frag: "#define PHONG\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform vec3 specular;\nuniform float shininess;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <envmap_pars_fragment>\n#include <gradientmap_pars_fragment>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <lights_phong_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <specularmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <specularmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_phong_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\t#include <envmap_fragment>\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphong_vert: "#define PHONG\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <envmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <envmap_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  meshphysical_frag: "#define PHYSICAL\nuniform vec3 diffuse;\nuniform vec3 emissive;\nuniform float roughness;\nuniform float metalness;\nuniform float opacity;\n#ifndef STANDARD\n\tuniform float clearCoat;\n\tuniform float clearCoatRoughness;\n#endif\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#include <color_pars_fragment>\n#include <uv_pars_fragment>\n#include <uv2_pars_fragment>\n#include <map_pars_fragment>\n#include <alphamap_pars_fragment>\n#include <aomap_pars_fragment>\n#include <lightmap_pars_fragment>\n#include <emissivemap_pars_fragment>\n#include <bsdfs>\n#include <cube_uv_reflection_fragment>\n#include <envmap_pars_fragment>\n#include <envmap_physical_pars_fragment>\n#include <fog_pars_fragment>\n#include <lights_pars_begin>\n#include <lights_physical_pars_fragment>\n#include <shadowmap_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <roughnessmap_pars_fragment>\n#include <metalnessmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\tReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );\n\tvec3 totalEmissiveRadiance = emissive;\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <color_fragment>\n\t#include <alphamap_fragment>\n\t#include <alphatest_fragment>\n\t#include <roughnessmap_fragment>\n\t#include <metalnessmap_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\t#include <emissivemap_fragment>\n\t#include <lights_physical_fragment>\n\t#include <lights_fragment_begin>\n\t#include <lights_fragment_maps>\n\t#include <lights_fragment_end>\n\t#include <aomap_fragment>\n\tvec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n\t#include <premultiplied_alpha_fragment>\n\t#include <dithering_fragment>\n}",
  meshphysical_vert: "#define PHYSICAL\nvarying vec3 vViewPosition;\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <common>\n#include <uv_pars_vertex>\n#include <uv2_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <shadowmap_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <uv2_vertex>\n\t#include <color_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\tvViewPosition = - mvPosition.xyz;\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  normal_frag: "#define NORMAL\nuniform float opacity;\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <packing>\n#include <uv_pars_fragment>\n#include <bumpmap_pars_fragment>\n#include <normalmap_pars_fragment>\n#include <logdepthbuf_pars_fragment>\nvoid main() {\n\t#include <logdepthbuf_fragment>\n\t#include <normal_fragment_begin>\n\t#include <normal_fragment_maps>\n\tgl_FragColor = vec4( packNormalToRGB( normal ), opacity );\n}",
  normal_vert: "#define NORMAL\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvarying vec3 vViewPosition;\n#endif\n#ifndef FLAT_SHADED\n\tvarying vec3 vNormal;\n\t#ifdef USE_TANGENT\n\t\tvarying vec3 vTangent;\n\t\tvarying vec3 vBitangent;\n\t#endif\n#endif\n#include <uv_pars_vertex>\n#include <displacementmap_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\t#include <beginnormal_vertex>\n\t#include <morphnormal_vertex>\n\t#include <skinbase_vertex>\n\t#include <skinnormal_vertex>\n\t#include <defaultnormal_vertex>\n#ifndef FLAT_SHADED\n\tvNormal = normalize( transformedNormal );\n\t#ifdef USE_TANGENT\n\t\tvTangent = normalize( transformedTangent );\n\t\tvBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );\n\t#endif\n#endif\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <skinning_vertex>\n\t#include <displacementmap_vertex>\n\t#include <project_vertex>\n\t#include <logdepthbuf_vertex>\n#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || ( defined( USE_NORMALMAP ) && ! defined( OBJECTSPACE_NORMALMAP ) )\n\tvViewPosition = - mvPosition.xyz;\n#endif\n}",
  points_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <color_pars_fragment>\n#include <map_particle_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_particle_fragment>\n\t#include <color_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <premultiplied_alpha_fragment>\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  points_vert: "uniform float size;\nuniform float scale;\n#include <common>\n#include <color_pars_vertex>\n#include <fog_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <color_vertex>\n\t#include <begin_vertex>\n\t#include <morphtarget_vertex>\n\t#include <project_vertex>\n\tgl_PointSize = size;\n\t#ifdef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );\n\t#endif\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <worldpos_vertex>\n\t#include <fog_vertex>\n}",
  shadow_frag: "uniform vec3 color;\nuniform float opacity;\n#include <common>\n#include <packing>\n#include <fog_pars_fragment>\n#include <bsdfs>\n#include <lights_pars_begin>\n#include <shadowmap_pars_fragment>\n#include <shadowmask_pars_fragment>\nvoid main() {\n\tgl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );\n\t#include <fog_fragment>\n}",
  shadow_vert: "#include <fog_pars_vertex>\n#include <shadowmap_pars_vertex>\nvoid main() {\n\t#include <begin_vertex>\n\t#include <project_vertex>\n\t#include <worldpos_vertex>\n\t#include <shadowmap_vertex>\n\t#include <fog_vertex>\n}",
  sprite_frag: "uniform vec3 diffuse;\nuniform float opacity;\n#include <common>\n#include <uv_pars_fragment>\n#include <map_pars_fragment>\n#include <fog_pars_fragment>\n#include <logdepthbuf_pars_fragment>\n#include <clipping_planes_pars_fragment>\nvoid main() {\n\t#include <clipping_planes_fragment>\n\tvec3 outgoingLight = vec3( 0.0 );\n\tvec4 diffuseColor = vec4( diffuse, opacity );\n\t#include <logdepthbuf_fragment>\n\t#include <map_fragment>\n\t#include <alphatest_fragment>\n\toutgoingLight = diffuseColor.rgb;\n\tgl_FragColor = vec4( outgoingLight, diffuseColor.a );\n\t#include <tonemapping_fragment>\n\t#include <encodings_fragment>\n\t#include <fog_fragment>\n}",
  sprite_vert: "uniform float rotation;\nuniform vec2 center;\n#include <common>\n#include <uv_pars_vertex>\n#include <fog_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvoid main() {\n\t#include <uv_vertex>\n\tvec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );\n\tvec2 scale;\n\tscale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );\n\tscale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );\n\t#ifndef USE_SIZEATTENUATION\n\t\tbool isPerspective = ( projectionMatrix[ 2 ][ 3 ] == - 1.0 );\n\t\tif ( isPerspective ) scale *= - mvPosition.z;\n\t#endif\n\tvec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;\n\tvec2 rotatedPosition;\n\trotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;\n\trotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;\n\tmvPosition.xy += rotatedPosition;\n\tgl_Position = projectionMatrix * mvPosition;\n\t#include <logdepthbuf_vertex>\n\t#include <clipping_planes_vertex>\n\t#include <fog_vertex>\n}"
};
function vQ(bf) {
  var bg = {};
  for (var bh in bf) {
    bg[bh] = {};
    for (var bi in bf[bh]) {
      var bF = bf[bh][bi];
      if (bF && (bF.isColor || bF.isMatrix3 || bF.isMatrix4 || bF.isVector2 || bF.isVector3 || bF.isVector4 || bF.isTexture)) {
        bg[bh][bi] = bF.clone();
      } else if (Array.isArray(bF)) {
        bg[bh][bi] = bF.slice();
      } else {
        bg[bh][bi] = bF;
      }
    }
  }
  return bg;
}
function vW(bf) {
  for (var bg = {}, bh = 0; bh < bf.length; bh++) {
    var bi = vQ(bf[bh]);
    for (var bF in bi) {
      bg[bF] = bi[bF];
    }
  }
  return bg;
}
var w2;
var w3;
var w4;
export var UniformsUtils = {
  clone: vQ,
  merge: vW
};
var w6 = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
export function Color(bf, bg, bh) {
  if (bg === undefined && bh === undefined) {
    return this.set(bf);
  } else {
    return this.setRGB(bf, bg, bh);
  }
}
Object.assign(Color.prototype, {
  isColor: true,
  r: 1,
  g: 1,
  b: 1,
  set: function (bf) {
    if (bf && bf.isColor) {
      this.copy(bf);
    } else if (typeof bf == "number") {
      this.setHex(bf);
    } else if (typeof bf == "string") {
      this.setStyle(bf);
    }
    return this;
  },
  setScalar: function (bf) {
    this.r = bf;
    this.g = bf;
    this.b = bf;
    return this;
  },
  setHex: function (bf) {
    bf = Math.floor(bf);
    this.r = (bf >> 16 & 255) / 255;
    this.g = (bf >> 8 & 255) / 255;
    this.b = (bf & 255) / 255;
    return this;
  },
  setRGB: function (bf, bg, bh) {
    this.r = bf;
    this.g = bg;
    this.b = bh;
    return this;
  },
  setHSL: function () {
    function bf(bf, bg, bh) {
      if (bh < 0) {
        bh += 1;
      }
      if (bh > 1) {
        bh -= 1;
      }
      if (bh < 1 / 6) {
        return bf + (bg - bf) * 6 * bh;
      } else if (bh < 0.5) {
        return bg;
      } else if (bh < 2 / 3) {
        return bf + (bg - bf) * 6 * (2 / 3 - bh);
      } else {
        return bf;
      }
    }
    return function (bg, bh, bi) {
      bg = Math.euclideanModulo(bg, 1);
      bh = Math.clamp(bh, 0, 1);
      bi = Math.clamp(bi, 0, 1);
      if (bh === 0) {
        this.r = this.g = this.b = bi;
      } else {
        var bF = bi <= 0.5 ? bi * (1 + bh) : bi + bh - bi * bh;
        var bG = bi * 2 - bF;
        this.r = bf(bG, bF, bg + 1 / 3);
        this.g = bf(bG, bF, bg);
        this.b = bf(bG, bF, bg - 1 / 3);
      }
      return this;
    };
  }(),
  setStyle: function (bf) {
    function bg(bg) {
      if (bg !== undefined && parseFloat(bg) < 1) {
        console.warn("THREE.Color: Alpha component of " + bf + " will be ignored.");
      }
    }
    var bh;
    if (bh = /^((?:rgb|hsl)a?)\(\s*([^\)]*)\)/.exec(bf)) {
      var bi;
      var bF = bh[1];
      var bG = bh[2];
      switch (bF) {
        case "rgb":
        case "rgba":
          if (bi = /^(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(bG)) {
            this.r = Math.min(255, parseInt(bi[1], 10)) / 255;
            this.g = Math.min(255, parseInt(bi[2], 10)) / 255;
            this.b = Math.min(255, parseInt(bi[3], 10)) / 255;
            bg(bi[5]);
            return this;
          }
          if (bi = /^(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(bG)) {
            this.r = Math.min(100, parseInt(bi[1], 10)) / 100;
            this.g = Math.min(100, parseInt(bi[2], 10)) / 100;
            this.b = Math.min(100, parseInt(bi[3], 10)) / 100;
            bg(bi[5]);
            return this;
          }
          break;
        case "hsl":
        case "hsla":
          if (bi = /^([0-9]*\.?[0-9]+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(,\s*([0-9]*\.?[0-9]+)\s*)?$/.exec(bG)) {
            var bH = parseFloat(bi[1]) / 360;
            var bI = parseInt(bi[2], 10) / 100;
            var bJ = parseInt(bi[3], 10) / 100;
            bg(bi[5]);
            return this.setHSL(bH, bI, bJ);
          }
      }
    } else if (bh = /^\#([A-Fa-f0-9]+)$/.exec(bf)) {
      var bK;
      var bL = (bK = bh[1]).length;
      if (bL === 3) {
        this.r = parseInt(bK.charAt(0) + bK.charAt(0), 16) / 255;
        this.g = parseInt(bK.charAt(1) + bK.charAt(1), 16) / 255;
        this.b = parseInt(bK.charAt(2) + bK.charAt(2), 16) / 255;
        return this;
      }
      if (bL === 6) {
        this.r = parseInt(bK.charAt(0) + bK.charAt(1), 16) / 255;
        this.g = parseInt(bK.charAt(2) + bK.charAt(3), 16) / 255;
        this.b = parseInt(bK.charAt(4) + bK.charAt(5), 16) / 255;
        return this;
      }
    }
    if (bf && bf.length > 0) {
      if ((bK = w6[bf]) !== undefined) {
        this.setHex(bK);
      } else {
        console.warn("THREE.Color: Unknown color " + bf);
      }
    }
    return this;
  },
  clone: function () {
    return new this.constructor(this.r, this.g, this.b);
  },
  copy: function (bf) {
    this.r = bf.r;
    this.g = bf.g;
    this.b = bf.b;
    return this;
  },
  copyGammaToLinear: function (bf, bg) {
    if (bg === undefined) {
      bg = 2;
    }
    this.r = Math.pow(bf.r, bg);
    this.g = Math.pow(bf.g, bg);
    this.b = Math.pow(bf.b, bg);
    return this;
  },
  copyLinearToGamma: function (bf, bg) {
    if (bg === undefined) {
      bg = 2;
    }
    var bh = bg > 0 ? 1 / bg : 1;
    this.r = Math.pow(bf.r, bh);
    this.g = Math.pow(bf.g, bh);
    this.b = Math.pow(bf.b, bh);
    return this;
  },
  convertGammaToLinear: function (bf) {
    this.copyGammaToLinear(this, bf);
    return this;
  },
  convertLinearToGamma: function (bf) {
    this.copyLinearToGamma(this, bf);
    return this;
  },
  copySRGBToLinear: function () {
    function bf(bf) {
      if (bf < 0.04045) {
        return bf * 0.0773993808;
      } else {
        return Math.pow(bf * 0.9478672986 + 0.0521327014, 2.4);
      }
    }
    return function (bg) {
      this.r = bf(bg.r);
      this.g = bf(bg.g);
      this.b = bf(bg.b);
      return this;
    };
  }(),
  copyLinearToSRGB: function () {
    function bf(bf) {
      if (bf < 0.0031308) {
        return bf * 12.92;
      } else {
        return Math.pow(bf, 0.41666) * 1.055 - 0.055;
      }
    }
    return function (bg) {
      this.r = bf(bg.r);
      this.g = bf(bg.g);
      this.b = bf(bg.b);
      return this;
    };
  }(),
  convertSRGBToLinear: function () {
    this.copySRGBToLinear(this);
    return this;
  },
  convertLinearToSRGB: function () {
    this.copyLinearToSRGB(this);
    return this;
  },
  getHex: function () {
    return this.r * 255 << 16 ^ this.g * 255 << 8 ^ this.b * 255 << 0;
  },
  getHexString: function () {
    return ("000000" + this.getHex().toString(16)).slice(-6);
  },
  getHSL: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Color: .getHSL() target is now required");
      bf = {
        h: 0,
        s: 0,
        l: 0
      };
    }
    var bg;
    var bh;
    var bi = this.r;
    var bF = this.g;
    var bG = this.b;
    var bH = Math.max(bi, bF, bG);
    var bI = Math.min(bi, bF, bG);
    var bJ = (bI + bH) / 2;
    if (bI === bH) {
      bg = 0;
      bh = 0;
    } else {
      var bK = bH - bI;
      bh = bJ <= 0.5 ? bK / (bH + bI) : bK / (2 - bH - bI);
      switch (bH) {
        case bi:
          bg = (bF - bG) / bK + (bF < bG ? 6 : 0);
          break;
        case bF:
          bg = (bG - bi) / bK + 2;
          break;
        case bG:
          bg = (bi - bF) / bK + 4;
      }
      bg /= 6;
    }
    bf.h = bg;
    bf.s = bh;
    bf.l = bJ;
    return bf;
  },
  getStyle: function () {
    return "rgb(" + (this.r * 255 | 0) + "," + (this.g * 255 | 0) + "," + (this.b * 255 | 0) + ")";
  },
  offsetHSL: (w4 = {}, function (bf, bg, bh) {
    this.getHSL(w4);
    w4.h += bf;
    w4.s += bg;
    w4.l += bh;
    this.setHSL(w4.h, w4.s, w4.l);
    return this;
  }),
  add: function (bf) {
    this.r += bf.r;
    this.g += bf.g;
    this.b += bf.b;
    return this;
  },
  addColors: function (bf, bg) {
    this.r = bf.r + bg.r;
    this.g = bf.g + bg.g;
    this.b = bf.b + bg.b;
    return this;
  },
  addScalar: function (bf) {
    this.r += bf;
    this.g += bf;
    this.b += bf;
    return this;
  },
  sub: function (bf) {
    this.r = Math.max(0, this.r - bf.r);
    this.g = Math.max(0, this.g - bf.g);
    this.b = Math.max(0, this.b - bf.b);
    return this;
  },
  multiply: function (bf) {
    this.r *= bf.r;
    this.g *= bf.g;
    this.b *= bf.b;
    return this;
  },
  multiplyScalar: function (bf) {
    this.r *= bf;
    this.g *= bf;
    this.b *= bf;
    return this;
  },
  lerp: function (bf, bg) {
    this.r += (bf.r - this.r) * bg;
    this.g += (bf.g - this.g) * bg;
    this.b += (bf.b - this.b) * bg;
    return this;
  },
  lerpHSL: (w2 = {
    h: 0,
    s: 0,
    l: 0
  }, w3 = {
    h: 0,
    s: 0,
    l: 0
  }, function (bf, bg) {
    this.getHSL(w2);
    bf.getHSL(w3);
    var bh = Math.lerp(w2.h, w3.h, bg);
    var bi = Math.lerp(w2.s, w3.s, bg);
    var bF = Math.lerp(w2.l, w3.l, bg);
    this.setHSL(bh, bi, bF);
    return this;
  }),
  equals: function (bf) {
    return bf.r === this.r && bf.g === this.g && bf.b === this.b;
  },
  fromArray: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.r = bf[bg];
    this.g = bf[bg + 1];
    this.b = bf[bg + 2];
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this.r;
    bf[bg + 1] = this.g;
    bf[bg + 2] = this.b;
    return bf;
  },
  toJSON: function () {
    return this.getHex();
  }
});
var xm;
export var UniformsLib = {
  common: {
    diffuse: {
      value: new Color(15658734)
    },
    opacity: {
      value: 1
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new Matrix3()
    },
    alphaMap: {
      value: null
    }
  },
  specularmap: {
    specularMap: {
      value: null
    }
  },
  envmap: {
    envMap: {
      value: null
    },
    flipEnvMap: {
      value: -1
    },
    reflectivity: {
      value: 1
    },
    refractionRatio: {
      value: 0.98
    },
    maxMipLevel: {
      value: 0
    }
  },
  aomap: {
    aoMap: {
      value: null
    },
    aoMapIntensity: {
      value: 1
    }
  },
  lightmap: {
    lightMap: {
      value: null
    },
    lightMapIntensity: {
      value: 1
    }
  },
  emissivemap: {
    emissiveMap: {
      value: null
    }
  },
  bumpmap: {
    bumpMap: {
      value: null
    },
    bumpScale: {
      value: 1
    }
  },
  normalmap: {
    normalMap: {
      value: null
    },
    normalScale: {
      value: new Vector2(1, 1)
    }
  },
  displacementmap: {
    displacementMap: {
      value: null
    },
    displacementScale: {
      value: 1
    },
    displacementBias: {
      value: 0
    }
  },
  roughnessmap: {
    roughnessMap: {
      value: null
    }
  },
  metalnessmap: {
    metalnessMap: {
      value: null
    }
  },
  gradientmap: {
    gradientMap: {
      value: null
    }
  },
  fog: {
    fogDensity: {
      value: 0.00025
    },
    fogNear: {
      value: 1
    },
    fogFar: {
      value: 2000
    },
    fogColor: {
      value: new Color(16777215)
    }
  },
  lights: {
    ambientLightColor: {
      value: []
    },
    lightProbe: {
      value: []
    },
    directionalLights: {
      value: [],
      properties: {
        direction: {},
        color: {},
        shadow: {},
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    directionalShadowMap: {
      value: []
    },
    directionalShadowMatrix: {
      value: []
    },
    spotLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        direction: {},
        distance: {},
        coneCos: {},
        penumbraCos: {},
        decay: {},
        shadow: {},
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {}
      }
    },
    spotShadowMap: {
      value: []
    },
    spotShadowMatrix: {
      value: []
    },
    pointLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        decay: {},
        distance: {},
        shadow: {},
        shadowBias: {},
        shadowRadius: {},
        shadowMapSize: {},
        shadowCameraNear: {},
        shadowCameraFar: {}
      }
    },
    pointShadowMap: {
      value: []
    },
    pointShadowMatrix: {
      value: []
    },
    hemisphereLights: {
      value: [],
      properties: {
        direction: {},
        skyColor: {},
        groundColor: {}
      }
    },
    rectAreaLights: {
      value: [],
      properties: {
        color: {},
        position: {},
        width: {},
        height: {}
      }
    }
  },
  points: {
    diffuse: {
      value: new Color(15658734)
    },
    opacity: {
      value: 1
    },
    size: {
      value: 1
    },
    scale: {
      value: 1
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new Matrix3()
    }
  },
  sprite: {
    diffuse: {
      value: new Color(15658734)
    },
    opacity: {
      value: 1
    },
    center: {
      value: new Vector2(0.5, 0.5)
    },
    rotation: {
      value: 0
    },
    map: {
      value: null
    },
    uvTransform: {
      value: new Matrix3()
    }
  }
};
export var ShaderLib = {
  basic: {
    uniforms: vW([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.fog]),
    vertexShader: ShaderChunk.meshbasic_vert,
    fragmentShader: ShaderChunk.meshbasic_frag
  },
  lambert: {
    uniforms: vW([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.fog, UniformsLib.lights, {
      emissive: {
        value: new Color(0)
      }
    }]),
    vertexShader: ShaderChunk.meshlambert_vert,
    fragmentShader: ShaderChunk.meshlambert_frag
  },
  phong: {
    uniforms: vW([UniformsLib.common, UniformsLib.specularmap, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.gradientmap, UniformsLib.fog, UniformsLib.lights, {
      emissive: {
        value: new Color(0)
      },
      specular: {
        value: new Color(1118481)
      },
      shininess: {
        value: 30
      }
    }]),
    vertexShader: ShaderChunk.meshphong_vert,
    fragmentShader: ShaderChunk.meshphong_frag
  },
  standard: {
    uniforms: vW([UniformsLib.common, UniformsLib.envmap, UniformsLib.aomap, UniformsLib.lightmap, UniformsLib.emissivemap, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.roughnessmap, UniformsLib.metalnessmap, UniformsLib.fog, UniformsLib.lights, {
      emissive: {
        value: new Color(0)
      },
      roughness: {
        value: 0.5
      },
      metalness: {
        value: 0.5
      },
      envMapIntensity: {
        value: 1
      }
    }]),
    vertexShader: ShaderChunk.meshphysical_vert,
    fragmentShader: ShaderChunk.meshphysical_frag
  },
  matcap: {
    uniforms: vW([UniformsLib.common, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, UniformsLib.fog, {
      matcap: {
        value: null
      }
    }]),
    vertexShader: ShaderChunk.meshmatcap_vert,
    fragmentShader: ShaderChunk.meshmatcap_frag
  },
  points: {
    uniforms: vW([UniformsLib.points, UniformsLib.fog]),
    vertexShader: ShaderChunk.points_vert,
    fragmentShader: ShaderChunk.points_frag
  },
  dashed: {
    uniforms: vW([UniformsLib.common, UniformsLib.fog, {
      scale: {
        value: 1
      },
      dashSize: {
        value: 1
      },
      totalSize: {
        value: 2
      }
    }]),
    vertexShader: ShaderChunk.linedashed_vert,
    fragmentShader: ShaderChunk.linedashed_frag
  },
  depth: {
    uniforms: vW([UniformsLib.common, UniformsLib.displacementmap]),
    vertexShader: ShaderChunk.depth_vert,
    fragmentShader: ShaderChunk.depth_frag
  },
  normal: {
    uniforms: vW([UniformsLib.common, UniformsLib.bumpmap, UniformsLib.normalmap, UniformsLib.displacementmap, {
      opacity: {
        value: 1
      }
    }]),
    vertexShader: ShaderChunk.normal_vert,
    fragmentShader: ShaderChunk.normal_frag
  },
  sprite: {
    uniforms: vW([UniformsLib.sprite, UniformsLib.fog]),
    vertexShader: ShaderChunk.sprite_vert,
    fragmentShader: ShaderChunk.sprite_frag
  },
  background: {
    uniforms: {
      uvTransform: {
        value: new Matrix3()
      },
      t2D: {
        value: null
      }
    },
    vertexShader: ShaderChunk.background_vert,
    fragmentShader: ShaderChunk.background_frag
  },
  cube: {
    uniforms: {
      tCube: {
        value: null
      },
      tFlip: {
        value: -1
      },
      opacity: {
        value: 1
      }
    },
    vertexShader: ShaderChunk.cube_vert,
    fragmentShader: ShaderChunk.cube_frag
  },
  equirect: {
    uniforms: {
      tEquirect: {
        value: null
      }
    },
    vertexShader: ShaderChunk.equirect_vert,
    fragmentShader: ShaderChunk.equirect_frag
  },
  distanceRGBA: {
    uniforms: vW([UniformsLib.common, UniformsLib.displacementmap, {
      referencePosition: {
        value: new Vector3()
      },
      nearDistance: {
        value: 1
      },
      farDistance: {
        value: 1000
      }
    }]),
    vertexShader: ShaderChunk.distanceRGBA_vert,
    fragmentShader: ShaderChunk.distanceRGBA_frag
  },
  shadow: {
    uniforms: vW([UniformsLib.lights, UniformsLib.fog, {
      color: {
        value: new Color(0)
      },
      opacity: {
        value: 1
      }
    }]),
    vertexShader: ShaderChunk.shadow_vert,
    fragmentShader: ShaderChunk.shadow_frag
  }
};
function xp() {
  var bf = null;
  var bg = false;
  var bh = null;
  function bi(bF, bG) {
    if (bg !== false) {
      bh(bF, bG);
      bf.requestAnimationFrame(bi);
    }
  }
  return {
    start: function () {
      if (bg !== true && bh !== null) {
        bf.requestAnimationFrame(bi);
        bg = true;
      }
    },
    stop: function () {
      bg = false;
    },
    setAnimationLoop: function (bf) {
      bh = bf;
    },
    setContext: function (bg) {
      bf = bg;
    }
  };
}
function xy(bf) {
  var bg = new WeakMap();
  return {
    get: function (bf) {
      if (bf.isInterleavedBufferAttribute) {
        bf = bf.data;
      }
      return bg.get(bf);
    },
    remove: function (bh) {
      if (bh.isInterleavedBufferAttribute) {
        bh = bh.data;
      }
      var bi = bg.get(bh);
      if (bi) {
        bf.deleteBuffer(bi.buffer);
        bg.delete(bh);
      }
    },
    update: function (bh, bi) {
      if (bh.isInterleavedBufferAttribute) {
        bh = bh.data;
      }
      var bF = bg.get(bh);
      if (bF === undefined) {
        bg.set(bh, function (bg, bh) {
          var bi = bg.array;
          var bF = bg.dynamic ? 35048 : 35044;
          var bG = bf.createBuffer();
          bf.bindBuffer(bh, bG);
          bf.bufferData(bh, bi, bF);
          bg.onUploadCallback();
          var bH = 5126;
          if (bi instanceof Float32Array) {
            bH = 5126;
          } else if (bi instanceof Float64Array) {
            console.warn("THREE.WebGLAttributes: Unsupported data buffer format: Float64Array.");
          } else if (bi instanceof Uint16Array) {
            bH = 5123;
          } else if (bi instanceof Int16Array) {
            bH = 5122;
          } else if (bi instanceof Uint32Array) {
            bH = 5125;
          } else if (bi instanceof Int32Array) {
            bH = 5124;
          } else if (bi instanceof Int8Array) {
            bH = 5120;
          } else if (bi instanceof Uint8Array) {
            bH = 5121;
          }
          return {
            buffer: bG,
            type: bH,
            bytesPerElement: bi.BYTES_PER_ELEMENT,
            version: bg.version
          };
        }(bh, bi));
      } else if (bF.version < bh.version) {
        (function (bg, bh, bi) {
          var bF = bh.array;
          var bG = bh.updateRange;
          bf.bindBuffer(bi, bg);
          if (bh.dynamic === false) {
            bf.bufferData(bi, bF, 35044);
          } else if (bG.count === -1) {
            bf.bufferSubData(bi, 0, bF);
          } else if (bG.count === 0) {
            console.error("THREE.WebGLObjects.updateBuffer: dynamic THREE.BufferAttribute marked as needsUpdate but updateRange.count is 0, ensure you are using set methods or updating manually.");
          } else {
            bf.bufferSubData(bi, bG.offset * bF.BYTES_PER_ELEMENT, bF.subarray(bG.offset, bG.offset + bG.count));
            bG.count = -1;
          }
        })(bF.buffer, bh, bi);
        bF.version = bh.version;
      }
    }
  };
}
export function Face3(bf, bg, bh, bi, bF, bG) {
  this.a = bf;
  this.b = bg;
  this.c = bh;
  this.normal = bi && bi.isVector3 ? bi : new Vector3();
  this.vertexNormals = Array.isArray(bi) ? bi : [];
  this.color = bF && bF.isColor ? bF : new Color();
  this.vertexColors = Array.isArray(bF) ? bF : [];
  this.materialIndex = bG !== undefined ? bG : 0;
}
export function Euler(bf, bg, bh, bi) {
  this._x = bf || 0;
  this._y = bg || 0;
  this._z = bh || 0;
  this._order = bi || Euler.DefaultOrder;
}
export function Layers() {
  this.mask = 1;
}
ShaderLib.physical = {
  uniforms: vW([ShaderLib.standard.uniforms, {
    clearCoat: {
      value: 0
    },
    clearCoatRoughness: {
      value: 0
    }
  }]),
  vertexShader: ShaderChunk.meshphysical_vert,
  fragmentShader: ShaderChunk.meshphysical_frag
};
Object.assign(Face3.prototype, {
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.a = bf.a;
    this.b = bf.b;
    this.c = bf.c;
    this.normal.copy(bf.normal);
    this.color.copy(bf.color);
    this.materialIndex = bf.materialIndex;
    for (var bg = 0, bh = bf.vertexNormals.length; bg < bh; bg++) {
      this.vertexNormals[bg] = bf.vertexNormals[bg].clone();
    }
    bg = 0;
    bh = bf.vertexColors.length;
    for (; bg < bh; bg++) {
      this.vertexColors[bg] = bf.vertexColors[bg].clone();
    }
    return this;
  }
});
Euler.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
Euler.DefaultOrder = "XYZ";
Object.defineProperties(Euler.prototype, {
  x: {
    get: function () {
      return this._x;
    },
    set: function (bf) {
      this._x = bf;
      this.onChangeCallback();
    }
  },
  y: {
    get: function () {
      return this._y;
    },
    set: function (bf) {
      this._y = bf;
      this.onChangeCallback();
    }
  },
  z: {
    get: function () {
      return this._z;
    },
    set: function (bf) {
      this._z = bf;
      this.onChangeCallback();
    }
  },
  order: {
    get: function () {
      return this._order;
    },
    set: function (bf) {
      this._order = bf;
      this.onChangeCallback();
    }
  }
});
Object.assign(Euler.prototype, {
  isEuler: true,
  set: function (bf, bg, bh, bi) {
    this._x = bf;
    this._y = bg;
    this._z = bh;
    this._order = bi || this._order;
    this.onChangeCallback();
    return this;
  },
  clone: function () {
    return new this.constructor(this._x, this._y, this._z, this._order);
  },
  copy: function (bf) {
    this._x = bf._x;
    this._y = bf._y;
    this._z = bf._z;
    this._order = bf._order;
    this.onChangeCallback();
    return this;
  },
  setFromRotationMatrix: function (bf, bg, bh) {
    var bi = Math.clamp;
    var bF = bf.elements;
    var bG = bF[0];
    var bH = bF[4];
    var bI = bF[8];
    var bJ = bF[1];
    var bK = bF[5];
    var bL = bF[9];
    var bM = bF[2];
    var bN = bF[6];
    var bO = bF[10];
    if ((bg = bg || this._order) === "XYZ") {
      this._y = Math.asin(bi(bI, -1, 1));
      if (Math.abs(bI) < 0.99999) {
        this._x = Math.atan2(-bL, bO);
        this._z = Math.atan2(-bH, bG);
      } else {
        this._x = Math.atan2(bN, bK);
        this._z = 0;
      }
    } else if (bg === "YXZ") {
      this._x = Math.asin(-bi(bL, -1, 1));
      if (Math.abs(bL) < 0.99999) {
        this._y = Math.atan2(bI, bO);
        this._z = Math.atan2(bJ, bK);
      } else {
        this._y = Math.atan2(-bM, bG);
        this._z = 0;
      }
    } else if (bg === "ZXY") {
      this._x = Math.asin(bi(bN, -1, 1));
      if (Math.abs(bN) < 0.99999) {
        this._y = Math.atan2(-bM, bO);
        this._z = Math.atan2(-bH, bK);
      } else {
        this._y = 0;
        this._z = Math.atan2(bJ, bG);
      }
    } else if (bg === "ZYX") {
      this._y = Math.asin(-bi(bM, -1, 1));
      if (Math.abs(bM) < 0.99999) {
        this._x = Math.atan2(bN, bO);
        this._z = Math.atan2(bJ, bG);
      } else {
        this._x = 0;
        this._z = Math.atan2(-bH, bK);
      }
    } else if (bg === "YZX") {
      this._z = Math.asin(bi(bJ, -1, 1));
      if (Math.abs(bJ) < 0.99999) {
        this._x = Math.atan2(-bL, bK);
        this._y = Math.atan2(-bM, bG);
      } else {
        this._x = 0;
        this._y = Math.atan2(bI, bO);
      }
    } else if (bg === "XZY") {
      this._z = Math.asin(-bi(bH, -1, 1));
      if (Math.abs(bH) < 0.99999) {
        this._x = Math.atan2(bN, bK);
        this._y = Math.atan2(bI, bG);
      } else {
        this._x = Math.atan2(-bL, bO);
        this._y = 0;
      }
    } else {
      console.warn("THREE.Euler: .setFromRotationMatrix() given unsupported order: " + bg);
    }
    this._order = bg;
    if (bh !== false) {
      this.onChangeCallback();
    }
    return this;
  },
  setFromQuaternion: function () {
    var bf = new Matrix4();
    return function (bg, bh, bi) {
      bf.makeRotationFromQuaternion(bg);
      return this.setFromRotationMatrix(bf, bh, bi);
    };
  }(),
  setFromVector3: function (bf, bg) {
    return this.set(bf.x, bf.y, bf.z, bg || this._order);
  },
  reorder: (xm = new Quaternion(), function (bf) {
    xm.setFromEuler(this);
    return this.setFromQuaternion(xm, bf);
  }),
  equals: function (bf) {
    return bf._x === this._x && bf._y === this._y && bf._z === this._z && bf._order === this._order;
  },
  fromArray: function (bf) {
    this._x = bf[0];
    this._y = bf[1];
    this._z = bf[2];
    if (bf[3] !== undefined) {
      this._order = bf[3];
    }
    this.onChangeCallback();
    return this;
  },
  toArray: function (bf, bg) {
    if (bf === undefined) {
      bf = [];
    }
    if (bg === undefined) {
      bg = 0;
    }
    bf[bg] = this._x;
    bf[bg + 1] = this._y;
    bf[bg + 2] = this._z;
    bf[bg + 3] = this._order;
    return bf;
  },
  toVector3: function (bf) {
    if (bf) {
      return bf.set(this._x, this._y, this._z);
    } else {
      return new Vector3(this._x, this._y, this._z);
    }
  },
  onChange: function (bf) {
    this.onChangeCallback = bf;
    return this;
  },
  onChangeCallback: function () {}
});
Object.assign(Layers.prototype, {
  set: function (bf) {
    this.mask = 1 << bf | 0;
  },
  enable: function (bf) {
    this.mask |= 1 << bf | 0;
  },
  toggle: function (bf) {
    this.mask ^= 1 << bf | 0;
  },
  disable: function (bf) {
    this.mask &= ~(1 << bf | 0);
  },
  test: function (bf) {
    return (this.mask & bf.mask) != 0;
  }
});
var yN;
var yO;
var yP;
var yQ;
var yR;
var yS = 0;
export function Object3D() {
  Object.defineProperty(this, "id", {
    value: yS++
  });
  this.uuid = Math.generateUUID();
  this.name = "";
  this.type = "Object3D";
  this.parent = null;
  this.children = [];
  this.up = Object3D.DefaultUp.clone();
  var bf = new Vector3();
  var bg = new Euler();
  var bh = new Quaternion();
  var bi = new Vector3(1, 1, 1);
  bg.onChange(function () {
    bh.setFromEuler(bg, false);
  });
  bh.onChange(function () {
    bg.setFromQuaternion(bh, undefined, false);
  });
  Object.defineProperties(this, {
    position: {
      configurable: true,
      enumerable: true,
      value: bf
    },
    rotation: {
      configurable: true,
      enumerable: true,
      value: bg
    },
    quaternion: {
      configurable: true,
      enumerable: true,
      value: bh
    },
    scale: {
      configurable: true,
      enumerable: true,
      value: bi
    },
    modelViewMatrix: {
      value: new Matrix4()
    },
    normalMatrix: {
      value: new Matrix3()
    }
  });
  this.matrix = new Matrix4();
  this.matrixWorld = new Matrix4();
  this.matrixAutoUpdate = Object3D.DefaultMatrixAutoUpdate;
  this.matrixWorldNeedsUpdate = false;
  this.layers = new Layers();
  this.visible = true;
  this.castShadow = false;
  this.receiveShadow = false;
  this.frustumCulled = true;
  this.renderOrder = 0;
  this.userData = {};
}
Object3D.DefaultUp = new Vector3(0, 1, 0);
Object3D.DefaultMatrixAutoUpdate = true;
Object3D.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Object3D,
  isObject3D: true,
  onBeforeRender: function () {},
  onAfterRender: function () {},
  applyMatrix: function (bf) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    this.matrix.premultiply(bf);
    this.matrix.decompose(this.position, this.quaternion, this.scale);
  },
  applyQuaternion: function (bf) {
    this.quaternion.premultiply(bf);
    return this;
  },
  setRotationFromAxisAngle: function (bf, bg) {
    this.quaternion.setFromAxisAngle(bf, bg);
  },
  setRotationFromEuler: function (bf) {
    this.quaternion.setFromEuler(bf, true);
  },
  setRotationFromMatrix: function (bf) {
    this.quaternion.setFromRotationMatrix(bf);
  },
  setRotationFromQuaternion: function (bf) {
    this.quaternion.copy(bf);
  },
  rotateOnAxis: (yR = new Quaternion(), function (bf, bg) {
    yR.setFromAxisAngle(bf, bg);
    this.quaternion.multiply(yR);
    return this;
  }),
  rotateOnWorldAxis: function () {
    var bf = new Quaternion();
    return function (bg, bh) {
      bf.setFromAxisAngle(bg, bh);
      this.quaternion.premultiply(bf);
      return this;
    };
  }(),
  rotateX: function () {
    var bf = new Vector3(1, 0, 0);
    return function (bg) {
      return this.rotateOnAxis(bf, bg);
    };
  }(),
  rotateY: function () {
    var bf = new Vector3(0, 1, 0);
    return function (bg) {
      return this.rotateOnAxis(bf, bg);
    };
  }(),
  rotateZ: function () {
    var bf = new Vector3(0, 0, 1);
    return function (bg) {
      return this.rotateOnAxis(bf, bg);
    };
  }(),
  translateOnAxis: function () {
    var bf = new Vector3();
    return function (bg, bh) {
      bf.copy(bg).applyQuaternion(this.quaternion);
      this.position.add(bf.multiplyScalar(bh));
      return this;
    };
  }(),
  translateX: function () {
    var bf = new Vector3(1, 0, 0);
    return function (bg) {
      return this.translateOnAxis(bf, bg);
    };
  }(),
  translateY: function () {
    var bf = new Vector3(0, 1, 0);
    return function (bg) {
      return this.translateOnAxis(bf, bg);
    };
  }(),
  translateZ: function () {
    var bf = new Vector3(0, 0, 1);
    return function (bg) {
      return this.translateOnAxis(bf, bg);
    };
  }(),
  localToWorld: function (bf) {
    return bf.applyMatrix4(this.matrixWorld);
  },
  worldToLocal: (yQ = new Matrix4(), function (bf) {
    return bf.applyMatrix4(yQ.getInverse(this.matrixWorld));
  }),
  lookAt: function () {
    var bf = new Quaternion();
    var bg = new Matrix4();
    var bh = new Vector3();
    var bi = new Vector3();
    return function (bF, bG, bH) {
      if (bF.isVector3) {
        bh.copy(bF);
      } else {
        bh.set(bF, bG, bH);
      }
      var bI = this.parent;
      this.updateWorldMatrix(true, false);
      bi.setFromMatrixPosition(this.matrixWorld);
      if (this.isCamera || this.isLight) {
        bg.lookAt(bi, bh, this.up);
      } else {
        bg.lookAt(bh, bi, this.up);
      }
      this.quaternion.setFromRotationMatrix(bg);
      if (bI) {
        bg.extractRotation(bI.matrixWorld);
        bf.setFromRotationMatrix(bg);
        this.quaternion.premultiply(bf.inverse());
      }
    };
  }(),
  add: function (bf) {
    if (arguments.length > 1) {
      for (var bg = 0; bg < arguments.length; bg++) {
        this.add(arguments[bg]);
      }
      return this;
    }
    if (bf === this) {
      console.error("THREE.Object3D.add: object can't be added as a child of itself.", bf);
      return this;
    } else {
      if (bf && bf.isObject3D) {
        if (bf.parent !== null) {
          bf.parent.remove(bf);
        }
        bf.parent = this;
        bf.dispatchEvent({
          type: "added"
        });
        this.children.push(bf);
      } else {
        console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", bf);
      }
      return this;
    }
  },
  remove: function (bf) {
    if (arguments.length > 1) {
      for (var bg = 0; bg < arguments.length; bg++) {
        this.remove(arguments[bg]);
      }
      return this;
    }
    var bh = this.children.indexOf(bf);
    if (bh !== -1) {
      bf.parent = null;
      bf.dispatchEvent({
        type: "removed"
      });
      this.children.splice(bh, 1);
    }
    return this;
  },
  attach: (yP = new Matrix4(), function (bf) {
    this.updateWorldMatrix(true, false);
    yP.getInverse(this.matrixWorld);
    if (bf.parent !== null) {
      bf.parent.updateWorldMatrix(true, false);
      yP.multiply(bf.parent.matrixWorld);
    }
    bf.applyMatrix(yP);
    bf.updateWorldMatrix(false, false);
    this.add(bf);
    return this;
  }),
  getObjectById: function (bf) {
    return this.getObjectByProperty("id", bf);
  },
  getObjectByName: function (bf) {
    return this.getObjectByProperty("name", bf);
  },
  getObjectByProperty: function (bf, bg) {
    if (this[bf] === bg) {
      return this;
    }
    for (var bh = 0, bi = this.children.length; bh < bi; bh++) {
      var bF = this.children[bh].getObjectByProperty(bf, bg);
      if (bF !== undefined) {
        return bF;
      }
    }
  },
  getWorldPosition: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Object3D: .getWorldPosition() target is now required");
      bf = new Vector3();
    }
    this.updateMatrixWorld(true);
    return bf.setFromMatrixPosition(this.matrixWorld);
  },
  getWorldQuaternion: (yN = new Vector3(), yO = new Vector3(), function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Object3D: .getWorldQuaternion() target is now required");
      bf = new Quaternion();
    }
    this.updateMatrixWorld(true);
    this.matrixWorld.decompose(yN, bf, yO);
    return bf;
  }),
  getWorldScale: function () {
    var bf = new Vector3();
    var bg = new Quaternion();
    return function (bh) {
      if (bh === undefined) {
        console.warn("THREE.Object3D: .getWorldScale() target is now required");
        bh = new Vector3();
      }
      this.updateMatrixWorld(true);
      this.matrixWorld.decompose(bf, bg, bh);
      return bh;
    };
  }(),
  getWorldDirection: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Object3D: .getWorldDirection() target is now required");
      bf = new Vector3();
    }
    this.updateMatrixWorld(true);
    var bg = this.matrixWorld.elements;
    return bf.set(bg[8], bg[9], bg[10]).normalize();
  },
  raycast: function () {},
  traverse: function (bf) {
    bf(this);
    for (var bg = this.children, bh = 0, bi = bg.length; bh < bi; bh++) {
      bg[bh].traverse(bf);
    }
  },
  traverseVisible: function (bf) {
    if (this.visible !== false) {
      bf(this);
      for (var bg = this.children, bh = 0, bi = bg.length; bh < bi; bh++) {
        bg[bh].traverseVisible(bf);
      }
    }
  },
  traverseAncestors: function (bf) {
    var bg = this.parent;
    if (bg !== null) {
      bf(bg);
      bg.traverseAncestors(bf);
    }
  },
  updateMatrix: function () {
    this.matrix.compose(this.position, this.quaternion, this.scale);
    this.matrixWorldNeedsUpdate = true;
  },
  updateMatrixWorld: function (bf) {
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.matrixWorldNeedsUpdate || bf) {
      if (this.parent === null) {
        this.matrixWorld.copy(this.matrix);
      } else {
        this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
      }
      this.matrixWorldNeedsUpdate = false;
      bf = true;
    }
    for (var bg = this.children, bh = 0, bi = bg.length; bh < bi; bh++) {
      bg[bh].updateMatrixWorld(bf);
    }
  },
  updateWorldMatrix: function (bf, bg) {
    var bh = this.parent;
    if (bf === true && bh !== null) {
      bh.updateWorldMatrix(true, false);
    }
    if (this.matrixAutoUpdate) {
      this.updateMatrix();
    }
    if (this.parent === null) {
      this.matrixWorld.copy(this.matrix);
    } else {
      this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix);
    }
    if (bg === true) {
      for (var bi = this.children, bF = 0, bG = bi.length; bF < bG; bF++) {
        bi[bF].updateWorldMatrix(false, true);
      }
    }
  },
  toJSON: function (bf) {
    var bg = bf === undefined || typeof bf == "string";
    var bh = {};
    if (bg) {
      bf = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {}
      };
      bh.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON"
      };
    }
    var bi = {};
    function bF(bg, bh) {
      if (bg[bh.uuid] === undefined) {
        bg[bh.uuid] = bh.toJSON(bf);
      }
      return bh.uuid;
    }
    bi.uuid = this.uuid;
    bi.type = this.type;
    if (this.name !== "") {
      bi.name = this.name;
    }
    if (this.castShadow === true) {
      bi.castShadow = true;
    }
    if (this.receiveShadow === true) {
      bi.receiveShadow = true;
    }
    if (this.visible === false) {
      bi.visible = false;
    }
    if (this.frustumCulled === false) {
      bi.frustumCulled = false;
    }
    if (this.renderOrder !== 0) {
      bi.renderOrder = this.renderOrder;
    }
    if (JSON.stringify(this.userData) !== "{}") {
      bi.userData = this.userData;
    }
    bi.layers = this.layers.mask;
    bi.matrix = this.matrix.toArray();
    if (this.matrixAutoUpdate === false) {
      bi.matrixAutoUpdate = false;
    }
    if (this.isMesh && this.drawMode !== TrianglesDrawMode) {
      bi.drawMode = this.drawMode;
    }
    if (this.isMesh || this.isLine || this.isPoints) {
      bi.geometry = bF(bf.geometries, this.geometry);
      var bG = this.geometry.parameters;
      if (bG !== undefined && bG.shapes !== undefined) {
        var bH = bG.shapes;
        if (Array.isArray(bH)) {
          for (var bI = 0, bJ = bH.length; bI < bJ; bI++) {
            var bK = bH[bI];
            bF(bf.shapes, bK);
          }
        } else {
          bF(bf.shapes, bH);
        }
      }
    }
    if (this.material !== undefined) {
      if (Array.isArray(this.material)) {
        var bL = [];
        bI = 0;
        bJ = this.material.length;
        for (; bI < bJ; bI++) {
          bL.push(bF(bf.materials, this.material[bI]));
        }
        bi.material = bL;
      } else {
        bi.material = bF(bf.materials, this.material);
      }
    }
    if (this.children.length > 0) {
      bi.children = [];
      for (bI = 0; bI < this.children.length; bI++) {
        bi.children.push(this.children[bI].toJSON(bf).object);
      }
    }
    if (bg) {
      var bM = bQ(bf.geometries);
      var bN = bQ(bf.materials);
      var bO = bQ(bf.textures);
      var bP = bQ(bf.images);
      bH = bQ(bf.shapes);
      if (bM.length > 0) {
        bh.geometries = bM;
      }
      if (bN.length > 0) {
        bh.materials = bN;
      }
      if (bO.length > 0) {
        bh.textures = bO;
      }
      if (bP.length > 0) {
        bh.images = bP;
      }
      if (bH.length > 0) {
        bh.shapes = bH;
      }
    }
    bh.object = bi;
    return bh;
    function bQ(bf) {
      var bg = [];
      for (var bh in bf) {
        var bi = bf[bh];
        delete bi.metadata;
        bg.push(bi);
      }
      return bg;
    }
  },
  clone: function (bf) {
    return new this.constructor().copy(this, bf);
  },
  copy: function (bf, bg) {
    if (bg === undefined) {
      bg = true;
    }
    this.name = bf.name;
    this.up.copy(bf.up);
    this.position.copy(bf.position);
    this.quaternion.copy(bf.quaternion);
    this.scale.copy(bf.scale);
    this.matrix.copy(bf.matrix);
    this.matrixWorld.copy(bf.matrixWorld);
    this.matrixAutoUpdate = bf.matrixAutoUpdate;
    this.matrixWorldNeedsUpdate = bf.matrixWorldNeedsUpdate;
    this.layers.mask = bf.layers.mask;
    this.visible = bf.visible;
    this.castShadow = bf.castShadow;
    this.receiveShadow = bf.receiveShadow;
    this.frustumCulled = bf.frustumCulled;
    this.renderOrder = bf.renderOrder;
    this.userData = JSON.parse(JSON.stringify(bf.userData));
    if (bg === true) {
      for (var bh = 0; bh < bf.children.length; bh++) {
        var bi = bf.children[bh];
        this.add(bi.clone());
      }
    }
    return this;
  }
});
var AE;
var AF;
var AG = 0;
export function Geometry() {
  Object.defineProperty(this, "id", {
    value: AG += 2
  });
  this.uuid = Math.generateUUID();
  this.name = "";
  this.type = "Geometry";
  this.vertices = [];
  this.colors = [];
  this.faces = [];
  this.faceVertexUvs = [[]];
  this.morphTargets = [];
  this.morphNormals = [];
  this.skinWeights = [];
  this.skinIndices = [];
  this.lineDistances = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.elementsNeedUpdate = false;
  this.verticesNeedUpdate = false;
  this.uvsNeedUpdate = false;
  this.normalsNeedUpdate = false;
  this.colorsNeedUpdate = false;
  this.lineDistancesNeedUpdate = false;
  this.groupsNeedUpdate = false;
}
export function BufferAttribute(bf, bg, bh) {
  if (Array.isArray(bf)) {
    throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
  }
  this.name = "";
  this.array = bf;
  this.itemSize = bg;
  this.count = bf !== undefined ? bf.length / bg : 0;
  this.normalized = bh === true;
  this.dynamic = false;
  this.updateRange = {
    offset: 0,
    count: -1
  };
  this.version = 0;
}
export function Int8BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Int8Array(bf), bg, bh);
}
export function Uint8BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Uint8Array(bf), bg, bh);
}
export function Uint8ClampedBufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Uint8ClampedArray(bf), bg, bh);
}
export function Int16BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Int16Array(bf), bg, bh);
}
export function Uint16BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Uint16Array(bf), bg, bh);
}
export function Int32BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Int32Array(bf), bg, bh);
}
export function Uint32BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Uint32Array(bf), bg, bh);
}
export function Float32BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Float32Array(bf), bg, bh);
}
export function Float64BufferAttribute(bf, bg, bh) {
  BufferAttribute.call(this, new Float64Array(bf), bg, bh);
}
function Bm() {
  this.vertices = [];
  this.normals = [];
  this.colors = [];
  this.uvs = [];
  this.uvs2 = [];
  this.groups = [];
  this.morphTargets = {};
  this.skinWeights = [];
  this.skinIndices = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.verticesNeedUpdate = false;
  this.normalsNeedUpdate = false;
  this.colorsNeedUpdate = false;
  this.uvsNeedUpdate = false;
  this.groupsNeedUpdate = false;
}
function Bn(bf) {
  if (bf.length === 0) {
    return -Infinity;
  }
  for (var bg = bf[0], bh = 1, bi = bf.length; bh < bi; ++bh) {
    if (bf[bh] > bg) {
      bg = bf[bh];
    }
  }
  return bg;
}
Geometry.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Geometry,
  isGeometry: true,
  applyMatrix: function (bf) {
    for (var bg = new Matrix3().getNormalMatrix(bf), bh = 0, bi = this.vertices.length; bh < bi; bh++) {
      this.vertices[bh].applyMatrix4(bf);
    }
    bh = 0;
    bi = this.faces.length;
    for (; bh < bi; bh++) {
      var bF = this.faces[bh];
      bF.normal.applyMatrix3(bg).normalize();
      for (var bG = 0, bH = bF.vertexNormals.length; bG < bH; bG++) {
        bF.vertexNormals[bG].applyMatrix3(bg).normalize();
      }
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    this.verticesNeedUpdate = true;
    this.normalsNeedUpdate = true;
    return this;
  },
  rotateX: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationX(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  rotateY: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationY(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  rotateZ: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationZ(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  translate: function () {
    var bf = new Matrix4();
    return function (bg, bh, bi) {
      bf.makeTranslation(bg, bh, bi);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  scale: function () {
    var bf = new Matrix4();
    return function (bg, bh, bi) {
      bf.makeScale(bg, bh, bi);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  lookAt: (AF = new Object3D(), function (bf) {
    AF.lookAt(bf);
    AF.updateMatrix();
    this.applyMatrix(AF.matrix);
  }),
  fromBufferGeometry: function (bf) {
    var bg = this;
    var bh = bf.index !== null ? bf.index.array : undefined;
    var bi = bf.attributes;
    var bF = bi.position.array;
    var bG = bi.normal !== undefined ? bi.normal.array : undefined;
    var bH = bi.color !== undefined ? bi.color.array : undefined;
    var bI = bi.uv !== undefined ? bi.uv.array : undefined;
    var bJ = bi.uv2 !== undefined ? bi.uv2.array : undefined;
    if (bJ !== undefined) {
      this.faceVertexUvs[1] = [];
    }
    for (var bK = 0; bK < bF.length; bK += 3) {
      bg.vertices.push(new Vector3().fromArray(bF, bK));
      if (bH !== undefined) {
        bg.colors.push(new Color().fromArray(bH, bK));
      }
    }
    function bL(bf, bh, bi, bF) {
      var bK = bH === undefined ? [] : [bg.colors[bf].clone(), bg.colors[bh].clone(), bg.colors[bi].clone()];
      var bL = new Face3(bf, bh, bi, bG === undefined ? [] : [new Vector3().fromArray(bG, bf * 3), new Vector3().fromArray(bG, bh * 3), new Vector3().fromArray(bG, bi * 3)], bK, bF);
      bg.faces.push(bL);
      if (bI !== undefined) {
        bg.faceVertexUvs[0].push([new Vector2().fromArray(bI, bf * 2), new Vector2().fromArray(bI, bh * 2), new Vector2().fromArray(bI, bi * 2)]);
      }
      if (bJ !== undefined) {
        bg.faceVertexUvs[1].push([new Vector2().fromArray(bJ, bf * 2), new Vector2().fromArray(bJ, bh * 2), new Vector2().fromArray(bJ, bi * 2)]);
      }
    }
    var bM = bf.groups;
    if (bM.length > 0) {
      for (bK = 0; bK < bM.length; bK++) {
        for (var bN = bM[bK], bO = bN.start, bP = bO, bQ = bO + bN.count; bP < bQ; bP += 3) {
          if (bh !== undefined) {
            bL(bh[bP], bh[bP + 1], bh[bP + 2], bN.materialIndex);
          } else {
            bL(bP, bP + 1, bP + 2, bN.materialIndex);
          }
        }
      }
    } else if (bh !== undefined) {
      for (bK = 0; bK < bh.length; bK += 3) {
        bL(bh[bK], bh[bK + 1], bh[bK + 2]);
      }
    } else {
      for (bK = 0; bK < bF.length / 3; bK += 3) {
        bL(bK, bK + 1, bK + 2);
      }
    }
    this.computeFaceNormals();
    if (bf.boundingBox !== null) {
      this.boundingBox = bf.boundingBox.clone();
    }
    if (bf.boundingSphere !== null) {
      this.boundingSphere = bf.boundingSphere.clone();
    }
    return this;
  },
  center: (AE = new Vector3(), function () {
    this.computeBoundingBox();
    this.boundingBox.getCenter(AE).negate();
    this.translate(AE.x, AE.y, AE.z);
    return this;
  }),
  normalize: function () {
    this.computeBoundingSphere();
    var bf = this.boundingSphere.center;
    var bg = this.boundingSphere.radius;
    var bh = bg === 0 ? 1 : 1 / bg;
    var bi = new Matrix4();
    bi.set(bh, 0, 0, -bh * bf.x, 0, bh, 0, -bh * bf.y, 0, 0, bh, -bh * bf.z, 0, 0, 0, 1);
    this.applyMatrix(bi);
    return this;
  },
  computeFaceNormals: function () {
    for (var bf = new Vector3(), bg = new Vector3(), bh = 0, bi = this.faces.length; bh < bi; bh++) {
      var bF = this.faces[bh];
      var bG = this.vertices[bF.a];
      var bH = this.vertices[bF.b];
      var bI = this.vertices[bF.c];
      bf.subVectors(bI, bH);
      bg.subVectors(bG, bH);
      bf.cross(bg);
      bf.normalize();
      bF.normal.copy(bf);
    }
  },
  computeVertexNormals: function (bf) {
    var bg;
    var bh;
    var bi;
    var bF;
    var bG;
    var bH;
    if (bf === undefined) {
      bf = true;
    }
    bH = new Array(this.vertices.length);
    bg = 0;
    bh = this.vertices.length;
    for (; bg < bh; bg++) {
      bH[bg] = new Vector3();
    }
    if (bf) {
      var bI;
      var bJ;
      var bK;
      var bL = new Vector3();
      var bM = new Vector3();
      bi = 0;
      bF = this.faces.length;
      for (; bi < bF; bi++) {
        bG = this.faces[bi];
        bI = this.vertices[bG.a];
        bJ = this.vertices[bG.b];
        bK = this.vertices[bG.c];
        bL.subVectors(bK, bJ);
        bM.subVectors(bI, bJ);
        bL.cross(bM);
        bH[bG.a].add(bL);
        bH[bG.b].add(bL);
        bH[bG.c].add(bL);
      }
    } else {
      this.computeFaceNormals();
      bi = 0;
      bF = this.faces.length;
      this.computeFaceNormals();
      bi = 0;
      bF = this.faces.length;
      for (; bi < bF; bi++) {
        bH[(bG = this.faces[bi]).a].add(bG.normal);
        bH[bG.b].add(bG.normal);
        bH[bG.c].add(bG.normal);
      }
    }
    bg = 0;
    bh = this.vertices.length;
    for (; bg < bh; bg++) {
      bH[bg].normalize();
    }
    bi = 0;
    bF = this.faces.length;
    for (; bi < bF; bi++) {
      var bN = (bG = this.faces[bi]).vertexNormals;
      if (bN.length === 3) {
        bN[0].copy(bH[bG.a]);
        bN[1].copy(bH[bG.b]);
        bN[2].copy(bH[bG.c]);
      } else {
        bN[0] = bH[bG.a].clone();
        bN[1] = bH[bG.b].clone();
        bN[2] = bH[bG.c].clone();
      }
    }
    if (this.faces.length > 0) {
      this.normalsNeedUpdate = true;
    }
  },
  computeFlatVertexNormals: function () {
    var bf;
    var bg;
    var bh;
    this.computeFaceNormals();
    bf = 0;
    bg = this.faces.length;
    for (; bf < bg; bf++) {
      var bi = (bh = this.faces[bf]).vertexNormals;
      if (bi.length === 3) {
        bi[0].copy(bh.normal);
        bi[1].copy(bh.normal);
        bi[2].copy(bh.normal);
      } else {
        bi[0] = bh.normal.clone();
        bi[1] = bh.normal.clone();
        bi[2] = bh.normal.clone();
      }
    }
    if (this.faces.length > 0) {
      this.normalsNeedUpdate = true;
    }
  },
  computeMorphNormals: function () {
    var bf;
    var bg;
    var bh;
    var bi;
    var bF;
    bh = 0;
    bi = this.faces.length;
    for (; bh < bi; bh++) {
      if ((bF = this.faces[bh]).__originalFaceNormal) {
        bF.__originalFaceNormal.copy(bF.normal);
      } else {
        bF.__originalFaceNormal = bF.normal.clone();
      }
      bF.__originalVertexNormals ||= [];
      bf = 0;
      bg = bF.vertexNormals.length;
      if ((bF = this.faces[bh]).__originalFaceNormal) {
        bF.__originalFaceNormal.copy(bF.normal);
      } else {
        bF.__originalFaceNormal = bF.normal.clone();
      }
      bF.__originalVertexNormals ||= [];
      bf = 0;
      bg = bF.vertexNormals.length;
      for (; bf < bg; bf++) {
        if (bF.__originalVertexNormals[bf]) {
          bF.__originalVertexNormals[bf].copy(bF.vertexNormals[bf]);
        } else {
          bF.__originalVertexNormals[bf] = bF.vertexNormals[bf].clone();
        }
      }
    }
    var bG = new Geometry();
    bG.faces = this.faces;
    bf = 0;
    bg = this.morphTargets.length;
    for (; bf < bg; bf++) {
      if (!this.morphNormals[bf]) {
        this.morphNormals[bf] = {};
        this.morphNormals[bf].faceNormals = [];
        this.morphNormals[bf].vertexNormals = [];
        var bH = this.morphNormals[bf].faceNormals;
        var bI = this.morphNormals[bf].vertexNormals;
        bh = 0;
        bi = this.faces.length;
        for (; bh < bi; bh++) {
          bJ = new Vector3();
          bK = {
            a: new Vector3(),
            b: new Vector3(),
            c: new Vector3()
          };
          bH.push(bJ);
          bI.push(bK);
        }
      }
      var bJ;
      var bK;
      var bL = this.morphNormals[bf];
      bG.vertices = this.morphTargets[bf].vertices;
      bG.computeFaceNormals();
      bG.computeVertexNormals();
      bh = 0;
      bi = this.faces.length;
      for (; bh < bi; bh++) {
        bF = this.faces[bh];
        bJ = bL.faceNormals[bh];
        bK = bL.vertexNormals[bh];
        bJ.copy(bF.normal);
        bK.a.copy(bF.vertexNormals[0]);
        bK.b.copy(bF.vertexNormals[1]);
        bK.c.copy(bF.vertexNormals[2]);
      }
    }
    bh = 0;
    bi = this.faces.length;
    for (; bh < bi; bh++) {
      (bF = this.faces[bh]).normal = bF.__originalFaceNormal;
      bF.vertexNormals = bF.__originalVertexNormals;
    }
  },
  computeBoundingBox: function () {
    if (this.boundingBox === null) {
      this.boundingBox = new Box3();
    }
    this.boundingBox.setFromPoints(this.vertices);
  },
  computeBoundingSphere: function () {
    if (this.boundingSphere === null) {
      this.boundingSphere = new Sphere();
    }
    this.boundingSphere.setFromPoints(this.vertices);
  },
  merge: function (bf, bg, bh) {
    if (bf && bf.isGeometry) {
      var bi;
      var bF = this.vertices.length;
      var bG = this.vertices;
      var bH = bf.vertices;
      var bI = this.faces;
      var bJ = bf.faces;
      var bK = this.faceVertexUvs[0];
      var bL = bf.faceVertexUvs[0];
      var bM = this.colors;
      var bN = bf.colors;
      if (bh === undefined) {
        bh = 0;
      }
      if (bg !== undefined) {
        bi = new Matrix3().getNormalMatrix(bg);
      }
      for (var bO = 0, bP = bH.length; bO < bP; bO++) {
        var bQ = bH[bO].clone();
        if (bg !== undefined) {
          bQ.applyMatrix4(bg);
        }
        bG.push(bQ);
      }
      bO = 0;
      bP = bN.length;
      for (; bO < bP; bO++) {
        bM.push(bN[bO].clone());
      }
      bO = 0;
      bP = bJ.length;
      for (; bO < bP; bO++) {
        var bR;
        var bS;
        var bT;
        var bU = bJ[bO];
        var bV = bU.vertexNormals;
        var bW = bU.vertexColors;
        (bR = new Face3(bU.a + bF, bU.b + bF, bU.c + bF)).normal.copy(bU.normal);
        if (bi !== undefined) {
          bR.normal.applyMatrix3(bi).normalize();
        }
        for (var bX = 0, bY = bV.length; bX < bY; bX++) {
          bS = bV[bX].clone();
          if (bi !== undefined) {
            bS.applyMatrix3(bi).normalize();
          }
          bR.vertexNormals.push(bS);
        }
        bR.color.copy(bU.color);
        bX = 0;
        bY = bW.length;
        for (; bX < bY; bX++) {
          bT = bW[bX];
          bR.vertexColors.push(bT.clone());
        }
        bR.materialIndex = bU.materialIndex + bh;
        bI.push(bR);
      }
      bO = 0;
      bP = bL.length;
      for (; bO < bP; bO++) {
        var bZ = bL[bO];
        var c0 = [];
        if (bZ !== undefined) {
          bX = 0;
          bY = bZ.length;
          for (; bX < bY; bX++) {
            c0.push(bZ[bX].clone());
          }
          bK.push(c0);
        }
      }
    } else {
      console.error("THREE.Geometry.merge(): geometry not an instance of THREE.Geometry.", bf);
    }
  },
  mergeMesh: function (bf) {
    if (bf && bf.isMesh) {
      if (bf.matrixAutoUpdate) {
        bf.updateMatrix();
      }
      this.merge(bf.geometry, bf.matrix);
    } else {
      console.error("THREE.Geometry.mergeMesh(): mesh not an instance of THREE.Mesh.", bf);
    }
  },
  mergeVertices: function () {
    var bf;
    var bg;
    var bh;
    var bi;
    var bF;
    var bG;
    var bH;
    var bI;
    var bJ = {};
    var bK = [];
    var bL = [];
    var bM = Math.pow(10, 4);
    bh = 0;
    bi = this.vertices.length;
    for (; bh < bi; bh++) {
      bf = this.vertices[bh];
      if (bJ[bg = Math.round(bf.x * bM) + "_" + Math.round(bf.y * bM) + "_" + Math.round(bf.z * bM)] === undefined) {
        bJ[bg] = bh;
        bK.push(this.vertices[bh]);
        bL[bh] = bK.length - 1;
      } else {
        bL[bh] = bL[bJ[bg]];
      }
    }
    var bN = [];
    bh = 0;
    bi = this.faces.length;
    for (; bh < bi; bh++) {
      (bF = this.faces[bh]).a = bL[bF.a];
      bF.b = bL[bF.b];
      bF.c = bL[bF.c];
      bG = [bF.a, bF.b, bF.c];
      for (var bO = 0; bO < 3; bO++) {
        if (bG[bO] === bG[(bO + 1) % 3]) {
          bN.push(bh);
          break;
        }
      }
    }
    for (bh = bN.length - 1; bh >= 0; bh--) {
      var bP = bN[bh];
      this.faces.splice(bP, 1);
      bH = 0;
      bI = this.faceVertexUvs.length;
      for (; bH < bI; bH++) {
        this.faceVertexUvs[bH].splice(bP, 1);
      }
    }
    var bQ = this.vertices.length - bK.length;
    this.vertices = bK;
    return bQ;
  },
  setFromPoints: function (bf) {
    this.vertices = [];
    for (var bg = 0, bh = bf.length; bg < bh; bg++) {
      var bi = bf[bg];
      this.vertices.push(new Vector3(bi.x, bi.y, bi.z || 0));
    }
    return this;
  },
  sortFacesByMaterialIndex: function () {
    for (var bf = this.faces, bg = bf.length, bh = 0; bh < bg; bh++) {
      bf[bh]._id = bh;
    }
    bf.sort(function (bf, bg) {
      return bf.materialIndex - bg.materialIndex;
    });
    var bi;
    var bF;
    var bG = this.faceVertexUvs[0];
    var bH = this.faceVertexUvs[1];
    if (bG && bG.length === bg) {
      bi = [];
    }
    if (bH && bH.length === bg) {
      bF = [];
    }
    for (bh = 0; bh < bg; bh++) {
      var bI = bf[bh]._id;
      if (bi) {
        bi.push(bG[bI]);
      }
      if (bF) {
        bF.push(bH[bI]);
      }
    }
    if (bi) {
      this.faceVertexUvs[0] = bi;
    }
    if (bF) {
      this.faceVertexUvs[1] = bF;
    }
  },
  toJSON: function () {
    var bf = {
      metadata: {
        version: 4.5,
        type: "Geometry",
        generator: "Geometry.toJSON"
      }
    };
    bf.uuid = this.uuid;
    bf.type = this.type;
    if (this.name !== "") {
      bf.name = this.name;
    }
    if (this.parameters !== undefined) {
      var bg = this.parameters;
      for (var bh in bg) {
        if (bg[bh] !== undefined) {
          bf[bh] = bg[bh];
        }
      }
      return bf;
    }
    for (var bi = [], bF = 0; bF < this.vertices.length; bF++) {
      var bG = this.vertices[bF];
      bi.push(bG.x, bG.y, bG.z);
    }
    var bH = [];
    var bI = [];
    var bJ = {};
    var bK = [];
    var bL = {};
    var bM = [];
    var bN = {};
    for (bF = 0; bF < this.faces.length; bF++) {
      var bO = this.faces[bF];
      var bP = this.faceVertexUvs[0][bF] !== undefined;
      var bQ = bO.normal.length() > 0;
      var bR = bO.vertexNormals.length > 0;
      var bS = bO.color.r !== 1 || bO.color.g !== 1 || bO.color.b !== 1;
      var bT = bO.vertexColors.length > 0;
      var bU = 0;
      bU = bY(bU, 0, 0);
      bU = bY(bU, 1, true);
      bU = bY(bU, 2, false);
      bU = bY(bU, 3, bP);
      bU = bY(bU, 4, bQ);
      bU = bY(bU, 5, bR);
      bU = bY(bU, 6, bS);
      bU = bY(bU, 7, bT);
      bH.push(bU);
      bH.push(bO.a, bO.b, bO.c);
      bH.push(bO.materialIndex);
      if (bP) {
        var bV = this.faceVertexUvs[0][bF];
        bH.push(c1(bV[0]), c1(bV[1]), c1(bV[2]));
      }
      if (bQ) {
        bH.push(bZ(bO.normal));
      }
      if (bR) {
        var bW = bO.vertexNormals;
        bH.push(bZ(bW[0]), bZ(bW[1]), bZ(bW[2]));
      }
      if (bS) {
        bH.push(c0(bO.color));
      }
      if (bT) {
        var bX = bO.vertexColors;
        bH.push(c0(bX[0]), c0(bX[1]), c0(bX[2]));
      }
    }
    function bY(bf, bg, bh) {
      if (bh) {
        return bf | 1 << bg;
      } else {
        return bf & ~(1 << bg);
      }
    }
    function bZ(bf) {
      var bg = bf.x.toString() + bf.y.toString() + bf.z.toString();
      if (bJ[bg] !== undefined) {
        return bJ[bg];
      } else {
        bJ[bg] = bI.length / 3;
        bI.push(bf.x, bf.y, bf.z);
        return bJ[bg];
      }
    }
    function c0(bf) {
      var bg = bf.r.toString() + bf.g.toString() + bf.b.toString();
      if (bL[bg] !== undefined) {
        return bL[bg];
      } else {
        bL[bg] = bK.length;
        bK.push(bf.getHex());
        return bL[bg];
      }
    }
    function c1(bf) {
      var bg = bf.x.toString() + bf.y.toString();
      if (bN[bg] !== undefined) {
        return bN[bg];
      } else {
        bN[bg] = bM.length / 2;
        bM.push(bf.x, bf.y);
        return bN[bg];
      }
    }
    bf.data = {};
    bf.data.vertices = bi;
    bf.data.normals = bI;
    if (bK.length > 0) {
      bf.data.colors = bK;
    }
    if (bM.length > 0) {
      bf.data.uvs = [bM];
    }
    bf.data.faces = bH;
    return bf;
  },
  clone: function () {
    return new Geometry().copy(this);
  },
  copy: function (bf) {
    var bg;
    var bh;
    var bi;
    var bF;
    var bG;
    var bH;
    this.vertices = [];
    this.colors = [];
    this.faces = [];
    this.faceVertexUvs = [[]];
    this.morphTargets = [];
    this.morphNormals = [];
    this.skinWeights = [];
    this.skinIndices = [];
    this.lineDistances = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.name = bf.name;
    var bI = bf.vertices;
    bg = 0;
    bh = bI.length;
    for (; bg < bh; bg++) {
      this.vertices.push(bI[bg].clone());
    }
    var bJ = bf.colors;
    bg = 0;
    bh = bJ.length;
    for (; bg < bh; bg++) {
      this.colors.push(bJ[bg].clone());
    }
    var bK = bf.faces;
    bg = 0;
    bh = bK.length;
    for (; bg < bh; bg++) {
      this.faces.push(bK[bg].clone());
    }
    bg = 0;
    bh = bf.faceVertexUvs.length;
    for (; bg < bh; bg++) {
      var bL = bf.faceVertexUvs[bg];
      if (this.faceVertexUvs[bg] === undefined) {
        this.faceVertexUvs[bg] = [];
      }
      bi = 0;
      bF = bL.length;
      for (; bi < bF; bi++) {
        var bM = bL[bi];
        var bN = [];
        bG = 0;
        bH = bM.length;
        for (; bG < bH; bG++) {
          var bO = bM[bG];
          bN.push(bO.clone());
        }
        this.faceVertexUvs[bg].push(bN);
      }
    }
    var bP = bf.morphTargets;
    bg = 0;
    bh = bP.length;
    for (; bg < bh; bg++) {
      var bQ = {
        name: bP[bg].name
      };
      if (bP[bg].vertices !== undefined) {
        bQ.vertices = [];
        bi = 0;
        bF = bP[bg].vertices.length;
        bQ.vertices = [];
        bi = 0;
        bF = bP[bg].vertices.length;
        for (; bi < bF; bi++) {
          bQ.vertices.push(bP[bg].vertices[bi].clone());
        }
      }
      if (bP[bg].normals !== undefined) {
        bQ.normals = [];
        bi = 0;
        bF = bP[bg].normals.length;
        bQ.normals = [];
        bi = 0;
        bF = bP[bg].normals.length;
        for (; bi < bF; bi++) {
          bQ.normals.push(bP[bg].normals[bi].clone());
        }
      }
      this.morphTargets.push(bQ);
    }
    var bR = bf.morphNormals;
    bg = 0;
    bh = bR.length;
    for (; bg < bh; bg++) {
      var bS = {};
      if (bR[bg].vertexNormals !== undefined) {
        bS.vertexNormals = [];
        bi = 0;
        bF = bR[bg].vertexNormals.length;
        bS.vertexNormals = [];
        bi = 0;
        bF = bR[bg].vertexNormals.length;
        for (; bi < bF; bi++) {
          var bT = bR[bg].vertexNormals[bi];
          var bU = {};
          bU.a = bT.a.clone();
          bU.b = bT.b.clone();
          bU.c = bT.c.clone();
          bS.vertexNormals.push(bU);
        }
      }
      if (bR[bg].faceNormals !== undefined) {
        bS.faceNormals = [];
        bi = 0;
        bF = bR[bg].faceNormals.length;
        bS.faceNormals = [];
        bi = 0;
        bF = bR[bg].faceNormals.length;
        for (; bi < bF; bi++) {
          bS.faceNormals.push(bR[bg].faceNormals[bi].clone());
        }
      }
      this.morphNormals.push(bS);
    }
    var bV = bf.skinWeights;
    bg = 0;
    bh = bV.length;
    for (; bg < bh; bg++) {
      this.skinWeights.push(bV[bg].clone());
    }
    var bW = bf.skinIndices;
    bg = 0;
    bh = bW.length;
    for (; bg < bh; bg++) {
      this.skinIndices.push(bW[bg].clone());
    }
    var bX = bf.lineDistances;
    bg = 0;
    bh = bX.length;
    for (; bg < bh; bg++) {
      this.lineDistances.push(bX[bg]);
    }
    var bY = bf.boundingBox;
    if (bY !== null) {
      this.boundingBox = bY.clone();
    }
    var bZ = bf.boundingSphere;
    if (bZ !== null) {
      this.boundingSphere = bZ.clone();
    }
    this.elementsNeedUpdate = bf.elementsNeedUpdate;
    this.verticesNeedUpdate = bf.verticesNeedUpdate;
    this.uvsNeedUpdate = bf.uvsNeedUpdate;
    this.normalsNeedUpdate = bf.normalsNeedUpdate;
    this.colorsNeedUpdate = bf.colorsNeedUpdate;
    this.lineDistancesNeedUpdate = bf.lineDistancesNeedUpdate;
    this.groupsNeedUpdate = bf.groupsNeedUpdate;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
Object.defineProperty(BufferAttribute.prototype, "needsUpdate", {
  set: function (bf) {
    if (bf === true) {
      this.version++;
    }
  }
});
Object.assign(BufferAttribute.prototype, {
  isBufferAttribute: true,
  onUploadCallback: function () {},
  setArray: function (bf) {
    if (Array.isArray(bf)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.count = bf !== undefined ? bf.length / this.itemSize : 0;
    this.array = bf;
    return this;
  },
  setDynamic: function (bf) {
    this.dynamic = bf;
    return this;
  },
  copy: function (bf) {
    this.name = bf.name;
    this.array = new bf.array.constructor(bf.array);
    this.itemSize = bf.itemSize;
    this.count = bf.count;
    this.normalized = bf.normalized;
    this.dynamic = bf.dynamic;
    return this;
  },
  copyAt: function (bf, bg, bh) {
    bf *= this.itemSize;
    bh *= bg.itemSize;
    for (var bi = 0, bF = this.itemSize; bi < bF; bi++) {
      this.array[bf + bi] = bg.array[bh + bi];
    }
    return this;
  },
  copyArray: function (bf) {
    this.array.set(bf);
    return this;
  },
  copyColorsArray: function (bf) {
    for (var bg = this.array, bh = 0, bi = 0, bF = bf.length; bi < bF; bi++) {
      var bG = bf[bi];
      if (bG === undefined) {
        console.warn("THREE.BufferAttribute.copyColorsArray(): color is undefined", bi);
        bG = new Color();
      }
      bg[bh++] = bG.r;
      bg[bh++] = bG.g;
      bg[bh++] = bG.b;
    }
    return this;
  },
  copyVector2sArray: function (bf) {
    for (var bg = this.array, bh = 0, bi = 0, bF = bf.length; bi < bF; bi++) {
      var bG = bf[bi];
      if (bG === undefined) {
        console.warn("THREE.BufferAttribute.copyVector2sArray(): vector is undefined", bi);
        bG = new Vector2();
      }
      bg[bh++] = bG.x;
      bg[bh++] = bG.y;
    }
    return this;
  },
  copyVector3sArray: function (bf) {
    for (var bg = this.array, bh = 0, bi = 0, bF = bf.length; bi < bF; bi++) {
      var bG = bf[bi];
      if (bG === undefined) {
        console.warn("THREE.BufferAttribute.copyVector3sArray(): vector is undefined", bi);
        bG = new Vector3();
      }
      bg[bh++] = bG.x;
      bg[bh++] = bG.y;
      bg[bh++] = bG.z;
    }
    return this;
  },
  copyVector4sArray: function (bf) {
    for (var bg = this.array, bh = 0, bi = 0, bF = bf.length; bi < bF; bi++) {
      var bG = bf[bi];
      if (bG === undefined) {
        console.warn("THREE.BufferAttribute.copyVector4sArray(): vector is undefined", bi);
        bG = new Vector4();
      }
      bg[bh++] = bG.x;
      bg[bh++] = bG.y;
      bg[bh++] = bG.z;
      bg[bh++] = bG.w;
    }
    return this;
  },
  set: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.array.set(bf, bg);
    return this;
  },
  getX: function (bf) {
    return this.array[bf * this.itemSize];
  },
  setX: function (bf, bg) {
    this.array[bf * this.itemSize] = bg;
    return this;
  },
  getY: function (bf) {
    return this.array[bf * this.itemSize + 1];
  },
  setY: function (bf, bg) {
    this.array[bf * this.itemSize + 1] = bg;
    return this;
  },
  getZ: function (bf) {
    return this.array[bf * this.itemSize + 2];
  },
  setZ: function (bf, bg) {
    this.array[bf * this.itemSize + 2] = bg;
    return this;
  },
  getW: function (bf) {
    return this.array[bf * this.itemSize + 3];
  },
  setW: function (bf, bg) {
    this.array[bf * this.itemSize + 3] = bg;
    return this;
  },
  setXY: function (bf, bg, bh) {
    bf *= this.itemSize;
    this.array[bf + 0] = bg;
    this.array[bf + 1] = bh;
    return this;
  },
  setXYZ: function (bf, bg, bh, bi) {
    bf *= this.itemSize;
    this.array[bf + 0] = bg;
    this.array[bf + 1] = bh;
    this.array[bf + 2] = bi;
    return this;
  },
  setXYZW: function (bf, bg, bh, bi, bF) {
    bf *= this.itemSize;
    this.array[bf + 0] = bg;
    this.array[bf + 1] = bh;
    this.array[bf + 2] = bi;
    this.array[bf + 3] = bF;
    return this;
  },
  onUpload: function (bf) {
    this.onUploadCallback = bf;
    return this;
  },
  clone: function () {
    return new this.constructor(this.array, this.itemSize).copy(this);
  },
  toJSON: function () {
    return {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.prototype.slice.call(this.array),
      normalized: this.normalized
    };
  }
});
Int8BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Int8BufferAttribute.prototype.constructor = Int8BufferAttribute;
Uint8BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Uint8BufferAttribute.prototype.constructor = Uint8BufferAttribute;
Uint8ClampedBufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Uint8ClampedBufferAttribute.prototype.constructor = Uint8ClampedBufferAttribute;
Int16BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Int16BufferAttribute.prototype.constructor = Int16BufferAttribute;
Uint16BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Uint16BufferAttribute.prototype.constructor = Uint16BufferAttribute;
Int32BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Int32BufferAttribute.prototype.constructor = Int32BufferAttribute;
Uint32BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Uint32BufferAttribute.prototype.constructor = Uint32BufferAttribute;
Float32BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Float32BufferAttribute.prototype.constructor = Float32BufferAttribute;
Float64BufferAttribute.prototype = Object.create(BufferAttribute.prototype);
Float64BufferAttribute.prototype.constructor = Float64BufferAttribute;
Object.assign(Bm.prototype, {
  computeGroups: function (bf) {
    for (var bg, bh = [], bi = undefined, bF = bf.faces, bG = 0; bG < bF.length; bG++) {
      var bH = bF[bG];
      if (bH.materialIndex !== bi) {
        bi = bH.materialIndex;
        if (bg !== undefined) {
          bg.count = bG * 3 - bg.start;
          bh.push(bg);
        }
        bg = {
          start: bG * 3,
          materialIndex: bi
        };
      }
    }
    if (bg !== undefined) {
      bg.count = bG * 3 - bg.start;
      bh.push(bg);
    }
    this.groups = bh;
  },
  fromGeometry: function (bf) {
    var bg;
    var bh = bf.faces;
    var bi = bf.vertices;
    var bF = bf.faceVertexUvs;
    var bG = bF[0] && bF[0].length > 0;
    var bH = bF[1] && bF[1].length > 0;
    var bI = bf.morphTargets;
    var bJ = bI.length;
    if (bJ > 0) {
      bg = [];
      for (var bK = 0; bK < bJ; bK++) {
        bg[bK] = {
          name: bI[bK].name,
          data: []
        };
      }
      this.morphTargets.position = bg;
    }
    var bL;
    var bM = bf.morphNormals;
    var bN = bM.length;
    if (bN > 0) {
      bL = [];
      for (bK = 0; bK < bN; bK++) {
        bL[bK] = {
          name: bM[bK].name,
          data: []
        };
      }
      this.morphTargets.normal = bL;
    }
    var bO = bf.skinIndices;
    var bP = bf.skinWeights;
    var bQ = bO.length === bi.length;
    var bR = bP.length === bi.length;
    if (bi.length > 0 && bh.length === 0) {
      console.error("THREE.DirectGeometry: Faceless geometries are not supported.");
    }
    for (bK = 0; bK < bh.length; bK++) {
      var bS = bh[bK];
      this.vertices.push(bi[bS.a], bi[bS.b], bi[bS.c]);
      var bT = bS.vertexNormals;
      if (bT.length === 3) {
        this.normals.push(bT[0], bT[1], bT[2]);
      } else {
        var bU = bS.normal;
        this.normals.push(bU, bU, bU);
      }
      var bV;
      var bW = bS.vertexColors;
      if (bW.length === 3) {
        this.colors.push(bW[0], bW[1], bW[2]);
      } else {
        var bX = bS.color;
        this.colors.push(bX, bX, bX);
      }
      if (bG === true) {
        if ((bV = bF[0][bK]) !== undefined) {
          this.uvs.push(bV[0], bV[1], bV[2]);
        } else {
          console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv ", bK);
          this.uvs.push(new Vector2(), new Vector2(), new Vector2());
        }
      }
      if (bH === true) {
        if ((bV = bF[1][bK]) !== undefined) {
          this.uvs2.push(bV[0], bV[1], bV[2]);
        } else {
          console.warn("THREE.DirectGeometry.fromGeometry(): Undefined vertexUv2 ", bK);
          this.uvs2.push(new Vector2(), new Vector2(), new Vector2());
        }
      }
      for (var bY = 0; bY < bJ; bY++) {
        var bZ = bI[bY].vertices;
        bg[bY].data.push(bZ[bS.a], bZ[bS.b], bZ[bS.c]);
      }
      for (bY = 0; bY < bN; bY++) {
        var c0 = bM[bY].vertexNormals[bK];
        bL[bY].data.push(c0.a, c0.b, c0.c);
      }
      if (bQ) {
        this.skinIndices.push(bO[bS.a], bO[bS.b], bO[bS.c]);
      }
      if (bR) {
        this.skinWeights.push(bP[bS.a], bP[bS.b], bP[bS.c]);
      }
    }
    this.computeGroups(bf);
    this.verticesNeedUpdate = bf.verticesNeedUpdate;
    this.normalsNeedUpdate = bf.normalsNeedUpdate;
    this.colorsNeedUpdate = bf.colorsNeedUpdate;
    this.uvsNeedUpdate = bf.uvsNeedUpdate;
    this.groupsNeedUpdate = bf.groupsNeedUpdate;
    return this;
  }
});
var Ge = 1;
export function BufferGeometry() {
  Object.defineProperty(this, "id", {
    value: Ge += 2
  });
  this.uuid = Math.generateUUID();
  this.name = "";
  this.type = "BufferGeometry";
  this.index = null;
  this.attributes = {};
  this.morphAttributes = {};
  this.groups = [];
  this.boundingBox = null;
  this.boundingSphere = null;
  this.drawRange = {
    start: 0,
    count: Infinity
  };
  this.userData = {};
}
export function BoxGeometry(bf, bg, bh, bi, bF, bG) {
  Geometry.call(this);
  this.type = "BoxGeometry";
  this.parameters = {
    width: bf,
    height: bg,
    depth: bh,
    widthSegments: bi,
    heightSegments: bF,
    depthSegments: bG
  };
  this.fromBufferGeometry(new BoxBufferGeometry(bf, bg, bh, bi, bF, bG));
  this.mergeVertices();
}
export function BoxBufferGeometry(bf, bg, bh, bi, bF, bG) {
  BufferGeometry.call(this);
  this.type = "BoxBufferGeometry";
  this.parameters = {
    width: bf,
    height: bg,
    depth: bh,
    widthSegments: bi,
    heightSegments: bF,
    depthSegments: bG
  };
  var bH = this;
  bf = bf || 1;
  bg = bg || 1;
  bh = bh || 1;
  bi = Math.floor(bi) || 1;
  bF = Math.floor(bF) || 1;
  bG = Math.floor(bG) || 1;
  var bI = [];
  var bJ = [];
  var bK = [];
  var bL = [];
  var bM = 0;
  var bN = 0;
  function bO(bf, bg, bh, bi, bF, bG, bO, bP, bQ, bR, bS) {
    var bT;
    var bU;
    var bV = bG / bQ;
    var bW = bO / bR;
    var bX = bG / 2;
    var bY = bO / 2;
    var bZ = bP / 2;
    var c0 = bQ + 1;
    var c1 = bR + 1;
    var c2 = 0;
    var c3 = 0;
    var c4 = new Vector3();
    for (bU = 0; bU < c1; bU++) {
      var c5 = bU * bW - bY;
      for (bT = 0; bT < c0; bT++) {
        var c6 = bT * bV - bX;
        c4[bf] = c6 * bi;
        c4[bg] = c5 * bF;
        c4[bh] = bZ;
        bJ.push(c4.x, c4.y, c4.z);
        c4[bf] = 0;
        c4[bg] = 0;
        c4[bh] = bP > 0 ? 1 : -1;
        bK.push(c4.x, c4.y, c4.z);
        bL.push(bT / bQ);
        bL.push(1 - bU / bR);
        c2 += 1;
      }
    }
    for (bU = 0; bU < bR; bU++) {
      for (bT = 0; bT < bQ; bT++) {
        var c7 = bM + bT + c0 * bU;
        var c8 = bM + bT + c0 * (bU + 1);
        var c9 = bM + (bT + 1) + c0 * (bU + 1);
        var ca = bM + (bT + 1) + c0 * bU;
        bI.push(c7, c8, ca);
        bI.push(c8, c9, ca);
        c3 += 6;
      }
    }
    bH.addGroup(bN, c3, bS);
    bN += c3;
    bM += c2;
  }
  bO("z", "y", "x", -1, -1, bh, bg, bf, bG, bF, 0);
  bO("z", "y", "x", 1, -1, bh, bg, -bf, bG, bF, 1);
  bO("x", "z", "y", 1, 1, bf, bh, bg, bi, bG, 2);
  bO("x", "z", "y", 1, -1, bf, bh, -bg, bi, bG, 3);
  bO("x", "y", "z", 1, -1, bf, bg, bh, bi, bF, 4);
  bO("x", "y", "z", -1, -1, bf, bg, -bh, bi, bF, 5);
  this.setIndex(bI);
  this.addAttribute("position", new Float32BufferAttribute(bJ, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bK, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bL, 2));
}
export function PlaneGeometry(bf, bg, bh, bi) {
  Geometry.call(this);
  this.type = "PlaneGeometry";
  this.parameters = {
    width: bf,
    height: bg,
    widthSegments: bh,
    heightSegments: bi
  };
  this.fromBufferGeometry(new PlaneBufferGeometry(bf, bg, bh, bi));
  this.mergeVertices();
}
export function PlaneBufferGeometry(bf, bg, bh, bi) {
  BufferGeometry.call(this);
  this.type = "PlaneBufferGeometry";
  this.parameters = {
    width: bf,
    height: bg,
    widthSegments: bh,
    heightSegments: bi
  };
  var bF;
  var bG;
  var bH = (bf = bf || 1) / 2;
  var bI = (bg = bg || 1) / 2;
  var bJ = Math.floor(bh) || 1;
  var bK = Math.floor(bi) || 1;
  var bL = bJ + 1;
  var bM = bK + 1;
  var bN = bf / bJ;
  var bO = bg / bK;
  var bP = [];
  var bQ = [];
  var bR = [];
  var bS = [];
  for (bG = 0; bG < bM; bG++) {
    var bT = bG * bO - bI;
    for (bF = 0; bF < bL; bF++) {
      var bU = bF * bN - bH;
      bQ.push(bU, -bT, 0);
      bR.push(0, 0, 1);
      bS.push(bF / bJ);
      bS.push(1 - bG / bK);
    }
  }
  for (bG = 0; bG < bK; bG++) {
    for (bF = 0; bF < bJ; bF++) {
      var bV = bF + bL * bG;
      var bW = bF + bL * (bG + 1);
      var bX = bF + 1 + bL * (bG + 1);
      var bY = bF + 1 + bL * bG;
      bP.push(bV, bW, bY);
      bP.push(bW, bX, bY);
    }
  }
  this.setIndex(bP);
  this.addAttribute("position", new Float32BufferAttribute(bQ, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bR, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bS, 2));
}
BufferGeometry.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: BufferGeometry,
  isBufferGeometry: true,
  getIndex: function () {
    return this.index;
  },
  setIndex: function (bf) {
    if (Array.isArray(bf)) {
      this.index = new (Bn(bf) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute)(bf, 1);
    } else {
      this.index = bf;
    }
  },
  addAttribute: function (bf, bg) {
    if (bg && bg.isBufferAttribute || bg && bg.isInterleavedBufferAttribute) {
      if (bf === "index") {
        console.warn("THREE.BufferGeometry.addAttribute: Use .setIndex() for index attribute.");
        this.setIndex(bg);
        return this;
      } else {
        this.attributes[bf] = bg;
        return this;
      }
    } else {
      console.warn("THREE.BufferGeometry: .addAttribute() now expects ( name, attribute ).");
      return this.addAttribute(bf, new BufferAttribute(arguments[1], arguments[2]));
    }
  },
  getAttribute: function (bf) {
    return this.attributes[bf];
  },
  removeAttribute: function (bf) {
    delete this.attributes[bf];
    return this;
  },
  addGroup: function (bf, bg, bh) {
    this.groups.push({
      start: bf,
      count: bg,
      materialIndex: bh !== undefined ? bh : 0
    });
  },
  clearGroups: function () {
    this.groups = [];
  },
  setDrawRange: function (bf, bg) {
    this.drawRange.start = bf;
    this.drawRange.count = bg;
  },
  applyMatrix: function (bf) {
    var bg = this.attributes.position;
    if (bg !== undefined) {
      bf.applyToBufferAttribute(bg);
      bg.needsUpdate = true;
    }
    var bh = this.attributes.normal;
    if (bh !== undefined) {
      new Matrix3().getNormalMatrix(bf).applyToBufferAttribute(bh);
      bh.needsUpdate = true;
    }
    var bi = this.attributes.tangent;
    if (bi !== undefined) {
      new Matrix3().getNormalMatrix(bf).applyToBufferAttribute(bi);
      bi.needsUpdate = true;
    }
    if (this.boundingBox !== null) {
      this.computeBoundingBox();
    }
    if (this.boundingSphere !== null) {
      this.computeBoundingSphere();
    }
    return this;
  },
  rotateX: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationX(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  rotateY: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationY(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  rotateZ: function () {
    var bf = new Matrix4();
    return function (bg) {
      bf.makeRotationZ(bg);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  translate: function () {
    var bf = new Matrix4();
    return function (bg, bh, bi) {
      bf.makeTranslation(bg, bh, bi);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  scale: function () {
    var bf = new Matrix4();
    return function (bg, bh, bi) {
      bf.makeScale(bg, bh, bi);
      this.applyMatrix(bf);
      return this;
    };
  }(),
  lookAt: function () {
    var bf = new Object3D();
    return function (bg) {
      bf.lookAt(bg);
      bf.updateMatrix();
      this.applyMatrix(bf.matrix);
    };
  }(),
  center: function () {
    var bf = new Vector3();
    return function () {
      this.computeBoundingBox();
      this.boundingBox.getCenter(bf).negate();
      this.translate(bf.x, bf.y, bf.z);
      return this;
    };
  }(),
  setFromObject: function (bf) {
    var bg = bf.geometry;
    if (bf.isPoints || bf.isLine) {
      var bh = new Float32BufferAttribute(bg.vertices.length * 3, 3);
      var bi = new Float32BufferAttribute(bg.colors.length * 3, 3);
      this.addAttribute("position", bh.copyVector3sArray(bg.vertices));
      this.addAttribute("color", bi.copyColorsArray(bg.colors));
      if (bg.lineDistances && bg.lineDistances.length === bg.vertices.length) {
        var bF = new Float32BufferAttribute(bg.lineDistances.length, 1);
        this.addAttribute("lineDistance", bF.copyArray(bg.lineDistances));
      }
      if (bg.boundingSphere !== null) {
        this.boundingSphere = bg.boundingSphere.clone();
      }
      if (bg.boundingBox !== null) {
        this.boundingBox = bg.boundingBox.clone();
      }
    } else if (bf.isMesh && bg && bg.isGeometry) {
      this.fromGeometry(bg);
    }
    return this;
  },
  setFromPoints: function (bf) {
    for (var bg = [], bh = 0, bi = bf.length; bh < bi; bh++) {
      var bF = bf[bh];
      bg.push(bF.x, bF.y, bF.z || 0);
    }
    this.addAttribute("position", new Float32BufferAttribute(bg, 3));
    return this;
  },
  updateFromObject: function (bf) {
    var bg;
    var bh = bf.geometry;
    if (bf.isMesh) {
      var bi = bh.__directGeometry;
      if (bh.elementsNeedUpdate === true) {
        bi = undefined;
        bh.elementsNeedUpdate = false;
      }
      if (bi === undefined) {
        return this.fromGeometry(bh);
      }
      bi.verticesNeedUpdate = bh.verticesNeedUpdate;
      bi.normalsNeedUpdate = bh.normalsNeedUpdate;
      bi.colorsNeedUpdate = bh.colorsNeedUpdate;
      bi.uvsNeedUpdate = bh.uvsNeedUpdate;
      bi.groupsNeedUpdate = bh.groupsNeedUpdate;
      bh.verticesNeedUpdate = false;
      bh.normalsNeedUpdate = false;
      bh.colorsNeedUpdate = false;
      bh.uvsNeedUpdate = false;
      bh.groupsNeedUpdate = false;
      bh = bi;
    }
    if (bh.verticesNeedUpdate === true) {
      if ((bg = this.attributes.position) !== undefined) {
        bg.copyVector3sArray(bh.vertices);
        bg.needsUpdate = true;
      }
      bh.verticesNeedUpdate = false;
    }
    if (bh.normalsNeedUpdate === true) {
      if ((bg = this.attributes.normal) !== undefined) {
        bg.copyVector3sArray(bh.normals);
        bg.needsUpdate = true;
      }
      bh.normalsNeedUpdate = false;
    }
    if (bh.colorsNeedUpdate === true) {
      if ((bg = this.attributes.color) !== undefined) {
        bg.copyColorsArray(bh.colors);
        bg.needsUpdate = true;
      }
      bh.colorsNeedUpdate = false;
    }
    if (bh.uvsNeedUpdate) {
      if ((bg = this.attributes.uv) !== undefined) {
        bg.copyVector2sArray(bh.uvs);
        bg.needsUpdate = true;
      }
      bh.uvsNeedUpdate = false;
    }
    if (bh.lineDistancesNeedUpdate) {
      if ((bg = this.attributes.lineDistance) !== undefined) {
        bg.copyArray(bh.lineDistances);
        bg.needsUpdate = true;
      }
      bh.lineDistancesNeedUpdate = false;
    }
    if (bh.groupsNeedUpdate) {
      bh.computeGroups(bf.geometry);
      this.groups = bh.groups;
      bh.groupsNeedUpdate = false;
    }
    return this;
  },
  fromGeometry: function (bf) {
    bf.__directGeometry = new Bm().fromGeometry(bf);
    return this.fromDirectGeometry(bf.__directGeometry);
  },
  fromDirectGeometry: function (bf) {
    var bg = new Float32Array(bf.vertices.length * 3);
    this.addAttribute("position", new BufferAttribute(bg, 3).copyVector3sArray(bf.vertices));
    if (bf.normals.length > 0) {
      var bh = new Float32Array(bf.normals.length * 3);
      this.addAttribute("normal", new BufferAttribute(bh, 3).copyVector3sArray(bf.normals));
    }
    if (bf.colors.length > 0) {
      var bi = new Float32Array(bf.colors.length * 3);
      this.addAttribute("color", new BufferAttribute(bi, 3).copyColorsArray(bf.colors));
    }
    if (bf.uvs.length > 0) {
      var bF = new Float32Array(bf.uvs.length * 2);
      this.addAttribute("uv", new BufferAttribute(bF, 2).copyVector2sArray(bf.uvs));
    }
    if (bf.uvs2.length > 0) {
      var bG = new Float32Array(bf.uvs2.length * 2);
      this.addAttribute("uv2", new BufferAttribute(bG, 2).copyVector2sArray(bf.uvs2));
    }
    this.groups = bf.groups;
    for (var bH in bf.morphTargets) {
      for (var bI = [], bJ = bf.morphTargets[bH], bK = 0, bL = bJ.length; bK < bL; bK++) {
        var bM = bJ[bK];
        var bN = new Float32BufferAttribute(bM.data.length * 3, 3);
        bN.name = bM.name;
        bI.push(bN.copyVector3sArray(bM.data));
      }
      this.morphAttributes[bH] = bI;
    }
    if (bf.skinIndices.length > 0) {
      var bO = new Float32BufferAttribute(bf.skinIndices.length * 4, 4);
      this.addAttribute("skinIndex", bO.copyVector4sArray(bf.skinIndices));
    }
    if (bf.skinWeights.length > 0) {
      var bP = new Float32BufferAttribute(bf.skinWeights.length * 4, 4);
      this.addAttribute("skinWeight", bP.copyVector4sArray(bf.skinWeights));
    }
    if (bf.boundingSphere !== null) {
      this.boundingSphere = bf.boundingSphere.clone();
    }
    if (bf.boundingBox !== null) {
      this.boundingBox = bf.boundingBox.clone();
    }
    return this;
  },
  computeBoundingBox: function () {
    var bf = new Box3();
    return function () {
      if (this.boundingBox === null) {
        this.boundingBox = new Box3();
      }
      var bg = this.attributes.position;
      var bh = this.morphAttributes.position;
      if (bg !== undefined) {
        this.boundingBox.setFromBufferAttribute(bg);
        if (bh) {
          for (var bi = 0, bF = bh.length; bi < bF; bi++) {
            var bG = bh[bi];
            bf.setFromBufferAttribute(bG);
            this.boundingBox.expandByPoint(bf.min);
            this.boundingBox.expandByPoint(bf.max);
          }
        }
      } else {
        this.boundingBox.makeEmpty();
      }
      if (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) {
        console.error("THREE.BufferGeometry.computeBoundingBox: Computed min/max have NaN values. The \"position\" attribute is likely to have NaN values.", this);
      }
    };
  }(),
  computeBoundingSphere: function () {
    var bf = new Box3();
    var bg = new Box3();
    var bh = new Vector3();
    return function () {
      if (this.boundingSphere === null) {
        this.boundingSphere = new Sphere();
      }
      var bi = this.attributes.position;
      var bF = this.morphAttributes.position;
      if (bi) {
        var bG = this.boundingSphere.center;
        bf.setFromBufferAttribute(bi);
        if (bF) {
          for (var bH = 0, bI = bF.length; bH < bI; bH++) {
            var bJ = bF[bH];
            bg.setFromBufferAttribute(bJ);
            bf.expandByPoint(bg.min);
            bf.expandByPoint(bg.max);
          }
        }
        bf.getCenter(bG);
        var bK = 0;
        bH = 0;
        bI = bi.count;
        for (; bH < bI; bH++) {
          bh.fromBufferAttribute(bi, bH);
          bK = Math.max(bK, bG.distanceToSquared(bh));
        }
        if (bF) {
          bH = 0;
          bI = bF.length;
          bH = 0;
          bI = bF.length;
          for (; bH < bI; bH++) {
            for (var bL = 0, bM = (bJ = bF[bH]).count; bL < bM; bL++) {
              bh.fromBufferAttribute(bJ, bL);
              bK = Math.max(bK, bG.distanceToSquared(bh));
            }
          }
        }
        this.boundingSphere.radius = Math.sqrt(bK);
        if (isNaN(this.boundingSphere.radius)) {
          console.error("THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The \"position\" attribute is likely to have NaN values.", this);
        }
      }
    };
  }(),
  computeFaceNormals: function () {},
  computeVertexNormals: function () {
    var bf = this.index;
    var bg = this.attributes;
    if (bg.position) {
      var bh = bg.position.array;
      if (bg.normal === undefined) {
        this.addAttribute("normal", new BufferAttribute(new Float32Array(bh.length), 3));
      } else {
        for (var bi = bg.normal.array, bF = 0, bG = bi.length; bF < bG; bF++) {
          bi[bF] = 0;
        }
      }
      var bH;
      var bI;
      var bJ;
      var bK = bg.normal.array;
      var bL = new Vector3();
      var bM = new Vector3();
      var bN = new Vector3();
      var bO = new Vector3();
      var bP = new Vector3();
      if (bf) {
        var bQ = bf.array;
        bF = 0;
        bG = bf.count;
        for (; bF < bG; bF += 3) {
          bH = bQ[bF + 0] * 3;
          bI = bQ[bF + 1] * 3;
          bJ = bQ[bF + 2] * 3;
          bL.fromArray(bh, bH);
          bM.fromArray(bh, bI);
          bN.fromArray(bh, bJ);
          bO.subVectors(bN, bM);
          bP.subVectors(bL, bM);
          bO.cross(bP);
          bK[bH] += bO.x;
          bK[bH + 1] += bO.y;
          bK[bH + 2] += bO.z;
          bK[bI] += bO.x;
          bK[bI + 1] += bO.y;
          bK[bI + 2] += bO.z;
          bK[bJ] += bO.x;
          bK[bJ + 1] += bO.y;
          bK[bJ + 2] += bO.z;
        }
      } else {
        bF = 0;
        bG = bh.length;
        bF = 0;
        bG = bh.length;
        for (; bF < bG; bF += 9) {
          bL.fromArray(bh, bF);
          bM.fromArray(bh, bF + 3);
          bN.fromArray(bh, bF + 6);
          bO.subVectors(bN, bM);
          bP.subVectors(bL, bM);
          bO.cross(bP);
          bK[bF] = bO.x;
          bK[bF + 1] = bO.y;
          bK[bF + 2] = bO.z;
          bK[bF + 3] = bO.x;
          bK[bF + 4] = bO.y;
          bK[bF + 5] = bO.z;
          bK[bF + 6] = bO.x;
          bK[bF + 7] = bO.y;
          bK[bF + 8] = bO.z;
        }
      }
      this.normalizeNormals();
      bg.normal.needsUpdate = true;
    }
  },
  merge: function (bf, bg) {
    if (bf && bf.isBufferGeometry) {
      if (bg === undefined) {
        bg = 0;
        console.warn("THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge.");
      }
      var bh = this.attributes;
      for (var bi in bh) {
        if (bf.attributes[bi] !== undefined) {
          for (var bF = bh[bi].array, bG = bf.attributes[bi], bH = bG.array, bI = bG.itemSize * bg, bJ = Math.min(bH.length, bF.length - bI), bK = 0, bL = bI; bK < bJ; bK++, bL++) {
            bF[bL] = bH[bK];
          }
        }
      }
      return this;
    }
    console.error("THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.", bf);
  },
  normalizeNormals: function () {
    var bf = new Vector3();
    return function () {
      for (var bg = this.attributes.normal, bh = 0, bi = bg.count; bh < bi; bh++) {
        bf.x = bg.getX(bh);
        bf.y = bg.getY(bh);
        bf.z = bg.getZ(bh);
        bf.normalize();
        bg.setXYZ(bh, bf.x, bf.y, bf.z);
      }
    };
  }(),
  toNonIndexed: function () {
    function bf(bf, bg) {
      for (var bh = bf.array, bi = bf.itemSize, bF = new bh.constructor(bg.length * bi), bG = 0, bH = 0, bI = 0, bJ = bg.length; bI < bJ; bI++) {
        bG = bg[bI] * bi;
        for (var bK = 0; bK < bi; bK++) {
          bF[bH++] = bh[bG++];
        }
      }
      return new BufferAttribute(bF, bi);
    }
    if (this.index === null) {
      console.warn("THREE.BufferGeometry.toNonIndexed(): Geometry is already non-indexed.");
      return this;
    }
    var bg = new BufferGeometry();
    var bh = this.index.array;
    var bi = this.attributes;
    for (var bF in bi) {
      var bG = bf(bi[bF], bh);
      bg.addAttribute(bF, bG);
    }
    var bH = this.morphAttributes;
    for (bF in bH) {
      for (var bI = [], bJ = bH[bF], bK = 0, bL = bJ.length; bK < bL; bK++) {
        bG = bf(bJ[bK], bh);
        bI.push(bG);
      }
      bg.morphAttributes[bF] = bI;
    }
    for (var bM = this.groups, bN = (bK = 0, bM.length); bK < bN; bK++) {
      var bO = bM[bK];
      bg.addGroup(bO.start, bO.count, bO.materialIndex);
    }
    return bg;
  },
  toJSON: function () {
    var bf = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON"
      }
    };
    bf.uuid = this.uuid;
    bf.type = this.type;
    if (this.name !== "") {
      bf.name = this.name;
    }
    if (Object.keys(this.userData).length > 0) {
      bf.userData = this.userData;
    }
    if (this.parameters !== undefined) {
      var bg = this.parameters;
      for (var bh in bg) {
        if (bg[bh] !== undefined) {
          bf[bh] = bg[bh];
        }
      }
      return bf;
    }
    bf.data = {
      attributes: {}
    };
    var bi = this.index;
    if (bi !== null) {
      bf.data.index = {
        type: bi.array.constructor.name,
        array: Array.prototype.slice.call(bi.array)
      };
    }
    var bF = this.attributes;
    for (var bh in bF) {
      var bG = (bN = bF[bh]).toJSON();
      if (bN.name !== "") {
        bG.name = bN.name;
      }
      bf.data.attributes[bh] = bG;
    }
    var bH = {};
    var bI = false;
    for (var bh in this.morphAttributes) {
      for (var bJ = this.morphAttributes[bh], bK = [], bL = 0, bM = bJ.length; bL < bM; bL++) {
        var bN;
        bG = (bN = bJ[bL]).toJSON();
        if (bN.name !== "") {
          bG.name = bN.name;
        }
        bK.push(bG);
      }
      if (bK.length > 0) {
        bH[bh] = bK;
        bI = true;
      }
    }
    if (bI) {
      bf.data.morphAttributes = bH;
    }
    var bO = this.groups;
    if (bO.length > 0) {
      bf.data.groups = JSON.parse(JSON.stringify(bO));
    }
    var bP = this.boundingSphere;
    if (bP !== null) {
      bf.data.boundingSphere = {
        center: bP.center.toArray(),
        radius: bP.radius
      };
    }
    return bf;
  },
  clone: function () {
    return new BufferGeometry().copy(this);
  },
  copy: function (bf) {
    var bg;
    var bh;
    var bi;
    this.index = null;
    this.attributes = {};
    this.morphAttributes = {};
    this.groups = [];
    this.boundingBox = null;
    this.boundingSphere = null;
    this.name = bf.name;
    var bF = bf.index;
    if (bF !== null) {
      this.setIndex(bF.clone());
    }
    var bG = bf.attributes;
    for (bg in bG) {
      var bH = bG[bg];
      this.addAttribute(bg, bH.clone());
    }
    var bI = bf.morphAttributes;
    for (bg in bI) {
      var bJ = [];
      var bK = bI[bg];
      bh = 0;
      bi = bK.length;
      for (; bh < bi; bh++) {
        bJ.push(bK[bh].clone());
      }
      this.morphAttributes[bg] = bJ;
    }
    var bL = bf.groups;
    bh = 0;
    bi = bL.length;
    for (; bh < bi; bh++) {
      var bM = bL[bh];
      this.addGroup(bM.start, bM.count, bM.materialIndex);
    }
    var bN = bf.boundingBox;
    if (bN !== null) {
      this.boundingBox = bN.clone();
    }
    var bO = bf.boundingSphere;
    if (bO !== null) {
      this.boundingSphere = bO.clone();
    }
    this.drawRange.start = bf.drawRange.start;
    this.drawRange.count = bf.drawRange.count;
    this.userData = bf.userData;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
BoxGeometry.prototype = Object.create(Geometry.prototype);
BoxGeometry.prototype.constructor = BoxGeometry;
BoxBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
BoxBufferGeometry.prototype.constructor = BoxBufferGeometry;
PlaneGeometry.prototype = Object.create(Geometry.prototype);
PlaneGeometry.prototype.constructor = PlaneGeometry;
PlaneBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
PlaneBufferGeometry.prototype.constructor = PlaneBufferGeometry;
var Ke = 0;
export function Material() {
  Object.defineProperty(this, "id", {
    value: Ke++
  });
  this.uuid = Math.generateUUID();
  this.name = "";
  this.type = "Material";
  this.fog = true;
  this.lights = true;
  this.blending = NormalBlending;
  this.side = FrontSide;
  this.flatShading = false;
  this.vertexTangents = false;
  this.vertexColors = NoColors;
  this.opacity = 1;
  this.transparent = false;
  this.blendSrc = SrcAlphaFactor;
  this.blendDst = OneMinusSrcAlphaFactor;
  this.blendEquation = AddEquation;
  this.blendSrcAlpha = null;
  this.blendDstAlpha = null;
  this.blendEquationAlpha = null;
  this.depthFunc = LessEqualDepth;
  this.depthTest = true;
  this.depthWrite = true;
  this.clippingPlanes = null;
  this.clipIntersection = false;
  this.clipShadows = false;
  this.shadowSide = null;
  this.colorWrite = true;
  this.precision = null;
  this.polygonOffset = false;
  this.polygonOffsetFactor = 0;
  this.polygonOffsetUnits = 0;
  this.dithering = false;
  this.alphaTest = 0;
  this.premultipliedAlpha = false;
  this.visible = true;
  this.userData = {};
  this.needsUpdate = true;
}
Material.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: Material,
  isMaterial: true,
  onBeforeCompile: function () {},
  setValues: function (bf) {
    if (bf !== undefined) {
      for (var bg in bf) {
        var bh = bf[bg];
        if (bh !== undefined) {
          if (bg !== "shading") {
            var bi = this[bg];
            if (bi !== undefined) {
              if (bi && bi.isColor) {
                bi.set(bh);
              } else if (bi && bi.isVector3 && bh && bh.isVector3) {
                bi.copy(bh);
              } else {
                this[bg] = bh;
              }
            } else {
              console.warn("THREE." + this.type + ": '" + bg + "' is not a property of this material.");
            }
          } else {
            console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
            this.flatShading = bh === FlatShading;
          }
        } else {
          console.warn("THREE.Material: '" + bg + "' parameter is undefined.");
        }
      }
    }
  },
  toJSON: function (bf) {
    var bg = bf === undefined || typeof bf == "string";
    if (bg) {
      bf = {
        textures: {},
        images: {}
      };
    }
    var bh = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON"
      }
    };
    function bi(bf) {
      var bg = [];
      for (var bh in bf) {
        var bi = bf[bh];
        delete bi.metadata;
        bg.push(bi);
      }
      return bg;
    }
    bh.uuid = this.uuid;
    bh.type = this.type;
    if (this.name !== "") {
      bh.name = this.name;
    }
    if (this.color && this.color.isColor) {
      bh.color = this.color.getHex();
    }
    if (this.roughness !== undefined) {
      bh.roughness = this.roughness;
    }
    if (this.metalness !== undefined) {
      bh.metalness = this.metalness;
    }
    if (this.emissive && this.emissive.isColor) {
      bh.emissive = this.emissive.getHex();
    }
    if (this.emissiveIntensity !== 1) {
      bh.emissiveIntensity = this.emissiveIntensity;
    }
    if (this.specular && this.specular.isColor) {
      bh.specular = this.specular.getHex();
    }
    if (this.shininess !== undefined) {
      bh.shininess = this.shininess;
    }
    if (this.clearCoat !== undefined) {
      bh.clearCoat = this.clearCoat;
    }
    if (this.clearCoatRoughness !== undefined) {
      bh.clearCoatRoughness = this.clearCoatRoughness;
    }
    if (this.map && this.map.isTexture) {
      bh.map = this.map.toJSON(bf).uuid;
    }
    if (this.matcap && this.matcap.isTexture) {
      bh.matcap = this.matcap.toJSON(bf).uuid;
    }
    if (this.alphaMap && this.alphaMap.isTexture) {
      bh.alphaMap = this.alphaMap.toJSON(bf).uuid;
    }
    if (this.lightMap && this.lightMap.isTexture) {
      bh.lightMap = this.lightMap.toJSON(bf).uuid;
    }
    if (this.aoMap && this.aoMap.isTexture) {
      bh.aoMap = this.aoMap.toJSON(bf).uuid;
      bh.aoMapIntensity = this.aoMapIntensity;
    }
    if (this.bumpMap && this.bumpMap.isTexture) {
      bh.bumpMap = this.bumpMap.toJSON(bf).uuid;
      bh.bumpScale = this.bumpScale;
    }
    if (this.normalMap && this.normalMap.isTexture) {
      bh.normalMap = this.normalMap.toJSON(bf).uuid;
      bh.normalMapType = this.normalMapType;
      bh.normalScale = this.normalScale.toArray();
    }
    if (this.displacementMap && this.displacementMap.isTexture) {
      bh.displacementMap = this.displacementMap.toJSON(bf).uuid;
      bh.displacementScale = this.displacementScale;
      bh.displacementBias = this.displacementBias;
    }
    if (this.roughnessMap && this.roughnessMap.isTexture) {
      bh.roughnessMap = this.roughnessMap.toJSON(bf).uuid;
    }
    if (this.metalnessMap && this.metalnessMap.isTexture) {
      bh.metalnessMap = this.metalnessMap.toJSON(bf).uuid;
    }
    if (this.emissiveMap && this.emissiveMap.isTexture) {
      bh.emissiveMap = this.emissiveMap.toJSON(bf).uuid;
    }
    if (this.specularMap && this.specularMap.isTexture) {
      bh.specularMap = this.specularMap.toJSON(bf).uuid;
    }
    if (this.envMap && this.envMap.isTexture) {
      bh.envMap = this.envMap.toJSON(bf).uuid;
      bh.reflectivity = this.reflectivity;
      if (this.combine !== undefined) {
        bh.combine = this.combine;
      }
      if (this.envMapIntensity !== undefined) {
        bh.envMapIntensity = this.envMapIntensity;
      }
    }
    if (this.gradientMap && this.gradientMap.isTexture) {
      bh.gradientMap = this.gradientMap.toJSON(bf).uuid;
    }
    if (this.size !== undefined) {
      bh.size = this.size;
    }
    if (this.sizeAttenuation !== undefined) {
      bh.sizeAttenuation = this.sizeAttenuation;
    }
    if (this.blending !== NormalBlending) {
      bh.blending = this.blending;
    }
    if (this.flatShading === true) {
      bh.flatShading = this.flatShading;
    }
    if (this.side !== FrontSide) {
      bh.side = this.side;
    }
    if (this.vertexColors !== NoColors) {
      bh.vertexColors = this.vertexColors;
    }
    if (this.opacity < 1) {
      bh.opacity = this.opacity;
    }
    if (this.transparent === true) {
      bh.transparent = this.transparent;
    }
    bh.depthFunc = this.depthFunc;
    bh.depthTest = this.depthTest;
    bh.depthWrite = this.depthWrite;
    if (this.rotation !== 0) {
      bh.rotation = this.rotation;
    }
    if (this.polygonOffset === true) {
      bh.polygonOffset = true;
    }
    if (this.polygonOffsetFactor !== 0) {
      bh.polygonOffsetFactor = this.polygonOffsetFactor;
    }
    if (this.polygonOffsetUnits !== 0) {
      bh.polygonOffsetUnits = this.polygonOffsetUnits;
    }
    if (this.linewidth !== 1) {
      bh.linewidth = this.linewidth;
    }
    if (this.dashSize !== undefined) {
      bh.dashSize = this.dashSize;
    }
    if (this.gapSize !== undefined) {
      bh.gapSize = this.gapSize;
    }
    if (this.scale !== undefined) {
      bh.scale = this.scale;
    }
    if (this.dithering === true) {
      bh.dithering = true;
    }
    if (this.alphaTest > 0) {
      bh.alphaTest = this.alphaTest;
    }
    if (this.premultipliedAlpha === true) {
      bh.premultipliedAlpha = this.premultipliedAlpha;
    }
    if (this.wireframe === true) {
      bh.wireframe = this.wireframe;
    }
    if (this.wireframeLinewidth > 1) {
      bh.wireframeLinewidth = this.wireframeLinewidth;
    }
    if (this.wireframeLinecap !== "round") {
      bh.wireframeLinecap = this.wireframeLinecap;
    }
    if (this.wireframeLinejoin !== "round") {
      bh.wireframeLinejoin = this.wireframeLinejoin;
    }
    if (this.morphTargets === true) {
      bh.morphTargets = true;
    }
    if (this.skinning === true) {
      bh.skinning = true;
    }
    if (this.visible === false) {
      bh.visible = false;
    }
    if (JSON.stringify(this.userData) !== "{}") {
      bh.userData = this.userData;
    }
    if (bg) {
      var bF = bi(bf.textures);
      var bG = bi(bf.images);
      if (bF.length > 0) {
        bh.textures = bF;
      }
      if (bG.length > 0) {
        bh.images = bG;
      }
    }
    return bh;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.name = bf.name;
    this.fog = bf.fog;
    this.lights = bf.lights;
    this.blending = bf.blending;
    this.side = bf.side;
    this.flatShading = bf.flatShading;
    this.vertexColors = bf.vertexColors;
    this.opacity = bf.opacity;
    this.transparent = bf.transparent;
    this.blendSrc = bf.blendSrc;
    this.blendDst = bf.blendDst;
    this.blendEquation = bf.blendEquation;
    this.blendSrcAlpha = bf.blendSrcAlpha;
    this.blendDstAlpha = bf.blendDstAlpha;
    this.blendEquationAlpha = bf.blendEquationAlpha;
    this.depthFunc = bf.depthFunc;
    this.depthTest = bf.depthTest;
    this.depthWrite = bf.depthWrite;
    this.colorWrite = bf.colorWrite;
    this.precision = bf.precision;
    this.polygonOffset = bf.polygonOffset;
    this.polygonOffsetFactor = bf.polygonOffsetFactor;
    this.polygonOffsetUnits = bf.polygonOffsetUnits;
    this.dithering = bf.dithering;
    this.alphaTest = bf.alphaTest;
    this.premultipliedAlpha = bf.premultipliedAlpha;
    this.visible = bf.visible;
    this.userData = JSON.parse(JSON.stringify(bf.userData));
    this.clipShadows = bf.clipShadows;
    this.clipIntersection = bf.clipIntersection;
    var bg = bf.clippingPlanes;
    var bh = null;
    if (bg !== null) {
      var bi = bg.length;
      bh = new Array(bi);
      for (var bF = 0; bF !== bi; ++bF) {
        bh[bF] = bg[bF].clone();
      }
    }
    this.clippingPlanes = bh;
    this.shadowSide = bf.shadowSide;
    return this;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
var Kz;
var KA;
var KB;
var KC;
var KD;
var KE;
var KF;
var KG;
var KH;
var KI;
var KJ;
var KK;
var KL = "void main() {\n\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n}";
var KM = "void main() {\n\tgl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );\n}";
export function ShaderMaterial(bf) {
  Material.call(this);
  this.type = "ShaderMaterial";
  this.defines = {};
  this.uniforms = {};
  this.vertexShader = KL;
  this.fragmentShader = KM;
  this.linewidth = 1;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.fog = false;
  this.lights = false;
  this.clipping = false;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.extensions = {
    derivatives: false,
    fragDepth: false,
    drawBuffers: false,
    shaderTextureLOD: false
  };
  this.defaultAttributeValues = {
    color: [1, 1, 1],
    uv: [0, 0],
    uv2: [0, 0]
  };
  this.index0AttributeName = undefined;
  this.uniformsNeedUpdate = false;
  if (bf !== undefined) {
    if (bf.attributes !== undefined) {
      console.error("THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead.");
    }
    this.setValues(bf);
  }
}
export function Ray(bf, bg) {
  this.origin = bf !== undefined ? bf : new Vector3();
  this.direction = bg !== undefined ? bg : new Vector3();
}
export function Triangle(bf, bg, bh) {
  this.a = bf !== undefined ? bf : new Vector3();
  this.b = bg !== undefined ? bg : new Vector3();
  this.c = bh !== undefined ? bh : new Vector3();
}
export function MeshBasicMaterial(bf) {
  Material.call(this);
  this.type = "MeshBasicMaterial";
  this.color = new Color(16777215);
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = false;
  this.morphTargets = false;
  this.lights = false;
  this.setValues(bf);
}
export function Mesh(bf, bg) {
  Object3D.call(this);
  this.type = "Mesh";
  this.geometry = bf !== undefined ? bf : new BufferGeometry();
  this.material = bg !== undefined ? bg : new MeshBasicMaterial({
    color: Math.random() * 16777215
  });
  this.drawMode = TrianglesDrawMode;
  this.updateMorphTargets();
}
function L1(bf, bg, bh, bi) {
  var bF;
  var bG;
  var bH = new Color(0);
  var bI = 0;
  var bJ = null;
  var bK = 0;
  function bL(bf, bh) {
    bg.buffers.color.setClear(bf.r, bf.g, bf.b, bh, bi);
  }
  return {
    getClearColor: function () {
      return bH;
    },
    setClearColor: function (bf, bg) {
      bH.set(bf);
      bL(bH, bI = bg !== undefined ? bg : 1);
    },
    getClearAlpha: function () {
      return bI;
    },
    setClearAlpha: function (bf) {
      bL(bH, bI = bf);
    },
    render: function (bg, bi, bM, bN) {
      var bO = bi.background;
      var bP = bf.vr;
      var bQ = bP.getSession && bP.getSession();
      if (bQ && bQ.environmentBlendMode === "additive") {
        bO = null;
      }
      if (bO === null) {
        bL(bH, bI);
        bJ = null;
        bK = 0;
      } else if (bO && bO.isColor) {
        bL(bO, 1);
        bN = true;
        bJ = null;
        bK = 0;
      }
      if (bf.autoClear || bN) {
        bf.clear(bf.autoClearColor, bf.autoClearDepth, bf.autoClearStencil);
      }
      if (bO && (bO.isCubeTexture || bO.isWebGLRenderTargetCube)) {
        if (bG === undefined) {
          (bG = new Mesh(new BoxBufferGeometry(1, 1, 1), new ShaderMaterial({
            type: "BackgroundCubeMaterial",
            uniforms: vQ(ShaderLib.cube.uniforms),
            vertexShader: ShaderLib.cube.vertexShader,
            fragmentShader: ShaderLib.cube.fragmentShader,
            side: BackSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          }))).geometry.removeAttribute("normal");
          bG.geometry.removeAttribute("uv");
          bG.onBeforeRender = function (bf, bg, bh) {
            this.matrixWorld.copyPosition(bh.matrixWorld);
          };
          Object.defineProperty(bG.material, "map", {
            get: function () {
              return this.uniforms.tCube.value;
            }
          });
          bh.update(bG);
        }
        var bR = bO.isWebGLRenderTargetCube ? bO.texture : bO;
        bG.material.uniforms.tCube.value = bR;
        bG.material.uniforms.tFlip.value = bO.isWebGLRenderTargetCube ? 1 : -1;
        if (bJ !== bO || bK !== bR.version) {
          bG.material.needsUpdate = true;
          bJ = bO;
          bK = bR.version;
        }
        bg.unshift(bG, bG.geometry, bG.material, 0, 0, null);
      } else if (bO && bO.isTexture) {
        if (bF === undefined) {
          (bF = new Mesh(new PlaneBufferGeometry(2, 2), new ShaderMaterial({
            type: "BackgroundMaterial",
            uniforms: vQ(ShaderLib.background.uniforms),
            vertexShader: ShaderLib.background.vertexShader,
            fragmentShader: ShaderLib.background.fragmentShader,
            side: FrontSide,
            depthTest: false,
            depthWrite: false,
            fog: false
          }))).geometry.removeAttribute("normal");
          Object.defineProperty(bF.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            }
          });
          bh.update(bF);
        }
        bF.material.uniforms.t2D.value = bO;
        if (bO.matrixAutoUpdate === true) {
          bO.updateMatrix();
        }
        bF.material.uniforms.uvTransform.value.copy(bO.matrix);
        if (bJ !== bO || bK !== bO.version) {
          bF.material.needsUpdate = true;
          bJ = bO;
          bK = bO.version;
        }
        bg.unshift(bF, bF.geometry, bF.material, 0, 0, null);
      }
    }
  };
}
function Lt(bf, bg, bh, bi) {
  var bF;
  this.setMode = function (bf) {
    bF = bf;
  };
  this.render = function (bg, bi) {
    bf.drawArrays(bF, bg, bi);
    bh.update(bi, bF);
  };
  this.renderInstances = function (bG, bH, bI) {
    var bJ;
    if (bi.isWebGL2) {
      bJ = bf;
    } else if ((bJ = bg.get("ANGLE_instanced_arrays")) === null) {
      console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    bJ[bi.isWebGL2 ? "drawArraysInstanced" : "drawArraysInstancedANGLE"](bF, bH, bI, bG.maxInstancedCount);
    bh.update(bI, bF, bG.maxInstancedCount);
  };
}
function LG(bf, bg, bh) {
  var bi;
  function bF(bg) {
    if (bg === "highp") {
      if (bf.getShaderPrecisionFormat(35633, 36338).precision > 0 && bf.getShaderPrecisionFormat(35632, 36338).precision > 0) {
        return "highp";
      }
      bg = "mediump";
    }
    if (bg === "mediump" && bf.getShaderPrecisionFormat(35633, 36337).precision > 0 && bf.getShaderPrecisionFormat(35632, 36337).precision > 0) {
      return "mediump";
    } else {
      return "lowp";
    }
  }
  var bG = typeof WebGL2RenderingContext != "undefined" && bf instanceof WebGL2RenderingContext;
  var bH = bh.precision !== undefined ? bh.precision : "highp";
  var bI = bF(bH);
  if (bI !== bH) {
    console.warn("THREE.WebGLRenderer:", bH, "not supported, using", bI, "instead.");
    bH = bI;
  }
  var bJ = bh.logarithmicDepthBuffer === true;
  var bK = bf.getParameter(34930);
  var bL = bf.getParameter(35660);
  var bM = bf.getParameter(3379);
  var bN = bf.getParameter(34076);
  var bO = bf.getParameter(34921);
  var bP = bf.getParameter(36347);
  var bQ = bf.getParameter(36348);
  var bR = bf.getParameter(36349);
  var bS = bL > 0;
  var bT = bG || !!bg.get("OES_texture_float");
  return {
    isWebGL2: bG,
    getMaxAnisotropy: function () {
      if (bi !== undefined) {
        return bi;
      }
      var bh = bg.get("EXT_texture_filter_anisotropic");
      return bi = bh !== null ? bf.getParameter(bh.MAX_TEXTURE_MAX_ANISOTROPY_EXT) : 0;
    },
    getMaxPrecision: bF,
    precision: bH,
    logarithmicDepthBuffer: bJ,
    maxTextures: bK,
    maxVertexTextures: bL,
    maxTextureSize: bM,
    maxCubemapSize: bN,
    maxAttributes: bO,
    maxVertexUniforms: bP,
    maxVaryings: bQ,
    maxFragmentUniforms: bR,
    vertexTextures: bS,
    floatFragmentTextures: bT,
    floatVertexTextures: bS && bT,
    maxSamples: bG ? bf.getParameter(36183) : 0
  };
}
function M2() {
  var bf = this;
  var bg = null;
  var bh = 0;
  var bi = false;
  var bF = false;
  var bG = new Plane();
  var bH = new Matrix3();
  var bI = {
    value: null,
    needsUpdate: false
  };
  function bJ() {
    if (bI.value !== bg) {
      bI.value = bg;
      bI.needsUpdate = bh > 0;
    }
    bf.numPlanes = bh;
    bf.numIntersection = 0;
  }
  function bK(bg, bh, bi, bF) {
    var bJ = bg !== null ? bg.length : 0;
    var bK = null;
    if (bJ !== 0) {
      bK = bI.value;
      if (bF !== true || bK === null) {
        var bL = bi + bJ * 4;
        var bM = bh.matrixWorldInverse;
        bH.getNormalMatrix(bM);
        if (bK === null || bK.length < bL) {
          bK = new Float32Array(bL);
        }
        for (var bN = 0, bO = bi; bN !== bJ; ++bN, bO += 4) {
          bG.copy(bg[bN]).applyMatrix4(bM, bH);
          bG.normal.toArray(bK, bO);
          bK[bO + 3] = bG.constant;
        }
      }
      bI.value = bK;
      bI.needsUpdate = true;
    }
    bf.numPlanes = bJ;
    return bK;
  }
  this.uniform = bI;
  this.numPlanes = 0;
  this.numIntersection = 0;
  this.init = function (bf, bF, bG) {
    var bH = bf.length !== 0 || bF || bh !== 0 || bi;
    bi = bF;
    bg = bK(bf, bG, 0);
    bh = bf.length;
    return bH;
  };
  this.beginShadows = function () {
    bF = true;
    bK(null);
  };
  this.endShadows = function () {
    bF = false;
    bJ();
  };
  this.setState = function (bf, bG, bH, bL, bM, bN) {
    if (!bi || bf === null || bf.length === 0 || bF && !bH) {
      if (bF) {
        bK(null);
      } else {
        bJ();
      }
    } else {
      var bO = bF ? 0 : bh;
      var bP = bO * 4;
      var bQ = bM.clippingState || null;
      bI.value = bQ;
      bQ = bK(bf, bL, bP, bN);
      for (var bR = 0; bR !== bP; ++bR) {
        bQ[bR] = bg[bR];
      }
      bM.clippingState = bQ;
      this.numIntersection = bG ? this.numPlanes : 0;
      this.numPlanes += bO;
    }
  };
}
function MB(bf) {
  var bg = {};
  return {
    get: function (bh) {
      if (bg[bh] !== undefined) {
        return bg[bh];
      }
      var bi;
      switch (bh) {
        case "WEBGL_depth_texture":
          bi = bf.getExtension("WEBGL_depth_texture") || bf.getExtension("MOZ_WEBGL_depth_texture") || bf.getExtension("WEBKIT_WEBGL_depth_texture");
          break;
        case "EXT_texture_filter_anisotropic":
          bi = bf.getExtension("EXT_texture_filter_anisotropic") || bf.getExtension("MOZ_EXT_texture_filter_anisotropic") || bf.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
          break;
        case "WEBGL_compressed_texture_s3tc":
          bi = bf.getExtension("WEBGL_compressed_texture_s3tc") || bf.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || bf.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
          break;
        case "WEBGL_compressed_texture_pvrtc":
          bi = bf.getExtension("WEBGL_compressed_texture_pvrtc") || bf.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
          break;
        default:
          bi = bf.getExtension(bh);
      }
      if (bi === null) {
        console.warn("THREE.WebGLRenderer: " + bh + " extension not supported.");
      }
      bg[bh] = bi;
      return bi;
    }
  };
}
function MG(bf, bg, bh) {
  var bi = {};
  var bF = {};
  function bG(bf) {
    var bH = bf.target;
    var bI = bi[bH.id];
    if (bI.index !== null) {
      bg.remove(bI.index);
    }
    for (var bJ in bI.attributes) {
      bg.remove(bI.attributes[bJ]);
    }
    bH.removeEventListener("dispose", bG);
    delete bi[bH.id];
    var bK = bF[bI.id];
    if (bK) {
      bg.remove(bK);
      delete bF[bI.id];
    }
    bh.memory.geometries--;
  }
  return {
    get: function (bf, bg) {
      var bF = bi[bg.id];
      return bF || (bg.addEventListener("dispose", bG), bg.isBufferGeometry ? bF = bg : bg.isGeometry && (bg._bufferGeometry === undefined && (bg._bufferGeometry = new BufferGeometry().setFromObject(bf)), bF = bg._bufferGeometry), bi[bg.id] = bF, bh.memory.geometries++, bF);
    },
    update: function (bf) {
      var bh = bf.index;
      var bi = bf.attributes;
      if (bh !== null) {
        bg.update(bh, 34963);
      }
      for (var bF in bi) {
        bg.update(bi[bF], 34962);
      }
      var bG = bf.morphAttributes;
      for (var bF in bG) {
        for (var bH = bG[bF], bI = 0, bJ = bH.length; bI < bJ; bI++) {
          bg.update(bH[bI], 34962);
        }
      }
    },
    getWireframeAttribute: function (bf) {
      var bh = bF[bf.id];
      if (bh) {
        return bh;
      }
      var bi;
      var bG = [];
      var bH = bf.index;
      var bI = bf.attributes;
      if (bH !== null) {
        for (var bJ = 0, bK = (bi = bH.array).length; bJ < bK; bJ += 3) {
          var bL = bi[bJ + 0];
          var bM = bi[bJ + 1];
          var bN = bi[bJ + 2];
          bG.push(bL, bM, bM, bN, bN, bL);
        }
      } else {
        bJ = 0;
        bK = (bi = bI.position.array).length / 3 - 1;
        bJ = 0;
        bK = (bi = bI.position.array).length / 3 - 1;
        for (; bJ < bK; bJ += 3) {
          bL = bJ + 0;
          bM = bJ + 1;
          bN = bJ + 2;
          bG.push(bL, bM, bM, bN, bN, bL);
        }
      }
      bh = new (Bn(bG) > 65535 ? Uint32BufferAttribute : Uint16BufferAttribute)(bG, 1);
      bg.update(bh, 34963);
      bF[bf.id] = bh;
      return bh;
    }
  };
}
function Nf(bf, bg, bh, bi) {
  var bF;
  var bG;
  var bH;
  this.setMode = function (bf) {
    bF = bf;
  };
  this.setIndex = function (bf) {
    bG = bf.type;
    bH = bf.bytesPerElement;
  };
  this.render = function (bg, bi) {
    bf.drawElements(bF, bi, bG, bg * bH);
    bh.update(bi, bF);
  };
  this.renderInstances = function (bI, bJ, bK) {
    var bL;
    if (bi.isWebGL2) {
      bL = bf;
    } else if ((bL = bg.get("ANGLE_instanced_arrays")) === null) {
      console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
      return;
    }
    bL[bi.isWebGL2 ? "drawElementsInstanced" : "drawElementsInstancedANGLE"](bF, bK, bG, bJ * bH, bI.maxInstancedCount);
    bh.update(bK, bF, bI.maxInstancedCount);
  };
}
function Nv(bf) {
  var bg = {
    frame: 0,
    calls: 0,
    triangles: 0,
    points: 0,
    lines: 0
  };
  return {
    memory: {
      geometries: 0,
      textures: 0
    },
    render: bg,
    programs: null,
    autoReset: true,
    reset: function () {
      bg.frame++;
      bg.calls = 0;
      bg.triangles = 0;
      bg.points = 0;
      bg.lines = 0;
    },
    update: function (bf, bh, bi) {
      bi = bi || 1;
      bg.calls++;
      switch (bh) {
        case 4:
          bg.triangles += bi * (bf / 3);
          break;
        case 5:
        case 6:
          bg.triangles += bi * (bf - 2);
          break;
        case 1:
          bg.lines += bi * (bf / 2);
          break;
        case 3:
          bg.lines += bi * (bf - 1);
          break;
        case 2:
          bg.lines += bi * bf;
          break;
        case 0:
          bg.points += bi * bf;
          break;
        default:
          console.error("THREE.WebGLInfo: Unknown draw mode:", bh);
      }
    }
  };
}
function NB(bf, bg) {
  return Math.abs(bg[1]) - Math.abs(bf[1]);
}
function NE(bf) {
  var bg = {};
  var bh = new Float32Array(8);
  return {
    update: function (bi, bF, bG, bH) {
      var bI = bi.morphTargetInfluences;
      var bJ = bI.length;
      var bK = bg[bF.id];
      if (bK === undefined) {
        bK = [];
        for (var bL = 0; bL < bJ; bL++) {
          bK[bL] = [bL, 0];
        }
        bg[bF.id] = bK;
      }
      var bM = bG.morphTargets && bF.morphAttributes.position;
      var bN = bG.morphNormals && bF.morphAttributes.normal;
      for (bL = 0; bL < bJ; bL++) {
        if ((bO = bK[bL])[1] !== 0) {
          if (bM) {
            bF.removeAttribute("morphTarget" + bL);
          }
          if (bN) {
            bF.removeAttribute("morphNormal" + bL);
          }
        }
      }
      for (bL = 0; bL < bJ; bL++) {
        (bO = bK[bL])[0] = bL;
        bO[1] = bI[bL];
      }
      bK.sort(NB);
      bL = 0;
      for (; bL < 8; bL++) {
        var bO;
        if (bO = bK[bL]) {
          var bP = bO[0];
          var bQ = bO[1];
          if (bQ) {
            if (bM) {
              bF.addAttribute("morphTarget" + bL, bM[bP]);
            }
            if (bN) {
              bF.addAttribute("morphNormal" + bL, bN[bP]);
            }
            bh[bL] = bQ;
            continue;
          }
        }
        bh[bL] = 0;
      }
      bH.getUniforms().setValue(bf, "morphTargetInfluences", bh);
    }
  };
}
function NV(bf, bg) {
  var bh = {};
  return {
    update: function (bi) {
      var bF = bg.render.frame;
      var bG = bi.geometry;
      var bH = bf.get(bi, bG);
      if (bh[bH.id] !== bF) {
        if (bG.isGeometry) {
          bH.updateFromObject(bi);
        }
        bf.update(bH);
        bh[bH.id] = bF;
      }
      return bH;
    },
    dispose: function () {
      bh = {};
    }
  };
}
export function CubeTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK) {
  bf = bf !== undefined ? bf : [];
  bg = bg !== undefined ? bg : CubeReflectionMapping;
  bH = bH !== undefined ? bH : RGBFormat;
  Texture.call(this, bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK);
  this.flipY = false;
}
export function DataTexture2DArray(bf, bg, bh, bi) {
  Texture.call(this, null);
  this.image = {
    data: bf,
    width: bg,
    height: bh,
    depth: bi
  };
  this.magFilter = NearestFilter;
  this.minFilter = NearestFilter;
  this.wrapR = ClampToEdgeWrapping;
  this.generateMipmaps = false;
  this.flipY = false;
}
export function DataTexture3D(bf, bg, bh, bi) {
  Texture.call(this, null);
  this.image = {
    data: bf,
    width: bg,
    height: bh,
    depth: bi
  };
  this.magFilter = NearestFilter;
  this.minFilter = NearestFilter;
  this.wrapR = ClampToEdgeWrapping;
  this.generateMipmaps = false;
  this.flipY = false;
}
ShaderMaterial.prototype = Object.create(Material.prototype);
ShaderMaterial.prototype.constructor = ShaderMaterial;
ShaderMaterial.prototype.isShaderMaterial = true;
ShaderMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.fragmentShader = bf.fragmentShader;
  this.vertexShader = bf.vertexShader;
  this.uniforms = vQ(bf.uniforms);
  this.defines = Object.assign({}, bf.defines);
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.lights = bf.lights;
  this.clipping = bf.clipping;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  this.extensions = bf.extensions;
  return this;
};
ShaderMaterial.prototype.toJSON = function (bf) {
  var bg = Material.prototype.toJSON.call(this, bf);
  bg.uniforms = {};
  for (var bh in this.uniforms) {
    var bi = this.uniforms[bh].value;
    if (bi && bi.isTexture) {
      bg.uniforms[bh] = {
        type: "t",
        value: bi.toJSON(bf).uuid
      };
    } else if (bi && bi.isColor) {
      bg.uniforms[bh] = {
        type: "c",
        value: bi.getHex()
      };
    } else if (bi && bi.isVector2) {
      bg.uniforms[bh] = {
        type: "v2",
        value: bi.toArray()
      };
    } else if (bi && bi.isVector3) {
      bg.uniforms[bh] = {
        type: "v3",
        value: bi.toArray()
      };
    } else if (bi && bi.isVector4) {
      bg.uniforms[bh] = {
        type: "v4",
        value: bi.toArray()
      };
    } else if (bi && bi.isMatrix3) {
      bg.uniforms[bh] = {
        type: "m3",
        value: bi.toArray()
      };
    } else if (bi && bi.isMatrix4) {
      bg.uniforms[bh] = {
        type: "m4",
        value: bi.toArray()
      };
    } else {
      bg.uniforms[bh] = {
        value: bi
      };
    }
  }
  if (Object.keys(this.defines).length > 0) {
    bg.defines = this.defines;
  }
  bg.vertexShader = this.vertexShader;
  bg.fragmentShader = this.fragmentShader;
  var bF = {};
  for (var bG in this.extensions) {
    if (this.extensions[bG] === true) {
      bF[bG] = true;
    }
  }
  if (Object.keys(bF).length > 0) {
    bg.extensions = bF;
  }
  return bg;
};
Object.assign(Ray.prototype, {
  set: function (bf, bg) {
    this.origin.copy(bf);
    this.direction.copy(bg);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.origin.copy(bf.origin);
    this.direction.copy(bf.direction);
    return this;
  },
  at: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Ray: .at() target is now required");
      bg = new Vector3();
    }
    return bg.copy(this.direction).multiplyScalar(bf).add(this.origin);
  },
  lookAt: function (bf) {
    this.direction.copy(bf).sub(this.origin).normalize();
    return this;
  },
  recast: function () {
    var bf = new Vector3();
    return function (bg) {
      this.origin.copy(this.at(bg, bf));
      return this;
    };
  }(),
  closestPointToPoint: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Ray: .closestPointToPoint() target is now required");
      bg = new Vector3();
    }
    bg.subVectors(bf, this.origin);
    var bh = bg.dot(this.direction);
    if (bh < 0) {
      return bg.copy(this.origin);
    } else {
      return bg.copy(this.direction).multiplyScalar(bh).add(this.origin);
    }
  },
  distanceToPoint: function (bf) {
    return Math.sqrt(this.distanceSqToPoint(bf));
  },
  distanceSqToPoint: function () {
    var bf = new Vector3();
    return function (bg) {
      var bh = bf.subVectors(bg, this.origin).dot(this.direction);
      if (bh < 0) {
        return this.origin.distanceToSquared(bg);
      } else {
        bf.copy(this.direction).multiplyScalar(bh).add(this.origin);
        return bf.distanceToSquared(bg);
      }
    };
  }(),
  distanceSqToSegment: (KA = new Vector3(), KB = new Vector3(), KC = new Vector3(), function (bf, bg, bh, bi) {
    KA.copy(bf).add(bg).multiplyScalar(0.5);
    KB.copy(bg).sub(bf).normalize();
    KC.copy(this.origin).sub(KA);
    var bF;
    var bG;
    var bH;
    var bI;
    var bJ = bf.distanceTo(bg) * 0.5;
    var bK = -this.direction.dot(KB);
    var bL = KC.dot(this.direction);
    var bM = -KC.dot(KB);
    var bN = KC.lengthSq();
    var bO = Math.abs(1 - bK * bK);
    if (bO > 0) {
      bG = bK * bL - bM;
      bI = bJ * bO;
      if ((bF = bK * bM - bL) >= 0) {
        if (bG >= -bI) {
          if (bG <= bI) {
            var bP = 1 / bO;
            bH = (bF *= bP) * (bF + bK * (bG *= bP) + bL * 2) + bG * (bK * bF + bG + bM * 2) + bN;
          } else {
            bG = bJ;
            bH = -(bF = Math.max(0, -(bK * bG + bL))) * bF + bG * (bG + bM * 2) + bN;
          }
        } else {
          bG = -bJ;
          bH = -(bF = Math.max(0, -(bK * bG + bL))) * bF + bG * (bG + bM * 2) + bN;
        }
      } else if (bG <= -bI) {
        bH = -(bF = Math.max(0, -(-bK * bJ + bL))) * bF + (bG = bF > 0 ? -bJ : Math.min(Math.max(-bJ, -bM), bJ)) * (bG + bM * 2) + bN;
      } else if (bG <= bI) {
        bF = 0;
        bH = (bG = Math.min(Math.max(-bJ, -bM), bJ)) * (bG + bM * 2) + bN;
      } else {
        bH = -(bF = Math.max(0, -(bK * bJ + bL))) * bF + (bG = bF > 0 ? bJ : Math.min(Math.max(-bJ, -bM), bJ)) * (bG + bM * 2) + bN;
      }
    } else {
      bG = bK > 0 ? -bJ : bJ;
      bH = -(bF = Math.max(0, -(bK * bG + bL))) * bF + bG * (bG + bM * 2) + bN;
    }
    if (bh) {
      bh.copy(this.direction).multiplyScalar(bF).add(this.origin);
    }
    if (bi) {
      bi.copy(KB).multiplyScalar(bG).add(KA);
    }
    return bH;
  }),
  intersectSphere: function () {
    var bf = new Vector3();
    return function (bg, bh) {
      bf.subVectors(bg.center, this.origin);
      var bi = bf.dot(this.direction);
      var bF = bf.dot(bf) - bi * bi;
      var bG = bg.radius * bg.radius;
      if (bF > bG) {
        return null;
      }
      var bH = Math.sqrt(bG - bF);
      var bI = bi - bH;
      var bJ = bi + bH;
      if (bI < 0 && bJ < 0) {
        return null;
      } else if (bI < 0) {
        return this.at(bJ, bh);
      } else {
        return this.at(bI, bh);
      }
    };
  }(),
  intersectsSphere: function (bf) {
    return this.distanceSqToPoint(bf.center) <= bf.radius * bf.radius;
  },
  distanceToPlane: function (bf) {
    var bg = bf.normal.dot(this.direction);
    if (bg === 0) {
      if (bf.distanceToPoint(this.origin) === 0) {
        return 0;
      } else {
        return null;
      }
    }
    var bh = -(this.origin.dot(bf.normal) + bf.constant) / bg;
    if (bh >= 0) {
      return bh;
    } else {
      return null;
    }
  },
  intersectPlane: function (bf, bg) {
    var bh = this.distanceToPlane(bf);
    if (bh === null) {
      return null;
    } else {
      return this.at(bh, bg);
    }
  },
  intersectsPlane: function (bf) {
    var bg = bf.distanceToPoint(this.origin);
    return bg === 0 || bf.normal.dot(this.direction) * bg < 0;
  },
  intersectBox: function (bf, bg) {
    var bh;
    var bi;
    var bF;
    var bG;
    var bH;
    var bI;
    var bJ = 1 / this.direction.x;
    var bK = 1 / this.direction.y;
    var bL = 1 / this.direction.z;
    var bM = this.origin;
    if (bJ >= 0) {
      bh = (bf.min.x - bM.x) * bJ;
      bi = (bf.max.x - bM.x) * bJ;
    } else {
      bh = (bf.max.x - bM.x) * bJ;
      bi = (bf.min.x - bM.x) * bJ;
    }
    if (bK >= 0) {
      bF = (bf.min.y - bM.y) * bK;
      bG = (bf.max.y - bM.y) * bK;
    } else {
      bF = (bf.max.y - bM.y) * bK;
      bG = (bf.min.y - bM.y) * bK;
    }
    if (bh > bG || bF > bi) {
      return null;
    } else {
      if (bF > bh || bh != bh) {
        bh = bF;
      }
      if (bG < bi || bi != bi) {
        bi = bG;
      }
      if (bL >= 0) {
        bH = (bf.min.z - bM.z) * bL;
        bI = (bf.max.z - bM.z) * bL;
      } else {
        bH = (bf.max.z - bM.z) * bL;
        bI = (bf.min.z - bM.z) * bL;
      }
      if (bh > bI || bH > bi) {
        return null;
      } else {
        if (bH > bh || bh != bh) {
          bh = bH;
        }
        if (bI < bi || bi != bi) {
          bi = bI;
        }
        if (bi < 0) {
          return null;
        } else {
          return this.at(bh >= 0 ? bh : bi, bg);
        }
      }
    }
  },
  intersectsBox: (Kz = new Vector3(), function (bf) {
    return this.intersectBox(bf, Kz) !== null;
  }),
  intersectTriangle: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    var bh = new Vector3();
    var bi = new Vector3();
    return function (bF, bG, bH, bI, bJ) {
      bg.subVectors(bG, bF);
      bh.subVectors(bH, bF);
      bi.crossVectors(bg, bh);
      var bK;
      var bL = this.direction.dot(bi);
      if (bL > 0) {
        if (bI) {
          return null;
        }
        bK = 1;
      } else {
        if (bL >= 0) {
          return null;
        }
        bK = -1;
        bL = -bL;
      }
      bf.subVectors(this.origin, bF);
      var bM = bK * this.direction.dot(bh.crossVectors(bf, bh));
      if (bM < 0) {
        return null;
      }
      var bN = bK * this.direction.dot(bg.cross(bf));
      if (bN < 0) {
        return null;
      }
      if (bM + bN > bL) {
        return null;
      }
      var bO = -bK * bf.dot(bi);
      if (bO < 0) {
        return null;
      } else {
        return this.at(bO / bL, bJ);
      }
    };
  }(),
  applyMatrix4: function (bf) {
    this.origin.applyMatrix4(bf);
    this.direction.transformDirection(bf);
    return this;
  },
  equals: function (bf) {
    return bf.origin.equals(this.origin) && bf.direction.equals(this.direction);
  }
});
Object.assign(Triangle, {
  getNormal: (KE = new Vector3(), function (bf, bg, bh, bi) {
    if (bi === undefined) {
      console.warn("THREE.Triangle: .getNormal() target is now required");
      bi = new Vector3();
    }
    bi.subVectors(bh, bg);
    KE.subVectors(bf, bg);
    bi.cross(KE);
    var bF = bi.lengthSq();
    if (bF > 0) {
      return bi.multiplyScalar(1 / Math.sqrt(bF));
    } else {
      return bi.set(0, 0, 0);
    }
  }),
  getBarycoord: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    var bh = new Vector3();
    return function (bi, bF, bG, bH, bI) {
      bf.subVectors(bH, bF);
      bg.subVectors(bG, bF);
      bh.subVectors(bi, bF);
      var bJ = bf.dot(bf);
      var bK = bf.dot(bg);
      var bL = bf.dot(bh);
      var bM = bg.dot(bg);
      var bN = bg.dot(bh);
      var bO = bJ * bM - bK * bK;
      if (bI === undefined) {
        console.warn("THREE.Triangle: .getBarycoord() target is now required");
        bI = new Vector3();
      }
      if (bO === 0) {
        return bI.set(-2, -1, -1);
      }
      var bP = 1 / bO;
      var bQ = (bM * bL - bK * bN) * bP;
      var bR = (bJ * bN - bK * bL) * bP;
      return bI.set(1 - bQ - bR, bR, bQ);
    };
  }(),
  containsPoint: function () {
    var bf = new Vector3();
    return function (bg, bh, bi, bF) {
      Triangle.getBarycoord(bg, bh, bi, bF, bf);
      return bf.x >= 0 && bf.y >= 0 && bf.x + bf.y <= 1;
    };
  }(),
  getUV: (KD = new Vector3(), function (bf, bg, bh, bi, bF, bG, bH, bI) {
    this.getBarycoord(bf, bg, bh, bi, KD);
    bI.set(0, 0);
    bI.addScaledVector(bF, KD.x);
    bI.addScaledVector(bG, KD.y);
    bI.addScaledVector(bH, KD.z);
    return bI;
  }),
  isFrontFacing: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    return function (bh, bi, bF, bG) {
      bf.subVectors(bF, bi);
      bg.subVectors(bh, bi);
      return bf.cross(bg).dot(bG) < 0;
    };
  }()
});
Object.assign(Triangle.prototype, {
  set: function (bf, bg, bh) {
    this.a.copy(bf);
    this.b.copy(bg);
    this.c.copy(bh);
    return this;
  },
  setFromPointsAndIndices: function (bf, bg, bh, bi) {
    this.a.copy(bf[bg]);
    this.b.copy(bf[bh]);
    this.c.copy(bf[bi]);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.a.copy(bf.a);
    this.b.copy(bf.b);
    this.c.copy(bf.c);
    return this;
  },
  getArea: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    return function () {
      bf.subVectors(this.c, this.b);
      bg.subVectors(this.a, this.b);
      return bf.cross(bg).length() * 0.5;
    };
  }(),
  getMidpoint: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Triangle: .getMidpoint() target is now required");
      bf = new Vector3();
    }
    return bf.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3);
  },
  getNormal: function (bf) {
    return Triangle.getNormal(this.a, this.b, this.c, bf);
  },
  getPlane: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Triangle: .getPlane() target is now required");
      bf = new Vector3();
    }
    return bf.setFromCoplanarPoints(this.a, this.b, this.c);
  },
  getBarycoord: function (bf, bg) {
    return Triangle.getBarycoord(bf, this.a, this.b, this.c, bg);
  },
  getUV: function (bf, bg, bh, bi, bF) {
    return Triangle.getUV(bf, this.a, this.b, this.c, bg, bh, bi, bF);
  },
  containsPoint: function (bf) {
    return Triangle.containsPoint(bf, this.a, this.b, this.c);
  },
  isFrontFacing: function (bf) {
    return Triangle.isFrontFacing(this.a, this.b, this.c, bf);
  },
  intersectsBox: function (bf) {
    return bf.intersectsTriangle(this);
  },
  closestPointToPoint: (KF = new Vector3(), KG = new Vector3(), KH = new Vector3(), KI = new Vector3(), KJ = new Vector3(), KK = new Vector3(), function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Triangle: .closestPointToPoint() target is now required");
      bg = new Vector3();
    }
    var bh;
    var bi;
    var bF = this.a;
    var bG = this.b;
    var bH = this.c;
    KF.subVectors(bG, bF);
    KG.subVectors(bH, bF);
    KI.subVectors(bf, bF);
    var bI = KF.dot(KI);
    var bJ = KG.dot(KI);
    if (bI <= 0 && bJ <= 0) {
      return bg.copy(bF);
    }
    KJ.subVectors(bf, bG);
    var bK = KF.dot(KJ);
    var bL = KG.dot(KJ);
    if (bK >= 0 && bL <= bK) {
      return bg.copy(bG);
    }
    var bM = bI * bL - bK * bJ;
    if (bM <= 0 && bI >= 0 && bK <= 0) {
      bh = bI / (bI - bK);
      return bg.copy(bF).addScaledVector(KF, bh);
    }
    KK.subVectors(bf, bH);
    var bN = KF.dot(KK);
    var bO = KG.dot(KK);
    if (bO >= 0 && bN <= bO) {
      return bg.copy(bH);
    }
    var bP = bN * bJ - bI * bO;
    if (bP <= 0 && bJ >= 0 && bO <= 0) {
      bi = bJ / (bJ - bO);
      return bg.copy(bF).addScaledVector(KG, bi);
    }
    var bQ = bK * bO - bN * bL;
    if (bQ <= 0 && bL - bK >= 0 && bN - bO >= 0) {
      KH.subVectors(bH, bG);
      bi = (bL - bK) / (bL - bK + (bN - bO));
      return bg.copy(bG).addScaledVector(KH, bi);
    }
    var bR = 1 / (bQ + bP + bM);
    bh = bP * bR;
    bi = bM * bR;
    return bg.copy(bF).addScaledVector(KF, bh).addScaledVector(KG, bi);
  }),
  equals: function (bf) {
    return bf.a.equals(this.a) && bf.b.equals(this.b) && bf.c.equals(this.c);
  }
});
MeshBasicMaterial.prototype = Object.create(Material.prototype);
MeshBasicMaterial.prototype.constructor = MeshBasicMaterial;
MeshBasicMaterial.prototype.isMeshBasicMaterial = true;
MeshBasicMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.map = bf.map;
  this.lightMap = bf.lightMap;
  this.lightMapIntensity = bf.lightMapIntensity;
  this.aoMap = bf.aoMap;
  this.aoMapIntensity = bf.aoMapIntensity;
  this.specularMap = bf.specularMap;
  this.alphaMap = bf.alphaMap;
  this.envMap = bf.envMap;
  this.combine = bf.combine;
  this.reflectivity = bf.reflectivity;
  this.refractionRatio = bf.refractionRatio;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.wireframeLinecap = bf.wireframeLinecap;
  this.wireframeLinejoin = bf.wireframeLinejoin;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  return this;
};
Mesh.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Mesh,
  isMesh: true,
  setDrawMode: function (bf) {
    this.drawMode = bf;
  },
  copy: function (bf) {
    Object3D.prototype.copy.call(this, bf);
    this.drawMode = bf.drawMode;
    if (bf.morphTargetInfluences !== undefined) {
      this.morphTargetInfluences = bf.morphTargetInfluences.slice();
    }
    if (bf.morphTargetDictionary !== undefined) {
      this.morphTargetDictionary = Object.assign({}, bf.morphTargetDictionary);
    }
    return this;
  },
  updateMorphTargets: function () {
    var bf;
    var bg;
    var bh;
    var bi = this.geometry;
    if (bi.isBufferGeometry) {
      var bF = bi.morphAttributes;
      var bG = Object.keys(bF);
      if (bG.length > 0) {
        var bH = bF[bG[0]];
        if (bH !== undefined) {
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          bf = 0;
          bg = bH.length;
          this.morphTargetInfluences = [];
          this.morphTargetDictionary = {};
          bf = 0;
          bg = bH.length;
          for (; bf < bg; bf++) {
            bh = bH[bf].name || String(bf);
            this.morphTargetInfluences.push(0);
            this.morphTargetDictionary[bh] = bf;
          }
        }
      }
    } else {
      var bI = bi.morphTargets;
      if (bI !== undefined && bI.length > 0) {
        console.error("THREE.Mesh.updateMorphTargets() no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
      }
    }
  },
  raycast: function () {
    var bf = new Matrix4();
    var bg = new Ray();
    var bh = new Sphere();
    var bi = new Vector3();
    var bF = new Vector3();
    var bG = new Vector3();
    var bH = new Vector3();
    var bI = new Vector3();
    var bJ = new Vector3();
    var bK = new Vector3();
    var bL = new Vector3();
    var bM = new Vector3();
    var bN = new Vector2();
    var bO = new Vector2();
    var bP = new Vector2();
    var bQ = new Vector3();
    var bR = new Vector3();
    function bS(bf, bg, bh, bi, bF, bG, bH, bI) {
      if ((bg.side === BackSide ? bi.intersectTriangle(bH, bG, bF, true, bI) : bi.intersectTriangle(bF, bG, bH, bg.side !== DoubleSide, bI)) === null) {
        return null;
      }
      bR.copy(bI);
      bR.applyMatrix4(bf.matrixWorld);
      var bJ = bh.ray.origin.distanceTo(bR);
      if (bJ < bh.near || bJ > bh.far) {
        return null;
      } else {
        return {
          distance: bJ,
          point: bR.clone(),
          object: bf
        };
      }
    }
    function bT(bf, bg, bh, bR, bT, bU, bV, bW, bX, bY) {
      bi.fromBufferAttribute(bT, bW);
      bF.fromBufferAttribute(bT, bX);
      bG.fromBufferAttribute(bT, bY);
      var bZ = bf.morphTargetInfluences;
      if (bg.morphTargets && bU && bZ) {
        bK.set(0, 0, 0);
        bL.set(0, 0, 0);
        bM.set(0, 0, 0);
        for (var c0 = 0, c1 = bU.length; c0 < c1; c0++) {
          var c2 = bZ[c0];
          var c3 = bU[c0];
          if (c2 !== 0) {
            bH.fromBufferAttribute(c3, bW);
            bI.fromBufferAttribute(c3, bX);
            bJ.fromBufferAttribute(c3, bY);
            bK.addScaledVector(bH.sub(bi), c2);
            bL.addScaledVector(bI.sub(bF), c2);
            bM.addScaledVector(bJ.sub(bG), c2);
          }
        }
        bi.add(bK);
        bF.add(bL);
        bG.add(bM);
      }
      var c4 = bS(bf, bg, bh, bR, bi, bF, bG, bQ);
      if (c4) {
        if (bV) {
          bN.fromBufferAttribute(bV, bW);
          bO.fromBufferAttribute(bV, bX);
          bP.fromBufferAttribute(bV, bY);
          c4.uv = Triangle.getUV(bQ, bi, bF, bG, bN, bO, bP, new Vector2());
        }
        var c5 = new Face3(bW, bX, bY);
        Triangle.getNormal(bi, bF, bG, c5.normal);
        c4.face = c5;
      }
      return c4;
    }
    return function (bi, bF) {
      var bG;
      var bH = this.geometry;
      var bI = this.material;
      var bJ = this.matrixWorld;
      if (bI !== undefined && (bH.boundingSphere === null && bH.computeBoundingSphere(), bh.copy(bH.boundingSphere), bh.applyMatrix4(bJ), bi.ray.intersectsSphere(bh) !== false && (bf.getInverse(bJ), bg.copy(bi.ray).applyMatrix4(bf), bH.boundingBox === null || bg.intersectsBox(bH.boundingBox) !== false))) {
        if (bH.isBufferGeometry) {
          var bK;
          var bL;
          var bM;
          var bR;
          var bU;
          var bV;
          var bW;
          var bX;
          var bY;
          var bZ = bH.index;
          var c0 = bH.attributes.position;
          var c1 = bH.morphAttributes.position;
          var c2 = bH.attributes.uv;
          var c3 = bH.groups;
          var c4 = bH.drawRange;
          if (bZ !== null) {
            if (Array.isArray(bI)) {
              bR = 0;
              bV = c3.length;
              bR = 0;
              bV = c3.length;
              for (; bR < bV; bR++) {
                bY = bI[(bX = c3[bR]).materialIndex];
                bU = Math.max(bX.start, c4.start);
                bW = Math.min(bX.start + bX.count, c4.start + c4.count);
                bY = bI[(bX = c3[bR]).materialIndex];
                bU = Math.max(bX.start, c4.start);
                bW = Math.min(bX.start + bX.count, c4.start + c4.count);
                for (; bU < bW; bU += 3) {
                  bK = bZ.getX(bU);
                  bL = bZ.getX(bU + 1);
                  bM = bZ.getX(bU + 2);
                  if (bG = bT(this, bY, bi, bg, c0, c1, c2, bK, bL, bM)) {
                    bG.faceIndex = Math.floor(bU / 3);
                    bG.face.materialIndex = bX.materialIndex;
                    bF.push(bG);
                  }
                }
              }
            } else {
              bR = Math.max(0, c4.start);
              bV = Math.min(bZ.count, c4.start + c4.count);
              bR = Math.max(0, c4.start);
              bV = Math.min(bZ.count, c4.start + c4.count);
              for (; bR < bV; bR += 3) {
                bK = bZ.getX(bR);
                bL = bZ.getX(bR + 1);
                bM = bZ.getX(bR + 2);
                if (bG = bT(this, bI, bi, bg, c0, c1, c2, bK, bL, bM)) {
                  bG.faceIndex = Math.floor(bR / 3);
                  bF.push(bG);
                }
              }
            }
          } else if (c0 !== undefined) {
            if (Array.isArray(bI)) {
              bR = 0;
              bV = c3.length;
              bR = 0;
              bV = c3.length;
              for (; bR < bV; bR++) {
                bY = bI[(bX = c3[bR]).materialIndex];
                bU = Math.max(bX.start, c4.start);
                bW = Math.min(bX.start + bX.count, c4.start + c4.count);
                bY = bI[(bX = c3[bR]).materialIndex];
                bU = Math.max(bX.start, c4.start);
                bW = Math.min(bX.start + bX.count, c4.start + c4.count);
                for (; bU < bW; bU += 3) {
                  if (bG = bT(this, bY, bi, bg, c0, c1, c2, bK = bU, bL = bU + 1, bM = bU + 2)) {
                    bG.faceIndex = Math.floor(bU / 3);
                    bG.face.materialIndex = bX.materialIndex;
                    bF.push(bG);
                  }
                }
              }
            } else {
              bR = Math.max(0, c4.start);
              bV = Math.min(c0.count, c4.start + c4.count);
              bR = Math.max(0, c4.start);
              bV = Math.min(c0.count, c4.start + c4.count);
              for (; bR < bV; bR += 3) {
                if (bG = bT(this, bI, bi, bg, c0, c1, c2, bK = bR, bL = bR + 1, bM = bR + 2)) {
                  bG.faceIndex = Math.floor(bR / 3);
                  bF.push(bG);
                }
              }
            }
          }
        } else if (bH.isGeometry) {
          var c5;
          var c6;
          var c7;
          var c8;
          var c9 = Array.isArray(bI);
          var ca = bH.vertices;
          var cb = bH.faces;
          var cc = bH.faceVertexUvs[0];
          if (cc.length > 0) {
            c8 = cc;
          }
          for (var cd = 0, ce = cb.length; cd < ce; cd++) {
            var cf = cb[cd];
            var cg = c9 ? bI[cf.materialIndex] : bI;
            if (cg !== undefined && (c5 = ca[cf.a], c6 = ca[cf.b], c7 = ca[cf.c], bG = bS(this, cg, bi, bg, c5, c6, c7, bQ))) {
              if (c8 && c8[cd]) {
                var ch = c8[cd];
                bN.copy(ch[0]);
                bO.copy(ch[1]);
                bP.copy(ch[2]);
                bG.uv = Triangle.getUV(bQ, c5, c6, c7, bN, bO, bP, new Vector2());
              }
              bG.face = cf;
              bG.faceIndex = cd;
              bF.push(bG);
            }
          }
        }
      }
    };
  }(),
  clone: function () {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
CubeTexture.prototype = Object.create(Texture.prototype);
CubeTexture.prototype.constructor = CubeTexture;
CubeTexture.prototype.isCubeTexture = true;
Object.defineProperty(CubeTexture.prototype, "images", {
  get: function () {
    return this.image;
  },
  set: function (bf) {
    this.image = bf;
  }
});
DataTexture2DArray.prototype = Object.create(Texture.prototype);
DataTexture2DArray.prototype.constructor = DataTexture2DArray;
DataTexture2DArray.prototype.isDataTexture2DArray = true;
DataTexture3D.prototype = Object.create(Texture.prototype);
DataTexture3D.prototype.constructor = DataTexture3D;
DataTexture3D.prototype.isDataTexture3D = true;
var Sx = new Texture();
var Sy = new DataTexture2DArray();
var Sz = new DataTexture3D();
var SA = new CubeTexture();
var SB = [];
var SC = [];
var SD = new Float32Array(16);
var SE = new Float32Array(9);
var SF = new Float32Array(4);
function SG(bf, bg, bh) {
  var bi = bf[0];
  if (bi <= 0 || bi > 0) {
    return bf;
  }
  var bF = bg * bh;
  var bG = SB[bF];
  if (bG === undefined) {
    bG = new Float32Array(bF);
    SB[bF] = bG;
  }
  if (bg !== 0) {
    bi.toArray(bG, 0);
    for (var bH = 1, bI = 0; bH !== bg; ++bH) {
      bI += bh;
      bf[bH].toArray(bG, bI);
    }
  }
  return bG;
}
function SP(bf, bg) {
  if (bf.length !== bg.length) {
    return false;
  }
  for (var bh = 0, bi = bf.length; bh < bi; bh++) {
    if (bf[bh] !== bg[bh]) {
      return false;
    }
  }
  return true;
}
function SU(bf, bg) {
  for (var bh = 0, bi = bg.length; bh < bi; bh++) {
    bf[bh] = bg[bh];
  }
}
function SZ(bf, bg) {
  var bh = SC[bg];
  if (bh === undefined) {
    bh = new Int32Array(bg);
    SC[bg] = bh;
  }
  for (var bi = 0; bi !== bg; ++bi) {
    bh[bi] = bf.allocateTextureUnit();
  }
  return bh;
}
function T4(bf, bg) {
  var bh = this.cache;
  if (bh[0] !== bg) {
    bf.uniform1f(this.addr, bg);
    bh[0] = bg;
  }
}
function T8(bf, bg) {
  var bh = this.cache;
  if (bg.x !== undefined) {
    if (bh[0] !== bg.x || bh[1] !== bg.y) {
      bf.uniform2f(this.addr, bg.x, bg.y);
      bh[0] = bg.x;
      bh[1] = bg.y;
    }
  } else {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniform2fv(this.addr, bg);
    SU(bh, bg);
  }
}
function Tc(bf, bg) {
  var bh = this.cache;
  if (bg.x !== undefined) {
    if (bh[0] !== bg.x || bh[1] !== bg.y || bh[2] !== bg.z) {
      bf.uniform3f(this.addr, bg.x, bg.y, bg.z);
      bh[0] = bg.x;
      bh[1] = bg.y;
      bh[2] = bg.z;
    }
  } else if (bg.r !== undefined) {
    if (bh[0] !== bg.r || bh[1] !== bg.g || bh[2] !== bg.b) {
      bf.uniform3f(this.addr, bg.r, bg.g, bg.b);
      bh[0] = bg.r;
      bh[1] = bg.g;
      bh[2] = bg.b;
    }
  } else {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniform3fv(this.addr, bg);
    SU(bh, bg);
  }
}
function Tg(bf, bg) {
  var bh = this.cache;
  if (bg.x !== undefined) {
    if (bh[0] !== bg.x || bh[1] !== bg.y || bh[2] !== bg.z || bh[3] !== bg.w) {
      bf.uniform4f(this.addr, bg.x, bg.y, bg.z, bg.w);
      bh[0] = bg.x;
      bh[1] = bg.y;
      bh[2] = bg.z;
      bh[3] = bg.w;
    }
  } else {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniform4fv(this.addr, bg);
    SU(bh, bg);
  }
}
function Tk(bf, bg) {
  var bh = this.cache;
  var bi = bg.elements;
  if (bi === undefined) {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniformMatrix2fv(this.addr, false, bg);
    SU(bh, bg);
  } else {
    if (SP(bh, bi)) {
      return;
    }
    SF.set(bi);
    bf.uniformMatrix2fv(this.addr, false, SF);
    SU(bh, bi);
  }
}
function Tp(bf, bg) {
  var bh = this.cache;
  var bi = bg.elements;
  if (bi === undefined) {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniformMatrix3fv(this.addr, false, bg);
    SU(bh, bg);
  } else {
    if (SP(bh, bi)) {
      return;
    }
    SE.set(bi);
    bf.uniformMatrix3fv(this.addr, false, SE);
    SU(bh, bi);
  }
}
function Tu(bf, bg) {
  var bh = this.cache;
  var bi = bg.elements;
  if (bi === undefined) {
    if (SP(bh, bg)) {
      return;
    }
    bf.uniformMatrix4fv(this.addr, false, bg);
    SU(bh, bg);
  } else {
    if (SP(bh, bi)) {
      return;
    }
    SD.set(bi);
    bf.uniformMatrix4fv(this.addr, false, SD);
    SU(bh, bi);
  }
}
function Tz(bf, bg, bh) {
  var bi = this.cache;
  var bF = bh.allocateTextureUnit();
  if (bi[0] !== bF) {
    bf.uniform1i(this.addr, bF);
    bi[0] = bF;
  }
  bh.safeSetTexture2D(bg || Sx, bF);
}
function TF(bf, bg, bh) {
  var bi = this.cache;
  var bF = bh.allocateTextureUnit();
  if (bi[0] !== bF) {
    bf.uniform1i(this.addr, bF);
    bi[0] = bF;
  }
  bh.setTexture2DArray(bg || Sy, bF);
}
function TL(bf, bg, bh) {
  var bi = this.cache;
  var bF = bh.allocateTextureUnit();
  if (bi[0] !== bF) {
    bf.uniform1i(this.addr, bF);
    bi[0] = bF;
  }
  bh.setTexture3D(bg || Sz, bF);
}
function TR(bf, bg, bh) {
  var bi = this.cache;
  var bF = bh.allocateTextureUnit();
  if (bi[0] !== bF) {
    bf.uniform1i(this.addr, bF);
    bi[0] = bF;
  }
  bh.safeSetTextureCube(bg || SA, bF);
}
function TX(bf, bg) {
  var bh = this.cache;
  if (bh[0] !== bg) {
    bf.uniform1i(this.addr, bg);
    bh[0] = bg;
  }
}
function U1(bf, bg) {
  var bh = this.cache;
  if (!SP(bh, bg)) {
    bf.uniform2iv(this.addr, bg);
    SU(bh, bg);
  }
}
function U5(bf, bg) {
  var bh = this.cache;
  if (!SP(bh, bg)) {
    bf.uniform3iv(this.addr, bg);
    SU(bh, bg);
  }
}
function U9(bf, bg) {
  var bh = this.cache;
  if (!SP(bh, bg)) {
    bf.uniform4iv(this.addr, bg);
    SU(bh, bg);
  }
}
function Ud(bf, bg) {
  bf.uniform1fv(this.addr, bg);
}
function Ug(bf, bg) {
  bf.uniform1iv(this.addr, bg);
}
function Uj(bf, bg) {
  bf.uniform2iv(this.addr, bg);
}
function Um(bf, bg) {
  bf.uniform3iv(this.addr, bg);
}
function Up(bf, bg) {
  bf.uniform4iv(this.addr, bg);
}
function Us(bf, bg) {
  var bh = SG(bg, this.size, 2);
  bf.uniform2fv(this.addr, bh);
}
function Uw(bf, bg) {
  var bh = SG(bg, this.size, 3);
  bf.uniform3fv(this.addr, bh);
}
function UA(bf, bg) {
  var bh = SG(bg, this.size, 4);
  bf.uniform4fv(this.addr, bh);
}
function UE(bf, bg) {
  var bh = SG(bg, this.size, 4);
  bf.uniformMatrix2fv(this.addr, false, bh);
}
function UI(bf, bg) {
  var bh = SG(bg, this.size, 9);
  bf.uniformMatrix3fv(this.addr, false, bh);
}
function UM(bf, bg) {
  var bh = SG(bg, this.size, 16);
  bf.uniformMatrix4fv(this.addr, false, bh);
}
function UQ(bf, bg, bh) {
  var bi = bg.length;
  var bF = SZ(bh, bi);
  bf.uniform1iv(this.addr, bF);
  for (var bG = 0; bG !== bi; ++bG) {
    bh.safeSetTexture2D(bg[bG] || Sx, bF[bG]);
  }
}
function UX(bf, bg, bh) {
  var bi = bg.length;
  var bF = SZ(bh, bi);
  bf.uniform1iv(this.addr, bF);
  for (var bG = 0; bG !== bi; ++bG) {
    bh.safeSetTextureCube(bg[bG] || SA, bF[bG]);
  }
}
function V4(bf, bg, bh) {
  this.id = bf;
  this.addr = bh;
  this.cache = [];
  this.setValue = function (bf) {
    switch (bf) {
      case 5126:
        return T4;
      case 35664:
        return T8;
      case 35665:
        return Tc;
      case 35666:
        return Tg;
      case 35674:
        return Tk;
      case 35675:
        return Tp;
      case 35676:
        return Tu;
      case 35678:
      case 36198:
        return Tz;
      case 35679:
        return TL;
      case 35680:
        return TR;
      case 36289:
        return TF;
      case 5124:
      case 35670:
        return TX;
      case 35667:
      case 35671:
        return U1;
      case 35668:
      case 35672:
        return U5;
      case 35669:
      case 35673:
        return U9;
    }
  }(bg.type);
}
function V9(bf, bg, bh) {
  this.id = bf;
  this.addr = bh;
  this.cache = [];
  this.size = bg.size;
  this.setValue = function (bf) {
    switch (bf) {
      case 5126:
        return Ud;
      case 35664:
        return Us;
      case 35665:
        return Uw;
      case 35666:
        return UA;
      case 35674:
        return UE;
      case 35675:
        return UI;
      case 35676:
        return UM;
      case 35678:
        return UQ;
      case 35680:
        return UX;
      case 5124:
      case 35670:
        return Ug;
      case 35667:
      case 35671:
        return Uj;
      case 35668:
      case 35672:
        return Um;
      case 35669:
      case 35673:
        return Up;
    }
  }(bg.type);
}
function Ve(bf) {
  this.id = bf;
  this.seq = [];
  this.map = {};
}
V9.prototype.updateCache = function (bf) {
  var bg = this.cache;
  if (bf instanceof Float32Array && bg.length !== bf.length) {
    this.cache = new Float32Array(bf.length);
  }
  SU(bg, bf);
};
Ve.prototype.setValue = function (bf, bg, bh) {
  for (var bi = this.seq, bF = 0, bG = bi.length; bF !== bG; ++bF) {
    var bH = bi[bF];
    bH.setValue(bf, bg[bH.id], bh);
  }
};
var Vp = /([\w\d_]+)(\])?(\[|\.)?/g;
function Vq(bf, bg) {
  bf.seq.push(bg);
  bf.map[bg.id] = bg;
}
function Vt(bf, bg, bh) {
  var bi = bf.name;
  var bF = bi.length;
  for (Vp.lastIndex = 0;;) {
    var bG = Vp.exec(bi);
    var bH = Vp.lastIndex;
    var bI = bG[1];
    var bJ = bG[2] === "]";
    var bK = bG[3];
    if (bJ) {
      bI |= 0;
    }
    if (bK === undefined || bK === "[" && bH + 2 === bF) {
      Vq(bh, bK === undefined ? new V4(bI, bf, bg) : new V9(bI, bf, bg));
      break;
    }
    var bL = bh.map[bI];
    if (bL === undefined) {
      Vq(bh, bL = new Ve(bI));
    }
    bh = bL;
  }
}
function VF(bf, bg) {
  this.seq = [];
  this.map = {};
  for (var bh = bf.getProgramParameter(bg, 35718), bi = 0; bi < bh; ++bi) {
    var bF = bf.getActiveUniform(bg, bi);
    Vt(bF, bf.getUniformLocation(bg, bF.name), this);
  }
}
function VL(bf, bg, bh, bi) {
  var bF = bf.createShader(bg);
  bf.shaderSource(bF, bh);
  bf.compileShader(bF);
  if (bi === true) {
    if (bf.getShaderParameter(bF, 35713) === false) {
      console.error("THREE.WebGLShader: Shader couldn't compile.");
    }
    if (bf.getShaderInfoLog(bF) !== "") {
      console.warn("THREE.WebGLShader: gl.getShaderInfoLog()", bg === 35633 ? "vertex" : "fragment", bf.getShaderInfoLog(bF), function (bf) {
        for (var bg = bf.split("\n"), bh = 0; bh < bg.length; bh++) {
          bg[bh] = bh + 1 + ": " + bg[bh];
        }
        return bg.join("\n");
      }(bh));
    }
  }
  return bF;
}
VF.prototype.setValue = function (bf, bg, bh, bi) {
  var bF = this.map[bg];
  if (bF !== undefined) {
    bF.setValue(bf, bh, bi);
  }
};
VF.prototype.setOptional = function (bf, bg, bh) {
  var bi = bg[bh];
  if (bi !== undefined) {
    this.setValue(bf, bh, bi);
  }
};
VF.upload = function (bf, bg, bh, bi) {
  for (var bF = 0, bG = bg.length; bF !== bG; ++bF) {
    var bH = bg[bF];
    var bI = bh[bH.id];
    if (bI.needsUpdate !== false) {
      bH.setValue(bf, bI.value, bi);
    }
  }
};
VF.seqWithValue = function (bf, bg) {
  for (var bh = [], bi = 0, bF = bf.length; bi !== bF; ++bi) {
    var bG = bf[bi];
    if (bG.id in bg) {
      bh.push(bG);
    }
  }
  return bh;
};
var Wh = 0;
function Wi(bf) {
  switch (bf) {
    case LinearEncoding:
      return ["Linear", "( value )"];
    case sRGBEncoding:
      return ["sRGB", "( value )"];
    case RGBEEncoding:
      return ["RGBE", "( value )"];
    case RGBM7Encoding:
      return ["RGBM", "( value, 7.0 )"];
    case RGBM16Encoding:
      return ["RGBM", "( value, 16.0 )"];
    case RGBDEncoding:
      return ["RGBD", "( value, 256.0 )"];
    case GammaEncoding:
      return ["Gamma", "( value, float( GAMMA_FACTOR ) )"];
    default:
      throw new Error("unsupported encoding: " + bf);
  }
}
function Wk(bf, bg) {
  var bh = Wi(bg);
  return "vec4 " + bf + "( vec4 value ) { return " + bh[0] + "ToLinear" + bh[1] + "; }";
}
function Wo(bf, bg) {
  var bh;
  switch (bg) {
    case LinearToneMapping:
      bh = "Linear";
      break;
    case ReinhardToneMapping:
      bh = "Reinhard";
      break;
    case Uncharted2ToneMapping:
      bh = "Uncharted2";
      break;
    case CineonToneMapping:
      bh = "OptimizedCineon";
      break;
    case ACESFilmicToneMapping:
      bh = "ACESFilmic";
      break;
    default:
      throw new Error("unsupported toneMapping: " + bg);
  }
  return "vec3 " + bf + "( vec3 color ) { return " + bh + "ToneMapping( color ); }";
}
function Ws(bf) {
  return bf !== "";
}
function Wu(bf, bg) {
  return bf.replace(/NUM_DIR_LIGHTS/g, bg.numDirLights).replace(/NUM_SPOT_LIGHTS/g, bg.numSpotLights).replace(/NUM_RECT_AREA_LIGHTS/g, bg.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, bg.numPointLights).replace(/NUM_HEMI_LIGHTS/g, bg.numHemiLights);
}
function Wx(bf, bg) {
  return bf.replace(/NUM_CLIPPING_PLANES/g, bg.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, bg.numClippingPlanes - bg.numClipIntersection);
}
function WA(bf) {
  return bf.replace(/^[ \t]*#include +<([\w\d.\/]+)>/gm, function (bf, bg) {
    var bh = ShaderChunk[bg];
    if (bh === undefined) {
      throw new Error("Can not resolve #include <" + bg + ">");
    }
    return WA(bh);
  });
}
function WF(bf) {
  return bf.replace(/#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g, function (bf, bg, bh, bi) {
    for (var bF = "", bG = parseInt(bg); bG < parseInt(bh); bG++) {
      bF += bi.replace(/\[ i \]/g, "[ " + bG + " ]");
    }
    return bF;
  });
}
function WN(bf, bg, bh, bi, bF, bG, bH, bI) {
  var bJ = bf.context;
  var bK = bi.defines;
  var bL = bF.vertexShader;
  var bM = bF.fragmentShader;
  var bN = "SHADOWMAP_TYPE_BASIC";
  if (bG.shadowMapType === PCFShadowMap) {
    bN = "SHADOWMAP_TYPE_PCF";
  } else if (bG.shadowMapType === PCFSoftShadowMap) {
    bN = "SHADOWMAP_TYPE_PCF_SOFT";
  }
  var bO = "ENVMAP_TYPE_CUBE";
  var bP = "ENVMAP_MODE_REFLECTION";
  var bQ = "ENVMAP_BLENDING_MULTIPLY";
  if (bG.envMap) {
    switch (bi.envMap.mapping) {
      case CubeReflectionMapping:
      case CubeRefractionMapping:
        bO = "ENVMAP_TYPE_CUBE";
        break;
      case CubeUVReflectionMapping:
      case CubeUVRefractionMapping:
        bO = "ENVMAP_TYPE_CUBE_UV";
        break;
      case EquirectangularReflectionMapping:
      case EquirectangularRefractionMapping:
        bO = "ENVMAP_TYPE_EQUIREC";
        break;
      case SphericalReflectionMapping:
        bO = "ENVMAP_TYPE_SPHERE";
    }
    switch (bi.envMap.mapping) {
      case CubeRefractionMapping:
      case EquirectangularRefractionMapping:
        bP = "ENVMAP_MODE_REFRACTION";
    }
    switch (bi.combine) {
      case MultiplyOperation:
        bQ = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case MixOperation:
        bQ = "ENVMAP_BLENDING_MIX";
        break;
      case AddOperation:
        bQ = "ENVMAP_BLENDING_ADD";
    }
  }
  var bT;
  var bU;
  var bV;
  var bW;
  var bX;
  var bY = bf.gammaFactor > 0 ? bf.gammaFactor : 1;
  var bZ = bH.isWebGL2 ? "" : function (bf, bg, bh) {
    return [(bf = bf || {}).derivatives || bg.envMapCubeUV || bg.bumpMap || bg.normalMap && !bg.objectSpaceNormalMap || bg.flatShading ? "#extension GL_OES_standard_derivatives : enable" : "", (bf.fragDepth || bg.logarithmicDepthBuffer) && bh.get("EXT_frag_depth") ? "#extension GL_EXT_frag_depth : enable" : "", bf.drawBuffers && bh.get("WEBGL_draw_buffers") ? "#extension GL_EXT_draw_buffers : require" : "", (bf.shaderTextureLOD || bg.envMap) && bh.get("EXT_shader_texture_lod") ? "#extension GL_EXT_shader_texture_lod : enable" : ""].filter(Ws).join("\n");
  }(bi.extensions, bG, bg);
  var c0 = function (bf) {
    var bg = [];
    for (var bh in bf) {
      var bi = bf[bh];
      if (bi !== false) {
        bg.push("#define " + bh + " " + bi);
      }
    }
    return bg.join("\n");
  }(bK);
  var c1 = bJ.createProgram();
  if (bi.isRawShaderMaterial) {
    if ((bT = [c0].filter(Ws).join("\n")).length > 0) {
      bT += "\n";
    }
    if ((bU = [bZ, c0].filter(Ws).join("\n")).length > 0) {
      bU += "\n";
    }
  } else {
    bT = ["precision " + bG.precision + " float;", "precision " + bG.precision + " int;", "#define SHADER_NAME " + bF.name, c0, bG.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "", "#define GAMMA_FACTOR " + bY, "#define MAX_BONES " + bG.maxBones, bG.useFog && bG.fog ? "#define USE_FOG" : "", bG.useFog && bG.fogExp ? "#define FOG_EXP2" : "", bG.map ? "#define USE_MAP" : "", bG.envMap ? "#define USE_ENVMAP" : "", bG.envMap ? "#define " + bP : "", bG.lightMap ? "#define USE_LIGHTMAP" : "", bG.aoMap ? "#define USE_AOMAP" : "", bG.emissiveMap ? "#define USE_EMISSIVEMAP" : "", bG.bumpMap ? "#define USE_BUMPMAP" : "", bG.normalMap ? "#define USE_NORMALMAP" : "", bG.normalMap && bG.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", bG.displacementMap && bG.supportsVertexTextures ? "#define USE_DISPLACEMENTMAP" : "", bG.specularMap ? "#define USE_SPECULARMAP" : "", bG.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", bG.metalnessMap ? "#define USE_METALNESSMAP" : "", bG.alphaMap ? "#define USE_ALPHAMAP" : "", bG.vertexTangents ? "#define USE_TANGENT" : "", bG.vertexColors ? "#define USE_COLOR" : "", bG.flatShading ? "#define FLAT_SHADED" : "", bG.skinning ? "#define USE_SKINNING" : "", bG.useVertexTexture ? "#define BONE_TEXTURE" : "", bG.morphTargets ? "#define USE_MORPHTARGETS" : "", bG.morphNormals && bG.flatShading === false ? "#define USE_MORPHNORMALS" : "", bG.doubleSided ? "#define DOUBLE_SIDED" : "", bG.flipSided ? "#define FLIP_SIDED" : "", bG.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", bG.shadowMapEnabled ? "#define " + bN : "", bG.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", bG.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", bG.logarithmicDepthBuffer && (bH.isWebGL2 || bg.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_TANGENT", "\tattribute vec4 tangent;", "#endif", "#ifdef USE_COLOR", "\tattribute vec3 color;", "#endif", "#ifdef USE_MORPHTARGETS", "\tattribute vec3 morphTarget0;", "\tattribute vec3 morphTarget1;", "\tattribute vec3 morphTarget2;", "\tattribute vec3 morphTarget3;", "\t#ifdef USE_MORPHNORMALS", "\t\tattribute vec3 morphNormal0;", "\t\tattribute vec3 morphNormal1;", "\t\tattribute vec3 morphNormal2;", "\t\tattribute vec3 morphNormal3;", "\t#else", "\t\tattribute vec3 morphTarget4;", "\t\tattribute vec3 morphTarget5;", "\t\tattribute vec3 morphTarget6;", "\t\tattribute vec3 morphTarget7;", "\t#endif", "#endif", "#ifdef USE_SKINNING", "\tattribute vec4 skinIndex;", "\tattribute vec4 skinWeight;", "#endif", "\n"].filter(Ws).join("\n");
    bU = [bZ, "precision " + bG.precision + " float;", "precision " + bG.precision + " int;", "#define SHADER_NAME " + bF.name, c0, bG.alphaTest ? "#define ALPHATEST " + bG.alphaTest + (bG.alphaTest % 1 ? "" : ".0") : "", "#define GAMMA_FACTOR " + bY, bG.useFog && bG.fog ? "#define USE_FOG" : "", bG.useFog && bG.fogExp ? "#define FOG_EXP2" : "", bG.map ? "#define USE_MAP" : "", bG.matcap ? "#define USE_MATCAP" : "", bG.envMap ? "#define USE_ENVMAP" : "", bG.envMap ? "#define " + bO : "", bG.envMap ? "#define " + bP : "", bG.envMap ? "#define " + bQ : "", bG.lightMap ? "#define USE_LIGHTMAP" : "", bG.aoMap ? "#define USE_AOMAP" : "", bG.emissiveMap ? "#define USE_EMISSIVEMAP" : "", bG.bumpMap ? "#define USE_BUMPMAP" : "", bG.normalMap ? "#define USE_NORMALMAP" : "", bG.normalMap && bG.objectSpaceNormalMap ? "#define OBJECTSPACE_NORMALMAP" : "", bG.specularMap ? "#define USE_SPECULARMAP" : "", bG.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", bG.metalnessMap ? "#define USE_METALNESSMAP" : "", bG.alphaMap ? "#define USE_ALPHAMAP" : "", bG.vertexTangents ? "#define USE_TANGENT" : "", bG.vertexColors ? "#define USE_COLOR" : "", bG.gradientMap ? "#define USE_GRADIENTMAP" : "", bG.flatShading ? "#define FLAT_SHADED" : "", bG.doubleSided ? "#define DOUBLE_SIDED" : "", bG.flipSided ? "#define FLIP_SIDED" : "", bG.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", bG.shadowMapEnabled ? "#define " + bN : "", bG.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", bG.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "", bG.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", bG.logarithmicDepthBuffer && (bH.isWebGL2 || bg.get("EXT_frag_depth")) ? "#define USE_LOGDEPTHBUF_EXT" : "", bG.envMap && (bH.isWebGL2 || bg.get("EXT_shader_texture_lod")) ? "#define TEXTURE_LOD_EXT" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", bG.toneMapping !== NoToneMapping ? "#define TONE_MAPPING" : "", bG.toneMapping !== NoToneMapping ? ShaderChunk.tonemapping_pars_fragment : "", bG.toneMapping !== NoToneMapping ? Wo("toneMapping", bG.toneMapping) : "", bG.dithering ? "#define DITHERING" : "", bG.outputEncoding || bG.mapEncoding || bG.matcapEncoding || bG.envMapEncoding || bG.emissiveMapEncoding ? ShaderChunk.encodings_pars_fragment : "", bG.mapEncoding ? Wk("mapTexelToLinear", bG.mapEncoding) : "", bG.matcapEncoding ? Wk("matcapTexelToLinear", bG.matcapEncoding) : "", bG.envMapEncoding ? Wk("envMapTexelToLinear", bG.envMapEncoding) : "", bG.emissiveMapEncoding ? Wk("emissiveMapTexelToLinear", bG.emissiveMapEncoding) : "", bG.outputEncoding ? (bV = "linearToOutputTexel", bW = bG.outputEncoding, bX = Wi(bW), "vec4 " + bV + "( vec4 value ) { return LinearTo" + bX[0] + bX[1] + "; }") : "", bG.depthPacking ? "#define DEPTH_PACKING " + bi.depthPacking : "", "\n"].filter(Ws).join("\n");
  }
  bL = Wx(bL = Wu(bL = WA(bL), bG), bG);
  bM = Wx(bM = Wu(bM = WA(bM), bG), bG);
  bL = WF(bL);
  bM = WF(bM);
  if (bH.isWebGL2 && !bi.isRawShaderMaterial) {
    var c2 = false;
    var c3 = /^\s*#version\s+300\s+es\s*\n/;
    if (bi.isShaderMaterial && bL.match(c3) !== null && bM.match(c3) !== null) {
      c2 = true;
      bL = bL.replace(c3, "");
      bM = bM.replace(c3, "");
    }
    bT = ["#version 300 es\n", "#define attribute in", "#define varying out", "#define texture2D texture"].join("\n") + "\n" + bT;
    bU = ["#version 300 es\n", "#define varying in", c2 ? "" : "out highp vec4 pc_fragColor;", c2 ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join("\n") + "\n" + bU;
  }
  var c4;
  var c5;
  var c6 = bU + bM;
  var c7 = VL(bJ, 35633, bT + bL, bf.debug.checkShaderErrors);
  var c8 = VL(bJ, 35632, c6, bf.debug.checkShaderErrors);
  bJ.attachShader(c1, c7);
  bJ.attachShader(c1, c8);
  if (bi.index0AttributeName !== undefined) {
    bJ.bindAttribLocation(c1, 0, bi.index0AttributeName);
  } else if (bG.morphTargets === true) {
    bJ.bindAttribLocation(c1, 0, "position");
  }
  bJ.linkProgram(c1);
  if (bf.debug.checkShaderErrors) {
    var c9 = bJ.getProgramInfoLog(c1).trim();
    var ca = bJ.getShaderInfoLog(c7).trim();
    var cb = bJ.getShaderInfoLog(c8).trim();
    var cc = true;
    var cd = true;
    if (bJ.getProgramParameter(c1, 35714) === false) {
      cc = false;
      console.error("THREE.WebGLProgram: shader error: ", bJ.getError(), "35715", bJ.getProgramParameter(c1, 35715), "gl.getProgramInfoLog", c9, ca, cb);
    } else if (c9 !== "") {
      console.warn("THREE.WebGLProgram: gl.getProgramInfoLog()", c9);
    } else if (ca === "" || cb === "") {
      cd = false;
    }
    if (cd) {
      this.diagnostics = {
        runnable: cc,
        material: bi,
        programLog: c9,
        vertexShader: {
          log: ca,
          prefix: bT
        },
        fragmentShader: {
          log: cb,
          prefix: bU
        }
      };
    }
  }
  bJ.deleteShader(c7);
  bJ.deleteShader(c8);
  this.getUniforms = function () {
    if (c4 === undefined) {
      c4 = new VF(bJ, c1, bI);
    }
    return c4;
  };
  this.getAttributes = function () {
    if (c5 === undefined) {
      c5 = function (bf, bg) {
        for (var bh = {}, bi = bf.getProgramParameter(bg, 35721), bF = 0; bF < bi; bF++) {
          var bG = bf.getActiveAttrib(bg, bF).name;
          bh[bG] = bf.getAttribLocation(bg, bG);
        }
        return bh;
      }(bJ, c1);
    }
    return c5;
  };
  this.destroy = function () {
    bJ.deleteProgram(c1);
    this.program = undefined;
  };
  Object.defineProperties(this, {
    uniforms: {
      get: function () {
        console.warn("THREE.WebGLProgram: .uniforms is now .getUniforms().");
        return this.getUniforms();
      }
    },
    attributes: {
      get: function () {
        console.warn("THREE.WebGLProgram: .attributes is now .getAttributes().");
        return this.getAttributes();
      }
    }
  });
  this.name = bF.name;
  this.id = Wh++;
  this.code = bh;
  this.usedTimes = 1;
  this.program = c1;
  this.vertexShader = c7;
  this.fragmentShader = c8;
  return this;
}
function XC(bf, bg, bh, bi) {
  var bF = [];
  var bG = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "phong",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite"
  };
  var bH = ["precision", "supportsVertexTextures", "map", "mapEncoding", "matcap", "matcapEncoding", "envMap", "envMapMode", "envMapEncoding", "lightMap", "aoMap", "emissiveMap", "emissiveMapEncoding", "bumpMap", "normalMap", "objectSpaceNormalMap", "displacementMap", "specularMap", "roughnessMap", "metalnessMap", "gradientMap", "alphaMap", "combine", "vertexColors", "vertexTangents", "fog", "useFog", "fogExp", "flatShading", "sizeAttenuation", "logarithmicDepthBuffer", "skinning", "maxBones", "useVertexTexture", "morphTargets", "morphNormals", "maxMorphTargets", "maxMorphNormals", "premultipliedAlpha", "numDirLights", "numPointLights", "numSpotLights", "numHemiLights", "numRectAreaLights", "shadowMapEnabled", "shadowMapType", "toneMapping", "physicallyCorrectLights", "alphaTest", "doubleSided", "flipSided", "numClippingPlanes", "numClipIntersection", "depthPacking", "dithering"];
  function bI(bf, bg) {
    var bh;
    if (bf) {
      if (bf.isTexture) {
        bh = bf.encoding;
      } else if (bf.isWebGLRenderTarget) {
        console.warn("THREE.WebGLPrograms.getTextureEncodingFromMap: don't use render targets as textures. Use their .texture property instead.");
        bh = bf.texture.encoding;
      }
    } else {
      bh = LinearEncoding;
    }
    if (bh === LinearEncoding && bg) {
      bh = GammaEncoding;
    }
    return bh;
  }
  this.getParameters = function (bg, bi, bF, bH, bJ, bK, bL) {
    var bM = bG[bg.type];
    var bN = bL.isSkinnedMesh ? function (bf) {
      var bg = bf.skeleton.bones;
      if (bh.floatVertexTextures) {
        return 1024;
      }
      var bi = bh.maxVertexUniforms;
      var bF = Math.floor((bi - 20) / 4);
      var bG = Math.min(bF, bg.length);
      if (bG < bg.length) {
        console.warn("THREE.WebGLRenderer: Skeleton has " + bg.length + " bones. This GPU supports " + bG + ".");
        return 0;
      } else {
        return bG;
      }
    }(bL) : 0;
    var bO = bh.precision;
    if (bg.precision !== null && (bO = bh.getMaxPrecision(bg.precision)) !== bg.precision) {
      console.warn("THREE.WebGLProgram.getParameters:", bg.precision, "not supported, using", bO, "instead.");
    }
    var bP = bf.getRenderTarget();
    return {
      shaderID: bM,
      precision: bO,
      supportsVertexTextures: bh.vertexTextures,
      outputEncoding: bI(bP ? bP.texture : null, bf.gammaOutput),
      map: !!bg.map,
      mapEncoding: bI(bg.map, bf.gammaInput),
      matcap: !!bg.matcap,
      matcapEncoding: bI(bg.matcap, bf.gammaInput),
      envMap: !!bg.envMap,
      envMapMode: bg.envMap && bg.envMap.mapping,
      envMapEncoding: bI(bg.envMap, bf.gammaInput),
      envMapCubeUV: !!bg.envMap && (bg.envMap.mapping === CubeUVReflectionMapping || bg.envMap.mapping === CubeUVRefractionMapping),
      lightMap: !!bg.lightMap,
      aoMap: !!bg.aoMap,
      emissiveMap: !!bg.emissiveMap,
      emissiveMapEncoding: bI(bg.emissiveMap, bf.gammaInput),
      bumpMap: !!bg.bumpMap,
      normalMap: !!bg.normalMap,
      objectSpaceNormalMap: bg.normalMapType === ObjectSpaceNormalMap,
      displacementMap: !!bg.displacementMap,
      roughnessMap: !!bg.roughnessMap,
      metalnessMap: !!bg.metalnessMap,
      specularMap: !!bg.specularMap,
      alphaMap: !!bg.alphaMap,
      gradientMap: !!bg.gradientMap,
      combine: bg.combine,
      vertexTangents: bg.normalMap && bg.vertexTangents,
      vertexColors: bg.vertexColors,
      fog: !!bH,
      useFog: bg.fog,
      fogExp: bH && bH.isFogExp2,
      flatShading: bg.flatShading,
      sizeAttenuation: bg.sizeAttenuation,
      logarithmicDepthBuffer: bh.logarithmicDepthBuffer,
      skinning: bg.skinning && bN > 0,
      maxBones: bN,
      useVertexTexture: bh.floatVertexTextures,
      morphTargets: bg.morphTargets,
      morphNormals: bg.morphNormals,
      maxMorphTargets: bf.maxMorphTargets,
      maxMorphNormals: bf.maxMorphNormals,
      numDirLights: bi.directional.length,
      numPointLights: bi.point.length,
      numSpotLights: bi.spot.length,
      numRectAreaLights: bi.rectArea.length,
      numHemiLights: bi.hemi.length,
      numClippingPlanes: bJ,
      numClipIntersection: bK,
      dithering: bg.dithering,
      shadowMapEnabled: bf.shadowMap.enabled && bL.receiveShadow && bF.length > 0,
      shadowMapType: bf.shadowMap.type,
      toneMapping: bf.toneMapping,
      physicallyCorrectLights: bf.physicallyCorrectLights,
      premultipliedAlpha: bg.premultipliedAlpha,
      alphaTest: bg.alphaTest,
      doubleSided: bg.side === DoubleSide,
      flipSided: bg.side === BackSide,
      depthPacking: bg.depthPacking !== undefined && bg.depthPacking
    };
  };
  this.getProgramCode = function (bg, bh) {
    var bi = [];
    if (bh.shaderID) {
      bi.push(bh.shaderID);
    } else {
      bi.push(bg.fragmentShader);
      bi.push(bg.vertexShader);
    }
    if (bg.defines !== undefined) {
      for (var bF in bg.defines) {
        bi.push(bF);
        bi.push(bg.defines[bF]);
      }
    }
    for (var bG = 0; bG < bH.length; bG++) {
      bi.push(bh[bH[bG]]);
    }
    bi.push(bg.onBeforeCompile.toString());
    bi.push(bf.gammaOutput);
    bi.push(bf.gammaFactor);
    return bi.join();
  };
  this.acquireProgram = function (bG, bH, bI, bJ) {
    for (var bK, bL = 0, bM = bF.length; bL < bM; bL++) {
      var bN = bF[bL];
      if (bN.code === bJ) {
        ++(bK = bN).usedTimes;
        break;
      }
    }
    if (bK === undefined) {
      bK = new WN(bf, bg, bJ, bG, bH, bI, bh, bi);
      bF.push(bK);
    }
    return bK;
  };
  this.releaseProgram = function (bf) {
    if (--bf.usedTimes == 0) {
      var bg = bF.indexOf(bf);
      bF[bg] = bF[bF.length - 1];
      bF.pop();
      bf.destroy();
    }
  };
  this.programs = bF;
}
function Yj() {
  var bf = new WeakMap();
  return {
    get: function (bg) {
      var bh = bf.get(bg);
      if (bh === undefined) {
        bh = {};
        bf.set(bg, bh);
      }
      return bh;
    },
    remove: function (bg) {
      bf.delete(bg);
    },
    update: function (bg, bh, bi) {
      bf.get(bg)[bh] = bi;
    },
    dispose: function () {
      bf = new WeakMap();
    }
  };
}
function Yr(bf, bg) {
  if (bf.groupOrder !== bg.groupOrder) {
    return bf.groupOrder - bg.groupOrder;
  } else if (bf.renderOrder !== bg.renderOrder) {
    return bf.renderOrder - bg.renderOrder;
  } else if (bf.program !== bg.program) {
    return bf.program.id - bg.program.id;
  } else if (bf.material.id !== bg.material.id) {
    return bf.material.id - bg.material.id;
  } else if (bf.z !== bg.z) {
    return bf.z - bg.z;
  } else {
    return bf.id - bg.id;
  }
}
function Yu(bf, bg) {
  if (bf.groupOrder !== bg.groupOrder) {
    return bf.groupOrder - bg.groupOrder;
  } else if (bf.renderOrder !== bg.renderOrder) {
    return bf.renderOrder - bg.renderOrder;
  } else if (bf.z !== bg.z) {
    return bg.z - bf.z;
  } else {
    return bf.id - bg.id;
  }
}
function Yx() {
  var bf = [];
  var bg = 0;
  var bh = [];
  var bi = [];
  var bF = {
    id: -1
  };
  function bG(bh, bi, bG, bH, bI, bJ) {
    var bK = bf[bg];
    if (bK === undefined) {
      bK = {
        id: bh.id,
        object: bh,
        geometry: bi,
        material: bG,
        program: bG.program || bF,
        groupOrder: bH,
        renderOrder: bh.renderOrder,
        z: bI,
        group: bJ
      };
      bf[bg] = bK;
    } else {
      bK.id = bh.id;
      bK.object = bh;
      bK.geometry = bi;
      bK.material = bG;
      bK.program = bG.program || bF;
      bK.groupOrder = bH;
      bK.renderOrder = bh.renderOrder;
      bK.z = bI;
      bK.group = bJ;
    }
    bg++;
    return bK;
  }
  return {
    opaque: bh,
    transparent: bi,
    init: function () {
      bg = 0;
      bh.length = 0;
      bi.length = 0;
    },
    push: function (bf, bg, bF, bH, bI, bJ) {
      var bK = bG(bf, bg, bF, bH, bI, bJ);
      (bF.transparent === true ? bi : bh).push(bK);
    },
    unshift: function (bf, bg, bF, bH, bI, bJ) {
      var bK = bG(bf, bg, bF, bH, bI, bJ);
      (bF.transparent === true ? bi : bh).unshift(bK);
    },
    sort: function () {
      if (bh.length > 1) {
        bh.sort(Yr);
      }
      if (bi.length > 1) {
        bi.sort(Yu);
      }
    }
  };
}
function YZ() {
  var bf = {};
  function bg(bh) {
    var bi = bh.target;
    bi.removeEventListener("dispose", bg);
    delete bf[bi.id];
  }
  return {
    get: function (bh, bi) {
      var bF;
      var bG = bf[bh.id];
      if (bG === undefined) {
        bF = new Yx();
        bf[bh.id] = {};
        bf[bh.id][bi.id] = bF;
        bh.addEventListener("dispose", bg);
      } else if ((bF = bG[bi.id]) === undefined) {
        bF = new Yx();
        bG[bi.id] = bF;
      }
      return bF;
    },
    dispose: function () {
      bf = {};
    }
  };
}
function Z8() {
  var bf = {};
  return {
    get: function (bg) {
      if (bf[bg.id] !== undefined) {
        return bf[bg.id];
      }
      var bh;
      switch (bg.type) {
        case "DirectionalLight":
          bh = {
            direction: new Vector3(),
            color: new Color(),
            shadow: false,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "SpotLight":
          bh = {
            position: new Vector3(),
            direction: new Vector3(),
            color: new Color(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
            shadow: false,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2()
          };
          break;
        case "PointLight":
          bh = {
            position: new Vector3(),
            color: new Color(),
            distance: 0,
            decay: 0,
            shadow: false,
            shadowBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Vector2(),
            shadowCameraNear: 1,
            shadowCameraFar: 1000
          };
          break;
        case "HemisphereLight":
          bh = {
            direction: new Vector3(),
            skyColor: new Color(),
            groundColor: new Color()
          };
          break;
        case "RectAreaLight":
          bh = {
            color: new Color(),
            position: new Vector3(),
            halfWidth: new Vector3(),
            halfHeight: new Vector3()
          };
      }
      bf[bg.id] = bh;
      return bh;
    }
  };
}
var Zc = 0;
function Zd() {
  for (var bf = new Z8(), bg = {
      id: Zc++,
      hash: {
        stateID: -1,
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        shadowsLength: -1
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      point: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: []
    }, bh = 0; bh < 9; bh++) {
    bg.probe.push(new Vector3());
  }
  var bi = new Vector3();
  var bF = new Matrix4();
  var bG = new Matrix4();
  return {
    setup: function (bh, bH, bI) {
      for (var bJ = 0, bK = 0, bL = 0, bM = 0; bM < 9; bM++) {
        bg.probe[bM].set(0, 0, 0);
      }
      for (var bN = 0, bO = 0, bP = 0, bQ = 0, bR = 0, bS = bI.matrixWorldInverse, bT = (bM = 0, bh.length); bM < bT; bM++) {
        var bU = bh[bM];
        var bV = bU.color;
        var bW = bU.intensity;
        var bX = bU.distance;
        var bY = bU.shadow && bU.shadow.map ? bU.shadow.map.texture : null;
        if (bU.isAmbientLight) {
          bJ += bV.r * bW;
          bK += bV.g * bW;
          bL += bV.b * bW;
        } else if (bU.isLightProbe) {
          for (var bZ = 0; bZ < 9; bZ++) {
            bg.probe[bZ].addScaledVector(bU.sh.coefficients[bZ], bW);
          }
        } else if (bU.isDirectionalLight) {
          (c1 = bf.get(bU)).color.copy(bU.color).multiplyScalar(bU.intensity);
          c1.direction.setFromMatrixPosition(bU.matrixWorld);
          bi.setFromMatrixPosition(bU.target.matrixWorld);
          c1.direction.sub(bi);
          c1.direction.transformDirection(bS);
          c1.shadow = bU.castShadow;
          if (bU.castShadow) {
            var c0 = bU.shadow;
            c1.shadowBias = c0.bias;
            c1.shadowRadius = c0.radius;
            c1.shadowMapSize = c0.mapSize;
          }
          bg.directionalShadowMap[bN] = bY;
          bg.directionalShadowMatrix[bN] = bU.shadow.matrix;
          bg.directional[bN] = c1;
          bN++;
        } else if (bU.isSpotLight) {
          (c1 = bf.get(bU)).position.setFromMatrixPosition(bU.matrixWorld);
          c1.position.applyMatrix4(bS);
          c1.color.copy(bV).multiplyScalar(bW);
          c1.distance = bX;
          c1.direction.setFromMatrixPosition(bU.matrixWorld);
          bi.setFromMatrixPosition(bU.target.matrixWorld);
          c1.direction.sub(bi);
          c1.direction.transformDirection(bS);
          c1.coneCos = Math.cos(bU.angle);
          c1.penumbraCos = Math.cos(bU.angle * (1 - bU.penumbra));
          c1.decay = bU.decay;
          c1.shadow = bU.castShadow;
          if (bU.castShadow) {
            c0 = bU.shadow;
            c1.shadowBias = c0.bias;
            c1.shadowRadius = c0.radius;
            c1.shadowMapSize = c0.mapSize;
          }
          bg.spotShadowMap[bP] = bY;
          bg.spotShadowMatrix[bP] = bU.shadow.matrix;
          bg.spot[bP] = c1;
          bP++;
        } else if (bU.isRectAreaLight) {
          (c1 = bf.get(bU)).color.copy(bV).multiplyScalar(bW);
          c1.position.setFromMatrixPosition(bU.matrixWorld);
          c1.position.applyMatrix4(bS);
          bG.identity();
          bF.copy(bU.matrixWorld);
          bF.premultiply(bS);
          bG.extractRotation(bF);
          c1.halfWidth.set(bU.width * 0.5, 0, 0);
          c1.halfHeight.set(0, bU.height * 0.5, 0);
          c1.halfWidth.applyMatrix4(bG);
          c1.halfHeight.applyMatrix4(bG);
          bg.rectArea[bQ] = c1;
          bQ++;
        } else if (bU.isPointLight) {
          (c1 = bf.get(bU)).position.setFromMatrixPosition(bU.matrixWorld);
          c1.position.applyMatrix4(bS);
          c1.color.copy(bU.color).multiplyScalar(bU.intensity);
          c1.distance = bU.distance;
          c1.decay = bU.decay;
          c1.shadow = bU.castShadow;
          if (bU.castShadow) {
            c0 = bU.shadow;
            c1.shadowBias = c0.bias;
            c1.shadowRadius = c0.radius;
            c1.shadowMapSize = c0.mapSize;
            c1.shadowCameraNear = c0.camera.near;
            c1.shadowCameraFar = c0.camera.far;
          }
          bg.pointShadowMap[bO] = bY;
          bg.pointShadowMatrix[bO] = bU.shadow.matrix;
          bg.point[bO] = c1;
          bO++;
        } else if (bU.isHemisphereLight) {
          var c1;
          (c1 = bf.get(bU)).direction.setFromMatrixPosition(bU.matrixWorld);
          c1.direction.transformDirection(bS);
          c1.direction.normalize();
          c1.skyColor.copy(bU.color).multiplyScalar(bW);
          c1.groundColor.copy(bU.groundColor).multiplyScalar(bW);
          bg.hemi[bR] = c1;
          bR++;
        }
      }
      bg.ambient[0] = bJ;
      bg.ambient[1] = bK;
      bg.ambient[2] = bL;
      bg.directional.length = bN;
      bg.spot.length = bP;
      bg.rectArea.length = bQ;
      bg.point.length = bO;
      bg.hemi.length = bR;
      bg.hash.stateID = bg.id;
      bg.hash.directionalLength = bN;
      bg.hash.pointLength = bO;
      bg.hash.spotLength = bP;
      bg.hash.rectAreaLength = bQ;
      bg.hash.hemiLength = bR;
      bg.hash.shadowsLength = bH.length;
    },
    state: bg
  };
}
function ZG() {
  var bf = new Zd();
  var bg = [];
  var bh = [];
  return {
    init: function () {
      bg.length = 0;
      bh.length = 0;
    },
    state: {
      lightsArray: bg,
      shadowsArray: bh,
      lights: bf
    },
    setupLights: function (bi) {
      bf.setup(bg, bh, bi);
    },
    pushLight: function (bf) {
      bg.push(bf);
    },
    pushShadow: function (bf) {
      bh.push(bf);
    }
  };
}
function ZN() {
  var bf = {};
  function bg(bh) {
    var bi = bh.target;
    bi.removeEventListener("dispose", bg);
    delete bf[bi.id];
  }
  return {
    get: function (bh, bi) {
      var bF;
      if (bf[bh.id] === undefined) {
        bF = new ZG();
        bf[bh.id] = {};
        bf[bh.id][bi.id] = bF;
        bh.addEventListener("dispose", bg);
      } else if (bf[bh.id][bi.id] === undefined) {
        bF = new ZG();
        bf[bh.id][bi.id] = bF;
      } else {
        bF = bf[bh.id][bi.id];
      }
      return bF;
    },
    dispose: function () {
      bf = {};
    }
  };
}
export function MeshDepthMaterial(bf) {
  Material.call(this);
  this.type = "MeshDepthMaterial";
  this.depthPacking = BasicDepthPacking;
  this.skinning = false;
  this.morphTargets = false;
  this.map = null;
  this.alphaMap = null;
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.fog = false;
  this.lights = false;
  this.setValues(bf);
}
export function MeshDistanceMaterial(bf) {
  Material.call(this);
  this.type = "MeshDistanceMaterial";
  this.referencePosition = new Vector3();
  this.nearDistance = 1;
  this.farDistance = 1000;
  this.skinning = false;
  this.morphTargets = false;
  this.map = null;
  this.alphaMap = null;
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.fog = false;
  this.lights = false;
  this.setValues(bf);
}
function ZZ(bf, bg, bh) {
  for (var bi = new Frustum(), bF = new Matrix4(), bG = new Vector2(), bH = new Vector2(bh, bh), bI = new Vector3(), bJ = new Vector3(), bK = 1, bL = 2, bM = 1 + (bK | bL), bN = new Array(bM), bO = new Array(bM), bP = {}, bQ = {
      0: BackSide,
      1: FrontSide,
      2: DoubleSide
    }, bS = [new Vector3(1, 0, 0), new Vector3(-1, 0, 0), new Vector3(0, 0, 1), new Vector3(0, 0, -1), new Vector3(0, 1, 0), new Vector3(0, -1, 0)], bW = [new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 1, 0), new Vector3(0, 0, 1), new Vector3(0, 0, -1)], bX = [new Vector4(), new Vector4(), new Vector4(), new Vector4(), new Vector4(), new Vector4()], bY = 0; bY !== bM; ++bY) {
    var bZ = (bY & bK) != 0;
    var c0 = (bY & bL) != 0;
    var c2 = new MeshDepthMaterial({
      depthPacking: RGBADepthPacking,
      morphTargets: bZ,
      skinning: c0
    });
    bN[bY] = c2;
    var c3 = new MeshDistanceMaterial({
      morphTargets: bZ,
      skinning: c0
    });
    bO[bY] = c3;
  }
  var c4 = this;
  function c5(bg, bh, bi, bF, bG, bH) {
    var bI = bg.geometry;
    var bJ = null;
    var bM = bN;
    var bR = bg.customDepthMaterial;
    if (bi) {
      bM = bO;
      bR = bg.customDistanceMaterial;
    }
    if (bR) {
      bJ = bR;
    } else {
      var bS = false;
      if (bh.morphTargets) {
        if (bI && bI.isBufferGeometry) {
          bS = bI.morphAttributes && bI.morphAttributes.position && bI.morphAttributes.position.length > 0;
        } else if (bI && bI.isGeometry) {
          bS = bI.morphTargets && bI.morphTargets.length > 0;
        }
      }
      if (bg.isSkinnedMesh && bh.skinning === false) {
        console.warn("THREE.WebGLShadowMap: THREE.SkinnedMesh with material.skinning set to false:", bg);
      }
      var bT = bg.isSkinnedMesh && bh.skinning;
      var bU = 0;
      if (bS) {
        bU |= bK;
      }
      if (bT) {
        bU |= bL;
      }
      bJ = bM[bU];
    }
    if (bf.localClippingEnabled && bh.clipShadows === true && bh.clippingPlanes.length !== 0) {
      var bV = bJ.uuid;
      var bW = bh.uuid;
      var bX = bP[bV];
      if (bX === undefined) {
        bX = {};
        bP[bV] = bX;
      }
      var bY = bX[bW];
      if (bY === undefined) {
        bY = bJ.clone();
        bX[bW] = bY;
      }
      bJ = bY;
    }
    bJ.visible = bh.visible;
    bJ.wireframe = bh.wireframe;
    bJ.side = bh.shadowSide ?? bQ[bh.side];
    bJ.clipShadows = bh.clipShadows;
    bJ.clippingPlanes = bh.clippingPlanes;
    bJ.clipIntersection = bh.clipIntersection;
    bJ.wireframeLinewidth = bh.wireframeLinewidth;
    bJ.linewidth = bh.linewidth;
    if (bi && bJ.isMeshDistanceMaterial) {
      bJ.referencePosition.copy(bF);
      bJ.nearDistance = bG;
      bJ.farDistance = bH;
    }
    return bJ;
  }
  function c6(bh, bF, bG, bH) {
    if (bh.visible !== false) {
      if (bh.layers.test(bF.layers) && (bh.isMesh || bh.isLine || bh.isPoints) && bh.castShadow && (!bh.frustumCulled || bi.intersectsObject(bh))) {
        bh.modelViewMatrix.multiplyMatrices(bG.matrixWorldInverse, bh.matrixWorld);
        var bI = bg.update(bh);
        var bK = bh.material;
        if (Array.isArray(bK)) {
          for (var bL = bI.groups, bM = 0, bN = bL.length; bM < bN; bM++) {
            var bO = bL[bM];
            var bP = bK[bO.materialIndex];
            if (bP && bP.visible) {
              var bQ = c5(bh, bP, bH, bJ, bG.near, bG.far);
              bf.renderBufferDirect(bG, null, bI, bQ, bh, bO);
            }
          }
        } else if (bK.visible) {
          bQ = c5(bh, bK, bH, bJ, bG.near, bG.far);
          bf.renderBufferDirect(bG, null, bI, bQ, bh, null);
        }
      }
      for (var bR = bh.children, bS = 0, bT = bR.length; bS < bT; bS++) {
        c6(bR[bS], bF, bG, bH);
      }
    }
  }
  this.enabled = false;
  this.autoUpdate = true;
  this.needsUpdate = false;
  this.type = PCFShadowMap;
  this.render = function (bg, bh, bK) {
    if (c4.enabled !== false && (c4.autoUpdate !== false || c4.needsUpdate !== false) && bg.length !== 0) {
      var bL;
      var bM = bf.getRenderTarget();
      var bN = bf.getActiveCubeFace();
      var bO = bf.getActiveMipMapLevel();
      var bP = bf.state;
      bP.setBlending(NoBlending);
      bP.buffers.color.setClear(1, 1, 1, 1);
      bP.buffers.depth.setTest(true);
      bP.setScissorTest(false);
      for (var bQ = 0, bR = bg.length; bQ < bR; bQ++) {
        var bT = bg[bQ];
        var bU = bT.shadow;
        var bV = bT && bT.isPointLight;
        if (bU !== undefined) {
          var bY = bU.camera;
          bG.copy(bU.mapSize);
          bG.min(bH);
          if (bV) {
            var bZ = bG.x;
            var c0 = bG.y;
            bX[0].set(bZ * 2, c0, bZ, c0);
            bX[1].set(0, c0, bZ, c0);
            bX[2].set(bZ * 3, c0, bZ, c0);
            bX[3].set(bZ, c0, bZ, c0);
            bX[4].set(bZ * 3, 0, bZ, c0);
            bX[5].set(bZ, 0, bZ, c0);
            bG.x *= 4;
            bG.y *= 2;
          }
          if (bU.map === null) {
            var c2 = {
              minFilter: NearestFilter,
              magFilter: NearestFilter,
              format: RGBAFormat
            };
            bU.map = new WebGLRenderTarget(bG.x, bG.y, c2);
            bU.map.texture.name = bT.name + ".shadowMap";
            bY.updateProjectionMatrix();
          }
          if (bU.isSpotLightShadow) {
            bU.update(bT);
          }
          var c3 = bU.map;
          var c5 = bU.matrix;
          bJ.setFromMatrixPosition(bT.matrixWorld);
          bY.position.copy(bJ);
          if (bV) {
            bL = 6;
            c5.makeTranslation(-bJ.x, -bJ.y, -bJ.z);
          } else {
            bL = 1;
            bI.setFromMatrixPosition(bT.target.matrixWorld);
            bY.lookAt(bI);
            bY.updateMatrixWorld();
            c5.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1);
            c5.multiply(bY.projectionMatrix);
            c5.multiply(bY.matrixWorldInverse);
          }
          bf.setRenderTarget(c3);
          bf.clear();
          for (var c7 = 0; c7 < bL; c7++) {
            if (bV) {
              bI.copy(bY.position);
              bI.add(bS[c7]);
              bY.up.copy(bW[c7]);
              bY.lookAt(bI);
              bY.updateMatrixWorld();
              var c8 = bX[c7];
              bP.viewport(c8);
            }
            bF.multiplyMatrices(bY.projectionMatrix, bY.matrixWorldInverse);
            bi.setFromMatrix(bF);
            c6(bh, bK, bY, bV);
          }
        } else {
          console.warn("THREE.WebGLShadowMap:", bT, "has no shadow.");
        }
      }
      c4.needsUpdate = false;
      bf.setRenderTarget(bM, bN, bO);
    }
  };
}
function a1i(bf, bg, bh, bi) {
  var bF = new function () {
    var bg = false;
    var bh = new Vector4();
    var bi = null;
    var bF = new Vector4(0, 0, 0, 0);
    return {
      setMask: function (bh) {
        if (bi !== bh && !bg) {
          bf.colorMask(bh, bh, bh, bh);
          bi = bh;
        }
      },
      setLocked: function (bf) {
        bg = bf;
      },
      setClear: function (bg, bi, bG, bH, bI) {
        if (bI === true) {
          bg *= bH;
          bi *= bH;
          bG *= bH;
        }
        bh.set(bg, bi, bG, bH);
        if (bF.equals(bh) === false) {
          bf.clearColor(bg, bi, bG, bH);
          bF.copy(bh);
        }
      },
      reset: function () {
        bg = false;
        bi = null;
        bF.set(-1, 0, 0, 0);
      }
    };
  }();
  var bG = new function () {
    var bg = false;
    var bh = null;
    var bi = null;
    var bF = null;
    return {
      setTest: function (bf) {
        if (bf) {
          cy(2929);
        } else {
          cz(2929);
        }
      },
      setMask: function (bi) {
        if (bh !== bi && !bg) {
          bf.depthMask(bi);
          bh = bi;
        }
      },
      setFunc: function (bg) {
        if (bi !== bg) {
          if (bg) {
            switch (bg) {
              case NeverDepth:
                bf.depthFunc(512);
                break;
              case AlwaysDepth:
                bf.depthFunc(519);
                break;
              case LessDepth:
                bf.depthFunc(513);
                break;
              case LessEqualDepth:
                bf.depthFunc(515);
                break;
              case EqualDepth:
                bf.depthFunc(514);
                break;
              case GreaterEqualDepth:
                bf.depthFunc(518);
                break;
              case GreaterDepth:
                bf.depthFunc(516);
                break;
              case NotEqualDepth:
                bf.depthFunc(517);
                break;
              default:
                bf.depthFunc(515);
            }
          } else {
            bf.depthFunc(515);
          }
          bi = bg;
        }
      },
      setLocked: function (bf) {
        bg = bf;
      },
      setClear: function (bg) {
        if (bF !== bg) {
          bf.clearDepth(bg);
          bF = bg;
        }
      },
      reset: function () {
        bg = false;
        bh = null;
        bi = null;
        bF = null;
      }
    };
  }();
  var bH = new function () {
    var bg = false;
    var bh = null;
    var bi = null;
    var bF = null;
    var bG = null;
    var bH = null;
    var bI = null;
    var bJ = null;
    var bK = null;
    return {
      setTest: function (bf) {
        if (bf) {
          cy(2960);
        } else {
          cz(2960);
        }
      },
      setMask: function (bi) {
        if (bh !== bi && !bg) {
          bf.stencilMask(bi);
          bh = bi;
        }
      },
      setFunc: function (bg, bh, bH) {
        if (bi !== bg || bF !== bh || bG !== bH) {
          bf.stencilFunc(bg, bh, bH);
          bi = bg;
          bF = bh;
          bG = bH;
        }
      },
      setOp: function (bg, bh, bi) {
        if (bH !== bg || bI !== bh || bJ !== bi) {
          bf.stencilOp(bg, bh, bi);
          bH = bg;
          bI = bh;
          bJ = bi;
        }
      },
      setLocked: function (bf) {
        bg = bf;
      },
      setClear: function (bg) {
        if (bK !== bg) {
          bf.clearStencil(bg);
          bK = bg;
        }
      },
      reset: function () {
        bg = false;
        bh = null;
        bi = null;
        bF = null;
        bG = null;
        bH = null;
        bI = null;
        bJ = null;
        bK = null;
      }
    };
  }();
  var bI = bf.getParameter(34921);
  var bJ = new Uint8Array(bI);
  var bN = new Uint8Array(bI);
  var bO = new Uint8Array(bI);
  var bP = {};
  var bQ = null;
  var bR = null;
  var bS = null;
  var bT = null;
  var bW = null;
  var bX = null;
  var bY = null;
  var bZ = null;
  var c0 = null;
  var c8 = null;
  var c9 = false;
  var ca = null;
  var cb = null;
  var cc = null;
  var cd = null;
  var ce = null;
  var cf = bf.getParameter(35661);
  var cg = false;
  var ch = 0;
  var ci = bf.getParameter(7938);
  if (ci.indexOf("WebGL") !== -1) {
    ch = parseFloat(/^WebGL\ ([0-9])/.exec(ci)[1]);
    cg = ch >= 1;
  } else if (ci.indexOf("OpenGL ES") !== -1) {
    ch = parseFloat(/^OpenGL\ ES\ ([0-9])/.exec(ci)[1]);
    cg = ch >= 2;
  }
  var cj = null;
  var ck = {};
  var cl = new Vector4();
  var cm = new Vector4();
  function cv(bg, bh, bi) {
    var bF = new Uint8Array(4);
    var bG = bf.createTexture();
    bf.bindTexture(bg, bG);
    bf.texParameteri(bg, 10241, 9728);
    bf.texParameteri(bg, 10240, 9728);
    for (var bH = 0; bH < bi; bH++) {
      bf.texImage2D(bh + bH, 0, 6408, 1, 1, 0, 6408, 5121, bF);
    }
    return bG;
  }
  var cw = {};
  function cx(bh, bF) {
    bJ[bh] = 1;
    if (bN[bh] === 0) {
      bf.enableVertexAttribArray(bh);
      bN[bh] = 1;
    }
    if (bO[bh] !== bF) {
      (bi.isWebGL2 ? bf : bg.get("ANGLE_instanced_arrays"))[bi.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"](bh, bF);
      bO[bh] = bF;
    }
  }
  function cy(bg) {
    if (bP[bg] !== true) {
      bf.enable(bg);
      bP[bg] = true;
    }
  }
  function cz(bg) {
    if (bP[bg] !== false) {
      bf.disable(bg);
      bP[bg] = false;
    }
  }
  function cA(bg, bi, bF, bG, bH, bI, bJ, bK) {
    if (bg !== NoBlending) {
      if (!bS) {
        cy(3042);
        bS = true;
      }
      if (bg === CustomBlending) {
        bH = bH || bi;
        bI = bI || bF;
        bJ = bJ || bG;
        if (bi !== bW || bH !== bZ) {
          bf.blendEquationSeparate(bh.convert(bi), bh.convert(bH));
          bW = bi;
          bZ = bH;
        }
        if (bF !== bX || bG !== bY || bI !== c0 || bJ !== c8) {
          bf.blendFuncSeparate(bh.convert(bF), bh.convert(bG), bh.convert(bI), bh.convert(bJ));
          bX = bF;
          bY = bG;
          c0 = bI;
          c8 = bJ;
        }
        bT = bg;
        c9 = null;
      } else if (bg !== bT || bK !== c9) {
        if (bW !== AddEquation || bZ !== AddEquation) {
          bf.blendEquation(32774);
          bW = AddEquation;
          bZ = AddEquation;
        }
        if (bK) {
          switch (bg) {
            case NormalBlending:
              bf.blendFuncSeparate(1, 771, 1, 771);
              break;
            case AdditiveBlending:
              bf.blendFunc(1, 1);
              break;
            case SubtractiveBlending:
              bf.blendFuncSeparate(0, 0, 769, 771);
              break;
            case MultiplyBlending:
              bf.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", bg);
          }
        } else {
          switch (bg) {
            case NormalBlending:
              bf.blendFuncSeparate(770, 771, 1, 771);
              break;
            case AdditiveBlending:
              bf.blendFunc(770, 1);
              break;
            case SubtractiveBlending:
              bf.blendFunc(0, 769);
              break;
            case MultiplyBlending:
              bf.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", bg);
          }
        }
        bX = null;
        bY = null;
        c0 = null;
        c8 = null;
        bT = bg;
        c9 = bK;
      }
    } else if (bS) {
      cz(3042);
      bS = false;
    }
  }
  function cB(bg) {
    if (ca !== bg) {
      if (bg) {
        bf.frontFace(2304);
      } else {
        bf.frontFace(2305);
      }
      ca = bg;
    }
  }
  function cC(bg) {
    if (bg !== CullFaceNone) {
      cy(2884);
      if (bg !== cb) {
        if (bg === CullFaceBack) {
          bf.cullFace(1029);
        } else if (bg === CullFaceFront) {
          bf.cullFace(1028);
        } else {
          bf.cullFace(1032);
        }
      }
    } else {
      cz(2884);
    }
    cb = bg;
  }
  function cD(bg, bh, bi) {
    if (bg) {
      cy(32823);
      if (cd !== bh || ce !== bi) {
        bf.polygonOffset(bh, bi);
        cd = bh;
        ce = bi;
      }
    } else {
      cz(32823);
    }
  }
  function cE(bg) {
    if (bg === undefined) {
      bg = 33984 + cf - 1;
    }
    if (cj !== bg) {
      bf.activeTexture(bg);
      cj = bg;
    }
  }
  cw[3553] = cv(3553, 3553, 1);
  cw[34067] = cv(34067, 34069, 6);
  bF.setClear(0, 0, 0, 1);
  bG.setClear(1);
  bH.setClear(0);
  cy(2929);
  bG.setFunc(LessEqualDepth);
  cB(false);
  cC(CullFaceBack);
  cy(2884);
  cA(NoBlending);
  return {
    buffers: {
      color: bF,
      depth: bG,
      stencil: bH
    },
    initAttributes: function () {
      for (var bf = 0, bg = bJ.length; bf < bg; bf++) {
        bJ[bf] = 0;
      }
    },
    enableAttribute: function (bf) {
      cx(bf, 0);
    },
    enableAttributeAndDivisor: cx,
    disableUnusedAttributes: function () {
      for (var bg = 0, bh = bN.length; bg !== bh; ++bg) {
        if (bN[bg] !== bJ[bg]) {
          bf.disableVertexAttribArray(bg);
          bN[bg] = 0;
        }
      }
    },
    enable: cy,
    disable: cz,
    getCompressedTextureFormats: function () {
      if (bQ === null && (bQ = [], bg.get("WEBGL_compressed_texture_pvrtc") || bg.get("WEBGL_compressed_texture_s3tc") || bg.get("WEBGL_compressed_texture_etc1") || bg.get("WEBGL_compressed_texture_astc"))) {
        for (var bh = bf.getParameter(34467), bi = 0; bi < bh.length; bi++) {
          bQ.push(bh[bi]);
        }
      }
      return bQ;
    },
    useProgram: function (bg) {
      return bR !== bg && (bf.useProgram(bg), bR = bg, true);
    },
    setBlending: cA,
    setMaterial: function (bf, bg) {
      if (bf.side === DoubleSide) {
        cz(2884);
      } else {
        cy(2884);
      }
      var bh = bf.side === BackSide;
      if (bg) {
        bh = !bh;
      }
      cB(bh);
      if (bf.blending === NormalBlending && bf.transparent === false) {
        cA(NoBlending);
      } else {
        cA(bf.blending, bf.blendEquation, bf.blendSrc, bf.blendDst, bf.blendEquationAlpha, bf.blendSrcAlpha, bf.blendDstAlpha, bf.premultipliedAlpha);
      }
      bG.setFunc(bf.depthFunc);
      bG.setTest(bf.depthTest);
      bG.setMask(bf.depthWrite);
      bF.setMask(bf.colorWrite);
      cD(bf.polygonOffset, bf.polygonOffsetFactor, bf.polygonOffsetUnits);
    },
    setFlipSided: cB,
    setCullFace: cC,
    setLineWidth: function (bg) {
      if (bg !== cc) {
        if (cg) {
          bf.lineWidth(bg);
        }
        cc = bg;
      }
    },
    setPolygonOffset: cD,
    setScissorTest: function (bf) {
      if (bf) {
        cy(3089);
      } else {
        cz(3089);
      }
    },
    activeTexture: cE,
    bindTexture: function (bg, bh) {
      if (cj === null) {
        cE();
      }
      var bi = ck[cj];
      if (bi === undefined) {
        bi = {
          type: undefined,
          texture: undefined
        };
        ck[cj] = bi;
      }
      if (bi.type !== bg || bi.texture !== bh) {
        bf.bindTexture(bg, bh || cw[bg]);
        bi.type = bg;
        bi.texture = bh;
      }
    },
    compressedTexImage2D: function () {
      try {
        bf.compressedTexImage2D.apply(bf, arguments);
      } catch (a3k) {
        console.error("THREE.WebGLState:", a3k);
      }
    },
    texImage2D: function () {
      try {
        bf.texImage2D.apply(bf, arguments);
      } catch (a3l) {
        console.error("THREE.WebGLState:", a3l);
      }
    },
    texImage3D: function () {
      try {
        bf.texImage3D.apply(bf, arguments);
      } catch (a3m) {
        console.error("THREE.WebGLState:", a3m);
      }
    },
    scissor: function (bg) {
      if (cl.equals(bg) === false) {
        bf.scissor(bg.x, bg.y, bg.z, bg.w);
        cl.copy(bg);
      }
    },
    viewport: function (bg) {
      if (cm.equals(bg) === false) {
        bf.viewport(bg.x, bg.y, bg.z, bg.w);
        cm.copy(bg);
      }
    },
    reset: function () {
      for (var bg = 0; bg < bN.length; bg++) {
        if (bN[bg] === 1) {
          bf.disableVertexAttribArray(bg);
          bN[bg] = 0;
        }
      }
      bP = {};
      bQ = null;
      cj = null;
      ck = {};
      bR = null;
      bT = null;
      ca = null;
      cb = null;
      bF.reset();
      bG.reset();
      bH.reset();
    }
  };
}
function a3q(bf, bg, bh, bi, bF, bG, bH) {
  var bI;
  var bJ = {};
  var bK = typeof OffscreenCanvas != "undefined";
  function bL(bf, bg) {
    if (bK) {
      return new OffscreenCanvas(bf, bg);
    } else {
      return document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
    }
  }
  function bM(bf, bg, bh, bi) {
    var bF = 1;
    if (bf.width > bi || bf.height > bi) {
      bF = bi / Math.max(bf.width, bf.height);
    }
    if (bF < 1 || bg === true) {
      if (typeof HTMLImageElement != "undefined" && bf instanceof HTMLImageElement || typeof HTMLCanvasElement != "undefined" && bf instanceof HTMLCanvasElement || typeof ImageBitmap != "undefined" && bf instanceof ImageBitmap) {
        var bG = bg ? Math.floorPowerOfTwo : Math.floor;
        var bH = bG(bF * bf.width);
        var bJ = bG(bF * bf.height);
        if (bI === undefined) {
          bI = bL(bH, bJ);
        }
        var bK = bh ? bL(bH, bJ) : bI;
        bK.width = bH;
        bK.height = bJ;
        bK.getContext("2d").drawImage(bf, 0, 0, bH, bJ);
        console.warn("THREE.WebGLRenderer: Texture has been resized from (" + bf.width + "x" + bf.height + ") to (" + bH + "x" + bJ + ").");
        return bK;
      }
      if ("data" in bf) {
        console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + bf.width + "x" + bf.height + ").");
      }
      return bf;
    }
    return bf;
  }
  function bN(bf) {
    return Math.isPowerOfTwo(bf.width) && Math.isPowerOfTwo(bf.height);
  }
  function bO(bf, bg) {
    return bf.generateMipmaps && bg && bf.minFilter !== NearestFilter && bf.minFilter !== LinearFilter;
  }
  function bP(bg, bh, bF, bG) {
    bf.generateMipmap(bg);
    bi.get(bh).__maxMipLevel = Math.log(Math.max(bF, bG)) * Math.LOG2E;
  }
  function bQ(bf, bh) {
    if (!bF.isWebGL2) {
      return bf;
    }
    var bi = bf;
    if (bf === 6403) {
      if (bh === 5126) {
        bi = 33326;
      }
      if (bh === 5131) {
        bi = 33325;
      }
      if (bh === 5121) {
        bi = 33321;
      }
    }
    if (bf === 6407) {
      if (bh === 5126) {
        bi = 34837;
      }
      if (bh === 5131) {
        bi = 34843;
      }
      if (bh === 5121) {
        bi = 32849;
      }
    }
    if (bf === 6408) {
      if (bh === 5126) {
        bi = 34836;
      }
      if (bh === 5131) {
        bi = 34842;
      }
      if (bh === 5121) {
        bi = 32856;
      }
    }
    if (bi === 33325 || bi === 33326 || bi === 34842 || bi === 34836) {
      bg.get("EXT_color_buffer_float");
    } else if (bi === 34843 || bi === 34837) {
      console.warn("THREE.WebGLRenderer: Floating point textures with RGB format not supported. Please use RGBA instead.");
    }
    return bi;
  }
  function bR(bf) {
    if (bf === NearestFilter || bf === NearestMipMapNearestFilter || bf === NearestMipMapLinearFilter) {
      return 9728;
    } else {
      return 9729;
    }
  }
  function bS(bg) {
    var bh = bg.target;
    bh.removeEventListener("dispose", bS);
    (function (bg) {
      var bh = bi.get(bg);
      if (bh.__webglInit === undefined) {
        return;
      }
      bf.deleteTexture(bh.__webglTexture);
      bi.remove(bg);
    })(bh);
    if (bh.isVideoTexture) {
      delete bJ[bh.id];
    }
    bH.memory.textures--;
  }
  function bT(bg) {
    var bh = bg.target;
    bh.removeEventListener("dispose", bT);
    (function (bg) {
      var bh = bi.get(bg);
      var bF = bi.get(bg.texture);
      if (!bg) {
        return;
      }
      if (bF.__webglTexture !== undefined) {
        bf.deleteTexture(bF.__webglTexture);
      }
      if (bg.depthTexture) {
        bg.depthTexture.dispose();
      }
      if (bg.isWebGLRenderTargetCube) {
        for (var bG = 0; bG < 6; bG++) {
          bf.deleteFramebuffer(bh.__webglFramebuffer[bG]);
          if (bh.__webglDepthbuffer) {
            bf.deleteRenderbuffer(bh.__webglDepthbuffer[bG]);
          }
        }
      } else {
        bf.deleteFramebuffer(bh.__webglFramebuffer);
        if (bh.__webglDepthbuffer) {
          bf.deleteRenderbuffer(bh.__webglDepthbuffer);
        }
      }
      bi.remove(bg.texture);
      bi.remove(bg);
    })(bh);
    bH.memory.textures--;
  }
  var bU = 0;
  function bV(bf, bg) {
    var bF = bi.get(bf);
    if (bf.isVideoTexture) {
      (function (bf) {
        var bg = bf.id;
        var bh = bH.render.frame;
        if (bJ[bg] !== bh) {
          bJ[bg] = bh;
          bf.update();
        }
      })(bf);
    }
    if (bf.version > 0 && bF.__version !== bf.version) {
      var bG = bf.image;
      if (bG === undefined) {
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is undefined");
      } else {
        if (bG.complete !== false) {
          c0(bF, bf, bg);
          return;
        }
        console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
      }
    }
    bh.activeTexture(33984 + bg);
    bh.bindTexture(3553, bF.__webglTexture);
  }
  function bW(bg, bH) {
    var bI = bi.get(bg);
    if (bg.image.length === 6) {
      if (bg.version > 0 && bI.__version !== bg.version) {
        bZ(bI, bg);
        bh.activeTexture(33984 + bH);
        bh.bindTexture(34067, bI.__webglTexture);
        bf.pixelStorei(37440, bg.flipY);
        for (var bJ = bg && bg.isCompressedTexture, bK = bg.image[0] && bg.image[0].isDataTexture, bL = [], bR = 0; bR < 6; bR++) {
          bL[bR] = bJ || bK ? bK ? bg.image[bR].image : bg.image[bR] : bM(bg.image[bR], false, true, bF.maxCubemapSize);
        }
        var bS = bL[0];
        var bT = bN(bS) || bF.isWebGL2;
        var bU = bG.convert(bg.format);
        var bV = bG.convert(bg.type);
        var bW = bQ(bU, bV);
        bY(34067, bg, bT);
        for (bR = 0; bR < 6; bR++) {
          if (bJ) {
            for (var bX, c0 = bL[bR].mipmaps, c1 = 0, c2 = c0.length; c1 < c2; c1++) {
              bX = c0[c1];
              if (bg.format !== RGBAFormat && bg.format !== RGBFormat) {
                if (bh.getCompressedTextureFormats().indexOf(bU) > -1) {
                  bh.compressedTexImage2D(34069 + bR, c1, bW, bX.width, bX.height, 0, bX.data);
                } else {
                  console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()");
                }
              } else {
                bh.texImage2D(34069 + bR, c1, bW, bX.width, bX.height, 0, bU, bV, bX.data);
              }
            }
          } else if (bK) {
            bh.texImage2D(34069 + bR, 0, bW, bL[bR].width, bL[bR].height, 0, bU, bV, bL[bR].data);
          } else {
            bh.texImage2D(34069 + bR, 0, bW, bU, bV, bL[bR]);
          }
        }
        bI.__maxMipLevel = bJ ? c0.length - 1 : 0;
        if (bO(bg, bT)) {
          bP(34067, bg, bS.width, bS.height);
        }
        bI.__version = bg.version;
        if (bg.onUpdate) {
          bg.onUpdate(bg);
        }
      } else {
        bh.activeTexture(33984 + bH);
        bh.bindTexture(34067, bI.__webglTexture);
      }
    }
  }
  function bX(bf, bg) {
    bh.activeTexture(33984 + bg);
    bh.bindTexture(34067, bi.get(bf).__webglTexture);
  }
  function bY(bh, bH, bI) {
    var bJ;
    if (bI) {
      bf.texParameteri(bh, 10242, bG.convert(bH.wrapS));
      bf.texParameteri(bh, 10243, bG.convert(bH.wrapT));
      if (bh === 32879 || bh === 35866) {
        bf.texParameteri(bh, 32882, bG.convert(bH.wrapR));
      }
      bf.texParameteri(bh, 10240, bG.convert(bH.magFilter));
      bf.texParameteri(bh, 10241, bG.convert(bH.minFilter));
    } else {
      bf.texParameteri(bh, 10242, 33071);
      bf.texParameteri(bh, 10243, 33071);
      if (bh === 32879 || bh === 35866) {
        bf.texParameteri(bh, 32882, 33071);
      }
      if (bH.wrapS !== ClampToEdgeWrapping || bH.wrapT !== ClampToEdgeWrapping) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping.");
      }
      bf.texParameteri(bh, 10240, bR(bH.magFilter));
      bf.texParameteri(bh, 10241, bR(bH.minFilter));
      if (bH.minFilter !== NearestFilter && bH.minFilter !== LinearFilter) {
        console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.");
      }
    }
    if (bJ = bg.get("EXT_texture_filter_anisotropic")) {
      if (bH.type === FloatType && bg.get("OES_texture_float_linear") === null) {
        return;
      }
      if (bH.type === HalfFloatType && (bF.isWebGL2 || bg.get("OES_texture_half_float_linear")) === null) {
        return;
      }
      if (bH.anisotropy > 1 || bi.get(bH).__currentAnisotropy) {
        bf.texParameterf(bh, bJ.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(bH.anisotropy, bF.getMaxAnisotropy()));
        bi.get(bH).__currentAnisotropy = bH.anisotropy;
      }
    }
  }
  function bZ(bg, bh) {
    if (bg.__webglInit === undefined) {
      bg.__webglInit = true;
      bh.addEventListener("dispose", bS);
      bg.__webglTexture = bf.createTexture();
      bH.memory.textures++;
    }
  }
  function c0(bg, bi, bH) {
    var bI = 3553;
    if (bi.isDataTexture2DArray) {
      bI = 35866;
    }
    if (bi.isDataTexture3D) {
      bI = 32879;
    }
    bZ(bg, bi);
    bh.activeTexture(33984 + bH);
    bh.bindTexture(bI, bg.__webglTexture);
    bf.pixelStorei(37440, bi.flipY);
    bf.pixelStorei(37441, bi.premultiplyAlpha);
    bf.pixelStorei(3317, bi.unpackAlignment);
    var bJ = function (bf) {
      return !bF.isWebGL2 && (bf.wrapS !== ClampToEdgeWrapping || bf.wrapT !== ClampToEdgeWrapping || bf.minFilter !== NearestFilter && bf.minFilter !== LinearFilter);
    }(bi) && bN(bi.image) === false;
    var bK = bM(bi.image, bJ, false, bF.maxTextureSize);
    var bL = bN(bK) || bF.isWebGL2;
    var bR = bG.convert(bi.format);
    var bS = bG.convert(bi.type);
    var bT = bQ(bR, bS);
    bY(bI, bi, bL);
    var bU;
    var bV = bi.mipmaps;
    if (bi.isDepthTexture) {
      bT = 6402;
      if (bi.type === FloatType) {
        if (!bF.isWebGL2) {
          throw new Error("Float Depth Texture only supported in WebGL2.0");
        }
        bT = 36012;
      } else if (bF.isWebGL2) {
        bT = 33189;
      }
      if (bi.format === DepthFormat && bT === 6402 && bi.type !== UnsignedShortType && bi.type !== UnsignedIntType) {
        console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture.");
        bi.type = UnsignedShortType;
        bS = bG.convert(bi.type);
      }
      if (bi.format === DepthStencilFormat) {
        bT = 34041;
        if (bi.type !== UnsignedInt248Type) {
          console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture.");
          bi.type = UnsignedInt248Type;
          bS = bG.convert(bi.type);
        }
      }
      bh.texImage2D(3553, 0, bT, bK.width, bK.height, 0, bR, bS, null);
    } else if (bi.isDataTexture) {
      if (bV.length > 0 && bL) {
        for (var bW = 0, bX = bV.length; bW < bX; bW++) {
          bU = bV[bW];
          bh.texImage2D(3553, bW, bT, bU.width, bU.height, 0, bR, bS, bU.data);
        }
        bi.generateMipmaps = false;
        bg.__maxMipLevel = bV.length - 1;
      } else {
        bh.texImage2D(3553, 0, bT, bK.width, bK.height, 0, bR, bS, bK.data);
        bg.__maxMipLevel = 0;
      }
    } else if (bi.isCompressedTexture) {
      bW = 0;
      bX = bV.length;
      for (; bW < bX; bW++) {
        bU = bV[bW];
        if (bi.format !== RGBAFormat && bi.format !== RGBFormat) {
          if (bh.getCompressedTextureFormats().indexOf(bR) > -1) {
            bh.compressedTexImage2D(3553, bW, bT, bU.width, bU.height, 0, bU.data);
          } else {
            console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");
          }
        } else {
          bh.texImage2D(3553, bW, bT, bU.width, bU.height, 0, bR, bS, bU.data);
        }
      }
      bg.__maxMipLevel = bV.length - 1;
    } else if (bi.isDataTexture2DArray) {
      bh.texImage3D(35866, 0, bT, bK.width, bK.height, bK.depth, 0, bR, bS, bK.data);
      bg.__maxMipLevel = 0;
    } else if (bi.isDataTexture3D) {
      bh.texImage3D(32879, 0, bT, bK.width, bK.height, bK.depth, 0, bR, bS, bK.data);
      bg.__maxMipLevel = 0;
    } else if (bV.length > 0 && bL) {
      bW = 0;
      bX = bV.length;
      for (; bW < bX; bW++) {
        bU = bV[bW];
        bh.texImage2D(3553, bW, bT, bR, bS, bU);
      }
      bi.generateMipmaps = false;
      bg.__maxMipLevel = bV.length - 1;
    } else {
      bh.texImage2D(3553, 0, bT, bR, bS, bK);
      bg.__maxMipLevel = 0;
    }
    if (bO(bi, bL)) {
      bP(3553, bi, bK.width, bK.height);
    }
    bg.__version = bi.version;
    if (bi.onUpdate) {
      bi.onUpdate(bi);
    }
  }
  function c1(bg, bF, bH, bI) {
    var bJ = bG.convert(bF.texture.format);
    var bK = bG.convert(bF.texture.type);
    var bL = bQ(bJ, bK);
    bh.texImage2D(bI, 0, bL, bF.width, bF.height, 0, bJ, bK, null);
    bf.bindFramebuffer(36160, bg);
    bf.framebufferTexture2D(36160, bH, bI, bi.get(bF.texture).__webglTexture, 0);
    bf.bindFramebuffer(36160, null);
  }
  function c2(bg, bh, bi) {
    bf.bindRenderbuffer(36161, bg);
    if (bh.depthBuffer && !bh.stencilBuffer) {
      if (bi) {
        var bF = c4(bh);
        bf.renderbufferStorageMultisample(36161, bF, 33189, bh.width, bh.height);
      } else {
        bf.renderbufferStorage(36161, 33189, bh.width, bh.height);
      }
      bf.framebufferRenderbuffer(36160, 36096, 36161, bg);
    } else if (bh.depthBuffer && bh.stencilBuffer) {
      if (bi) {
        bF = c4(bh);
        bf.renderbufferStorageMultisample(36161, bF, 34041, bh.width, bh.height);
      } else {
        bf.renderbufferStorage(36161, 34041, bh.width, bh.height);
      }
      bf.framebufferRenderbuffer(36160, 33306, 36161, bg);
    } else {
      var bH = bQ(bG.convert(bh.texture.format), bG.convert(bh.texture.type));
      if (bi) {
        bF = c4(bh);
        bf.renderbufferStorageMultisample(36161, bF, bH, bh.width, bh.height);
      } else {
        bf.renderbufferStorage(36161, bH, bh.width, bh.height);
      }
    }
    bf.bindRenderbuffer(36161, null);
  }
  function c3(bg) {
    var bh = bi.get(bg);
    var bF = bg.isWebGLRenderTargetCube === true;
    if (bg.depthTexture) {
      if (bF) {
        throw new Error("target.depthTexture not supported in Cube render targets");
      }
      (function (bg, bh) {
        if (bh && bh.isWebGLRenderTargetCube) {
          throw new Error("Depth Texture with cube render targets is not supported");
        }
        bf.bindFramebuffer(36160, bg);
        if (!bh.depthTexture || !bh.depthTexture.isDepthTexture) {
          throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        }
        if (!bi.get(bh.depthTexture).__webglTexture || bh.depthTexture.image.width !== bh.width || bh.depthTexture.image.height !== bh.height) {
          bh.depthTexture.image.width = bh.width;
          bh.depthTexture.image.height = bh.height;
          bh.depthTexture.needsUpdate = true;
        }
        bV(bh.depthTexture, 0);
        var bF = bi.get(bh.depthTexture).__webglTexture;
        if (bh.depthTexture.format === DepthFormat) {
          bf.framebufferTexture2D(36160, 36096, 3553, bF, 0);
        } else {
          if (bh.depthTexture.format !== DepthStencilFormat) {
            throw new Error("Unknown depthTexture format");
          }
          bf.framebufferTexture2D(36160, 33306, 3553, bF, 0);
        }
      })(bh.__webglFramebuffer, bg);
    } else if (bF) {
      bh.__webglDepthbuffer = [];
      for (var bG = 0; bG < 6; bG++) {
        bf.bindFramebuffer(36160, bh.__webglFramebuffer[bG]);
        bh.__webglDepthbuffer[bG] = bf.createRenderbuffer();
        c2(bh.__webglDepthbuffer[bG], bg);
      }
    } else {
      bf.bindFramebuffer(36160, bh.__webglFramebuffer);
      bh.__webglDepthbuffer = bf.createRenderbuffer();
      c2(bh.__webglDepthbuffer, bg);
    }
    bf.bindFramebuffer(36160, null);
  }
  function c4(bf) {
    if (bF.isWebGL2 && bf.isWebGLMultisampleRenderTarget) {
      return Math.min(bF.maxSamples, bf.samples);
    } else {
      return 0;
    }
  }
  var c5 = false;
  var c6 = false;
  this.allocateTextureUnit = function () {
    var bf = bU;
    if (bf >= bF.maxTextures) {
      console.warn("THREE.WebGLTextures: Trying to use " + bf + " texture units while this GPU supports only " + bF.maxTextures);
    }
    bU += 1;
    return bf;
  };
  this.resetTextureUnits = function () {
    bU = 0;
  };
  this.setTexture2D = bV;
  this.setTexture2DArray = function (bf, bg) {
    var bF = bi.get(bf);
    if (bf.version > 0 && bF.__version !== bf.version) {
      c0(bF, bf, bg);
    } else {
      bh.activeTexture(33984 + bg);
      bh.bindTexture(35866, bF.__webglTexture);
    }
  };
  this.setTexture3D = function (bf, bg) {
    var bF = bi.get(bf);
    if (bf.version > 0 && bF.__version !== bf.version) {
      c0(bF, bf, bg);
    } else {
      bh.activeTexture(33984 + bg);
      bh.bindTexture(32879, bF.__webglTexture);
    }
  };
  this.setTextureCube = bW;
  this.setTextureCubeDynamic = bX;
  this.setupRenderTarget = function (bg) {
    var bI = bi.get(bg);
    var bJ = bi.get(bg.texture);
    bg.addEventListener("dispose", bT);
    bJ.__webglTexture = bf.createTexture();
    bH.memory.textures++;
    var bK = bg.isWebGLRenderTargetCube === true;
    var bL = bg.isWebGLMultisampleRenderTarget === true;
    var bM = bN(bg) || bF.isWebGL2;
    if (bK) {
      bI.__webglFramebuffer = [];
      for (var bR = 0; bR < 6; bR++) {
        bI.__webglFramebuffer[bR] = bf.createFramebuffer();
      }
    } else {
      bI.__webglFramebuffer = bf.createFramebuffer();
      if (bL) {
        if (bF.isWebGL2) {
          bI.__webglMultisampledFramebuffer = bf.createFramebuffer();
          bI.__webglColorRenderbuffer = bf.createRenderbuffer();
          bf.bindRenderbuffer(36161, bI.__webglColorRenderbuffer);
          var bS = bQ(bG.convert(bg.texture.format), bG.convert(bg.texture.type));
          var bU = c4(bg);
          bf.renderbufferStorageMultisample(36161, bU, bS, bg.width, bg.height);
          bf.bindFramebuffer(36160, bI.__webglMultisampledFramebuffer);
          bf.framebufferRenderbuffer(36160, 36064, 36161, bI.__webglColorRenderbuffer);
          bf.bindRenderbuffer(36161, null);
          if (bg.depthBuffer) {
            bI.__webglDepthRenderbuffer = bf.createRenderbuffer();
            c2(bI.__webglDepthRenderbuffer, bg, true);
          }
          bf.bindFramebuffer(36160, null);
        } else {
          console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
        }
      }
    }
    if (bK) {
      bh.bindTexture(34067, bJ.__webglTexture);
      bY(34067, bg.texture, bM);
      bR = 0;
      for (; bR < 6; bR++) {
        c1(bI.__webglFramebuffer[bR], bg, 36064, 34069 + bR);
      }
      if (bO(bg.texture, bM)) {
        bP(34067, bg.texture, bg.width, bg.height);
      }
      bh.bindTexture(34067, null);
    } else {
      bh.bindTexture(3553, bJ.__webglTexture);
      bY(3553, bg.texture, bM);
      c1(bI.__webglFramebuffer, bg, 36064, 3553);
      if (bO(bg.texture, bM)) {
        bP(3553, bg.texture, bg.width, bg.height);
      }
      bh.bindTexture(3553, null);
    }
    if (bg.depthBuffer) {
      c3(bg);
    }
  };
  this.updateRenderTargetMipmap = function (bf) {
    var bg = bf.texture;
    if (bO(bg, bN(bf) || bF.isWebGL2)) {
      var bG = bf.isWebGLRenderTargetCube ? 34067 : 3553;
      var bH = bi.get(bg).__webglTexture;
      bh.bindTexture(bG, bH);
      bP(bG, bg, bf.width, bf.height);
      bh.bindTexture(bG, null);
    }
  };
  this.updateMultisampleRenderTarget = function (bg) {
    if (bg.isWebGLMultisampleRenderTarget) {
      if (bF.isWebGL2) {
        var bh = bi.get(bg);
        bf.bindFramebuffer(36008, bh.__webglMultisampledFramebuffer);
        bf.bindFramebuffer(36009, bh.__webglFramebuffer);
        var bG = bg.width;
        var bH = bg.height;
        var bI = 16384;
        if (bg.depthBuffer) {
          bI |= 256;
        }
        if (bg.stencilBuffer) {
          bI |= 1024;
        }
        bf.blitFramebuffer(0, 0, bG, bH, 0, 0, bG, bH, bI, 9728);
      } else {
        console.warn("THREE.WebGLRenderer: WebGLMultisampleRenderTarget can only be used with WebGL2.");
      }
    }
  };
  this.safeSetTexture2D = function (bf, bg) {
    if (bf && bf.isWebGLRenderTarget) {
      if (c5 === false) {
        console.warn("THREE.WebGLTextures.safeSetTexture2D: don't use render targets as textures. Use their .texture property instead.");
        c5 = true;
      }
      bf = bf.texture;
    }
    bV(bf, bg);
  };
  this.safeSetTextureCube = function (bf, bg) {
    if (bf && bf.isWebGLRenderTargetCube) {
      if (c6 === false) {
        console.warn("THREE.WebGLTextures.safeSetTextureCube: don't use cube render targets as textures. Use their .texture property instead.");
        c6 = true;
      }
      bf = bf.texture;
    }
    if (bf && bf.isCubeTexture || Array.isArray(bf.image) && bf.image.length === 6) {
      bW(bf, bg);
    } else {
      bX(bf, bg);
    }
  };
}
export function WebGLUtils(bf, bg, bh) {
  return {
    convert: function (bf) {
      var bi;
      if (bf === RepeatWrapping) {
        return 10497;
      }
      if (bf === ClampToEdgeWrapping) {
        return 33071;
      }
      if (bf === MirroredRepeatWrapping) {
        return 33648;
      }
      if (bf === NearestFilter) {
        return 9728;
      }
      if (bf === NearestMipMapNearestFilter) {
        return 9984;
      }
      if (bf === NearestMipMapLinearFilter) {
        return 9986;
      }
      if (bf === LinearFilter) {
        return 9729;
      }
      if (bf === LinearMipMapNearestFilter) {
        return 9985;
      }
      if (bf === LinearMipMapLinearFilter) {
        return 9987;
      }
      if (bf === UnsignedByteType) {
        return 5121;
      }
      if (bf === UnsignedShort4444Type) {
        return 32819;
      }
      if (bf === UnsignedShort5551Type) {
        return 32820;
      }
      if (bf === UnsignedShort565Type) {
        return 33635;
      }
      if (bf === ByteType) {
        return 5120;
      }
      if (bf === ShortType) {
        return 5122;
      }
      if (bf === UnsignedShortType) {
        return 5123;
      }
      if (bf === IntType) {
        return 5124;
      }
      if (bf === UnsignedIntType) {
        return 5125;
      }
      if (bf === FloatType) {
        return 5126;
      }
      if (bf === HalfFloatType) {
        if (bh.isWebGL2) {
          return 5131;
        }
        if ((bi = bg.get("OES_texture_half_float")) !== null) {
          return bi.HALF_FLOAT_OES;
        }
      }
      if (bf === AlphaFormat) {
        return 6406;
      }
      if (bf === RGBFormat) {
        return 6407;
      }
      if (bf === RGBAFormat) {
        return 6408;
      }
      if (bf === LuminanceFormat) {
        return 6409;
      }
      if (bf === LuminanceAlphaFormat) {
        return 6410;
      }
      if (bf === DepthFormat) {
        return 6402;
      }
      if (bf === DepthStencilFormat) {
        return 34041;
      }
      if (bf === RedFormat) {
        return 6403;
      }
      if (bf === AddEquation) {
        return 32774;
      }
      if (bf === SubtractEquation) {
        return 32778;
      }
      if (bf === ReverseSubtractEquation) {
        return 32779;
      }
      if (bf === ZeroFactor) {
        return 0;
      }
      if (bf === OneFactor) {
        return 1;
      }
      if (bf === SrcColorFactor) {
        return 768;
      }
      if (bf === OneMinusSrcColorFactor) {
        return 769;
      }
      if (bf === SrcAlphaFactor) {
        return 770;
      }
      if (bf === OneMinusSrcAlphaFactor) {
        return 771;
      }
      if (bf === DstAlphaFactor) {
        return 772;
      }
      if (bf === OneMinusDstAlphaFactor) {
        return 773;
      }
      if (bf === DstColorFactor) {
        return 774;
      }
      if (bf === OneMinusDstColorFactor) {
        return 775;
      }
      if (bf === SrcAlphaSaturateFactor) {
        return 776;
      }
      if ((bf === RGB_S3TC_DXT1_Format || bf === RGBA_S3TC_DXT1_Format || bf === RGBA_S3TC_DXT3_Format || bf === RGBA_S3TC_DXT5_Format) && (bi = bg.get("WEBGL_compressed_texture_s3tc")) !== null) {
        if (bf === RGB_S3TC_DXT1_Format) {
          return bi.COMPRESSED_RGB_S3TC_DXT1_EXT;
        }
        if (bf === RGBA_S3TC_DXT1_Format) {
          return bi.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        }
        if (bf === RGBA_S3TC_DXT3_Format) {
          return bi.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        }
        if (bf === RGBA_S3TC_DXT5_Format) {
          return bi.COMPRESSED_RGBA_S3TC_DXT5_EXT;
        }
      }
      if ((bf === RGB_PVRTC_4BPPV1_Format || bf === RGB_PVRTC_2BPPV1_Format || bf === RGBA_PVRTC_4BPPV1_Format || bf === RGBA_PVRTC_2BPPV1_Format) && (bi = bg.get("WEBGL_compressed_texture_pvrtc")) !== null) {
        if (bf === RGB_PVRTC_4BPPV1_Format) {
          return bi.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        }
        if (bf === RGB_PVRTC_2BPPV1_Format) {
          return bi.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        }
        if (bf === RGBA_PVRTC_4BPPV1_Format) {
          return bi.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        }
        if (bf === RGBA_PVRTC_2BPPV1_Format) {
          return bi.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
        }
      }
      if (bf === RGB_ETC1_Format && (bi = bg.get("WEBGL_compressed_texture_etc1")) !== null) {
        return bi.COMPRESSED_RGB_ETC1_WEBGL;
      }
      if ((bf === RGBA_ASTC_4x4_Format || bf === RGBA_ASTC_5x4_Format || bf === RGBA_ASTC_5x5_Format || bf === RGBA_ASTC_6x5_Format || bf === RGBA_ASTC_6x6_Format || bf === RGBA_ASTC_8x5_Format || bf === RGBA_ASTC_8x6_Format || bf === RGBA_ASTC_8x8_Format || bf === RGBA_ASTC_10x5_Format || bf === RGBA_ASTC_10x6_Format || bf === RGBA_ASTC_10x8_Format || bf === RGBA_ASTC_10x10_Format || bf === RGBA_ASTC_12x10_Format || bf === RGBA_ASTC_12x12_Format) && (bi = bg.get("WEBGL_compressed_texture_astc")) !== null) {
        return bf;
      }
      if (bf === MinEquation || bf === MaxEquation) {
        if (bh.isWebGL2) {
          if (bf === MinEquation) {
            return 32775;
          }
          if (bf === MaxEquation) {
            return 32776;
          }
        }
        if ((bi = bg.get("EXT_blend_minmax")) !== null) {
          if (bf === MinEquation) {
            return bi.MIN_EXT;
          }
          if (bf === MaxEquation) {
            return bi.MAX_EXT;
          }
        }
      }
      if (bf === UnsignedInt248Type) {
        if (bh.isWebGL2) {
          return 34042;
        }
        if ((bi = bg.get("WEBGL_depth_texture")) !== null) {
          return bi.UNSIGNED_INT_24_8_WEBGL;
        }
      }
      return 0;
    }
  };
}
export function Group() {
  Object3D.call(this);
  this.type = "Group";
}
export function Camera() {
  Object3D.call(this);
  this.type = "Camera";
  this.matrixWorldInverse = new Matrix4();
  this.projectionMatrix = new Matrix4();
  this.projectionMatrixInverse = new Matrix4();
}
export function PerspectiveCamera(bf, bg, bh, bi) {
  Camera.call(this);
  this.type = "PerspectiveCamera";
  this.fov = bf !== undefined ? bf : 50;
  this.zoom = 1;
  this.near = bh !== undefined ? bh : 0.1;
  this.far = bi !== undefined ? bi : 2000;
  this.focus = 10;
  this.aspect = bg !== undefined ? bg : 1;
  this.view = null;
  this.filmGauge = 35;
  this.filmOffset = 0;
  this.updateProjectionMatrix();
}
export function ArrayCamera(bf) {
  PerspectiveCamera.call(this);
  this.cameras = bf || [];
}
MeshDepthMaterial.prototype = Object.create(Material.prototype);
MeshDepthMaterial.prototype.constructor = MeshDepthMaterial;
MeshDepthMaterial.prototype.isMeshDepthMaterial = true;
MeshDepthMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.depthPacking = bf.depthPacking;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.map = bf.map;
  this.alphaMap = bf.alphaMap;
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  return this;
};
MeshDistanceMaterial.prototype = Object.create(Material.prototype);
MeshDistanceMaterial.prototype.constructor = MeshDistanceMaterial;
MeshDistanceMaterial.prototype.isMeshDistanceMaterial = true;
MeshDistanceMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.referencePosition.copy(bf.referencePosition);
  this.nearDistance = bf.nearDistance;
  this.farDistance = bf.farDistance;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.map = bf.map;
  this.alphaMap = bf.alphaMap;
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  return this;
};
Group.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Group,
  isGroup: true
});
Camera.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Camera,
  isCamera: true,
  copy: function (bf, bg) {
    Object3D.prototype.copy.call(this, bf, bg);
    this.matrixWorldInverse.copy(bf.matrixWorldInverse);
    this.projectionMatrix.copy(bf.projectionMatrix);
    this.projectionMatrixInverse.copy(bf.projectionMatrixInverse);
    return this;
  },
  getWorldDirection: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Camera: .getWorldDirection() target is now required");
      bf = new Vector3();
    }
    this.updateMatrixWorld(true);
    var bg = this.matrixWorld.elements;
    return bf.set(-bg[8], -bg[9], -bg[10]).normalize();
  },
  updateMatrixWorld: function (bf) {
    Object3D.prototype.updateMatrixWorld.call(this, bf);
    this.matrixWorldInverse.getInverse(this.matrixWorld);
  },
  clone: function () {
    return new this.constructor().copy(this);
  }
});
PerspectiveCamera.prototype = Object.assign(Object.create(Camera.prototype), {
  constructor: PerspectiveCamera,
  isPerspectiveCamera: true,
  copy: function (bf, bg) {
    Camera.prototype.copy.call(this, bf, bg);
    this.fov = bf.fov;
    this.zoom = bf.zoom;
    this.near = bf.near;
    this.far = bf.far;
    this.focus = bf.focus;
    this.aspect = bf.aspect;
    this.view = bf.view === null ? null : Object.assign({}, bf.view);
    this.filmGauge = bf.filmGauge;
    this.filmOffset = bf.filmOffset;
    return this;
  },
  setFocalLength: function (bf) {
    var bg = this.getFilmHeight() * 0.5 / bf;
    this.fov = Math.RAD2DEG * 2 * Math.atan(bg);
    this.updateProjectionMatrix();
  },
  getFocalLength: function () {
    var bf = Math.tan(Math.DEG2RAD * 0.5 * this.fov);
    return this.getFilmHeight() * 0.5 / bf;
  },
  getEffectiveFOV: function () {
    return Math.RAD2DEG * 2 * Math.atan(Math.tan(Math.DEG2RAD * 0.5 * this.fov) / this.zoom);
  },
  getFilmWidth: function () {
    return this.filmGauge * Math.min(this.aspect, 1);
  },
  getFilmHeight: function () {
    return this.filmGauge / Math.max(this.aspect, 1);
  },
  setViewOffset: function (bf, bg, bh, bi, bF, bG) {
    this.aspect = bf / bg;
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = bf;
    this.view.fullHeight = bg;
    this.view.offsetX = bh;
    this.view.offsetY = bi;
    this.view.width = bF;
    this.view.height = bG;
    this.updateProjectionMatrix();
  },
  clearViewOffset: function () {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function () {
    var bf = this.near;
    var bg = bf * Math.tan(Math.DEG2RAD * 0.5 * this.fov) / this.zoom;
    var bh = bg * 2;
    var bi = this.aspect * bh;
    var bF = bi * -0.5;
    var bG = this.view;
    if (this.view !== null && this.view.enabled) {
      var bH = bG.fullWidth;
      var bI = bG.fullHeight;
      bF += bG.offsetX * bi / bH;
      bg -= bG.offsetY * bh / bI;
      bi *= bG.width / bH;
      bh *= bG.height / bI;
    }
    var bJ = this.filmOffset;
    if (bJ !== 0) {
      bF += bf * bJ / this.getFilmWidth();
    }
    this.projectionMatrix.makePerspective(bF, bF + bi, bg, bg - bh, bf, this.far);
    this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function (bf) {
    var bg = Object3D.prototype.toJSON.call(this, bf);
    bg.object.fov = this.fov;
    bg.object.zoom = this.zoom;
    bg.object.near = this.near;
    bg.object.far = this.far;
    bg.object.focus = this.focus;
    bg.object.aspect = this.aspect;
    if (this.view !== null) {
      bg.object.view = Object.assign({}, this.view);
    }
    bg.object.filmGauge = this.filmGauge;
    bg.object.filmOffset = this.filmOffset;
    return bg;
  }
});
ArrayCamera.prototype = Object.assign(Object.create(PerspectiveCamera.prototype), {
  constructor: ArrayCamera,
  isArrayCamera: true
});
var a6I;
var a6J;
var a6K;
var a6L;
var a6M;
var a6N;
var a6O = new Vector3();
var a6P = new Vector3();
function a6Q(bf, bg, bh) {
  a6O.setFromMatrixPosition(bg.matrixWorld);
  a6P.setFromMatrixPosition(bh.matrixWorld);
  var bi = a6O.distanceTo(a6P);
  var bF = bg.projectionMatrix.elements;
  var bG = bh.projectionMatrix.elements;
  var bH = bF[14] / (bF[10] - 1);
  var bI = bF[14] / (bF[10] + 1);
  var bJ = (bF[9] + 1) / bF[5];
  var bK = (bF[9] - 1) / bF[5];
  var bL = (bF[8] - 1) / bF[0];
  var bM = (bG[8] + 1) / bG[0];
  var bN = bH * bL;
  var bO = bH * bM;
  var bP = bi / (-bL + bM);
  var bQ = bP * -bL;
  bg.matrixWorld.decompose(bf.position, bf.quaternion, bf.scale);
  bf.translateX(bQ);
  bf.translateZ(bP);
  bf.matrixWorld.compose(bf.position, bf.quaternion, bf.scale);
  bf.matrixWorldInverse.getInverse(bf.matrixWorld);
  var bR = bH + bP;
  var bS = bI + bP;
  var bT = bN - bQ;
  var bU = bO + (bi - bQ);
  var bV = bJ * bI / bS * bR;
  var bW = bK * bI / bS * bR;
  bf.projectionMatrix.makePerspective(bT, bU, bV, bW, bR, bS);
}
function a7d(bf) {
  var bg;
  var bh;
  var bi = this;
  var bF = null;
  var bG = null;
  var bH = null;
  var bI = [];
  var bJ = new Matrix4();
  var bK = new Matrix4();
  var bL = 1;
  var bM = "local-floor";
  if (typeof window != "undefined" && "VRFrameData" in window) {
    bG = new window.VRFrameData();
    window.addEventListener("vrdisplaypresentchange", bW, false);
  }
  var bN = new Matrix4();
  var bO = new Quaternion();
  var bP = new Vector3();
  var bQ = new PerspectiveCamera();
  bQ.viewport = new Vector4();
  bQ.layers.enable(1);
  var bR = new PerspectiveCamera();
  bR.viewport = new Vector4();
  bR.layers.enable(2);
  var bS = new ArrayCamera([bQ, bR]);
  function bT() {
    return bF !== null && bF.isPresenting === true;
  }
  bS.layers.enable(1);
  bS.layers.enable(2);
  var bU;
  var bV = new Vector2();
  function bW() {
    if (bT()) {
      var bG = bF.getEyeParameters("left");
      bg = bG.renderWidth * 2 * bL;
      bh = bG.renderHeight * bL;
      bU = bf.getPixelRatio();
      bf.getSize(bV);
      bf.setDrawingBufferSize(bg, bh, 1);
      bQ.viewport.set(0, 0, bg / 2, bh);
      bR.viewport.set(bg / 2, 0, bg / 2, bh);
      c0.start();
    } else {
      if (bi.enabled) {
        bf.setDrawingBufferSize(bV.width, bV.height, bU);
      }
      c0.stop();
    }
  }
  var bX = [];
  function bY(bf) {
    for (var bg = navigator.getGamepads && navigator.getGamepads(), bh = 0, bi = 0, bF = bg.length; bh < bF; bh++) {
      var bG = bg[bh];
      if (bG && (bG.id === "Daydream Controller" || bG.id === "Gear VR Controller" || bG.id === "Oculus Go Controller" || bG.id === "OpenVR Gamepad" || bG.id.startsWith("Oculus Touch") || bG.id.startsWith("Spatial Controller"))) {
        if (bi === bf) {
          return bG;
        }
        bi++;
      }
    }
  }
  function bZ(bf, bi) {
    if (bi !== null && bi.length === 4) {
      bf.set(bi[0] * bg, bi[1] * bh, bi[2] * bg, bi[3] * bh);
    }
  }
  this.enabled = false;
  this.getController = function (bf) {
    var bg = bI[bf];
    if (bg === undefined) {
      (bg = new Group()).matrixAutoUpdate = false;
      bg.visible = false;
      bI[bf] = bg;
    }
    return bg;
  };
  this.getDevice = function () {
    return bF;
  };
  this.setDevice = function (bf) {
    if (bf !== undefined) {
      bF = bf;
    }
    c0.setContext(bf);
  };
  this.setFramebufferScaleFactor = function (bf) {
    bL = bf;
  };
  this.setReferenceSpaceType = function (bf) {
    bM = bf;
  };
  this.setPoseTarget = function (bf) {
    if (bf !== undefined) {
      bH = bf;
    }
  };
  this.getCamera = function (bf) {
    var bg = bM === "local-floor" ? 1.6 : 0;
    if (bT() === false) {
      bf.position.set(0, bg, 0);
      bf.rotation.set(0, 0, 0);
      return bf;
    }
    bF.depthNear = bf.near;
    bF.depthFar = bf.far;
    bF.getFrameData(bG);
    if (bM === "local-floor") {
      var bh = bF.stageParameters;
      if (bh) {
        bJ.fromArray(bh.sittingToStandingTransform);
      } else {
        bJ.makeTranslation(0, bg, 0);
      }
    }
    var bi = bG.pose;
    var bL = bH !== null ? bH : bf;
    bL.matrix.copy(bJ);
    bL.matrix.decompose(bL.position, bL.quaternion, bL.scale);
    if (bi.orientation !== null) {
      bO.fromArray(bi.orientation);
      bL.quaternion.multiply(bO);
    }
    if (bi.position !== null) {
      bO.setFromRotationMatrix(bJ);
      bP.fromArray(bi.position);
      bP.applyQuaternion(bO);
      bL.position.add(bP);
    }
    bL.updateMatrixWorld();
    bQ.near = bf.near;
    bR.near = bf.near;
    bQ.far = bf.far;
    bR.far = bf.far;
    bQ.matrixWorldInverse.fromArray(bG.leftViewMatrix);
    bR.matrixWorldInverse.fromArray(bG.rightViewMatrix);
    bK.getInverse(bJ);
    if (bM === "local-floor") {
      bQ.matrixWorldInverse.multiply(bK);
      bR.matrixWorldInverse.multiply(bK);
    }
    var bU = bL.parent;
    if (bU !== null) {
      bN.getInverse(bU.matrixWorld);
      bQ.matrixWorldInverse.multiply(bN);
      bR.matrixWorldInverse.multiply(bN);
    }
    bQ.matrixWorld.getInverse(bQ.matrixWorldInverse);
    bR.matrixWorld.getInverse(bR.matrixWorldInverse);
    bQ.projectionMatrix.fromArray(bG.leftProjectionMatrix);
    bR.projectionMatrix.fromArray(bG.rightProjectionMatrix);
    a6Q(bS, bQ, bR);
    var bV = bF.getLayers();
    if (bV.length) {
      var bW = bV[0];
      bZ(bQ.viewport, bW.leftBounds);
      bZ(bR.viewport, bW.rightBounds);
    }
    (function () {
      for (var bf = 0; bf < bI.length; bf++) {
        var bg = bI[bf];
        var bh = bY(bf);
        if (bh !== undefined && bh.pose !== undefined) {
          if (bh.pose === null) {
            return;
          }
          var bi = bh.pose;
          if (bi.hasPosition === false) {
            bg.position.set(0.2, -0.6, -0.05);
          }
          if (bi.position !== null) {
            bg.position.fromArray(bi.position);
          }
          if (bi.orientation !== null) {
            bg.quaternion.fromArray(bi.orientation);
          }
          bg.matrix.compose(bg.position, bg.quaternion, bg.scale);
          bg.matrix.premultiply(bJ);
          bg.matrix.decompose(bg.position, bg.quaternion, bg.scale);
          bg.matrixWorldNeedsUpdate = true;
          bg.visible = true;
          var bF = bh.id === "Daydream Controller" ? 0 : 1;
          if (bX[bf] === undefined) {
            bX[bf] = false;
          }
          if (bX[bf] !== bh.buttons[bF].pressed) {
            bX[bf] = bh.buttons[bF].pressed;
            if (bX[bf] === true) {
              bg.dispatchEvent({
                type: "selectstart"
              });
            } else {
              bg.dispatchEvent({
                type: "selectend"
              });
              bg.dispatchEvent({
                type: "select"
              });
            }
          }
        } else {
          bg.visible = false;
        }
      }
    })();
    return bS;
  };
  this.getStandingMatrix = function () {
    return bJ;
  };
  this.isPresenting = bT;
  var c0 = new xp();
  this.setAnimationLoop = function (bf) {
    c0.setAnimationLoop(bf);
    if (bT()) {
      c0.start();
    }
  };
  this.submitFrame = function () {
    if (bT()) {
      bF.submitFrame();
    }
  };
  this.dispose = function () {
    if (typeof window != "undefined") {
      window.removeEventListener("vrdisplaypresentchange", bW);
    }
  };
  this.setFrameOfReferenceType = function () {
    console.warn("THREE.WebVRManager: setFrameOfReferenceType() has been deprecated.");
  };
}
function a87(bf) {
  var bg = bf.context;
  var bh = null;
  var bi = null;
  var bF = "local-floor";
  var bG = null;
  var bH = [];
  var bI = [];
  function bJ() {
    return bh !== null && bi !== null;
  }
  var bK = new PerspectiveCamera();
  bK.layers.enable(1);
  bK.viewport = new Vector4();
  var bL = new PerspectiveCamera();
  bL.layers.enable(2);
  bL.viewport = new Vector4();
  var bM = new ArrayCamera([bK, bL]);
  function bN(bf) {
    for (var bg = 0; bg < bH.length; bg++) {
      if (bI[bg] === bf.inputSource) {
        bH[bg].dispatchEvent({
          type: bf.type
        });
      }
    }
  }
  function bO() {
    bf.setFramebuffer(null);
    bf.setRenderTarget(bf.getRenderTarget());
    bS.stop();
  }
  function bP(bf) {
    bi = bf;
    bS.setContext(bh);
    bS.start();
  }
  function bQ(bf, bg) {
    if (bg === null) {
      bf.matrixWorld.copy(bf.matrix);
    } else {
      bf.matrixWorld.multiplyMatrices(bg.matrixWorld, bf.matrix);
    }
    bf.matrixWorldInverse.getInverse(bf.matrixWorld);
  }
  bM.layers.enable(1);
  bM.layers.enable(2);
  this.enabled = false;
  this.getController = function (bf) {
    var bg = bH[bf];
    if (bg === undefined) {
      (bg = new Group()).matrixAutoUpdate = false;
      bg.visible = false;
      bH[bf] = bg;
    }
    return bg;
  };
  this.setFramebufferScaleFactor = function (bf) {};
  this.setReferenceSpaceType = function (bf) {
    bF = bf;
  };
  this.getSession = function () {
    return bh;
  };
  this.setSession = function (bf) {
    if ((bh = bf) !== null) {
      bh.addEventListener("select", bN);
      bh.addEventListener("selectstart", bN);
      bh.addEventListener("selectend", bN);
      bh.addEventListener("end", bO);
      bh.updateRenderState({
        baseLayer: new XRWebGLLayer(bh, bg)
      });
      bh.requestReferenceSpace(bF).then(bP);
      bI = bh.inputSources;
      bh.addEventListener("inputsourceschange", function () {
        bI = bh.inputSources;
        console.log(bI);
        for (var bf = 0; bf < bH.length; bf++) {
          bH[bf].userData.inputSource = bI[bf];
        }
      });
    }
  };
  this.getCamera = function (bf) {
    if (bJ()) {
      var bg = bf.parent;
      var bh = bM.cameras;
      bQ(bM, bg);
      for (var bi = 0; bi < bh.length; bi++) {
        bQ(bh[bi], bg);
      }
      bf.matrixWorld.copy(bM.matrixWorld);
      for (var bF = bf.children, bG = (bi = 0, bF.length); bi < bG; bi++) {
        bF[bi].updateMatrixWorld(true);
      }
      a6Q(bM, bK, bL);
      return bM;
    }
    return bf;
  };
  this.isPresenting = bJ;
  var bR = null;
  var bS = new xp();
  bS.setAnimationLoop(function (bg, bF) {
    if ((bG = bF.getViewerPose(bi)) !== null) {
      var bJ = bG.views;
      var bK = bh.renderState.baseLayer;
      bf.setFramebuffer(bK.framebuffer);
      for (var bL = 0; bL < bJ.length; bL++) {
        var bN = bJ[bL];
        var bO = bK.getViewport(bN);
        var bP = bN.transform.inverse.matrix;
        var bQ = bM.cameras[bL];
        bQ.matrix.fromArray(bP).getInverse(bQ.matrix);
        bQ.projectionMatrix.fromArray(bN.projectionMatrix);
        bQ.viewport.set(bO.x, bO.y, bO.width, bO.height);
        if (bL === 0) {
          bM.matrix.copy(bQ.matrix);
        }
      }
    }
    for (bL = 0; bL < bH.length; bL++) {
      var bS = bH[bL];
      var bT = bI[bL];
      if (bT) {
        var bU = bF.getPose(bT.targetRaySpace, bi);
        if (bU !== null) {
          bS.matrix.fromArray(bU.transform.matrix);
          bS.matrix.decompose(bS.position, bS.rotation, bS.scale);
          bS.visible = true;
          continue;
        }
      }
      bS.visible = false;
    }
    if (bR) {
      bR(bg);
    }
  });
  this.setAnimationLoop = function (bf) {
    bR = bf;
  };
  this.dispose = function () {};
  this.getStandingMatrix = function () {
    console.warn("THREE.WebXRManager: getStandingMatrix() is no longer needed.");
    return new Matrix4();
  };
  this.getDevice = function () {
    console.warn("THREE.WebXRManager: getDevice() has been deprecated.");
  };
  this.setDevice = function () {
    console.warn("THREE.WebXRManager: setDevice() has been deprecated.");
  };
  this.setFrameOfReferenceType = function () {
    console.warn("THREE.WebXRManager: setFrameOfReferenceType() has been deprecated.");
  };
  this.submitFrame = function () {};
}
export function WebGLRenderer(bf) {
  console.log("THREE.WebGLRenderer", REVISION);
  var bg = (bf = bf || {}).canvas !== undefined ? bf.canvas : document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
  var bh = bf.context !== undefined ? bf.context : null;
  var bi = bf.alpha !== undefined && bf.alpha;
  var bF = bf.depth === undefined || bf.depth;
  var bG = bf.stencil === undefined || bf.stencil;
  var bH = bf.antialias !== undefined && bf.antialias;
  var bJ = bf.premultipliedAlpha === undefined || bf.premultipliedAlpha;
  var bK = bf.preserveDrawingBuffer !== undefined && bf.preserveDrawingBuffer;
  var bL = bf.powerPreference !== undefined ? bf.powerPreference : "default";
  var bM = bf.failIfMajorPerformanceCaveat !== undefined && bf.failIfMajorPerformanceCaveat;
  var bN = null;
  var bO = null;
  this.domElement = bg;
  this.context = null;
  this.debug = {
    checkShaderErrors: true
  };
  this.autoClear = true;
  this.autoClearColor = true;
  this.autoClearDepth = true;
  this.autoClearStencil = true;
  this.sortObjects = true;
  this.clippingPlanes = [];
  this.localClippingEnabled = false;
  this.gammaFactor = 2;
  this.gammaInput = false;
  this.gammaOutput = false;
  this.physicallyCorrectLights = false;
  this.toneMapping = LinearToneMapping;
  this.toneMappingExposure = 1;
  this.toneMappingWhitePoint = 1;
  this.maxMorphTargets = 8;
  this.maxMorphNormals = 4;
  var bP;
  var bQ;
  var bR;
  var bS;
  var bT;
  var bV;
  var bW;
  var bX;
  var bY;
  var bZ;
  var c0;
  var c1;
  var c2;
  var c3;
  var c4;
  var c5;
  var c6;
  var c7;
  var c8 = this;
  var c9 = false;
  var ca = null;
  var cb = 0;
  var cc = 0;
  var cd = null;
  var ce = null;
  var cf = -1;
  var cg = {
    geometry: null,
    program: null,
    wireframe: false
  };
  var ch = null;
  var ci = null;
  var cj = new Vector4();
  var ck = new Vector4();
  var cl = null;
  var cm = bg.width;
  var cn = bg.height;
  var co = 1;
  var cp = new Vector4(0, 0, cm, cn);
  var cq = new Vector4(0, 0, cm, cn);
  var cr = false;
  var cs = new Frustum();
  var ct = new M2();
  var cu = false;
  var cv = false;
  var cw = new Matrix4();
  var cx = new Vector3();
  function cy() {
    if (cd === null) {
      return co;
    } else {
      return 1;
    }
  }
  try {
    var cA = {
      alpha: bi,
      depth: bF,
      stencil: bG,
      antialias: bH,
      premultipliedAlpha: bJ,
      preserveDrawingBuffer: bK,
      powerPreference: bL,
      failIfMajorPerformanceCaveat: bM,
      xrCompatible: true
    };
    bg.addEventListener("webglcontextlost", cE, false);
    bg.addEventListener("webglcontextrestored", cF, false);
    if ((bP = bh || bg.getContext("webgl", cA) || bg.getContext("experimental-webgl", cA)) === null) {
      throw bg.getContext("webgl") !== null ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.");
    }
    if (bP.getShaderPrecisionFormat === undefined) {
      bP.getShaderPrecisionFormat = function () {
        return {
          rangeMin: 1,
          rangeMax: 1,
          precision: 1
        };
      };
    }
  } catch (a9S) {
    console.error("THREE.WebGLRenderer: " + a9S.message);
    throw a9S;
  }
  function cB() {
    bQ = new MB(bP);
    if (!(bR = new LG(bP, bQ, bf)).isWebGL2) {
      bQ.get("WEBGL_depth_texture");
      bQ.get("OES_texture_float");
      bQ.get("OES_texture_half_float");
      bQ.get("OES_texture_half_float_linear");
      bQ.get("OES_standard_derivatives");
      bQ.get("OES_element_index_uint");
      bQ.get("ANGLE_instanced_arrays");
    }
    bQ.get("OES_texture_float_linear");
    c7 = new WebGLUtils(bP, bQ, bR);
    (bS = new a1i(bP, bQ, c7, bR)).scissor(ck.copy(cq).multiplyScalar(co));
    bS.viewport(cj.copy(cp).multiplyScalar(co));
    bT = new Nv(bP);
    bV = new Yj();
    bW = new a3q(bP, bQ, bS, bV, bR, c7, bT);
    bX = new xy(bP);
    bY = new MG(bP, bX, bT);
    bZ = new NV(bY, bT);
    c4 = new NE(bP);
    c0 = new XC(c8, bQ, bR, bW);
    c1 = new YZ();
    c2 = new ZN();
    c3 = new L1(c8, bS, bZ, bJ);
    c5 = new Lt(bP, bQ, bT, bR);
    c6 = new Nf(bP, bQ, bT, bR);
    bT.programs = c0.programs;
    c8.context = bP;
    c8.capabilities = bR;
    c8.extensions = bQ;
    c8.properties = bV;
    c8.renderLists = c1;
    c8.state = bS;
    c8.info = bT;
  }
  cB();
  var cC = typeof navigator != "undefined" && "xr" in navigator && "supportsSession" in navigator.xr ? new a87(c8) : new a7d(c8);
  this.vr = cC;
  var cD = new ZZ(c8, bZ, bR.maxTextureSize);
  function cE(bf) {
    bf.preventDefault();
    console.log("THREE.WebGLRenderer: Context Lost.");
    c9 = true;
  }
  function cF() {
    console.log("THREE.WebGLRenderer: Context Restored.");
    c9 = false;
    cB();
  }
  function cG(bf) {
    var bg = bf.target;
    bg.removeEventListener("dispose", cG);
    (function (bf) {
      cH(bf);
      bV.remove(bf);
    })(bg);
  }
  function cH(bf) {
    var bg = bV.get(bf).program;
    bf.program = undefined;
    if (bg !== undefined) {
      c0.releaseProgram(bg);
    }
  }
  this.shadowMap = cD;
  this.getContext = function () {
    return bP;
  };
  this.getContextAttributes = function () {
    return bP.getContextAttributes();
  };
  this.forceContextLoss = function () {
    var bf = bQ.get("WEBGL_lose_context");
    if (bf) {
      bf.loseContext();
    }
  };
  this.forceContextRestore = function () {
    var bf = bQ.get("WEBGL_lose_context");
    if (bf) {
      bf.restoreContext();
    }
  };
  this.getPixelRatio = function () {
    return co;
  };
  this.setPixelRatio = function (bf) {
    if (bf !== undefined) {
      co = bf;
      this.setSize(cm, cn, false);
    }
  };
  this.getSize = function (bf) {
    if (bf === undefined) {
      console.warn("WebGLRenderer: .getsize() now requires a Vector2 as an argument");
      bf = new Vector2();
    }
    return bf.set(cm, cn);
  };
  this.setSize = function (bf, bh, bi) {
    if (cC.isPresenting()) {
      console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
    } else {
      cm = bf;
      cn = bh;
      bg.width = bf * co;
      bg.height = bh * co;
      if (bi !== false) {
        bg.style.width = bf + "px";
        bg.style.height = bh + "px";
      }
      this.setViewport(0, 0, bf, bh);
    }
  };
  this.getDrawingBufferSize = function (bf) {
    if (bf === undefined) {
      console.warn("WebGLRenderer: .getdrawingBufferSize() now requires a Vector2 as an argument");
      bf = new Vector2();
    }
    return bf.set(cm * co, cn * co);
  };
  this.setDrawingBufferSize = function (bf, bh, bi) {
    cm = bf;
    cn = bh;
    co = bi;
    bg.width = bf * bi;
    bg.height = bh * bi;
    this.setViewport(0, 0, bf, bh);
  };
  this.getCurrentViewport = function (bf) {
    if (bf === undefined) {
      console.warn("WebGLRenderer: .getCurrentViewport() now requires a Vector4 as an argument");
      bf = new Vector4();
    }
    return bf.copy(cj);
  };
  this.getViewport = function (bf) {
    return bf.copy(cp);
  };
  this.setViewport = function (bf, bg, bh, bi) {
    if (bf.isVector4) {
      cp.set(bf.x, bf.y, bf.z, bf.w);
    } else {
      cp.set(bf, bg, bh, bi);
    }
    bS.viewport(cj.copy(cp).multiplyScalar(co));
  };
  this.getScissor = function (bf) {
    return bf.copy(cq);
  };
  this.setScissor = function (bf, bg, bh, bi) {
    if (bf.isVector4) {
      cq.set(bf.x, bf.y, bf.z, bf.w);
    } else {
      cq.set(bf, bg, bh, bi);
    }
    bS.scissor(ck.copy(cq).multiplyScalar(co));
  };
  this.getScissorTest = function () {
    return cr;
  };
  this.setScissorTest = function (bf) {
    bS.setScissorTest(cr = bf);
  };
  this.getClearColor = function () {
    return c3.getClearColor();
  };
  this.setClearColor = function () {
    c3.setClearColor.apply(c3, arguments);
  };
  this.getClearAlpha = function () {
    return c3.getClearAlpha();
  };
  this.setClearAlpha = function () {
    c3.setClearAlpha.apply(c3, arguments);
  };
  this.clear = function (bf, bg, bh) {
    var bi = 0;
    if (bf === undefined || bf) {
      bi |= 16384;
    }
    if (bg === undefined || bg) {
      bi |= 256;
    }
    if (bh === undefined || bh) {
      bi |= 1024;
    }
    bP.clear(bi);
  };
  this.clearColor = function () {
    this.clear(true, false, false);
  };
  this.clearDepth = function () {
    this.clear(false, true, false);
  };
  this.clearStencil = function () {
    this.clear(false, false, true);
  };
  this.dispose = function () {
    bg.removeEventListener("webglcontextlost", cE, false);
    bg.removeEventListener("webglcontextrestored", cF, false);
    c1.dispose();
    c2.dispose();
    bV.dispose();
    bZ.dispose();
    cC.dispose();
    cJ.stop();
  };
  this.renderBufferImmediate = function (bf, bg) {
    bS.initAttributes();
    var bh = bV.get(bf);
    if (bf.hasPositions && !bh.position) {
      bh.position = bP.createBuffer();
    }
    if (bf.hasNormals && !bh.normal) {
      bh.normal = bP.createBuffer();
    }
    if (bf.hasUvs && !bh.uv) {
      bh.uv = bP.createBuffer();
    }
    if (bf.hasColors && !bh.color) {
      bh.color = bP.createBuffer();
    }
    var bi = bg.getAttributes();
    if (bf.hasPositions) {
      bP.bindBuffer(34962, bh.position);
      bP.bufferData(34962, bf.positionArray, 35048);
      bS.enableAttribute(bi.position);
      bP.vertexAttribPointer(bi.position, 3, 5126, false, 0, 0);
    }
    if (bf.hasNormals) {
      bP.bindBuffer(34962, bh.normal);
      bP.bufferData(34962, bf.normalArray, 35048);
      bS.enableAttribute(bi.normal);
      bP.vertexAttribPointer(bi.normal, 3, 5126, false, 0, 0);
    }
    if (bf.hasUvs) {
      bP.bindBuffer(34962, bh.uv);
      bP.bufferData(34962, bf.uvArray, 35048);
      bS.enableAttribute(bi.uv);
      bP.vertexAttribPointer(bi.uv, 2, 5126, false, 0, 0);
    }
    if (bf.hasColors) {
      bP.bindBuffer(34962, bh.color);
      bP.bufferData(34962, bf.colorArray, 35048);
      bS.enableAttribute(bi.color);
      bP.vertexAttribPointer(bi.color, 3, 5126, false, 0, 0);
    }
    bS.disableUnusedAttributes();
    bP.drawArrays(4, 0, bf.count);
    bf.count = 0;
  };
  this.renderBufferDirect = function (bf, bg, bh, bi, bF, bG) {
    var bH = bF.isMesh && bF.matrixWorld.determinant() < 0;
    bS.setMaterial(bi, bH);
    var bI = cN(bf, bg, bi, bF);
    var bJ = false;
    if (cg.geometry !== bh.id || cg.program !== bI.id || cg.wireframe !== (bi.wireframe === true)) {
      cg.geometry = bh.id;
      cg.program = bI.id;
      cg.wireframe = bi.wireframe === true;
      bJ = true;
    }
    if (bF.morphTargetInfluences) {
      c4.update(bF, bh, bi, bI);
      bJ = true;
    }
    var bK;
    var bL = bh.index;
    var bM = bh.attributes.position;
    var bN = 1;
    if (bi.wireframe === true) {
      bL = bY.getWireframeAttribute(bh);
      bN = 2;
    }
    var bO = c5;
    if (bL !== null) {
      bK = bX.get(bL);
      (bO = c6).setIndex(bK);
    }
    if (bJ) {
      (function (bf, bg, bh) {
        if (bh && bh.isInstancedBufferGeometry && !bR.isWebGL2 && bQ.get("ANGLE_instanced_arrays") === null) {
          console.error("THREE.WebGLRenderer.setupVertexAttributes: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");
          return;
        }
        bS.initAttributes();
        var bi = bh.attributes;
        var bF = bg.getAttributes();
        var bG = bf.defaultAttributeValues;
        for (var bH in bF) {
          var bI = bF[bH];
          if (bI >= 0) {
            var bJ = bi[bH];
            if (bJ !== undefined) {
              var bK = bJ.normalized;
              var bL = bJ.itemSize;
              var bM = bX.get(bJ);
              if (bM === undefined) {
                continue;
              }
              var bN = bM.buffer;
              var bO = bM.type;
              var bT = bM.bytesPerElement;
              if (bJ.isInterleavedBufferAttribute) {
                var bU = bJ.data;
                var bV = bU.stride;
                var bW = bJ.offset;
                if (bU && bU.isInstancedInterleavedBuffer) {
                  bS.enableAttributeAndDivisor(bI, bU.meshPerAttribute);
                  if (bh.maxInstancedCount === undefined) {
                    bh.maxInstancedCount = bU.meshPerAttribute * bU.count;
                  }
                } else {
                  bS.enableAttribute(bI);
                }
                bP.bindBuffer(34962, bN);
                bP.vertexAttribPointer(bI, bL, bO, bK, bV * bT, bW * bT);
              } else {
                if (bJ.isInstancedBufferAttribute) {
                  bS.enableAttributeAndDivisor(bI, bJ.meshPerAttribute);
                  if (bh.maxInstancedCount === undefined) {
                    bh.maxInstancedCount = bJ.meshPerAttribute * bJ.count;
                  }
                } else {
                  bS.enableAttribute(bI);
                }
                bP.bindBuffer(34962, bN);
                bP.vertexAttribPointer(bI, bL, bO, bK, 0, 0);
              }
            } else if (bG !== undefined) {
              var bY = bG[bH];
              if (bY !== undefined) {
                switch (bY.length) {
                  case 2:
                    bP.vertexAttrib2fv(bI, bY);
                    break;
                  case 3:
                    bP.vertexAttrib3fv(bI, bY);
                    break;
                  case 4:
                    bP.vertexAttrib4fv(bI, bY);
                    break;
                  default:
                    bP.vertexAttrib1fv(bI, bY);
                }
              }
            }
          }
        }
        bS.disableUnusedAttributes();
      })(bi, bI, bh);
      if (bL !== null) {
        bP.bindBuffer(34963, bK.buffer);
      }
    }
    var bT = Infinity;
    if (bL !== null) {
      bT = bL.count;
    } else if (bM !== undefined) {
      bT = bM.count;
    }
    var bU = bh.drawRange.start * bN;
    var bV = bh.drawRange.count * bN;
    var bW = bG !== null ? bG.start * bN : 0;
    var bZ = bG !== null ? bG.count * bN : Infinity;
    var c0 = Math.max(bU, bW);
    var c1 = Math.min(bT, bU + bV, bW + bZ) - 1;
    var c2 = Math.max(0, c1 - c0 + 1);
    if (c2 !== 0) {
      if (bF.isMesh) {
        if (bi.wireframe === true) {
          bS.setLineWidth(bi.wireframeLinewidth * cy());
          bO.setMode(1);
        } else {
          switch (bF.drawMode) {
            case TrianglesDrawMode:
              bO.setMode(4);
              break;
            case TriangleStripDrawMode:
              bO.setMode(5);
              break;
            case TriangleFanDrawMode:
              bO.setMode(6);
          }
        }
      } else if (bF.isLine) {
        var c3 = bi.linewidth;
        if (c3 === undefined) {
          c3 = 1;
        }
        bS.setLineWidth(c3 * cy());
        if (bF.isLineSegments) {
          bO.setMode(1);
        } else if (bF.isLineLoop) {
          bO.setMode(2);
        } else {
          bO.setMode(3);
        }
      } else if (bF.isPoints) {
        bO.setMode(0);
      } else if (bF.isSprite) {
        bO.setMode(4);
      }
      if (bh && bh.isInstancedBufferGeometry) {
        if (bh.maxInstancedCount > 0) {
          bO.renderInstances(bh, c0, c2);
        }
      } else {
        bO.render(c0, c2);
      }
    }
  };
  this.compile = function (bf, bg) {
    (bO = c2.get(bf, bg)).init();
    bf.traverse(function (bf) {
      if (bf.isLight) {
        bO.pushLight(bf);
        if (bf.castShadow) {
          bO.pushShadow(bf);
        }
      }
    });
    bO.setupLights(bg);
    bf.traverse(function (bg) {
      if (bg.material) {
        if (Array.isArray(bg.material)) {
          for (var bh = 0; bh < bg.material.length; bh++) {
            cM(bg.material[bh], bf.fog, bg);
          }
        } else {
          cM(bg.material, bf.fog, bg);
        }
      }
    });
  };
  var cI = null;
  var cJ = new xp();
  function cK(bf, bg, bh, bi) {
    for (var bF = 0, bG = bf.length; bF < bG; bF++) {
      var bH = bf[bF];
      var bI = bH.object;
      var bJ = bH.geometry;
      var bK = bi === undefined ? bH.material : bi;
      var bL = bH.group;
      if (bh.isArrayCamera) {
        ci = bh;
        for (var bM = bh.cameras, bN = 0, bP = bM.length; bN < bP; bN++) {
          var bQ = bM[bN];
          if (bI.layers.test(bQ.layers)) {
            bS.viewport(cj.copy(bQ.viewport));
            bO.setupLights(bQ);
            cL(bI, bg, bQ, bJ, bK, bL);
          }
        }
      } else {
        ci = null;
        cL(bI, bg, bh, bJ, bK, bL);
      }
    }
  }
  function cL(bf, bg, bh, bi, bF, bG) {
    bf.onBeforeRender(c8, bg, bh, bi, bF, bG);
    bO = c2.get(bg, ci || bh);
    bf.modelViewMatrix.multiplyMatrices(bh.matrixWorldInverse, bf.matrixWorld);
    bf.normalMatrix.getNormalMatrix(bf.modelViewMatrix);
    if (bf.isImmediateRenderObject) {
      bS.setMaterial(bF);
      var bH = cN(bh, bg.fog, bF, bf);
      cg.geometry = null;
      cg.program = null;
      cg.wireframe = false;
      (function (bf, bg) {
        bf.render(function (bf) {
          c8.renderBufferImmediate(bf, bg);
        });
      })(bf, bH);
    } else {
      c8.renderBufferDirect(bh, bg.fog, bi, bF, bf, bG);
    }
    bf.onAfterRender(c8, bg, bh, bi, bF, bG);
    bO = c2.get(bg, ci || bh);
  }
  function cM(bf, bg, bh) {
    var bi = bV.get(bf);
    var bF = bO.state.lights;
    var bG = bO.state.shadowsArray;
    var bH = bi.lightsHash;
    var bI = bF.state.hash;
    var bJ = c0.getParameters(bf, bF.state, bG, bg, ct.numPlanes, ct.numIntersection, bh);
    var bK = c0.getProgramCode(bf, bJ);
    var bL = bi.program;
    var bM = true;
    if (bL === undefined) {
      bf.addEventListener("dispose", cG);
    } else if (bL.code !== bK) {
      cH(bf);
    } else if (bH.stateID !== bI.stateID || bH.directionalLength !== bI.directionalLength || bH.pointLength !== bI.pointLength || bH.spotLength !== bI.spotLength || bH.rectAreaLength !== bI.rectAreaLength || bH.hemiLength !== bI.hemiLength || bH.shadowsLength !== bI.shadowsLength) {
      bH.stateID = bI.stateID;
      bH.directionalLength = bI.directionalLength;
      bH.pointLength = bI.pointLength;
      bH.spotLength = bI.spotLength;
      bH.rectAreaLength = bI.rectAreaLength;
      bH.hemiLength = bI.hemiLength;
      bH.shadowsLength = bI.shadowsLength;
      bM = false;
    } else {
      if (bJ.shaderID !== undefined) {
        return;
      }
      bM = false;
    }
    if (bM) {
      if (bJ.shaderID) {
        var bN = ShaderLib[bJ.shaderID];
        bi.shader = {
          name: bf.type,
          uniforms: vQ(bN.uniforms),
          vertexShader: bN.vertexShader,
          fragmentShader: bN.fragmentShader
        };
      } else {
        bi.shader = {
          name: bf.type,
          uniforms: bf.uniforms,
          vertexShader: bf.vertexShader,
          fragmentShader: bf.fragmentShader
        };
      }
      bf.onBeforeCompile(bi.shader, c8);
      bK = c0.getProgramCode(bf, bJ);
      bL = c0.acquireProgram(bf, bi.shader, bJ, bK);
      bi.program = bL;
      bf.program = bL;
    }
    var bP = bL.getAttributes();
    if (bf.morphTargets) {
      bf.numSupportedMorphTargets = 0;
      for (var bQ = 0; bQ < c8.maxMorphTargets; bQ++) {
        if (bP["morphTarget" + bQ] >= 0) {
          bf.numSupportedMorphTargets++;
        }
      }
    }
    if (bf.morphNormals) {
      bf.numSupportedMorphNormals = 0;
      for (bQ = 0; bQ < c8.maxMorphNormals; bQ++) {
        if (bP["morphNormal" + bQ] >= 0) {
          bf.numSupportedMorphNormals++;
        }
      }
    }
    var bR = bi.shader.uniforms;
    if (!bf.isShaderMaterial && !bf.isRawShaderMaterial || bf.clipping === true) {
      bi.numClippingPlanes = ct.numPlanes;
      bi.numIntersection = ct.numIntersection;
      bR.clippingPlanes = ct.uniform;
    }
    bi.fog = bg;
    if (bH === undefined) {
      bi.lightsHash = bH = {};
    }
    bH.stateID = bI.stateID;
    bH.directionalLength = bI.directionalLength;
    bH.pointLength = bI.pointLength;
    bH.spotLength = bI.spotLength;
    bH.rectAreaLength = bI.rectAreaLength;
    bH.hemiLength = bI.hemiLength;
    bH.shadowsLength = bI.shadowsLength;
    if (bf.lights) {
      bR.ambientLightColor.value = bF.state.ambient;
      bR.lightProbe.value = bF.state.probe;
      bR.directionalLights.value = bF.state.directional;
      bR.spotLights.value = bF.state.spot;
      bR.rectAreaLights.value = bF.state.rectArea;
      bR.pointLights.value = bF.state.point;
      bR.hemisphereLights.value = bF.state.hemi;
      bR.directionalShadowMap.value = bF.state.directionalShadowMap;
      bR.directionalShadowMatrix.value = bF.state.directionalShadowMatrix;
      bR.spotShadowMap.value = bF.state.spotShadowMap;
      bR.spotShadowMatrix.value = bF.state.spotShadowMatrix;
      bR.pointShadowMap.value = bF.state.pointShadowMap;
      bR.pointShadowMatrix.value = bF.state.pointShadowMatrix;
    }
    var bS = bi.program.getUniforms();
    var bT = VF.seqWithValue(bS.seq, bR);
    bi.uniformsList = bT;
  }
  function cN(bf, bg, bh, bi) {
    bW.resetTextureUnits();
    var bF = bV.get(bh);
    var bG = bO.state.lights;
    var bH = bF.lightsHash;
    var bI = bG.state.hash;
    if (cu && (cv || bf !== ch)) {
      var bJ = bf === ch && bh.id === cf;
      ct.setState(bh.clippingPlanes, bh.clipIntersection, bh.clipShadows, bf, bF, bJ);
    }
    if (bh.needsUpdate === false) {
      if (bF.program === undefined) {
        bh.needsUpdate = true;
      } else if (bh.fog && bF.fog !== bg) {
        bh.needsUpdate = true;
      } else if (!!bh.lights && (bH.stateID !== bI.stateID || bH.directionalLength !== bI.directionalLength || bH.pointLength !== bI.pointLength || bH.spotLength !== bI.spotLength || bH.rectAreaLength !== bI.rectAreaLength || bH.hemiLength !== bI.hemiLength || bH.shadowsLength !== bI.shadowsLength) || bF.numClippingPlanes !== undefined && (bF.numClippingPlanes !== ct.numPlanes || bF.numIntersection !== ct.numIntersection)) {
        bh.needsUpdate = true;
      }
    }
    if (bh.needsUpdate) {
      cM(bh, bg, bi);
      bh.needsUpdate = false;
    }
    var bK;
    var bL;
    var bM = false;
    var bN = false;
    var bQ = false;
    var bT = bF.program;
    var bX = bT.getUniforms();
    var bY = bF.shader.uniforms;
    if (bS.useProgram(bT.program)) {
      bM = true;
      bN = true;
      bQ = true;
    }
    if (bh.id !== cf) {
      cf = bh.id;
      bN = true;
    }
    if (bM || ch !== bf) {
      bX.setValue(bP, "projectionMatrix", bf.projectionMatrix);
      if (bR.logarithmicDepthBuffer) {
        bX.setValue(bP, "logDepthBufFC", 2 / (Math.log(bf.far + 1) / Math.LN2));
      }
      if (ch !== bf) {
        ch = bf;
        bN = true;
        bQ = true;
      }
      if (bh.isShaderMaterial || bh.isMeshPhongMaterial || bh.isMeshStandardMaterial || bh.envMap) {
        var bZ = bX.map.cameraPosition;
        if (bZ !== undefined) {
          bZ.setValue(bP, cx.setFromMatrixPosition(bf.matrixWorld));
        }
      }
      if (bh.isMeshPhongMaterial || bh.isMeshLambertMaterial || bh.isMeshBasicMaterial || bh.isMeshStandardMaterial || bh.isShaderMaterial || bh.skinning) {
        bX.setValue(bP, "viewMatrix", bf.matrixWorldInverse);
      }
    }
    if (bh.skinning) {
      bX.setOptional(bP, bi, "bindMatrix");
      bX.setOptional(bP, bi, "bindMatrixInverse");
      var c0 = bi.skeleton;
      if (c0) {
        var c1 = c0.bones;
        if (bR.floatVertexTextures) {
          if (c0.boneTexture === undefined) {
            var c2 = Math.sqrt(c1.length * 4);
            c2 = Math.ceilPowerOfTwo(c2);
            c2 = Math.max(c2, 4);
            var c3 = new Float32Array(c2 * c2 * 4);
            c3.set(c0.boneMatrices);
            var c4 = new DataTexture(c3, c2, c2, RGBAFormat, FloatType);
            c4.needsUpdate = true;
            c0.boneMatrices = c3;
            c0.boneTexture = c4;
            c0.boneTextureSize = c2;
          }
          bX.setValue(bP, "boneTexture", c0.boneTexture, bW);
          bX.setValue(bP, "boneTextureSize", c0.boneTextureSize);
        } else {
          bX.setOptional(bP, c0, "boneMatrices");
        }
      }
    }
    if (bN) {
      bX.setValue(bP, "toneMappingExposure", c8.toneMappingExposure);
      bX.setValue(bP, "toneMappingWhitePoint", c8.toneMappingWhitePoint);
      if (bh.lights) {
        bL = bQ;
        (bK = bY).ambientLightColor.needsUpdate = bL;
        bK.lightProbe.needsUpdate = bL;
        bK.directionalLights.needsUpdate = bL;
        bK.pointLights.needsUpdate = bL;
        bK.spotLights.needsUpdate = bL;
        bK.rectAreaLights.needsUpdate = bL;
        bK.hemisphereLights.needsUpdate = bL;
      }
      if (bg && bh.fog) {
        (function (bf, bg) {
          bf.fogColor.value.copy(bg.color);
          if (bg.isFog) {
            bf.fogNear.value = bg.near;
            bf.fogFar.value = bg.far;
          } else if (bg.isFogExp2) {
            bf.fogDensity.value = bg.density;
          }
        })(bY, bg);
      }
      if (bh.isMeshBasicMaterial) {
        cO(bY, bh);
      } else if (bh.isMeshLambertMaterial) {
        cO(bY, bh);
        (function (bf, bg) {
          if (bg.emissiveMap) {
            bf.emissiveMap.value = bg.emissiveMap;
          }
        })(bY, bh);
      } else if (bh.isMeshPhongMaterial) {
        cO(bY, bh);
        if (bh.isMeshToonMaterial) {
          (function (bf, bg) {
            cP(bf, bg);
            if (bg.gradientMap) {
              bf.gradientMap.value = bg.gradientMap;
            }
          })(bY, bh);
        } else {
          cP(bY, bh);
        }
      } else if (bh.isMeshStandardMaterial) {
        cO(bY, bh);
        if (bh.isMeshPhysicalMaterial) {
          (function (bf, bg) {
            cQ(bf, bg);
            bf.reflectivity.value = bg.reflectivity;
            bf.clearCoat.value = bg.clearCoat;
            bf.clearCoatRoughness.value = bg.clearCoatRoughness;
          })(bY, bh);
        } else {
          cQ(bY, bh);
        }
      } else if (bh.isMeshMatcapMaterial) {
        cO(bY, bh);
        (function (bf, bg) {
          if (bg.matcap) {
            bf.matcap.value = bg.matcap;
          }
          if (bg.bumpMap) {
            bf.bumpMap.value = bg.bumpMap;
            bf.bumpScale.value = bg.bumpScale;
            if (bg.side === BackSide) {
              bf.bumpScale.value *= -1;
            }
          }
          if (bg.normalMap) {
            bf.normalMap.value = bg.normalMap;
            bf.normalScale.value.copy(bg.normalScale);
            if (bg.side === BackSide) {
              bf.normalScale.value.negate();
            }
          }
          if (bg.displacementMap) {
            bf.displacementMap.value = bg.displacementMap;
            bf.displacementScale.value = bg.displacementScale;
            bf.displacementBias.value = bg.displacementBias;
          }
        })(bY, bh);
      } else if (bh.isMeshDepthMaterial) {
        cO(bY, bh);
        (function (bf, bg) {
          if (bg.displacementMap) {
            bf.displacementMap.value = bg.displacementMap;
            bf.displacementScale.value = bg.displacementScale;
            bf.displacementBias.value = bg.displacementBias;
          }
        })(bY, bh);
      } else if (bh.isMeshDistanceMaterial) {
        cO(bY, bh);
        (function (bf, bg) {
          if (bg.displacementMap) {
            bf.displacementMap.value = bg.displacementMap;
            bf.displacementScale.value = bg.displacementScale;
            bf.displacementBias.value = bg.displacementBias;
          }
          bf.referencePosition.value.copy(bg.referencePosition);
          bf.nearDistance.value = bg.nearDistance;
          bf.farDistance.value = bg.farDistance;
        })(bY, bh);
      } else if (bh.isMeshNormalMaterial) {
        cO(bY, bh);
        (function (bf, bg) {
          if (bg.bumpMap) {
            bf.bumpMap.value = bg.bumpMap;
            bf.bumpScale.value = bg.bumpScale;
            if (bg.side === BackSide) {
              bf.bumpScale.value *= -1;
            }
          }
          if (bg.normalMap) {
            bf.normalMap.value = bg.normalMap;
            bf.normalScale.value.copy(bg.normalScale);
            if (bg.side === BackSide) {
              bf.normalScale.value.negate();
            }
          }
          if (bg.displacementMap) {
            bf.displacementMap.value = bg.displacementMap;
            bf.displacementScale.value = bg.displacementScale;
            bf.displacementBias.value = bg.displacementBias;
          }
        })(bY, bh);
      } else if (bh.isLineBasicMaterial) {
        (function (bf, bg) {
          bf.diffuse.value.copy(bg.color);
          bf.opacity.value = bg.opacity;
        })(bY, bh);
        if (bh.isLineDashedMaterial) {
          (function (bf, bg) {
            bf.dashSize.value = bg.dashSize;
            bf.totalSize.value = bg.dashSize + bg.gapSize;
            bf.scale.value = bg.scale;
          })(bY, bh);
        }
      } else if (bh.isPointsMaterial) {
        (function (bf, bg) {
          bf.diffuse.value.copy(bg.color);
          bf.opacity.value = bg.opacity;
          bf.size.value = bg.size * co;
          bf.scale.value = cn * 0.5;
          bf.map.value = bg.map;
          if (bg.map !== null) {
            if (bg.map.matrixAutoUpdate === true) {
              bg.map.updateMatrix();
            }
            bf.uvTransform.value.copy(bg.map.matrix);
          }
        })(bY, bh);
      } else if (bh.isSpriteMaterial) {
        (function (bf, bg) {
          bf.diffuse.value.copy(bg.color);
          bf.opacity.value = bg.opacity;
          bf.rotation.value = bg.rotation;
          bf.map.value = bg.map;
          if (bg.map !== null) {
            if (bg.map.matrixAutoUpdate === true) {
              bg.map.updateMatrix();
            }
            bf.uvTransform.value.copy(bg.map.matrix);
          }
        })(bY, bh);
      } else if (bh.isShadowMaterial) {
        bY.color.value.copy(bh.color);
        bY.opacity.value = bh.opacity;
      }
      if (bY.ltc_1 !== undefined) {
        bY.ltc_1.value = UniformsLib.LTC_1;
      }
      if (bY.ltc_2 !== undefined) {
        bY.ltc_2.value = UniformsLib.LTC_2;
      }
      VF.upload(bP, bF.uniformsList, bY, bW);
    }
    if (bh.isShaderMaterial && bh.uniformsNeedUpdate === true) {
      VF.upload(bP, bF.uniformsList, bY, bW);
      bh.uniformsNeedUpdate = false;
    }
    if (bh.isSpriteMaterial) {
      bX.setValue(bP, "center", bi.center);
    }
    bX.setValue(bP, "modelViewMatrix", bi.modelViewMatrix);
    bX.setValue(bP, "normalMatrix", bi.normalMatrix);
    bX.setValue(bP, "modelMatrix", bi.matrixWorld);
    return bT;
  }
  function cO(bf, bg) {
    var bh;
    bf.opacity.value = bg.opacity;
    if (bg.color) {
      bf.diffuse.value.copy(bg.color);
    }
    if (bg.emissive) {
      bf.emissive.value.copy(bg.emissive).multiplyScalar(bg.emissiveIntensity);
    }
    if (bg.map) {
      bf.map.value = bg.map;
    }
    if (bg.alphaMap) {
      bf.alphaMap.value = bg.alphaMap;
    }
    if (bg.specularMap) {
      bf.specularMap.value = bg.specularMap;
    }
    if (bg.envMap) {
      bf.envMap.value = bg.envMap;
      bf.flipEnvMap.value = bg.envMap.isCubeTexture ? -1 : 1;
      bf.reflectivity.value = bg.reflectivity;
      bf.refractionRatio.value = bg.refractionRatio;
      bf.maxMipLevel.value = bV.get(bg.envMap).__maxMipLevel;
    }
    if (bg.lightMap) {
      bf.lightMap.value = bg.lightMap;
      bf.lightMapIntensity.value = bg.lightMapIntensity;
    }
    if (bg.aoMap) {
      bf.aoMap.value = bg.aoMap;
      bf.aoMapIntensity.value = bg.aoMapIntensity;
    }
    if (bg.map) {
      bh = bg.map;
    } else if (bg.specularMap) {
      bh = bg.specularMap;
    } else if (bg.displacementMap) {
      bh = bg.displacementMap;
    } else if (bg.normalMap) {
      bh = bg.normalMap;
    } else if (bg.bumpMap) {
      bh = bg.bumpMap;
    } else if (bg.roughnessMap) {
      bh = bg.roughnessMap;
    } else if (bg.metalnessMap) {
      bh = bg.metalnessMap;
    } else if (bg.alphaMap) {
      bh = bg.alphaMap;
    } else if (bg.emissiveMap) {
      bh = bg.emissiveMap;
    }
    if (bh !== undefined) {
      if (bh.isWebGLRenderTarget) {
        bh = bh.texture;
      }
      if (bh.matrixAutoUpdate === true) {
        bh.updateMatrix();
      }
      bf.uvTransform.value.copy(bh.matrix);
    }
  }
  function cP(bf, bg) {
    bf.specular.value.copy(bg.specular);
    bf.shininess.value = Math.max(bg.shininess, 0.0001);
    if (bg.emissiveMap) {
      bf.emissiveMap.value = bg.emissiveMap;
    }
    if (bg.bumpMap) {
      bf.bumpMap.value = bg.bumpMap;
      bf.bumpScale.value = bg.bumpScale;
      if (bg.side === BackSide) {
        bf.bumpScale.value *= -1;
      }
    }
    if (bg.normalMap) {
      bf.normalMap.value = bg.normalMap;
      bf.normalScale.value.copy(bg.normalScale);
      if (bg.side === BackSide) {
        bf.normalScale.value.negate();
      }
    }
    if (bg.displacementMap) {
      bf.displacementMap.value = bg.displacementMap;
      bf.displacementScale.value = bg.displacementScale;
      bf.displacementBias.value = bg.displacementBias;
    }
  }
  function cQ(bf, bg) {
    bf.roughness.value = bg.roughness;
    bf.metalness.value = bg.metalness;
    if (bg.roughnessMap) {
      bf.roughnessMap.value = bg.roughnessMap;
    }
    if (bg.metalnessMap) {
      bf.metalnessMap.value = bg.metalnessMap;
    }
    if (bg.emissiveMap) {
      bf.emissiveMap.value = bg.emissiveMap;
    }
    if (bg.bumpMap) {
      bf.bumpMap.value = bg.bumpMap;
      bf.bumpScale.value = bg.bumpScale;
      if (bg.side === BackSide) {
        bf.bumpScale.value *= -1;
      }
    }
    if (bg.normalMap) {
      bf.normalMap.value = bg.normalMap;
      bf.normalScale.value.copy(bg.normalScale);
      if (bg.side === BackSide) {
        bf.normalScale.value.negate();
      }
    }
    if (bg.displacementMap) {
      bf.displacementMap.value = bg.displacementMap;
      bf.displacementScale.value = bg.displacementScale;
      bf.displacementBias.value = bg.displacementBias;
    }
    if (bg.envMap) {
      bf.envMapIntensity.value = bg.envMapIntensity;
    }
  }
  cJ.setAnimationLoop(function (bf) {
    if (!cC.isPresenting()) {
      if (cI) {
        cI(bf);
      }
    }
  });
  if (typeof window != "undefined") {
    cJ.setContext(window);
  }
  this.setAnimationLoop = function (bf) {
    cI = bf;
    cC.setAnimationLoop(bf);
    cJ.start();
  };
  this.render = function (bf, bg) {
    var bh;
    var bi;
    if (arguments[2] !== undefined) {
      console.warn("THREE.WebGLRenderer.render(): the renderTarget argument has been removed. Use .setRenderTarget() instead.");
      bh = arguments[2];
    }
    if (arguments[3] !== undefined) {
      console.warn("THREE.WebGLRenderer.render(): the forceClear argument has been removed. Use .clear() instead.");
      bi = arguments[3];
    }
    if (bg && bg.isCamera) {
      if (!c9) {
        cg.geometry = null;
        cg.program = null;
        cg.wireframe = false;
        cf = -1;
        ch = null;
        if (bf.autoUpdate === true) {
          bf.updateMatrixWorld();
        }
        if (bg.parent === null) {
          bg.updateMatrixWorld();
        }
        if (cC.enabled) {
          bg = cC.getCamera(bg);
        }
        (bO = c2.get(bf, bg)).init();
        bf.onBeforeRender(c8, bf, bg, bh || cd);
        cw.multiplyMatrices(bg.projectionMatrix, bg.matrixWorldInverse);
        cs.setFromMatrix(cw);
        cv = this.localClippingEnabled;
        cu = ct.init(this.clippingPlanes, cv, bg);
        (bN = c1.get(bf, bg)).init();
        (function bf(bg, bh, bi, bF) {
          if (bg.visible === false) {
            return;
          }
          var bG = bg.layers.test(bh.layers);
          if (bG) {
            if (bg.isGroup) {
              bi = bg.renderOrder;
            } else if (bg.isLight) {
              bO.pushLight(bg);
              if (bg.castShadow) {
                bO.pushShadow(bg);
              }
            } else if (bg.isSprite) {
              if (!bg.frustumCulled || cs.intersectsSprite(bg)) {
                if (bF) {
                  cx.setFromMatrixPosition(bg.matrixWorld).applyMatrix4(cw);
                }
                var bH = bZ.update(bg);
                var bI = bg.material;
                if (bI.visible) {
                  bN.push(bg, bH, bI, bi, cx.z, null);
                }
              }
            } else if (bg.isImmediateRenderObject) {
              if (bF) {
                cx.setFromMatrixPosition(bg.matrixWorld).applyMatrix4(cw);
              }
              bN.push(bg, null, bg.material, bi, cx.z, null);
            } else if ((bg.isMesh || bg.isLine || bg.isPoints) && (bg.isSkinnedMesh && bg.skeleton.update(), !bg.frustumCulled || cs.intersectsObject(bg))) {
              if (bF) {
                cx.setFromMatrixPosition(bg.matrixWorld).applyMatrix4(cw);
              }
              var bH = bZ.update(bg);
              var bI = bg.material;
              if (Array.isArray(bI)) {
                for (var bJ = bH.groups, bK = 0, bL = bJ.length; bK < bL; bK++) {
                  var bM = bJ[bK];
                  var bP = bI[bM.materialIndex];
                  if (bP && bP.visible) {
                    bN.push(bg, bH, bP, bi, cx.z, bM);
                  }
                }
              } else if (bI.visible) {
                bN.push(bg, bH, bI, bi, cx.z, null);
              }
            }
          }
          var bQ = bg.children;
          for (var bK = 0, bL = bQ.length; bK < bL; bK++) {
            bf(bQ[bK], bh, bi, bF);
          }
        })(bf, bg, 0, c8.sortObjects);
        if (c8.sortObjects === true) {
          bN.sort();
        }
        if (cu) {
          ct.beginShadows();
        }
        var bF = bO.state.shadowsArray;
        cD.render(bF, bf, bg);
        bO.setupLights(bg);
        if (cu) {
          ct.endShadows();
        }
        if (this.info.autoReset) {
          this.info.reset();
        }
        if (bh !== undefined) {
          this.setRenderTarget(bh);
        }
        c3.render(bN, bf, bg, bi);
        var bG = bN.opaque;
        var bH = bN.transparent;
        if (bf.overrideMaterial) {
          var bI = bf.overrideMaterial;
          if (bG.length) {
            cK(bG, bf, bg, bI);
          }
          if (bH.length) {
            cK(bH, bf, bg, bI);
          }
        } else {
          if (bG.length) {
            cK(bG, bf, bg);
          }
          if (bH.length) {
            cK(bH, bf, bg);
          }
        }
        bf.onAfterRender(c8, bf, bg);
        if (cd !== null) {
          bW.updateRenderTargetMipmap(cd);
          bW.updateMultisampleRenderTarget(cd);
        }
        bS.buffers.depth.setTest(true);
        bS.buffers.depth.setMask(true);
        bS.buffers.color.setMask(true);
        bS.setPolygonOffset(false);
        if (cC.enabled) {
          cC.submitFrame();
        }
        bN = null;
        bO = null;
      }
    } else {
      console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
    }
  };
  this.setFramebuffer = function (bf) {
    if (ca !== bf) {
      bP.bindFramebuffer(36160, bf);
    }
    ca = bf;
  };
  this.getActiveCubeFace = function () {
    return cb;
  };
  this.getActiveMipMapLevel = function () {
    return cc;
  };
  this.getRenderTarget = function () {
    return cd;
  };
  this.setRenderTarget = function (bf, bg, bh) {
    cd = bf;
    cb = bg;
    cc = bh;
    if (bf && bV.get(bf).__webglFramebuffer === undefined) {
      bW.setupRenderTarget(bf);
    }
    var bi = ca;
    var bF = false;
    if (bf) {
      var bG = bV.get(bf).__webglFramebuffer;
      if (bf.isWebGLRenderTargetCube) {
        bi = bG[bg || 0];
        bF = true;
      } else {
        bi = bf.isWebGLMultisampleRenderTarget ? bV.get(bf).__webglMultisampledFramebuffer : bG;
      }
      cj.copy(bf.viewport);
      ck.copy(bf.scissor);
      cl = bf.scissorTest;
    } else {
      cj.copy(cp).multiplyScalar(co);
      ck.copy(cq).multiplyScalar(co);
      cl = cr;
    }
    if (ce !== bi) {
      bP.bindFramebuffer(36160, bi);
      ce = bi;
    }
    bS.viewport(cj);
    bS.scissor(ck);
    bS.setScissorTest(cl);
    if (bF) {
      var bH = bV.get(bf.texture);
      bP.framebufferTexture2D(36160, 36064, 34069 + (bg || 0), bH.__webglTexture, bh || 0);
    }
  };
  this.readRenderTargetPixels = function (bf, bg, bh, bi, bF, bG, bH) {
    if (bf && bf.isWebGLRenderTarget) {
      var bI = bV.get(bf).__webglFramebuffer;
      if (bf.isWebGLRenderTargetCube && bH !== undefined) {
        bI = bI[bH];
      }
      if (bI) {
        var bJ = false;
        if (bI !== ce) {
          bP.bindFramebuffer(36160, bI);
          bJ = true;
        }
        try {
          var bK = bf.texture;
          var bL = bK.format;
          var bM = bK.type;
          if (bL !== RGBAFormat && c7.convert(bL) !== bP.getParameter(35739)) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
            return;
          }
          if (bM !== UnsignedByteType && c7.convert(bM) !== bP.getParameter(35738) && (bM !== FloatType || !bR.isWebGL2 && !bQ.get("OES_texture_float") && !bQ.get("WEBGL_color_buffer_float")) && (bM !== HalfFloatType || !(bR.isWebGL2 ? bQ.get("EXT_color_buffer_float") : bQ.get("EXT_color_buffer_half_float")))) {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
            return;
          }
          if (bP.checkFramebufferStatus(36160) === 36053) {
            if (bg >= 0 && bg <= bf.width - bi && bh >= 0 && bh <= bf.height - bF) {
              bP.readPixels(bg, bh, bi, bF, c7.convert(bL), c7.convert(bM), bG);
            }
          } else {
            console.error("THREE.WebGLRenderer.readRenderTargetPixels: readPixels from renderTarget failed. Framebuffer not complete.");
          }
        } finally {
          if (bJ) {
            bP.bindFramebuffer(36160, ce);
          }
        }
      }
    } else {
      console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
    }
  };
  this.copyFramebufferToTexture = function (bf, bg, bh) {
    var bi = bg.image.width;
    var bF = bg.image.height;
    var bG = c7.convert(bg.format);
    bW.setTexture2D(bg, 0);
    bP.copyTexImage2D(3553, bh || 0, bG, bf.x, bf.y, bi, bF, 0);
  };
  this.copyTextureToTexture = function (bf, bg, bh, bi) {
    var bF = bg.image.width;
    var bG = bg.image.height;
    var bH = c7.convert(bh.format);
    var bI = c7.convert(bh.type);
    bW.setTexture2D(bh, 0);
    if (bg.isDataTexture) {
      bP.texSubImage2D(3553, bi || 0, bf.x, bf.y, bF, bG, bH, bI, bg.image.data);
    } else {
      bP.texSubImage2D(3553, bi || 0, bf.x, bf.y, bH, bI, bg.image);
    }
  };
}
export function FogExp2(bf, bg) {
  this.name = "";
  this.color = new Color(bf);
  this.density = bg !== undefined ? bg : 0.00025;
}
export function Fog(bf, bg, bh) {
  this.name = "";
  this.color = new Color(bf);
  this.near = bg !== undefined ? bg : 1;
  this.far = bh !== undefined ? bh : 1000;
}
export function Scene() {
  Object3D.call(this);
  this.type = "Scene";
  this.background = null;
  this.fog = null;
  this.overrideMaterial = null;
  this.autoUpdate = true;
}
export function InterleavedBuffer(bf, bg) {
  this.array = bf;
  this.stride = bg;
  this.count = bf !== undefined ? bf.length / bg : 0;
  this.dynamic = false;
  this.updateRange = {
    offset: 0,
    count: -1
  };
  this.version = 0;
}
export function InterleavedBufferAttribute(bf, bg, bh, bi) {
  this.data = bf;
  this.itemSize = bg;
  this.offset = bh;
  this.normalized = bi === true;
}
export function SpriteMaterial(bf) {
  Material.call(this);
  this.type = "SpriteMaterial";
  this.color = new Color(16777215);
  this.map = null;
  this.rotation = 0;
  this.sizeAttenuation = true;
  this.lights = false;
  this.transparent = true;
  this.setValues(bf);
}
export function Sprite(bf) {
  Object3D.call(this);
  this.type = "Sprite";
  if (a6I === undefined) {
    a6I = new BufferGeometry();
    var bg = new InterleavedBuffer(new Float32Array([-0.5, -0.5, 0, 0, 0, 0.5, -0.5, 0, 1, 0, 0.5, 0.5, 0, 1, 1, -0.5, 0.5, 0, 0, 1]), 5);
    a6I.setIndex([0, 1, 2, 0, 2, 3]);
    a6I.addAttribute("position", new InterleavedBufferAttribute(bg, 3, 0, false));
    a6I.addAttribute("uv", new InterleavedBufferAttribute(bg, 2, 3, false));
  }
  this.geometry = a6I;
  this.material = bf !== undefined ? bf : new SpriteMaterial();
  this.center = new Vector2(0.5, 0.5);
}
export function LOD() {
  Object3D.call(this);
  this.type = "LOD";
  Object.defineProperties(this, {
    levels: {
      enumerable: true,
      value: []
    }
  });
}
export function SkinnedMesh(bf, bg) {
  if (bf && bf.isGeometry) {
    console.error("THREE.SkinnedMesh no longer supports THREE.Geometry. Use THREE.BufferGeometry instead.");
  }
  Mesh.call(this, bf, bg);
  this.type = "SkinnedMesh";
  this.bindMode = "attached";
  this.bindMatrix = new Matrix4();
  this.bindMatrixInverse = new Matrix4();
}
export function Skeleton(bf, bg) {
  bf = bf || [];
  this.bones = bf.slice(0);
  this.boneMatrices = new Float32Array(this.bones.length * 16);
  if (bg === undefined) {
    this.calculateInverses();
  } else if (this.bones.length === bg.length) {
    this.boneInverses = bg.slice(0);
  } else {
    console.warn("THREE.Skeleton boneInverses is the wrong length.");
    this.boneInverses = [];
    for (var bh = 0, bi = this.bones.length; bh < bi; bh++) {
      this.boneInverses.push(new Matrix4());
    }
  }
}
export function Bone() {
  Object3D.call(this);
  this.type = "Bone";
}
export function LineBasicMaterial(bf) {
  Material.call(this);
  this.type = "LineBasicMaterial";
  this.color = new Color(16777215);
  this.linewidth = 1;
  this.linecap = "round";
  this.linejoin = "round";
  this.lights = false;
  this.setValues(bf);
}
export function Line(bf, bg, bh) {
  if (bh === 1) {
    console.error("THREE.Line: parameter THREE.LinePieces no longer supported. Use THREE.LineSegments instead.");
  }
  Object3D.call(this);
  this.type = "Line";
  this.geometry = bf !== undefined ? bf : new BufferGeometry();
  this.material = bg !== undefined ? bg : new LineBasicMaterial({
    color: Math.random() * 16777215
  });
}
export function LineSegments(bf, bg) {
  Line.call(this, bf, bg);
  this.type = "LineSegments";
}
export function LineLoop(bf, bg) {
  Line.call(this, bf, bg);
  this.type = "LineLoop";
}
export function PointsMaterial(bf) {
  Material.call(this);
  this.type = "PointsMaterial";
  this.color = new Color(16777215);
  this.map = null;
  this.size = 1;
  this.sizeAttenuation = true;
  this.morphTargets = false;
  this.lights = false;
  this.setValues(bf);
}
export function Points(bf, bg) {
  Object3D.call(this);
  this.type = "Points";
  this.geometry = bf !== undefined ? bf : new BufferGeometry();
  this.material = bg !== undefined ? bg : new PointsMaterial({
    color: Math.random() * 16777215
  });
}
export function VideoTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ) {
  Texture.call(this, bf, bg, bh, bi, bF, bG, bH, bI, bJ);
  this.format = bH !== undefined ? bH : RGBFormat;
  this.minFilter = bG !== undefined ? bG : LinearFilter;
  this.magFilter = bF !== undefined ? bF : LinearFilter;
  this.generateMipmaps = false;
}
export function CompressedTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK, bL, bM) {
  Texture.call(this, null, bG, bH, bI, bJ, bK, bi, bF, bL, bM);
  this.image = {
    width: bg,
    height: bh
  };
  this.mipmaps = bf;
  this.flipY = false;
  this.generateMipmaps = false;
}
export function CanvasTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ) {
  Texture.call(this, bf, bg, bh, bi, bF, bG, bH, bI, bJ);
  this.needsUpdate = true;
}
export function DepthTexture(bf, bg, bh, bi, bF, bG, bH, bI, bJ, bK) {
  if ((bK = bK !== undefined ? bK : DepthFormat) !== DepthFormat && bK !== DepthStencilFormat) {
    throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
  }
  if (bh === undefined && bK === DepthFormat) {
    bh = UnsignedShortType;
  }
  if (bh === undefined && bK === DepthStencilFormat) {
    bh = UnsignedInt248Type;
  }
  Texture.call(this, null, bi, bF, bG, bH, bI, bK, bh, bJ);
  this.image = {
    width: bf,
    height: bg
  };
  this.magFilter = bH !== undefined ? bH : NearestFilter;
  this.minFilter = bI !== undefined ? bI : NearestFilter;
  this.flipY = false;
  this.generateMipmaps = false;
}
export function WireframeGeometry(bf) {
  BufferGeometry.call(this);
  this.type = "WireframeGeometry";
  var bg;
  var bh;
  var bi;
  var bF;
  var bG;
  var bH;
  var bI;
  var bJ;
  var bK;
  var bL;
  var bM = [];
  var bN = [0, 0];
  var bO = {};
  var bP = ["a", "b", "c"];
  if (bf && bf.isGeometry) {
    var bQ = bf.faces;
    bg = 0;
    bi = bQ.length;
    for (; bg < bi; bg++) {
      var bR = bQ[bg];
      for (bh = 0; bh < 3; bh++) {
        bI = bR[bP[bh]];
        bJ = bR[bP[(bh + 1) % 3]];
        bN[0] = Math.min(bI, bJ);
        bN[1] = Math.max(bI, bJ);
        if (bO[bK = bN[0] + "," + bN[1]] === undefined) {
          bO[bK] = {
            index1: bN[0],
            index2: bN[1]
          };
        }
      }
    }
    for (bK in bO) {
      bH = bO[bK];
      bL = bf.vertices[bH.index1];
      bM.push(bL.x, bL.y, bL.z);
      bL = bf.vertices[bH.index2];
      bM.push(bL.x, bL.y, bL.z);
    }
  } else if (bf && bf.isBufferGeometry) {
    var bS;
    var bT;
    var bU;
    var bV;
    var bW;
    var bX;
    var bY;
    bL = new Vector3();
    if (bf.index !== null) {
      bS = bf.attributes.position;
      bT = bf.index;
      if ((bU = bf.groups).length === 0) {
        bU = [{
          start: 0,
          count: bT.count,
          materialIndex: 0
        }];
      }
      bF = 0;
      bG = bU.length;
      for (; bF < bG; ++bF) {
        bg = bW = (bV = bU[bF]).start;
        bi = bW + bV.count;
        bg = bW = (bV = bU[bF]).start;
        bi = bW + bV.count;
        for (; bg < bi; bg += 3) {
          for (bh = 0; bh < 3; bh++) {
            bI = bT.getX(bg + bh);
            bJ = bT.getX(bg + (bh + 1) % 3);
            bN[0] = Math.min(bI, bJ);
            bN[1] = Math.max(bI, bJ);
            if (bO[bK = bN[0] + "," + bN[1]] === undefined) {
              bO[bK] = {
                index1: bN[0],
                index2: bN[1]
              };
            }
          }
        }
      }
      for (bK in bO) {
        bH = bO[bK];
        bL.fromBufferAttribute(bS, bH.index1);
        bM.push(bL.x, bL.y, bL.z);
        bL.fromBufferAttribute(bS, bH.index2);
        bM.push(bL.x, bL.y, bL.z);
      }
    } else {
      bg = 0;
      bi = (bS = bf.attributes.position).count / 3;
      bg = 0;
      bi = (bS = bf.attributes.position).count / 3;
      for (; bg < bi; bg++) {
        for (bh = 0; bh < 3; bh++) {
          bX = bg * 3 + bh;
          bL.fromBufferAttribute(bS, bX);
          bM.push(bL.x, bL.y, bL.z);
          bY = bg * 3 + (bh + 1) % 3;
          bL.fromBufferAttribute(bS, bY);
          bM.push(bL.x, bL.y, bL.z);
        }
      }
    }
  }
  this.addAttribute("position", new Float32BufferAttribute(bM, 3));
}
export function ParametricGeometry(bf, bg, bh) {
  Geometry.call(this);
  this.type = "ParametricGeometry";
  this.parameters = {
    func: bf,
    slices: bg,
    stacks: bh
  };
  this.fromBufferGeometry(new ParametricBufferGeometry(bf, bg, bh));
  this.mergeVertices();
}
export function ParametricBufferGeometry(bf, bg, bh) {
  BufferGeometry.call(this);
  this.type = "ParametricBufferGeometry";
  this.parameters = {
    func: bf,
    slices: bg,
    stacks: bh
  };
  var bi;
  var bF;
  var bG = [];
  var bH = [];
  var bI = [];
  var bJ = [];
  var bK = new Vector3();
  var bL = new Vector3();
  var bM = new Vector3();
  var bN = new Vector3();
  var bO = new Vector3();
  if (bf.length < 3) {
    console.error("THREE.ParametricGeometry: Function must now modify a Vector3 as third parameter.");
  }
  var bP = bg + 1;
  for (bi = 0; bi <= bh; bi++) {
    var bQ = bi / bh;
    for (bF = 0; bF <= bg; bF++) {
      var bR = bF / bg;
      bf(bR, bQ, bL);
      bH.push(bL.x, bL.y, bL.z);
      if (bR - 0.00001 >= 0) {
        bf(bR - 0.00001, bQ, bM);
        bN.subVectors(bL, bM);
      } else {
        bf(bR + 0.00001, bQ, bM);
        bN.subVectors(bM, bL);
      }
      if (bQ - 0.00001 >= 0) {
        bf(bR, bQ - 0.00001, bM);
        bO.subVectors(bL, bM);
      } else {
        bf(bR, bQ + 0.00001, bM);
        bO.subVectors(bM, bL);
      }
      bK.crossVectors(bN, bO).normalize();
      bI.push(bK.x, bK.y, bK.z);
      bJ.push(bR, bQ);
    }
  }
  for (bi = 0; bi < bh; bi++) {
    for (bF = 0; bF < bg; bF++) {
      var bS = bi * bP + bF;
      var bT = bi * bP + bF + 1;
      var bU = (bi + 1) * bP + bF + 1;
      var bV = (bi + 1) * bP + bF;
      bG.push(bS, bT, bV);
      bG.push(bT, bU, bV);
    }
  }
  this.setIndex(bG);
  this.addAttribute("position", new Float32BufferAttribute(bH, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bI, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bJ, 2));
}
export function PolyhedronGeometry(bf, bg, bh, bi) {
  Geometry.call(this);
  this.type = "PolyhedronGeometry";
  this.parameters = {
    vertices: bf,
    indices: bg,
    radius: bh,
    detail: bi
  };
  this.fromBufferGeometry(new PolyhedronBufferGeometry(bf, bg, bh, bi));
  this.mergeVertices();
}
export function PolyhedronBufferGeometry(bf, bg, bh, bi) {
  BufferGeometry.call(this);
  this.type = "PolyhedronBufferGeometry";
  this.parameters = {
    vertices: bf,
    indices: bg,
    radius: bh,
    detail: bi
  };
  bh = bh || 1;
  var bF = [];
  var bG = [];
  function bH(bf, bg, bh, bi) {
    var bF;
    var bG;
    var bH = Math.pow(2, bi);
    var bJ = [];
    for (bF = 0; bF <= bH; bF++) {
      bJ[bF] = [];
      var bK = bf.clone().lerp(bh, bF / bH);
      var bL = bg.clone().lerp(bh, bF / bH);
      var bM = bH - bF;
      for (bG = 0; bG <= bM; bG++) {
        bJ[bF][bG] = bG === 0 && bF === bH ? bK : bK.clone().lerp(bL, bG / bM);
      }
    }
    for (bF = 0; bF < bH; bF++) {
      for (bG = 0; bG < (bH - bF) * 2 - 1; bG++) {
        var bN = Math.floor(bG / 2);
        if (bG % 2 == 0) {
          bI(bJ[bF][bN + 1]);
          bI(bJ[bF + 1][bN]);
          bI(bJ[bF][bN]);
        } else {
          bI(bJ[bF][bN + 1]);
          bI(bJ[bF + 1][bN + 1]);
          bI(bJ[bF + 1][bN]);
        }
      }
    }
  }
  function bI(bf) {
    bF.push(bf.x, bf.y, bf.z);
  }
  function bJ(bg, bh) {
    var bi = bg * 3;
    bh.x = bf[bi + 0];
    bh.y = bf[bi + 1];
    bh.z = bf[bi + 2];
  }
  function bK(bf, bg, bh, bi) {
    if (bi < 0 && bf.x === 1) {
      bG[bg] = bf.x - 1;
    }
    if (bh.x === 0 && bh.z === 0) {
      bG[bg] = bi / 2 / Math.PI + 0.5;
    }
  }
  function bL(bf) {
    return Math.atan2(bf.z, -bf.x);
  }
  (function (bf) {
    for (var bh = new Vector3(), bi = new Vector3(), bF = new Vector3(), bG = 0; bG < bg.length; bG += 3) {
      bJ(bg[bG + 0], bh);
      bJ(bg[bG + 1], bi);
      bJ(bg[bG + 2], bF);
      bH(bh, bi, bF, bf);
    }
  })(bi = bi || 0);
  (function (bf) {
    for (var bg = new Vector3(), bh = 0; bh < bF.length; bh += 3) {
      bg.x = bF[bh + 0];
      bg.y = bF[bh + 1];
      bg.z = bF[bh + 2];
      bg.normalize().multiplyScalar(bf);
      bF[bh + 0] = bg.x;
      bF[bh + 1] = bg.y;
      bF[bh + 2] = bg.z;
    }
  })(bh);
  (function () {
    for (var bf = new Vector3(), bg = 0; bg < bF.length; bg += 3) {
      bf.x = bF[bg + 0];
      bf.y = bF[bg + 1];
      bf.z = bF[bg + 2];
      var bh = bL(bf) / 2 / Math.PI + 0.5;
      bH = bf;
      var bi = Math.atan2(-bH.y, Math.sqrt(bH.x * bH.x + bH.z * bH.z)) / Math.PI + 0.5;
      bG.push(bh, 1 - bi);
    }
    var bH;
    (function () {
      for (var bf = new Vector3(), bg = new Vector3(), bh = new Vector3(), bi = new Vector3(), bH = new Vector2(), bI = new Vector2(), bJ = new Vector2(), bM = 0, bN = 0; bM < bF.length; bM += 9, bN += 6) {
        bf.set(bF[bM + 0], bF[bM + 1], bF[bM + 2]);
        bg.set(bF[bM + 3], bF[bM + 4], bF[bM + 5]);
        bh.set(bF[bM + 6], bF[bM + 7], bF[bM + 8]);
        bH.set(bG[bN + 0], bG[bN + 1]);
        bI.set(bG[bN + 2], bG[bN + 3]);
        bJ.set(bG[bN + 4], bG[bN + 5]);
        bi.copy(bf).add(bg).add(bh).divideScalar(3);
        var bO = bL(bi);
        bK(bH, bN + 0, bf, bO);
        bK(bI, bN + 2, bg, bO);
        bK(bJ, bN + 4, bh, bO);
      }
    })();
    (function () {
      for (var bf = 0; bf < bG.length; bf += 6) {
        var bg = bG[bf + 0];
        var bh = bG[bf + 2];
        var bi = bG[bf + 4];
        var bF = Math.max(bg, bh, bi);
        var bH = Math.min(bg, bh, bi);
        if (bF > 0.9 && bH < 0.1) {
          if (bg < 0.2) {
            bG[bf + 0] += 1;
          }
          if (bh < 0.2) {
            bG[bf + 2] += 1;
          }
          if (bi < 0.2) {
            bG[bf + 4] += 1;
          }
        }
      }
    })();
  })();
  this.addAttribute("position", new Float32BufferAttribute(bF, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bF.slice(), 3));
  this.addAttribute("uv", new Float32BufferAttribute(bG, 2));
  if (bi === 0) {
    this.computeVertexNormals();
  } else {
    this.normalizeNormals();
  }
}
export function TetrahedronGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "TetrahedronGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
  this.fromBufferGeometry(new TetrahedronBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function TetrahedronBufferGeometry(bf, bg) {
  PolyhedronBufferGeometry.call(this, [1, 1, 1, -1, -1, 1, -1, 1, -1, 1, -1, -1], [2, 1, 0, 0, 3, 2, 1, 3, 0, 2, 3, 1], bf, bg);
  this.type = "TetrahedronBufferGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
}
export function OctahedronGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "OctahedronGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
  this.fromBufferGeometry(new OctahedronBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function OctahedronBufferGeometry(bf, bg) {
  PolyhedronBufferGeometry.call(this, [1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 1, 0, 0, -1], [0, 2, 4, 0, 4, 3, 0, 3, 5, 0, 5, 2, 1, 2, 5, 1, 5, 3, 1, 3, 4, 1, 4, 2], bf, bg);
  this.type = "OctahedronBufferGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
}
export function IcosahedronGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "IcosahedronGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
  this.fromBufferGeometry(new IcosahedronBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function IcosahedronBufferGeometry(bf, bg) {
  var bh = (1 + Math.sqrt(5)) / 2;
  var bi = [-1, bh, 0, 1, bh, 0, -1, -bh, 0, 1, -bh, 0, 0, -1, bh, 0, 1, bh, 0, -1, -bh, 0, 1, -bh, bh, 0, -1, bh, 0, 1, -bh, 0, -1, -bh, 0, 1];
  PolyhedronBufferGeometry.call(this, bi, [0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11, 10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9, 4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1], bf, bg);
  this.type = "IcosahedronBufferGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
}
export function DodecahedronGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "DodecahedronGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
  this.fromBufferGeometry(new DodecahedronBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function DodecahedronBufferGeometry(bf, bg) {
  var bh = (1 + Math.sqrt(5)) / 2;
  var bi = 1 / bh;
  var bF = [-1, -1, -1, -1, -1, 1, -1, 1, -1, -1, 1, 1, 1, -1, -1, 1, -1, 1, 1, 1, -1, 1, 1, 1, 0, -bi, -bh, 0, -bi, bh, 0, bi, -bh, 0, bi, bh, -bi, -bh, 0, -bi, bh, 0, bi, -bh, 0, bi, bh, 0, -bh, 0, -bi, bh, 0, -bi, -bh, 0, bi, bh, 0, bi];
  PolyhedronBufferGeometry.call(this, bF, [3, 11, 7, 3, 7, 15, 3, 15, 13, 7, 19, 17, 7, 17, 6, 7, 6, 15, 17, 4, 8, 17, 8, 10, 17, 10, 6, 8, 0, 16, 8, 16, 2, 8, 2, 10, 0, 12, 1, 0, 1, 18, 0, 18, 16, 6, 10, 2, 6, 2, 13, 6, 13, 15, 2, 16, 18, 2, 18, 3, 2, 3, 13, 18, 1, 9, 18, 9, 11, 18, 11, 3, 4, 14, 12, 4, 12, 0, 4, 0, 8, 11, 9, 5, 11, 5, 19, 11, 19, 7, 19, 5, 14, 19, 14, 4, 19, 4, 17, 1, 12, 14, 1, 14, 5, 1, 5, 9], bf, bg);
  this.type = "DodecahedronBufferGeometry";
  this.parameters = {
    radius: bf,
    detail: bg
  };
}
export function TubeGeometry(bf, bg, bh, bi, bF, bG) {
  Geometry.call(this);
  this.type = "TubeGeometry";
  this.parameters = {
    path: bf,
    tubularSegments: bg,
    radius: bh,
    radialSegments: bi,
    closed: bF
  };
  if (bG !== undefined) {
    console.warn("THREE.TubeGeometry: taper has been removed.");
  }
  var bH = new TubeBufferGeometry(bf, bg, bh, bi, bF);
  this.tangents = bH.tangents;
  this.normals = bH.normals;
  this.binormals = bH.binormals;
  this.fromBufferGeometry(bH);
  this.mergeVertices();
}
export function TubeBufferGeometry(bf, bg, bh, bi, bF) {
  BufferGeometry.call(this);
  this.type = "TubeBufferGeometry";
  this.parameters = {
    path: bf,
    tubularSegments: bg,
    radius: bh,
    radialSegments: bi,
    closed: bF
  };
  bg = bg || 64;
  bh = bh || 1;
  bi = bi || 8;
  bF = bF || false;
  var bG = bf.computeFrenetFrames(bg, bF);
  this.tangents = bG.tangents;
  this.normals = bG.normals;
  this.binormals = bG.binormals;
  var bH;
  var bI;
  var bJ = new Vector3();
  var bK = new Vector3();
  var bL = new Vector2();
  var bM = new Vector3();
  var bN = [];
  var bO = [];
  var bP = [];
  var bQ = [];
  function bR(bF) {
    bM = bf.getPointAt(bF / bg, bM);
    var bH = bG.normals[bF];
    var bL = bG.binormals[bF];
    for (bI = 0; bI <= bi; bI++) {
      var bP = bI / bi * Math.PI * 2;
      var bQ = Math.sin(bP);
      var bR = -Math.cos(bP);
      bK.x = bR * bH.x + bQ * bL.x;
      bK.y = bR * bH.y + bQ * bL.y;
      bK.z = bR * bH.z + bQ * bL.z;
      bK.normalize();
      bO.push(bK.x, bK.y, bK.z);
      bJ.x = bM.x + bh * bK.x;
      bJ.y = bM.y + bh * bK.y;
      bJ.z = bM.z + bh * bK.z;
      bN.push(bJ.x, bJ.y, bJ.z);
    }
  }
  (function () {
    for (bH = 0; bH < bg; bH++) {
      bR(bH);
    }
    bR(bF === false ? bg : 0);
    (function () {
      for (bH = 0; bH <= bg; bH++) {
        for (bI = 0; bI <= bi; bI++) {
          bL.x = bH / bg;
          bL.y = bI / bi;
          bP.push(bL.x, bL.y);
        }
      }
    })();
    (function () {
      for (bI = 1; bI <= bg; bI++) {
        for (bH = 1; bH <= bi; bH++) {
          var bf = (bi + 1) * (bI - 1) + (bH - 1);
          var bh = (bi + 1) * bI + (bH - 1);
          var bF = (bi + 1) * bI + bH;
          var bG = (bi + 1) * (bI - 1) + bH;
          bQ.push(bf, bh, bG);
          bQ.push(bh, bF, bG);
        }
      }
    })();
  })();
  this.setIndex(bQ);
  this.addAttribute("position", new Float32BufferAttribute(bN, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bO, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bP, 2));
}
export function TorusKnotGeometry(bf, bg, bh, bi, bF, bG, bH) {
  Geometry.call(this);
  this.type = "TorusKnotGeometry";
  this.parameters = {
    radius: bf,
    tube: bg,
    tubularSegments: bh,
    radialSegments: bi,
    p: bF,
    q: bG
  };
  if (bH !== undefined) {
    console.warn("THREE.TorusKnotGeometry: heightScale has been deprecated. Use .scale( x, y, z ) instead.");
  }
  this.fromBufferGeometry(new TorusKnotBufferGeometry(bf, bg, bh, bi, bF, bG));
  this.mergeVertices();
}
export function TorusKnotBufferGeometry(bf, bg, bh, bi, bF, bG) {
  BufferGeometry.call(this);
  this.type = "TorusKnotBufferGeometry";
  this.parameters = {
    radius: bf,
    tube: bg,
    tubularSegments: bh,
    radialSegments: bi,
    p: bF,
    q: bG
  };
  bf = bf || 1;
  bg = bg || 0.4;
  bh = Math.floor(bh) || 64;
  bi = Math.floor(bi) || 8;
  bF = bF || 2;
  bG = bG || 3;
  var bH;
  var bI;
  var bJ = [];
  var bK = [];
  var bL = [];
  var bM = [];
  var bN = new Vector3();
  var bO = new Vector3();
  var bP = new Vector3();
  var bQ = new Vector3();
  var bR = new Vector3();
  var bS = new Vector3();
  var bT = new Vector3();
  for (bH = 0; bH <= bh; ++bH) {
    var bU = bH / bh * bF * Math.PI * 2;
    c2(bU, bF, bG, bf, bP);
    c2(bU + 0.01, bF, bG, bf, bQ);
    bS.subVectors(bQ, bP);
    bT.addVectors(bQ, bP);
    bR.crossVectors(bS, bT);
    bT.crossVectors(bR, bS);
    bR.normalize();
    bT.normalize();
    bI = 0;
    for (; bI <= bi; ++bI) {
      var bV = bI / bi * Math.PI * 2;
      var bW = -bg * Math.cos(bV);
      var bX = bg * Math.sin(bV);
      bN.x = bP.x + (bW * bT.x + bX * bR.x);
      bN.y = bP.y + (bW * bT.y + bX * bR.y);
      bN.z = bP.z + (bW * bT.z + bX * bR.z);
      bK.push(bN.x, bN.y, bN.z);
      bO.subVectors(bN, bP).normalize();
      bL.push(bO.x, bO.y, bO.z);
      bM.push(bH / bh);
      bM.push(bI / bi);
    }
  }
  for (bI = 1; bI <= bh; bI++) {
    for (bH = 1; bH <= bi; bH++) {
      var bY = (bi + 1) * (bI - 1) + (bH - 1);
      var bZ = (bi + 1) * bI + (bH - 1);
      var c0 = (bi + 1) * bI + bH;
      var c1 = (bi + 1) * (bI - 1) + bH;
      bJ.push(bY, bZ, c1);
      bJ.push(bZ, c0, c1);
    }
  }
  function c2(bf, bg, bh, bi, bF) {
    var bG = Math.cos(bf);
    var bH = Math.sin(bf);
    var bI = bh / bg * bf;
    var bJ = Math.cos(bI);
    bF.x = bi * (2 + bJ) * 0.5 * bG;
    bF.y = bi * (2 + bJ) * bH * 0.5;
    bF.z = bi * Math.sin(bI) * 0.5;
  }
  this.setIndex(bJ);
  this.addAttribute("position", new Float32BufferAttribute(bK, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bL, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bM, 2));
}
export function TorusGeometry(bf, bg, bh, bi, bF) {
  Geometry.call(this);
  this.type = "TorusGeometry";
  this.parameters = {
    radius: bf,
    tube: bg,
    radialSegments: bh,
    tubularSegments: bi,
    arc: bF
  };
  this.fromBufferGeometry(new TorusBufferGeometry(bf, bg, bh, bi, bF));
  this.mergeVertices();
}
export function TorusBufferGeometry(bf, bg, bh, bi, bF) {
  BufferGeometry.call(this);
  this.type = "TorusBufferGeometry";
  this.parameters = {
    radius: bf,
    tube: bg,
    radialSegments: bh,
    tubularSegments: bi,
    arc: bF
  };
  bf = bf || 1;
  bg = bg || 0.4;
  bh = Math.floor(bh) || 8;
  bi = Math.floor(bi) || 6;
  bF = bF || Math.PI * 2;
  var bG;
  var bH;
  var bI = [];
  var bJ = [];
  var bK = [];
  var bL = [];
  var bM = new Vector3();
  var bN = new Vector3();
  var bO = new Vector3();
  for (bG = 0; bG <= bh; bG++) {
    for (bH = 0; bH <= bi; bH++) {
      var bP = bH / bi * bF;
      var bQ = bG / bh * Math.PI * 2;
      bN.x = (bf + bg * Math.cos(bQ)) * Math.cos(bP);
      bN.y = (bf + bg * Math.cos(bQ)) * Math.sin(bP);
      bN.z = bg * Math.sin(bQ);
      bJ.push(bN.x, bN.y, bN.z);
      bM.x = bf * Math.cos(bP);
      bM.y = bf * Math.sin(bP);
      bO.subVectors(bN, bM).normalize();
      bK.push(bO.x, bO.y, bO.z);
      bL.push(bH / bi);
      bL.push(bG / bh);
    }
  }
  for (bG = 1; bG <= bh; bG++) {
    for (bH = 1; bH <= bi; bH++) {
      var bR = (bi + 1) * bG + bH - 1;
      var bS = (bi + 1) * (bG - 1) + bH - 1;
      var bT = (bi + 1) * (bG - 1) + bH;
      var bU = (bi + 1) * bG + bH;
      bI.push(bR, bS, bU);
      bI.push(bS, bT, bU);
    }
  }
  this.setIndex(bI);
  this.addAttribute("position", new Float32BufferAttribute(bJ, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bK, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bL, 2));
}
Object.assign(FogExp2.prototype, {
  isFogExp2: true,
  clone: function () {
    return new FogExp2(this.color, this.density);
  },
  toJSON: function () {
    return {
      type: "FogExp2",
      color: this.color.getHex(),
      density: this.density
    };
  }
});
Object.assign(Fog.prototype, {
  isFog: true,
  clone: function () {
    return new Fog(this.color, this.near, this.far);
  },
  toJSON: function () {
    return {
      type: "Fog",
      color: this.color.getHex(),
      near: this.near,
      far: this.far
    };
  }
});
Scene.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Scene,
  isScene: true,
  copy: function (bf, bg) {
    Object3D.prototype.copy.call(this, bf, bg);
    if (bf.background !== null) {
      this.background = bf.background.clone();
    }
    if (bf.fog !== null) {
      this.fog = bf.fog.clone();
    }
    if (bf.overrideMaterial !== null) {
      this.overrideMaterial = bf.overrideMaterial.clone();
    }
    this.autoUpdate = bf.autoUpdate;
    this.matrixAutoUpdate = bf.matrixAutoUpdate;
    return this;
  },
  toJSON: function (bf) {
    var bg = Object3D.prototype.toJSON.call(this, bf);
    if (this.background !== null) {
      bg.object.background = this.background.toJSON(bf);
    }
    if (this.fog !== null) {
      bg.object.fog = this.fog.toJSON();
    }
    return bg;
  },
  dispose: function () {
    this.dispatchEvent({
      type: "dispose"
    });
  }
});
Object.defineProperty(InterleavedBuffer.prototype, "needsUpdate", {
  set: function (bf) {
    if (bf === true) {
      this.version++;
    }
  }
});
Object.assign(InterleavedBuffer.prototype, {
  isInterleavedBuffer: true,
  onUploadCallback: function () {},
  setArray: function (bf) {
    if (Array.isArray(bf)) {
      throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
    }
    this.count = bf !== undefined ? bf.length / this.stride : 0;
    this.array = bf;
    return this;
  },
  setDynamic: function (bf) {
    this.dynamic = bf;
    return this;
  },
  copy: function (bf) {
    this.array = new bf.array.constructor(bf.array);
    this.count = bf.count;
    this.stride = bf.stride;
    this.dynamic = bf.dynamic;
    return this;
  },
  copyAt: function (bf, bg, bh) {
    bf *= this.stride;
    bh *= bg.stride;
    for (var bi = 0, bF = this.stride; bi < bF; bi++) {
      this.array[bf + bi] = bg.array[bh + bi];
    }
    return this;
  },
  set: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    this.array.set(bf, bg);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  onUpload: function (bf) {
    this.onUploadCallback = bf;
    return this;
  }
});
Object.defineProperties(InterleavedBufferAttribute.prototype, {
  count: {
    get: function () {
      return this.data.count;
    }
  },
  array: {
    get: function () {
      return this.data.array;
    }
  }
});
Object.assign(InterleavedBufferAttribute.prototype, {
  isInterleavedBufferAttribute: true,
  setX: function (bf, bg) {
    this.data.array[bf * this.data.stride + this.offset] = bg;
    return this;
  },
  setY: function (bf, bg) {
    this.data.array[bf * this.data.stride + this.offset + 1] = bg;
    return this;
  },
  setZ: function (bf, bg) {
    this.data.array[bf * this.data.stride + this.offset + 2] = bg;
    return this;
  },
  setW: function (bf, bg) {
    this.data.array[bf * this.data.stride + this.offset + 3] = bg;
    return this;
  },
  getX: function (bf) {
    return this.data.array[bf * this.data.stride + this.offset];
  },
  getY: function (bf) {
    return this.data.array[bf * this.data.stride + this.offset + 1];
  },
  getZ: function (bf) {
    return this.data.array[bf * this.data.stride + this.offset + 2];
  },
  getW: function (bf) {
    return this.data.array[bf * this.data.stride + this.offset + 3];
  },
  setXY: function (bf, bg, bh) {
    bf = bf * this.data.stride + this.offset;
    this.data.array[bf + 0] = bg;
    this.data.array[bf + 1] = bh;
    return this;
  },
  setXYZ: function (bf, bg, bh, bi) {
    bf = bf * this.data.stride + this.offset;
    this.data.array[bf + 0] = bg;
    this.data.array[bf + 1] = bh;
    this.data.array[bf + 2] = bi;
    return this;
  },
  setXYZW: function (bf, bg, bh, bi, bF) {
    bf = bf * this.data.stride + this.offset;
    this.data.array[bf + 0] = bg;
    this.data.array[bf + 1] = bh;
    this.data.array[bf + 2] = bi;
    this.data.array[bf + 3] = bF;
    return this;
  }
});
SpriteMaterial.prototype = Object.create(Material.prototype);
SpriteMaterial.prototype.constructor = SpriteMaterial;
SpriteMaterial.prototype.isSpriteMaterial = true;
SpriteMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.map = bf.map;
  this.rotation = bf.rotation;
  this.sizeAttenuation = bf.sizeAttenuation;
  return this;
};
Sprite.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Sprite,
  isSprite: true,
  raycast: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    var bh = new Vector3();
    var bi = new Vector2();
    var bF = new Vector2();
    var bG = new Matrix4();
    var bH = new Vector3();
    var bI = new Vector3();
    var bJ = new Vector3();
    var bK = new Vector2();
    var bL = new Vector2();
    var bM = new Vector2();
    function bN(bf, bg, bh, bH, bI, bJ) {
      bi.subVectors(bf, bh).addScalar(0.5).multiply(bH);
      if (bI !== undefined) {
        bF.x = bJ * bi.x - bI * bi.y;
        bF.y = bI * bi.x + bJ * bi.y;
      } else {
        bF.copy(bi);
      }
      bf.copy(bg);
      bf.x += bF.x;
      bf.y += bF.y;
      bf.applyMatrix4(bG);
    }
    return function (bi, bF) {
      bg.setFromMatrixScale(this.matrixWorld);
      bG.getInverse(this.modelViewMatrix).premultiply(this.matrixWorld);
      bh.setFromMatrixPosition(this.modelViewMatrix);
      var bO;
      var bP;
      var bQ = this.material.rotation;
      if (bQ !== 0) {
        bP = Math.cos(bQ);
        bO = Math.sin(bQ);
      }
      var bR = this.center;
      bN(bH.set(-0.5, -0.5, 0), bh, bR, bg, bO, bP);
      bN(bI.set(0.5, -0.5, 0), bh, bR, bg, bO, bP);
      bN(bJ.set(0.5, 0.5, 0), bh, bR, bg, bO, bP);
      bK.set(0, 0);
      bL.set(1, 0);
      bM.set(1, 1);
      var bS = bi.ray.intersectTriangle(bH, bI, bJ, false, bf);
      if (bS !== null || (bN(bI.set(-0.5, 0.5, 0), bh, bR, bg, bO, bP), bL.set(0, 1), (bS = bi.ray.intersectTriangle(bH, bJ, bI, false, bf)) !== null)) {
        var bT = bi.ray.origin.distanceTo(bf);
        if (bT >= bi.near && bT <= bi.far) {
          bF.push({
            distance: bT,
            point: bf.clone(),
            uv: Triangle.getUV(bf, bH, bI, bJ, bK, bL, bM, new Vector2()),
            face: null,
            object: this
          });
        }
      }
    };
  }(),
  clone: function () {
    return new this.constructor(this.material).copy(this);
  },
  copy: function (bf) {
    Object3D.prototype.copy.call(this, bf);
    if (bf.center !== undefined) {
      this.center.copy(bf.center);
    }
    return this;
  }
});
LOD.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: LOD,
  isLOD: true,
  copy: function (bf) {
    Object3D.prototype.copy.call(this, bf, false);
    for (var bg = bf.levels, bh = 0, bi = bg.length; bh < bi; bh++) {
      var bF = bg[bh];
      this.addLevel(bF.object.clone(), bF.distance);
    }
    return this;
  },
  addLevel: function (bf, bg) {
    if (bg === undefined) {
      bg = 0;
    }
    bg = Math.abs(bg);
    for (var bh = this.levels, bi = 0; bi < bh.length && bg >= bh[bi].distance; bi++);
    bh.splice(bi, 0, {
      distance: bg,
      object: bf
    });
    this.add(bf);
    return this;
  },
  getObjectForDistance: function (bf) {
    for (var bg = this.levels, bh = 1, bi = bg.length; bh < bi && bf >= bg[bh].distance; bh++);
    return bg[bh - 1].object;
  },
  raycast: (a6J = new Vector3(), function (bf, bg) {
    a6J.setFromMatrixPosition(this.matrixWorld);
    var bh = bf.ray.origin.distanceTo(a6J);
    this.getObjectForDistance(bh).raycast(bf, bg);
  }),
  update: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    return function (bh) {
      var bi = this.levels;
      if (bi.length > 1) {
        bf.setFromMatrixPosition(bh.matrixWorld);
        bg.setFromMatrixPosition(this.matrixWorld);
        var bF = bf.distanceTo(bg);
        bi[0].object.visible = true;
        for (var bG = 1, bH = bi.length; bG < bH && bF >= bi[bG].distance; bG++) {
          bi[bG - 1].object.visible = false;
          bi[bG].object.visible = true;
        }
        for (; bG < bH; bG++) {
          bi[bG].object.visible = false;
        }
      }
    };
  }(),
  toJSON: function (bf) {
    var bg = Object3D.prototype.toJSON.call(this, bf);
    bg.object.levels = [];
    for (var bh = this.levels, bi = 0, bF = bh.length; bi < bF; bi++) {
      var bG = bh[bi];
      bg.object.levels.push({
        object: bG.object.uuid,
        distance: bG.distance
      });
    }
    return bg;
  }
});
SkinnedMesh.prototype = Object.assign(Object.create(Mesh.prototype), {
  constructor: SkinnedMesh,
  isSkinnedMesh: true,
  bind: function (bf, bg) {
    this.skeleton = bf;
    if (bg === undefined) {
      this.updateMatrixWorld(true);
      this.skeleton.calculateInverses();
      bg = this.matrixWorld;
    }
    this.bindMatrix.copy(bg);
    this.bindMatrixInverse.getInverse(bg);
  },
  pose: function () {
    this.skeleton.pose();
  },
  normalizeSkinWeights: function () {
    for (var bf = new Vector4(), bg = this.geometry.attributes.skinWeight, bh = 0, bi = bg.count; bh < bi; bh++) {
      bf.x = bg.getX(bh);
      bf.y = bg.getY(bh);
      bf.z = bg.getZ(bh);
      bf.w = bg.getW(bh);
      var bF = 1 / bf.manhattanLength();
      if (bF !== Infinity) {
        bf.multiplyScalar(bF);
      } else {
        bf.set(1, 0, 0, 0);
      }
      bg.setXYZW(bh, bf.x, bf.y, bf.z, bf.w);
    }
  },
  updateMatrixWorld: function (bf) {
    Mesh.prototype.updateMatrixWorld.call(this, bf);
    if (this.bindMode === "attached") {
      this.bindMatrixInverse.getInverse(this.matrixWorld);
    } else if (this.bindMode === "detached") {
      this.bindMatrixInverse.getInverse(this.bindMatrix);
    } else {
      console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode);
    }
  },
  clone: function () {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
Object.assign(Skeleton.prototype, {
  calculateInverses: function () {
    this.boneInverses = [];
    for (var bf = 0, bg = this.bones.length; bf < bg; bf++) {
      var bh = new Matrix4();
      if (this.bones[bf]) {
        bh.getInverse(this.bones[bf].matrixWorld);
      }
      this.boneInverses.push(bh);
    }
  },
  pose: function () {
    var bf;
    var bg;
    var bh;
    bg = 0;
    bh = this.bones.length;
    for (; bg < bh; bg++) {
      if (bf = this.bones[bg]) {
        bf.matrixWorld.getInverse(this.boneInverses[bg]);
      }
    }
    bg = 0;
    bh = this.bones.length;
    for (; bg < bh; bg++) {
      if (bf = this.bones[bg]) {
        if (bf.parent && bf.parent.isBone) {
          bf.matrix.getInverse(bf.parent.matrixWorld);
          bf.matrix.multiply(bf.matrixWorld);
        } else {
          bf.matrix.copy(bf.matrixWorld);
        }
        bf.matrix.decompose(bf.position, bf.quaternion, bf.scale);
      }
    }
  },
  update: (a6K = new Matrix4(), a6L = new Matrix4(), function () {
    for (var bf = this.bones, bg = this.boneInverses, bh = this.boneMatrices, bi = this.boneTexture, bF = 0, bG = bf.length; bF < bG; bF++) {
      var bH = bf[bF] ? bf[bF].matrixWorld : a6L;
      a6K.multiplyMatrices(bH, bg[bF]);
      a6K.toArray(bh, bF * 16);
    }
    if (bi !== undefined) {
      bi.needsUpdate = true;
    }
  }),
  clone: function () {
    return new Skeleton(this.bones, this.boneInverses);
  },
  getBoneByName: function (bf) {
    for (var bg = 0, bh = this.bones.length; bg < bh; bg++) {
      var bi = this.bones[bg];
      if (bi.name === bf) {
        return bi;
      }
    }
  }
});
Bone.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Bone,
  isBone: true
});
LineBasicMaterial.prototype = Object.create(Material.prototype);
LineBasicMaterial.prototype.constructor = LineBasicMaterial;
LineBasicMaterial.prototype.isLineBasicMaterial = true;
LineBasicMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.linewidth = bf.linewidth;
  this.linecap = bf.linecap;
  this.linejoin = bf.linejoin;
  return this;
};
Line.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Line,
  isLine: true,
  computeLineDistances: (a6M = new Vector3(), a6N = new Vector3(), function () {
    var bf = this.geometry;
    if (bf.isBufferGeometry) {
      if (bf.index === null) {
        for (var bg = bf.attributes.position, bh = [0], bi = 1, bF = bg.count; bi < bF; bi++) {
          a6M.fromBufferAttribute(bg, bi - 1);
          a6N.fromBufferAttribute(bg, bi);
          bh[bi] = bh[bi - 1];
          bh[bi] += a6M.distanceTo(a6N);
        }
        bf.addAttribute("lineDistance", new Float32BufferAttribute(bh, 1));
      } else {
        console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
      }
    } else if (bf.isGeometry) {
      var bG = bf.vertices;
      (bh = bf.lineDistances)[0] = 0;
      bi = 1;
      bF = bG.length;
      for (; bi < bF; bi++) {
        bh[bi] = bh[bi - 1];
        bh[bi] += bG[bi - 1].distanceTo(bG[bi]);
      }
    }
    return this;
  }),
  raycast: function () {
    var bf = new Matrix4();
    var bg = new Ray();
    var bh = new Sphere();
    return function (bi, bF) {
      var bG = bi.linePrecision;
      var bH = this.geometry;
      var bI = this.matrixWorld;
      if (bH.boundingSphere === null) {
        bH.computeBoundingSphere();
      }
      bh.copy(bH.boundingSphere);
      bh.applyMatrix4(bI);
      bh.radius += bG;
      if (bi.ray.intersectsSphere(bh) !== false) {
        bf.getInverse(bI);
        bg.copy(bi.ray).applyMatrix4(bf);
        var bJ = bG / ((this.scale.x + this.scale.y + this.scale.z) / 3);
        var bK = bJ * bJ;
        var bL = new Vector3();
        var bM = new Vector3();
        var bN = new Vector3();
        var bO = new Vector3();
        var bP = this && this.isLineSegments ? 2 : 1;
        if (bH.isBufferGeometry) {
          var bQ = bH.index;
          var bR = bH.attributes.position.array;
          if (bQ !== null) {
            for (var bS = bQ.array, bT = 0, bU = bS.length - 1; bT < bU; bT += bP) {
              var bV = bS[bT];
              var bW = bS[bT + 1];
              bL.fromArray(bR, bV * 3);
              bM.fromArray(bR, bW * 3);
              if (bg.distanceSqToSegment(bL, bM, bO, bN) <= bK) {
                bO.applyMatrix4(this.matrixWorld);
                if ((bZ = bi.ray.origin.distanceTo(bO)) >= bi.near && bZ <= bi.far) {
                  bF.push({
                    distance: bZ,
                    point: bN.clone().applyMatrix4(this.matrixWorld),
                    index: bT,
                    face: null,
                    faceIndex: null,
                    object: this
                  });
                }
              }
            }
          } else {
            bT = 0;
            bU = bR.length / 3 - 1;
            bT = 0;
            bU = bR.length / 3 - 1;
            for (; bT < bU; bT += bP) {
              bL.fromArray(bR, bT * 3);
              bM.fromArray(bR, bT * 3 + 3);
              if (bg.distanceSqToSegment(bL, bM, bO, bN) <= bK) {
                bO.applyMatrix4(this.matrixWorld);
                if ((bZ = bi.ray.origin.distanceTo(bO)) >= bi.near && bZ <= bi.far) {
                  bF.push({
                    distance: bZ,
                    point: bN.clone().applyMatrix4(this.matrixWorld),
                    index: bT,
                    face: null,
                    faceIndex: null,
                    object: this
                  });
                }
              }
            }
          }
        } else if (bH.isGeometry) {
          var bX = bH.vertices;
          var bY = bX.length;
          for (bT = 0; bT < bY - 1; bT += bP) {
            var bZ;
            if (bg.distanceSqToSegment(bX[bT], bX[bT + 1], bO, bN) <= bK) {
              bO.applyMatrix4(this.matrixWorld);
              if ((bZ = bi.ray.origin.distanceTo(bO)) >= bi.near && bZ <= bi.far) {
                bF.push({
                  distance: bZ,
                  point: bN.clone().applyMatrix4(this.matrixWorld),
                  index: bT,
                  face: null,
                  faceIndex: null,
                  object: this
                });
              }
            }
          }
        }
      }
    };
  }(),
  clone: function () {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
LineSegments.prototype = Object.assign(Object.create(Line.prototype), {
  constructor: LineSegments,
  isLineSegments: true,
  computeLineDistances: function () {
    var bf = new Vector3();
    var bg = new Vector3();
    return function () {
      var bh = this.geometry;
      if (bh.isBufferGeometry) {
        if (bh.index === null) {
          for (var bi = bh.attributes.position, bF = [], bG = 0, bH = bi.count; bG < bH; bG += 2) {
            bf.fromBufferAttribute(bi, bG);
            bg.fromBufferAttribute(bi, bG + 1);
            bF[bG] = bG === 0 ? 0 : bF[bG - 1];
            bF[bG + 1] = bF[bG] + bf.distanceTo(bg);
          }
          bh.addAttribute("lineDistance", new Float32BufferAttribute(bF, 1));
        } else {
          console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        }
      } else if (bh.isGeometry) {
        var bI = bh.vertices;
        bF = bh.lineDistances;
        bG = 0;
        bH = bI.length;
        for (; bG < bH; bG += 2) {
          bf.copy(bI[bG]);
          bg.copy(bI[bG + 1]);
          bF[bG] = bG === 0 ? 0 : bF[bG - 1];
          bF[bG + 1] = bF[bG] + bf.distanceTo(bg);
        }
      }
      return this;
    };
  }()
});
LineLoop.prototype = Object.assign(Object.create(Line.prototype), {
  constructor: LineLoop,
  isLineLoop: true
});
PointsMaterial.prototype = Object.create(Material.prototype);
PointsMaterial.prototype.constructor = PointsMaterial;
PointsMaterial.prototype.isPointsMaterial = true;
PointsMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.map = bf.map;
  this.size = bf.size;
  this.sizeAttenuation = bf.sizeAttenuation;
  this.morphTargets = bf.morphTargets;
  return this;
};
Points.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Points,
  isPoints: true,
  raycast: function () {
    var bf = new Matrix4();
    var bg = new Ray();
    var bh = new Sphere();
    return function (bi, bF) {
      var bG = this;
      var bH = this.geometry;
      var bI = this.matrixWorld;
      var bJ = bi.params.Points.threshold;
      if (bH.boundingSphere === null) {
        bH.computeBoundingSphere();
      }
      bh.copy(bH.boundingSphere);
      bh.applyMatrix4(bI);
      bh.radius += bJ;
      if (bi.ray.intersectsSphere(bh) !== false) {
        bf.getInverse(bI);
        bg.copy(bi.ray).applyMatrix4(bf);
        var bK = bJ / ((this.scale.x + this.scale.y + this.scale.z) / 3);
        var bL = bK * bK;
        var bM = new Vector3();
        var bN = new Vector3();
        if (bH.isBufferGeometry) {
          var bO = bH.index;
          var bP = bH.attributes.position.array;
          if (bO !== null) {
            for (var bQ = bO.array, bR = 0, bS = bQ.length; bR < bS; bR++) {
              var bT = bQ[bR];
              bM.fromArray(bP, bT * 3);
              bW(bM, bT);
            }
          } else {
            bR = 0;
            for (var bU = bP.length / 3; bR < bU; bR++) {
              bM.fromArray(bP, bR * 3);
              bW(bM, bR);
            }
          }
        } else {
          var bV = bH.vertices;
          bR = 0;
          bU = bV.length;
          for (; bR < bU; bR++) {
            bW(bV[bR], bR);
          }
        }
      }
      function bW(bf, bh) {
        var bH = bg.distanceSqToPoint(bf);
        if (bH < bL) {
          bg.closestPointToPoint(bf, bN);
          bN.applyMatrix4(bI);
          var bJ = bi.ray.origin.distanceTo(bN);
          if (bJ < bi.near || bJ > bi.far) {
            return;
          }
          bF.push({
            distance: bJ,
            distanceToRay: Math.sqrt(bH),
            point: bN.clone(),
            index: bh,
            face: null,
            object: bG
          });
        }
      }
    };
  }(),
  clone: function () {
    return new this.constructor(this.geometry, this.material).copy(this);
  }
});
VideoTexture.prototype = Object.assign(Object.create(Texture.prototype), {
  constructor: VideoTexture,
  isVideoTexture: true,
  update: function () {
    var bf = this.image;
    if (bf.readyState >= bf.HAVE_CURRENT_DATA) {
      this.needsUpdate = true;
    }
  }
});
CompressedTexture.prototype = Object.create(Texture.prototype);
CompressedTexture.prototype.constructor = CompressedTexture;
CompressedTexture.prototype.isCompressedTexture = true;
CanvasTexture.prototype = Object.create(Texture.prototype);
CanvasTexture.prototype.constructor = CanvasTexture;
CanvasTexture.prototype.isCanvasTexture = true;
DepthTexture.prototype = Object.create(Texture.prototype);
DepthTexture.prototype.constructor = DepthTexture;
DepthTexture.prototype.isDepthTexture = true;
WireframeGeometry.prototype = Object.create(BufferGeometry.prototype);
WireframeGeometry.prototype.constructor = WireframeGeometry;
ParametricGeometry.prototype = Object.create(Geometry.prototype);
ParametricGeometry.prototype.constructor = ParametricGeometry;
ParametricBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
ParametricBufferGeometry.prototype.constructor = ParametricBufferGeometry;
PolyhedronGeometry.prototype = Object.create(Geometry.prototype);
PolyhedronGeometry.prototype.constructor = PolyhedronGeometry;
PolyhedronBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
PolyhedronBufferGeometry.prototype.constructor = PolyhedronBufferGeometry;
TetrahedronGeometry.prototype = Object.create(Geometry.prototype);
TetrahedronGeometry.prototype.constructor = TetrahedronGeometry;
TetrahedronBufferGeometry.prototype = Object.create(PolyhedronBufferGeometry.prototype);
TetrahedronBufferGeometry.prototype.constructor = TetrahedronBufferGeometry;
OctahedronGeometry.prototype = Object.create(Geometry.prototype);
OctahedronGeometry.prototype.constructor = OctahedronGeometry;
OctahedronBufferGeometry.prototype = Object.create(PolyhedronBufferGeometry.prototype);
OctahedronBufferGeometry.prototype.constructor = OctahedronBufferGeometry;
IcosahedronGeometry.prototype = Object.create(Geometry.prototype);
IcosahedronGeometry.prototype.constructor = IcosahedronGeometry;
IcosahedronBufferGeometry.prototype = Object.create(PolyhedronBufferGeometry.prototype);
IcosahedronBufferGeometry.prototype.constructor = IcosahedronBufferGeometry;
DodecahedronGeometry.prototype = Object.create(Geometry.prototype);
DodecahedronGeometry.prototype.constructor = DodecahedronGeometry;
DodecahedronBufferGeometry.prototype = Object.create(PolyhedronBufferGeometry.prototype);
DodecahedronBufferGeometry.prototype.constructor = DodecahedronBufferGeometry;
TubeGeometry.prototype = Object.create(Geometry.prototype);
TubeGeometry.prototype.constructor = TubeGeometry;
TubeBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
TubeBufferGeometry.prototype.constructor = TubeBufferGeometry;
TubeBufferGeometry.prototype.toJSON = function () {
  var bf = BufferGeometry.prototype.toJSON.call(this);
  bf.path = this.parameters.path.toJSON();
  return bf;
};
TorusKnotGeometry.prototype = Object.create(Geometry.prototype);
TorusKnotGeometry.prototype.constructor = TorusKnotGeometry;
TorusKnotBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
TorusKnotBufferGeometry.prototype.constructor = TorusKnotBufferGeometry;
TorusGeometry.prototype = Object.create(Geometry.prototype);
TorusGeometry.prototype.constructor = TorusGeometry;
TorusBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
TorusBufferGeometry.prototype.constructor = TorusBufferGeometry;
function amL(bf, bg, bh) {
  bh = bh || 2;
  var bi;
  var bF;
  var bG;
  var bH;
  var bI;
  var bJ;
  var bK;
  var bL = bg && bg.length;
  var bM = bL ? bg[0] * bh : bf.length;
  var bN = anb(bf, 0, bM, bh, true);
  var bO = [];
  if (!bN) {
    return bO;
  }
  if (bL) {
    bN = function (bf, bg, bh, bi) {
      var bF;
      var bG;
      var bH;
      var bI;
      var bJ;
      var bK = [];
      bF = 0;
      bG = bg.length;
      for (; bF < bG; bF++) {
        bH = bg[bF] * bi;
        bI = bF < bG - 1 ? bg[bF + 1] * bi : bf.length;
        if ((bJ = anb(bf, bH, bI, bi, false)) === bJ.next) {
          bJ.steiner = true;
        }
        bK.push(aoX(bJ));
      }
      bK.sort(aox);
      bF = 0;
      for (; bF < bK.length; bF++) {
        aoA(bK[bF], bh);
        bh = anq(bh, bh.next);
      }
      return bh;
    }(bf, bg, bN, bh);
  }
  if (bf.length > bh * 80) {
    bi = bG = bf[0];
    bF = bH = bf[1];
    for (var bP = bh; bP < bM; bP += bh) {
      if ((bI = bf[bP]) < bi) {
        bi = bI;
      }
      if ((bJ = bf[bP + 1]) < bF) {
        bF = bJ;
      }
      if (bI > bG) {
        bG = bI;
      }
      if (bJ > bH) {
        bH = bJ;
      }
    }
    bK = (bK = Math.max(bG - bi, bH - bF)) !== 0 ? 1 / bK : 0;
  }
  anv(bN, bO, bh, bi, bF, bK);
  return bO;
}
function anb(bf, bg, bh, bi, bF) {
  var bG;
  var bH;
  if (bF === function (bf, bg, bh, bi) {
    for (var bF = 0, bG = bg, bH = bh - bi; bG < bh; bG += bi) {
      bF += (bf[bH] - bf[bG]) * (bf[bG + 1] + bf[bH + 1]);
      bH = bG;
    }
    return bF;
  }(bf, bg, bh, bi) > 0) {
    for (bG = bg; bG < bh; bG += bi) {
      bH = apI(bG, bf[bG], bf[bG + 1], bH);
    }
  } else {
    for (bG = bh - bi; bG >= bg; bG -= bi) {
      bH = apI(bG, bf[bG], bf[bG + 1], bH);
    }
  }
  if (bH && apq(bH, bH.next)) {
    apO(bH);
    bH = bH.next;
  }
  return bH;
}
function anq(bf, bg) {
  if (!bf) {
    return bf;
  }
  bg ||= bf;
  var bh;
  var bi = bf;
  do {
    bh = false;
    if (bi.steiner || !apq(bi, bi.next) && apm(bi.prev, bi, bi.next) !== 0) {
      bi = bi.next;
    } else {
      apO(bi);
      if ((bi = bg = bi.prev) === bi.next) {
        break;
      }
      bh = true;
    }
  } while (bh || bi !== bg);
  return bg;
}
function anv(bf, bg, bh, bi, bF, bG, bH) {
  if (bf) {
    if (!bH && bG) {
      (function (bf, bg, bh, bi) {
        var bF = bf;
        do {
          if (bF.z === null) {
            bF.z = aoR(bF.x, bF.y, bg, bh, bi);
          }
          bF.prevZ = bF.prev;
          bF.nextZ = bF.next;
          bF = bF.next;
        } while (bF !== bf);
        bF.prevZ.nextZ = null;
        bF.prevZ = null;
        (function (bf) {
          var bg;
          var bh;
          var bi;
          var bF;
          var bG;
          var bH;
          var bI;
          var bJ;
          var bK = 1;
          do {
            bh = bf;
            bf = null;
            bG = null;
            bH = 0;
            while (bh) {
              bH++;
              bi = bh;
              bI = 0;
              bg = 0;
              for (; bg < bK && (bI++, bi = bi.nextZ); bg++);
              for (bJ = bK; bI > 0 || bJ > 0 && bi;) {
                if (bI !== 0 && (bJ === 0 || !bi || bh.z <= bi.z)) {
                  bF = bh;
                  bh = bh.nextZ;
                  bI--;
                } else {
                  bF = bi;
                  bi = bi.nextZ;
                  bJ--;
                }
                if (bG) {
                  bG.nextZ = bF;
                } else {
                  bf = bF;
                }
                bF.prevZ = bG;
                bG = bF;
              }
              bh = bi;
            }
            bG.nextZ = null;
            bK *= 2;
          } while (bH > 1);
        })(bF);
      })(bf, bi, bF, bG);
    }
    for (var bI, bJ, bK = bf; bf.prev !== bf.next;) {
      bI = bf.prev;
      bJ = bf.next;
      if (bG ? ao1(bf, bi, bF, bG) : anV(bf)) {
        bg.push(bI.i / bh);
        bg.push(bf.i / bh);
        bg.push(bJ.i / bh);
        apO(bf);
        bf = bJ.next;
        bK = bJ.next;
      } else if ((bf = bJ) === bK) {
        if (bH) {
          if (bH === 1) {
            anv(bf = aog(bf, bg, bh), bg, bh, bi, bF, bG, 2);
          } else if (bH === 2) {
            aon(bf, bg, bh, bi, bF, bG);
          }
        } else {
          anv(anq(bf), bg, bh, bi, bF, bG, 1);
        }
        break;
      }
    }
  }
}
function anV(bf) {
  var bg = bf.prev;
  var bh = bf;
  var bi = bf.next;
  if (apm(bg, bh, bi) >= 0) {
    return false;
  }
  for (var bF = bf.next.next; bF !== bf.prev;) {
    if (ap1(bg.x, bg.y, bh.x, bh.y, bi.x, bi.y, bF.x, bF.y) && apm(bF.prev, bF, bF.next) >= 0) {
      return false;
    }
    bF = bF.next;
  }
  return true;
}
function ao1(bf, bg, bh, bi) {
  var bF = bf.prev;
  var bG = bf;
  var bH = bf.next;
  if (apm(bF, bG, bH) >= 0) {
    return false;
  }
  for (var bI = bF.x < bG.x ? bF.x < bH.x ? bF.x : bH.x : bG.x < bH.x ? bG.x : bH.x, bJ = bF.y < bG.y ? bF.y < bH.y ? bF.y : bH.y : bG.y < bH.y ? bG.y : bH.y, bK = bF.x > bG.x ? bF.x > bH.x ? bF.x : bH.x : bG.x > bH.x ? bG.x : bH.x, bL = bF.y > bG.y ? bF.y > bH.y ? bF.y : bH.y : bG.y > bH.y ? bG.y : bH.y, bM = aoR(bI, bJ, bg, bh, bi), bN = aoR(bK, bL, bg, bh, bi), bO = bf.nextZ; bO && bO.z <= bN;) {
    if (bO !== bf.prev && bO !== bf.next && ap1(bF.x, bF.y, bG.x, bG.y, bH.x, bH.y, bO.x, bO.y) && apm(bO.prev, bO, bO.next) >= 0) {
      return false;
    }
    bO = bO.nextZ;
  }
  for (bO = bf.prevZ; bO && bO.z >= bM;) {
    if (bO !== bf.prev && bO !== bf.next && ap1(bF.x, bF.y, bG.x, bG.y, bH.x, bH.y, bO.x, bO.y) && apm(bO.prev, bO, bO.next) >= 0) {
      return false;
    }
    bO = bO.prevZ;
  }
  return true;
}
function aog(bf, bg, bh) {
  var bi = bf;
  do {
    var bF = bi.prev;
    var bG = bi.next.next;
    if (!apq(bF, bG) && apt(bF, bi, bi.next, bG) && apy(bF, bG) && apy(bG, bF)) {
      bg.push(bF.i / bh);
      bg.push(bi.i / bh);
      bg.push(bG.i / bh);
      apO(bi);
      apO(bi.next);
      bi = bf = bG;
    }
    bi = bi.next;
  } while (bi !== bf);
  return bi;
}
function aon(bf, bg, bh, bi, bF, bG) {
  var bH = bf;
  do {
    for (var bI = bH.next.next; bI !== bH.prev;) {
      if (bH.i !== bI.i && apa(bH, bI)) {
        var bJ = apB(bH, bI);
        bH = anq(bH, bH.next);
        bJ = anq(bJ, bJ.next);
        anv(bH, bg, bh, bi, bF, bG);
        anv(bJ, bg, bh, bi, bF, bG);
        return;
      }
      bI = bI.next;
    }
    bH = bH.next;
  } while (bH !== bf);
}
function aox(bf, bg) {
  return bf.x - bg.x;
}
function aoA(bf, bg) {
  if (bg = function (bf, bg) {
    var bh;
    var bi = bg;
    var bF = bf.x;
    var bG = bf.y;
    var bH = -Infinity;
    do {
      if (bG <= bi.y && bG >= bi.next.y && bi.next.y !== bi.y) {
        var bI = bi.x + (bG - bi.y) * (bi.next.x - bi.x) / (bi.next.y - bi.y);
        if (bI <= bF && bI > bH) {
          bH = bI;
          if (bI === bF) {
            if (bG === bi.y) {
              return bi;
            }
            if (bG === bi.next.y) {
              return bi.next;
            }
          }
          bh = bi.x < bi.next.x ? bi : bi.next;
        }
      }
      bi = bi.next;
    } while (bi !== bg);
    if (!bh) {
      return null;
    }
    if (bF === bH) {
      return bh.prev;
    }
    var bJ;
    var bK = bh;
    var bL = bh.x;
    var bM = bh.y;
    var bN = Infinity;
    bi = bh.next;
    while (bi !== bK) {
      if (bF >= bi.x && bi.x >= bL && bF !== bi.x && ap1(bG < bM ? bF : bH, bG, bL, bM, bG < bM ? bH : bF, bG, bi.x, bi.y) && ((bJ = Math.abs(bG - bi.y) / (bF - bi.x)) < bN || bJ === bN && bi.x > bh.x) && apy(bi, bf)) {
        bh = bi;
        bN = bJ;
      }
      bi = bi.next;
    }
    return bh;
  }(bf, bg)) {
    var bh = apB(bg, bf);
    anq(bh, bh.next);
  }
}
function aoR(bf, bg, bh, bi, bF) {
  return (bf = ((bf = ((bf = ((bf = ((bf = (bf - bh) * 32767 * bF) | bf << 8) & 16711935) | bf << 4) & 252645135) | bf << 2) & 858993459) | bf << 1) & 1431655765) | (bg = ((bg = ((bg = ((bg = ((bg = (bg - bi) * 32767 * bF) | bg << 8) & 16711935) | bg << 4) & 252645135) | bg << 2) & 858993459) | bg << 1) & 1431655765) << 1;
}
function aoX(bf) {
  var bg = bf;
  var bh = bf;
  do {
    if (bg.x < bh.x) {
      bh = bg;
    }
    bg = bg.next;
  } while (bg !== bf);
  return bh;
}
function ap1(bf, bg, bh, bi, bF, bG, bH, bI) {
  return (bF - bH) * (bg - bI) - (bf - bH) * (bG - bI) >= 0 && (bf - bH) * (bi - bI) - (bh - bH) * (bg - bI) >= 0 && (bh - bH) * (bG - bI) - (bF - bH) * (bi - bI) >= 0;
}
function apa(bf, bg) {
  return bf.next.i !== bg.i && bf.prev.i !== bg.i && !function (bf, bg) {
    var bh = bf;
    do {
      if (bh.i !== bf.i && bh.next.i !== bf.i && bh.i !== bg.i && bh.next.i !== bg.i && apt(bh, bh.next, bf, bg)) {
        return true;
      }
      bh = bh.next;
    } while (bh !== bf);
    return false;
  }(bf, bg) && apy(bf, bg) && apy(bg, bf) && function (bf, bg) {
    var bh = bf;
    var bi = false;
    var bF = (bf.x + bg.x) / 2;
    var bG = (bf.y + bg.y) / 2;
    do {
      if (bh.y > bG != bh.next.y > bG && bh.next.y !== bh.y && bF < (bh.next.x - bh.x) * (bG - bh.y) / (bh.next.y - bh.y) + bh.x) {
        bi = !bi;
      }
      bh = bh.next;
    } while (bh !== bf);
    return bi;
  }(bf, bg);
}
function apm(bf, bg, bh) {
  return (bg.y - bf.y) * (bh.x - bg.x) - (bg.x - bf.x) * (bh.y - bg.y);
}
function apq(bf, bg) {
  return bf.x === bg.x && bf.y === bg.y;
}
function apt(bf, bg, bh, bi) {
  return !!apq(bf, bg) && !!apq(bh, bi) || !!apq(bf, bi) && !!apq(bh, bg) || apm(bf, bg, bh) > 0 != apm(bf, bg, bi) > 0 && apm(bh, bi, bf) > 0 != apm(bh, bi, bg) > 0;
}
function apy(bf, bg) {
  if (apm(bf.prev, bf, bf.next) < 0) {
    return apm(bf, bg, bf.next) >= 0 && apm(bf, bf.prev, bg) >= 0;
  } else {
    return apm(bf, bg, bf.prev) < 0 || apm(bf, bf.next, bg) < 0;
  }
}
function apB(bf, bg) {
  var bh = new apQ(bf.i, bf.x, bf.y);
  var bi = new apQ(bg.i, bg.x, bg.y);
  var bF = bf.next;
  var bG = bg.prev;
  bf.next = bg;
  bg.prev = bf;
  bh.next = bF;
  bF.prev = bh;
  bi.next = bh;
  bh.prev = bi;
  bG.next = bi;
  bi.prev = bG;
  return bi;
}
function apI(bf, bg, bh, bi) {
  var bF = new apQ(bf, bg, bh);
  if (bi) {
    bF.next = bi.next;
    bF.prev = bi;
    bi.next.prev = bF;
    bi.next = bF;
  } else {
    bF.prev = bF;
    bF.next = bF;
  }
  return bF;
}
function apO(bf) {
  bf.next.prev = bf.prev;
  bf.prev.next = bf.next;
  if (bf.prevZ) {
    bf.prevZ.nextZ = bf.nextZ;
  }
  if (bf.nextZ) {
    bf.nextZ.prevZ = bf.prevZ;
  }
}
function apQ(bf, bg, bh) {
  this.i = bf;
  this.x = bg;
  this.y = bh;
  this.prev = null;
  this.next = null;
  this.z = null;
  this.prevZ = null;
  this.nextZ = null;
  this.steiner = false;
}
export var ShapeUtils = {
  area: function (bf) {
    for (var bg = bf.length, bh = 0, bi = bg - 1, bF = 0; bF < bg; bi = bF++) {
      bh += bf[bi].x * bf[bF].y - bf[bF].x * bf[bi].y;
    }
    return bh * 0.5;
  },
  isClockWise: function (bf) {
    return ShapeUtils.area(bf) < 0;
  },
  triangulateShape: function (bf, bg) {
    var bh = [];
    var bi = [];
    var bF = [];
    aq9(bf);
    aqc(bh, bf);
    var bG = bf.length;
    bg.forEach(aq9);
    for (var bH = 0; bH < bg.length; bH++) {
      bi.push(bG);
      bG += bg[bH].length;
      aqc(bh, bg[bH]);
    }
    var bI = amL(bh, bi);
    for (bH = 0; bH < bI.length; bH += 3) {
      bF.push(bI.slice(bH, bH + 3));
    }
    return bF;
  }
};
function aq9(bf) {
  var bg = bf.length;
  if (bg > 2 && bf[bg - 1].equals(bf[0])) {
    bf.pop();
  }
}
function aqc(bf, bg) {
  for (var bh = 0; bh < bg.length; bh++) {
    bf.push(bg[bh].x);
    bf.push(bg[bh].y);
  }
}
export function ExtrudeGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "ExtrudeGeometry";
  this.parameters = {
    shapes: bf,
    options: bg
  };
  this.fromBufferGeometry(new ExtrudeBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function ExtrudeBufferGeometry(bf, bg) {
  BufferGeometry.call(this);
  this.type = "ExtrudeBufferGeometry";
  this.parameters = {
    shapes: bf,
    options: bg
  };
  bf = Array.isArray(bf) ? bf : [bf];
  for (var bh = this, bi = [], bF = [], bG = 0, bH = bf.length; bG < bH; bG++) {
    bI(bf[bG]);
  }
  function bI(bf) {
    var bG = [];
    var bH = bg.curveSegments !== undefined ? bg.curveSegments : 12;
    var bI = bg.steps !== undefined ? bg.steps : 1;
    var bJ = bg.depth !== undefined ? bg.depth : 100;
    var bK = bg.bevelEnabled === undefined || bg.bevelEnabled;
    var bL = bg.bevelThickness !== undefined ? bg.bevelThickness : 6;
    var bM = bg.bevelSize !== undefined ? bg.bevelSize : bL - 2;
    var bN = bg.bevelOffset !== undefined ? bg.bevelOffset : 0;
    var bO = bg.bevelSegments !== undefined ? bg.bevelSegments : 3;
    var bP = bg.extrudePath;
    var bQ = bg.UVGenerator !== undefined ? bg.UVGenerator : as8;
    if (bg.amount !== undefined) {
      console.warn("THREE.ExtrudeBufferGeometry: amount has been renamed to depth.");
      bJ = bg.amount;
    }
    var bR;
    var bS;
    var bT;
    var bU;
    var bV;
    var bW;
    var bX;
    var bY;
    var bZ = false;
    if (bP) {
      bR = bP.getSpacedPoints(bI);
      bZ = true;
      bK = false;
      bS = bP.computeFrenetFrames(bI, false);
      bT = new Vector3();
      bU = new Vector3();
      bV = new Vector3();
    }
    if (!bK) {
      bO = 0;
      bL = 0;
      bM = 0;
      bN = 0;
    }
    var c0 = bf.extractPoints(bH);
    var c1 = c0.shape;
    var c2 = c0.holes;
    if (!ShapeUtils.isClockWise(c1)) {
      c1 = c1.reverse();
      bX = 0;
      bY = c2.length;
      c1 = c1.reverse();
      bX = 0;
      bY = c2.length;
      for (; bX < bY; bX++) {
        bW = c2[bX];
        if (ShapeUtils.isClockWise(bW)) {
          c2[bX] = bW.reverse();
        }
      }
    }
    var c3 = ShapeUtils.triangulateShape(c1, c2);
    var c4 = c1;
    bX = 0;
    bY = c2.length;
    for (; bX < bY; bX++) {
      bW = c2[bX];
      c1 = c1.concat(bW);
    }
    function c5(bf, bg, bh) {
      if (!bg) {
        console.error("THREE.ExtrudeGeometry: vec does not exist");
      }
      return bg.clone().multiplyScalar(bh).add(bf);
    }
    var c6;
    var c7;
    var c8;
    var c9;
    var ca;
    var cb;
    var cc = c1.length;
    var cd = c3.length;
    function ce(bf, bg, bh) {
      var bi;
      var bF;
      var bG;
      var bH = bf.x - bg.x;
      var bI = bf.y - bg.y;
      var bJ = bh.x - bf.x;
      var bK = bh.y - bf.y;
      var bL = bH * bH + bI * bI;
      var bM = bH * bK - bI * bJ;
      if (Math.abs(bM) > Number.EPSILON) {
        var bN = Math.sqrt(bL);
        var bO = Math.sqrt(bJ * bJ + bK * bK);
        var bP = bg.x - bI / bN;
        var bQ = bg.y + bH / bN;
        var bR = ((bh.x - bK / bO - bP) * bK - (bh.y + bJ / bO - bQ) * bJ) / (bH * bK - bI * bJ);
        var bS = (bi = bP + bH * bR - bf.x) * bi + (bF = bQ + bI * bR - bf.y) * bF;
        if (bS <= 2) {
          return new Vector2(bi, bF);
        }
        bG = Math.sqrt(bS / 2);
      } else {
        var bT = false;
        if (bH > Number.EPSILON) {
          if (bJ > Number.EPSILON) {
            bT = true;
          }
        } else if (bH < -Number.EPSILON) {
          if (bJ < -Number.EPSILON) {
            bT = true;
          }
        } else if (Math.sign(bI) === Math.sign(bK)) {
          bT = true;
        }
        if (bT) {
          bi = -bI;
          bF = bH;
          bG = Math.sqrt(bL);
        } else {
          bi = bH;
          bF = bI;
          bG = Math.sqrt(bL / 2);
        }
      }
      return new Vector2(bi / bG, bF / bG);
    }
    for (var cf = [], cg = 0, ch = c4.length, ci = ch - 1, cj = cg + 1; cg < ch; cg++, ci++, cj++) {
      if (ci === ch) {
        ci = 0;
      }
      if (cj === ch) {
        cj = 0;
      }
      cf[cg] = ce(c4[cg], c4[ci], c4[cj]);
    }
    var ck;
    var cl;
    var cm = [];
    var cn = cf.concat();
    bX = 0;
    bY = c2.length;
    for (; bX < bY; bX++) {
      bW = c2[bX];
      ck = [];
      cg = 0;
      ci = (ch = bW.length) - 1;
      cj = cg + 1;
      for (; cg < ch; cg++, ci++, cj++) {
        if (ci === ch) {
          ci = 0;
        }
        if (cj === ch) {
          cj = 0;
        }
        ck[cg] = ce(bW[cg], bW[ci], bW[cj]);
      }
      cm.push(ck);
      cn = cn.concat(ck);
    }
    for (c6 = 0; c6 < bO; c6++) {
      c8 = c6 / bO;
      c9 = bL * Math.cos(c8 * Math.PI / 2);
      c7 = bM * Math.sin(c8 * Math.PI / 2) + bN;
      cg = 0;
      ch = c4.length;
      for (; cg < ch; cg++) {
        cp((ca = c5(c4[cg], cf[cg], c7)).x, ca.y, -c9);
      }
      bX = 0;
      bY = c2.length;
      for (; bX < bY; bX++) {
        bW = c2[bX];
        ck = cm[bX];
        cg = 0;
        ch = bW.length;
        bW = c2[bX];
        ck = cm[bX];
        cg = 0;
        ch = bW.length;
        for (; cg < ch; cg++) {
          cp((ca = c5(bW[cg], ck[cg], c7)).x, ca.y, -c9);
        }
      }
    }
    c7 = bM + bN;
    cg = 0;
    for (; cg < cc; cg++) {
      ca = bK ? c5(c1[cg], cn[cg], c7) : c1[cg];
      if (bZ) {
        bU.copy(bS.normals[0]).multiplyScalar(ca.x);
        bT.copy(bS.binormals[0]).multiplyScalar(ca.y);
        bV.copy(bR[0]).add(bU).add(bT);
        cp(bV.x, bV.y, bV.z);
      } else {
        cp(ca.x, ca.y, 0);
      }
    }
    for (cl = 1; cl <= bI; cl++) {
      for (cg = 0; cg < cc; cg++) {
        ca = bK ? c5(c1[cg], cn[cg], c7) : c1[cg];
        if (bZ) {
          bU.copy(bS.normals[cl]).multiplyScalar(ca.x);
          bT.copy(bS.binormals[cl]).multiplyScalar(ca.y);
          bV.copy(bR[cl]).add(bU).add(bT);
          cp(bV.x, bV.y, bV.z);
        } else {
          cp(ca.x, ca.y, bJ / bI * cl);
        }
      }
    }
    for (c6 = bO - 1; c6 >= 0; c6--) {
      c8 = c6 / bO;
      c9 = bL * Math.cos(c8 * Math.PI / 2);
      c7 = bM * Math.sin(c8 * Math.PI / 2) + bN;
      cg = 0;
      ch = c4.length;
      for (; cg < ch; cg++) {
        cp((ca = c5(c4[cg], cf[cg], c7)).x, ca.y, bJ + c9);
      }
      bX = 0;
      bY = c2.length;
      for (; bX < bY; bX++) {
        bW = c2[bX];
        ck = cm[bX];
        cg = 0;
        ch = bW.length;
        bW = c2[bX];
        ck = cm[bX];
        cg = 0;
        ch = bW.length;
        for (; cg < ch; cg++) {
          ca = c5(bW[cg], ck[cg], c7);
          if (bZ) {
            cp(ca.x, ca.y + bR[bI - 1].y, bR[bI - 1].x + c9);
          } else {
            cp(ca.x, ca.y, bJ + c9);
          }
        }
      }
    }
    function co(bf, bg) {
      var bh;
      var bi;
      for (cg = bf.length; --cg >= 0;) {
        bh = cg;
        if ((bi = cg - 1) < 0) {
          bi = bf.length - 1;
        }
        var bF = 0;
        var bG = bI + bO * 2;
        for (bF = 0; bF < bG; bF++) {
          var bH = cc * bF;
          var bJ = cc * (bF + 1);
          cr(bg + bh + bH, bg + bi + bH, bg + bi + bJ, bg + bh + bJ);
        }
      }
    }
    function cp(bf, bg, bh) {
      bG.push(bf);
      bG.push(bg);
      bG.push(bh);
    }
    function cq(bf, bg, bF) {
      cs(bf);
      cs(bg);
      cs(bF);
      var bG = bi.length / 3;
      var bH = bQ.generateTopUV(bh, bi, bG - 3, bG - 2, bG - 1);
      ct(bH[0]);
      ct(bH[1]);
      ct(bH[2]);
    }
    function cr(bf, bg, bF, bG) {
      cs(bf);
      cs(bg);
      cs(bG);
      cs(bg);
      cs(bF);
      cs(bG);
      var bH = bi.length / 3;
      var bI = bQ.generateSideWallUV(bh, bi, bH - 6, bH - 3, bH - 2, bH - 1);
      ct(bI[0]);
      ct(bI[1]);
      ct(bI[3]);
      ct(bI[1]);
      ct(bI[2]);
      ct(bI[3]);
    }
    function cs(bf) {
      bi.push(bG[bf * 3 + 0]);
      bi.push(bG[bf * 3 + 1]);
      bi.push(bG[bf * 3 + 2]);
    }
    function ct(bf) {
      bF.push(bf.x);
      bF.push(bf.y);
    }
    (function () {
      var bf = bi.length / 3;
      if (bK) {
        var bg = 0;
        var bF = cc * bg;
        for (cg = 0; cg < cd; cg++) {
          cq((cb = c3[cg])[2] + bF, cb[1] + bF, cb[0] + bF);
        }
        bF = cc * (bg = bI + bO * 2);
        cg = 0;
        for (; cg < cd; cg++) {
          cq((cb = c3[cg])[0] + bF, cb[1] + bF, cb[2] + bF);
        }
      } else {
        for (cg = 0; cg < cd; cg++) {
          cq((cb = c3[cg])[2], cb[1], cb[0]);
        }
        for (cg = 0; cg < cd; cg++) {
          cq((cb = c3[cg])[0] + cc * bI, cb[1] + cc * bI, cb[2] + cc * bI);
        }
      }
      bh.addGroup(bf, bi.length / 3 - bf, 0);
    })();
    (function () {
      var bf = bi.length / 3;
      var bg = 0;
      co(c4, bg);
      bg += c4.length;
      bX = 0;
      bY = c2.length;
      for (; bX < bY; bX++) {
        co(bW = c2[bX], bg);
        bg += bW.length;
      }
      bh.addGroup(bf, bi.length / 3 - bf, 1);
    })();
  }
  this.addAttribute("position", new Float32BufferAttribute(bi, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bF, 2));
  this.computeVertexNormals();
}
ExtrudeGeometry.prototype = Object.create(Geometry.prototype);
ExtrudeGeometry.prototype.constructor = ExtrudeGeometry;
ExtrudeGeometry.prototype.toJSON = function () {
  var bf = Geometry.prototype.toJSON.call(this);
  return asC(this.parameters.shapes, this.parameters.options, bf);
};
ExtrudeBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
ExtrudeBufferGeometry.prototype.constructor = ExtrudeBufferGeometry;
ExtrudeBufferGeometry.prototype.toJSON = function () {
  var bf = BufferGeometry.prototype.toJSON.call(this);
  return asC(this.parameters.shapes, this.parameters.options, bf);
};
var as8 = {
  generateTopUV: function (bf, bg, bh, bi, bF) {
    var bG = bg[bh * 3];
    var bH = bg[bh * 3 + 1];
    var bI = bg[bi * 3];
    var bJ = bg[bi * 3 + 1];
    var bK = bg[bF * 3];
    var bL = bg[bF * 3 + 1];
    return [new Vector2(bG, bH), new Vector2(bI, bJ), new Vector2(bK, bL)];
  },
  generateSideWallUV: function (bf, bg, bh, bi, bF, bG) {
    var bH = bg[bh * 3];
    var bI = bg[bh * 3 + 1];
    var bJ = bg[bh * 3 + 2];
    var bK = bg[bi * 3];
    var bL = bg[bi * 3 + 1];
    var bM = bg[bi * 3 + 2];
    var bN = bg[bF * 3];
    var bO = bg[bF * 3 + 1];
    var bP = bg[bF * 3 + 2];
    var bQ = bg[bG * 3];
    var bR = bg[bG * 3 + 1];
    var bS = bg[bG * 3 + 2];
    if (Math.abs(bI - bL) < 0.01) {
      return [new Vector2(bH, 1 - bJ), new Vector2(bK, 1 - bM), new Vector2(bN, 1 - bP), new Vector2(bQ, 1 - bS)];
    } else {
      return [new Vector2(bI, 1 - bJ), new Vector2(bL, 1 - bM), new Vector2(bO, 1 - bP), new Vector2(bR, 1 - bS)];
    }
  }
};
function asC(bf, bg, bh) {
  bh.shapes = [];
  if (Array.isArray(bf)) {
    for (var bi = 0, bF = bf.length; bi < bF; bi++) {
      var bG = bf[bi];
      bh.shapes.push(bG.uuid);
    }
  } else {
    bh.shapes.push(bf.uuid);
  }
  if (bg.extrudePath !== undefined) {
    bh.options.extrudePath = bg.extrudePath.toJSON();
  }
  return bh;
}
export function TextGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "TextGeometry";
  this.parameters = {
    text: bf,
    parameters: bg
  };
  this.fromBufferGeometry(new TextBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function TextBufferGeometry(bf, bg) {
  var bh = (bg = bg || {}).font;
  if (!bh || !bh.isFont) {
    console.error("THREE.TextGeometry: font parameter is not an instance of THREE.Font.");
    return new Geometry();
  }
  var bi = bh.generateShapes(bf, bg.size);
  bg.depth = bg.height !== undefined ? bg.height : 50;
  if (bg.bevelThickness === undefined) {
    bg.bevelThickness = 10;
  }
  if (bg.bevelSize === undefined) {
    bg.bevelSize = 8;
  }
  if (bg.bevelEnabled === undefined) {
    bg.bevelEnabled = false;
  }
  ExtrudeBufferGeometry.call(this, bi, bg);
  this.type = "TextBufferGeometry";
}
export function SphereGeometry(bf, bg, bh, bi, bF, bG, bH) {
  Geometry.call(this);
  this.type = "SphereGeometry";
  this.parameters = {
    radius: bf,
    widthSegments: bg,
    heightSegments: bh,
    phiStart: bi,
    phiLength: bF,
    thetaStart: bG,
    thetaLength: bH
  };
  this.fromBufferGeometry(new SphereBufferGeometry(bf, bg, bh, bi, bF, bG, bH));
  this.mergeVertices();
}
export function SphereBufferGeometry(bf, bg, bh, bi, bF, bG, bH) {
  BufferGeometry.call(this);
  this.type = "SphereBufferGeometry";
  this.parameters = {
    radius: bf,
    widthSegments: bg,
    heightSegments: bh,
    phiStart: bi,
    phiLength: bF,
    thetaStart: bG,
    thetaLength: bH
  };
  bf = bf || 1;
  bg = Math.max(3, Math.floor(bg) || 8);
  bh = Math.max(2, Math.floor(bh) || 6);
  bi = bi !== undefined ? bi : 0;
  bF = bF !== undefined ? bF : Math.PI * 2;
  bG = bG !== undefined ? bG : 0;
  bH = bH !== undefined ? bH : Math.PI;
  var bI;
  var bJ;
  var bK = Math.min(bG + bH, Math.PI);
  var bL = 0;
  var bM = [];
  var bN = new Vector3();
  var bO = new Vector3();
  var bP = [];
  var bQ = [];
  var bR = [];
  var bS = [];
  for (bJ = 0; bJ <= bh; bJ++) {
    var bT = [];
    var bU = bJ / bh;
    var bV = 0;
    if (bJ == 0 && bG == 0) {
      bV = 0.5 / bg;
    } else if (bJ == bh && bK == Math.PI) {
      bV = -0.5 / bg;
    }
    bI = 0;
    for (; bI <= bg; bI++) {
      var bW = bI / bg;
      bN.x = -bf * Math.cos(bi + bW * bF) * Math.sin(bG + bU * bH);
      bN.y = bf * Math.cos(bG + bU * bH);
      bN.z = bf * Math.sin(bi + bW * bF) * Math.sin(bG + bU * bH);
      bQ.push(bN.x, bN.y, bN.z);
      bO.copy(bN).normalize();
      bR.push(bO.x, bO.y, bO.z);
      bS.push(bW + bV, 1 - bU);
      bT.push(bL++);
    }
    bM.push(bT);
  }
  for (bJ = 0; bJ < bh; bJ++) {
    for (bI = 0; bI < bg; bI++) {
      var bX = bM[bJ][bI + 1];
      var bY = bM[bJ][bI];
      var bZ = bM[bJ + 1][bI];
      var c0 = bM[bJ + 1][bI + 1];
      if (bJ !== 0 || bG > 0) {
        bP.push(bX, bY, c0);
      }
      if (bJ !== bh - 1 || bK < Math.PI) {
        bP.push(bY, bZ, c0);
      }
    }
  }
  this.setIndex(bP);
  this.addAttribute("position", new Float32BufferAttribute(bQ, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bR, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bS, 2));
}
export function RingGeometry(bf, bg, bh, bi, bF, bG) {
  Geometry.call(this);
  this.type = "RingGeometry";
  this.parameters = {
    innerRadius: bf,
    outerRadius: bg,
    thetaSegments: bh,
    phiSegments: bi,
    thetaStart: bF,
    thetaLength: bG
  };
  this.fromBufferGeometry(new RingBufferGeometry(bf, bg, bh, bi, bF, bG));
  this.mergeVertices();
}
export function RingBufferGeometry(bf, bg, bh, bi, bF, bG) {
  BufferGeometry.call(this);
  this.type = "RingBufferGeometry";
  this.parameters = {
    innerRadius: bf,
    outerRadius: bg,
    thetaSegments: bh,
    phiSegments: bi,
    thetaStart: bF,
    thetaLength: bG
  };
  bf = bf || 0.5;
  bg = bg || 1;
  bF = bF !== undefined ? bF : 0;
  bG = bG !== undefined ? bG : Math.PI * 2;
  bh = bh !== undefined ? Math.max(3, bh) : 8;
  var bH;
  var bI;
  var bJ;
  var bK = [];
  var bL = [];
  var bM = [];
  var bN = [];
  var bO = bf;
  var bP = (bg - bf) / (bi = bi !== undefined ? Math.max(1, bi) : 1);
  var bQ = new Vector3();
  var bR = new Vector2();
  for (bI = 0; bI <= bi; bI++) {
    for (bJ = 0; bJ <= bh; bJ++) {
      bH = bF + bJ / bh * bG;
      bQ.x = bO * Math.cos(bH);
      bQ.y = bO * Math.sin(bH);
      bL.push(bQ.x, bQ.y, bQ.z);
      bM.push(0, 0, 1);
      bR.x = (bQ.x / bg + 1) / 2;
      bR.y = (bQ.y / bg + 1) / 2;
      bN.push(bR.x, bR.y);
    }
    bO += bP;
  }
  for (bI = 0; bI < bi; bI++) {
    var bS = bI * (bh + 1);
    for (bJ = 0; bJ < bh; bJ++) {
      var bT = bH = bJ + bS;
      var bU = bH + bh + 1;
      var bV = bH + bh + 2;
      var bW = bH + 1;
      bK.push(bT, bU, bW);
      bK.push(bU, bV, bW);
    }
  }
  this.setIndex(bK);
  this.addAttribute("position", new Float32BufferAttribute(bL, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bM, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bN, 2));
}
export function LatheGeometry(bf, bg, bh, bi) {
  Geometry.call(this);
  this.type = "LatheGeometry";
  this.parameters = {
    points: bf,
    segments: bg,
    phiStart: bh,
    phiLength: bi
  };
  this.fromBufferGeometry(new LatheBufferGeometry(bf, bg, bh, bi));
  this.mergeVertices();
}
export function LatheBufferGeometry(bf, bg, bh, bi) {
  BufferGeometry.call(this);
  this.type = "LatheBufferGeometry";
  this.parameters = {
    points: bf,
    segments: bg,
    phiStart: bh,
    phiLength: bi
  };
  bg = Math.floor(bg) || 12;
  bh = bh || 0;
  bi = bi || Math.PI * 2;
  bi = Math.clamp(bi, 0, Math.PI * 2);
  var bF;
  var bG;
  var bH;
  var bI = [];
  var bJ = [];
  var bK = [];
  var bL = 1 / bg;
  var bM = new Vector3();
  var bN = new Vector2();
  for (bG = 0; bG <= bg; bG++) {
    var bO = bh + bG * bL * bi;
    var bP = Math.sin(bO);
    var bQ = Math.cos(bO);
    for (bH = 0; bH <= bf.length - 1; bH++) {
      bM.x = bf[bH].x * bP;
      bM.y = bf[bH].y;
      bM.z = bf[bH].x * bQ;
      bJ.push(bM.x, bM.y, bM.z);
      bN.x = bG / bg;
      bN.y = bH / (bf.length - 1);
      bK.push(bN.x, bN.y);
    }
  }
  for (bG = 0; bG < bg; bG++) {
    for (bH = 0; bH < bf.length - 1; bH++) {
      var bR = bF = bH + bG * bf.length;
      var bS = bF + bf.length;
      var bT = bF + bf.length + 1;
      var bU = bF + 1;
      bI.push(bR, bS, bU);
      bI.push(bS, bT, bU);
    }
  }
  this.setIndex(bI);
  this.addAttribute("position", new Float32BufferAttribute(bJ, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bK, 2));
  this.computeVertexNormals();
  if (bi === Math.PI * 2) {
    var bV = this.attributes.normal.array;
    var bW = new Vector3();
    var bX = new Vector3();
    var bY = new Vector3();
    bF = bg * bf.length * 3;
    bG = 0;
    bH = 0;
    for (; bG < bf.length; bG++, bH += 3) {
      bW.x = bV[bH + 0];
      bW.y = bV[bH + 1];
      bW.z = bV[bH + 2];
      bX.x = bV[bF + bH + 0];
      bX.y = bV[bF + bH + 1];
      bX.z = bV[bF + bH + 2];
      bY.addVectors(bW, bX).normalize();
      bV[bH + 0] = bV[bF + bH + 0] = bY.x;
      bV[bH + 1] = bV[bF + bH + 1] = bY.y;
      bV[bH + 2] = bV[bF + bH + 2] = bY.z;
    }
  }
}
export function ShapeGeometry(bf, bg) {
  Geometry.call(this);
  this.type = "ShapeGeometry";
  if (typeof bg == "object") {
    console.warn("THREE.ShapeGeometry: Options parameter has been removed.");
    bg = bg.curveSegments;
  }
  this.parameters = {
    shapes: bf,
    curveSegments: bg
  };
  this.fromBufferGeometry(new ShapeBufferGeometry(bf, bg));
  this.mergeVertices();
}
export function ShapeBufferGeometry(bf, bg) {
  BufferGeometry.call(this);
  this.type = "ShapeBufferGeometry";
  this.parameters = {
    shapes: bf,
    curveSegments: bg
  };
  bg = bg || 12;
  var bh = [];
  var bi = [];
  var bF = [];
  var bG = [];
  var bH = 0;
  var bI = 0;
  if (Array.isArray(bf) === false) {
    bK(bf);
  } else {
    for (var bJ = 0; bJ < bf.length; bJ++) {
      bK(bf[bJ]);
      this.addGroup(bH, bI, bJ);
      bH += bI;
      bI = 0;
    }
  }
  function bK(bf) {
    var bH;
    var bJ;
    var bK;
    var bL = bi.length / 3;
    var bM = bf.extractPoints(bg);
    var bN = bM.shape;
    var bO = bM.holes;
    if (ShapeUtils.isClockWise(bN) === false) {
      bN = bN.reverse();
    }
    bH = 0;
    bJ = bO.length;
    for (; bH < bJ; bH++) {
      bK = bO[bH];
      if (ShapeUtils.isClockWise(bK) === true) {
        bO[bH] = bK.reverse();
      }
    }
    var bP = ShapeUtils.triangulateShape(bN, bO);
    bH = 0;
    bJ = bO.length;
    for (; bH < bJ; bH++) {
      bK = bO[bH];
      bN = bN.concat(bK);
    }
    bH = 0;
    bJ = bN.length;
    for (; bH < bJ; bH++) {
      var bQ = bN[bH];
      bi.push(bQ.x, bQ.y, 0);
      bF.push(0, 0, 1);
      bG.push(bQ.x, bQ.y);
    }
    bH = 0;
    bJ = bP.length;
    for (; bH < bJ; bH++) {
      var bR = bP[bH];
      var bS = bR[0] + bL;
      var bT = bR[1] + bL;
      var bU = bR[2] + bL;
      bh.push(bS, bT, bU);
      bI += 3;
    }
  }
  this.setIndex(bh);
  this.addAttribute("position", new Float32BufferAttribute(bi, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bF, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bG, 2));
}
function auQ(bf, bg) {
  bg.shapes = [];
  if (Array.isArray(bf)) {
    for (var bh = 0, bi = bf.length; bh < bi; bh++) {
      var bF = bf[bh];
      bg.shapes.push(bF.uuid);
    }
  } else {
    bg.shapes.push(bf.uuid);
  }
  return bg;
}
export function EdgesGeometry(bf, bg) {
  BufferGeometry.call(this);
  this.type = "EdgesGeometry";
  this.parameters = {
    thresholdAngle: bg
  };
  bg = bg !== undefined ? bg : 1;
  var bh;
  var bi;
  var bF;
  var bG;
  var bH = [];
  var bI = Math.cos(Math.DEG2RAD * bg);
  var bJ = [0, 0];
  var bK = {};
  var bL = ["a", "b", "c"];
  if (bf.isBufferGeometry) {
    (bG = new Geometry()).fromBufferGeometry(bf);
  } else {
    bG = bf.clone();
  }
  bG.mergeVertices();
  bG.computeFaceNormals();
  for (var bM = bG.vertices, bN = bG.faces, bO = 0, bP = bN.length; bO < bP; bO++) {
    for (var bQ = bN[bO], bR = 0; bR < 3; bR++) {
      bh = bQ[bL[bR]];
      bi = bQ[bL[(bR + 1) % 3]];
      bJ[0] = Math.min(bh, bi);
      bJ[1] = Math.max(bh, bi);
      if (bK[bF = bJ[0] + "," + bJ[1]] === undefined) {
        bK[bF] = {
          index1: bJ[0],
          index2: bJ[1],
          face1: bO,
          face2: undefined
        };
      } else {
        bK[bF].face2 = bO;
      }
    }
  }
  for (bF in bK) {
    var bS = bK[bF];
    if (bS.face2 === undefined || bN[bS.face1].normal.dot(bN[bS.face2].normal) <= bI) {
      var bT = bM[bS.index1];
      bH.push(bT.x, bT.y, bT.z);
      bT = bM[bS.index2];
      bH.push(bT.x, bT.y, bT.z);
    }
  }
  this.addAttribute("position", new Float32BufferAttribute(bH, 3));
}
export function CylinderGeometry(bf, bg, bh, bi, bF, bG, bH, bI) {
  Geometry.call(this);
  this.type = "CylinderGeometry";
  this.parameters = {
    radiusTop: bf,
    radiusBottom: bg,
    height: bh,
    radialSegments: bi,
    heightSegments: bF,
    openEnded: bG,
    thetaStart: bH,
    thetaLength: bI
  };
  this.fromBufferGeometry(new CylinderBufferGeometry(bf, bg, bh, bi, bF, bG, bH, bI));
  this.mergeVertices();
}
export function CylinderBufferGeometry(bf, bg, bh, bi, bF, bG, bH, bI) {
  BufferGeometry.call(this);
  this.type = "CylinderBufferGeometry";
  this.parameters = {
    radiusTop: bf,
    radiusBottom: bg,
    height: bh,
    radialSegments: bi,
    heightSegments: bF,
    openEnded: bG,
    thetaStart: bH,
    thetaLength: bI
  };
  var bJ = this;
  bf = bf !== undefined ? bf : 1;
  bg = bg !== undefined ? bg : 1;
  bh = bh || 1;
  bi = Math.floor(bi) || 8;
  bF = Math.floor(bF) || 1;
  bG = bG !== undefined && bG;
  bH = bH !== undefined ? bH : 0;
  bI = bI !== undefined ? bI : Math.PI * 2;
  var bK = [];
  var bL = [];
  var bM = [];
  var bN = [];
  var bO = 0;
  var bP = [];
  var bQ = bh / 2;
  var bR = 0;
  function bS(bh) {
    var bF;
    var bG;
    var bP;
    var bS = new Vector2();
    var bT = new Vector3();
    var bU = 0;
    var bV = bh === true ? bf : bg;
    var bW = bh === true ? 1 : -1;
    bG = bO;
    bF = 1;
    for (; bF <= bi; bF++) {
      bL.push(0, bQ * bW, 0);
      bM.push(0, bW, 0);
      bN.push(0.5, 0.5);
      bO++;
    }
    bP = bO;
    bF = 0;
    for (; bF <= bi; bF++) {
      var bX = bF / bi * bI + bH;
      var bY = Math.cos(bX);
      var bZ = Math.sin(bX);
      bT.x = bV * bZ;
      bT.y = bQ * bW;
      bT.z = bV * bY;
      bL.push(bT.x, bT.y, bT.z);
      bM.push(0, bW, 0);
      bS.x = bY * 0.5 + 0.5;
      bS.y = bZ * 0.5 * bW + 0.5;
      bN.push(bS.x, bS.y);
      bO++;
    }
    for (bF = 0; bF < bi; bF++) {
      var c0 = bG + bF;
      var c1 = bP + bF;
      if (bh === true) {
        bK.push(c1, c1 + 1, c0);
      } else {
        bK.push(c1 + 1, c1, c0);
      }
      bU += 3;
    }
    bJ.addGroup(bR, bU, bh === true ? 1 : 2);
    bR += bU;
  }
  (function () {
    var bG;
    var bS;
    var bT = new Vector3();
    var bU = new Vector3();
    var bV = 0;
    var bW = (bg - bf) / bh;
    for (bS = 0; bS <= bF; bS++) {
      var bX = [];
      var bY = bS / bF;
      var bZ = bY * (bg - bf) + bf;
      for (bG = 0; bG <= bi; bG++) {
        var c0 = bG / bi;
        var c1 = c0 * bI + bH;
        var c2 = Math.sin(c1);
        var c3 = Math.cos(c1);
        bU.x = bZ * c2;
        bU.y = -bY * bh + bQ;
        bU.z = bZ * c3;
        bL.push(bU.x, bU.y, bU.z);
        bT.set(c2, bW, c3).normalize();
        bM.push(bT.x, bT.y, bT.z);
        bN.push(c0, 1 - bY);
        bX.push(bO++);
      }
      bP.push(bX);
    }
    for (bG = 0; bG < bi; bG++) {
      for (bS = 0; bS < bF; bS++) {
        var c4 = bP[bS][bG];
        var c5 = bP[bS + 1][bG];
        var c6 = bP[bS + 1][bG + 1];
        var c7 = bP[bS][bG + 1];
        bK.push(c4, c5, c7);
        bK.push(c5, c6, c7);
        bV += 6;
      }
    }
    bJ.addGroup(bR, bV, 0);
    bR += bV;
  })();
  if (bG === false) {
    if (bf > 0) {
      bS(true);
    }
    if (bg > 0) {
      bS(false);
    }
  }
  this.setIndex(bK);
  this.addAttribute("position", new Float32BufferAttribute(bL, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bM, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bN, 2));
}
export function ConeGeometry(bf, bg, bh, bi, bF, bG, bH) {
  CylinderGeometry.call(this, 0, bf, bg, bh, bi, bF, bG, bH);
  this.type = "ConeGeometry";
  this.parameters = {
    radius: bf,
    height: bg,
    radialSegments: bh,
    heightSegments: bi,
    openEnded: bF,
    thetaStart: bG,
    thetaLength: bH
  };
}
export function ConeBufferGeometry(bf, bg, bh, bi, bF, bG, bH) {
  CylinderBufferGeometry.call(this, 0, bf, bg, bh, bi, bF, bG, bH);
  this.type = "ConeBufferGeometry";
  this.parameters = {
    radius: bf,
    height: bg,
    radialSegments: bh,
    heightSegments: bi,
    openEnded: bF,
    thetaStart: bG,
    thetaLength: bH
  };
}
export function CircleGeometry(bf, bg, bh, bi) {
  Geometry.call(this);
  this.type = "CircleGeometry";
  this.parameters = {
    radius: bf,
    segments: bg,
    thetaStart: bh,
    thetaLength: bi
  };
  this.fromBufferGeometry(new CircleBufferGeometry(bf, bg, bh, bi));
  this.mergeVertices();
}
export function CircleBufferGeometry(bf, bg, bh, bi) {
  BufferGeometry.call(this);
  this.type = "CircleBufferGeometry";
  this.parameters = {
    radius: bf,
    segments: bg,
    thetaStart: bh,
    thetaLength: bi
  };
  bf = bf || 1;
  bg = bg !== undefined ? Math.max(3, bg) : 8;
  bh = bh !== undefined ? bh : 0;
  bi = bi !== undefined ? bi : Math.PI * 2;
  var bF;
  var bG;
  var bH = [];
  var bI = [];
  var bJ = [];
  var bK = [];
  var bL = new Vector3();
  var bM = new Vector2();
  bI.push(0, 0, 0);
  bJ.push(0, 0, 1);
  bK.push(0.5, 0.5);
  bG = 0;
  bF = 3;
  for (; bG <= bg; bG++, bF += 3) {
    var bN = bh + bG / bg * bi;
    bL.x = bf * Math.cos(bN);
    bL.y = bf * Math.sin(bN);
    bI.push(bL.x, bL.y, bL.z);
    bJ.push(0, 0, 1);
    bM.x = (bI[bF] / bf + 1) / 2;
    bM.y = (bI[bF + 1] / bf + 1) / 2;
    bK.push(bM.x, bM.y);
  }
  for (bF = 1; bF <= bg; bF++) {
    bH.push(bF, bF + 1, 0);
  }
  this.setIndex(bH);
  this.addAttribute("position", new Float32BufferAttribute(bI, 3));
  this.addAttribute("normal", new Float32BufferAttribute(bJ, 3));
  this.addAttribute("uv", new Float32BufferAttribute(bK, 2));
}
TextGeometry.prototype = Object.create(Geometry.prototype);
TextGeometry.prototype.constructor = TextGeometry;
TextBufferGeometry.prototype = Object.create(ExtrudeBufferGeometry.prototype);
TextBufferGeometry.prototype.constructor = TextBufferGeometry;
SphereGeometry.prototype = Object.create(Geometry.prototype);
SphereGeometry.prototype.constructor = SphereGeometry;
SphereBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
SphereBufferGeometry.prototype.constructor = SphereBufferGeometry;
RingGeometry.prototype = Object.create(Geometry.prototype);
RingGeometry.prototype.constructor = RingGeometry;
RingBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
RingBufferGeometry.prototype.constructor = RingBufferGeometry;
LatheGeometry.prototype = Object.create(Geometry.prototype);
LatheGeometry.prototype.constructor = LatheGeometry;
LatheBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
LatheBufferGeometry.prototype.constructor = LatheBufferGeometry;
ShapeGeometry.prototype = Object.create(Geometry.prototype);
ShapeGeometry.prototype.constructor = ShapeGeometry;
ShapeGeometry.prototype.toJSON = function () {
  var bf = Geometry.prototype.toJSON.call(this);
  return auQ(this.parameters.shapes, bf);
};
ShapeBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
ShapeBufferGeometry.prototype.constructor = ShapeBufferGeometry;
ShapeBufferGeometry.prototype.toJSON = function () {
  var bf = BufferGeometry.prototype.toJSON.call(this);
  return auQ(this.parameters.shapes, bf);
};
EdgesGeometry.prototype = Object.create(BufferGeometry.prototype);
EdgesGeometry.prototype.constructor = EdgesGeometry;
CylinderGeometry.prototype = Object.create(Geometry.prototype);
CylinderGeometry.prototype.constructor = CylinderGeometry;
CylinderBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
CylinderBufferGeometry.prototype.constructor = CylinderBufferGeometry;
ConeGeometry.prototype = Object.create(CylinderGeometry.prototype);
ConeGeometry.prototype.constructor = ConeGeometry;
ConeBufferGeometry.prototype = Object.create(CylinderBufferGeometry.prototype);
ConeBufferGeometry.prototype.constructor = ConeBufferGeometry;
CircleGeometry.prototype = Object.create(Geometry.prototype);
CircleGeometry.prototype.constructor = CircleGeometry;
CircleBufferGeometry.prototype = Object.create(BufferGeometry.prototype);
CircleBufferGeometry.prototype.constructor = CircleBufferGeometry;
var awO = Object.freeze({
  WireframeGeometry: WireframeGeometry,
  ParametricGeometry: ParametricGeometry,
  ParametricBufferGeometry: ParametricBufferGeometry,
  TetrahedronGeometry: TetrahedronGeometry,
  TetrahedronBufferGeometry: TetrahedronBufferGeometry,
  OctahedronGeometry: OctahedronGeometry,
  OctahedronBufferGeometry: OctahedronBufferGeometry,
  IcosahedronGeometry: IcosahedronGeometry,
  IcosahedronBufferGeometry: IcosahedronBufferGeometry,
  DodecahedronGeometry: DodecahedronGeometry,
  DodecahedronBufferGeometry: DodecahedronBufferGeometry,
  PolyhedronGeometry: PolyhedronGeometry,
  PolyhedronBufferGeometry: PolyhedronBufferGeometry,
  TubeGeometry: TubeGeometry,
  TubeBufferGeometry: TubeBufferGeometry,
  TorusKnotGeometry: TorusKnotGeometry,
  TorusKnotBufferGeometry: TorusKnotBufferGeometry,
  TorusGeometry: TorusGeometry,
  TorusBufferGeometry: TorusBufferGeometry,
  TextGeometry: TextGeometry,
  TextBufferGeometry: TextBufferGeometry,
  SphereGeometry: SphereGeometry,
  SphereBufferGeometry: SphereBufferGeometry,
  RingGeometry: RingGeometry,
  RingBufferGeometry: RingBufferGeometry,
  PlaneGeometry: PlaneGeometry,
  PlaneBufferGeometry: PlaneBufferGeometry,
  LatheGeometry: LatheGeometry,
  LatheBufferGeometry: LatheBufferGeometry,
  ShapeGeometry: ShapeGeometry,
  ShapeBufferGeometry: ShapeBufferGeometry,
  ExtrudeGeometry: ExtrudeGeometry,
  ExtrudeBufferGeometry: ExtrudeBufferGeometry,
  EdgesGeometry: EdgesGeometry,
  ConeGeometry: ConeGeometry,
  ConeBufferGeometry: ConeBufferGeometry,
  CylinderGeometry: CylinderGeometry,
  CylinderBufferGeometry: CylinderBufferGeometry,
  CircleGeometry: CircleGeometry,
  CircleBufferGeometry: CircleBufferGeometry,
  BoxGeometry: BoxGeometry,
  BoxBufferGeometry: BoxBufferGeometry
});
export function ShadowMaterial(bf) {
  Material.call(this);
  this.type = "ShadowMaterial";
  this.color = new Color(0);
  this.transparent = true;
  this.setValues(bf);
}
export function RawShaderMaterial(bf) {
  ShaderMaterial.call(this, bf);
  this.type = "RawShaderMaterial";
}
export function MeshStandardMaterial(bf) {
  Material.call(this);
  this.defines = {
    STANDARD: ""
  };
  this.type = "MeshStandardMaterial";
  this.color = new Color(16777215);
  this.roughness = 0.5;
  this.metalness = 0.5;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Color(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = TangentSpaceNormalMap;
  this.normalScale = new Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.roughnessMap = null;
  this.metalnessMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.envMapIntensity = 1;
  this.refractionRatio = 0.98;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(bf);
}
export function MeshPhysicalMaterial(bf) {
  MeshStandardMaterial.call(this);
  this.defines = {
    PHYSICAL: ""
  };
  this.type = "MeshPhysicalMaterial";
  this.reflectivity = 0.5;
  this.clearCoat = 0;
  this.clearCoatRoughness = 0;
  this.setValues(bf);
}
export function MeshPhongMaterial(bf) {
  Material.call(this);
  this.type = "MeshPhongMaterial";
  this.color = new Color(16777215);
  this.specular = new Color(1118481);
  this.shininess = 30;
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Color(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = TangentSpaceNormalMap;
  this.normalScale = new Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(bf);
}
export function MeshToonMaterial(bf) {
  MeshPhongMaterial.call(this);
  this.defines = {
    TOON: ""
  };
  this.type = "MeshToonMaterial";
  this.gradientMap = null;
  this.setValues(bf);
}
export function MeshNormalMaterial(bf) {
  Material.call(this);
  this.type = "MeshNormalMaterial";
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = TangentSpaceNormalMap;
  this.normalScale = new Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.fog = false;
  this.lights = false;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(bf);
}
export function MeshLambertMaterial(bf) {
  Material.call(this);
  this.type = "MeshLambertMaterial";
  this.color = new Color(16777215);
  this.map = null;
  this.lightMap = null;
  this.lightMapIntensity = 1;
  this.aoMap = null;
  this.aoMapIntensity = 1;
  this.emissive = new Color(0);
  this.emissiveIntensity = 1;
  this.emissiveMap = null;
  this.specularMap = null;
  this.alphaMap = null;
  this.envMap = null;
  this.combine = MultiplyOperation;
  this.reflectivity = 1;
  this.refractionRatio = 0.98;
  this.wireframe = false;
  this.wireframeLinewidth = 1;
  this.wireframeLinecap = "round";
  this.wireframeLinejoin = "round";
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.setValues(bf);
}
export function MeshMatcapMaterial(bf) {
  Material.call(this);
  this.defines = {
    MATCAP: ""
  };
  this.type = "MeshMatcapMaterial";
  this.color = new Color(16777215);
  this.matcap = null;
  this.map = null;
  this.bumpMap = null;
  this.bumpScale = 1;
  this.normalMap = null;
  this.normalMapType = TangentSpaceNormalMap;
  this.normalScale = new Vector2(1, 1);
  this.displacementMap = null;
  this.displacementScale = 1;
  this.displacementBias = 0;
  this.alphaMap = null;
  this.skinning = false;
  this.morphTargets = false;
  this.morphNormals = false;
  this.lights = false;
  this.setValues(bf);
}
export function LineDashedMaterial(bf) {
  LineBasicMaterial.call(this);
  this.type = "LineDashedMaterial";
  this.scale = 1;
  this.dashSize = 3;
  this.gapSize = 1;
  this.setValues(bf);
}
ShadowMaterial.prototype = Object.create(Material.prototype);
ShadowMaterial.prototype.constructor = ShadowMaterial;
ShadowMaterial.prototype.isShadowMaterial = true;
ShadowMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  return this;
};
RawShaderMaterial.prototype = Object.create(ShaderMaterial.prototype);
RawShaderMaterial.prototype.constructor = RawShaderMaterial;
RawShaderMaterial.prototype.isRawShaderMaterial = true;
MeshStandardMaterial.prototype = Object.create(Material.prototype);
MeshStandardMaterial.prototype.constructor = MeshStandardMaterial;
MeshStandardMaterial.prototype.isMeshStandardMaterial = true;
MeshStandardMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.defines = {
    STANDARD: ""
  };
  this.color.copy(bf.color);
  this.roughness = bf.roughness;
  this.metalness = bf.metalness;
  this.map = bf.map;
  this.lightMap = bf.lightMap;
  this.lightMapIntensity = bf.lightMapIntensity;
  this.aoMap = bf.aoMap;
  this.aoMapIntensity = bf.aoMapIntensity;
  this.emissive.copy(bf.emissive);
  this.emissiveMap = bf.emissiveMap;
  this.emissiveIntensity = bf.emissiveIntensity;
  this.bumpMap = bf.bumpMap;
  this.bumpScale = bf.bumpScale;
  this.normalMap = bf.normalMap;
  this.normalMapType = bf.normalMapType;
  this.normalScale.copy(bf.normalScale);
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  this.roughnessMap = bf.roughnessMap;
  this.metalnessMap = bf.metalnessMap;
  this.alphaMap = bf.alphaMap;
  this.envMap = bf.envMap;
  this.envMapIntensity = bf.envMapIntensity;
  this.refractionRatio = bf.refractionRatio;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.wireframeLinecap = bf.wireframeLinecap;
  this.wireframeLinejoin = bf.wireframeLinejoin;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  return this;
};
MeshPhysicalMaterial.prototype = Object.create(MeshStandardMaterial.prototype);
MeshPhysicalMaterial.prototype.constructor = MeshPhysicalMaterial;
MeshPhysicalMaterial.prototype.isMeshPhysicalMaterial = true;
MeshPhysicalMaterial.prototype.copy = function (bf) {
  MeshStandardMaterial.prototype.copy.call(this, bf);
  this.defines = {
    PHYSICAL: ""
  };
  this.reflectivity = bf.reflectivity;
  this.clearCoat = bf.clearCoat;
  this.clearCoatRoughness = bf.clearCoatRoughness;
  return this;
};
MeshPhongMaterial.prototype = Object.create(Material.prototype);
MeshPhongMaterial.prototype.constructor = MeshPhongMaterial;
MeshPhongMaterial.prototype.isMeshPhongMaterial = true;
MeshPhongMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.specular.copy(bf.specular);
  this.shininess = bf.shininess;
  this.map = bf.map;
  this.lightMap = bf.lightMap;
  this.lightMapIntensity = bf.lightMapIntensity;
  this.aoMap = bf.aoMap;
  this.aoMapIntensity = bf.aoMapIntensity;
  this.emissive.copy(bf.emissive);
  this.emissiveMap = bf.emissiveMap;
  this.emissiveIntensity = bf.emissiveIntensity;
  this.bumpMap = bf.bumpMap;
  this.bumpScale = bf.bumpScale;
  this.normalMap = bf.normalMap;
  this.normalMapType = bf.normalMapType;
  this.normalScale.copy(bf.normalScale);
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  this.specularMap = bf.specularMap;
  this.alphaMap = bf.alphaMap;
  this.envMap = bf.envMap;
  this.combine = bf.combine;
  this.reflectivity = bf.reflectivity;
  this.refractionRatio = bf.refractionRatio;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.wireframeLinecap = bf.wireframeLinecap;
  this.wireframeLinejoin = bf.wireframeLinejoin;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  return this;
};
MeshToonMaterial.prototype = Object.create(MeshPhongMaterial.prototype);
MeshToonMaterial.prototype.constructor = MeshToonMaterial;
MeshToonMaterial.prototype.isMeshToonMaterial = true;
MeshToonMaterial.prototype.copy = function (bf) {
  MeshPhongMaterial.prototype.copy.call(this, bf);
  this.gradientMap = bf.gradientMap;
  return this;
};
MeshNormalMaterial.prototype = Object.create(Material.prototype);
MeshNormalMaterial.prototype.constructor = MeshNormalMaterial;
MeshNormalMaterial.prototype.isMeshNormalMaterial = true;
MeshNormalMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.bumpMap = bf.bumpMap;
  this.bumpScale = bf.bumpScale;
  this.normalMap = bf.normalMap;
  this.normalMapType = bf.normalMapType;
  this.normalScale.copy(bf.normalScale);
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  return this;
};
MeshLambertMaterial.prototype = Object.create(Material.prototype);
MeshLambertMaterial.prototype.constructor = MeshLambertMaterial;
MeshLambertMaterial.prototype.isMeshLambertMaterial = true;
MeshLambertMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.color.copy(bf.color);
  this.map = bf.map;
  this.lightMap = bf.lightMap;
  this.lightMapIntensity = bf.lightMapIntensity;
  this.aoMap = bf.aoMap;
  this.aoMapIntensity = bf.aoMapIntensity;
  this.emissive.copy(bf.emissive);
  this.emissiveMap = bf.emissiveMap;
  this.emissiveIntensity = bf.emissiveIntensity;
  this.specularMap = bf.specularMap;
  this.alphaMap = bf.alphaMap;
  this.envMap = bf.envMap;
  this.combine = bf.combine;
  this.reflectivity = bf.reflectivity;
  this.refractionRatio = bf.refractionRatio;
  this.wireframe = bf.wireframe;
  this.wireframeLinewidth = bf.wireframeLinewidth;
  this.wireframeLinecap = bf.wireframeLinecap;
  this.wireframeLinejoin = bf.wireframeLinejoin;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  return this;
};
MeshMatcapMaterial.prototype = Object.create(Material.prototype);
MeshMatcapMaterial.prototype.constructor = MeshMatcapMaterial;
MeshMatcapMaterial.prototype.isMeshMatcapMaterial = true;
MeshMatcapMaterial.prototype.copy = function (bf) {
  Material.prototype.copy.call(this, bf);
  this.defines = {
    MATCAP: ""
  };
  this.color.copy(bf.color);
  this.matcap = bf.matcap;
  this.map = bf.map;
  this.bumpMap = bf.bumpMap;
  this.bumpScale = bf.bumpScale;
  this.normalMap = bf.normalMap;
  this.normalMapType = bf.normalMapType;
  this.normalScale.copy(bf.normalScale);
  this.displacementMap = bf.displacementMap;
  this.displacementScale = bf.displacementScale;
  this.displacementBias = bf.displacementBias;
  this.alphaMap = bf.alphaMap;
  this.skinning = bf.skinning;
  this.morphTargets = bf.morphTargets;
  this.morphNormals = bf.morphNormals;
  return this;
};
LineDashedMaterial.prototype = Object.create(LineBasicMaterial.prototype);
LineDashedMaterial.prototype.constructor = LineDashedMaterial;
LineDashedMaterial.prototype.isLineDashedMaterial = true;
LineDashedMaterial.prototype.copy = function (bf) {
  LineBasicMaterial.prototype.copy.call(this, bf);
  this.scale = bf.scale;
  this.dashSize = bf.dashSize;
  this.gapSize = bf.gapSize;
  return this;
};
var axi = Object.freeze({
  ShadowMaterial: ShadowMaterial,
  SpriteMaterial: SpriteMaterial,
  RawShaderMaterial: RawShaderMaterial,
  ShaderMaterial: ShaderMaterial,
  PointsMaterial: PointsMaterial,
  MeshPhysicalMaterial: MeshPhysicalMaterial,
  MeshStandardMaterial: MeshStandardMaterial,
  MeshPhongMaterial: MeshPhongMaterial,
  MeshToonMaterial: MeshToonMaterial,
  MeshNormalMaterial: MeshNormalMaterial,
  MeshLambertMaterial: MeshLambertMaterial,
  MeshDepthMaterial: MeshDepthMaterial,
  MeshDistanceMaterial: MeshDistanceMaterial,
  MeshBasicMaterial: MeshBasicMaterial,
  MeshMatcapMaterial: MeshMatcapMaterial,
  LineDashedMaterial: LineDashedMaterial,
  LineBasicMaterial: LineBasicMaterial,
  Material: Material
});
export var AnimationUtils = {
  arraySlice: function (bf, bg, bh) {
    if (AnimationUtils.isTypedArray(bf)) {
      return new bf.constructor(bf.subarray(bg, bh !== undefined ? bh : bf.length));
    } else {
      return bf.slice(bg, bh);
    }
  },
  convertArray: function (bf, bg, bh) {
    if (!bf || !bh && bf.constructor === bg) {
      return bf;
    } else if (typeof bg.BYTES_PER_ELEMENT == "number") {
      return new bg(bf);
    } else {
      return Array.prototype.slice.call(bf);
    }
  },
  isTypedArray: function (bf) {
    return ArrayBuffer.isView(bf) && !(bf instanceof DataView);
  },
  getKeyframeOrder: function (bf) {
    for (var bg = bf.length, bh = new Array(bg), bi = 0; bi !== bg; ++bi) {
      bh[bi] = bi;
    }
    bh.sort(function (bg, bh) {
      return bf[bg] - bf[bh];
    });
    return bh;
  },
  sortedArray: function (bf, bg, bh) {
    for (var bi = bf.length, bF = new bf.constructor(bi), bG = 0, bH = 0; bH !== bi; ++bG) {
      for (var bI = bh[bG] * bg, bJ = 0; bJ !== bg; ++bJ) {
        bF[bH++] = bf[bI + bJ];
      }
    }
    return bF;
  },
  flattenJSON: function (bf, bg, bh, bi) {
    for (var bF = 1, bG = bf[0]; bG !== undefined && bG[bi] === undefined;) {
      bG = bf[bF++];
    }
    if (bG !== undefined) {
      var bH = bG[bi];
      if (bH !== undefined) {
        if (Array.isArray(bH)) {
          do {
            if ((bH = bG[bi]) !== undefined) {
              bg.push(bG.time);
              bh.push.apply(bh, bH);
            }
            bG = bf[bF++];
          } while (bG !== undefined);
        } else if (bH.toArray !== undefined) {
          do {
            if ((bH = bG[bi]) !== undefined) {
              bg.push(bG.time);
              bH.toArray(bh, bh.length);
            }
            bG = bf[bF++];
          } while (bG !== undefined);
        } else {
          do {
            if ((bH = bG[bi]) !== undefined) {
              bg.push(bG.time);
              bh.push(bH);
            }
            bG = bf[bF++];
          } while (bG !== undefined);
        }
      }
    }
  }
};
export function Interpolant(bf, bg, bh, bi) {
  this.parameterPositions = bf;
  this._cachedIndex = 0;
  this.resultBuffer = bi !== undefined ? bi : new bg.constructor(bh);
  this.sampleValues = bg;
  this.valueSize = bh;
}
export function CubicInterpolant(bf, bg, bh, bi) {
  Interpolant.call(this, bf, bg, bh, bi);
  this._weightPrev = -0;
  this._offsetPrev = -0;
  this._weightNext = -0;
  this._offsetNext = -0;
}
export function LinearInterpolant(bf, bg, bh, bi) {
  Interpolant.call(this, bf, bg, bh, bi);
}
export function DiscreteInterpolant(bf, bg, bh, bi) {
  Interpolant.call(this, bf, bg, bh, bi);
}
export function KeyframeTrack(bf, bg, bh, bi) {
  if (bf === undefined) {
    throw new Error("THREE.KeyframeTrack: track name is undefined");
  }
  if (bg === undefined || bg.length === 0) {
    throw new Error("THREE.KeyframeTrack: no keyframes in track named " + bf);
  }
  this.name = bf;
  this.times = AnimationUtils.convertArray(bg, this.TimeBufferType);
  this.values = AnimationUtils.convertArray(bh, this.ValueBufferType);
  this.setInterpolation(bi || this.DefaultInterpolation);
}
export function BooleanKeyframeTrack(bf, bg, bh) {
  KeyframeTrack.call(this, bf, bg, bh);
}
export function ColorKeyframeTrack(bf, bg, bh, bi) {
  KeyframeTrack.call(this, bf, bg, bh, bi);
}
export function NumberKeyframeTrack(bf, bg, bh, bi) {
  KeyframeTrack.call(this, bf, bg, bh, bi);
}
export function QuaternionLinearInterpolant(bf, bg, bh, bi) {
  Interpolant.call(this, bf, bg, bh, bi);
}
export function QuaternionKeyframeTrack(bf, bg, bh, bi) {
  KeyframeTrack.call(this, bf, bg, bh, bi);
}
export function StringKeyframeTrack(bf, bg, bh, bi) {
  KeyframeTrack.call(this, bf, bg, bh, bi);
}
export function VectorKeyframeTrack(bf, bg, bh, bi) {
  KeyframeTrack.call(this, bf, bg, bh, bi);
}
export function AnimationClip(bf, bg, bh) {
  this.name = bf;
  this.tracks = bh;
  this.duration = bg !== undefined ? bg : -1;
  this.uuid = Math.generateUUID();
  if (this.duration < 0) {
    this.resetDuration();
  }
}
function ayO(bf) {
  if (bf.type === undefined) {
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  }
  var bg = function (bf) {
    switch (bf.toLowerCase()) {
      case "scalar":
      case "double":
      case "float":
      case "number":
      case "integer":
        return NumberKeyframeTrack;
      case "vector":
      case "vector2":
      case "vector3":
      case "vector4":
        return VectorKeyframeTrack;
      case "color":
        return ColorKeyframeTrack;
      case "quaternion":
        return QuaternionKeyframeTrack;
      case "bool":
      case "boolean":
        return BooleanKeyframeTrack;
      case "string":
        return StringKeyframeTrack;
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + bf);
  }(bf.type);
  if (bf.times === undefined) {
    var bh = [];
    var bi = [];
    AnimationUtils.flattenJSON(bf.keys, bh, bi, "value");
    bf.times = bh;
    bf.values = bi;
  }
  if (bg.parse !== undefined) {
    return bg.parse(bf);
  } else {
    return new bg(bf.name, bf.times, bf.values, bf.interpolation);
  }
}
Object.assign(Interpolant.prototype, {
  evaluate: function (bf) {
    var bg = this.parameterPositions;
    var bh = this._cachedIndex;
    var bi = bg[bh];
    var bF = bg[bh - 1];
    ayZ: {
      az0: {
        var bG;
        az2: {
          az3: if (bf >= bi) {
            for (var bH = bh + 2;;) {
              if (bi === undefined) {
                if (bf < bF) {
                  break az3;
                }
                bh = bg.length;
                this._cachedIndex = bh;
                return this.afterEnd_(bh - 1, bf, bF);
              }
              if (bh === bH) {
                break;
              }
              bF = bi;
              if (bf < (bi = bg[++bh])) {
                break az0;
              }
            }
            bG = bg.length;
            break az2;
          }
          if (bf >= bF) {
            break ayZ;
          }
          var bI = bg[1];
          if (bf < bI) {
            bh = 2;
            bF = bI;
          }
          for (bH = bh - 2;;) {
            if (bF === undefined) {
              this._cachedIndex = 0;
              return this.beforeStart_(0, bf, bi);
            }
            if (bh === bH) {
              break;
            }
            bi = bF;
            if (bf >= (bF = bg[--bh - 1])) {
              break az0;
            }
          }
          bG = bh;
          bh = 0;
        }
        while (bh < bG) {
          var bJ = bh + bG >>> 1;
          if (bf < bg[bJ]) {
            bG = bJ;
          } else {
            bh = bJ + 1;
          }
        }
        bi = bg[bh];
        if ((bF = bg[bh - 1]) === undefined) {
          this._cachedIndex = 0;
          return this.beforeStart_(0, bf, bi);
        }
        if (bi === undefined) {
          bh = bg.length;
          this._cachedIndex = bh;
          return this.afterEnd_(bh - 1, bF, bf);
        }
      }
      this._cachedIndex = bh;
      this.intervalChanged_(bh, bF, bi);
    }
    return this.interpolate_(bh, bF, bf, bi);
  },
  settings: null,
  DefaultSettings_: {},
  getSettings_: function () {
    return this.settings || this.DefaultSettings_;
  },
  copySampleValue_: function (bf) {
    for (var bg = this.resultBuffer, bh = this.sampleValues, bi = this.valueSize, bF = bf * bi, bG = 0; bG !== bi; ++bG) {
      bg[bG] = bh[bF + bG];
    }
    return bg;
  },
  interpolate_: function () {
    throw new Error("call to abstract method");
  },
  intervalChanged_: function () {}
});
Object.assign(Interpolant.prototype, {
  beforeStart_: Interpolant.prototype.copySampleValue_,
  afterEnd_: Interpolant.prototype.copySampleValue_
});
CubicInterpolant.prototype = Object.assign(Object.create(Interpolant.prototype), {
  constructor: CubicInterpolant,
  DefaultSettings_: {
    endingStart: ZeroCurvatureEnding,
    endingEnd: ZeroCurvatureEnding
  },
  intervalChanged_: function (bf, bg, bh) {
    var bi = this.parameterPositions;
    var bF = bf - 2;
    var bG = bf + 1;
    var bH = bi[bF];
    var bI = bi[bG];
    if (bH === undefined) {
      switch (this.getSettings_().endingStart) {
        case ZeroSlopeEnding:
          bF = bf;
          bH = bg * 2 - bh;
          break;
        case WrapAroundEnding:
          bH = bg + bi[bF = bi.length - 2] - bi[bF + 1];
          break;
        default:
          bF = bf;
          bH = bh;
      }
    }
    if (bI === undefined) {
      switch (this.getSettings_().endingEnd) {
        case ZeroSlopeEnding:
          bG = bf;
          bI = bh * 2 - bg;
          break;
        case WrapAroundEnding:
          bG = 1;
          bI = bh + bi[1] - bi[0];
          break;
        default:
          bG = bf - 1;
          bI = bg;
      }
    }
    var bJ = (bh - bg) * 0.5;
    var bK = this.valueSize;
    this._weightPrev = bJ / (bg - bH);
    this._weightNext = bJ / (bI - bh);
    this._offsetPrev = bF * bK;
    this._offsetNext = bG * bK;
  },
  interpolate_: function (bf, bg, bh, bi) {
    for (var bF = this.resultBuffer, bG = this.sampleValues, bH = this.valueSize, bI = bf * bH, bJ = bI - bH, bK = this._offsetPrev, bL = this._offsetNext, bM = this._weightPrev, bN = this._weightNext, bO = (bh - bg) / (bi - bg), bP = bO * bO, bQ = bP * bO, bR = -bM * bQ + bM * 2 * bP - bM * bO, bS = (1 + bM) * bQ + (-1.5 - bM * 2) * bP + (-0.5 + bM) * bO + 1, bT = (-1 - bN) * bQ + (1.5 + bN) * bP + bO * 0.5, bU = bN * bQ - bN * bP, bV = 0; bV !== bH; ++bV) {
      bF[bV] = bR * bG[bK + bV] + bS * bG[bJ + bV] + bT * bG[bI + bV] + bU * bG[bL + bV];
    }
    return bF;
  }
});
LinearInterpolant.prototype = Object.assign(Object.create(Interpolant.prototype), {
  constructor: LinearInterpolant,
  interpolate_: function (bf, bg, bh, bi) {
    for (var bF = this.resultBuffer, bG = this.sampleValues, bH = this.valueSize, bI = bf * bH, bJ = bI - bH, bK = (bh - bg) / (bi - bg), bL = 1 - bK, bM = 0; bM !== bH; ++bM) {
      bF[bM] = bG[bJ + bM] * bL + bG[bI + bM] * bK;
    }
    return bF;
  }
});
DiscreteInterpolant.prototype = Object.assign(Object.create(Interpolant.prototype), {
  constructor: DiscreteInterpolant,
  interpolate_: function (bf) {
    return this.copySampleValue_(bf - 1);
  }
});
Object.assign(KeyframeTrack, {
  toJSON: function (bf) {
    var bg;
    var bh = bf.constructor;
    if (bh.toJSON !== undefined) {
      bg = bh.toJSON(bf);
    } else {
      bg = {
        name: bf.name,
        times: AnimationUtils.convertArray(bf.times, Array),
        values: AnimationUtils.convertArray(bf.values, Array)
      };
      var bi = bf.getInterpolation();
      if (bi !== bf.DefaultInterpolation) {
        bg.interpolation = bi;
      }
    }
    bg.type = bf.ValueTypeName;
    return bg;
  }
});
Object.assign(KeyframeTrack.prototype, {
  constructor: KeyframeTrack,
  TimeBufferType: Float32Array,
  ValueBufferType: Float32Array,
  DefaultInterpolation: InterpolateLinear,
  InterpolantFactoryMethodDiscrete: function (bf) {
    return new DiscreteInterpolant(this.times, this.values, this.getValueSize(), bf);
  },
  InterpolantFactoryMethodLinear: function (bf) {
    return new LinearInterpolant(this.times, this.values, this.getValueSize(), bf);
  },
  InterpolantFactoryMethodSmooth: function (bf) {
    return new CubicInterpolant(this.times, this.values, this.getValueSize(), bf);
  },
  setInterpolation: function (bf) {
    var bg;
    switch (bf) {
      case InterpolateDiscrete:
        bg = this.InterpolantFactoryMethodDiscrete;
        break;
      case InterpolateLinear:
        bg = this.InterpolantFactoryMethodLinear;
        break;
      case InterpolateSmooth:
        bg = this.InterpolantFactoryMethodSmooth;
    }
    if (bg === undefined) {
      var bh = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
      if (this.createInterpolant === undefined) {
        if (bf === this.DefaultInterpolation) {
          throw new Error(bh);
        }
        this.setInterpolation(this.DefaultInterpolation);
      }
      console.warn("THREE.KeyframeTrack:", bh);
      return this;
    }
    this.createInterpolant = bg;
    return this;
  },
  getInterpolation: function () {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return InterpolateDiscrete;
      case this.InterpolantFactoryMethodLinear:
        return InterpolateLinear;
      case this.InterpolantFactoryMethodSmooth:
        return InterpolateSmooth;
    }
  },
  getValueSize: function () {
    return this.values.length / this.times.length;
  },
  shift: function (bf) {
    if (bf !== 0) {
      for (var bg = this.times, bh = 0, bi = bg.length; bh !== bi; ++bh) {
        bg[bh] += bf;
      }
    }
    return this;
  },
  scale: function (bf) {
    if (bf !== 1) {
      for (var bg = this.times, bh = 0, bi = bg.length; bh !== bi; ++bh) {
        bg[bh] *= bf;
      }
    }
    return this;
  },
  trim: function (bf, bg) {
    for (var bh = this.times, bi = bh.length, bF = 0, bG = bi - 1; bF !== bi && bh[bF] < bf;) {
      ++bF;
    }
    while (bG !== -1 && bh[bG] > bg) {
      --bG;
    }
    ++bG;
    if (bF !== 0 || bG !== bi) {
      if (bF >= bG) {
        bF = (bG = Math.max(bG, 1)) - 1;
      }
      var bH = this.getValueSize();
      this.times = AnimationUtils.arraySlice(bh, bF, bG);
      this.values = AnimationUtils.arraySlice(this.values, bF * bH, bG * bH);
    }
    return this;
  },
  validate: function () {
    var bf = true;
    var bg = this.getValueSize();
    if (bg - Math.floor(bg) != 0) {
      console.error("THREE.KeyframeTrack: Invalid value size in track.", this);
      bf = false;
    }
    var bh = this.times;
    var bi = this.values;
    var bF = bh.length;
    if (bF === 0) {
      console.error("THREE.KeyframeTrack: Track is empty.", this);
      bf = false;
    }
    for (var bG = null, bH = 0; bH !== bF; bH++) {
      var bI = bh[bH];
      if (typeof bI == "number" && isNaN(bI)) {
        console.error("THREE.KeyframeTrack: Time is not a valid number.", this, bH, bI);
        bf = false;
        break;
      }
      if (bG !== null && bG > bI) {
        console.error("THREE.KeyframeTrack: Out of order keys.", this, bH, bI, bG);
        bf = false;
        break;
      }
      bG = bI;
    }
    if (bi !== undefined && AnimationUtils.isTypedArray(bi)) {
      bH = 0;
      for (var bJ = bi.length; bH !== bJ; ++bH) {
        var bK = bi[bH];
        if (isNaN(bK)) {
          console.error("THREE.KeyframeTrack: Value is not a valid number.", this, bH, bK);
          bf = false;
          break;
        }
      }
    }
    return bf;
  },
  optimize: function () {
    for (var bf = this.times, bg = this.values, bh = this.getValueSize(), bi = this.getInterpolation() === InterpolateSmooth, bF = 1, bG = bf.length - 1, bH = 1; bH < bG; ++bH) {
      var bI = false;
      var bJ = bf[bH];
      if (bJ !== bf[bH + 1] && (bH !== 1 || bJ !== bJ[0])) {
        if (bi) {
          bI = true;
        } else {
          for (var bK = bH * bh, bL = bK - bh, bM = bK + bh, bN = 0; bN !== bh; ++bN) {
            var bO = bg[bK + bN];
            if (bO !== bg[bL + bN] || bO !== bg[bM + bN]) {
              bI = true;
              break;
            }
          }
        }
      }
      if (bI) {
        if (bH !== bF) {
          bf[bF] = bf[bH];
          var bP = bH * bh;
          var bQ = bF * bh;
          for (bN = 0; bN !== bh; ++bN) {
            bg[bQ + bN] = bg[bP + bN];
          }
        }
        ++bF;
      }
    }
    if (bG > 0) {
      bf[bF] = bf[bG];
      bP = bG * bh;
      bQ = bF * bh;
      bN = 0;
      for (; bN !== bh; ++bN) {
        bg[bQ + bN] = bg[bP + bN];
      }
      ++bF;
    }
    if (bF !== bf.length) {
      this.times = AnimationUtils.arraySlice(bf, 0, bF);
      this.values = AnimationUtils.arraySlice(bg, 0, bF * bh);
    }
    return this;
  },
  clone: function () {
    var bf = AnimationUtils.arraySlice(this.times, 0);
    var bg = AnimationUtils.arraySlice(this.values, 0);
    var bh = new (0, this.constructor)(this.name, bf, bg);
    bh.createInterpolant = this.createInterpolant;
    return bh;
  }
});
BooleanKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: BooleanKeyframeTrack,
  ValueTypeName: "bool",
  ValueBufferType: Array,
  DefaultInterpolation: InterpolateDiscrete,
  InterpolantFactoryMethodLinear: undefined,
  InterpolantFactoryMethodSmooth: undefined
});
ColorKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: ColorKeyframeTrack,
  ValueTypeName: "color"
});
NumberKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: NumberKeyframeTrack,
  ValueTypeName: "number"
});
QuaternionLinearInterpolant.prototype = Object.assign(Object.create(Interpolant.prototype), {
  constructor: QuaternionLinearInterpolant,
  interpolate_: function (bf, bg, bh, bi) {
    for (var bF = this.resultBuffer, bG = this.sampleValues, bH = this.valueSize, bI = bf * bH, bJ = (bh - bg) / (bi - bg), bK = bI + bH; bI !== bK; bI += 4) {
      Quaternion.slerpFlat(bF, 0, bG, bI - bH, bG, bI, bJ);
    }
    return bF;
  }
});
QuaternionKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: QuaternionKeyframeTrack,
  ValueTypeName: "quaternion",
  DefaultInterpolation: InterpolateLinear,
  InterpolantFactoryMethodLinear: function (bf) {
    return new QuaternionLinearInterpolant(this.times, this.values, this.getValueSize(), bf);
  },
  InterpolantFactoryMethodSmooth: undefined
});
StringKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: StringKeyframeTrack,
  ValueTypeName: "string",
  ValueBufferType: Array,
  DefaultInterpolation: InterpolateDiscrete,
  InterpolantFactoryMethodLinear: undefined,
  InterpolantFactoryMethodSmooth: undefined
});
VectorKeyframeTrack.prototype = Object.assign(Object.create(KeyframeTrack.prototype), {
  constructor: VectorKeyframeTrack,
  ValueTypeName: "vector"
});
Object.assign(AnimationClip, {
  parse: function (bf) {
    for (var bg = [], bh = bf.tracks, bi = 1 / (bf.fps || 1), bF = 0, bG = bh.length; bF !== bG; ++bF) {
      bg.push(ayO(bh[bF]).scale(bi));
    }
    return new AnimationClip(bf.name, bf.duration, bg);
  },
  toJSON: function (bf) {
    for (var bg = [], bh = bf.tracks, bi = {
        name: bf.name,
        duration: bf.duration,
        tracks: bg,
        uuid: bf.uuid
      }, bF = 0, bG = bh.length; bF !== bG; ++bF) {
      bg.push(KeyframeTrack.toJSON(bh[bF]));
    }
    return bi;
  },
  CreateFromMorphTargetSequence: function (bf, bg, bh, bi) {
    for (var bF = bg.length, bG = [], bH = 0; bH < bF; bH++) {
      var bI = [];
      var bJ = [];
      bI.push((bH + bF - 1) % bF, bH, (bH + 1) % bF);
      bJ.push(0, 1, 0);
      var bK = AnimationUtils.getKeyframeOrder(bI);
      bI = AnimationUtils.sortedArray(bI, 1, bK);
      bJ = AnimationUtils.sortedArray(bJ, 1, bK);
      if (!bi && bI[0] === 0) {
        bI.push(bF);
        bJ.push(bJ[0]);
      }
      bG.push(new NumberKeyframeTrack(".morphTargetInfluences[" + bg[bH].name + "]", bI, bJ).scale(1 / bh));
    }
    return new AnimationClip(bf, -1, bG);
  },
  findByName: function (bf, bg) {
    var bh = bf;
    if (!Array.isArray(bf)) {
      var bi = bf;
      bh = bi.geometry && bi.geometry.animations || bi.animations;
    }
    for (var bF = 0; bF < bh.length; bF++) {
      if (bh[bF].name === bg) {
        return bh[bF];
      }
    }
    return null;
  },
  CreateClipsFromMorphTargetSequences: function (bf, bg, bh) {
    for (var bi = {}, bF = /^([\w-]*?)([\d]+)$/, bG = 0, bH = bf.length; bG < bH; bG++) {
      var bI = bf[bG];
      var bJ = bI.name.match(bF);
      if (bJ && bJ.length > 1) {
        var bK = bi[bM = bJ[1]];
        if (!bK) {
          bi[bM] = bK = [];
        }
        bK.push(bI);
      }
    }
    var bL = [];
    for (var bM in bi) {
      bL.push(AnimationClip.CreateFromMorphTargetSequence(bM, bi[bM], bg, bh));
    }
    return bL;
  },
  parseAnimation: function (bf, bg) {
    if (!bf) {
      console.error("THREE.AnimationClip: No animation in JSONLoader data.");
      return null;
    }
    for (var bh = function (bf, bg, bh, bi, bF) {
        if (bh.length !== 0) {
          var bG = [];
          var bH = [];
          AnimationUtils.flattenJSON(bh, bG, bH, bi);
          if (bG.length !== 0) {
            bF.push(new bf(bg, bG, bH));
          }
        }
      }, bi = [], bF = bf.name || "default", bG = bf.length || -1, bH = bf.fps || 30, bI = bf.hierarchy || [], bJ = 0; bJ < bI.length; bJ++) {
      var bK = bI[bJ].keys;
      if (bK && bK.length !== 0) {
        if (bK[0].morphTargets) {
          for (var bL = {}, bM = 0; bM < bK.length; bM++) {
            if (bK[bM].morphTargets) {
              for (var bN = 0; bN < bK[bM].morphTargets.length; bN++) {
                bL[bK[bM].morphTargets[bN]] = -1;
              }
            }
          }
          for (var bO in bL) {
            var bP = [];
            var bQ = [];
            for (bN = 0; bN !== bK[bM].morphTargets.length; ++bN) {
              var bR = bK[bM];
              bP.push(bR.time);
              bQ.push(bR.morphTarget === bO ? 1 : 0);
            }
            bi.push(new NumberKeyframeTrack(".morphTargetInfluence[" + bO + "]", bP, bQ));
          }
          bG = bL.length * (bH || 1);
        } else {
          var bS = ".bones[" + bg[bJ].name + "]";
          bh(VectorKeyframeTrack, bS + ".position", bK, "pos", bi);
          bh(QuaternionKeyframeTrack, bS + ".quaternion", bK, "rot", bi);
          bh(VectorKeyframeTrack, bS + ".scale", bK, "scl", bi);
        }
      }
    }
    if (bi.length === 0) {
      return null;
    } else {
      return new AnimationClip(bF, bG, bi);
    }
  }
});
Object.assign(AnimationClip.prototype, {
  resetDuration: function () {
    for (var bf = 0, bg = 0, bh = this.tracks.length; bg !== bh; ++bg) {
      var bi = this.tracks[bg];
      bf = Math.max(bf, bi.times[bi.times.length - 1]);
    }
    this.duration = bf;
    return this;
  },
  trim: function () {
    for (var bf = 0; bf < this.tracks.length; bf++) {
      this.tracks[bf].trim(0, this.duration);
    }
    return this;
  },
  validate: function () {
    for (var bf = true, bg = 0; bg < this.tracks.length; bg++) {
      bf = bf && this.tracks[bg].validate();
    }
    return bf;
  },
  optimize: function () {
    for (var bf = 0; bf < this.tracks.length; bf++) {
      this.tracks[bf].optimize();
    }
    return this;
  },
  clone: function () {
    for (var bf = [], bg = 0; bg < this.tracks.length; bg++) {
      bf.push(this.tracks[bg].clone());
    }
    return new AnimationClip(this.name, this.duration, bf);
  }
});
export var Cache = {
  enabled: false,
  files: {},
  add: function (bf, bg) {
    if (this.enabled !== false) {
      this.files[bf] = bg;
    }
  },
  get: function (bf) {
    if (this.enabled !== false) {
      return this.files[bf];
    }
  },
  remove: function (bf) {
    delete this.files[bf];
  },
  clear: function () {
    this.files = {};
  }
};
export function LoadingManager(bf, bg, bh) {
  var bi = this;
  var bF = false;
  var bG = 0;
  var bH = 0;
  var bI = undefined;
  this.onStart = undefined;
  this.onLoad = bf;
  this.onProgress = bg;
  this.onError = bh;
  this.itemStart = function (bf) {
    bH++;
    if (bF === false && bi.onStart !== undefined) {
      bi.onStart(bf, bG, bH);
    }
    bF = true;
  };
  this.itemEnd = function (bf) {
    bG++;
    if (bi.onProgress !== undefined) {
      bi.onProgress(bf, bG, bH);
    }
    if (bG === bH) {
      bF = false;
      if (bi.onLoad !== undefined) {
        bi.onLoad();
      }
    }
  };
  this.itemError = function (bf) {
    if (bi.onError !== undefined) {
      bi.onError(bf);
    }
  };
  this.resolveURL = function (bf) {
    if (bI) {
      return bI(bf);
    } else {
      return bf;
    }
  };
  this.setURLModifier = function (bf) {
    bI = bf;
    return this;
  };
}
export var DefaultLoadingManager = new LoadingManager();
var aCu = {};
export function FileLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function AnimationLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function CompressedTextureLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
  this._parser = null;
}
export function DataTextureLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
  this._parser = null;
}
export function ImageLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function CubeTextureLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function TextureLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function Curve() {
  this.type = "Curve";
  this.arcLengthDivisions = 200;
}
export function EllipseCurve(bf, bg, bh, bi, bF, bG, bH, bI) {
  Curve.call(this);
  this.type = "EllipseCurve";
  this.aX = bf || 0;
  this.aY = bg || 0;
  this.xRadius = bh || 1;
  this.yRadius = bi || 1;
  this.aStartAngle = bF || 0;
  this.aEndAngle = bG || Math.PI * 2;
  this.aClockwise = bH || false;
  this.aRotation = bI || 0;
}
export function ArcCurve(bf, bg, bh, bi, bF, bG) {
  EllipseCurve.call(this, bf, bg, bh, bh, bi, bF, bG);
  this.type = "ArcCurve";
}
function aD0() {
  var bf = 0;
  var bg = 0;
  var bh = 0;
  var bi = 0;
  function bF(bF, bG, bH, bI) {
    bf = bF;
    bg = bH;
    bh = bF * -3 + bG * 3 - bH * 2 - bI;
    bi = bF * 2 - bG * 2 + bH + bI;
  }
  return {
    initCatmullRom: function (bf, bg, bh, bi, bG) {
      bF(bg, bh, bG * (bh - bf), bG * (bi - bg));
    },
    initNonuniformCatmullRom: function (bf, bg, bh, bi, bG, bH, bI) {
      var bJ = (bg - bf) / bG - (bh - bf) / (bG + bH) + (bh - bg) / bH;
      var bK = (bh - bg) / bH - (bi - bg) / (bH + bI) + (bi - bh) / bI;
      bF(bg, bh, bJ *= bH, bK *= bH);
    },
    calc: function (bF) {
      var bG = bF * bF;
      return bf + bg * bF + bh * bG + bi * (bG * bF);
    }
  };
}
Object.assign(FileLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    if (bf === undefined) {
      bf = "";
    }
    if (this.path !== undefined) {
      bf = this.path + bf;
    }
    bf = this.manager.resolveURL(bf);
    var bF = this;
    var bG = Cache.get(bf);
    if (bG !== undefined) {
      bF.manager.itemStart(bf);
      setTimeout(function () {
        if (bg) {
          bg(bG);
        }
        bF.manager.itemEnd(bf);
      }, 0);
      return bG;
    }
    if (aCu[bf] === undefined) {
      var bH = bf.match(/^data:(.*?)(;base64)?,(.*)$/);
      if (bH) {
        var bI = bH[1];
        var bJ = !!bH[2];
        var bK = bH[3];
        bK = decodeURIComponent(bK);
        if (bJ) {
          bK = atob(bK);
        }
        try {
          var bL;
          var bM = (this.responseType || "").toLowerCase();
          switch (bM) {
            case "arraybuffer":
            case "blob":
              for (var bN = new Uint8Array(bK.length), bO = 0; bO < bK.length; bO++) {
                bN[bO] = bK.charCodeAt(bO);
              }
              bL = bM === "blob" ? new Blob([bN.buffer], {
                type: bI
              }) : bN.buffer;
              break;
            case "document":
              var bP = new DOMParser();
              bL = bP.parseFromString(bK, bI);
              break;
            case "json":
              bL = JSON.parse(bK);
              break;
            default:
              bL = bK;
          }
          setTimeout(function () {
            if (bg) {
              bg(bL);
            }
            bF.manager.itemEnd(bf);
          }, 0);
        } catch (aDF) {
          setTimeout(function () {
            if (bi) {
              bi(aDF);
            }
            bF.manager.itemError(bf);
            bF.manager.itemEnd(bf);
          }, 0);
        }
      } else {
        aCu[bf] = [];
        aCu[bf].push({
          onLoad: bg,
          onProgress: bh,
          onError: bi
        });
        var bQ = new XMLHttpRequest();
        bQ.open("GET", bf, true);
        bQ.addEventListener("load", function (bg) {
          var bh = this.response;
          Cache.add(bf, bh);
          var bi = aCu[bf];
          delete aCu[bf];
          if (this.status === 200 || this.status === 0) {
            if (this.status === 0) {
              console.warn("THREE.FileLoader: HTTP Status 0 received.");
            }
            for (var bG = 0, bH = bi.length; bG < bH; bG++) {
              if ((bI = bi[bG]).onLoad) {
                bI.onLoad(bh);
              }
            }
            bF.manager.itemEnd(bf);
          } else {
            bG = 0;
            bH = bi.length;
            for (; bG < bH; bG++) {
              var bI;
              if ((bI = bi[bG]).onError) {
                bI.onError(bg);
              }
            }
            bF.manager.itemError(bf);
            bF.manager.itemEnd(bf);
          }
        }, false);
        bQ.addEventListener("progress", function (bg) {
          for (var bh = aCu[bf], bi = 0, bF = bh.length; bi < bF; bi++) {
            var bG = bh[bi];
            if (bG.onProgress) {
              bG.onProgress(bg);
            }
          }
        }, false);
        bQ.addEventListener("error", function (bg) {
          var bh = aCu[bf];
          delete aCu[bf];
          for (var bi = 0, bG = bh.length; bi < bG; bi++) {
            var bH = bh[bi];
            if (bH.onError) {
              bH.onError(bg);
            }
          }
          bF.manager.itemError(bf);
          bF.manager.itemEnd(bf);
        }, false);
        bQ.addEventListener("abort", function (bg) {
          var bh = aCu[bf];
          delete aCu[bf];
          for (var bi = 0, bG = bh.length; bi < bG; bi++) {
            var bH = bh[bi];
            if (bH.onError) {
              bH.onError(bg);
            }
          }
          bF.manager.itemError(bf);
          bF.manager.itemEnd(bf);
        }, false);
        if (this.responseType !== undefined) {
          bQ.responseType = this.responseType;
        }
        if (this.withCredentials !== undefined) {
          bQ.withCredentials = this.withCredentials;
        }
        if (bQ.overrideMimeType) {
          bQ.overrideMimeType(this.mimeType !== undefined ? this.mimeType : "text/plain");
        }
        for (var bR in this.requestHeader) {
          bQ.setRequestHeader(bR, this.requestHeader[bR]);
        }
        bQ.send(null);
      }
      bF.manager.itemStart(bf);
      return bQ;
    }
    aCu[bf].push({
      onLoad: bg,
      onProgress: bh,
      onError: bi
    });
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  },
  setResponseType: function (bf) {
    this.responseType = bf;
    return this;
  },
  setWithCredentials: function (bf) {
    this.withCredentials = bf;
    return this;
  },
  setMimeType: function (bf) {
    this.mimeType = bf;
    return this;
  },
  setRequestHeader: function (bf) {
    this.requestHeader = bf;
    return this;
  }
});
Object.assign(AnimationLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = new FileLoader(bF.manager);
    bG.setPath(bF.path);
    bG.load(bf, function (bf) {
      bg(bF.parse(JSON.parse(bf)));
    }, bh, bi);
  },
  parse: function (bf) {
    for (var bg = [], bh = 0; bh < bf.length; bh++) {
      var bi = AnimationClip.parse(bf[bh]);
      bg.push(bi);
    }
    return bg;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(CompressedTextureLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = [];
    var bH = new CompressedTexture();
    bH.image = bG;
    var bI = new FileLoader(this.manager);
    function bJ(bJ) {
      bI.load(bf[bJ], function (bf) {
        var bh = bF._parser(bf, true);
        bG[bJ] = {
          width: bh.width,
          height: bh.height,
          format: bh.format,
          mipmaps: bh.mipmaps
        };
        if ((bK += 1) === 6) {
          if (bh.mipmapCount === 1) {
            bH.minFilter = LinearFilter;
          }
          bH.format = bh.format;
          bH.needsUpdate = true;
          if (bg) {
            bg(bH);
          }
        }
      }, bh, bi);
    }
    bI.setPath(this.path);
    bI.setResponseType("arraybuffer");
    if (Array.isArray(bf)) {
      for (var bK = 0, bL = 0, bM = bf.length; bL < bM; ++bL) {
        bJ(bL);
      }
    } else {
      bI.load(bf, function (bf) {
        var bh = bF._parser(bf, true);
        if (bh.isCubemap) {
          for (var bi = bh.mipmaps.length / bh.mipmapCount, bI = 0; bI < bi; bI++) {
            bG[bI] = {
              mipmaps: []
            };
            for (var bJ = 0; bJ < bh.mipmapCount; bJ++) {
              bG[bI].mipmaps.push(bh.mipmaps[bI * bh.mipmapCount + bJ]);
              bG[bI].format = bh.format;
              bG[bI].width = bh.width;
              bG[bI].height = bh.height;
            }
          }
        } else {
          bH.image.width = bh.width;
          bH.image.height = bh.height;
          bH.mipmaps = bh.mipmaps;
        }
        if (bh.mipmapCount === 1) {
          bH.minFilter = LinearFilter;
        }
        bH.format = bh.format;
        bH.needsUpdate = true;
        if (bg) {
          bg(bH);
        }
      }, bh, bi);
    }
    return bH;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(DataTextureLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = new DataTexture();
    var bH = new FileLoader(this.manager);
    bH.setResponseType("arraybuffer");
    bH.setPath(this.path);
    bH.load(bf, function (bf) {
      var bh = bF._parser(bf);
      if (bh) {
        if (bh.image !== undefined) {
          bG.image = bh.image;
        } else if (bh.data !== undefined) {
          bG.image.width = bh.width;
          bG.image.height = bh.height;
          bG.image.data = bh.data;
        }
        bG.wrapS = bh.wrapS !== undefined ? bh.wrapS : ClampToEdgeWrapping;
        bG.wrapT = bh.wrapT !== undefined ? bh.wrapT : ClampToEdgeWrapping;
        bG.magFilter = bh.magFilter !== undefined ? bh.magFilter : LinearFilter;
        bG.minFilter = bh.minFilter !== undefined ? bh.minFilter : LinearMipMapLinearFilter;
        bG.anisotropy = bh.anisotropy !== undefined ? bh.anisotropy : 1;
        if (bh.format !== undefined) {
          bG.format = bh.format;
        }
        if (bh.type !== undefined) {
          bG.type = bh.type;
        }
        if (bh.mipmaps !== undefined) {
          bG.mipmaps = bh.mipmaps;
        }
        if (bh.mipmapCount === 1) {
          bG.minFilter = LinearFilter;
        }
        bG.needsUpdate = true;
        if (bg) {
          bg(bG, bh);
        }
      }
    }, bh, bi);
    return bG;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(ImageLoader.prototype, {
  crossOrigin: "anonymous",
  load: function (bf, bg, bh, bi) {
    if (bf === undefined) {
      bf = "";
    }
    if (this.path !== undefined) {
      bf = this.path + bf;
    }
    bf = this.manager.resolveURL(bf);
    var bF = this;
    var bG = Cache.get(bf);
    if (bG !== undefined) {
      bF.manager.itemStart(bf);
      setTimeout(function () {
        if (bg) {
          bg(bG);
        }
        bF.manager.itemEnd(bf);
      }, 0);
      return bG;
    }
    var bH = document.createElementNS("http://www.w3.org/1999/xhtml", "img");
    function bI() {
      bH.removeEventListener("load", bI, false);
      bH.removeEventListener("error", bJ, false);
      Cache.add(bf, this);
      if (bg) {
        bg(this);
      }
      bF.manager.itemEnd(bf);
    }
    function bJ(bg) {
      bH.removeEventListener("load", bI, false);
      bH.removeEventListener("error", bJ, false);
      if (bi) {
        bi(bg);
      }
      bF.manager.itemError(bf);
      bF.manager.itemEnd(bf);
    }
    bH.addEventListener("load", bI, false);
    bH.addEventListener("error", bJ, false);
    if (bf.substr(0, 5) !== "data:" && this.crossOrigin !== undefined) {
      bH.crossOrigin = this.crossOrigin;
    }
    bF.manager.itemStart(bf);
    bH.src = bf;
    return bH;
  },
  setCrossOrigin: function (bf) {
    this.crossOrigin = bf;
    return this;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(CubeTextureLoader.prototype, {
  crossOrigin: "anonymous",
  load: function (bf, bg, bh, bi) {
    var bF = new CubeTexture();
    var bG = new ImageLoader(this.manager);
    bG.setCrossOrigin(this.crossOrigin);
    bG.setPath(this.path);
    var bH = 0;
    function bI(bh) {
      bG.load(bf[bh], function (bf) {
        bF.images[bh] = bf;
        if (++bH === 6) {
          bF.needsUpdate = true;
          if (bg) {
            bg(bF);
          }
        }
      }, undefined, bi);
    }
    for (var bJ = 0; bJ < bf.length; ++bJ) {
      bI(bJ);
    }
    return bF;
  },
  setCrossOrigin: function (bf) {
    this.crossOrigin = bf;
    return this;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(TextureLoader.prototype, {
  crossOrigin: "anonymous",
  load: function (bf, bg, bh, bi) {
    var bF = new Texture();
    var bG = new ImageLoader(this.manager);
    bG.setCrossOrigin(this.crossOrigin);
    bG.setPath(this.path);
    bG.load(bf, function (bh) {
      bF.image = bh;
      var bi = bf.search(/\.jpe?g($|\?)/i) > 0 || bf.search(/^data\:image\/jpeg/) === 0;
      bF.format = bi ? RGBFormat : RGBAFormat;
      bF.needsUpdate = true;
      if (bg !== undefined) {
        bg(bF);
      }
    }, bh, bi);
    return bF;
  },
  setCrossOrigin: function (bf) {
    this.crossOrigin = bf;
    return this;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(Curve.prototype, {
  getPoint: function () {
    console.warn("THREE.Curve: .getPoint() not implemented.");
    return null;
  },
  getPointAt: function (bf, bg) {
    var bh = this.getUtoTmapping(bf);
    return this.getPoint(bh, bg);
  },
  getPoints: function (bf) {
    if (bf === undefined) {
      bf = 5;
    }
    for (var bg = [], bh = 0; bh <= bf; bh++) {
      bg.push(this.getPoint(bh / bf));
    }
    return bg;
  },
  getSpacedPoints: function (bf) {
    if (bf === undefined) {
      bf = 5;
    }
    for (var bg = [], bh = 0; bh <= bf; bh++) {
      bg.push(this.getPointAt(bh / bf));
    }
    return bg;
  },
  getLength: function () {
    var bf = this.getLengths();
    return bf[bf.length - 1];
  },
  getLengths: function (bf) {
    if (bf === undefined) {
      bf = this.arcLengthDivisions;
    }
    if (this.cacheArcLengths && this.cacheArcLengths.length === bf + 1 && !this.needsUpdate) {
      return this.cacheArcLengths;
    }
    this.needsUpdate = false;
    var bg;
    var bh;
    var bi = [];
    var bF = this.getPoint(0);
    var bG = 0;
    bi.push(0);
    bh = 1;
    for (; bh <= bf; bh++) {
      bG += (bg = this.getPoint(bh / bf)).distanceTo(bF);
      bi.push(bG);
      bF = bg;
    }
    this.cacheArcLengths = bi;
    return bi;
  },
  updateArcLengths: function () {
    this.needsUpdate = true;
    this.getLengths();
  },
  getUtoTmapping: function (bf, bg) {
    var bh;
    var bi = this.getLengths();
    var bF = 0;
    var bG = bi.length;
    bh = bg || bf * bi[bG - 1];
    for (var bH, bI = 0, bJ = bG - 1; bI <= bJ;) {
      if ((bH = bi[bF = Math.floor(bI + (bJ - bI) / 2)] - bh) < 0) {
        bI = bF + 1;
      } else {
        if (bH <= 0) {
          bJ = bF;
          break;
        }
        bJ = bF - 1;
      }
    }
    if (bi[bF = bJ] === bh) {
      return bF / (bG - 1);
    }
    var bK = bi[bF];
    return (bF + (bh - bK) / (bi[bF + 1] - bK)) / (bG - 1);
  },
  getTangent: function (bf) {
    var bg = bf - 0.0001;
    var bh = bf + 0.0001;
    if (bg < 0) {
      bg = 0;
    }
    if (bh > 1) {
      bh = 1;
    }
    var bi = this.getPoint(bg);
    return this.getPoint(bh).clone().sub(bi).normalize();
  },
  getTangentAt: function (bf) {
    var bg = this.getUtoTmapping(bf);
    return this.getTangent(bg);
  },
  computeFrenetFrames: function (bf, bg) {
    var bh;
    var bi;
    var bF;
    var bG = new Vector3();
    var bH = [];
    var bI = [];
    var bJ = [];
    var bK = new Vector3();
    var bL = new Matrix4();
    for (bh = 0; bh <= bf; bh++) {
      bi = bh / bf;
      bH[bh] = this.getTangentAt(bi);
      bH[bh].normalize();
    }
    bI[0] = new Vector3();
    bJ[0] = new Vector3();
    var bM = Number.MAX_VALUE;
    var bN = Math.abs(bH[0].x);
    var bO = Math.abs(bH[0].y);
    var bP = Math.abs(bH[0].z);
    if (bN <= bM) {
      bM = bN;
      bG.set(1, 0, 0);
    }
    if (bO <= bM) {
      bM = bO;
      bG.set(0, 1, 0);
    }
    if (bP <= bM) {
      bG.set(0, 0, 1);
    }
    bK.crossVectors(bH[0], bG).normalize();
    bI[0].crossVectors(bH[0], bK);
    bJ[0].crossVectors(bH[0], bI[0]);
    bh = 1;
    for (; bh <= bf; bh++) {
      bI[bh] = bI[bh - 1].clone();
      bJ[bh] = bJ[bh - 1].clone();
      bK.crossVectors(bH[bh - 1], bH[bh]);
      if (bK.length() > Number.EPSILON) {
        bK.normalize();
        bF = Math.acos(Math.clamp(bH[bh - 1].dot(bH[bh]), -1, 1));
        bI[bh].applyMatrix4(bL.makeRotationAxis(bK, bF));
      }
      bJ[bh].crossVectors(bH[bh], bI[bh]);
    }
    if (bg === true) {
      bF = Math.acos(Math.clamp(bI[0].dot(bI[bf]), -1, 1));
      bF /= bf;
      if (bH[0].dot(bK.crossVectors(bI[0], bI[bf])) > 0) {
        bF = -bF;
      }
      bh = 1;
      bF = Math.acos(Math.clamp(bI[0].dot(bI[bf]), -1, 1));
      bF /= bf;
      if (bH[0].dot(bK.crossVectors(bI[0], bI[bf])) > 0) {
        bF = -bF;
      }
      bh = 1;
      for (; bh <= bf; bh++) {
        bI[bh].applyMatrix4(bL.makeRotationAxis(bH[bh], bF * bh));
        bJ[bh].crossVectors(bH[bh], bI[bh]);
      }
    }
    return {
      tangents: bH,
      normals: bI,
      binormals: bJ
    };
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.arcLengthDivisions = bf.arcLengthDivisions;
    return this;
  },
  toJSON: function () {
    var bf = {
      metadata: {
        version: 4.5,
        type: "Curve",
        generator: "Curve.toJSON"
      }
    };
    bf.arcLengthDivisions = this.arcLengthDivisions;
    bf.type = this.type;
    return bf;
  },
  fromJSON: function (bf) {
    this.arcLengthDivisions = bf.arcLengthDivisions;
    return this;
  }
});
EllipseCurve.prototype = Object.create(Curve.prototype);
EllipseCurve.prototype.constructor = EllipseCurve;
EllipseCurve.prototype.isEllipseCurve = true;
EllipseCurve.prototype.getPoint = function (bf, bg) {
  for (var bh = bg || new Vector2(), bi = Math.PI * 2, bF = this.aEndAngle - this.aStartAngle, bG = Math.abs(bF) < Number.EPSILON; bF < 0;) {
    bF += bi;
  }
  while (bF > bi) {
    bF -= bi;
  }
  if (bF < Number.EPSILON) {
    bF = bG ? 0 : bi;
  }
  if (this.aClockwise === true && !bG) {
    if (bF === bi) {
      bF = -bi;
    } else {
      bF -= bi;
    }
  }
  var bH = this.aStartAngle + bf * bF;
  var bI = this.aX + this.xRadius * Math.cos(bH);
  var bJ = this.aY + this.yRadius * Math.sin(bH);
  if (this.aRotation !== 0) {
    var bK = Math.cos(this.aRotation);
    var bL = Math.sin(this.aRotation);
    var bM = bI - this.aX;
    var bN = bJ - this.aY;
    bI = bM * bK - bN * bL + this.aX;
    bJ = bM * bL + bN * bK + this.aY;
  }
  return bh.set(bI, bJ);
};
EllipseCurve.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.aX = bf.aX;
  this.aY = bf.aY;
  this.xRadius = bf.xRadius;
  this.yRadius = bf.yRadius;
  this.aStartAngle = bf.aStartAngle;
  this.aEndAngle = bf.aEndAngle;
  this.aClockwise = bf.aClockwise;
  this.aRotation = bf.aRotation;
  return this;
};
EllipseCurve.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.aX = this.aX;
  bf.aY = this.aY;
  bf.xRadius = this.xRadius;
  bf.yRadius = this.yRadius;
  bf.aStartAngle = this.aStartAngle;
  bf.aEndAngle = this.aEndAngle;
  bf.aClockwise = this.aClockwise;
  bf.aRotation = this.aRotation;
  return bf;
};
EllipseCurve.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.aX = bf.aX;
  this.aY = bf.aY;
  this.xRadius = bf.xRadius;
  this.yRadius = bf.yRadius;
  this.aStartAngle = bf.aStartAngle;
  this.aEndAngle = bf.aEndAngle;
  this.aClockwise = bf.aClockwise;
  this.aRotation = bf.aRotation;
  return this;
};
ArcCurve.prototype = Object.create(EllipseCurve.prototype);
ArcCurve.prototype.constructor = ArcCurve;
ArcCurve.prototype.isArcCurve = true;
var aGs = new Vector3();
var aGt = new aD0();
var aGu = new aD0();
var aGv = new aD0();
export function CatmullRomCurve3(bf, bg, bh, bi) {
  Curve.call(this);
  this.type = "CatmullRomCurve3";
  this.points = bf || [];
  this.closed = bg || false;
  this.curveType = bh || "centripetal";
  this.tension = bi || 0.5;
}
function aGB(bf, bg, bh, bi, bF) {
  var bG = (bi - bg) * 0.5;
  var bH = (bF - bh) * 0.5;
  var bI = bf * bf;
  return (bh * 2 - bi * 2 + bG + bH) * (bf * bI) + (bh * -3 + bi * 3 - bG * 2 - bH) * bI + bG * bf + bh;
}
function aGK(bf, bg, bh, bi) {
  return function (bf, bg) {
    var bh = 1 - bf;
    return bh * bh * bg;
  }(bf, bg) + function (bf, bg) {
    return (1 - bf) * 2 * bf * bg;
  }(bf, bh) + function (bf, bg) {
    return bf * bf * bg;
  }(bf, bi);
}
function aGW(bf, bg, bh, bi, bF) {
  return function (bf, bg) {
    var bh = 1 - bf;
    return bh * bh * bh * bg;
  }(bf, bg) + function (bf, bg) {
    var bh = 1 - bf;
    return bh * 3 * bh * bf * bg;
  }(bf, bh) + function (bf, bg) {
    return (1 - bf) * 3 * bf * bf * bg;
  }(bf, bi) + function (bf, bg) {
    return bf * bf * bf * bg;
  }(bf, bF);
}
export function CubicBezierCurve(bf, bg, bh, bi) {
  Curve.call(this);
  this.type = "CubicBezierCurve";
  this.v0 = bf || new Vector2();
  this.v1 = bg || new Vector2();
  this.v2 = bh || new Vector2();
  this.v3 = bi || new Vector2();
}
export function CubicBezierCurve3(bf, bg, bh, bi) {
  Curve.call(this);
  this.type = "CubicBezierCurve3";
  this.v0 = bf || new Vector3();
  this.v1 = bg || new Vector3();
  this.v2 = bh || new Vector3();
  this.v3 = bi || new Vector3();
}
export function LineCurve(bf, bg) {
  Curve.call(this);
  this.type = "LineCurve";
  this.v1 = bf || new Vector2();
  this.v2 = bg || new Vector2();
}
export function LineCurve3(bf, bg) {
  Curve.call(this);
  this.type = "LineCurve3";
  this.v1 = bf || new Vector3();
  this.v2 = bg || new Vector3();
}
export function QuadraticBezierCurve(bf, bg, bh) {
  Curve.call(this);
  this.type = "QuadraticBezierCurve";
  this.v0 = bf || new Vector2();
  this.v1 = bg || new Vector2();
  this.v2 = bh || new Vector2();
}
export function QuadraticBezierCurve3(bf, bg, bh) {
  Curve.call(this);
  this.type = "QuadraticBezierCurve3";
  this.v0 = bf || new Vector3();
  this.v1 = bg || new Vector3();
  this.v2 = bh || new Vector3();
}
export function SplineCurve(bf) {
  Curve.call(this);
  this.type = "SplineCurve";
  this.points = bf || [];
}
CatmullRomCurve3.prototype = Object.create(Curve.prototype);
CatmullRomCurve3.prototype.constructor = CatmullRomCurve3;
CatmullRomCurve3.prototype.isCatmullRomCurve3 = true;
CatmullRomCurve3.prototype.getPoint = function (bf, bg) {
  var bh;
  var bi;
  var bF;
  var bG;
  var bH = bg || new Vector3();
  var bI = this.points;
  var bJ = bI.length;
  var bK = (bJ - (this.closed ? 0 : 1)) * bf;
  var bL = Math.floor(bK);
  var bM = bK - bL;
  if (this.closed) {
    bL += bL > 0 ? 0 : (Math.floor(Math.abs(bL) / bJ) + 1) * bJ;
  } else if (bM === 0 && bL === bJ - 1) {
    bL = bJ - 2;
    bM = 1;
  }
  if (this.closed || bL > 0) {
    bh = bI[(bL - 1) % bJ];
  } else {
    aGs.subVectors(bI[0], bI[1]).add(bI[0]);
    bh = aGs;
  }
  bi = bI[bL % bJ];
  bF = bI[(bL + 1) % bJ];
  if (this.closed || bL + 2 < bJ) {
    bG = bI[(bL + 2) % bJ];
  } else {
    aGs.subVectors(bI[bJ - 1], bI[bJ - 2]).add(bI[bJ - 1]);
    bG = aGs;
  }
  if (this.curveType === "centripetal" || this.curveType === "chordal") {
    var bN = this.curveType === "chordal" ? 0.5 : 0.25;
    var bO = Math.pow(bh.distanceToSquared(bi), bN);
    var bP = Math.pow(bi.distanceToSquared(bF), bN);
    var bQ = Math.pow(bF.distanceToSquared(bG), bN);
    if (bP < 0.0001) {
      bP = 1;
    }
    if (bO < 0.0001) {
      bO = bP;
    }
    if (bQ < 0.0001) {
      bQ = bP;
    }
    aGt.initNonuniformCatmullRom(bh.x, bi.x, bF.x, bG.x, bO, bP, bQ);
    aGu.initNonuniformCatmullRom(bh.y, bi.y, bF.y, bG.y, bO, bP, bQ);
    aGv.initNonuniformCatmullRom(bh.z, bi.z, bF.z, bG.z, bO, bP, bQ);
  } else if (this.curveType === "catmullrom") {
    aGt.initCatmullRom(bh.x, bi.x, bF.x, bG.x, this.tension);
    aGu.initCatmullRom(bh.y, bi.y, bF.y, bG.y, this.tension);
    aGv.initCatmullRom(bh.z, bi.z, bF.z, bG.z, this.tension);
  }
  bH.set(aGt.calc(bM), aGu.calc(bM), aGv.calc(bM));
  return bH;
};
CatmullRomCurve3.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.points = [];
  for (var bg = 0, bh = bf.points.length; bg < bh; bg++) {
    var bi = bf.points[bg];
    this.points.push(bi.clone());
  }
  this.closed = bf.closed;
  this.curveType = bf.curveType;
  this.tension = bf.tension;
  return this;
};
CatmullRomCurve3.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.points = [];
  for (var bg = 0, bh = this.points.length; bg < bh; bg++) {
    var bi = this.points[bg];
    bf.points.push(bi.toArray());
  }
  bf.closed = this.closed;
  bf.curveType = this.curveType;
  bf.tension = this.tension;
  return bf;
};
CatmullRomCurve3.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.points = [];
  for (var bg = 0, bh = bf.points.length; bg < bh; bg++) {
    var bi = bf.points[bg];
    this.points.push(new Vector3().fromArray(bi));
  }
  this.closed = bf.closed;
  this.curveType = bf.curveType;
  this.tension = bf.tension;
  return this;
};
CubicBezierCurve.prototype = Object.create(Curve.prototype);
CubicBezierCurve.prototype.constructor = CubicBezierCurve;
CubicBezierCurve.prototype.isCubicBezierCurve = true;
CubicBezierCurve.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector2();
  var bi = this.v0;
  var bF = this.v1;
  var bG = this.v2;
  var bH = this.v3;
  bh.set(aGW(bf, bi.x, bF.x, bG.x, bH.x), aGW(bf, bi.y, bF.y, bG.y, bH.y));
  return bh;
};
CubicBezierCurve.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v0.copy(bf.v0);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  this.v3.copy(bf.v3);
  return this;
};
CubicBezierCurve.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v0 = this.v0.toArray();
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  bf.v3 = this.v3.toArray();
  return bf;
};
CubicBezierCurve.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v0.fromArray(bf.v0);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  this.v3.fromArray(bf.v3);
  return this;
};
CubicBezierCurve3.prototype = Object.create(Curve.prototype);
CubicBezierCurve3.prototype.constructor = CubicBezierCurve3;
CubicBezierCurve3.prototype.isCubicBezierCurve3 = true;
CubicBezierCurve3.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector3();
  var bi = this.v0;
  var bF = this.v1;
  var bG = this.v2;
  var bH = this.v3;
  bh.set(aGW(bf, bi.x, bF.x, bG.x, bH.x), aGW(bf, bi.y, bF.y, bG.y, bH.y), aGW(bf, bi.z, bF.z, bG.z, bH.z));
  return bh;
};
CubicBezierCurve3.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v0.copy(bf.v0);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  this.v3.copy(bf.v3);
  return this;
};
CubicBezierCurve3.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v0 = this.v0.toArray();
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  bf.v3 = this.v3.toArray();
  return bf;
};
CubicBezierCurve3.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v0.fromArray(bf.v0);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  this.v3.fromArray(bf.v3);
  return this;
};
LineCurve.prototype = Object.create(Curve.prototype);
LineCurve.prototype.constructor = LineCurve;
LineCurve.prototype.isLineCurve = true;
LineCurve.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector2();
  if (bf === 1) {
    bh.copy(this.v2);
  } else {
    bh.copy(this.v2).sub(this.v1);
    bh.multiplyScalar(bf).add(this.v1);
  }
  return bh;
};
LineCurve.prototype.getPointAt = function (bf, bg) {
  return this.getPoint(bf, bg);
};
LineCurve.prototype.getTangent = function () {
  return this.v2.clone().sub(this.v1).normalize();
};
LineCurve.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  return this;
};
LineCurve.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  return bf;
};
LineCurve.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  return this;
};
LineCurve3.prototype = Object.create(Curve.prototype);
LineCurve3.prototype.constructor = LineCurve3;
LineCurve3.prototype.isLineCurve3 = true;
LineCurve3.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector3();
  if (bf === 1) {
    bh.copy(this.v2);
  } else {
    bh.copy(this.v2).sub(this.v1);
    bh.multiplyScalar(bf).add(this.v1);
  }
  return bh;
};
LineCurve3.prototype.getPointAt = function (bf, bg) {
  return this.getPoint(bf, bg);
};
LineCurve3.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  return this;
};
LineCurve3.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  return bf;
};
LineCurve3.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  return this;
};
QuadraticBezierCurve.prototype = Object.create(Curve.prototype);
QuadraticBezierCurve.prototype.constructor = QuadraticBezierCurve;
QuadraticBezierCurve.prototype.isQuadraticBezierCurve = true;
QuadraticBezierCurve.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector2();
  var bi = this.v0;
  var bF = this.v1;
  var bG = this.v2;
  bh.set(aGK(bf, bi.x, bF.x, bG.x), aGK(bf, bi.y, bF.y, bG.y));
  return bh;
};
QuadraticBezierCurve.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v0.copy(bf.v0);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  return this;
};
QuadraticBezierCurve.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v0 = this.v0.toArray();
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  return bf;
};
QuadraticBezierCurve.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v0.fromArray(bf.v0);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  return this;
};
QuadraticBezierCurve3.prototype = Object.create(Curve.prototype);
QuadraticBezierCurve3.prototype.constructor = QuadraticBezierCurve3;
QuadraticBezierCurve3.prototype.isQuadraticBezierCurve3 = true;
QuadraticBezierCurve3.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector3();
  var bi = this.v0;
  var bF = this.v1;
  var bG = this.v2;
  bh.set(aGK(bf, bi.x, bF.x, bG.x), aGK(bf, bi.y, bF.y, bG.y), aGK(bf, bi.z, bF.z, bG.z));
  return bh;
};
QuadraticBezierCurve3.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.v0.copy(bf.v0);
  this.v1.copy(bf.v1);
  this.v2.copy(bf.v2);
  return this;
};
QuadraticBezierCurve3.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.v0 = this.v0.toArray();
  bf.v1 = this.v1.toArray();
  bf.v2 = this.v2.toArray();
  return bf;
};
QuadraticBezierCurve3.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.v0.fromArray(bf.v0);
  this.v1.fromArray(bf.v1);
  this.v2.fromArray(bf.v2);
  return this;
};
SplineCurve.prototype = Object.create(Curve.prototype);
SplineCurve.prototype.constructor = SplineCurve;
SplineCurve.prototype.isSplineCurve = true;
SplineCurve.prototype.getPoint = function (bf, bg) {
  var bh = bg || new Vector2();
  var bi = this.points;
  var bF = (bi.length - 1) * bf;
  var bG = Math.floor(bF);
  var bH = bF - bG;
  var bI = bi[bG === 0 ? bG : bG - 1];
  var bJ = bi[bG];
  var bK = bi[bG > bi.length - 2 ? bi.length - 1 : bG + 1];
  var bL = bi[bG > bi.length - 3 ? bi.length - 1 : bG + 2];
  bh.set(aGB(bH, bI.x, bJ.x, bK.x, bL.x), aGB(bH, bI.y, bJ.y, bK.y, bL.y));
  return bh;
};
SplineCurve.prototype.copy = function (bf) {
  Curve.prototype.copy.call(this, bf);
  this.points = [];
  for (var bg = 0, bh = bf.points.length; bg < bh; bg++) {
    var bi = bf.points[bg];
    this.points.push(bi.clone());
  }
  return this;
};
SplineCurve.prototype.toJSON = function () {
  var bf = Curve.prototype.toJSON.call(this);
  bf.points = [];
  for (var bg = 0, bh = this.points.length; bg < bh; bg++) {
    var bi = this.points[bg];
    bf.points.push(bi.toArray());
  }
  return bf;
};
SplineCurve.prototype.fromJSON = function (bf) {
  Curve.prototype.fromJSON.call(this, bf);
  this.points = [];
  for (var bg = 0, bh = bf.points.length; bg < bh; bg++) {
    var bi = bf.points[bg];
    this.points.push(new Vector2().fromArray(bi));
  }
  return this;
};
var aJj = Object.freeze({
  ArcCurve: ArcCurve,
  CatmullRomCurve3: CatmullRomCurve3,
  CubicBezierCurve: CubicBezierCurve,
  CubicBezierCurve3: CubicBezierCurve3,
  EllipseCurve: EllipseCurve,
  LineCurve: LineCurve,
  LineCurve3: LineCurve3,
  QuadraticBezierCurve: QuadraticBezierCurve,
  QuadraticBezierCurve3: QuadraticBezierCurve3,
  SplineCurve: SplineCurve
});
export function CurvePath() {
  Curve.call(this);
  this.type = "CurvePath";
  this.curves = [];
  this.autoClose = false;
}
export function Path(bf) {
  CurvePath.call(this);
  this.type = "Path";
  this.currentPoint = new Vector2();
  if (bf) {
    this.setFromPoints(bf);
  }
}
export function Shape(bf) {
  Path.call(this, bf);
  this.uuid = Math.generateUUID();
  this.type = "Shape";
  this.holes = [];
}
export function Light(bf, bg) {
  Object3D.call(this);
  this.type = "Light";
  this.color = new Color(bf);
  this.intensity = bg !== undefined ? bg : 1;
  this.receiveShadow = undefined;
}
export function HemisphereLight(bf, bg, bh) {
  Light.call(this, bf, bh);
  this.type = "HemisphereLight";
  this.castShadow = undefined;
  this.position.copy(Object3D.DefaultUp);
  this.updateMatrix();
  this.groundColor = new Color(bg);
}
export function LightShadow(bf) {
  this.camera = bf;
  this.bias = 0;
  this.radius = 1;
  this.mapSize = new Vector2(512, 512);
  this.map = null;
  this.matrix = new Matrix4();
}
export function SpotLightShadow() {
  LightShadow.call(this, new PerspectiveCamera(50, 1, 0.5, 500));
}
export function SpotLight(bf, bg, bh, bi, bF, bG) {
  Light.call(this, bf, bg);
  this.type = "SpotLight";
  this.position.copy(Object3D.DefaultUp);
  this.updateMatrix();
  this.target = new Object3D();
  Object.defineProperty(this, "power", {
    get: function () {
      return this.intensity * Math.PI;
    },
    set: function (bf) {
      this.intensity = bf / Math.PI;
    }
  });
  this.distance = bh !== undefined ? bh : 0;
  this.angle = bi !== undefined ? bi : Math.PI / 3;
  this.penumbra = bF !== undefined ? bF : 0;
  this.decay = bG !== undefined ? bG : 1;
  this.shadow = new SpotLightShadow();
}
export function PointLight(bf, bg, bh, bi) {
  Light.call(this, bf, bg);
  this.type = "PointLight";
  Object.defineProperty(this, "power", {
    get: function () {
      return this.intensity * 4 * Math.PI;
    },
    set: function (bf) {
      this.intensity = bf / (Math.PI * 4);
    }
  });
  this.distance = bh !== undefined ? bh : 0;
  this.decay = bi !== undefined ? bi : 1;
  this.shadow = new LightShadow(new PerspectiveCamera(90, 1, 0.5, 500));
}
export function OrthographicCamera(bf, bg, bh, bi, bF, bG) {
  Camera.call(this);
  this.type = "OrthographicCamera";
  this.zoom = 1;
  this.view = null;
  this.left = bf !== undefined ? bf : -1;
  this.right = bg !== undefined ? bg : 1;
  this.top = bh !== undefined ? bh : 1;
  this.bottom = bi !== undefined ? bi : -1;
  this.near = bF !== undefined ? bF : 0.1;
  this.far = bG !== undefined ? bG : 2000;
  this.updateProjectionMatrix();
}
export function DirectionalLightShadow() {
  LightShadow.call(this, new OrthographicCamera(-5, 5, 5, -5, 0.5, 500));
}
export function DirectionalLight(bf, bg) {
  Light.call(this, bf, bg);
  this.type = "DirectionalLight";
  this.position.copy(Object3D.DefaultUp);
  this.updateMatrix();
  this.target = new Object3D();
  this.shadow = new DirectionalLightShadow();
}
export function AmbientLight(bf, bg) {
  Light.call(this, bf, bg);
  this.type = "AmbientLight";
  this.castShadow = undefined;
}
export function RectAreaLight(bf, bg, bh, bi) {
  Light.call(this, bf, bg);
  this.type = "RectAreaLight";
  this.width = bh !== undefined ? bh : 10;
  this.height = bi !== undefined ? bi : 10;
}
export function MaterialLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
  this.textures = {};
}
CurvePath.prototype = Object.assign(Object.create(Curve.prototype), {
  constructor: CurvePath,
  add: function (bf) {
    this.curves.push(bf);
  },
  closePath: function () {
    var bf = this.curves[0].getPoint(0);
    var bg = this.curves[this.curves.length - 1].getPoint(1);
    if (!bf.equals(bg)) {
      this.curves.push(new LineCurve(bg, bf));
    }
  },
  getPoint: function (bf) {
    for (var bg = bf * this.getLength(), bh = this.getCurveLengths(), bi = 0; bi < bh.length;) {
      if (bh[bi] >= bg) {
        var bF = bh[bi] - bg;
        var bG = this.curves[bi];
        var bH = bG.getLength();
        var bI = bH === 0 ? 0 : 1 - bF / bH;
        return bG.getPointAt(bI);
      }
      bi++;
    }
    return null;
  },
  getLength: function () {
    var bf = this.getCurveLengths();
    return bf[bf.length - 1];
  },
  updateArcLengths: function () {
    this.needsUpdate = true;
    this.cacheLengths = null;
    this.getCurveLengths();
  },
  getCurveLengths: function () {
    if (this.cacheLengths && this.cacheLengths.length === this.curves.length) {
      return this.cacheLengths;
    }
    for (var bf = [], bg = 0, bh = 0, bi = this.curves.length; bh < bi; bh++) {
      bg += this.curves[bh].getLength();
      bf.push(bg);
    }
    this.cacheLengths = bf;
    return bf;
  },
  getSpacedPoints: function (bf) {
    if (bf === undefined) {
      bf = 40;
    }
    for (var bg = [], bh = 0; bh <= bf; bh++) {
      bg.push(this.getPoint(bh / bf));
    }
    if (this.autoClose) {
      bg.push(bg[0]);
    }
    return bg;
  },
  getPoints: function (bf) {
    bf = bf || 12;
    for (var bg, bh = [], bi = 0, bF = this.curves; bi < bF.length; bi++) {
      for (var bG = bF[bi], bH = bG && bG.isEllipseCurve ? bf * 2 : bG && (bG.isLineCurve || bG.isLineCurve3) ? 1 : bG && bG.isSplineCurve ? bf * bG.points.length : bf, bI = bG.getPoints(bH), bJ = 0; bJ < bI.length; bJ++) {
        var bK = bI[bJ];
        if (!bg || !bg.equals(bK)) {
          bh.push(bK);
          bg = bK;
        }
      }
    }
    if (this.autoClose && bh.length > 1 && !bh[bh.length - 1].equals(bh[0])) {
      bh.push(bh[0]);
    }
    return bh;
  },
  copy: function (bf) {
    Curve.prototype.copy.call(this, bf);
    this.curves = [];
    for (var bg = 0, bh = bf.curves.length; bg < bh; bg++) {
      var bi = bf.curves[bg];
      this.curves.push(bi.clone());
    }
    this.autoClose = bf.autoClose;
    return this;
  },
  toJSON: function () {
    var bf = Curve.prototype.toJSON.call(this);
    bf.autoClose = this.autoClose;
    bf.curves = [];
    for (var bg = 0, bh = this.curves.length; bg < bh; bg++) {
      var bi = this.curves[bg];
      bf.curves.push(bi.toJSON());
    }
    return bf;
  },
  fromJSON: function (bf) {
    Curve.prototype.fromJSON.call(this, bf);
    this.autoClose = bf.autoClose;
    this.curves = [];
    for (var bg = 0, bh = bf.curves.length; bg < bh; bg++) {
      var bi = bf.curves[bg];
      this.curves.push(new aJj[bi.type]().fromJSON(bi));
    }
    return this;
  }
});
Path.prototype = Object.assign(Object.create(CurvePath.prototype), {
  constructor: Path,
  setFromPoints: function (bf) {
    this.moveTo(bf[0].x, bf[0].y);
    for (var bg = 1, bh = bf.length; bg < bh; bg++) {
      this.lineTo(bf[bg].x, bf[bg].y);
    }
  },
  moveTo: function (bf, bg) {
    this.currentPoint.set(bf, bg);
  },
  lineTo: function (bf, bg) {
    var bh = new LineCurve(this.currentPoint.clone(), new Vector2(bf, bg));
    this.curves.push(bh);
    this.currentPoint.set(bf, bg);
  },
  quadraticCurveTo: function (bf, bg, bh, bi) {
    var bF = new QuadraticBezierCurve(this.currentPoint.clone(), new Vector2(bf, bg), new Vector2(bh, bi));
    this.curves.push(bF);
    this.currentPoint.set(bh, bi);
  },
  bezierCurveTo: function (bf, bg, bh, bi, bF, bG) {
    var bH = new CubicBezierCurve(this.currentPoint.clone(), new Vector2(bf, bg), new Vector2(bh, bi), new Vector2(bF, bG));
    this.curves.push(bH);
    this.currentPoint.set(bF, bG);
  },
  splineThru: function (bf) {
    var bg = new SplineCurve([this.currentPoint.clone()].concat(bf));
    this.curves.push(bg);
    this.currentPoint.copy(bf[bf.length - 1]);
  },
  arc: function (bf, bg, bh, bi, bF, bG) {
    var bH = this.currentPoint.x;
    var bI = this.currentPoint.y;
    this.absarc(bf + bH, bg + bI, bh, bi, bF, bG);
  },
  absarc: function (bf, bg, bh, bi, bF, bG) {
    this.absellipse(bf, bg, bh, bh, bi, bF, bG);
  },
  ellipse: function (bf, bg, bh, bi, bF, bG, bH, bI) {
    var bJ = this.currentPoint.x;
    var bK = this.currentPoint.y;
    this.absellipse(bf + bJ, bg + bK, bh, bi, bF, bG, bH, bI);
  },
  absellipse: function (bf, bg, bh, bi, bF, bG, bH, bI) {
    var bJ = new EllipseCurve(bf, bg, bh, bi, bF, bG, bH, bI);
    if (this.curves.length > 0) {
      var bK = bJ.getPoint(0);
      if (!bK.equals(this.currentPoint)) {
        this.lineTo(bK.x, bK.y);
      }
    }
    this.curves.push(bJ);
    var bL = bJ.getPoint(1);
    this.currentPoint.copy(bL);
  },
  copy: function (bf) {
    CurvePath.prototype.copy.call(this, bf);
    this.currentPoint.copy(bf.currentPoint);
    return this;
  },
  toJSON: function () {
    var bf = CurvePath.prototype.toJSON.call(this);
    bf.currentPoint = this.currentPoint.toArray();
    return bf;
  },
  fromJSON: function (bf) {
    CurvePath.prototype.fromJSON.call(this, bf);
    this.currentPoint.fromArray(bf.currentPoint);
    return this;
  }
});
Shape.prototype = Object.assign(Object.create(Path.prototype), {
  constructor: Shape,
  getPointsHoles: function (bf) {
    for (var bg = [], bh = 0, bi = this.holes.length; bh < bi; bh++) {
      bg[bh] = this.holes[bh].getPoints(bf);
    }
    return bg;
  },
  extractPoints: function (bf) {
    return {
      shape: this.getPoints(bf),
      holes: this.getPointsHoles(bf)
    };
  },
  copy: function (bf) {
    Path.prototype.copy.call(this, bf);
    this.holes = [];
    for (var bg = 0, bh = bf.holes.length; bg < bh; bg++) {
      var bi = bf.holes[bg];
      this.holes.push(bi.clone());
    }
    return this;
  },
  toJSON: function () {
    var bf = Path.prototype.toJSON.call(this);
    bf.uuid = this.uuid;
    bf.holes = [];
    for (var bg = 0, bh = this.holes.length; bg < bh; bg++) {
      var bi = this.holes[bg];
      bf.holes.push(bi.toJSON());
    }
    return bf;
  },
  fromJSON: function (bf) {
    Path.prototype.fromJSON.call(this, bf);
    this.uuid = bf.uuid;
    this.holes = [];
    for (var bg = 0, bh = bf.holes.length; bg < bh; bg++) {
      var bi = bf.holes[bg];
      this.holes.push(new Path().fromJSON(bi));
    }
    return this;
  }
});
Light.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Light,
  isLight: true,
  copy: function (bf) {
    Object3D.prototype.copy.call(this, bf);
    this.color.copy(bf.color);
    this.intensity = bf.intensity;
    return this;
  },
  toJSON: function (bf) {
    var bg = Object3D.prototype.toJSON.call(this, bf);
    bg.object.color = this.color.getHex();
    bg.object.intensity = this.intensity;
    if (this.groundColor !== undefined) {
      bg.object.groundColor = this.groundColor.getHex();
    }
    if (this.distance !== undefined) {
      bg.object.distance = this.distance;
    }
    if (this.angle !== undefined) {
      bg.object.angle = this.angle;
    }
    if (this.decay !== undefined) {
      bg.object.decay = this.decay;
    }
    if (this.penumbra !== undefined) {
      bg.object.penumbra = this.penumbra;
    }
    if (this.shadow !== undefined) {
      bg.object.shadow = this.shadow.toJSON();
    }
    return bg;
  }
});
HemisphereLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: HemisphereLight,
  isHemisphereLight: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.groundColor.copy(bf.groundColor);
    return this;
  }
});
Object.assign(LightShadow.prototype, {
  copy: function (bf) {
    this.camera = bf.camera.clone();
    this.bias = bf.bias;
    this.radius = bf.radius;
    this.mapSize.copy(bf.mapSize);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  toJSON: function () {
    var bf = {};
    if (this.bias !== 0) {
      bf.bias = this.bias;
    }
    if (this.radius !== 1) {
      bf.radius = this.radius;
    }
    if (this.mapSize.x !== 512 || this.mapSize.y !== 512) {
      bf.mapSize = this.mapSize.toArray();
    }
    bf.camera = this.camera.toJSON(false).object;
    delete bf.camera.matrix;
    return bf;
  }
});
SpotLightShadow.prototype = Object.assign(Object.create(LightShadow.prototype), {
  constructor: SpotLightShadow,
  isSpotLightShadow: true,
  update: function (bf) {
    var bg = this.camera;
    var bh = Math.RAD2DEG * 2 * bf.angle;
    var bi = this.mapSize.width / this.mapSize.height;
    var bF = bf.distance || bg.far;
    if (bh !== bg.fov || bi !== bg.aspect || bF !== bg.far) {
      bg.fov = bh;
      bg.aspect = bi;
      bg.far = bF;
      bg.updateProjectionMatrix();
    }
  }
});
SpotLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: SpotLight,
  isSpotLight: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.distance = bf.distance;
    this.angle = bf.angle;
    this.penumbra = bf.penumbra;
    this.decay = bf.decay;
    this.target = bf.target.clone();
    this.shadow = bf.shadow.clone();
    return this;
  }
});
PointLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: PointLight,
  isPointLight: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.distance = bf.distance;
    this.decay = bf.decay;
    this.shadow = bf.shadow.clone();
    return this;
  }
});
OrthographicCamera.prototype = Object.assign(Object.create(Camera.prototype), {
  constructor: OrthographicCamera,
  isOrthographicCamera: true,
  copy: function (bf, bg) {
    Camera.prototype.copy.call(this, bf, bg);
    this.left = bf.left;
    this.right = bf.right;
    this.top = bf.top;
    this.bottom = bf.bottom;
    this.near = bf.near;
    this.far = bf.far;
    this.zoom = bf.zoom;
    this.view = bf.view === null ? null : Object.assign({}, bf.view);
    return this;
  },
  setViewOffset: function (bf, bg, bh, bi, bF, bG) {
    if (this.view === null) {
      this.view = {
        enabled: true,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1
      };
    }
    this.view.enabled = true;
    this.view.fullWidth = bf;
    this.view.fullHeight = bg;
    this.view.offsetX = bh;
    this.view.offsetY = bi;
    this.view.width = bF;
    this.view.height = bG;
    this.updateProjectionMatrix();
  },
  clearViewOffset: function () {
    if (this.view !== null) {
      this.view.enabled = false;
    }
    this.updateProjectionMatrix();
  },
  updateProjectionMatrix: function () {
    var bf = (this.right - this.left) / (this.zoom * 2);
    var bg = (this.top - this.bottom) / (this.zoom * 2);
    var bh = (this.right + this.left) / 2;
    var bi = (this.top + this.bottom) / 2;
    var bF = bh - bf;
    var bG = bh + bf;
    var bH = bi + bg;
    var bI = bi - bg;
    if (this.view !== null && this.view.enabled) {
      var bJ = this.zoom / (this.view.width / this.view.fullWidth);
      var bK = this.zoom / (this.view.height / this.view.fullHeight);
      var bL = (this.right - this.left) / this.view.width;
      var bM = (this.top - this.bottom) / this.view.height;
      bG = (bF += bL * (this.view.offsetX / bJ)) + bL * (this.view.width / bJ);
      bI = (bH -= bM * (this.view.offsetY / bK)) - bM * (this.view.height / bK);
    }
    this.projectionMatrix.makeOrthographic(bF, bG, bH, bI, this.near, this.far);
    this.projectionMatrixInverse.getInverse(this.projectionMatrix);
  },
  toJSON: function (bf) {
    var bg = Object3D.prototype.toJSON.call(this, bf);
    bg.object.zoom = this.zoom;
    bg.object.left = this.left;
    bg.object.right = this.right;
    bg.object.top = this.top;
    bg.object.bottom = this.bottom;
    bg.object.near = this.near;
    bg.object.far = this.far;
    if (this.view !== null) {
      bg.object.view = Object.assign({}, this.view);
    }
    return bg;
  }
});
DirectionalLightShadow.prototype = Object.assign(Object.create(LightShadow.prototype), {
  constructor: DirectionalLightShadow
});
DirectionalLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: DirectionalLight,
  isDirectionalLight: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.target = bf.target.clone();
    this.shadow = bf.shadow.clone();
    return this;
  }
});
AmbientLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: AmbientLight,
  isAmbientLight: true
});
RectAreaLight.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: RectAreaLight,
  isRectAreaLight: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.width = bf.width;
    this.height = bf.height;
    return this;
  },
  toJSON: function (bf) {
    var bg = Light.prototype.toJSON.call(this, bf);
    bg.object.width = this.width;
    bg.object.height = this.height;
    return bg;
  }
});
Object.assign(MaterialLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = new FileLoader(bF.manager);
    bG.setPath(bF.path);
    bG.load(bf, function (bf) {
      bg(bF.parse(JSON.parse(bf)));
    }, bh, bi);
  },
  parse: function (bf) {
    var bg = this.textures;
    function bh(bf) {
      if (bg[bf] === undefined) {
        console.warn("THREE.MaterialLoader: Undefined texture", bf);
      }
      return bg[bf];
    }
    var bi = new axi[bf.type]();
    if (bf.uuid !== undefined) {
      bi.uuid = bf.uuid;
    }
    if (bf.name !== undefined) {
      bi.name = bf.name;
    }
    if (bf.color !== undefined) {
      bi.color.setHex(bf.color);
    }
    if (bf.roughness !== undefined) {
      bi.roughness = bf.roughness;
    }
    if (bf.metalness !== undefined) {
      bi.metalness = bf.metalness;
    }
    if (bf.emissive !== undefined) {
      bi.emissive.setHex(bf.emissive);
    }
    if (bf.specular !== undefined) {
      bi.specular.setHex(bf.specular);
    }
    if (bf.shininess !== undefined) {
      bi.shininess = bf.shininess;
    }
    if (bf.clearCoat !== undefined) {
      bi.clearCoat = bf.clearCoat;
    }
    if (bf.clearCoatRoughness !== undefined) {
      bi.clearCoatRoughness = bf.clearCoatRoughness;
    }
    if (bf.vertexColors !== undefined) {
      bi.vertexColors = bf.vertexColors;
    }
    if (bf.fog !== undefined) {
      bi.fog = bf.fog;
    }
    if (bf.flatShading !== undefined) {
      bi.flatShading = bf.flatShading;
    }
    if (bf.blending !== undefined) {
      bi.blending = bf.blending;
    }
    if (bf.combine !== undefined) {
      bi.combine = bf.combine;
    }
    if (bf.side !== undefined) {
      bi.side = bf.side;
    }
    if (bf.opacity !== undefined) {
      bi.opacity = bf.opacity;
    }
    if (bf.transparent !== undefined) {
      bi.transparent = bf.transparent;
    }
    if (bf.alphaTest !== undefined) {
      bi.alphaTest = bf.alphaTest;
    }
    if (bf.depthTest !== undefined) {
      bi.depthTest = bf.depthTest;
    }
    if (bf.depthWrite !== undefined) {
      bi.depthWrite = bf.depthWrite;
    }
    if (bf.colorWrite !== undefined) {
      bi.colorWrite = bf.colorWrite;
    }
    if (bf.wireframe !== undefined) {
      bi.wireframe = bf.wireframe;
    }
    if (bf.wireframeLinewidth !== undefined) {
      bi.wireframeLinewidth = bf.wireframeLinewidth;
    }
    if (bf.wireframeLinecap !== undefined) {
      bi.wireframeLinecap = bf.wireframeLinecap;
    }
    if (bf.wireframeLinejoin !== undefined) {
      bi.wireframeLinejoin = bf.wireframeLinejoin;
    }
    if (bf.rotation !== undefined) {
      bi.rotation = bf.rotation;
    }
    if (bf.linewidth !== 1) {
      bi.linewidth = bf.linewidth;
    }
    if (bf.dashSize !== undefined) {
      bi.dashSize = bf.dashSize;
    }
    if (bf.gapSize !== undefined) {
      bi.gapSize = bf.gapSize;
    }
    if (bf.scale !== undefined) {
      bi.scale = bf.scale;
    }
    if (bf.polygonOffset !== undefined) {
      bi.polygonOffset = bf.polygonOffset;
    }
    if (bf.polygonOffsetFactor !== undefined) {
      bi.polygonOffsetFactor = bf.polygonOffsetFactor;
    }
    if (bf.polygonOffsetUnits !== undefined) {
      bi.polygonOffsetUnits = bf.polygonOffsetUnits;
    }
    if (bf.skinning !== undefined) {
      bi.skinning = bf.skinning;
    }
    if (bf.morphTargets !== undefined) {
      bi.morphTargets = bf.morphTargets;
    }
    if (bf.dithering !== undefined) {
      bi.dithering = bf.dithering;
    }
    if (bf.visible !== undefined) {
      bi.visible = bf.visible;
    }
    if (bf.userData !== undefined) {
      bi.userData = bf.userData;
    }
    if (bf.uniforms !== undefined) {
      for (var bF in bf.uniforms) {
        var bG = bf.uniforms[bF];
        bi.uniforms[bF] = {};
        switch (bG.type) {
          case "t":
            bi.uniforms[bF].value = bh(bG.value);
            break;
          case "c":
            bi.uniforms[bF].value = new Color().setHex(bG.value);
            break;
          case "v2":
            bi.uniforms[bF].value = new Vector2().fromArray(bG.value);
            break;
          case "v3":
            bi.uniforms[bF].value = new Vector3().fromArray(bG.value);
            break;
          case "v4":
            bi.uniforms[bF].value = new Vector4().fromArray(bG.value);
            break;
          case "m3":
            bi.uniforms[bF].value = new Matrix3().fromArray(bG.value);
          case "m4":
            bi.uniforms[bF].value = new Matrix4().fromArray(bG.value);
            break;
          default:
            bi.uniforms[bF].value = bG.value;
        }
      }
    }
    if (bf.defines !== undefined) {
      bi.defines = bf.defines;
    }
    if (bf.vertexShader !== undefined) {
      bi.vertexShader = bf.vertexShader;
    }
    if (bf.fragmentShader !== undefined) {
      bi.fragmentShader = bf.fragmentShader;
    }
    if (bf.extensions !== undefined) {
      for (var bH in bf.extensions) {
        bi.extensions[bH] = bf.extensions[bH];
      }
    }
    if (bf.shading !== undefined) {
      bi.flatShading = bf.shading === 1;
    }
    if (bf.size !== undefined) {
      bi.size = bf.size;
    }
    if (bf.sizeAttenuation !== undefined) {
      bi.sizeAttenuation = bf.sizeAttenuation;
    }
    if (bf.map !== undefined) {
      bi.map = bh(bf.map);
    }
    if (bf.matcap !== undefined) {
      bi.matcap = bh(bf.matcap);
    }
    if (bf.alphaMap !== undefined) {
      bi.alphaMap = bh(bf.alphaMap);
      bi.transparent = true;
    }
    if (bf.bumpMap !== undefined) {
      bi.bumpMap = bh(bf.bumpMap);
    }
    if (bf.bumpScale !== undefined) {
      bi.bumpScale = bf.bumpScale;
    }
    if (bf.normalMap !== undefined) {
      bi.normalMap = bh(bf.normalMap);
    }
    if (bf.normalMapType !== undefined) {
      bi.normalMapType = bf.normalMapType;
    }
    if (bf.normalScale !== undefined) {
      var bI = bf.normalScale;
      if (Array.isArray(bI) === false) {
        bI = [bI, bI];
      }
      bi.normalScale = new Vector2().fromArray(bI);
    }
    if (bf.displacementMap !== undefined) {
      bi.displacementMap = bh(bf.displacementMap);
    }
    if (bf.displacementScale !== undefined) {
      bi.displacementScale = bf.displacementScale;
    }
    if (bf.displacementBias !== undefined) {
      bi.displacementBias = bf.displacementBias;
    }
    if (bf.roughnessMap !== undefined) {
      bi.roughnessMap = bh(bf.roughnessMap);
    }
    if (bf.metalnessMap !== undefined) {
      bi.metalnessMap = bh(bf.metalnessMap);
    }
    if (bf.emissiveMap !== undefined) {
      bi.emissiveMap = bh(bf.emissiveMap);
    }
    if (bf.emissiveIntensity !== undefined) {
      bi.emissiveIntensity = bf.emissiveIntensity;
    }
    if (bf.specularMap !== undefined) {
      bi.specularMap = bh(bf.specularMap);
    }
    if (bf.envMap !== undefined) {
      bi.envMap = bh(bf.envMap);
    }
    if (bf.envMapIntensity !== undefined) {
      bi.envMapIntensity = bf.envMapIntensity;
    }
    if (bf.reflectivity !== undefined) {
      bi.reflectivity = bf.reflectivity;
    }
    if (bf.lightMap !== undefined) {
      bi.lightMap = bh(bf.lightMap);
    }
    if (bf.lightMapIntensity !== undefined) {
      bi.lightMapIntensity = bf.lightMapIntensity;
    }
    if (bf.aoMap !== undefined) {
      bi.aoMap = bh(bf.aoMap);
    }
    if (bf.aoMapIntensity !== undefined) {
      bi.aoMapIntensity = bf.aoMapIntensity;
    }
    if (bf.gradientMap !== undefined) {
      bi.gradientMap = bh(bf.gradientMap);
    }
    return bi;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  },
  setTextures: function (bf) {
    this.textures = bf;
    return this;
  }
});
export var LoaderUtils = {
  decodeText: function (bf) {
    if (typeof TextDecoder != "undefined") {
      return new TextDecoder().decode(bf);
    }
    for (var bg = "", bh = 0, bi = bf.length; bh < bi; bh++) {
      bg += String.fromCharCode(bf[bh]);
    }
    try {
      return decodeURIComponent(escape(bg));
    } catch (aN2) {
      return bg;
    }
  },
  extractUrlBase: function (bf) {
    var bg = bf.lastIndexOf("/");
    if (bg === -1) {
      return "./";
    } else {
      return bf.substr(0, bg + 1);
    }
  }
};
export function InstancedBufferGeometry() {
  BufferGeometry.call(this);
  this.type = "InstancedBufferGeometry";
  this.maxInstancedCount = undefined;
}
export function InstancedBufferAttribute(bf, bg, bh, bi) {
  if (typeof bh == "number") {
    bi = bh;
    bh = false;
    console.error("THREE.InstancedBufferAttribute: The constructor now expects normalized as the third argument.");
  }
  BufferAttribute.call(this, bf, bg, bh);
  this.meshPerAttribute = bi || 1;
}
export function BufferGeometryLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
InstancedBufferGeometry.prototype = Object.assign(Object.create(BufferGeometry.prototype), {
  constructor: InstancedBufferGeometry,
  isInstancedBufferGeometry: true,
  copy: function (bf) {
    BufferGeometry.prototype.copy.call(this, bf);
    this.maxInstancedCount = bf.maxInstancedCount;
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  toJSON: function () {
    var bf = BufferGeometry.prototype.toJSON.call(this);
    bf.maxInstancedCount = this.maxInstancedCount;
    bf.isInstancedBufferGeometry = true;
    return bf;
  }
});
InstancedBufferAttribute.prototype = Object.assign(Object.create(BufferAttribute.prototype), {
  constructor: InstancedBufferAttribute,
  isInstancedBufferAttribute: true,
  copy: function (bf) {
    BufferAttribute.prototype.copy.call(this, bf);
    this.meshPerAttribute = bf.meshPerAttribute;
    return this;
  },
  toJSON: function () {
    var bf = BufferAttribute.prototype.toJSON.call(this);
    bf.meshPerAttribute = this.meshPerAttribute;
    bf.isInstancedBufferAttribute = true;
    return bf;
  }
});
Object.assign(BufferGeometryLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = new FileLoader(bF.manager);
    bG.setPath(bF.path);
    bG.load(bf, function (bf) {
      bg(bF.parse(JSON.parse(bf)));
    }, bh, bi);
  },
  parse: function (bf) {
    var bg = bf.isInstancedBufferGeometry ? new InstancedBufferGeometry() : new BufferGeometry();
    var bh = bf.data.index;
    if (bh !== undefined) {
      var bi = new aNI[bh.type](bh.array);
      bg.setIndex(new BufferAttribute(bi, 1));
    }
    var bF = bf.data.attributes;
    for (var bG in bF) {
      var bH = bF[bG];
      bi = new aNI[bH.type](bH.array);
      var bI = new (bH.isInstancedBufferAttribute ? InstancedBufferAttribute : BufferAttribute)(bi, bH.itemSize, bH.normalized);
      if (bH.name !== undefined) {
        bI.name = bH.name;
      }
      bg.addAttribute(bG, bI);
    }
    var bJ = bf.data.morphAttributes;
    if (bJ) {
      for (var bG in bJ) {
        for (var bK = bJ[bG], bL = [], bM = 0, bN = bK.length; bM < bN; bM++) {
          bH = bK[bM];
          bI = new BufferAttribute(bi = new aNI[bH.type](bH.array), bH.itemSize, bH.normalized);
          if (bH.name !== undefined) {
            bI.name = bH.name;
          }
          bL.push(bI);
        }
        bg.morphAttributes[bG] = bL;
      }
    }
    var bO = bf.data.groups || bf.data.drawcalls || bf.data.offsets;
    if (bO !== undefined) {
      bM = 0;
      for (var bP = bO.length; bM !== bP; ++bM) {
        var bQ = bO[bM];
        bg.addGroup(bQ.start, bQ.count, bQ.materialIndex);
      }
    }
    var bR = bf.data.boundingSphere;
    if (bR !== undefined) {
      var bS = new Vector3();
      if (bR.center !== undefined) {
        bS.fromArray(bR.center);
      }
      bg.boundingSphere = new Sphere(bS, bR.radius);
    }
    if (bf.name) {
      bg.name = bf.name;
    }
    if (bf.userData) {
      bg.userData = bf.userData;
    }
    return bg;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
var aNI = {
  Int8Array: Int8Array,
  Uint8Array: Uint8Array,
  Uint8ClampedArray: typeof Uint8ClampedArray != "undefined" ? Uint8ClampedArray : Uint8Array,
  Int16Array: Int16Array,
  Uint16Array: Uint16Array,
  Int32Array: Int32Array,
  Uint32Array: Uint32Array,
  Float32Array: Float32Array,
  Float64Array: Float64Array
};
export function ObjectLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
  this.resourcePath = "";
}
Object.assign(ObjectLoader.prototype, {
  crossOrigin: "anonymous",
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = this.path === undefined ? LoaderUtils.extractUrlBase(bf) : this.path;
    this.resourcePath = this.resourcePath || bG;
    var bH = new FileLoader(bF.manager);
    bH.setPath(this.path);
    bH.load(bf, function (bh) {
      var bG = null;
      try {
        bG = JSON.parse(bh);
      } catch (aNU) {
        if (bi !== undefined) {
          bi(aNU);
        }
        console.error("THREE:ObjectLoader: Can't parse " + bf + ".", aNU.message);
        return;
      }
      var bH = bG.metadata;
      if (bH !== undefined && bH.type !== undefined && bH.type.toLowerCase() !== "geometry") {
        bF.parse(bG, bg);
      } else {
        console.error("THREE.ObjectLoader: Can't load " + bf);
      }
    }, bh, bi);
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  },
  setResourcePath: function (bf) {
    this.resourcePath = bf;
    return this;
  },
  setCrossOrigin: function (bf) {
    this.crossOrigin = bf;
    return this;
  },
  parse: function (bf, bg) {
    var bh = this.parseShape(bf.shapes);
    var bi = this.parseGeometries(bf.geometries, bh);
    var bF = this.parseImages(bf.images, function () {
      if (bg !== undefined) {
        bg(bI);
      }
    });
    var bG = this.parseTextures(bf.textures, bF);
    var bH = this.parseMaterials(bf.materials, bG);
    var bI = this.parseObject(bf.object, bi, bH);
    if (bf.animations) {
      bI.animations = this.parseAnimations(bf.animations);
    }
    if (bf.images === undefined || bf.images.length === 0) {
      if (bg !== undefined) {
        bg(bI);
      }
    }
    return bI;
  },
  parseShape: function (bf) {
    var bg = {};
    if (bf !== undefined) {
      for (var bh = 0, bi = bf.length; bh < bi; bh++) {
        var bF = new Shape().fromJSON(bf[bh]);
        bg[bF.uuid] = bF;
      }
    }
    return bg;
  },
  parseGeometries: function (bf, bg) {
    var bh = {};
    if (bf !== undefined) {
      for (var bi = new BufferGeometryLoader(), bF = 0, bG = bf.length; bF < bG; bF++) {
        var bH;
        var bI = bf[bF];
        switch (bI.type) {
          case "PlaneGeometry":
          case "PlaneBufferGeometry":
            bH = new awO[bI.type](bI.width, bI.height, bI.widthSegments, bI.heightSegments);
            break;
          case "BoxGeometry":
          case "BoxBufferGeometry":
          case "CubeGeometry":
            bH = new awO[bI.type](bI.width, bI.height, bI.depth, bI.widthSegments, bI.heightSegments, bI.depthSegments);
            break;
          case "CircleGeometry":
          case "CircleBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.segments, bI.thetaStart, bI.thetaLength);
            break;
          case "CylinderGeometry":
          case "CylinderBufferGeometry":
            bH = new awO[bI.type](bI.radiusTop, bI.radiusBottom, bI.height, bI.radialSegments, bI.heightSegments, bI.openEnded, bI.thetaStart, bI.thetaLength);
            break;
          case "ConeGeometry":
          case "ConeBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.height, bI.radialSegments, bI.heightSegments, bI.openEnded, bI.thetaStart, bI.thetaLength);
            break;
          case "SphereGeometry":
          case "SphereBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.widthSegments, bI.heightSegments, bI.phiStart, bI.phiLength, bI.thetaStart, bI.thetaLength);
            break;
          case "DodecahedronGeometry":
          case "DodecahedronBufferGeometry":
          case "IcosahedronGeometry":
          case "IcosahedronBufferGeometry":
          case "OctahedronGeometry":
          case "OctahedronBufferGeometry":
          case "TetrahedronGeometry":
          case "TetrahedronBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.detail);
            break;
          case "RingGeometry":
          case "RingBufferGeometry":
            bH = new awO[bI.type](bI.innerRadius, bI.outerRadius, bI.thetaSegments, bI.phiSegments, bI.thetaStart, bI.thetaLength);
            break;
          case "TorusGeometry":
          case "TorusBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.tube, bI.radialSegments, bI.tubularSegments, bI.arc);
            break;
          case "TorusKnotGeometry":
          case "TorusKnotBufferGeometry":
            bH = new awO[bI.type](bI.radius, bI.tube, bI.tubularSegments, bI.radialSegments, bI.p, bI.q);
            break;
          case "TubeGeometry":
          case "TubeBufferGeometry":
            bH = new awO[bI.type](new aJj[bI.path.type]().fromJSON(bI.path), bI.tubularSegments, bI.radius, bI.radialSegments, bI.closed);
            break;
          case "LatheGeometry":
          case "LatheBufferGeometry":
            bH = new awO[bI.type](bI.points, bI.segments, bI.phiStart, bI.phiLength);
            break;
          case "PolyhedronGeometry":
          case "PolyhedronBufferGeometry":
            bH = new awO[bI.type](bI.vertices, bI.indices, bI.radius, bI.details);
            break;
          case "ShapeGeometry":
          case "ShapeBufferGeometry":
            for (var bJ = [], bK = 0, bL = bI.shapes.length; bK < bL; bK++) {
              var bM = bg[bI.shapes[bK]];
              bJ.push(bM);
            }
            bH = new awO[bI.type](bJ, bI.curveSegments);
            break;
          case "ExtrudeGeometry":
          case "ExtrudeBufferGeometry":
            bJ = [];
            bK = 0;
            bL = bI.shapes.length;
            for (; bK < bL; bK++) {
              bM = bg[bI.shapes[bK]];
              bJ.push(bM);
            }
            var bN = bI.options.extrudePath;
            if (bN !== undefined) {
              bI.options.extrudePath = new aJj[bN.type]().fromJSON(bN);
            }
            bH = new awO[bI.type](bJ, bI.options);
            break;
          case "BufferGeometry":
          case "InstancedBufferGeometry":
            bH = bi.parse(bI);
            break;
          case "Geometry":
            if ("THREE" in window && "LegacyJSONLoader" in THREE) {
              bH = new THREE.LegacyJSONLoader().parse(bI, this.resourcePath).geometry;
            } else {
              console.error("THREE.ObjectLoader: You have to import LegacyJSONLoader in order load geometry data of type \"Geometry\".");
            }
            break;
          default:
            console.warn("THREE.ObjectLoader: Unsupported geometry type \"" + bI.type + "\"");
            continue;
        }
        bH.uuid = bI.uuid;
        if (bI.name !== undefined) {
          bH.name = bI.name;
        }
        if (bH.isBufferGeometry === true && bI.userData !== undefined) {
          bH.userData = bI.userData;
        }
        bh[bI.uuid] = bH;
      }
    }
    return bh;
  },
  parseMaterials: function (bf, bg) {
    var bh = {};
    var bi = {};
    if (bf !== undefined) {
      var bF = new MaterialLoader();
      bF.setTextures(bg);
      for (var bG = 0, bH = bf.length; bG < bH; bG++) {
        var bI = bf[bG];
        if (bI.type === "MultiMaterial") {
          for (var bJ = [], bK = 0; bK < bI.materials.length; bK++) {
            var bL = bI.materials[bK];
            if (bh[bL.uuid] === undefined) {
              bh[bL.uuid] = bF.parse(bL);
            }
            bJ.push(bh[bL.uuid]);
          }
          bi[bI.uuid] = bJ;
        } else {
          if (bh[bI.uuid] === undefined) {
            bh[bI.uuid] = bF.parse(bI);
          }
          bi[bI.uuid] = bh[bI.uuid];
        }
      }
    }
    return bi;
  },
  parseAnimations: function (bf) {
    for (var bg = [], bh = 0; bh < bf.length; bh++) {
      var bi = bf[bh];
      var bF = AnimationClip.parse(bi);
      if (bi.uuid !== undefined) {
        bF.uuid = bi.uuid;
      }
      bg.push(bF);
    }
    return bg;
  },
  parseImages: function (bf, bg) {
    var bh = this;
    var bi = {};
    function bF(bf) {
      bh.manager.itemStart(bf);
      return bG.load(bf, function () {
        bh.manager.itemEnd(bf);
      }, undefined, function () {
        bh.manager.itemError(bf);
        bh.manager.itemEnd(bf);
      });
    }
    if (bf !== undefined && bf.length > 0) {
      var bG = new ImageLoader(new LoadingManager(bg));
      bG.setCrossOrigin(this.crossOrigin);
      for (var bH = 0, bI = bf.length; bH < bI; bH++) {
        var bJ = bf[bH];
        var bK = bJ.url;
        if (Array.isArray(bK)) {
          bi[bJ.uuid] = [];
          for (var bL = 0, bM = bK.length; bL < bM; bL++) {
            var bN = bK[bL];
            var bO = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(bN) ? bN : bh.resourcePath + bN;
            bi[bJ.uuid].push(bF(bO));
          }
        } else {
          bO = /^(\/\/)|([a-z]+:(\/\/)?)/i.test(bJ.url) ? bJ.url : bh.resourcePath + bJ.url;
          bi[bJ.uuid] = bF(bO);
        }
      }
    }
    return bi;
  },
  parseTextures: function (bf, bg) {
    function bh(bf, bg) {
      if (typeof bf == "number") {
        return bf;
      } else {
        console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.", bf);
        return bg[bf];
      }
    }
    var bi = {};
    if (bf !== undefined) {
      for (var bF = 0, bG = bf.length; bF < bG; bF++) {
        var bH;
        var bI = bf[bF];
        if (bI.image === undefined) {
          console.warn("THREE.ObjectLoader: No \"image\" specified for", bI.uuid);
        }
        if (bg[bI.image] === undefined) {
          console.warn("THREE.ObjectLoader: Undefined image", bI.image);
        }
        (bH = Array.isArray(bg[bI.image]) ? new CubeTexture(bg[bI.image]) : new Texture(bg[bI.image])).needsUpdate = true;
        bH.uuid = bI.uuid;
        if (bI.name !== undefined) {
          bH.name = bI.name;
        }
        if (bI.mapping !== undefined) {
          bH.mapping = bh(bI.mapping, aPt);
        }
        if (bI.offset !== undefined) {
          bH.offset.fromArray(bI.offset);
        }
        if (bI.repeat !== undefined) {
          bH.repeat.fromArray(bI.repeat);
        }
        if (bI.center !== undefined) {
          bH.center.fromArray(bI.center);
        }
        if (bI.rotation !== undefined) {
          bH.rotation = bI.rotation;
        }
        if (bI.wrap !== undefined) {
          bH.wrapS = bh(bI.wrap[0], aPu);
          bH.wrapT = bh(bI.wrap[1], aPu);
        }
        if (bI.format !== undefined) {
          bH.format = bI.format;
        }
        if (bI.type !== undefined) {
          bH.type = bI.type;
        }
        if (bI.encoding !== undefined) {
          bH.encoding = bI.encoding;
        }
        if (bI.minFilter !== undefined) {
          bH.minFilter = bh(bI.minFilter, aPv);
        }
        if (bI.magFilter !== undefined) {
          bH.magFilter = bh(bI.magFilter, aPv);
        }
        if (bI.anisotropy !== undefined) {
          bH.anisotropy = bI.anisotropy;
        }
        if (bI.flipY !== undefined) {
          bH.flipY = bI.flipY;
        }
        if (bI.premultiplyAlpha !== undefined) {
          bH.premultiplyAlpha = bI.premultiplyAlpha;
        }
        if (bI.unpackAlignment !== undefined) {
          bH.unpackAlignment = bI.unpackAlignment;
        }
        bi[bI.uuid] = bH;
      }
    }
    return bi;
  },
  parseObject: function (bf, bg, bh) {
    var bi;
    function bF(bf) {
      if (bg[bf] === undefined) {
        console.warn("THREE.ObjectLoader: Undefined geometry", bf);
      }
      return bg[bf];
    }
    function bG(bf) {
      if (bf !== undefined) {
        if (Array.isArray(bf)) {
          for (var bg = [], bi = 0, bF = bf.length; bi < bF; bi++) {
            var bG = bf[bi];
            if (bh[bG] === undefined) {
              console.warn("THREE.ObjectLoader: Undefined material", bG);
            }
            bg.push(bh[bG]);
          }
          return bg;
        }
        if (bh[bf] === undefined) {
          console.warn("THREE.ObjectLoader: Undefined material", bf);
        }
        return bh[bf];
      }
    }
    switch (bf.type) {
      case "Scene":
        bi = new Scene();
        if (bf.background !== undefined && Number.isInteger(bf.background)) {
          bi.background = new Color(bf.background);
        }
        if (bf.fog !== undefined) {
          if (bf.fog.type === "Fog") {
            bi.fog = new Fog(bf.fog.color, bf.fog.near, bf.fog.far);
          } else if (bf.fog.type === "FogExp2") {
            bi.fog = new FogExp2(bf.fog.color, bf.fog.density);
          }
        }
        break;
      case "PerspectiveCamera":
        bi = new PerspectiveCamera(bf.fov, bf.aspect, bf.near, bf.far);
        if (bf.focus !== undefined) {
          bi.focus = bf.focus;
        }
        if (bf.zoom !== undefined) {
          bi.zoom = bf.zoom;
        }
        if (bf.filmGauge !== undefined) {
          bi.filmGauge = bf.filmGauge;
        }
        if (bf.filmOffset !== undefined) {
          bi.filmOffset = bf.filmOffset;
        }
        if (bf.view !== undefined) {
          bi.view = Object.assign({}, bf.view);
        }
        break;
      case "OrthographicCamera":
        bi = new OrthographicCamera(bf.left, bf.right, bf.top, bf.bottom, bf.near, bf.far);
        if (bf.zoom !== undefined) {
          bi.zoom = bf.zoom;
        }
        if (bf.view !== undefined) {
          bi.view = Object.assign({}, bf.view);
        }
        break;
      case "AmbientLight":
        bi = new AmbientLight(bf.color, bf.intensity);
        break;
      case "DirectionalLight":
        bi = new DirectionalLight(bf.color, bf.intensity);
        break;
      case "PointLight":
        bi = new PointLight(bf.color, bf.intensity, bf.distance, bf.decay);
        break;
      case "RectAreaLight":
        bi = new RectAreaLight(bf.color, bf.intensity, bf.width, bf.height);
        break;
      case "SpotLight":
        bi = new SpotLight(bf.color, bf.intensity, bf.distance, bf.angle, bf.penumbra, bf.decay);
        break;
      case "HemisphereLight":
        bi = new HemisphereLight(bf.color, bf.groundColor, bf.intensity);
        break;
      case "SkinnedMesh":
        console.warn("THREE.ObjectLoader.parseObject() does not support SkinnedMesh yet.");
      case "Mesh":
        var bH = bF(bf.geometry);
        var bI = bG(bf.material);
        bi = bH.bones && bH.bones.length > 0 ? new SkinnedMesh(bH, bI) : new Mesh(bH, bI);
        if (bf.drawMode !== undefined) {
          bi.setDrawMode(bf.drawMode);
        }
        break;
      case "LOD":
        bi = new LOD();
        break;
      case "Line":
        bi = new Line(bF(bf.geometry), bG(bf.material), bf.mode);
        break;
      case "LineLoop":
        bi = new LineLoop(bF(bf.geometry), bG(bf.material));
        break;
      case "LineSegments":
        bi = new LineSegments(bF(bf.geometry), bG(bf.material));
        break;
      case "PointCloud":
      case "Points":
        bi = new Points(bF(bf.geometry), bG(bf.material));
        break;
      case "Sprite":
        bi = new Sprite(bG(bf.material));
        break;
      case "Group":
        bi = new Group();
        break;
      default:
        bi = new Object3D();
    }
    bi.uuid = bf.uuid;
    if (bf.name !== undefined) {
      bi.name = bf.name;
    }
    if (bf.matrix !== undefined) {
      bi.matrix.fromArray(bf.matrix);
      if (bf.matrixAutoUpdate !== undefined) {
        bi.matrixAutoUpdate = bf.matrixAutoUpdate;
      }
      if (bi.matrixAutoUpdate) {
        bi.matrix.decompose(bi.position, bi.quaternion, bi.scale);
      }
    } else {
      if (bf.position !== undefined) {
        bi.position.fromArray(bf.position);
      }
      if (bf.rotation !== undefined) {
        bi.rotation.fromArray(bf.rotation);
      }
      if (bf.quaternion !== undefined) {
        bi.quaternion.fromArray(bf.quaternion);
      }
      if (bf.scale !== undefined) {
        bi.scale.fromArray(bf.scale);
      }
    }
    if (bf.castShadow !== undefined) {
      bi.castShadow = bf.castShadow;
    }
    if (bf.receiveShadow !== undefined) {
      bi.receiveShadow = bf.receiveShadow;
    }
    if (bf.shadow) {
      if (bf.shadow.bias !== undefined) {
        bi.shadow.bias = bf.shadow.bias;
      }
      if (bf.shadow.radius !== undefined) {
        bi.shadow.radius = bf.shadow.radius;
      }
      if (bf.shadow.mapSize !== undefined) {
        bi.shadow.mapSize.fromArray(bf.shadow.mapSize);
      }
      if (bf.shadow.camera !== undefined) {
        bi.shadow.camera = this.parseObject(bf.shadow.camera);
      }
    }
    if (bf.visible !== undefined) {
      bi.visible = bf.visible;
    }
    if (bf.frustumCulled !== undefined) {
      bi.frustumCulled = bf.frustumCulled;
    }
    if (bf.renderOrder !== undefined) {
      bi.renderOrder = bf.renderOrder;
    }
    if (bf.userData !== undefined) {
      bi.userData = bf.userData;
    }
    if (bf.layers !== undefined) {
      bi.layers.mask = bf.layers;
    }
    if (bf.children !== undefined) {
      for (var bJ = bf.children, bK = 0; bK < bJ.length; bK++) {
        bi.add(this.parseObject(bJ[bK], bg, bh));
      }
    }
    if (bf.type === "LOD") {
      for (var bL = bf.levels, bM = 0; bM < bL.length; bM++) {
        var bN = bL[bM];
        var bO = bi.getObjectByProperty("uuid", bN.object);
        if (bO !== undefined) {
          bi.addLevel(bO, bN.distance);
        }
      }
    }
    return bi;
  }
});
var aPo;
var aPp;
var aPq;
var aPr;
var aPs;
var aPt = {
  UVMapping: UVMapping,
  CubeReflectionMapping: CubeReflectionMapping,
  CubeRefractionMapping: CubeRefractionMapping,
  EquirectangularReflectionMapping: EquirectangularReflectionMapping,
  EquirectangularRefractionMapping: EquirectangularRefractionMapping,
  SphericalReflectionMapping: SphericalReflectionMapping,
  CubeUVReflectionMapping: CubeUVReflectionMapping,
  CubeUVRefractionMapping: CubeUVRefractionMapping
};
var aPu = {
  RepeatWrapping: RepeatWrapping,
  ClampToEdgeWrapping: ClampToEdgeWrapping,
  MirroredRepeatWrapping: MirroredRepeatWrapping
};
var aPv = {
  NearestFilter: NearestFilter,
  NearestMipMapNearestFilter: NearestMipMapNearestFilter,
  NearestMipMapLinearFilter: NearestMipMapLinearFilter,
  LinearFilter: LinearFilter,
  LinearMipMapNearestFilter: LinearMipMapNearestFilter,
  LinearMipMapLinearFilter: LinearMipMapLinearFilter
};
export function ImageBitmapLoader(bf) {
  if (typeof createImageBitmap == "undefined") {
    console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported.");
  }
  if (typeof fetch == "undefined") {
    console.warn("THREE.ImageBitmapLoader: fetch() not supported.");
  }
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
  this.options = undefined;
}
export function ShapePath() {
  this.type = "ShapePath";
  this.color = new Color();
  this.subPaths = [];
  this.currentPath = null;
}
export function Font(bf) {
  this.type = "Font";
  this.data = bf;
}
function aPB(bf, bg, bh, bi, bF) {
  var bG = bF.glyphs[bf] || bF.glyphs["?"];
  if (bG) {
    var bH;
    var bI;
    var bJ;
    var bK;
    var bL;
    var bM;
    var bN;
    var bO;
    var bP = new ShapePath();
    if (bG.o) {
      for (var bQ = bG._cachedOutline ||= bG.o.split(" "), bR = 0, bS = bQ.length; bR < bS;) {
        switch (bQ[bR++]) {
          case "m":
            bH = bQ[bR++] * bg + bh;
            bI = bQ[bR++] * bg + bi;
            bP.moveTo(bH, bI);
            break;
          case "l":
            bH = bQ[bR++] * bg + bh;
            bI = bQ[bR++] * bg + bi;
            bP.lineTo(bH, bI);
            break;
          case "q":
            bJ = bQ[bR++] * bg + bh;
            bK = bQ[bR++] * bg + bi;
            bL = bQ[bR++] * bg + bh;
            bM = bQ[bR++] * bg + bi;
            bP.quadraticCurveTo(bL, bM, bJ, bK);
            break;
          case "b":
            bJ = bQ[bR++] * bg + bh;
            bK = bQ[bR++] * bg + bi;
            bL = bQ[bR++] * bg + bh;
            bM = bQ[bR++] * bg + bi;
            bN = bQ[bR++] * bg + bh;
            bO = bQ[bR++] * bg + bi;
            bP.bezierCurveTo(bL, bM, bN, bO, bJ, bK);
        }
      }
    }
    return {
      offsetX: bG.ha * bg,
      path: bP
    };
  }
}
export function FontLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function Loader() {}
ImageBitmapLoader.prototype = {
  constructor: ImageBitmapLoader,
  setOptions: function (bf) {
    this.options = bf;
    return this;
  },
  load: function (bf, bg, bh, bi) {
    if (bf === undefined) {
      bf = "";
    }
    if (this.path !== undefined) {
      bf = this.path + bf;
    }
    bf = this.manager.resolveURL(bf);
    var bF = this;
    var bG = Cache.get(bf);
    if (bG !== undefined) {
      bF.manager.itemStart(bf);
      setTimeout(function () {
        if (bg) {
          bg(bG);
        }
        bF.manager.itemEnd(bf);
      }, 0);
      return bG;
    }
    fetch(bf).then(function (bf) {
      return bf.blob();
    }).then(function (bf) {
      if (bF.options === undefined) {
        return createImageBitmap(bf);
      } else {
        return createImageBitmap(bf, bF.options);
      }
    }).then(function (bh) {
      Cache.add(bf, bh);
      if (bg) {
        bg(bh);
      }
      bF.manager.itemEnd(bf);
    }).catch(function (bg) {
      if (bi) {
        bi(bg);
      }
      bF.manager.itemError(bf);
      bF.manager.itemEnd(bf);
    });
    bF.manager.itemStart(bf);
  },
  setCrossOrigin: function () {
    return this;
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
};
Object.assign(ShapePath.prototype, {
  moveTo: function (bf, bg) {
    this.currentPath = new Path();
    this.subPaths.push(this.currentPath);
    this.currentPath.moveTo(bf, bg);
  },
  lineTo: function (bf, bg) {
    this.currentPath.lineTo(bf, bg);
  },
  quadraticCurveTo: function (bf, bg, bh, bi) {
    this.currentPath.quadraticCurveTo(bf, bg, bh, bi);
  },
  bezierCurveTo: function (bf, bg, bh, bi, bF, bG) {
    this.currentPath.bezierCurveTo(bf, bg, bh, bi, bF, bG);
  },
  splineThru: function (bf) {
    this.currentPath.splineThru(bf);
  },
  toShapes: function (bf, bg) {
    function bh(bf) {
      for (var bg = [], bh = 0, bi = bf.length; bh < bi; bh++) {
        var bF = bf[bh];
        var bG = new Shape();
        bG.curves = bF.curves;
        bg.push(bG);
      }
      return bg;
    }
    function bi(bf, bg) {
      for (var bh = bg.length, bi = false, bF = bh - 1, bG = 0; bG < bh; bF = bG++) {
        var bH = bg[bF];
        var bI = bg[bG];
        var bJ = bI.x - bH.x;
        var bK = bI.y - bH.y;
        if (Math.abs(bK) > Number.EPSILON) {
          if (bK < 0) {
            bH = bg[bG];
            bJ = -bJ;
            bI = bg[bF];
            bK = -bK;
          }
          if (bf.y < bH.y || bf.y > bI.y) {
            continue;
          }
          if (bf.y === bH.y) {
            if (bf.x === bH.x) {
              return true;
            }
          } else {
            var bL = bK * (bf.x - bH.x) - bJ * (bf.y - bH.y);
            if (bL === 0) {
              return true;
            }
            if (bL < 0) {
              continue;
            }
            bi = !bi;
          }
        } else {
          if (bf.y !== bH.y) {
            continue;
          }
          if (bI.x <= bf.x && bf.x <= bH.x || bH.x <= bf.x && bf.x <= bI.x) {
            return true;
          }
        }
      }
      return bi;
    }
    var bF = ShapeUtils.isClockWise;
    var bG = this.subPaths;
    if (bG.length === 0) {
      return [];
    }
    if (bg === true) {
      return bh(bG);
    }
    var bH;
    var bI;
    var bJ;
    var bK = [];
    if (bG.length === 1) {
      bI = bG[0];
      (bJ = new Shape()).curves = bI.curves;
      bK.push(bJ);
      return bK;
    }
    var bL = !bF(bG[0].getPoints());
    bL = bf ? !bL : bL;
    var bM;
    var bN;
    var bO = [];
    var bP = [];
    var bQ = [];
    var bR = 0;
    bP[bR] = undefined;
    bQ[bR] = [];
    for (var bS = 0, bT = bG.length; bS < bT; bS++) {
      bH = bF(bM = (bI = bG[bS]).getPoints());
      if (bH = bf ? !bH : bH) {
        if (!bL && bP[bR]) {
          bR++;
        }
        bP[bR] = {
          s: new Shape(),
          p: bM
        };
        bP[bR].s.curves = bI.curves;
        if (bL) {
          bR++;
        }
        bQ[bR] = [];
      } else {
        bQ[bR].push({
          h: bI,
          p: bM[0]
        });
      }
    }
    if (!bP[0]) {
      return bh(bG);
    }
    if (bP.length > 1) {
      for (var bU = false, bV = [], bW = 0, bX = bP.length; bW < bX; bW++) {
        bO[bW] = [];
      }
      bW = 0;
      bX = bP.length;
      for (; bW < bX; bW++) {
        for (var bY = bQ[bW], bZ = 0; bZ < bY.length; bZ++) {
          for (var c0 = bY[bZ], c1 = true, c2 = 0; c2 < bP.length; c2++) {
            if (bi(c0.p, bP[c2].p)) {
              if (bW !== c2) {
                bV.push({
                  froms: bW,
                  tos: c2,
                  hole: bZ
                });
              }
              if (c1) {
                c1 = false;
                bO[c2].push(c0);
              } else {
                bU = true;
              }
            }
          }
          if (c1) {
            bO[bW].push(c0);
          }
        }
      }
      if (bV.length > 0) {
        if (!bU) {
          bQ = bO;
        }
      }
    }
    bS = 0;
    for (var c3 = bP.length; bS < c3; bS++) {
      bJ = bP[bS].s;
      bK.push(bJ);
      for (var c4 = 0, c5 = (bN = bQ[bS]).length; c4 < c5; c4++) {
        bJ.holes.push(bN[c4].h);
      }
    }
    return bK;
  }
});
Object.assign(Font.prototype, {
  isFont: true,
  generateShapes: function (bf, bg) {
    if (bg === undefined) {
      bg = 100;
    }
    for (var bh = [], bi = function (bf, bg, bh) {
        for (var bi = Array.from ? Array.from(bf) : String(bf).split(""), bF = bg / bh.resolution, bG = (bh.boundingBox.yMax - bh.boundingBox.yMin + bh.underlineThickness) * bF, bH = [], bI = 0, bJ = 0, bK = 0; bK < bi.length; bK++) {
          var bL = bi[bK];
          if (bL === "\n") {
            bI = 0;
            bJ -= bG;
          } else {
            var bM = aPB(bL, bF, bI, bJ, bh);
            bI += bM.offsetX;
            bH.push(bM.path);
          }
        }
        return bH;
      }(bf, bg, this.data), bF = 0, bG = bi.length; bF < bG; bF++) {
      Array.prototype.push.apply(bh, bi[bF].toShapes());
    }
    return bh;
  }
});
Object.assign(FontLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = this;
    var bG = new FileLoader(this.manager);
    bG.setPath(this.path);
    bG.load(bf, function (bf) {
      var bh;
      try {
        bh = JSON.parse(bf);
      } catch (aRA) {
        console.warn("THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.");
        bh = JSON.parse(bf.substring(65, bf.length - 2));
      }
      var bi = bF.parse(bh);
      if (bg) {
        bg(bi);
      }
    }, bh, bi);
  },
  parse: function (bf) {
    return new Font(bf);
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Loader.Handlers = {
  handlers: [],
  add: function (bf, bg) {
    this.handlers.push(bf, bg);
  },
  get: function (bf) {
    for (var bg = this.handlers, bh = 0, bi = bg.length; bh < bi; bh += 2) {
      var bF = bg[bh];
      var bG = bg[bh + 1];
      if (bF.test(bf)) {
        return bG;
      }
    }
    return null;
  }
};
Object.assign(Loader.prototype, {
  crossOrigin: "anonymous",
  onLoadStart: function () {},
  onLoadProgress: function () {},
  onLoadComplete: function () {},
  initMaterials: function (bf, bg, bh) {
    for (var bi = [], bF = 0; bF < bf.length; ++bF) {
      bi[bF] = this.createMaterial(bf[bF], bg, bh);
    }
    return bi;
  },
  createMaterial: (aPo = {
    NoBlending: NoBlending,
    NormalBlending: NormalBlending,
    AdditiveBlending: AdditiveBlending,
    SubtractiveBlending: SubtractiveBlending,
    MultiplyBlending: MultiplyBlending,
    CustomBlending: CustomBlending
  }, aPp = new Color(), aPq = new TextureLoader(), aPr = new MaterialLoader(), function (bf, bg, bh) {
    var bi = {};
    function bF(bf, bF, bG, bH, bI) {
      var bJ;
      var bK = bg + bf;
      var bL = Loader.Handlers.get(bK);
      if (bL !== null) {
        bJ = bL.load(bK);
      } else {
        aPq.setCrossOrigin(bh);
        bJ = aPq.load(bK);
      }
      if (bF !== undefined) {
        bJ.repeat.fromArray(bF);
        if (bF[0] !== 1) {
          bJ.wrapS = RepeatWrapping;
        }
        if (bF[1] !== 1) {
          bJ.wrapT = RepeatWrapping;
        }
      }
      if (bG !== undefined) {
        bJ.offset.fromArray(bG);
      }
      if (bH !== undefined) {
        if (bH[0] === "repeat") {
          bJ.wrapS = RepeatWrapping;
        }
        if (bH[0] === "mirror") {
          bJ.wrapS = MirroredRepeatWrapping;
        }
        if (bH[1] === "repeat") {
          bJ.wrapT = RepeatWrapping;
        }
        if (bH[1] === "mirror") {
          bJ.wrapT = MirroredRepeatWrapping;
        }
      }
      if (bI !== undefined) {
        bJ.anisotropy = bI;
      }
      var bM = Math.generateUUID();
      bi[bM] = bJ;
      return bM;
    }
    var bG = {
      uuid: Math.generateUUID(),
      type: "MeshLambertMaterial"
    };
    for (var bH in bf) {
      var bI = bf[bH];
      switch (bH) {
        case "DbgColor":
        case "DbgIndex":
        case "opticalDensity":
        case "illumination":
          break;
        case "DbgName":
          bG.name = bI;
          break;
        case "blending":
          bG.blending = aPo[bI];
          break;
        case "colorAmbient":
        case "mapAmbient":
          console.warn("THREE.Loader.createMaterial:", bH, "is no longer supported.");
          break;
        case "colorDiffuse":
          bG.color = aPp.fromArray(bI).getHex();
          break;
        case "colorSpecular":
          bG.specular = aPp.fromArray(bI).getHex();
          break;
        case "colorEmissive":
          bG.emissive = aPp.fromArray(bI).getHex();
          break;
        case "specularCoef":
          bG.shininess = bI;
          break;
        case "shading":
          if (bI.toLowerCase() === "basic") {
            bG.type = "MeshBasicMaterial";
          }
          if (bI.toLowerCase() === "phong") {
            bG.type = "MeshPhongMaterial";
          }
          if (bI.toLowerCase() === "standard") {
            bG.type = "MeshStandardMaterial";
          }
          break;
        case "mapDiffuse":
          bG.map = bF(bI, bf.mapDiffuseRepeat, bf.mapDiffuseOffset, bf.mapDiffuseWrap, bf.mapDiffuseAnisotropy);
          break;
        case "mapDiffuseRepeat":
        case "mapDiffuseOffset":
        case "mapDiffuseWrap":
        case "mapDiffuseAnisotropy":
          break;
        case "mapEmissive":
          bG.emissiveMap = bF(bI, bf.mapEmissiveRepeat, bf.mapEmissiveOffset, bf.mapEmissiveWrap, bf.mapEmissiveAnisotropy);
          break;
        case "mapEmissiveRepeat":
        case "mapEmissiveOffset":
        case "mapEmissiveWrap":
        case "mapEmissiveAnisotropy":
          break;
        case "mapLight":
          bG.lightMap = bF(bI, bf.mapLightRepeat, bf.mapLightOffset, bf.mapLightWrap, bf.mapLightAnisotropy);
          break;
        case "mapLightRepeat":
        case "mapLightOffset":
        case "mapLightWrap":
        case "mapLightAnisotropy":
          break;
        case "mapAO":
          bG.aoMap = bF(bI, bf.mapAORepeat, bf.mapAOOffset, bf.mapAOWrap, bf.mapAOAnisotropy);
          break;
        case "mapAORepeat":
        case "mapAOOffset":
        case "mapAOWrap":
        case "mapAOAnisotropy":
          break;
        case "mapBump":
          bG.bumpMap = bF(bI, bf.mapBumpRepeat, bf.mapBumpOffset, bf.mapBumpWrap, bf.mapBumpAnisotropy);
          break;
        case "mapBumpScale":
          bG.bumpScale = bI;
          break;
        case "mapBumpRepeat":
        case "mapBumpOffset":
        case "mapBumpWrap":
        case "mapBumpAnisotropy":
          break;
        case "mapNormal":
          bG.normalMap = bF(bI, bf.mapNormalRepeat, bf.mapNormalOffset, bf.mapNormalWrap, bf.mapNormalAnisotropy);
          break;
        case "mapNormalFactor":
          bG.normalScale = bI;
          break;
        case "mapNormalRepeat":
        case "mapNormalOffset":
        case "mapNormalWrap":
        case "mapNormalAnisotropy":
          break;
        case "mapSpecular":
          bG.specularMap = bF(bI, bf.mapSpecularRepeat, bf.mapSpecularOffset, bf.mapSpecularWrap, bf.mapSpecularAnisotropy);
          break;
        case "mapSpecularRepeat":
        case "mapSpecularOffset":
        case "mapSpecularWrap":
        case "mapSpecularAnisotropy":
          break;
        case "mapMetalness":
          bG.metalnessMap = bF(bI, bf.mapMetalnessRepeat, bf.mapMetalnessOffset, bf.mapMetalnessWrap, bf.mapMetalnessAnisotropy);
          break;
        case "mapMetalnessRepeat":
        case "mapMetalnessOffset":
        case "mapMetalnessWrap":
        case "mapMetalnessAnisotropy":
          break;
        case "mapRoughness":
          bG.roughnessMap = bF(bI, bf.mapRoughnessRepeat, bf.mapRoughnessOffset, bf.mapRoughnessWrap, bf.mapRoughnessAnisotropy);
          break;
        case "mapRoughnessRepeat":
        case "mapRoughnessOffset":
        case "mapRoughnessWrap":
        case "mapRoughnessAnisotropy":
          break;
        case "mapAlpha":
          bG.alphaMap = bF(bI, bf.mapAlphaRepeat, bf.mapAlphaOffset, bf.mapAlphaWrap, bf.mapAlphaAnisotropy);
          break;
        case "mapAlphaRepeat":
        case "mapAlphaOffset":
        case "mapAlphaWrap":
        case "mapAlphaAnisotropy":
          break;
        case "flipSided":
          bG.side = BackSide;
          break;
        case "doubleSided":
          bG.side = DoubleSide;
          break;
        case "transparency":
          console.warn("THREE.Loader.createMaterial: transparency has been renamed to opacity");
          bG.opacity = bI;
          break;
        case "depthTest":
        case "depthWrite":
        case "colorWrite":
        case "opacity":
        case "reflectivity":
        case "transparent":
        case "visible":
        case "wireframe":
          bG[bH] = bI;
          break;
        case "vertexColors":
          if (bI === true) {
            bG.vertexColors = VertexColors;
          }
          if (bI === "face") {
            bG.vertexColors = FaceColors;
          }
          break;
        default:
          console.error("THREE.Loader.createMaterial: Unsupported", bH, bI);
      }
    }
    if (bG.type === "MeshBasicMaterial") {
      delete bG.emissive;
    }
    if (bG.type !== "MeshPhongMaterial") {
      delete bG.specular;
    }
    if (bG.opacity < 1) {
      bG.transparent = true;
    }
    aPr.setTextures(bi);
    return aPr.parse(bG);
  })
});
export var AudioContext = {
  getContext: function () {
    if (aPs === undefined) {
      aPs = new (window.AudioContext || window.webkitAudioContext)();
    }
    return aPs;
  },
  setContext: function (bf) {
    aPs = bf;
  }
};
export function AudioLoader(bf) {
  this.manager = bf !== undefined ? bf : DefaultLoadingManager;
}
export function SphericalHarmonics3() {
  this.coefficients = [];
  for (var bf = 0; bf < 9; bf++) {
    this.coefficients.push(new Vector3());
  }
}
export function LightProbe(bf, bg) {
  Light.call(this, undefined, bg);
  this.sh = bf !== undefined ? bf : new SphericalHarmonics3();
}
export function HemisphereLightProbe(bf, bg, bh) {
  LightProbe.call(this, undefined, bh);
  var bi = new Color().set(bf);
  var bF = new Color().set(bg);
  var bG = new Vector3(bi.r, bi.g, bi.b);
  var bH = new Vector3(bF.r, bF.g, bF.b);
  var bI = Math.sqrt(Math.PI);
  var bJ = bI * Math.sqrt(0.75);
  this.sh.coefficients[0].copy(bG).add(bH).multiplyScalar(bI);
  this.sh.coefficients[1].copy(bG).sub(bH).multiplyScalar(bJ);
}
export function AmbientLightProbe(bf, bg) {
  LightProbe.call(this, undefined, bg);
  var bh = new Color().set(bf);
  this.sh.coefficients[0].set(bh.r, bh.g, bh.b).multiplyScalar(Math.sqrt(Math.PI) * 2);
}
export function StereoCamera() {
  this.type = "StereoCamera";
  this.aspect = 1;
  this.eyeSep = 0.064;
  this.cameraL = new PerspectiveCamera();
  this.cameraL.layers.enable(1);
  this.cameraL.matrixAutoUpdate = false;
  this.cameraR = new PerspectiveCamera();
  this.cameraR.layers.enable(2);
  this.cameraR.matrixAutoUpdate = false;
}
Object.assign(AudioLoader.prototype, {
  load: function (bf, bg, bh, bi) {
    var bF = new FileLoader(this.manager);
    bF.setResponseType("arraybuffer");
    bF.setPath(this.path);
    bF.load(bf, function (bf) {
      var bh = bf.slice(0);
      AudioContext.getContext().decodeAudioData(bh, function (bf) {
        bg(bf);
      });
    }, bh, bi);
  },
  setPath: function (bf) {
    this.path = bf;
    return this;
  }
});
Object.assign(SphericalHarmonics3.prototype, {
  isSphericalHarmonics3: true,
  set: function (bf) {
    for (var bg = 0; bg < 9; bg++) {
      this.coefficients[bg].copy(bf[bg]);
    }
    return this;
  },
  zero: function () {
    for (var bf = 0; bf < 9; bf++) {
      this.coefficients[bf].set(0, 0, 0);
    }
    return this;
  },
  getAt: function (bf, bg) {
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    var bG = this.coefficients;
    bg = bG[0] * 0.282095;
    bg += bG[1] * 0.488603 * bi;
    bg += bG[2] * 0.488603 * bF;
    bg += bG[3] * 0.488603 * bh;
    bg += bG[4] * 1.092548 * (bh * bi);
    bg += bG[5] * 1.092548 * (bi * bF);
    bg += bG[6] * 0.315392 * (bF * 3 * bF - 1);
    bg += bG[7] * 1.092548 * (bh * bF);
    return bg += bG[8] * 0.546274 * (bh * bh - bi * bi);
  },
  getIrradianceAt: function (bf, bg) {
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    var bG = this.coefficients;
    bg = bG[0] * 0.886227;
    bg += bG[1] * 2 * 0.511664 * bi;
    bg += bG[2] * 2 * 0.511664 * bF;
    bg += bG[3] * 2 * 0.511664 * bh;
    bg += bG[4] * 2 * 0.429043 * bh * bi;
    bg += bG[5] * 2 * 0.429043 * bi * bF;
    bg += bG[6] * (bF * 0.743125 * bF - 0.247708);
    bg += bG[7] * 2 * 0.429043 * bh * bF;
    return bg += bG[8] * 0.429043 * (bh * bh - bi * bi);
  },
  add: function (bf) {
    for (var bg = 0; bg < 9; bg++) {
      this.coefficients[bg].add(bf.coefficients[bg]);
    }
    return this;
  },
  scale: function (bf) {
    for (var bg = 0; bg < 9; bg++) {
      this.coefficients[bg].multiplyScalar(bf);
    }
    return this;
  },
  lerp: function (bf, bg) {
    for (var bh = 0; bh < 9; bh++) {
      this.coefficients[bh].lerp(bf.coefficients[bh], bg);
    }
    return this;
  },
  equals: function (bf) {
    for (var bg = 0; bg < 9; bg++) {
      if (!this.coefficients[bg].equals(bf.coefficients[bg])) {
        return false;
      }
    }
    return true;
  },
  copy: function (bf) {
    return this.set(bf.coefficients);
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  fromArray: function (bf) {
    for (var bg = this.coefficients, bh = 0; bh < 9; bh++) {
      bg[bh].fromArray(bf, bh * 3);
    }
    return this;
  },
  toArray: function () {
    for (var bf = [], bg = this.coefficients, bh = 0; bh < 9; bh++) {
      bg[bh].toArray(bf, bh * 3);
    }
    return bf;
  }
});
Object.assign(SphericalHarmonics3, {
  getBasisAt: function (bf, bg) {
    var bh = bf.x;
    var bi = bf.y;
    var bF = bf.z;
    bg[0] = 0.282095;
    bg[1] = bi * 0.488603;
    bg[2] = bF * 0.488603;
    bg[3] = bh * 0.488603;
    bg[4] = bh * 1.092548 * bi;
    bg[5] = bi * 1.092548 * bF;
    bg[6] = (bF * 3 * bF - 1) * 0.315392;
    bg[7] = bh * 1.092548 * bF;
    bg[8] = (bh * bh - bi * bi) * 0.546274;
  }
});
LightProbe.prototype = Object.assign(Object.create(Light.prototype), {
  constructor: LightProbe,
  isLightProbe: true,
  copy: function (bf) {
    Light.prototype.copy.call(this, bf);
    this.sh.copy(bf.sh);
    this.intensity = bf.intensity;
    return this;
  },
  toJSON: function (bf) {
    return Light.prototype.toJSON.call(this, bf);
  }
});
HemisphereLightProbe.prototype = Object.assign(Object.create(LightProbe.prototype), {
  constructor: HemisphereLightProbe,
  isHemisphereLightProbe: true,
  copy: function (bf) {
    LightProbe.prototype.copy.call(this, bf);
    return this;
  },
  toJSON: function (bf) {
    return LightProbe.prototype.toJSON.call(this, bf);
  }
});
AmbientLightProbe.prototype = Object.assign(Object.create(LightProbe.prototype), {
  constructor: AmbientLightProbe,
  isAmbientLightProbe: true,
  copy: function (bf) {
    LightProbe.prototype.copy.call(this, bf);
    return this;
  },
  toJSON: function (bf) {
    return LightProbe.prototype.toJSON.call(this, bf);
  }
});
Object.assign(StereoCamera.prototype, {
  update: function () {
    var bf;
    var bg;
    var bh;
    var bi;
    var bF;
    var bG;
    var bH;
    var bI;
    var bJ = new Matrix4();
    var bK = new Matrix4();
    return function (bL) {
      if (bf !== this || bg !== bL.focus || bh !== bL.fov || bi !== bL.aspect * this.aspect || bF !== bL.near || bG !== bL.far || bH !== bL.zoom || bI !== this.eyeSep) {
        bf = this;
        bg = bL.focus;
        bh = bL.fov;
        bi = bL.aspect * this.aspect;
        bF = bL.near;
        bG = bL.far;
        bH = bL.zoom;
        var bM;
        var bN;
        var bO = bL.projectionMatrix.clone();
        var bP = (bI = this.eyeSep / 2) * bF / bg;
        var bQ = bF * Math.tan(Math.DEG2RAD * bh * 0.5) / bH;
        bK.elements[12] = -bI;
        bJ.elements[12] = bI;
        bM = -bQ * bi + bP;
        bN = bQ * bi + bP;
        bO.elements[0] = bF * 2 / (bN - bM);
        bO.elements[8] = (bN + bM) / (bN - bM);
        this.cameraL.projectionMatrix.copy(bO);
        bM = -bQ * bi - bP;
        bN = bQ * bi - bP;
        bO.elements[0] = bF * 2 / (bN - bM);
        bO.elements[8] = (bN + bM) / (bN - bM);
        this.cameraR.projectionMatrix.copy(bO);
      }
      this.cameraL.matrixWorld.copy(bL.matrixWorld).multiply(bK);
      this.cameraR.matrixWorld.copy(bL.matrixWorld).multiply(bJ);
    };
  }()
});
var aTB = 90;
var aTC = 1;
export function CubeCamera(bf, bg, bh, bi) {
  Object3D.call(this);
  this.type = "CubeCamera";
  var bF = new PerspectiveCamera(aTB, aTC, bf, bg);
  bF.up.set(0, -1, 0);
  bF.lookAt(new Vector3(1, 0, 0));
  this.add(bF);
  var bG = new PerspectiveCamera(aTB, aTC, bf, bg);
  bG.up.set(0, -1, 0);
  bG.lookAt(new Vector3(-1, 0, 0));
  this.add(bG);
  var bH = new PerspectiveCamera(aTB, aTC, bf, bg);
  bH.up.set(0, 0, 1);
  bH.lookAt(new Vector3(0, 1, 0));
  this.add(bH);
  var bI = new PerspectiveCamera(aTB, aTC, bf, bg);
  bI.up.set(0, 0, -1);
  bI.lookAt(new Vector3(0, -1, 0));
  this.add(bI);
  var bJ = new PerspectiveCamera(aTB, aTC, bf, bg);
  bJ.up.set(0, -1, 0);
  bJ.lookAt(new Vector3(0, 0, 1));
  this.add(bJ);
  var bK = new PerspectiveCamera(aTB, aTC, bf, bg);
  bK.up.set(0, -1, 0);
  bK.lookAt(new Vector3(0, 0, -1));
  this.add(bK);
  bi = bi || {
    format: RGBFormat,
    magFilter: LinearFilter,
    minFilter: LinearFilter
  };
  this.renderTarget = new WebGLRenderTargetCube(bh, bh, bi);
  this.renderTarget.texture.name = "CubeCamera";
  this.update = function (bf, bg) {
    if (this.parent === null) {
      this.updateMatrixWorld();
    }
    var bh = bf.getRenderTarget();
    var bi = this.renderTarget;
    var bL = bi.texture.generateMipmaps;
    bi.texture.generateMipmaps = false;
    bf.setRenderTarget(bi, 0);
    bf.render(bg, bF);
    bf.setRenderTarget(bi, 1);
    bf.render(bg, bG);
    bf.setRenderTarget(bi, 2);
    bf.render(bg, bH);
    bf.setRenderTarget(bi, 3);
    bf.render(bg, bI);
    bf.setRenderTarget(bi, 4);
    bf.render(bg, bJ);
    bi.texture.generateMipmaps = bL;
    bf.setRenderTarget(bi, 5);
    bf.render(bg, bK);
    bf.setRenderTarget(bh);
  };
  this.clear = function (bf, bg, bh, bi) {
    for (var bF = bf.getRenderTarget(), bG = this.renderTarget, bH = 0; bH < 6; bH++) {
      bf.setRenderTarget(bG, bH);
      bf.clear(bg, bh, bi);
    }
    bf.setRenderTarget(bF);
  };
}
export function Clock(bf) {
  this.autoStart = bf === undefined || bf;
  this.startTime = 0;
  this.oldTime = 0;
  this.elapsedTime = 0;
  this.running = false;
}
export function AudioListener() {
  Object3D.call(this);
  this.type = "AudioListener";
  this.context = AudioContext.getContext();
  this.gain = this.context.createGain();
  this.gain.connect(this.context.destination);
  this.filter = null;
  this.timeDelta = 0;
}
export function Audio(bf) {
  Object3D.call(this);
  this.type = "Audio";
  this.listener = bf;
  this.context = bf.context;
  this.gain = this.context.createGain();
  this.gain.connect(bf.getInput());
  this.autoplay = false;
  this.buffer = null;
  this.detune = 0;
  this.loop = false;
  this.startTime = 0;
  this.offset = 0;
  this.playbackRate = 1;
  this.isPlaying = false;
  this.hasPlaybackControl = true;
  this.sourceType = "empty";
  this.filters = [];
}
export function PositionalAudio(bf) {
  Audio.call(this, bf);
  this.panner = this.context.createPanner();
  this.panner.panningModel = "HRTF";
  this.panner.connect(this.gain);
}
export function AudioAnalyser(bf, bg) {
  this.analyser = bf.context.createAnalyser();
  this.analyser.fftSize = bg !== undefined ? bg : 2048;
  this.data = new Uint8Array(this.analyser.frequencyBinCount);
  bf.getOutput().connect(this.analyser);
}
export function PropertyMixer(bf, bg, bh) {
  this.binding = bf;
  this.valueSize = bh;
  var bi;
  var bF = Float64Array;
  switch (bg) {
    case "quaternion":
      bi = this._slerp;
      break;
    case "string":
    case "bool":
      bF = Array;
      bi = this._select;
      break;
    default:
      bi = this._lerp;
  }
  this.buffer = new bF(bh * 4);
  this._mixBufferRegion = bi;
  this.cumulativeWeight = 0;
  this.useCount = 0;
  this.referenceCount = 0;
}
CubeCamera.prototype = Object.create(Object3D.prototype);
CubeCamera.prototype.constructor = CubeCamera;
Object.assign(Clock.prototype, {
  start: function () {
    this.startTime = (typeof performance == "undefined" ? Date : performance).now();
    this.oldTime = this.startTime;
    this.elapsedTime = 0;
    this.running = true;
  },
  stop: function () {
    this.getElapsedTime();
    this.running = false;
    this.autoStart = false;
  },
  getElapsedTime: function () {
    this.getDelta();
    return this.elapsedTime;
  },
  getDelta: function () {
    var bf = 0;
    if (this.autoStart && !this.running) {
      this.start();
      return 0;
    }
    if (this.running) {
      var bg = (typeof performance == "undefined" ? Date : performance).now();
      bf = (bg - this.oldTime) / 1000;
      this.oldTime = bg;
      this.elapsedTime += bf;
    }
    return bf;
  }
});
AudioListener.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: AudioListener,
  getInput: function () {
    return this.gain;
  },
  removeFilter: function () {
    if (this.filter !== null) {
      this.gain.disconnect(this.filter);
      this.filter.disconnect(this.context.destination);
      this.gain.connect(this.context.destination);
      this.filter = null;
    }
    return this;
  },
  getFilter: function () {
    return this.filter;
  },
  setFilter: function (bf) {
    if (this.filter !== null) {
      this.gain.disconnect(this.filter);
      this.filter.disconnect(this.context.destination);
    } else {
      this.gain.disconnect(this.context.destination);
    }
    this.filter = bf;
    this.gain.connect(this.filter);
    this.filter.connect(this.context.destination);
    return this;
  },
  getMasterVolume: function () {
    return this.gain.gain.value;
  },
  setMasterVolume: function (bf) {
    this.gain.gain.setTargetAtTime(bf, this.context.currentTime, 0.01);
    return this;
  },
  updateMatrixWorld: function () {
    var bf = new Vector3();
    var bg = new Quaternion();
    var bh = new Vector3();
    var bi = new Vector3();
    var bF = new Clock();
    return function (bG) {
      Object3D.prototype.updateMatrixWorld.call(this, bG);
      var bH = this.context.listener;
      var bI = this.up;
      this.timeDelta = bF.getDelta();
      this.matrixWorld.decompose(bf, bg, bh);
      bi.set(0, 0, -1).applyQuaternion(bg);
      if (bH.positionX) {
        var bJ = this.context.currentTime + this.timeDelta;
        bH.positionX.linearRampToValueAtTime(bf.x, bJ);
        bH.positionY.linearRampToValueAtTime(bf.y, bJ);
        bH.positionZ.linearRampToValueAtTime(bf.z, bJ);
        bH.forwardX.linearRampToValueAtTime(bi.x, bJ);
        bH.forwardY.linearRampToValueAtTime(bi.y, bJ);
        bH.forwardZ.linearRampToValueAtTime(bi.z, bJ);
        bH.upX.linearRampToValueAtTime(bI.x, bJ);
        bH.upY.linearRampToValueAtTime(bI.y, bJ);
        bH.upZ.linearRampToValueAtTime(bI.z, bJ);
      } else {
        bH.setPosition(bf.x, bf.y, bf.z);
        bH.setOrientation(bi.x, bi.y, bi.z, bI.x, bI.y, bI.z);
      }
    };
  }()
});
Audio.prototype = Object.assign(Object.create(Object3D.prototype), {
  constructor: Audio,
  getOutput: function () {
    return this.gain;
  },
  setNodeSource: function (bf) {
    this.hasPlaybackControl = false;
    this.sourceType = "audioNode";
    this.source = bf;
    this.connect();
    return this;
  },
  setMediaElementSource: function (bf) {
    this.hasPlaybackControl = false;
    this.sourceType = "mediaNode";
    this.source = this.context.createMediaElementSource(bf);
    this.connect();
    return this;
  },
  setBuffer: function (bf) {
    this.buffer = bf;
    this.sourceType = "buffer";
    if (this.autoplay) {
      this.play();
    }
    return this;
  },
  play: function () {
    if (this.isPlaying !== true) {
      if (this.hasPlaybackControl !== false) {
        var bf = this.context.createBufferSource();
        bf.buffer = this.buffer;
        bf.loop = this.loop;
        bf.onended = this.onEnded.bind(this);
        this.startTime = this.context.currentTime;
        bf.start(this.startTime, this.offset);
        this.isPlaying = true;
        this.source = bf;
        this.setDetune(this.detune);
        this.setPlaybackRate(this.playbackRate);
        return this.connect();
      }
      console.warn("THREE.Audio: this Audio has no playback control.");
    } else {
      console.warn("THREE.Audio: Audio is already playing.");
    }
  },
  pause: function () {
    if (this.hasPlaybackControl !== false) {
      if (this.isPlaying === true) {
        this.source.stop();
        this.source.onended = null;
        this.offset += (this.context.currentTime - this.startTime) * this.playbackRate;
        this.isPlaying = false;
      }
      return this;
    }
    console.warn("THREE.Audio: this Audio has no playback control.");
  },
  stop: function () {
    if (this.hasPlaybackControl !== false) {
      this.source.stop();
      this.source.onended = null;
      this.offset = 0;
      this.isPlaying = false;
      return this;
    }
    console.warn("THREE.Audio: this Audio has no playback control.");
  },
  connect: function () {
    if (this.filters.length > 0) {
      this.source.connect(this.filters[0]);
      for (var bf = 1, bg = this.filters.length; bf < bg; bf++) {
        this.filters[bf - 1].connect(this.filters[bf]);
      }
      this.filters[this.filters.length - 1].connect(this.getOutput());
    } else {
      this.source.connect(this.getOutput());
    }
    return this;
  },
  disconnect: function () {
    if (this.filters.length > 0) {
      this.source.disconnect(this.filters[0]);
      for (var bf = 1, bg = this.filters.length; bf < bg; bf++) {
        this.filters[bf - 1].disconnect(this.filters[bf]);
      }
      this.filters[this.filters.length - 1].disconnect(this.getOutput());
    } else {
      this.source.disconnect(this.getOutput());
    }
    return this;
  },
  getFilters: function () {
    return this.filters;
  },
  setFilters: function (bf) {
    bf ||= [];
    if (this.isPlaying === true) {
      this.disconnect();
      this.filters = bf;
      this.connect();
    } else {
      this.filters = bf;
    }
    return this;
  },
  setDetune: function (bf) {
    this.detune = bf;
    if (this.source.detune !== undefined) {
      if (this.isPlaying === true) {
        this.source.detune.setTargetAtTime(this.detune, this.context.currentTime, 0.01);
      }
      return this;
    }
  },
  getDetune: function () {
    return this.detune;
  },
  getFilter: function () {
    return this.getFilters()[0];
  },
  setFilter: function (bf) {
    return this.setFilters(bf ? [bf] : []);
  },
  setPlaybackRate: function (bf) {
    if (this.hasPlaybackControl !== false) {
      this.playbackRate = bf;
      if (this.isPlaying === true) {
        this.source.playbackRate.setTargetAtTime(this.playbackRate, this.context.currentTime, 0.01);
      }
      return this;
    }
    console.warn("THREE.Audio: this Audio has no playback control.");
  },
  getPlaybackRate: function () {
    return this.playbackRate;
  },
  onEnded: function () {
    this.isPlaying = false;
  },
  getLoop: function () {
    if (this.hasPlaybackControl === false) {
      console.warn("THREE.Audio: this Audio has no playback control.");
      return false;
    } else {
      return this.loop;
    }
  },
  setLoop: function (bf) {
    if (this.hasPlaybackControl !== false) {
      this.loop = bf;
      if (this.isPlaying === true) {
        this.source.loop = this.loop;
      }
      return this;
    }
    console.warn("THREE.Audio: this Audio has no playback control.");
  },
  getVolume: function () {
    return this.gain.gain.value;
  },
  setVolume: function (bf) {
    this.gain.gain.setTargetAtTime(bf, this.context.currentTime, 0.01);
    return this;
  }
});
PositionalAudio.prototype = Object.assign(Object.create(Audio.prototype), {
  constructor: PositionalAudio,
  getOutput: function () {
    return this.panner;
  },
  getRefDistance: function () {
    return this.panner.refDistance;
  },
  setRefDistance: function (bf) {
    this.panner.refDistance = bf;
    return this;
  },
  getRolloffFactor: function () {
    return this.panner.rolloffFactor;
  },
  setRolloffFactor: function (bf) {
    this.panner.rolloffFactor = bf;
    return this;
  },
  getDistanceModel: function () {
    return this.panner.distanceModel;
  },
  setDistanceModel: function (bf) {
    this.panner.distanceModel = bf;
    return this;
  },
  getMaxDistance: function () {
    return this.panner.maxDistance;
  },
  setMaxDistance: function (bf) {
    this.panner.maxDistance = bf;
    return this;
  },
  setDirectionalCone: function (bf, bg, bh) {
    this.panner.coneInnerAngle = bf;
    this.panner.coneOuterAngle = bg;
    this.panner.coneOuterGain = bh;
    return this;
  },
  updateMatrixWorld: function () {
    var bf = new Vector3();
    var bg = new Quaternion();
    var bh = new Vector3();
    var bi = new Vector3();
    return function (bF) {
      Object3D.prototype.updateMatrixWorld.call(this, bF);
      if (this.hasPlaybackControl !== true || this.isPlaying !== false) {
        this.matrixWorld.decompose(bf, bg, bh);
        bi.set(0, 0, 1).applyQuaternion(bg);
        var bG = this.panner;
        if (bG.positionX) {
          var bH = this.context.currentTime + this.listener.timeDelta;
          bG.positionX.linearRampToValueAtTime(bf.x, bH);
          bG.positionY.linearRampToValueAtTime(bf.y, bH);
          bG.positionZ.linearRampToValueAtTime(bf.z, bH);
          bG.orientationX.linearRampToValueAtTime(bi.x, bH);
          bG.orientationY.linearRampToValueAtTime(bi.y, bH);
          bG.orientationZ.linearRampToValueAtTime(bi.z, bH);
        } else {
          bG.setPosition(bf.x, bf.y, bf.z);
          bG.setOrientation(bi.x, bi.y, bi.z);
        }
      }
    };
  }()
});
Object.assign(AudioAnalyser.prototype, {
  getFrequencyData: function () {
    this.analyser.getByteFrequencyData(this.data);
    return this.data;
  },
  getAverageFrequency: function () {
    for (var bf = 0, bg = this.getFrequencyData(), bh = 0; bh < bg.length; bh++) {
      bf += bg[bh];
    }
    return bf / bg.length;
  }
});
Object.assign(PropertyMixer.prototype, {
  accumulate: function (bf, bg) {
    var bh = this.buffer;
    var bi = this.valueSize;
    var bF = bf * bi + bi;
    var bG = this.cumulativeWeight;
    if (bG === 0) {
      for (var bH = 0; bH !== bi; ++bH) {
        bh[bF + bH] = bh[bH];
      }
      bG = bg;
    } else {
      var bI = bg / (bG += bg);
      this._mixBufferRegion(bh, bF, 0, bI, bi);
    }
    this.cumulativeWeight = bG;
  },
  apply: function (bf) {
    var bg = this.valueSize;
    var bh = this.buffer;
    var bi = bf * bg + bg;
    var bF = this.cumulativeWeight;
    var bG = this.binding;
    this.cumulativeWeight = 0;
    if (bF < 1) {
      var bH = bg * 3;
      this._mixBufferRegion(bh, bi, bH, 1 - bF, bg);
    }
    for (var bI = bg, bJ = bg + bg; bI !== bJ; ++bI) {
      if (bh[bI] !== bh[bI + bg]) {
        bG.setValue(bh, bi);
        break;
      }
    }
  },
  saveOriginalState: function () {
    var bf = this.binding;
    var bg = this.buffer;
    var bh = this.valueSize;
    var bi = bh * 3;
    bf.getValue(bg, bi);
    for (var bF = bh, bG = bi; bF !== bG; ++bF) {
      bg[bF] = bg[bi + bF % bh];
    }
    this.cumulativeWeight = 0;
  },
  restoreOriginalState: function () {
    var bf = this.valueSize * 3;
    this.binding.setValue(this.buffer, bf);
  },
  _select: function (bf, bg, bh, bi, bF) {
    if (bi >= 0.5) {
      for (var bG = 0; bG !== bF; ++bG) {
        bf[bg + bG] = bf[bh + bG];
      }
    }
  },
  _slerp: function (bf, bg, bh, bi) {
    Quaternion.slerpFlat(bf, bg, bf, bg, bf, bh, bi);
  },
  _lerp: function (bf, bg, bh, bi, bF) {
    for (var bG = 1 - bi, bH = 0; bH !== bF; ++bH) {
      var bI = bg + bH;
      bf[bI] = bf[bI] * bG + bf[bh + bH] * bi;
    }
  }
});
var aVE;
var aVF;
var aVG;
var aVH;
var aVI;
var aVJ;
var aVK;
var aVL;
var aVM;
var aVN;
var aVO;
var aVP;
var aVQ;
var aVR;
var aVS;
function aVT(bf, bg, bh) {
  var bi = bh || PropertyBinding.parseTrackName(bg);
  this._targetGroup = bf;
  this._bindings = bf.subscribe_(bg, bi);
}
export function PropertyBinding(bf, bg, bh) {
  this.path = bg;
  this.parsedPath = bh || PropertyBinding.parseTrackName(bg);
  this.node = PropertyBinding.findNode(bf, this.parsedPath.nodeName) || bf;
  this.rootNode = bf;
}
export function AnimationObjectGroup() {
  this.uuid = Math.generateUUID();
  this._objects = Array.prototype.slice.call(arguments);
  this.nCachedObjects_ = 0;
  var bf = {};
  this._indicesByUUID = bf;
  for (var bg = 0, bh = arguments.length; bg !== bh; ++bg) {
    bf[arguments[bg].uuid] = bg;
  }
  this._paths = [];
  this._parsedPaths = [];
  this._bindings = [];
  this._bindingsIndicesByPath = {};
  var bi = this;
  this.stats = {
    objects: {
      get total() {
        return bi._objects.length;
      },
      get inUse() {
        return this.total - bi.nCachedObjects_;
      }
    },
    get bindingsPerObject() {
      return bi._bindings.length;
    }
  };
}
function aW7(bf, bg, bh) {
  this._mixer = bf;
  this._clip = bg;
  this._localRoot = bh || null;
  for (var bi = bg.tracks, bF = bi.length, bG = new Array(bF), bH = {
      endingStart: ZeroCurvatureEnding,
      endingEnd: ZeroCurvatureEnding
    }, bI = 0; bI !== bF; ++bI) {
    var bJ = bi[bI].createInterpolant(null);
    bG[bI] = bJ;
    bJ.settings = bH;
  }
  this._interpolantSettings = bH;
  this._interpolants = bG;
  this._propertyBindings = new Array(bF);
  this._cacheIndex = null;
  this._byClipCacheIndex = null;
  this._timeScaleInterpolant = null;
  this._weightInterpolant = null;
  this.loop = LoopRepeat;
  this._loopCount = -1;
  this._startTime = null;
  this.time = 0;
  this.timeScale = 1;
  this._effectiveTimeScale = 1;
  this.weight = 1;
  this._effectiveWeight = 1;
  this.repetitions = Infinity;
  this.paused = false;
  this.enabled = true;
  this.clampWhenFinished = false;
  this.zeroSlopeAtStart = true;
  this.zeroSlopeAtEnd = true;
}
export function AnimationMixer(bf) {
  this._root = bf;
  this._initMemoryManager();
  this._accuIndex = 0;
  this.time = 0;
  this.timeScale = 1;
}
export function Uniform(bf) {
  if (typeof bf == "string") {
    console.warn("THREE.Uniform: Type parameter is no longer needed.");
    bf = arguments[1];
  }
  this.value = bf;
}
export function InstancedInterleavedBuffer(bf, bg, bh) {
  InterleavedBuffer.call(this, bf, bg);
  this.meshPerAttribute = bh || 1;
}
export function Raycaster(bf, bg, bh, bi) {
  this.ray = new Ray(bf, bg);
  this.near = bh || 0;
  this.far = bi || Infinity;
  this.params = {
    Mesh: {},
    Line: {},
    LOD: {},
    Points: {
      threshold: 1
    },
    Sprite: {}
  };
  Object.defineProperties(this.params, {
    PointCloud: {
      get: function () {
        console.warn("THREE.Raycaster: params.PointCloud has been renamed to params.Points.");
        return this.Points;
      }
    }
  });
}
function aWu(bf, bg) {
  return bf.distance - bg.distance;
}
function aWx(bf, bg, bh, bi) {
  if (bf.visible !== false && (bf.raycast(bg, bh), bi === true)) {
    for (var bF = bf.children, bG = 0, bH = bF.length; bG < bH; bG++) {
      aWx(bF[bG], bg, bh, true);
    }
  }
}
export function Spherical(bf, bg, bh) {
  this.radius = bf !== undefined ? bf : 1;
  this.phi = bg !== undefined ? bg : 0;
  this.theta = bh !== undefined ? bh : 0;
  return this;
}
export function Cylindrical(bf, bg, bh) {
  this.radius = bf !== undefined ? bf : 1;
  this.theta = bg !== undefined ? bg : 0;
  this.y = bh !== undefined ? bh : 0;
  return this;
}
export function Box2(bf, bg) {
  this.min = bf !== undefined ? bf : new Vector2(Infinity, Infinity);
  this.max = bg !== undefined ? bg : new Vector2(-Infinity, -Infinity);
}
export function Line3(bf, bg) {
  this.start = bf !== undefined ? bf : new Vector3();
  this.end = bg !== undefined ? bg : new Vector3();
}
export function ImmediateRenderObject(bf) {
  Object3D.call(this);
  this.material = bf;
  this.render = function () {};
}
export function VertexNormalsHelper(bf, bg, bh, bi) {
  this.object = bf;
  this.size = bg !== undefined ? bg : 1;
  var bF = bh !== undefined ? bh : 16711680;
  var bG = bi !== undefined ? bi : 1;
  var bH = 0;
  var bI = this.object.geometry;
  if (bI && bI.isGeometry) {
    bH = bI.faces.length * 3;
  } else if (bI && bI.isBufferGeometry) {
    bH = bI.attributes.normal.count;
  }
  var bJ = new BufferGeometry();
  var bK = new Float32BufferAttribute(bH * 2 * 3, 3);
  bJ.addAttribute("position", bK);
  LineSegments.call(this, bJ, new LineBasicMaterial({
    color: bF,
    linewidth: bG
  }));
  this.matrixAutoUpdate = false;
  this.update();
}
export function SpotLightHelper(bf, bg) {
  Object3D.call(this);
  this.light = bf;
  this.light.updateMatrixWorld();
  this.matrix = bf.matrixWorld;
  this.matrixAutoUpdate = false;
  this.color = bg;
  for (var bh = new BufferGeometry(), bi = [0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, -1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1, 1], bF = 0, bG = 1; bF < 32; bF++, bG++) {
    var bH = bF / 32 * Math.PI * 2;
    var bI = bG / 32 * Math.PI * 2;
    bi.push(Math.cos(bH), Math.sin(bH), 1, Math.cos(bI), Math.sin(bI), 1);
  }
  bh.addAttribute("position", new Float32BufferAttribute(bi, 3));
  var bJ = new LineBasicMaterial({
    fog: false
  });
  this.cone = new LineSegments(bh, bJ);
  this.add(this.cone);
  this.update();
}
export function SkeletonHelper(bf) {
  for (var bg = function bf(bg) {
      var bh = [];
      if (bg && bg.isBone) {
        bh.push(bg);
      }
      for (var bi = 0; bi < bg.children.length; bi++) {
        bh.push.apply(bh, bf(bg.children[bi]));
      }
      return bh;
    }(bf), bh = new BufferGeometry(), bi = [], bF = [], bG = new Color(0, 0, 1), bH = new Color(0, 1, 0), bI = 0; bI < bg.length; bI++) {
    var bJ = bg[bI];
    if (bJ.parent && bJ.parent.isBone) {
      bi.push(0, 0, 0);
      bi.push(0, 0, 0);
      bF.push(bG.r, bG.g, bG.b);
      bF.push(bH.r, bH.g, bH.b);
    }
  }
  bh.addAttribute("position", new Float32BufferAttribute(bi, 3));
  bh.addAttribute("color", new Float32BufferAttribute(bF, 3));
  var bK = new LineBasicMaterial({
    vertexColors: VertexColors,
    depthTest: false,
    depthWrite: false,
    transparent: true
  });
  LineSegments.call(this, bh, bK);
  this.root = bf;
  this.bones = bg;
  this.matrix = bf.matrixWorld;
  this.matrixAutoUpdate = false;
}
export function PointLightHelper(bf, bg, bh) {
  this.light = bf;
  this.light.updateMatrixWorld();
  this.color = bh;
  var bi = new SphereBufferGeometry(bg, 4, 2);
  var bF = new MeshBasicMaterial({
    wireframe: true,
    fog: false
  });
  Mesh.call(this, bi, bF);
  this.matrix = this.light.matrixWorld;
  this.matrixAutoUpdate = false;
  this.update();
}
export function RectAreaLightHelper(bf, bg) {
  this.type = "RectAreaLightHelper";
  this.light = bf;
  this.color = bg;
  var bh = new BufferGeometry();
  bh.addAttribute("position", new Float32BufferAttribute([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, -1, 0, 1, 1, 0], 3));
  bh.computeBoundingSphere();
  var bi = new LineBasicMaterial({
    fog: false
  });
  Line.call(this, bh, bi);
  var bF = new BufferGeometry();
  bF.addAttribute("position", new Float32BufferAttribute([1, 1, 0, -1, 1, 0, -1, -1, 0, 1, 1, 0, -1, -1, 0, 1, -1, 0], 3));
  bF.computeBoundingSphere();
  this.add(new Mesh(bF, new MeshBasicMaterial({
    side: BackSide,
    fog: false
  })));
  this.update();
}
export function HemisphereLightHelper(bf, bg, bh) {
  Object3D.call(this);
  this.light = bf;
  this.light.updateMatrixWorld();
  this.matrix = bf.matrixWorld;
  this.matrixAutoUpdate = false;
  this.color = bh;
  var bi = new OctahedronBufferGeometry(bg);
  bi.rotateY(Math.PI * 0.5);
  this.material = new MeshBasicMaterial({
    wireframe: true,
    fog: false
  });
  if (this.color === undefined) {
    this.material.vertexColors = VertexColors;
  }
  var bF = bi.getAttribute("position");
  var bG = new Float32Array(bF.count * 3);
  bi.addAttribute("color", new BufferAttribute(bG, 3));
  this.add(new Mesh(bi, this.material));
  this.update();
}
export function LightProbeHelper(bf, bg) {
  this.lightProbe = bf;
  this.size = bg;
  var bh = {
    GAMMA_OUTPUT: ""
  };
  var bi = new ShaderMaterial({
    defines: bh,
    uniforms: {
      sh: {
        value: this.lightProbe.sh.coefficients
      },
      intensity: {
        value: this.lightProbe.intensity
      }
    },
    vertexShader: ["varying vec3 vNormal;", "void main() {", "\tvNormal = normalize( normalMatrix * normal );", "\tgl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );", "}"].join("\n"),
    fragmentShader: ["#define RECIPROCAL_PI 0.318309886", "vec3 inverseTransformDirection( in vec3 normal, in mat4 matrix ) {", "\t// matrix is assumed to be orthogonal", "\treturn normalize( ( vec4( normal, 0.0 ) * matrix ).xyz );", "}", "vec3 linearToOutput( in vec3 a ) {", "\t#ifdef GAMMA_OUTPUT", "\t\treturn pow( a, vec3( 1.0 / float( GAMMA_FACTOR ) ) );", "\t#else", "\t\treturn a;", "\t#endif", "}", "// source: https://graphics.stanford.edu/papers/envmap/envmap.pdf", "vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {", "\t// normal is assumed to have unit length", "\tfloat x = normal.x, y = normal.y, z = normal.z;", "\t// band 0", "\tvec3 result = shCoefficients[ 0 ] * 0.886227;", "\t// band 1", "\tresult += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;", "\tresult += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;", "\tresult += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;", "\t// band 2", "\tresult += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;", "\tresult += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;", "\tresult += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );", "\tresult += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;", "\tresult += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );", "\treturn result;", "}", "uniform vec3 sh[ 9 ]; // sh coefficients", "uniform float intensity; // light probe intensity", "varying vec3 vNormal;", "void main() {", "\tvec3 normal = normalize( vNormal );", "\tvec3 worldNormal = inverseTransformDirection( normal, viewMatrix );", "\tvec3 irradiance = shGetIrradianceAt( worldNormal, sh );", "\tvec3 outgoingLight = RECIPROCAL_PI * irradiance * intensity;", "\toutgoingLight = linearToOutput( outgoingLight );", "\tgl_FragColor = vec4( outgoingLight, 1.0 );", "}"].join("\n")
  });
  var bF = new SphereBufferGeometry(1, 32, 16);
  Mesh.call(this, bF, bi);
  this.onBeforeRender();
}
export function GridHelper(bf, bg, bh, bi) {
  bf = bf || 10;
  bg = bg || 10;
  bh = new Color(bh !== undefined ? bh : 4473924);
  bi = new Color(bi !== undefined ? bi : 8947848);
  for (var bF = bg / 2, bG = bf / bg, bH = bf / 2, bI = [], bJ = [], bK = 0, bL = 0, bM = -bH; bK <= bg; bK++, bM += bG) {
    bI.push(-bH, 0, bM, bH, 0, bM);
    bI.push(bM, 0, -bH, bM, 0, bH);
    var bN = bK === bF ? bh : bi;
    bN.toArray(bJ, bL);
    bL += 3;
    bN.toArray(bJ, bL);
    bL += 3;
    bN.toArray(bJ, bL);
    bL += 3;
    bN.toArray(bJ, bL);
    bL += 3;
  }
  var bO = new BufferGeometry();
  bO.addAttribute("position", new Float32BufferAttribute(bI, 3));
  bO.addAttribute("color", new Float32BufferAttribute(bJ, 3));
  var bP = new LineBasicMaterial({
    vertexColors: VertexColors
  });
  LineSegments.call(this, bO, bP);
}
export function PolarGridHelper(bf, bg, bh, bi, bF, bG) {
  bf = bf || 10;
  bg = bg || 16;
  bh = bh || 8;
  bi = bi || 64;
  bF = new Color(bF !== undefined ? bF : 4473924);
  bG = new Color(bG !== undefined ? bG : 8947848);
  var bH;
  var bI;
  var bJ;
  var bK;
  var bL;
  var bM;
  var bN;
  var bO = [];
  var bP = [];
  for (bK = 0; bK <= bg; bK++) {
    bJ = bK / bg * (Math.PI * 2);
    bH = Math.sin(bJ) * bf;
    bI = Math.cos(bJ) * bf;
    bO.push(0, 0, 0);
    bO.push(bH, 0, bI);
    bN = bK & 1 ? bF : bG;
    bP.push(bN.r, bN.g, bN.b);
    bP.push(bN.r, bN.g, bN.b);
  }
  for (bK = 0; bK <= bh; bK++) {
    bN = bK & 1 ? bF : bG;
    bM = bf - bf / bh * bK;
    bL = 0;
    bN = bK & 1 ? bF : bG;
    bM = bf - bf / bh * bK;
    bL = 0;
    for (; bL < bi; bL++) {
      bJ = bL / bi * (Math.PI * 2);
      bH = Math.sin(bJ) * bM;
      bI = Math.cos(bJ) * bM;
      bO.push(bH, 0, bI);
      bP.push(bN.r, bN.g, bN.b);
      bJ = (bL + 1) / bi * (Math.PI * 2);
      bH = Math.sin(bJ) * bM;
      bI = Math.cos(bJ) * bM;
      bO.push(bH, 0, bI);
      bP.push(bN.r, bN.g, bN.b);
    }
  }
  var bQ = new BufferGeometry();
  bQ.addAttribute("position", new Float32BufferAttribute(bO, 3));
  bQ.addAttribute("color", new Float32BufferAttribute(bP, 3));
  var bR = new LineBasicMaterial({
    vertexColors: VertexColors
  });
  LineSegments.call(this, bQ, bR);
}
export function PositionalAudioHelper(bf, bg, bh, bi) {
  this.audio = bf;
  this.range = bg || 1;
  this.divisionsInnerAngle = bh || 16;
  this.divisionsOuterAngle = bi || 2;
  var bF = new BufferGeometry();
  var bG = this.divisionsInnerAngle + this.divisionsOuterAngle * 2;
  var bH = new Float32Array((bG * 3 + 3) * 3);
  bF.addAttribute("position", new BufferAttribute(bH, 3));
  var bI = new LineBasicMaterial({
    color: 65280
  });
  var bJ = new LineBasicMaterial({
    color: 16776960
  });
  Line.call(this, bF, [bJ, bI]);
  this.update();
}
export function FaceNormalsHelper(bf, bg, bh, bi) {
  this.object = bf;
  this.size = bg !== undefined ? bg : 1;
  var bF = bh !== undefined ? bh : 16776960;
  var bG = bi !== undefined ? bi : 1;
  var bH = 0;
  var bI = this.object.geometry;
  if (bI && bI.isGeometry) {
    bH = bI.faces.length;
  } else {
    console.warn("THREE.FaceNormalsHelper: only THREE.Geometry is supported. Use THREE.VertexNormalsHelper, instead.");
  }
  var bJ = new BufferGeometry();
  var bK = new Float32BufferAttribute(bH * 2 * 3, 3);
  bJ.addAttribute("position", bK);
  LineSegments.call(this, bJ, new LineBasicMaterial({
    color: bF,
    linewidth: bG
  }));
  this.matrixAutoUpdate = false;
  this.update();
}
export function DirectionalLightHelper(bf, bg, bh) {
  Object3D.call(this);
  this.light = bf;
  this.light.updateMatrixWorld();
  this.matrix = bf.matrixWorld;
  this.matrixAutoUpdate = false;
  this.color = bh;
  if (bg === undefined) {
    bg = 1;
  }
  var bi = new BufferGeometry();
  bi.addAttribute("position", new Float32BufferAttribute([-bg, bg, 0, bg, bg, 0, bg, -bg, 0, -bg, -bg, 0, -bg, bg, 0], 3));
  var bF = new LineBasicMaterial({
    fog: false
  });
  this.lightPlane = new Line(bi, bF);
  this.add(this.lightPlane);
  (bi = new BufferGeometry()).addAttribute("position", new Float32BufferAttribute([0, 0, 0, 0, 0, 1], 3));
  this.targetLine = new Line(bi, bF);
  this.add(this.targetLine);
  this.update();
}
export function CameraHelper(bf) {
  var bg = new BufferGeometry();
  var bh = new LineBasicMaterial({
    color: 16777215,
    vertexColors: FaceColors
  });
  var bi = [];
  var bF = [];
  var bG = {};
  var bH = new Color(16755200);
  var bI = new Color(16711680);
  var bJ = new Color(43775);
  var bK = new Color(16777215);
  var bL = new Color(3355443);
  function bM(bf, bg, bh) {
    bN(bf, bh);
    bN(bg, bh);
  }
  function bN(bf, bg) {
    bi.push(0, 0, 0);
    bF.push(bg.r, bg.g, bg.b);
    if (bG[bf] === undefined) {
      bG[bf] = [];
    }
    bG[bf].push(bi.length / 3 - 1);
  }
  bM("n1", "n2", bH);
  bM("n2", "n4", bH);
  bM("n4", "n3", bH);
  bM("n3", "n1", bH);
  bM("f1", "f2", bH);
  bM("f2", "f4", bH);
  bM("f4", "f3", bH);
  bM("f3", "f1", bH);
  bM("n1", "f1", bH);
  bM("n2", "f2", bH);
  bM("n3", "f3", bH);
  bM("n4", "f4", bH);
  bM("p", "n1", bI);
  bM("p", "n2", bI);
  bM("p", "n3", bI);
  bM("p", "n4", bI);
  bM("u1", "u2", bJ);
  bM("u2", "u3", bJ);
  bM("u3", "u1", bJ);
  bM("c", "t", bK);
  bM("p", "c", bL);
  bM("cn1", "cn2", bL);
  bM("cn3", "cn4", bL);
  bM("cf1", "cf2", bL);
  bM("cf3", "cf4", bL);
  bg.addAttribute("position", new Float32BufferAttribute(bi, 3));
  bg.addAttribute("color", new Float32BufferAttribute(bF, 3));
  LineSegments.call(this, bg, bh);
  this.camera = bf;
  if (this.camera.updateProjectionMatrix) {
    this.camera.updateProjectionMatrix();
  }
  this.matrix = bf.matrixWorld;
  this.matrixAutoUpdate = false;
  this.pointMap = bG;
  this.update();
}
export function BoxHelper(bf, bg) {
  this.object = bf;
  if (bg === undefined) {
    bg = 16776960;
  }
  var bh = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
  var bi = new Float32Array(24);
  var bF = new BufferGeometry();
  bF.setIndex(new BufferAttribute(bh, 1));
  bF.addAttribute("position", new BufferAttribute(bi, 3));
  LineSegments.call(this, bF, new LineBasicMaterial({
    color: bg
  }));
  this.matrixAutoUpdate = false;
  this.update();
}
export function Box3Helper(bf, bg) {
  this.type = "Box3Helper";
  this.box = bf;
  var bh = bg !== undefined ? bg : 16776960;
  var bi = new Uint16Array([0, 1, 1, 2, 2, 3, 3, 0, 4, 5, 5, 6, 6, 7, 7, 4, 0, 4, 1, 5, 2, 6, 3, 7]);
  var bF = new BufferGeometry();
  bF.setIndex(new BufferAttribute(bi, 1));
  bF.addAttribute("position", new Float32BufferAttribute([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, -1, -1, 1, -1, -1, -1, -1, 1, -1, -1], 3));
  LineSegments.call(this, bF, new LineBasicMaterial({
    color: bh
  }));
  this.geometry.computeBoundingSphere();
}
export function PlaneHelper(bf, bg, bh) {
  this.type = "PlaneHelper";
  this.plane = bf;
  this.size = bg === undefined ? 1 : bg;
  var bi = bh !== undefined ? bh : 16776960;
  var bF = new BufferGeometry();
  bF.addAttribute("position", new Float32BufferAttribute([1, -1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, 1, 1, -1, -1, 1, 1, -1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0], 3));
  bF.computeBoundingSphere();
  Line.call(this, bF, new LineBasicMaterial({
    color: bi
  }));
  var bG = new BufferGeometry();
  bG.addAttribute("position", new Float32BufferAttribute([1, 1, 1, -1, 1, 1, -1, -1, 1, 1, 1, 1, -1, -1, 1, 1, -1, 1], 3));
  bG.computeBoundingSphere();
  this.add(new Mesh(bG, new MeshBasicMaterial({
    color: bi,
    opacity: 0.2,
    transparent: true,
    depthWrite: false
  })));
}
export function ArrowHelper(bf, bg, bh, bi, bF, bG) {
  Object3D.call(this);
  if (bf === undefined) {
    bf = new Vector3(0, 0, 1);
  }
  if (bg === undefined) {
    bg = new Vector3(0, 0, 0);
  }
  if (bh === undefined) {
    bh = 1;
  }
  if (bi === undefined) {
    bi = 16776960;
  }
  if (bF === undefined) {
    bF = bh * 0.2;
  }
  if (bG === undefined) {
    bG = bF * 0.2;
  }
  if (aVP === undefined) {
    (aVP = new BufferGeometry()).addAttribute("position", new Float32BufferAttribute([0, 0, 0, 0, 1, 0], 3));
    (aVQ = new CylinderBufferGeometry(0, 0.5, 1, 5, 1)).translate(0, -0.5, 0);
  }
  this.position.copy(bg);
  this.line = new Line(aVP, new LineBasicMaterial({
    color: bi
  }));
  this.line.matrixAutoUpdate = false;
  this.add(this.line);
  this.cone = new Mesh(aVQ, new MeshBasicMaterial({
    color: bi
  }));
  this.cone.matrixAutoUpdate = false;
  this.add(this.cone);
  this.setDirection(bf);
  this.setLength(bh, bF, bG);
}
export function AxesHelper(bf) {
  var bg = [0, 0, 0, bf = bf || 1, 0, 0, 0, 0, 0, 0, bf, 0, 0, 0, 0, 0, 0, bf];
  var bh = new BufferGeometry();
  bh.addAttribute("position", new Float32BufferAttribute(bg, 3));
  bh.addAttribute("color", new Float32BufferAttribute([1, 0, 0, 1, 0.6, 0, 0, 1, 0, 0.6, 1, 0, 0, 0, 1, 0, 0.6, 1], 3));
  var bi = new LineBasicMaterial({
    vertexColors: VertexColors
  });
  LineSegments.call(this, bh, bi);
}
export function Face4(bf, bg, bh, bi, bF, bG, bH) {
  console.warn("THREE.Face4 has been removed. A THREE.Face3 will be created instead.");
  return new Face3(bf, bg, bh, bF, bG, bH);
}
Object.assign(aVT.prototype, {
  getValue: function (bf, bg) {
    this.bind();
    var bh = this._targetGroup.nCachedObjects_;
    var bi = this._bindings[bh];
    if (bi !== undefined) {
      bi.getValue(bf, bg);
    }
  },
  setValue: function (bf, bg) {
    for (var bh = this._bindings, bi = this._targetGroup.nCachedObjects_, bF = bh.length; bi !== bF; ++bi) {
      bh[bi].setValue(bf, bg);
    }
  },
  bind: function () {
    for (var bf = this._bindings, bg = this._targetGroup.nCachedObjects_, bh = bf.length; bg !== bh; ++bg) {
      bf[bg].bind();
    }
  },
  unbind: function () {
    for (var bf = this._bindings, bg = this._targetGroup.nCachedObjects_, bh = bf.length; bg !== bh; ++bg) {
      bf[bg].unbind();
    }
  }
});
Object.assign(PropertyBinding, {
  Composite: aVT,
  create: function (bf, bg, bh) {
    if (bf && bf.isAnimationObjectGroup) {
      return new PropertyBinding.Composite(bf, bg, bh);
    } else {
      return new PropertyBinding(bf, bg, bh);
    }
  },
  sanitizeNodeName: (aVM = new RegExp("[\\[\\]\\.:\\/]", "g"), function (bf) {
    return bf.replace(/\s/g, "_").replace(aVM, "");
  }),
  parseTrackName: (aVE = "[^\\[\\]\\.:\\/]", aVF = "[^" + "\\[\\]\\.:\\/".replace("\\.", "") + "]", aVG = /((?:WC+[\/:])*)/.source.replace("WC", aVE), aVH = /(WCOD+)?/.source.replace("WCOD", aVF), aVI = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", aVE), aVJ = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", aVE), aVK = new RegExp("^" + aVG + aVH + aVI + aVJ + "$"), aVL = ["material", "materials", "bones"], function (bf) {
    var bg = aVK.exec(bf);
    if (!bg) {
      throw new Error("PropertyBinding: Cannot parse trackName: " + bf);
    }
    var bh = {
      nodeName: bg[2],
      objectName: bg[3],
      objectIndex: bg[4],
      propertyName: bg[5],
      propertyIndex: bg[6]
    };
    var bi = bh.nodeName && bh.nodeName.lastIndexOf(".");
    if (bi !== undefined && bi !== -1) {
      var bF = bh.nodeName.substring(bi + 1);
      if (aVL.indexOf(bF) !== -1) {
        bh.nodeName = bh.nodeName.substring(0, bi);
        bh.objectName = bF;
      }
    }
    if (bh.propertyName === null || bh.propertyName.length === 0) {
      throw new Error("PropertyBinding: can not parse propertyName from trackName: " + bf);
    }
    return bh;
  }),
  findNode: function (bf, bg) {
    if (!bg || bg === "" || bg === "root" || bg === "." || bg === -1 || bg === bf.name || bg === bf.uuid) {
      return bf;
    }
    if (bf.skeleton) {
      var bh = bf.skeleton.getBoneByName(bg);
      if (bh !== undefined) {
        return bh;
      }
    }
    if (bf.children) {
      function bi(bf) {
        for (var bh = 0; bh < bf.length; bh++) {
          var bF = bf[bh];
          if (bF.name === bg || bF.uuid === bg) {
            return bF;
          }
          var bG = bi(bF.children);
          if (bG) {
            return bG;
          }
        }
        return null;
      }
      var bF = bi(bf.children);
      if (bF) {
        return bF;
      }
    }
    return null;
  }
});
Object.assign(PropertyBinding.prototype, {
  _getValue_unavailable: function () {},
  _setValue_unavailable: function () {},
  BindingType: {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
  },
  Versioning: {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
  },
  GetterByBindingType: [function (bf, bg) {
    bf[bg] = this.node[this.propertyName];
  }, function (bf, bg) {
    for (var bh = this.resolvedProperty, bi = 0, bF = bh.length; bi !== bF; ++bi) {
      bf[bg++] = bh[bi];
    }
  }, function (bf, bg) {
    bf[bg] = this.resolvedProperty[this.propertyIndex];
  }, function (bf, bg) {
    this.resolvedProperty.toArray(bf, bg);
  }],
  SetterByBindingTypeAndVersioning: [[function (bf, bg) {
    this.targetObject[this.propertyName] = bf[bg];
  }, function (bf, bg) {
    this.targetObject[this.propertyName] = bf[bg];
    this.targetObject.needsUpdate = true;
  }, function (bf, bg) {
    this.targetObject[this.propertyName] = bf[bg];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }], [function (bf, bg) {
    for (var bh = this.resolvedProperty, bi = 0, bF = bh.length; bi !== bF; ++bi) {
      bh[bi] = bf[bg++];
    }
  }, function (bf, bg) {
    for (var bh = this.resolvedProperty, bi = 0, bF = bh.length; bi !== bF; ++bi) {
      bh[bi] = bf[bg++];
    }
    this.targetObject.needsUpdate = true;
  }, function (bf, bg) {
    for (var bh = this.resolvedProperty, bi = 0, bF = bh.length; bi !== bF; ++bi) {
      bh[bi] = bf[bg++];
    }
    this.targetObject.matrixWorldNeedsUpdate = true;
  }], [function (bf, bg) {
    this.resolvedProperty[this.propertyIndex] = bf[bg];
  }, function (bf, bg) {
    this.resolvedProperty[this.propertyIndex] = bf[bg];
    this.targetObject.needsUpdate = true;
  }, function (bf, bg) {
    this.resolvedProperty[this.propertyIndex] = bf[bg];
    this.targetObject.matrixWorldNeedsUpdate = true;
  }], [function (bf, bg) {
    this.resolvedProperty.fromArray(bf, bg);
  }, function (bf, bg) {
    this.resolvedProperty.fromArray(bf, bg);
    this.targetObject.needsUpdate = true;
  }, function (bf, bg) {
    this.resolvedProperty.fromArray(bf, bg);
    this.targetObject.matrixWorldNeedsUpdate = true;
  }]],
  getValue: function (bf, bg) {
    this.bind();
    this.getValue(bf, bg);
  },
  setValue: function (bf, bg) {
    this.bind();
    this.setValue(bf, bg);
  },
  bind: function () {
    var bf = this.node;
    var bg = this.parsedPath;
    var bh = bg.objectName;
    var bi = bg.propertyName;
    var bF = bg.propertyIndex;
    if (!bf) {
      bf = PropertyBinding.findNode(this.rootNode, bg.nodeName) || this.rootNode;
      this.node = bf;
    }
    this.getValue = this._getValue_unavailable;
    this.setValue = this._setValue_unavailable;
    if (bf) {
      if (bh) {
        var bG = bg.objectIndex;
        switch (bh) {
          case "materials":
            if (!bf.material) {
              console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
              return;
            }
            if (!bf.material.materials) {
              console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
              return;
            }
            bf = bf.material.materials;
            break;
          case "bones":
            if (!bf.skeleton) {
              console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
              return;
            }
            bf = bf.skeleton.bones;
            for (var bH = 0; bH < bf.length; bH++) {
              if (bf[bH].name === bG) {
                bG = bH;
                break;
              }
            }
            break;
          default:
            if (bf[bh] === undefined) {
              console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
              return;
            }
            bf = bf[bh];
        }
        if (bG !== undefined) {
          if (bf[bG] === undefined) {
            console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, bf);
            return;
          }
          bf = bf[bG];
        }
      }
      var bI = bf[bi];
      if (bI !== undefined) {
        var bJ = this.Versioning.None;
        this.targetObject = bf;
        if (bf.needsUpdate !== undefined) {
          bJ = this.Versioning.NeedsUpdate;
        } else if (bf.matrixWorldNeedsUpdate !== undefined) {
          bJ = this.Versioning.MatrixWorldNeedsUpdate;
        }
        var bK = this.BindingType.Direct;
        if (bF !== undefined) {
          if (bi === "morphTargetInfluences") {
            if (!bf.geometry) {
              console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
              return;
            }
            if (bf.geometry.isBufferGeometry) {
              if (!bf.geometry.morphAttributes) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                return;
              }
              for (bH = 0; bH < this.node.geometry.morphAttributes.position.length; bH++) {
                if (bf.geometry.morphAttributes.position[bH].name === bF) {
                  bF = bH;
                  break;
                }
              }
            } else {
              if (!bf.geometry.morphTargets) {
                console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphTargets.", this);
                return;
              }
              for (bH = 0; bH < this.node.geometry.morphTargets.length; bH++) {
                if (bf.geometry.morphTargets[bH].name === bF) {
                  bF = bH;
                  break;
                }
              }
            }
          }
          bK = this.BindingType.ArrayElement;
          this.resolvedProperty = bI;
          this.propertyIndex = bF;
        } else if (bI.fromArray !== undefined && bI.toArray !== undefined) {
          bK = this.BindingType.HasFromToArray;
          this.resolvedProperty = bI;
        } else if (Array.isArray(bI)) {
          bK = this.BindingType.EntireArray;
          this.resolvedProperty = bI;
        } else {
          this.propertyName = bi;
        }
        this.getValue = this.GetterByBindingType[bK];
        this.setValue = this.SetterByBindingTypeAndVersioning[bK][bJ];
      } else {
        var bL = bg.nodeName;
        console.error("THREE.PropertyBinding: Trying to update property for track: " + bL + "." + bi + " but it wasn't found.", bf);
      }
    } else {
      console.error("THREE.PropertyBinding: Trying to update node for track: " + this.path + " but it wasn't found.");
    }
  },
  unbind: function () {
    this.node = null;
    this.getValue = this._getValue_unbound;
    this.setValue = this._setValue_unbound;
  }
});
Object.assign(PropertyBinding.prototype, {
  _getValue_unbound: PropertyBinding.prototype.getValue,
  _setValue_unbound: PropertyBinding.prototype.setValue
});
Object.assign(AnimationObjectGroup.prototype, {
  isAnimationObjectGroup: true,
  add: function () {
    for (var bf = this._objects, bg = bf.length, bh = this.nCachedObjects_, bi = this._indicesByUUID, bF = this._paths, bG = this._parsedPaths, bH = this._bindings, bI = bH.length, bJ = undefined, bK = 0, bL = arguments.length; bK !== bL; ++bK) {
      var bM = arguments[bK];
      var bN = bM.uuid;
      var bO = bi[bN];
      if (bO === undefined) {
        bO = bg++;
        bi[bN] = bO;
        bf.push(bM);
        for (var bP = 0, bQ = bI; bP !== bQ; ++bP) {
          bH[bP].push(new PropertyBinding(bM, bF[bP], bG[bP]));
        }
      } else if (bO < bh) {
        bJ = bf[bO];
        var bR = --bh;
        var bS = bf[bR];
        bi[bS.uuid] = bO;
        bf[bO] = bS;
        bi[bN] = bR;
        bf[bR] = bM;
        bP = 0;
        bQ = bI;
        for (; bP !== bQ; ++bP) {
          var bT = bH[bP];
          var bU = bT[bR];
          var bV = bT[bO];
          bT[bO] = bU;
          if (bV === undefined) {
            bV = new PropertyBinding(bM, bF[bP], bG[bP]);
          }
          bT[bR] = bV;
        }
      } else if (bf[bO] !== bJ) {
        console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.");
      }
    }
    this.nCachedObjects_ = bh;
  },
  remove: function () {
    for (var bf = this._objects, bg = this.nCachedObjects_, bh = this._indicesByUUID, bi = this._bindings, bF = bi.length, bG = 0, bH = arguments.length; bG !== bH; ++bG) {
      var bI = arguments[bG];
      var bJ = bI.uuid;
      var bK = bh[bJ];
      if (bK !== undefined && bK >= bg) {
        var bL = bg++;
        var bM = bf[bL];
        bh[bM.uuid] = bK;
        bf[bK] = bM;
        bh[bJ] = bL;
        bf[bL] = bI;
        for (var bN = 0, bO = bF; bN !== bO; ++bN) {
          var bP = bi[bN];
          var bQ = bP[bL];
          var bR = bP[bK];
          bP[bK] = bQ;
          bP[bL] = bR;
        }
      }
    }
    this.nCachedObjects_ = bg;
  },
  uncache: function () {
    for (var bf = this._objects, bg = bf.length, bh = this.nCachedObjects_, bi = this._indicesByUUID, bF = this._bindings, bG = bF.length, bH = 0, bI = arguments.length; bH !== bI; ++bH) {
      var bJ = arguments[bH].uuid;
      var bK = bi[bJ];
      if (bK !== undefined) {
        delete bi[bJ];
        if (bK < bh) {
          var bL = --bh;
          var bM = bf[bL];
          var bN = bf[bS = --bg];
          bi[bM.uuid] = bK;
          bf[bK] = bM;
          bi[bN.uuid] = bL;
          bf[bL] = bN;
          bf.pop();
          for (var bO = 0, bP = bG; bO !== bP; ++bO) {
            var bQ = (bT = bF[bO])[bL];
            var bR = bT[bS];
            bT[bK] = bQ;
            bT[bL] = bR;
            bT.pop();
          }
        } else {
          var bS;
          bi[(bN = bf[bS = --bg]).uuid] = bK;
          bf[bK] = bN;
          bf.pop();
          bO = 0;
          bP = bG;
          for (; bO !== bP; ++bO) {
            var bT;
            (bT = bF[bO])[bK] = bT[bS];
            bT.pop();
          }
        }
      }
    }
    this.nCachedObjects_ = bh;
  },
  subscribe_: function (bf, bg) {
    var bh = this._bindingsIndicesByPath;
    var bi = bh[bf];
    var bF = this._bindings;
    if (bi !== undefined) {
      return bF[bi];
    }
    var bG = this._paths;
    var bH = this._parsedPaths;
    var bI = this._objects;
    var bJ = bI.length;
    var bK = this.nCachedObjects_;
    var bL = new Array(bJ);
    bi = bF.length;
    bh[bf] = bi;
    bG.push(bf);
    bH.push(bg);
    bF.push(bL);
    for (var bM = bK, bN = bI.length; bM !== bN; ++bM) {
      var bO = bI[bM];
      bL[bM] = new PropertyBinding(bO, bf, bg);
    }
    return bL;
  },
  unsubscribe_: function (bf) {
    var bg = this._bindingsIndicesByPath;
    var bh = bg[bf];
    if (bh !== undefined) {
      var bi = this._paths;
      var bF = this._parsedPaths;
      var bG = this._bindings;
      var bH = bG.length - 1;
      var bI = bG[bH];
      bg[bf[bH]] = bh;
      bG[bh] = bI;
      bG.pop();
      bF[bh] = bF[bH];
      bF.pop();
      bi[bh] = bi[bH];
      bi.pop();
    }
  }
});
Object.assign(aW7.prototype, {
  play: function () {
    this._mixer._activateAction(this);
    return this;
  },
  stop: function () {
    this._mixer._deactivateAction(this);
    return this.reset();
  },
  reset: function () {
    this.paused = false;
    this.enabled = true;
    this.time = 0;
    this._loopCount = -1;
    this._startTime = null;
    return this.stopFading().stopWarping();
  },
  isRunning: function () {
    return this.enabled && !this.paused && this.timeScale !== 0 && this._startTime === null && this._mixer._isActiveAction(this);
  },
  isScheduled: function () {
    return this._mixer._isActiveAction(this);
  },
  startAt: function (bf) {
    this._startTime = bf;
    return this;
  },
  setLoop: function (bf, bg) {
    this.loop = bf;
    this.repetitions = bg;
    return this;
  },
  setEffectiveWeight: function (bf) {
    this.weight = bf;
    this._effectiveWeight = this.enabled ? bf : 0;
    return this.stopFading();
  },
  getEffectiveWeight: function () {
    return this._effectiveWeight;
  },
  fadeIn: function (bf) {
    return this._scheduleFading(bf, 0, 1);
  },
  fadeOut: function (bf) {
    return this._scheduleFading(bf, 1, 0);
  },
  crossFadeFrom: function (bf, bg, bh) {
    bf.fadeOut(bg);
    this.fadeIn(bg);
    if (bh) {
      var bi = this._clip.duration;
      var bF = bf._clip.duration;
      var bG = bF / bi;
      var bH = bi / bF;
      bf.warp(1, bG, bg);
      this.warp(bH, 1, bg);
    }
    return this;
  },
  crossFadeTo: function (bf, bg, bh) {
    return bf.crossFadeFrom(this, bg, bh);
  },
  stopFading: function () {
    var bf = this._weightInterpolant;
    if (bf !== null) {
      this._weightInterpolant = null;
      this._mixer._takeBackControlInterpolant(bf);
    }
    return this;
  },
  setEffectiveTimeScale: function (bf) {
    this.timeScale = bf;
    this._effectiveTimeScale = this.paused ? 0 : bf;
    return this.stopWarping();
  },
  getEffectiveTimeScale: function () {
    return this._effectiveTimeScale;
  },
  setDuration: function (bf) {
    this.timeScale = this._clip.duration / bf;
    return this.stopWarping();
  },
  syncWith: function (bf) {
    this.time = bf.time;
    this.timeScale = bf.timeScale;
    return this.stopWarping();
  },
  halt: function (bf) {
    return this.warp(this._effectiveTimeScale, 0, bf);
  },
  warp: function (bf, bg, bh) {
    var bi = this._mixer;
    var bF = bi.time;
    var bG = this._timeScaleInterpolant;
    var bH = this.timeScale;
    if (bG === null) {
      bG = bi._lendControlInterpolant();
      this._timeScaleInterpolant = bG;
    }
    var bI = bG.parameterPositions;
    var bJ = bG.sampleValues;
    bI[0] = bF;
    bI[1] = bF + bh;
    bJ[0] = bf / bH;
    bJ[1] = bg / bH;
    return this;
  },
  stopWarping: function () {
    var bf = this._timeScaleInterpolant;
    if (bf !== null) {
      this._timeScaleInterpolant = null;
      this._mixer._takeBackControlInterpolant(bf);
    }
    return this;
  },
  getMixer: function () {
    return this._mixer;
  },
  getClip: function () {
    return this._clip;
  },
  getRoot: function () {
    return this._localRoot || this._mixer._root;
  },
  _update: function (bf, bg, bh, bi) {
    if (this.enabled) {
      var bF = this._startTime;
      if (bF !== null) {
        var bG = (bf - bF) * bh;
        if (bG < 0 || bh === 0) {
          return;
        }
        this._startTime = null;
        bg = bh * bG;
      }
      bg *= this._updateTimeScale(bf);
      var bH = this._updateTime(bg);
      var bI = this._updateWeight(bf);
      if (bI > 0) {
        for (var bJ = this._interpolants, bK = this._propertyBindings, bL = 0, bM = bJ.length; bL !== bM; ++bL) {
          bJ[bL].evaluate(bH);
          bK[bL].accumulate(bi, bI);
        }
      }
    } else {
      this._updateWeight(bf);
    }
  },
  _updateWeight: function (bf) {
    var bg = 0;
    if (this.enabled) {
      bg = this.weight;
      var bh = this._weightInterpolant;
      if (bh !== null) {
        var bi = bh.evaluate(bf)[0];
        bg *= bi;
        if (bf > bh.parameterPositions[1]) {
          this.stopFading();
          if (bi === 0) {
            this.enabled = false;
          }
        }
      }
    }
    this._effectiveWeight = bg;
    return bg;
  },
  _updateTimeScale: function (bf) {
    var bg = 0;
    if (!this.paused) {
      bg = this.timeScale;
      var bh = this._timeScaleInterpolant;
      if (bh !== null) {
        bg *= bh.evaluate(bf)[0];
        if (bf > bh.parameterPositions[1]) {
          this.stopWarping();
          if (bg === 0) {
            this.paused = true;
          } else {
            this.timeScale = bg;
          }
        }
      }
    }
    this._effectiveTimeScale = bg;
    return bg;
  },
  _updateTime: function (bf) {
    var bg = this.time + bf;
    var bh = this._clip.duration;
    var bi = this.loop;
    var bF = this._loopCount;
    var bG = bi === LoopPingPong;
    if (bf === 0) {
      if (bF === -1) {
        return bg;
      } else if (bG && (bF & 1) == 1) {
        return bh - bg;
      } else {
        return bg;
      }
    }
    if (bi === LoopOnce) {
      if (bF === -1) {
        this._loopCount = 0;
        this._setEndings(true, true, false);
      }
      b3t: {
        if (bg >= bh) {
          bg = bh;
        } else {
          if (bg >= 0) {
            this.time = bg;
            break b3t;
          }
          bg = 0;
        }
        if (this.clampWhenFinished) {
          this.paused = true;
        } else {
          this.enabled = false;
        }
        this.time = bg;
        this._mixer.dispatchEvent({
          type: "finished",
          action: this,
          direction: bf < 0 ? -1 : 1
        });
      }
    } else {
      if (bF === -1) {
        if (bf >= 0) {
          bF = 0;
          this._setEndings(true, this.repetitions === 0, bG);
        } else {
          this._setEndings(this.repetitions === 0, true, bG);
        }
      }
      if (bg >= bh || bg < 0) {
        var bH = Math.floor(bg / bh);
        bg -= bh * bH;
        bF += Math.abs(bH);
        var bI = this.repetitions - bF;
        if (bI <= 0) {
          if (this.clampWhenFinished) {
            this.paused = true;
          } else {
            this.enabled = false;
          }
          bg = bf > 0 ? bh : 0;
          this.time = bg;
          this._mixer.dispatchEvent({
            type: "finished",
            action: this,
            direction: bf > 0 ? 1 : -1
          });
        } else {
          if (bI === 1) {
            var bJ = bf < 0;
            this._setEndings(bJ, !bJ, bG);
          } else {
            this._setEndings(false, false, bG);
          }
          this._loopCount = bF;
          this.time = bg;
          this._mixer.dispatchEvent({
            type: "loop",
            action: this,
            loopDelta: bH
          });
        }
      } else {
        this.time = bg;
      }
      if (bG && (bF & 1) == 1) {
        return bh - bg;
      }
    }
    return bg;
  },
  _setEndings: function (bf, bg, bh) {
    var bi = this._interpolantSettings;
    if (bh) {
      bi.endingStart = ZeroSlopeEnding;
      bi.endingEnd = ZeroSlopeEnding;
    } else {
      bi.endingStart = bf ? this.zeroSlopeAtStart ? ZeroSlopeEnding : ZeroCurvatureEnding : WrapAroundEnding;
      bi.endingEnd = bg ? this.zeroSlopeAtEnd ? ZeroSlopeEnding : ZeroCurvatureEnding : WrapAroundEnding;
    }
  },
  _scheduleFading: function (bf, bg, bh) {
    var bi = this._mixer;
    var bF = bi.time;
    var bG = this._weightInterpolant;
    if (bG === null) {
      bG = bi._lendControlInterpolant();
      this._weightInterpolant = bG;
    }
    var bH = bG.parameterPositions;
    var bI = bG.sampleValues;
    bH[0] = bF;
    bI[0] = bg;
    bH[1] = bF + bf;
    bI[1] = bh;
    return this;
  }
});
AnimationMixer.prototype = Object.assign(Object.create(EventDispatcher.prototype), {
  constructor: AnimationMixer,
  _bindAction: function (bf, bg) {
    var bh = bf._localRoot || this._root;
    var bi = bf._clip.tracks;
    var bF = bi.length;
    var bG = bf._propertyBindings;
    var bH = bf._interpolants;
    var bI = bh.uuid;
    var bJ = this._bindingsByRootAndName;
    var bK = bJ[bI];
    if (bK === undefined) {
      bK = {};
      bJ[bI] = bK;
    }
    for (var bL = 0; bL !== bF; ++bL) {
      var bM = bi[bL];
      var bN = bM.name;
      var bO = bK[bN];
      if (bO !== undefined) {
        bG[bL] = bO;
      } else {
        if ((bO = bG[bL]) !== undefined) {
          if (bO._cacheIndex === null) {
            ++bO.referenceCount;
            this._addInactiveBinding(bO, bI, bN);
          }
          continue;
        }
        var bP = bg && bg._propertyBindings[bL].binding.parsedPath;
        ++(bO = new PropertyMixer(PropertyBinding.create(bh, bN, bP), bM.ValueTypeName, bM.getValueSize())).referenceCount;
        this._addInactiveBinding(bO, bI, bN);
        bG[bL] = bO;
      }
      bH[bL].resultBuffer = bO.buffer;
    }
  },
  _activateAction: function (bf) {
    if (!this._isActiveAction(bf)) {
      if (bf._cacheIndex === null) {
        var bg = (bf._localRoot || this._root).uuid;
        var bh = bf._clip.uuid;
        var bi = this._actionsByClip[bh];
        this._bindAction(bf, bi && bi.knownActions[0]);
        this._addInactiveAction(bf, bh, bg);
      }
      for (var bF = bf._propertyBindings, bG = 0, bH = bF.length; bG !== bH; ++bG) {
        var bI = bF[bG];
        if (bI.useCount++ == 0) {
          this._lendBinding(bI);
          bI.saveOriginalState();
        }
      }
      this._lendAction(bf);
    }
  },
  _deactivateAction: function (bf) {
    if (this._isActiveAction(bf)) {
      for (var bg = bf._propertyBindings, bh = 0, bi = bg.length; bh !== bi; ++bh) {
        var bF = bg[bh];
        if (--bF.useCount == 0) {
          bF.restoreOriginalState();
          this._takeBackBinding(bF);
        }
      }
      this._takeBackAction(bf);
    }
  },
  _initMemoryManager: function () {
    this._actions = [];
    this._nActiveActions = 0;
    this._actionsByClip = {};
    this._bindings = [];
    this._nActiveBindings = 0;
    this._bindingsByRootAndName = {};
    this._controlInterpolants = [];
    this._nActiveControlInterpolants = 0;
    var bf = this;
    this.stats = {
      actions: {
        get total() {
          return bf._actions.length;
        },
        get inUse() {
          return bf._nActiveActions;
        }
      },
      bindings: {
        get total() {
          return bf._bindings.length;
        },
        get inUse() {
          return bf._nActiveBindings;
        }
      },
      controlInterpolants: {
        get total() {
          return bf._controlInterpolants.length;
        },
        get inUse() {
          return bf._nActiveControlInterpolants;
        }
      }
    };
  },
  _isActiveAction: function (bf) {
    var bg = bf._cacheIndex;
    return bg !== null && bg < this._nActiveActions;
  },
  _addInactiveAction: function (bf, bg, bh) {
    var bi = this._actions;
    var bF = this._actionsByClip;
    var bG = bF[bg];
    if (bG === undefined) {
      bG = {
        knownActions: [bf],
        actionByRoot: {}
      };
      bf._byClipCacheIndex = 0;
      bF[bg] = bG;
    } else {
      var bH = bG.knownActions;
      bf._byClipCacheIndex = bH.length;
      bH.push(bf);
    }
    bf._cacheIndex = bi.length;
    bi.push(bf);
    bG.actionByRoot[bh] = bf;
  },
  _removeInactiveAction: function (bf) {
    var bg = this._actions;
    var bh = bg[bg.length - 1];
    var bi = bf._cacheIndex;
    bh._cacheIndex = bi;
    bg[bi] = bh;
    bg.pop();
    bf._cacheIndex = null;
    var bF = bf._clip.uuid;
    var bG = this._actionsByClip;
    var bH = bG[bF];
    var bI = bH.knownActions;
    var bJ = bI[bI.length - 1];
    var bK = bf._byClipCacheIndex;
    bJ._byClipCacheIndex = bK;
    bI[bK] = bJ;
    bI.pop();
    bf._byClipCacheIndex = null;
    delete bH.actionByRoot[(bf._localRoot || this._root).uuid];
    if (bI.length === 0) {
      delete bG[bF];
    }
    this._removeInactiveBindingsForAction(bf);
  },
  _removeInactiveBindingsForAction: function (bf) {
    for (var bg = bf._propertyBindings, bh = 0, bi = bg.length; bh !== bi; ++bh) {
      var bF = bg[bh];
      if (--bF.referenceCount == 0) {
        this._removeInactiveBinding(bF);
      }
    }
  },
  _lendAction: function (bf) {
    var bg = this._actions;
    var bh = bf._cacheIndex;
    var bi = this._nActiveActions++;
    var bF = bg[bi];
    bf._cacheIndex = bi;
    bg[bi] = bf;
    bF._cacheIndex = bh;
    bg[bh] = bF;
  },
  _takeBackAction: function (bf) {
    var bg = this._actions;
    var bh = bf._cacheIndex;
    var bi = --this._nActiveActions;
    var bF = bg[bi];
    bf._cacheIndex = bi;
    bg[bi] = bf;
    bF._cacheIndex = bh;
    bg[bh] = bF;
  },
  _addInactiveBinding: function (bf, bg, bh) {
    var bi = this._bindingsByRootAndName;
    var bF = bi[bg];
    var bG = this._bindings;
    if (bF === undefined) {
      bF = {};
      bi[bg] = bF;
    }
    bF[bh] = bf;
    bf._cacheIndex = bG.length;
    bG.push(bf);
  },
  _removeInactiveBinding: function (bf) {
    var bg = this._bindings;
    var bh = bf.binding;
    var bi = bh.rootNode.uuid;
    var bF = bh.path;
    var bG = this._bindingsByRootAndName;
    var bH = bG[bi];
    var bI = bg[bg.length - 1];
    var bJ = bf._cacheIndex;
    bI._cacheIndex = bJ;
    bg[bJ] = bI;
    bg.pop();
    delete bH[bF];
    b4Z: {
      for (var bK in bH) {
        break b4Z;
      }
      delete bG[bi];
    }
  },
  _lendBinding: function (bf) {
    var bg = this._bindings;
    var bh = bf._cacheIndex;
    var bi = this._nActiveBindings++;
    var bF = bg[bi];
    bf._cacheIndex = bi;
    bg[bi] = bf;
    bF._cacheIndex = bh;
    bg[bh] = bF;
  },
  _takeBackBinding: function (bf) {
    var bg = this._bindings;
    var bh = bf._cacheIndex;
    var bi = --this._nActiveBindings;
    var bF = bg[bi];
    bf._cacheIndex = bi;
    bg[bi] = bf;
    bF._cacheIndex = bh;
    bg[bh] = bF;
  },
  _lendControlInterpolant: function () {
    var bf = this._controlInterpolants;
    var bg = this._nActiveControlInterpolants++;
    var bh = bf[bg];
    if (bh === undefined) {
      (bh = new LinearInterpolant(new Float32Array(2), new Float32Array(2), 1, this._controlInterpolantsResultBuffer)).__cacheIndex = bg;
      bf[bg] = bh;
    }
    return bh;
  },
  _takeBackControlInterpolant: function (bf) {
    var bg = this._controlInterpolants;
    var bh = bf.__cacheIndex;
    var bi = --this._nActiveControlInterpolants;
    var bF = bg[bi];
    bf.__cacheIndex = bi;
    bg[bi] = bf;
    bF.__cacheIndex = bh;
    bg[bh] = bF;
  },
  _controlInterpolantsResultBuffer: new Float32Array(1),
  clipAction: function (bf, bg) {
    var bh = bg || this._root;
    var bi = bh.uuid;
    var bF = typeof bf == "string" ? AnimationClip.findByName(bh, bf) : bf;
    var bG = bF !== null ? bF.uuid : bf;
    var bH = this._actionsByClip[bG];
    var bI = null;
    if (bH !== undefined) {
      var bJ = bH.actionByRoot[bi];
      if (bJ !== undefined) {
        return bJ;
      }
      bI = bH.knownActions[0];
      if (bF === null) {
        bF = bI._clip;
      }
    }
    if (bF === null) {
      return null;
    }
    var bK = new aW7(this, bF, bg);
    this._bindAction(bK, bI);
    this._addInactiveAction(bK, bG, bi);
    return bK;
  },
  existingAction: function (bf, bg) {
    var bh = bg || this._root;
    var bi = bh.uuid;
    var bF = typeof bf == "string" ? AnimationClip.findByName(bh, bf) : bf;
    var bG = bF ? bF.uuid : bf;
    var bH = this._actionsByClip[bG];
    return bH !== undefined && bH.actionByRoot[bi] || null;
  },
  stopAllAction: function () {
    var bf = this._actions;
    var bg = this._nActiveActions;
    var bh = this._bindings;
    var bi = this._nActiveBindings;
    this._nActiveActions = 0;
    this._nActiveBindings = 0;
    for (var bF = 0; bF !== bg; ++bF) {
      bf[bF].reset();
    }
    for (bF = 0; bF !== bi; ++bF) {
      bh[bF].useCount = 0;
    }
    return this;
  },
  update: function (bf) {
    bf *= this.timeScale;
    for (var bg = this._actions, bh = this._nActiveActions, bi = this.time += bf, bF = Math.sign(bf), bG = this._accuIndex ^= 1, bH = 0; bH !== bh; ++bH) {
      bg[bH]._update(bi, bf, bF, bG);
    }
    var bI = this._bindings;
    var bJ = this._nActiveBindings;
    for (bH = 0; bH !== bJ; ++bH) {
      bI[bH].apply(bG);
    }
    return this;
  },
  getRoot: function () {
    return this._root;
  },
  uncacheClip: function (bf) {
    var bg = this._actions;
    var bh = bf.uuid;
    var bi = this._actionsByClip;
    var bF = bi[bh];
    if (bF !== undefined) {
      for (var bG = bF.knownActions, bH = 0, bI = bG.length; bH !== bI; ++bH) {
        var bJ = bG[bH];
        this._deactivateAction(bJ);
        var bK = bJ._cacheIndex;
        var bL = bg[bg.length - 1];
        bJ._cacheIndex = null;
        bJ._byClipCacheIndex = null;
        bL._cacheIndex = bK;
        bg[bK] = bL;
        bg.pop();
        this._removeInactiveBindingsForAction(bJ);
      }
      delete bi[bh];
    }
  },
  uncacheRoot: function (bf) {
    var bg = bf.uuid;
    var bh = this._actionsByClip;
    for (var bi in bh) {
      var bF = bh[bi].actionByRoot[bg];
      if (bF !== undefined) {
        this._deactivateAction(bF);
        this._removeInactiveAction(bF);
      }
    }
    var bG = this._bindingsByRootAndName[bg];
    if (bG !== undefined) {
      for (var bH in bG) {
        var bI = bG[bH];
        bI.restoreOriginalState();
        this._removeInactiveBinding(bI);
      }
    }
  },
  uncacheAction: function (bf, bg) {
    var bh = this.existingAction(bf, bg);
    if (bh !== null) {
      this._deactivateAction(bh);
      this._removeInactiveAction(bh);
    }
  }
});
Uniform.prototype.clone = function () {
  return new Uniform(this.value.clone === undefined ? this.value : this.value.clone());
};
InstancedInterleavedBuffer.prototype = Object.assign(Object.create(InterleavedBuffer.prototype), {
  constructor: InstancedInterleavedBuffer,
  isInstancedInterleavedBuffer: true,
  copy: function (bf) {
    InterleavedBuffer.prototype.copy.call(this, bf);
    this.meshPerAttribute = bf.meshPerAttribute;
    return this;
  }
});
Object.assign(Raycaster.prototype, {
  linePrecision: 1,
  set: function (bf, bg) {
    this.ray.set(bf, bg);
  },
  setFromCamera: function (bf, bg) {
    if (bg && bg.isPerspectiveCamera) {
      this.ray.origin.setFromMatrixPosition(bg.matrixWorld);
      this.ray.direction.set(bf.x, bf.y, 0.5).unproject(bg).sub(this.ray.origin).normalize();
    } else if (bg && bg.isOrthographicCamera) {
      this.ray.origin.set(bf.x, bf.y, (bg.near + bg.far) / (bg.near - bg.far)).unproject(bg);
      this.ray.direction.set(0, 0, -1).transformDirection(bg.matrixWorld);
    } else {
      console.error("THREE.Raycaster: Unsupported camera type.");
    }
  },
  intersectObject: function (bf, bg, bh) {
    var bi = bh || [];
    aWx(bf, this, bi, bg);
    bi.sort(aWu);
    return bi;
  },
  intersectObjects: function (bf, bg, bh) {
    var bi = bh || [];
    if (Array.isArray(bf) === false) {
      console.warn("THREE.Raycaster.intersectObjects: objects is not an Array.");
      return bi;
    }
    for (var bF = 0, bG = bf.length; bF < bG; bF++) {
      aWx(bf[bF], this, bi, bg);
    }
    bi.sort(aWu);
    return bi;
  }
});
Object.assign(Spherical.prototype, {
  set: function (bf, bg, bh) {
    this.radius = bf;
    this.phi = bg;
    this.theta = bh;
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.radius = bf.radius;
    this.phi = bf.phi;
    this.theta = bf.theta;
    return this;
  },
  makeSafe: function () {
    this.phi = Math.max(0.000001, Math.min(Math.PI - 0.000001, this.phi));
    return this;
  },
  setFromVector3: function (bf) {
    return this.setFromCartesianCoords(bf.x, bf.y, bf.z);
  },
  setFromCartesianCoords: function (bf, bg, bh) {
    this.radius = Math.sqrt(bf * bf + bg * bg + bh * bh);
    if (this.radius === 0) {
      this.theta = 0;
      this.phi = 0;
    } else {
      this.theta = Math.atan2(bf, bh);
      this.phi = Math.acos(Math.clamp(bg / this.radius, -1, 1));
    }
    return this;
  }
});
Object.assign(Cylindrical.prototype, {
  set: function (bf, bg, bh) {
    this.radius = bf;
    this.theta = bg;
    this.y = bh;
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.radius = bf.radius;
    this.theta = bf.theta;
    this.y = bf.y;
    return this;
  },
  setFromVector3: function (bf) {
    return this.setFromCartesianCoords(bf.x, bf.y, bf.z);
  },
  setFromCartesianCoords: function (bf, bg, bh) {
    this.radius = Math.sqrt(bf * bf + bh * bh);
    this.theta = Math.atan2(bf, bh);
    this.y = bg;
    return this;
  }
});
Object.assign(Box2.prototype, {
  set: function (bf, bg) {
    this.min.copy(bf);
    this.max.copy(bg);
    return this;
  },
  setFromPoints: function (bf) {
    this.makeEmpty();
    for (var bg = 0, bh = bf.length; bg < bh; bg++) {
      this.expandByPoint(bf[bg]);
    }
    return this;
  },
  setFromCenterAndSize: function () {
    var bf = new Vector2();
    return function (bg, bh) {
      var bi = bf.copy(bh).multiplyScalar(0.5);
      this.min.copy(bg).sub(bi);
      this.max.copy(bg).add(bi);
      return this;
    };
  }(),
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.min.copy(bf.min);
    this.max.copy(bf.max);
    return this;
  },
  makeEmpty: function () {
    this.min.x = this.min.y = Infinity;
    this.max.x = this.max.y = -Infinity;
    return this;
  },
  isEmpty: function () {
    return this.max.x < this.min.x || this.max.y < this.min.y;
  },
  getCenter: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Box2: .getCenter() target is now required");
      bf = new Vector2();
    }
    if (this.isEmpty()) {
      return bf.set(0, 0);
    } else {
      return bf.addVectors(this.min, this.max).multiplyScalar(0.5);
    }
  },
  getSize: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Box2: .getSize() target is now required");
      bf = new Vector2();
    }
    if (this.isEmpty()) {
      return bf.set(0, 0);
    } else {
      return bf.subVectors(this.max, this.min);
    }
  },
  expandByPoint: function (bf) {
    this.min.min(bf);
    this.max.max(bf);
    return this;
  },
  expandByVector: function (bf) {
    this.min.sub(bf);
    this.max.add(bf);
    return this;
  },
  expandByScalar: function (bf) {
    this.min.addScalar(-bf);
    this.max.addScalar(bf);
    return this;
  },
  containsPoint: function (bf) {
    return bf.x >= this.min.x && bf.x <= this.max.x && bf.y >= this.min.y && bf.y <= this.max.y;
  },
  containsBox: function (bf) {
    return this.min.x <= bf.min.x && bf.max.x <= this.max.x && this.min.y <= bf.min.y && bf.max.y <= this.max.y;
  },
  getParameter: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Box2: .getParameter() target is now required");
      bg = new Vector2();
    }
    return bg.set((bf.x - this.min.x) / (this.max.x - this.min.x), (bf.y - this.min.y) / (this.max.y - this.min.y));
  },
  intersectsBox: function (bf) {
    return bf.max.x >= this.min.x && bf.min.x <= this.max.x && bf.max.y >= this.min.y && bf.min.y <= this.max.y;
  },
  clampPoint: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Box2: .clampPoint() target is now required");
      bg = new Vector2();
    }
    return bg.copy(bf).clamp(this.min, this.max);
  },
  distanceToPoint: function () {
    var bf = new Vector2();
    return function (bg) {
      return bf.copy(bg).clamp(this.min, this.max).sub(bg).length();
    };
  }(),
  intersect: function (bf) {
    this.min.max(bf.min);
    this.max.min(bf.max);
    return this;
  },
  union: function (bf) {
    this.min.min(bf.min);
    this.max.max(bf.max);
    return this;
  },
  translate: function (bf) {
    this.min.add(bf);
    this.max.add(bf);
    return this;
  },
  equals: function (bf) {
    return bf.min.equals(this.min) && bf.max.equals(this.max);
  }
});
Object.assign(Line3.prototype, {
  set: function (bf, bg) {
    this.start.copy(bf);
    this.end.copy(bg);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  },
  copy: function (bf) {
    this.start.copy(bf.start);
    this.end.copy(bf.end);
    return this;
  },
  getCenter: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Line3: .getCenter() target is now required");
      bf = new Vector3();
    }
    return bf.addVectors(this.start, this.end).multiplyScalar(0.5);
  },
  delta: function (bf) {
    if (bf === undefined) {
      console.warn("THREE.Line3: .delta() target is now required");
      bf = new Vector3();
    }
    return bf.subVectors(this.end, this.start);
  },
  distanceSq: function () {
    return this.start.distanceToSquared(this.end);
  },
  distance: function () {
    return this.start.distanceTo(this.end);
  },
  at: function (bf, bg) {
    if (bg === undefined) {
      console.warn("THREE.Line3: .at() target is now required");
      bg = new Vector3();
    }
    return this.delta(bg).multiplyScalar(bf).add(this.start);
  },
  closestPointToPointParameter: (aVN = new Vector3(), aVO = new Vector3(), function (bf, bg) {
    aVN.subVectors(bf, this.start);
    aVO.subVectors(this.end, this.start);
    var bh = aVO.dot(aVO);
    var bi = aVO.dot(aVN) / bh;
    if (bg) {
      bi = Math.clamp(bi, 0, 1);
    }
    return bi;
  }),
  closestPointToPoint: function (bf, bg, bh) {
    var bi = this.closestPointToPointParameter(bf, bg);
    if (bh === undefined) {
      console.warn("THREE.Line3: .closestPointToPoint() target is now required");
      bh = new Vector3();
    }
    return this.delta(bh).multiplyScalar(bi).add(this.start);
  },
  applyMatrix4: function (bf) {
    this.start.applyMatrix4(bf);
    this.end.applyMatrix4(bf);
    return this;
  },
  equals: function (bf) {
    return bf.start.equals(this.start) && bf.end.equals(this.end);
  }
});
ImmediateRenderObject.prototype = Object.create(Object3D.prototype);
ImmediateRenderObject.prototype.constructor = ImmediateRenderObject;
ImmediateRenderObject.prototype.isImmediateRenderObject = true;
VertexNormalsHelper.prototype = Object.create(LineSegments.prototype);
VertexNormalsHelper.prototype.constructor = VertexNormalsHelper;
VertexNormalsHelper.prototype.update = function () {
  var bf = new Vector3();
  var bg = new Vector3();
  var bh = new Matrix3();
  return function () {
    var bi = ["a", "b", "c"];
    this.object.updateMatrixWorld(true);
    bh.getNormalMatrix(this.object.matrixWorld);
    var bF = this.object.matrixWorld;
    var bG = this.geometry.attributes.position;
    var bH = this.object.geometry;
    if (bH && bH.isGeometry) {
      for (var bI = bH.vertices, bJ = bH.faces, bK = 0, bL = 0, bM = bJ.length; bL < bM; bL++) {
        for (var bN = bJ[bL], bO = 0, bP = bN.vertexNormals.length; bO < bP; bO++) {
          var bQ = bI[bN[bi[bO]]];
          var bR = bN.vertexNormals[bO];
          bf.copy(bQ).applyMatrix4(bF);
          bg.copy(bR).applyMatrix3(bh).normalize().multiplyScalar(this.size).add(bf);
          bG.setXYZ(bK, bf.x, bf.y, bf.z);
          bK += 1;
          bG.setXYZ(bK, bg.x, bg.y, bg.z);
          bK += 1;
        }
      }
    } else if (bH && bH.isBufferGeometry) {
      var bS = bH.attributes.position;
      var bT = bH.attributes.normal;
      bK = 0;
      bO = 0;
      bP = bS.count;
      for (; bO < bP; bO++) {
        bf.set(bS.getX(bO), bS.getY(bO), bS.getZ(bO)).applyMatrix4(bF);
        bg.set(bT.getX(bO), bT.getY(bO), bT.getZ(bO));
        bg.applyMatrix3(bh).normalize().multiplyScalar(this.size).add(bf);
        bG.setXYZ(bK, bf.x, bf.y, bf.z);
        bK += 1;
        bG.setXYZ(bK, bg.x, bg.y, bg.z);
        bK += 1;
      }
    }
    bG.needsUpdate = true;
  };
}();
SpotLightHelper.prototype = Object.create(Object3D.prototype);
SpotLightHelper.prototype.constructor = SpotLightHelper;
SpotLightHelper.prototype.dispose = function () {
  this.cone.geometry.dispose();
  this.cone.material.dispose();
};
SpotLightHelper.prototype.update = function () {
  var bf = new Vector3();
  return function () {
    this.light.updateMatrixWorld();
    var bg = this.light.distance ? this.light.distance : 1000;
    var bh = bg * Math.tan(this.light.angle);
    this.cone.scale.set(bh, bh, bg);
    bf.setFromMatrixPosition(this.light.target.matrixWorld);
    this.cone.lookAt(bf);
    if (this.color !== undefined) {
      this.cone.material.color.set(this.color);
    } else {
      this.cone.material.color.copy(this.light.color);
    }
  };
}();
SkeletonHelper.prototype = Object.create(LineSegments.prototype);
SkeletonHelper.prototype.constructor = SkeletonHelper;
SkeletonHelper.prototype.updateMatrixWorld = function () {
  var bf = new Vector3();
  var bg = new Matrix4();
  var bh = new Matrix4();
  return function (bi) {
    var bF = this.bones;
    var bG = this.geometry;
    var bH = bG.getAttribute("position");
    bh.getInverse(this.root.matrixWorld);
    for (var bI = 0, bJ = 0; bI < bF.length; bI++) {
      var bK = bF[bI];
      if (bK.parent && bK.parent.isBone) {
        bg.multiplyMatrices(bh, bK.matrixWorld);
        bf.setFromMatrixPosition(bg);
        bH.setXYZ(bJ, bf.x, bf.y, bf.z);
        bg.multiplyMatrices(bh, bK.parent.matrixWorld);
        bf.setFromMatrixPosition(bg);
        bH.setXYZ(bJ + 1, bf.x, bf.y, bf.z);
        bJ += 2;
      }
    }
    bG.getAttribute("position").needsUpdate = true;
    Object3D.prototype.updateMatrixWorld.call(this, bi);
  };
}();
PointLightHelper.prototype = Object.create(Mesh.prototype);
PointLightHelper.prototype.constructor = PointLightHelper;
PointLightHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material.dispose();
};
PointLightHelper.prototype.update = function () {
  if (this.color !== undefined) {
    this.material.color.set(this.color);
  } else {
    this.material.color.copy(this.light.color);
  }
};
RectAreaLightHelper.prototype = Object.create(Line.prototype);
RectAreaLightHelper.prototype.constructor = RectAreaLightHelper;
RectAreaLightHelper.prototype.update = function () {
  this.scale.set(this.light.width * 0.5, this.light.height * 0.5, 1);
  if (this.color !== undefined) {
    this.material.color.set(this.color);
    this.children[0].material.color.set(this.color);
  } else {
    this.material.color.copy(this.light.color).multiplyScalar(this.light.intensity);
    var bf = this.material.color;
    var bg = Math.max(bf.r, bf.g, bf.b);
    if (bg > 1) {
      bf.multiplyScalar(1 / bg);
    }
    this.children[0].material.color.copy(this.material.color);
  }
};
RectAreaLightHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material.dispose();
  this.children[0].geometry.dispose();
  this.children[0].material.dispose();
};
HemisphereLightHelper.prototype = Object.create(Object3D.prototype);
HemisphereLightHelper.prototype.constructor = HemisphereLightHelper;
HemisphereLightHelper.prototype.dispose = function () {
  this.children[0].geometry.dispose();
  this.children[0].material.dispose();
};
HemisphereLightHelper.prototype.update = function () {
  var bf = new Vector3();
  var bg = new Color();
  var bh = new Color();
  return function () {
    var bi = this.children[0];
    if (this.color !== undefined) {
      this.material.color.set(this.color);
    } else {
      var bF = bi.geometry.getAttribute("color");
      bg.copy(this.light.color);
      bh.copy(this.light.groundColor);
      for (var bG = 0, bH = bF.count; bG < bH; bG++) {
        var bI = bG < bH / 2 ? bg : bh;
        bF.setXYZ(bG, bI.r, bI.g, bI.b);
      }
      bF.needsUpdate = true;
    }
    bi.lookAt(bf.setFromMatrixPosition(this.light.matrixWorld).negate());
  };
}();
LightProbeHelper.prototype = Object.create(Mesh.prototype);
LightProbeHelper.prototype.constructor = LightProbeHelper;
LightProbeHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material.dispose();
};
LightProbeHelper.prototype.onBeforeRender = function () {
  this.position.copy(this.lightProbe.position);
  this.scale.set(1, 1, 1).multiplyScalar(this.size);
  this.material.uniforms.intensity.value = this.lightProbe.intensity;
};
GridHelper.prototype = Object.assign(Object.create(LineSegments.prototype), {
  constructor: GridHelper,
  copy: function (bf) {
    LineSegments.prototype.copy.call(this, bf);
    this.geometry.copy(bf.geometry);
    this.material.copy(bf.material);
    return this;
  },
  clone: function () {
    return new this.constructor().copy(this);
  }
});
PolarGridHelper.prototype = Object.create(LineSegments.prototype);
PolarGridHelper.prototype.constructor = PolarGridHelper;
PositionalAudioHelper.prototype = Object.create(Line.prototype);
PositionalAudioHelper.prototype.constructor = PositionalAudioHelper;
PositionalAudioHelper.prototype.update = function () {
  var bf;
  var bg;
  var bh = this.audio;
  var bi = this.range;
  var bF = this.divisionsInnerAngle;
  var bG = this.divisionsOuterAngle;
  var bH = Math.degToRad(bh.panner.coneInnerAngle);
  var bI = Math.degToRad(bh.panner.coneOuterAngle);
  var bJ = bH / 2;
  var bK = bI / 2;
  var bL = 0;
  var bM = 0;
  var bN = this.geometry;
  var bO = bN.attributes.position;
  function bP(bh, bF, bG, bH) {
    var bI = (bF - bh) / bG;
    bO.setXYZ(bL, 0, 0, 0);
    bM++;
    bf = bh;
    for (; bf < bF; bf += bI) {
      bg = bL + bM;
      bO.setXYZ(bg, Math.sin(bf) * bi, 0, Math.cos(bf) * bi);
      bO.setXYZ(bg + 1, Math.sin(Math.min(bf + bI, bF)) * bi, 0, Math.cos(Math.min(bf + bI, bF)) * bi);
      bO.setXYZ(bg + 2, 0, 0, 0);
      bM += 3;
    }
    bN.addGroup(bL, bM, bH);
    bL += bM;
    bM = 0;
  }
  bN.clearGroups();
  bP(-bK, -bJ, bG, 0);
  bP(-bJ, bJ, bF, 1);
  bP(bJ, bK, bG, 0);
  bO.needsUpdate = true;
  if (bH === bI) {
    this.material[0].visible = false;
  }
};
PositionalAudioHelper.prototype.dispose = function () {
  this.geometry.dispose();
  this.material[0].dispose();
  this.material[1].dispose();
};
FaceNormalsHelper.prototype = Object.create(LineSegments.prototype);
FaceNormalsHelper.prototype.constructor = FaceNormalsHelper;
FaceNormalsHelper.prototype.update = function () {
  var bf = new Vector3();
  var bg = new Vector3();
  var bh = new Matrix3();
  return function () {
    this.object.updateMatrixWorld(true);
    bh.getNormalMatrix(this.object.matrixWorld);
    for (var bi = this.object.matrixWorld, bF = this.geometry.attributes.position, bG = this.object.geometry, bH = bG.vertices, bI = bG.faces, bJ = 0, bK = 0, bL = bI.length; bK < bL; bK++) {
      var bM = bI[bK];
      var bN = bM.normal;
      bf.copy(bH[bM.a]).add(bH[bM.b]).add(bH[bM.c]).divideScalar(3).applyMatrix4(bi);
      bg.copy(bN).applyMatrix3(bh).normalize().multiplyScalar(this.size).add(bf);
      bF.setXYZ(bJ, bf.x, bf.y, bf.z);
      bJ += 1;
      bF.setXYZ(bJ, bg.x, bg.y, bg.z);
      bJ += 1;
    }
    bF.needsUpdate = true;
  };
}();
DirectionalLightHelper.prototype = Object.create(Object3D.prototype);
DirectionalLightHelper.prototype.constructor = DirectionalLightHelper;
DirectionalLightHelper.prototype.dispose = function () {
  this.lightPlane.geometry.dispose();
  this.lightPlane.material.dispose();
  this.targetLine.geometry.dispose();
  this.targetLine.material.dispose();
};
DirectionalLightHelper.prototype.update = function () {
  var bf = new Vector3();
  var bg = new Vector3();
  var bh = new Vector3();
  return function () {
    bf.setFromMatrixPosition(this.light.matrixWorld);
    bg.setFromMatrixPosition(this.light.target.matrixWorld);
    bh.subVectors(bg, bf);
    this.lightPlane.lookAt(bg);
    if (this.color !== undefined) {
      this.lightPlane.material.color.set(this.color);
      this.targetLine.material.color.set(this.color);
    } else {
      this.lightPlane.material.color.copy(this.light.color);
      this.targetLine.material.color.copy(this.light.color);
    }
    this.targetLine.lookAt(bg);
    this.targetLine.scale.z = bh.length();
  };
}();
CameraHelper.prototype = Object.create(LineSegments.prototype);
CameraHelper.prototype.constructor = CameraHelper;
CameraHelper.prototype.update = function () {
  var bf;
  var bg;
  var bh = new Vector3();
  var bi = new Camera();
  function bF(bF, bG, bH, bI) {
    bh.set(bG, bH, bI).unproject(bi);
    var bJ = bg[bF];
    if (bJ !== undefined) {
      for (var bK = bf.getAttribute("position"), bL = 0, bM = bJ.length; bL < bM; bL++) {
        bK.setXYZ(bJ[bL], bh.x, bh.y, bh.z);
      }
    }
  }
  return function () {
    bf = this.geometry;
    bg = this.pointMap;
    bi.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse);
    bF("c", 0, 0, -1);
    bF("t", 0, 0, 1);
    bF("n1", -1, -1, -1);
    bF("n2", 1, -1, -1);
    bF("n3", -1, 1, -1);
    bF("n4", 1, 1, -1);
    bF("f1", -1, -1, 1);
    bF("f2", 1, -1, 1);
    bF("f3", -1, 1, 1);
    bF("f4", 1, 1, 1);
    bF("u1", 0.7, 1.1, -1);
    bF("u2", -0.7, 1.1, -1);
    bF("u3", 0, 2, -1);
    bF("cf1", -1, 0, 1);
    bF("cf2", 1, 0, 1);
    bF("cf3", 0, -1, 1);
    bF("cf4", 0, 1, 1);
    bF("cn1", -1, 0, -1);
    bF("cn2", 1, 0, -1);
    bF("cn3", 0, -1, -1);
    bF("cn4", 0, 1, -1);
    bf.getAttribute("position").needsUpdate = true;
  };
}();
BoxHelper.prototype = Object.create(LineSegments.prototype);
BoxHelper.prototype.constructor = BoxHelper;
BoxHelper.prototype.update = function () {
  var bf = new Box3();
  return function (bg) {
    if (bg !== undefined) {
      console.warn("THREE.BoxHelper: .update() has no longer arguments.");
    }
    if (this.object !== undefined) {
      bf.setFromObject(this.object);
    }
    if (!bf.isEmpty()) {
      var bh = bf.min;
      var bi = bf.max;
      var bF = this.geometry.attributes.position;
      var bG = bF.array;
      bG[0] = bi.x;
      bG[1] = bi.y;
      bG[2] = bi.z;
      bG[3] = bh.x;
      bG[4] = bi.y;
      bG[5] = bi.z;
      bG[6] = bh.x;
      bG[7] = bh.y;
      bG[8] = bi.z;
      bG[9] = bi.x;
      bG[10] = bh.y;
      bG[11] = bi.z;
      bG[12] = bi.x;
      bG[13] = bi.y;
      bG[14] = bh.z;
      bG[15] = bh.x;
      bG[16] = bi.y;
      bG[17] = bh.z;
      bG[18] = bh.x;
      bG[19] = bh.y;
      bG[20] = bh.z;
      bG[21] = bi.x;
      bG[22] = bh.y;
      bG[23] = bh.z;
      bF.needsUpdate = true;
      this.geometry.computeBoundingSphere();
    }
  };
}();
BoxHelper.prototype.setFromObject = function (bf) {
  this.object = bf;
  this.update();
  return this;
};
BoxHelper.prototype.copy = function (bf) {
  LineSegments.prototype.copy.call(this, bf);
  this.object = bf.object;
  return this;
};
BoxHelper.prototype.clone = function () {
  return new this.constructor().copy(this);
};
Box3Helper.prototype = Object.create(LineSegments.prototype);
Box3Helper.prototype.constructor = Box3Helper;
Box3Helper.prototype.updateMatrixWorld = function (bf) {
  var bg = this.box;
  if (!bg.isEmpty()) {
    bg.getCenter(this.position);
    bg.getSize(this.scale);
    this.scale.multiplyScalar(0.5);
    Object3D.prototype.updateMatrixWorld.call(this, bf);
  }
};
PlaneHelper.prototype = Object.create(Line.prototype);
PlaneHelper.prototype.constructor = PlaneHelper;
PlaneHelper.prototype.updateMatrixWorld = function (bf) {
  var bg = -this.plane.constant;
  if (Math.abs(bg) < 1e-8) {
    bg = 1e-8;
  }
  this.scale.set(this.size * 0.5, this.size * 0.5, bg);
  this.children[0].material.side = bg < 0 ? BackSide : FrontSide;
  this.lookAt(this.plane.normal);
  Object3D.prototype.updateMatrixWorld.call(this, bf);
};
ArrowHelper.prototype = Object.create(Object3D.prototype);
ArrowHelper.prototype.constructor = ArrowHelper;
ArrowHelper.prototype.setDirection = (aVS = new Vector3(), function (bf) {
  if (bf.y > 0.99999) {
    this.quaternion.set(0, 0, 0, 1);
  } else if (bf.y < -0.99999) {
    this.quaternion.set(1, 0, 0, 0);
  } else {
    aVS.set(bf.z, 0, -bf.x).normalize();
    aVR = Math.acos(bf.y);
    this.quaternion.setFromAxisAngle(aVS, aVR);
  }
});
ArrowHelper.prototype.setLength = function (bf, bg, bh) {
  if (bg === undefined) {
    bg = bf * 0.2;
  }
  if (bh === undefined) {
    bh = bg * 0.2;
  }
  this.line.scale.set(1, Math.max(0, bf - bg), 1);
  this.line.updateMatrix();
  this.cone.scale.set(bh, bg, bh);
  this.cone.position.y = bf;
  this.cone.updateMatrix();
};
ArrowHelper.prototype.setColor = function (bf) {
  this.line.material.color.copy(bf);
  this.cone.material.color.copy(bf);
};
ArrowHelper.prototype.copy = function (bf) {
  Object3D.prototype.copy.call(this, bf, false);
  this.line.copy(bf.line);
  this.cone.copy(bf.cone);
  return this;
};
ArrowHelper.prototype.clone = function () {
  return new this.constructor().copy(this);
};
AxesHelper.prototype = Object.create(LineSegments.prototype);
AxesHelper.prototype.constructor = AxesHelper;
export var LineStrip = 0;
export var LinePieces = 1;
export function MeshFaceMaterial(bf) {
  console.warn("THREE.MeshFaceMaterial has been removed. Use an Array instead.");
  return bf;
}
export function MultiMaterial(bf) {
  if (bf === undefined) {
    bf = [];
  }
  console.warn("THREE.MultiMaterial has been removed. Use an Array instead.");
  bf.isMultiMaterial = true;
  bf.materials = bf;
  bf.clone = function () {
    return bf.slice();
  };
  return bf;
}
export function PointCloud(bf, bg) {
  console.warn("THREE.PointCloud has been renamed to THREE.Points.");
  return new Points(bf, bg);
}
export function Particle(bf) {
  console.warn("THREE.Particle has been renamed to THREE.Sprite.");
  return new Sprite(bf);
}
export function ParticleSystem(bf, bg) {
  console.warn("THREE.ParticleSystem has been renamed to THREE.Points.");
  return new Points(bf, bg);
}
export function PointCloudMaterial(bf) {
  console.warn("THREE.PointCloudMaterial has been renamed to THREE.PointsMaterial.");
  return new PointsMaterial(bf);
}
export function ParticleBasicMaterial(bf) {
  console.warn("THREE.ParticleBasicMaterial has been renamed to THREE.PointsMaterial.");
  return new PointsMaterial(bf);
}
export function ParticleSystemMaterial(bf) {
  console.warn("THREE.ParticleSystemMaterial has been renamed to THREE.PointsMaterial.");
  return new PointsMaterial(bf);
}
export function Vertex(bf, bg, bh) {
  console.warn("THREE.Vertex has been removed. Use THREE.Vector3 instead.");
  return new Vector3(bf, bg, bh);
}
export function DynamicBufferAttribute(bf, bg) {
  console.warn("THREE.DynamicBufferAttribute has been removed. Use new THREE.BufferAttribute().setDynamic( true ) instead.");
  return new BufferAttribute(bf, bg).setDynamic(true);
}
export function Int8Attribute(bf, bg) {
  console.warn("THREE.Int8Attribute has been removed. Use new THREE.Int8BufferAttribute() instead.");
  return new Int8BufferAttribute(bf, bg);
}
export function Uint8Attribute(bf, bg) {
  console.warn("THREE.Uint8Attribute has been removed. Use new THREE.Uint8BufferAttribute() instead.");
  return new Uint8BufferAttribute(bf, bg);
}
export function Uint8ClampedAttribute(bf, bg) {
  console.warn("THREE.Uint8ClampedAttribute has been removed. Use new THREE.Uint8ClampedBufferAttribute() instead.");
  return new Uint8ClampedBufferAttribute(bf, bg);
}
export function Int16Attribute(bf, bg) {
  console.warn("THREE.Int16Attribute has been removed. Use new THREE.Int16BufferAttribute() instead.");
  return new Int16BufferAttribute(bf, bg);
}
export function Uint16Attribute(bf, bg) {
  console.warn("THREE.Uint16Attribute has been removed. Use new THREE.Uint16BufferAttribute() instead.");
  return new Uint16BufferAttribute(bf, bg);
}
export function Int32Attribute(bf, bg) {
  console.warn("THREE.Int32Attribute has been removed. Use new THREE.Int32BufferAttribute() instead.");
  return new Int32BufferAttribute(bf, bg);
}
export function Uint32Attribute(bf, bg) {
  console.warn("THREE.Uint32Attribute has been removed. Use new THREE.Uint32BufferAttribute() instead.");
  return new Uint32BufferAttribute(bf, bg);
}
export function Float32Attribute(bf, bg) {
  console.warn("THREE.Float32Attribute has been removed. Use new THREE.Float32BufferAttribute() instead.");
  return new Float32BufferAttribute(bf, bg);
}
export function Float64Attribute(bf, bg) {
  console.warn("THREE.Float64Attribute has been removed. Use new THREE.Float64BufferAttribute() instead.");
  return new Float64BufferAttribute(bf, bg);
}
export function ClosedSplineCurve3(bf) {
  console.warn("THREE.ClosedSplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
  CatmullRomCurve3.call(this, bf);
  this.type = "catmullrom";
  this.closed = true;
}
export function SplineCurve3(bf) {
  console.warn("THREE.SplineCurve3 has been deprecated. Use THREE.CatmullRomCurve3 instead.");
  CatmullRomCurve3.call(this, bf);
  this.type = "catmullrom";
}
export function Spline(bf) {
  console.warn("THREE.Spline has been removed. Use THREE.CatmullRomCurve3 instead.");
  CatmullRomCurve3.call(this, bf);
  this.type = "catmullrom";
}
export function AxisHelper(bf) {
  console.warn("THREE.AxisHelper has been renamed to THREE.AxesHelper.");
  return new AxesHelper(bf);
}
export function BoundingBoxHelper(bf, bg) {
  console.warn("THREE.BoundingBoxHelper has been deprecated. Creating a THREE.BoxHelper instead.");
  return new BoxHelper(bf, bg);
}
export function EdgesHelper(bf, bg) {
  console.warn("THREE.EdgesHelper has been removed. Use THREE.EdgesGeometry instead.");
  return new LineSegments(new EdgesGeometry(bf.geometry), new LineBasicMaterial({
    color: bg !== undefined ? bg : 16777215
  }));
}
export function WireframeHelper(bf, bg) {
  console.warn("THREE.WireframeHelper has been removed. Use THREE.WireframeGeometry instead.");
  return new LineSegments(new WireframeGeometry(bf.geometry), new LineBasicMaterial({
    color: bg !== undefined ? bg : 16777215
  }));
}
export function XHRLoader(bf) {
  console.warn("THREE.XHRLoader has been renamed to THREE.FileLoader.");
  return new FileLoader(bf);
}
export function BinaryTextureLoader(bf) {
  console.warn("THREE.BinaryTextureLoader has been renamed to THREE.DataTextureLoader.");
  return new DataTextureLoader(bf);
}
Curve.create = function (bf, bg) {
  console.log("THREE.Curve.create() has been deprecated");
  bf.prototype = Object.create(Curve.prototype);
  bf.prototype.constructor = bf;
  bf.prototype.getPoint = bg;
  return bf;
};
Object.assign(CurvePath.prototype, {
  createPointsGeometry: function (bf) {
    console.warn("THREE.CurvePath: .createPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var bg = this.getPoints(bf);
    return this.createGeometry(bg);
  },
  createSpacedPointsGeometry: function (bf) {
    console.warn("THREE.CurvePath: .createSpacedPointsGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    var bg = this.getSpacedPoints(bf);
    return this.createGeometry(bg);
  },
  createGeometry: function (bf) {
    console.warn("THREE.CurvePath: .createGeometry() has been removed. Use new THREE.Geometry().setFromPoints( points ) instead.");
    for (var bg = new Geometry(), bh = 0, bi = bf.length; bh < bi; bh++) {
      var bF = bf[bh];
      bg.vertices.push(new Vector3(bF.x, bF.y, bF.z || 0));
    }
    return bg;
  }
});
Object.assign(Path.prototype, {
  fromPoints: function (bf) {
    console.warn("THREE.Path: .fromPoints() has been renamed to .setFromPoints().");
    this.setFromPoints(bf);
  }
});
ClosedSplineCurve3.prototype = Object.create(CatmullRomCurve3.prototype);
SplineCurve3.prototype = Object.create(CatmullRomCurve3.prototype);
Spline.prototype = Object.create(CatmullRomCurve3.prototype);
Object.assign(Spline.prototype, {
  initFromArray: function () {
    console.error("THREE.Spline: .initFromArray() has been removed.");
  },
  getControlPointsArray: function () {
    console.error("THREE.Spline: .getControlPointsArray() has been removed.");
  },
  reparametrizeByArcLength: function () {
    console.error("THREE.Spline: .reparametrizeByArcLength() has been removed.");
  }
});
GridHelper.prototype.setColors = function () {
  console.error("THREE.GridHelper: setColors() has been deprecated, pass them in the constructor instead.");
};
SkeletonHelper.prototype.update = function () {
  console.error("THREE.SkeletonHelper: update() no longer needs to be called.");
};
Object.assign(Loader.prototype, {
  extractUrlBase: function (bf) {
    console.warn("THREE.Loader: .extractUrlBase() has been deprecated. Use THREE.LoaderUtils.extractUrlBase() instead.");
    return LoaderUtils.extractUrlBase(bf);
  }
});
Object.assign(ObjectLoader.prototype, {
  setTexturePath: function (bf) {
    console.warn("THREE.ObjectLoader: .setTexturePath() has been renamed to .setResourcePath().");
    return this.setResourcePath(bf);
  }
});
Object.assign(Box2.prototype, {
  center: function (bf) {
    console.warn("THREE.Box2: .center() has been renamed to .getCenter().");
    return this.getCenter(bf);
  },
  empty: function () {
    console.warn("THREE.Box2: .empty() has been renamed to .isEmpty().");
    return this.isEmpty();
  },
  isIntersectionBox: function (bf) {
    console.warn("THREE.Box2: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(bf);
  },
  size: function (bf) {
    console.warn("THREE.Box2: .size() has been renamed to .getSize().");
    return this.getSize(bf);
  }
});
Object.assign(Box3.prototype, {
  center: function (bf) {
    console.warn("THREE.Box3: .center() has been renamed to .getCenter().");
    return this.getCenter(bf);
  },
  empty: function () {
    console.warn("THREE.Box3: .empty() has been renamed to .isEmpty().");
    return this.isEmpty();
  },
  isIntersectionBox: function (bf) {
    console.warn("THREE.Box3: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(bf);
  },
  isIntersectionSphere: function (bf) {
    console.warn("THREE.Box3: .isIntersectionSphere() has been renamed to .intersectsSphere().");
    return this.intersectsSphere(bf);
  },
  size: function (bf) {
    console.warn("THREE.Box3: .size() has been renamed to .getSize().");
    return this.getSize(bf);
  }
});
Line3.prototype.center = function (bf) {
  console.warn("THREE.Line3: .center() has been renamed to .getCenter().");
  return this.getCenter(bf);
};
Object.assign(Math, {
  random16: function () {
    console.warn("THREE.Math: .random16() has been deprecated. Use Math.random() instead.");
    return Math.random();
  },
  nearestPowerOfTwo: function (bf) {
    console.warn("THREE.Math: .nearestPowerOfTwo() has been renamed to .floorPowerOfTwo().");
    return Math.floorPowerOfTwo(bf);
  },
  nextPowerOfTwo: function (bf) {
    console.warn("THREE.Math: .nextPowerOfTwo() has been renamed to .ceilPowerOfTwo().");
    return Math.ceilPowerOfTwo(bf);
  }
});
Object.assign(Matrix3.prototype, {
  flattenToArrayOffset: function (bf, bg) {
    console.warn("THREE.Matrix3: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
    return this.toArray(bf, bg);
  },
  multiplyVector3: function (bf) {
    console.warn("THREE.Matrix3: .multiplyVector3() has been removed. Use vector.applyMatrix3( matrix ) instead.");
    return bf.applyMatrix3(this);
  },
  multiplyVector3Array: function () {
    console.error("THREE.Matrix3: .multiplyVector3Array() has been removed.");
  },
  applyToBuffer: function (bf) {
    console.warn("THREE.Matrix3: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
    return this.applyToBufferAttribute(bf);
  },
  applyToVector3Array: function () {
    console.error("THREE.Matrix3: .applyToVector3Array() has been removed.");
  }
});
Object.assign(Matrix4.prototype, {
  extractPosition: function (bf) {
    console.warn("THREE.Matrix4: .extractPosition() has been renamed to .copyPosition().");
    return this.copyPosition(bf);
  },
  flattenToArrayOffset: function (bf, bg) {
    console.warn("THREE.Matrix4: .flattenToArrayOffset() has been deprecated. Use .toArray() instead.");
    return this.toArray(bf, bg);
  },
  getPosition: function () {
    var bf;
    return function () {
      if (bf === undefined) {
        bf = new Vector3();
      }
      console.warn("THREE.Matrix4: .getPosition() has been removed. Use Vector3.setFromMatrixPosition( matrix ) instead.");
      return bf.setFromMatrixColumn(this, 3);
    };
  }(),
  setRotationFromQuaternion: function (bf) {
    console.warn("THREE.Matrix4: .setRotationFromQuaternion() has been renamed to .makeRotationFromQuaternion().");
    return this.makeRotationFromQuaternion(bf);
  },
  multiplyToArray: function () {
    console.warn("THREE.Matrix4: .multiplyToArray() has been removed.");
  },
  multiplyVector3: function (bf) {
    console.warn("THREE.Matrix4: .multiplyVector3() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return bf.applyMatrix4(this);
  },
  multiplyVector4: function (bf) {
    console.warn("THREE.Matrix4: .multiplyVector4() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return bf.applyMatrix4(this);
  },
  multiplyVector3Array: function () {
    console.error("THREE.Matrix4: .multiplyVector3Array() has been removed.");
  },
  rotateAxis: function (bf) {
    console.warn("THREE.Matrix4: .rotateAxis() has been removed. Use Vector3.transformDirection( matrix ) instead.");
    bf.transformDirection(this);
  },
  crossVector: function (bf) {
    console.warn("THREE.Matrix4: .crossVector() has been removed. Use vector.applyMatrix4( matrix ) instead.");
    return bf.applyMatrix4(this);
  },
  translate: function () {
    console.error("THREE.Matrix4: .translate() has been removed.");
  },
  rotateX: function () {
    console.error("THREE.Matrix4: .rotateX() has been removed.");
  },
  rotateY: function () {
    console.error("THREE.Matrix4: .rotateY() has been removed.");
  },
  rotateZ: function () {
    console.error("THREE.Matrix4: .rotateZ() has been removed.");
  },
  rotateByAxis: function () {
    console.error("THREE.Matrix4: .rotateByAxis() has been removed.");
  },
  applyToBuffer: function (bf) {
    console.warn("THREE.Matrix4: .applyToBuffer() has been removed. Use matrix.applyToBufferAttribute( attribute ) instead.");
    return this.applyToBufferAttribute(bf);
  },
  applyToVector3Array: function () {
    console.error("THREE.Matrix4: .applyToVector3Array() has been removed.");
  },
  makeFrustum: function (bf, bg, bh, bi, bF, bG) {
    console.warn("THREE.Matrix4: .makeFrustum() has been removed. Use .makePerspective( left, right, top, bottom, near, far ) instead.");
    return this.makePerspective(bf, bg, bi, bh, bF, bG);
  }
});
Plane.prototype.isIntersectionLine = function (bf) {
  console.warn("THREE.Plane: .isIntersectionLine() has been renamed to .intersectsLine().");
  return this.intersectsLine(bf);
};
Quaternion.prototype.multiplyVector3 = function (bf) {
  console.warn("THREE.Quaternion: .multiplyVector3() has been removed. Use is now vector.applyQuaternion( quaternion ) instead.");
  return bf.applyQuaternion(this);
};
Object.assign(Ray.prototype, {
  isIntersectionBox: function (bf) {
    console.warn("THREE.Ray: .isIntersectionBox() has been renamed to .intersectsBox().");
    return this.intersectsBox(bf);
  },
  isIntersectionPlane: function (bf) {
    console.warn("THREE.Ray: .isIntersectionPlane() has been renamed to .intersectsPlane().");
    return this.intersectsPlane(bf);
  },
  isIntersectionSphere: function (bf) {
    console.warn("THREE.Ray: .isIntersectionSphere() has been renamed to .intersectsSphere().");
    return this.intersectsSphere(bf);
  }
});
Object.assign(Triangle.prototype, {
  area: function () {
    console.warn("THREE.Triangle: .area() has been renamed to .getArea().");
    return this.getArea();
  },
  barycoordFromPoint: function (bf, bg) {
    console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
    return this.getBarycoord(bf, bg);
  },
  midpoint: function (bf) {
    console.warn("THREE.Triangle: .midpoint() has been renamed to .getMidpoint().");
    return this.getMidpoint(bf);
  },
  normal: function (bf) {
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
    return this.getNormal(bf);
  },
  plane: function (bf) {
    console.warn("THREE.Triangle: .plane() has been renamed to .getPlane().");
    return this.getPlane(bf);
  }
});
Object.assign(Triangle, {
  barycoordFromPoint: function (bf, bg, bh, bi, bF) {
    console.warn("THREE.Triangle: .barycoordFromPoint() has been renamed to .getBarycoord().");
    return Triangle.getBarycoord(bf, bg, bh, bi, bF);
  },
  normal: function (bf, bg, bh, bi) {
    console.warn("THREE.Triangle: .normal() has been renamed to .getNormal().");
    return Triangle.getNormal(bf, bg, bh, bi);
  }
});
Object.assign(Shape.prototype, {
  extractAllPoints: function (bf) {
    console.warn("THREE.Shape: .extractAllPoints() has been removed. Use .extractPoints() instead.");
    return this.extractPoints(bf);
  },
  extrude: function (bf) {
    console.warn("THREE.Shape: .extrude() has been removed. Use ExtrudeGeometry() instead.");
    return new ExtrudeGeometry(this, bf);
  },
  makeGeometry: function (bf) {
    console.warn("THREE.Shape: .makeGeometry() has been removed. Use ShapeGeometry() instead.");
    return new ShapeGeometry(this, bf);
  }
});
Object.assign(Vector2.prototype, {
  fromAttribute: function (bf, bg, bh) {
    console.warn("THREE.Vector2: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(bf, bg, bh);
  },
  distanceToManhattan: function (bf) {
    console.warn("THREE.Vector2: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
    return this.manhattanDistanceTo(bf);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector2: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(Vector3.prototype, {
  setEulerFromRotationMatrix: function () {
    console.error("THREE.Vector3: .setEulerFromRotationMatrix() has been removed. Use Euler.setFromRotationMatrix() instead.");
  },
  setEulerFromQuaternion: function () {
    console.error("THREE.Vector3: .setEulerFromQuaternion() has been removed. Use Euler.setFromQuaternion() instead.");
  },
  getPositionFromMatrix: function (bf) {
    console.warn("THREE.Vector3: .getPositionFromMatrix() has been renamed to .setFromMatrixPosition().");
    return this.setFromMatrixPosition(bf);
  },
  getScaleFromMatrix: function (bf) {
    console.warn("THREE.Vector3: .getScaleFromMatrix() has been renamed to .setFromMatrixScale().");
    return this.setFromMatrixScale(bf);
  },
  getColumnFromMatrix: function (bf, bg) {
    console.warn("THREE.Vector3: .getColumnFromMatrix() has been renamed to .setFromMatrixColumn().");
    return this.setFromMatrixColumn(bg, bf);
  },
  applyProjection: function (bf) {
    console.warn("THREE.Vector3: .applyProjection() has been removed. Use .applyMatrix4( m ) instead.");
    return this.applyMatrix4(bf);
  },
  fromAttribute: function (bf, bg, bh) {
    console.warn("THREE.Vector3: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(bf, bg, bh);
  },
  distanceToManhattan: function (bf) {
    console.warn("THREE.Vector3: .distanceToManhattan() has been renamed to .manhattanDistanceTo().");
    return this.manhattanDistanceTo(bf);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector3: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(Vector4.prototype, {
  fromAttribute: function (bf, bg, bh) {
    console.warn("THREE.Vector4: .fromAttribute() has been renamed to .fromBufferAttribute().");
    return this.fromBufferAttribute(bf, bg, bh);
  },
  lengthManhattan: function () {
    console.warn("THREE.Vector4: .lengthManhattan() has been renamed to .manhattanLength().");
    return this.manhattanLength();
  }
});
Object.assign(Geometry.prototype, {
  computeTangents: function () {
    console.error("THREE.Geometry: .computeTangents() has been removed.");
  },
  computeLineDistances: function () {
    console.error("THREE.Geometry: .computeLineDistances() has been removed. Use THREE.Line.computeLineDistances() instead.");
  }
});
Object.assign(Object3D.prototype, {
  getChildByName: function (bf) {
    console.warn("THREE.Object3D: .getChildByName() has been renamed to .getObjectByName().");
    return this.getObjectByName(bf);
  },
  renderDepth: function () {
    console.warn("THREE.Object3D: .renderDepth has been removed. Use .renderOrder, instead.");
  },
  translate: function (bf, bg) {
    console.warn("THREE.Object3D: .translate() has been removed. Use .translateOnAxis( axis, distance ) instead.");
    return this.translateOnAxis(bg, bf);
  },
  getWorldRotation: function () {
    console.error("THREE.Object3D: .getWorldRotation() has been removed. Use THREE.Object3D.getWorldQuaternion( target ) instead.");
  }
});
Object.defineProperties(Object3D.prototype, {
  eulerOrder: {
    get: function () {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      return this.rotation.order;
    },
    set: function (bf) {
      console.warn("THREE.Object3D: .eulerOrder is now .rotation.order.");
      this.rotation.order = bf;
    }
  },
  useQuaternion: {
    get: function () {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    },
    set: function () {
      console.warn("THREE.Object3D: .useQuaternion has been removed. The library now uses quaternions by default.");
    }
  }
});
Object.defineProperties(LOD.prototype, {
  objects: {
    get: function () {
      console.warn("THREE.LOD: .objects has been renamed to .levels.");
      return this.levels;
    }
  }
});
Object.defineProperty(Skeleton.prototype, "useVertexTexture", {
  get: function () {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  },
  set: function () {
    console.warn("THREE.Skeleton: useVertexTexture has been removed.");
  }
});
SkinnedMesh.prototype.initBones = function () {
  console.error("THREE.SkinnedMesh: initBones() has been removed.");
};
Object.defineProperty(Curve.prototype, "__arcLengthDivisions", {
  get: function () {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
    return this.arcLengthDivisions;
  },
  set: function (bf) {
    console.warn("THREE.Curve: .__arcLengthDivisions is now .arcLengthDivisions.");
    this.arcLengthDivisions = bf;
  }
});
PerspectiveCamera.prototype.setLens = function (bf, bg) {
  console.warn("THREE.PerspectiveCamera.setLens is deprecated. Use .setFocalLength and .filmGauge for a photographic setup.");
  if (bg !== undefined) {
    this.filmGauge = bg;
  }
  this.setFocalLength(bf);
};
Object.defineProperties(Light.prototype, {
  onlyShadow: {
    set: function () {
      console.warn("THREE.Light: .onlyShadow has been removed.");
    }
  },
  shadowCameraFov: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraFov is now .shadow.camera.fov.");
      this.shadow.camera.fov = bf;
    }
  },
  shadowCameraLeft: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraLeft is now .shadow.camera.left.");
      this.shadow.camera.left = bf;
    }
  },
  shadowCameraRight: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraRight is now .shadow.camera.right.");
      this.shadow.camera.right = bf;
    }
  },
  shadowCameraTop: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraTop is now .shadow.camera.top.");
      this.shadow.camera.top = bf;
    }
  },
  shadowCameraBottom: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraBottom is now .shadow.camera.bottom.");
      this.shadow.camera.bottom = bf;
    }
  },
  shadowCameraNear: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraNear is now .shadow.camera.near.");
      this.shadow.camera.near = bf;
    }
  },
  shadowCameraFar: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowCameraFar is now .shadow.camera.far.");
      this.shadow.camera.far = bf;
    }
  },
  shadowCameraVisible: {
    set: function () {
      console.warn("THREE.Light: .shadowCameraVisible has been removed. Use new THREE.CameraHelper( light.shadow.camera ) instead.");
    }
  },
  shadowBias: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowBias is now .shadow.bias.");
      this.shadow.bias = bf;
    }
  },
  shadowDarkness: {
    set: function () {
      console.warn("THREE.Light: .shadowDarkness has been removed.");
    }
  },
  shadowMapWidth: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowMapWidth is now .shadow.mapSize.width.");
      this.shadow.mapSize.width = bf;
    }
  },
  shadowMapHeight: {
    set: function (bf) {
      console.warn("THREE.Light: .shadowMapHeight is now .shadow.mapSize.height.");
      this.shadow.mapSize.height = bf;
    }
  }
});
Object.defineProperties(BufferAttribute.prototype, {
  length: {
    get: function () {
      console.warn("THREE.BufferAttribute: .length has been deprecated. Use .count instead.");
      return this.array.length;
    }
  },
  copyIndicesArray: function () {
    console.error("THREE.BufferAttribute: .copyIndicesArray() has been removed.");
  }
});
Object.assign(BufferGeometry.prototype, {
  addIndex: function (bf) {
    console.warn("THREE.BufferGeometry: .addIndex() has been renamed to .setIndex().");
    this.setIndex(bf);
  },
  addDrawCall: function (bf, bg, bh) {
    if (bh !== undefined) {
      console.warn("THREE.BufferGeometry: .addDrawCall() no longer supports indexOffset.");
    }
    console.warn("THREE.BufferGeometry: .addDrawCall() is now .addGroup().");
    this.addGroup(bf, bg);
  },
  clearDrawCalls: function () {
    console.warn("THREE.BufferGeometry: .clearDrawCalls() is now .clearGroups().");
    this.clearGroups();
  },
  computeTangents: function () {
    console.warn("THREE.BufferGeometry: .computeTangents() has been removed.");
  },
  computeOffsets: function () {
    console.warn("THREE.BufferGeometry: .computeOffsets() has been removed.");
  }
});
Object.defineProperties(BufferGeometry.prototype, {
  drawcalls: {
    get: function () {
      console.error("THREE.BufferGeometry: .drawcalls has been renamed to .groups.");
      return this.groups;
    }
  },
  offsets: {
    get: function () {
      console.warn("THREE.BufferGeometry: .offsets has been renamed to .groups.");
      return this.groups;
    }
  }
});
Object.assign(ExtrudeBufferGeometry.prototype, {
  getArrays: function () {
    console.error("THREE.ExtrudeBufferGeometry: .getArrays() has been removed.");
  },
  addShapeList: function () {
    console.error("THREE.ExtrudeBufferGeometry: .addShapeList() has been removed.");
  },
  addShape: function () {
    console.error("THREE.ExtrudeBufferGeometry: .addShape() has been removed.");
  }
});
Object.defineProperties(Uniform.prototype, {
  dynamic: {
    set: function () {
      console.warn("THREE.Uniform: .dynamic has been removed. Use object.onBeforeRender() instead.");
    }
  },
  onUpdate: {
    value: function () {
      console.warn("THREE.Uniform: .onUpdate() has been removed. Use object.onBeforeRender() instead.");
      return this;
    }
  }
});
Object.defineProperties(Material.prototype, {
  wrapAround: {
    get: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .wrapAround has been removed.");
    }
  },
  overdraw: {
    get: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    },
    set: function () {
      console.warn("THREE.Material: .overdraw has been removed.");
    }
  },
  wrapRGB: {
    get: function () {
      console.warn("THREE.Material: .wrapRGB has been removed.");
      return new Color();
    }
  },
  shading: {
    get: function () {
      console.error("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
    },
    set: function (bf) {
      console.warn("THREE." + this.type + ": .shading has been removed. Use the boolean .flatShading instead.");
      this.flatShading = bf === FlatShading;
    }
  }
});
Object.defineProperties(MeshPhongMaterial.prototype, {
  metal: {
    get: function () {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead.");
      return false;
    },
    set: function () {
      console.warn("THREE.MeshPhongMaterial: .metal has been removed. Use THREE.MeshStandardMaterial instead");
    }
  }
});
Object.defineProperties(ShaderMaterial.prototype, {
  derivatives: {
    get: function () {
      console.warn("THREE.ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      return this.extensions.derivatives;
    },
    set: function (bf) {
      console.warn("THREE. ShaderMaterial: .derivatives has been moved to .extensions.derivatives.");
      this.extensions.derivatives = bf;
    }
  }
});
Object.assign(WebGLRenderer.prototype, {
  clearTarget: function (bf, bg, bh, bi) {
    console.warn("THREE.WebGLRenderer: .clearTarget() has been deprecated. Use .setRenderTarget() and .clear() instead.");
    this.setRenderTarget(bf);
    this.clear(bg, bh, bi);
  },
  animate: function (bf) {
    console.warn("THREE.WebGLRenderer: .animate() is now .setAnimationLoop().");
    this.setAnimationLoop(bf);
  },
  getCurrentRenderTarget: function () {
    console.warn("THREE.WebGLRenderer: .getCurrentRenderTarget() is now .getRenderTarget().");
    return this.getRenderTarget();
  },
  getMaxAnisotropy: function () {
    console.warn("THREE.WebGLRenderer: .getMaxAnisotropy() is now .capabilities.getMaxAnisotropy().");
    return this.capabilities.getMaxAnisotropy();
  },
  getPrecision: function () {
    console.warn("THREE.WebGLRenderer: .getPrecision() is now .capabilities.precision.");
    return this.capabilities.precision;
  },
  resetGLState: function () {
    console.warn("THREE.WebGLRenderer: .resetGLState() is now .state.reset().");
    return this.state.reset();
  },
  supportsFloatTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsFloatTextures() is now .extensions.get( 'OES_texture_float' ).");
    return this.extensions.get("OES_texture_float");
  },
  supportsHalfFloatTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsHalfFloatTextures() is now .extensions.get( 'OES_texture_half_float' ).");
    return this.extensions.get("OES_texture_half_float");
  },
  supportsStandardDerivatives: function () {
    console.warn("THREE.WebGLRenderer: .supportsStandardDerivatives() is now .extensions.get( 'OES_standard_derivatives' ).");
    return this.extensions.get("OES_standard_derivatives");
  },
  supportsCompressedTextureS3TC: function () {
    console.warn("THREE.WebGLRenderer: .supportsCompressedTextureS3TC() is now .extensions.get( 'WEBGL_compressed_texture_s3tc' ).");
    return this.extensions.get("WEBGL_compressed_texture_s3tc");
  },
  supportsCompressedTexturePVRTC: function () {
    console.warn("THREE.WebGLRenderer: .supportsCompressedTexturePVRTC() is now .extensions.get( 'WEBGL_compressed_texture_pvrtc' ).");
    return this.extensions.get("WEBGL_compressed_texture_pvrtc");
  },
  supportsBlendMinMax: function () {
    console.warn("THREE.WebGLRenderer: .supportsBlendMinMax() is now .extensions.get( 'EXT_blend_minmax' ).");
    return this.extensions.get("EXT_blend_minmax");
  },
  supportsVertexTextures: function () {
    console.warn("THREE.WebGLRenderer: .supportsVertexTextures() is now .capabilities.vertexTextures.");
    return this.capabilities.vertexTextures;
  },
  supportsInstancedArrays: function () {
    console.warn("THREE.WebGLRenderer: .supportsInstancedArrays() is now .extensions.get( 'ANGLE_instanced_arrays' ).");
    return this.extensions.get("ANGLE_instanced_arrays");
  },
  enableScissorTest: function (bf) {
    console.warn("THREE.WebGLRenderer: .enableScissorTest() is now .setScissorTest().");
    this.setScissorTest(bf);
  },
  initMaterial: function () {
    console.warn("THREE.WebGLRenderer: .initMaterial() has been removed.");
  },
  addPrePlugin: function () {
    console.warn("THREE.WebGLRenderer: .addPrePlugin() has been removed.");
  },
  addPostPlugin: function () {
    console.warn("THREE.WebGLRenderer: .addPostPlugin() has been removed.");
  },
  updateShadowMap: function () {
    console.warn("THREE.WebGLRenderer: .updateShadowMap() has been removed.");
  },
  setFaceCulling: function () {
    console.warn("THREE.WebGLRenderer: .setFaceCulling() has been removed.");
  },
  allocTextureUnit: function () {
    console.warn("THREE.WebGLRenderer: .allocTextureUnit() has been removed.");
  },
  setTexture: function () {
    console.warn("THREE.WebGLRenderer: .setTexture() has been removed.");
  },
  setTexture2D: function () {
    console.warn("THREE.WebGLRenderer: .setTexture2D() has been removed.");
  },
  setTextureCube: function () {
    console.warn("THREE.WebGLRenderer: .setTextureCube() has been removed.");
  }
});
Object.defineProperties(WebGLRenderer.prototype, {
  shadowMapEnabled: {
    get: function () {
      return this.shadowMap.enabled;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderer: .shadowMapEnabled is now .shadowMap.enabled.");
      this.shadowMap.enabled = bf;
    }
  },
  shadowMapType: {
    get: function () {
      return this.shadowMap.type;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderer: .shadowMapType is now .shadowMap.type.");
      this.shadowMap.type = bf;
    }
  },
  shadowMapCullFace: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMapCullFace has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(ZZ.prototype, {
  cullFace: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.cullFace has been removed. Set Material.shadowSide instead.");
    }
  },
  renderReverseSided: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderReverseSided has been removed. Set Material.shadowSide instead.");
    }
  },
  renderSingleSided: {
    get: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    },
    set: function () {
      console.warn("THREE.WebGLRenderer: .shadowMap.renderSingleSided has been removed. Set Material.shadowSide instead.");
    }
  }
});
Object.defineProperties(WebGLRenderTargetCube.prototype, {
  activeCubeFace: {
    set: function () {
      console.warn("THREE.WebGLRenderTargetCube: .activeCubeFace has been removed. It is now the second parameter of WebGLRenderer.setRenderTarget().");
    }
  },
  activeMipMapLevel: {
    set: function () {
      console.warn("THREE.WebGLRenderTargetCube: .activeMipMapLevel has been removed. It is now the third parameter of WebGLRenderer.setRenderTarget().");
    }
  }
});
Object.defineProperties(WebGLRenderTarget.prototype, {
  wrapS: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      return this.texture.wrapS;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .wrapS is now .texture.wrapS.");
      this.texture.wrapS = bf;
    }
  },
  wrapT: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      return this.texture.wrapT;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .wrapT is now .texture.wrapT.");
      this.texture.wrapT = bf;
    }
  },
  magFilter: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      return this.texture.magFilter;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .magFilter is now .texture.magFilter.");
      this.texture.magFilter = bf;
    }
  },
  minFilter: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      return this.texture.minFilter;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .minFilter is now .texture.minFilter.");
      this.texture.minFilter = bf;
    }
  },
  anisotropy: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      return this.texture.anisotropy;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .anisotropy is now .texture.anisotropy.");
      this.texture.anisotropy = bf;
    }
  },
  offset: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      return this.texture.offset;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .offset is now .texture.offset.");
      this.texture.offset = bf;
    }
  },
  repeat: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      return this.texture.repeat;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .repeat is now .texture.repeat.");
      this.texture.repeat = bf;
    }
  },
  format: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      return this.texture.format;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .format is now .texture.format.");
      this.texture.format = bf;
    }
  },
  type: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      return this.texture.type;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .type is now .texture.type.");
      this.texture.type = bf;
    }
  },
  generateMipmaps: {
    get: function () {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      return this.texture.generateMipmaps;
    },
    set: function (bf) {
      console.warn("THREE.WebGLRenderTarget: .generateMipmaps is now .texture.generateMipmaps.");
      this.texture.generateMipmaps = bf;
    }
  }
});
Object.defineProperties(a7d.prototype, {
  standing: {
    set: function () {
      console.warn("THREE.WebVRManager: .standing has been removed.");
    }
  },
  userHeight: {
    set: function () {
      console.warn("THREE.WebVRManager: .userHeight has been removed.");
    }
  }
});
Audio.prototype.load = function (bf) {
  console.warn("THREE.Audio: .load has been deprecated. Use THREE.AudioLoader instead.");
  var bg = this;
  new AudioLoader().load(bf, function (bf) {
    bg.setBuffer(bf);
  });
  return this;
};
AudioAnalyser.prototype.getData = function () {
  console.warn("THREE.AudioAnalyser: .getData() is now .getFrequencyData().");
  return this.getFrequencyData();
};
CubeCamera.prototype.updateCubeMap = function (bf, bg) {
  console.warn("THREE.CubeCamera: .updateCubeMap() is now .update().");
  return this.update(bf, bg);
};
export var GeometryUtils = {
  merge: function (bf, bg, bh) {
    var bi;
    console.warn("THREE.GeometryUtils: .merge() has been moved to Geometry. Use geometry.merge( geometry2, matrix, materialIndexOffset ) instead.");
    if (bg.isMesh) {
      if (bg.matrixAutoUpdate) {
        bg.updateMatrix();
      }
      bi = bg.matrix;
      bg = bg.geometry;
    }
    bf.merge(bg, bi, bh);
  },
  center: function (bf) {
    console.warn("THREE.GeometryUtils: .center() has been moved to Geometry. Use geometry.center() instead.");
    return bf.center();
  }
};
export function CanvasRenderer() {
  console.error("THREE.CanvasRenderer has been removed");
}
export function JSONLoader() {
  console.error("THREE.JSONLoader has been removed.");
}
ImageUtils.crossOrigin = undefined;
ImageUtils.loadTexture = function (bf, bg, bh, bi) {
  console.warn("THREE.ImageUtils.loadTexture has been deprecated. Use THREE.TextureLoader() instead.");
  var bF = new TextureLoader();
  bF.setCrossOrigin(this.crossOrigin);
  var bG = bF.load(bf, bh, undefined, bi);
  if (bg) {
    bG.mapping = bg;
  }
  return bG;
};
ImageUtils.loadTextureCube = function (bf, bg, bh, bi) {
  console.warn("THREE.ImageUtils.loadTextureCube has been deprecated. Use THREE.CubeTextureLoader() instead.");
  var bF = new CubeTextureLoader();
  bF.setCrossOrigin(this.crossOrigin);
  var bG = bF.load(bf, bh, undefined, bi);
  if (bg) {
    bG.mapping = bg;
  }
  return bG;
};
ImageUtils.loadCompressedTexture = function () {
  console.error("THREE.ImageUtils.loadCompressedTexture has been removed. Use THREE.DDSLoader instead.");
};
ImageUtils.loadCompressedTextureCube = function () {
  console.error("THREE.ImageUtils.loadCompressedTextureCube has been removed. Use THREE.DDSLoader instead.");
};
export var SceneUtils = {
  createMultiMaterialObject: function () {
    console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
  },
  detach: function () {
    console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
  },
  attach: function () {
    console.error("THREE.SceneUtils has been moved to /examples/js/utils/SceneUtils.js");
  }
};
export function LensFlare() {
  console.error("THREE.LensFlare has been moved to /examples/js/objects/Lensflare.js");
}