const list = document.querySelector("#categories");
const quantityOfCategories = `Number of categories: ${[...list.children].length}`;
console.log(quantityOfCategories);

function counterOfItems() {   
    [...list.children].forEach(item => {
        const title = item.firstElementChild;
        const elementsList = item.lastElementChild;

        console.log(`Category: ${title.textContent}`);
        console.log(`Elements: ${[...elementsList.children].length}`);
    });   
    return;
}

counterOfItems();
