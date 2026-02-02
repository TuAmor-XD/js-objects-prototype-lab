const vehicle = {
  wheels: 4,
  describe() {
    return `This vehicle has ${this.wheels} wheels`;
  }
};

const car = Object.create(vehicle);
car.make = "Toyota";
car.model = "Camry";
car.year = 2024;

console.log(Object.hasOwn(car, "make"));
console.log(Object.hasOwn(car, "wheels"));
console.log(car.wheels);
console.log(car.describe());
