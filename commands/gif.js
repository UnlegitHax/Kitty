const Discord = require("discord.js")
const got = require("got")
const api = 'Zl7dq36oTk63VNBJH72oP8kxDo9rJWL9'

module.exports.run = async (bot, message) => {
    const args = message.content.split(" ").slice(1)
    if(args.length < 1) return message.reply("please add the search term")

    const res = await got(`https://api.giphy.com/v1/gifs/random?api_key=${api}&tag=${encodeURIComponent(args.join(" "))}`, {json: true})
    if(!res || !res.body || !res.body.data) return message.reply("i cant find a gif with this search term!")

    const embed = new Discord.RichEmbed()
    .setImage(res.body.data.image_url)
    .setAuthor(message.author.tag, message.author.displayAvatarURL)

    message.channel.send({embed: embed});
}

module.exports.help = {
    name: "gif"
}