import { TestCollection, describe, given, it } from '@typed/test'

import { throws } from './throws'

export const test: TestCollection = describe(`throws`, [
  given(`a function that throws`, [
    it(`returns the error`, ({ same }) => {
      const err = throws(() => {
        throw new Error(`Foo`)
      })

      same(err.message, `Foo`)
    }),
  ]),

  given(`a function that does not throw`, [
    it(`throws an error`, ({ same }) => {
      try {
        throws(() => {})
        throw new Error(`Function should not throw`)
      } catch (e) {
        same(e.message, `Did not throw`)
      }
    }),
  ]),
])
