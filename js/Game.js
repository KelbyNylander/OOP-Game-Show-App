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
        //console.log(lowerCasePhrases)
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
    };

}
