const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    const embed = new Discord.MessageEmbed()
        .setTitle('**Virtigo City**')
        .setDescription('**We Offer These Gigs:**')
        .setColor('#00FFFF')
        .setThumbnail('https://cdn.discordapp.com/emojis/718737656707678209.png?v=1')
        .setFooter('The City Of Virtigo', 'https://cdn.discordapp.com/emojis/718737656707678209.png?v=1')
        .addField('***:one: - Modern / Flat / Minimalistic Logo -  Personal  | Business***', '*Price: Personal ~~$11.55~~ $9.55 | Business ~~19.55~~ 15.55*')
         .addField('***:two: - Cartoon / Mascot Logo***', '*Price: ~~$28.55~~ $25.55*')
         .addField('***:three: - Custom Avatar / P Profleicture***','*Price: $9.55*')
         .addField('***:four: - Youtube Pack (Profile Picture , Banner, thumbnails, etc.)***', '*Price: $50.55*')
         .addField('***:five: - Twitch / Streaming Pack (Stream Overlays)***', '*Price: $19.55*')
         .addField('***:six: - Discord Server Pack (Server Icon, Banner, etc.)***', '*Price: $5 Each*')
         .addField('***:seven: - Other***', '*Custom*')
         .addField('This is the yagpdb url', '[Click Here](https://yagpdb.xyz/manage/693473740427755520/customcommands/commands/23/)')
         .addField('    **Type The _+Number_  From The List To Proceed**', '_`example : +1`_')

           
         message.channel.send(embed);

        }

        module.exports.config = {
            name: "embed",
            description: "example of an Embed.",
            usage: "+embed",
            accessableby: "Members",
            aliases: ['sr', 'start']
        }