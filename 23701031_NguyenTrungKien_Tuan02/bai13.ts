function faultyTask(): Promise<string> {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Lỗi kết nối máy chủ!")), 1000);
    });
}

async function handleErrors(): Promise<void> {
    try {
        const data = await faultyTask();
        console.log("Dữ liệu:", data);
    } catch (error) {
        // Bắt lỗi khi Promise bị reject
        console.error("Bài 13 bắt lỗi:", (error as Error).message);
    }
}

handleErrors();