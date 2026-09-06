async function iteratePromises(): Promise<void> {
    const tasks = [
        new Promise<string>((resolve) => setTimeout(() => resolve("Dữ liệu 1"), 1000)),
        new Promise<string>((resolve) => setTimeout(() => resolve("Dữ liệu 2"), 500)),
        new Promise<string>((resolve) => setTimeout(() => resolve("Dữ liệu 3"), 1500)),
    ];

    console.log("Bài 17: Bắt đầu duyệt for await...of");
    for await (const result of tasks) {
        // Lần lượt giải quyết từng item theo thứ tự của mảng
        console.log("Bài 17 nhận được:", result);
    }
}

iteratePromises();