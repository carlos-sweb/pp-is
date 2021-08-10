/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/08/07 23:11 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('ppIs', factory) :
    (global = global || self, (function () {
      var exports = global.ppIs = factory();
      }()
  ));
  })(this,function(){
      // =======================================================================
      var isArray  = function( value ){
          return Object.prototype.toString.call( value  ) === '[object Array]'
      }
      // =======================================================================
      var isBoolean = function( value ){
        return value === true || value === false || Object.prototype.toString.call( value  ) === '[object Boolean]'
      }
      // =======================================================================
      var isDate = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Date]'
      }
      // =======================================================================
      var isElement = function( value ){
          return !!( value && value.nodeType === 1 );
      }
      // =======================================================================
      var isFunction = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Function]'
      }
      // =======================================================================
      var isNull = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Null]'
      }
      // =======================================================================
      var isNumber = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Number]'
      }
      // =======================================================================
      var isObject = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Object]'
      }
      // =======================================================================
      var isString = function( value ){
        return Object.prototype.toString.call( value  ) === '[object String]'
      }
      // =======================================================================
      var isUndefined = function( value ){
        return Object.prototype.toString.call( value  ) === '[object Undefined]'
      }
      // =======================================================================
      var base = function( func ){
          return function( value ,  done ){
            if( isFunction( done ) ){
               if( func( value ) ){
                 done( value )
               }
            }else{
              return func(value)
            }
          }
      }
      // =======================================================================
      return {
        isArray:base(isArray),
        isBoolean:base(isBoolean),
        isDate:base(isDate),
        isElement:base(isElement),
        isFunction:base(isFunction),
        isNull:base(isNull),
        isNumber:base(isNumber),
        isObject:base(isObject),
        isString:base(isString),
        isUndefined:base(isUndefined)
      }
  })
