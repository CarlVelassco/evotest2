
const express = require("express");
const router = express.Router();

let gameRunning = false;
let players = [
  { id: "1", name: "Игрок1", gold: 100 },
  { id: "2", name: "Игрок2", gold: 200 }
];
let banned = [];
let params = { speed: 1, difficulty: "normal" };
let map = "default-map";

router.get("/status", (req, res) => {
  res.json({ running: gameRunning, players, banned, params, map });
});

router.post("/toggle-game", (req, res) => {
  gameRunning = !gameRunning;
  res.sendStatus(200);
});

router.post("/give-resources", (req, res) => {
  const { id, amount } = req.body;
  const player = players.find(p => p.id === id);
  if (player) player.gold += amount;
  res.sendStatus(200);
});

router.post("/toggle-ban", (req, res) => {
  const { id } = req.body;
  if (banned.includes(id)) {
    banned = banned.filter(b => b !== id);
  } else {
    banned.push(id);
  }
  res.sendStatus(200);
});

router.post("/update-params", (req, res) => {
  params = req.body;
  res.sendStatus(200);
});

router.post("/update-map", (req, res) => {
  map = req.body.map;
  res.sendStatus(200);
});

module.exports = router;
