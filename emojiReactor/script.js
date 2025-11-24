function updateCount(button) {
    const countEl = button.querySelector(".count");
    let currentCount = +countEl.textContent.split("/")[0];
    if (currentCount === 10) return;

    currentCount++;

    countEl.textContent = `${currentCount}/10`;

}
const btns = document.querySelectorAll(".emoji-btn");
btns.forEach((btn) => btn.addEventListener("click", () => updateCount(btn)));
