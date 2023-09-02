'use strict';

// Selecting elements.
const score = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const dice = document.querySelector('.dice');

// Staring conditions.
score.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');