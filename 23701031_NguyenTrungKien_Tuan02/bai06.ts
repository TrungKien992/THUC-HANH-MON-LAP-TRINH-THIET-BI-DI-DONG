const p1 = new Promise<string>((resolve) => setTimeout(() => resolve("Task 1 xong"), 1000));
const p2 = new Promise<string>((resolve) => setTimeout(() => resolve("Task 2 xong"), 2000));
const p3 = new Promise<string>((resolve) => setTimeout(() => resolve("Task 3 xong"), 1500));

Promise.all([p1, p2, p3])
    .then((results) => {
        // Chờ cả 3 xong (sau khoảng 2s) mới in kết quả
        console.log("Bài 6 (Promise.all):", results);
    })
    .catch((err) => console.error("Có lỗi xảy ra:", err));