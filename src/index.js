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
  if (user)
}


document.querySelector('form').addEventListener('submit', handleSubmit);