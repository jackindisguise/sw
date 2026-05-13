# sw

A small stopwatch utility that returns a plain object.

## Install

```bash
npm install jackindisguise/sw
```

## Usage

### ESM

```ts
import { sw } from "sw";

const timer = sw();

// ...do some work...

const duration = timer.stop();

console.log({
  start: timer.start,
  end: timer.end,
  duration,
});
```

### CJS

```js
const { sw } = require("sw");

const timer = sw();

// ...do some work...

const duration = timer.stop();

console.log({
  start: timer.start,
  end: timer.end,
  duration,
});
```

## API

`sw()` returns an object with these members:

```ts
{
  start?: number;
  end?: number;
  duration?: number;
  restart(): void;
  stop(): number;
}
```

Behavior:

- `start` is set when the stopwatch is created or restarted.
- `stop()` records the current time in `end`, sets `duration`, and returns the elapsed milliseconds.
- `restart()` clears `end` and `duration`, then starts timing again.
- Calling `stop()` twice without a `restart()` throws `SW already stopped`.

## Test

```bash
npm test
```

This runs the Node built-in test runner against the packaged ESM build.

## Build

```bash
npm run build
```

This compiles the TypeScript source to ESM and then generates CommonJS output in `dist/`.
