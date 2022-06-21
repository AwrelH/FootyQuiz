// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them
document.addEventListener('DOMContentLoaded', function () {
    
 let playerName = prompt('Please Type your player name?', 'Player');
    document.getElementById('playerName').innerHTML = playerName;
})    

function question() {


}
const questions = [
    {'Who is the world champion of WC 2018?'},
    {'Which world cups did zlatan play?'},
    {'Who missed the  last penalty in wc 1994?'},
    {'What team came third in the world cup 2002?'},
    {'What is the  name of the instrument that was popular in the world cup 2008?'},
    {'When did Italy play the world cup last?'},
    {'How many world cup goals have Cristiano Ronaldo scored?'},
    {'Where will the world cup be played 2022?'},
    {'What is the name of Maradonas famous goal against'},
    {'What year was the first world cup?'}
]
const answers = [
    {'France'},
    {'2002 and 2006'},
    {'Robert Baggio'},
    {'Turkey'},
    {'Vuvuzela'},
    {'2014 in Brazil'},
    {'Seven goals(thus far)'},
    {'Qatar in november'},
    {'Hand of God'},
    {'13 july 1930'}
    
]


function questionImages() {

}


function keepScore() {

}

function highScore() {

}