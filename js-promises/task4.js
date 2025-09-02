import { TodoService } from './todoService.js';
import { UserService } from './userService.js';

async function runTodo() {
	try {
		const todo = await TodoService.fetchByTodo(1);
		console.log('ToDo info:', todo);
	} catch (error) {
		console.log(`Error for Function 1: ${error.message}`);
	}
}

async function runUser() {
	try {
		const user = await UserService.fetchByUser(1);
		console.log('User info:', user);
	} catch (error) {
		console.log(`Error for Function 2: ${error.message}`);
	}
}

async function runPromises() {
	try {
		const [todo, user] = await Promise.all([TodoService.fetchByTodo(1), UserService.fetchByUser(1)]);

		console.log('Promise.all:');
		console.log('ToDo info:', todo);
		console.log('User info:', user);

		const first = await Promise.race([TodoService.fetchByTodo(1), UserService.fetchByUser(1)]);
		console.log('Promise.race:', first);
	} catch (error) {
		console.log(`Error: ${error.message}`);
	}
}

runTodo();
runUser();
runPromises();