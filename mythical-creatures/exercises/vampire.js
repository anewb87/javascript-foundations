// class Vampire {
//   constructor (name, pet) {
//     this.name = name;
//     if (pet === undefined) {
//       this.pet = 'bat';
//     } else {
//       this.pet = pet;
//     }
//     this.thirsty = true;
//     this.counter = 0;
//     this.ouncesDrank = 0;
//   }
//   drink() {
//     this.counter = this.counter + 1;
//     if (this.counter >= 1) {
//       this.thirsty = false;
//     }
//     this.ouncesDrank = this.ouncesDrank + 10;
//     if (this.counter > 5) {
//       return "I'm too full to drink anymore!"
//     }
//   }
// }

class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.thirsty = true
    this.ouncesDrank = 0
    if (pet) {
      this.pet = pet;
    } else {
      this.pet = 'bat'
    }
  }
  drink() {
    this.thirsty = false
    if (this.ouncesDrank <= 50) {
      this.ouncesDrank +=10
    }
    if (this.ouncesDrank >= 50) {
      return "I'm too full to drink anymore!"
    }
  }
}

module.exports = Vampire;
