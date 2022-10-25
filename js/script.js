require('es6-promise').polyfill();
import 'nodelist-foreach-polyfill';

import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import slider from './modules/slider';
import forms from './modules/forms';
import { openModal } from "./modules/modal";

window.addEventListener('DOMContentLoaded', () => {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 50000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', '.tabheader__item_active');
  modal('[data-modal]', '.modal', modalTimerId);
  timer('.timer', '2023-09-11');
  cards();
  calc();
  slider({
    container: '.offer__slider',
    slide: '.offer__slide',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider--inner'
  });
  forms('form', modalTimerId);


  /** end */
});



// const arr = [
//   {
//       name: 'Alex',
//       salary: 500
//   },
//   {
//       name: 'Ann',
//       salary: 1500
//   },
//   {
//       name: 'John',
//       salary: 2500
//   },
// ];

// const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr)
// console.log(result)

// Example ⬇️
/****** JSON server  ***************/
// fetch('http://localhost:3000/menu')
//   .then(data => data.json())
//   .then(res => console.log(res));

// const films = [
//   {
//     name: 'Titanic',
//     rating: 9,
//   },
//   {
//     name: 'Die hard 5',
//     rating: 5,
//   },
//   {
//     name: 'Matrix',
//     rating: 8,
//   },
//   {
//     name: 'Some bad film',
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//   return arr.filter(film => film.rating >= 8);
// }

// function showListOfFilms(arr) {
//   return arr.reduce(
//     (acc, curr) => `${typeof acc === 'object' ? acc.name : acc}, ${curr.name}`
//   );
// }

// function setFilmsIds(arr) {
//   return arr.map((film, i) => {
//     film.id = i;
//     return film;
//   });
// }

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//   return arr.every(film => film.id || film.id === 0);
// }

// console.log(checkFilms(tranformedArray));

// const funds = [
//   {amount: -1400},
//   {amount: 2400},
//   {amount: -1000},
//   {amount: 500},
//   {amount: 10400},
//   {amount: -11400}
// ];

// const getPositiveIncomeAmount = (data) => {
//   return data.filter(item => item.amount > 0).reduce((acc, curr) => acc + curr.amount, 0);
// };
// console.log(getPositiveIncomeAmount(funds));

// const getTotalIncomeAmount = (data) => {
//   return data.some(item => item.amount < 0) ? data.reduce((acc, curr) => acc + curr.amount, 0) : getPositiveIncomeAmount(data);
// };
// console.log(getTotalIncomeAmount(funds));

/****** Getters & Setters ***************/
// class User {
//   constructor(name, age) {
//     this.name = name;
//     this._age = age;
//   }

//   say = () => {
//     console.log(`Имя юзера: ${this.name}, возраст ${this._age}`);
//   }

//   get age() {
//     return this._age;
//   }

//   set age(age) {
//     if (typeof age === 'number' && age > 0 && age < 110) {
//       this._age = age;
//     } else {
//       console.log('Недопустимное значение!');
//     }
//   }
// }

// const alex = new User('Alex', 30);
// console.log(alex.age);
// alex.age = 99;
// console.log(alex.age);
// alex.say();
