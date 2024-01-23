module.exports.easing = {
  linear: function (c2n) {
    return c2n;
  },
  easeInQuad: function (c2n) {
    return c2n * c2n;
  },
  easeOutQuad: function (c2n) {
    return c2n * (2 - c2n);
  },
  easeInOutQuad: function (c2n) {
    if (c2n < 0.5) {
      return c2n * 2 * c2n;
    } else {
      return (4 - c2n * 2) * c2n - 1;
    }
  },
  easeInCubic: function (c2n) {
    return c2n * c2n * c2n;
  },
  easeOutCubic: function (c2n) {
    return --c2n * c2n * c2n + 1;
  },
  easeInOutCubic: function (c2n) {
    if (c2n < 0.5) {
      return c2n * 4 * c2n * c2n;
    } else {
      return (c2n - 1) * (c2n * 2 - 2) * (c2n * 2 - 2) + 1;
    }
  },
  easeInQuart: function (c2n) {
    return c2n * c2n * c2n * c2n;
  },
  easeOutQuart: function (c2n) {
    return 1 - --c2n * c2n * c2n * c2n;
  },
  easeInOutQuart: function (c2n) {
    if (c2n < 0.5) {
      return c2n * 8 * c2n * c2n * c2n;
    } else {
      return 1 - --c2n * 8 * c2n * c2n * c2n;
    }
  },
  easeInQuint: function (c2n) {
    return c2n * c2n * c2n * c2n * c2n;
  },
  easeOutQuint: function (c2n) {
    return 1 + --c2n * c2n * c2n * c2n * c2n;
  },
  easeInOutQuint: function (c2n) {
    if (c2n < 0.5) {
      return c2n * 16 * c2n * c2n * c2n * c2n;
    } else {
      return 1 + --c2n * 16 * c2n * c2n * c2n * c2n;
    }
  }
};