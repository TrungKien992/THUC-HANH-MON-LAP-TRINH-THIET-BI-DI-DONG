const delay = (ms: number): Promise<void> =>
    new Promise((resolve) => setTimeout(resolve, ms));

async function waitFiveSeconds(): Promise<void> {
    console.log("Bài 26: Bắt đầu chờ 5 giây...");
    await delay(5000);
    console.log("Bài 26: Đã đợi đủ 5 giây!");
}

waitFiveSeconds();