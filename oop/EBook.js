import { Book } from './Book.js';

export class EBook extends Book {
	constructor(name, author, year, fileFormat) {
		super(name, author, year);
		this._fileFormat = fileFormat;
	}

	get fileFormat() {
		return this._fileFormat;
	}

	set fileFormat(value) {
		if (typeof value !== 'string') {
			console.log('File format must be a string.');
			return;
		}
		this._fileFormat = value;
	}

	printInfo() {
		console.log(`"${this.name}" — ${this.author}, ${this.year}. File format: ${this.fileFormat}`);
	}

	static ebookFromBook(book, fileFormat) {
		return new EBook(book.name, book.author, book.year, fileFormat);
	}
}
