import isObject from "./isObject.js"
/**
* @function isSealed
* @description - Checks if value is a sealed object.
* @param { Any } value - Any value
* @return {boolean}
*/
const isSealed=(value)=>isObject(value) && Object.isSealed(value)
export { isSealed as default }
