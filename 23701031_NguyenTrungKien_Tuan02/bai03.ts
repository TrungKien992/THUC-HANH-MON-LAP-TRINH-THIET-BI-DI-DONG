function getErrorPromise(): Promise<never> {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error("Something went wrong"));
        }, 1000);
    });
}

getErrorPromise().catch((err) => console.error("Bài 3 lỗi:", err.message));