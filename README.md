## What is this?

This sample project demonstrates https://github.com/react-bootstrap/react-bootstrap/issues/3628

## How do I use this?

```
git clone ...
yarn install
yarn test
```

observe console output

```
yarn run v1.17.3
$ jest
 PASS  components/tooltip.spec.js
  Tooltip component
    ✓ renders correctly (3ms)

  console.error node_modules/react-overlays/node_modules/prop-types/factoryWithTypeCheckers.js:21
    Warning: Invalid argument supplied to oneOf, expected an instance of array.

Test Suites: 1 passed, 1 total
Tests:       1 passed, 1 total
Snapshots:   0 total
Time:        1.85s, estimated 2s
Ran all test suites.
✨  Done in 2.73s.
```