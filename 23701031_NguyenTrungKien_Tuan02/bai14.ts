async function multiplyByThree(num: number): Promise<number> {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Chờ 1 giây
    return num * 3;
}

// Chạy thử với số 4 -> kết quả là 12
multiplyByThree(4).then((res) => console.log("Bài 14:", res));