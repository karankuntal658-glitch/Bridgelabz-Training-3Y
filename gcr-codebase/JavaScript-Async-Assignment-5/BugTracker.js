
function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const apiFailed = Math.random() < 0.3;

            if (apiFailed) {
                reject("Failed to fetch bugs from API.");
            } else {
                resolve([
                    "UI glitch",
                    "API timeout",
                    "Login failure"
                ]);
            }
        }, 1000);
    });
}

getBugs()
    .then(bugs => {
        console.log("Bug List:");
        console.table(bugs);
    })
    .catch(error => {
        console.log(error);
    });
