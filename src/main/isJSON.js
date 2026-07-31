import isString from "./isString.js"
/**
* @function isJSON
* @description - Checks if value is a valid JSON string.
* @param { Any } value - Any value
* @return {boolean}
*/
const isJSON=(value)=>{
  if(!isString(value)){return false}
  try{JSON.parse(value);return true}
  catch(e){return false}
}
export { isJSON as default }
