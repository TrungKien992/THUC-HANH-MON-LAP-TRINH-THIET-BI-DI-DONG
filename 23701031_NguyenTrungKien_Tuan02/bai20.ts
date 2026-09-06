async function fetchUserWithTimeout(id: number, delayMs: number): Promise<User> {
    // Giả lập API với thời gian phản hồi tùy biến
    const apiCall = new Promise<User>((resolve) => {
        setTimeout(() => resolve({ id, name: `User_${id}` }), delayMs);
    });

    // Tạo Promise tự hủy sau 2 giây
    const timeout = new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Request timeout sau 2 giây!")), 2000);
    });

    // Dùng Promise.race để tranh chấp giữa API và bộ đếm thời gian
    return await Promise.race([apiCall, timeout]);
}

// Chạy thử với API phản hồi chậm mất 3000ms (sẽ dính lỗi timeout)
async function testTimeout(): Promise<void> {
    try {
        const user = await fetchUserWithTimeout(1, 3000);
        console.log("Bài 20 thành công:", user);
    } catch (error) {
        console.error("Bài 20 bắt lỗi:", (error as Error).message);
    }
}

testTimeout();