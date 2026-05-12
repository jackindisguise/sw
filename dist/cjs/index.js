"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StopWatch = void 0;
class StopWatch {
  _start;
  _stop;
  _duration;
  constructor() {
    this._start = Date.now();
  }
  stop() {
    this._stop = Date.now();
    this._duration = this._stop - this._start;
    return this._duration;
  }
}
exports.StopWatch = StopWatch;