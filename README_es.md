# pp-is

## Para empezar

Incluye pp-is.js en tu proyecto web:
```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@latest/pp-is.min.js" ></script>
```

O

## Instalación

```console
npm i pp-is --save
```
## Metodos

#### `isArray`

Verifica si el valor es clasificado como un Objecto de Array.

---
#### `isBoolean`

Verifica si el valor is verdadero ( true ) o falso ( false ).

---
#### `isDate`

Verifica si el valor es una Fecha.

---
#### `isElement`

verifica si el valor es un elemento del DOM


---
#### `isFunction`

Verifica si el valor es una función

---
#### `isNull`

Verifica si el valor es un nulo.

---
#### `isNumber`

Verifica si el valor es un numero.

---
#### `isObject`

verifica si el valor es clasificado como un objecto.

---
#### `isString`

Varifica si el valor es una cadena de texto.

---
#### `isUndefined`

verifica si el valor esta no definido.

---
#### `isEmail`

Verifica si el valor es un correo electronico valido.

---

---
#### `isNaN`

Verifica si el valor es un numero valido proveniente de una cadena de texto.

---

---
#### `isRegExp`

Verifica si el valor es una expresion regular

---

---
#### `isUrl`

Verifica si el valor es una url valida.

---

#### `isNodeList`

Verifica si el valor es un NodeList valido.

---

#### `isHTMLCollection`

Verifica si el valor es un HTTMLCollection valido.

---

## ¿ Como se usa ?

```javascript

var value = "string...";

if( ppIs.isString(value) ){
  // Ingresa tu codigo aqui
}
```

### or

```javascript

var value = "string...";

ppIs.isString( value , function( val ){
    // Ingresa tu codigo aqui
})

```

[Read this document in English](./README.md)