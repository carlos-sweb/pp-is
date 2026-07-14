/**
* @function isPromiseLike
* @description - Checks if value is a Promise or thenable (has a .then method).
* @param { Any } value - Any value
* @return {boolean}
*/
const isPromiseLike=(value)=>value!=null && typeof value.then==="function"
export { isPromiseLike as default }
