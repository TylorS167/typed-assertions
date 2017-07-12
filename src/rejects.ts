import { id } from '167'

/**
 * Asserts that a Promise has rejected, returning a resolved Promise containing the error.
 * If the promise does not reject returns a rejected Promise.
 * 
 * @name rejects<Err extends Error>(promise: Promise<any>): Promise<Err>
 * @example
 * import { rejects } from '@typed/assertions'
 * 
 * rejects(Promise.reject(new Error('foo))) // => resolved Promise containing Error('foo')
 * rejects(Promise.resolve()) // => rejected Promise
 */
export const rejects = <Err extends Error = Error>(promise: Promise<any>): Promise<Err> =>
  promise.then(throwError, id)

function throwError() {
  throw new Error(`Promise did not reject`)
}
