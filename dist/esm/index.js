export class StopWatch {
    _start;
    _stop;
    _duration;
    constructor() {
        this._start = Date.now();
    }
    restart() {
        this._start = Date.now();
        this._stop = undefined;
        this._duration = undefined;
    }
    stop() {
        this._stop = Date.now();
        this._duration = this._stop - this._start;
        return this._duration;
    }
}
//# sourceMappingURL=index.js.map