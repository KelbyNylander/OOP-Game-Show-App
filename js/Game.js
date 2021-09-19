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
        const phrases = ['grandma has the best cookies',
                         'softer than a babies bottom',
                         'The only things for certain in life are death and taxes',
                         'A Bargain At Half The Price',
                         'Whatever Floats Your Boat',
                         'Wheres My Tackle Box',
                         'Where The Sand Meets The Sea'
                        ];
        return phrases;
    }
}