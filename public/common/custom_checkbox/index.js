function addCheckboxListener(checkbox) {
  checkbox.addEventListener('change', (event) => {
    let isChecked = event.target.checked;
    const checkedEvent = new CustomEvent('checkboxClick', {
      detail: {
        condition: isChecked,
      },
      bubbles: true,
    });
    checkbox.dispatchEvent(checkedEvent);
  });
}
