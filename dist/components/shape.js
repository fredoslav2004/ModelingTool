export class Rect {
    constructor(eid, x, y, w = 120, h = 80) {
        this.eid = eid;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    draw(ctx) {
        ctx.strokeStyle = "#000000";
        ctx.strokeRect(this.x, this.y, this.w, this.h);
    }
    anchor() {
        return new DOMPoint(this.x + this.w / 2, this.y + this.h / 2);
    }
}
