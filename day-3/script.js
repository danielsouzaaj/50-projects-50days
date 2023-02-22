const btnOpen = document.querySelector('.open')
const btnClose = document.querySelector('.close')
const mainConteiner = document.querySelector('.conteiner')

btnOpen.addEventListener('click', () => mainConteiner.classList.add('show-nav'))
btnClose.addEventListener('click', () => mainConteiner.classList.remove('show-nav'))