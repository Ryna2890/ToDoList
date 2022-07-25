const field = document.querySelector('.field');
const buttonAdd = field.querySelector('.field__submitButton');
const textFromInput = field.querySelector('.field__input')

let inputValue = "input is empty"

textFromInput.addEventListener('input', (event)=>{
     inputValue = event.target.value
})

buttonAdd.addEventListener('click',()=>{
    const move = new CustomEvent('passText',{
        bubbles: true,
        detail: {
            text: inputValue,
        }
    })
    buttonAdd.dispatchEvent(move)
    clearText()
})

function clearText(){
    field.querySelector('.field__input input').value=''
}










