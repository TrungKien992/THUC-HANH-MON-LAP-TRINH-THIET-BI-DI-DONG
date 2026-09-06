async function postData(): Promise<void> {
    const newPost = {
        title: "Tiêu đề bài viết mới",
        body: "Nội dung bài viết mẫu",
        userId: 1,
    };

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json; charset=UTF-8",
            },
            body: JSON.stringify(newPost),
        });

        const createdData = await response.json();
        console.log("Bài 24 tạo mới thành công:", createdData);
    } catch (error) {
        console.error("Bài 24 lỗi:", (error as Error).message);
    }
}

postData();