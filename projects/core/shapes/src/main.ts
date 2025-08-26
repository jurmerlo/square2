import { Color, Core, type Graphics, Vec2 } from '@square2/core';
import { BoxShape } from './boxShape';
import { CircleShape } from './circleShape';
import { PolygonShape } from './polygonShape';
import type { Shape } from './shape';
import { TriangleShape } from './triangleShape';

const circle1: CircleShape = new CircleShape({
  position: new Vec2(0, 100),
  radius: 20,
  segments: 32,
  color: new Color(1, 0.8, 0.4),
  filled: true,
});

const circle2: CircleShape = new CircleShape({
  position: new Vec2(320, 100),
  radius: 30,
  segments: 32,
  color: new Color(0.4, 0.8, 1),
  filled: false,
});

let circle2ScaleSpeed = 2;

const box1: BoxShape = new BoxShape({
  position: new Vec2(200, 250),
  color: new Color(0.8, 0.4, 0.4),
  filled: true,
  size: new Vec2(50, 50),
});

const box2: BoxShape = new BoxShape({
  position: new Vec2(400, 250),
  color: new Color(0.4, 0.8, 0.4),
  filled: false,
  size: new Vec2(100, 50),
});

const box1RotationSpeed = 50;

const triangle: TriangleShape = new TriangleShape({
  position: new Vec2(500, 350),
  color: new Color(0.4, 0.4, 0.8),
  point1: new Vec2(0, 0),
  point2: new Vec2(50, 100),
  point3: new Vec2(100, 0),
});

const polygon1: PolygonShape = new PolygonShape({
  position: new Vec2(300, 400),
  color: new Color(0.8, 0.4, 0.8),
  points: [new Vec2(-50, 0), new Vec2(-35, -35), new Vec2(0, -50), new Vec2(35, -35), new Vec2(50, 0)],
  filled: false,
});

const polygon2: PolygonShape = new PolygonShape({
  position: new Vec2(100, 450),
  color: new Color(0.4, 0.8, 0.4),
  points: [new Vec2(0, -10), new Vec2(30, -50), new Vec2(60, 0), new Vec2(-60, 0), new Vec2(-30, -50)],
  filled: true,
});

function update(deltaTime: number): void {
  circle1.position.x += 50 * deltaTime;
  if (circle1.position.x > 640) {
    circle1.position.x = 0;
  }

  circle2.scale.x += circle2ScaleSpeed * deltaTime;
  circle2.scale.y += circle2ScaleSpeed * deltaTime;

  if (circle2ScaleSpeed > 0 && circle2.scale.x >= 2) {
    circle2ScaleSpeed *= -1;
  } else if (circle2ScaleSpeed < 0 && circle2.scale.x <= 0.5) {
    circle2ScaleSpeed *= -1;
  }

  box1.rotation += box1RotationSpeed * deltaTime;

  polygon1.rotation -= 30 * deltaTime;
}

const shapes: Shape[] = [circle1, circle2, box1, box2, triangle, polygon1, polygon2];

const lineStart: Vec2 = new Vec2(500, 50);
const lineEnd: Vec2 = new Vec2(600, 150);

function render(graphics: Graphics): void {
  graphics.start();

  for (const shape of shapes) {
    shape.updateMatrix();
    graphics.pushTransform(shape.matrix);
    graphics.color.copyFrom(shape.color);
    shape.render(graphics);
    graphics.popTransform();
  }

  graphics.color.set(1, 1, 1, 1);
  graphics.drawLine(lineStart, lineEnd, 'center', 2);

  graphics.commit();
}

const core: Core = new Core({ width: 640, height: 480 });
core.start();
core.callbacks.addRenderCallback(render);
core.callbacks.addUpdateCallback(update);
