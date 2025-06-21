export interface Renderable {
    /** Draw yourself on the provided 2-d context */
    render(ctx: CanvasRenderingContext2D): void;
}
export declare abstract class CommonObject implements Renderable {
    protected x: number;
    protected y: number;
    constructor(x?: number, y?: number);
    abstract render(ctx: CanvasRenderingContext2D): void;
}
export declare class Square extends CommonObject {
    private size;
    private color;
    constructor(x: number, y: number, size?: number, color?: string);
    render(ctx: CanvasRenderingContext2D): void;
}
