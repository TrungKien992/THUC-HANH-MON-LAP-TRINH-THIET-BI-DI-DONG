function downloadFile(filename: string): Promise<string> {
    console.log(`Bắt đầu tải ${filename}...`);
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`Tải xong ${filename}!`);
        }, 3000);
    });
}

async function runDownload(): Promise<void> {
    const message = await downloadFile("document.pdf");
    console.log("Bài 25:", message);
}

runDownload();