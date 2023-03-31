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


function createBoxes(amount) {
      if (amount) { 
      let widthBox = 20;
      let heightBox = 20;
      for (let i = 1; i <= amount; i += 1) {    
        boxes.insertAdjacentHTML("beforeend",
            `<div style="background-color:${getRandomHexColor()}; width:${widthBox += 10}px; height:${heightBox += 10}px;"></div>`);     
      }    
    }  
}

function destroyBoxes() {
    boxes.innerHTML = '';
  }
