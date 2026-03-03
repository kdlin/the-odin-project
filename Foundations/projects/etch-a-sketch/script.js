// create grid of any size
function createGrid(size) {
    const container = document.querySelector("#container");
    const totalSquares = size * size; 

    for (let i = 0; i < totalSquares; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        container.appendChild(square);
    }
}