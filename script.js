function makeGrids(size){
    let container = document.querySelector(".container");
    for (let i = 0; i < size; i++){
        let gridRow  = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < size; j++){
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}
makeGrids(16); 