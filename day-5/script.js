const bg = document.querySelector('.bg')
const textLoading = document.querySelector('.text-loading')
let load = 0
let teste = setInterval(blurring, 30);

function blurring() {
    load++
    
    if (load > 99) {
        clearInterval(teste)
    }

    textLoading.innerText = `${load}%`
    textLoading.style.opacity = scale(load, 0, 100, 1, 0)
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    console.log(load)
}

function scale(num, inMin, inMax, outMin, outMax) {
    return (num - inMin) * (outMax - outMin) / (inMax - inMin) + outMin
}