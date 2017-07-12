# @typed/assertions

## Get It
```sh
npm install --save-dev @typed/assertions
# or
yarn add --dev @typed/assertions
```

## Basic usage

```typescript
import { equal, ok } from '@typed/assertions'

class Foo {
  constructor() {
    this.bar = 'bar'
  }
}

// with mocha
describe('Foo', () => {
  it(`does bar`, () => {
    const foo = new Foo()

    ok(foo instanceof Foo)
    equal('bar', foo.bar)
  })
})
```

## API

<details>
  <summary id=createAssertionsEnvironment>createAssertionsEnvironment(): AssertionEnvironment</summary>
  <p>Creates an Assertions Environment where assertions can be counted</p>


  <p><strong>Example:</strong></p>

```typescript
import { createAssertionsEnvironment } from '@typed/assertions'

const { stats, assertions } = createAssertionsEnvironment()

const { ok } = assertions

console.log(stats.count) // => 0

ok(true)

console.log(stats.count) // => 1
```

</details>

<details>
  <summary id=equal&ltA&gt>equal&ltA&gt(expected: A, actual: A): A</summary>
  <p>Checks if 2 values are equal in terms of value equality</p>


  <p><strong>Example:</strong></p>

```typescript
import { equal } from '@typed/assertions'

equal({ a: 1 }, { a: 2 }) // throws AssertionError
```

</details>

<details>
  <summary id=notEqual&ltA&gt>notEqual&ltA&gt(expected: A, actual: A): A</summary>
  <p>Checks if two values are not equal in terms of value equality</p>


  <p><strong>Example:</strong></p>

```typescript
import { notEqual } from '@typed/assertions'

notEqual({ a: 1 }, { a: 2 }) // => { a: 2 }

notEqual({ a: 1 }, { a: 1 }) // throws AssertionError
```

</details>

<details>
  <summary id=notOk>notOk(actual: boolean): boolean</summary>
  <p>Checks if a value is false</p>


  <p><strong>Example:</strong></p>

```typescript
import { notOk } from '@typed/assertions'

notOk(false) // => false
notOk(true) // throws AssertionError
```

</details>

<details>
  <summary id=ok>ok(actual: boolean): boolean</summary>
  <p>Checks if a value is true</p>


  <p><strong>Example:</strong></p>

```typescript
import { ok } from '@typed/assertions'

ok(false) // throws AssertionError
ok(true) // => true
```

</details>

<details>
  <summary id=rejects&ltErr extends Error&gt>rejects&ltErr extends Error&gt(promise: Promise&ltany&gt): Promise&ltErr&gt</summary>
  <p>Asserts that a Promise has rejected, returning a resolved Promise containing the error.<br>If the promise does not reject returns a rejected Promise.</p>


  <p><strong>Example:</strong></p>

```typescript
import { rejects } from '@typed/assertions'

rejects(Promise.reject(new Error('foo))) // => resolved Promise containing Error('foo')
rejects(Promise.resolve()) // => rejected Promise
```

</details>

<details>
  <summary id=same&ltA&gt>same&ltA&gt(expected: A, actual: A): A</summary>
  <p>Checks if 2 values are the same in terms of <code>===</code></p>


  <p><strong>Example:</strong></p>

```typescript
import { same } from '@typed/assertions'

same({}, {}) // throws AssertionError
same(1, 1) // => 1
```

</details>

<details>
  <summary id=throws&ltErr extends Error&gt>throws&ltErr extends Error&gt(fn: () =&gt any): Err</summary>
  <p>Asserts that the given function throws</p>


  <p><strong>Example:</strong></p>

```typescript
import { throws } from '@typed/assertions'

throws(() => { throw new Error('foo') }) // => Error('foo')
throws(() => {}) // throws Error
```

</details>
