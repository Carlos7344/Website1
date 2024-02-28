panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

fucntion removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}
