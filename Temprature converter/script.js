function convertTemperature() {
  const temp = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;
  const resultElement = document.getElementById('result');

  if (isNaN(temp)) {
      resultElement.textContent = 'Please enter a valid number';
      return;
  }

  const temperature = parseFloat(temp);
  let convertedTemp1, convertedTemp2;
  let targetUnit1, targetUnit2;

  if (unit === 'celsius') {
      convertedTemp1 = (temperature * 9/5) + 32;
      targetUnit1 = 'Fahrenheit';
      convertedTemp2 = temperature + 273.15;
      targetUnit2 = 'Kelvin';
  } else if (unit === 'fahrenheit') {
      convertedTemp1 = (temperature - 32) * 5/9;
      targetUnit1 = 'Celsius';
      convertedTemp2 = ((temperature - 32) * 5/9) + 273.15;
      targetUnit2 = 'Kelvin';
  } else if (unit === 'kelvin') {
      convertedTemp1 = temperature - 273.15;
      targetUnit1 = 'Celsius';
      convertedTemp2 = ((temperature - 273.15) * 9/5) + 32;
      targetUnit2 = 'Fahrenheit';
  } else {
      resultElement.textContent = 'Please select a valid unit';
      return;
  }

  resultElement.textContent = `Converted Temperature: ${convertedTemp1.toFixed(2)} °${targetUnit1}, ${convertedTemp2.toFixed(2)} °${targetUnit2}`;
}
