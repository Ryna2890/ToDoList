const customCheckbox = document.querySelector('.custom_checkbox')

customCheckbox.addEventListener("change", (event) => {
    let isChecked = event.target.checked
    const checkedEvent = new CustomEvent("checkboxClick", {
        detail: {
            condition: isChecked,
        },
        bubbles: true,
    })
    customCheckbox.dispatchEvent(checkedEvent)
})
