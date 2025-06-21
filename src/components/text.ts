import { Renderable, Linkable } from "../core/contracts.js";

export class Label implements Renderable, Linkable {
  constructor(
    public eid: number,
    public x: number,
    public y: number,
    public text: string
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.fillStyle = "#000000";
    ctx.fillText(this.text, this.x, this.y);
  }
  anchor() {
    return new DOMPoint(this.x, this.y);
  }
}
