export interface Component {
  readonly eid: number;
}

export interface Renderable extends Component {
  draw(ctx: CanvasRenderingContext2D): void;
}

export interface Linkable extends Component {
  anchor(): DOMPoint;
}

export type System = (dt: number) => void;
