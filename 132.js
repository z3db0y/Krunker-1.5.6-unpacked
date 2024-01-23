const cUd = require("./133.js");
const cUe = require("./7.js").apiURL;
const cUf = {
  listMaps(cUa, cUb, cUc) {
    cUd.get(cUe + "/maps", {
      params: {
        index: cUa,
        accountId: cUb
      }
    }).then(cUa => {
      cUc(null, cUa.data);
    }).catch(cUa => {
      cUc(cUa, cUa.response && cUa.response.data);
    });
  },
  listMods(cUa, cUb) {
    cUd.get(cUe + "/mods", {
      params: {
        accountId: cUa
      }
    }).then(cUa => {
      cUb(null, cUa.data);
    }).catch(cUa => {
      cUb(cUa, cUa.response && cUa.response.data);
    });
  },
  searchMap(cUa, cUb) {
    cUd.get(cUe + "/search", {
      params: {
        type: "map",
        val: cUa
      }
    }).then(cUa => {
      cUb(null, cUa.data);
    }).catch(cUa => {
      cUb(cUa, cUa.response && cUa.response.data);
    });
  },
  getMapPreset(cUa, cUb) {
    cUd.get(cUe + "/config", {
      params: {
        mn: cUa
      }
    }).then(cUc => {
      var cUd = cUc.data || {};
      cUb(cUa, cUd.da);
    }).catch(() => {
      cUb(cUa, null);
    });
  },
  searchMod(cUa, cUb) {
    cUd.get(cUe + "/search", {
      params: {
        type: "mod",
        val: cUa
      }
    }).then(cUa => {
      cUb(null, cUa.data);
    }).catch(cUa => {
      cUb(cUa, cUa.response && cUa.response.data);
    });
  }
};
module.exports = cUf;