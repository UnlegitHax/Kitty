const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send("Can't find user!");
  let kReason = args.join(" ").slice(22);
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You dont have permission to do that!");
  if(kUser.hasPermission("ADMINISTRATOR")) return message.channel.send("Cant kick him.");

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("~Kick~")
  .setColor("#e56b00")
  .addField("Kicked User", `${kUser} with ID ${kUser.id}`)
  .addField("Kicked By", `<@${message.author.id}> with ID ${message.author.id}`)
  .addField("Kicked In", message.channel)
  .addField("Tiime", message.createdAt)
  .addField("Reason", kReason);

  let kickChannel = message.guild.channels.find(`name`, "mod-logs");
  if(!kickChannel) return message.channel.send("Can't find `mod-logs` channel. Create one and retry!");

  message.guild.member(kUser).kick(kReason);
  kickChannel.send(kickEmbed);

}

module.exports.help = {
  name: "kick"
}
