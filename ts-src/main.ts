import $ from "jquery";
import { Square, Renderable } from "./definitions";

let canvas!: HTMLCanvasElement;
let ctx!: CanvasRenderingContext2D;

const objects: Renderable[] = [
  new Square(60, 60, 80), // initial demo entity
];

jQuery(() => {
  canvas = $("#mainCanvas")[0] as HTMLCanvasElement;
  ctx = canvas.getContext("2d")!;
  renderAll();
});

export function renderAll(): void {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (const o of objects) o.render(ctx);
}