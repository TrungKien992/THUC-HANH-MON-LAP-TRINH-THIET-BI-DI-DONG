// Thêm định nghĩa hàm step
async function step2(taskName: string, time: number): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, time));
    return `${taskName} hoàn thành`;
}
async function runInParallel(): Promise<void> {
    console.log("Bài 16: Bắt đầu song song...");
    // Khởi chạy cả 3 hàm cùng một lúc
    const promises = [
        step2("Tác vụ A", 1500),
        step2("Tác vụ B", 1000),
        step2("Tác vụ C", 2000),
    ];
    // Đợi tất cả cùng hoàn thành (mất tổng cộng 2000ms thay vì 4500ms)
    const results = await Promise.all(promises);
    console.log("Bài 16 kết quả:", results);
}
runInParallel();