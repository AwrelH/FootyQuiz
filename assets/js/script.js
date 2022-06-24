// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener("DOMContentLoaded", function () {
  let playerName = window.prompt("Type your player name", "Player");
  if (playerName === null) {
    playerName = "Player";
  }
  document.getElementById("playerName").innerHTML = playerName;

  startGame(questions[i]);
});

  var i = 0;
  var right = 0;
  var wrong = 0;
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
  function answered(option) {
    correct = questions[i].correctAnswer;
    if (correct === option) {
      console.log("thats right");
      right++;
      document.getElementById("rightAnswers").innerHTML = right.toString();
    } else {
      wrong++;
      document.getElementById("wrongAnswers").innerHTML = wrong.toString();
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
      question: "Who is the world champion of WC 2018?",
      answers: {
        a: "Croatia <img alt='flag of croatia' src='assets/images/q-images/croatia.png'>",
      b: "Spain <img alt='flag of spain' src='assets/images/q-images/spain.png'>",
      c: "Brazil <img alt='flag of brazil' src='assets/images/q-images/brazil.png'>",
      d: "France <img alt='flag of france' src='assets/images/q-images/france.png'>",
      },
      correctAnswer: "d",
    },
    {
      question: "Which world cups did zlatan play?",
      answers: {
        a: "1998 and 2002",
        b: "2002 and 2006",
        c: "none",
        d: " 2006 and 2010",
      },
      correctAnswer: "b",
    },
    {
      question: "Who missed the  last penalty in wc 1994?",
      answers: {
        a: "Romario <img src='assets/images/q-images/romario.png'>",
      b: "Costacurta <img src='assets/images/q-images/costacurta.png'>",
      c: "Robert Baggio <img src='assets/images/q-images/baggio.png'>",
      d: "Ravanelli <img src='assets/images/q-images/ravanelli.png'>",
      },
      correctAnswer: "c",
    },
    {
      question: "What team came third in the world cup 2002?",
      answers: {
        a: "Turkey <img src='assets/images/q-images/turkey.png'>",
      b: "South Korea <img src='assets/images/q-images/southKorea.png'>",
      c: "Mexico <img src='assets/images/q-images/mexico.png'>",
      d: "Spain <img src='assets/images/q-images/spain.png'>",
      },
      correctAnswer: "a",
    },
    {
      question:
        "What is the  name of the instrument that was popular in the world cup 2008?",
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
        a: "England <img src='assets/images/q-images/england.png'>",
        b: "France <img src='assets/images/q-images/france.png'>",
        c: "Qatar <img src='assets/images/q-images/qatar.png'>",
        d: "Australia <img src='assets/images/q-images/australia.png'>",
      },
      correctAnswer: "c",
    },
    {
      question: "What is the name of Maradonas famous goal against",
      answers: {
        a: "Foot of God <img src='assets/images/q-images/foot.png'>",
      b: "Chest of God <img src='assets/images/q-images/chest.png'>",
      c: "Hand of God <img src='assets/images/q-images/hand.png'>",
      d: "Head of God <img src='assets/images/q-images/head.png'>",
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

