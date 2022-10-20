const net = require("net");
const { IP, PORT } = require("./constants"); // constants to pull localhost and the port.

// establishes a connection with the game server
const connect = function() {
  
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log("Welcome to the game\n");
    conn.write("Name: PLR"); // Change this to change the name of the snake. 3 letter max
  });

  conn.on('data', (data) => {
    console.log(data);
  });

  return conn;
};

module.exports = {
  connect
}; // Export to be used within input.js (gets exported to play.js and then into input.js from within play.js)