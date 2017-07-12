import { createAssertionError } from 'assertion-error-diff'

/**
 * Checks if a value is true
 * 
 * @name ok(actual: boolean): boolean
 * @example
 * import { ok } from '@typed/assertions'
 * 
 * ok(false) // throws AssertionError
 * ok(true) // => true
 */
export function ok(actual: boolean): boolean {
  if (actual) return actual

  throw createAssertionError(`Value is not truthy`, true, actual)
}
