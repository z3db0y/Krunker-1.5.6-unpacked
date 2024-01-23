var bdX = require("./14.js");
module.exports.isNode = bdX !== undefined && bdX.release !== undefined && bdX.release.name.search(/node|io.js/) !== -1;
module.exports.isProd = module.exports.isNode ? !!bdX.env.IS_PROD : location.hostname !== "127.0.0.1" && location.hostname !== "localhost" && !location.hostname.startsWith("192.168.");
module.exports.enableHttps = module.exports.isProd;
module.exports.serverTickRate = 1000 / 30;
module.exports.serverSendRate = 100;
module.exports.clientSendRate = 1000 / 30;
module.exports.dltMx = Math.round(1000 / 30);
module.exports.streamUpdate = 10000;
module.exports.maxPlayers = 8;
module.exports.serverSpread = 3;
module.exports.minServerSpace = 3;
module.exports.gamesPerServer = 5;
module.exports.serverBrowserRate = 10000;
module.exports.maxPlayersTotal = module.exports.maxPlayers * module.exports.gamesPerServer + 50;
module.exports.kickTimer = 90000;
if (module.exports.isNode) {
  module.exports.matchmakerURL = module.exports.isProd ? bdX.env.VULTR_SCHEME == "krunker_prod" ? "https://matchmaker.krunker.io" : "https://matchmaker_beta.krunker.io" : "http://127.0.0.1:5050";
  module.exports.apiURL = module.exports.isProd ? bdX.env.VULTR_SCHEME == "krunker_prod" || bdX.env.VULTR_SCHEME == "krunker_social" ? "https://api.krunker.io" : "https://api_beta.krunker.io" : "http://127.0.0.1:5060";
} else {
  module.exports.matchmakerURL = module.exports.isProd ? location.hostname == "krunker.io" ? "https://matchmaker.krunker.io" : "https://matchmaker_beta.krunker.io" : "http://127.0.0.1:5050";
  module.exports.apiURL = module.exports.isProd ? location.hostname == "krunker.io" ? "https://api.krunker.io" : "https://api_beta.krunker.io" : "http://127.0.0.1:5060";
}
module.exports.needsRestart = false;
module.exports.useLooseClient = false;
module.exports.rewardTime = 21600000;
module.exports.rewardMinLvl = 5;
module.exports.compRegions = [{
  name: "EU",
  icon: "eu",
  data: [{
    name: "KRUNKEUR",
    prize: 1400,
    roster: ["VoKUS", "ronics", "AlexDoubleU", "Nitrahh"]
  }, {
    name: "UUED GUMMID",
    prize: 600,
    roster: ["kiiturii", "WasabiS", "xXNONUTTERXx", "BLNCR"]
  }, {
    name: "Nine",
    prize: 0,
    roster: ["Chupacabra", "The_Zionist", "Tatsuu", "ZR1"]
  }, {
    name: "DOOM",
    prize: 0,
    roster: ["Viiper", "Jbusom", "Tahha", "kari:D"]
  }, {
    name: "OxicPoonTang",
    prize: 0,
    roster: ["cato818", "Amuu123", "Darebydare", "Fortysevens"]
  }]
}, {
  name: "NA",
  icon: "na",
  data: [{
    name: "nV",
    prize: 1400,
    roster: ["RandomExport", "Rickabonkers", "Kouka", "TaylorFerguson"]
  }, {
    name: "BAKA",
    prize: 600,
    roster: ["4tapp", "Gxngu", "魔42", "Friendlies"]
  }, {
    name: "Krunky Boys",
    prize: 0,
    roster: ["bububoosh", "GGkns", "chazzychaz", "ev0xge0"]
  }, {
    name: "RIP Theta",
    prize: 0,
    roster: ["UB_Caboose", "Applechase", "Predixtions", "Visuall"]
  }, {
    name: "Nine NA",
    prize: 0,
    roster: ["Aoqii", "Keyown", "TristanTu", "Byto"]
  }]
}, {
  name: "OCE",
  icon: "oce",
  data: [{
    name: "Lore",
    prize: 1400,
    roster: ["Mosswi", "Agent_Chicken", "Stazza", "ShiraishiEZ"]
  }, {
    name: "Omen",
    prize: 600,
    roster: ["Equinoxian", "iiBazza", "vEternity", "Equaus"]
  }, {
    name: "Tokgang",
    prize: 0,
    roster: ["caL_Tv", "gymgoer31", "maxmillion", "peepoglad"]
  }, {
    name: "Lore v2",
    prize: 0,
    roster: ["ZaneAU", "JamemesG", "riderrr", "*Void"]
  }, {
    name: "EXLE",
    prize: 0,
    roster: ["Tatti123", "Kurocchi", "F24CTAL", "-Gaze"]
  }]
}];
module.exports.queues = [{
  id: "r1v1",
  name: "windows.ranked.mode.r1v1"
}, {
  id: "r2v2",
  name: "windows.ranked.mode.r2v2"
}, {
  id: "r4v4",
  name: "windows.ranked.mode.r4v4"
}];
module.exports.minRankedLevel = 20;
module.exports.endTimer = 25000;
module.exports.endAnim = 5000;
module.exports.thirdPZ = 14;
module.exports.thirdPX = 5;
module.exports.serverConfig = [{
  name: "Players",
  varN: "maxPlayers",
  def: 2,
  max: 10,
  maxF: 16,
  min: 1,
  step: 1
}, {
  name: "Min Players",
  varN: "minPlayers",
  def: 0,
  max: 10,
  maxF: 16,
  min: 0,
  step: 1
}, {
  name: "Lives",
  varN: "lives",
  def: 0,
  max: 10,
  min: 0,
  step: 1
}, {
  name: "Minutes",
  varN: "gameTime",
  def: 4,
  max: 60,
  min: 0,
  step: 1
}, {
  name: "Gravity",
  varN: "gravMlt",
  dontChange: true,
  def: 1,
  max: 2,
  min: 0.1,
  step: 0.1
}, {
  name: "Jump Force",
  varN: "jumpMlt",
  dontChange: true,
  def: 1,
  max: 3,
  min: 0.1,
  step: 0.1
}, {
  name: "Time Scale",
  varN: "deltaMlt",
  dontChange: true,
  def: 1,
  max: 1.5,
  min: 0.1,
  step: 0.1
}, {
  name: "Strafe Speed",
  varN: "strafeSpd",
  dontChange: true,
  def: 1.2,
  max: 2,
  min: 1,
  step: 0.1
}, {
  name: "Health Multiplier",
  varN: "healthMlt",
  dontChange: true,
  def: 1,
  max: 3,
  min: 0.1,
  step: 0.1
}, {
  name: "Weapon Impulse",
  varN: "impulseMlt",
  dontChange: true,
  def: 1,
  max: 3,
  min: 0,
  step: 0.1
}, {
  name: "Team 1 Name",
  varN: "nameTeam1",
  def: "Team 1",
  hideE: true,
  input: true
}, {
  name: "Team 2 Name",
  varN: "nameTeam2",
  def: "Team 2",
  hideE: true,
  input: true
}, {
  name: "Select Team",
  varN: "selTeam",
  def: false,
  bool: true
}, {
  name: "Spectating",
  varN: "allowSpect",
  def: true,
  bool: true
}, {
  name: "Kill Rewards",
  varN: "killRewards",
  dontChange: true,
  def: true,
  bool: true
}, {
  name: "Headshots Only",
  varN: "headshotOnly",
  dontChange: true,
  def: false,
  bool: true
}, {
  name: "Sliding",
  varN: "canSlide",
  def: true,
  bool: true
}, {
  name: "Auto Jump",
  varN: "autoJump",
  def: false,
  bool: true
}, {
  name: "3rd Person",
  varN: "thirdPerson",
  def: false,
  bool: true
}, {
  name: "Hide Nametags",
  varN: "nameTags",
  def: false,
  bool: true
}];
module.exports.prefabIDS = ["CUBE", "CRATE", "BARREL", "LADDER", "PLANE", "SPAWN_POINT", "CAMERA_POSITION", "VEHICLE", "STACK", "RAMP", "SCORE_ZONE", "BILLBOARD", "DEATH_ZONE", "PARTICLES", "OBJECTIVE", "TREE", "CONE", "CONTAINER", "GRASS", "CONTAINERR", "ACIDBARREL", "DOOR", "WINDOW", "FLAG", "POINT_GATE", "CHECK_POINT", "WEAPON_PICKUP", "TELEPORTER"];
module.exports.textureIDS = ["WALL", "DIRT", "FLOOR", "GRID", "GREY", "DEFAULT", "ROOF", "FLAG", "GRASS", "CHECK", "LINES", "BRICK", "LINK"];
module.exports.objectLimit = 3500;
module.exports.objectLimitF = 6000;
module.exports.spawnLimit = 20;
module.exports.billboardCnt = 5;
module.exports.followURLS = ["https://www.instagram.com/sidney.devries/", "https://www.instagram.com/sidney.devries/", "https://www.instagram.com/sidney.devries/", "https://www.instagram.com/sidney.devries/", "https://www.instagram.com/sidney.devries/", "https://www.instagram.com/sidney.devries/", "https://www.instagram.com/vincent.de.vries/"];
module.exports.gravity = 0.00015;
module.exports.deathY = -100;
module.exports.skyScale = 18000;
module.exports.shadowDst = 1200;
module.exports.shadowRes = 1024;
module.exports.shadowOff = 0.004;
module.exports.lightDistance = 500;
module.exports.cornerPad = 1;
module.exports.cornerScl = 2.5;
module.exports.cornerH = 7;
module.exports.wallH = 5;
module.exports.wallW = 0.8;
module.exports.crateScale = 6;
module.exports.stackScale = 6;
module.exports.barrelScale = 4;
module.exports.acidbarrelScale = module.exports.barrelScale;
module.exports.treeScale = 10;
module.exports.doorScale = 5;
module.exports.windowScale = 6;
module.exports.coneScale = 4;
module.exports.containerScale = 7;
module.exports.containerrScale = module.exports.containerScale;
module.exports.grassScale = 32;
module.exports.vehicleScale = 20;
module.exports.barrelMlt = 1;
module.exports.ladderWidth = 3.2;
module.exports.ladderScale = 0.5;
module.exports.terrainGrid = 8;
module.exports.maxTerrainS = 4000;
module.exports.otherSoundMlt = 0.55;
module.exports.maxParticles = 100;
module.exports.explosionRange = 200;
module.exports.chatMaxLength = 70;
module.exports.chatInterval = 800;
module.exports.voiceChatInterval = 2000;
module.exports.voiceChatMaxLength = 5;
module.exports.movDirs = [];
for (var bdY = 0; bdY < 8; ++bdY) {
  module.exports.movDirs.push(-Math.PI + (bdY + 1) * Math.PI / 4);
}
module.exports.interpolation = 1.1;
module.exports.stateHistory = 1000;
module.exports.syncFreq = 800;
module.exports.pingCount = 10;
module.exports.mouseSens = 0.0024;
module.exports.camChaseTrn = 0.0022;
module.exports.camChaseSpd = 0.0012;
module.exports.camChaseSen = 0.2;
module.exports.camChaseDst = 24;
module.exports.specMinD = 10;
module.exports.specMaxD = 160;
module.exports.menuCamDist = 200;
module.exports.menuCamAngle = -0.5;
module.exports.menuCamSpeed = 0.1;
module.exports.idleAnimS = 0.0015;
module.exports.animMult = 1.2;
module.exports.leanPull = 0.99;
module.exports.leanSens = 0.05;
module.exports.leanMax = 0.16;
module.exports.leanPullZ = 0.99;
module.exports.leanMltZ = 0.03;
module.exports.bobMltY = 0.024;
module.exports.bobMltZ = 0.02;
module.exports.bobPullY = 0.985;
module.exports.bobPullZ = 0.99;
module.exports.landPull = 0.994;
module.exports.landPullV = 0.985;
module.exports.landOff = 0.15;
module.exports.aimAnimMlt = 0.18;
module.exports.aimSlow = 0.55;
module.exports.aimJumpSlow = 0.85;
module.exports.stepAnim = 0.075;
module.exports.stepMlt = 0.25;
module.exports.stepPull = 0.995;
module.exports.hpSegments = 7;
module.exports.maxHealth = 100;
module.exports.passiveInc = 500;
module.exports.cameraHeight = 1.5;
module.exports.playerSpeed = 0.00042;
module.exports.slippingSpeed = 0.0003;
module.exports.ladderSpeed = 0.035;
module.exports.ladderDecel = 0.97;
module.exports.slideDecel = 0.999;
module.exports.slideTime = 350;
module.exports.terrainSlideDecel = 0.9996;
module.exports.groundDecel = 0.99;
module.exports.terrainDecel = 0.99;
module.exports.terrainSlipDecel = 0.99;
module.exports.airSpeed = 0.000047;
module.exports.airDecel = 0.9996;
module.exports.jumpVel = 0.072;
module.exports.jumpPush = 0.1;
module.exports.decelMin = 0.0001;
module.exports.climbHeight = 3;
module.exports.wpnSpin = 0.018;
module.exports.terrainSlideThreshold = 1.2;
module.exports.terrainGravityMlt = 1.85;
module.exports.playerSlideVelMlt = 1.2;
module.exports.playerTerrainSlideVelMlt = 0.4;
module.exports.playerSlippingJumpCooldown = 500;
module.exports.materialDens = {
  flesh: 0.2,
  default: 0.5
};
module.exports.nameOffset = 0.6;
module.exports.nameOffsetHat = 0.8;
module.exports.maxNameLength = 14;
module.exports.maxPassLength = 16;
module.exports.playerHeight = 11;
module.exports.chestWidth = 2.6;
module.exports.chestScale = 1.3;
module.exports.armScale = 1.3;
module.exports.legScale = 1.3;
module.exports.uArmLength = 2.7;
module.exports.armInset = -0.1;
module.exports.lArmLength = 2.7;
module.exports.headScale = 2;
module.exports.armOff = -0.8;
module.exports.legHeight = 4.2;
module.exports.playerScale = (module.exports.armScale * 2 + module.exports.chestWidth + module.exports.armInset) / 2;
module.exports.hitBoxPad = 1;
module.exports.tracerMinDst = 20;
module.exports.tracerMaxDst = 500;
module.exports.tracerChance = 1;
module.exports.crouchLean = Math.PI * -0.1;
module.exports.crouchDst = 3;
module.exports.crouchSlow = 0.3;
module.exports.crouchSpeed = 0.007;
module.exports.crouchJump = 0.25;
module.exports.crouchSpread = 0.4;
module.exports.crouchAnim = 0.0008;
module.exports.crouchAnimMlt = 0.5;
module.exports.spreadMove = 30;
module.exports.spreadFall = 35;
module.exports.spreadRecover = 0.985;
module.exports.spreadAdj = 0.00063;
module.exports.spreadMlt = 400;
module.exports.recoilMlt = 0.3;
module.exports.flagMsg = "You have the Flag";
module.exports.flagMsgE = "Enemy has your Flag";
module.exports.flagMsgRC = "Enemy has your Flag";
module.exports.flagZoneS = 24;
module.exports.flagZoneH = 36;
module.exports.flagScale = 12;
module.exports.flagOff = 6;
module.exports.flagHOff = 15;
module.exports.interactTimer = 100;
module.exports.pickupZoneX = 12;
module.exports.pickupZoneZ = 4;
module.exports.pickupZoneH = 2;
module.exports.pickupScale = 6;
module.exports.pickupOff = 1;
module.exports.maxLevel = 102;
module.exports.assistTime = 5000;
module.exports.assistScore = 25;
module.exports.assistMin = 20;
module.exports.medalAnim = 1000;
module.exports.medalDelay = 900;
module.exports.scoreStreak = 2000;
module.exports.feedTimer = 2000;
module.exports.spinTimer = 1800;
module.exports.endStats = ["sid", "name", "score", "kills", "deaths", "reward"];
module.exports.endForm = {
  reward: function (bdW) {
    if (bdW) {
      return "<span style='color:#F8C55C'>+" + bdW + "</span> KR";
    } else {
      return "NONE";
    }
  },
  time: function (bdW, bdX, bdY) {
    return bdY.timer || "DNF";
  },
  infected: function (bdW, bdX, bdY) {
    return bdY.convs;
  },
  found: function (bdW, bdX, bdY) {
    return bdY.convs;
  },
  weapon: function (bdW, bdX, bdY) {
    return bdY.killList.length;
  }
};
module.exports.hitLife = 2000;
module.exports.regenDelay = 5000;
module.exports.regenVal = 0.1;
module.exports.sprayTimer = 1000;
module.exports.sprayRange = 25;
module.exports.sprayScale = 15;
module.exports.deathDelay = 2800;
module.exports.deathFollowD = 100;
module.exports.suicides = ["uninstall life", "toaster bath", "alt f4", "not alive", "neck rope", "scooter ankle", "death.exe"];
module.exports.fov = 70;
module.exports.viewDist = 2000;
module.exports.nameVisRate = 200;
module.exports.worldUV = 60;
module.exports.ambientVal = 0.5;
module.exports.ambD = 2;
module.exports.ambMlt = 15;
module.exports.ambOff = 0.09;
module.exports.ambScale = 10;
module.exports.ambDiv = 20;
module.exports.ambSFactor = 1;
module.exports.ambBleed = 0;
module.exports.boosterSpd = 0.002;
module.exports.borderH = 1000;
module.exports.soundScapes = {
  Default: 1,
  City: 2,
  Desert: 3,
  Market: 4
};
module.exports.mapTabs = [{
  n: "Hot",
  c: 78,
  t: "recent"
}, {
  n: "New",
  c: 60,
  t: "initialdate"
}, {
  n: "Favorites",
  c: 36,
  t: "votes"
}, {
  n: "My Maps",
  c: 45,
  sendID: true,
  t: "votes"
}, {
  n: "Search",
  search: true,
  t: "votes"
}];
module.exports.modTabs = [{
  n: "Hot",
  t: "recent"
}, {
  n: "New",
  t: "initialdate"
}, {
  n: "Favorites",
  t: "votes"
}, {
  n: "My Mods",
  sendID: true,
  t: "votes"
}, {
  n: "Search",
  search: true,
  t: "votes"
}];
module.exports.saleMax = 10000000;
module.exports.saleGrace = 600000;
module.exports.marketMinLVl = 20;
module.exports.verClans = ["DEV", "FaZe", "Lore", "nV", "Oxic", "Verb", "Omen", "ロリ幼女", "VOID", "JBP", "PHIL", "TIMP", "24/7", "g59"];
module.exports.rankVar = 0.03;
module.exports.newDataInterval = 120000;
module.exports.socials = ["leaders", "profile", "maps", "tourney", "market"];
module.exports.marketQueries = {
  market: {
    btn: "Info",
    checkItem: function (bdW) {
      return !!bdW.funds;
    }
  },
  inventory: {
    btn: "List to Sell",
    checkItem: function (bdW) {
      return !bdW.funds && bdW.cnt;
    }
  },
  sales: {
    btn: "Unlist",
    checkItem: function (bdW) {
      return !!bdW.funds;
    }
  }
};
module.exports.leaderQueries = ["player_score", "player_kills", "player_wins", "player_timeplayed", "player_funds", "player_clan"];
module.exports.leaderCal = {
  player_score: function (bdX) {
    var bdY = Math.max(1, Math.floor(module.exports.rankVar * Math.sqrt(bdX)));
    return "<span class='floatR'><img src='./img/levels/" + Math.max(Math.min(module.exports.maxLevel - 1, bdY.roundToNearest(2) - 1), 0) + ".png' class='rnkIcon'>" + bdY + "</span>";
  },
  player_kills: function (bdW) {
    return bdW + "<span class='lName'> kills</span>";
  },
  player_wins: function (bdW) {
    return bdW + "<span class='lName'> wins</span>";
  },
  player_funds: function (bdW) {
    return "<span style='color:rgba(0,0,0,0.4)'>" + bdW.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") + "</span> KR";
  },
  player_timeplayed: function (bdW) {
    var bdX = bdW / 1000 / 60;
    var bdY = parseInt(bdX % 60);
    bdX /= 60;
    var bep = parseInt(bdX % 24);
    bdX /= 24;
    var beq = parseInt(bdX);
    return (beq ? beq + "d " : "") + (bep ? bep + "h " : "") + (bdY || 0) + "m ";
  }
};
module.exports.regionNames = {
  null: "Custom",
  undefined: "Custom",
  local: "Local",
  "us-nj": "New York",
  "us-il": "Chicago",
  "us-tx": "Dallas",
  "us-wa": "Seattle",
  "us-ca-la": "Los Angeles",
  "us-ga": "Atlanta",
  "nl-ams": "Amsterdam",
  "gb-lon": "London",
  "de-fra": "Frankfurt",
  "us-ca-sv": "Silicon Valley",
  "au-syd": "Sydney",
  "fr-par": "Paris",
  "jb-hnd": "Tokyo",
  "us-fl": "Miami",
  sgp: "Singapore"
};
module.exports.langNames = {
  en: "English",
  es: "Spanish",
  de: "German",
  kr: "Korean"
};
module.exports.skinColors = [10975328, 8412234, 13408638];