/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(){
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = 'null';
    }
/**
* Creates phrases for use in game
* @return {array} An array of phrases that could be used in the game
*/
    createPhrases() {
        let lowerCasePhrases = [];
        let phrases =   ['Grandma has the best cookies',
                        'Softer than a babies bottom',
                        'The only things for certain in life are death and taxes',
                        'A Bargain At Half The Price',
                        'Whatever Floats Your Boat',
                        'Where is My Tackle Box',
                        'Where The Sand Meets The Sea'
                     ];
        phrases.forEach ( phrase => {
            lowerCasePhrases.push(new Phrase(phrase));
        });
        return lowerCasePhrases;
    }
/**
* Selects random phrase from phrases property
* @return {Object} Phrase object chosen to be used
*/
    getRandomPhrase() {
        const index = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[index];
    };
/**
* Begins game by selecting a random phrase and displaying it to user
*/
    startGame() {
        startOverlay.style.display = 'none';
        const calledPhrase = this.getRandomPhrase();
        calledPhrase.addPhraseToDisplay();
        this.activePhrase = calledPhrase;

        // reset hearts
        game.missed = 0;
        for ( let i = 0; i < heart.length; i++ ) {
            heart[i].src = ''
            heart[i].src = 'images/liveHeart.png';
        }
    
    };
/**
* Handles onscreen keyboard button clicks
* @param (HTMLButtonElement) button - The clicked button element
*/
    handleInteraction(key) {

        if ( this.activePhrase.checkLetter(key.textContent) === false && key.disabled === false) {
            key.classList = "wrong";
            this.removeLife()
        }   if ( this.activePhrase.checkLetter(key.textContent) === true ) {
            key.classList = 'chosen';
            this.activePhrase.showMatchedLetter(key.textContent);
        }   if ( this.checkForWin() ) {
                this.gameOver(true);
        }
        key.disabled = true;
    };
/**
* Checks for winning move
* @return {boolean} True if game has been won, false if game wasn't
won
*/
    checkForWin() {
       const hiddenLetters = document.getElementsByClassName('hide')
       if ( hiddenLetters.length > 0 ) {
            return false;
       } if ( hiddenLetters.length === 0 )  {
           return true;
       }  
    };
/**
* Increases the value of the missed property
* Removes a life from the scoreboard
* Checks if player has remaining lives and ends game if player is out
*/
    removeLife() {
        this.missed++;
        heart[ heart.length - this.missed ].src = 'images/lostHeart.png'
        if ( this.missed >= 5 ) {
            this.gameOver(false);
        } 
    };
/**
* Displays game over message
* @param {boolean} gameWon - Whether or not the user won the game
*/
    gameOver(gameWon) {
        startOverlay.style.display = '';
        if ( this.missed === 5) {
            gameOverMessage.textContent = `Better luck next time! The phrase was "${this.activePhrase.selectedPhrase}"`;
            startOverlay.className = 'lose';
        } else {
            startOverlay.className = 'win';
            gameOverMessage.textContent = `You Won! The phrase was "${this.activePhrase.selectedPhrase}"`;
        }
        //clear phrase
        phraseUL.innerHTML = '';
        // re-enable disbaled keys
        letterButtons.forEach( key => {
            key.disabled = false;
            key.classList.remove('wrong', 'chosen');
        });
    };
}
