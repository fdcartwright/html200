let cars = ['Honda', 'Jeep', 'Lexus', 'Toyota', 'Dodge'];
console.log(cars);

cars.push('Chevy');
console.log(cars);

cars.splice(2,1);
console.log(cars);

let carsList = cars.join(', ');
console.log(carsList);