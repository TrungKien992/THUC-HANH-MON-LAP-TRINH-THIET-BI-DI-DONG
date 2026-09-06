function simulateTask(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

// Ví dụ chạy thử với 1.5 giây
simulateTask(5000).then((res) => console.log("Bài 5:", res));