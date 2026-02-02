const shape = {
  calculateArea() {
    return 0;
  }
};

const rectangle = Object.create(shape);
rectangle.width = 5;
rectangle.height = 4;
rectangle.calculateArea = function () {
  return this.width * this.height;
};

const circle = Object.create(shape);
circle.radius = 5;
circle.calculateArea = function () {
  return Math.PI * this.radius * this.radius;
};

console.log("Rectangle area:", rectangle.calculateArea());
console.log("Circle area:", circle.calculateArea().toFixed(2));
