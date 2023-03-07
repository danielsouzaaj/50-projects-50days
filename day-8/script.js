const body = document.querySelector('body')
const button = document.querySelector('button')
const backgroundColors = ['#00FFFF', '#0000FF', '#D2691E', '#DC143C', '#B8860B', '#FF8C00', '#008000', '#F0E68C', '#ADD8E6', '#FF0000', '#00FF7F', '#FFFF00', '#FFFFFF']

button.addEventListener('click', () => {
    let randomNumber = Math.round(Math.random() * (backgroundColors.length - 1))
    body.style.backgroundColor = backgroundColors[randomNumber]
})