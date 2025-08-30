import { Book } from './Book.js';
import { EBook } from './EBook.js';

//task 1
const book1 = new Book('To Kill a Mockingbird', 'Harper Lee', 1960);
const book2 = new Book('1984', 'George Orwell', 1949);

console.log('Books in paper format:');
book1.printInfo();
book2.printInfo();
console.log();

//task 2
const ebook1 = new EBook('To Kill a Mockingbird', 'Harper Lee', 1960, 'PDF');
const ebook2 = new EBook('Pride and Prejudice', 'Jane Austen', 1813, 'TXT');

console.log('Books in electronic format:');
ebook1.printInfo();
ebook2.printInfo();
console.log();

//task 3
console.log('Changed values:');

ebook1.name = 'The Great Gatsby';
ebook1.author = 'F. Scott Fitzgerald';
ebook1.year = 1925;
ebook1.fileFormat = 'DOC';

ebook1.printInfo();
console.log();

console.log('Invalid values:');

ebook1.name = 1;
ebook1.author = 1;
ebook1.year = -1;
ebook1.fileFormat = 1;

console.log();

//task 4
const books = [book1, book2, ebook1, ebook2];
const oldestBook = Book.oldestBook(books);

console.log('The oldest book:');
oldestBook.printInfo();
console.log();

//task 5
const ebookFromBook = EBook.ebookFromBook(book2, 'TXT');
console.log('Converted to EBook:');
ebookFromBook.printInfo();
