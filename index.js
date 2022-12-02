const myInformation = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text: `Hello, I'm ${myInformation.myName} from ${myInformation.myCampus} campus !`,
    e: "oO",
    T: "U "
}));
