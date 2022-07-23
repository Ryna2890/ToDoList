const buttonAdd = document.querySelector('.button');
buttonAdd.addEventListener('click',()=>{
    const textFromInput = document.querySelector('.input').value
    const move = new CustomEvent('passText',{
        bubbles: true,
        cancelable: true,
        composed: false,
        detail:{
            text:textFromInput,
        }
    })
    buttonAdd.dispatchEvent(move)
    clearText()
})
function clearText(){
    document.querySelector('.input').value=''
}










