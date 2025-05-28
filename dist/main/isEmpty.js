import isString from "./isString.js"
import isArray from "./isArray.js"
import isObject from "./isObject.js"
/**
 * @function isEmpty
 * @description - Checks if value is not empty
 * @param { Any } value - Any value
 * @example
 * // this a empty string
 * is.isEmpty("")
 * // return true
 * @example
 * // this a empty array
 * is.isEmpty([])
 * // return true
 * @example
 * // this a empty Object
 * is.isEmpty({})
 * // return true
 * @return {boolean}
 */
const isEmpty=(value)=>{
      if(isString(value)){return value === ""}
      else if(isArray(value)){return value.length == 0}
      else if(isObject(value)){return Object.keys(value).length === 0}
      return true;
}
export { isEmpty as default }