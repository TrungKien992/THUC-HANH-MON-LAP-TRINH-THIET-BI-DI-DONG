class Repository<T> {
    private items: T[] = [];
  
    add(item: T): void {
      this.items.push(item);
    }
  
    getAll(): T[] {
      return [...this.items];
    }
  }

  interface UserData { id: number; username: string; }
  const userRepo = new Repository<UserData>();
  userRepo.add({ id: 1, username: "admin" });
  userRepo.add({ id: 2, username: "kiennt" });
  
  console.log(userRepo.getAll());

  export {};