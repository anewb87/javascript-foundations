// class Dragon {
//   constructor (name, rider, counter) {
//     this.name = name;
//     this.rider = rider;
//     this.hungry = true;
//     this.counter = 0;
//   }
//   greet() {
//     return `Hi, ${this.rider}!`;
//   }
//   eat() {
//     this.counter = this.counter + 1;
//     if (this.counter >= 3) {
//       this.hungry = false;
//     }
//   }
// }



class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.hungerCounter = 0
  }
  greet() {
    return `Hi, ${this.rider}!`
  }
  eat() {
    this.hungerCounter++
    if (this.hungerCounter >= 3) {
      this.hungry = false
    }
  }
}

module.exports = Dragon;
