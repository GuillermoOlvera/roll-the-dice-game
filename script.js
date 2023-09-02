'use strict';

// Selecting elements.
const player = document.querySelector('.player--0');
const player2 = document.querySelector('.player--1');
const score = document.querySelector('#score--0');
const score1 = document.getElementById('score--1');
const current = document.getElementById('current--0');
const current2 = document.getElementById('current--1');

const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Staring conditions.
let scores, currentScore, activePlayer, playing;

const init = function () {

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;

    score.textContent = 0;
    score1.textContent = 0;
    current.textContent = 0;
    current2.textContent = 0;

    diceElement.classList.add('hidden');
    player.classList.remove('player--winner');
    player2.classList.remove('player--winner');
    player.classList.add('player--active');
    player2.classList.remove('player--active');
}

init();

const switchPlayer = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player.classList.toggle('player--active');
    player2.classList.toggle('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // Generating a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // Display dice
        diceElement.classList.remove('hidden');
        diceElement.src = `dice-${dice}.png`;

        // Check for rolled 1: if true, switch to next player
        if (dice !== 1) {
            // Add dice to current score
            currentScore += dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        } else {
            // Switch to next player
            switchPlayer();
        }
    }
})

btnHold.addEventListener('click', function () {
    if (playing) {
        // Add current score to active player's score.
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        // Check if player's score is >= 100.
        if (scores[activePlayer] >= 100) {
            // Finish the game
            playing = false;
            diceElement.classList.remove('hidden');

            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
        } else {
            // Switch to the next player.
            switchPlayer();
        }
    }
});

btnNew.addEventListener('click', init);