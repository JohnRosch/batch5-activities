//variables
var quiz = [];
quiz[0] = new Question("How many notes are there in Major scale?", "7", "3", "5");
quiz[1] = new Question("C Major Scale is consist of 5 notes?", "False", "True", "Maybe");
quiz[2] = new Question("What is the second mode of C Major Scale?", "Dorian mode", "Pentatonic mode", "Xys mode");
quiz[3] = new Question("What is the 1st mode of C Major Scale?", "Ionian", "Lydian", "American");
quiz[4] = new Question("Aeolian mode is exactly as", "Minor Scale", "Major Scale", "Lydian Scale");
quiz[5] = new Question("Ionian mode is exactly as", "Major Scale", "Scale of X", "Dominant Scale");
quiz[6] = new Question("Consisting of 5 notes, a very famous scale", "Pentatonic Scale", "Baker Scale", "Den's Scale");
quiz[7] = new Question("The third degree of modes, sounds like evil", "Phyrgian", "Locrian", "Dominant");
quiz[8] = new Question("Steve vai's favorite scale", "Lydian", "Locrian", "Dorian");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded", function(event) { 
  btnProvideQuestion();
});

function Question(question,rightAnswer,wrongAnswer1,wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer1;
    this.wrongAnswer2 = wrongAnswer2;
};

function shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

function btnProvideQuestion() { 
  
	var randomNumber = Math.floor(Math.random()*quiz.length);
	randomQuestion = quiz[randomNumber]; //getQuestion
  answers = [randomQuestion.rightAnswer, randomQuestion.wrongAnswer1, randomQuestion.wrongAnswer2];
  shuffle(answers);
  
  document.getElementById("question").innerHTML= randomQuestion.question;
  document.getElementById("answerA").value= answers[0];
  document.getElementById("answerA").innerHTML= answers[0];
  document.getElementById("answerB").value= answers[1];
  document.getElementById("answerB").innerHTML= answers[1];
  document.getElementById("answerC").value= answers[2];
  document.getElementById("answerC").innerHTML= answers[2];

}

function answerA_clicked() {
  var answerA = document.getElementById("answerA").value;
  	checkAnswer(answerA);
}

function answerB_clicked() {
		var answerB = document.getElementById("answerB").value;
  checkAnswer(answerB);
}
function answerC_clicked() {
  var answerC = document.getElementById("answerC").value;
  	
		checkAnswer(answerC);
}

function adjustScore(isCorrect) {
  debugger;
  if (isCorrect) {
    currentScore++;
   }
   if (currentScore === 5) {
     alert("STREAK! Wow 5 in a row! Keep it up! ");
   }
   if (currentScore === 10) {
    alert("STREAK! Wow 10 in a row! Keep it up! ");
  }
  if (currentScore === 15) {
    alert("STREAK! Wow 15 in a row! Keep it up! ");
  }
  if (currentScore === 20) {
    alert("STREAK! Wow 20 in a row! Keep it up! ");
  }
  if (currentScore === 25) {
    alert("STREAK! Wow 25 in a row! Keep it up! ");
  }
  if (currentScore === 30) {
    alert("STREAK! Wow 30 in a row! Keep it up! ");
  }
  document.getElementById("score").innerHTML = currentScore;
}

function checkAnswer(answer) {  
  if (answer == randomQuestion.rightAnswer) {
    adjustScore(true);
    btnProvideQuestion();
  } else { 
    alert("Wrong Answer!");
    btnProvideQuestion();
  }	  
}

function exit (){
  var exitgame = document.getElementById("exit").value;
  alert("GAME WILL EXIT THANKS FOR PLAYING");
  alert("YOUR FINAL SCORE: " + currentScore);
  currentScore = null;
  btnProvideQuestion();
  document.getElementById("score").innerHTML = 0;


}
