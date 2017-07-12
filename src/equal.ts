import { curry2, equals } from '167'

import { createAssertionError } from 'assertion-error-diff'

/**
 * Checks if 2 values are equal in terms of value equality
 * 
 * @name equal<A>(expected: A, actual: A): A
 * @example
 * import { equal } from '@typed/assertions'
 * 
 * equal({ a: 1 }, { a: 2 }) // throws AssertionError
 */
export const equal: Equal = curry2(function<A>(expected: A, actual: A): A {
  if (!equals(expected, actual))
    throw createAssertionError(`Expected value is not equal to actual value`, expected, actual)

  return actual
})

export interface Equal {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
}
