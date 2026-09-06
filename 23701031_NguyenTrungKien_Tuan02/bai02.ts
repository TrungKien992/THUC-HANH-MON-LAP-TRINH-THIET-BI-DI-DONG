function getNumberTen(): Promise<number> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(10);
        }, 1000);
    });
}

getNumberTen().then((data) => console.log("Bài 2:", data));