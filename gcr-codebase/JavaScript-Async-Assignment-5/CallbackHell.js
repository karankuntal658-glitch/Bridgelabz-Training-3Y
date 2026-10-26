
function design(callback) {
    setTimeout(() => {
        console.log("Design completed");
        callback();
    }, 1000);
}

function build(callback) {
    setTimeout(() => {
        console.log("Build completed");
        callback();
    }, 1000);
}

function test(callback) {
    setTimeout(() => {
        console.log("Testing completed");
        callback();
    }, 1000);
}

function deploy(callback) {
    setTimeout(() => {
        console.log("Deployment completed");
        callback();
    }, 1000);
}

function celebrate() {
    setTimeout(() => {
        console.log("Celebration time!");
    }, 1000);
}

console.log("Callback Hell:");

design(() => {
    build(() => {
        test(() => {
            deploy(() => {
                celebrate();
            });
        });
    });
});

// Async/await version
function runStage(stage) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(stage + " completed");
            resolve();
        }, 1000);
    });
}

async function runPipeline() {
    console.log("Async/Await Pipeline:");

    await runStage("Design");
    await runStage("Build");
    await runStage("Test");
    await runStage("Deploy");
    await runStage("Celebrate");

    console.log("Pipeline finished!");
}

runPipeline();

// Async/await makes asynchronous code easier to read
// because each step looks like a normal sequential statement.
