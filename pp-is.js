/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.0.8 (2022/09/11 22:26 PM)
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
      getType = ( value) => Object.prototype.toString.call(value);
      // =======================================================================
      isArray = ( value ) => getType( value  ) === '[object Array]';
      // =======================================================================
      isRegExp = ( value ) => getType( value  ) === '[object RegExp]';
      // =======================================================================
      isBoolean = ( value ) => value === true || value === false || getType( value  ) === '[object Boolean]';
      // =======================================================================
      isDate = ( value ) => getType( value  ) === '[object Date]';
      // =======================================================================
      isElement = ( value ) => !!( value && value.nodeType === 1 );
      // =======================================================================
      isFunction = ( value ) => getType( value  ) === '[object Function]';
      // =======================================================================
      isNull = ( value ) => getType( value  ) === '[object Null]';
      // =======================================================================
      isNumber = ( value ) => getType( value  ) === '[object Number]';
      // =======================================================================
      isObject = ( value ) => getType( value  ) === '[object Object]';
      // =======================================================================
      isString = ( value ) => getType( value  ) === '[object String]';
      // =======================================================================
      isUndefined = ( value ) => getType( value  ) === '[object Undefined]';
      // ======================================================================= 
      isEmpty = ( value ) => {
          if(isString(value)){ return value === ""; }
          if(isArray(value) ){ return value.length == 0; }
          if(isObject(value) ){ return Object.keys(value).length === 0;}
          return true;
      }
      // =======================================================================
      // Investigar Sobre los dominios de cada pais y de cada segmento comercial o publico personal
      isEmail = ( value ) => /^([a-z0-9_-]+[a-z0-9._-]+?)@([a-z0-9-]+\.[a-z]{2,6}|[a-z0-9]+\.[a-z]{2,6}\.[a-z]{2,6})$/i.test( value );
      // =======================================================================
      isNaN = ( value ) => Number.isNaN( parseInt(value) );
      // =======================================================================
      // ^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)? protocol 
      //  ([w]{3}\.|[w]{3}2\.)? ([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,} Domain name www or www2 
      // localhost -> include this word
      //  [\d]+\.[\d]+\.[\d]+\.[\d]+ -> add ipv4
      //  (\:[\d]+)? -> port 
      // ([\??\/?]+[\/;&a-z\d%_.~+=-]*)? -> query url
      // (\#[\/;&a-z\d%_.~+=-]*)? -> hashtag url
      isUrl = ( value ) => /^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(value);          
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
