/*!!
 * Power Panel pp-is - pp-isUndefined <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/06/07 19:54 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('isUndefined', factory) :
    (global = global || self, (function () {
      var exports = global.isUndefined = factory();
      }()
  ));
  })(this,function(){
    return function( value ){
      return Object.prototype.toString.call( value  ) === '[object Undefined]'
    }
  });
