export class UserService {
	static async fetchByUser(userId) {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
		return response.json();
	}
}