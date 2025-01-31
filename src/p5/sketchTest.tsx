import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { Vector } from "p5";

function sketch(p5: P5CanvasInstance) {
  let canvas;
  class Entit {
    zeroVec: Vector = p5.createVector(0, 0);
    slowVec: Vector = p5.createVector(-0.01, -0.01);

    pos: Vector;
    vel: Vector;
    acc: Vector;
    dir: Vector;
    size: number;
    speed: number;

    constructor(x: number, y: number, size: number, speed: number) {
      this.pos = p5.createVector(x, y);
      this.vel = p5.createVector(0, 0);
      this.acc = p5.createVector(0, 0);
      this.dir = p5.createVector(0, 0);
      this.size = size;
      this.speed = speed;
    }

    show() {
      p5.fill("#888888");
      p5.square(this.pos.x, this.pos.y, this.size);
    }

    update() {
      this.move();
      this.show();
    }

    move() {
      p5.keyIsDown(68) ? (this.acc.x += this.speed) : null;
      p5.keyIsDown(65) ? (this.acc.x -= this.speed) : null;
      p5.keyIsDown(87) ? (this.acc.y -= this.speed) : null;
      p5.keyIsDown(83) ? (this.acc.y += this.speed) : null;
      this.acc.limit(3);

      this.vel.add(this.acc).limit(10);
      this.pos.add(this.vel);

      this.acc.set();

      this.vel != this.zeroVec ? this.vel.slerp(this.zeroVec, 0.2) : null;

      // keyIsDown(68)? this.x+=this.speed: null;
      // keyIsDown(65)? this.x-=this.speed: null;
      // keyIsDown(87)? this.y-=this.speed: null;
      // keyIsDown(83)? this.y+=this.speed: null;
    }
  }

  let tst = new Entit(200, 200, 150, 2);

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight);
    canvas.position(0, 0);
    canvas.style("z-index", "-2");
  };

  p5.draw = () => {
    p5.background(27, 27, 27);
    tst.update();
  };
}

export default function Sketch() {
  return <ReactP5Wrapper sketch={sketch} />;
}
