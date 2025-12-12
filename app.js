const display = document.querySelector(".display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        // eval calculates the string math (e.g., "2+2")
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}