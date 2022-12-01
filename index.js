const userInfo = require('./information');

var cowsay = require("cowsay");

console.log(cowsay.say({
    text : userInfo.userName + ' ' + userInfo.campus,
    e : "oO",
    T : "U "
}));