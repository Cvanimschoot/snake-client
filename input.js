const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require("./constants"); // Constants created for movement. (W,A,S,D)

// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin

const setupInput = (conn) => {
  connection = conn; //set the connection to conn. This will allow the user to send commands to the server
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // handleUserInput() used to get different inputs from user.
  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } // Use ctrl + c to exit
  if (key === MOVE_UP_KEY) {
    connection.write('Move: up');
  } // W
  if (key === MOVE_DOWN_KEY) {
    connection.write('Move: down');
  } // S
  if (key === MOVE_LEFT_KEY) {
    connection.write('Move: left');
  } // A
  if (key === MOVE_RIGHT_KEY) {
    connection.write('Move: right');
  } // D
  // BANTER: This is used to send short messages to other snakes using 1,2,3
  if (key === '1') {
    connection.write('Say: That one is mine!');
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
};