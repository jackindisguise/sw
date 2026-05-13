"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _strict = _interopRequireDefault(require("node:assert/strict"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function sw() {
  let start = Date.now();
  let end = undefined;
  let duration = undefined;
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
      _strict.default.equal(end, undefined, "SW already stopped");
      end = Date.now();
      duration = end - start;
      return duration;
    }
  };
}
var _default = exports.default = sw;