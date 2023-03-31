// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }


// const boxes = document.querySelector("#boxes");
// const input = document.querySelector("input")
// const create = document.querySelector("button[data-create]");
// const destroy = document.querySelector("button[data-destroy]");

// let quant = 0;



// input.addEventListener("input", (event) => quant =  Number(event.currentTarget.value));
// create.addEventListener("click", createBoxes(quant));

// console.log(quant)
// function createBoxes(amount = quant) {
//   console.log(amount)
//   if (amount) {
//     boxes.insertAdjacentHTML("beforeend", `<div width="30px" height="30px"></div>`);
//       // .createElement.prepend("div");
//     // firstBox.style.width = "30px";
//     // firstBox.style.height = "30px";
//     // firstBox.style.backgroundColor = "tomato";


//     for (let i = 1; i <= amount; index +=1) {
//     const w = 30;
//     const h = 30;
//     boxes.insertAdjacentHTML("beforeend", `<div width="${w += 10}px" height="${h += 10}px"></div>`);
//     boxes.lastElementChild.style.backgroundColor = getRandomHexColor()    
//     }
    
//   }
  
// }






// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.