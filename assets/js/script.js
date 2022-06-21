// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {

    let playerName = prompt('Please Type your player name?', 'Player');
    document.getElementById('playerName').innerHTML = playerName;
})

function question() {


}
const questions = [{
        question: 'Who is the world champion of WC 2018?',
        'Which world cups did zlatan play?'
    },
    {
        question: 'Who missed the  last penalty in wc 1994?'
    },
    {
        question: 'What team came third in the world cup 2002?'
    },
    {
        question: 'What is the  name of the instrument that was popular in the world cup 2008?'
    },
    {
        question: 'When did Italy play the world cup last?'
    },
    {
        question: 'How many world cup goals have Cristiano Ronaldo scored?'
    },
    {
        question: 'Where will the world cup be played 2022?'
    },
    {
        question: 'What is the name of Maradonas famous goal against'
    },
    {
        question: 'What year was the first world cup?'
    }
]
const answers = [{
        answer: 'France'
    },
    {
        answer: '2002 and 2006'
    },
    {
        answer: 'Robert Baggio'
    },
    {
        answer: 'Turkey'
    },
    {
        answer: 'Vuvuzela'
    },
    {
        answer: '2014 in Brazil'
    },
    {
        answer: 'Seven goals(thus far)'
    },
    {
        answer: 'Qatar in november'
    },
    {
        answer: 'Hand of God'
    },
    {
        answer: '13 july 1930'
    }

]


function questionImages() {

}


function keepScore() {

}

function highScore() {

}