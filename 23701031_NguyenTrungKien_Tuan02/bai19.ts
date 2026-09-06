// Thêm interface User và hàm fetchUser từ bài 18
interface User {
    id: number;
    name: string;
}

async function fetchUser1(id: number): Promise<User> {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return { id, name: `User_${id}` };
}

async function fetchUsers(ids: number[]): Promise<User[]> {
    // Chạy song song tất cả các request lấy thông tin user
    const userPromises = ids.map((id) => fetchUser1(id));
    return await Promise.all(userPromises);
}

fetchUsers([1, 2, 3]).then((users) => {
    console.log("Bài 19 danh sách users:", users);
});