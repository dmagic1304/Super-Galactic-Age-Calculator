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
    // always positive number, maybe differentiate with if statement if life exceeded
    let remainingLifeMercury;
    if (this.lifeExp > this.earthAge) {
    remainingLifeMercury = parseInt(this.remainingLifeEarth()/0.24);
    } else if (this.lifeExp < this.earthAge) {
    remainingLifeMercury = Math.abs(parseInt(this.remainingLifeEarth()/0.24));
    } else {
      remainingLifeMercury = 'You have 0 years left, your time is up!'
    }
    return remainingLifeMercury
  }

  venusAge() {    
    this.venusAge = parseInt(this.earthAge/0.62);
    return this.venusAge;
  }

  remainingLifeVenus() {
    let remainingLifeVenus;
    if (this.lifeExp > this.earthAge) {
    remainingLifeVenus = parseInt(this.remainingLifeEarth()/0.62);
    } else if (this.lifeExp < this.earthAge) {
    remainingLifeVenus = Math.abs(parseInt(this.remainingLifeEarth()/0.62));  
    }
    return remainingLifeVenus
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