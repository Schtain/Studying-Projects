let textInput = document.getElementById("text-input");

function countInput(string) {
  const countEl = document.getElementById("char-count");
  let currentCount = string.length;
  if (string.length >= 50) {
    string = string.slice(0, 50);
    currentCount = string.length;
    textInput.value = string;
    countEl.textContent = `Character Count: ${currentCount}/50`;
    countEl.style.color = "red";
  } else {
    countEl.textContent = `Character Count: ${currentCount}/50`;
    countEl.style.color = "black";
  }
}

textInput.addEventListener("input", (event) => countInput(event.target.value));
