import User from './../src/js/user.js'

describe('User', () => {
  let newUser;

  beforeEach(() => {
    newUser = new User (30, 75);
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
  });

  test('4. It will assign the mercuryAge value as integer', () => {
    newUser.earthAge = 31;
    newUser.mercuryAge();
    expect(newUser.mercuryAge).toEqual(129);
  });

  test('5. It will give the user a venusAge property', () => {
    newUser.venusAge();
    expect(newUser.venusAge).toBeTruthy();
  });

  test('6. It will calculate the correct venusAge based on the earthAge input', () => {
    newUser.venusAge();
    expect(newUser.venusAge).toEqual(48);
  });

  test('7. It will assign the venusAge value as integer', () => {
    newUser.venusAge();
    expect(newUser.venusAge).toEqual(48);
  });

  test('8. It will give the user a marsAge property', () => {
    newUser.marsAge();
    expect(newUser.marsAge).toBeTruthy();
  });

  test('9. It will calculate the correct marsAge as integer based on the earthAge input', () => {
    newUser.marsAge();
    expect(newUser.marsAge).toEqual(15);
  });

  test('10. It will give the user a jupiterAge property', () => {
    newUser.jupiterAge();
    expect(newUser.jupiterAge).toBeTruthy();
  });

  test('11. It will calculate the correct jupiterAge as integer based on the earthAge input', () => {
    newUser.jupiterAge();
    expect(newUser.jupiterAge).toEqual(2);
  });

  test('12. It will add average life expectancy as property to user object based on user input', () => {
    expect(newUser.lifeExp).toEqual(75);
  });

  test('13. It will return expected remaining years to live on Mercury', () => {
    const remainingLife = newUser.remainingLifeMercury();
    expect(remainingLife).toBeTruthy();
  });

  test('14. It will calculate expected remaining years to live on Mercury based on users inputs', () => {
    const remainingLife = newUser.remainingLifeMercury();
    expect(remainingLife).toEqual(187);
  });

  test('15. It will display years as a positive number if the life expectancy is exceeded', () => {
    newUser.earthAge = 80;
    const remainingLife = newUser.remainingLifeMercury();
    expect(remainingLife).toEqual(20);
  });
  
  test('16. It will return your time is up message if current age equals expectancy', () => {
    newUser.earthAge = 75;
    const remainingLife = newUser.remainingLifeMercury();
    expect(remainingLife).toEqual('You have 0 years left, your time is up!');
  });
  
  test('17. It will calculate expected remaining years to live on Venus based on users inputs', () => {
    const remainingLife = newUser.remainingLifeVenus();
    expect(remainingLife).toEqual(72);
  });

  test('18. It will return years as a positive number if the life expectancy is exceeded', () => {
    newUser.earthAge = 80;
    const remainingLife = newUser.remainingLifeVenus();
    expect(remainingLife).toEqual(8);
  });

  test('19. It will return your time is up message if current age equals expectancy', () => {
    newUser.earthAge = 75;
    const remainingLife = newUser.remainingLifeVenus();
    expect(remainingLife).toEqual('You have 0 years left, your time is up!');
  });

  test('20. It will calculate expected remaining years to live on Mars based on users inputs', () => {
    const remainingLife = newUser.remainingLifeMars();
    expect(remainingLife).toEqual(23);
  });

  test('21. It will return years as a positive number if the life expectancy is exceeded', () => {
    newUser.earthAge = 80;
    const remainingLife = newUser.remainingLifeMars();
    expect(remainingLife).toEqual(2);
  });

  test('22. It will return your time is up message if current age equals expectancy', () => {
    newUser.earthAge = 75;
    const remainingLife = newUser.remainingLifeMars();
    expect(remainingLife).toEqual('You have 0 years left, your time is up!');
  });

  test('23. It will calculate expected remaining years to live on Jupiter based on users inputs', () => {
    const remainingLife = newUser.remainingLifeJupiter();
    expect(remainingLife).toEqual(3);
  });

  test('24. It will return years as a positive number if the life expectancy is exceeded', () => {
    newUser.earthAge = 90;
    const remainingLife = newUser.remainingLifeJupiter();
    expect(remainingLife).toEqual(1);
  });

  test('25. It will return your time is up message if current age equals expectancy', () => {
    newUser.earthAge = 75;
    const remainingLife = newUser.remainingLifeJupiter();
    expect(remainingLife).toEqual('You have 0 years left, your time is up!');
  });


})