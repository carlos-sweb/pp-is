/**
* @function isSealed
* @description - Checks if value is sealed, per Object.isSealed (arrays, functions and primitives included; primitives are always sealed).
* @param { Any } value - Any value
* @return {boolean}
*/
const isSealed=(value)=>Object.isSealed(value)
export { isSealed as default }
