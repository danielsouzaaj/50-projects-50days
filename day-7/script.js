const buttons = document.querySelectorAll('.btn')
const number = document.querySelector('.number')

let count = localStorage.getItem('counter') || 0
number.textContent = count

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        if (button.classList.contains('decrease')){
            number.textContent = --count
            numberColor()
        }

        if (button.classList.contains('reset')) {
            count = 0
            number.textContent = count
            numberColor()
        }

        if (button.classList.contains('increase')) {
            number.textContent = ++count
            numberColor()
        }

        localStorage.setItem('counter', count)
    })
})

function numberColor() {
    if (count > 0) {
        number.style.color = '#2bb637'
    }else if (count < 0) {
        number.style.color = '#e14141'
    }else {
        number.style.color = '#333333'
    }
}

numberColor()