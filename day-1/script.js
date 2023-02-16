const images = document.querySelectorAll('conteiner-image')

images.forEach(image => {
    image.addEventListener('click', (e) => {
        image.classList.add('open-image')
    })
})