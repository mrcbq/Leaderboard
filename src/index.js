import './index.css';

const gameId = '9pLtYc3QQCZyBxf3E3OD';
const gameDataUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const submitButton = document.getElementById('submit-button');
const getScoresButton = document.getElementById('get-scores');

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
  } catch (error) {
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
    });
  } catch (error) {
    console.error(error);
  }
});
