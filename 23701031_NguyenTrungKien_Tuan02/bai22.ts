async function fetchMultipleTodos(): Promise<void> {
    const ids = [1, 2, 3];

    // Gọi đồng thời nhiều request
    const requests = ids.map(async (id) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        return res.json();
    });

    const results = await Promise.all(requests);
    console.log("Bài 22:", results);
}

fetchMultipleTodos();