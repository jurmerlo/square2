import { Color, type Graphics, Mat4, toRad, Vec2 } from '@square2/core';

export type ShapeProps = {
  position: Vec2;
  rotation?: number;
  scale?: Vec2;
  color?: Color;
};

export class Shape {
  position: Vec2;
  rotation: number;
  scale: Vec2;
  color: Color;
  matrix: Mat4;

  constructor({ position, rotation, scale, color }: ShapeProps) {
    this.position = position;
    this.rotation = rotation ?? 0;
    this.scale = scale ?? new Vec2(1, 1);
    this.color = color ?? new Color(1, 1, 1, 1);
    this.matrix = new Mat4();
  }

  updateMatrix(): void {
    Mat4.from2dRotationTranslationScale(
      toRad(this.rotation),
      this.position.x,
      this.position.y,
      this.scale.x,
      this.scale.y,
      this.matrix,
    );
  }

  render(_graphics: Graphics): void {}
}
