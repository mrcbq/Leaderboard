/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/index.css");


const gameId = '9pLtYc3QQCZyBxf3E3OD';
const gameDataUrl = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`;

const inputName = document.getElementById('input-name');
const inputScore = document.getElementById('input-score');
const submitButton = document.getElementById('submit-button');
const getScoresButton = document.getElementById('get-scores');

const showMessage = (message, isError = false) => {
  const messageElement = document.getElementById('message');
  messageElement.textContent = message;
  messageElement.style.color = isError ? 'red' : 'green';
};

inputScore.addEventListener('input', (event) => {
  const inputValue = event.target.value;
  if (/\D/.test(inputValue)) {
    event.target.value = inputValue.replace(/\D/g, '');
    showMessage('Only numbers in score', true);
  }
});

submitButton.addEventListener('click', async (event) => {
  event.preventDefault();

  if (inputName.value.trim() === '' || inputScore.value.trim() === '') {
    showMessage('Complete all fields!!!', true);
    return;
  }

  const formData = {
    user: inputName.value,
    score: parseInt(inputScore.value, 10),
  };

  try {
    await fetch(gameDataUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    inputName.value = '';
    inputScore.value = '';
    showMessage('Data sent successfully');
  } catch (error) {
    showMessage('Error sending data', true);
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
      li.textContent = `${scoreData.user}:     ${scoreData.score}`;
      scoresContainer.appendChild(li);
      showMessage('Scores uploaded!!!');
    });
  } catch (error) {
    showMessage('Error loading scores', true);
  }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUI7O0FBRXJCO0FBQ0EsNEZBQTRGLE9BQU87O0FBRW5HO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGVBQWUsUUFBUSxnQkFBZ0I7QUFDakU7QUFDQTtBQUNBLEtBQUs7QUFDTCxJQUFJO0FBQ0o7QUFDQTtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFkZXJib2FyZC8uL3NyYy9pbmRleC5jc3M/YzQwZCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9sZWFkZXJib2FyZC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2xlYWRlcmJvYXJkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcblxuY29uc3QgZ2FtZUlkID0gJzlwTHRZYzNRUUNaeUJ4ZjNFM09EJztcbmNvbnN0IGdhbWVEYXRhVXJsID0gYGh0dHBzOi8vdXMtY2VudHJhbDEtanMtY2Fwc3RvbmUtYmFja2VuZC5jbG91ZGZ1bmN0aW9ucy5uZXQvYXBpL2dhbWVzLyR7Z2FtZUlkfS9zY29yZXNgO1xuXG5jb25zdCBpbnB1dE5hbWUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXQtbmFtZScpO1xuY29uc3QgaW5wdXRTY29yZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dC1zY29yZScpO1xuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdC1idXR0b24nKTtcbmNvbnN0IGdldFNjb3Jlc0J1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZXQtc2NvcmVzJyk7XG5cbmNvbnN0IHNob3dNZXNzYWdlID0gKG1lc3NhZ2UsIGlzRXJyb3IgPSBmYWxzZSkgPT4ge1xuICBjb25zdCBtZXNzYWdlRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZXNzYWdlJyk7XG4gIG1lc3NhZ2VFbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgbWVzc2FnZUVsZW1lbnQuc3R5bGUuY29sb3IgPSBpc0Vycm9yID8gJ3JlZCcgOiAnZ3JlZW4nO1xufTtcblxuaW5wdXRTY29yZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIChldmVudCkgPT4ge1xuICBjb25zdCBpbnB1dFZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xuICBpZiAoL1xcRC8udGVzdChpbnB1dFZhbHVlKSkge1xuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IGlucHV0VmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTtcbiAgICBzaG93TWVzc2FnZSgnT25seSBudW1iZXJzIGluIHNjb3JlJywgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5zdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZXZlbnQpID0+IHtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICBpZiAoaW5wdXROYW1lLnZhbHVlLnRyaW0oKSA9PT0gJycgfHwgaW5wdXRTY29yZS52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgc2hvd01lc3NhZ2UoJ0NvbXBsZXRlIGFsbCBmaWVsZHMhISEnLCB0cnVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBjb25zdCBmb3JtRGF0YSA9IHtcbiAgICB1c2VyOiBpbnB1dE5hbWUudmFsdWUsXG4gICAgc2NvcmU6IHBhcnNlSW50KGlucHV0U2NvcmUudmFsdWUsIDEwKSxcbiAgfTtcblxuICB0cnkge1xuICAgIGF3YWl0IGZldGNoKGdhbWVEYXRhVXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShmb3JtRGF0YSksXG4gICAgfSk7XG4gICAgaW5wdXROYW1lLnZhbHVlID0gJyc7XG4gICAgaW5wdXRTY29yZS52YWx1ZSA9ICcnO1xuICAgIHNob3dNZXNzYWdlKCdEYXRhIHNlbnQgc3VjY2Vzc2Z1bGx5Jyk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgc2hvd01lc3NhZ2UoJ0Vycm9yIHNlbmRpbmcgZGF0YScsIHRydWUpO1xuICB9XG59KTtcblxuZ2V0U2NvcmVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goZ2FtZURhdGFVcmwpO1xuICAgIGNvbnN0IHJlc3BvbnNlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHNjb3Jlc0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzY29yZXMtY29udGFpbmVyJyk7XG4gICAgc2NvcmVzQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgY29uc3Qgc2NvcmVzQXJyYXkgPSBPYmplY3QudmFsdWVzKHJlc3BvbnNlRGF0YS5yZXN1bHQpO1xuICAgIHNjb3Jlc0FycmF5LmZvckVhY2goKHNjb3JlRGF0YSkgPT4ge1xuICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSBgJHtzY29yZURhdGEudXNlcn06ICAgICAke3Njb3JlRGF0YS5zY29yZX1gO1xuICAgICAgc2NvcmVzQ29udGFpbmVyLmFwcGVuZENoaWxkKGxpKTtcbiAgICAgIHNob3dNZXNzYWdlKCdTY29yZXMgdXBsb2FkZWQhISEnKTtcbiAgICB9KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBzaG93TWVzc2FnZSgnRXJyb3IgbG9hZGluZyBzY29yZXMnLCB0cnVlKTtcbiAgfVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=