let display = document.querySelector('.display');

let buttons = Array.from(document.querySelectorAll('.button'));
let shouldResetDisplay = false;
buttons.map((button) => {
    button.addEventListener('click', (e) => {
        switch (e.target.innerText) {
            case 'AC':
                display.style.fontSize = "60px";
                display.innerText = '0';
                shouldResetDisplay = false;
                break;
            case '=':
                try {
                    display.innerText = eval(display.innerText);
                } catch (e) {
                    display.innerText = "Error";
                    shouldResetDisplay = true;
                }
                break;
            case '%':
                let parsedText = display.innerText + "/100";
                display.innerText = eval(parsedText);
                break;
            case '+/-':
                if (display.innerText.charAt(0) === '-') {
                    display.innerText = display.innerText.slice(1);
                } else {
                    display.innerText = `${-display.innerText}`;
                }
                break;
            default:
                if (display.innerText === "Don't can more, krub" || display.innerText === "Error") {
                    return; // Блокировать любой ввод
                }
                if (shouldResetDisplay) {
                    display.innerText = e.target.innerText;
                    shouldResetDisplay = false;
                }

                if (display.innerText === "0" && e.target.innerText !== '.') {
                    display.innerText = e.target.innerText;
                }
                else {
                    display.innerText += e.target.innerText;
                }
                if (display.innerText.length === 20) {
                    display.innerText = "Don't can more, krub";
                    shouldResetDisplay = true;
                    break;
                }
                else if (display.innerText.length >= 14) {
                    display.style.fontSize = "30px";
                }
                else if (display.innerText.length >= 9) {
                    display.style.fontSize = "40px";
                }

        }
    })
})