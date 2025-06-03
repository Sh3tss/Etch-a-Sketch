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
function darkrgb (rgbString, percentage){
    const parts = rgbString.match(/\d+/g).map(Number);
    let r = parts[0];
    let g = parts[1];
    let b = parts[2];
    const darkPercent = percentage / 100;
    // to get a darken effect each time
    r = Math.round(r * (1 - darkPercent));
    g = Math.round(g * (1 - darkPercent));
    b = Math.round(b * (1 - darkPercent));
    //to make sure they don`t get negative
    r = Math.max(0, r);
    g = Math.max(0, g);
    b = Math.max(0, b);
    return `rgb(${r}, ${g}, ${b})`;
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
            gridCell.dataset.hoverCount = 0;        //control how much do you pass the mousehover
            gridCell.addEventListener('mouseover' , (event) => {
                const cell = event.target;
                let hoverCount = parseInt(cell.dataset.hoverCount);
                if (hoverCount < 10){
                    hoverCount++;
                    cell.dataset.hoverCount = hoverCount;
                    if (hoverCount === 1){          //start to change the color to get a dark effect
                        cell.style.backgroundColor = rgbChange();
                    }else {
                        const currentColor = cell.style.backgroundColor;
                        if (currentColor.startWith('rgb')){
                            cell.style.backgroundColor = darkrgb(currentColor, 10);
                        }else{
                            cell.style.backgroundColor = 'black';         // if something happen and the color didn`t came as a rgb color just put a black default
                        }
                    }
                }
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