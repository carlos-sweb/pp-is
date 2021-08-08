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
      return {
        isArray:function( value ){
            return Object.prototype.toString.call( value  ) === '[object Array]'
        },
        isBoolean:function( value ){
          return value === true || value === false || Object.prototype.toString.call( value  ) === '[object Boolean]'
        },
        isDate:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Date]'
        },
        isElement:function( value ){
        		return !!( value && value.nodeType === 1 );
        },
        isFunction:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Function]'
        },
        isNull:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Null]'
        },
        isNumber:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Number]'
        },
        isObject:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Object]'
        },
        isString:function( value ){
          return Object.prototype.toString.call( value  ) === '[object String]'
        },
        isUndefined:function( value ){
          return Object.prototype.toString.call( value  ) === '[object Undefined]'
        }
      }
  })
