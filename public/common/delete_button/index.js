const deleteButton = document.querySelector('.delete_button')

deleteButton.addEventListener("click", (event) => {
    let targetClick = event.target
    const clickEvent = new CustomEvent("deleteEvent", {
        detail: {
            click: targetClick,
        },
        bubbles: true,
    })
    deleteButton.dispatchEvent(clickEvent)
})