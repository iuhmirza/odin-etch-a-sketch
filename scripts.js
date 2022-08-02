
const pixel = document.querySelectorAll('.pixel');
console.log(pixel);

pixel.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.add('painted')
    })
})
