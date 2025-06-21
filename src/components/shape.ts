import { Renderable, Linkable } from "../core/contracts.js";

export class Rect implements Renderable, Linkable {
  constructor(
    public eid: number,
    public x: number,
    public y: number,
    public w = 120,
    public h = 80
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = "#000000";
    ctx.strokeRect(this.x, this.y, this.w, this.h);
  }
  anchor() {
    return new DOMPoint(this.x + this.w / 2, this.y + this.h / 2);
  }
}
