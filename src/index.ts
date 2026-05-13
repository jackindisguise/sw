import assert from "node:assert/strict";

export interface SW {
	start?: number;
	end?: number;
	duration?: number;
	restart: () => void;
	stop: () => number;
}

function sw(): SW {
	let start = Date.now();
	let end: number | undefined = undefined;
	let duration: number | undefined = undefined;
	return {
		get start() {
			return start;
		},

		get end() {
			return end;
		},

		get duration() {
			return duration;
		},

		restart: () => {
			start = Date.now();
			end = undefined;
			duration = undefined;
		},

		stop: () => {
			assert.equal(end, undefined, "SW already stopped");
			end = Date.now();
			duration = end - start;
			return duration;
		},
	} as SW;
}

export default sw;
