import isString from "./isString.js"
/**
* @function isIPv4
* @description - Checks if value is a valid IPv4 address.
* @param { Any } value - Any value
* @return {boolean}
*/
const isIPv4=(value)=>{
  if(!isString(value)){return false}
  const parts=value.split(".")
  if(parts.length!==4){return false}
  return parts.every((part)=>{
    if(!/^[0-9]+$/.test(part)){return false}
    const num=Number(part)
    return num>=0 && num<=255 && String(num)===part
  })
}
export { isIPv4 as default }
