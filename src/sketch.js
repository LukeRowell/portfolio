import 'p5';
import 'p5/lib/addons/p5.dom';

export default function sketch(p) {
  let canvas;
  let grid;
  let x;
  let y;
  let dir;

  let ANTUP = 0;
  let ANTRIGHT = 1;
  let ANTDOWN = 2;
  let ANTLEFT = 3;

  function turnRight() {
    dir++;

    if (dir > ANTLEFT) {
      dir = ANTUP;
    }
  }
  
  function turnLeft() {
    dir--;

    if (dir < ANTUP) {
      dir = ANTLEFT;
    }
  }
  
  function moveForward() {
    if (dir === ANTUP) {
      y--;
    } else if (dir === ANTRIGHT) {
      x++;
    } else if (dir === ANTDOWN) {
      y++;
    } else if (dir === ANTLEFT) {
      x--;
    }
  
    if (x > p.windowWidth - 1) {
      x = 0;
    } else if (x < 0) {
      x = p.windowWidth - 1;
    }

    if (y > p.windowHeight - 1) {
      y = 0;
    } else if (y < 0) {
      y = p.windowHeight - 1;
    }
  }

  function make2DArray(cols, rows) {
    let arr = new Array(cols);

    for (let i = 0; i < arr.length; i++) {
      arr[i] = new Array(rows);
      for (let j = 0; j < arr[i].length; j++) {
        arr[i][j] = 0;
      }
    }

    return arr;
  }

  p.setup = () => {
    canvas = p.createCanvas(p.windowWidth, p.windowHeight);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');

    grid = make2DArray(Math.floor(p.windowWidth), Math.floor(p.windowHeight));
    x = Math.floor((p.width - 1) / 2);
    y = Math.floor((p.height - 1) / 2);
    dir = ANTUP;
  }

  p.windowResized = () => {
      p.clear();
      p.resizeCanvas(p.windowWidth, p.windowHeight);
      grid = make2DArray(Math.floor(p.windowWidth), Math.floor(p.windowHeight));
      x = Math.floor((p.windowWidth - 1) / 2);
      y = Math.floor((p.windowHeight - 1) / 2);
      dir = ANTUP;
  }

  p.draw = () => {
    p.strokeWeight(1);

    for (let n = 0; n < 500; n++) {
      let state = grid[x][y];
      if (state === 0) {
        turnRight();
        grid[x][y] = 1;
      } else if (state === 1) {
        turnLeft();
        grid[x][y] = 0;
      }
  
      p.stroke(p.color(255));

      if (grid[x][y] === 1) {
        p.stroke(p.color(50, 50));
      }

      p.point(x, y);
      moveForward();
    }
  }
}