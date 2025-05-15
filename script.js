// Request permission to access motion sensors
if (typeof DeviceOrientationEvent.requestPermission === "function") {
    document.body.addEventListener("click", () => {
        DeviceOrientationEvent.requestPermission()
            .then((permissionState) => {
                if (permissionState === "granted") {
                    startGyroscopeTracking();
                } else {
                    alert("Permission denied. Gyroscope data will not be available.");
                }
            })
            .catch(console.error);
    });
} else {
    startGyroscopeTracking();
}

// Function to start tracking gyroscope data
function startGyroscopeTracking() {
    window.addEventListener("deviceorientation", (event) => {
        document.getElementById("alpha").textContent = event.alpha.toFixed(2);
        document.getElementById("beta").textContent = event.beta.toFixed(2);
        document.getElementById("gamma").textContent = event.gamma.toFixed(2);
    });
}
