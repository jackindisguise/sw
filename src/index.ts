export class StopWatch {
	private _start: number;
	private _stop?: number;
	private _duration?: number;
	constructor() {
		this._start = Date.now();
	}

	stop() {
		this._stop = Date.now();
		this._duration = this._stop - this._start;
		return this._duration;
	}
}
