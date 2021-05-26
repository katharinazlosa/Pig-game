'use script';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');

const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

diceEl.classList.add('hidden');

currentScore = 0;
scores = [];
activePlayer = 0;

btnRoll.addEventListener('click', function () {
  //napraviti da bude random
  const dice = Math.trunc(Math.random() * 6 + 1);
  console.log(dice);
  //napraviti da se slike okreću
  diceEl.src = `dice-${dice}.png`;
  diceEl.classList.remove('hidden');
  //je li 1, nije - dodaj u current score/display
  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${activePlayer}`
    ).textContent = currentScore;
  } else {
    // poništavaju se bodovi,
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});

btnHold.addEventListener('click', function () {
  //dodaj score u glavni score
  scores[activePlayer] += currentScore;

  //glavni score veći od 100?
  if (scores[activePlayer] >= 20) {
    // ako je trenutni igrač pobjednik
    document.getElementById(``).classList();
  } else {
    // ako nije mijenja se igrač
    activePlayer = activePlayer === 0 ? 1 : 0;
    currentScore = 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
//NEW BTN
//svi scorevi na 0,
// staviti prvog igrača kao prvog, kao i pozadinu
