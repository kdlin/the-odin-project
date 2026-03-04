const MAX_GRID_SIZE = 100;

function createGrid(size) {
    const container = document.querySelector("#container");
    document.documentElement.style.setProperty('--square-size', `${960 / size}px`);
    container.innerHTML = '';
    const totalSize = size * size;

    for (let i = 0; i < totalSize; i++) {
        const square = document.createElement('div');
        square.classList.add("grid-square");

        square.addEventListener('mouseover', (e) => {
            if (square.style.backgroundColor === '') {
                const rgbRed = Math.floor(Math.random() * 256);
                const rgbGreen = Math.floor(Math.random() * 256);
                const rgbBlue = Math.floor(Math.random() * 256);

                square.style.backgroundColor = `rgb(${rgbRed}, ${rgbGreen}, ${rgbBlue})`;
            }

            let currOpacity = Number(square.style.opacity);
            if (currOpacity <= 0.95) { 
                square.style.opacity = currOpacity + 0.1;
            }
        });

        container.appendChild(square);
    }    
}

const resetButton = document.querySelector('#reset');

resetButton.addEventListener('click', (e) => {
    resetGrid(); 
});

function resetGrid() { 
    let validSize = false;
    
    while (!validSize) {
        const input = prompt("Please enter new grid size: ");
        if (input === null) break;

        const newSize = parseInt(input);
         // finds number 
        if (Number.isInteger(newSize) && newSize <= MAX_GRID_SIZE && newSize > 0) {
            validSize = true;
            createGrid(newSize);
        } else {
            alert("Enter Whole number between 1-100.");
        }
    }
}

createGrid(16);
