const testPromise = new Promise<string>((resolve, reject) => {
    const isSuccess = false;
    if (isSuccess) {
        resolve("Xử lý thành công!");
    } else {
        reject(new Error("Có lỗi xảy ra!"));
    }
});

testPromise
    .then((res) => console.log("Bài 10:", res))
    .catch((err) => console.error("Bài 10 lỗi:", err.message))
    .finally(() => {
        console.log("Bài 10:", "Done");
    });