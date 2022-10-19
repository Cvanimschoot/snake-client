const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require("./constants");

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

const handleUserInput = function (key) {
  if ( key === '\u0003' ) {
    process.exit();
  }
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  }
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  }
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  }
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  }
  if (key === '1') {
    connection.write('Say: You suck!');
  }
  if (key === '2') {
    connection.write('Say: I\'m better!');
  }
  if (key === '3') {
    connection.write('Say: Sucker');
  }
};

module.exports = {
  setupInput
}