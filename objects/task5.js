const users = [
	{ name: 'Natalia', email: 'natalia@gmail.com', age: 28 },
	{ name: 'Alex', email: 'alex@gmail.com', age: 30 },
	{ name: 'Jane', email: 'jane@gmail.com', age: 25 },
];

for (const { name, email, age } of users) {
	console.log(`Name: ${name}`);
	console.log(`Email: ${email}`);
	console.log(`Age: ${age}`);
	console.log(` `);
}
