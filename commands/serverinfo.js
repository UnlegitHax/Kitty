const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let sicon = message.guild.iconURL
  let serverembed = new Discord.RichEmbed()
  .setDescription("Server Info")
  .setColor(0x2ecc71)
  .setThumbnail(sicon)
  .addField("Server Name", message.guild.name)
  .addField("Created on", message.guild.createdAt)
  .addField("You joined", message.member.joinedAt)
  .addField("Total Members", message.guild.memberCount)
  .addField("Region", message.guild.region)
  .addField("Owner", message.guild.owner)
  .addField("ID", message.guild.id)

  return message.channel.send(serverembed);
}

module.exports.help = {
  name: "serverinfo"
}
