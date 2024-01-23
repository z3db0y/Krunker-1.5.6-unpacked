var cTz = require("./98.js");
var cTA = module.exports;
cTA.active = true;
cTA.menu2 = "rcY";
var cTB = true;
cTA.toggleMenu = function (cTw) {
  menuHolder.style.display = cTw ? "block" : "none";
  speakerDisplay.style.display = cTw ? "none" : "block";
  chatHolder.style.bottom = (cTw ? 20 : 140) + "px";
  voiceDisplay.style.bottom = (cTw ? 18 : 135) + "px";
  cTA.toggleMenuHider(cTw);
  if (cTw) {
    endUI.style.display = "none";
    instructionHolder.style.display = "block";
    if (windowHolder.style.display != "block") {
      baseLinks.style.display = "block";
    }
  }
  cTA.active = true;
};
cTA.hideUI = function () {
  cTA.toggleMenu(false);
  inGameUI.style.display = "none";
  spectateUI.style.display = "none";
  aimRecticle.style.display = "none";
  instructionHolder.style.display = "none";
  baseLinks.style.display = "none";
  chatHolder.style.bottom = "20px";
  voiceDisplay.style.bottom = "18px";
  speakerDisplay.style.right = "20px";
  purchaseHolder.style.display = "none";
  consentBlock.style.display = "none";
  cTA.active = false;
};
cTA.hideDiscon = function () {
  chatHolder.style.display = "none";
  voiceDisplay.style.display = "none";
  speakerDisplay.style.display = "none";
  purchaseHolder.style.display = "none";
};
cTA.showEndScreen = function () {
  endTable.style.display = "none";
  voteHolder.style.display = "none";
  endUI.style.display = null;
  cTA.hideUI();
};
cTA.toggleWindow = function (cTw, cTx) {
  windowHolder.style.display = cTw ? "block" : "none";
  baseLinks.style.display = cTw ? "none" : "block";
  instructions.innerHTML = cTw ? "" : cTx ? "PRESS START" : "CLICK TO PLAY";
};
cTA.toggleMenuHider = function (cTw) {
  menuHider.style.display = cTw ? "block" : "none";
  uiBase.classList.toggle("onMenu", cTw);
  gameNameHolder.style.display = cTw ? null : "none";
  spectButton.style.display = cTB && cTw ? null : "none";
  if (cTw) {
    spinUI.style.display = "none";
  }
};
cTA.setShowSpect = function (cTw) {
  cTB = cTw;
  spectButton.style.display = cTw ? null : "none";
};
cTA.setShowSelTeam = function (cTw) {
  teamSelector.style.display = cTw ? "block" : "none";
};
cTA.showError = function (cTw) {
  cTA.toggleMenu(true);
  instructions.innerHTML = cTw;
};
cTA.toggleGameUI = function (cTw) {
  var cTx = cTw && !window.spectating;
  spectateUI.style.display = window.spectating && cTw ? "block" : "none";
  gameMessage.style.display = cTx ? "block" : "none";
  topLeftHolder.style.display = cTx ? "block" : "none";
  topRight.style.display = cTw ? "block" : "none";
  reloadMsg.style.display = cTx ? "block" : "none";
  healthHolder.style.display = cTx ? "block" : "none";
  weaponDisplay.style.display = cTx ? "block" : "none";
  bottomRight.style.display = cTx ? "block" : "none";
  killCardHolder.style.display = cTw ? "none" : "block";
  speakerDisplay.style.right = (cTw ? 380 : 20) + "px";
  chatHolder.style.bottom = (cTx ? 140 : 20) + "px";
  voiceDisplay.style.bottom = (cTx ? 135 : 18) + "px";
};
cTA.toggleControlUI = function (cTw) {
  if (window.loading) {
    cTw = false;
  }
  spectateUI.style.display = window.spectating && cTw && !cTA.hideGameUI ? "block" : "none";
  inGameUI.style.display = cTw && cTA.active && !cTA.hideGameUI ? "block" : "none";
  aimRecticle.style.display = cTw && cTA.active ? "block" : "none";
  instructionHolder.style.display = !cTw && cTA.active ? "block" : "none";
  aHolder.style.display = cTw ? "none" : "block";
  toggleAd(!cTw);
  infoHolder.style.display = cTw ? "none" : null;
  chatHolder.style.bottom = (cTw && !window.spectating && healthHolder.style.display == "block" ? 140 : 20) + "px";
  voiceDisplay.style.bottom = (cTw && !window.spectating && healthHolder.style.display == "block" ? 135 : 18) + "px";
  speakerDisplay.style.display = cTw && cTA.active ? "block" : "none";
  if (endUI.style.display) {
    menuHolder.style.display = cTw ? "none" : "block";
    cTA.toggleMenuHider(!cTw);
  }
};
cTA.VjQPAykSBh = function (cTw, cTx) {
  cTz.crosshairOpacity = cTx;
  cTz.crosshairScale = cTw;
};