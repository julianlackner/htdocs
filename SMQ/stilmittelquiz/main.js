let questions = [];
let current = 0;
let score = 0;
let currentAnswer = '';

const allOptions = [
  "Metapher", "Vergleich", "Personifikation", "Anapher",
  "Alliteration", "Hyperbel", "Ironie", "Klimax",
  "Antithese", "Oxymoron", "Rhetorische Frage", "Paradoxon",
  "Euphemismus", "Litotes", "Symbol"
];

async function loadQuestions() {
  const res = await fetch('stilmittel.json');
  const data = await res.json();
  questions = shuffle(data).slice(0, 10);
  loadQuestion();
}

function loadQuestion() {
  const q = questions[current];
  currentAnswer = q.stilmittel;

  document.getElementById('question').innerText = `„${q.beispiel}“ – Welches Stilmittel?`;

  const opts = shuffle([
    currentAnswer,
    ...shuffle(allOptions.filter(o => o !== currentAnswer)).slice(0, 3)
  ]);

  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = '';

  opts.forEach(opt => {
    const btn = document.createElement('button');
    btn.innerText = opt;
    btn.onclick = () => {
      document.querySelectorAll('#options button').forEach(b => b.disabled = true);
      if (opt === currentAnswer) score++;
      document.getElementById('nextBtn').disabled = false;
    };
    optionsDiv.appendChild(btn);
  });

  document.getElementById('nextBtn').disabled = true;
}

document.getElementById('nextBtn').addEventListener('click', () => {
  current++;
  if (current < questions.length) {
    loadQuestion();
  } else {
    localStorage.setItem("quizScore", score);
    window.location.href = "result.html";
  }
});

function shuffle(arr) {
  return arr.sort(() => Math.random() - 0.5);
}

loadQuestions();
