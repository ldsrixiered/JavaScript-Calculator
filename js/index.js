const display = document.getElementById("display");
const historyList = document.getElementById("historyList");

function appendToDisplay(input) {
  display.value += input;
}

function clearDisplay() {
  display.value = "";
}

function calculate() {
  try {
    const expression = display.value;
    const result = eval(expression);

    display.value = result;

    // Add to history
    const listItem = document.createElement("li");
    listItem.textContent = `${expression} = ${result}`;
    historyList.prepend(listItem); // newest first
  } catch {
    display.value = "Error";
  }
}

function clearHistory() {
  historyList.innerHTML = "";
}
