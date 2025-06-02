const Container = document.getElementById('container');
const gridSize = 16;

function createGrid(){
    for (let i = 0; i < gridSize; i++){
        const row = document.createElement('div');
        row.classList.add('grid-row');

        for (let j = 0; j < gridSize; j++){
            const cell = document.createElement('div');
            cell.classList.add('grid-cell');
            row.appendChild(cell);
        }
        Container.appendChild(row);
    }
}