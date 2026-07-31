import isFunction from "./../main/isFunction.js"
import baseSanitize from "./baseSanitize.js"
/**
 * @function baseEvaluate
 * @description - Responsible for evaluation
 * @param {function} func - Evaluative function
 * @param {Any} value - The value to evaluate
 * @param {function} done - Function to be executed in case the evaluation is positive.
 * @param {function} reject - Function to be executed in case the evaluation is negative.
 * @return {boolean} - value of the evaluation
 */
const baseEvaluate =  (func , value , done , reject) => { 
  const evaluate = func(value);
  return evaluate ? isFunction( done ) ? baseSanitize(done,value,evaluate) : true : isFunction( reject ) ? baseSanitize(reject,value,evaluate) : false ;
}
export { baseEvaluate as default}