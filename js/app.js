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
 


//heart[0].src = 'images/lostHeart.png';


// const phrase = new Phrase('Life is like a box of chocolates');
// console.log(`Phrase - phrase: ${phrase.selectedPhrase}`);

// const game = new Game();
// game.phrases.forEach((phrase, index) => {
// console.log(`Phrase ${index} - phrase: ${phrase.selectedPhrase}`);
// });


// const logPhrase = (phrase) => {
//     console.log(`Phrase - phrase: `, phrase.selectedPhrase);
//     };
// const game = new Game();
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());
//     logPhrase(game.getRandomPhrase());

//     console.log(`Phrase - phrase: `, game.getRandomPhrase().selectedPhrase);

// const game = new Game();
// game.getRandomPhrase().addPhraseToDisplay();

// const game = new Game();
// game.startGame();
// console.log(`Active Phrase - phrase: ${game.activePhrase.selectedPhrase}`);