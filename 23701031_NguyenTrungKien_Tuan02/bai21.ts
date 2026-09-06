async function fetchTodo(): Promise<void> {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
        const data = await response.json();
        console.log("Bài 21:", data);
    } catch (error) {
        console.error("Bài 21 lỗi:", (error as Error).message);
    }
}

fetchTodo();