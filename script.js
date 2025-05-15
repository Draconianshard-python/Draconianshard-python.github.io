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
            output(`<p>${Object.keys(fileSystem[currentDir]).join(" ") || "Empty"}</p>`);
            break;
        case "mkdir":
            if (args[1]) fileSystem[currentDir][args[1]] = {};
            break;
        case "touch":
            if (args[1]) fileSystem[currentDir][args[1]] = "File";
            break;
        case "rm":
            if (args[1] && fileSystem[currentDir][args[1]]) delete fileSystem[currentDir][args[1]];
            break;
        case "cat":
            if (args[1] && fileSystem[currentDir][args[1]] === "File") output(`<p>Contents of ${args[1]}: (empty file)</p>`);
            else output(`<p>File not found</p>`);
            break;
        case "pwd":
            output(`<p>${currentDir}</p>`);
            break;
        case "clear":
            outputDiv.innerHTML = "";
            break;
        case "date":
            output(`<p>${new Date().toLocaleString()}</p>`);
            break;
        case "curl":
            if (args[1]) fetch(args[1])
                .then(response => response.text())
                .then(text => output(`<pre>${text.substring(0, 500)}...</pre>`))
                .catch(() => output("<p>Error fetching URL</p>"));
            break;
        case "help":
            output(`<p>Commands: ls, mkdir [name], touch [name], rm [name], cat [name], cd [name], pwd, clear, date, echo [text], curl [URL]</p>`);
            break;
        default:
            output(`<p>Command not recognized. Type 'help' for options.</p>`);
    }
}

function output(message) {
    document.getElementById("output").innerHTML += message;
}
