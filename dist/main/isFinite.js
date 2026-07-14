import isNumber from "./isNumber.js"
/**
* @function isFinite
* @description - Checks if value is a finite number (not Infinity or -Infinity).
* @param { Any } value - Any value
* @return {boolean}
*/
const isFinite=(value)=>isNumber(value) && Number.isFinite(value)
export { isFinite as default }
