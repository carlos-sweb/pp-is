/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-events>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/05/14 18:12 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('isBoolean', factory) :
    (global = global || self, (function () {
      var exports = global.isBoolean = factory();
      }()
  ));
  })(this,function(){   

    return function( value ){

      return value === true || value === false || Object.prototype.toString.call( value  ) === '[object Boolean]' 

    }
        
  });