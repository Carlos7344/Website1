toggle = document.getElementById('toggle')
open = document.getElementById('open')
modal = document.getElementById('modal')

toggle.addEventListener('click', () => {
    document.body.classList.toggle('show-nav')
})

opne.addEventListener('click', () => {
    modal.classList.add('show-modal')
})