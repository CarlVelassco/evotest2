
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*"
  }
});

io.on('connection', socket => {
  console.log('🔌 Пользователь подключился');

  socket.on('createRoom', () => {
    console.log('Создание лобби');
  });

  socket.on('joinRoom', () => {
    console.log('Присоединение к лобби');
  });

  socket.on('disconnect', () => {
    console.log('❌ Пользователь отключился');
  });
});

app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

server.listen(3000, () => {
  console.log('✅ Сервер запущен на http://localhost:3000');
});
