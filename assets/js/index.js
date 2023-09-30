'use strict';

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto';

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => generateWeather(data))
  .catch(err => console.log('error: ', err));

// Example: відобразити на сторінці поточну температуру з одиницею виміру
// відобразити темп. від'ємну синім кольором, 0 -чорним
//                   додатню до 40 - зеленим, >=40 - червоним

// Task: відобразити швидкість вітру з одиницею виміру
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
