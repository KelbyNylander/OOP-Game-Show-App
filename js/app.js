/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phraseUL = document.getElementById('phrase').firstElementChild;
let startOverlay = document.getElementById('overlay');
const startButton = document.getElementById('btn__reset');
const letterButtons = document.querySelectorAll('button[class="key"]');
let heart = document.querySelectorAll('img');
let gameOverMessage = document.getElementById('game-over-message');

let game = new Game()
startButton.addEventListener('click', (e) => {
    phraseUL.innerHTML = '';
    letterButtons.forEach( key => {
        key.disabled = false;
        key.classList.remove('wrong', 'chosen');
    })
    game.missed = 0;
    game.startGame();
    for ( let i = 0; i < heart.length; i++ ) {
        heart[i].src = ''
        heart[i].src = 'images/liveHeart.png';
        console.log(heart[i]);
    }
});

document.getElementById('qwerty').addEventListener('click', (e) => {
    if ( e.target.tagName === 'BUTTON') {
        game.handleInteraction(e.target);
    }
 });