import { createAssertionError } from 'assertion-error-diff'

/**
 * Checks if a value is false
 * 
 * @name notOk(actual: boolean): boolean
 * @example
 * import { notOk } from '@typed/assertions'
 * 
 * notOk(false) // => false
 * notOk(true) // throws AssertionError
 */
export function notOk(actual: boolean): boolean {
  if (!actual) return actual

  throw createAssertionError(`Value is truthy`, true, actual)
}
