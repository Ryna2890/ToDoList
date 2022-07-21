const button = document.querySelector('.test-button');
const test = document.querySelector('.test');



const createEvent = (someText) => {
    return new CustomEvent('custom', {
        bubbles: true,
        cancelable: true,
        composed: false,
        detail: {
            text: someText,
        }
    } )
}

button.addEventListener('click', () => {
    const text = document.querySelector('.test-input').value;
    button.dispatchEvent(createEvent(text))
})

test.addEventListener('custom', (event) => {
    const list = document.querySelector('.list');
    const item = document.createElement('li');
    item.innerText = event.detail.text;
    list.append(item)
    document.querySelector('.test-input').value = null;
})


test.dispatchEvent(createEvent('text'))
