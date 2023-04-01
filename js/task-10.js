function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}


const boxes = document.querySelector("#boxes");
const input = document.querySelector("input")
const create = document.querySelector("[data-create]");
const destroy = document.querySelector("[data-destroy]");


create.addEventListener("click", () => 
    createBoxes(Number(input.value))
);

destroy.addEventListener('click', destroyBoxes);

let sizeBox = 30;
function createBoxes(amount) {
      if (amount) {       
      for (let i = 1; i <= amount; i += 1) {    
        boxes.insertAdjacentHTML("beforeend",
          `<div style="background-color:${getRandomHexColor()}; width:${sizeBox}px; height:${sizeBox}px;"></div>`);
        sizeBox += 10;
        
      }    
    }  
}

function destroyBoxes() {
  boxes.innerHTML = '';
  sizeBox = 30;
  }
