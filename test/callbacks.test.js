import { describe, test, expect } from "bun:test"
import is from "../src/pp-is.js"

describe("done/reject hook system", () => {
  test("calls done when the evaluation is positive", () => {
    let calledWith
    const result = is.isString("hello", (value) => { calledWith = value })
    expect(result).toBe(true)
    expect(calledWith).toBe("hello")
  })

  test("calls reject when the evaluation is negative", () => {
    let calledWith
    const result = is.isString(42, undefined, (value) => { calledWith = value })
    expect(result).toBe(false)
    expect(calledWith).toBe(42)
  })

  test("does not call reject when the evaluation is positive", () => {
    let rejectCalled = false
    is.isString("hello", undefined, () => { rejectCalled = true })
    expect(rejectCalled).toBe(false)
  })

  test("does not call done when the evaluation is negative", () => {
    let doneCalled = false
    is.isString(42, () => { doneCalled = true })
    expect(doneCalled).toBe(false)
  })

  test("done can override a positive result by returning a boolean", () => {
    const result = is.isString("hello", () => false)
    expect(result).toBe(false)
  })

  test("reject can override a negative result by returning a boolean", () => {
    const result = is.isString(42, undefined, () => true)
    expect(result).toBe(true)
  })

  test("a non-boolean return from done/reject does not override the result", () => {
    expect(is.isString("hello", () => "not a boolean")).toBe(true)
    expect(is.isString(42, undefined, () => "not a boolean")).toBe(false)
  })

  test("works without done/reject provided", () => {
    expect(is.isString("hello")).toBe(true)
    expect(is.isString(42)).toBe(false)
  })
})
