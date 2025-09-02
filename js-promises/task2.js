//function 1
function fetchByTodo(id) {
	return fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
}

fetchByTodo(1)
	.then((response) => response.json())
	.then((data) => {
		console.log(`ToDo info:`, data);
	})
	.catch((error) => {
		console.log(`Error for Function 1: ${error.message}`);
	});

//function 2
function fetchByUser(userId) {
	return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
}

fetchByUser(1)
	.then((response) => response.json())
	.then((data) => {
		console.log(`User info:`, data);
	})
	.catch((error) => {
		console.log(`Error for Function 2: ${error.message}`);
	});

//Promise.all
Promise.all([fetchByTodo(1), fetchByUser(1)])
	.then(([todo, user]) => Promise.all([todo.json(), user.json()]))
	.then(([todo, user]) => {
		console.log('Promise.all:');
		console.log('ToDo info:', todo);
		console.log('User info:', user);
	})
	.catch((error) => {
		console.log(`Error for Promise.all:, ${error.message}`);
	});

//Promise.race
Promise.race([fetchByTodo(1), fetchByUser(1)])
	.then((response) => response.json())
	.then((data) => {
		console.log('Promise.race:', data);
	})
	.catch((error) => {
		console.log(`Error for Promise.race:, ${error.message}`);
	});
