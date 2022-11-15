import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './js/user.js';

function handleSubmit() {
  event.preventDefault();

  const earthAge = document.getElementById('earth-age').value;
  const expectedLifespan = document.getElementById('expected-lifespan');
  let newUser = new User(earthAge, expectedLifespan);
  displayResults(newUser);
}

function displayResults(user) {
  document.getElementById('mercury-age').innerText = `${user.mercuryAge()} years old`
  document.getElementById('mercury-expectancy').innerText = (user.earthAge > user.lifeExp ? `you already lived ${user.remainingLifeMercury()} years longer than expected.` : `it is expected that you will live another ${user.remainingLifeMercury()} years.`);
}


document.querySelector('form').addEventListener('submit', handleSubmit);