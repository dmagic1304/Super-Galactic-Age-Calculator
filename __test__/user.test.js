import User from './../src/js/user.js'

describe('User', () => {
  let newUser;

  beforeEach(() => {
    newUser = new User (30);
  });

  test('1. It will create a new user with earth age property', () => {
   expect(newUser.earthAge).toEqual(30);
  });

  test('2. It will give the user a mercuryAge property', () => {
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toBeTruthy();
  });

  test('3. It will calculate the correct mercuryAge based on the earthAge input', () => {
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toEqual(125);
  })
})