import type { Graphics, Vec2 } from '@square2/core';
import { Shape, type ShapeProps } from './shape';

type TriangleShapeProps = ShapeProps & {
  point1: Vec2;
  point2: Vec2;
  point3: Vec2;
};

export class TriangleShape extends Shape {
  point1: Vec2;
  point2: Vec2;
  point3: Vec2;

  constructor(props: TriangleShapeProps) {
    super(props);
    const { point1, point2, point3 } = props;

    this.point1 = point1;
    this.point2 = point2;
    this.point3 = point3;
  }

  override render(graphics: Graphics): void {
    graphics.drawFilledTriangle(this.point1, this.point2, this.point3);
  }
}
