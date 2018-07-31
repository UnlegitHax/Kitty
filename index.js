const botconfig = require("./botconfig.json");
const tokenfile = require("./token.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();
let cooldown = new Set();
let cdseconds = 5;

fs.readdir("./commands", (err, files) => {

    if(err) console.log(err);

    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.")
      return;
    }

      jsfile.forEach((f, i) =>{
        let props = require(`./commands/${f}`);
        console.log(`${f} loaded!`);
        bot.commands.set(props.help.name, props);
    });

});

bot.on("ready", async () =>  {
    console.log(`${bot.user.username} is online on ${bot.guilds.size} Guilds with ${bot.users.size} Users`)
    bot.user.setActivity(`.help | ${bot.guilds.size} Guilds`, {type: "LISTENING"});
});


bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    let prefix = botconfig.prefix;
    if(!message.content.startsWith(prefix)) return;
    if(cooldown.has(message.author.id)){
      message.delete();
      return message.reply("you have to wait 5 seconds before execute Commands!")
    }
    //if(!message.member.hasPermission("ADMININSTRATOR")){
      cooldown.add(message.author.id);
    //}

    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);

    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args)

    setTimeout(() => {
      cooldown.delete(message.author.id)
    }, cdseconds * 1000)

  });

bot.login(tokenfile.token);
