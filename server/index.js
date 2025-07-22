const express = require("express");
const http = require("http");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Пользователь подключен:", socket.id);

  socket.on("createLobby", () => {
    console.log("Лобби создано");
  });

  socket.on("joinLobby", ({ lobbyId }) => {
    console.log("Присоединение к лобби:", lobbyId);
  });
});

app.use(express.static("dist")); // если билд Vite
app.get("*", (req, res) => {
  res.sendFile(__dirname + "/dist/index.html");
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
