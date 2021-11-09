class Golfer {
  constructor(golferInfo) {
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0
  }
  calculateAvg(par) {
    var shotCount = this.handicap + par
    return `I usually shoot a ${shotCount} on average.`
  }
  playRound(course) {
    if (course.difficulty === 'hard') {
      this.frustration += 500;
    } else {
      this.frustration += 100;
    }
  }
  hitTheRange() {
    this.confidence += 10;
  }
  marvel(course) {
    return `I love the ${course.features[0]} and ${course.features[1]} on this course!`
  }
  whatYaShoot(shoot) {
    if (shoot >=3) {
      this.frustration = 20;
      return 'Doh!';
    } else if (shoot === 0) {
      this.frustration = 10;
      return 'Booyah!'
    } else if (shoot < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    } else {
      this.frustration = 30;
      return 'Doh!'
    }
  }
}
module.exports = Golfer;
