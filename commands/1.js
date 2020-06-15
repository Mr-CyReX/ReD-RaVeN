const { User } = require("discord.js")

module.exports.run = async (bot , message , args) => {
      message.reply('Are You Sure You Want To Proceed!? **Type** ***`React (yes👍)/(no👎)`***....')
      message.react('👍').then(() => message.react('👎'));

      const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
      };
      
      message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then(collected => {
              const reaction = collected.first();
      
              if (reaction.emoji.name === '👍') {
                  message.reply('**_give a brief description of the design that you are expecting from us `(must include Size/Ratio)` and we will get your request done as soon as possible..._\n\n Thank You For Choosing Our Service :blue_heart:**');
              } else {
                  message.reply('**Thank You For Choosing Our Service :blue_heart:...**\n\n ***`if u wana use another category u can choose another number and type it down`***');
              }
          })
          .catch(collected => {
              message.reply('you reacted with neither a thumbs up, nor a thumbs down.');
          });
}
 module.exports.config = {
    name: "1",
    description: "Question Quote",
    accessableby: "Members",
    aliases: [] 
}
