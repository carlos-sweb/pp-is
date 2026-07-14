import isString from "./isString.js"
/**
* @function isHexColor
* @description - Checks if value is a valid hexadecimal color string.
* @param { Any } value - Any value
* @return {boolean}
*/
const isHexColor=(value)=>isString(value) ? /^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(value) : false
export { isHexColor as default }
