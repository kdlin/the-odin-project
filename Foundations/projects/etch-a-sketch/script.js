// create grid of any size
function createGrid(size) {
    const totalSquares = size * size; 
    const squareSize = 960 / size;
    const container = document.querySelector("#container");
    container.innerHTML = '';
    document.documentElement.style.setProperty('--square-size', `${squareSize}px`)
    
    for (let i = 0; i < totalSquares; i++) { // adding squares to grid
        const square = document.createElement('div');
        square.classList.add("grid-square");
        container.appendChild(square);
    }
}

createGrid(64) 

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', (e) => {
    let sizeValid = false;

    while (!sizeValid) {
        const input = prompt("Please enter new grid size: ");
        const newSize = parseInt(input);

        if (input === null) {
            return;
        }
        if (Number.isInteger(newSize) && newSize > 0 && newSize <= 100) {
            sizeValid = true;
            createGrid(newSize);
        } else {
            alert("Please enter a whole number between 1 and 100.")
        }
        }
}); 