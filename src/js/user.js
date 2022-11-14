export default class User {  
  constructor(age) {
    this.earthAge = age;
  }

  mercuryAge() {    
    this.mercuryAge = this.earthAge/0.24;
  }
}