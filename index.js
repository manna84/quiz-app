console.log("hello");

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

const questionBox = document.querySelector(".question");
const answerBox = document.querySelector(".btn_box");
const nextBtn = document.querySelector(".next_btn");

let currentQuestionIndex = 0;
let score = 0;

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0;

  nextBtn.style.display = "block";
  nextQuestion();
};

const nextQuestion = () => {
  resetState();
  const currentQuestion = questionList[currentQuestionIndex];
  questionBox.innerHTML =
    `${currentQuestionIndex + 1}. ` + currentQuestion.question;

  currentQuestion.answer.forEach((answer) => {
    // console.log(answer);

    let answerBtn = document.createElement("button");
    answerBtn.classList.add("btn");
    answerBox.appendChild(answerBtn);
    answerBtn.innerHTML = answer.text;
    if (answer.correct) {
      answerBtn.dataset.correct = answer.correct;
    }

    answerBtn.addEventListener("click", selectAnswer);
  });
};

const resetState = () => {
  nextBtn.style.display = "none";
  // console.log(answerBox.firstChild);
  while (answerBox.firstChild) {
    answerBox.removeChild(answerBox.firstChild);
  }
};

const selectAnswer = (e) => {
  let selectBtn = e.target;
  let isCorrect = selectBtn.dataset.correct === "true";
  if (isCorrect) {
    selectBtn.classList.add("correct");
    score++;
  } else {
    selectBtn.classList.add("incorrect");
  }

  Array.from(answerBox.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextBtn.style.display = "block";
};

const handleNextQuestion = () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questionList.length) {
    // console.log(currentQuestionIndex);
    nextQuestion();
  } else {
    showScore();
  }
};

const showScore = () => {
  resetState();
  questionBox.innerHTML = `The score is ${score} out of ${questionList.length}`;
  nextBtn.innerHTML = `Play Again`;
  nextBtn.style.display = "block";
};

nextBtn.addEventListener("click", () => {
  // console.log(currentQuestionIndex);
  // console.log(questionList.length);

  if (currentQuestionIndex < questionList.length) {
    handleNextQuestion();
  } else {
    startQuiz();
    // console.log(currentQuestionIndex);
  }
});

nextQuestion();
