import isString from "./isString.js"
/**
* @function isUppercase
* @description - Checks if value is an uppercase string.
* @param { Any } value - Any value
* @return {boolean}
*/
const isUppercase=(value)=>isString(value) ? value === value.toUpperCase() && value !== value.toLowerCase() : false
export { isUppercase as default }
