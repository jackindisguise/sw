# stopwatch

A small TypeScript stopwatch utility.

## Install

```bash
npm install stopwatch
```

## Usage

```ts
import { StopWatch } from "stopwatch";

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
