/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.9 (2022/09/11 23:09 PM)
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
      function getType( value ){ return Object.prototype.toString.call(value) }
      // =======================================================================      
      function isArray ( value ){ return getType( value  ) === '[object Array]'}
      // =======================================================================
      function isRegExp ( value ){ return getType( value  ) === '[object RegExp]'}
      // =======================================================================
      function isBoolean( value ){ return value === true || value === false || getType( value  ) === '[object Boolean]'};
      // =======================================================================
      function isDate( value ){ return getType( value  ) === '[object Date]'}
      // =======================================================================
      function isElement( value ){ return !!( value && value.nodeType === 1 ) }
      // =======================================================================
      function isFunction( value ) { return getType( value  ) === '[object Function]'}
      // =======================================================================
      function isNull( value ){ return getType( value  ) === '[object Null]'}
      // =======================================================================
      function isNumber( value ){ return getType( value  ) === '[object Number]'}
      // =======================================================================
      function isObject( value ){ return getType( value  ) === '[object Object]'}
      // =======================================================================
      function isString( value ){ return getType( value  ) === '[object String]'}
      // =======================================================================
      function isUndefined( value ){ return getType( value  ) === '[object Undefined]'}
      // ======================================================================= 
      function isEmpty( value ){
          if(isStringetType(value)){ return value === ""; }
          if(isArray(value) ){ return value.length == 0; }
          if(isObject(value) ){ return Object.keys(value).length === 0;}
          return true;
      }
      // =======================================================================
      // Investigar Sobre los dominios de cada pais y de cada segmento comercial o publico personal
      function isEmail( value ){ return /^([a-z0-9_-]+[a-z0-9._-]+?)@([a-z0-9-]+\.[a-z]{2,6}|[a-z0-9]+\.[a-z]{2,6}\.[a-z]{2,6})$/i.test( value )}
      // =======================================================================
      function isNaN( value ){ return Number.isNaN( parseInt(value) )}
      // =======================================================================
      // ^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)? protocol 
      //  ([w]{3}\.|[w]{3}2\.)? ([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,} Domain name www or www2 
      // localhost -> include this word
      //  [\d]+\.[\d]+\.[\d]+\.[\d]+ -> add ipv4
      //  (\:[\d]+)? -> port 
      // ([\??\/?]+[\/;&a-z\d%_.~+=-]*)? -> query url
      // (\#[\/;&a-z\d%_.~+=-]*)? -> hashtag url
      function isUrl( value ){ return /^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(value)}
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
        'isArray':base(isArray),
        'isBoolean':base(isBoolean),
        'isDate':base(isDate),
        'isElement':base(isElement),
        'isEmpty':base(isEmpty),
        'isFunction':base(isFunction),
        'isNull':base(isNull),
        'isNumber':base(isNumber),
        'isObject':base(isObject),
        'isString':base(isString),
        'isUndefined':base(isUndefined),
        'isEmail':base(isEmail),
        'isNaN':base(isNaN),
        'isRegExp':base(isRegExp),
        'isUrl':base(isUrl)
      }
  })
