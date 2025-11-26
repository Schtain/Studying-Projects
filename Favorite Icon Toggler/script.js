const btns = document.querySelectorAll(".favorite-icon");

function favoriteToggle(buttons) {
    let heartIsRed = false;
    buttons.classList.toggle("filled");
    buttons.innerHTML = buttons.classList.contains("filled") ? "&#10084" : "&#9825";

}

btns.forEach((btn) => btn.addEventListener("click", () => favoriteToggle(btn)));
