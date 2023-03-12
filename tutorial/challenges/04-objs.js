const car = {
  make: 'italia',
  model: 'frsada',
  year: 2000,
  colors: ['green', 'red', 'black'],
  hybrid: true,
  drive() {
    console.log('runrunrun');
  },
  stop() {
    console.log('fuissshh');
  },
};

console.log(car.make);
console.log(car.colors[0]);

car.drive();
car.stop();
