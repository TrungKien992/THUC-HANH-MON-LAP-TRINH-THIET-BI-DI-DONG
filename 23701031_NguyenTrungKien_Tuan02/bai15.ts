async function step(taskName: string, time: number): Promise<string> {
    await new Promise((resolve) => setTimeout(resolve, time));
    return `${taskName} hoàn thành`;
}
async function runSequentially(): Promise<void> {
    console.log("Bài 15: Bắt đầu tuần tự...");
    // Bước 1 chạy xong mới tới Bước 2, rồi tới Bước 3
    const step1 = await step("Bước 1", 1000);
    console.log(step1);

    const step2 = await step("Bước 2", 1000);
    console.log(step2);

    const step3 = await step("Bước 3", 1000);
    console.log(step3);
}
runSequentially();