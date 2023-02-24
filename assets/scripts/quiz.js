let alreadyDoneQuestions = [];
let counter = 0;
const btnStart = document.querySelector(".btn-start");
const url = "./assets/json/pictures.json";
let dataFullProverbs = "";
let score = 0;
let numberOfQuestions = 1;
const optionsContainer = document.querySelector(".options-container");
const questionText = document.querySelector(".question-text");
const quizContainer = document.querySelector(".question-container");
const progressBar = document.querySelector(".progress-bar");

btnStart.addEventListener("click", (e) => {
  e.preventDefault();
  main();
});

async function getJson(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

async function main() {
  dataFullProverbs = await getJson(url);
  btnStart.style.display = "none";
  generateProgressBar();
  generateQuestion();
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

  const limitedArr = [valueTrue];
  for (let i = 1; i < 10; i++) {
    limitedArr[i] = answersFull[i];
  }
  shuffleArray(limitedArr);
  const picture = dataFullProverbs[selected].picture;
  quizContainer.innerHTML = `<img class="question-image" src="./assets/images/${picture}" alt="" />`;
  questionText.innerHTML = `<span>Какое описание подходит к пословице: "${keyTrue}"</span>`;
  optionsContainer.innerHTML = `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[0]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[1]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[2]}</button>`;
  optionsContainer.innerHTML += `<button onclick="checkAnswer(this)" class="option" data-true-val="${valueTrue}">${limitedArr[3]}</button>`;
}

function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
}

function printScore() {
  optionsContainer.innerHTML = "";
  questionText.innerHTML = "";
  quizContainer.innerHTML = "";
  progressBar.innerHTML = "";
  alert("Your score is:" + score);
  btnStart.style.display = "block";
  btnStart.innerHTML = "Пройти тест еще раз!";
}

function checkAnswer(sender) {
  updateProgressBar(numberOfQuestions);
  numberOfQuestions++;
  if (sender.textContent == sender.dataset.trueVal) {
    score++;
  }
  if (numberOfQuestions > 10) {
    printScore();
  } else {
    generateQuestion();
  }
}

function updateProgressBar(numberOfQuestions) {
  const items = document.querySelectorAll(".progress-bar-item");
  console.log(items);
  for (let i = 0; i < numberOfQuestions; i++) {
    items[i].classList.add("progress-bar-colored");
    console.log(items[i]);
  }
}

function generateProgressBar() {
  for (let i = 1; i < 11; i++) {
    progressBar.innerHTML += `
    <img class="progress-bar-item progress-bar-not-colored" id="progress-bar-${i}" src="./assets/svg/square.svg" alt="" />`;
  }
}
