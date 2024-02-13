function generateParity() {
  
    var bit1 = document.getElementById("bit1").checked;
    var bit2 = document.getElementById("bit2").checked;
    var bit3 = document.getElementById("bit3").checked;

    var sum = (bit1 ? 1 : 0) + (bit2 ? 1 : 0) + (bit3 ? 1 : 0);
    var generatedParity = sum % 2 === 0;

    // Update LEDs based on generated parity bit
    updateLEDs(generatedParity);

    // Update result text
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Parity: Even";

    // Update the state of the generated parity bit checkbox
    var generatedParityCheckbox = document.getElementById("generatedParity");
    generatedParityCheckbox.checked = generatedParity;
}

function updateLEDs(generatedParity) {
    var ledEven = document.getElementById("led-even");

    // Update LEDs based on generated parity bit
    if (generatedParity) {
        ledEven.style.backgroundColor = "white";
    } else {
        ledEven.style.backgroundColor = "green";
    }

    // Display LEDs
    ledEven.style.display = "inline-block";
}
