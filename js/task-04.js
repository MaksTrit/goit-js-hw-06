let currentValue = 0;

const incraese = document.querySelector('button[data-action="increment"]');

const decrease = document.querySelector('button[data-action="decrement"]');

const value = document.querySelector("#value");

incraese.addEventListener("click", () => value.textContent = (currentValue +=1));

decrease.addEventListener("click", () => value.textContent = (currentValue -=1))
