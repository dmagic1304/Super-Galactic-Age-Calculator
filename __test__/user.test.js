

describe('User', () => {

  test('1. It will create a new user with current age property', () => {
    const newUser = new User(30);
    expect(newUser.currentAge).toEqueal(30);
  })
})