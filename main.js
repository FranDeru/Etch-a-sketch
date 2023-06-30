const grid = document.querySelector('#grid');
const gridDimension = 16**2;

function createCells() {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
}

for(let i = 0; i < gridDimension; i++) {
   createCells();
}