const entities = new Map();
const systems = [];
let nextEid = 0;
export function newEid() {
    return nextEid++;
}
export function addComponent(c) {
    const list = entities.get(c.eid) ?? [];
    list.push(c);
    entities.set(c.eid, list);
}
export function getComponents(guard) {
    const list = [];
    entities.forEach((cs) => cs.forEach((c) => guard(c) && list.push(c)));
    return list;
}
export function registerSystem(s) {
    systems.push(s);
}
/** internal RAF driver */
let last = performance.now();
function tick(now = performance.now()) {
    const dt = (now - last) / 1e3;
    last = now;
    systems.forEach((s) => s(dt));
    requestAnimationFrame(tick);
}
requestAnimationFrame(tick);
/** helper narrowers */
export const isRenderable = (c) => c.draw !== undefined;
