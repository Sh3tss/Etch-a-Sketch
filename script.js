function randomInt (min,max){            //function to get a random number to create the rgb color
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rgbChange(){             // function to get a random color
    const r = randomInt(0, 255);
    const g = randomInt(0, 255);
    const b = randomInt(0, 255);
    return `rgb(${r}, ${g}, ${b})`;         //here give me the string of which rgb get choose 
}
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
                event.target.style.backgroundColor = rgbChange();
            });
            gridRow.appendChild(gridCell);
        }
        container.appendChild(gridRow);
    }
}
document.addEventListener('DOMContentLoaded', () => {
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