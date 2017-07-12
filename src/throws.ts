/**
 * Asserts that the given function throws
 * 
 * @name throws<Err extends Error>(fn: () => any): Err
 * @example 
 * import { throws } from '@typed/assertions'
 * 
 * throws(() => { throw new Error('foo') }) // => Error('foo')
 * throws(() => {}) // throws Error
 */
export function throws<Err extends Error = Error>(fn: () => any): Err {
  const error = new Error(`Did not throw`)

  try {
    fn()
    throw error
  } catch (e) {
    if (e === error) throw e

    return e
  }
}
