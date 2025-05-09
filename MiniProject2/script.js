const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "Paris",
        correct: true
      },
      {
        text: "London",
        correct: false
      },
      {
        text: "Berlin",
        correct: false
      },
      {
        text: "Madrid",
        correct: false
      },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      {
        text: "Paris",
        correct: false
      },
      {
        text: "Berlin",
        correct: true
      },
      {
        text: "London",
        correct: false
      },
      {
        text: "Madrid",
        correct: false
      },
    ],
  },
  {
    question: "What is the capital of France?",
    answers: [
      {
        text: "Paris",
        correct: true
      },
      {
        text: "London",
        correct: false
      },
      {
        text: "Berlin",
        correct: false
      },
      {
        text: "Madrid",
        correct: false
      },
    ],
  },
  {
    question: "What is the capital of Germany?",
    answers: [
      {
        text: "Paris",
        correct: false
      },
      {
        text: "Berlin",
        correct: true
      },
      {
        text: "London",
        correct: false
      },
      {
        text: "Madrid",
        correct: false
      },
    ],
  },
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function StartQuize() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next"
  showQuestion();
}

function showQuestion() {
  let currentQuestionIndex = questions[ currentQuestionIndex ];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = `Question ${questionNo}: ${currentQuestionIndex.question}`;

  currentQuestionIndex.answers.foreach(asnwer => {
    const button = document.createElement("button");
    button.classList.add("btn");
    answerButton.appendChild(button);
  });
}