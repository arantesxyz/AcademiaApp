// Startup script
console.log("Loading env variables...");
require("dotenv").config();

console.log("Loading BackEnd app...");
require("./src/app");
