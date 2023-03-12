const telaPrincipal = document.querySelector('.tela-principal')
const form = document.querySelector('.tela-principal__form')
const input = document.querySelector('input')
const telaSecundaria = document.querySelector('.tela-secundaria')
const tentativas = document.querySelector('.tentativas')
const jogarNovamenteBtn = document.querySelector('.tela-secundaria__button')

const numeroAleatorio = Math.round(Math.random() * 10)
let numeroDeTentativas = 0

function trocaTela() {
    telaPrincipal.classList.toggle('hidden')
    telaSecundaria.classList.toggle('hidden')
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    numeroDeTentativas++

    let numeroDigitado = parseInt(input.value)

    if (numeroDigitado === numeroAleatorio) {
        trocaTela()
        tentativas.textContent = numeroDeTentativas
    }

    input.value = ''
})

jogarNovamenteBtn.addEventListener('click', () => location.reload())