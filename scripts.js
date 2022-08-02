const container = document.querySelector('.container');

for(let i = 0; i < 10; i++) {
    let yAxis = document.createElement('div')
    yAxis.classList.add('flex')
    yAxis.classList.add('container')
    yAxis.classList.add('y')
    for(let j = 0; j < 10; j++) {
        let card = document.createElement('div');
        card.classList.add('pixel')
        yAxis.appendChild(card)
    }
    container.appendChild(yAxis)
}

const pixel = document.querySelectorAll('.pixel');
console.log(pixel);

pixel.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('painted')
    })
})
