function makeGrids(size){
    let container = document.querySelector(".container");
    container.innerHTML = '';
    for (let i = 0; i < size; i++){
        let gridRow  = document.createElement("div");
        gridRow.classList.add("grid-row");
        for (let j = 0; j < size; j++){
            let gridCell = document.createElement("div");
            gridCell.classList.add("grid-cell");
            gridCell.addEventListener('mouseover' , (event) => {
                event.target.style.backgroundColor = 'black';
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}
document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM totalmente carregado. chamando makegrids(16)");
    makeGrids(16);
    const resizeBtn = document.getElementById('resizeGridBtn');
    if (resizeBtn){
        resizeBtn.addEventListener('click', () => {
            let newSize = prompt("Write here the number of blocks: ");
            newSize = parseInt(newSize);
            if (isNaN(newSize)|| newSize <= 0 || newSize > 100){
                alert("Invalid number of blocks! PLease choose from 1 to 100.");
                return;
            }
            makeGrids(newSize);
        });
    }
});