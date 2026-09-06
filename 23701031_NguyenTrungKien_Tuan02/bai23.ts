interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
}

async function getIncompleteTodos(): Promise<void> {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const todos: Todo[] = await res.json();

        // Lọc các todo chưa xong
        const incomplete = todos.filter((todo) => !todo.completed);
        console.log(`Bài 23: Có ${incomplete.length} việc chưa hoàn thành. Ví dụ 3 việc đầu:`);
        console.log(incomplete.slice(0, 3));
    } catch (error) {
        console.error("Bài 23 lỗi:", (error as Error).message);
    }
}

getIncompleteTodos();