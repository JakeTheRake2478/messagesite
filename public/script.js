const socket = io();
let room = "";

function joinRoom() {
  room = document.getElementById("codeInput").value.toUpperCase();
  if (room.length === 3) {
    socket.emit("join", room);
    document.getElementById("roomDisplay").innerText = room;
    document.getElementById("chat").style.display = "block";
  }
}

function sendMessage() {
  const msg = document.getElementById("msgInput").value;
  socket.emit("message", { room, msg });
  appendMessage(`You: ${msg}`);
  document.getElementById("msgInput").value = "";
}

socket.on("message", (msg) => {
  appendMessage(`Them: ${msg}`);
});

function appendMessage(msg) {
  const div = document.createElement("div");
  div.innerText = msg;
  document.getElementById("messages").appendChild(div);
}
