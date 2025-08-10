const car1 = {
    brand: 'Mercedes-Benz',
    model: 'EQS and AMG ONE',
    year: 2022
};

const car2 = {
    brand: 'Tesla',
    model: 'Tesla Semi',
    owner: 'Elon Musk'
};

const car3 = {
    ...car1,
    ...car2
};

console.log(car3);