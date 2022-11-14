export default class User {  
  constructor(age, averageLifeExpectancy) {
    this.earthAge = age;
    this.lifeExp = averageLifeExpectancy;
  }

  remainingLifeEarth() {
    let remainingLifeEarth = parseInt(this.lifeExp - this.earthAge)
    return remainingLifeEarth
  }

  mercuryAge() {    
    this.mercuryAge = parseInt(this.earthAge/0.24);
    return this.mercuryAge;
  }

  remainingLifeMercury() {  
    let remainingLifeMercury = parseInt(this.remainingLifeEarth()/0.24);
    return remainingLifeMercury
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