const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

  let ownerembed = new Discord.RichEmbed()
  .setColor("#3498db")
  .setThumbnail("https://cdn.discordapp.com/avatars/346680223082741770/d7677c4d269c73fc9ed0b05d15f3c71c.png")
  .addField("YouTube", "http://unlgt.ml/youtube")
  .addField("Twitter", "https://twitter.com/UnleqitHax")
  .addField("Discord Mention", "<@346680223082741770>");

  message.channel.send(ownerembed)
}

module.exports.help = {
  name: "owner"
}
