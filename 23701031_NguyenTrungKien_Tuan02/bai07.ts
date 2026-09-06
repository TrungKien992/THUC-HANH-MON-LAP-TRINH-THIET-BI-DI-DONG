const fastTask = new Promise<string>((resolve) => setTimeout(() => resolve("Nhanh nhất (500ms)"), 500));
const mediumTask = new Promise<string>((resolve) => setTimeout(() => resolve("Trung bình (1500ms)"), 1500));
const slowTask = new Promise<string>((resolve) => setTimeout(() => resolve("Chậm nhất (3000ms)"), 3000));

Promise.race([fastTask, mediumTask, slowTask])
    .then((winner) => {
        console.log("Bài 7 (Promise.race):", winner);
    });