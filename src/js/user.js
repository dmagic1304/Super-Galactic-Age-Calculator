export default class User {  
  constructor(age, averageLifeExpectancy) {
    this.earthAge = age;
    this.lifeExp = averageLifeExpectancy;
  }

  mercuryAge() {    
    this.mercuryAge = parseInt(this.earthAge/0.24);
    return this.mercuryAge;
  }

  remainingLiveMercury() {
    let remainingLife = 1;
    return remainingLife
  }

  venusAge() {    
    this.venusAge = parseInt(this.earthAge/0.62);
    return this.venusAge;
  }

  marsAge() {    
    this.marsAge = parseInt(this.earthAge/1.88);
    return this.marsAge;
  }

  jupiterAge() {
    this.jupiterAge = parseInt(this.earthAge/11.86);
    return this.jupiterAge;
  }
}