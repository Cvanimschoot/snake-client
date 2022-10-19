const net = require("net");

// establishes a connection with the game server
const connect = function () {
  
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  console.log("Connecting ...");

  conn.on("connect", () => {
    console.log("Welcome to the game\n");
    conn.write("Name: CV");
  });

  conn.on('data', (data) => {
    console.log(data);
  })

  return conn;
};

module.exports = {
  connect
}