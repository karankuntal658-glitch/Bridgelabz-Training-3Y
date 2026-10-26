
function deployServer(server, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(server + " deployment failed!");
            } else {
                resolve(server + " deployment completed");
            }
        }, delay);
    });
}

const serverA = deployServer("Server A", 2000);
const serverB = deployServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch(error => {
        console.log("Deployment error:", error);
    });

Promise.race([
    deployServer("Server A", 2000),
    deployServer("Server B", 3000)
])
    .then(result => {
        console.log("Fastest response:", result);
    })
    .catch(error => {
        console.log("Race error:", error);
    });
