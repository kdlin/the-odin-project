const MAX_GRID_SIZE = 100;
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
        square.addEventListener('mouseover', (e) => {
            if (square.style.backgroundColor === "") {
                const rgb_red = Math.floor(Math.random() * 256);
                const rgb_green = Math.floor(Math.random() * 256);
                const rgb_blue = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${rgb_red}, ${rgb_green}, ${rgb_blue})`
            }
            
            let curr_opacity = square.style.opacity;
            if (curr_opacity < 1) {
                square.style.opacity = Number(curr_opacity) + 0.1;
            }
        })
       
        container.appendChild(square);
    }
}

createGrid(64) 

const resetButton = document.querySelector("#reset");

resetButton.addEventListener('click', (e) => {
    let sizeValid = false;

    while (!sizeValid) {
        const input = prompt("Please enter new grid size: ");
        if (input === null) {
            break; }

        const newSize = parseInt(input);

        if (Number.isInteger(newSize) && newSize > 0 && newSize <= MAX_GRID_SIZE) {
            sizeValid = true;
            createGrid(newSize);
        } else {
            alert("Please enter a whole number between 1 and 100.")
        }
        }
}); 



