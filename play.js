const {connect} = require("./client");
const {setupInput} = require("./input");

console.log("Connecting ...");
setupInput(connect()); // import the connect() so that inputs can be sent to the server