Promise.resolve(2)
    .then((num) => {
        const squared = num * num; // 2 * 2 = 4
        return squared;
    })
    .then((num) => {
        const doubled = num * 2; // 4 * 2 = 8
        return doubled;
    })
    .then((num) => {
        const added = num + 5; // 8 + 5 = 13
        return added;
    })
    .then((finalResult) => {
        console.log("Bài 8 kết quả:", finalResult); // In ra 13
    });