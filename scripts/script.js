//quiz answers id
let quizCorrectAnswersId = new Map();

quizCorrectAnswersId.set("q1","q1-a3")
quizCorrectAnswersId.set("q2","q2-a3")
quizCorrectAnswersId.set("q3","q3-a3")

//quiz answers text
let quizAnswersText = new Map();

quizAnswersText.set("q1-a1","To increase your credit score.")
quizAnswersText.set("q1-a2","To avoid fraud.")
quizAnswersText.set("q1-a3","To get more money to spend.")

quizAnswersText.set("q2-a1","Debit cards use borrowed money.")
quizAnswersText.set("q2-a2","There is no difference.")
quizAnswersText.set("q2-a3","Credit cards use borrowed money.")

quizAnswersText.set("q3-a1","At the end of the Billing Cycle.")
quizAnswersText.set("q3-a2","Interest not incurred if minimum payment made.")
quizAnswersText.set("q3-a3","At the end of the Payment Due Date.")


//user answers
let currentAnswers = new Map();

currentAnswers.set("q1","")
currentAnswers.set("q2","")
currentAnswers.set("q3","")

//quiz response
let answerSubmissionResponse = new Map();

answerSubmissionResponse.set("q1","You should never be using your credit card to spend money that you don't have.")
answerSubmissionResponse.set("q2","Credit cards use borrowed money that you must repay each month.")
answerSubmissionResponse.set("q3","If the balance is not paid fully, your interest will start accruing at the end of the payment due date.")


//EVENT LISTENERS

//quiz 2
document.getElementById('q1-submit').addEventListener("click", submitAnswer)

//quiz 2
document.getElementById('q2-submit').addEventListener("click", submitAnswer)

//quiz 3
document.getElementById('q3-submit').addEventListener("click", submitAnswer)


//focus on answer when clicked
function answerButtonFocus(id) {
  const quiz = document.getElementById(id).parentElement.id;
  const answer = document.getElementById(id);
  const otherAnswers = answer.parentElement.getElementsByClassName("quizAnswer");
  const selectedAnswer = answer.parentElement.getElementsByClassName("quizAnswerSelect");

  //if first time clicking button
  if (selectedAnswer.length == 0) {
    for (var i = 0; i < 3; i++) {
      otherAnswers[i].classList.remove("quizAnswerSelect")
      otherAnswers[i].classList.add("quizAnswer")
    }
    enableQuizSubmit(id)
  }

  //if not first time
  else {
    for (var i = 0; i < 2; i++) {
      otherAnswers[i].classList.remove("quizAnswerSelect")
      otherAnswers[i].classList.add("quizAnswer")
    }
    selectedAnswer[0].classList.add("quizAnswer")
    selectedAnswer[0].classList.remove("quizAnswerSelect")

  }

  focusAnswer(answer);

  currentAnswers.set(quiz, id);
}

//enable submit after an answer is clicked
function enableQuizSubmit(id) {
  const submit = document.getElementById(id).parentElement.getElementsByClassName("quizSubmitDisabled")[0];
  submit.disabled = false;
  submit.classList.add("quizSubmit")
  submit.classList.remove("quizSubmitDisabled")
  // submit.style.backgroundColor = "black";
  // submit.style.color = "white";
}

//style focus on answer when clicked
function focusAnswer(button) {
  //make selected button have no hover
  button.classList.remove("quizAnswer")
  button.classList.add("quizAnswerSelect")
}

//submit answer
function submitAnswer(e) {

  const quiz = e.target.parentElement.id;
  const currentAnswer = currentAnswers.get(quiz);
  const correctAnswer = quizCorrectAnswersId.get(quiz);
  let isRight = false;

  if (currentAnswer === correctAnswer) {
    isRight = true;
  }

  displayQuizResponse(quiz, isRight);
}

//display quiz response
function displayQuizResponse(quiz, isRight) {

  const quizContent = document.getElementById(quiz);
  const div = document.createElement("div");

  div.classList.add("quizAnswerSelect")
  div.style.boxShadow = "0 0 1.3rem #38D228";

  div.innerHTML = quizAnswersText.get(quizCorrectAnswersId.get(quiz))


  if (isRight) {
    quizContent.innerHTML = "<b>Correct!</b> <br><br> "+answerSubmissionResponse.get(quiz)+"<br><br><br>";
  }
  else {
    quizContent.innerHTML = "<b>Oops! That's not quite right...</b> <br><br>"+answerSubmissionResponse.get(quiz)+"<br><br>The right answer is:"+"<br><br><br>"; 
  }

  quizContent.appendChild(div);

}

