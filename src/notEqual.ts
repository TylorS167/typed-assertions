import { curry2, equals } from '167'

import { createAssertionError } from 'assertion-error-diff'

/**
 * Checks if two values are not equal in terms of value equality
 * 
 * @name notEqual<A>(expected: A, actual: A): A
 * @example
 * import { notEqual } from '@typed/assertions'
 * 
 * notEqual({ a: 1 }, { a: 2 }) // => { a: 2 }
 * 
 * notEqual({ a: 1 }, { a: 1 }) // throws AssertionError
 */
export const notEqual: NotEqual = curry2(function<A>(expected: A, actual: A): A {
  if (equals(expected, actual))
    throw createAssertionError(`Expected value is equal to actual value`, expected, actual)

  return actual
})

export interface NotEqual {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
}
