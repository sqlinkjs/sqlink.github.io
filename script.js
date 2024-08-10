const terminalContent = document.getElementById('terminal-content');

const commands = [
  "$ npm install sqlink -g",
  "$ sqlink run",
  "npm install",
  "npm run dev"
];

let commandIndex = 0;
let charIndex = 0;

function typeCommand() {
  if (charIndex < commands[commandIndex].length) {
    terminalContent.textContent += commands[commandIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeCommand, 100);
  } else {
    if (commandIndex < commands.length - 1) {
      terminalContent.textContent += "\n";
      commandIndex++;
      charIndex = 0;
      setTimeout(typeCommand, 500); 
    }
  }
}

document.addEventListener('DOMContentLoaded', typeCommand);
