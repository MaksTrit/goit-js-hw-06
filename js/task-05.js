const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", (evt) => {
    if (evt.currentTarget.value.trim()) {
        nameOutput.textContent = evt.currentTarget.value.trim();
        return;
    }
    nameOutput.textContent = "Anonymous";
});
