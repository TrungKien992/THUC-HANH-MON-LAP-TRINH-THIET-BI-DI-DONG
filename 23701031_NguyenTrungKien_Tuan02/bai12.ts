function simulateTask2(time: number): Promise<string> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Task done");
        }, time);
    });
}

async function runTask(): Promise<void> {
    const result = await simulateTask2(2000);
    console.log("Bài 12", result);
}

runTask();