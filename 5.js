export function c(bcN) {
  switch (Object.prototype.toString.call(bcN)) {
    case "[object Error]":
    case "[object Exception]":
    case "[object DOMException]":
      return true;
    default:
      return bcN instanceof Error;
  }
}
export function d(bcN) {
  return Object.prototype.toString.call(bcN) === "[object ErrorEvent]";
}
export function a(bcN) {
  return Object.prototype.toString.call(bcN) === "[object DOMError]";
}
export function b(bcN) {
  return Object.prototype.toString.call(bcN) === "[object DOMException]";
}
export function h(bcN) {
  return Object.prototype.toString.call(bcN) === "[object String]";
}
export function f(bcN) {
  return bcN === null || typeof bcN != "object" && typeof bcN != "function";
}
export function e(bcN) {
  return Object.prototype.toString.call(bcN) === "[object Object]";
}
export function g(bcN) {
  return Object.prototype.toString.call(bcN) === "[object RegExp]";
}
export function j(bcN) {
  return !!bcN && !!bcN.then && typeof bcN.then == "function";
}
export function i(bcN) {
  return e(bcN) && "nativeEvent" in bcN && "preventDefault" in bcN && "stopPropagation" in bcN;
}