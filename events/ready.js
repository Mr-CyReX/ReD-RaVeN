const Discord = require("discord.js")

module.exports = bot => { 
    console.log(`${bot.user.username} is now online`)
    bot.user.setActivity("Code Red", {type: ""});
}