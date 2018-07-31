const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[2]) return message.reply("please ask a full question");
  let replies = ["Yes", "No", "Maybe", "I dont know", "42!", "Jesus!", "My sources say no", "My sources say yes", "I guess so...", "Concentrate and ask again!", "COCOA!"];

  let result = Math.floor((Math.random() * replies.length));
  let question = args.slice(0).join(" ");

  let ballembed = new Discord.RichEmbed()
  .setAuthor(message.author.tag, message.author.displayAvatarURL)
  .setColor("#FF9900")
  .addField("Question", question)
  .addField("Answer", replies[result]);

  message.channel.send(ballembed)
}

module.exports.help = {
  name: "8ball"
}
