const input = document.querySelector("#validation-input");

input.addEventListener("blur", (evt) => {
    if (evt.currentTarget.value.trim().length >= Number(input.dataset.length)) {
        if (input.classList.contains("invalid")) {
            input.classList.remove("invalid");
        }
        input.classList.add("valid");
    } else {
        if (input.classList.contains("valid")) {
            input.classList.remove("valid");
        }
        input.classList.add("invalid");
    }
});


