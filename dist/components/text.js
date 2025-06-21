export class Label {
    constructor(eid, x, y, text) {
        this.eid = eid;
        this.x = x;
        this.y = y;
        this.text = text;
    }
    draw(ctx) {
        ctx.fillStyle = "#000000";
        ctx.fillText(this.text, this.x, this.y);
    }
    anchor() {
        return new DOMPoint(this.x, this.y);
    }
}
