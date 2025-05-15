window.addEventListener("deviceorientation", (event) => {
    document.getElementById("alpha").textContent = event.alpha.toFixed(2);
    document.getElementById("beta").textContent = event.beta.toFixed(2);
    document.getElementById("gamma").textContent = event.gamma.toFixed(2);
});

