require("./61.js");
if (location.hostname == "localhost") {
  location.hostname = "127.0.0.1";
}
var config = require("./7.js");
var canStore = typeof Storage != "undefined";
function deleteItem(item) {
  if (canStore) {
    localStorage.removeItem(item);
  }
}
window.saveVal = function (czK, czL) {
  if (canStore) {
    localStorage.setItem(czK, czL);
  }
};
window.getSavedVal = function (czK) {
  if (canStore) {
    return localStorage.getItem(czK);
  } else {
    return null;
  }
};
var locale = new (require("./79.js"))();
function czV() {
  for (var czK = ["Ranked", "Shop", "Social", "Maps", "Mods", "Settings", "Host", "Browser", "Join"], czL = 0; czL < czK.length; czL++) {
    document.getElementById("menuBtn" + czK[czL]).innerHTML = locale.get("menu.btn." + czK[czL].toLowerCase());
  }
  customizeButton.innerHTML = locale.get("menu.btn.customize");
  inviteButton.innerHTML = locale.get("menu.btn.invite");
}
czV();
window.openURL = function (czK) {
  window.open(czK, "_blank");
};
var autoQueue = new URLSearchParams(window.location.search).has("autoQueue");
var cA0 = require("./108.js").default;
cA0.PING_REGION_CACHE_KEY = "pingRegion4";
var matchmaker = new cA0(config.matchmakerURL);
var cA2 = null;
var cA3 = null;
function switchGame(czK) {
  matchmaker.switchGame(czK);
}
async function joinQueue() {
  if (cAK) {
    var czK;
    var czL = Array.from(document.getElementsByClassName("queueCheckboxOption"));
    if (czL.length) {
      czK = czL.filter(czK => czK.checked).map(czK => czK.dataset.queueId);
      localStorage.lastQueues = JSON.stringify(czK);
    } else {
      czK = localStorage.lastQueues ? JSON.parse(localStorage.lastQueues) : [config.queues[0]];
    }
    cDS("Queuing");
    var czM = typeof queueRegionSelect == "undefined" ? localStorage[cA0.PING_REGION_CACHE_KEY] : queueRegionSelect.value;
    socket.send("queue", czK, matchmaker.hostname, czM);
    showWindow();
  }
}
function cAc(czK, czL) {
  if (hostGameMsg) {
    hostGameMsg.innerHTML = czK;
  }
  if (czL) {
    (function (czK) {
      var czL = matchmaker.generateHref(czK);
      window.history.replaceState({}, "Krunker", czL);
      windows[1].lastLoadTime = 0;
      cA2 = czK;
    })(czL);
  }
  cHy = null;
  cHz = null;
}
async function cAh(czK) {
  if (czK) {
    matchmaker.queue({
      clientId: czK,
      statusCallback: function (czK, czL) {
        cDS(czK, czL);
      },
      hostCallback: function (czK) {
        setTimeout(function () {
          socket.send("pgi", czK);
          cDS(null);
        }, cDQ * 1000);
      }
    });
    return;
  } else {
    cDS(null);
    return;
  }
}
window.switchServer = switchGame;
window.checkedSwitchServer = function (czK, czL) {
  czL.innerText = "...";
  matchmaker.fetchGameInfo(czK).then(czM => {
    if (czM.clients >= czM.maxClients) {
      czL.innerText = locale.get("matchmaker.full");
      setTimeout(() => {
        czL.innerText = Math.min(czM.clients, czM.maxClients) + "/" + czM.maxClients;
      }, 1000);
    } else {
      switchGame(czK);
    }
  });
};
window.joinQueue = joinQueue;
window.leaveQueue = function () {
  cDS(null);
  matchmaker.unqueue();
};
window.createPrivateRoom = function () {
  var czK;
  var czL = [];
  var czM = document.getElementById("rawMapData");
  for (var czO = 0; czO < maps.length; czO++) {
    if ((czK = document.getElementById("gameMap" + czO)) && czK.checked) {
      czL.push(czO);
    }
  }
  if (czL.length != 0 || cHy || rawMapData.value != "") {
    var czP = [];
    for (czO = 0; czO < modes.length; czO++) {
      if (document.getElementById("gameMode" + czO).checked) {
        czP.push(czO);
      }
    }
    if (czP.length != 0) {
      var czV = [];
      for (czO = 0; czO < game.classes.length; czO++) {
        if (document.getElementById("gameClass" + czO).checked) {
          czV.push(czO);
        }
      }
      if (czV.length != 0) {
        var czZ;
        var cA0 = {
          customMap: cHy,
          rawMapData: czM ? czM.value : null,
          private: makePrivate.checked,
          maps: czL,
          modes: czP,
          classes: czV
        };
        for (czO = 0; czO < config.serverConfig.length; czO++) {
          czZ = document.getElementById("customS" + config.serverConfig[czO].varN);
          tmpV = config.serverConfig[czO].bool ? czZ ? czZ.checked : 0 : config.serverConfig[czO].input ? czZ ? utils.sanitizeStr(czZ.value) : 0 : czZ ? parseFloat(czZ.value) : 0;
          cA0[config.serverConfig[czO].varN] = tmpV;
        }
        socket.send("custom", cA0);
        hostGameMsg.innerHTML = locale.get("generic.wait");
      } else {
        hostGameMsg.innerHTML = "<span class='error'>" + locale.get("custom.class.missing") + "</span>";
      }
    } else {
      hostGameMsg.innerHTML = "<span class='error'>" + locale.get("custom.mode.missing") + "</span>";
    }
  } else {
    hostGameMsg.innerHTML = "<span class='error'>" + locale.get("custom.map.missing") + "</span>";
  }
};
Object.defineProperty(console, "_commandLineAPI", {
  get: function () {
    throw "";
  }
});
var THREE = require("./4.js");
THREE.OBJLoader = require("./63.js")(THREE);
THREE.Shaders = require("./64.js")(THREE);
var utils = require("./8.js");
var overlay = require("./98.js");
var renderer = new (require("./56.js"))(THREE, utils, config, overlay);
var cAB = window.SOUND = new (require("./73.js"))(utils, config);
var cAC = new (require("./74.js"))(renderer, config);
var cAD = require("./130.js");
var cAE = new (require("./131.js"))(renderer, config);
var cAF = require("./132.js");
var socket = require("./86.js");
var game = require("./88.js").obj;
game = new game(false, 0, null, renderer, cAB, cAC);
var controls = new (require("./150.js"))(renderer, THREE, cAD, utils, game, config, socket);
game.controls = controls;
var cAJ;
var cAK;
var cAL;
var cAM;
var cAN;
var cAO;
var maps = require("./39.js").maps;
var modes = require("./39.js").modes;
var cAR = require("./91.js");
var Player = require("./70.js").Player;
var cAT = new (require("./153.js"))();
var cAU = require("./35.js");
new THREE.Vector3();
var cAV = false;
var cAW = null;
var cAX = false;
window.locked = false;
var cAY = [];
var cAZ = true;
var cB0 = 0;
var cB1 = 0;
var cB2 = 0;
var cB3 = 1;
var cB4 = -1;
window.idleTimer = 0;
var cB5;
var cB6;
var cB7;
var cB8;
var cB9 = true;
var cBa = true;
var cBb = true;
var cBc = [];
var cBd = "";
var cBe = "";
var cBf = false;
var cBg = false;
var cBh = getSavedVal("krk_lastMod") || "";
function cBi(czK) {
  cBh = czK;
  saveVal("krk_lastMod", czK);
}
cBi(cBh);
var cBk = 1;
var cBl = 1;
var cBm = 1700;
var cBn = 900;
function cBo() {
  var czK = window.innerWidth;
  var czL = window.innerHeight;
  var czM = cBm * cBl;
  var czN = cBn * cBl;
  var czO = czK / czM;
  var czP = czL / czN;
  if (czP < czO) {
    cBk = czP;
    uiBase.style.transform = "scale(" + czP.toFixed(3) + ")";
    uiBase.style.width = (czK / czP).toFixed(3) + "px";
    uiBase.style.height = czN + "px";
  } else {
    cBk = czO;
    uiBase.style.transform = "scale(" + czO.toFixed(3) + ")";
    uiBase.style.width = czM + "px";
    uiBase.style.height = (czL / czO).toFixed(3) + "px";
  }
}
window.addEventListener("resize", cBo);
cBo();
window.checkTerms = function (czK) {
  if (czK) {
    consentBlock.style.display = "none";
    saveVal("consent", 1);
  } else {
    $("#consentShake").effect("shake");
  }
};
var cBw = ["/img/button/button-normal.png", "/img/button/button-hover.png", "/img/button/button-pressed.png", "/img/social-buttons/discord-normal.png", "/img/social-buttons/discord-hover.png", "/img/social-buttons/discord-pressed.png", "/img/social-buttons/reddit-normal.png", "/img/social-buttons/reddit-hover.png", "/img/social-buttons/reddit-pressed.png", "/img/social-buttons/twitter-normal.png", "/img/social-buttons/twitter-hover.png", "/img/social-buttons/twitter-pressed.png", "/img/social-buttons/kr-normal.png", "/img/social-buttons/kr-hover.png", "/img/social-buttons/kr-pressed.png"];
var cBx = [];
window.addEventListener("load", function () {
  for (var czK of cBw) {
    var czL = new Image();
    czL.src = czK;
    cBx.push(czL);
  }
});
eval;
Math.PI2 = Math.PI * 2;
Math.lerpAngle = function (czK, czL, czM) {
  if (Math.abs(czL - czK) > Math.PI) {
    if (czK > czL) {
      czL += Math.PI2;
    } else {
      czK += Math.PI2;
    }
  }
  var czN = czL + (czK - czL) * czM;
  if (czN >= 0 && czN <= Math.PI2) {
    return czN;
  } else {
    return czN % Math.PI2;
  }
};
console.warn = function () {};
console.info = function () {};
var cBE = false;
window.toggleStrm = function (czK, czL = false) {
  cBE = czK;
  if (!czL) {
    if (czK) {
      window.history.pushState(document.title, document.title, "/");
    } else {
      window.history.pushState(document.title, document.title, matchmaker.generateHref(cA2));
    }
  }
  cLQ(cLO, cLP);
};
var cBH = false;
window.loading = false;
var cBI = false;
window.spectTarget = null;
window.spectating = false;
window.toggleSpect = function (czK) {
  cBI = czK;
};
var cBK;
var cBL;
var cBM = false;
function cBN() {
  window.innerWidth;
  cBK = window.innerHeight;
  cBL = cBK / cBk / 693;
  renderer.resize();
}
function cBO(czK) {
  return config.apiURL + czK;
}
window.toggleChal = function (czK) {
  cBM = czK;
};
window.spectMode = function (czK) {
  if (game && game.players) {
    if (czK) {
      var czL = Math.max(0, window.spectTarget ? game.players.list.indexOf(window.spectTarget) : 0);
      var czM = null;
      for (var czN = 0; czN < game.players.list.length; ++czN) {
        if ((czL += czK) >= game.players.list.length) {
          czL = 0;
        } else if (czL < 0) {
          czL = game.players.list.length - 1;
        }
        if ((cAL = game.players.list[czL]) && cAL.active) {
          czM = cAL;
          break;
        }
      }
      window.spectTarget = czM;
    } else {
      window.spectTarget = null;
      controls.setCamPosOff();
    }
    window.spectTarget;
  }
};
window.specStatUpdate = function (czK) {
  if (czK = window.spectTarget) {
    specStats.style.display = "inline-block";
    var czL = czK.name + (czK.clan ? "<span style='color:" + (config.verClans.indexOf(czK.clan) >= 0 ? "#fbc02d" : "#353535") + "'> [" + czK.clan + "]</span>" : "");
    for (var czM = game.mode.endStats || config.endStats, czO = "font-size:11px;color:rgb(255,255,255,0.5)", czP = 2; czP < czM.length; ++czP) {
      czL += "<div style='" + czO + "'>" + utils.capFirst(czM[czP]) + "<span style='float:right;" + czO + "'>" + (config.endForm[czM[czP]] ? config.endForm[czM[czP]](czK[czM[czP]], this, czK[cHl]) : czK[czM[czP]]) + "</span></div>";
    }
    specStats.innerHTML = czL;
  } else {
    specStats.style.display = "none";
    specStats.innerHTML = "";
  }
};
window.enterGame = function () {
  if ( /*cAH['singlePlayer'] && !cBH*/true) {
    cJj("0:00");
    var czK = game.getSpawnPoint(null, true);
    var czL = game.classes[parseInt(classIndex)];
    cKU([socket.socketId, 1, czK.x, czK.y, czK.z, /*'TEST'*/"Sidney [DEV]", classIndex, czL.health, czL.health, null, 100, null, [cEy[czL.loadout[0]] == null ? -1 : cEy[czL.loadout[0]], cEy[czL.loadout[1]] == null ? -1 : cEy[czL.loadout[1]]], null, null, czL.secondary ? parseInt(cEz) : null, false, null, -((czK.dir || 0) + 1) * Math.PI / 2]);
    cBH = true;
    cLQ([1, /*'TEST'*/"Sidney [DEV]", 0, 0, 0, 0]);
    cAD.toggleMenu(false);
  } else if (socket.connected && (!cBH || window.spectating && !cBI)) {
    bloodDisplay.style.display = "none";
    cBH = true;
    window.idleTimer = 0;
    cAD.toggleMenu(false);
    instructions.innerHTML = locale.get("generic.loading");
    window.loading = true;
    czL = parseInt(classIndex);
    var czM = game.classes[czL].loadout;
    var czN = [cEy[czM[0]] == null ? -1 : cEy[czM[0]], cEy[czM[1]] == null ? -1 : cEy[czM[1]]];
    socket.send("etrg", [czL, parseInt(cKG), czN, parseInt(cEw), parseInt(cEv), parseInt(cEz), cBI ? 1 : 0, cBM ? 1 : 0, cEs, parseInt(cEu), parseInt(cEt)]);
  }
};
window.addEventListener("resize", cBN);
cBN();
window.toggleAd = function () {};
var cC4 = 0;
function cC5(czK) {
  if (cAK) {
    cAK.funds = czK;
  }
  cDL();
}
function cC7(czK, czL) {
  window.idleTimer = 0;
  if (czK) {
    purchaseError();
  } else {
    if (cAK) {
      cAK.funds = czL;
    }
    cDL();
    updateWindow(null, true);
    cAD.toggleMenuHider(true);
    purchaseLoad.style.display = "none";
  }
}
window.cancelPurchase = function () {
  window.idleTimer = 0;
  showWindow(14);
  instructions.style.display = "block";
  cC4 = 0;
  context.toggleMenuHider(true);
  purchaseLoad.style.display = "none";
};
window.showPurchase = function (czK) {
  window.idleTimer = 0;
  cC4 = czK;
  purchaseHolder.style.display = "block";
  var czL = document.getElementById("paypal-button");
  if (czL) {
    czL.innerHTML = "";
  }
  if (cAK) {
    paypal.Button.render({
      style: {
        size: "large"
      },
      env: "production",
      commit: true,
      payment: function (czK, czL) {
        purchaseHolder.style.display = "none";
        return czL.request.post(cBO("/my-api/create-payment/"), {
          pIndex: cC4,
          acID: cAK.id
        }).then(function (czK) {
          return czK.id;
        });
      },
      onAuthorize: function (czK, czL) {
        return czL.request.post(cBO("/my-api/execute-payment/"), {
          pIndex: cC4,
          acID: cAK.id,
          paymentID: czK.paymentID,
          payerID: czK.payerID
        }).then(function (czK) {
          if (czK && czK.funds != null && czK.funds != null) {
            if (cAK) {
              cAK.funds = czK.funds;
            }
            cDL();
            updateWindow(null, true);
            cAD.toggleMenuHider(true);
            purchaseLoad.style.display = "none";
          } else {
            purchaseError();
          }
        });
      },
      onError: function () {
        purchaseError();
      }
    }, "#paypal-button");
  }
};
purchaseHolder.onclick = function () {
  purchaseHolder.style.display = "none";
};
window.purchaseError = function () {
  showWindow();
  cAD.toggleMenuHider(false);
  instructions.style.display = "none";
  purchaseLoad.style.display = "block";
  purchLoadRing.style.display = "none";
  purchaseLabel.innerHTML = locale.get("purchase.error") + " <a href='javascript:;' onclick='cancelPurchase()'>" + locale.get("purchase.error.click") + "<div style='color:rgba(255,255,255,0.3);font-size:20px'>" + locale.get("purchase.error.limit") + "</div>";
};
const cCi = new FileReader();
var cCj;
var cCk;
var cCl = false;
var cCm = 0;
var cCn = {};
function cCo() {
  cBH = false;
  window.idleTimer = 0;
  cAD.toggleMenu(true);
  controls.toggle(false);
  cIt = {
    states: []
  };
}
window.voiceChat = function (czK, czL) {
  if (cCm) {
    if (cBE && cAT) {
      czL = utils.scrambleS(czL);
    }
    try {
      var czM = new Howl({
        src: [czK],
        volume: cCm
      });
      czM.on("load", function () {
        if (czM.duration() <= config.voiceChatMaxLength) {
          czM.on("end", function () {
            cCn[czL]--;
            if (cCn[czL] <= 0) {
              var czK = document.getElementById("speaker" + czL);
              if (czK) {
                czK.parentElement.removeChild(czK);
              }
              delete cCn[czL];
            }
          });
          if (!cCn[czL]) {
            cCn[czL] = 0;
            speakerDisplay.innerHTML += "<div id='speaker" + czL + "' class='voiceSpeaker'>" + czL + " <i class='material-icons' style='color:#fff;font-size:35px;vertical-align:middle'>volume_down</i></div>";
          }
          cCn[czL]++;
          czM.play();
        }
      });
    } catch (cCt) {}
  }
};
cCi.addEventListener("loadend", function () {
  var czK = cCi.result;
  socket.send("vc", czK);
});
window.toggleRecord = function (czK) {
  if (document.activeElement.tagName != "INPUT") {
    if (cAJ || window.spectating) {
      if (czK && !cCl) {
        voiceDisplay.style.opacity = 0.9;
        cCl = true;
        navigator.mediaDevices.getUserMedia({
          audio: true,
          video: false
        }).then(function (czK) {
          (cCj = new MediaRecorder(czK, {
            mimetype: "audio/ogg",
            bitsPerSecond: 6000
          })).start();
          const czL = [];
          cCj.addEventListener("dataavailable", function (czK) {
            czL.push(czK.data);
          });
          cCj.addEventListener("stop", function () {
            recTimer.style.display = "none";
            voiceDisplay.style.opacity = 0.5;
            var czK = new Blob(czL, {
              type: "audio/ogg; codecs=opus"
            });
            cCi.readAsDataURL(czK);
          });
          recTimer.style.display = "inline-block";
          recTimer.innerHTML = config.voiceChatMaxLength;
          var czM = config.voiceChatMaxLength;
          cCk = setInterval(function () {
            czM--;
            recTimer.innerHTML = czM;
            if (czM <= 0) {
              cCl = false;
              cCj.stop();
              clearInterval(cCk);
            }
          }, 1000);
        }).catch(function () {
          cCl = false;
          if (cCk) {
            clearInterval(cCk);
          }
          voiceDisplay.style.opacity = 0.5;
        });
      } else if (!czK && cCl && cCj) {
        cCl = false;
        cCj.stop();
        clearInterval(cCk);
      }
    }
  }
};
window.updateSliderLabel = function (czK, czL) {
  var czM = document.getElementById("customSet" + czK);
  if (czM) {
    czM.innerHTML = czL;
  }
};
window.setSetting = function (czK, czL) {
  if (cCI[czK].min || cCI[czK].max) {
    czL = Math.min(cCI[czK].max, Math.max(cCI[czK].min, czL));
  }
  if (document.getElementById("slid_" + czK)) {
    document.getElementById("slid_" + czK).value = czL;
  }
  if (document.getElementById("slid_input_" + czK)) {
    document.getElementById("slid_input_" + czK).value = czL;
  }
  cCI[czK].set(czL);
  cCI[czK].val = czL;
  saveVal("kro_setngss_" + czK, czL);
};
window.resetSettings = function () {
  if (confirm(locale.get("settings.reset.confirm"))) {
    Object.keys(localStorage).filter(czK => czK.includes("kro_setngss_") || czK.includes("cont_")).forEach(czK => localStorage.removeItem(czK));
    location.reload();
  }
};
var cCI = {
  changeControls: {
    name: "<div style='width:100%'><a href='javascript:;' onclick='showWindow(7);' class='menuLink'>" + locale.get("settings.controls.change") + "</a> | <a onclick='resetSettings()' class='+'>" + locale.get("settings.reset") + "</a></div>",
    html: function () {
      return "";
    }
  },
  defaultRegion: {
    name: locale.get("settings.local.region"),
    pre: "<div class='setHed'>" + locale.get("settings.local.header") + "</div>",
    get val() {
      return localStorage[cA0.PING_REGION_CACHE_KEY];
    },
    set val(czK) {},
    html: function () {
      var czK = "<select onchange='setSetting(\"defaultRegion\", this.value)' class='inputGrey2'>";
      for (var czL of cO8) {
        czK += "<option value='" + czL + "' " + (czL == cCI.defaultRegion.val ? "selected" : "") + ">";
        czK += config.regionNames[czL];
        czK += "</option>";
      }
      return czK += "</select>";
    },
    set: function (czK) {
      if (czK && config.isProd) {
        localStorage.setItem(cA0.PING_REGION_CACHE_KEY, czK);
      }
    }
  },
  lang: {
    name: locale.get("settings.local.lang"),
    val: "en",
    html: function () {
      var czK = "<select onchange='setSetting(\"lang\", this.value)' class='inputGrey2'>";
      for (var czL of locale.supported) {
        czK += "<option value='" + czL + "' " + (czL == locale.locale ? "selected" : "") + ">";
        czK += config.langNames[czL];
        czK += "</option>";
      }
      return czK += "</select>";
    },
    set: function (czK) {
      if (czK) {
        locale.setLocale(czK);
        czV();
        if (windowHolder.style.display == "block") {
          cAD.toggleWindow(false, controls.gamepad.connected);
        }
      }
    }
  },
  resolution: {
    name: locale.get("settings.quality.res"),
    pre: "<div class='setHed'>" + locale.get("settings.quality.header") + "</div>",
    val: 0.6,
    min: 0.1,
    max: 2,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_resolution' min='0.1' max='2' value='" + cCI.resolution.val + "' oninput='setSetting(\"resolution\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_resolution' min='0.1' max='2' step='0.1'\" value='" + cCI.resolution.val + "' class='sliderM' oninput='setSetting(\"resolution\", this.value)'></div>";
    },
    set: function (czK) {
      renderer.setResMlt(czK);
    }
  },
  particles: {
    name: locale.get("settings.quality.part"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"particles\", this.checked)'\n            " + (cCI.particles.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cAC.active = czK;
    }
  },
  showTrails: {
    name: locale.get("settings.quality.trails"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showTrails\", this.checked)'\n            " + (cCI.showTrails.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cAC.showTrails = czK;
    }
  },
  muzzleFlash: {
    name: locale.get("settings.quality.mflash"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"muzzleFlash\", this.checked)'\n            " + (cCI.muzzleFlash.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cAC.showMuzzle = czK;
    }
  },
  sniperFlap: {
    name: "Sniper Flap",
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"sniperFlap\", this.checked)'\n            " + (cCI.sniperFlap.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      renderer.sniperFlap = czK;
    }
  },
  showUI: {
    name: locale.get("settings.interface.ui"),
    pre: "<div class='setHed'>" + locale.get("settings.interface.header") + "</div>",
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showUI\", this.checked)'\n            " + (cCI.showUI.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cAD.hideGameUI = !czK;
      chatUI.style.display = czK ? "block" : "none";
    }
  },
  dynamicHP: {
    name: locale.get("settings.interface.hp"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"dynamicHP\", this.checked)'\n            " + (cCI.dynamicHP.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      overlay.dynamicHP = czK;
    }
  },
  showChat: {
    name: locale.get("settings.interface.chat"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showChat\", this.checked)'\n            " + (cCI.showChat.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      chatHolder.style.display = czK ? "block" : "none";
    }
  },
  showKills: {
    name: locale.get("settings.interface.kills"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showKills\", this.checked)'\n            " + (cCI.showKills.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cB9 = czK;
    }
  },
  showMessages: {
    name: locale.get("settings.interface.messages"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showMessages\", this.checked)'\n            " + (cCI.showMessages.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cBa = czK;
    }
  },
  showUnboxings: {
    name: locale.get("settings.interface.unboxings"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showUnboxings\", this.checked)'\n            " + (cCI.showUnboxings.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cBb = czK;
    }
  },
  showPing: {
    name: locale.get("settings.interface.ping"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showPing\", this.checked)'\n            " + (cCI.showPing.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      pingDisplay.style.display = czK ? "block" : "none";
    }
  },
  showFPS: {
    name: locale.get("settings.interface.fps"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showFPS\", this.checked)'\n            " + (cCI.showFPS.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      fpsDisplay.style.display = menuFPSDisplay.style.display = czK ? "block" : "none";
    }
  },
  showDeaths: {
    name: locale.get("settings.interface.deaths"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showDeaths\", this.checked)'\n            " + (cCI.showDeaths.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      deathCount.style.display = czK ? "inline-block" : "none";
    }
  },
  crosshairSho: {
    name: locale.get("settings.crosshair.type"),
    pre: "<div class='setHed'>" + locale.get("settings.crosshair.header") + "</div>",
    val: 1,
    html: function () {
      return "<select class='inputGrey2' onchange=\"setSetting('crosshairSho', this.value)\">\n            <option value=\"0\"" + (cCI.crosshairSho.val == 0 ? " selected" : "") + ">" + locale.get("generic.off") + "</option>\n            <option value=\"1\"" + (cCI.crosshairSho.val == 1 ? " selected" : "") + ">" + locale.get("generic.default") + "</option>\n            <option value=\"2\"" + (cCI.crosshairSho.val == 2 ? " selected" : "") + ">" + locale.get("settings.crosshair.type.2") + "</option>\n            <option value=\"3\"" + (cCI.crosshairSho.val == 3 ? " selected" : "") + ">" + locale.get("settings.crosshair.type.3") + "</option>\n            <option value=\"4\"" + (cCI.crosshairSho.val == 4 ? " selected" : "") + ">" + locale.get("settings.crosshair.type.4") + "</option>\n            </select>";
    },
    set: function (czK) {
      overlay.crosshairType = czK;
      let czL = ["crosshairStyle", "crosshairAlways", "crosshairLen", "crosshairThick"];
      for (let czM of czL) {
        cCI[czM].hide = czM == "crosshairAlways" ? czK < 2 : czK == 4 || czK < 2;
        let czL = document.getElementById(czM + "_div");
        if (czL) {
          czL.style.display = cCI[czM].hide ? "none" : "block";
        }
      }
      cCI.crosshairImage.hide = czK != 4;
      let czM = document.getElementById("crosshairImage_div");
      if (czM) {
        czM.style.display = czK == 4 ? "block" : "none";
      }
    }
  },
  crosshairStyle: {
    name: locale.get("settings.crosshair.style"),
    val: 0,
    hide: true,
    html: function () {
      return "<select class='inputGrey2' onchange=\"setSetting('crosshairStyle', this.value)\">\n            <option value=\"0\"" + (cCI.crosshairStyle.val == 0 ? " selected" : "") + ">" + locale.get("settings.crosshair.style.0") + "</option>\n            <option value=\"1\"" + (cCI.crosshairStyle.val == 1 ? " selected" : "") + ">" + locale.get("settings.crosshair.style.1") + "</option>\n            <option value=\"2\"" + (cCI.crosshairStyle.val == 2 ? " selected" : "") + ">" + locale.get("settings.crosshair.style.2") + "</option>\n            <option value=\"3\"" + (cCI.crosshairStyle.val == 3 ? " selected" : "") + ">" + locale.get("settings.crosshair.style.3") + "</option>\n            <option value=\"4\"" + (cCI.crosshairStyle.val == 4 ? " selected" : "") + ">" + locale.get("settings.crosshair.style.4") + "</option>\n            </select>";
    },
    set: function (czK) {
      overlay.crosshairStyle = czK;
    }
  },
  crosshairImage: {
    name: locale.get("settings.crosshair.image"),
    val: "",
    hide: true,
    html: function () {
      return "<input type='url' placeholder='" + locale.get("settings.crosshair.image.paste") + "' name='url' class='inputGrey2'\n            value='" + cCI.crosshairImage.val + "' oninput='setSetting(\"crosshairImage\", this.value)'/>";
    },
    set: function (czK) {
      czK = utils.isURL(czK) && !/\.svg/.test(czK) ? czK : "";
      if (overlay.crosshairImage.src != czK && czK.length) {
        overlay.crosshairImage.src = czK;
      }
    }
  },
  crosshairAlways: {
    name: locale.get("settings.crosshair.always"),
    val: false,
    hide: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"crosshairAlways\", this.checked)'\n            " + (cCI.crosshairAlways.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      overlay.crosshairAlways = czK;
    }
  },
  crosshairColor: {
    name: locale.get("settings.crosshair.color"),
    val: "#ffffff",
    html: function () {
      return "<input type='color' id='head' name='color' value='" + cCI.crosshairColor.val + "' oninput='setSetting(\"crosshairColor\", this.value)' style='float:right;margin-top:5px'/>";
    },
    set: function (czK) {
      overlay.crosshairColor = czK;
    }
  },
  crosshairShadow: {
    name: locale.get("settings.crosshair.shadow"),
    val: "#000000",
    html: function () {
      return "<input type='color' id='head' name='color' value='" + cCI.crosshairShadow.val + "' oninput='setSetting(\"crosshairShadow\", this.value)' style='float:right;margin-top:5px'/>";
    },
    set: function (czK) {
      overlay.crosshairShadow = czK;
    }
  },
  crosshairLen: {
    name: locale.get("settings.crosshair.size"),
    val: 16,
    min: 2,
    max: 50,
    hide: true,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_crosshairLen' min='2' max='50' value='" + cCI.crosshairLen.val + "' oninput='setSetting(\"crosshairLen\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' min='2' max='50' step='1' value='" + cCI.crosshairLen.val + "' class='sliderM' oninput=\"setSetting('crosshairLen', this.value)\"></div>";
    },
    set: function (czK) {
      overlay.crosshairLen = czK;
    }
  },
  crosshairThick: {
    name: locale.get("settings.crosshair.thickness"),
    val: 2,
    min: 2,
    max: 20,
    hide: true,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_crosshairThick' min='2' max='20' value='" + cCI.crosshairThick.val + "' oninput='setSetting(\"crosshairThick\", this.value)' style='border-width:0px'/>\n          <div class='slidecontainer'>\n          <input type='range' min='2' max='20' step='1' value='" + cCI.crosshairThick.val + "' class='sliderM' oninput=\"setSetting('crosshairThick', this.value)\"></div>";
    },
    set: function (czK) {
      overlay.crosshairThick = czK;
    }
  },
  sensitivity: {
    name: locale.get("settings.gameplay.sensitivity"),
    pre: "<div class='setHed'>" + locale.get("settings.gameplay.header") + "</div>",
    val: 1,
    min: 0.1,
    max: 15,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_sensitivity' min='0.1' max='15' value='" + cCI.sensitivity.val + "' oninput='setSetting(\"sensitivity\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_sensitivity' min='0.1' max='15' step='0.1' value='" + cCI.sensitivity.val + "' class='sliderM' oninput='setSetting(\"sensitivity\", this.value)'></div>";
    },
    set: function (czK) {
      controls.sensMlt = czK;
    }
  },
  aimSensitivity: {
    name: locale.get("settings.gameplay.aimsens"),
    val: 1,
    min: 0.1,
    max: 15,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_aimSensitivity' min='0.1' max='15' value='" + cCI.aimSensitivity.val + "' oninput='setSetting(\"aimSensitivity\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_aimSensitivity' min='0.1' max='15' step='0.1' value='" + cCI.aimSensitivity.val + "' class='sliderM' oninput='setSetting(\"aimSensitivity\", this.value)'></div>";
    },
    set: function (czK) {
      controls.sensAimMlt = czK;
    }
  },
  fov: {
    name: locale.get("settings.gameplay.fov"),
    val: config.fov,
    min: 60,
    max: 120,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_fov' min='60' max='120' value='" + cCI.fov.val + "' oninput='setSetting(\"fov\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_fov' min='60' max='120' step='5' value='" + cCI.fov.val + "\"' class='sliderM' oninput='setSetting(\"fov\", this.value)'></div>";
    },
    set: function (czK) {
      renderer.setFov(czK);
    }
  },
  scrollDir: {
    name: locale.get("settings.gameplay.scrollDir"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"scrollDir\", this.checked)'\n                " + (cCI.scrollDir.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cB3 = czK ? 1 : -1;
    }
  },
  streamMode: {
    name: locale.get("settings.gameplay.streamer"),
    val: false,
    dontInit: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"streamMode\", this.checked)'\n        " + (cCI.streamMode.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      toggleStrm(czK);
    }
  },
  challMode: {
    name: locale.get("settings.gameplay.challenge"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"challMode\", this.checked)'\n        " + (cCI.challMode.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      toggleChal(czK);
    }
  },
  invertY: {
    name: locale.get("settings.gameplay.invert"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"invertY\", this.checked)'\n        " + (cCI.invertY.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      controls.invertY = czK;
    }
  },
  hideNames: {
    name: locale.get("settings.gameplay.hideNames"),
    val: 0,
    html: function () {
      return "<select class='inputGrey2' onchange=\"setSetting('hideNames', this.value)\">\n            <option value=\"0\"" + (cCI.hideNames.val == 0 ? " selected" : "") + ">" + locale.get("settings.gameplay.hideNames.all") + "</option>\n            <option value=\"1\"" + (cCI.hideNames.val == 1 ? " selected" : "") + ">" + locale.get("settings.gameplay.hideNames.team") + "</option>\n            <option value=\"2\"" + (cCI.hideNames.val == 2 ? " selected" : "") + ">" + locale.get("settings.gameplay.hideNames.enemy") + "</option>\n            <option value=\"3\"" + (cCI.hideNames.val == 3 ? " selected" : "") + ">" + locale.get("generic.off") + "</option>\n            </select>";
    },
    set: function () {}
  },
  sound: {
    name: locale.get("settings.audio.sound"),
    pre: "<div class='setHed'>" + locale.get("settings.audio.header") + "</div>",
    val: 1,
    min: 0,
    max: 1,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_sound' min='0' max='1' value='" + cCI.sound.val + "' oninput='setSetting(\"sound\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_sound' min='0' max='1' step='0.1' value='" + cCI.sound.val + "' class='sliderM' oninput='setSetting(\"sound\", this.value)'></div>";
    },
    set: function (czK) {
      cAB.setVolume(czK);
    }
  },
  voiceVolume: {
    name: locale.get("settings.audio.voice"),
    val: 1,
    min: 0,
    max: 1,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_voiceVolume' min='0' max='1' value='" + cCI.voiceVolume.val + "' oninput='setSetting(\"voiceVolume\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_voiceVolume' min='0' max='1' step='0.1' value='" + cCI.voiceVolume.val + "' class='sliderM' oninput='setSetting(\"voiceVolume\", this.value)'></div>";
    },
    set: function (czK) {
      cCm = czK;
    }
  },
  fpsFOV: {
    name: locale.get("settings.viewmodel.fps"),
    pre: "<div class='setHed'>" + locale.get("settings.viewmodel.header") + "</div>",
    val: config.fov,
    min: 60,
    max: 120,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_fpsFOV' min='60' max='120' value='" + cCI.fpsFOV.val + "' oninput='setSetting(\"fpsFOV\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_fpsFOV' min='60' max='120' step='5' value='" + cCI.fpsFOV.val + "' class='sliderM' oninput='setSetting(\"fpsFOV\", this.value)'></div>";
    },
    set: function (czK) {
      renderer.setFPSFov(czK);
    }
  },
  weaponBob: {
    name: locale.get("settings.viewmodel.bobbing"),
    val: 1,
    min: 0,
    max: 2,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_weaponBob' min='0' max='2' value='" + cCI.weaponBob.val + "' oninput='setSetting(\"weaponBob\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_weaponBob' min='0' max='2' step='0.1' value='" + cCI.weaponBob.val + "' class='sliderM' oninput='setSetting(\"weaponBob\", this.value)'></div>";
    },
    set: function (czK) {
      renderer.weaponLean = czK;
    }
  },
  showWeapon: {
    name: locale.get("settings.viewmodel.show.primary"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showWeapon\", this.checked)'\n        " + (cCI.showWeapon.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      game.hideWeapon[0] = !czK;
      if (cAJ) {
        var czL;
        for (var czM = 0; czM < cAJ.loadout.length; czM++) {
          if (!(czL = game.weapons[cAJ.loadout[czM]]).secondary && !czL.melee && cAJ.weaponMeshes[czM] && cAJ.weaponIndex == czM) {
            cAJ.weaponMeshes[czM].visible = czK;
          }
        }
      }
    }
  },
  showWeaponSec: {
    name: locale.get("settings.viewmodel.show.secondary"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showWeaponSec\", this.checked)'\n        " + (cCI.showWeaponSec.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      game.hideWeapon[1] = !czK;
      if (cAJ) {
        for (var czL = 0; czL < cAJ.loadout.length; czL++) {
          if (game.weapons[cAJ.loadout[czL]].secondary && cAJ.weaponMeshes[czL] && cAJ.weaponIndex == czL) {
            cAJ.weaponMeshes[czL].visible = czK;
          }
        }
      }
    }
  },
  showWeaponMel: {
    name: locale.get("settings.viewmodel.show.melee"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"showWeaponMel\", this.checked)'\n        " + (cCI.showWeaponMel.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      game.hideWeapon[2] = !czK;
      if (cAJ) {
        for (var czL = 0; czL < cAJ.loadout.length; czL++) {
          if (game.weapons[cAJ.loadout[czL]].melee && cAJ.weaponMeshes[czL] && cAJ.weaponIndex == czL) {
            cAJ.weaponMeshes[czL].visible = czK;
          }
        }
      }
    }
  },
  hudHealthHigh: {
    name: locale.get("settings.editing.health.high"),
    pre: "<div class='setHed'>" + locale.get("settings.editing.header") + "</div>",
    val: "#9eeb56",
    html: function () {
      return "<input type='color' id='head' name='color' value='" + cCI.hudHealthHigh.val + "' oninput='setSetting(\"hudHealthHigh\", this.value)' style='float:right;margin-top:5px'/>";
    },
    set: function () {}
  },
  hudHealthLow: {
    name: locale.get("settings.editing.health.low"),
    val: "#eb5656",
    html: function () {
      return "<input type='color' id='head' name='color' value='" + cCI.hudHealthLow.val + "' oninput='setSetting(\"hudHealthLow\", this.value)' style='float:right;margin-top:5px'/>";
    },
    set: function () {}
  },
  depthMap: {
    name: locale.get("settings.editing.depth"),
    val: 0,
    min: 0,
    max: 500,
    html: function () {
      return "<input type='number' class='sliderVal' id='slid_input_depthMap' min='0' max='500' value='" + cCI.depthMap.val + "' oninput='setSetting(\"depthMap\", this.value)' style='border-width:0px'/>\n            <div class='slidecontainer'>\n            <input type='range' id='slid_depthMap' min='0' max='500' step='5' value='" + cCI.depthMap.val + "' class='sliderM' oninput='setSetting(\"depthMap\", this.value)'></div>";
    },
    set: function (czK) {
      renderer.toggleDepthMap(czK);
    }
  },
  greenScreen: {
    name: locale.get("settings.editing.green"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"greenScreen\", this.checked)'\n        " + (cCI.greenScreen.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      renderer.toggleGreenscreen(czK);
    }
  },
  ambientShading: {
    name: locale.get("settings.shaders.ambient"),
    pre: "<div class='setHed'>" + locale.get("settings.shaders.header") + "</div>",
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"ambientShading\", this.checked)'\n        " + (cCI.ambientShading.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      renderer.toggleMeshGroup("ambient_0", czK);
      renderer.toggleMeshGroup("ambient_1", czK);
    }
  },
  canLoadMods: {
    name: locale.get("settings.mods.load"),
    pre: "<div class='setHed'>" + locale.get("settings.mods.header") + "</div>",
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"canLoadMods\", this.checked)'\n        " + (cCI.canLoadMods.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      cAZ = czK;
    }
  },
  autoLoadLast: {
    name: locale.get("settings.mods.auto"),
    val: false,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"autoLoadLast\", this.checked)'\n        " + (cCI.autoLoadLast.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function () {}
  },
  scopeBorders: {
    name: locale.get("settings.mods.borders"),
    val: true,
    html: function () {
      return "<label class='switch'><input type='checkbox' onclick='setSetting(\"scopeBorders\", this.checked)'\n        " + (cCI.scopeBorders.val ? "checked" : "") + "><span class='slider'></span></label>";
    },
    set: function (czK) {
      Array.from(document.querySelectorAll(".black")).forEach(czL => czL.style.display = czK ? "block" : "none");
    }
  },
  customScope: {
    name: locale.get("settings.mods.scope"),
    val: "",
    html: function () {
      return "<input type='url' placeholder='" + locale.get("settings.mods.scope.paste") + "' name='url' class='inputGrey2'\n            value='" + cCI.customScope.val + "' oninput='setSetting(\"customScope\", this.value)'/>";
    },
    set: function (czK) {
      czK = utils.isURL(czK) && !/\.svg/.test(czK) ? czK : "";
      recticleImg.src = czK.length > 1 ? czK : location.origin + "/textures/recticle.png";
    }
  },
  customADSDot: {
    name: locale.get("settings.mods.dot"),
    val: "",
    html: function () {
      return "<input type='url' id='customADSDot' placeholder='" + locale.get("settings.mods.dot.paste") + "' name='url' class='inputGrey2'\n            value='" + cCI.customADSDot.val + "' oninput='setSetting(\"customADSDot\", this.value)'/>";
    },
    set: function (czK) {
      if ((czK = utils.isURL(czK) && !/\.svg/.test(czK) ? czK : "").length) {
        cBd = czK;
      }
    }
  },
  endMessage: {
    name: locale.get("settings.mods.endmessage"),
    val: "",
    html: function () {
      return "<input type='text' placeholder='" + locale.get("settings.mods.endmessage") + "' name='text' class='inputGrey2'\n            value='" + cCI.endMessage.val + "' oninput='setSetting(\"endMessage\", this.value)'/>";
    },
    set: function () {}
  },
  customProfile: {
    name: locale.get("settings.mods.profile"),
    val: "",
    html: function () {
      return "<input type='url' id='customProfile' placeholder='" + locale.get("settings.mods.profile.paste") + "' name='url' class='inputGrey2'\n            value='" + cCI.customProfile.val + "' oninput='setSetting(\"customProfile\", this.value)'/>";
    },
    set: function (czK) {
      czK = utils.isURL(czK) && !/\.svg/.test(czK) ? czK : "";
      cBe = menuMiniProfilePic.src = hudClassImg.src = czK;
    }
  }
};
for (var cDH in cCI) {
  if (cCI[cDH].set && !cCI[cDH].dontInit) {
    var cDI = getSavedVal("kro_setngss_" + cDH);
    cCI[cDH].val = cDI === null ? cCI[cDH].val : cDI;
    if (cCI[cDH].val == "false") {
      cCI[cDH].val = false;
    }
    if (cCI[cDH].min || cCI[cDH].max) {
      cCI[cDH].val = Math.min(cCI[cDH].max, Math.max(cCI[cDH].min, cCI[cDH].val));
    }
    cCI[cDH].set(cCI[cDH].val, true);
  }
}
function cDJ(czK) {
  if (cAK) {
    cAK.setData(czK);
  }
  updateWindow(5);
  cDL();
}
function cDL() {
  if (cAK) {
    signedOutHeaderBar.style.display = "none";
    signedInHeaderBar.style.display = null;
    if (cAK.level >= config.rewardMinLvl) {
      claimHolder.style.display = "block";
      merchHolder.style.top = "205px";
      cEi();
    } else {
      merchHolder.style.top = "110px";
    }
    menuAccountUsername.innerText = cAK.name;
    menuKRCount.innerText = cAK.funds;
    menuLevelText.innerText = "LVL " + cAK.level;
    menuLevelBar.style.width = cAK.levelProg + "%";
    var czK = utils.levelIconId(cAK.level);
    menuLevelIcon.style.backgroundImage = "url('/img/levels/" + czK + ".png')";
  } else {
    signedOutHeaderBar.style.display = null;
    signedInHeaderBar.style.display = "none";
    claimHolder.style.display = "none";
    merchHolder.style.top = "110px";
  }
}
new MutationObserver(czK => {
  if (cBd.length > 1 && cBd != czK[0].target.src) {
    czK[0].target.src = cBd;
  }
}).observe(aimDot, {
  attributes: true,
  attributeFilter: ["src"]
});
window.changeCont = function (czK, czL) {
  if (!czL) {
    showWindow(7, true);
  }
  if (czK <= 3) {
    controls.inputChanger = czK;
  } else if (czK == 4) {
    controls.inputChanger = "jumpKey";
  } else if (czK == 5) {
    controls.inputChanger = "crouchKey";
  } else if (czK == 6) {
    controls.inputChanger = "meleeKey";
  } else if (czK == 7) {
    controls.inputChanger = "swapKey";
  } else if (czK == 8) {
    controls.inputChanger = "reloadKey";
  } else if (czK == 9) {
    controls.inputChanger = "sprayKey";
  } else if (czK == 10) {
    controls.inputChanger = "aimKey";
  } else if (czK == 11) {
    controls.inputChanger = "chatKey";
  } else if (czK == 12) {
    controls.inputChanger = "voiceKey";
  } else if (czK == 13) {
    controls.inputChanger = "primKey";
  } else if (czK == 14) {
    controls.inputChanger = "inspKey";
  } else if (czK == 15) {
    controls.inputChanger = "listKey";
  } else if (czK == 16) {
    controls.inputChanger = "interactKey";
  } else if (czK == 17) {
    controls.inputChanger = "dropKey";
  }
  document.getElementById("cont" + czK).innerHTML = locale.get("settings.controls.press");
};
var cDQ = 5;
var cDR = 0;
function cDS(czK, czL) {
  if (czK) {
    if (cDR == 0 && (czK == "CreatingGame" || czK == "Host" || czK == "Join")) {
      playTick();
      cDR = cDQ;
      var czM = setInterval(function () {
        playTick();
        cDR--;
        cDS("Countdown");
        if (cDR <= 1) {
          clearInterval(czM);
        }
      }, 1000);
    }
    var czN;
    var czO;
    queueStatus.style.display = "";
    if (cDR > 0) {
      czN = "Joining in " + cDR + "...";
      czO = false;
    } else {
      switch (czK) {
        case "Queuing":
          czN = locale.get("queue.status.queuing");
          czO = false;
          break;
        case "Queued":
          var czP = czL.queueSize - czL.queueIndex + " of " + czL.queueSize;
          czN = locale.get("queue.status.queued") + " (" + czP + ")";
          czO = true;
          break;
        case "CreatingGame":
          czN = locale.get("queue.status.creating-game");
          czO = false;
          break;
        case "Host":
          czN = locale.get("queue.status.host");
          czO = false;
          break;
        case "Join":
          czN = locale.get("queue.status.join");
          czO = false;
          break;
        default:
          console.warn("Unknown status", czK);
          czN = "?";
      }
    }
    queueStatusText.innerText = czN;
    queueStatusButton.style.display = czO ? "" : "none";
    uiBase.classList.toggle("isQueued", true);
  } else {
    cDR = 0;
    queueStatus.style.display = "none";
    uiBase.classList.toggle("isQueued", false);
  }
}
function cDZ(czK) {
  try {
    accResp.innerHTML = czK || "";
    accResp.style.display = czK ? "block" : "none";
  } catch (cE1) {}
}
function cE2(czK, czL) {
  if (czK >= 0) {
    cDZ(locale.get("generic.wait"));
  }
  if (czK != 0 || cBf) {
    socket.send("a", czK, czL);
  } else {
    try {
      grecaptcha.reset();
    } catch (cE5) {}
    grecaptcha.render("captchaBtn", {
      sitekey: "6LchqW0UAAAAANOoHruD0Ql5aNJIZld4EwLiaf-W",
      callback: function (czM) {
        cBf = true;
        socket.send("a", czK, czL, czM);
      }
    });
    grecaptcha.execute();
  }
}
function cE7(czK, czL, czM, czO, czP) {
  if (czK) {
    cDZ(czK);
  } else {
    cAK = new cAR(czL, czM, null, config);
    saveVal("krunker_id", czL);
    saveVal("krunker_username", czM);
    cDJ(czO);
    if (cAK.hack) {
      window.activeHacker = true;
    }
    if (czP) {
      saveVal("krunker_token", czP);
      loginToken = czP;
    }
    updateWindow(null, true);
    if (autoQueue) {
      autoQueue = false;
      joinQueue();
    }
  }
}
window.registerAcc = function () {
  cE2(0, [accName.value, accPass.value]);
};
window.loginAcc = function () {
  cE2(1, [accName.value, accPass.value, null]);
};
window.logoutAcc = function () {
  cE2(-1);
  cDZ();
  deleteItem("krunker_id");
  deleteItem("krunker_username");
  deleteItem("krunker_token");
  deleteItem("skins");
  deleteItem("hatIndex");
  deleteItem("backIndex");
  deleteItem("meleeIndex");
  deleteItem("skinColIndex");
  cEw = -1;
  cEv = -1;
  cEu = -1;
  cEt = -1;
  cEy = {};
  selectSecondary(2);
  windows[12].clanData = null;
  loginToken = null;
  cAK = null;
  cDJ();
  showWindow(5);
  cEQ();
};
var cEd = false;
window.newTok = function (czK) {
  if (czK) {
    saveVal("krunker_token", czK);
    loginToken = czK;
  }
};
window.logoutSessions = function (czK) {
  if (czK) {
    czK.style.display = "none";
  }
  cEd = true;
  socket.send("las");
};
var cEg;
var cEh = 0;
function cEi() {
  if (claimHolder.style.display == "block") {
    cEh = config.rewardTime - ((cB5 || Date.now()) - cAK.lastReward);
    var czK = utils.getTimeH(Math.max(0, cEh));
    if (cEg != czK) {
      cEg = czK;
      claimTimer.innerHTML = czK == "00:00:00" ? "" : czK;
      merchHolder.style.top = czK == "00:00:00" ? "205px" : "237px";
    }
    var czL = cEh <= 0 ? "./img/claim_0.png" : "./img/claim_1.png";
    if (claimImg.getAttribute("src") != czL) {
      claimImg.src = czL;
    }
  }
}
function cEl(czK, czL) {
  cC5(czL);
  if (cAK) {
    cAK.lastReward = czK;
  }
  cEi();
}
window.claimReward = function () {
  if (cEh <= 0) {
    (function () {
      if (cOb) {
        console.warn("Attempting to show pre ad when already showing");
        return;
      }
      cOb = true;
      var czK = document.createElement("script");
      czK.src = "//cdn.playwire.com/bolt/js/zeus/embed.js";
      czK.type = "text/javascript";
      czK.setAttribute("charset", "utf-8");
      czK.setAttribute("data-config", "//config.playwire.com/1020124/v2/pre_content.json");
      czK.setAttribute("data-width", "640px");
      czK.setAttribute("data-height", "360px");
      czK.setAttribute("data-id", "pre-content-player");
      czK.setAttribute("data-hidden-container", "my-content");
      czK.setAttribute("data-onready", "window.boltEventHandlers");
      var czL = document.getElementById("pre-content-container");
      czL.style.display = "block";
      czL.appendChild(czK);
      cO9 = setTimeout(function () {
        let czK = document.getElementById("my-content").style.display != "none";
        if (czK) {
          console.log("Ad blocked");
          cOc(false);
        } else {
          console.log("Ad not blocked");
        }
      }, 15000);
      cOa = setTimeout(function () {
        console.log("Ad failed to load");
        cOc(false);
      }, 60000);
    })();
  }
};
window.setClassIndex = function (czK) {
  classIndex = czK;
  menuMiniProfilePic.src = cBe.length ? cBe : "/textures/classes/icon_" + classIndex + ".png";
};
var cEs = 1;
var cEt = getSavedVal("skinColIndex") || -1;
var cEu = getSavedVal("meleeIndex") || -1;
var cEv = getSavedVal("backIndex") || -1;
var cEw = getSavedVal("hatIndex") || -1;
var cEx = getSavedVal("skins");
var cEy = cEx ? JSON.parse(cEx) : {};
setClassIndex(getSavedVal("classindex") || 0);
var cEz = getSavedVal("secondaryInd") || 2;
var cEA = 0;
window.selectHat = function (czK) {
  saveVal("hatIndex", czK);
  cEw = czK;
  cEQ();
  showWindow(3);
};
window.selectBack = function (czK) {
  saveVal("backIndex", czK);
  cEv = czK;
  cEQ();
  showWindow(3);
};
window.selectMelee = function (czK) {
  saveVal("meleeIndex", czK);
  cEu = czK;
  cEQ();
  showWindow(3);
};
window.selectSecondary = function (czK) {
  saveVal("secondaryInd", czK);
  cEz = czK;
  cEQ();
  showWindow(3);
};
window.selectSkinColor = function (czK) {
  saveVal("skinColIndex", czK);
  cEt = czK;
  cEQ();
  updateWindow(3);
};
window.selectClass = function (czK) {
  saveVal("classindex", czK);
  if (game.classes[czK].txts) {
    cNv(game.classes[czK].txts[utils.randInt(0, game.classes[czK].txts.length - 1)]);
  } else if (!utils.randInt(0, 2)) {
    cNv(["Let's Go!", "Alright!", "I'm Ready!"][utils.randInt(0, 2)]);
  }
  setClassIndex(czK);
  cEQ();
  showWindow(3);
};
window.skinSelector = function (czK) {
  cEA = czK;
  cEQ();
  showWindow(15);
};
window.selectSkin = function (czK, czL) {
  cAL = game.store.skins[czK];
  cEy[czL] = cAL ? czK : undefined;
  saveVal("skins", JSON.stringify(cEy));
  cEQ();
  showWindow(3);
};
var cEK;
var cEL;
var cEM = 660;
var cEN = 350;
var cEO = new THREE.PerspectiveCamera(15, 1, 0.1, 100);
var cEP = new THREE.WebGLRenderer({
  canvas: classPreviewCanvas,
  precision: "mediump",
  antialias: false,
  alpha: true
});
function cEQ() {
  function czK(czK, czL = true) {
    if (czM) {
      czM += " - ";
    }
    var czN = "inherit";
    var czO = game.weapons[czK].name;
    if (cEy[czK] != null) {
      var czP = game.store.skins[cEy[czK]];
      if (czP) {
        czN = game.store.rarities[czP.rarity].color;
        czO = czP.name;
      }
    }
    czM += "<span style='color:" + (czL ? czN : "inherit") + "'>" + czO + "</span>";
  }
  var czL = game.classes[classIndex];
  menuClassName.innerText = czL.name;
  var czM = "";
  for (var czO of czL.loadout) {
    czK(czO);
  }
  menuClassSubtext.innerHTML = czM;
  (cEK = new THREE.Scene()).add(new THREE.AmbientLight(9937064));
  var czP = new THREE.DirectionalLight(15923452, 0.5);
  czP.position.set(10, 17, -10);
  cEK.add(czP);
  var czU = [cEy[czL.loadout[0]] == null ? -1 : cEy[czL.loadout[0]], cEy[czL.loadout[1]] == null ? -1 : cEy[czL.loadout[1]]];
  (cEL = new Player(-1, this, utils, config, game)).sid = -1;
  cEL.init(0, 0, 0, "preview", false);
  cEL.skins = czU;
  cEL.hatIndex = cEw;
  cEL.backIndex = cEv;
  cEL.meleeIndex = cEu;
  cEL.skinColIndex = cEt;
  cEL.secIndex = cEz;
  cEL.setClass(game, classIndex, cEz, true);
  game.players.swapWeapon(cEL, 0, true);
  cEK.add(game.players.generateMeshes(cEL, false));
  cEL.swapTime = 0;
  cEL.weaponMeshes[0].visible = true;
  cEO.lookAt(new THREE.Vector3(0, config.playerHeight * 0.8, 0));
}
cEO.position.x = -10;
cEO.position.y = 17;
cEO.position.z = -29;
cEQ();
var cF2 = getSavedVal("krk_hideFull") == "true";
function cF3(czK, czL) {
  var czM = "";
  var czN = czL == "map" ? "selectHostMap" : "loadUserMod";
  for (var czO = 0; czO < czK.length; ++czO) {
    czM += "<div class='mapListItem'><img class='mapListThumb' src='" + (czK[czO][czL + "_image"] ? czK[czO][czL + "_image"] : "./img/noimg.png") + "' onclick='" + czN + "(&quot;" + czK[czO][czL + "_name"] + "&quot;,&quot;" + czK[czO].mod_url + "&quot;,&quot;" + czK[czO].mod_id + "&quot;)'/><div style='margin-top:-3px'><a href='javascript:;' onclick='" + czN + "(&quot;" + czK[czO][czL + "_name"] + "&quot;,&quot;" + czK[czO].mod_url + "&quot;,&quot;" + czK[czO].mod_id + "&quot;)'/>" + czK[czO][czL + "_name"] + "</a></div><div style='display: flex'><span style='color:rgba(0,0,0,0.2);font-size:15px'> by <a target='_blank' class='grey' href='/social.html?p=profile&q=" + czK[czO].creatorname + "'>" + czK[czO].creatorname + "</a></span><div style='font-size:15px;text-align:right;flex-grow:1'>" + czK[czO][czL + "_votes"] + "</div></div></div>";
  }
  return czM;
}
function cF9(czK, czL) {
  var czM = "<div id='skinList'><div class='skinCard'>" + (czL == 3 ? "Combat Knife" : locale.get("generic.none")) + "<div class='itemOwn'>" + locale.get("generic.default") + "</div><img class='skinImgC' src='." + utils.versionifyUrl("/textures/previews/cosmetics/" + czL + "_default.png") + "'><div class='selctBtn' onmouseenter='playTick()' onclick='" + czK + "(-1)'>" + locale.get("generic.select") + "</div></div>";
  if (cAK || game.singlePlayer) {
    for (var czN = (game.singlePlayer ? Object.keys(game.store.skins).map(czK => czK = {
        ind: parseInt(czK),
        cnt: 1
      }) : cAK.skins).slice().sort(function (czK, czL) {
        return (czL.ind != null && game.store.skins[czL.ind] ? game.store.skins[czL.ind].rarity : 0) - (czK.ind != null && game.store.skins[czK.ind] ? game.store.skins[czK.ind].rarity : 0);
      }), czO = 0; czO < czN.length; ++czO) {
      if ((cAL = game.store.skins[czN[czO].ind]) && cAL.type == czL) {
        czM += "<div class='skinCard' style='color:" + game.store.rarities[cAL.rarity].color + "'><div class='itemCnt' data-badge='x" + czN[czO].cnt + "'></div>" + cAL.name + "<div class='itemOwn'>by " + (cAL.creator || "Krunker.io") + "</div><img class='skinImg" + (cAL.type ? "C" : "") + "' src='." + utils.getPreview(cAL, game.store) + "'/><div class='selctBtn' onmouseenter='playTick()'onclick='" + czK + "(" + czN[czO].ind + ")'>" + locale.get("generic.select") + "</div></div>";
      }
    }
  }
  return czM += "</div>";
}
window.toggleHF = function (czK) {
  cF2 = czK;
  saveVal("krk_hideFull", czK);
};
toggleHF(cF2);
setInterval(() => {
  window.kiH(socket);
}, 12000);
window.windows = [{
  header: locale.get("windows.settings.header"),
  gen: function () {
    var czK = "";
    for (var czL in cCI) {
      if (cCI[czL].pre) {
        czK += cCI[czL].pre;
      }
      czK += "<div class='settName' id='" + czL + "_div' style='display:" + (cCI[czL].hide ? "none" : "block") + "'>" + cCI[czL].name + " " + cCI[czL].html() + "</div>";
    }
    return czK;
  }
}, {
  header: locale.get("windows.servers.header"),
  lastLoadTime: 0,
  serverListData: [],
  gen: function () {
    if (Date.now() - this.lastLoadTime < config.serverBrowserRate) {
      return this.genList();
    } else {
      this.lastLoadTime = Date.now();
      return this.loadData();
    }
  },
  loadData: function () {
    matchmaker.fetchGameList().then(czK => {
      this.serverListData = czK;
      var czL = false;
      for (var czM of czK) {
        if (czM.id === cA2) {
          czL = true;
          break;
        }
      }
      if (czL) {
        window.showWindow(2, true);
      } else {
        matchmaker.fetchGameInfo(cA2).then(czK => {
          this.privateServerData = czK;
          window.showWindow(2, true);
        });
      }
    });
    return locale.get("generic.loading");
  },
  expandedRegion: -1,
  totalPlayerCount: 0,
  serverSearch: null,
  searchList: function () {
    var czK = document.getElementById("serverSearch");
    this.serverSearch = czK && czK.value != "" ? czK.value : null;
    if (czK = document.getElementById("serverHolder")) {
      czK.innerHTML = this.getServers();
    }
  },
  getServers: function () {
    var czK = !!localStorage.debugServerList;
    var czL = "";
    this.totalPlayerCount = 0;
    var czM;
    var czO = {
      custom: {
        order: 1,
        name: "Custom Games",
        players: 0,
        games: []
      }
    };
    var czP = false;
    for (var czV = 0; czV < this.serverListData.length; czV++) {
      if ((czM = this.serverListData[czV]).data) {
        czO[czM.region] ||= {
          name: config.regionNames[czM.region],
          players: 0,
          games: []
        };
        var czZ = czM.data.cs ? "custom" : czM.region;
        czM.clients = Math.min(czM.clients, czM.maxClients);
        if (cA2 === czM.id) {
          czP = true;
        }
        if (!this.serverSearch || this.searchMatches(czM)) {
          czO[czZ].players += czM.clients;
        }
        this.totalPlayerCount += czM.clients;
        czO[czZ].games.push(czM);
      } else {
        console.warn("Server doesn't have data yet.");
      }
    }
    if (!czP) {
      if (this.privateServerData) {
        if (this.privateServerData.data) {
          czO.custom.games.push(this.privateServerData);
        } else {
          console.warn("Server doesn't have data yet.");
        }
      } else {
        console.warn("Missing private server data.");
      }
    }
    var cA0 = [];
    for (var cA1 in czO) {
      if (czO.hasOwnProperty(cA1)) {
        cA0.push(czO[cA1]);
      }
    }
    for (var cA1 of cA0 = cA0.sort((czK, czL) => (czL.order || -1) - (czK.order || -1))) {
      cA1.games.sort((czK, czL) => czL.clients - czK.clients);
    }
    if (cAK) {
      cAK.level;
    }
    for (var cA3 = 0; cA3 < cA0.length; cA3++) {
      (cA1 = cA0[cA3]).games = cA1.games.filter(czK => !cF2 || czK.clients != czK.maxClients);
      var cA4 = cA1.name + " - " + cA1.players + " online";
      var cA6 = this.expandedRegion == cA3;
      czL += "<div class='menuSelectorHeader' onclick='setExpandedRegion(" + (cA6 ? -1 : cA3) + ")' style='cursor: pointer;'>" + (cA6 ? "&#x25BC;" : "&#x25B6;") + " " + cA4 + "</div>";
      if (cA6) {
        czL += "<div class='menuSelectorHolder'>";
        var cAc = 0;
        for (var cAh = 0; cAh < cA1.games.length; cAh++) {
          var cAx = cA1.games[cAh];
          var cAy = cA2 && cA2 == cAx.id;
          if (!this.serverSearch || this.searchMatches(cAx)) {
            cAc++;
            var cAz = (czK ? cAx.id : cAx.data.i) + (cAx.data.earnKR ? " <i class='material-icons' style='color:#2196F3;font-size:33px;vertical-align:bottom;'>check_circle</i>" : "") + "<div class='serverPCount'>" + cAx.clients + "/" + cAx.maxClients + "</div>" + (cAx.data.cs ? "<div class='serverRegion'>" + cAx.id.split(":")[0] + " -&nbsp;</div>" : "");
            czL += "<div class='" + ("menuSelector" + (cAy ? " selectedMenuSelector" : "")) + "' onclick='" + ("checkedSwitchServer(\"" + cAx.id + "\", this.querySelector(\".serverPCount\"))") + "'>" + cAz + "</div>";
          }
        }
        if (!cA1.games.length || !cAc) {
          czL += "<div style='margin-left:30px;margin-top:5px'>" + locale.get("windows.servers.none") + "</div>";
        }
        czL += "</div>";
      }
    }
    return czL;
  },
  genList: function () {
    var czK = this;
    window.setExpandedRegion = function (czL) {
      czK.expandedRegion = czL;
      czK.lastLoadTime = Date.now();
      showWindow(2, true);
    };
    var czL = "<div style='font-size:20px'>";
    czL += "<a class='menuLink' onclick='openHostWindow()'>" + locale.get("windows.servers.host") + "</a><div style='float:right;display:inline-block'><input id='serverSearch'" + (this.serverSearch ? "value='" + this.serverSearch + "'" : "") + " type='text' placeholder='" + locale.get("generic.search") + "' oninput='windows[1].searchList()'></input></div></div><div id=\"serverFilters\"><div id=\"hideFull\" style=\"float:right;align-items:center;display:flex\"><span class=\"grey\">" + locale.get("windows.servers.hide") + "</span><label class=\"switchsml\"><input type=\"checkbox\" onclick=\"toggleHF(this.checked);windows[1].searchList()\"" + (cF2 ? " checked" : "") + "><span class=\"sliderSml\"></span></label></div></div><div style='height:10px'></div>";
    czL += "<div style='font-size:20px'>";
    czL += "<div id='serverHolder'>" + this.getServers() + "</div>";
    czL += "<div style='height:10px'></div><b style='color:rgba(0,0,0,0.6)'>" + locale.get("windows.servers.online", this.totalPlayerCount) + "</b>";
    return czL += "</div>";
  },
  searchMatches(czK) {
    return !!czK.data && (czK.data.i || "").toLowerCase().indexOf((this.serverSearch || "").toLowerCase()) >= 0;
  }
}, {
  header: locale.get("windows.loadout.header"),
  gen: function () {
    var czK = game.classes[classIndex];
    if (game.config.classes.indexOf(parseInt(classIndex)) < 0) {
      classIndex = game.config.classes[0];
      czK = game.classes[classIndex];
    }
    var czL = game.weapons[czK.loadout[0]].name;
    var czM = "#2196F3";
    var czO = czK.secondary ? game.weapons[cEz].name : locale.get("generic.none");
    var czP = czK.secondary ? "#2196F3" : "rgba(0,0,0,0.3)";
    var czV = "rgba(0,0,0,0.3)";
    var czZ = czV;
    var cA0 = "rgba(0,0,0,0.3)";
    if (cAK) {
      if (cEy[czK.loadout[0]] != null) {
        if (czL = game.store.skins[cEy[czK.loadout[0]]]) {
          czM = game.store.rarities[czL.rarity].color;
          czL = czL.name;
        }
      }
      if (czK.loadout[1] && cEy[czK.loadout[1]] != null) {
        if (czO = game.store.skins[cEy[czK.loadout[1]]]) {
          czP = game.store.rarities[czO.rarity].color;
          czO = czO.name;
        }
      }
      if (cEw >= 0 && game.store.skins[cEw]) {
        czV = game.store.rarities[game.store.skins[cEw].rarity].color;
      }
      if (cEv >= 0 && game.store.skins[cEv]) {
        czZ = game.store.rarities[game.store.skins[cEv].rarity].color;
      }
      if (cEu >= 0 && game.store.skins[cEu]) {
        cA0 = game.store.rarities[game.store.skins[cEu].rarity].color;
      }
    }
    var cA1 = locale.get("windows.loadout.color.skin");
    for (var cA2 = config.skinColors.length - 1; cA2 >= 0; cA2--) {
      cA1 += "<div class='skinColorItem" + (cEt == cA2 ? " activeSkin" : "") + "' style='background-color:#" + config.skinColors[cA2].toString(16) + "' onclick='selectSkinColor(" + cA2 + ")'></div>";
    }
    return "<div class='settName'>" + locale.get("windows.loadout.class") + "<span class='settText floatR' onclick='showWindow(6)'>" + czK.name + "</span></div><div class='settName'>" + locale.get("windows.loadout.primary") + "<span class='settLabel wepLink' style='color:" + czM + "' onclick='skinSelector(" + czK.loadout[0] + ")'>" + czL + "</span></div><div class='settName'>" + locale.get("windows.loadout.secondary") + "<span class='settLabel" + (czK.secondary ? " wepLink" : "") + "' " + (czK.secondary ? "onclick='showWindow(20)'" : "") + " style='color:" + czP + "'>" + czO + "</span></div><div class='settName'>" + locale.get("windows.loadout.melee") + "<span onclick='showWindow(26)' class='settText floatR' style='color:" + cA0 + "'>" + (game.store.skins[cEu] ? game.store.skins[cEu].name : "Combat Knife") + "</span></div><div class='settName'>" + locale.get("windows.loadout.hat") + "<span onclick='showWindow(16)' class='settText floatR' style='color:" + czV + "'>" + (game.store.skins[cEw] ? game.store.skins[cEw].name : locale.get("generic.none")) + "</span></div><div class='settName'>" + locale.get("windows.loadout.body") + "<span onclick='showWindow(17)' class='settText floatR' style='color:" + czZ + "'>" + (game.store.skins[cEv] ? game.store.skins[cEv].name : locale.get("generic.none")) + "</span></div><div class='settName'>" + locale.get("windows.loadout.spray") + "<span onclick='showWindow(9)' class='settText floatR'>" + game.sprays[cKG].name + "</span></div><div class='settName'>" + cA1 + "</div>";
  }
}, {
  header: locale.get("windows.mods.header"),
  openList: function () {
    cAX = false;
    showWindow(18);
  },
  gen: function () {
    return "<div id='modLinks'><a href='https://goo.gl/dPAxfr' class='menuLink'>" + locale.get("windows.mods.guide") + "</a> | <a href='javascript:;' onclick='windows[3].openList()' class='menuLink'>" + locale.get("windows.mods.list") + "</a> | <a href='javascript:;' onclick='showWindow(19)' class='menuLink'>" + locale.get("windows.mods.publish") + "</a> | <a href='/viewer.html' class='menuLink'>" + locale.get("windows.mods.viewer") + "</a></div><form id='modDropper'><input onchange='loadMod()' id='modInput'type='file'><p id='modLInfo'>" + locale.get("windows.mods.drop") + "</p></form><input type='text' id='modURL' class='accountInput' style='width:78%' placeholder='" + locale.get("windows.mods.paste") + "'><a class='menuLink' style='display:inline-block;margin-left:10px' onclick='loadModURL()'>" + locale.get("windows.mods.load") + "</a>";
  }
}, {
  header: locale.get("windows.account.header"),
  gen: function () {
    if (cAK) {
      return "<div class='settName' style='width:100%'>" + locale.get("generic.name") + "<a href='/social.html?p=profile&q=" + cAK.name + "' class='floatR'>" + cAK.name + "</a></div><div class='settName' style='width:100%'>" + locale.get("generic.clan") + "<a class='floatR' class='menuLink' onclick='showWindow(13)'>" + (cAK.clan ? "[" + cAK.clan + "]" : "None") + "</a></div><div class='settName'>" + locale.get("generic.level") + "<span class='floatR'>" + cAK.level + "</span></div><div class='xpBar'><div class='xpBarB' style='width:" + cAK.levelProg + "%'></div></div><div class='settName'>" + locale.get("generic.score") + "<span class='floatR'>" + cAK.score + "</span></div><div class='settName'>KR<span class='floatR'>" + cAK.funds + "KR</span></div><div class='settName'>" + locale.get("generic.kills") + "<span class='floatR'>" + cAK.kills + "</span></div><div class='settName'>" + locale.get("generic.deaths") + "<span class='floatR'>" + cAK.deaths + "</span></div><div class='settName'>" + locale.get("generic.kdr") + "<span class='floatR'>" + (cAK.kills / Math.max(cAK.deaths, 1)).toFixed(2) + "</span></div><div class='settName'>" + locale.get("generic.games.played") + "<span class='floatR'>" + cAK.games + "</span></div><div class='settName'>" + locale.get("generic.games.won") + "<span class='floatR'>" + cAK.wins + "</span></div><div class='settName'>W/L<span class='floatR'>" + (cAK.wins / Math.max(cAK.games, 1)).toFixed(2) + "</span></div><div class='settName'>" + locale.get("generic.timep") + "<span class='floatR'>" + utils.getReadableTime(cAK.timePlayed) + "</span></div><div style='height:10px'></div><a class='menuLink' onclick='logoutAcc()'>" + locale.get("generic.logout") + "</a>" + (cEd ? "" : "<a style='float:right' class='menuLink' onclick='logoutSessions(this)'>" + locale.get("generic.logout.sessions") + "</a>");
    } else {
      return "<input id='accName' type='text' placeholder='" + locale.get("generic.username") + "' class='accountInput' style='margin-top:0' value='" + (getSavedVal("krunker_username") || "") + "'></input><input id='accPass' type='password' placeholder='" + locale.get("generic.password") + "' class='accountInput'></input><div id='accResp' style='margin-top:10px;color:rgba(0,0,0,0.5);display:none'></div><div style='margin-top:10px;color:rgba(0,0,0,0.3)'>" + locale.get("windows.account.recover") + "</div><div class='accountButton' onclick='registerAcc()'>" + locale.get("generic.register") + "</div><div class='accountButton' onclick='loginAcc()' style='margin-left: 20px'>" + locale.get("generic.login") + "</div>";
    }
  }
}, {
  header: locale.get("windows.class.header"),
  gen: function () {
    var czK = "<div id='skinList'>";
    for (var czL = 0; czL < game.classes.length; ++czL) {
      if (game.config.classes.indexOf(czL) >= 0 && !game.classes[czL].hide) {
        czK += "<div class='skinCard'>" + game.classes[czL].name + "<div class='itemOwn'>" + game.weapons[game.classes[czL].loadout[0]].name + "</div><img style='margin-top:6px;image-rendering:pixelated' class='skinImgC' src='." + utils.versionifyUrl("/textures/classes/icon_" + czL + ".png") + "'/><div class='selctBtn' onmouseenter='playTick()'onclick='selectClass(" + czL + ")'>" + locale.get("generic.select") + "</div></div>";
      }
    }
    return czK += "</div>";
  }
}, {
  header: locale.get("windows.controls.header"),
  gen: function () {
    var czK = "";
    czK += "<div class='settName'>" + locale.get("windows.controls.forward") + "<span class='settText floatR' id='cont0' onclick='changeCont(0)'>" + utils.getKeyName(controls.moveKeys[0]) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.backward") + "<span class='settText floatR' id='cont1' onclick='changeCont(1)'>" + utils.getKeyName(controls.moveKeys[1]) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.left") + "<span class='settText floatR' id='cont2' onclick='changeCont(2)'>" + utils.getKeyName(controls.moveKeys[2]) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.right") + "<span class='settText floatR' id='cont3' onclick='changeCont(3)'>" + utils.getKeyName(controls.moveKeys[3]) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.reload") + "<span class='settText floatR' id='cont8' onclick='changeCont(8)'>" + utils.getKeyName(controls.reloadKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.aim") + "<span class='settText floatR' id='cont10' onclick='changeCont(10)'>" + utils.getKeyName(controls.aimKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.inspect") + "<span class='settText floatR' id='cont14' onclick='changeCont(14)'>" + utils.getKeyName(controls.inspKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.spray") + "<span class='settText floatR' id='cont9' onclick='changeCont(9)'>" + utils.getKeyName(controls.sprayKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.jump") + "<span class='settText floatR' id='cont4' onclick='changeCont(4)'>" + utils.getKeyName(controls.jumpKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.crouch") + "<span class='settText floatR' id='cont5' onclick='changeCont(5)'>" + utils.getKeyName(controls.crouchKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.prim") + "<span class='settText floatR' id='cont13' onclick='changeCont(13)'>" + utils.getKeyName(controls.primKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.melee") + "<span class='settText floatR' id='cont6' onclick='changeCont(6)'>" + utils.getKeyName(controls.meleeKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.swap") + "<span class='settText floatR' id='cont7' onclick='changeCont(7)'>" + utils.getKeyName(controls.swapKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.chat") + "<span class='settText floatR' id='cont11' onclick='changeCont(11)'>" + utils.getKeyName(controls.chatKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.voice") + "<span class='settText floatR' id='cont12' onclick='changeCont(12)'>" + utils.getKeyName(controls.voiceKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.list") + "<span class='settText floatR' id='cont15' onclick='changeCont(15)'>" + utils.getKeyName(controls.listKey) + "</span></div>";
    czK += "<div class='settName'>" + locale.get("windows.controls.interact") + "<span class='settText floatR' id='cont16' onclick='changeCont(16)'>" + utils.getKeyName(controls.interactKey) + "</span></div>";
    return czK += "<div class='settName'>" + locale.get("windows.controls.drop") + "<span class='settText floatR' id='cont17' onclick='changeCont(17)'>" + utils.getKeyName(controls.dropKey) + "</span></div>";
  }
}, {
  header: locale.get("windows.host.header"),
  presets: {},
  presetLoaded: function (czK, czL) {
    try {
      windows[7].presets[czK].data = czK && windows[7].presets[czK] && czL ? JSON.parse(czL) : "DEFAULT";
    } catch (cG6) {
      windows[7].presets[czK].data = "DEFAULT";
    }
    updateWindow(8);
  },
  gen: function () {
    var czK = "";
    cAX = true;
    czK += "<div class='settName b'>" + locale.get("windows.host.maps") + "</div>";
    czK += "<div style='margin-top:5px'>";
    if (!cHy) {
      for (var czL = 0; czL < maps.length; czL++) {
        var czM = maps[czL];
        var czO = "<label class='switch'><input id='gameMap" + czL + "' type='checkbox' checked=''><span class='slider'></span></label>";
        czK += "<div class='settNameSmall' style='margin:0'>" + utils.capFirst(czM.name) + czO + "</div>";
      }
    }
    czK += "<div class='settNameSmall' style='margin:0;margin-top:10px'>" + locale.get("windows.host.cmaps") + " <div style='float:right'>" + (cHy ? "<span><i style='color:#eb5656;font-size:30px;vertical-align:-3px;cursor:pointer' onclick='openHostWindow(true)'class='material-icons'>delete</i> </span>" : "") + "<a id='commMap' href='javascript:;' onclick='showWindow(10);' class='menuLink' style='font-size:18px'>" + (cHy || locale.get("generic.select")) + "</a></div></div><br/>";
    if (!cHy) {
      czK += "<div class='settNameSmall' style='margin:0;margin-top:-24px;'>" + locale.get("windows.host.raw") + "<input id='rawMapData' type='text' class='formInput' " + (cHz ? "value='" + cHz + "'" : "placeholder='" + locale.get("windows.host.raw") + "'") + " autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'></div><br/>";
    }
    czK += "</div>";
    var czP = windows[7].presets[cHy];
    var czV = !cHy || czP && czP.data;
    if (czV) {
      czP &&= czP.data;
      if (czP == "DEFAULT") {
        czP = null;
      }
      czK += "<div class='settName b'>" + locale.get("windows.host.modes") + "</div>";
      czK += "<div style='margin-top:5px'>";
      for (czL = 0; czL < modes.length; czL++) {
        var czZ = modes[czL];
        czO = "<label class='switch'><input id='gameMode" + czL + "' type='checkbox' " + ((cA2 = czP ? czP.modes && czP.modes.indexOf(czL) >= 0 : czL == 0) ? "checked" : "") + "><span class='slider'></span></label>";
        czK += "<div class='settNameSmall' style='margin:0'>" + utils.capFirst(czZ.name) + czO + "</div>";
      }
      czK += "<div class='settName b' style='margin-top:20px'>" + locale.get("windows.host.classes") + "</div>";
      czK += "<div style='margin-top:5px'>";
      for (czL = 0; czL < game.classes.length; czL++) {
        var cA0 = game.classes[czL];
        czO = "<label class='switch'><input id='gameClass" + czL + "' type='checkbox' " + ((cA2 = !czP || !czP.classes || czP.classes.indexOf(czL) >= 0) ? "checked" : "") + "><span class='slider'></span></label>";
        czK += "<div class='settNameSmall' style='margin:0'>" + cA0.name + czO + "</div>";
      }
      czK += "<div class='settName b' style='margin-top:25px'>" + locale.get("windows.host.settings") + "</div>";
      for (czL = 0; czL < config.serverConfig.length; czL++) {
        cAL = config.serverConfig[czL];
        var cA1 = locale.get("server.config." + cAL.varN);
        if (cAL.bool) {
          var cA2 = cAL.def;
          if (czP && czP.settings && czP.settings[cAL.varN] != null) {
            cA2 = !!czP.settings[cAL.varN];
          }
          czK += "<div class='settNameSmall' style='margin:0;margin-bottom:5px;'>" + cA1 + " <label class='switch'><input type='checkbox' id='customS" + cAL.varN + "' " + (cA2 ? "checked" : "") + "><span class='slider'></span></label></div>";
        } else if (cAL.input) {
          czK += "<div class='settNameSmall' style='margin:0;margin-bottom:5px;'>" + cA1 + "<input id='customS" + cAL.varN + "' value='" + cAL.def + "' type='text'style='border-radius:12px;border:none;background:#eee;padding:6px;padding-bottom:6px;float:right;margin-top:5px;margin-bottom:5px;' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'></div>";
        } else {
          var cA3 = cAL.def;
          var cA4 = cAK && cAK.featured && cAL.maxF || cAL.max;
          if (czP && czP.settings && czP.settings[cAL.varN] != null) {
            if ((cA3 = czP.settings[cAL.varN]) > cA4) {
              cA3 = cA4;
            }
          }
          czK += "<div class='settNameSmall' style='margin-left:0'>" + cA1 + "<span class='sliderVal' id='customSet" + czL + "'>" + cA3 + "</span><div class='slidecontainer'><input type='range' min='" + cAL.min + "' max='" + cA4 + "' step='" + cAL.step + "' id='customS" + cAL.varN + "' value='" + cA3 + "' oninput='updateSliderLabel(" + czL + ",this.value)' class='sliderM'></div></div>";
        }
      }
      czK += "<div class='settNameSmall' style='margin:0'>" + locale.get("server.config.private") + " <label class='switch'><input id='makePrivate' type='checkbox'><span class='slider'></span></label></div>";
      czK += "<div id='hostGamePreset' style='text-align:left;margin-top:30px'>" + windows[7].genPresets(true) + "</div>";
    } else {
      if (!windows[7].presets[cHy]) {
        windows[7].presets[cHy] = {};
        cAF.getMapPreset(cHy, this.presetLoaded);
      }
      czK += "<div style='color:rgba(0,0,0,0.3)'>" + locale.get("windows.host.preset.load") + "</div>";
    }
    if (czV) {
      czK += "<div style='text-align:left;margin-top:30px'>";
      czK += "<div style='color:#919191;margin-bottom:5px' id='hostGameMsg'></div>";
      czK += "<a class='menuLink' onclick='createPrivateRoom()'>" + locale.get("windows.host.start") + "</a>";
      czK += "</div>";
    }
    return czK;
  },
  presetAction: function (czK) {
    if (czK == 0 && presetSelect.value == "Select") {
      return;
    }
    if (czK == 1 && presetName.value == "Select") {
      return;
    }
    if (czK == 2 && presetSelect.value == "Select") {
      return;
    }
    let czL = getSavedVal("krk_hostPresets");
    czL = czL ? JSON.parse(czL) : {};
    var czM = presetSelect.value == "Select" ? presetName.value : presetSelect.value;
    if (czK == 2) {
      if (czL[presetSelect.value]) {
        delete czL[presetSelect.value];
      }
      saveVal("krk_hostPresets", JSON.stringify(czL));
    } else {
      let czU = czK == 1 ? {} : czL[presetSelect.value];
      var czO;
      for (var czP = 0; czP < maps.length; czP++) {
        maps[czP];
        czO = document.getElementById("gameMap" + czP);
        if (czK == 1) {
          if (czO.checked != 1) {
            czU["gameMap" + czP] = czO.checked;
          }
        } else if ("gameMap" + czP in czU) {
          czO.checked = czU["gameMap" + czP];
        }
      }
      for (czP = 0; czP < modes.length; czP++) {
        czO = document.getElementById("gameMode" + czP);
        if (czK == 1) {
          if (czO.checked != !czP) {
            czU["gameMode" + czP] = czO.checked;
          }
        } else if ("gameMode" + czP in czU) {
          czO.checked = czU["gameMode" + czP];
        }
      }
      for (czP = 0; czP < game.classes.length; czP++) {
        game.classes[czP];
        czO = document.getElementById("gameClass" + czP);
        if (czK == 1) {
          if (czO.checked != 1) {
            czU["gameClass" + czP] = czO.checked;
          }
        } else if ("gameClass" + czP in czU) {
          czO.checked = czU["gameClass" + czP];
        }
      }
      for (czP = 0; czP < config.serverConfig.length; czP++) {
        cAL = config.serverConfig[czP];
        czO = document.getElementById("customS" + cAL.varN);
        if (czK == 1) {
          if (czO[cAL.bool ? "checked" : "value"] != cAL.def) {
            czU[cAL.varN] = czO[cAL.bool ? "checked" : "value"];
          }
        } else if (cAL.varN in czU) {
          if (!cAL.bool && !cAL.input) {
            document.getElementById("customSet" + czP).innerText = czU[cAL.varN];
          }
          czO[cAL.bool ? "checked" : "value"] = czU[cAL.varN];
        }
      }
      if (czK == 1) {
        if (cHy) {
          czU.commMap = cHy;
        }
        if (cHA) {
          czU.hostModURL = cHA;
        }
        if ((czO = document.getElementById("rawMapData")).value != "") {
          czU.rawMapData = czO.value;
        }
        if ((czO = document.getElementById("makePrivate")).checked != 0) {
          czU.makePrivate = czO.checked;
        }
        czL[czM || "Preset1"] = czU;
        saveVal("krk_hostPresets", JSON.stringify(czL));
      } else {
        if ("commMap" in czU) {
          document.getElementById("commMap").innerText = cHy = czU.commMap;
        }
        if ("rawMapData" in czU) {
          document.getElementById("rawMapData").value = czU.rawMapData;
        }
        if ("makePrivate" in czU) {
          document.getElementById("makePrivate").checked = czU.makePrivate;
        }
      }
    }
    windows[7].genPresets();
  },
  genPresets: function (czK = false) {
    let czL = getSavedVal("krk_hostPresets");
    czL = czL ? JSON.parse(czL) : {};
    var czM = "<div class='settName b' style='margin-top:25px'>" + locale.get("windows.host.preset") + "</div>";
    czM += "<span class='settNameSmall' style='margin:0;margin-bottom:5px;'><input id='presetName' type='text' class='formInput' placeholder='" + locale.get("windows.host.preset.name") + "' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false' style='border:none;background:#eee;padding:6px;padding-bottom:6px;float:left;margin-top:5px;margin-bottom:5px;'><select id='presetSelect' style='border-radius:12px;margin-left:10px;border:none;background:#eee;padding:6px;padding-bottom:6px;margin-top:5px;margin-bottom:5px;'><option selected>Select</option>";
    for (let czK in czL) {
      czL[czK];
      czM += "<option>" + czK + "</option>";
    }
    czM += "</select>";
    czM += "<div class='hostPresetBtn' onclick='windows[7].presetAction(2)'>" + locale.get("generic.delete") + "</div><div class='hostPresetBtn' onclick='windows[7].presetAction(1)'>" + locale.get("generic.save") + "</div><div class='hostPresetBtn' onclick='windows[7].presetAction(0)'>" + locale.get("generic.load") + "</div></span>";
    if (czK) {
      return czM;
    } else {
      hostGamePreset.innerHTML = czM;
      return;
    }
  }
}, {
  header: locale.get("windows.spray.header"),
  gen: function () {
    var czK = "<div id='skinList'>";
    for (var czL = 0; czL < game.sprays.length; ++czL) {
      czK += "<div class='skinCard'>" + game.sprays[czL].name + "<div class='itemOwn'>" + locale.get("windows.spray.default") + "</div><img style='margin-top:10px;image-rendering:pixelated' class='skinImgC' src='." + utils.versionifyUrl("/textures/sprays/" + czL + ".png") + "'/><div class='selctBtn' onmouseenter='playTick()'onclick='selectSpray(" + czL + ")'>" + locale.get("generic.select") + "</div></div>";
    }
    return czK += "</div>";
  }
}, {
  header: locale.get("windows.maps.header"),
  searchMaps: function () {
    searchResults.innerHTML = locale.get("generic.loading");
    cAF.searchMap(mpSrch.value, cIi);
  },
  searchResp: function (czK) {
    var czL = "";
    if (czK.length) {
      czL += "<div style='height:10px'></div>";
      czL += cF3(czK, "map");
    } else {
      czL = locale.get("windows.maps.none");
    }
    if (document.getElementById("searchResults")) {
      document.getElementById("searchResults").innerHTML = czL;
    }
  },
  mapsLoaded: function (czK, czL, czM) {
    if (mapList) {
      if (czK && czK.length) {
        if (czM) {
          mapList.innerHTML = czM;
          this.listData[czL] = null;
        } else {
          this.listData[czL].dat = cF3(czK, "map");
          updateWindow(10);
        }
      } else {
        mapList.innerHTML = locale.get("windows.maps.none");
        this.listData[czL] = null;
      }
    }
  },
  tabIndex: 0,
  listData: {},
  switchTab: function (czK) {
    if (this.tabIndex != czK) {
      this.tabIndex = czK;
      updateWindow(10);
    }
  },
  gen: function () {
    var czK = config.mapTabs[this.tabIndex];
    var czL = "";
    for (var czM = 0; czM < config.mapTabs.length; ++czM) {
      czL += "<div class='menuTab" + (this.tabIndex == czM ? " tabA" : "") + "' onclick='windows[9].switchTab(" + czM + ")'>" + config.mapTabs[czM].n + "</div>";
    }
    var czO = "";
    if (czK.search) {
      czO = "<input style='margin-top:10px' type='text' id='mpSrch' class='smlInput' placeholder='" + locale.get("windows.maps.name") + "' /><a class='menuLink' style='margin-left:20px' onclick='windows[9].searchMaps()'>" + locale.get("generic.search") + "</a><div style='color:rgba(0,0,0,0.5);margin-top:5px' id='searchResults'></div>";
    } else if (this.listData[this.tabIndex]) {
      czO = this.listData[this.tabIndex].dat || locale.get("generic.loading");
    } else {
      czO = locale.get("generic.loading");
      this.listData[this.tabIndex] = {};
      cAF.listMaps(this.tabIndex, cAK ? cAK.id : null, cIf);
    }
    return "<a href='./editor.html' class='menuLink'>" + locale.get("windows.maps.editor") + "</a> | <a href='javascript:;' onclick='showWindow(11)' class='menuLink'>" + locale.get("windows.maps.publish") + "</a><a href='https://discord.gg/Kfypyp5' class='menuLink' style='float:right'>" + locale.get("windows.maps.community") + "</a><br/><div style='margin-top:25px;margin-bottom:15px'>" + czL + "</div><div style='color:rgba(0,0,0,0.3)' id='mapList'>" + czO + "</div>";
  }
}, {
  header: locale.get("windows.publish.map.header"),
  gen: function () {
    if (cAK) {
      return "<div style='margin-top:-8px;margin-bottom:10px' class='setHed'>" + locale.get("windows.publish.map.header") + "</div><div style='color:rgba(0,0,0,0.4);font-size:18px'><input onclick='selectMapThumb()' type='button' id='thumbBtn' style='cursor:pointer' value='Select' /><input id='mapThumb' type='file' accept='image/*' style='width:1px;visibility:hidden;' onchange='updateMapThumb()'><span style='color:rgba(0,0,0,0.4);margin-left:10px' id='mapThumbName'>" + locale.get("windows.publish.map.thumbnail") + "</span></div><input id='mapDataNew' type='text' placeholder='" + locale.get("windows.publish.map.paste") + "' class='mapInput' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'/><div id='mapUpResp' style='color:rgba(0,0,0,0.3);margin-top:8px;margin-bottom:5px'></div><div class='mapLoadButton' style='margin-top:6px' onclick='uploadCustomMap()'>" + locale.get("windows.publish.map.update") + "</div>";
    } else {
      return "<div style='color:rgba(0,0,0,0.3);margin-top:20px'><a href='javascript:;' onclick='showWindow(5);' class='menuLink'>" + locale.get("windows.publish.map.login") + "</div>";
    }
  }
}, {
  header: locale.get("windows.theatre.header"),
  gen: function () {
    return "";
  }
}, {
  header: locale.get("windows.clans.header"),
  clanData: null,
  kickReq: function (czK) {
    socket.send("cln", 5, czK);
    if (this.clanData && this.clanData.members) {
      for (var czL = this.clanData.members.length - 1; czL >= 0; --czL) {
        if (this.clanData.members[czL].player_id == czK) {
          this.clanData.members.splice(czL, 1);
        }
      }
      updateWindow(13);
    }
  },
  sendReq: function (czK, czL) {
    var czM = document.getElementById("clanErr");
    if (czM) {
      czM.style.color = "rgba(0,0,0,0.6)";
      czM.innerHTML = locale.get("generic.loading");
    }
    var czN = (czM = document.getElementById("clanInp" + czK)) ? czM.value : null;
    socket.send("cln", czK, czL || czN || 1);
  },
  updReq: function (czK, czL, czM) {
    socket.send("clnR", czL, czM);
    if (this.clanData.members && czM == 1) {
      this.clanData.members.push({
        player_name: this.clanData.requests[czK].player_name
      });
    }
    this.clanData.requests.splice(czK, 1);
    updateWindow(13);
  },
  delReq: function () {
    this.clanData = null;
    if (cAK) {
      cAK.clan = null;
    }
    socket.send("cln", 4, 1);
    showWindow(5);
  },
  resp: function (czK, czL, czM) {
    var czN = document.getElementById("clanErr");
    if (czK && czN) {
      czN.style.color = czM ? "rgba(0,0,0,0.6)" : "rgba(255,0,0,0.6)";
      czN.innerHTML = czK;
    } else if (czL) {
      if (cAK) {
        cAK.clan = czL.clan_name;
      }
      this.clanData = czL;
      updateWindow(13);
    }
  },
  gen: function () {
    var czK = "";
    var czL = "";
    if (this.clanData && this.clanData.members) {
      var czM = cAK && this.clanData.clan_playerid == cAK.id;
      czK = "<div class='setHed' style='margin-top:10px'>" + locale.get("windows.clans.members", this.clanData.members.length) + "</div>";
      for (var czO = 0; czO < this.clanData.members.length; ++czO) {
        czK += "<div class='settName'><a target='_blank'href='/social.html?p=profile&q=" + this.clanData.members[czO].player_name + "'>" + this.clanData.members[czO].player_name + "</a>" + (czM && this.clanData.clan_playerid != this.clanData.members[czO].player_id ? "<i style='font-size:40px;float:right;color:rgba(255,0,0,0.6)'  class='material-icons h' onclick='windows[12].kickReq(" + this.clanData.members[czO].player_id + ")'>clear</i>" : "") + "</div>";
      }
    }
    if (this.clanData && this.clanData.requests) {
      czL = "<div class='setHed' style='margin-top:10px'>" + locale.get("windows.clans.requests") + "</div>";
      for (czO = 0; czO < this.clanData.requests.length; ++czO) {
        czL += "<div class='settName'><a target='_blank' href='/social.html?p=profile&q=" + this.clanData.requests[czO].player_name + "'>" + this.clanData.requests[czO].player_name + "</a><span style='float:right'><i style='font-size:40px;color:rgba(255,0,0,0.6)'  class='material-icons h' onclick='windows[12].updReq(" + czO + "," + this.clanData.requests[czO].cr_playerid + ", 0)'>clear</i><i style='font-size:40px;color:rgba(0,255,0,0.6);margin-left:10px' class='material-icons h' onclick='windows[12].updReq(" + czO + "," + this.clanData.requests[czO].cr_playerid + ", 1)'>done</i></span></div>";
      }
      if (!this.clanData.requests.length) {
        czL += "<div style='color:rgba(0,0,0,0.4)'>" + locale.get("windows.clans.requests.none") + "</div>";
      }
    }
    var czP = cAK ? cAK.clan ? "<div class='setHed' style='margin-top:0px'>" + locale.get("windows.clans.page", cAK.clan) + "<a style='float:right' href='javascript:;' onclick='windows[12].delReq()' class='menuLink'>" + (this.clanData ? cAK && this.clanData.clan_playerid == cAK.id ? locale.get("generic.delete") : locale.get("generic.leave") : "") + "</a></div><div id='clanErr' style='margin-top:0px;color:rgba(0,0,0,0.5)'>" + (this.clanData ? "<div class='settName'>" + locale.get("generic.level") + "<span class='floatR'>" + Math.max(1, Math.floor(config.rankVar * Math.sqrt(this.clanData.clan_score || 0))) + "</span></div><div class='settName'>" + locale.get("generic.score") + "<span class='floatR'>" + (this.clanData.clan_score || 0) + "</span></div>" + czK + czL : locale.get("generic.loading")) + "</div>" : "<div class='setHed' style='margin-top:-5px'>" + locale.get("windows.clans.create") + "</div><input id='clanInp1' type='text' class='smlInput' maxlength='4' placeholder='" + locale.get("windows.clans.name") + "' /><a class='menuLink' style='margin-left:20px' onclick='windows[12].sendReq(1)'>" + locale.get("generic.create") + "</a><div style='margin-top:0px' class='setHed'>" + locale.get("windows.clans.join") + " <a href='./social.html?q=clan' class='menuLink' style='margin-top:10px;display:inline-block'>" + locale.get("windows.clans.view") + "</a></div><input id='clanInp2' type='text' class='smlInput' maxlength='5' placeholder='" + locale.get("windows.clans.name") + "' /><a class='menuLink' style='margin-left:20px' onclick='windows[12].sendReq(2)'>" + locale.get("generic.submit") + "</a><div id='clanErr' style='margin-top:10px'></div>" : "<div style='color:rgba(0,0,0,0.3);margin-top:20px'><a href='javascript:;' onclick='showWindow(5);' class='menuLink'>" + locale.get("windows.clans.login") + "</div>";
    if (cAK && cAK.clan && !this.clanData) {
      this.sendReq(3);
    }
    return czP;
  }
}, {
  header: locale.get("windows.store.header"),
  gen: function () {
    cAB.play("store", 0.4);
    var czK = "";
    for (var czL = 0; czL < game.store.wheels.length; ++czL) {
      cAL = game.store.wheels[czL];
      if (cAK && cAK.following == 0 && cAL.free && cAK.level >= cAL.minLvl || !cAL.free) {
        czK += "<div><a href='javascript:;' class='menuLink' onclick='prizeWheel(" + czL + ")'>" + locale.get("windows.store.spin", cAL.name) + "</a> " + (cAL.lab ? "<span style='color:#fff;margin-left:5px;background-color:" + cAL.lab.col + ";font-size:15px;padding:3px;padding-left:8px;padding-right:8px'> " + cAL.lab.nm + " </span>" : "") + "<span style='float:right;color:rgba(0,0,0,0.3)'>" + (cAL.priceT || cAL.price) + "<span style='color:rgba(0,0,0,0.6)'> " + (cAL.priceT ? "" : "KR") + "</span></span></div>";
      }
    }
    var czM = "<div style='color:rgba(0,0,0,0.3);font-size:19px;margin-bottom:20px'>" + locale.get("windows.store.agree", "<a href='./docs/terms.txt'>") + "</a></div>";
    for (czL = 0; czL < game.store.purchases.length; ++czL) {
      czM += "<div><a href='javascript:;' class='menuLink' onclick='showPurchase(" + czL + ")'>" + (cAL = game.store.purchases[czL]).val + " KR </a><span style='float:right;color:rgba(0,0,0,0.3)'>" + (cAL.tag ? "<span style='color:#fff;font-size:15px;padding:10px;padding-top:2px;vertical-align:middle;padding-bottom:2px;background-color:" + cAL.tagCol + "'>" + cAL.tag + "</span> " : "") + cAL.price + "<span style='color:rgba(0,0,0,0.6)'> USD</span></span></div>";
    }
    var czN = "<div style='height:10px;'></div><b style='font-size:26px;margin-bottom:10px'>" + locale.get("windows.store.purchase") + "</b>" + czM;
    var czO = "<div style='height:10px;'></div><b style='font-size:26px;margin-bottom:10px'>" + locale.get("windows.store.voucher") + "</b><div style='color:rgba(0,0,0,0.3);font-size:19px;margin-bottom:6px'>" + locale.get("windows.store.voucherinfo") + "</div><input type='text' id='redVouch' class='smlInput' style='width:80%' placeholder='Enter KR Code' /><a class='menuLink' style='margin-left:20px' onclick=''>Redeem</a>";
    if (cAK) {
      return "<b style='font-size:26px'>" + locale.get("windows.store.market") + "</b><div style='color:rgba(0,0,0,0.3);margin-bottom:10px'>" + locale.get("windows.store.buy") + " <a href='javascript:;' onclick='window.open(`/social.html?p=market`)'>" + locale.get("windows.store.market2") + "</a></div><b style='font-size:26px'>" + locale.get("windows.store.wheels") + "</b><div style='color:rgba(0,0,0,0.3);margin-bottom:10px'>" + locale.get("windows.store.unlock") + "</div>" + czK + czN + czO + "<div style='float:right;margin-top:20px'>" + locale.get("windows.store.amount", cAK.funds) + "</div>";
    } else {
      return "<div style='color:rgba(0,0,0,0.3)'><a href='javascript:;' onclick='showWindow(5);' class='menuLink'>" + locale.get("windows.store.login") + "</div>";
    }
  }
}, {
  header: locale.get("windows.skin.header"),
  gen: function () {
    var czK = "<div id='skinList'><div class='skinCard'>" + locale.get("generic.default") + "<div class='itemOwn'>by Krunker.io</div><img class='skinImg' src='." + utils.versionifyUrl("/textures/previews/weapons/" + game.weapons[cEA].src + ".png") + "' style='margin-top:-10px'><div class='selctBtn' onmouseenter='playTick()' style='margin-top:-40px' onclick='selectSkin(-1," + cEA + ")'>" + locale.get("generic.select") + "</div></div>";
    if (cAK || game.singlePlayer) {
      for (var czL = (game.singlePlayer ? Object.keys(game.store.skins).map(czK => czK = {
          ind: parseInt(czK),
          cnt: 1
        }) : cAK.skins).slice().sort(function (czK, czL) {
          return (czL.ind != null && game.store.skins[czL.ind] ? game.store.skins[czL.ind].rarity : 0) - (czK.ind != null && game.store.skins[czK.ind] ? game.store.skins[czK.ind].rarity : 0);
        }), czM = 0; czM < czL.length; ++czM) {
        if ((cAL = game.store.skins[czL[czM].ind]) && !cAL.type && cAL.weapon == cEA + 1) {
          czK += "<div class='skinCard' style='color:" + game.store.rarities[cAL.rarity].color + "'><div class='itemCnt' data-badge='x" + czL[czM].cnt + "'></div>" + cAL.name + "<div class='itemOwn'>by " + (cAL.creator || "Krunker.io") + "</div><img style='margin-top:-10px' class='skinImg" + (cAL.type ? "C" : "") + "' src='." + utils.versionifyUrl("/textures/previews/" + (cAL.type ? "cosmetics/" + cAL.type + "_" + cAL.id : "weapons/weapon_" + cAL.weapon + "_" + (cAL.pat == null ? cAL.id : "c" + cAL.pat)) + ".png") + "'/><div class='selctBtn' style='margin-top:-40px' onmouseenter='playTick()'onclick='selectSkin(" + czL[czM].ind + "," + (cAL.weapon - 1) + ")'>" + locale.get("generic.select") + "</div></div>";
        }
      }
    }
    return czK += "</div>";
  }
}, {
  header: locale.get("windows.hat.header"),
  gen: function () {
    return cF9("selectHat", 1);
  }
}, {
  header: locale.get("windows.back.header"),
  gen: function () {
    return cF9("selectBack", 2);
  }
}, {
  header: locale.get("windows.mods.community.header"),
  modData: null,
  searchMods: function () {
    searchResults.innerHTML = locale.get("generic.loading");
    cAF.searchMod(moSrch.value, cIi);
  },
  searchResp: function (czK) {
    var czL = "";
    if (czK.length) {
      czL += "<div style='height:10px'></div>";
      czL += cF3(czK, "mod");
    } else {
      czL = locale.get("windows.mods.community.none");
    }
    if (document.getElementById("searchResults")) {
      document.getElementById("searchResults").innerHTML = czL;
    }
  },
  resp: function (czK) {
    if (czK && czK.length) {
      this.modData = czK;
      this.modData.loaded = true;
      updateWindow(18);
    } else {
      this.modData = null;
      var czL = document.getElementById("modsList");
      if (czL) {
        czL.innerHTML = locale.get("windows.mods.community.none");
      }
    }
  },
  gen: function () {
    var czK = "";
    if (this.modData && this.modData.loaded) {
      czK = "<div style='margin-bottom:-5px;margin-top:-5px;'>" + locale.get("generic.search") + "</div><input type='text' id='moSrch' class='smlInput' placeholder='" + locale.get("windows.mods.community.name") + "' /><a class='menuLink' style='margin-left:20px' onclick='windows[17].searchMods()'>" + locale.get("generic.search") + "</a><div style='color:rgba(0,0,0,0.5);margin-top:5px' id='searchResults'></div>";
      var czL = ["<div style='margin-bottom:5px;margin-top:15px'>" + locale.get("windows.mods.community.hot") + "</div>", "<div style='margin-top:20px;margin-bottom:5px'>" + locale.get("windows.mods.community.new") + "</div>", "<div style='margin-top:20px;margin-bottom:5px'>" + locale.get("windows.mods.community.fav") + "</div>"];
      for (var czM = 0; czM < this.modData.length; ++czM) {
        if (this.modData[czM]) {
          if (this.modData[czM].length) {
            czK += czL[czM];
          }
          czK += cF3(this.modData[czM], "mod");
        }
      }
    } else {
      czK = locale.get("generic.loading");
      if (!this.modData) {
        this.modData = {};
        cAF.listMods(cAK ? cAK.id : null, cIc);
      }
    }
    return "<div style='color:rgba(0,0,0,0.3)' id='modsList'>" + czK + "</div>";
  }
}, {
  header: locale.get("windows.publish.mod.header"),
  gen: function () {
    if (cAK) {
      return "<div style='margin-top:0px' class='setHed'>" + locale.get("windows.publish.mod.header") + "</div><div style='color:rgba(0,0,0,0.4);font-size:18px'><input onclick='selectModThumb()' type='button' id='thumbBtn' style='cursor:pointer' value='Select' /><input id='modThumb' type='file' accept='image/*' style='width:1px;visibility:hidden;' onchange='updateModThumb()'><span style='color:rgba(0,0,0,0.4);margin-left:10px' id='modThumbName'>" + locale.get("windows.publish.mod.thumbnail") + "</span></div><input id='pubModName' type='text' placeholder='" + locale.get("windows.publish.mod.name") + "' class='mapInput' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'/><input id='pubModURL' type='text' placeholder='" + locale.get("windows.publish.mod.paste") + "' class='mapInput' autocomplete='off' autocorrect='off' autocapitalize='off' spellcheck='false'/><div id='modUpResp' style='color:rgba(0,0,0,0.3);margin-top:8px'></div><div class='mapLoadButton' style='margin-top:6px' onclick='uploadCustomMod()'>" + locale.get("windows.publish.mod.update") + "</div>";
    } else {
      return "<div style='color:rgba(0,0,0,0.3);'><a href='javascript:;' onclick='showWindow(5)' class='menuLink'>" + locale.get("windows.publish.mod.login") + "</div>";
    }
  }
}, {
  header: locale.get("windows.secondary.header"),
  gen: function () {
    var czK = "<div id='skinList'>";
    for (var czL = 0; czL < game.weapons.length; ++czL) {
      if ((cAL = game.weapons[czL]) && cAL.secondary) {
        var czM = !cAL.minRec || cAK && cAK.level >= cAL.minRec || game.singlePlayer;
        czK += "<div class='skinCard'>" + cAL.name + "<div class='itemOwn'>" + (cAL.minRec ? locale.get("windows.secondary." + (czM ? "unlocked" : "req"), cAL.minRec) : locale.get("generic.default")) + "</div><img style='margin-top:10px;image-rendering:pixelated' class='skinImgC' src='." + utils.versionifyUrl("/img/prev/" + cAL.src + ".png") + "'/><div class='selctBtn' onmouseenter='playTick()'" + (czM ? "onclick='selectSecondary(" + czL + ")" : "") + "'>" + locale.get("generic.select") + "</div></div>";
      }
    }
    return czK += "</div>";
  }
}, {
  header: locale.get("windows.advertise.header"),
  gen: function () {
    return "<div class='setHed' style='margin-top:0'>Advertise in Game</div><div style='color:rgba(0,0,0,0.4)'>On krunker.io you have the ability to place advertisements in game.<div style='height:10px'></div> The game features several <b>3d Billboards</b> that yield a very high impression rate & that are <b>not affected by ad blockers</b>.</div><img src='./img/ad_1.png' style='width:100%;margin-top:10px'/><div style='color:rgba(0,0,0,0.4);margin-top:10px'><b>Daily Users:</b> ~ 2,000,000<br/><b>Registered Accounts:</b> ~ 5,000,000<br/><b>Daily Impressions:</b> ~ 6,500,000<br/><b>Peak CCU:</b> ~ 28,000<br/><b>Session Time avg:</b> 14 minutes<br/><div style='height:5px'></div><i style='color:rgba(0,0,0,0.2)'>as of 16/06/2019</i></div><div style='margin-top:10px;color:rgba(0,0,0,0.4)'>For inquiries contact <a>info@yendis.ch</a></div>";
  }
}, {
  header: "Social",
  gen: function () {
    return "TODO";
  }
}, {
  header: locale.get("windows.players.header"),
  gen: function () {
    var czK = "<div style='margin-top:0px' class='setHed'><center>" + (game.players.list.length ? locale.get("windows.players.header") + "<hr>" : locale.get("windows.players.none")) + "</div>";
    czK += "<div style='background-color:gainsboro;border-radius: 12px;'>";
    if (cAJ) {
      czK += "<div><span class='settNameSmall'>" + (cAV ? "<i class='material-icons' style='font-size:25px'>stars</i>" : "") + cAJ.name + (cAJ.clan ? "<span style='color:" + (config.verClans.indexOf(cAJ.clan) >= 0 ? "#fbc02d" : "#353535") + "'> [" + cAJ.clan + "]</span>" : "") + "</span>" + (cAK && cAK.developer ? "<span style='float:right'><span onmouseenter='playTick()' class='punishButton kill' onclick='punishPlayer(\"" + cAJ.id + "\", 2)'>Kill</span><span onmouseenter='playTick()' class='punishButton tpall' onclick='punishPlayer(null, 5)'>TPAll</span></span>" : "") + "</div>";
    }
    for (let czL of game.players.list.filter(czK => !czK.isYou)) {
      czK += "<div><span class='settNameSmall'>" + (cAW == czL.id ? "<i class='material-icons' style='font-size:25px'>stars</i>" : "") + "<a target='_blank' class='" + (czL.isHacker ? "red" : "grey") + "' href='/social.html?p=profile&q=" + czL.name + "'>" + czL.name + (czL.clan ? "<span style='color:" + (config.verClans.indexOf(czL.clan) >= 0 ? "#fbc02d" : "#353535") + "'> [" + czL.clan + "]</span>" : "") + "</a></span>" + (cAV || cAK && cAK.developer ? "<span style='float:right'><span onmouseenter='playTick()' class='punishButton kick' onclick='punishPlayer(\"" + czL.id + "\", 0)'>Kick</span><span onmouseenter='playTick()' class='punishButton ban' onclick='punishPlayer(\"" + czL.id + "\", 1)'>Ban</span>" + (cAK && cAK.developer ? "<span onmouseenter='playTick()' class='punishButton kill' onclick='punishPlayer(\"" + czL.id + "\", 2)'>Kill</span>" : "") + (cAK && cAK.developer ? "<span onmouseenter='playTick()' class='punishButton tp2' onclick='punishPlayer(\"" + czL.id + "\", 3)'>TP2</span>" : "") + (cAK && cAK.developer ? "<span onmouseenter='playTick()' class='punishButton tpme' onclick='punishPlayer(\"" + czL.id + "\", 4)'>TPME</span>" : "") + "</span>" : "") + "</div>";
    }
    return czK += "</div>";
  }
}, {
  header: locale.get("windows.join.header"),
  gen: function () {
    return "<input id='gameURL' type='text' placeholder='" + locale.get("windows.join.code") + "' class='accountInput' style='margin-top:0' value=''></input>\n        <div class='accountButton' onclick='joinGame()', style='width:100%'>" + locale.get("windows.join.header") + "</div>";
  }
}, {
  header: locale.get("windows.client.header"),
  gen: function () {
    return "<div><ul style='padding:0;display:flex;list-style:none;text-align:center;margin:0;margin-top:-10px'><li style='display: flex;flex-basis:200px;-webkit-box-flex:1;flex-grow:1;margin-right:10px'><a href='//client.krunker.io/setup.exe' style='display:block;width:100%;padding-top:1em;'><img src ='./img/windows.png' style='width:80px;height:80px;display:block;margin:0 auto 10px;'>" + locale.get("windows.client.windows") + "</a></li><li style='display: flex;flex-basis:200px;-webkit-box-flex:1;flex-grow:1;'><a href='//client.krunker.io/setup.dmg' style='display: block;width: 100%;padding-top:1em;'><img src ='./img/mac.png' style='width:80px;height:80px;display:block;margin:0 auto 10px;'>" + locale.get("windows.client.mac") + "</a></li><li style='display: flex;flex-basis:200px;-webkit-box-flex:1;flex-grow:1;'><a href='//client.krunker.io/setup.AppImage' style='display: block;width: 100%;padding-top:1em;'><img src ='./img/linux.png' style='width:80px;height:80px;display:block;margin:0 auto 10px;'>" + locale.get("windows.client.linux") + "</a></li></ul></div>";
  }
}, {
  header: locale.get("windows.melee.header"),
  gen: function () {
    return cF9("selectMelee", 3);
  }
}, {
  header: locale.get("windows.ranked.header"),
  gen: function () {
    return "<div style='color:rgba(0,0,0,0.3)'>Coming Soon</div>";
  }
}];
for (var cHl = 0; cHl < windows.length; ++cHl) {
  windows[cHl].html = "";
}
var cHm = 0;
window.updateWindow = function (czK, czL) {
  if (windowHolder.style.display == "block") {
    if (cHm == czK && czK != null) {
      showWindow(czK, true);
    } else if (czL) {
      showWindow(cHm, true);
    }
  }
};
window.showWindow = function (czK, czL) {
  window.idleTimer = 0;
  if (czL || czK && (windowHolder.style.display != "block" || czK != cHm)) {
    cAD.toggleMenu(true);
    menuWindow.innerHTML = windows[czK - 1].gen ? windows[czK - 1].gen() : windows[czK - 1].html;
    cHm = czK;
    windowHeader.innerHTML = windows[czK - 1].header;
    cAD.toggleWindow(true, controls.gamepad.connected);
  } else {
    cAD.toggleWindow(false, controls.gamepad.connected);
    controls.inputChanger = null;
  }
};
window.playTick = function () {
  cAB.play("tick_0", 0.2);
};
window.copyInviteLink = function () {
  utils.copyToClipboard("https://" + location.host + "/?game=" + cA2);
  inviteButton.innerText = locale.get("menu.btn.invite.clicked");
  setTimeout(() => inviteButton.innerText = locale.get("menu.btn.invite"), 1250);
};
window.punishPlayer = function (czK, czL) {
  if (czL <= 2 && czL >= 0 || cAK && cAK.developer) {
    let czM = game.players.list.find(czL => czL.id == czK);
    if (czM) {
      socket.send("pnh", czL, czM.id);
    } else if (czL > 4) {
      socket.send("pnh", czL, null);
    }
  }
};
var cHv;
var cHw;
var cHx;
var cHy;
var cHz;
var cHA;
var cHB = spinWindow;
var cHC = cHB.getContext("2d");
var cHD = 0.95;
var cHE = 0.6;
var cHF = null;
var cHG = false;
var cHH = 0;
var cHI = 0;
var cHJ = 0;
var cHK = 0;
var cHL = 0;
var cHM = 30;
var cHN = 300;
var cHO = true;
var cHP = 0;
var cHQ = 0;
var cHR = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
var cHS = new THREE.WebGLRenderer({
  precision: "mediump",
  antialias: false,
  alpha: true
});
function cHT(czK, czL) {
  if (cBb) {
    var czM = game.store.skins[czL];
    if (czM) {
      cN4(null, "<span style='color:#fff'>" + locale.get("windows.store.unboxed", czK, "</span>") + " <span style='color:" + game.store.rarities[czM.rarity].color + "'>" + czM.name + "</span>", true);
    }
  }
}
function cHX(czK, czL, czM, czN, czO) {
  cHG = false;
  if (czN) ;else {
    cHF = game.store.skins[czL];
    spinItemName.innerHTML = cHF.name + "<div style='color:rgba(255,255,255,0.5)'>by " + (cHF.creator || "Krunker.io") + "</div>";
    cHI = Math.PI * 2 * (czK / 100 + 13) + Math.PI / 2;
    if (cAK) {
      if (czO) {
        cAK.following = czO;
      }
      cAK.funds = czM;
      cDL();
      spinKR.innerHTML = cAK.funds + " KR";
      if (cAK.skins.some(czK => czK.ind === czL)) {
        var czP = cAK.skins.find(czK => czK.ind === czL);
        if (czP) {
          czP.cnt++;
        }
      } else {
        cAK.skins.push({
          ind: czL,
          cnt: 1
        });
      }
    }
    spinRotation = 0;
    cHP = 0;
    spinCost.innerHTML = "";
    (cHv = new THREE.Scene()).add(new THREE.AmbientLight(5197647));
    var czU = new THREE.DirectionalLight(16777215, 0.5);
    czU.position.set(3, 1, 0);
    cHv.add(czU);
    var czV = cHF.type ? cHF : game.store.previews[cHF.weapon] || {};
    (cHw = renderer.genObj3D(0, 1 + (czV.yOff || 0), czV.xOff || 0)).rotateX(-Math.PI / 7);
    cHw.rotateY(Math.PI + 0.5 + (czV.zRota || 0));
    cHw.rotateZ(-0.5);
    cHw.orgXR = cHw.rotation.x;
    cHw.orgYP = cHw.position.y;
    renderer.loadMesh({
      src: game.store.types[cHF.type || 0] + (cHF.type ? cHF.id : cHF.weapon),
      texSrc: cHF.type && cHF.type == 3 ? "melee/melee_" + (cHF.id || 0) + (cHF.tex ? "_" + cHF.tex : "") : cHF.type ? cHF.tex ? (cHF.type == 1 ? "hats/hat_" : "body/body_") + cHF.id + "_" + cHF.tex : null : cHF.tex ? cHF.tex : "weapons/skins/weapon_" + cHF.weapon + "_" + cHF.id,
      movT: cHF.movT,
      sameGlow: cHF.sameGlow,
      glowText: cHF.glow || cHF.sameGlow,
      emissive: cHF.glow || cHF.sameGlow ? 16777215 : null,
      noGreen: true,
      uv2: true,
      fillScale: 60,
      centerZ: true
    }, 0, 0, 0, (cHF.type && cHF.type != 3 ? Math.PI : Math.PI / 2) + (czV.xRot || 0), (czV.scl || 1) * 2.2, cHw);
    cHv.add(cHw);
    cHR.lookAt(cHv.position);
  }
}
function cI8(czK, czL, czM) {
  windows[12].resp(czK, czL, czM);
}
function cIc(czK, czL) {
  if (czL) {
    windows[17].resp(czL.data, czL.error);
  }
}
function cIf(czK, czL) {
  if (czL) {
    windows[9].mapsLoaded(czL.data, czL.index, czL.error);
  }
}
function cIi(czK, czL) {
  if (czL) {
    windows[czL.index].searchResp(czL.data);
  }
}
cHS.setPixelRatio(window.devicePixelRatio * 0.6);
cHR.position.y = 10;
spinItemCanvas.appendChild(cHS.domElement);
window.prizeWheel = function (czK) {
  if ((cHx = game.store.wheels[czK]).openURL) {
    window.openURL(config.followURLS[utils.randInt(0, config.followURLS.length - 1)]);
  }
  cHJ = czK;
  showWindow(0);
  cHH = 0;
  cHO = !cHG;
  cHI = 0;
  cHQ = 0;
  spinRotation = 0;
  cHK = cHL = 0;
  cAD.toggleMenuHider(false);
  spinItem.style.display = "none";
  spinItemName.style.display = "none";
  spinUI.style.display = "block";
  cHR.position.x = cHN;
  spinButton.style.opacity = 1;
  spinText.style.display = "table-cell";
  spinHeader.innerHTML = "SPIN";
  spinCost.innerHTML = "-" + cHx.price + "KR";
  var czL = "<div style='font-size:50px;color:#fff'>" + cHx.name.toUpperCase() + "</div>";
  for (var czM = 0; czM < game.store.rarities.length; ++czM) {
    if (!(cAL = game.store.rarities[czM]).noSpin) {
      czL += "<div style='margin-top:5px;color:#fff'>" + cAL.name + "<span style='color:rgba(255,255,255,0.5)'>&emsp;" + cHx.rarities[czM] + "%</span><div class='colCub' style='background-color:" + cAL.color + "'></div></div>";
    }
  }
  spinInfo.innerHTML = czL;
  if (cAK) {
    spinKR.innerHTML = cAK.funds + " KR";
  }
};
spinButton.onclick = function (czK) {
  czK.stopPropagation();
  czK.preventDefault();
  window.idleTimer = 0;
  if (socket && !cHG && cHO && cAK && cAK.funds >= cHx.price) {
    cHG = true;
    cHO = false;
    socket.send("spin", cHJ);
    spinHeader.innerHTML = "";
    spinCost.innerHTML = locale.get("windows.store.purchasing");
    cAB.play("buy_1", 0.1);
  }
};
spinUI.onclick = function () {
  showWindow(14);
  cAD.toggleMenuHider(true);
  spinUI.style.display = "none";
  if (socket) {
    socket.send("unbx");
  }
};
window.selectHostMap = function (czK, czL = null) {
  cHy = czK;
  cHz = czL == "undefined" ? null : czL;
  showWindow(8);
};
window.selectHostMod = function (czK) {
  cHA = czK;
  showWindow(8);
};
window.openHostWindow = function (czK) {
  cHy = null;
  cHA = null;
  cHz = null;
  showWindow(8, czK);
};
var cIt;
var cIu = 10000;
var cIv = getSavedVal("krk_record") == "true";
function cIw(czK, czL) {
  try {
    if (mapUpResp && !czL) {
      mapUpResp.innerHTML = czK;
    }
  } catch (cIz) {}
  try {
    if (modUpResp && !czL) {
      modUpResp.innerHTML = czK;
    }
  } catch (cIA) {}
}
window.enableRecord = function (czK) {
  cIv = czK;
  saveVal("krk_record", czK);
};
enableRecord(cIv);
window.createClip = function () {
  if (cIv && cAJ && cAJ.active && cIt.states.length) {
    for (var czK = Object.assign({}, game.map.maps[game.mapIndex]), czL = 0; czL < czK.objects.length; ++czL) {
      czK.objects[czL].i = config.prefabIDS.indexOf(czK.objects[czL].i);
      czK.objects[czL].t = config.textureIDS.indexOf(czK.objects[czL].t);
    }
    var czM = {
      id: "clip_" + Date.now(),
      mode: game.modeIndex,
      map: czK,
      states: []
    };
    for (czL = 0; czL < cIt.states.length; ++czL) {
      if (czL) {
        var czO = [];
        czO.push(cIt.states[czL].input.data);
        if (cIt.states[czL].players.length) {
          czO.push(cIt.states[czL].players);
        }
        czM.states.push(czO);
      } else {
        czM.states.push(cIt.states[czL]);
      }
    }
    var czP = document.createElement("a");
    czP.setAttribute("href", "data:text/plain;charset=utf-8," + encodeURIComponent(JSON.stringify(czM)));
    czP.setAttribute("download", czM.id);
    czP.style.display = "none";
    document.body.appendChild(czP);
    czP.click();
    document.body.removeChild(czP);
  }
};
window.updateMapThumb = function () {
  var czK = null;
  try {
    czK = document.getElementById("mapThumb").files[0];
  } catch (cII) {}
  document.getElementById("mapThumbName").innerHTML = czK ? czK.name : locale.get("generic.failed");
};
window.selectMapThumb = function () {
  document.getElementById("mapThumb").click();
};
window.uploadCustomMap = function () {
  if (mapUpResp) {
    mapUpResp.innerHTML = locale.get("generic.loading");
  }
  var czK = null;
  try {
    czK = document.getElementById("mapThumb").files[0];
  } catch (cIK) {}
  if (czK) {
    var czL = new FileReader();
    czL.readAsDataURL(czK);
    czL.onload = function () {
      if (utils.thumbnailSize(czL.result) > 40) {
        cIw(locale.get("thumbnail.upload.limit"));
        return;
      } else {
        socket.send("uploadM", mapDataNew.value, czL.result);
        return;
      }
    };
    czL.onerror = function () {
      mapUpResp.innerHTML = locale.get("thumbnail.upload.error");
    };
  } else {
    socket.send("uploadM", mapDataNew.value);
  }
};
window.updateModThumb = function () {
  var czK = null;
  try {
    czK = document.getElementById("modThumb").files[0];
  } catch (cIN) {}
  document.getElementById("modThumbName").innerHTML = czK ? czK.name : locale.get("generic.failed");
};
window.selectModThumb = function () {
  document.getElementById("modThumb").click();
};
window.uploadCustomMod = function () {
  if (modUpResp) {
    modUpResp.innerHTML = locale.get("generic.loading");
  }
  var czK = null;
  try {
    czK = document.getElementById("modThumb").files[0];
  } catch (cIP) {}
  if (czK) {
    var czL = new FileReader();
    czL.readAsDataURL(czK);
    czL.onload = function () {
      if (utils.thumbnailSize(czL.result) > 40) {
        cIw(locale.get("thumbnail.upload.limit"));
        return;
      } else {
        socket.send("uploadMo", pubModName.value, pubModURL.value, czL.result);
        return;
      }
    };
    czL.onerror = function () {
      modUpResp.innerHTML = locale.get("thumbnail.upload.error");
    };
  } else {
    socket.send("uploadMo", pubModName.value, pubModURL.value);
  }
};
zip.workerScriptsPath = "./libs/";
var cIR = new FileReader();
function cIS(czK) {
  this.imgAsDataURL = "";
  this.process = function (czL) {
    this.imgAsDataURL = URL.createObjectURL(czL);
    if (this.imgAsDataURL && czK) {
      try {
        var czM = new Image();
        czM.onload = function () {
          renderer.updateTexture(czK.replace("textures/", "").replace(".png", ""), this);
        };
        czM.src = this.imgAsDataURL;
      } catch (cIW) {}
      cJg.close();
    }
  };
}
function cIX(czK) {
  this.filename = czK;
  var czL = this;
  this.process = function (czK) {
    var czM = URL.createObjectURL(czK);
    if (czM) {
      try {
        var czN = czL.filename.split("/")[1];
        if (czN.indexOf("ambient") >= 0) {
          for (var czO = 1; czO < 4; ++czO) {
            cAB.stop("ambient_" + czO);
          }
        }
        cAB.sounds[czN] = new Howl({
          src: [czM],
          format: "mp3"
        });
        cAB.sounds[czN + "3d"] = new Howl({
          src: [czM],
          format: "mp3"
        });
        if (czN == "ambient_1") {
          cAB.play("ambient_1", 0.12, true, 1);
        }
      } catch (cJ4) {}
      cJg.close();
    }
  };
}
function cJ5(czK) {
  this.process = function (czL) {
    if (czK) {
      try {
        const czM = new FileReader();
        czM.addEventListener("loadend", czL => {
          const czM = czL.srcElement.result;
          renderer.updateMesh(czK.replace("models/", "").replace(".obj", ""), czM);
        });
        czM.readAsText(czL);
      } catch (cJb) {}
      cJg.close();
    }
  };
}
cIR.onload = function (czK) {
  var czL = czK.target.result;
  loadModPack(czL);
};
var cJe;
var cJf;
var cJg = new function () {
  this.init = function (czK, czL) {
    this.numFiles = czL;
    this.progress = 0;
    this.reader = czK;
  };
  this.close = function () {
    if (this.reader) {
      this.progress++;
      if (document.getElementById("modLInfo")) {
        document.getElementById("modLInfo").innerHTML = locale.get("mod.extracting", this.progress, this.numFiles);
      }
      if (this.numFiles === this.progress) {
        spriteIndex = 0;
        if (document.getElementById("modLInfo")) {
          document.getElementById("modLInfo").innerHTML = locale.get("generic.success");
        }
        this.reader.close();
        this.reader = undefined;
      }
    }
  };
}();
function cJj(czK, czL, czM, czN) {
  cB2 = czL;
  window.spectating = czM;
  if (!cB2 && czM) {
    cB2 = 1;
  }
  cKR(czK);
  cAD.toggleMenu(false);
  cMz.length = 0;
  cN2.length = 0;
  cAD.toggleGameUI(true);
  cAE.reset();
  controls.reset();
  cJE(false);
  game.players.forcePos();
  game.players.resetAim();
  cAY.length = 0;
  window.loading = false;
  window.idleTimer = 0;
  teamName.innerHTML = "";
  instructions.innerHTML = controls.gamepad.connected ? locale.get("app.play.controller") : locale.get("app.play");
  cAO = null;
  cAD.toggleControlUI(controls.enabled);
  game.updateUI();
  challIcon.src = czN ? "./img/skull_0.png" : "./img/hp_0.png";
}
function cJo(czK, czL, czM, czN, czO, czP, czV, czZ, cA0, cA1) {
  if (czP.isFromQueue) {
    window.history.replaceState({}, "Krunker", "/");
  }
  cBg = false;
  if (czZ) {
    if (czZ.data) {
      game.customMap(czZ.data, czZ.id, czZ.creator, null, true);
    }
  } else {
    game.map.setMaps();
  }
  cAW = czO;
  cAV = czO && czO == socket.socketId;
  mapVote.innerHTML = "";
  cJf = 0;
  if (czO && czZ && czZ.id != null) {
    mapVote.innerHTML = "<i id='mapVoteD' onclick='voteMap(" + czZ.id + ",-1)' class='material-icons vote'>thumb_down</i><i id='mapVoteU' onclick='voteMap(" + czZ.id + ",1)' class='material-icons vote'>thumb_up</i>";
  }
  game.applyConfig(czP, czZ && czZ.featured);
  game.init(czK, czL, cA1);
  game.setObjective(czN);
  if ((cA0 = cA0 || {}).dest) {
    for (var cA2 = 0; cA2 < cA0.dest.length; ++cA2) {
      game.destroyObj(cA0.dest[cA2]);
    }
  }
  if (cA0.flg) {
    for (cA2 = 0; cA2 < cA0.flg.length; ++cA2) {
      game.updateFlag(...cA0.flg[cA2]);
    }
  }
  if (cA0.pkups) {
    for (cA2 = 0; cA2 < cA0.pkups.length; ++cA2) {
      game.updatePickup(...cA0.pkups[cA2]);
    }
  }
  if (cA0.gates) {
    for (cA2 = 0; cA2 < cA0.gates.length; ++cA2) {
      game.updateGate(...cA0.gates[cA2]);
    }
  }
  if (cA0.zone) {
    game.updateZone(cA0.zone);
  }
  specNameTm0.innerHTML = teamNm1.innerHTML = game.config.nameTeam1.replace(/\s/g, "").length > 0 ? game.config.nameTeam1 : "Team 1";
  specNameTm1.innerHTML = teamNm2.innerHTML = game.config.nameTeam1.replace(/\s/g, "").length > 0 ? game.config.nameTeam2 : "Team 2";
  teamScores.style.display = "none";
  spec0.style.display = "none";
  spec1.style.display = "none";
  if (game.mode.teams && czM) {
    teamScores.style.display = "inline-block";
    spec0.style.display = "inline-block";
    spec1.style.display = "inline-block";
    var cA3 = "";
    for (cA2 = 0; cA2 < czM.length; ++cA2) {
      cA3 += "<div class='tScore'><div id='tScoreC" + czM[cA2][0] + "' class='tScoreC'></div><span class='tScoreT' id='tScoreV" + czM[cA2][0] + "'>" + czM[cA2][1] + "</span></div>";
      document.getElementById("specScoreTm" + (czM[cA2][0] - 1)).innerHTML = czM[cA2][1];
    }
    teamScores.innerHTML = cA3;
  }
  if (czV && czV != "") {
    loadModPack(czV, true);
  }
  var cA4 = 0;
  var cA6 = 0;
  for (cA2 = 0; cA2 < game.map.manager.objects.length; ++cA2) {
    if (game.map.manager.objects[cA2].score) {
      cA4++;
      cA6 += game.map.manager.objects[cA2].scoreP;
    }
  }
  if (cA4) {
    scoreZoneCount.style.display = "inline-block";
    scoreZoneCount.innerHTML = "<i class='material-icons' style='color:#fff;font-size:35px'>flag</i> " + cA6;
  } else {
    scoreZoneCount.style.display = "none";
  }
  if (game.config.lives) {
    livesCount.style.display = "inline-block";
    livesCount.innerHTML = "<i class='material-icons' style='color:#fff;font-size:35px'>favorite</i> <span id='livesDisp' style='color:rgba(255,255,255,0.6)'>" + game.config.lives + "</span>";
  } else {
    livesCount.style.display = "none";
  }
  cAD.setShowSpect(game.config.allowSpect);
  cAD.setShowSelTeam(game.config.selTeam);
  cB8 = null;
  controls.reset();
  var cAc = game.map.maps[czK];
  controls.cUfuVal(cAc.camPos[0], cAc.camPos[1], cAc.camPos[2]);
  controls.RBJgj(0, 0, 0);
  renderer.clearSprays();
  renderer.scene.add(controls.object);
  cAJ = null;
  overlay.showObjective = !!game.mode.objective && game.map.manager.objectives.length > 0;
  killStreakHolder.innerHTML = "";
  bloodDisplay.style.display = "none";
  killsVal.innerHTML = 0;
  deathsVal.innerHTML = 0;
  cB1 = 0;
  cCo();
  controls.masterLock = false;
  instructions.innerHTML = controls.gamepad.connected ? locale.get("app.play.controller") : locale.get("app.play");
}
function cJE(czK) {
  window.locked = czK;
  blocker.style.display = czK ? "block" : "none";
}
function cJG(czK, czL, czM) {
  instructions.innerHTML = controls.gamepad.connected ? locale.get("app.play.controller") : locale.get("app.play");
  victoryText.innerHTML = locale.get("generic." + (czL ? "victory" : "defeat"));
  victorySub.src = "./img/" + (czL ? "sub" : "defeat") + ".png";
  cAD.toggleWindow(false, controls.gamepad.connected);
  if (cCI.endMessage.val.length && !cBg) {
    socket.send("c", cCI.endMessage.val);
    cBg = true;
  }
  if (cAJ && cAJ.active || window.spectating) {
    cAD.showEndScreen();
    cB8 = config.endAnim;
    setTimeout(function () {
      if (socket.connected) {
        controls.disable();
        cJK(czM);
      }
    }, config.endAnim);
  } else if (czK) {
    controls.disable();
    cAD.showEndScreen();
    cJK(czM);
  }
}
function cJK(czK) {
  if (czK && czK.ed.length) {
    var czL = "";
    var czM = game.config ? game.config.modes || game.map.rotationModes : null;
    voteHolder.style.display = "inline-block";
    endTable.style.top = "265px";
    if (czM && czM.length > 1) {
      var czO;
      for (var czP = 0; czP < czM.length; ++czP) {
        if (czO = game.map.modes[czM[czP]]) {
          czL += "<div class='voteObj' onclick='voteOnMode(" + czM[czP] + ")'>" + czO.id.toUpperCase() + " <span style='color:rgba(255,255,255,0.5)' id='modeVoteI" + czM[czP] + "'>0</span></div>";
        }
      }
      voteHolder.innerHTML = czL;
      if (czK.vo) {
        updModeVote(czK.vo);
      }
    } else if (game.mode.isRanked) {
      voteHolder.innerHTML += "<div class='button small buttonR' style='margin-right:10px' onclick='location.reload()'>Leave Game</div>";
      voteHolder.innerHTML += "<div class='button small' onclick='location = \"/?autoQueue=true\"'>Requeue</div>";
    } else {
      voteHolder.style.display = "none";
      endTable.style.top = "205px";
    }
    endTable.style.display = "inline-block";
    czL = "<tr><th>Rank</th>";
    var czU = game.mode.endStats || config.endStats;
    var czV = czU.length;
    for (czP = 1; czP < czV; ++czP) {
      czL += "<th>" + utils.capFirst(czU[czP]) + "</th>";
    }
    czL += "<th></th></tr>";
    var czZ = 1;
    for (czP = 0; czP < czK.ed.length;) {
      cAL = game.players.findBySid(czK.ed[czP]);
      czL += "<tr style='" + (czP + czV >= czK.ed.length ? "border-bottom:none" : "") + "'><td style='color:#fff'>" + czZ + ".</td>";
      for (var cA0 = 1; cA0 < czV; ++cA0) {
        czL += "<td " + (cA0 == 1 ? "style='color:" + (cAJ && cAL && cAJ.sid == cAL.sid ? "#fff'" : cAJ && cAL && cAJ.team && cAJ.team == cAL.team ? "rgba(255,255,255,0.6)'" : "#eb5656'") : "") + ">" + (cBE && cA0 == 1 && cAT ? utils.scrambleS(czK.ed[czP + cA0] || 0) : czK.ed[czP + cA0] || 0) + (cA0 == 1 && cAL && cAL.clan ? "<span style='color:" + (config.verClans.indexOf(cAL.clan) >= 0 ? "#fbc02d" : "#fff") + "'> [" + cAL.clan + "]<span>" : "") + "</td>";
      }
      czZ++;
      czP += czV;
    }
    endTable.innerHTML = czL;
  } else {
    endTable.style.display = "none";
  }
}
function cJU(czK, czL, czM) {
  game.playerSound(czK, czL, czM);
}
function cJY(czK, czL, czM, czN, czO, czP = true, czU) {
  if (cAL = game.players.findBySid(czK)) {
    if (cAL == cAJ) {
      cAB.play("pick_0", 0.2);
    }
    cAL.updateLoadout(game, czM, true, ...czL);
  }
  if ((cAL || czK == null) && czP) {
    game.updatePickup(czN, czO, null, czU);
  }
}
function cK6(czK) {
  controls.object.rotation.y = czK;
  controls.xDr = (controls.object.rotation.y % Math.PI2).round(3);
}
window.loadUserMod = function (czK, czL, czM) {
  if (cAX) {
    cAX = false;
    selectHostMod(czL);
  } else {
    showWindow(4);
    if (document.getElementById("modLInfo")) {
      document.getElementById("modLInfo").innerHTML = locale.get("generic.loading");
    }
    loadModPack(czL, true, czK, czM);
  }
};
window.loadModURL = function () {
  if (modURL.value) {
    loadModPack(modURL.value, true);
  }
};
window.loadModPack = function (czK, czL, czM, czN) {
  if (czK.indexOf("dropbox.com") >= 0 || czK.indexOf("dropboxusercontent.com") >= 0 || !czL) {
    if (!cAZ) {
      if (document.getElementById("modLInfo")) {
        document.getElementById("modLInfo").innerHTML = locale.get("mod.disabled");
      }
      return;
    }
    modVote.innerHTML = "";
    if (czL) {
      cBi(czK);
    }
    if (czM != null && czN != null) {
      cJe = 0;
      modVote.innerHTML = "<i id='modVoteD' onclick='voteMod(" + czN + ",-1)' class='material-icons vote'>thumb_down</i><i id='modVoteU' onclick='voteMod(" + czN + ",1)' class='material-icons vote'>thumb_up</i></br>" + czM + " Mod";
    }
    try {
      czK = czK.replace("dropbox.com", "dl.dropboxusercontent.com");
      var czO = "";
      var czP = czL ? new zip.HttpReader(czK) : new zip.Data64URIReader(czK);
      zip.createReader(czP, function (czK) {
        czK.getEntries(function (czL) {
          if (czL.length) {
            cJg.init(czK, czL.length);
            var czM;
            for (var czN = 0; czN < czL.length; czN++) {
              if ((czM = czL[czN]).directory) {
                cJg.close();
              } else if ((czO = czM.filename.split("/")[0]) == "textures") {
                czM.getData(new zip.BlobWriter("image/png"), new cIS(czM.filename).process, function () {});
              } else if (czO == "sound") {
                czM.getData(new zip.BlobWriter("audio/mp3"), new cIX(czM.filename.replace(".mp3", "")).process, function () {});
              } else if (czO == "models") {
                czM.getData(new zip.BlobWriter("application/x-tgif"), new cJ5(czM.filename).process, function () {});
              }
            }
          }
        });
      }, function () {
        if (document.getElementById("modLInfo")) {
          document.getElementById("modLInfo").innerHTML = locale.get("mod.error");
        }
      });
    } catch (cKl) {
      if (document.getElementById("modLInfo")) {
        document.getElementById("modLInfo").innerHTML = locale.get("mod.error");
      }
    }
  }
};
if (cCI.autoLoadLast.val && cBh.length) {
  loadModPack(cBh, true);
}
window.loadMod = function () {
  if (modInput.files && modInput.files[0]) {
    var czK = modInput.files[0];
    if (czK.name.split(".").pop().toLowerCase() == "zip") {
      if (document.getElementById("modLInfo")) {
        document.getElementById("modLInfo").innerHTML = locale.get("mod.loading");
      }
      cIR.readAsDataURL(czK);
    } else if (document.getElementById("modLInfo")) {
      document.getElementById("modLInfo").innerHTML = locale.get("mod.invalid");
    }
  }
};
window.joinGame = function () {
  let czK = gameURL.value || "";
  if (czK.match(/^(https?:\/\/)?(www\.)?(.+)krunker\.io(|\/|\/\?game=.+)$/)) {
    location = czK;
  } else if (czK.match(/^([A-Z]+):(\w+)$/)) {
    window.switchServer(czK);
  }
};
window.toggleTeam = function (czK) {
  cEs = czK ? 2 : 1;
  teamNm1.style.color = czK ? "rgba(255,255,255,0.5)" : "#fff";
  teamNm2.style.color = czK ? "#fff" : "rgba(255,255,255,0.5)";
};
window.updModeVote = function (czK) {
  for (var czL = 0; czL < game.map.modes.length; ++czL) {
    if (cAL = document.getElementById("modeVoteI" + czL)) {
      var czM = 0;
      if (czK) {
        for (var czN in czK) {
          if (czK.hasOwnProperty(czN) && czL == czK[czN]) {
            czM++;
          }
        }
      }
      cAL.innerHTML = czM;
    }
  }
};
window.voteOnMode = function (czK) {
  socket.send("mVote", czK);
};
window.voteMod = function (czK, czL) {
  if (cAK) {
    var czM = document.getElementById("modVoteU");
    var czN = document.getElementById("modVoteD");
    var czO = 0;
    if (czL == 1) {
      czO = 1;
      if (cJe == 1) {
        czO = 0;
      }
    } else if (czL == -1) {
      czO = -1;
      if (cJe == -1) {
        czO = 0;
      }
    }
    cJe = czO;
    czM.className = cJe == 1 ? "material-icons vote a" : "material-icons vote";
    czN.className = cJe == -1 ? "material-icons vote a" : "material-icons vote";
    socket.send("vote", cAK.id, loginToken, czK, czO, 1);
  }
};
window.voteMap = function (czK, czL) {
  if (cAK) {
    var czM = document.getElementById("mapVoteU");
    var czN = document.getElementById("mapVoteD");
    var czO = 0;
    if (czL == 1) {
      czO = 1;
      if (cJf == 1) {
        czO = 0;
      }
    } else if (czL == -1) {
      czO = -1;
      if (cJf == -1) {
        czO = 0;
      }
    }
    cJf = czO;
    czM.className = cJf == 1 ? "material-icons vote a" : "material-icons vote";
    czN.className = cJf == -1 ? "material-icons vote a" : "material-icons vote";
    socket.send("vote", cAK.id, loginToken, czK, czO);
  }
};
window.followPlayer = function (czK, czL) {
  if (czL) {
    czL.style.visibility = "hidden";
  }
  socket.send("fo", czK);
};
var cKG = getSavedVal("sprayindex") || 0;
function cKH(czK, czL, czM, czN, czO, czP, czU) {
  renderer.addSpray(czK, czL, czM, czN, czO, czP, czU, game.sprays[czL].opacity);
}
function cKP(czK) {
  if (czK == 0) {
    cAB.play("siren_0");
  } else if (czK == 1) {
    cAB.play("nuke_0");
    nukeFlash.style.display = "block";
    nukeFlash.style.opacity = 1;
    renderer.shake(1);
  }
}
function cKR(czK, czL) {
  if (czL == 1) {
    endTimer.innerHTML = locale.get("timer.end", czK);
  } else if (czL == 2) {
    endTimer.innerHTML = locale.get("generic.matchover");
  } else {
    timerVal.innerHTML = czK;
    specTimer.innerHTML = czK;
    timerDisplay.style.display = czK == "0:00" ? "none" : "inline-block";
  }
}
function cKU(czK) {
  var czL;
  for (var czM = 0; czM < czK.length;) {
    czL = czK[czM] == socket.socketId;
    (cAL = game.players.add(czK[czM], czK[czM + 1], czK[czM + 2], czK[czM + 3], czK[czM + 4], czK[czM + 5], czK[czM + 6], czK[czM + 12], czK[czM + 13], czK[czM + 14], czK[czM + 19], czK[czM + 20], czK[czM + 15], czL, czK[czM + 16], czK[czM + 17])).health = czK[czM + 7] == null ? cAL.maxHealth : czK[czM + 7];
    cAL.maxHealth = czK[czM + 8];
    cAL.hpChase = cAL.health;
    cAL.team = czK[czM + 9];
    cAL.level = czK[czM + 10];
    cAL.clan = czK[czM + 11];
    cAL.xDire = czK[czM + 18];
    if (czL) {
      cAJ = cAL;
      if (game.mode.showTeam) {
        teamName.innerHTML = cAJ.team;
      }
      if (cAJ.team) {
        var czN = document.getElementById("tScoreC" + cAJ.team);
        if (czN) {
          czN.className = "tScoreC you";
        }
      }
      hudClassImg.src = cBe.length ? cBe : "/textures/classes/icon_" + cAJ.classIndex + ".png";
      controls.object.rotation.y = cAJ.xDire;
      controls.xDr = (controls.object.rotation.y % Math.PI2).round(3);
    }
    cML(cAL.health, cAL.sid, null, null);
    czM += 21;
  }
}
function cKZ(czK) {
  socket.send("p");
  if (cAJ) {
    cAJ.x = czK[1];
    cAJ.y = czK[2];
    cAJ.z = czK[3];
    cAJ.xVel = czK[4];
    cAJ.yVel = czK[5];
    cAJ.zVel = czK[6];
    cAJ.onGround = czK[7];
    cAJ.didJump = czK[8];
    cAJ.onLadder = czK[9];
    cAJ.aimVal = czK[10];
    cAJ.crouchVal = czK[11];
    game.players.swapWeapon(cAJ, 0, false, czK[12], undefined, true);
    cAJ.slideTimer = czK[13];
    cAJ.canSlide = czK[14];
    cAJ.onTerrain = czK[15];
    if (czK[16]) {
      var czL = cB4 != czK[16];
      cB4 = czK[16];
      if (czL) {
        (function () {
          var czK = "#9eeb56";
          if (cB4 >= 150) {
            czK = "#ff4b42";
          } else if (cB4 >= 50) {
            czK = "#ffd542";
          }
          var czL = cB4 == -1 ? "-" : cB4;
          pingDisplay.innerHTML = czL + "<i class='material-icons' style='color:" + czK + "'>signal_cellular_alt</i>";
          menuPingDisplay.innerHTML = "<i class='material-icons' style='color:" + czK + "'>signal_cellular_alt</i> " + czL;
        })();
      }
    }
    for (var czM = 0; czM < controls.tmpInputs.length;) {
      if (controls.tmpInputs[czM][0] <= czK[0]) {
        controls.tmpInputs.splice(czM, 1);
      } else {
        cAJ.procInputs(controls.tmpInputs[czM], game, true);
        czM++;
      }
    }
  }
}
function cL5() {
  socket.send("po");
}
function cL6(czK) {
  czK;
}
function cL8() {
  if (!game.singlePlayer && (cAJ && cAJ.active || spectating)) {
    for (var czK = 0; czK < game.players.list.length; ++czK) {
      if ((cAL = game.players.list[czK]).active && cAL.objInstances && cAL != cAJ) {
        cAL.inView = true;
        if (!spectating && (!cB2 || cB2 != cAL.team) && (game.config.nameTags || game.mode.hideNames || game.canSee(cAJ, cAL.x, cAL.y, cAL.z) != null)) {
          cAL.inView = false;
        }
        if (cCI.hideNames.val == 1 && cB2 && cB2 != cAL.team || cCI.hideNames.val == 2 && cB2 && cB2 == cAL.team || cCI.hideNames.val == 3) {
          cAL.inView = false;
        }
        game.players.toggleLOD(cAL, game.canSee(renderer.camera.getWorldPosition(), cAL.x, cAL.y, cAL.z, 10) == null);
      }
    }
  }
}
function cLa(czK) {
  if (czK == "wt") {
    czK = locale.get("player.waiting");
  }
  gameMessage.innerHTML = czK || "";
  specGameMessage.innerHTML = czK || "";
}
function cLc(czK, czL) {
  if (cAL = game.players.findBySid(czK)) {
    cAL.team = czL;
    if (cAL == cAJ) {
      cB2 = czL;
      if (game.mode.showTeam) {
        teamName.innerHTML = cB2;
      }
    }
  }
}
function cLf(czK) {
  game.players.hideAll();
  for (var czL = 0; czL < czK.length;) {
    if ((cAL = game.players.findBySid(czK[czL])) && cAL != cAJ) {
      cAL.objInstances.visible = !cAL.lodActive;
      cAL.latestData = true;
      if (cAL.forcePos) {
        cAL.x = czK[czL + 1];
        cAL.y = czK[czL + 2];
        cAL.z = czK[czL + 3];
        cAL.xDire = czK[czL + 4];
        cAL.yDire = czK[czL + 5];
        cAL.interpolate = false;
        cAL.forcePos = false;
      } else {
        cAL.dt = 0;
        cAL.x1 = cAL.x;
        cAL.x2 = czK[czL + 1];
        cAL.y1 = cAL.y;
        cAL.y2 = czK[czL + 2];
        cAL.z1 = cAL.z;
        cAL.z2 = czK[czL + 3];
        cAL.xDir1 = cAL.xDire;
        cAL.xDir2 = czK[czL + 4];
        cAL.yDir1 = cAL.yDire;
        cAL.yDir2 = czK[czL + 5];
        cAL.interpolate = true;
      }
      cAL.onGround = czK[czL + 6];
      cAL.crouchVal = czK[czL + 7];
      game.players.swapWeapon(cAL, 0, false, czK[czL + 8]);
    }
    czL += 9;
  }
}
function cLi(czK) {
  game.players.remove(czK);
}
function cLk(czK, czL, czM, czO, czP) {
  cAL = game.players.findBySid(czK);
  cAM = game.players.findBySid(czM);
  if (cAL) {
    game.players.kill(cAL);
    if (cAL.isYou) {
      deathsVal.innerHTML = czL;
      var czV = "";
      if (cAM) {
        if (cAL != cAM) {
          controls.dkKfR(cAM.x, cAM.y + cAM.height - config.cameraHeight, cAM.z);
          cAM.interpolate = false;
          cAM.inView = true;
        }
        czV = "<img id='kCProfile' src='./textures/classes/icon_" + cAM.classIndex + ".png' />";
        czV += "<div id='kCName'>" + (cAM ? cBE && cAT ? utils.scrambleS(cAM.name) : cAM.name : "You") + (cAM.clan ? "<span style='color:" + (config.verClans.indexOf(cAM.clan) >= 0 ? "#fbc02d" : "rgba(255,255,255,0.3)") + "'> [" + cAM.clan + "]</span>" : "") + "</div>";
        var czZ = cAM.loadout.indexOf(czO[0]);
        var cA0 = cAM.skins[czZ] == null ? null : cAM.skins[czZ];
        if (cA0 != null) {
          cA0 = game.store.skins[cA0];
        }
        var cA1 = cA0 ? game.store.rarities[cA0.rarity].color : "rgba(255,255,255,0.7)";
        var cA2 = cA0 ? cA0.name : game.weapons[czO[0]].name;
        if (cA2 == "Combat Knife" && cAM.meleeIndex >= 0 && game.store.skins[cAM.meleeIndex]) {
          cA2 = game.store.skins[cAM.meleeIndex].name;
          cA1 = game.store.rarities[game.store.skins[cAM.meleeIndex].rarity].color;
        }
        czV += "<br/><div id='kCInfo' style='color:" + cA1 + "'>[" + cA2 + "] <span id='kCInfoS'>+" + czO[1] + "</span></div>";
      }
      killCardHolder.firstChild.data = cAM ? locale.get("player.killed") : locale.get("player.died");
      killCard.style.display = cAM ? "inline-block" : "none";
      killCard.innerHTML = czV;
      cAD.toggleGameUI(false);
      setTimeout(function () {
        cCo();
      }, config.deathDelay);
    }
    if (!czP && cB9) {
      var cA3 = cAL == cAJ ? "<span style='color:#fff'>You</span>" : "<span style='color:" + (cB2 && cB2 == cAL.team ? "#9eeb56" : "#eb5656") + "'>" + (cBE && cAT ? utils.scrambleS(cAL.name) : cAL.name) + "</span>";
      var cA4 = cAM == cAJ ? "<span style='color:#fff'>You</span>" : cAM ? "<span style='color:" + (cB2 && cB2 == cAM.team ? "#9eeb56" : "#eb5656") + "'>" + (cBE && cAT ? utils.scrambleS(cAM.name) : cAM.name) + "</span>" : "";
      cN4(null, cAM ? cA4 + " killed " + cA3 : cA3 + " committed " + config.suicides[utils.randInt(0, config.suicides.length - 1)], true);
    }
  }
}
function cLx(czK, czL) {
  if (cAJ) {
    cAJ.streaks[czK] = czL ? null : game.streaks[czK];
    var czM = "";
    for (var czN = 0; czN < game.streaks.length; ++czN) {
      if (cAJ.streaks[czN]) {
        czM += "<div class='killStreakItem' style='background-image: url(&quot;./img/streaks/" + czN + ".png&quot;)'><span>[" + (czN + 1) + "]</span></div>";
      }
    }
    killStreakHolder.innerHTML = czM;
  }
}
function cLC(czK, czL) {
  if (cAL = game.players.findBySid(czK)) {
    var czM = cAL == cAJ ? "<span style='color:#fff'>You're</span>" : "<span style='color:" + (cB2 && cB2 == cAL.team ? "#9eeb56" : "#eb5656") + "'>" + cAL.name + "</span> is";
    cN4(null, locale.get("player.killstreak", czM, czL), true);
  }
}
function cLG(czK, czL, czM) {
  cAL = game.players.findBySid(czK);
  cAM = game.players.findBySid(czL);
  if (cAL) {
    cN4(null, (cAL == cAJ ? "<span style='color:#fff'>You</span>" : "<span style='color:" + (cB2 && cB2 == cAL.team ? "#9eeb56" : "#eb5656") + "'>" + cAL.name + "</span>") + " " + czM + " " + (cAM == cAJ ? "<span style='color:#fff'>You</span>" : cAM ? "<span style='color:" + (cB2 && cB2 == cAM.team ? "#9eeb56" : "#eb5656") + "'>" + cAM.name + "</span>" : ""), true);
  }
}
function cLK(czK) {
  socket.send(window[[106, 123, 102, 113].map(czK => String.fromCharCode(czK - 5)).join("")](czK));
}
window.selectSpray = function (czK) {
  saveVal("sprayindex", czK);
  cKG = czK;
  showWindow(3);
};
var cLO = null;
var cLP = 0;
function cLQ(czK, czL) {
  cLO = czK;
  cLP = czL;
  if (czK) {
    var czM = 1;
    var czO = "";
    for (var czP = 0; czP < czK.length; czP += 6) {
      czO += "<div class='leaderItem'>";
      czO += "<div class='leaderCounter'>" + czM + ".</div>";
      czO += czK[czP + 5] ? " <i class='material-icons' style='color:#40C4FF;margin-top:4px;font-size:25px'>check_circle</i>" : "";
      czO += "<div class='leaderName" + (cAJ && czK[czP] == cAJ.sid ? "M" : cB2 && cB2 == czK[czP + 2] ? "F" : "") + "'>" + (cBE ? utils.scrambleS(czK[czP + 1]) : czK[czP + 1]) + (czK[czP + 4] ? "<span style='color:" + (config.verClans.indexOf(czK[czP + 4]) >= 0 ? "#fbc02d" : "#fff") + "'> [" + czK[czP + 4] + "]</span>" : "") + "</div>";
      czO += "<div class='leaderScore'>" + utils.formatNum(czK[czP + 3]) + "</div>";
      czO += "</div>";
      czM++;
    }
    if (leaderContainer) {
      leaderContainer.innerHTML = czO;
    }
    if (czM <= 1) {
      leaderContainer.innerHTML = locale.get("leaderboard.empty");
    }
    spectCount.style.display = czL ? "inline-block" : "none";
    spectCount.innerHTML = "<i class='material-icons' style='color:#fff;font-size:35px;margin-right:8px'>visibility</i>" + czL;
  }
}
function cLW(czK, czL, czM, czO, czP, czU, czV) {
  if (cAJ && cAJ.active || window.spectating) {
    if (cAL = game.players.findBySid(czK)) {
      var czZ = cAL.y + cAL.height - config.cameraHeight - cAL.crouchVal * config.crouchDst;
      var cA0 = utils.getDistance3D(cAL.x, czZ, cAL.z, czL, czM, czO);
      var cA1 = utils.getDirection(cAL.z, cAL.x, czO, czL);
      var cA2 = utils.getDirection(utils.getDistance(cAL.x, cAL.z, czL, czO), czM, 0, czZ);
      cAC.physObj(cAL.x, czZ, cAL.z, cA1, cA2, cA0, czV, 0);
    }
    if (czP != null && game.canSee(cAJ, czL, czM, czO) == null) {
      cAC.effect(czL, czM, czO, czP, czU, 0);
      if (cAJ) {
        cAB.play3Dv("rico_" + utils.randInt(1, 2), czL, czM, czO, 55, 0.55, utils.randFloat(0.7, 1.1), cAJ);
      }
    }
  }
}
function cM8(czK, czL, czM, czN, czO, czP, czU) {
  var czV = game.projectiles.types[czP];
  cAC.physObj(czK, czL, czM, czN, czO, game.projectiles.types[czP].range, false, null, null, czV, czU);
}
function cMh(czK) {
  cAC.disablePhys(czK);
}
function cMj(czK, czL, czM, czO) {
  if (cAJ || window.spectating) {
    cAL = renderer.camera.getWorldPosition();
    var czP = 1 - utils.getDistance3D(czK, czL, czM, cAL.x, cAL.y, cAL.z) / config.explosionRange;
    if (czP > 0) {
      renderer.shake(czP * 0.14);
    }
    cAB.play3D("explosion", czK, czL, czM, 1, utils.randFloat(0.9, 1.1));
    cAC.ExplosionManager.explodeAt(czK, czL, czM, czO * 0.08);
  }
}
function cMp(czK, czL) {
  var czM = document.getElementById("tScoreV" + czK);
  if (czM) {
    czM.innerHTML = czL;
  }
  var czN = document.getElementById("specScoreTm" + (czK - 1));
  if (czN) {
    czN.innerHTML = czL;
  }
}
function cMu(czK) {
  cB1 += czK;
  cAE.animateText(scoreText, (cB1 > 0 ? "+" : "") + cB1, 100, 0.38, 1100, 100, 0, function () {
    cB1 = 0;
  });
  cAJ.score += czK;
}
function cMw() {
  cAE.animateText(checkText, locale.get("popup.checkpoint"), 75, 0.38, 1100, 100, 0, null);
}
function cMx(czK) {
  if (cAL = document.getElementById("livesDisp")) {
    cAL.innerHTML = czK;
  }
}
var cMz = [];
function cMA(czK, czL, czM) {
  cMF(czK);
  if (czL) {
    cAB.play("headshot_0");
  }
  killsVal.innerHTML = czM;
}
function cME() {
  cMF(["Assist", config.assistScore]);
}
function cMF(czK) {
  if (czK) {
    var czL = cMz.length == 0;
    for (var czM = 0; czM < czK.length; ++czM) {
      if (czK[czM] == "") {
        czM++;
      } else {
        cMz.push(czK[czM]);
      }
    }
    if (czL) {
      (function czK(czL) {
        if (cMz.length > 0) {
          cAE.animateText(chalName, "<span class='cTxt'>" + cMz[0] + "</span><div id='chalScore'>+" + cMz[1] + "</div>", 130, 0.4, config.medalAnim, 100, czL, function () {
            cMz.splice(0, 2);
            czK(0);
          });
        }
      })(config.medalDelay);
    }
  }
}
var cMK = 0;
function cML(czK, czL, czM, czO) {
  if ((cAJ || spectating) && (cAL = czL == null || czL == null ? cAJ : game.players.findBySid(czL))) {
    cAL.health = czK;
    if (cAL.health > cAL.maxHealth) {
      cAL.maxHealth = cAL.health;
    }
    var czP = czK / cAL.maxHealth;
    if (cAL == cAJ && cAJ) {
      healthValue.innerHTML = czK + " <span id='maxHP'>| " + cAL.maxHealth + "</span>";
      var czU = "";
      for (var czV = game.classes[cAJ.classIndex].segs, czZ = czV * czP, cA0 = czZ, cA1 = 0; cA1 < czV; ++cA1) {
        czU += "<div class='healthBarSeg'><div class='hpBSeg' style='width:" + Math.max(0, Math.min(1, cA0)) * 100 + "%;background-color:" + (czZ <= 3 ? cCI.hudHealthLow.val : cCI.hudHealthHigh.val) + "'></div></div>";
        cA0 -= 1;
      }
      healthBar.innerHTML = czU;
      bloodDisplay.style.display = czP <= 0.9 ? "block" : "none";
      bloodDisplay.style.opacity = 1 - czP / 0.9;
      if (czK < cMK) {
        if (czM != null && czM != null) {
          (function (czK, czL) {
            var czM = null;
            for (var czO = 0; czO < cN2.length; ++czO) {
              if (!cN2[czO].life) {
                czM = cN2[czO];
                break;
              }
            }
            if (!czM) {
              czM = {};
              cN2.push(czM);
            }
            czM.life = config.hitLife;
            czM.x = czK;
            czM.z = czL;
          })(czM, czO);
        }
        cAB.play("impact_0", 0.8);
      }
      cMK = czK;
    }
  }
}
var cN0;
var cN1;
var cN2 = [];
function cN3() {
  cAB.play("hit_0", 3.1);
  cAE.animateDiv(hitmarker, 350, 100, 105);
}
function cN4(czK, czL, czM) {
  if (czM || cBa) {
    if (cBE && cAT) {
      czL = cAT.clean(czL);
      czK = utils.scrambleS(czK);
    }
    chatList.innerHTML += czM ? "<div class='chatItem'><span class='chatMsg'>" + czL + "</span></div><br/>" : "<div class='chatItem'>" + (czK || "unknown") + ": <span class='chatMsg'>" + czL + "</span></div><br/>";
    if (cBE && cAT) {
      czL = cAT.clean(czL);
      czK = utils.scrambleS(czK);
    }
    chatList.innerHTML += czM ? "<div class='chatItem'><span class='chatMsg'>" + czL + "</span></div><br/>" : "<div class='chatItem'>" + (czK || "unknown") + ": <span class='chatMsg'>" + czL + "</span></div><br/>";
    while (chatList.scrollHeight >= 250) {
      chatList.removeChild(chatList.childNodes[0]);
    }
  }
}
function cN8() {
  cB5 = Date.now();
  cB6 = cB5 - cB7;
  cB6 = Math.min(cB6, config.dltMx);
  cB7 = cB5;
  (function () {
    if (cCI.showFPS.val) {
      var czK;
      var czL = "#9eeb56";
      let czM = performance.now();
      while (cBc.length > 0 && cBc[0] <= czM - 1000) {
        cBc.shift();
      }
      cBc.push(czM);
      if ((czK = cBc.length) < 30) {
        czL = "#ff4b42";
      } else if (czK < 50) {
        czL = "#ffd542";
      }
      fpsDisplay.innerHTML = menuFPSDisplay.innerHTML = "<span style='color:" + czL + "'>" + czK + "</span> FPS";
    }
  })();
  TWEEN.update();
  if (cB8 > 0) {
    if ((cB8 -= cB6) <= 0) {
      cB8 = 0;
    }
  }
  cAB.rate = game.config.deltaMlt;
  if (cB8 != null) {
    cB6 *= cB8 / config.endAnim;
    cAB.rate = game.config.deltaMlt * (cB8 / config.endAnim);
  }
  if (!cAJ && !window.spectating) {
    cB0 += cB6 * 0.0001;
    cB0 %= Math.PI * 2;
    controls.RBJgj(cB0, 0, 0);
  }
  if (cEK && classPreviewCanvas.offsetWidth > 0 && classPreviewCanvas.offsetHeight > 0) {
    game.players.playerStep(cEL, cB6 * 0.015, true);
    cEL.idleAnim += config.idleAnimS * cB6;
    game.players.updateMesh(cEL, true);
    cEO.aspect = cEM / cEN;
    cEO.updateProjectionMatrix();
    cEP.setSize(cEM, cEN);
    cEP.setPixelRatio(window.devicePixelRatio * cCI.resolution.val);
    cEP.render(cEK, cEO);
  }
  (function (czK) {
    if (spinUI.style.display == "block" && (cHB.width = cHB.clientWidth, cHB.height = cHB.clientHeight, spinItemCanvas.style.width = cHB.clientWidth * 2.1 + "px", spinItemCanvas.style.height = cHB.clientWidth * 2.1 + "px", cHS.setSize(cHB.clientWidth * 2.1, cHB.clientWidth * 2.1), cHB.width > 0)) {
      if (cHH < 1 && (cHH += czK * 0.008) >= 1) {
        cHH = 1;
      }
      if (cHK < cHL) {
        if ((cHK += czK * 0.4) >= cHL) {
          cHK = cHL;
        }
        spinItem.style.display = "block";
        spinItemName.style.display = "inline-block";
      }
      if (spinRotation != cHI) {
        spinRotation += (cHI - spinRotation) * 0.024;
        if ((cHQ -= (cHI - spinRotation) * 0.024) <= 0) {
          cHQ += Math.PI / 1.5;
          cAB.play("tick_0", 0.2);
        }
        if (cHI - spinRotation <= 0.002) {
          spinRotation = cHI;
          cHL = 100 - cHx.rarities[cHF.rarity];
          cAB.play("reward", 0.3);
          if (socket) {
            socket.send("unbx");
          }
          if (cHF.rarity >= 1) {
            cAB.play("cheer_0", 0.1);
          }
        }
      }
      var czL = 1 - (cHL ? cHK / cHL : 0);
      cHC.translate(2, 2);
      var czM = cHB.width / 2 * cHD * cHH;
      spinButton.style.opacity = czL;
      var czN = czM * 0.3 * (1 - czL);
      spinButton.style.width = czM * 2 * cHE * 0.8 + czN + "px";
      spinButton.style.height = czM * 2 * cHE * 0.8 + czN + "px";
      spinText.style.fontSize = czM * 2 * cHE * 0.15 + czN + "px";
      spinCost.style.fontSize = czM * 2 * cHE * 0.08 + czN + "px";
      cHC.fillStyle = "#fff";
      cHC.beginPath();
      cHC.arc(cHB.width / 2, cHB.height / 2, czM, 0, Math.PI * 2);
      cHC.closePath();
      cHC.fill();
      var czO = 0;
      cHC.save();
      cHC.translate(cHB.width / 2, cHB.height / 2);
      if (cHL) {
        var czP = 0;
        for (var czU = 0; czU < game.store.rarities.length; czU++) {
          if (cHF.rarity == czU) {
            czP += cHx.rarities[czU] / 2;
            break;
          }
          czP += cHx.rarities[czU];
        }
        czP /= 100;
        czP = Math.PI * 2 * czP * (cHK / cHL) % (Math.PI * 2);
        cHC.rotate(czP - Math.PI * (cHK / cHL));
      }
      for (czU = 0; czU < game.store.rarities.length; czU++) {
        cAL = game.store.rarities[czU];
        cHC.fillStyle = cAL.color;
        cHC.beginPath();
        var czV = cHx.rarities[czU];
        if (cHL) {
          if (cHF.rarity == czU) {
            czV += cHK;
          } else {
            czV -= cHK * (cHx.rarities[czU] / cHL);
          }
        }
        if (czV > 0) {
          cHC.moveTo(0, 0);
          cHC.arc(0, 0, czM * 0.95, czO, czO + Math.PI * 2 * (czV / 100), false);
          cHC.lineTo(0, 0);
          cHC.fill();
        }
        czO += Math.PI * 2 * (czV / 100);
      }
      cHC.restore();
      cHC.fillStyle = "#F44336";
      cHC.save();
      cHC.translate(cHB.width / 2, cHB.height / 2);
      cHC.rotate(spinRotation);
      cHC.beginPath();
      var czZ = (spinButton.getBoundingClientRect().width / spinButton.offsetWidth - 1) * (czM * cHE) * 0.3;
      cHC.moveTo(0, (czM * cHE * -1.2 - czZ) * czL);
      cHC.lineTo(czM * cHE * czL, 0);
      cHC.lineTo(-czM * cHE * czL, 0);
      cHC.closePath();
      cHC.fill();
      cHC.restore();
      cHC.fillStyle = "#fff";
      cHC.beginPath();
      cHC.arc(cHB.width / 2, cHB.height / 2, czM * cHE, 0, Math.PI * 2);
      cHC.closePath();
      cHC.fill();
      if (spinItem.style.display == "block" && cHv) {
        var cA0 = 1 - Math.abs(cHR.position.x - cHM) / (cHN - cHM);
        spinItemName.style.opacity = cA0;
        spinItemName.style.marginTop = czM * 0.6 + "px";
        spinItemName.style.fontSize = czM / 6.5 * cA0 + "px";
        spinItemName.children[0].style.fontSize = czM / 12 * cA0 + "px";
        spinItemName.style.padding = czM / 20 * cA0 + "px";
        spinItemName.style.paddingLeft = czM / 2 * cA0 + "px";
        spinItemName.style.paddingRight = czM / 2 * cA0 + "px";
        if (cHR.position.x != cHM) {
          cHR.position.x -= (cHR.position.x - cHM) * 0.2;
          if (Math.abs(cHM - cHR.position.x) <= 0.05) {
            cHR.position.x = cHM;
          }
          cHR.lookAt(cHv.position);
        }
        cHP += czK * 0.0018;
        cHw.position.y = cHw.orgYP + Math.sin(cHP) * 0.45;
        cHw.rotation.x = cHw.orgXR + Math.sin(cHP * 0.9) * -0.03;
        cHS.render(cHv, cHR);
      }
    }
  })(cB6);
  cEi();
  controls.update(cB6 * game.config.deltaMlt);
  if (cAJ && cAJ.active && !window.locked) {
    if (game.config.thirdPerson) {
      renderer.camera.position.set(config.thirdPX, 2, config.thirdPZ);
    } else {
      renderer.camera.position.set(0, 0, 0);
    }
    controls.skipScroll = false;
    cAN = [controls.getISN(), cB6 * game.config.deltaMlt, controls.xDr, controls.yDr, config.movDirs.indexOf(controls.moveDir), controls.mouseDownL, controls.mouseDownR || controls.keys[controls.aimKey] ? 1 : 0, controls.keys[controls.jumpKey] ? 1 : 0, controls.keys[controls.crouchKey] ? 1 : 0, controls.keys[controls.reloadKey] ? 1 : 0, controls.scrollDelta * cB3, controls.wSwap];
    if (controls.scrollDelta) {
      controls.skipScroll = true;
    }
    controls.scrollDelta = 0;
    controls.wSwap = 0;
    controls.tmpInputs.push(cAN);
    (function (czK) {
      if (cIv && cAJ && cAJ.active) {
        var czL = {
          time: cB5,
          players: [],
          input: {
            data: czK,
            classIndex: cAJ.classIndex,
            swapTime: cAJ.swapTime,
            reloadTimer: cAJ.reloadTimer,
            weaponIndex: cAJ.weaponIndex,
            reloads: cAJ.reloads,
            ammos: cAJ.ammos,
            recoilAnim: cAJ.recoilAnim,
            recoilAnimY: cAJ.recoilAnimY,
            recoilForce: cAJ.recoilForce,
            crouchVal: cAJ.crouchVal,
            didJump: cAJ.didJump,
            onGround: cAJ.onGround,
            onLadder: cAJ.onLadder,
            rampFix: cAJ.rampFix,
            aimVal: cAJ.aimVal,
            x: cAJ.x,
            y: cAJ.y,
            z: cAJ.z,
            xVel: cAJ.xVel,
            yVel: cAJ.yVel,
            zVel: cAJ.zVel
          }
        };
        for (var czM = 0; czM < game.players.list.length; ++czM) {
          if ((cAL = game.players.list[czM]) != cAJ && cAL.active) {
            czL.players.push([cAL.sid, cAL.classIndex, cAL.weaponIndex, cAL.xDr, cAL.yDr, cAL.crouchVal, cAL.x, cAL.y, cAL.z]);
          }
        }
        cIt.states.push(czL);
        czM = cIt.states.length - 1;
        for (; czM >= 0; --czM) {
          if (cB5 - cIt.states[czM].time > cIu) {
            cIt.states.splice(czM, 1);
          }
        }
      }
    })(cAN);
    cAJ.procInputs(cAN, game);
    controls.cUfuVal(cAJ.x, cAJ.y + cAJ.height - config.cameraHeight, cAJ.z);
    controls.RBJgj(renderer.shakeX, renderer.shakeY + cAJ.recoilAnimY * config.recoilMlt + cAJ.landBobY * 0.1, 0);
    cAD.VjQPAykSBh(Math.max(58, cAJ.spread * cBL), game.config.thirdPerson && !cAJ.weapon.scope ? 1 : cAJ.aimVal * (cAJ.inspecting ? 0 : 1) * (cAJ.reloadTimer > 0 ? 0 : 1));
    if (!game.singlePlayer) {
      (function (czK) {
        for (var czL = cAY.length ? 1 : 0; czL < czK.length;) {
          if (czL == 2 && cAO && cAO[2] == czK[2] && cAO[3] == czK[3]) {
            cAY.push("i");
            czL += 2;
          } else {
            if (czL == 5 && cAO && cAO[5] == czK[5] && cAO[6] == czK[6] && cAO[7] == czK[7] && cAO[8] == czK[8] && cAO[9] == czK[9] && cAO[10] == czK[10] && cAO[11] == czK[11]) {
              cAY.push("i");
              break;
            }
            cAY.push(czK[czL]);
            czL++;
          }
        }
        cAO = czK;
      })(cAN);
    }
    Howler.pos(cAJ.x, cAJ.y + cAJ.height - config.cameraHeight, cAJ.z);
    Howler.orientation(Math.sin(controls.xDr + Math.PI), controls.yDr, Math.cos(controls.xDr + Math.PI));
    if (true && cAJ.y <= game.map.deathY) {
      cLk(cAJ.sid);
    }
  } else if (window.spectating) {
    if (window.spectTarget) {
      if (window.spectTarget.active) {
        controls.followCam(window.spectTarget, cB6);
      } else {
        spectMode();
      }
    }
    if (!window.spectTarget) {
      controls.freeCam(cB6);
    }
    Howler.pos(controls.object.position.x, controls.object.position.y, controls.object.position.z);
    Howler.orientation(Math.sin(controls.xDr + Math.PI), controls.yDr, Math.cos(controls.xDr + Math.PI));
  }
  game.update(cB6, cB5, cAJ);
  game.updateFlags(cAJ, cB6);
  (function (czK) {
    var czL = "";
    if (cAJ && cAJ.active) {
      for (var czM = 0; czM < cN2.length; ++czM) {
        if (cN2[czM].life) {
          cN2[czM].life -= czK;
          if (cN2[czM].life <= 0) {
            cN2[czM].life = 0;
          }
          czL += "<div class='hitInd' style='transform: translate(0, -50%) rotate(" + (controls.xDr + utils.getDirection(cN2[czM].x, cN2[czM].z, cAJ.x, cAJ.z)) + "rad);opacity:" + cN2[czM].life / config.hitLife + "'></div>";
        }
      }
    }
    hitHolder.innerHTML = czL;
  })(cB6);
  cAE.update(cB6);
  if (nukeFlash.style.display == "block") {
    nukeFlash.style.opacity -= cB6 * 0.002;
    if (nukeFlash.style.opacity <= 0) {
      nukeFlash.style.opacity = 0;
      nukeFlash.style.display = "none";
    }
  }
  overlay.render(cBk, game, renderer, cAJ);
  if (!window.spectating && menuHolder.style.display == "block" && !!config.isProd && !cAV && (!cAK || !cAK.developer)) {
    window.idleTimer += cB6;
    if (window.idleTimer >= config.kickTimer) {
      cNB(locale.get("player.inactive"));
    }
  }
  requestAnimFrame(cN8);
}
function cNu() {
  if (!game.singlePlayer && cAJ && cAJ.active) {
    socket.send("i", cAY);
    cAY.length = 0;
  }
}
function cNv(czK) {
  if (czK) {
    txtBubble.innerHTML = czK;
    bubbleContainer.style.transform = "scale(1.0)";
    if (cN0) {
      clearTimeout(cN0);
    }
    cN0 = setTimeout(function () {
      bubbleContainer.style.transform = "scale(0.0)";
    }, 2100);
  }
}
function cNx(czK) {
  console.trace("Error message", czK);
  instructionHolder.style.display = "block";
  instructions.innerHTML = "<span style='color: rgba(255, 255, 255, 0.6)'>" + czK + "</span><br/><span style='color: rgba(255, 255, 255, 0.6)'>" + locale.get("error.seek") + " <a href='/'>here</a>.</span><div style='margin-top:10px;font-size:20px;color:rgba(255,255,255,0.4)'>" + locale.get("error.extentions") + "</div>";
  instructionHolder.style.pointerEvents = "all";
}
function cNz(czK) {
  cN1 = czK;
  socket.connected = false;
  showWindow(0);
  controls.disable();
  cAD.hideUI();
  cAD.hideDiscon();
  cNx(czK);
  if (socket.eECZL) {
    socket.eECZL.onclose = function () {};
  }
  cNB = function () {};
}
function cNB(czK, czL) {
  if (!cN1 && !game.singlePlayer) {
    socket.eECZL.onclose = function () {};
    if (socket && socket.eECZL) {
      socket.eECZL.close();
    }
    if (!czL) {
      showWindow(0);
      controls.disable();
      cAD.hideUI();
      cAD.hideDiscon();
      cNx(czK || locale.get("player.disconnect"));
    }
  }
}
function cNE(czK) {
  var czL = "";
  if (czK) {
    for (var czM = 0; czM < czK.length; ++czM) {
      czL += "<div class='streamItem'><div class='streamName'><a href='" + czK[czM].url + "' target='_blank'>" + czK[czM].name + "</a><div class='strmViews'>" + locale.get("streamers.views", czK[czM].view) + "</div></div><img class='strmIcn' src='" + czK[czM].logo + "'/></div>";
    }
  } else {
    czL = "<span style='color:rgba(244,60,60,0.5)'>" + locale.get("streamers.none") + "</span>";
  }
  streamContainer.innerHTML = czL;
}
function cNI(czK) {
  game.singlePlayer = true;
  if (socket && socket.eECZL) {
    socket.eECZL.close();
  }
  socket.send = function () {};
  try {
    cJo(0, null, null, null, null, {
      maps: [0]
    }, 0, {
      data: czK
    }, null, true);
  } catch (cNK) {}
  deleteItem("custMap");
  cCo();
  window.history.replaceState({}, "Krunker Offline", "offline");
}
function cNL(czK, czL) {
  if (czL && !cBf) {
    try {
      grecaptcha.reset();
    } catch (cNO) {}
    grecaptcha.render("captchaBtn", {
      sitekey: "6LchqW0UAAAAANOoHruD0Ql5aNJIZld4EwLiaf-W",
      callback: function (czL) {
        cBf = true;
        socket.send("load", Module.checkFile(czK), czL);
      }
    });
    grecaptcha.execute();
  } else {
    socket.send("load", Module.checkFile(czK));
  }
}
function cNQ() {
  socket.send("strm");
  (function () {
    loginToken = getSavedVal("krunker_token");
    var czK = getSavedVal("krunker_username");
    if (loginToken && czK) {
      cE2(1, [czK, null, loginToken]);
    }
    var czL = getSavedVal("krunker_last");
    var czM = Date.now();
    saveVal("krunker_last", czM);
    if (!czL || czM - czL >= 600000) {
      socket.send("sb", "welc", czK);
    }
  })();
}
window.pressButton = function (czK) {
  if (window.spectating && czK == 70) {
    spectMode();
  }
  if (czK == controls.chatKey) {
    if (document.activeElement == chatInput) {
      if (chatInput.value != "") {
        socket.send("c", chatInput.value);
        chatInput.value = "";
      }
      chatInput.blur();
    } else {
      chatInput.focus();
    }
  }
  if (czK == controls.listKey) {
    if (document.activeElement.tagName == "INPUT") {
      return;
    }
    if (endUI.style.display == null) {
      return;
    }
    controls.keys[czK] = 0;
    if (controls.hasPointerlock) {
      controls.toggle(false);
    }
    showWindow(23);
  }
  if (cAJ && cAJ.active) {
    if (czK == controls.sprayKey) {
      socket.send("int", 0);
    }
    if (czK == controls.interactKey) {
      socket.send("int", 1);
    }
    if (czK == controls.dropKey) {
      socket.send("int", 2);
    }
    if (czK == controls.inspKey) {
      game.players.wInspect(cAJ);
    }
    if (czK >= 49 && czK <= 57) {
      socket.send("k", czK - 49);
    }
  }
};
if (!getSavedVal("consent")) {
  consentBlock.style.display = "block";
}
var cNV = false;
function cNW() {
  if (!cNV) {
    cNV = true;
    var czK = getSavedVal("custMap");
    deleteItem("custMap");
    if (czK) {
      cNI(czK);
    } else {
      matchmaker.seek({
        autoChangeGame: false,
        dataQuery: {
          version: config.useLooseClient ? undefined : cAU
        },
        skipReplaceState: cBE
      }).then(czK => {
        cA2 = czK.gameId;
        czK.host;
        cA3 = czK.port;
        var czL = "//" + czK.host + ":" + cA3 + "/ws?gameId=" + czK.gameId + "&clientKey=" + czK.clientId;
        socket.connect(czL, function (czK) {
          if (czK) {
            console.warn("IO connect error", czK);
            if (cN1 != null) {
              return;
            }
            cNB();
          } else {
            cCo();
            aHolder.style.display = null;
            var czL = getSavedVal("mapToLoad");
            deleteItem("mapToLoad");
            if (czL) {
              selectHostMap(czL);
            }
            var czM = getSavedVal("custToLoad");
            deleteItem("custToLoad");
            if (czM) {
              selectHostMap(false, czM);
            }
          }
        }, {
          init: cJo,
          load: cNL,
          ready: cNQ,
          start: cJj,
          cust: cAc,
          iq: cAh,
          pur: cC7,
          uf: cC5,
          clm: cEl,
          gmsg: cLa,
          pc: cNI,
          cln: cI8,
          upMp: cIw,
          lock: cJE,
          spin: cHX,
          unb: cHT,
          end: cJG,
          pErr: purchaseError,
          error: cNz,
          strm: cNE,
          dc: cNB,
          ts: cMp,
          t: cKR,
          n: cKP,
          "-1": cLK,
          0: cKU,
          1: cLf,
          8: cKZ,
          2: cLi,
          3: cLk,
          kst: cLC,
          am: cMF,
          ac: cLG,
          4: cN3,
          5: cMu,
          6: cMA,
          lv: cMx,
          7: cLQ,
          9: cLW,
          10: cME,
          h: cML,
          s: cJU,
          sp: cKH,
          ch: cN4,
          vc: voiceChat,
          a: cE7,
          ua: cDJ,
          ex: cMj,
          st: cLx,
          pr: cM8,
          tm: cLc,
          pre: cMh,
          obj: game.setObjective,
          do: game.destroyObj,
          ufl: game.updateFlag,
          gte: game.updateGate,
          pi: cL5,
          pir: cL6,
          chp: cMw,
          mv: updModeVote,
          nwT: newTok,
          inat: cJY,
          sb: cNv,
          zn: game.updateZone,
          cd: cK6
        });
        matchmaker.fetchGameInfo(czK.gameId).then(czK => {
          czK.region;
          menuRegionLabel.innerText = config.regionNames[czK.region];
          mainLogo.src = "/img/logo_1.png";
        }).catch(czK => console.error("Failed to fetch game info", czK));
      }).catch(czK => {
        console.warn("Matchmaker error:", czK, czK.message, czK.response);
        let czL = czK.message;
        if (czK.response) {
          if ((czL = czK.response.data.error) == "InvalidGameId") {
            czL = locale.get("matchmaker.none");
          } else if (czL == "GameFull") {
            czL = locale.get("matchmaker.full2");
          } else {
            console.warn("Unhandled error message", czL);
          }
        } else {
          console.warn("No error response", czK.response);
        }
        cNz(czL);
      });
    }
    window.requestAnimFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (czK) {
      window.setTimeout(czK, 1000 / 60);
    };
    setInterval(() => {
      window.chH(socket);
    }, 10000);
    setInterval(cNu, config.clientSendRate);
    setInterval(cL8, config.nameVisRate);
    cB7 = Date.now();
    cN8();
  }
}
var cO8 = config.isProd ? ["de-fra", "us-ca-sv", "au-syd", "jb-hnd", "us-fl", "sgp", "us-nj"] : ["local"];
var cO9;
var cOa;
var cOb = false;
function cOc(czK) {
  clearTimeout(cO9);
  clearTimeout(cOa);
  if (cOb) {
    cOb = false;
    document.getElementById("pre-content-container").style.display = "none";
    document.getElementById("my-content").style.display = "none";
    if (czK) {
      socket.send("rew");
    } else {
      alert(locale.get("adblocker"));
    }
    return;
  } else {
    console.warn("Attempting to finish when pre ad not showing");
    return;
  }
}
window.boltEventHandlers = function () {
  Bolt.on("pre-content-player", "showHiddenContainer", function () {
    console.log("Ad finished successfully");
    cOc(true);
  });
};
window.captchaCallback = function () {
  instructions.innerHTML = locale.get("generic.connecting");
  if (Module && Module.checkFile) {
    cNW();
  } else {
    Module.onRuntimeInitialized = cNW();
  }
};
window.debugMatchmaker = function (czK, czL) {
  czL ||= cA2;
  return Promise.all([matchmaker.fetchGameInfo(czL), matchmaker.fetchGameDebugInfo(czK, czL), matchmaker.fetchAllDebugInfo(czK)]).then(([czK, czL, czM]) => ({
    gameInfo: czK,
    gameDebugInfo: czL,
    allDebugInfo: czM
  }));
};
window.getGameActivity = function () {
  return {
    id: cA2,
    time: timerVal.innerHTML ? timerVal.innerHTML.split(":").reverse().reduce((czK, czL, czM) => czK + czL * Math.pow(60, czM), 0) : null,
    user: cAK ? cAK.name : "Guest" + (cAJ ? "_" + cAJ.sid : ""),
    class: {
      name: game.classes[classIndex].name || null,
      index: cAJ ? cAJ.classIndex : classIndex
    },
    mode: game.mode ? game.mode.name : null,
    map: game.map.maps[game.map.lastGen].name,
    custom: game.isCustom
  };
};