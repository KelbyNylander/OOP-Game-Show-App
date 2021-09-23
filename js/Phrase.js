/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor (phrase){
       this.selectedPhrase = phrase.toLowerCase(); 
    }
/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const phraseArray = this.selectedPhrase.split('');

        phraseArray.forEach(character => {
          const li = document.createElement('li');
          if (character === ' ') {
            li.className = 'space';
          } else {
            li.classList.add('hide', 'letter', character);
          }
          li.textContent = character;
          phraseUL.appendChild(li);
        });
    };
/**
* Checks if passed letter is in phrase
* @param (string) letter - Letter to check
*/
    checkLetter(letter) {
        return this.selectedPhrase.includes(letter) 
};
/**
* Displays passed letter on screen after a match is found
* @param (string) letter - Letter to display
*/
showMatchedLetter(letter) {
    const matches = document.querySelectorAll('.letter.' + letter);
        matches.forEach(match => {
            match.classList.remove('hide');
            match.classList.add('show');
        });
    }
}