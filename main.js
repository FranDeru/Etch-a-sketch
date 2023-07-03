const grid = document.getElementById('grid');
let size = 16;

function changeColor() {
    this.style.backgroundColor = "orange";
}

function buildGrid(size) {
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size*size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        grid.appendChild(cell);
    }

    let gridPixels = document.querySelectorAll('div');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", changeColor));
}

buildGrid(size);