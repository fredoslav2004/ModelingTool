import $ from "jquery";
import { Linkable } from "../core/contracts";

export type Tool = "select" | "rect" | "text" | "arrow";

export class UIState {
  tool: Tool = "select";
  /** temp storage for arrow first endpoint */
  pendingAnchor: Linkable | null = null;
  setTool(t: Tool) {
    this.tool = t;
    $("#toolbar button").removeClass("active");
    $(`#toolbar button[data-tool=${t}]`).addClass("active");
  }
}
