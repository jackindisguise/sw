import assert from "node:assert/strict";
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
            assert.equal(end, undefined, "SW already stopped");
            end = Date.now();
            duration = end - start;
            return duration;
        },
    };
}
export default sw;
//# sourceMappingURL=index.js.map