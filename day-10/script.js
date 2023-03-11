const input = document.querySelector('input')
const result = document.querySelector('.word-length')

function wordLength() {
    let length = input.value.length

    result.textContent = length
}

input.addEventListener('input', wordLength)