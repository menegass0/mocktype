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

        if(key.key === " "){
            nextWord();
            return;
        }

        const activeWord = document.querySelector('.word.active');
        const letters = activeWord.querySelectorAll('letter');

        if(key.key.length === 1){
            typingWord += key.key;''

            if(typingWord.length > letters.length){
                const extraLetter = document.createElement('span');
                extraLetter.className = 'extra';
                extraLetter.innerText = key.key;

                activeWord.appendChild(extraLetter);
            } 

        }   else if(key.key === 'Backspace'){  
            typingWord = typingWord.slice(0, -1);

            if(typingWord.length >= letters.length ){
                activeWord.lastChild.remove();
            }
        }

        checkWord();

        console.log(typingWord)
    }

    function checkWord(){
        const activeWord = document.querySelector('.word.active');
        const letters = activeWord.querySelectorAll('letter');

        let wordCorrect = true;

        letters.forEach((letter, index) => {
            if (letter.textContent === typingWord[index] && typingWord[index] !== undefined) {
                letter.className = 'correct';
            } else if (letter.textContent !== typingWord[index] && typingWord[index] !== undefined) {
                letter.className = 'incorrect';
                wordCorrect = false;
            }
            else{
                letter.className = '';
            }
        });

        if(!wordCorrect || typingWord.length > letters.length){
            activeWord.classList.add('incorrect')
        }else{
            activeWord.classList.remove('incorrect')
        }
    }

    function nextWord(){
        const activeWord = document.querySelector('.word.active');

        const index = parseInt(activeWord.dataset.index);

        const words = document.querySelectorAll('.word');

        console.log(words[index+1]);

        words[index].classList.add('typed');
        words[index].classList.remove('active');

        typingWord = '';

        words[index+1].classList.add('active');
    }
})

function generateNewText() {
    wordsBox.innerHTML = '';

    for (let index = 0; index < 80; index++) {
        const randomItem = palavras["pt-br"][Math.floor(Math.random() * palavras["pt-br"].length)];

        const wordElement = document.createElement('div');
        wordElement.className = index == 0 ? 'word active' : 'word';
        wordElement.dataset.index = index;

        const letters = randomItem.split('');

        letters.forEach(letter => {
            const letterElement = document.createElement('letter');
            letterElement.textContent = letter;
            wordElement.appendChild(letterElement);
        });

        wordsBox.appendChild(wordElement);
    }

    typingWord = '';
}