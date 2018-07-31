const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!bUser) return message.channel.send("Can't find user!");
  let bReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You dont have Permission to do that.");
  if(bUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Cant ban him.");

  let banEmbed = new Discord.RichEmbed()
  .setDescription("~Ban~")
  .setColor("#bc0000")
  .addField("Banned User", `${bUser} with ID ${bUser.id}`)
  .addField("Banned By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Banned In", message.channel)
  .addField("Time", message.createdAt)
  .addField("Reason", bReason);

  let banchannel = message.guild.channels.find(`name`, "mod-logs");
  if(!banchannel) return message.channel.send("Can't find `mod-logs` channel.");

  message.guild.member(bUser).ban(bReason);
  banchannel.send(banEmbed);

}

module.exports.help = {
  name: "ban"
}
