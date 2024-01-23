require("./8.js");
module.exports = function () {
  this.locale = "en";
  this.supported = ["en", "es", "de", "kr"];
  this.translations = {};
  for (var cqE = 0; cqE < this.supported.length; cqE++) {
    this.translations[this.supported[cqE]] = require("./80.js")("./" + this.supported[cqE] + ".js");
  }
  this.saveLocale = function () {
    localStorage.setItem("krk_lang", this.locale || "en");
  };
  this.setLocale = function (cqE) {
    if (this.supported.indexOf(cqE) > -1) {
      this.locale = cqE;
    }
    this.saveLocale();
  };
  this.setLocaleFromStorage = function () {
    if (typeof Storage != "undefined") {
      this.setLocale(localStorage.getItem("krk_lang"));
    }
  };
  this.setLocaleFromStorage();
  this.get = function (cqE) {
    let cqF = this.translations[this.locale][cqE] || this.translations.en[cqE] || "UNLOCALIZED STRING";
    for (var cqG = 1; cqG < arguments.length; cqG++) {
      cqF = cqF.replace("{" + (cqG - 1) + "}", arguments[cqG]);
    }
    return cqF;
  };
};