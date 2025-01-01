const questions = [
    {
        question: "Name something you bring to a picnic.",
        answers: [
            { text: "Food", points: 40 },
            { text: "Blanket", points: 30 },
            { text: "Drinks", points: 20 },
            { text: "Games", points: 10 }
        ]
    },
    // Add more questions...
];

let currentRound = 1;
let totalScore = 0;

// Functions for gameplay, score updates, and sound effects
function updateScore(points) {
    totalScore += points;
    document.getElementById(`round${currentRound}-score`).textContent = totalScore;
    document.getElementById('total-score').textContent = totalScore;
    playSound();
}

function playSound() {
    const sound = document.getElementById('sound-effect');
    sound.play();
}
