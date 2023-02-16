const images = document.querySelectorAll('.conteiner-image')

images.forEach(image => {
    image.addEventListener('click', (e) => {
        removeClass()
        image.classList.add('open-image')
    })
})

function removeClass() {
    images.forEach(image => {
        image.classList.remove('open-image')
    })
}