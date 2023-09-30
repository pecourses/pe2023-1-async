'use strict';

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto';

let isCelsiiDegree = true;

const tempUnitBtn = document.getElementById('tempUnitBtn');
tempUnitBtn.textContent = `Switch to ${isCelsiiDegree ? 'F' : 'C'}`;

tempUnitBtn.onclick = switchTemperatureUnit;

function switchTemperatureUnit() {
  // поміняти значення прапорця на протилежне
  isCelsiiDegree = !isCelsiiDegree;
  // поміняти напис на кнопці
  tempUnitBtn.textContent = `Switch to ${isCelsiiDegree ? 'F' : 'C'}`;
  // завантажити дані з температурою в нових одиницях
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto${
      isCelsiiDegree ? '' : '&temperature_unit=fahrenheit'
    }`
  )
    .then(response => response.json())
    .then(data => generateWeather(data))
    .catch(err => console.log('error: ', err));
}

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => generateWeather(data))
  .catch(err => console.log('error: ', err));

function generateWeather({
  current_weather: { temperature, windspeed },
  current_weather_units: { temperature: tempUnit, windspeed: windUnit },
}) {
  const currentTemperatureEl = document.createElement('div');
  currentTemperatureEl.textContent = `${temperature} ${tempUnit}`;
  currentTemperatureEl.style.color = calcTemperatureColor(temperature);

  const currentWindspeed = document.createElement('div');
  currentWindspeed.textContent = `${windspeed} ${windUnit}`;

  document.body.append(currentTemperatureEl, currentWindspeed);
}

function calcTemperatureColor(temperature) {
  if (temperature < 0) {
    return 'blue';
  } else if (temperature === 0) {
    return 'black';
  } else if (temperature > 0 && temperature < 40) {
    return 'green';
  } else {
    return 'red';
  }
}
