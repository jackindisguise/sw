// src/index.ts
import assert from "assert/strict";
function sw() {
  let start = Date.now();
  let end = void 0;
  let duration = void 0;
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
      end = void 0;
      duration = void 0;
    },
    stop: () => {
      assert.equal(end, void 0, "SW already stopped");
      end = Date.now();
      duration = end - start;
      return duration;
    }
  };
}
export {
  sw
};
