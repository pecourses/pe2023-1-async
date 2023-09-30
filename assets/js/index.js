'use strict';

// Promise

// cb виконається через 1000мс
// setInterval(cb, 1000);

// cb виконається, коли буде подія click
// button.addEventListener('click', cb)

// Колбек, вказаний в then виконається тоді,
// коли проміс state стане fullfilled
// Колбек, вказаний в catch виконається тоді,
// коли проміс state стане rejected

const weatherUrl =
  'https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto';

fetch(weatherUrl)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log('error: ', err));

// Second then form:
// fetch(weatherUrl)
//   .then(response => response.json())
//   .then(
//     data => console.log(data),
//     err => console.log('error: ', err)
//   );

// Promise state (pending, fullfilled, rejected)
//         result          payload     error

console.log('next line');

// callback hell:
// setTimeout(() => {
//   setTimeout(() => {
//     setTimeout(() => {
//       setTimeout(() => {
//         setTimeout(() => {}, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }, 1000);
