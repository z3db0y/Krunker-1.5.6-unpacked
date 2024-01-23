module.exports = function (cQj, cQk) {
  cQk = cQk.split(":")[0];
  return !!(cQj = +cQj) && (cQk === "http" || cQk === "ws" ? cQj !== 80 : cQk === "https" || cQk === "wss" ? cQj !== 443 : cQk === "ftp" ? cQj !== 21 : cQk === "gopher" ? cQj !== 70 : cQk !== "file" && cQj !== 0);
};