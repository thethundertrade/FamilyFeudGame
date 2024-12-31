let currentQuestionIndex = 0;
let questions = [];

document.getElementById('start-game').addEventListener('click', async () => {
  const response = await fetch('/get-questions');
  questions = await response.json();
  currentQuestionIndex = 0;
  loadQuestion();
});

document.getElementById('next-question').addEventListener('click', loadQuestion);

function loadQuestion() {
  if (currentQuestionIndex >= questions.length) {
    document.getElementById('question').textContent = "Game Over! Thanks for playing.";
    document.getElementById('answers').innerHTML = '';
    document.getElementById('next-question').style.display = 'none';
    return;
  }

  const question = questions[currentQuestionIndex];
  document.getElementById('question').textContent = question.question;
  const answersList = document.getElementById('answers');
  answersList.innerHTML = '';

  question.answers.forEach((answer, index) => {
    const li = document.createElement('li');
    li.textContent = answer.text;
    li.addEventListener('click', () => checkAnswer(index, li));
    answersList.appendChild(li);
  });

  document.getElementById('next-question').style.display = 'none';
}

function checkAnswer(index, element) {
  const question = questions[currentQuestionIndex];
  if (question.answers[index].correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('incorrect');
  }

  setTimeout(() => {
    currentQuestionIndex++;
    loadQuestion();
  }, 1000);
}
