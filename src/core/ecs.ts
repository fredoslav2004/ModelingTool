import { Component, System, Renderable } from "./contracts.js";

const entities = new Map<number, Component[]>();
const systems: System[] = [];
let nextEid = 0;

export function newEid() {
  return nextEid++;
}

export function addComponent(c: Component) {
  const list = entities.get(c.eid) ?? [];
  list.push(c);
  entities.set(c.eid, list);
}

export function getComponents<T extends Component>(
  guard: (c: Component) => c is T
): T[] {
  const list: T[] = [];
  entities.forEach((cs) => cs.forEach((c) => guard(c) && list.push(c)));
  return list;
}

export function registerSystem(s: System) {
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
export const isRenderable = (c: Component): c is Renderable =>
  (c as Renderable).draw !== undefined;
