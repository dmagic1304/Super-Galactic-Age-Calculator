export default class User {  
  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {    
    this.mercuryAge = parseInt(this.earthAge/0.24);
    return this.mercuryAge;
  }

  venusAge() {    
    this.venusAge = this.earthAge;
    return this.venusAge;
  }
}