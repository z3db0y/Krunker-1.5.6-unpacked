export var a = function () {
  function bGj() {
    this._hasWeakSet = typeof WeakSet == "function";
    this._inner = this._hasWeakSet ? new WeakSet() : [];
  }
  bGj.prototype.memoize = function (bGj) {
    if (this._hasWeakSet) {
      return !!this._inner.has(bGj) || (this._inner.add(bGj), false);
    }
    for (var bGk = 0; bGk < this._inner.length; bGk++) {
      if (this._inner[bGk] === bGj) {
        return true;
      }
    }
    this._inner.push(bGj);
    return false;
  };
  bGj.prototype.unmemoize = function (bGj) {
    if (this._hasWeakSet) {
      this._inner.delete(bGj);
    } else {
      for (var bGk = 0; bGk < this._inner.length; bGk++) {
        if (this._inner[bGk] === bGj) {
          this._inner.splice(bGk, 1);
          break;
        }
      }
    }
  };
  return bGj;
}();