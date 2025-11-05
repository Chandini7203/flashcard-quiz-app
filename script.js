const flashcards = [];
const flashcardsDiv = document.getElementById('flashcards');
const form = document.getElementById('flashcard-form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;
  flashcards.push({ question, answer, flipped: false });
  displayFlashcards();
  form.reset();
});

function displayFlashcards() {
  flashcardsDiv.innerHTML = '';
  flashcards.forEach((card, i) => {
    const cardDiv = document.createElement('div');
    cardDiv.className = 'flashcard';
    cardDiv.innerHTML = `
      <span>${card.flipped ? card.answer : card.question}</span>
      <button style="background:#90caf9;color:#1565c0;border:none;border-radius:5px; padding:7px 14px;cursor:pointer;"
        onclick="flipCard(${i}); event.stopPropagation();"
      >Flip</button>
      <button style="margin-left:12px;background:#e57373;color:white;border:none;border-radius:5px;padding:7px 14px;cursor:pointer;"
        onclick="deleteCard(${i}); event.stopPropagation();"
      >Delete</button>
    `;
    flashcardsDiv.appendChild(cardDiv);
  });
}

window.flipCard = function(index) {
  flashcards[index].flipped = !flashcards[index].flipped;
  displayFlashcards();
};

window.deleteCard = function(index) {
  flashcards.splice(index, 1);
  displayFlashcards();
};

displayFlashcards();
