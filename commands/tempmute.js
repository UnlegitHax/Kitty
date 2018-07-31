const Discord = require("discord.js")
const ms = require("ms")

module.exports.run = async (bot, message, args) => {

  //.tempmute @ThisIsAFreakinMember#0001 1s/m/h/d

  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("i couldn't find User.");
  if(tomute.hasPermission("ADMINISTRATOR")) return message.reply("i couldn't mute him.");
  let muterole = message.guild.roles.find(`name`, "Muted")
  //start of create Role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
          SPEAK: false,
          USE_VAD: false
        });
      });
    }catch(e){
      console.log(e.stack)
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("you didn't specified a time!");

  await(tomute.addRole(muterole.id));
  message.reply(`:white_check_mark: Succesfully muted <@${tomute.id}> for ${ms(ms(mutetime))}.`)

  setTimeout(function(){
    tomute.removeRole(muterole.id)
    message.channel.send(`<@${tomute.id}> has been unmuted.`);
  }, ms(mutetime));


  //end of module
}

module.exports.help = {
  name: "tempmute"
}
