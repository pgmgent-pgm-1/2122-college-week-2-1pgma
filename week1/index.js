const os = require("os");

let firstName = "Michael";
let lastName = "Vanderpoorten";

// Dit is het bericht dat we tonen
const message = `====================
    Name is ${firstName} ${lastName}
    ====================
    Platform: ${os.platform()}
    Release: ${os.release()}
    Hostname: ${os.hostname()}
    ====================
`;

// print message
console.log(message);
