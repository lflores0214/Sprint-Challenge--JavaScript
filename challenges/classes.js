// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMakers {
  constructor(att) {
    (this.length = att.length),
      (this.width = att.width),
      (this.height = att.height);
  }
  volume() {
    return this.length * this.width * this.height;
  }
  sa() {
    return (
      (this.length * this.width +
        this.length * this.height +
        this.width * this.height) *
      2
    );
  }
}

//stretch goal
class CubeMaker extends CuboidMaker {
  constructor(att) {
    super(att);
  }
  cubeVol() {
    return this.length * this.height * this.width;
  }
  cubeSa() {
    return (
      2 * (this.length * this.width) +
      2 * (this.length * this.height) +
      2 * (this.width * this.height)
    );
  }
}
const cube = new CubeMaker({
  length: 4,
  width: 4,
  height: 4
});
// end stretch goal
const cuboids = new CuboidMakers({
  length: 4,
  width: 5,
  height: 5
});
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboids.volume()); // 100
console.log(cuboids.sa()); // 130

console.log(cube.cubeSa());
console.log(cube.cubeVol());

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
