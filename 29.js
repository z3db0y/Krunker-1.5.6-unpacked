exports.FlexDecoder = bzs;
exports.FlexEncoder = bzt;
var bzo = require("./3.js");
var bzp = 2048;
var bzq = 65536;
var bzr = "BUFFER_SHORTAGE";
function bzs() {
  if (!(this instanceof bzs)) {
    return new bzs();
  }
}
function bzt() {
  if (!(this instanceof bzt)) {
    return new bzt();
  }
}
function bzu() {
  throw new Error("method not implemented: write()");
}
function bzv() {
  throw new Error("method not implemented: fetch()");
}
function bzw() {
  if (this.buffers && this.buffers.length) {
    this.flush();
    return this.pull();
  } else {
    return this.fetch();
  }
}
function bzx(bzl) {
  (this.buffers ||= []).push(bzl);
}
function bzz() {
  return (this.buffers ||= []).shift();
}
function bzA(bzl) {
  return function (bzm) {
    for (var bzn in bzl) {
      bzm[bzn] = bzl[bzn];
    }
    return bzm;
  };
}
bzs.mixin = bzA({
  bufferish: bzo,
  write: function (bzl) {
    var bzm = this.offset ? bzo.prototype.slice.call(this.buffer, this.offset) : this.buffer;
    this.buffer = bzm ? bzl ? this.bufferish.concat([bzm, bzl]) : bzm : bzl;
    this.offset = 0;
  },
  fetch: bzv,
  flush: function () {
    while (this.offset < this.buffer.length) {
      var bzl;
      var bzm = this.offset;
      try {
        bzl = this.fetch();
      } catch (bzI) {
        if (bzI && bzI.message != bzr) {
          throw bzI;
        }
        this.offset = bzm;
        break;
      }
      this.push(bzl);
    }
  },
  push: bzx,
  pull: bzz,
  read: bzw,
  reserve: function (bzl) {
    var bzm = this.offset;
    var bzn = bzm + bzl;
    if (bzn > this.buffer.length) {
      throw new Error(bzr);
    }
    this.offset = bzn;
    return bzm;
  },
  offset: 0
});
bzs.mixin(bzs.prototype);
bzt.mixin = bzA({
  bufferish: bzo,
  write: bzu,
  fetch: function () {
    var bzl = this.start;
    if (bzl < this.offset) {
      var bzm = this.start = this.offset;
      return bzo.prototype.slice.call(this.buffer, bzl, bzm);
    }
  },
  flush: function () {
    while (this.start < this.offset) {
      var bzl = this.fetch();
      if (bzl) {
        this.push(bzl);
      }
    }
  },
  push: bzx,
  pull: function () {
    var bzl = this.buffers ||= [];
    var bzm = bzl.length > 1 ? this.bufferish.concat(bzl) : bzl[0];
    bzl.length = 0;
    return bzm;
  },
  read: bzw,
  reserve: function (bzl) {
    var bzm = bzl | 0;
    if (this.buffer) {
      var bzn = this.buffer.length;
      var bzo = this.offset | 0;
      var bzp = bzo + bzm;
      if (bzp < bzn) {
        this.offset = bzp;
        return bzo;
      }
      this.flush();
      bzl = Math.max(bzl, Math.min(bzn * 2, this.maxBufferSize));
    }
    bzl = Math.max(bzl, this.minBufferSize);
    this.buffer = this.bufferish.alloc(bzl);
    this.start = 0;
    this.offset = bzm;
    return 0;
  },
  send: function (bzl) {
    var bzm = bzl.length;
    if (bzm > this.minBufferSize) {
      this.flush();
      this.push(bzl);
    } else {
      var bzn = this.reserve(bzm);
      bzo.prototype.copy.call(bzl, this.buffer, bzn);
    }
  },
  maxBufferSize: bzq,
  minBufferSize: bzp,
  offset: 0,
  start: 0
});
bzt.mixin(bzt.prototype);