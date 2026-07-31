import isString from "./isString.js"
/**
* @function isAlpha
* @description - Checks if value is a string containing only letters (a-z, A-Z).
* @param { Any } value - Any value
* @return {boolean}
*/
const isAlpha=(value)=>isString(value) ? /^[a-zA-Z]+$/.test(value) : false
export { isAlpha as default }
