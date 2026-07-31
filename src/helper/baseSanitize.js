import isBoolean from "./../main/isBoolean.js"
/**
* @function baseSanitize
* @description - Runs the user-provided done/reject hook and lets it optionally override the evaluation result.
* @param { function } doneOrReject - Custom function that is triggered when the positive hook or negative hook is defined by the user. This function can resolve true or false independent of the first evaluation or it can simply do nothing.
* @param { Any } value - The value to evaluate
* @param { boolean } evaluate - pre evaulate from static function isString,isUndefined,..etc
* @return { boolean } - evaluate
*/
const baseSanitize = ( doneOrReject , value , evaluate )=> {
  const response = doneOrReject(value);
  return isBoolean( response ) ? response : evaluate;
}
export { baseSanitize as default }