import User from './../src/js/user.js'

describe('User', () => {

  beforeEach(() => {
    let newUser = new User (30);
  });

  test('1. It will create a new user with current age property', () => {
   expect(newUser.currentAge).toEqual(30);
  })

  test('2. It will give the user a mercuryAge property with the calculated value'), () => {

  }
})