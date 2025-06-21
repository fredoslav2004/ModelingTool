import $ from "jquery";
import { newEid, addComponent, getComponents } from "./core/ecs.js";
import { createRenderSystem } from "./systems/render.js";
import { Linkable } from "./core/contracts.js";
import { Rect } from "./components/shape.js";
import { Label } from "./components/text.js";
import { Arrow } from "./components/link.js";
import { UIState } from "./ui/state.js";

const canvas = document.getElementById("stage") as HTMLCanvasElement;
createRenderSystem(canvas);

const ui = new UIState();
ui.setTool("rect"); // default tool

$("#toolbar").on("click", "button", (e) => {
  ui.setTool($(e.currentTarget).data("tool"));
});

/** hit-testing naive O(n), fine for prototype */
function objectAt(x: number, y: number): Linkable | null {
  const hit = 6;

  const rects = getComponents((c): c is Rect => c instanceof Rect);
  for (const r of rects)
    if (x >= r.x - hit && x <= r.x + r.w + hit &&
        y >= r.y - hit && y <= r.y + r.h + hit)
      return r;

  const labels = getComponents((c): c is Label => c instanceof Label);
  for (const t of labels)
    if (Math.hypot(t.x - x, t.y - y) < 12) return t;

  return null;
}

canvas.addEventListener("pointerdown", async (ev) => {
  const rect = canvas.getBoundingClientRect();
  const x = ev.clientX - rect.left;
  const y = ev.clientY - rect.top;

  switch (ui.tool) {
    case "rect": {
      addComponent(new Rect(newEid(), x - 60, y - 40));
      break;
    }
    case "text": {
      const value = prompt("Text:")?.trim();
      if (value) addComponent(new Label(newEid(), x, y, value));
      break;
    }
    case "arrow": {
      const obj = objectAt(x, y);
      if (!obj) break;

      if (!ui.pendingAnchor) {
        ui.pendingAnchor = obj;
        $("#status").text("Pick target…");
      } else {
        addComponent(new Arrow(newEid(), ui.pendingAnchor, obj));
        ui.pendingAnchor = null;
        $("#status").text("");
      }
      break;
    }
    // select/drag left for later
  }
});
