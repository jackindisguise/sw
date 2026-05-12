# sw

A small TypeScript stopwatch utility.

## Install

```bash
npm install jackindisguise/sw
```

## Usage

### ESM

```ts
import { StopWatch } from "sw";

const sw = new StopWatch();

// ...do some work...

const duration = sw.stop();
console.log(`Elapsed: ${duration} ms`);
```

### CJS

```js
const { StopWatch } = require("sw");

const sw = new StopWatch();

// ...do some work...

const duration = sw.stop();
console.log(`Elapsed: ${duration} ms`);
```

## Build

```bash
npm run build
```

This compiles the TypeScript source to ESM and then generates CommonJS output in `dist/`.
