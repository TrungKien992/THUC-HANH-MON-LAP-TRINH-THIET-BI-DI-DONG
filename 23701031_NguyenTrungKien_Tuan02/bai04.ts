const getRandomNumber = new Promise<number>((resolve, reject) => {
    const num = Math.random();
    // Giả sử: nếu số >= 0.5 thì thành công, < 0.5 thì báo lỗi
    if (num >= 0.5) {
        resolve(num);
    } else {
        reject(new Error(`Số quá nhỏ: ${num}`));
    }
});

getRandomNumber
    .then((num) => {
        console.log("Bài 4 thành công:", num);
    })
    .catch((err) => {
        console.error("Bài 4 thất bại:", err.message);
    });