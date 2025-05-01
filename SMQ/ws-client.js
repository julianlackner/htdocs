const socket = new WebSocket("ws://papiertechnik.duckdns.com:3000");

let currentIndex = 0;
let currentQuestions = [];
let currentRoom = "";
let playerName = "";

socket.onmessage = (e) => {
  const data = JSON.parse(e.data);

  if (data.type === "start") {
    currentQuestions = data.questions;
    document.querySelector("div").style.display = "none";
    document.getElementById("quiz").style.display = "block";
    loadQuestion();
  }

  if (data.type === "end") {
    document.getElementById("quiz").style.display = "none";
    const r = document.getElementById("results");
    r.style.display = "block";
    r.innerHTML = "<h2>Ergebnisse:</h2>" +
      data.results.map(p => `<p>${p.name}: ${p.score} Punkte</p>`).join("");
  }
};

function createRoom() {
  playerName = document.getElementById("playerName").value;
  currentRoom = document.getElementById("roomCode").value;
  socket.send(JSON.stringify({ type: "create", room: currentRoom, name: playerName }));
}

function joinRoom() {
  playerName = document.getElementById("playerName").value;
  currentRoom = document.getElementById("roomCode").value;
  socket.send(JSON.stringify({ type: "join", room: currentRoom, name: playerName }));
}

function loadQuestion() {
  const q = currentQuestions[currentIndex];
  document.getElementById("question").innerText = q.beispiel;
  const opts = shuffle([
    q.stilmittel,
    ...shuffle(allOptions.filter(o => o !== q.stilmittel)).slice(0, 3)
  ]);
  const optDiv = document.getElementById("options");
  optDiv.innerHTML = "";
  opts.forEach(opt => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => {
      socket.send(JSON.stringify({
        type: "answer",
        room: currentRoom,
        index: currentIndex,
        answer: opt
      }));
      document.querySelectorAll("#options button").forEach(b => b.disabled = true);
      document.getElementById("nextBtn").disabled = false;
    };
    optDiv.appendChild(btn);
  });
  document.getElementById("nextBtn").disabled = true;
}

document.getElementById("nextBtn").onclick = () => {
  currentIndex++;
  if (currentIndex < currentQuestions.length) {
    loadQuestion();
  }
};

const allOptions = [
  "Metapher", "Vergleich", "Personifikation", "Anapher",
  "Alliteration", "Hyperbel", "Ironie", "Klimax",
  "Antithese", "Oxymoron", "Rhetorische Frage", "Paradoxon",
  "Euphemismus", "Litotes", "Symbol"
];

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}
