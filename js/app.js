/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phraseUL = document.getElementById('phrase').firstElementChild;
let startOverlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const letterButtons = document.querySelectorAll('button[class="key"]');
let heart = document.querySelectorAll('img');
let gameOverMessage = document.getElementById('game-over-message');

startButton.addEventListener('click', (e) => {
    game = new Game();
    game.startGame();
});

//listener adds click funtion to on screen keyboard
document.getElementById('qwerty').addEventListener('click', (e) => {
    if ( e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
 });

 //added keyboard functions
 document.addEventListener('keydown', key => {
    let pressedKey = key.key.toLowerCase();
    if ( /^[a-z]$/.test(pressedKey) && startOverlay.style.display === 'none' )
        letterButtons.forEach( key => {
            if ( key.textContent === pressedKey ) {
                game.handleInteraction(key);
        }
     });
});