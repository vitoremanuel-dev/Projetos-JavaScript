const turnOnOff = document.getElementById('turnOnOff')
const lamp = document.getElementById('lamp')

turnOnOff.addEventListener('click', lampOnOff) // Essa função lampOn é criada mais pra frente
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener ('dblclick', lampBroken)

function lampOn () {
    if (!verificar())
    lamp.src = './imagens/ligada.jpg'
}

function lampOff () {
    if (!verificar())
    lamp.src = './imagens/desligada.jpg'
}

function lampBroken () {
    lamp.src = './imagens/quebrada.jpg'
}

function verificar () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampOnOff () {
    if (turnOnOff.textContent == 'Ligar') {
        lampOn()
        turnOnOff.textContent = 'Desligar'
    } else {
        lampOff()
        turnOnOff.textContent = 'Ligar'
    }
}