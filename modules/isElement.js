/*!!
 * Power Panel pp-is - pp-isElement <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.0 (2020/08/07 23:33 PM)
 * Released under the MIT License
 */
(function(global,factory){
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define('isElement', factory) :
    (global = global || self, (function () {
      var exports = global.isElement = factory();
      }()
  ));
  })(this,function(){
    return function( value ){
    		return !!( value && value.nodeType === 1 );
    }
  })
