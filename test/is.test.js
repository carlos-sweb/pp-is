import { describe, test, expect } from "bun:test"
import is from "../src/pp-is.js"

describe("primitives", () => {
  test("isArray", () => {
    expect(is.isArray([1, 2, 3])).toBe(true)
    expect(is.isArray({})).toBe(false)
    expect(is.isArray("array")).toBe(false)
  })

  test("isBoolean", () => {
    expect(is.isBoolean(true)).toBe(true)
    expect(is.isBoolean(false)).toBe(true)
    expect(is.isBoolean(0)).toBe(false)
    expect(is.isBoolean("true")).toBe(false)
  })

  test("isDate", () => {
    expect(is.isDate(new Date())).toBe(true)
    expect(is.isDate("2024-01-01")).toBe(false)
  })

  test("isFunction", () => {
    expect(is.isFunction(function () {})).toBe(true)
    expect(is.isFunction(() => {})).toBe(true)
    expect(is.isFunction({})).toBe(false)
  })

  test("isNull", () => {
    expect(is.isNull(null)).toBe(true)
    expect(is.isNull(undefined)).toBe(false)
    expect(is.isNull(0)).toBe(false)
  })

  test("isNumber", () => {
    expect(is.isNumber(42)).toBe(true)
    expect(is.isNumber(-3.14)).toBe(true)
    expect(is.isNumber(NaN)).toBe(false)
    expect(is.isNumber("42")).toBe(false)
  })

  test("isObject", () => {
    expect(is.isObject({})).toBe(true)
    expect(is.isObject([])).toBe(false)
    expect(is.isObject(null)).toBe(false)
  })

  test("isString", () => {
    expect(is.isString("hello")).toBe(true)
    expect(is.isString(new String("hello"))).toBe(true)
    expect(is.isString(42)).toBe(false)
  })

  test("isUndefined", () => {
    expect(is.isUndefined(undefined)).toBe(true)
    expect(is.isUndefined(null)).toBe(false)
  })

  test("isRegExp", () => {
    expect(is.isRegExp(/abc/)).toBe(true)
    expect(is.isRegExp(new RegExp("abc"))).toBe(true)
    expect(is.isRegExp("abc")).toBe(false)
  })

  test("isPromise", () => {
    expect(is.isPromise(Promise.resolve())).toBe(true)
    expect(is.isPromise({ then: () => {} })).toBe(false)
  })

  test("isSymbol", () => {
    expect(is.isSymbol(Symbol("x"))).toBe(true)
    expect(is.isSymbol("x")).toBe(false)
  })

  test("isBigInt", () => {
    expect(is.isBigInt(10n)).toBe(true)
    expect(is.isBigInt(10)).toBe(false)
  })
})

describe("numbers", () => {
  test("isInteger", () => {
    expect(is.isInteger(5)).toBe(true)
    expect(is.isInteger(5.5)).toBe(false)
    expect(is.isInteger("5")).toBe(false)
  })

  test("isFinite", () => {
    expect(is.isFinite(5)).toBe(true)
    expect(is.isFinite(Infinity)).toBe(false)
    expect(is.isFinite(-Infinity)).toBe(false)
    expect(is.isFinite("5")).toBe(false)
  })

  test("isPositive", () => {
    expect(is.isPositive(1)).toBe(true)
    expect(is.isPositive(0)).toBe(false)
    expect(is.isPositive(-1)).toBe(false)
  })

  test("isNegative", () => {
    expect(is.isNegative(-1)).toBe(true)
    expect(is.isNegative(0)).toBe(false)
    expect(is.isNegative(1)).toBe(false)
  })
})

describe("strings", () => {
  test("isAlpha", () => {
    expect(is.isAlpha("Hello")).toBe(true)
    expect(is.isAlpha("Hello1")).toBe(false)
    expect(is.isAlpha("")).toBe(false)
    expect(is.isAlpha(123)).toBe(false)
  })

  test("isAlphanumeric", () => {
    expect(is.isAlphanumeric("Hello123")).toBe(true)
    expect(is.isAlphanumeric("Hello 123")).toBe(false)
  })

  test("isNumericString", () => {
    expect(is.isNumericString("12345")).toBe(true)
    expect(is.isNumericString("123.45")).toBe(false)
    expect(is.isNumericString(12345)).toBe(false)
  })

  test("isLowercase", () => {
    expect(is.isLowercase("hello")).toBe(true)
    expect(is.isLowercase("Hello")).toBe(false)
    expect(is.isLowercase("123")).toBe(false)
  })

  test("isUppercase", () => {
    expect(is.isUppercase("HELLO")).toBe(true)
    expect(is.isUppercase("Hello")).toBe(false)
    expect(is.isUppercase("123")).toBe(false)
  })

  test("isBlank", () => {
    expect(is.isBlank("")).toBe(true)
    expect(is.isBlank("   ")).toBe(true)
    expect(is.isBlank("hi")).toBe(false)
    expect(is.isBlank(42)).toBe(false)
  })
})

