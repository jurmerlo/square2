import { Rectangle, type Color, type Graphics, type Vec2 } from '@square2/core';
import { Shape } from './shape';

type BoxShapeProps = {
  position: Vec2;
  rotation?: number;
  scale?: Vec2;
  color?: Color;
  filled: boolean;
  size: Vec2;
};

export class BoxShape extends Shape {
  filled: boolean;
  size: Vec2;

  private rect: Rectangle;

  constructor(props: BoxShapeProps) {
    super(props);
    const { filled, size } = props;

    this.filled = filled;
    this.size = size;

    this.rect = new Rectangle(-size.x / 2, -size.y / 2, size.x, size.y);
  }

  render(graphics: Graphics): void {
    if (this.filled) {
      graphics.drawFilledRect(this.rect);
    } else {
      graphics.drawRect(this.rect, 2);
    }
  }
}
