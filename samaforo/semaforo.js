const img = document.getElementById('img')
const buttons = document.getElementById('buttons')
let colorIndex = 0
let intervalId = null

const trafficLight = (event) => {
    StopAutomatic()
    turnOn[event.target.id]();
}

const nextIndex = () => colorIndex = colorIndex < 2 ? ++colorIndex : 0;

const mudarCor = () => {
    const cores = ['red', 'yellow', 'green']
    const cor = cores[colorIndex]
    turnOn[cor]()
    nextIndex()
}

const StopAutomatic = () => {
    clearInterval( intervalId)
}

const turnOn = {
    'red':      () => img.src = './imagens/vermelho.png',
    'yellow':   () => img.src = './imagens/amarelo.png',
    'green':    () => img.src = './imagens/verde.png',
    'automatic': () => intervalId = setInterval(mudarCor, 1000)
}


buttons.addEventListener('click', trafficLight)