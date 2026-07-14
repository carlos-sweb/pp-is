import isNumber from "./isNumber.js"
/**
* @function isInteger
* @description - Checks if value is an integer number.
* @param { Any } value - Any value
* @return {boolean}
*/
const isInteger=(value)=>isNumber(value) && Number.isInteger(value)
export { isInteger as default }
