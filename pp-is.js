/*!!
 * Power Panel pp-is <https://github.com/carlos-sweb/pp-is>
 * @author Carlos Illesca
 * @version 1.2.1 (2024/02/26 15:00 PM)
 * Released under the MIT License
 */
;(function(){

  function is(){
    const getType = ( value )=>Object.prototype.toString.call(value),      
    getTypeCompare = (value,expresion) =>(getType(value) === expresion),
    isNodeList = ( value )=>(typeof NodeList === "undefined" ? false : NodeList.prototype.isPrototypeOf(value)),      
    isHTMLCollection = ( value )=>(typeof HTMLCollection === "undefined" ? false : HTMLCollection.prototype.isPrototypeOf(value)),      
    isArray = ( value )=>getTypeCompare(value,'[object Array]'),      
    isRegExp = ( value )=>getTypeCompare(value,'[object RegExp]'),
    isBoolean = ( value )=>value === true || value === false || getType( value  ) === '[object Boolean]',      
    isDate = ( value )=>getTypeCompare(value,'[object Date]'),      
    isElement = ( value )=>!!( value && value.nodeType === 1 ) ,      
    isFunction = ( value ) =>getTypeCompare(value,'[object Function]'),
    isNull = ( value )=>getTypeCompare(value,'[object Null]'),      
    isNumber = ( value )=>getTypeCompare(value,'[object Number]'),      
    isObject = (value )=>getTypeCompare(value,'[object Object]'),      
    isString = ( value )=>getTypeCompare(value,'[object String]'),      
    isUndefined = ( value )=>getTypeCompare(value,'[object Undefined]'),
    
    isEmpty=( value )=>{
        if(isString(value)){ return value === "" }
        else if(isArray(value) ){ return value.length == 0 }
        else if(isObject(value) ){ return Object.keys(value).length === 0}
        return true;
    },
    // =======================================================================
    // Investigar Sobre los dominios de cada pais y de cada segmento comercial o publico personal
    isEmail = ( value )=>{ return /^([a-z0-9_-]+[a-z0-9._-]+?)@([a-z0-9-]+\.[a-z]{2,6}|[a-z0-9]+\.[a-z]{2,6}\.[a-z]{2,6})$/i.test( value )},
    // =======================================================================
    isNaN = ( value )=>(Number.isNaN( parseInt(value))),
    // =======================================================================
    // ^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)? protocol 
    //  ([w]{3}\.|[w]{3}2\.)? ([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,} Domain name www or www2 
    // localhost -> include this word
    //  [\d]+\.[\d]+\.[\d]+\.[\d]+ -> add ipv4
    //  (\:[\d]+)? -> port 
    // ([\??\/?]+[\/;&a-z\d%_.~+=-]*)? -> query url
    // (\#[\/;&a-z\d%_.~+=-]*)? -> hashtag url
    isUrl = ( value )=>{ return /^(https?:\/\/)?([w]{3}\.|[w]{3}2\.)?([a-z\d]+\.)?([a-z\d]+\.[a-z]{2,}|localhost|[\d]+\.[\d]+\.[\d]+\.[\d]+)(\:[\d]+)?([\??\/?]+[\/;&a-z\d%_.~+=-]*)?(\#[\/;&a-z\d%_.~+=-]*)?$/gi.test(value)},
    // =======================================================================
    base = ( func )=>{          
        return ( value ,  done )=>{            
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
      isEmail:base(isEmail),
      isNaN:base(isNaN),
      isRegExp:base(isRegExp),
      isUrl:base(isUrl),
      isNodeList:base(isNodeList),
      isHTMLCollection:base(isHTMLCollection)
    }
  }

  /** Detect free variable `global` from Node.js. */
  var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

  /** Detect free variable `self`. */
  var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

  /** Used as a reference to the global object. */
  var root = freeGlobal || freeSelf || Function('return this')();

  /** Detect free variable `exports`. */
  var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

  /** Detect free variable `module`. */
  var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

  if (typeof define == 'function' && typeof define.amd == 'object' && define.amd){      
    define(function(){
      return is();
    });
  }
  else if( freeModule ){    
    freeModule.exports = is()
  }else{
    root.ppIs = is();
  }
}.call(this))
