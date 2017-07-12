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
