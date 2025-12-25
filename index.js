const palavras = {
    "pt-br":["teste", "palavra", "grande", "palavrao", "alias", "nihil",
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Magnam", "atque", "eos", "ad", "assumenda", "maxime", "maiores", 
        "molestiae", "molestias", "quibusdam", "Eaque", "obcaecati", "nesciunt", "molestiae", "beatae", "id", "hic", "labore",
        "inventore", "Mollitia", "dolore", "expedita", "aliquid", "nobis", "fugit", "facere", "natus", "vel", 
        "iste", "adipisci", "tempora", "deleniti", "suscipit", "neque"]
}

const wordsBox = document.getElementById('words-box');
const content = document.getElementById('content');
let typingWord = '';

document.addEventListener('DOMContentLoaded', () => {
    generateNewText();
    
    window.addEventListener('focus', () => {
        window.addEventListener('keyup', keyAction)
    })
    
    window.addEventListener('blur', () => {
        window.removeEventListener('keyup', keyAction);
    })
    
    function keyAction(key){
        console.log(key);

        if(key.key.length === 1){
            typingWord += key.key;
        }   else if(key.key === 'Backspace'){
            typingWord = typingWord.slice(0, -1);
        }

        checkWord();

        console.log(typingWord)
    }

    function checkWord(){
        const activeWord = document.querySelector('.word.active');
        const letters = activeWord.querySelectorAll('letter');

        letters.forEach((letter, index) => {
            if (letter.textContent === typingWord[index] && typingWord[index] !== undefined) {
                letter.className = 'correct';
            } else if (letter.textContent !== typingWord[index] && typingWord[index] !== undefined) {
                letter.className = 'incorrect';
            }
            else{
                letter.className = '';
            }
        });
    }


})

function generateNewText() {
    wordsBox.innerHTML = '';

    for (let index = 0; index < 80; index++) {
        const randomItem = palavras["pt-br"][Math.floor(Math.random() * palavras["pt-br"].length)];

        const wordElement = document.createElement('div');
        wordElement.className = index == 0 ? 'word active' : 'word';

        const letters = randomItem.split('');

        letters.forEach(letter => {
            const letterElement = document.createElement('letter');
            letterElement.textContent = letter;
            wordElement.appendChild(letterElement);
        });

        wordsBox.appendChild(wordElement);
    }
}