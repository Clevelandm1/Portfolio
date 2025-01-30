import { P5CanvasInstance, ReactP5Wrapper } from "@p5-wrapper/react";
import { Vector } from "p5";
import { useState } from "react";

function tictactoe(p5: P5CanvasInstance) {
  let canvas;
  let bg = 150;
  let boardColor = 40;
  let turn = true;

  function setTurn() {
    turn = !turn;
  }

  class Space {
    pos: Vector;
    state: number;
    size: number;
    tag: number;
    color: number;
    locked: boolean;

    constructor(pos: Vector, size: number, tag: number) {
      this.pos = pos;
      this.state = 0;
      this.size = (3 / 13) * size;
      this.tag = tag;
      this.color = bg;
      this.locked = false;
    }

    getState() {
      return this.state;
    }

    setState(x: number) {
      this.state = x;
    }

    setLocked(state: boolean) {
      this.locked = state;
    }

    setSize(size: number) {
      this.size = (3 / 13) * size;
    }

    setColor(color?: number) {
      color
        ? (this.color = color)
        : this.state == 1
        ? (this.color = 0)
        : (this.color = 200);
    }

    show() {
      p5.fill(this.color);
      p5.square(this.pos.x, this.pos.y, this.size);
    }

    checkHit(x: number, y: number) {
      x > this.pos.x &&
      x < this.pos.x + this.size &&
      y > this.pos.y &&
      y < this.pos.y + this.size
        ? this.locked
          ? console.log("Locked")
          : (turn ? this.setState(1) : this.setState(2),
            setTurn(),
            console.log(
              "Clicked Space: " +
                this.tag +
                "\nState: " +
                this.state +
                "\nTurn: " +
                turn
            ),
            this.setColor(),
            this.setLocked(true))
        : null;
    }
  }

  class Board {
    pos: Vector;
    spaces: Array<Array<Space>>;
    size: number;

    constructor() {
      this.size = p5.width * 0.8;
      this.pos = p5.createVector(
        (p5.width - this.size) / 2,
        (p5.height - this.size) / 2 - p5.height * 0.05
      );

      this.spaces = [
        [
          new Space(p5.createVector(0, 0), this.size, 1),
          new Space(p5.createVector(0, 0), this.size, 4),
          new Space(p5.createVector(0, 0), this.size, 7),
        ],
        [
          new Space(p5.createVector(0, 0), this.size, 2),
          new Space(p5.createVector(0, 0), this.size, 5),
          new Space(p5.createVector(0, 0), this.size, 8),
        ],
        [
          new Space(p5.createVector(0, 0), this.size, 3),
          new Space(p5.createVector(0, 0), this.size, 6),
          new Space(p5.createVector(0, 0), this.size, 9),
        ],
      ];
    }

    show() {
      p5.fill(boardColor);
      p5.strokeWeight(0);
      p5.square(this.pos.x, this.pos.y, this.size);
      this.spaces.map((x) => {
        x.map((y) => {
          y.show();
        });
      });
    }

    initializeSpaces() {
      this.spaces.map((x, xIndex) => {
        x.map((space, yIndex) => {
          space.pos = p5.createVector(
            this.pos.x +
              (xIndex + 1) * ((this.size * 1) / 13) +
              xIndex * ((this.size * 3) / 13),
            this.pos.y +
              (yIndex + 1) * ((this.size * 1) / 13) +
              yIndex * ((this.size * 3) / 13)
          );
          space.setSize(this.size);
        });
      });
    }

    unlockSpaces() {
      this.spaces.map((x) => {
        x.map((space) => {
          space.setLocked(false);
          space.setColor(bg);
        });
      });
      turn = true;
    }

    getPos() {
      return this.pos;
    }

    setPos() {
      this.pos = p5.createVector(
        (p5.width - this.size) / 2,
        (p5.height - this.size) / 2 - p5.height * 0.05
      );
    }

    setSize() {
      this.size = p5.width * 0.8;
    }

    checkSpacesHit() {
      this.spaces.map((x) => {
        x.map((space) => {
          space.checkHit(p5.mouseX, p5.mouseY);
        });
      });
    }
  }

  class gameState {
    board: Board;
    state: number;
    constructor() {
      this.board = new Board();
      this.state = 0;
    }

    setState(state: number) {
      this.state = state;
    }

    initialize() {
      this.board.initializeSpaces;
    }

    playState() {
      board.show();
    }
  }

  let board: Board;

  let game: gameState;

  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth * 0.4, p5.windowWidth * 0.4);
    board.setSize();
    board.setPos();
    board.initializeSpaces();
  };

  p5.setup = () => {
    canvas = p5.createCanvas(p5.windowWidth * 0.4, p5.windowWidth * 0.4);
    canvas.mouseClicked(() => {
      board.checkSpacesHit();
    });
    canvas.style("margin-left: auto; margin-right: auto;");
    game = new gameState();
    game.initialize();
    board = new Board();
    board.initializeSpaces();
  };

  p5.draw = () => {
    p5.background(bg);

    board.show();
    p5.fill(0);
    p5.textAlign(p5.CENTER);
    p5.textSize(p5.width * 0.08);
    p5.text(
      "Press Enter to Restart",
      p5.width / 2,
      p5.height - p5.height * 0.05
    );
    p5.keyIsDown(13) ? (board.unlockSpaces(), console.log("clicked")) : null;
  };
}

export default function TicTacToe() {
  return <ReactP5Wrapper sketch={tictactoe} />;
}
