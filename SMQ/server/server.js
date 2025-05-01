// server/server.js
const express = require("express");
const fs = require("fs");
const http = require("http");
const WebSocket = require("ws");
const app = express();
const port = 3000;

// Fragen laden
const questions = JSON.parse(fs.readFileSync("questions.json", "utf-8"));

// Statische Dateien (z. B. falls du Frontend auch hier hostest)
app.use(express.static("public"));

const server = http.createServer(app);
const wss = new WebSocket.Server({ server });

let rooms = {};

wss.on("connection", (ws) => {
  ws.on("message", (msg) => {
    const data = JSON.parse(msg);
    const { type, room, name, answer, index } = data;

    if (type === "create") {
      rooms[room] = {
        players: [{ ws, name, score: 0 }],
        questions: shuffle(questions).slice(0, 10)
      };
      ws.send(JSON.stringify({ type: "room_created", room }));
    }

    if (type === "join" && rooms[room]) {
      rooms[room].players.push({ ws, name, score: 0 });
      const q = rooms[room].questions;
      rooms[room].players.forEach(p => {
        p.ws.send(JSON.stringify({ type: "start", questions: q }));
      });
    }

    if (type === "answer") {
      const player = rooms[room].players.find(p => p.ws === ws);
      const correct = rooms[room].questions[index].stilmittel;
      if (answer === correct) player.score++;

      player.answered = (player.answered || 0) + 1;

      // Wenn beide durch sind
      if (rooms[room].players.every(p => p.answered >= 10)) {
        const results = rooms[room].players.map(p => ({
          name: p.name,
          score: p.score
        }));
        rooms[room].players.forEach(p => {
          p.ws.send(JSON.stringify({ type: "end", results }));
        });
        delete rooms[room]; // optional: aufräumen
      }
    }
  });
});

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

server.listen(port, () => {
  console.log(`Server läuft auf http://localhost:${port}`);
});
