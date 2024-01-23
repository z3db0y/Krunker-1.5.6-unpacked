module.exports = [{
  name: "Nuke",
  kills: 25,
  activate: function (cqk, cql) {
    return !cqk.nukeTimer && (cqk.incStat("n", cql), cqk.startNuke(cql), true);
  }
}];