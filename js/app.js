/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let phraseUL = document.getElementById('phrase').firstElementChild;
let startOverlay = document.getElementById('overlay');


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

const game = new Game();
game.startGame();
console.log(`Active Phrase - phrase: ${game.activePhrase.selectedPhrase}`);