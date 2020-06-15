const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is Now Online`)
    bot.user.setActivity("+help\\Code Red", {type: ""});
}