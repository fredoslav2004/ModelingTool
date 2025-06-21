export class Arrow {
    constructor(eid, a, b) {
        this.eid = eid;
        this.a = a;
        this.b = b;
    }
    draw(ctx) {
        const p = this.a.anchor();
        const q = this.b.anchor();
        ctx.strokeStyle = "#000000";
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(q.x, q.y);
        ctx.stroke();
        // ultra-minimal arrow head
        const dx = q.x - p.x, dy = q.y - p.y;
        const len = Math.hypot(dx, dy);
        const ux = dx / len, uy = dy / len;
        const size = 8;
        ctx.beginPath();
        ctx.moveTo(q.x, q.y);
        ctx.lineTo(q.x - ux * size + (uy * size) / 2, q.y - uy * size - (ux * size) / 2);
        ctx.lineTo(q.x - ux * size - (uy * size) / 2, q.y - uy * size + (ux * size) / 2);
        ctx.closePath();
        ctx.fillStyle = "#000000";
        ctx.fill();
    }
}
