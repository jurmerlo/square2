import { type Graphics, Vec2 } from '@square2/core';
import { Shape, type ShapeProps } from './shape';

type CircleShapeProps = ShapeProps & {
  filled: boolean;
  radius: number;
  segments?: number;
};

export class CircleShape extends Shape {
  filled: boolean;
  radius: number;
  segments: number;

  private center = new Vec2();

  constructor(props: CircleShapeProps) {
    super(props);
    const { filled, radius, segments } = props;

    this.filled = filled;
    this.radius = radius;
    this.segments = segments ?? 32;
  }

  override render(graphics: Graphics): void {
    if (this.filled) {
      graphics.drawFilledCircle(this.center, this.radius, this.segments);
    } else {
      graphics.drawCircle(this.center, this.radius, this.segments, 2);
    }
  }
}
