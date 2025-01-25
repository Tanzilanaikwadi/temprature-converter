// script.js

document.getElementById('convert-btn').addEventListener('click', function() {
    // Get input value and the unit selected by the user
    let temperature = parseFloat(document.getElementById('temp-input').value);
    let unit = document.getElementById('unit-select').value;
    let resultText = '';

    // Validate if the input is a number
    if (isNaN(temperature)) {
        resultText = 'Please enter a valid number for the temperature.';
    } else {
        // Perform the conversion based on the selected unit
        if (unit === 'Celsius') {
            resultText = `
                Fahrenheit: ${(temperature * 9/5) + 32} °F <br>
                Kelvin: ${temperature + 273.15} K
            `;
        } else if (unit === 'Fahrenheit') {
            resultText = `
                Celsius: ${(temperature - 32) * 5/9} °C <br>
                Kelvin: {((temperature - 32) * 5/9) + 273.15} K
            `;
        } else if (unit === 'Kelvin') {
            resultText = `
                Celsius: ${temperature - 273.15} °C <br>
                Fahrenheit: ${(temperature - 273.15) * 9/5 + 32} °F
            `;
        }
    }

    // Show the result
    document.getElementById('result').innerHTML = resultText;
});
