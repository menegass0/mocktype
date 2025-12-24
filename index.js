document.addEventListener('DOMContentLoaded', () => {   
    input = document.getElementById('input');

    window.addEventListener('focus', () => {
        window.addEventListener('keyup', keyAction)
    })
    
    window.addEventListener('blur', () => {
        window.removeEventListener('keyup', keyAction);
    })
    
    function keyAction(key){
        console.log(key)
    }
})