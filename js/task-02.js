const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridietsList = document.querySelector("#ingredients");

function addIndridientds(arr,list) {
  arr.forEach(item => { 
    if(!list.innerHTML.includes(item)) {
      const newItem = document.createElement("li");
      newItem.classList.add("item");
      newItem.textContent = item;
      list.append(newItem);
    }    
  })
  return;
}

addIndridientds(ingredients, ingridietsList);

console.log(ingridietsList);
