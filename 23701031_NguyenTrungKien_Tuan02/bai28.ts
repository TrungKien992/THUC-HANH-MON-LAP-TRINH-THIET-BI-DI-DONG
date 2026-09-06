async function batchProcess(): Promise<void> {
    const tasks = [1, 2, 3, 4, 5].map((id) => {
        return new Promise<string>((resolve) => {
            const duration = Math.floor(Math.random() * 1500) + 500;
            setTimeout(() => resolve(`Task ${id} xử lý trong ${duration}ms`), duration);
        });
    });

    console.log("Bài 28: Đang chạy batch 5 tasks cùng lúc...");
    const results = await Promise.all(tasks);
    console.log("Bài 28 hoàn thành:", results);
}

batchProcess();