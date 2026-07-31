import isString from "./isString.js"
/**
* @function isNumericString
* @description - Checks if value is a string containing only digits (0-9).
* @param { Any } value - Any value
* @return {boolean}
*/
const isNumericString=(value)=>isString(value) ? /^[0-9]+$/.test(value) : false
export { isNumericString as default }
