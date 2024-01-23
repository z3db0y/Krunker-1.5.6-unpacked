exports.read = function (bn9, bna, bnd, bne, bnf) {
  var bng;
  var bnh;
  var bni = bnf * 8 - bne - 1;
  var bnj = (1 << bni) - 1;
  var bnk = bnj >> 1;
  var bnl = -7;
  var bnm = bnd ? bnf - 1 : 0;
  var bnn = bnd ? -1 : 1;
  var bno = bn9[bna + bnm];
  bnm += bnn;
  bng = bno & (1 << -bnl) - 1;
  bno >>= -bnl;
  bnl += bni;
  for (; bnl > 0; bnl -= 8) {
    bng = bng * 256 + bn9[bna + bnm];
    bnm += bnn;
  }
  bnh = bng & (1 << -bnl) - 1;
  bng >>= -bnl;
  bnl += bne;
  for (; bnl > 0; bnl -= 8) {
    bnh = bnh * 256 + bn9[bna + bnm];
    bnm += bnn;
  }
  if (bng === 0) {
    bng = 1 - bnk;
  } else {
    if (bng === bnj) {
      if (bnh) {
        return NaN;
      } else {
        return (bno ? -1 : 1) * Infinity;
      }
    }
    bnh += Math.pow(2, bne);
    bng -= bnk;
  }
  return (bno ? -1 : 1) * bnh * Math.pow(2, bng - bne);
};
exports.write = function (bn9, bna, bnr, bns, bnt, bnu) {
  var bnv;
  var bnw;
  var bnx;
  var bny = bnu * 8 - bnt - 1;
  var bnz = (1 << bny) - 1;
  var bnA = bnz >> 1;
  var bnB = bnt === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
  var bnC = bns ? 0 : bnu - 1;
  var bnD = bns ? 1 : -1;
  var bnE = bna < 0 || bna === 0 && 1 / bna < 0 ? 1 : 0;
  bna = Math.abs(bna);
  if (isNaN(bna) || bna === Infinity) {
    bnw = isNaN(bna) ? 1 : 0;
    bnv = bnz;
  } else {
    bnv = Math.floor(Math.log(bna) / Math.LN2);
    if (bna * (bnx = Math.pow(2, -bnv)) < 1) {
      bnv--;
      bnx *= 2;
    }
    if ((bna += bnv + bnA >= 1 ? bnB / bnx : bnB * Math.pow(2, 1 - bnA)) * bnx >= 2) {
      bnv++;
      bnx /= 2;
    }
    if (bnv + bnA >= bnz) {
      bnw = 0;
      bnv = bnz;
    } else if (bnv + bnA >= 1) {
      bnw = (bna * bnx - 1) * Math.pow(2, bnt);
      bnv += bnA;
    } else {
      bnw = bna * Math.pow(2, bnA - 1) * Math.pow(2, bnt);
      bnv = 0;
    }
  }
  for (; bnt >= 8; bnt -= 8) {
    bn9[bnr + bnC] = bnw & 255;
    bnC += bnD;
    bnw /= 256;
  }
  bnv = bnv << bnt | bnw;
  bny += bnt;
  for (; bny > 0; bny -= 8) {
    bn9[bnr + bnC] = bnv & 255;
    bnC += bnD;
    bnv /= 256;
  }
  bn9[bnr + bnC - bnD] |= bnE * 128;
};