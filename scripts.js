const container = document.querySelector('.container')

function generateGrid() {
    gridSize = parseInt(prompt("Enter the length of the sides of the grid: "))
    while ((typeof gridSize !== 'number') || (gridSize < 1) || (gridSize > 10)) {
        gridSize = parseInt(prompt("Enter the length of the sides of the grid: Min = 1 and Max = 10"))
    }
    for(let i = 0; i < gridSize; i++) {
        let yAxis = document.createElement('div')
        yAxis.classList.add('flex')
        yAxis.classList.add('container')
        yAxis.classList.add('column')
        for(let j = 0; j < gridSize; j++) {
            let card = document.createElement('div')
            card.classList.add('pixel')
            yAxis.appendChild(card)
        }
        container.appendChild(yAxis)
    }
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('painted')
        })
    })
    
    
}


