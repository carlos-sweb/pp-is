import isString from "./isString.js"
/**
* @function isLowercase
* @description - Checks if value is a lowercase string.
* @param { Any } value - Any value
* @return {boolean}
*/
const isLowercase=(value)=>isString(value) ? value === value.toLowerCase() && value !== value.toUpperCase() : false
export { isLowercase as default }
