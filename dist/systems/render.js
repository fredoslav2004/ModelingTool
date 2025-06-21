import { getComponents, isRenderable } from "../core/ecs.js";
export function createRenderSystem(canvas) {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    function resize() {
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.scale(dpr, dpr);
    }
    resize();
    addEventListener("resize", resize);
    const sys = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        getComponents(isRenderable).forEach((r) => r.draw(ctx));
    };
    import("../core/ecs.js").then((m) => m.registerSystem(sys));
}
