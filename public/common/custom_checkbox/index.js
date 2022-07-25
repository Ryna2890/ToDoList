const customCheckbox = document.querySelector('.custom_checkbox')
let checkBoxChange

customCheckbox.addEventListener("change", (event) => {
    checkBoxChange = event.target.checked
    const checkboxClick = new CustomEvent("checkboxClick", {
        detail: {
            condition: checkBoxChange,
        },
        bubbles: true,
    })
    customCheckbox.dispatchEvent(checkboxClick)
})
