/**
* @function isIterable
* @description - Checks if value is iterable (has Symbol.iterator).
* @param { Any } value - Any value
* @return {boolean}
*/
const isIterable=(value)=>value!=null && typeof value[Symbol.iterator]==="function"
export { isIterable as default }
