console.log("helo");

const questionList = [
  {
    question: "Which is the largest animal",
    answer: [
      { text: "Tiger", correct: false },
      { text: "Bear", correct: false },
      { text: "Whale", correct: true },
      { text: "Elephant", correct: false },
    ],
  },
  {
    question: "What is the capital city of Australia?",
    answer: [
      { text: "Sydney", correct: false },
      { text: "Melbourne", correct: false },
      { text: "Canberra ", correct: true },
      { text: "Brisbane", correct: false },
    ],
  },
  {
    question: "In what year was the first iPhone released?",
    answer: [
      { text: "2005", correct: false },
      { text: "2007 ", correct: true },
      { text: "2008", correct: false },
      { text: "2010", correct: false },
    ],
  },
  {
    question: "What is sushi traditionally wrapped in?",
    answer: [
      { text: "Rice Paper", correct: false },
      { text: "Seaweed ", correct: true },
      { text: "Bamboo", correct: false },
      { text: "Lettuce", correct: false },
    ],
  },
];

const questions = document.querySelector(".question");
const btnBox = document.querySelector(".btn_box");
const nextBtn = document.querySelector(".next_btn");

let questionCount = 0;
let score = 0;

const startQuiz = () => {
  questionCount = 0;
  score = 0;
  nextQuestion();
  nextBtn.style.display = "block";
};

const nextQuestion = () => {
  resetState();
  let currentQuestion = questionList[questionCount];
  questions.innerHTML = `${questionCount + 1}. ` + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    let answerBtn = document.createElement("button");
    answerBtn.classList.add("btn");
    btnBox.appendChild(answerBtn);
    answerBtn.innerHTML = answer.text;
    if (answer.correct) {
      answerBtn.dataset.correct === answer.correct;
      console.log(answerBtn.dataset.correct);
    }
    answerBtn.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  while (btnBox.firstChild) {
    btnBox.removeChild(btnBox.firstChild);
  }
};

const selectAnswer = (e) => {
  const selectBtn = e.target;
  const isCorrect = selectBtn.dataset.answer === true;
  if (isCorrect) {
    selectBtn.classList.add("correct");
  } else {
    selectBtn.classList.add("incorrect");
  }
};

startQuiz();
