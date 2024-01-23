var cOp = this && this.__awaiter || function (cOm, cOn, cOo, cOp) {
  return new (cOo ||= Promise)(function (cOu, cOv) {
    function cOw(cOm) {
      try {
        cOC(cOp.next(cOm));
      } catch (cOy) {
        cOv(cOy);
      }
    }
    function cOz(cOm) {
      try {
        cOC(cOp.throw(cOm));
      } catch (cOB) {
        cOv(cOB);
      }
    }
    function cOC(cOm) {
      if (cOm.done) {
        cOu(cOm.value);
      } else {
        new cOo(function (cOn) {
          cOn(cOm.value);
        }).then(cOw, cOz);
      }
    }
    cOC((cOp = cOp.apply(cOm, cOn || [])).next());
  });
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const cOF = require("./109.js");
const cOG = require("./112.js");
class cOH {
  constructor(cOm, cOn, cOo, cOp) {
    this.manager = cOm;
    this.queueClientId = cOn;
    this.statusCallback = cOo;
    this.hostCallback = cOp;
    this.status = "Queuing";
    this.queueSize = 0;
  }
  get isQueued() {
    return this.status != "Host" && this.status != "Join";
  }
  get isActive() {
    return this.manager.queueManager === this;
  }
  _start() {
    return cOp(this, undefined, undefined, function* () {
      this._poll();
    });
  }
  _poll() {
    return cOp(this, undefined, undefined, function* () {
      let cOm = yield this.manager.matchmakerRequest("/queue/poll", {
        clientId: this.queueClientId
      });
      this._handleNewStatus(cOm.status);
    });
  }
  _handleNewStatus(cOm) {
    this.status = cOm.t;
    let cOn = false;
    switch (cOm.t) {
      case "Queued":
        this.queueSize = cOm.c.queueSize;
        break;
      case "CreatingGame":
        break;
      case "Host":
        cOn = true;
        let cOo = cOm.c.pendingGameId;
        this.hostCallback(cOo);
        break;
      case "Join":
        cOn = true;
        let cOp = cOm.c.gameId;
        this.manager.switchGame(cOp);
        break;
      default:
        console.error("Unknown status", cOm);
        return;
    }
    if (cOn) {
      this.manager.unqueue();
    } else {
      setTimeout(() => {
        if (this.isActive) {
          this._poll();
        }
      }, 1000);
    }
    this.statusCallback(cOm.t, cOm.c);
  }
  _stop() {
    return cOp(this, undefined, undefined, function* () {
      if (this.isQueued) {
        yield this.manager.matchmakerRequest("/queue/unqueue", {
          clientId: this.queueClientId
        });
      }
    });
  }
}
exports.QueueManager = cOH;
class cOR {
  constructor(cOm) {
    this.matchmakerAddress = cOm;
    this.cachePingRegion = true;
    this.enableLogging = !!localStorage.getItem("CLIENT_MANAGER_LOGGING");
  }
  get hostname() {
    return location.hostname;
  }
  seek(cOm = {
    autoChangeGame: true
  }) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Seeking games...");
      let cOn = cOm.regionId || (yield this.getRegion());
      let cOo = cOm.gameId || this.parseQuery();
      let cOp = yield this.matchmakerSeek(cOn, cOo, cOm.dataQuery || null, cOm.autoChangeGame);
      if (!cOm.skipReplaceState) {
        window.history.replaceState(document.title, document.title, this.generateHref(cOp.gameId));
      }
      return cOp;
    });
  }
  getRegion() {
    return cOp(this, undefined, undefined, function* () {
      return new Promise((cOm, cOn) => cOp(this, undefined, undefined, function* () {
        let cOo = localStorage.getItem(cOR.PING_REGION_CACHE_KEY);
        if (cOo) {
          cOm(cOo);
          return;
        }
        let cOp = yield this.fetchPingList();
        let cOF = 0;
        let cOH = false;
        for (let cOo in cOp) {
          let cP4 = cOp[cOo] ? "krunker.io" : "krunker.io"; //remove the part after ? to revert to original (including the ?)
          //let cP5 = cP4['endsWith'](':443') ? 'https:' : 'http:';
          cOG.default.get( /*cP5 +*/"https://" + cP4 + "/ping").then(() => {
            if (!cOH) {
              cOR.setDefaultRegion(cOo);
            }
            cOH = true;
            cOm(cOo);
          }).catch(() => {
            if (++cOF >= Object.keys(cOp).length) {
              cOn("All pings failed.");
            }
          });
        }
      }));
    });
  }
  switchGame(cOm) {
    window.location.href = this.generateHref(cOm);
  }
  static setDefaultRegion(cOm) {
    localStorage.setItem(cOR.PING_REGION_CACHE_KEY, cOm);
  }
  parseQuery() {
    this.log("Parsing query...");
    var cOm = cOF(location.href, true).query.game;
    if (typeof cOm == "string") {
      return cOm;
    } else {
      return null;
    }
  }
  fetchPingList() {
    return cOp(this, undefined, undefined, function* () {
      this.log("Fetching list of servrs to ping...");
      return yield this.matchmakerRequest("/ping-list", {
        hostname: this.hostname
      });
    });
  }
  fetchGameList() {
    return cOp(this, undefined, undefined, function* () {
      this.log("Fetching game list...");
      return yield this.matchmakerRequest("/game-list", {
        hostname: this.hostname
      });
    });
  }
  fetchGameInfo(cOm) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Fetching game info for " + cOm + "...");
      return yield this.matchmakerRequest("/game-info", {
        game: cOm
      });
    });
  }
  matchmakerSeek(cOm, cOn = null, cOo, cOF = true) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Seeking matchmaker with region " + cOm + "...");
      let cOp = {
        hostname: this.hostname,
        region: cOm,
        autoChangeGame: cOF
      };
      if (cOn) {
        cOp.game = cOn;
      }
      if (cOo) {
        cOp.dataQuery = JSON.stringify(cOo);
      }
      return yield this.matchmakerRequest("/seek-game", cOp);
    });
  }
  fetchAllDebugInfo(cOm) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Fetching all debug info...");
      return yield this.matchmakerRequest("/internal/all-debug-info", {
        key: cOm
      });
    });
  }
  fetchGameDebugInfo(cOm, cOn) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Fetching game debug info for " + cOn + "...");
      return yield this.matchmakerRequest("/internal/game-debug-info", {
        key: cOm,
        gameId: cOn
      });
    });
  }
  queue(cOm) {
    return cOp(this, undefined, undefined, function* () {
      if (this.queueManager) {
        this.unqueue();
      }
      let cOn = new cOH(this, cOm.clientId, cOm.statusCallback, cOm.hostCallback);
      this.queueManager = cOn;
      return yield cOn._start();
    });
  }
  unqueue() {
    return cOp(this, undefined, undefined, function* () {
      let cOm = this.queueManager;
      this.queueManager = undefined;
      if (cOm) {
        yield cOm._stop();
      }
    });
  }
  generateHref(cOm) {
    return "/?game=" + cOm;
  }
  matchmakerRequest(cOm, cOn = {}) {
    return cOp(this, undefined, undefined, function* () {
      this.log("Executing matchmaker request " + cOm + " with params " + JSON.stringify(cOn) + "...");
      return (yield cOG.default.get("" + this.matchmakerAddress + cOm, {
        params: cOn,
        responseType: "json"
      })).data;
    });
  }
  log(...cOm) {
    if (this.enableLogging) {
      return (console.debug || console.info || console.log)(...cOm);
    } else {
      return undefined;
    }
  }
}
cOR.PING_REGION_CACHE_KEY = "sid-utils:ping-region";
exports.default = cOR;