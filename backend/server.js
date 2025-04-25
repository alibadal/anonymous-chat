const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

// Middleware
app.use(cors());
app.use(express.json());

// Socket.IO logic
io.on("connection", (socket) => {
  console.log("A user connected", socket.id);

  // Listen for messages and broadcast them to all clients
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });

  // Handle user disconnection
  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
  });
});

// Define a root route for testing the server
app.get("/", (req, res) => {
  res.send("Anonymous chat backend is running!");
});

// Use dynamic port handling for deployment
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
