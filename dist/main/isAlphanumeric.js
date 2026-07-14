import isString from "./isString.js"
/**
* @function isAlphanumeric
* @description - Checks if value is a string containing only letters and numbers.
* @param { Any } value - Any value
* @return {boolean}
*/
const isAlphanumeric=(value)=>isString(value) ? /^[a-zA-Z0-9]+$/.test(value) : false
export { isAlphanumeric as default }
