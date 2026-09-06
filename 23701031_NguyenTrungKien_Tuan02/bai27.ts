async function fetchWithRetry<T>(url: string, retries: number): Promise<T> {
    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            console.log(`Đang thử gọi API lần ${attempt}...`);
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return (await response.json()) as T;
        } catch (error) {
            if (attempt === retries) {
                throw new Error(`Thất bại sau ${retries} lần thử: ${(error as Error).message}`);
            }
            // Đợi 1 giây trước khi thử lại
            await new Promise((resolve) => setTimeout(resolve, 1000));
        }
    }
    throw new Error("Không thể thực hiện request.");
}
// Chạy thử với URL sai để xem cơ chế retry hoạt động
async function testRetry(): Promise<void> {
    try {
        const data = await fetchWithRetry("https://invalid-url-domain-12345.com/api", 3);
        console.log(data);
    } catch (err) {
        console.error("Bài 27:", (err as Error).message);
    }
}
testRetry();