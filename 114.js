/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
module.exports = function (cQY) {
  return cQY != null && cQY.constructor != null && typeof cQY.constructor.isBuffer == "function" && cQY.constructor.isBuffer(cQY);
};