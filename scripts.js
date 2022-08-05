const container = document.querySelector('.container')

function generateGrid(gridSize = 64) {

    while(container.firstChild) {
        container.removeChild(container.firstChild)
    }

    for(let i = 0; i < gridSize; i++) {
        let columns = document.createElement('div')
        columns.classList.add('flex', 'column')
        for(let j = 0; j < gridSize; j++) {
            let card = document.createElement('div')
            card.classList.add('pixel', 'white')
            columns.appendChild(card)
        }
        container.appendChild(columns)
    }


    
    
}

function changeColor(color) {
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.className = 'pixel'
            item.classList.add(color)
        }, {once: true})
        item.addEventListener('touch', () => {
            item.className = 'pixel'
            item.classList.add(color)
        }, {once: true})
    })
}

function reset(){
    const pixel = document.querySelectorAll('.pixel')
    pixel.forEach(item => {
        item.className = 'pixel white'
    })
}

generateGrid()
