
function deliveryStep(stepName, message) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 1000) + 1000;

        setTimeout(() => {
            if (Math.random() < 0.2) {
                reject(new Error(stepName + " failed"));
            } else {
                console.log(message);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        await deliveryStep("takeOrder", "Step 1: Order taken");
        await deliveryStep("prepare", "Step 2: Food prepared");
        await deliveryStep("pack", "Step 3: Package ready");
        await deliveryStep("dispatch", "Step 4: Out for delivery");
        await deliveryStep("deliver", "Delivery completed!");

    } catch (error) {
        console.log("Pipeline failed!");
        console.log("Reason:", error.message);
    }
}

runPipeline();

// Each delivery step returns a Promise.
// The random delay is between 1 and 2 seconds.
// await pauses this async function until the current step settles.
// If a step rejects, control moves to catch and later steps are skipped.
// The event loop can process other tasks while each timer is waiting.
