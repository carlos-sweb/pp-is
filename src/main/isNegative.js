import isNumber from "./isNumber.js"
/**
* @function isNegative
* @description - Checks if value is a negative number (less than zero).
* @param { Any } value - Any value
* @return {boolean}
*/
const isNegative=(value)=>isNumber(value) && value < 0
export { isNegative as default }
