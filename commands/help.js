const Discord = require("discord.js");
const config = require("../botconfig.json")

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setDescription("**__Moderation__**")
  .addField(".ban <User Mention> <Reason>", "Bans the mentioned User")
  .addField(".kick <User Mention> <Reason>", "Kicks the mentioned User")
  .addField(".addrole <User Mention> <Role>", "Adds the role to a user [!Don't mention the role you want to give!]")
  .addField(".removerole <User Mention> <Role>", "Removes the Role from a User [!Don't mention the role you want to remove!]")
  .addField(".report <User Mention> <Reason>", "Reports a user and sends the Report to a `#reports` Channel in the Server.")
  .addField(".tempmute <User Mention> <Time>", "Mutes a User temporarily Example: `.tempmute @Member#1234 1d` This Example mutes the User for one day.")
  .addField(".clear <Number of Messages>", "Clears messages.")
  .addField(".say <Your Arguments>", "Says your arguments")
  .setColor(0xbdc3c7);

  let funembed = new Discord.RichEmbed()
  .setDescription("**__Fun__**")
  .addField(".dog", "Sends a Dog! Woof! :dog2:")
  .addField(".gif <Search Term>", "Searches a gif on GIPHY")
  .addField(".8ball <Question>", "Answers to your question.")
  .setColor(0xbdc3c7);

  let ownerembed = new Discord.RichEmbed()
  .setDescription("**__Only for Owner__**")
  .addField(".eval", "Evals Code")
  .setFooter(`Version ${config.version} | Coded by UnlegitHax#4850`)
  .setColor(config.red)

  let otherembed = new Discord.RichEmbed()
  .setDescription("**__Other Commands__**")
  .addField(".help", "Sends this list.")
  .addField(".botinfo", "Sends Information about the Bot")
  .addField(".serverinfo", "Sends Information about the Server")
  .addField(".ping", "Sends my ping.")
  .setColor(0xbdc3c7);

  message.member.send(helpembed);
  message.member.send(funembed);
  message.member.send(otherembed);
  message.member.send(ownerembed);
  message.channel.send("Look in your DMs :wink:");
}

module.exports.help = {
  name: "help"
}
