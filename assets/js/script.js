//APPEND div, h1, p of the start page when entering page
let myIntroDiv = document.createElement("div");
myIntroDiv.id = "intro";
let myHeading = document.createElement("h1");
let myHeadingText = document.createTextNode("Welcome to Footy Quiz!");
myHeading.append(myHeadingText);

let myParagraph = document.createElement("p");
let myParagraphText =
  document.createTextNode(`You will get (ten)10 questions and on each question you will have four(4)
 options/buttons that represent answers, one is correct and the rest are not. \n
The green and pinkred counter will keep you informed on how well you
are doing. If you want to play again, just press the 'Restart'-button. \n
Good Luck.When ever you are ready, type your name and click on the button. \n`);
myParagraph.id = "intro";

let myIntroButton = document.createElement("button");
let myButtonText = document.createTextNode("click to play!");
myIntroButton.append(myButtonText);
myIntroButton.id = "introButton";
let addInput = document.createElement("input");
addInput.setAttribute("placeholder", "Type your player name");
addInput.setAttribute("required", "");
addInput.id = "addName";
// instructions and code from below to assign enter-key
//https://tutorial.eyehunts.com/js/how-to-press-enter-key-programmatically-in-javascript-example-code/
//
addInput.onkeydown = function (e) {
  if (e.key === "Enter") {
    welcome();
  }
};
//APPEND three elements into myParagraph
myParagraph.append(myParagraphText, addInput, myIntroButton);

//APPEND to the empty div
let myDiv = document.getElementById("myDiv");
myDiv.append(myHeading, myParagraph);

//Adding eventlistener to introbutton
let introButton = document.getElementById("introButton");
introButton.addEventListener("click", welcome);

let i = 0;
let right = 0;
let wrong = 0;
//startgame function
function startGame(question) {
  let option1 = question.answers.a;
  let option2 = question.answers.b;
  let option3 = question.answers.c;
  let option4 = question.answers.d;
  let quest = question.question;
  document.getElementById("question").innerHTML = quest;
  document.getElementById("optionA").innerHTML = option1;
  document.getElementById("optionB").innerHTML = option2;
  document.getElementById("optionC").innerHTML = option3;
  document.getElementById("optionD").innerHTML = option4;
}
//the control of answers function
function answered(option) {
  let correct = questions[i].correctAnswer;
  if (correct === option) {
     right++;
    document.getElementById("rightAnswers").innerText = right;
    collectAnswers.push(
      `<li><b>question:${[i + 1]}</b> You answered correct  ${correct} </li>`
    ); //pushing answered call into empty array that will be displayed later
  } else {
    wrong++;
    document.getElementById("wrongAnswers").innerText = wrong;
    collectAnswers.push(
      `<li><b>question:${[i + 1]}</b> The correct answer is  ${correct} </li>`
    );//pushing answered call into empty array that will be displayed later
  }
  i++;
  // if not the end of the game onto the next question
  if (i < 10) {
    startGame(questions[i]);
  } else {
    // call a function that gives end of game message
    endGame();
  }
}
//The endgame function
function endGame() {
  document.getElementById("answerContainer").style.display = "none";
  //removes the absolute position from the h2 element and keeps score boxes below and not under it
  //when removing display
  document.getElementById("question").style.position = "initial";
  document.getElementById("question").innerText = 
  `You have reached the end of the game and you got ${right} correct answer(s)`;
  revealAnswers();
}

/**
 * All the questions and answers within an array, seperated within objects
 */
