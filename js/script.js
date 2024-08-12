const terminalContent = document.getElementById('terminal-content');

const commands = [
  "$ sqlink run",
  "Reading configuration file from ./properties.json",
  "Server is running on https://localhost:3001",
  "REQUEST - Request received from XXX for table YYY",
  "RESPONSE - Response sent to XXX from table YYY",
  "REQUEST - Request received from XXX for table YYY",
  "RESPONSE - Response sent to XXX from table YYY",
  "REQUEST - Request received from XXX for table YYY",
  "RESPONSE - Response sent to XXX from table YYY",
  "REQUEST - Request received from XXX for table YYY",
  "RESPONSE - Response sent to XXX from table YYY"
];

let commandIndex = 0;
let charIndex = 0;

function typeCommand() {
  if (commandIndex === 0 && charIndex < commands[commandIndex].length) {
    terminalContent.textContent += commands[commandIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeCommand, 100);
  } else if (commandIndex === 0 && charIndex === commands[commandIndex].length) {
    commandIndex++;
    charIndex = 0;
    terminalContent.textContent += "\n";
    setTimeout(typeCommand, 2000);
  } else {
    if (commandIndex < commands.length) {
      terminalContent.textContent += commands[commandIndex] + "\n";
      commandIndex++;
      setTimeout(typeCommand, 1500);
    }
  }
}

document.addEventListener('DOMContentLoaded', typeCommand);
