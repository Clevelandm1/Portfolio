import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { Vector } from "p5";
import { useState } from "react";

function collisionA(p5: P5CanvasInstance) {
  let canvas;
  let bg = 150;
  let boardColor = 40;

  class Ball {
    pos: Vector;
    vel: Vector;
    acc: Vector;
    size: number;
    r: number;
    onGround: boolean;
    colliding: boolean;

    constructor(x: number, y: number, size: number) {
      this.pos = p5.createVector(x, y);
      this.vel = p5.createVector(0, 0);
      this.acc = p5.createVector(0, 2.45);
      this.size = size;
      this.r = size / 2;
      this.onGround = false;
      this.colliding = false;
    }

    update() {
      !this.onGround ? this.vel.add(this.acc) : (this.vel.y = 0);
      // this.vel.limit(20);
      this.pos.add(this.vel);
    }

    show() {
      this.update();
      p5.circle(this.pos.x, this.pos.y, this.size);
    }

    addPos(x: number, y: number) {
      this.pos.add(x, y);
    }

    setOnGround(update: boolean) {
      this.onGround = update;
    }

    xUBound() {
      return this.pos.x + this.r;
    }

    xLBound() {
      return this.pos.x - this.r;
    }

    yUBound() {
      return this.pos.y - this.r;
    }

    yLBound() {
      return this.pos.y + this.r;
    }
  }

  class World {
    top: number;
    bottom: number;
    left: number;
    right: number;
    checks: Array<Ball>;
    addState: boolean;
    collision: boolean;

    constructor(top: number, bottom: number, left: number, right: number) {
      this.top = top;
      this.bottom = bottom;
      this.left = left;
      this.right = right;
      this.checks = [];
      this.addState = false;
      this.collision = false;
    }

    start() {}

    wallCollisionChecker() {
      this.checks.map((ball) => {
        ball.xUBound() >= this.right
          ? ball.addPos(-(ball.xUBound() - this.right), 0)
          : null;

        ball.xLBound() <= this.left
          ? ball.addPos(this.left - ball.xLBound(), 0)
          : null;

        ball.yLBound() >= this.bottom
          ? (ball.addPos(0, -(ball.yLBound() - this.bottom)),
            ball.setOnGround(true))
          : ball.setOnGround(false);

        ball.yUBound() <= this.top
          ? ball.addPos(0, this.top - ball.yUBound())
          : null;
      });
    }

    ballCollisionChecker() {
      this.checks.map((ball, index) => {
        let spot = index;
        this.checks.map((ball2, index) => {
          spot != index
            ? (() => {
                let x1 = ball.pos.x;
                let y1 = ball.pos.y;
                let x2 = ball2.pos.x;
                let y2 = ball2.pos.y;
                let dist = p5.sqrt(p5.sq(x1 - x2) + p5.sq(y1 - y2));
                let minDist = ball.r + ball2.r;

                dist <= minDist + 1
                  ? (() => {
                      this.collision = true;
                      ball2.pos.sub(
                        p5
                          .createVector(x1 - x2, y1 - y2)
                          .normalize()
                          .setMag(minDist - dist)
                      );
                      console.log("Here");
                    })()
                  : this.collision = false;
              })()
            : null;
        });
      });
    }

    collisionCheck() {
      this.wallCollisionChecker();
      this.ballCollisionChecker();
      this.collision
        ? this.collisionCheck()
        : null;
    }

    update() {
      this.collisionCheck();
      p5.keyIsDown(65)
        ? !this.addState
          ? (this.checks.push(
              new Ball(
                p5.random(p5.width / 3, (2 * p5.width) / 3),
                p5.height / 3,
                p5.random(20, 40)
              )
            ),
            (this.addState = true))
          : null
        : (this.addState = false);
    }

    show() {
      this.update();
      this.checks.map((ball) => {
        ball.show();
      });
    }
  }

  let world: World;

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth * 0.4, p5.windowWidth * 0.4);
  };

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth * 0.4, p5.windowWidth * 0.4);
    world = new World(0, p5.height, 0, p5.width);
    canvas.mouseClicked(() => {});
    canvas.style("margin-left: auto; margin-right: auto;");
  };

  p5.draw = () => {
    p5.background(bg);
    world.show();
  };
}

export default function CollisionA() {
  return <ReactP5Wrapper sketch={collisionA} />;
}
