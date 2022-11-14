import User from './../src/js/user.js'

describe('User', () => {
  let newUser;

  beforeEach(() => {
    newUser = new User (30);
  });

  test('1. It will create a new user with current age property', () => {
   expect(newUser.currentAge).toEqual(30);
  })

  test('2. It will give the user a mercuryAge property', () => {
    expect(newUser.mercuryAge).toBeTruthy();
  })
})