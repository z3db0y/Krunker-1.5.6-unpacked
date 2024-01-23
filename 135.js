/*!
* Determine if an object is a Buffer
*
* @author   Feross Aboukhadijeh <https://feross.org>
* @license  MIT
*/
module.exports = function (cUS) {
  return cUS != null && cUS.constructor != null && typeof cUS.constructor.isBuffer == "function" && cUS.constructor.isBuffer(cUS);
};