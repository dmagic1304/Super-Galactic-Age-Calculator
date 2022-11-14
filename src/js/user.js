export default class User {  
  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {    
    this.mercuryAge = parseInt(this.earthAge/0.24);
    return this.mercuryAge;
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