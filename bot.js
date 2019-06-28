const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("594305446370869266")
setInterval(function() {
channel.send(`Ahmed Ahmed Ahmed Ahmed Ahmed`);
}, 30)
})

client.login(process.env.BOT_TOKEN);