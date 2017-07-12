import { curry2 } from '167'

/**
 * Checks if 2 values are the same in terms of `===`
 * 
 * @name same<A>(expected: A, actual: A): A
 * @example
 * import { same } from '@typed/assertions'
 * 
 * same({}, {}) // throws AssertionError
 * same(1, 1) // => 1
 */
export const same: Same = curry2(function<A>(expected: A, actual: A): A {
  if (expected !== actual) throw new Error(`Expected value is not strictly equal to actual value`)

  return actual
})

export interface Same {
  <A>(expected: A, actual: A): A
  <A>(expected: A): (actual: A) => A
}
