import { equal } from './equal'
import { notEqual } from './notEqual'
import { notOk } from './notOk'
import { ok } from './ok'
import { rejects } from './rejects'
import { same } from './same'
import { throws } from './throws'

export interface Assertions {
  readonly equal: typeof equal
  readonly notEqual: typeof notEqual
  readonly notOk: typeof notOk
  readonly ok: typeof ok
  readonly rejects: typeof rejects
  readonly same: typeof same
  readonly throws: typeof throws
}

export interface Stats {
  count: number
}

export interface AssertionEnvironment {
  stats: Stats
  assertions: Assertions
}
