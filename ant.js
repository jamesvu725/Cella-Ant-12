// James Vu
// james.vu725@csu.fullerton.edu
// Holds all the functions for drawing the ant, turning the ant, moving the ant
// filling cell color, and changing cell state

// draws the ant "triangle" in the direction it is facing
// Up = 0, Right = 1, Down = 2, Left = 3
function draw_ant(actx, ant) {
  let row = ant[0], col = ant[1], dir = ant[2];
  switch(dir) {
    case 0:
      draw_triangle(actx, 50+col*10, 60+row*10, 60+col*10, 60+row*10, 55+col*10, 50+row*10);
      break;
    case 1:
      draw_triangle(actx, 50+col*10, 50+row*10, 50+col*10, 60+row*10, 60+col*10, 55+row*10);
      break;
    case 2:
      draw_triangle(actx, 50+col*10, 50+row*10, 60+col*10, 50+row*10, 55+col*10, 60+row*10);
      break;
      case 3:
        draw_triangle(actx, 60+col*10, 50+row*10, 60+col*10, 60+row*10, 50+col*10, 55+row*10);
      break;
    default:
      console.log("Ant's direction is invalid.");
  }
}

// fill in ant's cell with color from array
// Black = 0, Red = 1, Yellow = 2, Blue = 3
function fill_cell(ctx, arr, ant) {
  let row = ant[0], col = ant[1], clr = arr[row][col];
  switch(clr) {
    case 0:  ctx.fillStyle = "black";  break;
    case 1:  ctx.fillStyle = "red";    break;
    case 2:  ctx.fillStyle = "yellow"; break;
    case 3:  ctx.fillStyle = "blue";   break;
    default: console.log("Color is invalid.");
  }
  ctx.fillRect(50+col*10, 50+row*10, 10, 10);
}

// checks cell's color and turns the ant accordingly
// right for black and red, left for yellow and blue
// Black = 0, Red = 1, Yellow = 2, Blue = 3
function turn_ant(actx, arr, ant) {
  let clr = arr[ant[0]][ant[1]], turn = ant[2];
  if (clr == 0 || clr == 1) {
    turn == 0 ? turn = 3 : --turn;
  }
  if (clr == 2 || clr == 3) {
    turn == 3 ? turn = 0 : ++turn;
  }
  ant[2] = turn;
  fill_cell(actx, arr, ant);
  draw_ant(actx, ant);
}

// increments cell's state to next color
function change_cell_state(ctx, arr, ant){
  let row = ant[0], col = ant[1], clr = arr[row][col];
  clr == 3 ? clr = 0 : ++clr;
  arr[row][col] = clr;
  fill_cell(ctx, arr, ant);
}

// moves ant forward according to direction it is facing
function move_forward_ant(actx, arr, ant) {
  let row = ant[0], col = ant[1], dir = ant[2], clr = arr[row][col];
  switch(dir) {
    case 0:  --row; break;
    case 1:  ++col; break;
    case 2:  ++row; break;
    case 3:  --col; break;
    default: console.log("Ant's direction is invalid.");
  }
  ant[0] = row;
  ant[1] = col;
  draw_ant(actx, ant);
}

// set of functions for moving the cella ant 1 time
// turn ant based on state, increment cell state, and move ant forward
// recursively calls itself if less than moves
function update(actx, arr, ant, step_num, moves, delay) {
  turn_ant(actx, arr, ant);
  change_cell_state(actx, arr, ant);
  move_forward_ant(actx, arr, ant);
  ++step_num;
  if (step_num < moves) {
    setTimeout( function(){ update(context, arr, ant, step_num, moves, delay); }, delay );
  }
}
