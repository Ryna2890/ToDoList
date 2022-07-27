const layoutList = document.querySelector('.layout__list')
layoutList.addEventListener('checkboxClick', (event) => {
    console.log(event.detail)
})

const root = document.querySelector('.layout');
root.addEventListener('passText',(event)=>{
    console.log(event.detail.text)
})
