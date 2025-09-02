//function 1
async function fetchByTodo(id) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
	const data = await response.json();
	return data;
}

async function runTodo() {
	try {
		const todo = await fetchByTodo(1);
		console.log('ToDo info:', todo);
	} catch (error) {
		console.log(`Error for Function 1: ${error.message}`);
	}
}

runTodo();

//function 2
async function fetchByUser(userId) {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
	const data = await response.json();
	return data;
}

async function runUser() {
	try {
		const user = await fetchByUser(1);
		console.log('User info:', user);
	} catch (error) {
		console.log(`Error for Function 2: ${error.message}`);
	}
}

runUser();

//Promise.all & Promise.race
async function runPromises() {
	try {
		const [todo, user] = await Promise.all([fetchByTodo(1), fetchByUser(1)]);
		console.log('Promise.all:');
		console.log('ToDo info:', todo);
		console.log('User info:', user);

		const first = await Promise.race([fetchByTodo(1), fetchByUser(1)]);
		console.log('Promise.race:', first);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}

runPromises();