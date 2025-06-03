function makeGrids(size){
    let container = document.querySelector(".container");
    
    console.log(container);

    if (!container) {
        console.error("Erro: O elemento .container não foi encontrado no HTML.");
        return; // Sai da função se o container não for encontrado
    }

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
});