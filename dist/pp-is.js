/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.3.0 (2026/07/14)
 * Released under the MIT License
 */ 
import isPromise from "./main/isPromise.js"
import isString from "./main/isString.js"
import isBlank from "./main/isBlank.js"
import isArray from "./main/isArray.js"
import isObject from "./main/isObject.js"
import isRegExp from "./main/isRegExp.js"
import isBoolean from "./main/isBoolean.js"
import isDate from "./main/isDate.js"
import isFunction from "./main/isFunction.js"
import isUndefined from "./main/isUndefined.js"
import isNull from "./main/isNull.js"
import isNil from "./main/isNil.js"
import isNaN from "./main/isNaN.js"
import isNumber from "./main/isNumber.js"
import isEmail from "./main/isEmail.js"
import isUrl from "./main/isUrl.js"
import isEmpty from "./main/isEmpty.js"
import isNodeList from "./main/isNodeList.js"
import isElement from "./main/isElement.js"
import isHTMLCollection from "./main/isHTMLCollection.js"
import isSymbol from "./main/isSymbol.js"
import isBigInt from "./main/isBigInt.js"
import isInteger from "./main/isInteger.js"
import isFinite from "./main/isFinite.js"
import isPositive from "./main/isPositive.js"
import isNegative from "./main/isNegative.js"
import isAlpha from "./main/isAlpha.js"
import isAlphanumeric from "./main/isAlphanumeric.js"
import isNumericString from "./main/isNumericString.js"
import isLowercase from "./main/isLowercase.js"
import isUppercase from "./main/isUppercase.js"
import isHexColor from "./main/isHexColor.js"
import isJSON from "./main/isJSON.js"
import isUUID from "./main/isUUID.js"
import isIPv4 from "./main/isIPv4.js"
import isIterable from "./main/isIterable.js"
import isTruthy from "./main/isTruthy.js"
import isFalsy from "./main/isFalsy.js"
import isCallable from "./main/isCallable.js"
import isAsyncFunction from "./main/isAsyncFunction.js"
import isPromiseLike from "./main/isPromiseLike.js"
import isFrozen from "./main/isFrozen.js"
import isSealed from "./main/isSealed.js"
import base from "./helper/base.js" 
/** 
 * @description - Obtains the object to be exported with the following main functions
 * @name is
 * @type {object}   
 * @property {function} isArray - {@link isArray}
 * @property {function} isBoolean - {@link isBoolean}
 * @property {function} isDate - {@link isDate}
 * @property {function} isElement - {@link isElement}
 * @property {function} isEmpty - {@link isEmpty}
 * @property {function} isFunction - {@link isFunction}
 * @property {function} isNull - {@link isNull}
 * @property {function} isNumber - {@link isNumber}
 * @property {function} isString - {@link isString}
 * @property {function} isUndefined - {@link isUndefined}
 * @property {function} isEmail - {@link isEmail}
 * @property {function} isNaN - {@link isNaN}
 * @property {function} isRegExp - {@link isRegExp}
 * @property {function} isUrl - {@link isUrl}
 * @property {function} isNodeList - {@link isNodeList}
 * @property {function} isHTMLCollection - {@link isHTMLCollection}
 * @property {function} isSymbol - {@link isSymbol}
 * @property {function} isBigInt - {@link isBigInt}
 * @property {function} isInteger - {@link isInteger}
 * @property {function} isFinite - {@link isFinite}
 * @property {function} isPositive - {@link isPositive}
 * @property {function} isNegative - {@link isNegative}
 * @property {function} isAlpha - {@link isAlpha}
 * @property {function} isAlphanumeric - {@link isAlphanumeric}
 * @property {function} isNumericString - {@link isNumericString}
 * @property {function} isLowercase - {@link isLowercase}
 * @property {function} isUppercase - {@link isUppercase}
 * @property {function} isHexColor - {@link isHexColor}
 * @property {function} isJSON - {@link isJSON}
 * @property {function} isUUID - {@link isUUID}
 * @property {function} isIPv4 - {@link isIPv4}
 * @property {function} isIterable - {@link isIterable}
 * @property {function} isTruthy - {@link isTruthy}
 * @property {function} isFalsy - {@link isFalsy}
 * @property {function} isCallable - {@link isCallable}
 * @property {function} isAsyncFunction - {@link isAsyncFunction}
 * @property {function} isPromiseLike - {@link isPromiseLike}
 * @property {function} isFrozen - {@link isFrozen}
 * @property {function} isSealed - {@link isSealed}
 */
  const is = {      
      'isArray':base(isArray),
      'isBoolean':base(isBoolean),
      'isDate':base(isDate),
      'isElement':base(isElement),
      'isEmpty':base(isEmpty),
      'isBlank':base(isBlank),
      'isFunction':base(isFunction),
      'isNull':base(isNull),
      'isNumber':base(isNumber),
      'isObject':base(isObject),
      'isString':base(isString),
      'isUndefined':base(isUndefined),
      'isNil':base(isNil),
      'isEmail':base(isEmail),
      'isNaN':base(isNaN),
      'isRegExp':base(isRegExp),
      'isUrl':base(isUrl),
      'isNodeList':base(isNodeList),
      'isHTMLCollection':base(isHTMLCollection),      
      'isPromise':base(isPromise),
      'isSymbol':base(isSymbol),
      'isBigInt':base(isBigInt),
      'isInteger':base(isInteger),
      'isFinite':base(isFinite),
      'isPositive':base(isPositive),
      'isNegative':base(isNegative),
      'isAlpha':base(isAlpha),
      'isAlphanumeric':base(isAlphanumeric),
      'isNumericString':base(isNumericString),
      'isLowercase':base(isLowercase),
      'isUppercase':base(isUppercase),
      'isHexColor':base(isHexColor),
      'isJSON':base(isJSON),
      'isUUID':base(isUUID),
      'isIPv4':base(isIPv4),
      'isIterable':base(isIterable),
      'isTruthy':base(isTruthy),
      'isFalsy':base(isFalsy),
      'isCallable':base(isCallable),
      'isAsyncFunction':base(isAsyncFunction),
      'isPromiseLike':base(isPromiseLike),
      'isFrozen':base(isFrozen),
      'isSealed':base(isSealed)
  }  

 export { is as default }
