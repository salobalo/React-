// task1
const numbers = [15, 7,-3, 4, -15, -9, 10, -2, 19, 1];
const graterThanZero = numbers.filter((num) => num > 0);
console.log(graterThanZero);

const sumOfNums = graterThanZero.reduce((sum, current) => sum + current, 0);
console.log(sumOfNums);


// task2
const randomStrings  = ["a", "b", "c", "d", "e", "f", "a", "f", "g", "d", "a"];

const stringCount = randomStrings.reduce((acc, current) => {
  if (acc[current]) {
    acc[current] += 1;
  } else {
    acc[current] = 1;
  }
  return acc;
}, {});

console.log(stringCount);

// task 3
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
    this.speed = 0;
    this.motion = "The car is not moving";
  }
  check_motion() {
    this.motion =
      this.speed > 0 ? "The car is moving" : "The car is not moving";
  }

  accelerate(speed) {
    this.speed += speed;
    this.check_motion();
  }

  brake(speed) {
    this.speed = this.speed < speed ? 0 : this.speed - speed;
    this.check_motion();
  }

  emergency_brake() {
    this.speed = 0;
    this.check_motion();
  }

  status() {
    return `მანქანა ${this.brand} ${this.model} მოძრაობს ${this.speed} კმ/სთ სიჩქარით და სტატუსია  ${this.motion}.`;
  }
}
const newCar = new Car("Toyota", "Camry");
console.log(newCar.status());

newCar.accelerate(50);
console.log(newCar.status());

newCar.brake(20);
console.log(newCar.status());

newCar.emergency_brake();
console.log(newCar.status());

// task4 
function addAsync (a, b) {
  return new Promise((resolve, reject) => {
    if(typeof a === 'number' && typeof b === 'number') {
      resolve('resolve');
    } else {
      reject(new Error('Both parameters must be numbers.'));
    }
});
}

addAsync(3, 4)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });

  addAsync( 4)
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.log(error.message);
  });


