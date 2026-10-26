
function loadProfile() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Profile failed");
            } else {
                resolve("Profile Loaded");
            }
        }, 2000);
    });
}

function loadPosts() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Posts failed");
            } else {
                resolve("Posts Loaded");
            }
        }, 1500);
    });
}

function loadMessages() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.3) {
                reject("Messages failed");
            } else {
                resolve("Messages Loaded");
            }
        }, 1000);
    });
}

async function loadDashboard() {
    const startTime = Date.now();

    const results = await Promise.allSettled([
        loadProfile(),
        loadPosts(),
        loadMessages()
    ]);

    const names = ["Profile", "Posts", "Messages"];

    for (let i = 0; i < results.length; i++) {
        if (results[i].status === "fulfilled") {
            console.log(names[i] + ": Success - " + results[i].value);
        } else {
            console.log(names[i] + ": Failed - " + results[i].reason);
        }
    }

    const endTime = Date.now();
    console.log("Total time:", (endTime - startTime) / 1000, "seconds");
}

loadDashboard();
