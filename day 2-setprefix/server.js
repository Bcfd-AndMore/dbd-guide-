const dbd = require("dbd.js")
 
const bot = new dbd.Bot({
token: "token", 
prefix: "r!"
})
 
bot.onMessage()
 
bot.command({
name: "ping", 
code: `Pong! \`$ping\` ms` 
})
