const grid = document.getElementById('grid');
let size = document.getElementById('sizeSlider');

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

    let gridPixels = document.querySelectorAll('div.cell');
    gridPixels.forEach(gridPixel => gridPixel.addEventListener("mouseover", changeColor));
}

function pixelSize() {
    let gridPixels = document.querySelectorAll('div.cell');
    gridPixels.forEach(gridPixel => gridPixel.remove());
    buildGrid(size.value);
}

buildGrid(45);

size.addEventListener("mouseup", pixelSize);