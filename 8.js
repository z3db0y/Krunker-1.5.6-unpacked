var bes = require("./14.js");
const bev = require("./7.js");
const bew = require("./35.js");
module.exports.keyboardMap = ["", "", "", "CANCEL", "", "", "HELP", "", "BACK_SPACE", "TAB", "", "", "CLEAR", "ENTER", "ENTER_SPECIAL", "", "SHIFT", "CONTROL", "ALT", "PAUSE", "CAPS_LOCK", "KANA", "EISU", "JUNJA", "FINAL", "HANJA", "", "ESCAPE", "CONVERT", "NONCONVERT", "ACCEPT", "MODECHANGE", "SPACE", "PAGE_UP", "PAGE_DOWN", "END", "HOME", "LEFT", "UP", "RIGHT", "DOWN", "SELECT", "PRINT", "EXECUTE", "PRINTSCREEN", "INSERT", "DELETE", "", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "COLON", "SEMICOLON", "LESS_THAN", "EQUALS", "GREATER_THAN", "QUESTION_MARK", "AT", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "OS_KEY", "", "CONTEXT_MENU", "", "SLEEP", "NUMPAD0", "NUMPAD1", "NUMPAD2", "NUMPAD3", "NUMPAD4", "NUMPAD5", "NUMPAD6", "NUMPAD7", "NUMPAD8", "NUMPAD9", "MULTIPLY", "ADD", "SEPARATOR", "SUBTRACT", "DECIMAL", "DIVIDE", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "", "", "", "", "", "", "", "", "NUM_LOCK", "SCROLL_LOCK", "WIN_OEM_FJ_JISHO", "WIN_OEM_FJ_MASSHOU", "WIN_OEM_FJ_TOUROKU", "WIN_OEM_FJ_LOYA", "WIN_OEM_FJ_ROYA", "", "", "", "", "", "", "", "", "", "CIRCUMFLEX", "EXCLAMATION", "DOUBLE_QUOTE", "HASH", "DOLLAR", "PERCENT", "AMPERSAND", "UNDERSCORE", "OPEN_PAREN", "CLOSE_PAREN", "ASTERISK", "PLUS", "PIPE", "HYPHEN_MINUS", "OPEN_CURLY_BRACKET", "CLOSE_CURLY_BRACKET", "TILDE", "", "", "", "", "VOLUME_MUTE", "VOLUME_DOWN", "VOLUME_UP", "", "", "SEMICOLON", "EQUALS", "COMMA", "MINUS", "PERIOD", "SLASH", "BACK_QUOTE", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "OPEN_BRACKET", "BACK_SLASH", "CLOSE_BRACKET", "QUOTE", "", "META", "ALTGR", "", "WIN_ICO_HELP", "WIN_ICO_00", "", "WIN_ICO_CLEAR", "", "", "WIN_OEM_RESET", "WIN_OEM_JUMP", "WIN_OEM_PA1", "WIN_OEM_PA2", "WIN_OEM_PA3", "WIN_OEM_WSCTRL", "WIN_OEM_CUSEL", "WIN_OEM_ATTN", "WIN_OEM_FINISH", "WIN_OEM_COPY", "WIN_OEM_AUTO", "WIN_OEM_ENLW", "WIN_OEM_BACKTAB", "ATTN", "CRSEL", "EXSEL", "EREOF", "PLAY", "ZOOM", "", "PA1", "WIN_OEM_CLEAR", ""];
module.exports.getB64Size = function () {};
Number.prototype.round = function (ber) {
  return +this.toFixed(ber);
};
String.prototype.escape = function () {
  return (this + "").replace(/[\\"']/g, "\\$&").replace(/\u0000/g, "\\0");
};
Number.prototype.roundToNearest = function (ber) {
  if (this > 0) {
    return Math.ceil(this / ber) * ber;
  } else if (this < 0) {
    return Math.floor(this / ber) * ber;
  } else {
    return this;
  }
};
module.exports.capFirst = function (ber) {
  return ber.charAt(0).toUpperCase() + ber.slice(1);
};
module.exports.isURL = function (ber) {
  try {
    return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%@_.~+&:]*)*(\?[;&a-z\d%@_.,~+&:=-]*)?(\#[-a-z\d_]*)?$/i.test(ber);
  } catch (beB) {}
  return false;
};
module.exports.arrayAverage = function (ber) {
  for (var bes = 0, bet = 0; bet < ber.length; bet++) {
    bes += ber[bet];
  }
  return bes / ber.length;
};
module.exports.countInArray = function (ber, bes) {
  for (var bet = 0, bev = 0; bev < ber.length; bev++) {
    if (ber[bev] === bes) {
      bet++;
    }
  }
  return bet;
};
module.exports.formatNum = function (ber) {
  var bes = Math.floor(Math.log(Math.abs(ber)) / Math.log(1000));
  var bet = "kmb"[bes - 1];
  if (bet) {
    return (ber / Math.pow(1000, bes)).toFixed(1) + bet;
  } else {
    return "" + ber;
  }
};
module.exports.randInt = function (ber, bes) {
  return Math.floor(Math.random() * (bes - ber + 1)) + ber;
};
module.exports.randFloat = function (ber, bes) {
  return Math.random() * (bes - ber) + ber;
};
module.exports.getRandom = function (bes) {
  return bes[module.exports.randInt(0, bes.length - 1)];
};
module.exports.getDistance = function (ber, bes, bet, bev) {
  return Math.sqrt((bet -= ber) * bet + (bev -= bes) * bev);
};
module.exports.getDistance3D = function (ber, bes, bet, bev, bew, bf0) {
  var bf1 = ber - bev;
  var bf2 = bes - bew;
  var bf3 = bet - bf0;
  return Math.sqrt(bf1 * bf1 + bf2 * bf2 + bf3 * bf3);
};
module.exports.getAnglesSSS = function (ber, bes, bet) {
  var bev = Math.acos((bes * bes + bet * bet - ber * ber) / (bes * 2 * bet));
  var bew = Math.acos((bet * bet + ber * ber - bes * bes) / (bet * 2 * ber));
  var bf9 = Math.PI - bev - bew;
  return [-bev - Math.PI / 2, bew, bf9];
};
module.exports.getXDir = function (bes, bet, bev, bew, bfe, bff) {
  var bfg = Math.abs(bet - bfe);
  var bfh = module.exports.getDistance3D(bes, bet, bev, bew, bfe, bff);
  return Math.asin(bfg / bfh) * (bet > bfe ? -1 : 1);
};
module.exports.getAngleDst = function (ber, bes) {
  return Math.atan2(Math.sin(bes - ber), Math.cos(ber - bes));
};
module.exports.getAngleDist2 = function (ber, bes) {
  var bet = Math.abs(bes - ber) % (Math.PI * 2);
  if (bet > Math.PI) {
    return Math.PI * 2 - bet;
  } else {
    return bet;
  }
};
module.exports.toRad = function (ber) {
  return ber * (Math.PI / 180);
};
module.exports.getDirection = function (ber, bes, bet, bev) {
  return Math.atan2(bes - bev, ber - bet);
};
module.exports.lerp = function (ber, bes, bet) {
  return ber + (bes - ber) * bet;
};
module.exports.orderByScore = function (ber, bes) {
  return bes.score - ber.score;
};
module.exports.orderByKills = function (ber, bes) {
  return bes.kills - ber.kills;
};
module.exports.orderByDst = function (ber, bes) {
  return ber.dst - bes.dst;
};
module.exports.orderByNum = function (ber, bes) {
  return ber - bes;
};
module.exports.capFirst = function (ber) {
  return ber.charAt(0).toUpperCase() + ber.slice(1);
};
module.exports.truncateText = function (ber, bes) {
  if (ber.length > bes) {
    return ber.substring(0, bes) + "...";
  } else {
    return ber;
  }
};
module.exports.cleanseString = function (ber) {
  if (ber) {
    return ber.replace(/['"]+/g, "");
  } else {
    return ber;
  }
};
module.exports.randomString = function (ber) {
  for (var bes = "", bet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", bev = 0; bev < ber; bev++) {
    bes += bet.charAt(Math.floor(Math.random() * bet.length));
  }
  return bes;
};
module.exports.formatNumCash = function (ber) {
  return parseFloat(Math.round(ber * 100) / 100).toFixed(2);
};
module.exports.getKeyName = function (bes) {
  if (bes > 10000) {
    return "MOUSE " + (bes - 10000);
  } else {
    return module.exports.keyboardMap[bes];
  }
};
var bfN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
module.exports.getDate = function (ber) {
  if (!ber) {
    return "None";
  }
  ber = ber.split(/[-A-Z :\.]/i);
  var bes = new Date(ber[0], --ber[1], ber[2], ber[3], ber[4], ber[5]);
  var bet = new Date(bes.getTime());
  return bet.getDate() + " " + bfN[bet.getMonth()] + " " + bet.getFullYear();
};
module.exports.getTime = function (ber, bes) {
  if (ber == "inf") {
    return "Infinite";
  }
  var bet = parseInt(ber % 1000 / 100);
  var bev = parseInt(ber / 1000 % 60);
  var bew = parseInt(ber / 60000 % 60);
  return (bew = bew < 10 ? "0" + bew : bew) + ":" + (bev = bev < 10 ? "0" + bev : bev) + (bes ? "." + bet : "");
};
module.exports.commaFormatNum = function (ber) {
  return ber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
module.exports.getReadableTime = function (ber, bes) {
  var bet = Math.floor(ber / 1000);
  var bev = Math.floor(bet / 60);
  bet %= 60;
  var bew = Math.floor(bev / 60);
  bev %= 60;
  var bfN = Math.floor(bew / 24);
  return (bfN ? bfN + "d " : "") + ((bew %= 24) ? bew + "h " : "") + (bev || 0) + "m " + (bes ? bet + "s" : "");
};
module.exports.getTimeH = function (ber) {
  parseInt(ber % 1000 / 100);
  var bes = Math.floor(ber / 1000 % 60);
  var bet = Math.floor(ber / 60000 % 60);
  var bev = Math.floor(ber / 3600000 % 24);
  return (bev = bev < 10 ? "0" + bev : bev) + ":" + (bet = bet < 10 ? "0" + bet : bet) + ":" + (bes = bes < 10 ? "0" + bes : bes);
};
module.exports.scrambleS = function (ber) {
  if (ber && ber.replace) {
    return ber.replace(/.(.)?/g, "$1") + ("d" + ber).replace(/.(.)?/g, "$1");
  } else {
    return ber;
  }
};
module.exports.sanitizeStr = function (ber) {
  if (ber && ber.replace) {
    return ber.replace(/<|>/g, "").replace(/[^\x00-\x7F]/g, "");
  } else {
    return ber;
  }
};
module.exports.fixTo = function (ber, bes) {
  return parseFloat(ber.toFixed(bes));
};
module.exports.limit = function (ber, bes) {
  if (ber < -bes) {
    return -bes;
  } else if (ber > bes) {
    return bes;
  } else {
    return ber;
  }
};
module.exports.limitMM = function (ber, bes, bet) {
  if (ber < bes) {
    return bes;
  } else if (ber > bet) {
    return bet;
  } else {
    return ber;
  }
};
module.exports.cropVal = function (ber, bes) {
  if (ber <= bes && ber >= -bes) {
    return 0;
  } else {
    return ber;
  }
};
module.exports.isNumber = function (ber) {
  return ber != null && typeof ber == "number" && !isNaN(ber) && isFinite(ber);
};
module.exports.arrayInts = function (bes) {
  for (var bet = 0; bet < bes.length; ++bet) {
    if (!module.exports.isNumber(bes[bet])) {
      return false;
    }
  }
  return true;
};
module.exports.isArray = function (ber) {
  return !!ber && ber.constructor === Array;
};
module.exports.isString = function (ber) {
  return ber && typeof ber == "string";
};
module.exports.emptyString = function (ber) {
  return !ber || ber.length === 0 || /^\s*$/.test(ber) || !ber.trim();
};
module.exports.compareString = function (ber, bes) {
  return ber.toLowerCase().indexOf(bes.toLowerCase()) >= 0 || bes.toLowerCase().indexOf(ber.toLowerCase()) >= 0;
};
module.exports.lineInRect = function (ber, bes, bet, bev, bew, bfN, bgw, bgx, bgy, bgz, bgA, bgB) {
  var bgC = (bgw - ber) * bev;
  var bgD = (bgz - ber) * bev;
  var bgE = (bgy - bet) * bfN;
  var bgF = (bgB - bet) * bfN;
  var bgG = (bgx - bes) * bew;
  var bgH = (bgA - bes) * bew;
  var bgI = Math.max(Math.max(Math.min(bgC, bgD), Math.min(bgE, bgF)), Math.min(bgG, bgH));
  var bgJ = Math.min(Math.min(Math.max(bgC, bgD), Math.max(bgE, bgF)), Math.max(bgG, bgH));
  return bgJ >= 0 && bgI <= bgJ && bgI;
};
module.exports.pointInBox3D = function (ber, bes, bet, bev, bew) {
  bew = bew || 0;
  return ber >= bev.x - bev.width - bew && ber <= bev.x + bev.width + bew && bes >= bev.y - bev.height - bew && bes <= bev.y + bev.height + bew && bet >= bev.z - bev.length - bew && bet <= bev.z + bev.length + bew;
};
module.exports.similar = function (ber, bes, bet) {
  bet = bet || 0;
  return Math.abs(ber - bes) <= bet;
};
module.exports.pointInBox = function (ber, bes, bet, bev, bew, bfN, bgY) {
  if (bgY) {
    return ber >= bet && ber <= bew && bes >= bev && bes <= bfN;
  } else {
    return ber > bet && ber < bew && bes > bev && bes < bfN;
  }
};
module.exports.sharePos = function (ber, bes, bet) {
  bet = bet || 0;
  return Math.abs(ber.x - bes.x) <= bet && Math.abs(ber.y - bes.y) <= bet && Math.abs(ber.z - bes.z) <= bet && Math.abs(ber.d - bes.d) <= bet;
};
module.exports.cdv = {
  x: "width",
  y: "height",
  z: "length"
};
module.exports.boxIntersection = function (bes, bet, bev, bew, bfN) {
  var bh7 = module.exports.cdv[bev];
  var bh8 = module.exports.cdv[bew];
  var bh9 = bes[bev] - bes[bh7] - 0.1;
  var bha = bet[bev] - bet[bh7] - 0.1;
  var bhb = bes[bev] + bes[bh7] + 0.1;
  var bhc = bet[bev] + bet[bh7] + 0.1;
  var bhd = bes[bew] - bes[bh8] - 0.1;
  var bhe = bet[bew] - bet[bh8] - 0.1;
  var bhf = bes[bew] + bes[bh8] + 0.1;
  var bhg = bet[bew] + bet[bh8] + 0.1;
  var bhh = Math.max(bh9, bha);
  var bhi = Math.min(bhb, bhc);
  if (bhi >= bhh) {
    var bhj = Math.max(bhd, bhe);
    var bhk = Math.min(bhf, bhg);
    if (bhk >= bhj) {
      for (var bhl = [{
          [bev]: bhh,
          [bew]: bhj,
          d: bfN[0]
        }, {
          [bev]: bhi,
          [bew]: bhk,
          d: bfN[1]
        }, {
          [bev]: bhh,
          [bew]: bhk,
          d: bfN[2]
        }, {
          [bev]: bhi,
          [bew]: bhj,
          d: bfN[3]
        }], bhm = bhl.length - 1; bhm >= 0; --bhm) {
        if (bhl[bhm][bev] == bhb && bhl[bhm][bev] == bhc || bhl[bhm][bev] == bh9 && bhl[bhm][bev] == bha || bhl[bhm][bew] == bhf && bhl[bhm][bew] == bhg || bhl[bhm][bew] == bhd && bhl[bhm][bew] == bhe || module.exports.pointInBox(bhl[bhm][bev], bhl[bhm][bew], bh9, bhd, bhb, bhf) || module.exports.pointInBox(bhl[bhm][bev], bhl[bhm][bew], bha, bhe, bhc, bhg)) {
          bhl[bhm].dontUse = true;
        }
      }
      return bhl;
    }
  }
  return null;
};
module.exports.boxCornerIntersection = function (bes, bet, bev, bew) {
  for (var bfN = module.exports.cdv[bev], bhs = module.exports.cdv[bew], bht = bes[bev] - bes[bfN], bhu = bet[bev] - bet[bfN], bhv = bes[bev] + bes[bfN], bhw = bet[bev] + bet[bfN], bhx = bes[bew] - bes[bhs], bhy = bet[bew] - bet[bhs], bhz = bes[bew] + bes[bhs], bhA = bet[bew] + bet[bhs], bhB = [{
      [bev]: bht,
      [bew]: bhx,
      d: Math.PI / 2
    }, {
      [bev]: bht,
      [bew]: bhz,
      d: Math.PI
    }, {
      [bev]: bhv,
      [bew]: bhx,
      d: 0
    }, {
      [bev]: bhv,
      [bew]: bhz,
      d: -Math.PI / 2
    }], bhC = bhB.length - 1; bhC >= 0; --bhC) {
    bhB[bhC].i = bhC;
    if (!module.exports.pointInBox(bhB[bhC][bev], bhB[bhC][bew], bhu, bhy, bhw, bhA, true)) {
      bhB.splice(bhC, 1);
    }
  }
  if (bhB.length) {
    return bhB;
  } else {
    return null;
  }
};
module.exports.getIntersection = function (bes, bet, bev) {
  var bew = module.exports.cdv[bev];
  var bfN = bes[bev] - bes[bew];
  var bhI = bet[bev] - bet[bew];
  var bhJ = bes[bev] + bes[bew];
  var bhK = bet[bev] + bet[bew];
  var bhL = Math.max(bfN, bhI);
  var bhM = Math.min(bhJ, bhK);
  if (bhM >= bhL) {
    var bhN = (bhM - bhL) / 2;
    return {
      [bev]: bhL + bhN,
      [bew]: bhN
    };
  }
  return null;
};
module.exports.limitRectVal = function (bes, bet, bev) {
  var bew = module.exports.cdv[bev];
  if (bes[bev] - bes[bew] < bet[bev] - bet[bew]) {
    var bfN = (bet[bev] - bet[bew] - (bes[bev] - bes[bew])) / 2;
    bes[bew] -= bfN;
    bes[bev] += bfN;
  }
  if (bes[bev] + bes[bew] > bet[bev] + bet[bew]) {
    bfN = (bes[bev] + bes[bew] - (bet[bev] + bet[bew])) / 2;
    bes[bew] -= bfN;
    bes[bev] -= bfN;
  }
};
module.exports.getMaxRect = function (bes, bet, bev) {
  for (var bew, bfN, bhY, bhZ, bi0 = module.exports.cdv[bet], bi1 = module.exports.cdv[bev], bi2 = 0; bi2 < bes.length; ++bi2) {
    bew = bew == null ? bes[bi2][bet] - bes[bi2][bi0] : Math.min(bes[bi2][bet] - bes[bi2][bi0], bew);
    bhY = bhY == null ? bes[bi2][bet] + bes[bi2][bi0] : Math.max(bes[bi2][bet] + bes[bi2][bi0], bhY);
    bfN = bfN == null ? bes[bi2][bev] - bes[bi2][bi1] : Math.min(bes[bi2][bev] - bes[bi2][bi1], bfN);
    bhZ = bhZ == null ? bes[bi2][bev] + bes[bi2][bi1] : Math.max(bes[bi2][bev] + bes[bi2][bi1], bhZ);
  }
  return {
    [bet]: (bew + bhY) / 2,
    [bev]: (bfN + bhZ) / 2,
    [bi0]: Math.abs(bhY - bew) / 2,
    [bi1]: Math.abs(bhZ - bfN) / 2
  };
};
module.exports.limitRect = function (bes, bet, bev, bew, bfN, bi8, bi9, bia) {
  var bib = module.exports.getMaxRect(bi8, bi9, bia);
  var bic = module.exports.cdv[bi9];
  var bid = module.exports.cdv[bia];
  var bie = {
    [bi9]: bes,
    [bia]: bet,
    [bic]: bev,
    [bid]: bew
  };
  module.exports.limitRectVal(bie, bib, bi9);
  module.exports.limitRectVal(bie, bib, bia);
  if (bfN == 0 || bfN == Math.PI) {
    var bif = bie[bic];
    bie[bic] = bie[bid];
    bie[bid] = bif;
  }
  return bie;
};
module.exports.progressOnLine = function (ber, bes, bet, bev, bew, bfN) {
  var bim = bet - ber;
  var bin = bev - bes;
  var bio = Math.sqrt(bim * bim + bin * bin);
  return ((bim /= bio) * (bew - ber) + (bin /= bio) * (bfN - bes)) / Math.sqrt(Math.pow(bet - ber, 2) + Math.pow(bev - bes, 2));
};
module.exports.generateSID = function (ber) {
  for (var bes = 0, bet = true; bet;) {
    bet = false;
    bes++;
    for (var bev = 0; bev < ber.length; ++bev) {
      if (ber[bev].sid == bes) {
        bet = true;
        break;
      }
    }
  }
  return bes;
};
module.exports.levelIconId = function (ber) {
  return Math.max(Math.min(bev.maxLevel - 1, ber.roundToNearest(2) - 1), 0);
};
module.exports.copyToClipboard = function (ber) {
  const bes = document.createElement("textarea");
  bes.value = ber;
  bes.setAttribute("readonly", "");
  bes.style.position = "absolute";
  bes.style.left = "-9999px";
  document.body.appendChild(bes);
  const bet = document.getSelection().rangeCount > 0 && document.getSelection().getRangeAt(0);
  bes.select();
  document.execCommand("copy");
  document.body.removeChild(bes);
  if (bet) {
    document.getSelection().removeAllRanges();
    document.getSelection().addRange(bet);
  }
};
function bix(ber, bes) {
  return ber.concat(bes);
}
Array.prototype.flatMap = function (ber) {
  return function (ber, bes) {
    return bes.map(ber).reduce(bix, []);
  }(ber, this);
};
var biD = require("./40.js");
module.exports.encodepack = function (bes, bet) {
  let bev = biD.encode(bes);
  let bew = new Uint8Array(bev.length + 2);
  bew.set(module.exports.KqNH(bet), bew.length - 2);
  bew.set(bev, 0);
  return bew;
};
module.exports.decodepack = function (bes) {
  bes = new Uint8Array(bes);
  let bet = module.exports.rSfVyz(bes[bes.length - 2], bes[bes.length - 1]);
  let bev = bes.slice(0, bes.length - 2);
  return [biD.decode(bev), bet];
};
module.exports.inKsanFoFWn = function (ber, bes) {
  return ber + bes & 255;
};
module.exports.KqNH = function (ber) {
  return [ber >> 4 & 15, ber & 15];
};
module.exports.rSfVyz = function (ber, bes) {
  return (ber << 4) + bes;
};
module.exports.restartIfNeeded = function (ber) {
  if (bev.needsRestart) {
    for (var bet in ber.sockets) {
      var bew = ber.sockets[bet];
      bew.send("error", "GAME UPDATING");
      bew.close();
    }
    setTimeout(function () {
      bes.exit();
    }, 1000);
  }
};
module.exports.picSize = /userscript/;
module.exports.picSize2 = /game\.([^\.]+)\.js/;
module.exports.thumbnailSize = function (ber) {
  return parseInt(ber.replace(/=/g, "").length * 0.75) / 1000;
};
module.exports.hexToRGB = ber => ber.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (ber, bes, bet, bev) => "#" + bes + bes + bet + bet + bev + bev).substring(1).match(/.{2}/g).map(ber => parseInt(ber, 16));
module.exports.versionifyUrl = function (ber) {
  return ber + "?build=" + bew;
};
module.exports.getPreview = function (bes, bet) {
  return module.exports.versionifyUrl("./textures/previews/" + (bes.type && bes.type < 3 ? "cosmetics/" + bes.type + "_" + bes.id + (bes.tex ? "_" + bes.tex : "") : bet.types[bes.type || 0] + (bes.type && bes.type == 3 ? bes.id + (bes.tex ? "_" + bes.tex : "") : (bes.weapon || 0) + "_" + (bes.pat == null ? bes.tex ? bes.tex : bes.id : "c" + bes.pat))) + ".png");
};