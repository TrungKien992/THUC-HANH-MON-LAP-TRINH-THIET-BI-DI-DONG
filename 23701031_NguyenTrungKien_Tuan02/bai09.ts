function filterEvenNumbers(arr: number[]): Promise<number[]> {
    return new Promise((resolve) => {
        setTimeout(() => {
            const evens = arr.filter((n) => n % 2 === 0);
            resolve(evens);
        }, 1000);
    });
}

// Chạy thử với một mảng số nguyên
filterEvenNumbers([1, 2, 3, 4, 5, 6, 7, 11, 18.1, 10]).then((evens) => {
    console.log("Bài 9 (Các số chẵn):", evens);
});