import { AssertionEnvironment, Assertions, Stats } from './types'

import { equal } from './equal'
import { notEqual } from './notEqual'
import { notOk } from './notOk'
import { ok } from './ok'
import { rejects } from './rejects'
import { same } from './same'
import { throws } from './throws'

/**
 * Creates an Assertions Environment where assertions can be counted
 * 
 * @name createAssertionsEnvironment(): AssertionEnvironment
 * @example
 * import { createAssertionsEnvironment } from '@typed/assertions'
 * 
 * const { stats, assertions } = createAssertionsEnvironment()
 * 
 * const { ok } = assertions
 * 
 * console.log(stats.count) // => 0
 * 
 * ok(true)
 * 
 * console.log(stats.count) // => 1
 */
export function createAssertionsEnvironment(): AssertionEnvironment {
  const stats: Stats = { count: 0 }

  const assertions: Assertions = {
    equal: wrapAssertionInProxy(equal, stats),
    notEqual: wrapAssertionInProxy(notEqual, stats),
    notOk: wrapAssertionInProxy(notOk, stats),
    ok: wrapAssertionInProxy(ok, stats),
    rejects: wrapAssertionInProxy(rejects, stats),
    same: wrapAssertionInProxy(same, stats),
    throws: wrapAssertionInProxy(throws, stats),
  }

  return { stats, assertions }
}

function wrapAssertionInProxy<A extends Function>(fn: A, stats: Stats): A {
  return new Proxy(fn, {
    apply(target, that, args) {
      stats.count++

      return target.apply(that, args)
    },
  })
}
