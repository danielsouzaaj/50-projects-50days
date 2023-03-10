const form = document.querySelector('.form-conteiner')
const input = document.querySelector('.form-input')
const lastMessage = document.querySelector('.last-message')

let saveMessage = localStorage.getItem('message') || 'Nenhuma mensagem!'
lastMessage.textContent = saveMessage

form.addEventListener('click', (event) => {
    event.preventDefault()

    let message = input.value

    if (message) {
        lastMessage.textContent = message
        localStorage.setItem('message', message)
    }

    input.value = ''
})