const container = document.querySelector('.container')

function generateGrid() {
    gridSize = parseInt(prompt("Enter the length of the sides of the grid: "))
    while ((typeof gridSize !== 'number') || (gridSize < 16) || (gridSize > 64)) {
        gridSize = parseInt(prompt("Enter the length of the sides of the grid: Min = 16 and Max = 64"))
    }

    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    for(let i = 0; i < gridSize; i++) {
        let columns = document.createElement('div')
        columns.classList.add('flex', 'column')
        for(let j = 0; j < gridSize; j++) {
            let card = document.createElement('div')
            card.classList.add('pixel')
            columns.appendChild(card)
        }
        container.appendChild(columns)
    }

    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('painted')
        })
    })
    
    
}


