import isObject from "./isObject.js"
/**
* @function isFrozen
* @description - Checks if value is a frozen object.
* @param { Any } value - Any value
* @return {boolean}
*/
const isFrozen=(value)=>isObject(value) && Object.isFrozen(value)
export { isFrozen as default }
