'use strict';
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = ' 😍Correct NUmber';

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);
let number = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = number;

let score = 20;
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  const newNumber = Math.trunc(Math.random() * 20) + 1;

  number = newNumber;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = null;
});
let prevscore = 0;
document.querySelector('.score').textContent = score;
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '😒 NO Number';
  } else if (guess === number) {
    document.querySelector('.message').textContent = '😍Correct Number';
    document.querySelector('body').style.backgroundColor = '#27ba5b';
    document.querySelector('.number').textContent = number;
    if (score > prevscore) {
      prevscore = score;
      document.querySelector('.highscore').textContent = prevscore;
    }
    document.querySelector('.number').style.width = '30rem';
  } else if (guess > number && score > 0) {
    document.querySelector('.message').textContent = '📈 Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < number && score > 0) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
  if (score === 0) {
    document.querySelector('.message').textContent =
      '🤬 You LOSE!, Start Again';
  }
});
