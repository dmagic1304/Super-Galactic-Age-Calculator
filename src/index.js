import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import User from './js/user.js';

function handleSubmit() {
  event.preventDefault();

  const earthAge = document.getElementById('earth-age').value;
  const expectedLifespan = document.getElementById('expected-lifespan');
  let newUser = new User(earthAge, expectedLifespan);

}

