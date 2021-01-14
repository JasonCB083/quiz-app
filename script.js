const quizData = [
  {
    question: 'How old is Majo?',
    a: '21',
    b: '24',
    c: '28',
    d: '30',
    correct: 'd'
  }, {
    question: 'What is the most used programming language in 2020?',
    a: 'Java',
    b: 'Javascript',
    c: 'Python',
    d: 'Ruby',
    correct: 'b'
  }, {
    question: 'Who is the president of the United States?',
    a: 'Majo',
    b: 'Arequipe',
    c: 'Jason',
    d: 'Trump',
    correct: 'd'
  }, {
    question: 'What does HTML stand for?',
    a: 'Hypertext Markup Language',
    b: 'Helicopters Terminals Motorboats Lamborginis',
    c: 'Jason Object Notation',
    d: 'Cascading Style Sheet',
    correct: 'a'
  }, {
    question: 'What year was Javascript launched?',
    a: '2030',
    b: '1995',
    c: '2010',
    d: 'None of the above',
    correct: 'b'
  }
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if(answerEl.checked) {
      answer =  answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers() {
  answerEls.forEach((answerEl) => {
    answerEl.checked = false
  });
}

submitBtn.addEventListener('click', () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length){
      loadQuiz();
    } else {
        quiz.innerHTML = `<h2> You answered ${score}/${quizData.length} questions. </h2> <button onclick = "location.reload()">Reload</button>`
    }
  }
});