const questions = [
  {
    question: "Who are the world champion of WC 2018?",
    answers: {
      a: "Croatia <img alt='flag of croatia' src='assets/images/q-images/croatia.png'>",
      b: "Spain <img alt='flag of spain' src='assets/images/q-images/spain.png'>",
      c: "Brazil <img alt='flag of brazil' src='assets/images/q-images/brazil.png'>",
      d: "France <img alt='flag of france' src='assets/images/q-images/france.png'>",
    },
    correctAnswer: "d",
  },
  {
    question: "Which world cups did Zlatan Ibrahimovic play?",
    answers: {
      a: "1998 and 2002",
      b: "2002 and 2006",
      c: "He didn't",
      d: " 2006 and 2010",
    },
    correctAnswer: "b",
  },
  {
    question: "Who missed the  last penalty in wc 1994?",
    answers: {
      a: "Romario <img alt='romario' src='assets/images/q-images/romario.png'>",
      b: "Costacurta <img src='assets/images/q-images/costacurta.png'>",
      c: "Roberto Baggio <img src='assets/images/q-images/baggio.png'>",
      d: "Ravanelli <img src='assets/images/q-images/ravanelli.png'>",
    },
    correctAnswer: "c",
  },
  {
    question: "What team came third in the world cup 2002?",
    answers: {
      a: "Turkey <img alt='flag of turkey' src='assets/images/q-images/turkey.png'>",
      b: "South Korea <img alt='flag of south korea' src='assets/images/q-images/southKorea.png'>",
      c: "Mexico <img alt='flag of mexico' src='assets/images/q-images/mexico.png'>",
      d: "Spain <img alt='flag of spain' src='assets/images/q-images/spain.png'>",
    },
    correctAnswer: "a",
  },
  {
    question: "The name of the instrument that was popular in the WC 2008?",
    answers: {
      a: "Saxophone",
      b: "Vuvuzela",
      c: "Guitar",
      d: "flute",
    },
    correctAnswer: "b",
  },
  {
    question: "When did Italy play the world cup last?",
    answers: {
      a: "2018",
      b: "1994",
      c: "2002",
      d: "2014",
    },
    correctAnswer: "d",
  },
  {
    question: "How many world cup goals have Cristiano Ronaldo scored?",
    answers: {
      a: "7 goals",
      b: "0 goals",
      c: "6 goals",
      d: "9 goals",
    },
    correctAnswer: "a",
  },
  {
    question: "Where will the world cup be played 2022?",
    answers: {
      a: "England <img alt='flag of england' src='assets/images/q-images/england.png'>",
      b: "France <img alt='flag of france' src='assets/images/q-images/france.png'>",
      c: "Qatar <img alt='flag of qatar' src='assets/images/q-images/qatar.png'>",
      d: "Australia <img alt='flag of australia' src='assets/images/q-images/australia.png'>",
    },
    correctAnswer: "c",
  },
  {
    question: "What is the name of Maradonas famous goal against England?",
    answers: {
      a: "Foot of God <img alt='a foot' src='assets/images/q-images/foot.png'>",
      b: "Chest of God <img alt='a hairy chest' src='assets/images/q-images/chest.png'>",
      c: "Hand of God <img alt='a hand' src='assets/images/q-images/hand.png'>",
      d: "Head of God <img alt='a head' src='assets/images/q-images/head.png'>",
    },
    correctAnswer: "c",
  },
  {
    question: "What year was the first world cup?",
    answers: {
      a: "13 july 1930",
      b: "8 June 1958",
      c: "11 July 1966",
      d: "27 May 1934",
    },
    correctAnswer: "a",
  },
];
//the welcome function and within it the startGame function
function welcome() {
  document.getElementById("myDiv").style.display = "none";
  startGame(questions[i]);
  let typedName = document.getElementById("addName");
  document.getElementById("playerName").innerText = typedName.value;
  if (typedName.value === "") {
    typedName = "Player";
    document.getElementById("playerName").innerText = typedName;
  } 
}
//pushes answers to array and with join() the array will be printed in p element with id "theAnswers"
let collectAnswers = [];
collectAnswers.join(" ");

//will reveal the answers when the all questions are answered
function revealAnswers() {
  //https://www.w3schools.com/jsref/jsref_join.asp
  document.getElementById("theAnswers").innerHTML = collectAnswers.join(" ");
  document.querySelector("summary").style.display = "block";
}
