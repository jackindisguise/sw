interface SW {
    start?: number;
    end?: number;
    duration?: number;
    restart: () => void;
    stop: () => number;
}
declare function sw(): SW;

export { type SW, sw };
