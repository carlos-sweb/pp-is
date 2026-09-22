/**
 * Type definitions for pp-is
 * https://github.com/carlos-sweb/pp-is
 */

/** Optional callback. Returning a boolean overrides the check result. */
export type CheckCallback<T = unknown> = (value: T) => boolean | void

/**
 * Checker with optional done/reject hooks.
 * Without callbacks, TypeScript narrows `value` via the type predicate.
 */
export type TypeCheck<T> = {
  (value: unknown): value is T
  (value: unknown, done?: CheckCallback, reject?: CheckCallback): boolean
}

/** Checker that always returns boolean (no useful narrow). */
export type BooleanCheck = (
  value: unknown,
  done?: CheckCallback,
  reject?: CheckCallback
) => boolean

export interface PpIs {
  // Primitives
  isArray: TypeCheck<unknown[]>
  isString: TypeCheck<string>
  isNumber: TypeCheck<number>
  isBoolean: TypeCheck<boolean>
  isFunction: TypeCheck<(...args: never[]) => unknown>
  isObject: TypeCheck<Record<string, unknown>>
  isDate: TypeCheck<Date>
  isNull: TypeCheck<null>
  isUndefined: TypeCheck<undefined>
  isRegExp: TypeCheck<RegExp>
  isPromise: TypeCheck<Promise<unknown>>
  isSymbol: TypeCheck<symbol>
  isBigInt: TypeCheck<bigint>

  // Numbers
  isInteger: TypeCheck<number>
  isFinite: TypeCheck<number>
  isPositive: TypeCheck<number>
  isNegative: TypeCheck<number>
  isNaN: BooleanCheck

  // Strings / content
  isAlpha: TypeCheck<string>
  isAlphanumeric: TypeCheck<string>
  isNumericString: TypeCheck<string>
  isLowercase: TypeCheck<string>
  isUppercase: TypeCheck<string>
  isBlank: TypeCheck<string>
  isEmpty: BooleanCheck

  // Format
  isEmail: TypeCheck<string>
  isUrl: TypeCheck<string>
  isJSON: TypeCheck<string>
  isUUID: TypeCheck<string>
  isIPv4: TypeCheck<string>
  isHexColor: TypeCheck<string>

  // Behavior
  isIterable: TypeCheck<Iterable<unknown>>
  isTruthy: BooleanCheck
  isFalsy: BooleanCheck
  isCallable: TypeCheck<(...args: never[]) => unknown>
  isAsyncFunction: TypeCheck<(...args: never[]) => Promise<unknown>>
  isPromiseLike: TypeCheck<PromiseLike<unknown>>

  // DOM
  isElement: TypeCheck<Element>
  isNodeList: TypeCheck<NodeList>
  isHTMLCollection: TypeCheck<HTMLCollection>

  // Composition
  isNil: TypeCheck<null | undefined>

  // Object state
  isFrozen: BooleanCheck
  isSealed: BooleanCheck
}

declare const ppIs: PpIs

export default ppIs

declare global {
  /** Available when loading `dist/pp-is.min.js` via a script tag. */
  var ppIs: PpIs
}
