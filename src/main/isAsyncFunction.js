import getTypeCompare from "./../helper/getTypeCompare.js"
/**
* @function isAsyncFunction
* @description - Checks if value is an async function.
* @param { Any } value - Any value
* @return {boolean}
*/
const isAsyncFunction=(value)=>getTypeCompare(value,"AsyncFunction")
export { isAsyncFunction as default }
