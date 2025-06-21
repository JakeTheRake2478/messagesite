const express = require("express");
const app = express();
const http = require("http").createServer(app);
const io = require("socket.io")(http);

app.use(express.static("public"));

io.on("connection", (socket) => {
  socket.on("join", (room) => {
    socket.join(room);
  });

  socket.on("message", ({ room, msg }) => {
    socket.to(room).emit("message", msg);
  });
});

http.listen(3000, '0.0.0.0', () => {
  console.log("Server running at http://10.0.0.41:3000");
});
