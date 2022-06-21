// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {

    /* let playerName = prompt('Please Type your player name?', 'Player');
    if (input === null) {
        playerName = 'Player'; //If player won't type name and cancels name will be Player
    }
    document.getElementById('playerName').innerHTML = playerName;
*/
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('id')) {
                startGame(question);
            }
        })
    }
    startGame();
})
/**
 * 
 * 
 */

function startGame(question) { 
    
    let option1 = questions[i].answers.a;
    let option2 = questions[i].answers.b;
    let option3 = questions[i].answers.c;
    let option4 = questions[i].answers.d;

    let question = questions[i];

        for (let i = 0; i < question.length; i++) {
            let askQuestion = document.getElementById('question').innerHTML = question[i];
        }

   
    
        }
    


function displayAnswer(option1, option2, option3, option4) {
    document.getElementById('optionA').textContent = option1;
    document.getElementById('optionB').textContent = option2;
    document.getElementById('optionC').textContent = option3;
    document.getElementById('optionD').textContent = option4;

}
/**
 * 
 * All the questions and answers within an array, seperated within objects
 */
const questions = [{
        question: 'Who is the world champion of WC 2018?',
        answers: {
            a: 'Croatia',
            b: 'Spain',
            c: 'Brazil',
            d: 'France'
        },
        correctAnswer: 'd',

    },
    {
        question: 'Which world cups did zlatan play?',
        answers: {
            a: '1998 and 2002',
            b: '2002 and 2006',
            c: 'none',
            d: ' 2006 and 2010'
        },
        correctAnswer: 'b',
    },
    {
        question: 'Who missed the  last penalty in wc 1994?',
        answers: {
            a: 'Romario',
            b: 'Costacurta',
            c: 'Robert Baggio',
            d: 'Ravanelli'
        },
        correctAnswer: 'c',
    },
    {
        question: 'What team came third in the world cup 2002?',
        answers: {
            a: 'Turkey',
            b: 'South Korea',
            c: 'Mexico',
            d: 'Spain'
        },
        correctAnswer: 'a',
    },
    {
        question: 'What is the  name of the instrument that was popular in the world cup 2008?',
        answers: {
            a: 'Saxophone',
            b: 'Vuvuzela',
            c: 'Guitar',
            d: 'flute'
        },
        correctAnswer: 'b',
    },
    {
        question: 'When did Italy play the world cup last?',
        answers: {
            a: '2018',
            b: '1994',
            c: '2002',
            d: '2014'
        },
        correctAnswer: 'd',
    },
    {
        question: 'How many world cup goals have Cristiano Ronaldo scored?',
        answers: {
            a: '7 goals',
            b: '0 goals',
            c: '6 goals',
            d: '9 goals'
        },
        correctAnswer: 'a',
    },
    {
        question: 'Where will the world cup be played 2022?',
        answers: {
            a: 'England',
            b: 'France',
            c: 'Qatar',
            d: 'Australia'
        },
        correctAnswer: 'c',
    },
    {
        question: 'What is the name of Maradonas famous goal against',
        answers: {
            a: 'Foot of God',
            b: 'Chest of God',
            c: 'Hand of God',
            d: 'Head of God'
        },
        correctAnswer: 'c',
    },
    {
        question: 'What year was the first world cup?',
        answers: {
            a: '13 july 1930',
            b: '8 June 1958',
            c: '11 July 1966',
            d: '27 May 1934'
        },
        correctAnswer: 'a',
    }
]


/**
 * The code for keeping the score
 * 
 */
function keepScore() {


}
/**
 * The code to add highscore to the board
 * 
 */
function highScore() {

}