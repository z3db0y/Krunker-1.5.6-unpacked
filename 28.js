for (var bzf = exports.uint8 = Array(256), bzg = 0; bzg <= 255; bzg++) {
  bzf[bzg] = bzh(bzg);
}
function bzh(bzd) {
  return function (bze) {
    var bzf = bze.reserve(1);
    bze.buffer[bzf] = bzd;
  };
}