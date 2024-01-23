const cZO = require("./154.js").words;
const cZP = require("./155.js").array;
module.exports = class {
  constructor(cZL = {}) {
    Object.assign(this, {
      list: cZL.emptyList && [] || Array.prototype.concat.apply(cZO, [cZP, cZL.list || []]),
      exclude: cZL.exclude || [],
      placeHolder: cZL.placeHolder || "*",
      regex: cZL.regex || /[^a-zA-Z0-9|\$|\@]|\^/g,
      replaceRegex: cZL.replaceRegex || /\w/g
    });
  }
  isProfane(cZL) {
    return this.list.filter(cZM => {
      const cZN = new RegExp("\\b" + cZM.replace(/(\W)/g, "\\$1") + "\\b", "gi");
      return !this.exclude.includes(cZM.toLowerCase()) && cZN.test(cZL);
    }).length > 0 || false;
  }
  replaceWord(cZL) {
    return cZL.replace(this.regex, "").replace(this.replaceRegex, this.placeHolder);
  }
  clean(cZL) {
    return cZL.split(/\b/).map(cZL => this.isProfane(cZL) ? this.replaceWord(cZL) : cZL).join("");
  }
  addWords() {
    let cZL = Array.from(arguments);
    this.list.push(...cZL);
    cZL.map(cZL => cZL.toLowerCase()).forEach(cZL => {
      if (this.exclude.includes(cZL)) {
        this.exclude.splice(this.exclude.indexOf(cZL), 1);
      }
    });
  }
  removeWords() {
    this.exclude.push(...Array.from(arguments).map(cZL => cZL.toLowerCase()));
  }
};