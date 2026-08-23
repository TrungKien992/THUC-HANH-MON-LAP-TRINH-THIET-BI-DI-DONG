class Book {
    constructor(public title: string, public author: string, public year: number) {}
  }
  
  class User {
    constructor(public name: string) {}
  }
  
  class Library {
    private books: Book[] = [];
    private users: User[] = [];
  
    addBook(book: Book): void {
      this.books.push(book);
      console.log(`Added book: ${book.title}`);
    }
  
    addUser(user: User): void {
      this.users.push(user);
      console.log(`Added user: ${user.name}`);
    }
  }

  const lib = new Library();
  lib.addBook(new Book("Design Patterns", "GoF", 1994));
  lib.addUser(new User("Kien"));

  export {};