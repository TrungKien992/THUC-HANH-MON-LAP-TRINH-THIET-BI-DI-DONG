const helloPromise2 = new Promise<string>((resolve) => {
    setTimeout(() => resolve("Hello Async"), 2000);
});

async function runBai11(): Promise<void> {
    const message = await helloPromise2;
    console.log("Bài 11:", message);
}

runBai11();