const Discord = require("discord.js")
const config = require("../botconfig.json")

module.exports.run = (bot, message, args) => {

    if (message.author.id == config.botownerid) {
        try{
            message.channel.send("**Input:**\n```" + args.join(" ") + "```\n\n**Output:**\n```" + eval(args.join("")) + "```")
            } catch(err) {
              console.error(err);
            }
        
    }
}

module.exports.help = {
    name: "eval"
}