export interface SW {
    start?: number;
    end?: number;
    duration?: number;
    restart: () => void;
    stop: () => number;
}
export declare function sw(): SW;
//# sourceMappingURL=index.d.ts.map