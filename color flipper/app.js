const colorBtn = document.querySelector('.colorbtn');
const bodyBcg = document.querySelector('body')
const hex = document.querySelector('.hex')

const hexColors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'F']

colorBtn.addEventListener('click', changeColor)

function changeColor() {
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
        let random = Math.floor(Math.random() * hexColors.length)
        hexColor += hexColors[random]

    }
    bodyBcg.style.background = hexColor
    hex.innerHTML = hexColor
}