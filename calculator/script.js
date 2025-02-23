let display = document.getElementById("display");
let historyList = document.getElementById("history-list");

function appendValue(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function deleteLast() {
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        let result = eval(display.value);
        addToHistory(display.value + " = " + result);
        display.value = result;
    } catch {
        display.value = "Error";
    }
}

function addToHistory(entry) {
    let li = document.createElement("li");
    li.textContent = entry;
    historyList.appendChild(li);
}

document.getElementById("theme-toggle").addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

document.addEventListener("keydown", function(event) {
    const key = event.key;

    if (/[0-9+\-*/().%]/.test(key)) {
        appendValue(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        deleteLast();
    } else if (key === "Escape") {
        clearDisplay();
    }
});

function factorial(n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

function nthRoot(base, n) {
    return Math.pow(base, 1 / n);
}
