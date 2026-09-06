interface User {
    id: number;
    name: string;
}

async function fetchUser(id: number): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User_${id}` };
}

fetchUser(101).then((user) => console.log("Bài 18:", user));