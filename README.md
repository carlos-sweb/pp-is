# 🧪 pp-is

> 🔎 Tiny, fast, zero-dependency type checking for JavaScript.

[![npm version](https://img.shields.io/npm/v/pp-is.svg)](https://www.npmjs.com/package/pp-is)
[![license](https://img.shields.io/npm/l/pp-is.svg)](./LICENSE.txt)
[![bundle size](https://img.shields.io/bundlephobia/minzip/pp-is)](https://bundlephobia.com/package/pp-is)

**43 functions** to validate everything — from primitives to DOM, emails to UUIDs. Zero dependencies. Works everywhere.

```js
ppIs.isEmail('hello@world.com')   // ✅ true
ppIs.isInteger(42)                 // ✅ true
ppIs.isUUID('550e8400-e29b...')   // ✅ true
ppIs.isAlpha('Hello')             // ✅ true
```

---

## ⚡ Quick Start

### 📦 Install

```bash
npm i pp-is
```

### 🌐 CDN

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.3.0/pp-is.min.js"></script>
```

### 🚀 First Use

```html
<script src="https://cdn.jsdelivr.net/npm/pp-is@1.3.0/pp-is.min.js"></script>
<script>
  // ppIs is available globally
  if (ppIs.isEmail(document.getElementById('email').value)) {
    console.log('Valid email!')
  }
</script>
```

```js
// Or as ES module
import ppIs from 'pp-is'

ppIs.isString('hello')  // true
ppIs.isNull(null)       // true
```

---

## 🎯 Why pp-is?

| Feature | pp-is | lodash | validator.js |
|---------|:-----:|:------:|:------------:|
| Bundle size (min+gz) | **~2KB** | ~7KB | ~30KB |
| Zero dependencies | ✅ | ✅ | ❌ |
| Callback system | ✅ | ❌ | ❌ |
| DOM checks | ✅ | ❌ | ❌ |
| ES Modules | ✅ | partial | ❌ |
| TypeScript friendly | ✅ | ✅ | ✅ |
| Functions count | **43** | ~15 | ~50 |

---

## 📦 What's Inside?

| Category | Functions | What it covers |
|----------|-----------|----------------|
| 🧱 **Primitives** | `isArray` `isString` `isNumber` `isBoolean` `isFunction` `isObject` `isDate` `isNull` `isUndefined` `isRegExp` `isPromise` `isSymbol` `isBigInt` | Type checks for all JS primitives |
| 🔢 **Numbers** | `isInteger` `isFinite` `isPositive` `isNegative` `isNaN` | Numeric validation |
| 📝 **Strings** | `isAlpha` `isAlphanumeric` `isNumericString` `isLowercase` `isUppercase` `isBlank` | String content checks |
| 🌐 **Format** | `isEmail` `isUrl` `isJSON` `isUUID` `isIPv4` `isHexColor` | Format validation with regex |
| ⚙️ **Behavior** | `isIterable` `isTruthy` `isFalsy` `isCallable` `isAsyncFunction` `isPromiseLike` | Runtime behavior checks |
| 🏠 **DOM** | `isElement` `isNodeList` `isHTMLCollection` | Browser DOM nodes |
| 🧩 **Composition** | `isNil` `isEmpty` | Combine multiple checks |
| 🔒 **Object State** | `isFrozen` `isSealed` | Object mutability checks |

---

## 🔍 API Reference

### 🧱 Primitives

| Function | Description | Example |
|----------|-------------|---------|
| `isArray(value)` | Is it an array? | `ppIs.isArray([1,2]) → true` |
| `isString(value)` | Is it a string? | `ppIs.isString('hi') → true` |
| `isNumber(value)` | Is it a number (not NaN)? | `ppIs.isNumber(42) → true` |
| `isBoolean(value)` | Is it true, false, or a Boolean? | `ppIs.isBoolean(true) → true` |
| `isFunction(value)` | Is it a function? | `ppIs.isFunction(()=>{}) → true` |
| `isObject(value)` | Is it a plain object? | `ppIs.isObject({}) → true` |
| `isDate(value)` | Is it a Date instance? | `ppIs.isDate(new Date()) → true` |
| `isNull(value)` | Is it null? | `ppIs.isNull(null) → true` |
| `isUndefined(value)` | Is it undefined? | `ppIs.isUndefined(undefined) → true` |
| `isRegExp(value)` | Is it a RegExp? | `ppIs.isRegExp(/abc/) → true` |
| `isPromise(value)` | Is it a Promise? | `ppIs.isPromise(Promise.resolve()) → true` |
| `isSymbol(value)` | Is it a Symbol? | `ppIs.isSymbol(Symbol('x')) → true` |
| `isBigInt(value)` | Is it a BigInt? | `ppIs.isBigInt(42n) → true` |

---

### 🔢 Numbers

| Function | Description | Example |
|----------|-------------|---------|
| `isInteger(value)` | Is it an integer? | `ppIs.isInteger(42) → true` |
| `isFinite(value)` | Is it finite (not Infinity)? | `ppIs.isFinite(42) → true` |
| `isPositive(value)` | Is it greater than zero? | `ppIs.isPositive(5) → true` |
| `isNegative(value)` | Is it less than zero? | `ppIs.isNegative(-5) → true` |
| `isNaN(value)` | Can it NOT be parsed as integer? | `ppIs.isNaN('abc') → true` |

---

### 📝 Strings

| Function | Description | Example |
|----------|-------------|---------|
| `isAlpha(value)` | Only letters (a-z, A-Z)? | `ppIs.isAlpha('Hello') → true` |
| `isAlphanumeric(value)` | Letters and numbers only? | `ppIs.isAlphanumeric('abc123') → true` |
| `isNumericString(value)` | Digits only (0-9)? | `ppIs.isNumericString('12345') → true` |
| `isLowercase(value)` | All lowercase? | `ppIs.isLowercase('hello') → true` |
| `isUppercase(value)` | All uppercase? | `ppIs.isUppercase('HELLO') → true` |
| `isBlank(value)` | Empty or whitespace only? | `ppIs.isBlank('   ') → true` |
| `isEmpty(value)` | Empty string, array, or object? | `ppIs.isEmpty('') → true` |

---

### 🌐 Format Validation

| Function | Description | Example |
|----------|-------------|---------|
| `isEmail(value)` | Valid email address? | `ppIs.isEmail('a@b.com') → true` |
| `isUrl(value)` | Valid URL? | `ppIs.isUrl('https://google.com') → true` |
| `isJSON(value)` | Valid JSON string? | `ppIs.isJSON('{"a":1}') → true` |
| `isUUID(value)` | Valid UUID (v1-v5)? | `ppIs.isUUID('550e8400-e29b-41d4-a716-446655440000') → true` |
| `isIPv4(value)` | Valid IPv4 address? | `ppIs.isIPv4('192.168.1.1') → true` |
| `isHexColor(value)` | Valid hex color? | `ppIs.isHexColor('#FF5733') → true` |

---

### ⚙️ Behavior

| Function | Description | Example |
|----------|-------------|---------|
| `isIterable(value)` | Has Symbol.iterator? | `ppIs.isIterable([1,2]) → true` |
| `isTruthy(value)` | Is truthy? | `ppIs.isTruthy(1) → true` |
| `isFalsy(value)` | Is falsy? | `ppIs.isFalsy(0) → true` |
| `isCallable(value)` | Can be invoked as function? | `ppIs.isCallable(()=>{}) → true` |
| `isAsyncFunction(value)` | Is an async function? | `ppIs.isAsyncFunction(async()=>{}) → true` |
| `isPromiseLike(value)` | Is Promise or thenable? | `ppIs.isPromiseLike({then:()=>{}}) → true` |

---

### 🏠 DOM

| Function | Description | Example |
|----------|-------------|---------|
| `isElement(value)` | Is a DOM element (nodeType === 1)? | `ppIs.isElement(document.body) → true` |
| `isNodeList(value)` | Is a NodeList? | `ppIs.isNodeList(document.querySelectorAll('div')) → true` |
| `isHTMLCollection(value)` | Is an HTMLCollection? | `ppIs.isHTMLCollection(document.getElementsByClassName('x')) → true` |

---

### 🧩 Composition

| Function | Description | Example |
|----------|-------------|---------|
| `isNil(value)` | Is null or undefined? | `ppIs.isNil(null) → true` |

---

### 🔒 Object State

| Function | Description | Example |
|----------|-------------|---------|
| `isFrozen(value)` | Is a frozen object? | `ppIs.isFrozen(Object.freeze({})) → true` |
| `isSealed(value)` | Is a sealed object? | `ppIs.isSealed(Object.seal({})) → true` |

---

## 🪝 Callback System

Every function supports **optional `done` and `reject` callbacks** for extra validation. This is what makes pp-is unique.

```js
ppIs.isString(value, done?, reject?)
```

- **`done`** — runs when the check passes. Return `true`/`false` to override.
- **`reject`** — runs when the check fails. Return `true`/`false` to override.

### Example: Basic

```js
ppIs.isString('hello')
// → true
```

### Example: Extra validation

```js
const result = ppIs.isString(
  'hello',
  (val) => val.length > 3,   // done: also check length
  (val) => false              // reject: always false on fail
)
// → true (it's a string AND length > 3)
```

### Example: Real-world form validation

```js
function validateEmail(input) {
  return ppIs.isEmail(input,
    (val) => val.includes('@company.com'),  // must be company email
    () => { showError('Invalid email'); return false }
  )
}

validateEmail('john@company.com')  // ✅ true
validateEmail('john@gmail.com')    // ❌ false (not company domain)
```

---

## 🛠️ TypeScript

pp-is is written in vanilla JavaScript but works great with TypeScript:

```ts
import ppIs from 'pp-is'

function processUser(input: unknown) {
  if (ppIs.isString(input)) {
    // input is narrowed to string here ✅
    console.log(input.toUpperCase())
  }

  if (ppIs.isEmail(input)) {
    // input is validated as email format ✅
    sendWelcome(input)
  }
}
```

---

## 🧬 How It Works

Under the hood, pp-is uses `Object.prototype.toString.call()` for accurate type detection, wrapped in a callback system that gives you full control:

```
ppIs.isString(value, done, reject)
        │            │      │
        ▼            ▼      ▼
   getTypeCompare  callback callback
   (type check)    (on pass) (on fail)
        │            │      │
        ▼            ▼      ▼
      true/false ← baseEvaluate → true/false
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. **Fork** the repository
2. **Clone** your fork
   ```bash
   git clone https://github.com/YOUR_USERNAME/pp-is.git
   cd pp-is
   ```
3. **Install** dependencies
   ```bash
   npm install
   ```
4. **Create** your function in `dist/main/yourFunction.js`
5. **Add** it to `dist/pp-is.js` (import + add to `is` object)
6. **Build** to verify
   ```bash
   npm run build
   ```
7. **Test** your function
   ```bash
   node -e "const ppIs = require('./dist/pp-is.min.js'); console.log(ppIs.yourFunction('test'))"
   ```
8. **Submit** a pull request

### 📋 Guidelines

- One function per file in `dist/main/`
- Use `export { funcName as default }`
- Add JSDoc comments (`@function`, `@description`, `@param`, `@return`)
- Wrap with `base()` for callback support
- Keep it **zero dependencies**
- Follow existing code style (arrow functions, no semicolons)

---

## 📄 License

[MIT](./LICENSE.txt) — Carlos Illesca

---

[📄 Español](./README_es.md)
