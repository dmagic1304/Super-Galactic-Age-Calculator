import User from './../src/js/user.js'

describe('User', () => {
  let newUser;

  beforeEach(() => {
    newUser = new User (30);
  });

  test('1. It will create a new user with earth age property', () => {
   expect(newUser.earthAge).toEqual(30);
  });

  test('2. It will give the user a mercuryAge property and return it', () => {
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toBeTruthy();
  });

  test('3. It will calculate the correct mercuryAge based on the earthAge input', () => {
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toEqual(125);
  })

  test('4. It will assign the mercuryAge value as integer', () => {
    newUser.earthAge = 31;
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toEqual(129);
  })

  test('5. It will give the user a venusAge property and return it', () => {
    newUser.venusAge();
    expect(newUser.venusAge).toBeTruthy();
  });

})