describe("format", () => {
  test("isEmail", () => {
    expect(is.isEmail("h@blog.mydomian.xyz")).toBe(true)
    expect(is.isEmail("not-an-email")).toBe(false)
  })

  test("isUrl", () => {
    expect(is.isUrl("https://example.com")).toBe(true)
    expect(is.isUrl("example.com")).toBe(true)
    expect(is.isUrl("not a url !!")).toBe(false)
  })

  test("isJSON", () => {
    expect(is.isJSON('{"a":1}')).toBe(true)
    expect(is.isJSON("[1,2,3]")).toBe(true)
    expect(is.isJSON("{invalid")).toBe(false)
    expect(is.isJSON(42)).toBe(false)
  })

  test("isUUID", () => {
    expect(is.isUUID("550e8400-e29b-41d4-a716-446655440000")).toBe(true)
    expect(is.isUUID("not-a-uuid")).toBe(false)
  })

  test("isIPv4", () => {
    expect(is.isIPv4("192.168.1.1")).toBe(true)
    expect(is.isIPv4("256.1.1.1")).toBe(false)
    expect(is.isIPv4("1.2.3")).toBe(false)
    expect(is.isIPv4("01.2.3.4")).toBe(false)
  })

  test("isHexColor", () => {
    expect(is.isHexColor("#fff")).toBe(true)
    expect(is.isHexColor("#ffffff")).toBe(true)
    expect(is.isHexColor("ffffff")).toBe(true)
    expect(is.isHexColor("#gggggg")).toBe(false)
  })
})

describe("behavior", () => {
  test("isIterable", () => {
    expect(is.isIterable([1, 2, 3])).toBe(true)
    expect(is.isIterable("abc")).toBe(true)
    expect(is.isIterable({})).toBe(false)
    expect(is.isIterable(null)).toBe(false)
  })

  test("isTruthy", () => {
    expect(is.isTruthy(1)).toBe(true)
    expect(is.isTruthy("x")).toBe(true)
    expect(is.isTruthy(0)).toBe(false)
    expect(is.isTruthy("")).toBe(false)
  })

  test("isFalsy", () => {
    expect(is.isFalsy(0)).toBe(true)
    expect(is.isFalsy("")).toBe(true)
    expect(is.isFalsy(1)).toBe(false)
  })

  test("isCallable", () => {
    expect(is.isCallable(() => {})).toBe(true)
    expect(is.isCallable(async () => {})).toBe(true)
    expect(is.isCallable({})).toBe(false)
  })

  test("isAsyncFunction", () => {
    expect(is.isAsyncFunction(async () => {})).toBe(true)
    expect(is.isAsyncFunction(() => {})).toBe(false)
  })

  test("isPromiseLike", () => {
    expect(is.isPromiseLike(Promise.resolve())).toBe(true)
    expect(is.isPromiseLike({ then: () => {} })).toBe(true)
    expect(is.isPromiseLike({})).toBe(false)
    expect(is.isPromiseLike(null)).toBe(false)
  })
})

describe("dom", () => {
  test("isElement", () => {
    expect(is.isElement({ nodeType: 1 })).toBe(true)
    expect(is.isElement({ nodeType: 3 })).toBe(false)
    expect(is.isElement(null)).toBe(false)
  })

  // No DOM implementation is loaded in this runtime, so HTMLCollection/NodeList
  // are undefined globals and the guarded checks always resolve to false here.
  test("isHTMLCollection returns false without a DOM", () => {
    expect(is.isHTMLCollection({})).toBe(false)
  })

  test("isNodeList returns false without a DOM", () => {
    expect(is.isNodeList({})).toBe(false)
  })
})

describe("composition", () => {
  test("isNil", () => {
    expect(is.isNil(null)).toBe(true)
    expect(is.isNil(undefined)).toBe(true)
    expect(is.isNil(0)).toBe(false)
    expect(is.isNil("")).toBe(false)
  })

  test("isEmpty", () => {
    expect(is.isEmpty("")).toBe(true)
    expect(is.isEmpty([])).toBe(true)
    expect(is.isEmpty({})).toBe(true)
    expect(is.isEmpty("hi")).toBe(false)
    expect(is.isEmpty([1])).toBe(false)
    expect(is.isEmpty({ a: 1 })).toBe(false)
  })
})
