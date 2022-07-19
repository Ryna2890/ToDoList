window.addEventListener("load", buttonEdit );

function buttonEdit() {
    const button = document.querySelector('.button')
    const addButton = document.createElement('button');
    addButton.classList.add('button__add');
    addButton.type = 'submit';
    addButton.innerText = 'Добавить';

    button.append(addButton);
}