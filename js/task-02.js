const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingridietsList = document.querySelector("#ingredients");

function addIndridientds(arr, list) {
  const arrayList = [];

  arr.forEach(item => { 
    const newItem = document.createElement("li");    
    newItem.classList.add("item");
    newItem.textContent = item;
    arrayList.push(newItem);    
  })
  
  list.append(...arrayList);
  return;
}

addIndridientds(ingredients, ingridietsList);
