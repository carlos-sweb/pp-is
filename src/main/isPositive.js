import isNumber from "./isNumber.js"
/**
* @function isPositive
* @description - Checks if value is a positive number (greater than zero).
* @param { Any } value - Any value
* @return {boolean}
*/
const isPositive=(value)=>isNumber(value) && value > 0
export { isPositive as default }
