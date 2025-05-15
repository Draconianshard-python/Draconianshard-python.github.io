const fileSystem = { "/": {} };
let currentDir = "/";

document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const input = event.target.value.trim();
        event.target.value = "";
        processCommand(input);
    }
});

function processCommand(command) {
    const outputDiv = document.getElementById("output");
    const args = command.split(" ");
    const cmd = args[0];

    switch (cmd) {
        case "ls":
            outputDiv.innerHTML += `<p>${Object.keys(fileSystem[currentDir]).join(" ") || "Empty"}</p>`;
            break;
        case "mkdir":
            if (args[1]) fileSystem[currentDir][args[1]] = {};
            break;
        case "touch":
            if (args[1]) fileSystem[currentDir][args[1]] = "File";
            break;
        case "cd":
            if (args[1] && fileSystem[currentDir][args[1]]) currentDir += "/" + args[1];
            else outputDiv.innerHTML += `<p>Directory not found</p>`;
            break;
        case "echo":
            outputDiv.innerHTML += `<p>${args.slice(1).join(" ")}</p>`;
            break;
        case "help":
            outputDiv.innerHTML += `<p>Commands: ls, mkdir [name], touch [name], cd [name], echo [text]</p>`;
            break;
        default:
            outputDiv.innerHTML += `<p>Command not recognized. Type 'help' for options.</p>`;
    }
}
