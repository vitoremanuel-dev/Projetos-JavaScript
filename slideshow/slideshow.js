'use strict';

const images = [
    {'id': '1', 'url': './imagens/chrono.jpg'},
    {'id': '2', 'url': './imagens/inuyasha.jpg'},
    {'id': '3', 'url': './imagens/tenchi.jpg'},
    {'id': '4', 'url': './imagens/tenjhotenge.jpg'},
    {'id': '5', 'url': './imagens/yuyuhakusho.jpg'},
    {'id': '6', 'url': './imagens/ippo.png'}
]

const containerItems = document.querySelector('#container-items')

const loadImages = (images, container) => {
    images.forEach (image => {
        container.innerHTML += `
        <div class = 'item'>
            <img src = '${image.url}'
        </div>
        `
    })
}

loadImages (images, containerItems) ;

let items = document.querySelectorAll('.item')

const previous = () => {
    containerItems.appendChild(items[0])
    items = document.querySelectorAll('.item')
}

const next = () => {
    const lastItem = items[items.length - 1]
    containerItems.insertBefore(lastItem, items[0])
    items = document.querySelectorAll('.item')
}

document.querySelector('#anterior').addEventListener('click', previous)
document.querySelector('#proximo').addEventListener('click', next)