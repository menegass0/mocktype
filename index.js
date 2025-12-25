const palavras = {
    "pt-br":["teste", "palavra", "grande", "palavrao", "alias", "nihil",
        "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipisicing", "elit", "Magnam", "atque", "eos", "ad", "assumenda", "maxime", "maiores", 
        "molestiae", "molestias", "quibusdam", "Eaque", "obcaecati", "nesciunt", "molestiae", "beatae", "id", "hic", "labore",
        "inventore", "Mollitia", "dolore", "expedita", "aliquid", "nobis", "fugit", "facere", "natus", "vel", 
        "iste", "adipisci", "tempora", "deleniti", "suscipit", "neque"]
}

document.addEventListener('DOMContentLoaded', () => { 
    const wordsBox = document.getElementById('words-box');

    for (let index = 0; index < 20; index++) {
        const randomItem = palavras["pt-br"][Math.floor(Math.random() * palavras["pt-br"].length)];

        const wordElement = document.createElement('div');
        wordElement.className = 'word';

        const letters = randomItem.split('');

        letters.forEach(letter => {
            const letterElement = document.createElement('span');
            letterElement.textContent = letter;
            wordElement.appendChild(letterElement);
        });

        wordsBox.appendChild(wordElement);
    }


    window.addEventListener('focus', () => {
        window.addEventListener('keyup', keyAction)
    })
    
    window.addEventListener('blur', () => {
        window.removeEventListener('keyup', keyAction);
    })
    
    function keyAction(key){
        
    }
})