const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL
  let botembed = new Discord.RichEmbed()
  .setDescription("Bot Info")
  .setColor(0x2ecc71)
  .addField("Bot Name", bot.user.username + "#" + bot.user.discriminator)
  .setThumbnail(bicon)
  .addField("Created on", bot.user.createdAt)
  .addField("My current ping", bot.pings + "ms")
  .addField("My Owner <3", "UnlegitHax#4850 | More Information: .owner");

  return message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
