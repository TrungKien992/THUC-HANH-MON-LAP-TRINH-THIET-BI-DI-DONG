type Task = () => Promise<string>;

async function queueProcess(tasks: Task[]): Promise<void> {
    console.log("Bài 29: Bắt đầu xử lý hàng đợi tuần tự...");
    for (let i = 0; i < tasks.length; i++) {
        const result = await tasks[i](); // Chờ task trước hoàn tất mới tới task sau
        console.log(`[Queue] Task ${i + 1}: ${result}`);
    }
}

// Tạo danh sách 3 task mô phỏng
const taskList: Task[] = [
    () => new Promise((resolve) => setTimeout(() => resolve("Xong tác vụ 1"), 1000)),
    () => new Promise((resolve) => setTimeout(() => resolve("Xong tác vụ 2"), 1500)),
    () => new Promise((resolve) => setTimeout(() => resolve("Xong tác vụ 3"), 500)),
];

queueProcess(taskList);