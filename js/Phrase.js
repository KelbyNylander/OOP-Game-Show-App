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
}