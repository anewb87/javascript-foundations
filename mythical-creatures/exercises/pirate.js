// class Pirate {
//   constructor (name, job) {
//     this.name = name;
//     if (job === undefined){
//       this.job = 'scallywag';
//     } else {
//       this.job = job;
//     }
//     //this.job = 'scallywag' || pirate.job (tyring to get this to run with new pro tip)
//     this.cursed = false;
//     this.booty = 0;
//     this.cursed = false;
//   }
//   robShip() {
//     if (this.booty < 500) {
//       this.booty += 100;
//       this.cursed = true;
//     }
//     if (this.booty === 500) {
//       return 'ARG! I\'ve been cursed!'
//     }
//     return 'YAARRR!';
//   }
//   liftCurse() {
//     if (this.booty < 500) {
//       return 'You don\'t need to lift a curse!'
//     }
//     this.booty -= 300;
//     this.cursed = false;
//     return 'Your curse has been lifted!';
//     }
//   }


class Pirate {
  constructor(name, job) {
    this.name = name;
    this.cursed = false;
    this.booty = 0
    if (job) {
      this.job = job
    } else {
      this.job = 'scallywag'
    }
  }

  robShip() {
    if (this.booty < 500) {
      this.booty += 100;
      return "YAARRR!";
    } else if (this.booty >= 500) {
      this.cursed = true;
      return "ARG! I've been cursed!"
    }
  }

  liftCurse() {
    if (this.booty >= 500) {
      this.booty -= 300;
      this.cursed = false;
      return "Your curse has been lifted!"
    } else {
      return "You don't need to lift a curse!"
    }
  }
}

module.exports = Pirate;
