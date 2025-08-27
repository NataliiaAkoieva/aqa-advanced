const person = {
    firstName: 'Natalia',
    lastName: 'Akoieva',
    age: 28
};

person.email = 'natalia@gmail.com';

delete person.age;

console.log('Personal data:', person);