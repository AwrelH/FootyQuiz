// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  

  
});
//APPEND div, h1, p of the start page when entering page
let myIntroDiv = document.createElement("div");
myIntroDiv.id = "intro";
let myHeading = document.createElement("h1");
myHeadingText = document.createTextNode("Welcome to Footy Quiz!");
myHeading.append(myHeadingText);

let myParagraph = document.createElement("p");
myParagraphText =
  document.createTextNode(`You will get (ten)10 questions and on each question you will have four(4)
 options/buttons that represent answers, one is correct and the rest are not.
The green and pinkred counter will keep you informed on how well you
are doing. If you want to play again, just press the 'Restart'-button.
Good Luck. When ever you are ready,`);
myParagraph.id = "intro";

let myIntroButton = document.createElement("button");
myButtonText = document.createTextNode("click to play!");
myIntroButton.append(myButtonText);
myIntroButton.id = "introButton";

myParagraph.append(myParagraphText, myIntroButton);

//APPEND to the empty div
let myDiv = document.getElementById("myDiv");
myDiv.append(myHeading, myParagraph);

//
let introButton = document.getElementById("introButton");
introButton.addEventListener("click", welcome);









  let i = 0;
  let right = 0;
  let wrong = 0;
  function startGame(question) {
    let option1 = question.answers.a;
    let option2 = question.answers.b;
    let option3 = question.answers.c;
    let option4 = question.answers.d;
    let quest = question.question;
    document.getElementById("question").innerText = quest;
    document.getElementById("optionA").innerText = option1;
    document.getElementById("optionB").innerText = option2;
    document.getElementById("optionC").innerText = option3;
    document.getElementById("optionD").innerText = option4;
   
  }
  function answered(option) {
    correct = questions[i].correctAnswer;
    if (correct === option) {
      console.log("thats right");
      right++;
      document.getElementById("rightAnswers").innerText = right.toString();
    } else {
      wrong++;
      document.getElementById("wrongAnswers").innerText = wrong.toString();
    }
    i++;
    // if not the end of the game onto the next question
    if (i < 10) {
      startGame(questions[i]);
    } else {
      console.log("end of game");
      // call a function that gives end of game message
      endGame();
    }
  }
  function endGame() {
    document.getElementById("answerContainer").style.display = "none";
    //removes the absolute position from the h2 element and keeps score boxes below and not under it
    //when removing display 
    document.getElementById('question').style.position = "initial";
    document.getElementById(
      "question"
    ).innerHTML = `You have reached the end of the game and you got ${right} correct answer(s)`;

  }
  
  /**
   *
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
      c: "Robert Baggio <img src='assets/images/q-images/baggio.png'>",
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
      question:
        "The name of the instrument that was popular in the WC 2008?",
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

  function welcome() {
    document.getElementById("myDiv").style.display = "none";
    startGame(questions[i]);
    let playerName = window.prompt("Type your player name", "Player");
  if (playerName === null) {
    playerName = "Player";
  }
  document.getElementById("playerName").innerText = playerName;
    
  }
  