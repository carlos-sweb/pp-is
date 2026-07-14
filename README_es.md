# 🧪 pp-is

> 🔎 Verificación de tipos rápida, ligera y sin dependencias para JavaScript.

[![versión npm](https://img.shields.io/npm/v/pp-is.svg)](https://www.npmjs.com/package/pp-is)
[![licencia](https://img.shields.io/npm/l/pp-is.svg)](./LICENSE.txt)
[![tamaño del bundle](https://img.shields.io/bundlephobia/minzip/pp-is)](https://bundlephobia.com/package/pp-is)

**43 funciones** para validar todo — desde primitivos hasta DOM, emails hasta UUIDs. Cero dependencias. Funciona en todas partes.

```js
ppIs.isEmail('hola@mundo.com')    // ✅ true
ppIs.isInteger(42)                 // ✅ true
ppIs.isUUID('550e8400-e29b...')   // ✅ true
ppIs.isAlpha('Hola')              // ✅ true
```

---

## ⚡ Inicio Rápido

### 📦 Instalación

```bash
npm i pp-is
```

### 🌐 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.3.0/pp-is.min.js"></script>
```

### 🚀 Primer Uso

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.3.0/pp-is.min.js"></script>
<script>
  // ppIs está disponible globalmente
  if (ppIs.isEmail(document.getElementById('email').value)) {
    console.log('¡Email válido!')
  }
</script>
```

```js
// O como módulo ES
import ppIs from 'pp-is'

ppIs.isString('hola')  // true
ppIs.isNull(null)       // true
```

---

## 🎯 ¿Por qué pp-is?

| Característica | pp-is | lodash | validator.js |
|----------------|:-----:|:------:|:------------:|
| Tamaño del bundle (min+gz) | **~2KB** | ~7KB | ~30KB |
| Cero dependencias | ✅ | ✅ | ❌ |
| Sistema de callbacks | ✅ | ❌ | ❌ |
| Verificaciones DOM | ✅ | ❌ | ❌ |
| ES Modules | ✅ | parcial | ❌ |
| Compatible con TypeScript | ✅ | ✅ | ✅ |
| Cantidad de funciones | **43** | ~15 | ~50 |

---

## 📦 ¿Qué incluye?

| Categoría | Funciones | Qué cubre |
|-----------|-----------|-----------|
| 🧱 **Primitivos** | `isArray` `isString` `isNumber` `isBoolean` `isFunction` `isObject` `isDate` `isNull` `isUndefined` `isRegExp` `isPromise` `isSymbol` `isBigInt` | Verificaciones de tipo para todos los primitivos JS |
| 🔢 **Números** | `isInteger` `isFinite` `isPositive` `isNegative` `isNaN` | Validación numérica |
| 📝 **Strings** | `isAlpha` `isAlphanumeric` `isNumericString` `isLowercase` `isUppercase` `isBlank` | Verificaciones de contenido de strings |
| 🌐 **Formato** | `isEmail` `isUrl` `isJSON` `isUUID` `isIPv4` `isHexColor` | Validación de formato con regex |
| ⚙️ **Comportamiento** | `isIterable` `isTruthy` `isFalsy` `isCallable` `isAsyncFunction` `isPromiseLike` | Verificaciones de comportamiento en tiempo de ejecución |
| 🏠 **DOM** | `isElement` `isNodeList` `isHTMLCollection` | Nodos del DOM del navegador |
| 🧩 **Composición** | `isNil` `isEmpty` | Combinar múltiples verificaciones |
| 🔒 **Estado del Objeto** | `isFrozen` `isSealed` | Verificaciones de mutabilidad de objetos |

---

## 🔍 Referencia de API

### 🧱 Primitivos

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isArray(value)` | ¿Es un array? | `ppIs.isArray([1,2]) → true` |
| `isString(value)` | ¿Es un string? | `ppIs.isString('hola') → true` |
| `isNumber(value)` | ¿Es un número (no NaN)? | `ppIs.isNumber(42) → true` |
| `isBoolean(value)` | ¿Es true, false, o un Boolean? | `ppIs.isBoolean(true) → true` |
| `isFunction(value)` | ¿Es una función? | `ppIs.isFunction(()=>{}) → true` |
| `isObject(value)` | ¿Es un objeto plano? | `ppIs.isObject({}) → true` |
| `isDate(value)` | ¿Es una instancia de Date? | `ppIs.isDate(new Date()) → true` |
| `isNull(value)` | ¿Es null? | `ppIs.isNull(null) → true` |
| `isUndefined(value)` | ¿Es undefined? | `ppIs.isUndefined(undefined) → true` |
| `isRegExp(value)` | ¿Es un RegExp? | `ppIs.isRegExp(/abc/) → true` |
| `isPromise(value)` | ¿Es un Promise? | `ppIs.isPromise(Promise.resolve()) → true` |
| `isSymbol(value)` | ¿Es un Symbol? | `ppIs.isSymbol(Symbol('x')) → true` |
| `isBigInt(value)` | ¿Es un BigInt? | `ppIs.isBigInt(42n) → true` |

---

### 🔢 Números

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isInteger(value)` | ¿Es un entero? | `ppIs.isInteger(42) → true` |
| `isFinite(value)` | ¿Es finito (no Infinity)? | `ppIs.isFinite(42) → true` |
| `isPositive(value)` | ¿Es mayor que cero? | `ppIs.isPositive(5) → true` |
| `isNegative(value)` | ¿Es menor que cero? | `ppIs.isNegative(-5) → true` |
| `isNaN(value)` | ¿NO se puede parsear como entero? | `ppIs.isNaN('abc') → true` |

---

### 📝 Strings

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isAlpha(value)` | ¿Solo letras (a-z, A-Z)? | `ppIs.isAlpha('Hola') → true` |
| `isAlphanumeric(value)` | ¿Solo letras y números? | `ppIs.isAlphanumeric('abc123') → true` |
| `isNumericString(value)` | ¿Solo dígitos (0-9)? | `ppIs.isNumericString('12345') → true` |
| `isLowercase(value)` | ¿Todo en minúsculas? | `ppIs.isLowercase('hola') → true` |
| `isUppercase(value)` | ¿Todo en mayúsculas? | `ppIs.isUppercase('HOLA') → true` |
| `isBlank(value)` | ¿Vacío o solo espacios? | `ppIs.isBlank('   ') → true` |
| `isEmpty(value)` | ¿String, array, o objeto vacío? | `ppIs.isEmpty('') → true` |

---

### 🌐 Validación de Formato

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isEmail(value)` | ¿Email válido? | `ppIs.isEmail('a@b.com') → true` |
| `isUrl(value)` | ¿URL válida? | `ppIs.isUrl('https://google.com') → true` |
| `isJSON(value)` | ¿String JSON válido? | `ppIs.isJSON('{"a":1}') → true` |
| `isUUID(value)` | ¿UUID válido (v1-v5)? | `ppIs.isUUID('550e8400-e29b-41d4-a716-446655440000') → true` |
| `isIPv4(value)` | ¿Dirección IPv4 válida? | `ppIs.isIPv4('192.168.1.1') → true` |
| `isHexColor(value)` | ¿Color hexadecimal válido? | `ppIs.isHexColor('#FF5733') → true` |

---

### ⚙️ Comportamiento

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isIterable(value)` | ¿Tiene Symbol.iterator? | `ppIs.isIterable([1,2]) → true` |
| `isTruthy(value)` | ¿Es truthy? | `ppIs.isTruthy(1) → true` |
| `isFalsy(value)` | ¿Es falsy? | `ppIs.isFalsy(0) → true` |
| `isCallable(value)` | ¿Se puede invocar como función? | `ppIs.isCallable(()=>{}) → true` |
| `isAsyncFunction(value)` | ¿Es una función asíncrona? | `ppIs.isAsyncFunction(async()=>{}) → true` |
| `isPromiseLike(value)` | ¿Es Promise o thenable? | `ppIs.isPromiseLike({then:()=>{}}) → true` |

---

### 🏠 DOM

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isElement(value)` | ¿Es un elemento DOM (nodeType === 1)? | `ppIs.isElement(document.body) → true` |
| `isNodeList(value)` | ¿Es un NodeList? | `ppIs.isNodeList(document.querySelectorAll('div')) → true` |
| `isHTMLCollection(value)` | ¿Es un HTMLCollection? | `ppIs.isHTMLCollection(document.getElementsByClassName('x')) → true` |

---

### 🧩 Composición

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isNil(value)` | ¿Es null o undefined? | `ppIs.isNil(null) → true` |

---

### 🔒 Estado del Objeto

| Función | Descripción | Ejemplo |
|---------|-------------|---------|
| `isFrozen(value)` | ¿Es un objeto congelado? | `ppIs.isFrozen(Object.freeze({})) → true` |
| `isSealed(value)` | ¿Es un objeto sellado? | `ppIs.isSealed(Object.seal({})) → true` |

---

## 🪝 Sistema de Callbacks

Todas las funciones soportan **callbacks opcionales `done` y `reject`** para validación extra. Esto es lo que hace único a pp-is.

```js
ppIs.isString(value, done?, reject?)
```

- **`done`** — se ejecuta cuando la verificación pasa. Retorna `true`/`false` para sobreescribir.
- **`reject`** — se ejecuta cuando la verificación falla. Retorna `true`/`false` para sobreescribir.

### Ejemplo: Básico

```js
ppIs.isString('hola')
// → true
```

### Ejemplo: Validación extra

```js
const resultado = ppIs.isString(
  'hola',
  (val) => val.length > 3,   // done: también verificar longitud
  (val) => false              // reject: siempre false en fallo
)
// → true (es string Y longitud > 3)
```

### Ejemplo: Validación de formularios del mundo real

```js
function validarEmail(input) {
  return ppIs.isEmail(input,
    (val) => val.includes('@empresa.com'),  // debe ser email de la empresa
    () => { mostrarError('Email inválido'); return false }
  )
}

validarEmail('juan@empresa.com')  // ✅ true
validarEmail('juan@gmail.com')    // ❌ false (no es dominio de la empresa)
```

---

## 🛠️ TypeScript

pp-is está escrito en JavaScript vanilla pero funciona genial con TypeScript:

```ts
import ppIs from 'pp-is'

function procesarUsuario(input: unknown) {
  if (ppIs.isString(input)) {
    // input se reduce a string aquí ✅
    console.log(input.toUpperCase())
  }

  if (ppIs.isEmail(input)) {
    // input se valida como formato de email ✅
    enviarBienvenida(input)
  }
}
```

---

## 🧬 Cómo Funciona

Internamente, pp-is usa `Object.prototype.toString.call()` para detección precisa de tipos, envuelto en un sistema de callbacks que te da control total:

```
ppIs.isString(value, done, reject)
        │            │      │
        ▼            ▼      ▼
   getTypeCompare  callback callback
   (verif. tipo)   (al pasar) (al fallar)
        │            │      │
        ▼            ▼      ▼
      true/false ← baseEvaluate → true/false
```

---

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Así es como puedes empezar:

1. **Haz fork** del repositorio
2. **Clona** tu fork
   ```bash
   git clone https://github.com/TU_USERNAME/pp-is.git
   cd pp-is
   ```
3. **Instala** las dependencias
   ```bash
   npm install
   ```
4. **Crea** tu función en `dist/main/tuFuncion.js`
5. **Agrécala** a `dist/pp-is.js` (import + agregar al objeto `is`)
6. **Build** para verificar
   ```bash
   npm run build
   ```
7. **Prueba** tu función
   ```bash
   node -e "const ppIs = require('./dist/pp-is.min.js'); console.log(ppIs.tuFuncion('test'))"
   ```
8. **Envía** un pull request

### 📋 Directrices

- Una función por archivo en `dist/main/`
- Usa `export { funcName as default }`
- Agrega comentarios JSDoc (`@function`, `@description`, `@param`, `@return`)
- Envuelve con `base()` para soporte de callbacks
- Mantén **cero dependencias**
- Sigue el estilo de código existente (arrow functions, sin punto y coma)

---

## 📄 Licencia

[MIT](./LICENSE.txt) — Carlos Illesca

---

[🇬🇧 English](./README.md)
