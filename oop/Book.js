export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    set name(value) {
        if (typeof value !== "string") {
            console.log('Name must be a string.');
            return;
        }
        this._name = value;
    }

    get author() {
        return this._author;
    }

    set author(value) {
        if (typeof value !== "string") {
            console.log('Author must be a string.');
            return;
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }

    set year(value) {
        if (value < 0) {
            console.log('Year must be greater than zero.');
            return;
        }
        this._year = value;
    }

    printInfo() {
        console.log(`"${this.name}" — ${this.author}, ${this.year}.`);
    }

    static oldestBook(books) {
        return books.reduce((oldest, current) =>
            current.year < oldest.year ? current : oldest
        );
    }
}