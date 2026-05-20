import assert from "node:assert/strict";
import test from "node:test";
import { sw } from "../dist/index.mjs";
function withMockedNow(values) {
	const originalNow = Date.now;
	let index = 0;
	Date.now = () => {
		const value = values[Math.min(index, values.length - 1)];
		index += 1;
		return value || 0;
	};
	return () => {
		Date.now = originalNow;
	};
}
test("sw() creates a stopwatch object with live state", () => {
	const restore = withMockedNow([100]);
	try {
		const timer = sw();
		assert.equal(timer.start, 100);
		assert.equal(timer.end, undefined);
		assert.equal(timer.duration, undefined);
		assert.equal(typeof timer.restart, "function");
		assert.equal(typeof timer.stop, "function");
	} finally {
		restore();
	}
});
test("stop() records end time and duration", () => {
	const restore = withMockedNow([100, 160]);
	try {
		const timer = sw();
		const duration = timer.stop();
		assert.equal(duration, 60);
		assert.equal(timer.end, 160);
		assert.equal(timer.duration, 60);
	} finally {
		restore();
	}
});
test("restart() clears the stopped state", () => {
	const restore = withMockedNow([100, 150, 200, 245]);
	try {
		const timer = sw();
		assert.equal(timer.stop(), 50);
		timer.restart();
		assert.equal(timer.start, 200);
		assert.equal(timer.end, undefined);
		assert.equal(timer.duration, undefined);
		assert.equal(timer.stop(), 45);
	} finally {
		restore();
	}
});
test("stop() throws when called twice without restart()", () => {
	const restore = withMockedNow([100, 150]);
	try {
		const timer = sw();
		assert.equal(timer.stop(), 50);
		assert.throws(() => timer.stop(), /SW already stopped/);
	} finally {
		restore();
	}
});
