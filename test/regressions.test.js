import { describe, test, expect } from "bun:test"
import is from "../src/pp-is.js"

describe("regression: isUrl stateful regex (g flag + shared instance)", () => {
  test("returns the same result across repeated calls with the same input", () => {
    for (let i = 0; i < 5; i++) {
      expect(is.isUrl("example.com")).toBe(true)
    }
  })

  test("does not alternate results when interleaved with other valid urls", () => {
    const inputs = ["example.com", "https://example.com", "localhost", "192.168.1.1"]
    for (let i = 0; i < 3; i++) {
      for (const input of inputs) {
        expect(is.isUrl(input)).toBe(true)
      }
    }
  })
})

describe("regression: isEmail excluding digit '0' from the local part", () => {
  test("accepts a local part containing 0", () => {
    expect(is.isEmail("abc0@test.com")).toBe(true)
    expect(is.isEmail("0@test.com")).toBe(true)
    expect(is.isEmail("john.doe0@example.com")).toBe(true)
  })

  test("still accepts local parts without 0", () => {
    expect(is.isEmail("abc@test.com")).toBe(true)
  })
})

describe("regression: isNaN accepting partially-numeric strings", () => {
  test("rejects strings that are not fully numeric", () => {
    expect(is.isNaN("123abc")).toBe(true)
    expect(is.isNaN("12.5.6")).toBe(true)
    expect(is.isNaN("5px")).toBe(true)
  })

  test("still accepts fully numeric strings and numbers", () => {
    expect(is.isNaN("123")).toBe(false)
    expect(is.isNaN("12.5")).toBe(false)
    expect(is.isNaN(42)).toBe(false)
  })

  test("still flags an actual NaN as NaN", () => {
    expect(is.isNaN(NaN)).toBe(true)
  })
})

describe("regression: isFrozen/isSealed only recognizing plain objects", () => {
  test("isFrozen detects frozen arrays and functions, not just plain objects", () => {
    expect(is.isFrozen(Object.freeze([1, 2, 3]))).toBe(true)
    expect(is.isFrozen(Object.freeze({ a: 1 }))).toBe(true)
    expect(is.isFrozen(Object.freeze(function () {}))).toBe(true)
    expect(is.isFrozen([1, 2, 3])).toBe(false)
    expect(is.isFrozen({ a: 1 })).toBe(false)
  })

  test("isSealed detects sealed arrays and functions, not just plain objects", () => {
    expect(is.isSealed(Object.seal([1, 2, 3]))).toBe(true)
    expect(is.isSealed(Object.seal({ a: 1 }))).toBe(true)
    expect(is.isSealed([1, 2, 3])).toBe(false)
    expect(is.isSealed({ a: 1 })).toBe(false)
  })

  test("primitives match native Object.isFrozen/isSealed semantics (always frozen/sealed)", () => {
    expect(is.isFrozen(5)).toBe(true)
    expect(is.isFrozen("x")).toBe(true)
    expect(is.isFrozen(null)).toBe(true)
    expect(is.isFrozen(undefined)).toBe(true)
    expect(is.isSealed(5)).toBe(true)
    expect(is.isSealed(null)).toBe(true)
  })
})
