export {};

interface Animal {
    name: string;
    sound(): void;
  }

  const cat: Animal = {
    name: "Kitty",
    sound: () => console.log("Meow Meow")
  };

  console.log(cat.name);
  cat.sound();