export class TodoService {
	static async fetchByTodo(id) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
		return response.json();
	}
}