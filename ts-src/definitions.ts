// definitions.ts
export interface Renderable {
  /** Draw yourself on the provided 2-d context */
  render(ctx: CanvasRenderingContext2D): void;
}

export abstract class CommonObject implements Renderable {
  constructor(protected x = 0, protected y = 0) {}
  abstract render(ctx: CanvasRenderingContext2D): void;
}

/* demo concrete shape -------------------------------------------------- */
export class Square extends CommonObject {
  constructor(
    x: number,
    y: number,
    private size = 40,
    private color = "#ff3232"
  ) {
    super(x, y);
  }
  override render(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.size, this.size);
  }
}
