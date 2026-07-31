/**
* @function isFrozen
* @description - Checks if value is frozen, per Object.isFrozen (arrays, functions and primitives included; primitives are always frozen).
* @param { Any } value - Any value
* @return {boolean}
*/
const isFrozen=(value)=>Object.isFrozen(value)
export { isFrozen as default }
