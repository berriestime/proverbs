const url = "./assets/json/pictures.json";
let score = 0;
const btnStart = document.querySelector(".btn__quiz__start");
const optionsContainer = document.querySelector(".options-container");
const questionText = document.querySelector(".question__text__quiz");
const quizContainer = document.querySelector(".question__quiz__container");
const progressBar = document.querySelector(".progress__bar__quiz");

let alreadyDoneQuestions = [];
let counter = 0;
let dataFullProverbs = "";
let numberOfQuestions = 1;

btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  main();
});

async function main() {
  dataFullProverbs = await getJsonPromised(url);
  btnStart.style.display = "none";
  generateProgressBar();
  generateQuestion();
}

function getJsonPromised(url) {
  return fetch(url).then((data) => data.json());
}

function generateProgressBar() {
  for (let i = 1; i < 11; i++) {
    progressBar.innerHTML += `
    <img class="progress__bar__item__quiz progress__bar__default" id="progress-bar-${i}" src="./assets/svg/square.svg" alt="Индикатор прогресса" />`;
  }
}

async function getJson(url) {
  let response = await fetch(url); // еще почитать
  let data = await response.json();
  return data; //возвращается промис, а не дата
}

function generateQuestion() {
  const proverbs = {};
  for (let p of dataFullProverbs) {
    proverbs[p.name] = p.info;
  }
  const keys = Object.keys(proverbs);
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
  const valueTrue = proverbs[keyTrue];

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
  quizContainer.innerHTML = `<img class="question-image" src="./assets/images/${picture}.jpg" alt="" />`;
  questionText.innerHTML = `<span class="question__desrciption__quiz">Какое описание подходит к пословице:</span><span class="question__desrciption__quiz ">"${keyTrue}"</span>`;
  optionsContainer.innerHTML = `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[0]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[1]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[2]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[3]}</button>`;
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
  alreadyDoneQuestions = "";
  optionsContainer.innerHTML = "";
  questionText.innerHTML = "";
  quizContainer.innerHTML = "";
  progressBar.innerHTML = "";
  alert("Your score is:" + score);
  btnStart.style.display = "block";
  btnStart.innerHTML = "Пройти тест еще раз!";
  btnStart.addEventListener("click", (e) => {
    e.preventDefault();
    score = 0;
    numberOfQuestions = 1;
    generateQuestion();
  });
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
  items[numberOfQuestions - 1].classList.remove("progress__bar__default");
  if (boolean) {
    items[numberOfQuestions - 1].classList.add("progress__bar__true__quiz");
  } else {
    items[numberOfQuestions - 1].classList.add("progress__bar__false__quiz");
  }
  // console.log(items[0]);
  // for (let i = 0; i < numberOfQuestions; i++) {
  //   items[i].classList.add("progress-bar-colored");
  // }
}
