function addDeleteClickListener(element){
    element.addEventListener("click", (event) => {
        let targetClick = event.target
        const clickEvent = new CustomEvent("deleteEvent", {
            detail: {
                click: targetClick,
            },
            bubbles: true,
        })
        element.dispatchEvent(clickEvent)
    })
}




