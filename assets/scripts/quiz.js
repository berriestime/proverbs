const url = "./assets/json/pictures.json";
let score = 0;
const proverbsQuiz = {};
const resultContainerQuiz = document.querySelector(".print__result");
const optionsContainer = document.querySelector(".options__container");
const questionText = document.querySelector(".question__text__quiz");
const questionQuizContainer = document.querySelector(
  ".question__quiz__container"
);
const progressBar = document.querySelector(".progress__bar__quiz");
const resultQuiz = document.querySelector(".result__quiz");
const quizContainer = document.querySelector(".container__quiz");

let alreadyDoneQuestions = [];
let counter = 0;
let dataFullProverbs = "";
let numberOfQuestions = 1;

document.addEventListener("DOMContentLoaded", function (event) {
  main();
});

async function main() {
  dataFullProverbs = await getJsonPromised(url);
  generateProgressBar();
  generateQuestion();
}

function getJsonPromised(url) {
  return fetch(url).then((data) => data.json());
}

function generateProgressBar() {
  for (let i = 1; i < 11; i++) {
    progressBar.innerHTML += `
    <img class="progress__bar__item__quiz progress__bar__default" id="progress-bar-${i}" src="./assets/images/square.svg" alt="Индикатор прогресса" />`;
  }
}

function generateQuestion() {
  for (let p of dataFullProverbs) {
    proverbsQuiz[p.name] = p.info;
  }
  const keys = Object.keys(proverbsQuiz);
  let selected;
  while (true) {
    selected = Math.floor(Math.random() * keys.length);
    if (alreadyDoneQuestions.indexOf(keys[selected]) == -1) {
      break;
    }
  }

  const keyTrue = keys[selected];
  alreadyDoneQuestions[counter] = keyTrue;
  counter++;
  const valueTrue = proverbsQuiz[keyTrue];

  let answersFull = dataFullProverbs.map((item) => item.info);
  shuffleArray(answersFull);

  let limitedArr = [valueTrue];
  for (let i = 1; i < 4; i++) {
    if (answersFull[i] != [valueTrue]) {
      limitedArr[i] = answersFull[i];
    } else {
      const tmp = i;
      i++;
      limitedArr[tmp] = answersFull[i];
    }
  }
  shuffleArray(limitedArr);
  const picture = dataFullProverbs[selected].picture;
  questionQuizContainer.innerHTML = `<img class="question-image" src="./assets/images/${picture}.jpg" alt="картинка подсказка" />`;
  questionText.innerHTML = `<span class="question__desrciption__quiz">Какое описание подходит к пословице:</span><span class="question__desrciption__quiz ">"${keyTrue}"</span>`;
  optionsContainer.innerHTML = `<button onclick="checkAnswer(this)" class="tasks__item__quiz" data-true-val="${valueTrue}">${limitedArr[0]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="tasks__item__quiz" data-true-val="${valueTrue}">${limitedArr[1]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="tasks__item__quiz" data-true-val="${valueTrue}">${limitedArr[2]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="tasks__item__quiz" data-true-val="${valueTrue}">${limitedArr[3]}</button>`;
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function printScore() {
  resultContainerQuiz.style.display = "flex";
  resultQuiz.innerHTML = `<span class="score__quiz">Ваш результат: ${score}/10</span>`;
  quizContainer.innerHTML = `<a onclick="refreshQuiz()" class="btn__quiz btn__quiz__1" id="btn__start__quiz">ПРОЙТИ ТЕСТ ЕЩЕ РАЗ</a><a href="./index.html" class="btn__quiz btn__quiz__1" id="btn__quizToIndex">НА ГЛАВНУЮ</a>`;
}

function refreshQuiz() {
  main();
  resultContainerQuiz.style.display = "none";
  alreadyDoneQuestions = "";
  optionsContainer.innerHTML = "";
  questionText.innerHTML = "";
  questionQuizContainer.innerHTML = "";
  progressBar.innerHTML = "";
  score = 0;
  numberOfQuestions = 1;
}

function checkAnswer(sender) {
  if (sender.textContent == sender.dataset.trueVal) {
    score++;
    updateProgressBar(numberOfQuestions, true);
  } else {
    updateProgressBar(numberOfQuestions, false);
  }
  numberOfQuestions++;
  if (numberOfQuestions > 10) {
    printScore();
  } else {
    generateQuestion();
  }
}

function updateProgressBar(numberOfQuestions, boolean) {
  const items = document.querySelectorAll(".progress__bar__item__quiz");
  if (boolean) {
    items[numberOfQuestions - 1].classList.add("progress__bar__true__quiz");
  } else {
    items[numberOfQuestions - 1].classList.add("progress__bar__false__quiz");
  }
}

function newQuestion() {
  console.log(proverbsQuiz);
  console.log("(");
}
