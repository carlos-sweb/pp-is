import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isNumber
* @description - Checks if value is a Number.
* @param { Any } value - Any value
* @return {boolean}
*/
const isNumber=(value)=>getTypeCompare(value,'Number')
export { isNumber as default }

