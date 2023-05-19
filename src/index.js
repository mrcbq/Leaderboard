import './index.css';

const gameId = '9pLtYc3QQCZyBxf3E3OD';
const gameDataUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const submitButton = document.getElementById('submit-button');
const getScoresButton = document.getElementById('get-scores');

function showMessage(message, isError = false) {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.color = isError ? 'red' : 'green';
}

inputScore.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  if (/\D/.test(inputValue)) {
    event.target.value = inputValue.replace(/\D/g, '');
    showMessage('Por favor, ingrese solo números en el campo de puntuación', true);
  }
});

submitButton.addEventListener('click', async (event) => {
  event.preventDefault();

  const formData = {
    user: inputName.value,
    score: parseInt(inputScore.value, 10),
  };

  try {
    const response = await fetch(gameDataUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const responseData = await response.json();
    console.log(responseData);
    showMessage('Datos enviados con éxito');
  } catch (error) {
    showMessage('Error al enviar datos', true);
    console.error(error);
  }
});

getScoresButton.addEventListener('click', async () => {
  try {
    const response = await fetch(gameDataUrl);
    const responseData = await response.json();

    const scoresContainer = document.getElementById('scores-container');
    scoresContainer.innerHTML = '';

    const scoresArray = Object.values(responseData.result);
    scoresArray.forEach((scoreData) => {
      const li = document.createElement('li');
      li.textContent = `${scoreData.user}: ${scoreData.score}`;
      scoresContainer.appendChild(li);
      showMessage('Puntuaciones cargadas con éxito');
    });
  } catch (error) {
    showMessage('Error al cargar las puntuaciones', true);
  }
});
