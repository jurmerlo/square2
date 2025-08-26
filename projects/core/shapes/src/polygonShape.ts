import { type Graphics, Vec2 } from '@square2/core';
import { Shape, type ShapeProps } from './shape';

type PolygonShapeProps = ShapeProps & {
  points: Vec2[];
  filled: boolean;
};

export class PolygonShape extends Shape {
  points: Vec2[];
  filled: boolean;

  private center = new Vec2();

  constructor(props: PolygonShapeProps) {
    super(props);
    this.points = props.points;
    this.filled = props.filled;
  }

  override render(graphics: Graphics): void {
    if (this.filled) {
      graphics.drawFilledPolygon(this.center, this.points);
    } else {
      graphics.drawPolygon(this.center, this.points, 2);
    }
  }
}
