import isString from "./isString.js"
/**
* @function isUUID
* @description - Checks if value is a valid UUID (v1-v5).
* @param { Any } value - Any value
* @return {boolean}
*/
const isUUID=(value)=>isString(value) ? /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(value) : false
export { isUUID as default }
