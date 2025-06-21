import $ from "jquery";
export class UIState {
    constructor() {
        this.tool = "select";
        /** temp storage for arrow first endpoint */
        this.pendingAnchor = null;
    }
    setTool(t) {
        this.tool = t;
        $("#toolbar button").removeClass("active");
        $(`#toolbar button[data-tool=${t}]`).addClass("active");
    }
}
