'use strict';

let answer = Math.trunc(Math.random() * 20) + 1; // set the range of the answer between 1-20
console.log(answer);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there's no input or guess is outside the range [1, 20]
  if (!guess || guess > 20 || guess < 0) {
    displayMessage('Please enter a number between 1 and 20!');

    // when the guess is correct
  } else if (guess === answer) {
    displayNumber(answer);
    displayMessage('You guessed it correctly!');
    document.querySelector('body').style.backgroundImage = 'url(correct.jpg)';
    document.querySelector('body').style.backgroundSize = '100%';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is incorrect
  } else if (guess !== answer) {
    if (score > 1) {
      displayMessage(guess > answer ? 'That is too high!' : 'That is too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayNumber(answer);
      displayMessage('You lost the game 😢');
      document.querySelector('.score').textContent = 0; // to avoid score being displayed as 1 due to (score > 1)
      document.querySelector('body').style.backgroundColor = '#e5625c';
    }
  }
});

//Resetting upon clicking 'Again' button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  answer = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayNumber('?');
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundImage = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
