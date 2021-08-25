/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.4 (2020/08/24 20:18 PM)
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
      var toString = Object.prototype.toString;
      // =======================================================================
      var isArray  = function( value ){
          return toString.call( value  ) === '[object Array]'
      }
      // =======================================================================
      var isBoolean = function( value ){
        return value === true || value === false || toString.call( value  ) === '[object Boolean]'
      }
      // =======================================================================
      var isDate = function( value ){
        return toString.call( value  ) === '[object Date]'
      }
      // =======================================================================
      var isElement = function( value ){
          return !!( value && value.nodeType === 1 );
      }
      // =======================================================================
      var isFunction = function( value ){
        return toString.call( value  ) === '[object Function]'
      }
      // =======================================================================
      var isNull = function( value ){
        return toString.call( value  ) === '[object Null]'
      }
      // =======================================================================
      var isNumber = function( value ){
        return toString.call( value  ) === '[object Number]'
      }
      // =======================================================================
      var isObject = function( value ){
        return toString.call( value  ) === '[object Object]'
      }
      // =======================================================================
      var isString = function( value ){
        return toString.call( value  ) === '[object String]'
      }
      // =======================================================================
      var isUndefined = function( value ){
        return toString.call( value  ) === '[object Undefined]'
      }
      var isEmpty = function( value ){
          if( isString(value) ){
            return value.trim() === "";
          }
          if( isArray(value) ){
            return value.length == 0;
          }
          if( isObject(value) ){
             return Object.keys(value).length === 0;
          }

          return true;
      }
      // =======================================================================
      var isEmail = function( value ){
          // get from https://fightingforalostcause.net/content/misc/2006/compare-email-regex.php
          var patternEmail = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i;
          return patternEmail.test( value )
      }
      // =======================================================================
      var base = function( func ){
          // Retornamos una funcion
          return function( value ,  done ){
            if( isFunction( done ) ){
               if( func( value ) ){
                 return done( value )
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
        isEmpty:base(isEmpty),
        isFunction:base(isFunction),
        isNull:base(isNull),
        isNumber:base(isNumber),
        isObject:base(isObject),
        isString:base(isString),
        isUndefined:base(isUndefined),
        isEmail:base(isEmail)
      }
  })
