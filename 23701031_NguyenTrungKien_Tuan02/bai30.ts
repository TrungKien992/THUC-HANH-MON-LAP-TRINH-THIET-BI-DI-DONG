async function checkMultipleApis(): Promise<void> {
    const urls = [
        "https://jsonplaceholder.typicode.com/todos/1",      // URL hợp lệ
        "https://jsonplaceholder.typicode.com/invalid-url",  // Báo lỗi 404
        "https://jsonplaceholder.typicode.com/todos/2",      // URL hợp lệ
    ];

    const fetchPromises = urls.map(async (url) => {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Mã lỗi: ${res.status}`);
        return res.json();
    });

    const results = await Promise.allSettled(fetchPromises);

    console.log("Bài 30 trạng thái các request:");
    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            console.log(`- Request ${index + 1}: THÀNH CÔNG ->`, result.value);
        } else {
            console.error(`- Request ${index + 1}: THẤT BÀI -> Lý do:`, (result.reason as Error).message);
        }
    });
}

checkMultipleApis();